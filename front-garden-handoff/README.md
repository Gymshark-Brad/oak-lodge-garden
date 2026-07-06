# Front Garden — build handoff for Claude Code

> ⚠️ **SUPERSEDED (July 2026).** Use `../front-garden-handoff-v2/` instead — it's built from Brad's measured survey and replaces the geometry, zone model, and data blocks below. The photos and sketches in this folder remain valid reference. Do not build from this file.

Everything needed to add the **Front Garden** to the Oak Lodge site. Read `CLAUDE.md` first, then work through the steps below in order. Data blocks are copy-paste ready; the JSX steps are precise edits.

**Visual reference:** `wireframe.html` (the annotated plan Brad signed off). The layout, bed order and plant list below all match it.

### What's in this folder

```
front-garden-handoff/
  README.md        ← you are here (the full spec)
  wireframe.html   ← the signed-off plan + photo map; lift its <svg class="plan"> into FrontGardenPlan.jsx
  photos/          ← the 23 front-garden photos (WebP). Also already copied into the repo at images/jul-2026/
  sketches/        ← Brad's two hand-drawn plans (source of the layout)
```

Apply all edits to the **live repo** (`data.js`, `watering-data.js`, `BedDetail.jsx`, `app.jsx`, `index.html`, new `FrontGardenPlan.jsx`). The photos are already in `images/jul-2026/` in the repo, so the `images/jul-2026/…` paths in the data blocks below resolve as-is — `photos/` here is just a reference copy.

---

## What the front garden is

A gravel forecourt running along the **front elevation** of the house (the opposite side from the existing back-garden plan). The house wall steps across the top of the plan; the garden sits in front of it. Left-to-right, following Brad's walk-through photos (IMG_4009 → 4034):

- **Study window + pots** (low left, driveway side) → recessed **front door** → **box bush** on the porch return wall
- **House-wall bed** running east under the Bedroom 3 / Bedroom 1 / Ensuite windows (climbing roses, fern, weigela, hostas, cotoneaster)
- Big **corner bush** in front of / over the ensuite window
- **Boundary bed** down the right side, along the brick boundary wall (laurel, variegated Choisya, a climber, thyme)
- Ground surfaces: a **slabbed sandstone section** inset in the **gravel forecourt**, stone trough (hosta) at the junction

Integration decision (Brad): the front garden is a **separate top-nav tab**, its own map, beds open in the existing `BedDetail` / `PlantCard` views.

---

## Step 0 — Photos (DONE)

23 photos are already converted to WebP (max 1200px) and sitting in `images/jul-2026/`. No action needed except wiring them into `PHOTOS_BY_MONTH` (Step 4). Filenames used:

```
front-door  study-gate  porch-nameplate  entrance-troughs  hosta-trough  honeysuckle  box-close
overview  wallbed-start  climbing-rose  fern-window  pink-rose  weigela  cotoneaster
corner-bush  corner-bush-berries
boundary-corner  boundary-thyme  laurel  choisya  choisya-flowers  climber  climber-berries
```

---

## Step 1 — `BedDetail.jsx` — per-zone latest month (REQUIRED)

`BedDetail.jsx` currently takes the last-inserted month globally (line ~10). Adding `jul-2026` as the newest month would make every **back-garden** bed look for July photos and show "no photographs". Fix it to pick the latest month **that actually has photos for this zone**:

```js
// BedDetail.jsx — replace lines ~9-11
const _monthKeys = Object.keys(window.OAK.PHOTOS_BY_MONTH);
let _latestMonth = _monthKeys[_monthKeys.length - 1];
for (let i = _monthKeys.length - 1; i >= 0; i--) {
  const md = window.OAK.PHOTOS_BY_MONTH[_monthKeys[i]];
  if (md && (md[zoneKey] || md[zoneKey + "Archive"])) { _latestMonth = _monthKeys[i]; break; }
}
const _latestMonthData = window.OAK.PHOTOS_BY_MONTH[_latestMonth] || {};
```

