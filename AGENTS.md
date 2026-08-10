# Oak Lodge Garden — Codex Context File

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

Every deployment now includes a garden-journal checkpoint. Answer **yes** for real-world planting, moving, removal, gardening work, plant-identification or new plant/garden photo updates; those deployments must also change `journal-data.js` or deployment stops before committing. Answer **no** only for bug fixes, styling, data plumbing or site administration with no public garden-history change.

Note for Cowork/Codex sessions: file edits can be made directly in the mounted repo, but `git push` must run on Brad's own machine (SSH key + network live there, not in the sandbox). So the workflow is: make the file changes, then hand Brad the `./deploy.sh "…"` line to run.

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
  PlantProfile.jsx    # Full-page researched plant profile for authored v2 records
  plant-profile-data.js # Authored, source-backed v2 profiles for Beds 1–2
  back-garden-profile-data.js # Authored v2 profiles for every remaining back-garden zone
  front-garden-profile-data.js # Authored v2 profiles for every front-garden zone
  cultivar-resolution-data.js # Label confirmations and visibly qualified best-fit cultivar assumptions
  SeasonalCalendar.jsx  # Monthly care calendar — click a month to see all tasks
  seasonal-data.js    # Task data for the calendar, keyed by month (jan–dec)
  WateringGuide.jsx   # Weekly watering view — frequency grid + overwatering watch
  watering-data.js    # Water frequency band (1–5) per plant, keyed like PLANTS
  GardenJournal.jsx   # Visual newest-first diary of planting, moves, removals and photos
  journal-data.js     # Explicit May 2026 onward journal history and selected collage photos
  generate-thumbnails.py  # Builds fast display copies; originals remain for lightboxes
  BACKLOG.md          # Prioritised improvements list
  AGENTS.md           # This file
  README.md           # Basic repo info
  data/
    plants.json       # Plant data as standalone JSON (mirrors data.js PLANTS)
  images/
    thumbs/           # Generated 360×540 max WebP display derivatives
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
One entry per clickable area on the back-garden plan. Keys include `bed1`–`bed5`, `stone`, `steps`, `patio`, `kitchen`, `lounge`, `pear`, `bigpot1`, `bigpot2`, `lobeliapot`, `littlepot1`, `littlepot2`, `frontpot`, the wall pots and baskets. Front-garden zones use the `front…` prefix.

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
  name, latin, position, light, water, care, seasonal,
  description,
  characteristics: { sunlight, hardiness, flowering, water, habit, size, foliage, wildlife }
}
```

Profile fields are enriched centrally in `data.js` after the authored plant records are assembled. This guarantees every record has a description and the same eight at-a-glance characteristics, while named cultivars can override inferred values in `PROFILE_OVERRIDES`.

Rich v2 profiles are authored separately in `plant-profile-data.js` (Beds 1–2), `back-garden-profile-data.js` (all other back-garden zones) and `front-garden-profile-data.js` (all front-garden zones), keyed by stable plant ID. A plant with a `profile` object opens in the full-page `PlantProfile.jsx`; plants not yet researched continue to use the legacy `PlantCard.jsx`. Never manufacture v2 prose from the old inferred fields: uncertain species or cultivar identities must be labelled explicitly, and researched facts must include source entries. Every active back- and front-garden plant is fully migrated (July 2026).

`cultivar-resolution-data.js` is a separate, reversible identity layer loaded after the profiles, seasonal calendar and watering data. Photo-label discoveries use the visible suffix `— label confirmed`; best-fit guesses use `— assumed`. Never remove the assumed qualification without a retained label or stronger diagnostic evidence. The file updates display names, profile identity rows, bed-map labels, seasonal links and watering keys together while preserving stable plant IDs and the original names as lookup aliases.

Back-garden zone labels include `"Bed 1"`–`"Bed 5"`, `"Stone Bed"`, `"Patio"`, `"Tree"`, `"Big Pot 1"`, `"Big Pot 2"`, `"Cercis Pot"`, `"Nemesia Pot"`, `"Viburnum Pot"`, `"Bed 2/3 Wall Pot"`, `"Little Pot 1"`, `"Little Pot 2"` and `"Front Pot"`.

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
  "Bed 1": { "Japanese Maple 'Bloodgood'": 3, "Angel Wings": 1, ... },  // keyed exactly like PLANTS
  ...
}
```

Band is an integer 1–5 (1 = rarely/drought-tolerant, 5 = daily). `WATER_BAND_INFO[band]` gives the label, chip text, one-line care note, and a 7-slot `days` array (Mon→Sun) used to plot the weekly grid. **Adding a new plant:** add it to `PLANTS` in `data.js` as normal, then add a matching entry to `WATER_BANDS` in `watering-data.js` — if you skip the second step the plant is silently left out of the watering guide (no error).

