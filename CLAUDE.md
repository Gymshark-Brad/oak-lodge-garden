# Oak Lodge Garden — Claude Context File

Read this before doing anything. It contains everything needed to work on this project without rebuilding context from scratch.

---

## What this is

A personal interactive garden journal for Oak Lodge, Bromsgrove. Built and maintained by Brad (b.h.). Documents the garden layout, plant inventory, monthly photos, and care information. Not commercial — a personal project.

**Live site:** https://gymshark-brad.github.io/oak-lodge-garden/
**GitHub repo:** https://github.com/Gymshark-Brad/oak-lodge-garden
**Hosting:** GitHub Pages (static, no server-side anything)

---

## Deployment

Deploying = pushing to `main`. GitHub Pages rebuilds automatically (~1 min). There is no CI/build step.

**One command, run in Terminal from the repo root:**

```bash
./deploy.sh "short description of the change"
```

`deploy.sh` stages all changes, commits, and pushes to `origin main`. It also clears any stale git lock and keeps commits authored as the personal identity (`Bradley Gregg <bradg4@hotmail.com>`, repo-local config only — does not touch global git). Run with no message to get a timestamped default.

Note for Cowork/Claude sessions: file edits can be made directly in the mounted repo, but `git push` must run on Brad's own machine (SSH key + network live there, not in the sandbox). So the workflow is: make the file changes, then hand Brad the `./deploy.sh "…"` line to run.

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
  WateringGuide.jsx   # Weekly watering view — frequency grid + overwatering watch
  watering-data.js    # Water frequency band (1–5) per plant, keyed like PLANTS
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
One entry per clickable area on the garden plan. Keys: `bed1`, `bed2`, `bed3`, `bed4`, `stone`, `steps`, `patio`, `kitchen`, `lounge`, `pear`, `bigpot1`, `bigpot2`, `littlepot1`, `littlepot2`, `frontpot`.

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

Zone labels: `"Bed 1"`, `"Bed 2"`, `"Bed 3"`, `"Bed 4"`, `"Stone Bed"`, `"Patio"`, `"Tree"`, `"Big Pot 1"`, `"Big Pot 2"`, `"Little Pot 1"`, `"Little Pot 2"`, `"Front Pot"`

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
**Adding a new month:** add a new top-level key (e.g. `"jul-2026"`) with the same structure. BedDetail.jsx reads the last key alphabetically — no hardcoding, just keep keys in alphabetical order.

**Archive photos:** If a bed is replanted, add a `{zoneKey}Archive` sub-key in the same month entry (e.g. `bed3Archive`). BedDetail.jsx renders these in a separate "As it was" section with a sepia-toned polaroid style. Currently used for Bed 3 (June 2026 replant).

### BED_PLANT_MAPS
Clickable plant positions on the bed detail map. Each entry:
```javascript
{ name, x, y, r, hue }
// x/y in 0-100 viewBox, r = radius, hue = oklch hue for the circle colour
// name must exactly match the plant name in PLANTS
```

### WATER_BANDS (watering-data.js)
Lives in its own file, same pattern as `SEASONAL` in `seasonal-data.js` — keeps `data.js` from having to be touched for this feature. Registered as `window.OAK.WATER_BANDS` and `window.OAK.WATER_BAND_INFO`.

```javascript
WATER_BANDS = {
  "Bed 1": { "Japanese Maple": 3, "Angel Wings": 1, ... },  // keyed exactly like PLANTS
  ...
}
```

Band is an integer 1–5 (1 = rarely/drought-tolerant, 5 = daily). `WATER_BAND_INFO[band]` gives the label, chip text, one-line care note, and a 7-slot `days` array (Mon→Sun) used to plot the weekly grid. **Adding a new plant:** add it to `PLANTS` in `data.js` as normal, then add a matching entry to `WATER_BANDS` in `watering-data.js` — if you skip the second step the plant is silently left out of the watering guide (no error).

---

## Garden layout

Scale: ~50px = 1m, SVG viewBox 820×620. Two levels connected by steps.

**Upper level (north, gate end)**
- Flower Bed 1 (2.6m × 2.6m) — Japanese Maple dominant, raised timber bed, Dahlia (dark-leaved) in centre
- Pear Tree — mature fruit tree, upper terrace
- Big Pot 2 — large blue glazed pot on upper paving
- Flower Bed 4 (2m × 3.8m, mirrored L) — Wisteria over right wall
- Little Pot 2 — small blue pot near Bed 4 entrance

**Transition**
- Steps (~3m × 3m) — block paving, several levels
- Little Pot 1 — small blue pot at top of steps
- Flower Bed 3 (0.8m × 0.8m) — Apple tree with bird feeders