This is back-compatible: back-garden zones still resolve to `may-2026`, front zones to `jul-2026`.

---

## Step 2 — `data.js` → ZONES (add these four)

Front-plan SVG viewBox is `0 0 1000 640` (see Step 8). Coordinates below match the wireframe.

```js
// data.js — add to the ZONES object
frontEntrance: {
  id: "frontEntrance",
  title: "Front Entrance",
  badge: "Door, pots & box",
  dims: "Porch & forecourt",
  where: "Front elevation, by the front door",
  desc:
    "The approach to the front garden — recessed front door under the timber porch, a clipped box ball on the porch return, the blue glazed pot, and the stone trough. Hydrangea and lavender at the study-window end; honeysuckle over the entrance.",
  shape: { kind: "rect", x: 335, y: 430, w: 180, h: 110 },
  color: "#6b8e4e",
  labelXY: [420, 472],
  plantKey: "Front Entrance",
},
frontWallBed: {
  id: "frontWallBed",
  title: "Front · House-Wall Bed",
  badge: "Raised bed under the windows",
  dims: "Long border",
  where: "Along the house wall, Bedroom 3 → ensuite",
  desc:
    "Timber/brick raised bed running under the front windows. Climbing roses on the wall and an arch trellis, a large fern, a weigela in front of the ensuite (due a hard cut-back), cotoneaster at the near end, hostas below.",
  shape: { kind: "rect", x: 505, y: 258, w: 398, h: 34 },
  color: "#8b5e3c",
  labelXY: [704, 280],
  plantKey: "Front Wall Bed",
},
frontCornerBush: {
  id: "frontCornerBush",
  title: "Front · Corner Bush",
  badge: "Specimen shrub",
  dims: "Large shrub",
  where: "Corner, over the ensuite window",
  desc:
    "A large evergreen shrub at the corner where the house wall meets the boundary, spreading over the ensuite window — glossy leaves with red-pink berry/flower clusters (likely Viburnum tinus, to confirm).",
  shape: { kind: "circle", cx: 898, cy: 302, r: 72 },
  color: "#4f6d35",
  labelXY: [905, 308],
  plantKey: "Front Corner Bush",
},
frontBoundaryBed: {
  id: "frontBoundaryBed",
  title: "Front · Boundary Bed",
  badge: "Border along the wall",
  dims: "Runs south down the right",
  where: "Along the brick boundary wall",
  desc:
    "Border running south down the right side against the brick boundary wall. Cherry laurel, a lime-variegated Choisya, a wall-trained climber at the far end, and thyme at the near corner.",
  shape: { kind: "rect", x: 905, y: 360, w: 62, h: 215 },
  color: "#587a3a",
  labelXY: [936, 470],
  plantKey: "Front Boundary Bed",
},
```

---

## Step 3 — `data.js` → PLANTS (add these four keys)

⚠️ Items marked `// CONFIRM` / `// IDENTIFY` are Brad's open questions — latin names are best-guesses.

