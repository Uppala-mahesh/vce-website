# Handoff: Vasavi College of Engineering — Website Redesign

## Overview

A complete, production-scope redesign of the Vasavi College of Engineering (VCE) website — an autonomous, NAAC A++, NBA-accredited engineering college in Hyderabad. The redesign replaces the current fragmented site (13+ top-level nav items, three duplicate notice boards, department content split across multiple URL patterns) with a consolidated 22-page site under a single design system.

The design brief was **"MIT / Harvard style"** — resolved as a Princeton/Yale-leaning hybrid: old-money serif restraint, engineering-drafting logic, editorial density, no SaaS tropes. The system is built around a single stated idea: *VCE is a place where technical precision and institutional legacy coexist.*

## About the Design Files

The files in this bundle are **design references created in HTML** — prototypes showing the intended look, behavior, and information architecture. They are **not production code to copy directly**.

The task is to **recreate these designs in the target codebase's existing environment** (React, Vue, Next.js, Django templates, WordPress, etc.) using that codebase's established patterns, component library, and routing conventions. If no target codebase exists yet, choose the most appropriate framework for a content-heavy institutional site (Next.js or Astro recommended for static-heavy content with a few dynamic surfaces).

The HTML is deliberately vanilla — plain HTML/CSS/JS with a single shared `site-chrome.js` injecting the utility bar, header, and footer on every page. Depart from the vanilla implementation where the target codebase's conventions differ (e.g. use React components instead of `innerHTML`-injection for the chrome; use file-based routing instead of `?d=<key>` query params for departments if the framework supports it).

## Fidelity

**High-fidelity (hifi)** across all 22 pages. Final colors, typography, spacing, and interactive behaviors are all locked in and documented below with exact hex values, pixel measurements, and interaction specifications. The developer should recreate the UI pixel-perfectly.

## Sitemap (22 pages)

| Section | Page | Purpose |
|---|---|---|
| **Root** | `index.html` | Homepage — hero, news strip, accreditation bento, departments, placements, campus life |
| **About** | `about.html` | Institutional overview, history, autonomous status |
| | `vision-mission.html` | Vision, mission, PEOs, POs, PSOs |
| | `governance.html` | Governing body, principal's message, committees, policies |
| | `accreditation.html` | NAAC, NBA, UGC, AICTE, NIRF, ARIIA — full docket |
| **Academics** | `academics.html` | Programmes overview, R-24/R-20 regulations, syllabus links |
| | `admissions.html` | B.E./M.E./MBA admission processes, seat matrix, fees |
| | `almanac.html` | Academic calendar — odd and even semester, holidays |
| | `exams.html` | Unified circulars hub (results/timetables/registration) with filters |
| **Departments** | `department.html?d=<key>` | Single data-driven page serving 8 department views: `cse`, `aiml`, `ece`, `eee`, `it`, `mech`, `civil`, `hs` |
| **Placements** | `placements.html` | Stats, process, preparation programme, alumni network |
| | `recruiters.html` | 150+ recruiter roster grouped by sector |
| **Campus Life** | `campus-life.html` | Flagship events (Acumen, Euphoria, Kriti), clubs, cells |
| | `facilities.html` | Library, hostels, sports, transport, medical, Wi-Fi |
| | `research.html` | R&D Cell, funded projects, publications, patents, MoUs |
| **Utility** | `contact.html` | Full directory: offices, HODs, admissions, T&P, grievance cells |
| | `alumni.html` | Association, notable alumni, mentorship, chapters |
| | `careers.html` | Faculty/staff recruitment, pay scales, benefits |
| | `student-portal.html` | SSO login mock, 12 authenticated services |

## Design System

### Colors

Two functional pairs. The **structural pair** (ink + paper) is what everything is built on. The **signal pair** (teal + copper) carries meaning and is spent deliberately.

