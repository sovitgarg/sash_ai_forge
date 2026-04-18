# Sash.Ai Forge. Landing Site

Static landing page for Sash.Ai Forge. Built to generate leads from non-technical founders who want to launch AI startups fast.

**Live:** _not deployed yet_
**Parent brand:** https://www.sashai.tech

## What this is

A single-page static site (HTML + CSS + vanilla JS) positioned around one promise: *idea to launched AI startup. Product, company, brand, investors. In weeks, not quarters.*

## Design doc

The complete spec. Positioning, copy, visual system, SEO/AEO plan, build checklist. Lives at:

`docs/plans/2026-04-18-sash-ai-forge-design.md`

Start there.

## Local preview

No build step. Any static server works:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy (GitHub Pages)

Do not deploy without owner confirmation. See the design doc §8 for the two deploy options (deploy-from-branch vs GitHub Actions).

## Stack

- HTML5, CSS3 (custom properties), vanilla JS
- Fonts via Google Fonts (Inter)
- Icons: Lucide (inlined SVG)
- Analytics: configurable (Plausible default)
- Form: configurable (Formspree default)
- Scheduler: configurable (Cal.com default)

All configurable via `assets/js/config.js`.

## Legal

© 2026 AIxplora Technologies Pvt Ltd · Bengaluru, India
