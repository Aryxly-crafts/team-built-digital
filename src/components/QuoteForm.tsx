import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const EMAIL = "aryxly@gmail.com";

const businessTypes = [
  "Car dealership",
  "Restaurant / cafe",
  "Salon / spa",
  "Photography / videography",
  "Coaching institute",
  "Retail shop",
  "Other",
];

const budgets = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000+",
  "Not sure yet",
];

const timelines = ["Within a week", "2–4 weeks", "1–3 months", "Just exploring"];

type Fields = {
  name: string;
  businessType: string;
  budget: string;
  timeline: string;
  details: string;
};

const empty: Fields = {
  name: "",
  businessType: "",
  budget: "",
  timeline: "",
  details: "",
};

function validate(v: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (v.name.trim().length < 2) e.name = "Please tell us your name.";
  if (!v.businessType) e.businessType = "Pick the closest business type.";
  if (!v.budget) e.budget = "Pick a rough budget range.";
  if (!v.timeline) e.timeline = "When would you like this live?";
  return e;
}

const fieldClass =
  "w-full rounded-sm border border-border bg-surface px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 hover:border-primary/60 focus:border-primary focus:ring-1 focus:ring-primary";

export function QuoteForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Fields) => (v: string) => {
    setValues((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      trackEvent("Quote Form Invalid", { fields: Object.keys(found).join(",") });
      return;
    }

    const body = [
      `Name: ${values.name}`,
      `Business type: ${values.businessType}`,
      `Budget: ${values.budget}`,
      `Timeline: ${values.timeline}`,
      "",
      "Details:",
      values.details.trim() || "(none)",
    ].join("\n");

    trackEvent("Quote Request", {
      businessType: values.businessType,
      budget: values.budget,
      timeline: values.timeline,
    });
    setSent(true);
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Quote request — ${values.name} (${values.businessType})`,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="q-name" className="label-mono">
          Your name
        </label>
        <input
          id="q-name"
          value={values.name}
          onChange={(e) => set("name")(e.target.value)}
          placeholder="Akshith Reddy"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "q-name-err" : undefined}
          className={`mt-2 ${fieldClass}`}
        />
        {errors.name && (
          <p id="q-name-err" className="mt-1.5 font-mono text-xs text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      {(
        [
          ["businessType", "Business type", businessTypes],
          ["budget", "Rough budget", budgets],
          ["timeline", "Timeline", timelines],
        ] as const
      ).map(([key, label, options]) => (
        <div key={key}>
          <label htmlFor={`q-${key}`} className="label-mono">
            {label}
          </label>
          <select
            id={`q-${key}`}
            value={values[key]}
            onChange={(e) => set(key)(e.target.value)}
            aria-invalid={!!errors[key]}
            aria-describedby={errors[key] ? `q-${key}-err` : undefined}
            className={`mt-2 ${fieldClass}`}
          >
            <option value="">Select…</option>
            {options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          {errors[key] && (
            <p id={`q-${key}-err`} className="mt-1.5 font-mono text-xs text-destructive">
              {errors[key]}
            </p>
          )}
        </div>
      ))}

      <div>
        <label htmlFor="q-details" className="label-mono">
          Anything else (optional)
        </label>
        <textarea
          id="q-details"
          rows={3}
          value={values.details}
          onChange={(e) => set("details")(e.target.value)}
          placeholder="What's not working on your current site?"
          className={`mt-2 resize-y ${fieldClass}`}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-sm bg-primary px-6 py-3.5 font-mono text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lift"
      >
        Send quote request
      </button>

      <p aria-live="polite" className="text-xs leading-relaxed text-muted-foreground">
        {sent
          ? `Your email app should be opening with the details filled in — just hit send. If it didn't, write to ${EMAIL}.`
          : `This opens your email app with the details filled in, addressed to ${EMAIL}.`}
      </p>
    </form>
  );
}