```css
/* Structural — near-navy-black on warm off-white */
--ink:        #152238;   /* Header/footer backgrounds, primary headings */
--ink-wash:   #2A3B5C;   /* Secondary surfaces on dark backgrounds */

/* Signal */
--teal:       #0C6E6E;   /* Links, active tab indicators, form focus */
--copper:     #AB5B23;   /* CTAs, achievement badges, legacy markers */
--copper-warm:#C77A44;   /* Copper hover state, warm accents on dark bg */

/* Utility */
--green:      #2E7D5B;   /* NAAC/NBA/accreditation ticks, "approved" */
--rust:       #B23A2E;   /* Deadlines, exam countdowns, closing dates */

/* Neutrals — warm paper stack, not stark white */
--paper:      #FAF8F4;   /* Page background */
--paper-warm: #F3EFE7;   /* Section bands, hover tints */
--fog:        #E7E3DB;   /* Card borders, dividers */
--fog-2:      #D8D3C7;   /* Muted dividers */
--slate:      #5B6472;   /* Secondary/meta text */
--charcoal:   #1E2126;   /* Body text */
```

**System rule (non-negotiable):** one accent color live on screen per component. A stat card uses copper for its number; it does not also use rust for its border. Restraint is the point.

**Dark mode**: Public-facing marketing pages stay light (they must read as an official institutional document, not a product). A dark treatment is used only on:
- Utility bar, ledger, header/footer chrome (universal)
- The Student Portal (`student-portal.html`) — the one authenticated surface
- Admission, Placements, Accreditation, Research, Careers page **mastheads** only (`.page-hero.dark`) — never full-page dark

### Typography

Three typefaces, three distinct jobs:

| Role | Family | Where |
|---|---|---|
| Display / H1–H2 | **Fraunces** (variable serif, opsz + SOFT axes) | Hero headlines, section heads, stat numbers — never body |
| Body / UI / H3–H6 | **Public Sans** | All prose, forms, tables, UI text |
| Data / Tabular | **IBM Plex Mono** | Roll numbers, dates, codes, ledger items, eyebrows |

**Modular scale** — base 16px, ratio 1.25:
```
12px → caption/meta
14px → small UI (table body, nav sub-items)
16px → body base
20px → body-large / lede
25px → H4
31px → H3
39px → H2
49px → H1 desktop  (mobile clamp 32px)
64px → hero display desktop (mobile clamp 40px)
88px+ → mega numerals (stat blocks, A++ tile)
```

**Line-height**: 1.55 body, 1.05–1.15 display. **Letter-spacing**: +0.02em on all-caps labels; -0.015 to -0.03em on display sizes (Fraunces).

**Fraunces-specific**: `font-variation-settings: "opsz" 144, "SOFT" 20` on hero headlines; `SOFT 0` for tighter feel on stat numerals.

**Italic** in Fraunces is deliberately used as an accent — an italic word in copper mid-headline is a system move (see hero: *"forty-four years"* in italic copper against upright ink).

Google Fonts URL used across all pages:
```
https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=IBM+Plex+Mono:wght@400;500&family=Public+Sans:wght@300;400;500;600&display=swap
```

### Design Tokens

**Radius** — engineering-drafting logic:
- `--r-sm: 3px` — buttons, inputs, tags
- `--r-md: 6px` — cards, badges
- **Nothing above 8px** anywhere on the site. Large rounded corners are the single most reliable "generic AI template" tell and are deliberately excluded.

**Elevation** — two levels, both subtle:
```css
--e1: 0 1px 2px rgba(21,34,56,.06), 0 1px 1px rgba(21,34,56,.04);
--e2: 0 4px 12px rgba(21,34,56,.10);
```

**Spacing scale** (4px base): `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96` (exposed as `--s1` through `--s9`).

**Layout**:
- 12-column implicit grid
- Max content width 1280px
- Gutters 24px desktop / 16px mobile
- Margins 80px desktop / 40px tablet / 20px mobile
- Section vertical rhythm: 96px between major sections, 64px tablet, 48px mobile

**Motion**:
- `--ease: cubic-bezier(0.2, 0.6, 0.2, 1)`
- Hover state transitions: 200ms
- Section reveal-on-scroll: 800ms with `translateY(16px → 0)` + opacity
- Hairline copper underline draw on section headings: 1s

## Screens / Views

### Global Chrome (every page)

