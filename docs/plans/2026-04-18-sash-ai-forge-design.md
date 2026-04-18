# Sash.Ai Forge — Landing Site Design Document

**Project:** `sash_ai_forge`
**Author:** Sovit Garg (Fractional CTO, Sash.Ai)
**Date:** 2026-04-18
**Goal:** Generate qualified leads from non-technical founders who want to launch AI startups fast.
**Deploy target:** GitHub Pages (static HTML/CSS/JS).
**Reference site:** https://www.sashai.tech/sashaiforge (existing — we are building a stronger standalone landing page that can later replace or complement it).

---

## 0. How to use this doc

This document is the complete spec for a single-page static marketing site. It includes positioning, information architecture, every section's copy, the visual system, technical requirements, SEO/AEO implementation, and deployment steps. An engineer (or Claude Code) should be able to build the site end-to-end by following this doc section by section, top to bottom.

**Build constraints:**
- Pure static: HTML + CSS + vanilla JS. No frameworks. No build step. This keeps it fast, cheap, and easy to host on GitHub Pages.
- Mobile-first, responsive down to 360px width.
- Lighthouse targets: Performance ≥ 95, Accessibility ≥ 95, SEO = 100, Best Practices ≥ 95.
- No tracking beyond privacy-respecting basics (Plausible or GA4, configurable).

---

## 1. Strategic positioning

### The one-liner
**Sash.Ai Forge turns an idea into a launched AI startup — product, company, brand, investors — in weeks, not quarters.**

### The frame
Not a Fractional CTO service. Not an agency. **A startup launchpad for non-technical founders who want to move at startup speed.**