### JOURNAL (journal-data.js)
The visual garden journal is an explicit historical record; never generate it at runtime from current profile prose. `window.OAK.JOURNAL.entries` is newest-first and each month contains a title, Brad's short diary note, 2–4 selected photographs and structured events.

Allowed event types are `baseline`, `planted`, `moved`, `removed`, `work` and `photographed`. Store the historical title, note, date label and location wording directly on the event so later plant renames or removals do not rewrite the past. Dates use `datePrecision: "day"` only where the exact day is supported; otherwise use `"month"`. Current plants and zones may add `plantId` / `zoneKey`; removed plants intentionally remain readable without a live plant record.

---

## Garden layout

Scale: ~50px = 1m, SVG viewBox 820×620. Two levels connected by steps.

**Upper level (north, gate end)**
- Flower Bed 1 (2.6m × 2.6m) — Japanese Maple dominant, raised timber bed, Dahlia (dark-leaved) in centre
- Pear Tree — mature fruit tree, upper terrace
- Big Pot 2 — large blue glazed pot on upper paving
- Flower Bed 5 — narrow Wisteria boundary bed on the right wall
- Little Pot 2 — square blue pot on the upper stair wall; established Coreopsis moved into it in August 2026

**Transition**
- Steps (~3m × 3m) — block paving, several levels
- Little Pot 1 — small blue pot at top of steps
- Flower Bed 4 (≈1.8m × 0.8m) — Apple tree with bird feeders; occupies the first third above the Stone Bed

**Lower level (south, house end)**
- Big Pot 1 — large blue glazed pot tucked into the decking corner at the foot of the steps
- Flower Bed 2 — vertical west-boundary section of the former sideways T; Weeping cherry, peony, Weigela, Silverbush, the Hebe moved from the Stone Bed and smaller perennials
- Flower Bed 3 — horizontal wall-gap arm split from Bed 2 in July 2026; Kerria, Forget-me-not, Centaurea 'Snowy Owl' and Spiraea
- Stone Bed (~4.8m × 1m) — Gravel bed replanted late July 2026 with 22 plants: Cordyline, dark Phormium, oakleaf Hydrangea, purple fountain grass, hardy houseleeks and stonecrops, two Ajugas, small alpines and two tender Echeverias; the rotten-crowned lavender was removed and the Hebe moved to Bed 2
- Patio (~6m × 3m) — Composite decking, Clematis montana on left house wall
- Nemesia Pot — former Lobelia pot south of the Cercis; Nemesia 'Lady Penelope' (assumed)
- Viburnum Pot — new pot in the Lobelia's former Bed 4-side position; Viburnum tinus Spirit
- Bed 2/3 Wall Pot — pot on the shared brick wall; Viburnum 'Lisarose' and an additional Vinca minor 'Illumination'
- Cercis Pot — terracotta specimen pot in the former stair-corner location; Cercis canadensis 'Carolina Sweetheart'
- Little Pot 1 — small blue pot shifted south below the Echinacea pot in August 2026
- Echinacea Pot — the former Coreopsis pot, now at Little Pot 1's previous position; Echinacea Mooodz Glory
- The two wall pots sit inside the Steps footprint; the Hanging Baskets marker sits inside Patio Kitchen.
- Patio Kitchen + Patio Lounge — hardscape, no plants
- Front Pot — glazed pot on the front-garden gravel immediately south of Front Bed 2; Gazania, Calibrachoa, Bacopa White

---

## Plant inventory summary (updated August 2026)