```js
// data.js — add to the PLANTS object
"Front Entrance": [
  {
    name: "Honeysuckle",
    latin: "Lonicera periclymenum", // CONFIRM — Brad unsure it's honeysuckle
    photos: ["images/jul-2026/honeysuckle.webp"],
    position: "Arching over the entrance",
    light: "Sun to part shade.",
    water: "Keep roots cool and moist; mulch.",
    care: "Prune after flowering; thin congested growth. Give it support over the entrance.",
    seasonal: "Scented flowers June–Aug; berries after. Semi-evergreen.",
  },
  {
    name: "Hosta",
    latin: "Hosta",
    photos: ["images/jul-2026/hosta-trough.webp"],
    position: "In the stone trough by the entrance",
    light: "Part to full shade.",
    water: "Keep moist; never bone-dry in the trough.",
    care: "Watch for slugs/snails. Divide clumps in spring.",
    seasonal: "Fresh leaves spring; dies back over winter.",
  },
  {
    name: "Box",
    latin: "Buxus sempervirens", // CONFIRM — box vs privet vs Lonicera nitida
    photos: ["images/jul-2026/box-close.webp"],
    position: "Clipped ball by the front door",
    light: "Sun to part shade.",
    water: "Moderate; don't let it dry out.",
    care: "Clip to shape May and late summer. Watch for box blight/caterpillar.",
    seasonal: "Evergreen year-round.",
  },
  {
    name: "Hydrangea",
    latin: "Hydrangea macrophylla",
    photos: ["images/jul-2026/front-door.webp"],
    position: "Left of the front door",
    light: "Morning sun, afternoon shade.",
    water: "Thirsty — water well in dry spells.",
    care: "Leave old flower heads over winter; prune to a strong bud in spring.",
    seasonal: "Mophead flowers July–Sept; bare in winter.",
  },
  {
    name: "Lavender",
    latin: "Lavandula angustifolia",
    photos: ["images/jul-2026/study-gate.webp"],
    position: "By the study-window brick pier",
    light: "Full sun.",
    water: "Drought-tolerant.",
    care: "Trim after flowering and again in spring; don't cut into old wood.",
    seasonal: "Purple spikes June–Aug; aromatic year-round.",
  },
],
"Front Wall Bed": [
  {
    name: "Cotoneaster",
    latin: "Cotoneaster", // CONFIRM
    photos: ["images/jul-2026/wallbed-start.webp", "images/jul-2026/cotoneaster.webp"],
    position: "Near end of the bed",
    light: "Sun to part shade.",
    water: "Low once established.",
    care: "Trim to shape after berrying. Very tough.",
    seasonal: "Small flowers spring; red berries autumn–winter.",
  },
  {
    name: "Climbing Rose (white-pink)",
    latin: "Rosa — IDENTIFY", // IDENTIFY (IMG_4020 / 4022)
    photos: ["images/jul-2026/climbing-rose.webp"],
    position: "On the wall by the Bedroom 3 window",
    light: "Sun.",
    water: "Deep watering, mulch in spring.",
    care: "Tie in new growth; prune late winter. Feed spring and after first flush.",
    seasonal: "Flowers June–Sept; bare winter.",
  },
  {
    name: "Fern",
    latin: "Dryopteris filix-mas", // CONFIRM
    photos: ["images/jul-2026/fern-window.webp"],
    position: "Below the Bedroom 1 window",
    light: "Shade to part shade.",
    water: "Keep moist.",
    care: "Cut back tired fronds in late winter. Low-care.",
    seasonal: "Fresh fronds unfurl spring; semi-evergreen.",
  },
  {
    name: "Rose (pink)",
    latin: "Rosa — IDENTIFY", // IDENTIFY (IMG_4023)
    photos: ["images/jul-2026/pink-rose.webp"],
    position: "Between the Bedroom 1 window and the ensuite",
    light: "Sun.",
    water: "Deep watering, mulch in spring.",
    care: "Prune late winter; deadhead through summer.",
    seasonal: "Flowers June–Sept; bare winter.",
  },
  {
    name: "Weigela",
    latin: "Weigela florida", // CONFIRM
    photos: ["images/jul-2026/weigela.webp"],
    position: "In front of the ensuite window",
    light: "Sun to part shade.",
    water: "Moderate.",
    care: "TO DO: hard cut-back — overgrown across the ensuite window. Prune after flowering, removing a third of old stems.",
    seasonal: "Pink flowers May–June; deciduous.",
  },
  {
    name: "Hosta",
    latin: "Hosta",
    photos: ["images/jul-2026/weigela.webp"],
    position: "Below the weigela",
    light: "Shade.",
    water: "Keep moist.",
    care: "Slug watch; divide in spring.",
    seasonal: "Leaves spring–autumn; dies back winter.",
  },
],
"Front Corner Bush": [
  {
    name: "Viburnum",
    latin: "Viburnum tinus", // IDENTIFY (IMG_4025-4027)
    photos: ["images/jul-2026/corner-bush.webp", "images/jul-2026/corner-bush-berries.webp"],
    position: "Corner, spreading over the ensuite window",
    light: "Sun to part shade.",
    water: "Low once established.",
    care: "Can take a hard prune after flowering to keep it off the window. Evergreen, tough.",
    seasonal: "Clusters of small flowers; metallic-blue/red berries.",
  },
],
"Front Boundary Bed": [
  {
    name: "Cherry Laurel",
    latin: "Prunus laurocerasus", // CONFIRM
    photos: ["images/jul-2026/laurel.webp"],
    position: "Along the boundary wall",
    light: "Sun to shade.",
    water: "Low once established.",
    care: "Prune with secateurs (not shears) late spring/summer. Vigorous.",
    seasonal: "Evergreen; white flower spikes spring.",
  },
  {
    name: "Mexican Orange Blossom",
    latin: "Choisya ternata 'Sundance'", // CONFIRM
    photos: ["images/jul-2026/choisya.webp", "images/jul-2026/choisya-flowers.webp"],
    position: "Mid boundary bed — lime-yellow foliage",
    light: "Sun for best colour.",
    water: "Moderate.",
    care: "Light prune after flowering to shape. Low-care.",
    seasonal: "Golden evergreen foliage; scented white flowers spring & again autumn.",
  },
  {
    name: "Climber (unidentified)",
    latin: "IDENTIFY", // IDENTIFY (IMG_4034 / 4035) — pinnate leaves + red berry clusters; rose hips? Sorbus?
    photos: ["images/jul-2026/climber.webp", "images/jul-2026/climber-berries.webp"],
    position: "Far end, trained up the brick wall",
    light: "Sun.",
    water: "Moderate.",
    care: "TBC once identified.",
    seasonal: "Red berry clusters noted July.",
  },
  {
    name: "Thyme",
    latin: "Thymus", // CONFIRM
    photos: ["images/jul-2026/boundary-thyme.webp"],
    position: "Near corner of the boundary bed",
    light: "Full sun.",
    water: "Drought-tolerant.",
    care: "Trim after flowering. Sharp drainage.",
    seasonal: "Aromatic evergreen; flowers early summer.",
  },
],
```

