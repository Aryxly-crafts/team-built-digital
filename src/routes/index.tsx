import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

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
  },
  {
    name: "WhatsApp Automation",
    desc: "Auto-replies, lead capture and order updates, running on WhatsApp where your customers already are.",
    price: "From ₹8,000",
  },
  {
    name: "Telegram Automation",
    desc: "Bots for groups, notifications and community management — no per-message platform fees.",
    price: "From ₹5,000",
  },
  {
    name: "Website Maintenance",
    desc: "Security patches, backups and content updates, handled every month so nothing breaks quietly.",
    price: "From ₹2,000/mo",
  },
  {
    name: "SEO",
    desc: "Keyword research, on-page fixes and monthly reporting so people actually find you on Google.",
    price: "From ₹8,000/mo",
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
      {["Services", "Work", "Pricing"].map((l) => (
        <a
          key={l}
          href={`#${l.toLowerCase()}`}
          onClick={onClick}
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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
      <header className="sticky top-0 z-50 border-b border-border bg-surface/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            Arylxy<span className="text-accent">.</span>
          </a>
          <nav className="hidden items-center gap-8 sm:flex">
            <NavLinks />
          </nav>
          <a
            href={MAILTO}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-panel transition-all hover:-translate-y-0.5 hover:shadow-lift"
          >
            Get a quote
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <Reveal>
              <p className="label-mono">Hyderabad · Web development studio</p>
              <h1 className="mt-5 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
                One team builds your
                <br />
                site, your backend
                <br />
                <span className="text-accent">and everything behind it.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Most agencies stitch together freelancers — one for design, one for code, one
                who disappears. Arylxy is two people who build the whole thing: the website,
                the admin dashboard, the automation and the SEO. No hand-offs, no middlemen.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={MAILTO}
                  className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-panel transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  Email us
                </a>
                <a
                  href="#work"
                  className="rounded-md border border-border bg-surface px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  See our work
                </a>
              </div>
            </Reveal>

            {/* Browser mockup + dashboard panel behind */}
            <Reveal delay={120} className="relative">
              <div className="relative mx-auto max-w-lg pt-10 pr-4 pb-6 pl-6 sm:pr-10">
                <div className="absolute top-0 right-0 w-[78%] rounded-lg border border-border bg-muted p-4 shadow-panel">
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
                <div className="relative mt-16 rounded-lg border border-border bg-surface shadow-lift">
                  <div className="flex items-center gap-1.5 border-b border-border px-3 py-2.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                    <span className="ml-3 truncate rounded bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                      markandeya-car-bazar.vercel.app
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="h-24 rounded bg-primary/90" />
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="h-14 rounded bg-muted" />
                      <div className="h-14 rounded bg-muted" />
                      <div className="h-14 rounded bg-muted" />
                    </div>
                    <div className="mt-3 h-2 w-2/3 rounded bg-muted" />
                    <div className="mt-2 h-2 w-1/2 rounded bg-muted" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Proof strip */}
        <section className="border-b border-border bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px px-5 sm:grid-cols-2 lg:grid-cols-4">
            {proof.map((p, i) => (
              <Reveal
                key={p}
                delay={i * 70}
                className="border-border/20 py-5 sm:border-l sm:first:border-l-0 sm:pl-6 lg:pl-8"
              >
                <p className="font-mono text-xs tracking-wide opacity-90">{p}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-16 border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <Reveal>
              <p className="label-mono">Services</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
                Everything a small business needs online, built in-house.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal
                  key={s.name}
                  delay={i * 60}
                  className="group flex flex-col rounded-lg border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lift"
                >
                  <span className="label-mono">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <p className="mt-6 font-mono text-sm font-semibold text-accent">{s.price}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-16 border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <Reveal>
              <p className="label-mono">Selected work</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Real businesses, real systems.</h2>
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <Reveal className="rounded-lg border border-border p-7 transition-all hover:border-accent hover:shadow-lift">
                <p className="label-mono">Nalgonda · Car dealership</p>
                <h3 className="mt-3 text-2xl font-bold">Markandaya Car Bazaar</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  A full website backed by its own admin panel — the team adds and edits car
                  listings, tracks incoming leads and watches daily visitor counts without
                  calling us.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
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
                  className="mt-6 inline-block border-b border-accent pb-0.5 text-sm font-medium transition-colors hover:text-accent"
                >
                  Visit the live site →
                </a>
              </Reveal>

              <Reveal
                delay={90}
                className="rounded-lg border border-border p-7 transition-all hover:border-accent hover:shadow-lift"
              >
                <p className="label-mono">Hyderabad · Event videography</p>
                <h3 className="mt-3 text-2xl font-bold">Vyvi Media</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  A website redesign for an event videography studio — a sharper, more visual
                  presentation of their reels and services so enquiries come from the work
                  itself.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {["Website Redesign", "Brand"].map((t) => (
                    <li
                      key={t}
                      className="rounded border border-border bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" /> In progress
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-16 border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <Reveal>
              <p className="label-mono">Pricing</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Starting prices, in plain numbers.</h2>
            </Reveal>
            <Reveal delay={80} className="mt-10 overflow-hidden rounded-lg border border-border bg-surface">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border bg-muted">
                    <th className="label-mono px-5 py-3">Service</th>
                    <th className="label-mono hidden px-5 py-3 sm:table-cell">What it covers</th>
                    <th className="label-mono px-5 py-3 text-right">Starting at</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((s) => (
                    <tr key={s.name} className="border-b border-border last:border-0 transition-colors hover:bg-muted/60">
                      <td className="px-5 py-4 text-sm font-semibold">{s.name}</td>
                      <td className="hidden px-5 py-4 text-sm text-muted-foreground sm:table-cell">
                        {s.desc}
                      </td>
                      <td className="px-5 py-4 text-right font-mono text-sm font-semibold whitespace-nowrap">
                        {s.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-sm text-muted-foreground">
                These are starting points — final quotes depend on scope.{" "}
                <a href={MAILTO} className="border-b border-accent pb-0.5 font-medium text-foreground transition-colors hover:text-accent">
                  Email us
                </a>{" "}
                and we'll work it out together.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Process */}
        <section className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <Reveal>
              <p className="label-mono">Process</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">How a project runs.</h2>
            </Reveal>
            <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((p, i) => (
                <Reveal as="li" key={p.n} delay={i * 70} className="border-t-2 border-accent pt-5">
                  <span className="font-mono text-sm font-semibold text-accent">{p.n}</span>
                  <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* About */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[0.8fr_1fr]">
            <Reveal>
              <p className="label-mono">About</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Two people. That's the agency.</h2>
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

        {/* Contact */}
        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-6xl px-5 py-20 text-center">
            <Reveal>
              <h2 className="text-3xl font-bold sm:text-4xl">Let's talk about your business.</h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed opacity-80 sm:text-base">
                Tell us what you sell and what's not working online right now. We'll reply with
                what we'd build and what it would cost.
              </p>
              <a
                href={MAILTO}
                className="mt-9 inline-block rounded-md bg-accent px-8 py-4 font-mono text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                {EMAIL}
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-base font-bold">
              Arylxy<span className="text-accent">.</span>
            </p>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              Hyderabad, India
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-6">
            <NavLinks />
            <a
              href={MAILTO}
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              {EMAIL}
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