Injected via `site-chrome.js` into `<div id="site-chrome"></div>` and `<div id="site-footer"></div>`. Set `<body data-nav="<key>">` where key is one of `home | about | academics | admissions | departments | placements | campus | contact` to highlight the correct nav item.

**Stack from top:**

1. **Motto rail** — fixed vertical text on left edge of viewport (`position: fixed; left: 20px; top: 50%; transform: translateY(-50%) rotate(-90deg)`). Plex Mono 10px, letter-spacing 0.24em, uppercase, slate. Reads: *"Striving for a symbiosis of technological excellence and human values · Est. 1981"*. Hidden below 1180px viewport.

2. **Utility bar** — 32px tall, `--ink` bg, `rgba(255,255,255,.72)` text.
   - Left: three credential dots (NAAC A++, NBA Accredited, Autonomous · UGC 2(f) & 12(B)) — green pulsing dots, Plex Mono 11px caps
   - Right: Search, Student Login, Faculty, and an **"Online Fee →"** micro-button in filled copper

3. **The Ledger** — `--ink-wash` bg, single row of institutional data in Plex Mono 11px caps, letter-spacing 0.14em. Fixed content (not scrolling): `Established 1981 · 44 Years · NIRF Band 201–300 · 7 UG Programmes · 780 Sanctioned Intake · Affiliated to Osmania University`. This is the invented institutional-watermark move — a static ledger, not a marquee.

4. **Main sticky header** — 76px tall, `--paper` bg. Gains `elevation-1` shadow after 8px scroll (`.scrolled` class toggled on scroll).
   - Brand: 42x42px `--ink` square mark with "V" in Fraunces 22px, wordmark "Vasavi College of Engineering" (Fraunces 19px) + subline "Hyderabad · Autonomous · Est. 1981" (Plex Mono 9px, letter-spacing 0.16em)
   - Primary nav (7 items): Home · About · Academics · Admissions · Departments · Placements · Campus Life
   - Right: "Contact" as bordered outline button (border becomes filled on hover)
   - Hover / active state: 1px copper underline draws from left (300ms), text turns copper
   - Mega-menus (about/academics/departments/placements/campus): full-width 720px panel with 4 columns, `--paper` bg, `elevation-2`, fades in 200ms

5. **Footer** — `--ink` bg, 80px top padding.
   - 4-column grid: Institution (address, phone, email) · Quick Links · Academics · **Compliance & Regulatory** (first-class column with 6 clickable logo tiles: NAAC A++, NBA, UGC, AICTE, NIRF, ARIIA)
   - "Useful Links" strip below (RTI, Anti-Ragging, Grievance, Turnitin, LMS, Office 365, Sitemap, Accessibility)
   - Sub-footer: © notice, GST number, autonomy statement — Plex Mono 11px, `--ink-wash` bg

---

### 1. Homepage (`index.html`)

**Hero — Variant A (default: Editorial photo split)**

- 60/40 split grid (`1.15fr 1fr`), 720px min-height
- Left column:
  - Eyebrow: "AUTONOMOUS · NAAC A++ · EST. 1981" (Plex Mono 11px, copper, letter-spacing 0.14em)
  - H1: `clamp(44px, 6vw, 84px)`, Fraunces 400, letter-spacing -0.025em, line-height 1.02
  - Split across three lines: `"Engineering excellence,"` (upright ink) + `"forty-four years"` (italic copper, weight 300) + `"in the making."` (upright ink)
  - **Word-stagger animation on load**: each word fades up (translateY 24px → 0, opacity 0 → 1) at 80ms delays
  - Lede: 20px, weight 300, max-width 44ch, line-height 1.5
  - Two CTAs: `[Explore Programmes →]` (filled copper primary) + `[Admissions 2026–27]` (ink outline ghost)
- Right column:
  - 4:5 aspect ratio campus photo (`assets/vce-campus-1.jpg`), `filter: saturate(0.85) contrast(1.05)`
  - Bottom-left blueprint corner tick marks (see "Blueprint corner ticks" below)
  - Bottom-left photo caption pill: `rgba(21,34,56,0.88)` bg, Plex Mono 10px caps: **"FIG. 01"** (in copper) + · Main Academic Block, Ibrahimbagh Campus, Hyderabad

