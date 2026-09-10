import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { QuoteForm } from "@/components/QuoteForm";
import { trackCta, trackEvent } from "@/lib/analytics";
import fullLogo from "@/assets/arylxy-logo-full.png.asset.json";
import markLogo from "@/assets/arylxy-mark.png.asset.json";

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
    desc: "From a single landing page up to a full site with its own admin dashboard for content, leads and inventory.",
    scope: "Landing page → full site + dashboard",
  },
  {
    name: "WhatsApp Automation",
    desc: "Where your customers already are — auto-replies, lead capture and order updates that run without you.",
    scope: "Basic auto-replies → order tracking & multi-flow",
  },
  {
    name: "Telegram Automation",
    desc: "Bots for notifications, groups and community management, with no per-message platform fees.",
    scope: "Single notification bot → multi-group management",
  },
  {
    name: "Website Maintenance",
    desc: "Security patches, backups and content updates handled every month so nothing breaks quietly.",
    scope: "Patches & backups → monitoring + priority support",
  },
  {
    name: "SEO",
    desc: "Keyword research, on-page fixes and reporting so people actually find you on Google.",
    scope: "On-page fixes & reporting → content + off-page",
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
      {["Services", "Work", "Quote"].map((l) => (
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
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center" aria-label="Arylxy — home">
            <img
              src={markLogo.url}
              alt="Arylxy logo"
              className="h-9 w-auto sm:hidden"
              width={249}
              height={256}
            />
            <img
              src={fullLogo.url}
              alt="Arylxy"
              className="hidden h-14 w-auto sm:block"
              width={400}
              height={400}
            />
          </a>
          <nav className="hidden items-center gap-10 sm:flex">
            <NavLinks />
          </nav>
          <a
            href="#quote"
            onClick={() => trackEvent("Quote Nav Click")}
            className="rounded-md bg-foreground px-6 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-primary"
          >
            Get a quote
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="brand-hero relative overflow-hidden border-b border-border bg-background">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <img
              src={markLogo.url}
              alt=""
              className="absolute right-[-8rem] top-[-3rem] w-[30rem] max-w-none opacity-[0.055] sm:right-[-4rem] sm:w-[38rem] lg:right-[max(-2rem,calc((100vw-72rem)/2-10rem))] lg:top-[-7rem] lg:w-[48rem]"
              width={249}
              height={256}
            />
            <div className="absolute inset-x-0 bottom-0 h-px bg-primary/25" />
          </div>
          <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-12 text-center md:pt-24 md:pb-20">
            <Reveal>
              <p className="label-mono">Hyderabad · Web development studio</p>
              <h1 className="mt-6 text-4xl leading-[1.08] font-display font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
                One team.{" "}
                <span className="text-primary">Your entire digital system.</span>
              </h1>
              <p className="mt-6 mx-auto max-w-2xl font-mono text-xs tracking-widest uppercase text-muted-foreground sm:text-sm">
                Frontend · Backend · Admin Dashboard · Automation · SEO
              </p>
              <p className="mt-8 mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Most agencies stitch together freelancers — one for design, one for code, one
                who disappears. Arylxy is two people who build the whole thing: the website,
                the admin dashboard, the automation and the SEO. No hand-offs, no middlemen.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href={MAILTO}
                  onClick={() => trackCta("email", "hero")}
                  className="rounded-md bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-primary"
                >
                  Email us
                </a>
                <a
                  href="#work"
                  className="rounded-md border border-border bg-background px-8 py-3.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  See our work
                </a>
              </div>
            </Reveal>

            {/* Browser mockup */}
            <Reveal delay={120} className="relative mt-16 md:mt-20">
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-border bg-background shadow-panel">
                <div className="flex h-10 items-center gap-2 border-b border-border bg-muted px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="ml-3 truncate rounded bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    markandeya-car-bazar.vercel.app
                  </span>
                </div>
                <div className="relative p-6 text-left md:p-8">
                  {/* Admin dashboard panel */}
                  <div className="absolute top-6 right-6 hidden w-[52%] rounded-md border border-border bg-background p-4 shadow-panel md:block">
                    <p className="label-mono">Admin Dashboard</p>
                    <div className="mt-3 grid grid-cols-3 gap-2">
                      {["Cars", "Leads", "Visits"].map((k, i) => (
                        <div key={k} className="rounded border border-border bg-secondary/60 p-2">
                          <p className="font-mono text-[10px] text-muted-foreground">{k}</p>
                          <p className="font-mono text-sm font-semibold text-foreground">
                            {[42, 17, 318][i]}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3 space-y-2">
                      {["Swift Dzire · 2019", "Creta SX · 2021"].map((r) => (
                        <div
                          key={r}
                          className="flex items-center justify-between rounded border border-border px-2 py-1.5"
                        >
                          <span className="font-mono text-[10px] text-muted-foreground">{r}</span>
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex h-32 flex-col justify-center rounded border border-border bg-foreground px-5 md:h-40 md:w-[46%]">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-primary">
                      Markandaya Car Bazaar
                    </p>
                    <p className="mt-2 font-display text-lg font-semibold text-background md:text-xl">
                      Certified used cars in Nalgonda
                    </p>
                    <span className="mt-3 w-fit rounded bg-primary px-3 py-1 font-mono text-[10px] font-semibold text-primary-foreground">
                      Browse stock
                    </span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {["₹4.2L", "₹6.8L", "₹9.5L"].map((p) => (
                      <div key={p} className="rounded border border-border p-3">
                        <div className="h-8 rounded bg-muted" />
                        <p className="mt-2 font-mono text-[10px] font-semibold text-primary">{p}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 h-2 w-2/3 rounded bg-muted" />
                  <div className="mt-2 h-2 w-1/2 rounded bg-muted" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Proof strip */}
        <section className="border-y border-border bg-secondary/50">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px px-6 sm:grid-cols-2 lg:grid-cols-4">
            {proof.map((p, i) => (
              <Reveal
                key={p}
                delay={i * 70}
                className="border-border py-6 sm:border-l sm:first:border-l-0 sm:pl-6 lg:pl-8"
              >
                <p className="font-mono text-xs tracking-wide text-muted-foreground">{p}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-20 border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
            <Reveal>
              <p className="label-mono">Services</p>
              <h2 className="mt-4 max-w-2xl text-3xl sm:text-4xl md:text-5xl">
                Everything a small business needs online, built in-house.
              </h2>
            </Reveal>
            <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal
                  key={s.name}
                  delay={i * 60}
                  className="group flex flex-col rounded-md border border-border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-lift"
                >
                  <span className="font-mono text-xs font-semibold text-primary">0{i + 1}</span>
                  <h3 className="mt-5 text-xl sm:text-2xl">{s.name}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                  <p className="mt-6 font-mono text-[11px] leading-relaxed tracking-wide text-highlight">
                    {s.scope}
                  </p>
                  <a
                    href={MAILTO}
                    onClick={() => trackCta("email", `service:${s.name}`)}
                    className="mt-6 border-t border-border pt-5 text-sm font-medium transition-colors hover:text-primary"
                  >
                    Get a custom quote →
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal
              delay={120}
              className="mt-8 flex flex-col gap-5 rounded-md border border-border bg-secondary/40 p-8 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="max-w-xl">
                <p className="label-mono">Also available</p>
                <h3 className="mt-3 text-xl">Branding &amp; Design</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Logos, brand basics and print work including restaurant menu design. Available
                  on request — no published case study yet.
                </p>
              </div>
              <a
                href={MAILTO}
                onClick={() => trackCta("email", "service:branding")}
                className="shrink-0 text-sm font-medium transition-colors hover:text-primary"
              >
                Get a custom quote →
              </a>
            </Reveal>
          </div>
        </section>


        {/* Work */}
        <section id="work" className="scroll-mt-20 border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <Reveal>
              <p className="label-mono">Selected work</p>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Real businesses, real systems.</h2>
            </Reveal>
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <Reveal className="rounded-md border border-border bg-background p-8 transition-all hover:border-primary hover:shadow-lift">
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
                      className="rounded border border-primary/30 bg-secondary px-2.5 py-1 font-mono text-[11px] font-medium text-highlight"
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
                className="rounded-md border border-border bg-background p-8 transition-all hover:border-primary hover:shadow-lift"
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
                      className="rounded border border-primary/30 bg-secondary px-2.5 py-1 font-mono text-[11px] font-medium text-highlight"
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
            <Reveal delay={80} className="mt-12 overflow-hidden rounded-md border border-background/10 bg-background/5">
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
                      <td className="px-6 py-5 text-right font-mono text-sm font-semibold whitespace-nowrap text-accent">
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
        <section className="border-b border-border bg-background">
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
        <section id="quote" className="scroll-mt-20 border-b border-border bg-secondary/40">
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
            <Reveal delay={90} className="rounded-md border border-border bg-background p-8 shadow-panel">
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
                className="mt-10 inline-block rounded-md bg-background px-10 py-4 font-mono text-sm font-semibold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {EMAIL}
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <img src={fullLogo.url} alt="Arylxy" className="h-16 w-auto" width={400} height={400} />
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