The senior AI-native CTO is included as a *trust signal* (you're getting serious caliber), not as the product. Think "chef-driven restaurant" — the chef's name sells the meal, but the meal is the meal.

### The three pillars (in order — this order matters)
1. **Speed** — weeks, not quarters. In startups, speed is survival.
2. **Completeness** — product + company + brand + investors, all under one roof.
3. **Caliber** — senior CTO-led, AI-native products shipped. Speed without compromise.

### The target persona
- Non-technical founder (first-time or repeat), often based in India or SEA.
- Has an idea, some capital or runway, no technical team.
- Burned by agencies or consultants before, or afraid of being burned.
- Wants to launch this year, not "plan this year, build next year."
- Budget: bootstrapped-to-seed ($10k–$150k equivalent). Runway is finite. Respects speed.

### Budget empathy — principle and placement
We acknowledge that bootstrapped founders are tight on budget **without apologizing or discounting the value**. Three touches only:

1. **Hero trust bar line:** *"Built for founder runway — transparent, milestone-based, no retainers."*
2. **"Built for founder runway" strip:** a confident three-point section (milestone-based, equity-flexible for the right founders, 100% IP ownership). Placed between the Journey and the Comparison table.
3. **FAQ:** one direct question — *"I'm bootstrapped. Can we still work together?"* — answered honestly.

We never say "cheap," "affordable," or "discount." We say "respects your runway," "milestone-based," "cash + equity blends for the right founders."

### Modular entry promise
Founders can engage at **any step** of the journey — not mandatory to start from idea. This is explicit in the Journey section: every step has a "Start here →" entry point that books a call pre-tagged with that stage.

---

## 2. Information architecture

Single long page. Anchor-linked nav. Mobile = hamburger.

```
HEADER — logo + nav (Journey, How it works, Pricing, FAQ, Contact) + primary CTA
│
├─ §1 HERO — "Launch your AI startup at startup speed." + 2 CTAs + trust bar
├─ §2 THE JOURNEY — 5-step modular path with per-step "Start here" entry
├─ §3 WE LAUNCH THE WHOLE COMPANY — product + company + brand + investors as one offer
├─ §4 BUILT FOR FOUNDER RUNWAY — budget empathy strip (milestone, equity-flex, IP)
├─ §5 WHY NOT X — comparison table (agencies, tech co-founder, DIY no-code)
├─ §6 THE 45-DAY PLAN — week-by-week timeline (concrete proof of speed)
├─ §7 MEET YOUR CTO + TEAM — faces, names, one-line promise per person
├─ §8 CASE STUDIES — Grambvels, Kokken, and any others (placeholders if needed)
├─ §9 PRICING ANCHOR — ranges, not fixed prices; milestone-based framing
├─ §10 FAQ — 8-10 real founder questions with schema
├─ §11 FINAL CTA — embedded Cal.com/Calendly + 2-field form + WhatsApp
└─ FOOTER — legal, contact, social
```

Sticky CTA bar appears on scroll past §1 on desktop and mobile.

---

## 3. Full section-by-section copy

All copy below is **final draft, ship-ready**. Do not rewrite. Only adapt if a constraint is hit.

### §1 — Hero

**H1:** Launch your AI startup at startup speed.

**Subhead (one paragraph):** Come with an idea. In weeks, walk out with a live AI product, a registered company, a brand, and intros to investors and customers. Senior CTO-led. AI-native by design. Built for founders who don't have years to wait.

**Primary CTA:** Book a free idea review
**Secondary CTA:** See how it works *(scrolls to §2)*

**Trust bar (three items, separated by dots):**
Senior AI-native CTO included · Products shipped, not demos · Built for founder runway — milestone-based, no retainers

**Visual:** hero background uses `--gradient-hero` (ivory → soft violet). A light, animated SVG line connecting four abstract nodes (idea → product → company → investors) traces across the hero on load — one slow draw, no loop. No stock photos of handshakes. No dark overlays.

---

### §2 — The Journey (flagship section)

**Eyebrow:** HOW IT WORKS
**H2:** Five steps. You start wherever you are.

**Intro line:** Most founders come to us at step 1. Some come at step 3. Some already have a product and need help with step 5. You can start anywhere — each step stands alone.

**Five horizontal cards (stack vertically on mobile):**

**① Idea → validated concept**
*Week 1*
We pressure-test your idea, map the AI architecture, and write the spec. You leave the week with clarity, not a pitch deck.
**→ Start here**

**② AI product built & live**
*Weeks 2–6*
We build and ship a production-grade AI product. Real users can use it. Investors can touch it. Not a demo.
**→ Start here**

**③ Company registered, brand live**
*Weeks 2–4 (in parallel)*
Company registration, trademark, domain, logo, site, socials. Your startup becomes a real entity while the product ships.
**→ Start here**

**④ Investor & customer intros**
*Week 6 onward*
We put you in rooms with investors and design partners from our network. You bring the pitch — we bring the table.
**→ Start here**

**⑤ Ongoing tech + growth partner**
*As long as you need*
Post-launch, we stay on as your tech team — feature shipping, infra, hiring, or gradually handing off to your in-house team.
**→ Start here**

**Closing line under the row:**
Modular on purpose. Start from idea, or plug us in mid-journey.

---

### §3 — We launch the whole company, not just the code

**Eyebrow:** THE COMPLETE PACKAGE
**H2:** You get a launched startup. Not a deliverable.

**Body (one paragraph):** Most agencies hand you a product and say good luck. We hand you a *company*. Product, legal, brand, hiring pipeline, investor intros — delivered as one orchestrated launch, because running between five vendors is how founders lose six months they don't have.

**Four tiles in a 2×2 grid (icons + heading + one line):**

- **Product** — Production-grade AI app, live, usable, investor-ready.
- **Company** — Registration, trademark, compliance, handled end-to-end.
- **Brand** — Logo, identity, site, socials — designed to stand out from day one.
- **Network** — Intros to investors, design partners, hiring channels.

---

### §4 — Built for founder runway (budget empathy strip)

**Eyebrow:** WE GET IT
**H2:** Bootstrapped? We respect your runway.

**Body (short):** We've shipped products with first-time founders who were counting months of runway. Our engagements are structured for that reality — without cutting corners on the work.

**Three points (horizontal row, equal weight, no winning point):**

**Milestone-based, not monthly** — You pay for outcomes shipped, not hours logged. Every milestone is a defined deliverable. If we don't ship, you don't pay for the next one.

**Equity-flexible for the right founders** — For founders with strong conviction and tight cash, we'll discuss cash + equity blends on a case-by-case basis. Selective, not standard.

**You own 100% of the IP** — Your code, your company, your product. No vendor lock-in. No revenue share. No strings.

**Closing line:** The free idea review is where we figure out the model that works for you.

---

### §5 — Why not X? (comparison table)

**Eyebrow:** THE HONEST COMPARISON
**H2:** What about the alternatives?

**Body (short):** Every non-tech founder considers these four paths. Here's the honest trade-off.

**Comparison table (5 columns on desktop, horizontal scroll on mobile):**

| | Hire a tech co-founder | Hire an agency | DIY with no-code | **Sash.Ai Forge** |
|---|---|---|---|---|
| **Time to launch** | 6–12 months to find, then 6–12 to build | 6–12 months, often slips | 1–3 months to hit no-code ceiling, then stuck | **6 weeks to live product** |
| **Your equity** | 30–50% gone | 100% kept | 100% kept | **100% kept** |
| **Company setup** | You handle it | You handle it | You handle it | **Included** |
| **Investor access** | None | None | None | **Included** |
| **AI depth** | Depends on who you find | Rarely AI-native | Limited to no-code capability | **AI-native by design** |
| **Risk if they leave** | Catastrophic — they own half | Moderate — vendor lock-in | Low — but product is fragile | **Low — 100% of IP is yours** |
| **Budget model** | Equity (opportunity cost) | Monthly retainer | Tool subscriptions | **Milestone-based** |

**Closing line:** The real competition isn't each other — it's the calendar. Every month you spend deciding is a month a competitor ships.

---

### §6 — The 45-day plan (proof of speed)

**Eyebrow:** TIMELINE
**H2:** What a 45-day launch actually looks like.

**Body (short):** Not a promise — a cadence. Here's the week-by-week our engagements run on.

**Horizontal timeline (stacks on mobile):**

- **Week 1 — Foundation** — Idea pressure-test · AI architecture spec · Product scope locked · Company registration filed
- **Weeks 2–3 — Core build** — Backend, AI pipelines, frontend · Brand + logo delivered · Domain + site live
- **Weeks 4–5 — Integration** — Full product assembly · AI model fine-tuning · QA · Trademark filed
- **Week 6 — Launch** — Production deploy · Soft launch to first users · Investor deck + intros begin
- **Ongoing** — Weekly shipping cadence · Growth + hiring support · Your CTO stays embedded

---

### §7 — Meet your CTO + team

**Eyebrow:** WHO YOU'RE WORKING WITH
**H2:** Senior caliber. No junior hand-offs.

**Body (short):** You won't be passed to a junior. Your engagement is led by senior AI-native practitioners who have shipped real products at real scale.

**Team cards (photo, name, role, one-line promise):**

- **Biddappa Muthappa — CEO, Co-founder**
*"I'll be in your investor meetings."*

- **Shabareesh Raj — Chief AI Officer, Co-founder**
*"I architect your AI system. I don't delegate it."*

- **Sameer Dhanranjani — Strategic Advisor**
*"I've built this playbook before. I know where the traps are."*

*(Add more as team grows. Real photos, linked LinkedIn profiles.)*

---

### §8 — Case studies

**Eyebrow:** PROOF
**H2:** Products we've shipped.

**Two to four case study cards. Each card: logo, one-line outcome, "Read the story →" link to a full case-study page.**

- **Grambvels AI** — Voice-AI latency cut to production-grade. Shipped in X weeks. *Read the story →*
- **Kokken Robotics** — Intelligent call assistant with agentic capabilities, live with X users. *Read the story →*

*(Case study detail pages are phase-two. For launch, link to `#` and mark as "Full case study coming soon" if content isn't ready. Do not fabricate.)*

---

### §9 — Pricing anchor

**Eyebrow:** PRICING
**H2:** Transparent ranges. No surprises.

**Body:** Every engagement is quoted after the free idea review. These are the ranges most founders fall into.

**Three tiers (cards):**

- **Idea → MVP launch** — *Starts at ₹X lakh / $Y* — For founders starting from an idea. Full 45-day launch: product + company + brand + first intros.
- **Product → Scale** — *Starts at ₹X lakh / $Y / month* — For founders with an MVP who need to scale it. Ongoing engineering + growth partnership.
- **Plug-in CTO** — *Starts at ₹X lakh / $Y / month* — For founders who have a team but need senior AI leadership part-time.

**Below the cards:**
Bootstrapped? We discuss cash + equity blends for the right founders. Ask us in the idea review.

*Note to builder: leave price placeholders as `₹X` / `$Y` until confirmed with Sovit. Don't invent numbers.*

---

### §10 — FAQ

**Eyebrow:** QUESTIONS FOUNDERS ASK
**H2:** Straight answers.

**FAQ items (use `<details>/<summary>` or accordion, plus `FAQPage` JSON-LD schema):**

**Q: I'm bootstrapped. Can we still work together?**
A: Yes, if the idea is strong. We've structured engagements with cash + equity blends for founders with real conviction and tight cash. The free idea review is where we figure out the right model for you.

**Q: Do I need to know how to code?**
A: No. The entire offer is built for non-technical founders. You bring domain insight and decision-making — we bring the technical build, architecture, and team.

**Q: How is this different from hiring an agency?**
A: Agencies ship a deliverable and leave. We ship a company — product, legal, brand, and investor intros — and stay on as long as you need. See the comparison above.

**Q: What AI work do you actually do?**
A: Production AI systems: LLM-based applications, agentic pipelines, retrieval systems, fine-tuning, voice AI, infrastructure, and cost-optimized deployment. AI-native, not AI-sprinkled.

**Q: Who owns the code and IP?**
A: You. 100%. From day one. We don't hold IP, we don't white-label, and we don't lock you into retainers to maintain code we wrote.

**Q: What if I already have an MVP?**
A: Start at step 2 or 3 of the journey. We scale what you have, fix what's fragile, and support your investor and customer conversations. You don't restart — you plug us in.

**Q: How do investor intros actually work?**
A: We open our network to founders we're engaged with. You pitch; we introduce. We're selective about who we put in front of our investor and customer contacts — our reputation is on the line.

**Q: What does a 45-day engagement actually cost?**
A: Every engagement is quoted after the free idea review. Ranges are in the Pricing section. We don't publish fixed prices because no two launches are identical — but we won't surprise you either.

**Q: What happens after 45 days?**
A: Most founders continue with us as an ongoing tech partner while they hire their own team. Some hand off entirely. The engagement is month-to-month — no long contracts.

**Q: How selective are you?**
A: We take on founders we believe can build something real. The idea review is a two-way qualification: you're evaluating us, we're evaluating the fit. Not every founder gets an engagement offer.

---

### §11 — Final CTA

**H2:** Book your free idea review.

**Body:** 30 minutes. No deck required. We'll look at your idea, sketch the AI architecture, and tell you honestly whether we're the right partner. No strings.

**Layout (two columns on desktop, stacked on mobile):**

**Left column — embedded scheduler**
- Cal.com or Calendly embed. Configurable via one URL variable in `scripts/config.js`.

**Right column — short form fallback**
- Fields: **Full name** (required), **Email or WhatsApp** (required), **What's your idea?** (optional textarea, placeholder: "A line or two is plenty.")
- Submit button: "Request a call"
- Below form: **Prefer WhatsApp? Ping us →** *(tel link / wa.me link)*
- Microcopy: "We reply within 1 business day."

Form submits to a form service (Formspree, Getform, or a custom endpoint — configurable). No backend.

---

### Footer

**Columns:**

- **Sash.Ai Forge** — one-line positioning · logo
- **Navigate** — Journey, Company package, Comparison, 45-day plan, Pricing, FAQ
- **Company** — About (links to sashai.tech), Case studies, Contact
- **Legal** — Terms, Privacy

**Bottom strip:**
© 2026 AIxplora Technologies Pvt Ltd · Bengaluru, India · info@sashai.tech · +91-89512-80606 · [LinkedIn] [Instagram] [X/Twitter]

---

## 4. Visual system

### Theme direction — light, warm, inviting

We are **not** copying sashai.tech's palette wholesale. That site skews dark-purple and feels enterprise-corporate — wrong signal for a non-tech founder who wants to feel welcomed, not intimidated.

**Our theme:** warm, bright, high-trust. Soft neutrals, one confident accent, one supporting accent. Think "modern studio" rather than "enterprise SaaS." Feels of the same family as sashai.tech because of shared accent hue, but distinctly more founder-friendly.

**Mood keywords:** approachable · confident · fast · crafted.

**Explicit constraints from the owner:**
- Stay light. No dark sections, no dark hero, no dark footer. The entire site lives in the light.
- Keep it inviting — a non-tech founder should feel "I can do this" in the first 2 seconds.

### Palette

```
/* Surfaces (all light) */
--bg-primary:      #FFFFFF       /* default page bg */
--bg-warm:         #FBF7F2       /* warm ivory — hero + alternate sections for rhythm */
--bg-soft:         #F5F3FF       /* softest violet tint — accent surfaces */
--bg-card:         #FFFFFF       /* cards on warm bg */

/* Text */
--text-primary:    #1A1A2E       /* near-black with a touch of indigo — headings */
--text-secondary:  #4B5563       /* body */
--text-muted:      #6B7280       /* captions, eyebrows on light */
--text-on-accent:  #FFFFFF       /* text on accent-primary buttons */

/* Primary accent — violet, kept from sashai.tech family for brand kinship */
--accent-primary:  #6D4AFF       /* slightly warmer, more modern than sashai's #7C3AED */
--accent-hover:    #5B3FE8
--accent-deep:     #3A1F8B       /* used sparingly for emphasis */
--accent-soft:     #EDE7FF       /* badge backgrounds, highlights */

/* Supporting accent — warm amber for energy + approachability */
--accent-warm:     #F59E0B       /* used for the "speed" / urgency moments */
--accent-warm-soft:#FEF3C7

/* Functional */
--success:         #10B981       /* checkmarks in comparison table */
--border-subtle:   #ECE9F6
--border-strong:   #D9D4EC

/* Gradients (used sparingly — hero background, CTA accents) */
--gradient-hero:   linear-gradient(135deg, #FBF7F2 0%, #F5F3FF 60%, #EDE7FF 100%);
--gradient-accent: linear-gradient(135deg, #6D4AFF 0%, #9B7BFF 100%);
```

**Why these choices:**
- **Ivory + soft-violet** for backgrounds keeps the page warm and human, not clinical white.
- **Warmer violet (#6D4AFF)** as primary accent stays in sashai.tech's family but reads more 2026-modern and less enterprise.
- **Amber as a second accent** introduces energy — used on the "speed" moments (the 45-day timeline, the "launch" word, CTA hover states). This is the single biggest differentiator from sashai.tech and specifically serves lead gen: amber signals urgency + warmth simultaneously.
- **No dark mode, no dark sections.** The entire experience stays light. The footer gets a subtle warm-ivory treatment, not dark.

### Typography

```
Headings:  'Inter', 'Space Grotesk' as fallback, system-ui.
           Weights: 700 for H1/H2, 600 for H3, 500 for labels.
           Tight tracking (-0.02em) on large display sizes.

Body:      'Inter', system-ui, -apple-system, sans-serif.
           Weight 400, line-height 1.6, size 17px desktop / 16px mobile.

Eyebrow labels:  'Inter', weight 600, uppercase, tracking 0.1em,
                 size 12px, color --text-muted.

Monospace (for code/timeline markers): 'JetBrains Mono', monospace.
```

Load fonts via `<link rel="preconnect">` + Google Fonts `display=swap`. Variable fonts preferred. Don't exceed 2 font families.

### Spacing rhythm

8px base unit. Section vertical padding: 96px desktop / 64px mobile. Max content width: 1200px. Gutter: 24px mobile, 48px desktop.

### Buttons

```
Primary:
  background: --accent-primary
  color: --text-on-accent
  padding: 14px 28px
  border-radius: 10px      /* slightly softer than sashai.tech for a friendlier feel */
  font-weight: 600
  box-shadow: 0 4px 14px rgba(109, 74, 255, 0.25)
  transition: transform 140ms ease, box-shadow 140ms ease, background 140ms ease
  hover: background --accent-hover, translateY(-1px), box-shadow 0 8px 24px rgba(109, 74, 255, 0.35)

Secondary:
  background: transparent
  color: --text-primary
  border: 1.5px solid --border-strong
  same padding + radius
  hover: border-color --accent-primary, color --accent-primary, bg --accent-soft

Accent-warm (used on the single "launch" CTA in the 45-day plan section only):
  background: --accent-warm
  color: --text-primary
  same dimensions
  Used once or twice max — scarcity makes it pop.
```

### Accent usage rules (prevent the page feeling gimmicky)

- **Violet** carries the brand — used for primary CTAs, headline highlights, link hovers, and the gradient backgrounds.
- **Amber** is the *speed* color — used deliberately on: (a) the week-number badges in the 45-day timeline, (b) the word "weeks" / "fast" / "lightning" when highlighted, (c) one secondary CTA variant. Never more than ~5 appearances across the full page.
- **White space** is the third color — generous padding keeps the light theme from feeling busy.

### Motion

Subtle. Nothing that distracts.
- Fade-in + 12px translateY on scroll (Intersection Observer, once per element).
- Journey cards: soft scale on hover.
- CTA button: 1px lift on hover.
- No auto-playing animations. No parallax.
- Respect `prefers-reduced-motion: reduce` — kill all motion when set.

### Iconography

Line icons, single-weight. Use [Lucide](https://lucide.dev) SVG set (inline, no runtime dependency). No emoji in headings or CTAs. Purple monoline accents on icons (`--accent-primary`, 1.5px stroke).

### Imagery

- No stock photos of people in suits shaking hands. No dark moody photography.
- Abstract gradient meshes in the ivory/violet/amber family for hero and section dividers.
- Team photos: real people, consistent treatment — bright natural light, warm neutral backgrounds, same crop. The vibe is "approachable expert," not "corporate headshot."
- Logos in case studies: client brand colors kept; full color always (no monochrome treatments that feel cold).
- Alternate section backgrounds between `--bg-primary` (white) and `--bg-warm` (ivory) for rhythm — no dark breaks.

---

## 5. Technical implementation

### Stack

- **HTML5** — semantic tags (`<header>`, `<section>`, `<article>`, `<nav>`, `<footer>`, `<details>/<summary>` for FAQ).
- **CSS3** — custom properties for theming, CSS Grid + Flexbox for layout, `@media` queries. No Tailwind (keeps the site dependency-free and lets AEO crawlers read class-free semantic HTML). Optional: one utility-lite custom CSS file organized by section.
- **JavaScript** — vanilla. No framework. Uses only:
  - Mobile nav toggle
  - Sticky CTA bar on scroll
  - Smooth scroll for anchor links
  - Intersection Observer for fade-in reveals
  - Form submission handler (fetch to Formspree/Getform)
  - FAQ accordion (native `<details>` preferred; custom only if needed for animation)

### Project structure

```
sash_ai_forge/
├── index.html                     # single-page site
├── 404.html                       # fallback for GH Pages (redirects home)
├── CNAME                          # only if custom domain configured
├── robots.txt
├── sitemap.xml
├── llms.txt                       # AEO signal file
├── llms-full.txt                  # full markdown content for LLM crawlers
├── favicon.ico / apple-touch-icon.png / icon.svg
├── assets/
│   ├── css/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── sections.css
│   ├── js/
│   │   ├── config.js              # editable: scheduler URL, form endpoint, analytics ID
│   │   └── main.js
│   ├── images/
│   │   ├── hero/
│   │   ├── team/
│   │   ├── case-studies/
│   │   └── og/
│   │       └── og-image.png       # 1200×630
│   └── icons/
│       └── *.svg                  # Lucide set, inlined in HTML where reasonable
├── case-studies/
│   ├── grambvels.html             # minimal detail pages (phase 2)
│   └── kokken.html
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Pages deploy workflow
├── docs/
│   └── plans/
│       └── 2026-04-18-sash-ai-forge-design.md   # this doc
├── CLAUDE.md                      # project-specific instructions for Claude Code
├── README.md                      # build/deploy instructions for humans
└── LICENSE                        # MIT or proprietary (ask owner)
```

### Config-driven values

`assets/js/config.js` centralizes everything an operator might change without touching code:

```js
window.SAF_CONFIG = {
  schedulerUrl: "https://cal.com/sashai/idea-review",  // placeholder
  formEndpoint: "https://formspree.io/f/XXXXXXXX",     // placeholder
  contactEmail: "info@sashai.tech",
  contactPhone: "+91-89512-80606",
  whatsappUrl: "https://wa.me/918951280606",
  analyticsProvider: "plausible", // "plausible" | "ga4" | "none"
  analyticsId: "sashai.tech"
};
```

### Accessibility (non-negotiable)

- All interactive elements keyboard-navigable.
- Visible focus rings (`outline: 2px solid var(--accent-primary); outline-offset: 2px`).
- Color contrast ≥ WCAG AA (run axe DevTools before ship).
- Alt text on every image.
- Form labels present (visually or via `aria-label`).
- Skip-to-content link at top of page.
- Semantic landmarks (`role` attributes only where native element doesn't cover it).

### Performance budgets

- Total page weight (uncached, no images): < 150KB.
- Hero fully rendered: < 1.5s on fast 3G.
- Images: WebP with JPEG fallback, `loading="lazy"` below the fold, explicit `width`/`height` to prevent CLS.
- Fonts: `display: swap`, preload only the weights used above-the-fold.
- No render-blocking JS. Scripts use `defer`.

---

## 6. SEO + AEO implementation

### Meta tags (inside `<head>`)

```html
<title>Sash.Ai Forge — Launch your AI startup at startup speed</title>
<meta name="description" content="Non-technical founders launch AI startups in weeks. Product + company + brand + investor intros, led by a senior AI-native CTO. Built for founder runway.">
<meta name="keywords" content="launch AI startup, AI startup launchpad, non-technical founder AI, idea to MVP in weeks, AI MVP development India, end to end startup launch, Bengaluru AI startup">
<link rel="canonical" href="https://forge.sashai.tech/">
<meta name="robots" content="index,follow,max-image-preview:large">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="Launch your AI startup at startup speed — Sash.Ai Forge">
<meta property="og:description" content="Idea to launched AI startup — product, company, brand, investors — in weeks, not quarters.">
<meta property="og:image" content="https://forge.sashai.tech/assets/images/og/og-image.png">
<meta property="og:url" content="https://forge.sashai.tech/">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Launch your AI startup at startup speed">
<meta name="twitter:description" content="Idea to launched startup in weeks. Product + company + brand + investors, under one roof.">
<meta name="twitter:image" content="https://forge.sashai.tech/assets/images/og/og-image.png">

<!-- Favicons, theme color -->
<meta name="theme-color" content="#6D4AFF">
```

### JSON-LD schema (inside `<head>`, before `</head>`)

Include all of these as separate `<script type="application/ld+json">` blocks:

**1. Organization**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Sash.Ai Forge",
  "legalName": "AIxplora Technologies Pvt Ltd",
  "url": "https://forge.sashai.tech",
  "logo": "https://forge.sashai.tech/assets/images/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/sashai",
    "https://www.instagram.com/sashai.tech",
    "https://www.sashai.tech"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@sashai.tech",
    "telephone": "+91-89512-80606",
    "contactType": "Sales"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "301, 2nd Main Rd, east of NGEF Layout, Kasturi Nagar",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560043",
    "addressCountry": "IN"
  }
}
```

**2. Service**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI startup launchpad — end-to-end product build, company setup, brand, and investor access for non-technical founders",
  "provider": { "@type": "Organization", "name": "Sash.Ai Forge" },
  "areaServed": ["IN", "US", "AE", "SG", "GB"],
  "audience": {
    "@type": "Audience",
    "audienceType": "Non-technical founders launching AI startups"
  },
  "offers": [
    { "@type": "Offer", "name": "Idea to MVP launch (45-day)", "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "INR" } },
    { "@type": "Offer", "name": "Product to scale engagement" },
    { "@type": "Offer", "name": "Plug-in CTO — part-time technical leadership" }
  ]
}
```

**3. FAQPage** — generated from §10 content. One `Question`/`Answer` pair per FAQ item.

**4. Person** — one block per team member (Biddappa, Shabareesh, Sameer), linked back to Organization via `worksFor`.

**5. BreadcrumbList** — even though this is a single-page site, schema breadcrumbs help AI crawlers.

### robots.txt

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bytespider
Allow: /

Sitemap: https://forge.sashai.tech/sitemap.xml
```

### sitemap.xml

Standard XML sitemap with `/`, `/case-studies/grambvels`, `/case-studies/kokken`. `lastmod` set to deploy date. Regenerate via a shell script if added.

### llms.txt (at `/llms.txt`)

```
# Sash.Ai Forge

> Sash.Ai Forge turns an idea into a launched AI startup — product, company, brand, and investor intros — in weeks, not quarters. Built for non-technical founders. Senior AI-native CTO included.

## What we do
- [How it works — the 5-step journey](https://forge.sashai.tech/#journey): Idea validation → product build → company setup → investor intros → ongoing partner
- [The complete package](https://forge.sashai.tech/#package): Product + company + brand + network, under one roof
- [45-day plan](https://forge.sashai.tech/#plan): Week-by-week cadence

## Who it's for
- Non-technical founders (first-time or repeat) launching AI-native startups
- Bootstrapped-to-seed stage, India + global
- Founders who value speed and completeness over consultant hours

## Team
- Biddappa Muthappa — CEO, Co-founder — https://www.linkedin.com/in/biddappa
- Shabareesh Raj — Chief AI Officer, Co-founder — https://www.linkedin.com/in/shabareesh
- Sameer Dhanranjani — Strategic Advisor

## Case studies
- [Grambvels AI — voice-AI latency](https://forge.sashai.tech/case-studies/grambvels)
- [Kokken Robotics — agentic call assistant](https://forge.sashai.tech/case-studies/kokken)

## Engagement models
- Milestone-based, not retainer
- Cash + equity blends available for bootstrapped founders on a selective basis
- 100% IP ownership stays with the founder

## Contact
- Email: info@sashai.tech
- Phone: +91-89512-80606
- WhatsApp: https://wa.me/918951280606
- Book free idea review: https://cal.com/sashai/idea-review

## Parent company
AIxplora Technologies Pvt Ltd, Bengaluru, India
```

### llms-full.txt

A more detailed markdown version including the full hero, journey copy, comparison table (in markdown), FAQ content, and team bios. This is what LLMs download when they want a complete picture. Kept under 40KB. Regenerated from the site content when copy changes.

### Keyword targeting

Primary (own the page):
- "launch AI startup" / "AI startup launchpad"
- "idea to AI MVP in weeks"
- "end to end AI startup launch"
- "AI startup for non-technical founders"

Secondary (weave into body + FAQ):
- "AI MVP India" / "AI MVP Bengaluru"
- "how to launch AI startup without technical co-founder"
- "AI product build services"

Tertiary (feeds future blog content, out of scope for this page):
- "fractional CTO India"
- "AI startup cost India"
- "how to find a technical co-founder"

### Content rules that help AEO

- Every H2 is a full sentence that reads like a question or answer.
- First 40–60 words after each H2 contain a direct, quotable answer.
- One stat, one quote, or one comparison per 500 words.
- Lists and tables over paragraphs where possible (LLMs cite listicles 25%+ of the time).
- Author byline with LinkedIn link on any blog posts added later.

---

## 7. Analytics + lead tracking

### Providers

Default to **Plausible** (privacy-respecting, no cookie banner needed in EU). GA4 is optional fallback. Both configurable via `config.js`.

### Events to track

- `cta_click` — which CTA was clicked + location on page
- `journey_start_here` — which step was clicked
- `scheduler_opened` — Cal.com / Calendly embed interaction
- `form_submit_success` / `form_submit_error`
- `whatsapp_click`
- `faq_expanded` — which question (signals buying intent)
- `scroll_depth` — 25/50/75/100%

Every lead source tagged via UTM parameters preserved in the form submission.

---

## 8. Deployment — GitHub Pages

### Repository setup

```bash
# from /Users/sovitgarg/Learning/sash_ai_forge
git init
git branch -m main
git add .
git commit -m "Initial commit — Sash.Ai Forge landing page"

# Create GitHub repo (requires gh CLI authenticated)
gh repo create sash_ai_forge --public --source=. --remote=origin --push
```

### GitHub Pages configuration

Two options:

**Option A (simplest) — deploy from branch:**
1. Settings → Pages → Source: Deploy from branch
2. Branch: `main` / folder: `/ (root)`
3. Site goes live at `https://<username>.github.io/sash_ai_forge/`

**Option B (recommended) — GitHub Actions:**
Use `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .
      - id: deployment
        uses: actions/deploy-pages@v4
```

Then in Settings → Pages → Source: **GitHub Actions**.

### Custom domain (optional, recommended)

1. Add `CNAME` file in repo root containing: `forge.sashai.tech`
2. In your DNS provider: add `CNAME` record `forge` → `<username>.github.io`
3. In Settings → Pages, enter `forge.sashai.tech` and wait for verification
4. Enable "Enforce HTTPS"

**Do not deploy until the user explicitly says deploy.** Per Learning/CLAUDE.md, the builder should push to GitHub but not flip Pages live without confirmation.

---

## 9. Build plan — ordered checklist for the implementing agent

Execute in this order. Commit after each numbered step.

1. **Scaffold repo** — create `index.html`, stylesheet files, `config.js`, `main.js`, `README.md`, `.gitignore`, `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, `CLAUDE.md`. Empty but structurally valid.
2. **Base CSS** — reset, variables, typography, layout primitives. Implement the palette and fonts.
3. **Header + nav** — logo placeholder, nav links (anchors), mobile hamburger toggle.
4. **Hero (§1)** — H1, sub, two CTAs, trust bar. Responsive. Focus states.
5. **Journey (§2)** — 5 cards, "Start here" links, anchor targets set up.
6. **Complete package (§3)** — 2×2 tile grid.
7. **Founder runway (§4)** — three-point strip.
8. **Comparison table (§5)** — desktop 5-column, mobile horizontal scroll.
9. **45-day plan (§6)** — timeline component.
10. **Team (§7)** — cards with photo placeholders, names, promise lines.
11. **Case studies (§8)** — cards linking to detail pages (stubs OK for launch).
12. **Pricing (§9)** — three tier cards with price placeholders.
13. **FAQ (§10)** — semantic `<details>` accordion.
14. **Final CTA (§11)** — scheduler embed + form + WhatsApp link.
15. **Footer** — columns, legal, contact.
16. **Sticky CTA bar** — appears on scroll past hero.
17. **JSON-LD schema** — all 5 blocks in `<head>`.
18. **Meta tags + OG + Twitter cards** — generate `og-image.png` (placeholder if needed; real one before launch).
19. **robots.txt + sitemap.xml + llms.txt + llms-full.txt** — populated with real content.
20. **Analytics** — wire up per `config.js`.
21. **Case study detail pages** — `/case-studies/grambvels.html`, `/case-studies/kokken.html`. Simple layout: hero, problem, approach, outcome, stack, CTA back to main.
22. **Accessibility sweep** — axe DevTools, keyboard-only pass, screen reader test on macOS VoiceOver.
23. **Performance sweep** — Lighthouse, image optimization, font loading.
24. **Cross-browser check** — Chrome, Safari, Firefox, mobile Safari, Chrome Android.
25. **GitHub workflow** — add `.github/workflows/deploy.yml`.
26. **Initial push** — `git push -u origin main`.
27. **Pages setup** — enable GitHub Pages via Actions.
28. **Report back** — provide the deployed URL, a Lighthouse score screenshot, and a checklist of anything still placeholder-state (images, prices, scheduler URL, form endpoint, real team photos).

### What NOT to do

- Do not invent testimonials, case study details, pricing, or team bios that aren't in this doc.
- Do not deploy to a custom domain without explicit confirmation.
- Do not push to any remote without explicit confirmation (per Learning/CLAUDE.md).
- Do not add frameworks (React, Vue, Tailwind) — static by design.
- Do not add cookie banners or trackers beyond the single analytics provider.
- Do not use emojis in UI copy or code unless this doc shows them.
- Do not link to sashai.tech pages that don't exist — check before linking.

---

## 10. Post-launch phase (out of scope for v1 but documented)

**Phase 2 content engine:**
- Blog at `/blog` with 3 pillar posts + 6 answer posts (per earlier SEO/AEO plan).
- Case study detail pages expanded to full narratives with outcomes.
- Lead magnet: *"The Non-Tech Founder's 8-Week MVP Playbook"* (PDF).

**Phase 3 experimentation:**
- A/B test hero variants (speed-led vs completeness-led headlines).
- Add a testimonials carousel once 3+ founders say yes on record.
- Founder video on the hero (60 seconds, Biddappa or Shabareesh talking directly to camera).

---

## 11. Decisions locked in by owner (2026-04-18)

These are confirmed. Do not re-ask; build to these.

1. **Hosting** — GitHub Pages default URL: `https://sovitgarg1.github.io/sash_ai_forge/`.
   - No custom domain for v1.
   - No `CNAME` file in the repo.
   - All canonical URLs, OG image URLs, sitemap, llms.txt, and JSON-LD references use `https://sovitgarg1.github.io/sash_ai_forge` as the base.
   - Remember: GitHub Pages serves at `/sash_ai_forge/` (subpath), so all absolute links and asset references must account for the subpath. Use relative paths (`./assets/...`) wherever possible to avoid breakage if the site moves to a custom domain later.

2. **GitHub account** — push to `sovitgarg1`. Public repo. Repo name: `sash_ai_forge`.

3. **Scheduler** — **not used in v1.** Remove the scheduler embed from the Final CTA section (§11). That section is now WhatsApp + email + short form only. Layout becomes a single column on all breakpoints, centered, not two columns.

4. **Contact channels** — WhatsApp and email only.
   - WhatsApp: `https://wa.me/918951280606` — big, prominent, with WhatsApp icon.
   - Email: `info@sashai.tech` — `mailto:` link.
   - Retain the 3-field form (name, email/WhatsApp, idea) as a fallback for founders who don't want to open WhatsApp — but the form is **visually secondary**, below the two big channel buttons.
   - Form `action` attribute: leave as `mailto:info@sashai.tech` for v1 (works without any backend, opens the user's mail client with the form fields prefilled in the body). Builder can upgrade to a form service later.

5. **Form endpoint** — `mailto:info@sashai.tech` for v1. No Formspree, Getform, or backend.

6. **Analytics** — **none for v1.** Omit the analytics block entirely. Leave a commented-out snippet in `index.html` with instructions for future activation, but do not load any tracker. No cookie banner needed.

7. **Pricing** — **no numbers published.** Replace the three-tier price cards with "Starts from — let's talk" framing on each card. The CTA on each card is "Get a quote" → scrolls to the Final CTA section. The "Built for founder runway" copy still lives in §4 as-is.

8. **Team content** — feature all three:
   - Biddappa Muthappa — CEO, Co-founder
   - Shabareesh Raj — Chief AI Officer, Co-founder
   - Sameer Dhanranjani — Strategic Advisor
   - **No real photos available for v1.** Use tasteful placeholder avatars — initial monograms on a soft-violet tint (`--accent-soft` background, `--accent-primary` initials, same treatment across all three). Clear `alt` text with full name. Leave a code comment marking where to swap in real photos later.
   - No LinkedIn links for v1 — leave the placeholder-link attribute as `#` with a code comment.

9. **Case studies** — **hide the case studies section (§8) entirely from v1.**
   - Do not fabricate outcomes.
   - Leave the section's HTML in place but commented out, with a clear comment: `<!-- Case studies section: hidden for v1. Re-enable when real outcomes + logos are available. -->`.
   - Do not create `/case-studies/grambvels.html` or `/case-studies/kokken.html` pages.
   - Remove any nav or internal links pointing to case studies.
   - Removing §8 means the page goes: §7 Team → §9 Pricing (renumber internally if helpful, but the semantic order stays the same).

10. **Legal** — for v1, link the footer "Terms" and "Privacy" items to `https://www.sashai.tech/termsofuse` and `https://www.sashai.tech/privacypolicy` respectively. These open in a new tab (`target="_blank" rel="noopener"`). No new legal pages created in this repo.

### Downstream consequences the builder must honor

- **§11 Final CTA layout rewrite:** single centered column, order top-to-bottom:
  1. H2 + body (as specified in §3)
  2. Two big channel buttons side-by-side on desktop, stacked on mobile: "Message us on WhatsApp" (primary, amber accent) and "Email us" (secondary, violet outline).
  3. A subtle divider with the microcopy "or drop a note and we'll get back within 1 business day".
  4. The 3-field form (mailto submission).
  5. Reply-time microcopy.

- **Sticky CTA bar:** primary button text becomes "Message on WhatsApp" (not "Book a free idea review"). Links directly to wa.me.

- **All CTAs across the page:** "Book a free idea review" → "Message us on WhatsApp" (primary) and "Email us" (secondary). The hero, journey "Start here" links, sticky bar, and pricing "Get a quote" all route to WhatsApp or email — whichever is primary in their context. Consistency matters.

- **WhatsApp pre-filled message:** use the WhatsApp pre-fill URL format to seed a starter message, e.g., `https://wa.me/918951280606?text=Hi%20Sash.Ai%20Forge%20—%20I%27d%20like%20to%20book%20a%20free%20idea%20review.` Make the pre-fill contextual to where the click came from (hero, pricing, journey step, etc.) by including a short suffix like `%20Came%20from%3A%20Pricing`. This helps the Sash team see lead source.

- **Email CTA:** use `mailto:info@sashai.tech?subject=Free%20idea%20review%20—%20Sash.Ai%20Forge&body=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20idea%20review.%20Here%27s%20my%20idea%3A%20...`

- **Schema updates:** `ContactPoint` in the Organization JSON-LD references phone + email. Remove any mentions of scheduler or booking URLs from schema.

- **Config file still needed** — `assets/js/config.js` keeps the editable values (WhatsApp URL, email, phone) centralized. Analytics and scheduler blocks stay in the file, commented out, so they're ready to enable later without code archaeology.


---

*End of design doc.*