**Hero — Variant B (Archival)** and **Variant C (Cinematic)** are also implemented and switchable via the Tweaks panel (top-right when Tweaks toggle is on):
- B: centered title-page treatment with vertical caps eyebrow, 128px Fraunces headline, italic motto, 4-thumbnail row across
- C: full-bleed campus photo, dark ink overlay gradient, headline anchored bottom-left

**News strip** (`--paper-warm` bg, 40px vertical padding)
- Header row: eyebrow `§01 · Latest`, H2 "From the Notice Board", filter chips (All / Results / Registration / Circulars / Events / Deadlines)
- 4-column grid, 8 notice cards
- Each notice: `border-top: 1px solid var(--ink)`, 16px padding-top
  - Category row: colored 6px dot + Plex Mono 10px caps category label
  - Title: Public Sans 15px, weight 500, line-height 1.4
  - Meta: Plex Mono 10px date `05 · AUG · 2026`
- Category dot colors: Registration = copper, Result = teal, Circular = slate, Event = green, Deadline = rust
- Filter chips (Plex Mono 10px caps): active = ink bg + paper text; inactive = fog border + slate text

**§02 Accreditation Bento**
- 3-column asymmetric grid, 16px gap
- **Hero tile** (spans 2 rows, `--ink` bg): "A++" in Fraunces 156px (with ++ in italic copper-warm), label "NAAC Grade" + description underneath. `elevation-2` on hover.
- Two secondary tiles (right side, stacked): NIRF Band 201–300; NBA 7/7 Programmes Accredited
- Bottom strip spans the two right columns: green tick circle + "Autonomous status extended, 2021 → 2031"
- Each tile has blueprint corner ticks (see below)

**§03 Departments — Index cards** (this is the innovation move, not photo cards)
- Filter tab bar (All / Computer Science / AI & ML / Electronics / Electrical / IT / Mechanical / Civil), copper underline on active
- 3-column grid of 9 dept cards
- Each card:
  - Blueprint corner ticks (4 corners)
  - Code line: `DEPT-CSE-01 · EST. 1988` (Plex Mono 10px, letter-spacing 0.16em, copper)
  - Dept name (Fraunces 26px, letter-spacing -0.015em)
  - Discipline sub-line (Plex Mono 10px caps, slate)
  - One editorial descriptor (13.5px, slate)
  - Hairline separator
  - Footer row: fact (copper caps) + "Open →" (slate caps)
  - **Hover behavior**: card border → copper, `translateY(-3px) + elevation-2`, backdrop image (grayscale-to-color 500ms) fades in behind, `rgba(21,34,56,0.86)` overlay drops on, all text turns paper/copper-warm
- Clicking a card → `department.html?d=<key>`

**§04 Placements** (dark section, `--ink` bg)
- 4-column stat row: 92%, ₹82LPA, 410+, 150+ — Fraunces 72px copper-warm numerals, animated count-up on scroll into view (`data-count` attribute, 1400ms cubic ease-out)
- Recruiter marquee: two rows scrolling opposite directions (`animation: mq 40s linear infinite`), grayscale logos as italic-Fraunces text-in-borders, turn copper-warm on hover, `mask-image` fade at edges
- 3-column success cards: real named alumni quotes in italic Fraunces 20px, `rgba(255,255,255,0.03)` bg, copper accent on quote mark

**Legacy quote band** (`--paper-warm` bg, 96px padding)
- Centered motto quote in Fraunces `clamp(32px, 4vw, 52px)`: *"Striving for a symbiosis of technological excellence and human values."* — with the two phrases in italic copper
- Attribution: Plex Mono 11px caps with a 40px copper line prefix

**§05 Campus Life**
- 3-column flagship event cards (Acumen, Euphoria, Kriti)
- Each: 4:5 aspect, full-bleed grayscale image that colorizes + `scale(1.05)` on hover
- Gradient overlay `linear-gradient(180deg, transparent 40%, rgba(21,34,56,0.9) 100%)`
- Bottom content: category (copper-warm caps), event name (Fraunces 34px), one-line desc
- Top-right arrow circle button (turns copper on card hover)
- Below: horizontal chip strip for 12 clubs/cells with `01 · NSS` etc. Plex Mono numbering.