**Lower level (south, house end)**
- Big Pot 1 — large blue glazed pot at foot of steps
- Flower Bed 2 (T-shape, between brick walls) — Weeping cherry, peony, dogwood
- Stone Bed (~4.8m × 1m) — Gravel, Cordyline, houseleeks, rosemary
- Patio (~6m × 3m) — Composite decking, Clematis montana on left house wall
- Patio Kitchen + Patio Lounge — hardscape, no plants
- Front Pot — glazed pot at the front door; Gazania, Calibrachoa, Bacopa White (added June 2026)

---

## Plant inventory summary (updated June 2026)

| Zone | Count | Key plants |
|------|-------|-----------|
| Bed 1 | 14 | Japanese Maple, Fatsia japonica, Rhododendron, Box Hedging, Dahlia, Avens (moved from Bed 3), Dahlia (yellow, new June 2026) |
| Bed 2 | 13 | Weeping Cherry, Variegated Dogwood, Peony, Weigela, Silverbush, Hydrangea petiolaris |
| Bed 3 | 5 | Apple Tree, Callistemon 'Inferno', Achillea, Gaillardia, Abelia 'Kaleidoscope' — replanted June 2026 |
| Bed 4 | 5 | Wisteria, NZ Flax, Rose, Yucca, Lavender |
| Stone Bed | 7 | Cordyline australis, dark Phormium, Houseleeks, Rosemary, Cabbage Tree, Hebe |
| Patio | 1 | Clematis montana (left side of house wall) |
| Tree | 1 | Pear Tree (Pyrus) |
| Big Pot 1 | 6 | Fuchsia, Verbena, Calibrachoa, Nepeta, Lobelia, Petunia |
| Big Pot 2 | 5 | Lobelia, Verbena, Petunia, Nepeta, Fuchsia |
| Little Pot 1 | 2 | Geranium, Petunia |
| Little Pot 2 | 2 | Geranium, Petunia |
| Front Pot | 4 | Gazania 'Sunny Side Up', Gazania 'Orange Flame', Calibrachoa, Bacopa White — new June 2026 |

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
         | { name: "calendar" }
         | { name: "watering" }
         | { name: "bed", zoneKey: "bed1" }
         | { name: "plant", zoneKey: "bed1", plantIndex: 2 }
```

`setView()` replaces the whole object. `window.scrollTo({ top: 0 })` on every transition.

**Plant-card return path:** opening a plant card from somewhere other than its bed (Seasonal calendar or Watering guide) needs to know where "back" goes. This is tracked with a dedicated boolean per source — `calendarPlantReturn` / `wateringPlantReturn` — set in `openPlant()` via a `fromCalendar` / `fromWatering` flag, and checked in `closePlant()` to route back to the right view. Adding a third entry point means adding a third boolean + flag, following the same pattern (there's no generic "return to" field — this was a deliberate small duplication rather than a premature abstraction).

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
- **`frontpot` must be in GardenPlan.jsx `order` array** — the zone render order is hardcoded. Any new zone must be added there explicitly (and to the legend array below it).
- **Archive photo system** — `{zoneKey}Archive` sub-keys in `PHOTOS_BY_MONTH` hold historical photos for replanted beds. BedDetail.jsx renders them as a sepia "As it was / Pre-June 2026" section. Currently only `bed3Archive` is used.
- **`june-2026-updates/` folder** — WebP conversions of the June 2026 update photos (replant, new dahlia, front pot etc). Distinct from `june-2026/` which holds the full-bed photos taken earlier that month.

---

## Current known gaps (photos)

As of June 2026, all beds and new zones have photos. June update photos (Bed 3 replant, new Dahlia, Avens in Bed 1, Front Pot) are in `images/june-2026-updates/`. Older June photos (pre-update) are in `images/june-2026/`.

---

## Backlog

See `BACKLOG.md` for the full prioritised list. Current top items:

1. **Monthly timeline view** — build month tabs or before/after slider per bed. BedDetail.jsx already reads the last month key dynamically — just needs the UI.
2. **Mobile swipe on photo gallery** — polaroid layout needs touch/swipe support on iPhone.
3. **CoWork auto-update of data.js** — close the last manual step in the monthly workflow.

**Done and off the list:**
- Watering guide (`WateringGuide.jsx` + `watering-data.js`) — weekly frequency grid by zone, plus an "overwatering watch" section flagging drought-tolerant plants sharing a bed/pot with thirstier neighbours (July 2026)
- Seasonal care calendar (`SeasonalCalendar.jsx` + `seasonal-data.js`) — live
- CoWork skill installed and active (`garden-monthly-photos.skill`)
- Photo gaps filled (May + June 2026)
- Bed 3 replanted June 2026 — new plants, archive photos system added
- Front Pot zone added (`frontpot`) — Gazania, Calibrachoa, Bacopa White
- Avens moved Bed 3 → Bed 1; Dahlia (yellow) added to Bed 1

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