---

## Step 4 — `data.js` → PHOTOS_BY_MONTH (add `jul-2026`)

Add as a **new key after `may-2026`** (order no longer matters once Step 1 is in). Keyed by the new zone keys.

```js
// data.js — add to PHOTOS_BY_MONTH
"jul-2026": {
  label: "July 2026",
  frontEntrance: [
    { src: "images/jul-2026/front-door.webp",       caption: "Front door & porch, hydrangea at the base" },
    { src: "images/jul-2026/study-gate.webp",        caption: "Study window & side gate — hydrangea and lavender" },
    { src: "images/jul-2026/porch-nameplate.webp",   caption: "Porch, name plate, box ball and blue pot" },
    { src: "images/jul-2026/entrance-troughs.webp",  caption: "Entrance — box ball and stone trough" },
    { src: "images/jul-2026/hosta-trough.webp",      caption: "Hosta in the stone trough" },
    { src: "images/jul-2026/honeysuckle.webp",       caption: "Honeysuckle over the entrance" },
    { src: "images/jul-2026/box-close.webp",         caption: "Box bush by the front door (close)" },
  ],
  frontWallBed: [
    { src: "images/jul-2026/overview.webp",      caption: "Front garden overview from the entrance" },
    { src: "images/jul-2026/wallbed-start.webp", caption: "Start of the bed — cotoneaster, WC & Bedroom 3 windows" },
    { src: "images/jul-2026/climbing-rose.webp", caption: "Climbing rose on the wall by Bedroom 3" },
    { src: "images/jul-2026/fern-window.webp",   caption: "Fern & climbing rose by the Bedroom 1 window" },
    { src: "images/jul-2026/pink-rose.webp",     caption: "Pink rose between Bedroom 1 and the ensuite" },
    { src: "images/jul-2026/weigela.webp",       caption: "Big bush in front of the ensuite window (to cut back)" },
    { src: "images/jul-2026/cotoneaster.webp",   caption: "Cotoneaster (close)" },
  ],
  frontCornerBush: [
    { src: "images/jul-2026/corner-bush.webp",         caption: "The large corner bush" },
    { src: "images/jul-2026/corner-bush-berries.webp", caption: "Corner bush — berry clusters (close)" },
  ],
  frontBoundaryBed: [
    { src: "images/jul-2026/boundary-corner.webp", caption: "Boundary corner — box topiary & variegated shrub" },
    { src: "images/jul-2026/boundary-thyme.webp",  caption: "Left of the boundary bed — herb/thyme" },
    { src: "images/jul-2026/laurel.webp",          caption: "Boundary bed running back toward the entrance" },
    { src: "images/jul-2026/choisya.webp",         caption: "Variegated Choisya against the wall" },
    { src: "images/jul-2026/choisya-flowers.webp", caption: "Choisya with pink flowers at the corner" },
    { src: "images/jul-2026/climber.webp",         caption: "Climber trained up the wall — end of the run" },
    { src: "images/jul-2026/climber-berries.webp", caption: "Climber — pinnate leaves & red berries (close)" },
  ],
},
```