| Zone | Count | Key plants |
|------|-------|-----------|
| Bed 1 | 13 | Japanese Maple 'Bloodgood' (best fit), Fatsia japonica, Rhododendron, two Double Dreamy Dahlias (best fits), Abelia 'Kaleidoscope' and Pieris 'Forest Flame'; both Nemesias moved and Angel Wings removed August 2026 |
| Bed 2 | 10 | Weeping Cherry, Peony, Weigela, Silverbush, Hydrangea petiolaris and the relocated Hebe; Dogwood moved out July 2026 |
| Bed 3 | 4 | Kerria, Forget-me-not, Centaurea 'Snowy Owl', Spiraea 'Double Play Big Bang' |
| Bed 4 | 6 | Apple Tree, Callistemon 'Inferno', Gaillardia, Abelia 'Kaleidoscope', yellow Celosia and relocated Lobelia 'Starship Scarlet Bronze Leaf' |
| Bed 5 | 10 | Wisteria, Rose, Phormium; big-pot Alstroemeria, Petunia, original Vinca, Nemesia and relocated 'Aroma Heart of Gold'; two smaller planted pots |
| Stone Bed | 22 | Late-July alpine and succulent replant: five houseleek records, seven stonecrops, two Ajugas, Hydrangea ‘Snowflake’, Achillea ‘King Alfred’, Armeria ‘Armada White’, purple fountain grass, two tender Echeverias, dark Phormium and Cabbage Tree |
| Patio | 2 | Clematis montana and Honeysuckle; rotten-crowned Lavender removed July 2026 and retained in the Stone Bed photo archive |
| Tree | 1 | Pear Tree (Pyrus) |
| Big Pot 1 | 6 | Fuchsia, Verbena, Calibrachoa, Nepeta, Lobelia, Petunia |
| Big Pot 2 | 5 | Lobelia, Verbena, Petunia, Nepeta, Fuchsia |
| Little Pot 1 | 2 | Geranium, Petunia |
| Little Pot 2 | 1 | Coreopsis Gold moved from its former pot |
| Nemesia Pot | 1 | Nemesia 'Lady Penelope' (assumed) — moved from Bed 1 August 2026 |
| Viburnum Pot | 1 | Viburnum tinus Spirit — added August 2026 |
| Bed 2/3 Wall Pot | 2 | Viburnum 'Lisarose' and an additional Vinca minor 'Illumination' — added August 2026 |
| Cercis Pot | 1 | Cercis canadensis 'Carolina Sweetheart' — added August 2026 |
| Echinacea Pot | 1 | Echinacea Mooodz Glory — added August 2026 |
| Front Pot | 4 | Gazania 'Sunny Side Up', Gazania 'Orange Flame', Calibrachoa, Bacopa White — new June 2026 |
| Front Bed 2 | 5 | Three Coprosmas including new ‘City Knights’, Hebe ‘Kiwi’ and Polemonium ‘Golden Feathers’; Begonia Cocktail ‘Gin’ removed and archived July 2026 |
| Front Bed 3 | 5 | Climbing Rose 'Super Fairy', pink rose, relocated Variegated Dogwood and Red Hot Poker, Leucothoe 'Little Flames' |
| Front Bed 4 | 14 | Two climbing roses; three grouped Physocarpus entries containing four Little Devils and three newly replaced Lady in Reds; moved Purple Gem, Rhododendron 'Libretto', Spiraea, Pieris, Festuca, Astrantia, Photinia, Delosperma and relocated Achillea |
| Front Bed 5 | 22 | Established Laurel, Choisya and climbers plus five heathers, Ceratostigma, Hypericum, Sollya, Hebe, Salvia and a spare Little Devil added August 2026 |

Full descriptions, characteristics and care data for every plant are in the `data.js` PLANTS object.

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
         | { name: "journal" }
         | { name: "bed", zoneKey: "bed1" }
         | { name: "plant", zoneKey: "bed1", plantIndex: 2 }