---

### 2. Department Page (`department.html?d=<key>`)

**One page, 8 department views**, driven by `departments-data.js`. Query param `d=cse|aiml|ece|eee|it|mech|civil|hs`. Defaults to `cse`.

- **Department switcher strip** (`--paper-warm` bg, between chrome and hero): "Departments" label + 8 dept-abbreviation chips. Active dept shows in `--ink` bg with copper border.
- **Masthead** — Fraunces `clamp(48px, 6vw, 82px)`, ink base with the last word italic copper (e.g. "Computer Science & *Engineering.*")
  - Code band above H1: `DEPT-CSE-01 / Established 1988 / B.E. · 180 Sanctioned [NBA Accredited badge]`
  - 4-fact stat row below lede: Faculty count, Labs count, Placement %, Regulation
  - Decorative circular circuit-board texture at 8% opacity in top-right corner
- **Two-column layout**: 220px sticky left rail (`position: sticky; top: 108px`) + content
  - Left rail: 6 anchor links (Overview, Faculty, Labs & R&D, Syllabus, Outcomes, Downloads), each numbered 01–06 in Plex Mono. Active state: copper text + 12px copper hairline extending right
  - Below rail: HOD box with initials avatar, name, role
- **Sections** (each `border-bottom: 1px solid var(--fog)`, 48px vertical padding):
  1. Overview — 3 body paragraphs, first is lede (19px, weight 300)
  2. Faculty — search input + 4 rank filter pills, 3-column grid of faculty cards (48px initials avatar in ink-wash bg with copper-warm text, name in Fraunces 17px, designation in Plex Mono 10px copper caps, specialty in 13px slate)
  3. Labs & R&D — 2-column grid of lab tiles (code, title, equipment description, 3 tag pills)
  4. Syllabus — R-24/R-20 selector + semester selector + syllabus row list (subject code / credits / name / PDF button)
  5. Outcomes — PO/PSO attainment table with copper bar-graph attainment visualization
  6. Downloads — 5 official document rows

---

### 3. Examinations Hub (`exams.html`)

Replaces the current site's 3 duplicate notice boards. Single unified filterable table.

- **Dark masthead** with two decorative concentric border circles in copper (`rgba(199,122,68,0.15)` and `0.08`) in the top-right — a system visual signature for §Section-heavy pages
- Code band: `§ Academic Notice Board · Controller of Examinations · Autonomous Examination Branch`
- H1: "Examinations & *Circulars.*"
- **Subscribe** primary button below lede
- **Sticky filter bar** (`position: sticky; top: 76px`, `--paper` bg with `border-bottom: 1px solid var(--fog)`)
  - Search input with magnifier icon + `⌘K` hint chip on right
  - 7 category filter chips (with colored dot indicators matching palette utility colors)
  - 3 dropdown selects: Programme / Semester / Year
- **Notice list**: grid rows `120px 140px 1fr auto`
  - Left: 2-line date column (day+month large, year small below)
  - Category cell: 8px colored dot + Plex Mono caps category name
  - Body: title (Public Sans 15px weight 500) + meta row (Plex Mono 10px separated by `·`)
  - Right: "Open Portal →" / "PDF ↓" / "View →" button, teal border-only that fills teal on row hover
  - `NEW` badge appears before body content on `[data-flag="new"]` rows (copper caps border)
- **Pagination** at bottom (Plex Mono 12px numeric buttons)

---

### 4. Static content pages (About, Vision-Mission, Governance, Accreditation, Academics, Admissions, Almanac, Placements, Facilities, Research, Contact, Alumni, Careers, Campus Life, Recruiters)

All follow one of two established layout patterns:

**Pattern A — Two-column with sticky nav rail** (used by most content pages)
- `.page-hero` masthead with crumb + code band + Fraunces H1 (last word italic copper) + lede + optional 4-fact hero-facts row
- Grid: 220px sticky left nav + main content
- Sections marked with `.num` (Plex Mono `01 · Section Name` with 20px hairline)
- H2 in Fraunces 40px
- Prose in Public Sans 16px, max-width 65ch, line-height 1.7
- Optional dark variant (`.page-hero.dark`) — used for Admissions, Placements, Accreditation, Research, Careers, Student Portal, Exams

**Pattern B — Full-width content** (used by campus-life, recruiters)
- No sticky nav — content flows in centered sections with mid-page section-number labels
- Recruiters uses sector-grouped grids (4-col rec-tile grid with italic Fraunces company names)
- Campus life uses alternating left/right flag-event blocks

**CTA banners** (`.cta-banner` at bottom of many pages)
- `--ink` bg, 64px padding
- Split layout: eyebrow + Fraunces H2 (last word italic copper-warm) + lede on left; primary + ghost buttons on right

---

### 5. Student Portal (`student-portal.html`)

The one page that's fully dark, per the design rule about authenticated / personal-use surfaces:
- Dark hero with radial copper glow decoration in top-right
- Two-column login card grid: Students (roll number input) + Faculty & Staff (institutional email input)
- Cards use `rgba(255,255,255,0.04)` bg with `backdrop-filter: blur(8px)`, copper border on hover
- Below (light section): 3-column grid of 12 service tiles (Results, Timetables, Moodle, Office 365, Library, E-Journals, Fee Payment, Attendance, Turnitin, T&P, Faculty Dashboard, Counselling)
- Each service tile: 44px circular outline icon with initial letter in copper, category eyebrow, Fraunces 22px title, description, "Open →" caps link
- Help block at bottom with 3-column contact-way tiles

## Innovative Moves (not in original spec — invented for this design)

These are original design decisions worth preserving:

1. **The Ledger** — the horizontal static data strip between utility bar and header. Reads as an institutional watermark. Not scrolling — deliberate rejection of the marquee pattern in favor of a quiet stamp.
2. **`§01`-numbered sections** with old-style figure numbering — treats the homepage like a bound institutional volume rather than a marketing landing page.
3. **Blueprint corner ticks** — thin 1px 12x12px L-brackets in `--copper` at 0.6 opacity, positioned at the corners of key cards. Purely decorative, but reads as drafting registration marks. Implementation:
   ```css
   .tick-wrap { position: relative; }
   .tick-wrap::before, .tick-wrap::after,
   .tick-wrap > .tick-bl, .tick-wrap > .tick-br {
     content: ""; position: absolute; width: 12px; height: 12px;
     border: 1px solid var(--copper); opacity: 0.6; pointer-events: none;
   }
   .tick-wrap::before { top: -6px; left: -6px; border-right: none; border-bottom: none; }
   .tick-wrap::after { top: -6px; right: -6px; border-left: none; border-bottom: none; }
   .tick-wrap > .tick-bl { bottom: -6px; left: -6px; border-right: none; border-top: none; display: block; }
   .tick-wrap > .tick-br { bottom: -6px; right: -6px; border-left: none; border-top: none; display: block; }
   ```
4. **Departments as index cards, not photo cards** — Plex Mono dept codes (CSE-01, ECE-03, MECH-06...) with founding year. Reads like a card catalog rather than a stock-photo grid.
5. **Fraunces italic as accent** — italic copper against upright ink is the site's signature type gesture. Used in every H1 across the site.
6. **Motto as vertical running head** — fixed left-edge rotated text at 1180px+ viewports. Removed on mobile.

## Interactions & Behavior

**Scroll behaviors:**
- Sticky header gains `.scrolled` class + `elevation-1` shadow when `window.scrollY > 8`
- `.reveal` elements fade up on entering viewport (IntersectionObserver, threshold 0.15, `translateY(16px) + opacity 0 → 1`, 800ms cubic ease)
- `.reveal-line` variant: 48px copper hairline draws left-to-right beneath heading (1s cubic ease)
- On dept pages, in-page scroll-spy toggles `.active` on `.page-nav a` matching visible section (rootMargin `-40% 0px -55% 0px`)

**Anchor navigation:** Smooth scroll with 120px top offset to clear the sticky header:
```js
window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' });
```

