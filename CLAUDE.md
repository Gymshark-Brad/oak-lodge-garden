# Oak Lodge Garden — Claude Context File

Read this before doing anything. It contains everything needed to work on this project without rebuilding context from scratch.

---

## What this is

A personal interactive garden journal for Oak Lodge, Bromsgrove. Built and maintained by Brad (b.h.). Documents the garden layout, plant inventory, monthly photos, and care information. Not commercial — a personal project.

**Live site:** https://gymshark-brad.github.io/oak-lodge-garden/
**GitHub repo:** https://github.com/Gymshark-Brad/oak-lodge-garden
**Hosting:** GitHub Pages (static, no server-side anything)

---

## File structure

```
oak-lodge-garden/
  index.html          # Entry point. Loads React + Babel + all components
  paper.css           # Full design system. Paper/ink aesthetic, 5 seasonal palettes
  data.js             # SINGLE SOURCE OF TRUTH. All zones, plants, photos, bed maps
  palette.js          # Seasonal palette switcher (Spring/Summer/Autumn/Winter/Night)
  app.jsx             # Main shell. Handles routing between plan/bed/plant views
  GardenPlan.jsx      # Top-down SVG garden map with clickable zones
  BedDetail.jsx       # Bed view: plant map + plant list + photo gallery
  PlantCard.jsx       # Herbarium-style plant care card (slides up as overlay)
  SeasonalCalendar.jsx  # Monthly care calendar — click a month to see all tasks
  seasonal-data.js    # Task data for the calendar, keyed by month (jan–dec)
  BACKLOG.md          # Prioritised improvements list
  CLAUDE.md           # This file
  README.md           # Basic repo info
  data/
    plants.json       # Plant data as standalone JSON (mirrors data.js PLANTS)
  images/
    may-2026/         # 21 photos, all WebP, max 1200px
      bed1.jpg, bed1-close1.jpg, bed1-close2.jpg
      bed2-1.jpg, bed2-2.jpg, bed2-kitchen.jpg, bed2-steps.jpg,
      bed2-south1.jpg, bed2-south2.jpg
      bed3.jpg, bed3-detail.jpg
      bed4.jpg, bed4-wide.jpg
      stone-bed.jpg, stone-bed-wide.jpg, stone-bed-detail1.jpg, stone-bed-detail2.jpg
      steps.jpg
      patio.jpg, patio-door.jpg, patio-clematis.jpg
```

---

## Tech stack

- **React 18** (production UMD build, no npm, no build step)
- **Babel standalone** (compiles JSX in the browser — fine for static hosting)
- **Pure CSS** (paper.css, no framework)
- **No backend** — everything is static files on GitHub Pages
- **Fonts:** Caveat (handwritten), Cormorant Garamond (serif), Special Elite (typewriter), Gloock (display) — all Google Fonts

### Why no build step?
Deliberate choice. Brad is not an engineer. The repo needs to be updatable by dropping files in and running git push. No npm install, no build commands, no CI pipeline.

---

## Data architecture

Everything lives in `data.js` as `window.OAK`. Four objects:

### ZONES
One entry per clickable area on the garden plan. Keys: `bed1`, `bed2`, `bed3`, `bed4`, `stone`, `steps`, `patio`, `kitchen`, `lounge`, `pear`.

```javascript
bed1: {
  id: "bed1",
  title: "Flower Bed 1",
  badge: "Raised timber bed",
  dims: "2.6m × 2.6m",
  where: "Corner by the gate, upper level",
  desc: "...",
  shape: { kind: "rect", x: 75, y: 38, w: 130, h: 130 },  // SVG viewBox 820x620
  color: "#8b5e3c",
  labelXY: [140, 105],
  plantKey: "Bed 1",  // Links to PLANTS object. null for hardscape zones.
}
```

### PLANTS
Keyed by zone label (matches `plantKey` in ZONES). Each plant has:
```javascript
{
  name, latin, position, light, water, care, seasonal
}
```