```

`setView()` replaces the whole object. `window.scrollTo({ top: 0 })` on every transition.

**Plant-card return path:** opening a plant card from somewhere other than its bed needs to know where "back" goes. This is tracked with a dedicated boolean per source — `calendarPlantReturn`, `wateringPlantReturn`, `housePlantReturn` and `journalPlantReturn` — set in `openPlant()` by the matching source flag and checked in `closePlant()` to route back to the right view. Any new entry point must follow the same explicit pattern (there is no generic "return to" field — this is deliberate small duplication rather than a premature abstraction).

---

## Monthly photo workflow

1. Brad takes photos (iPhone, HEIC format)
2. Drops into `iCloud Drive > Documents > Personal > OperationDodford > Garden > Incoming Photos`
3. CoWork automation (`garden-photo-sync.sh`) picks them up, converts to WebP, files to `images/[mon]-[year]/`, commits and pushes
4. **Manual step still needed:** update `PHOTOS_BY_MONTH` in `data.js` with the new month's paths
5. If the photographs record new garden activity or add a public photo update, add or update that month in `journal-data.js` and select 2–4 representative collage photographs.
6. Run `python3 generate-thumbnails.py` in the repo after adding photo paths. The site falls back to originals if a thumbnail is missing, but cards and galleries will be slower until this runs.

**Script location:** `~/oak-lodge-garden/garden-photo-sync.sh`
**Naming convention:** `images/jun-2026/bed1.webp`, `images/jun-2026/patio.webp`, etc.
**Display thumbnails:** generated under `images/thumbs/` at a maximum of 480×720px; originals are retained for full-screen viewing.

---

## Gotchas and decisions

- **`tweaks-panel.jsx` is gone.** It was a Codex Design prototyping harness. It has been replaced with `palette.js`. Do not re-introduce it. **Design keeps putting it back in index.html — always check index.html after any Design delivery and replace `tweaks-panel.jsx` with `palette.js` before pushing.**
- **No `npm install`.** The React UMD builds are loaded from unpkg CDN. This is intentional. Don't add a package.json or build step.
- **Babel compiles JSX in the browser.** This means `<script type="text/babel">`. Don't change these to `type="module"` — it breaks.
- **Photos are JPG not WebP** in the current `may-2026` folder (converted from HEIC via pillow-heif). Future months will be WebP via CoWork.
- **`stone` not `stoneBed`** — the zone key in `data.js` is `stone`, not `stoneBed` as it was in the earlier prototype. Don't confuse them.
- **July 2026 back-plan correction:** old Bed 2 was split into Bed 2 + Bed 3; the apple-tree bed became Bed 4; the Wisteria bed became Bed 5. Above the full-width Stone Bed, Bed 4 uses the first third, the middle third is open, and Bed 5's mirrored-L arm uses the final third. The steps retain their original rectangular footprint.
- **`plantKey` is null** for `steps`, `kitchen`, `lounge` — no plants there, don't add a plant list to those views.
- **Clematis is in Patio zone**, not Stone Bed. It was moved. Left side of the house wall.
- **`frontpot` must be in GardenPlan.jsx `order` array** — the zone render order is hardcoded. Any new zone must be added there explicitly (and to the legend array below it).
- **Archive photo system** — `{zoneKey}Archive` sub-keys in `PHOTOS_BY_MONTH` hold historical photos for replanted beds. BedDetail.jsx renders them as a sepia "As it was / Pre-June 2026" section. Currently only `bed3Archive` is used.
- **`june-2026-updates/` folder** — WebP conversions of the June 2026 update photos (replant, new dahlia, front pot etc). Distinct from `june-2026/` which holds the full-bed photos taken earlier that month.
- **Cache-busting query strings** — every local script/stylesheet tag in `index.html` has a `?v=YYYYMMDD` suffix (e.g. `watering-data.js?v=20260704`). Without this, browsers (and GitHub Pages' CDN) can keep serving a stale cached copy of `data.js`/`watering-data.js`/the `.jsx` files after a deploy, so an update looks like it silently didn't take effect. **Bump the date in every `?v=` suffix in `index.html` whenever you edit any of those files** — a shared date is fine, it doesn't need to be per-file.

---

## Current known gaps (photos)

As of June 2026, all beds and new zones have photos. June update photos (Bed 3 replant, new Dahlia, Avens in Bed 1, Front Pot) are in `images/june-2026-updates/`. Older June photos (pre-update) are in `images/june-2026/`.

---

## Backlog

See `BACKLOG.md` for the full prioritised list. Audit remediation is ordered ahead of new product work:

1. **Data and deployment foundations** — remove the Bed 2/3 runtime mutation, regenerate stale data copies from `data.js`, and harden `deploy.sh`.
2. **Resilient loading and navigation** — self-host pinned runtime dependencies, add hash routing/history, and add browser smoke checks.
3. **Repository cleanup** — remove raw and duplicate assets only after Brad confirms the external backups and stale branch decision.
4. **Plant identity and safety** — confirm generic plant records from labels/photos, then add relevant toxicity and handling cautions.

Product work retained for after remediation: monthly bed timelines, mobile gallery swipe and automatic registration of monthly photos in `data.js`.

**Done and off the list:**
- Watering guide (`WateringGuide.jsx` + `watering-data.js`) — weekly frequency grid by zone, plus an "overwatering watch" section flagging drought-tolerant plants sharing a bed/pot with thirstier neighbours (July 2026)
- Seasonal care calendar (`SeasonalCalendar.jsx` + `seasonal-data.js`) — live
- CoWork skill installed and active (`garden-monthly-photos.skill`)
- Photo gaps filled (May + June 2026)
- Bed 3 replanted June 2026 — new plants, archive photos system added
- Front Pot zone added (`frontpot`) — Gazania, Calibrachoa, Bacopa White
- Avens moved Bed 3 → Bed 1; Dahlia 'Double Dreamy Gold' (best-fit identification) added to Bed 1

---

## How to start a new conversation

Paste this at the start:

```
I'm working on my Oak Lodge garden journal.
Repo: https://github.com/Gymshark-Brad/oak-lodge-garden
Live site: https://gymshark-brad.github.io/oak-lodge-garden/
Context file: read AGENTS.md in the repo root before anything else.

Today I want to: [DESCRIBE THE FEATURE OR FIX]
```

That's enough. No further explanation needed.

## Imported Claude Cowork project instructions