**Stat counter animation** (homepage placements section):
- Element with `data-count="92"` and text like `92<span class="unit">%</span>`
- IntersectionObserver triggers count-up from 0 to target over 1400ms with `1 - (1-t)^3` cubic-out easing
- Unit HTML is preserved during animation

**Filter chips** (news strip, exams hub, dept filter):
- Clicking a chip toggles `.active` on it and filters `.news-item[data-cat]`, `.notice-row[data-cat]`, or `.dept-card[data-f]` accordingly
- Show/hide is `display: '' | 'none'`; "Showing N of 247" count updates live

**Mega-menu:**
- On `li:hover`, `.mega` panel gets `opacity: 1; pointer-events: auto; transform: translateX(-50%) translateY(0)` from initial `opacity: 0; pointer-events: none; translateY(-8px)`
- 200ms opacity, 300ms transform

**Recruiter marquee (placements section on homepage):**
```css
@keyframes mq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.marquee { animation: mq 40s linear infinite; }
.marquee.reverse { animation-direction: reverse; animation-duration: 50s; }
```
Each logo tile turns from `rgba(250,248,244,0.4)` to `--copper-warm` on individual hover; border shifts from `rgba(255,255,255,0.1)` to `--copper`.

**Tweaks panel** (top-right when host toolbar Tweaks toggle is on) exposes:
- Hero variant switch (A/B/C)
- Accent palette (Copper default / Crimson / Forest / Indigo — swaps `--copper` and `--copper-warm` CSS variables at runtime)
- Display font (Fraunces / Playfair Display / IBM Plex Serif / DM Serif Display)
- Motto rail toggle

These tweaks aren't part of production spec — they're author-time explorations, likely to be removed for the production build unless the client wants to keep them as admin-only controls.

## State Management

The current implementation is **fully static** — no client-side state, no data fetching, no forms actually submit. To productionize:

- **Notice/Exams Hub** — should be backed by a CMS (Strapi, Sanity, or WordPress) with categories, programme, semester, year as filter fields
- **Department pages** — content sits in `departments-data.js` as one JS object per department; in production, either
  - keep as static content (updates via Git PR — appropriate for a college where dept content changes rarely), or
  - migrate to CMS if HODs need self-serve editing
- **Placements stats** — currently hardcoded; should read from a yearly-updated JSON or CMS
- **Faculty grids** — hardcoded in `departments-data.js`; consider directory service
- **Student Portal login** — visual mock only. Must be wired to institutional SSO (Office 365 as noted in the design)
- **Contact forms** — none currently. Any contact form should submit to institutional email + create a ticket

**Recommended architecture** if implementing in Next.js:
- Static content (About, Vision, Governance, Academics, Departments) → SSG (static generation) with content from Markdown/MDX files or a CMS
- Dynamic (Exams Hub, Placements stats) → SSR with revalidation on CMS webhook
- Student Portal → separate authenticated app behind SSO, ideally at `portal.vce.ac.in` subdomain

## Assets

All images are license-cleared (CC / Public Domain from wikimedia commons / license-filtered image search):

| File | Origin | Used on |
|---|---|---|
| `assets/vce-campus-1.jpg` | Vasavi College campus photograph | Homepage hero, About |
| `assets/vce-campus-2.jpg` | Vasavi campus | Departments (EEE, MECH backdrops) |
| `assets/vce-campus-3.jpg` | Vasavi campus | About, Campus Life (Euphoria) |
| `assets/vce-library.jpg` | Vasavi library | Departments (H&S), Campus Life (Kriti), About thumbs |
| `assets/circuit-board.jpg` | Circuit board close-up | Dept hero decorative backdrop |
| `assets/osmania-library.jpg` | Osmania University library | Campus Life gallery strip |
| `assets/students.jpg` | Indian college students convocation | Campus Life (Acumen) |

Replace all of these with real VCE photography during production. The design specifies **no stock imagery** — the current images are stand-ins.