Zone labels: `"Bed 1"`, `"Bed 2"`, `"Bed 3"`, `"Bed 4"`, `"Stone Bed"`, `"Patio"`, `"Tree"`

### PHOTOS_BY_MONTH
```javascript
{
  "may-2026": {
    label: "May 2026",
    bed1: [ { src: "images/may-2026/bed1.jpg", caption: "Overview from paving" }, ... ],
    bed2: [...],
    // keys match ZONES keys
  }
}
```
**Adding a new month:** add a new top-level key (e.g. `"jun-2026"`) with the same structure. BedDetail.jsx currently reads `may-2026` hardcoded — this needs updating when multi-month timeline is built.

### BED_PLANT_MAPS
Clickable plant positions on the bed detail map. Each entry:
```javascript
{ name, x, y, r, hue }
// x/y in 0-100 viewBox, r = radius, hue = oklch hue for the circle colour
// name must exactly match the plant name in PLANTS
```

---

## Garden layout

Scale: ~50px = 1m, SVG viewBox 820×620. Two levels connected by steps.

**Upper level (north, gate end)**
- Flower Bed 1 (2.6m × 2.6m) — Japanese Maple dominant, raised timber bed
- Pear Tree — mature fruit tree, upper terrace
- Flower Bed 4 (2m × 3.8m, mirrored L) — Wisteria over right wall

**Transition**
- Steps (~3m × 3m) — block paving, several levels
- Flower Bed 3 (0.8m × 0.8m) — Apple tree with bird feeders

**Lower level (south, house end)**
- Flower Bed 2 (T-shape, between brick walls) — Weeping cherry, peony, dogwood
- Stone Bed (~4.8m × 1m) — Gravel, Cordyline, houseleeks, rosemary
- Patio (~6m × 3m) — Composite decking, Clematis montana on left house wall
- Patio Kitchen + Patio Lounge — hardscape, no plants

---

## Plant inventory summary (36 plants)

| Zone | Count | Key plants |
|------|-------|-----------|
| Bed 1 | 9 | Japanese Maple, Fatsia japonica, Rhododendron 'Goldflimmer', Box Hedging (full right edge) |
| Bed 2 | 10 | Weeping Cherry, Variegated Dogwood, Peony, Weigela, Silverbush |
| Bed 3 | 3 | Apple Tree, Avens (Geum), Wintercreeper |
| Bed 4 | 5 | Wisteria, NZ Flax, Rose, Yucca, Lavender |
| Stone Bed | 7 | Cordyline australis, dark Phormium, Aubrieta, Houseleeks, Rosemary |
| Patio | 1 | Clematis montana (left side of house wall) |
| Tree | 1 | Pear Tree (Pyrus) |

Full care data (light, water, care, seasonal) for every plant is in `data.js` PLANTS object.

---

## Design system

The aesthetic is a hand-drawn garden notebook. Paper textures, slightly rough SVG edges (feTurbulence filter), handwritten fonts, polaroid photos with tape, herbarium-style plant cards.

**Never break:**
- The paper texture feel — no flat coloured backgrounds, no card shadows that look like a web app
- The seasonal palettes — always test changes in all 5 palettes (Spring, Summer, Autumn, Winter, Night)
- The no-build-step constraint — no imports that require npm, no ES modules that break in the browser

**CSS variables (set by palette):**
```css
--paper, --paper-deep, --ink, --pencil, --stamp, --green, --accent, --tape
--ink-soft, --ink-faint, --hairline  /* derived via color-mix */
```

**Font classes:**
- `.t-display` — Gloock, headings
- `.t-hand` — Caveat, handwritten labels
- `.t-latin` — Cormorant Garamond italic, Latin plant names
- `.t-stamp` — Special Elite uppercase, section labels
- `.t-mono` — Special Elite smaller, metadata