---

## Step 5 — `data.js` → BED_PLANT_MAPS (clickable dots on the bed detail map)

```js
// data.js — add to BED_PLANT_MAPS
frontEntrance: [
  { name: "Box",          x: 30, y: 35, r: 12, hue: 130 },
  { name: "Hosta",        x: 62, y: 40, r: 10, hue: 105 },
  { name: "Hydrangea",    x: 48, y: 65, r: 12, hue: 300 },
  { name: "Lavender",     x: 22, y: 72, r: 9,  hue: 275 },
  { name: "Honeysuckle",  x: 78, y: 68, r: 9,  hue: 45  },
],
frontWallBed: [
  { name: "Cotoneaster",                 x: 12, y: 55, r: 10, hue: 15  },
  { name: "Climbing Rose (white-pink)",  x: 34, y: 30, r: 11, hue: 340 },
  { name: "Fern",                        x: 52, y: 60, r: 10, hue: 120 },
  { name: "Rose (pink)",                 x: 70, y: 32, r: 10, hue: 330 },
  { name: "Weigela",                     x: 86, y: 52, r: 12, hue: 320 },
  { name: "Hosta",                       x: 86, y: 78, r: 8,  hue: 105 },
],
frontCornerBush: [
  { name: "Viburnum", x: 50, y: 45, r: 26, hue: 140 },
],
frontBoundaryBed: [
  { name: "Cherry Laurel",           x: 50, y: 22, r: 13, hue: 135 },
  { name: "Mexican Orange Blossom",  x: 50, y: 46, r: 12, hue: 70  },
  { name: "Climber (unidentified)",  x: 50, y: 68, r: 10, hue: 10  },
  { name: "Thyme",                   x: 50, y: 88, r: 8,  hue: 90  },
],
```

---

## Step 6 — `watering-data.js` → WATER_BANDS (else plants drop off the watering guide)

Bands 1 (drought-tolerant) → 5 (daily).

```js
// watering-data.js — add to WATER_BANDS
"Front Entrance": {
  "Honeysuckle": 3, "Hosta": 4, "Box": 3, "Hydrangea": 4, "Lavender": 1,
},
"Front Wall Bed": {
  "Cotoneaster": 2, "Climbing Rose (white-pink)": 3, "Fern": 4,
  "Rose (pink)": 3, "Weigela": 3, "Hosta": 4,
},
"Front Corner Bush": {
  "Viburnum": 2,
},
"Front Boundary Bed": {
  "Cherry Laurel": 2, "Mexican Orange Blossom": 2, "Climber (unidentified)": 3, "Thyme": 1,
},
```

