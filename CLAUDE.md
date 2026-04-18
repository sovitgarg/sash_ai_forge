# CLAUDE.md — sash_ai_forge

Static landing site for Sash.Ai Forge. Goal: generate leads from non-technical founders launching AI startups.

## Source of truth
- **Design doc:** `docs/plans/2026-04-18-sash-ai-forge-design.md`
- Follow it section by section. Copy in that doc is ship-ready — do not rewrite it.

## Build rules
- Pure static: HTML + CSS + vanilla JS. No frameworks, no build step.
- Light theme only. No dark sections, no dark hero, no dark footer.
- Mobile-first, responsive to 360px.
- Lighthouse targets: Performance ≥ 95, Accessibility ≥ 95, SEO = 100.
- Do not invent testimonials, case studies, pricing, or team bios not in the design doc — use placeholders.
- Do not add frameworks or trackers beyond one configurable analytics provider.

## Deploy
- Target: GitHub Pages.
- **Do not push to remote or deploy without explicit user confirmation** (per Learning/CLAUDE.md).
- Custom domain `forge.sashai.tech` only if owner confirms DNS is ready.

## Locked decisions (do not re-ask)
All eight build decisions are answered in **§11 of the design doc**. Summary:
- Hosting: `https://sovitgarg1.github.io/sash_ai_forge/` — no custom domain, no CNAME
- GitHub account: `sovitgarg1`, public repo
- Scheduler: **not used in v1** — remove embed
- Contact channels: **WhatsApp + email only**, form is `mailto:` fallback
- Analytics: **none in v1** — commented-out stub only
- Pricing: no numbers — "Starts from — let's talk"
- Team: all three featured; initial-monogram placeholder avatars, no LinkedIn links in v1
- Case studies: **hidden in v1** (HTML commented out)
- Legal: footer links go to existing sashai.tech pages

Build directly against §11. Don't invent alternatives.
