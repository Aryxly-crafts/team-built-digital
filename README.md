# Arylxy Full Stack Builder

# Prompt: Arylxy Portfolio Site

Paste this into any AI website-building tool (v0, Lovable, Bolt, Claude, ChatGPT, etc.) to generate the site.

---

Build a single-page portfolio/marketing website for **Arylxy**, a small web development agency based in Hyderabad, India, run by two people — Akshith and Yashashwini (the name Arylxy combines their names). The site should convince small and mid-size local business owners (car dealers, restaurants, salons, photography studios, coaching institutes) to hire the agency.

**Style direction:** Professional and corporate — credible and trustworthy, not flashy or trendy. Avoid generic AI-generated design defaults: no cream background with a serif display font and terracotta accent, no near-black background with a neon accent, no newspaper-style hairline layout. Instead use a clean white/light-grey background, a deep navy ink color, and a muted brass/gold accent (not orange). Pair a confident geometric sans-serif for headings with a clean, readable sans-serif for body text, and a monospace font for small labels/prices (ties to the fact the agency builds real backend/dashboard systems, not just pretty frontends).

**Target audience:** Local Indian small business owners who are non-technical, price-sensitive, and want to deal with one direct team instead of multiple vendors.

**Key differentiator to emphasize:** Arylxy builds the *whole* stack — frontend, backend, admin dashboards, automation, and SEO — not just a static website. No hand-offs between freelancers; whoever you talk to is who builds the project.

## Sections to include

**1. Navigation**
Logo "Arylxy", links to Services / Work / Pricing, and a "Get a quote" button.

**2. Hero**
Headline focused on the "one team does everything" value prop. Subheadline explaining no hand-offs between freelancers. Two CTAs: "Email us" (mailto:aryxly@gmail.com) and "See our work" (scroll link). Visual: a stylized browser-window mockup representing a real client site with a second card/panel peeking out behind it labeled "Admin Dashboard" — this represents the fact that Arylxy builds the hidden backend/dashboard most competitors don't.

**3. Proof strip**
Four short trust points in a row: "Full-stack: frontend to backend", "WhatsApp + Telegram automation", "SEO built in, not bolted on", "Direct access to who builds it".

**4. Services** (5 cards)
- **Website Development** — from a single landing page to a full site with its own admin dashboard for content, leads, and inventory. From ₹8,000.
- **WhatsApp Automation** — auto-replies, lead capture, and order updates on WhatsApp. From ₹8,000.
- **Telegram Automation** — bots for groups, notifications, and community management, no per-message platform fees. From ₹5,000.
- **Website Maintenance** — security patches, backups, content updates, monthly. From ₹2,000/month.
- **SEO** — keyword research, on-page fixes, monthly reporting. From ₹8,000/month.

**5. Work / Portfolio** (2 case studies)
- **Markandaya Car Bazaar** — a Nalgonda-based car dealership; full site with its own admin panel for car listings, leads, and daily visitor counts. Tags: Full-stack, Admin Dashboard, SEO foundation. Live at https://markandeya-car-bazar.vercel.app/
- **Vyvi Media** — a Hyderabad event videography studio; website redesign for a sharper, more visual presentation of their reels and services. Tags: Website Redesign, Brand. Status: in progress (don't link to a live result yet).

**6. Pricing table**
Same five services and starting prices as above, laid out as a simple table (service name / one-line description / starting price). Add a note: "These are starting points — final quotes depend on scope. Email us and we'll work it out together," linking to aryxly@gmail.com.

**7. Process** (4 numbered steps — this is a real sequence, so numbering is appropriate)
01 Understand your business — what you sell, who buys it, what's slowing you down online.
02 Design & build — usually live within a week for a standard site.
03 Launch — you get a working site or bot that's actually yours.
04 Ongoing support — maintenance and SEO keep it running, if you want it.

**8. About**
Short section on the two-person team — Akshith and Yashashwini — no account managers, no outsourced work, based in Hyderabad, working with businesses across Telangana and Andhra Pradesh.

**9. Contact**
"Let's talk about your business" with a prominent email CTA to aryxly@gmail.com.

**10. Footer**
Agency name, city, quick nav links, email.

## Technical requirements
- Single responsive page, mobile-first, works down to ~375px wide.
- Real hover states and a subtle scroll-reveal animation on section entry — respect `prefers-reduced-motion`.
- Visible keyboard focus states on all links/buttons.
- No fabricated testimonials or client quotes — the agency doesn't have collected testimonials yet, so leave that section out entirely rather than inventing one.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://team-built-digital.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4b38b8dd-3a5d-43dc-859e-26663667bc19).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