---

## Step 7 — `app.jsx` → nav tab + routing

1. Add a `frontplan` view. In the chrome `crumb-bar`, add a fourth button after "Watering guide":

```jsx
<button
  className="ghostbtn"
  aria-pressed={view.name === "frontplan"}
  onClick={() => { setCalendarPlantReturn(false); setWateringPlantReturn(false); setView({ name: "frontplan" }); window.scrollTo({ top: 0, behavior: "smooth" }); }}
  style={{ minHeight: 32 }}
>
  Front garden
</button>
```

2. In `<main>`, render the new plan alongside the others:

```jsx
{view.name === "frontplan" && (
  <FrontGardenPlan onOpenZone={openZone} dark={dark} />
)}
```

`openZone` already routes to `BedDetail`, which now resolves front zones to their July photos (Step 1). No change needed to `openPlant` / `closePlant` — front beds behave like any other bed (no third return-path boolean required).

---

## Step 8 — `FrontGardenPlan.jsx` (new file, clone of `GardenPlan.jsx`)

Copy `GardenPlan.jsx` → `FrontGardenPlan.jsx` and change:

- `function GardenPlan` → `function FrontGardenPlan`; `window.GardenPlan = GardenPlan;` → `window.FrontGardenPlan = FrontGardenPlan;`
- `order` array → the front zones only:
  ```js
  const order = ["frontEntrance", "frontWallBed", "frontCornerBush", "frontBoundaryBed"];
  ```
- Legend array at the bottom → same four keys.
- SVG `viewBox="0 0 820 620"` → `viewBox="0 0 1000 640"`.
- Replace the back-garden house/boundary/gate drawing block with the **front elevation** — the stepped house wall, boundary wall, windows, gravel + slabbed surfaces. The exact, sign-off SVG for all of this is in `wireframe.html` (the `<svg class="plan">` block) — lift its `<path>`/`<rect>`/window-tick/gravel/paving markup straight in. Keep the existing `#rough` / `#soft` filters and hatch patterns.
- `renderZone` handles `kind: "circle"` already (used for `frontCornerBush`).
- Title block: "The front garden, drawn from above" / "house wall = the stepped line".

Everything else (hover, labels, tooltip, roughen filters) works unchanged.

---

## Step 9 — `index.html` — register the component + bust the cache

Add the new script tag with the others, and bump **every** `?v=` to a new date (e.g. `20260705`):

```html
<script type="text/babel" src="FrontGardenPlan.jsx?v=20260705"></script>
```

Place it near the other `.jsx` tags (before `app.jsx`). Then change all `?v=20260704b` → `?v=20260705` across `index.html`.

---

## Step 10 — test & deploy

- Test all **5 palettes** (Spring/Summer/Autumn/Winter/Night) — front plan + a front bed detail.
- Check the four front beds open, photos load, plant cards work, and the **back garden is unchanged** (confirm a back bed still shows its May photos — verifies the Step 1 fix).
- Do **not** reintroduce `tweaks-panel.jsx`.
- Deploy from Brad's machine: `./deploy.sh "add front garden"`

---

## Open questions carried over (for Brad, not blocking build)

| Item | Photo | Note |
|---|---|---|
| Climbing rose #1 | 4020 / 4022 | white-pink, by Bedroom 3 — **identify** |
| Rose #2 | 4023 | pink, Bedroom 1 → ensuite — **identify** |
| Corner bush | 4025–4027 | Viburnum tinus? — **confirm** |
| End-of-run climber | 4034 / 4035 | pinnate leaves + red berries — **identify** |
| Front-door bush | 4038 / 4039 | box / privet / Lonicera nitida? — **confirm** |
| Honeysuckle | 4018 | Brad unsure — **confirm** |
| Plant to REMOVE | 4020 | bottom-left of frame |
| Bush to CUT BACK | 4024 | weigela across ensuite window |

Update the `// CONFIRM` / `// IDENTIFY` latin names and captions once resolved.
