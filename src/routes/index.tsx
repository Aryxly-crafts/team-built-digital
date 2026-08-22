import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { QuoteForm } from "@/components/QuoteForm";
import { trackCta, trackEvent } from "@/lib/analytics";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arylxy — Full-Stack Web Development Agency in Hyderabad" },
      {
        name: "description",
        content:
          "Arylxy builds websites, admin dashboards, WhatsApp & Telegram automation and SEO for local businesses in Hyderabad. One two-person team, no hand-offs.",
      },
      {
        property: "og:title",
        content: "Arylxy — Full-Stack Web Development Agency in Hyderabad",
      },
      {
        property: "og:description",
        content:
          "Websites with real backends, admin dashboards, automation and SEO for businesses across Telangana and Andhra Pradesh.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Arylxy",
          description:
            "Full-stack web development, admin dashboards, WhatsApp and Telegram automation and SEO for small businesses.",
          email: "aryxly@gmail.com",
          areaServed: ["Telangana", "Andhra Pradesh"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            addressCountry: "IN",
          },
          founder: [
            { "@type": "Person", name: "Akshith" },
            { "@type": "Person", name: "Yashashwini" },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const EMAIL = "aryxly@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

const services = [
  {
    name: "Website Development",
    desc: "From a single landing page to a full site with its own admin dashboard for content, leads and inventory.",
    price: "From ₹8,000",
    bar: "bg-primary",
  },
  {
    name: "WhatsApp Automation",
    desc: "Auto-replies, lead capture and order updates, running on WhatsApp where your customers already are.",
    price: "From ₹8,000",
    bar: "bg-highlight",
  },
  {
    name: "Telegram Automation",
    desc: "Bots for groups, notifications and community management — no per-message platform fees.",
    price: "From ₹5,000",
    bar: "bg-accent",
  },
  {
    name: "Website Maintenance",
    desc: "Security patches, backups and content updates, handled every month so nothing breaks quietly.",
    price: "From ₹2,000/mo",
    bar: "bg-primary/70",
  },
  {
    name: "SEO",
    desc: "Keyword research, on-page fixes and monthly reporting so people actually find you on Google.",
    price: "From ₹8,000/mo",
    bar: "bg-highlight/70",
  },
];

const proof = [
  "Full-stack: frontend to backend",
  "WhatsApp + Telegram automation",
  "SEO built in, not bolted on",
  "Direct access to who builds it",
];

const process = [
  {
    n: "01",
    title: "Understand your business",
    body: "What you sell, who buys it, and what's slowing you down online.",
  },
  {
    n: "02",
    title: "Design & build",
    body: "Usually live within a week for a standard site.",
  },
  {
    n: "03",
    title: "Launch",
    body: "You get a working site or bot that's actually yours.",
  },
  {
    n: "04",
    title: "Ongoing support",
    body: "Maintenance and SEO keep it running, if you want it.",
  },
];

function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      {["Services", "Work", "Pricing", "Quote"].map((l) => (
        <a
          key={l}
          href={`#${l.toLowerCase()}`}
          onClick={onClick}
          className="text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
        >
          {l}
        </a>
      ))}
    </>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-display text-2xl text-foreground tracking-tight">
            Arylxy
          </a>
          <nav className="hidden items-center gap-10 sm:flex">
            <NavLinks />
          </nav>
          <a
            href="#quote"
            onClick={() => trackEvent("Quote Nav Click")}
            className="rounded-sm bg-foreground px-6 py-2.5 text-sm font-semibold text-surface transition-colors hover:bg-primary"
          >
            Get a quote
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-20 text-center">
            <Reveal>
              <p className="label-mono">Hyderabad · Web development studio</p>
              <h1 className="mt-6 text-5xl leading-[1.05] font-display sm:text-6xl md:text-7xl lg:text-8xl">
                One team builds your site, your backend{" "}
                <span className="text-primary italic font-normal">and everything behind it.</span>
              </h1>
              <p className="mt-8 mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Most agencies stitch together freelancers — one for design, one for code, one
                who disappears. Arylxy is two people who build the whole thing: the website,
                the admin dashboard, the automation and the SEO. No hand-offs, no middlemen.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href={MAILTO}
                  onClick={() => trackCta("email", "hero")}
                  className="rounded-sm bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  Email us
                </a>
                <a
                  href="#work"
                  className="rounded-sm border border-border bg-surface px-8 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  See our work
                </a>
              </div>
            </Reveal>

            {/* Browser mockup */}
            <Reveal delay={120} className="relative mt-16 md:mt-20">
              <div className="relative mx-auto max-w-5xl rounded-xl border border-border bg-surface shadow-2xl overflow-hidden">
                <div className="h-10 bg-muted border-b border-border flex items-center px-4 gap-2">
                  <span className="h-3 w-3 rounded-full bg-border" />
                  <span className="h-3 w-3 rounded-full bg-border" />
                  <span className="h-3 w-3 rounded-full bg-border" />
                  <span className="ml-3 truncate rounded bg-surface px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    markandeya-car-bazar.vercel.app
                  </span>
                </div>
                <div className="relative p-6 md:p-8">
                  {/* Admin dashboard panel floating behind */}
                  <div className="absolute top-4 right-4 w-[55%] rounded-lg border border-border bg-background p-4 shadow-panel hidden md:block">
                    <p className="label-mono">Admin Dashboard</p>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {["Cars", "Leads", "Visits"].map((k, i) => (
                        <div key={k} className="rounded border border-border bg-surface p-2">
                          <p className="font-mono text-[10px] text-muted-foreground">{k}</p>
                          <p className="font-mono text-sm font-semibold">
                            {[42, 17, 318][i]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="h-32 rounded bg-primary/90 md:h-40" />
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="h-16 rounded bg-muted" />
                    <div className="h-16 rounded bg-muted" />
                    <div className="h-16 rounded bg-muted" />
                  </div>
                  <div className="mt-4 h-2 w-2/3 rounded bg-muted" />
                  <div className="mt-2 h-2 w-1/2 rounded bg-muted" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Proof strip */}
        <section className="border-y border-border bg-surface">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px px-6 sm:grid-cols-2 lg:grid-cols-4">
            {proof.map((p, i) => (
              <Reveal
                key={p}
                delay={i * 70}
                className="border-border/20 py-6 sm:border-l sm:first:border-l-0 sm:pl-6 lg:pl-8"
              >
                <p className="font-mono text-xs tracking-wide text-muted-foreground">{p}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-20 border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <Reveal>
              <p className="label-mono">Services</p>
              <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl md:text-5xl">
                Everything a small business needs online, built in-house.
              </h2>
            </Reveal>
            <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal
                  key={s.name}
                  delay={i * 60}
                  className="group space-y-4"
                >
                  <div className={`h-1 w-12 ${s.bar} mb-6`} />
                  <span className="font-mono text-xs font-semibold text-muted-foreground">0{i + 1}</span>
                  <h3 className="text-2xl sm:text-3xl">{s.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <p className="font-mono text-sm font-semibold text-primary">{s.price}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-20 border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <Reveal>
              <p className="label-mono">Selected work</p>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Real businesses, real systems.</h2>
            </Reveal>
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <Reveal className="rounded-sm border border-border p-8 transition-all hover:border-primary hover:shadow-lift bg-background">
                <p className="label-mono">Nalgonda · Car dealership</p>
                <h3 className="mt-4 text-2xl sm:text-3xl">Markandaya Car Bazaar</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  A full website backed by its own admin panel — the team adds and edits car
                  listings, tracks incoming leads and watches daily visitor counts without
                  calling us.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {["Full-stack", "Admin Dashboard", "SEO foundation"].map((t) => (
                    <li
                      key={t}
                      className="rounded border border-border bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://markandeya-car-bazar.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block border-b border-primary pb-0.5 text-sm font-medium transition-colors hover:text-primary"
                >
                  Visit the live site →
                </a>
              </Reveal>

              <Reveal
                delay={90}
                className="rounded-sm border border-border p-8 transition-all hover:border-primary hover:shadow-lift bg-background"
              >
                <p className="label-mono">Hyderabad · Event videography</p>
                <h3 className="mt-4 text-2xl sm:text-3xl">Vyvi Media</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  A website redesign for an event videography studio — a sharper, more visual
                  presentation of their reels and services so enquiries come from the work
                  itself.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {["Website Redesign", "Brand"].map((t) => (
                    <li
                      key={t}
                      className="rounded border border-border bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 inline-flex items-center gap-2 font-mono text-xs text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> In progress
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-20 bg-foreground text-background">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <Reveal>
              <p className="label-mono text-background/50">Pricing</p>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Starting prices, in plain numbers.</h2>
            </Reveal>
            <Reveal delay={80} className="mt-12 overflow-hidden rounded-sm border border-background/10 bg-background/5">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-background/10 bg-background/10">
                    <th className="label-mono px-6 py-4 text-background/60">Service</th>
                    <th className="label-mono hidden px-6 py-4 text-background/60 sm:table-cell">What it covers</th>
                    <th className="label-mono px-6 py-4 text-right text-background/60">Starting at</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((s) => (
                    <tr key={s.name} className="border-b border-background/10 last:border-0 transition-colors hover:bg-background/5">
                      <td className="px-6 py-5 text-sm font-semibold">{s.name}</td>
                      <td className="hidden px-6 py-5 text-sm text-background/70 sm:table-cell">
                        {s.desc}
                      </td>
                      <td className="px-6 py-5 text-right font-mono text-sm font-semibold whitespace-nowrap">
                        {s.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-sm text-background/60">
                These are starting points — final quotes depend on scope.{" "}
                <a href={MAILTO} onClick={() => trackCta("email", "pricing")} className="border-b border-primary pb-0.5 font-medium text-background transition-colors hover:text-primary">
                  Email us
                </a>{" "}
                and we'll work it out together.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Process */}
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <Reveal>
              <p className="label-mono">Process</p>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">How a project runs.</h2>
            </Reveal>
            <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((p, i) => (
                <Reveal as="li" key={p.n} delay={i * 70} className="border-t-2 border-primary pt-6">
                  <span className="font-mono text-sm font-semibold text-primary">{p.n}</span>
                  <h3 className="mt-3 text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* About */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:py-32 lg:grid-cols-[0.8fr_1fr]">
            <Reveal>
              <p className="label-mono">About</p>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Two people. That's the agency.</h2>
            </Reveal>
            <Reveal delay={90} className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Arylxy is Akshith and Yashashwini — the name is our two names put together. We
                run it out of Hyderabad and work with businesses across Telangana and Andhra
                Pradesh.
              </p>
              <p>
                There are no account managers, no outsourced work and nobody in between. The
                person you talk to is the person writing the code, so questions get answered the
                same day and changes don't wait on a third party.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Quote form */}
        <section id="quote" className="scroll-mt-20 border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:py-32 lg:grid-cols-[1fr_1fr] lg:items-start">
            <Reveal>
              <p className="label-mono">Get a quote</p>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">
                Four questions and we can price it.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Tell us who you are, what kind of business you run, roughly what you want to
                spend and when you need it live. We reply with a real number and what it
                includes — no sales calls.
              </p>
              <ul className="mt-10 space-y-4">
                {[
                  "Reply within one working day",
                  "Fixed scope, fixed price before we start",
                  "You talk to the people writing the code",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={90} className="rounded-sm border border-border bg-background p-8 shadow-panel">
              <QuoteForm />
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-foreground text-background">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl">Let's talk about your business.</h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-background/70 sm:text-lg">
                Tell us what you sell and what's not working online right now. We'll reply with
                what we'd build and what it would cost.
              </p>
              <a
                href={MAILTO}
                onClick={() => trackCta("email", "contact")}
                className="mt-10 inline-block rounded-sm bg-primary px-10 py-4 font-mono text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                {EMAIL}
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl text-foreground">
              Arylxy
            </p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              Hyderabad, India
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-6">
            <NavLinks />
            <a
              href={MAILTO}
              onClick={() => trackCta("email", "footer")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {EMAIL}
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
