# VCE Website — Redesign Concept

An unofficial student redesign concept for the **Vasavi College of Engineering** website — a complete 22-page static site built with vanilla HTML/CSS/JS.

**Live site:** https://uppala-mahesh.github.io/vce-website/

## Why

The college's current site is fragmented (13+ top-level nav items, duplicate notice boards). This concept consolidates everything into one editorial, institutional design system — a single homepage, one unified exams/circulars hub, and data-driven department pages.

## What's inside

- **22 pages** — homepage, about cluster (vision-mission, governance, accreditation), academics (admissions, almanac, exams hub), placements + recruiters, campus life + facilities + research, contact/alumni/careers, student portal mock
- **8 department views** served by one page via `departments-data.js`
- **Design system** — `styles.css` + `page-styles.css` (Fraunces / Public Sans / IBM Plex Mono; ink–paper + teal–copper palette)
- **Shared chrome** — `site-chrome.js` injects utility bar, header, footer; handles scroll shadow + reveal-on-scroll

## Notes

- Static prototype: notice board and stats are sample data, forms don't submit, images are stand-ins (to be replaced with real campus photography).
- Deployed automatically from `main` via GitHub Actions (`.github/workflows/deploy.yml`).
- `DESIGN_NOTES.md` holds the original design handoff spec (colors, typography, interaction details).

## Run locally

```bash
python -m http.server 8765
# then open http://127.0.0.1:8765
```