---

## Navigation / routing

No router library. Simple state in `app.jsx`:
```javascript
view = { name: "plan" }
         | { name: "bed", zoneKey: "bed1" }
         | { name: "plant", zoneKey: "bed1", plantIndex: 2 }
```

`setView()` replaces the whole object. `window.scrollTo({ top: 0 })` on every transition.

---

## Monthly photo workflow

1. Brad takes photos (iPhone, HEIC format)
2. Drops into `iCloud Drive > Documents > Personal > OperationDodford > Garden > Incoming Photos`
3. CoWork automation (`garden-photo-sync.sh`) picks them up, converts to WebP, files to `images/[mon]-[year]/`, commits and pushes
4. **Manual step still needed:** update `PHOTOS_BY_MONTH` in `data.js` with the new month's paths

**Script location:** `~/oak-lodge-garden/garden-photo-sync.sh`
**Naming convention:** `images/jun-2026/bed1.webp`, `images/jun-2026/patio.webp`, etc.

---

## Gotchas and decisions

- **`tweaks-panel.jsx` is gone.** It was a Claude Design prototyping harness. It has been replaced with `palette.js`. Do not re-introduce it. **Design keeps putting it back in index.html — always check index.html after any Design delivery and replace `tweaks-panel.jsx` with `palette.js` before pushing.**
- **No `npm install`.** The React UMD builds are loaded from unpkg CDN. This is intentional. Don't add a package.json or build step.
- **Babel compiles JSX in the browser.** This means `<script type="text/babel">`. Don't change these to `type="module"` — it breaks.
- **Photos are JPG not WebP** in the current `may-2026` folder (converted from HEIC via pillow-heif). Future months will be WebP via CoWork.
- **`stone` not `stoneBed`** — the zone key in `data.js` is `stone`, not `stoneBed` as it was in the earlier prototype. Don't confuse them.
- **Bed 4 polygon coords** were adjusted from the original wireframe: `715,55 765,55 765,255 585,255 585,205 715,205` (Design version, slightly different from the prototype).
- **`plantKey` is null** for `steps`, `kitchen`, `lounge` — no plants there, don't add a plant list to those views.
- **Clematis is in Patio zone**, not Stone Bed. It was moved. Left side of the house wall.

---

## Current known gaps (photos)

As of 10 May 2026, photo gaps have been filled. New photos taken and processed via CoWork. Full end-to-end test (June HEICs → CoWork → git push) still pending — waiting on June photos.

---

## Backlog

See `BACKLOG.md` for the full prioritised list. Current top items:

1. **End-to-end photo test** — drop June HEICs into `Incoming Photos`, run "run the monthly photos" in CoWork. Confirms full pipeline works.
2. **Wire up new photos into data.js** — after CoWork pushes images, add new `PHOTOS_BY_MONTH` entry in `data.js`. Quick job in a new conversation.
3. **Monthly timeline view** — once June photos exist, build month tabs or before/after slider per bed. `BedDetail.jsx` currently hardcodes `may-2026`.
4. **Mobile swipe on photo gallery** — polaroid layout needs touch/swipe support on iPhone.
5. **CoWork auto-update of data.js** — close the last manual step in the monthly workflow.

**Done and off the list:**
- Seasonal care calendar (`SeasonalCalendar.jsx` + `seasonal-data.js`) — live
- CoWork skill installed and active (`garden-monthly-photos.skill`)
- Photo gaps filled (May 2026)

---

## How to start a new conversation

Paste this at the start:

```
I'm working on my Oak Lodge garden journal.
Repo: https://github.com/Gymshark-Brad/oak-lodge-garden
Live site: https://gymshark-brad.github.io/oak-lodge-garden/
Context file: read CLAUDE.md in the repo root before anything else.

Today I want to: [DESCRIBE THE FEATURE OR FIX]
```

That's enough. No further explanation needed.