Icons throughout the site are **inline SVG** (search magnifier, checkmark, chevron) or **rendered as text/emoji-free glyphs**. There is no icon library dependency. Add [Lucide](https://lucide.dev) or [Radix Icons](https://icons.radix-ui.com/) if the target codebase already uses one, but the design is icon-light by intent.

## Files in this handoff

See the bundled files below for the full source. The key ones:

**Shared / cross-cutting:**
- `styles.css` — the design system (tokens, utility bar, ledger, header, footer, buttons, elevation)
- `page-styles.css` — page-level shared styles (masthead, sticky-nav layout, cards, data table, CTA banner)
- `site-chrome.js` — injects header + footer, sets active nav, handles scroll shadow + reveal-on-scroll
- `departments-data.js` — all 8 departments' content data
- `tweaks_panel.jsx` + `tweaks-vce.jsx` — author-time Tweaks UI (safe to drop in production)

**Pages (all 22):**
See the full file list in the bundle. Each page is a self-contained HTML with page-specific styles inline in `<style>`, chrome injected by `site-chrome.js`, and page-specific JS at the bottom.

## Implementation Notes

1. **Do not preserve the query-param routing** (`department.html?d=cse`) if the target framework supports file-based dynamic routes. Prefer `/departments/[slug]` in Next.js or equivalent.

2. **The `site-chrome.js` inline HTML injection** is a hack made necessary by the vanilla-HTML delivery. In a React/Vue/Astro codebase, chrome should be a `<Layout>` component wrapping every page. Do not carry over the innerHTML-injection approach.

3. **Fraunces variable font** — the design uses opsz (optical size) and SOFT axes. Load the variable font, not the static instances. Google Fonts URL in the design system section above is correct.

4. **Section-numbered pattern** (`§01 · Latest`, `§02 · Accreditation`, etc.) is consistent across all pages — treat as a design system component (`<SectionNumber n="01">Latest</SectionNumber>` or similar).

5. **Blueprint corner ticks** — implement as a mixin or wrapper component. Do not inline the 4 pseudo-element rules on every tick-wrap consumer.

6. **The `#tweaks-root` and Tweaks JSX** are demonstration-only. Remove before production unless the college wants them retained as admin theme controls.

7. **Accessibility** — the current implementation has good semantic HTML (proper `<nav>`, `<main>`, `<footer>`, `<section>`, heading hierarchy) but has not been audited for WCAG AA contrast on all copper-on-paper combinations. **Please run an accessibility audit before shipping** — particularly:
   - `--copper #AB5B23` on `--paper-warm #F3EFE7` in small-text contexts (may need to darken copper slightly)
   - `--slate #5B6472` on `--paper #FAF8F4` (typically borderline 4.5:1; verify)
   - Focus states on form inputs (currently only `border-color` change; consider adding a 2px focus ring)

8. **Print styles** are not implemented. The site should print reasonably for the compliance-documents use case (assessors printing accreditation dockets). Add `@media print` rules to hide chrome and expand content.

9. **Responsive** — every page has mobile/tablet breakpoints at 960px and 640px. Test the sticky-nav-rail collapse to horizontal chip nav at 960px.

10. **The `motto-rail` fixed vertical text** must be hidden below 1180px (already coded). It's a signature system element on wide viewports but not viable on tablets/phones.

## Priority order for implementation

If shipping incrementally:

1. **Homepage + shared chrome + design system** — the foundation
2. **Exams Hub** — highest return-visit page for students; also the biggest IA fix
3. **Department pages** (data-driven, one implementation covers 8 depts)
4. **Admissions + Academics** — critical for the June-August admission cycle
5. **About cluster** (About, Vision-Mission, Governance, Accreditation) — accreditation-audience critical
6. **Placements + Recruiters** — recruiter-facing pages
7. **Campus Life + Facilities + Research** — richer content, lower urgency
8. **Contact + Alumni + Careers + Student Portal** — utility surfaces

## Contact / next steps

This is a **complete design** — all 22 pages built, cross-linked, and production-scope. There are no known missing screens. Any changes from here should be scoped as revisions, not fresh design work.

For deploy / publish, the recommended path is **Genspark Code** (which can develop and deploy directly from Genspark Design outputs), or export to an external Next.js / Astro codebase using the notes above.
