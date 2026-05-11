# Enn Panai Private Limited — Modular Website Structure

## Project Layout

```
ennpanai/
├── index.html                  ← Shell page — includes CSS + calls loader
│
├── css/
│   ├── styles.css              ← Original design styles (unchanged)
│   └── mobile-fixes.css        ← NEW: all mobile + image fixes (import after styles.css)
│
├── js/
│   ├── sections-loader.js      ← NEW: dynamically loads section partials into #app-root
│   └── script.js               ← Original JS (overlay, hamburger, etc.)
│
├── sections/                   ← Each page section in its own file
│   ├── 01-nav.html             ← Overlay + Navigation bar
│   ├── 02-hero.html            ← Hero / landing panel
│   ├── 03-problem.html         ← Problem & Solution
│   ├── 04-opportunity.html     ← The Untapped Resource
│   ├── 05-process.html         ← Innovation / Process flow
│   ├── 06-sustainability.html  ← Sustainability + SDG cards
│   ├── 07-recognition.html     ← WGSN + Future Fabrics Expo
│   ├── 08-financials.html      ← Traction & Scale
│   ├── 09-impact.html          ← 3-Year Projections / Vision
│   ├── 10-directors.html       ← Founders
│   └── 11-close.html           ← Partner CTA + Contact + Footer
│
└── Assets/                     ← Images (unchanged from original)
```

---

## How Sections Are Loaded

`js/sections-loader.js` fetches each partial in the **SECTIONS array** and
injects them sequentially into `<div id="app-root">`.

### Adding a new section
1. Create `sections/12-new-section.html`
2. Add `'sections/12-new-section.html'` to the `SECTIONS` array in `sections-loader.js`

### Removing a section
Delete its entry from the `SECTIONS` array — no other file needs touching.

### Reordering sections
Change the order in the `SECTIONS` array.

---

## Mobile Fixes Applied (`css/mobile-fixes.css`)

| Issue | Fix |
|---|---|
| Sapling Nursery image half-visible | `object-fit: cover` + `max-height` + `object-position: center` |
| Founder photos oversized / misaligned | `aspect-ratio: 3/4`, `object-fit: cover`, `object-position: top` |
| WGSN image overflowing card | `width: 100%` + `overflow: hidden` on wrapper |
| App icon not square | Fixed `72×72px` with `border-radius` |
| Horizontal scroll on mobile | `overflow-x: hidden` on `html`, `body`, and all sections |
| Process steps overflowing | 2-column grid on mobile, 1-column below 420px |
| Social buttons wrapping badly | `flex-wrap: wrap` + `flex: 0 1 auto` |
| Directors stacked poorly | Single-column grid + centred photo on mobile |
| Compare grid squashed | Single-column below 640px |
| Stat grids squashed | Single-column below 400px |

---

## Important Notes

- **`sections-loader.js` uses `fetch()`** — the page must be served from a
  web server (e.g. `npx serve .` or VS Code Live Server). Opening `index.html`
  directly as a `file://` URL will block cross-origin fetches in most browsers.
- CSS custom properties (`--sage-deep`, `--serif`, etc.) are defined in
  `styles.css` and inherited by `mobile-fixes.css` — no duplication needed.
- `about.html` and `blog.html` are separate pages — not affected by this
  refactor.
