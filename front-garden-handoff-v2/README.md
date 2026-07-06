# Front Garden v2 — build handoff for Claude Code

**This SUPERSEDES `front-garden-handoff/` (v1).** The v1 plan was sketch-based; this one is built from Brad's measured survey (July 2026). The v1 front garden is **already live** in the repo (zones, plants, photos, watering, tab, `FrontGardenPlan.jsx`) — so this is a **migration**, not a fresh add: replace the 4 old front zones with 8 new measured ones.

Read `CLAUDE.md` in the repo root first. Then work through the steps in order. All data blocks are copy-paste ready.

### What's in this folder

```
front-garden-handoff-v2/
  README.md            ← you are here (the full migration spec)
  FrontGardenPlan.jsx  ← COMPLETE drop-in replacement for the repo-root file
  wireframe.html       ← Brad's review render — geometry reference, open in a browser
  steps-photo.jpg      ← Brad's photo of the steps: timber sleepers set in gravel
                          (the steps drawing in FrontGardenPlan.jsx matches this)
```

Photos are unchanged — all 23 front-garden WebPs are already in `images/jul-2026/`. The v1 folder (`front-garden-handoff/`) stays for its photos/sketches reference but its README, geometry and zone model must NOT be used.

---

## Zone model (old → new)

| v1 zone (delete) | v2 zones (add) |
|---|---|
| `frontEntrance` | `frontBed1` (study window: hydrangea, lavender) + `frontBed2` (right of door: box, honeysuckle) + `frontStone` (stone trough: hosta) + `frontHedge` |
| `frontWallBed` + `frontCornerBush` | `frontBed3` — one L-shaped house-wall bed that wraps the corner (Brad confirmed they're one bed) |
| `frontBoundaryBed` | `frontBed4` (survey said "Bed 5"; renamed — Brad confirmed) |
| — | `frontBoxHedge` (2m clipped screen, clickable) |
| — | `frontApple` (apple tree, clickable; no photos yet) |

New plan keeps ALL the survey detail: path, both gravel forecourts, slabbed patio, steps, skinny brick wall, pillar in Bed 1, and the survey measurements (toggleable layer, on by default).

Geometry: viewBox `0 0 1000 640`, **57 SVG-units = 1m**. All shapes below match `wireframe.html` exactly — do not "simplify" any polygon.

---

## Step 1 — Replace `FrontGardenPlan.jsx`

Copy `front-garden-handoff-v2/FrontGardenPlan.jsx` over the repo-root `FrontGardenPlan.jsx` (full replacement). No edits needed.

## Step 2 — `data.js` → ZONES

Delete the four old zone entries `frontEntrance`, `frontWallBed`, `frontCornerBush`, `frontBoundaryBed` (the block that starts with the comment `// ── Front garden (own plan, viewBox 0 0 1000 640 …)`, ~lines 248–300). Insert in their place:

```js
    // ── Front garden v2 (measured survey · own plan, viewBox 0 0 1000 640 — see FrontGardenPlan.jsx)
    frontBed1: {
      id: "frontBed1",
      title: "Front · Bed 1",
      badge: "Study-window bed",
      dims: "L-shaped · 2.0m wide",
      where: "Under the study window, by the side gate",
      desc:
        "The L-shaped bed under the study window at the drive end of the house, wrapping up into the corner by the front-door step. A mophead hydrangea at the top, lavender along the bottom, and the 0.6m brick pillar between them.",
      shape: { kind: "polygon", points: "222,281 268,281 268,201 336,201 336,372 222,372" },
      color: "#6b8e4e",
      labelXY: [292, 326],
      plantKey: "Front Bed 1",
    },
    frontBed2: {
      id: "frontBed2",
      title: "Front · Bed 2",
      badge: "Right of the front door",
      dims: "1.1m × 1.2m",
      where: "Right of the front door, against the hedge",
      desc:
        "Small bed tucked between the front door and the hedge — the clipped box ball on the porch return and the honeysuckle arching over the entrance.",
      shape: { kind: "rect", x: 439, y: 201, w: 63, h: 69 },
      color: "#7f8f4a",
      labelXY: [470, 240],
      plantKey: "Front Bed 2",
    },
    frontBed3: {
      id: "frontBed3",
      title: "Front · Bed 3",
      badge: "House-wall bed · wraps the corner",
      dims: "Wraps the corner",
      where: "Under the bedroom windows, filling the far corner",
      desc:
        "The long house-wall bed running under the Bedroom 3, Bedroom 1 and ensuite windows, opening out to fill the whole far corner between the slabbed patio's diagonal and the boundary, down to where Bed 4 takes over. Climbing roses on the wall, a large fern, a weigela due a hard cut-back, cotoneaster at the near end, hostas below, and the big corner viburnum over the ensuite window.",
      shape: { kind: "polygon", points: "547,42 958,42 958,170 880,170 775,88 547,88" },
      color: "#8b5e3c",
      labelXY: [700, 66],
      plantKey: "Front Bed 3",
    },
    frontBed4: {
      id: "frontBed4",
      title: "Front · Bed 4",
      badge: "Boundary bed",
      dims: "Steps to the boundary wall",
      where: "The whole space right of the steps, out to the boundary wall",
      desc:
        "The big bed filling the space right of the steps — from the slabbed patio's point and the timber-edged steps out to the brick boundary wall, and down to the bottom of the drive. Cherry laurel, a lime-variegated Choisya, a wall-trained climber at the far end, and thyme at the near corner.",
      shape: { kind: "polygon", points: "880,170 958,170 958,475 827,475 827,386 760,372 760,292 815,292" },
      color: "#587a3a",
      labelXY: [860, 330],
      plantKey: "Front Bed 4",
    },
    frontStone: {
      id: "frontStone",
      title: "Front · Stone Trough",
      badge: "Stone trough",
      dims: "1.2m × 0.8m",
      where: "At the foot of the skinny brick wall, by the steps",
      desc:
        "The stone trough at the junction of the gravel forecourt and the steps, at the foot of the skinny brick wall. Home to a hosta.",
      shape: { kind: "rect", x: 547, y: 292, w: 72, h: 40 },
      color: "#8a8676",
      labelXY: [583, 316],
      plantKey: "Front Stone Trough",
    },
    frontBoxHedge: {
      id: "frontBoxHedge",
      title: "Front · Box Hedge",
      badge: "Clipped screen · 2m",
      dims: "2m run",
      where: "Against the house return wall, screening the patio",
      desc:
        "A 2m run of clipped box standing against the house return wall, screening the slabbed patio from the front door approach.",
      shape: { kind: "rect", x: 527, y: 87, w: 20, h: 114 },
      color: "#3f6d35",
      labelXY: [537, 142],
      plantKey: "Front Box Hedge",
    },
    frontHedge: {
      id: "frontHedge",
      title: "Front · Hedge",
      badge: "Low hedge",
      dims: "0.6m × 1.2m",
      where: "Right of the front door, in front of the skinny brick wall",
      desc:
        "A small hedge right of the front door, sitting in front of the 1.6m skinny brick wall. Species to be identified.",
      shape: { kind: "rect", x: 502, y: 201, w: 37, h: 69 },
      color: "#4f7d45",
      labelXY: [520, 236],
      plantKey: "Front Hedge",
    },
    frontApple: {
      id: "frontApple",
      title: "Front · Apple Tree",
      badge: "Fruit tree",
      dims: "≈0.8m × 1.8m",
      where: "Corner below Bed 4, against the boundary wall",
      desc:
        "The apple tree at the bottom of the drive, tucked into the corner below Bed 4 against the brick boundary wall.",
      shape: { kind: "rect", x: 912, y: 475, w: 46, h: 102 },
      color: "#4f6d35",
      labelXY: [935, 592],
      plantKey: "Front Apple Tree",
    },
```

## Step 3 — `data.js` → PLANTS

Delete the four old keys `"Front Entrance"`, `"Front Wall Bed"`, `"Front Corner Bush"`, `"Front Boundary Bed"` (~lines 1081–1248). The plant entries themselves are reused — same text, regrouped under the new keys. Insert:

```js
    "Front Bed 1": [
      {
        name: "Hydrangea",
        latin: "Hydrangea macrophylla",
        photos: ["images/jul-2026/front-door.webp"],
        position: "Top of the bed, nearest the front door",
        light: "Morning sun, afternoon shade.",
        water: "Thirsty — water well in dry spells.",
        care: "Leave old flower heads over winter; prune to a strong bud in spring.",
        seasonal: "Mophead flowers July–Sept; bare in winter.",
      },
      {
        name: "Lavender",
        latin: "Lavandula angustifolia",
        photos: ["images/jul-2026/study-gate.webp"],
        position: "Bottom of the bed, below the brick pillar",
        light: "Full sun.",
        water: "Drought-tolerant.",
        care: "Trim after flowering and again in spring; don't cut into old wood.",
        seasonal: "Purple spikes June–Aug; aromatic year-round.",
      },
    ],
    "Front Bed 2": [
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
        name: "Honeysuckle",
        latin: "Lonicera periclymenum", // CONFIRM — Brad unsure it's honeysuckle
        photos: ["images/jul-2026/honeysuckle.webp"],
        position: "Arching over the entrance",
        light: "Sun to part shade.",
        water: "Keep roots cool and moist; mulch.",
        care: "Prune after flowering; thin congested growth. Give it support over the entrance.",
        seasonal: "Scented flowers June–Aug; berries after. Semi-evergreen.",
      },
    ],
    "Front Bed 3": [
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
      {
        name: "Viburnum",
        latin: "Viburnum tinus", // IDENTIFY (IMG_4025-4027)
        photos: ["images/jul-2026/corner-bush.webp", "images/jul-2026/corner-bush-berries.webp"],
        position: "The corner, spreading over the ensuite window",
        light: "Sun to part shade.",
        water: "Low once established.",
        care: "Can take a hard prune after flowering to keep it off the window. Evergreen, tough.",
        seasonal: "Clusters of small flowers; metallic-blue/red berries.",
      },
    ],
    "Front Bed 4": [
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
        latin: "IDENTIFY", // IDENTIFY (IMG_4034 / 4035) — pinnate leaves + red berry clusters
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
    "Front Stone Trough": [
      {
        name: "Hosta",
        latin: "Hosta",
        photos: ["images/jul-2026/hosta-trough.webp"],
        position: "Filling the stone trough",
        light: "Part to full shade.",
        water: "Keep moist; never bone-dry in the trough.",
        care: "Watch for slugs/snails. Divide clumps in spring.",
        seasonal: "Fresh leaves spring; dies back over winter.",
      },
    ],
    "Front Box Hedge": [
      {
        name: "Box Hedging",
        latin: "Buxus sempervirens", // CONFIRM
        photos: [], // TODO — no photo yet, next photo walk
        position: "2m clipped screen against the house return wall",
        light: "Sun to part shade.",
        water: "Moderate.",
        care: "Clip May and late summer. Watch for box blight/caterpillar.",
        seasonal: "Evergreen year-round.",
      },
    ],
    "Front Hedge": [
      {
        name: "Hedge (to identify)",
        latin: "IDENTIFY",
        photos: [], // TODO — no photo yet, next photo walk
        position: "Right of the front door, in front of the skinny brick wall",
        light: "TBC.",
        water: "TBC.",
        care: "TBC once identified.",
        seasonal: "TBC.",
      },
    ],
    "Front Apple Tree": [
      {
        name: "Apple Tree",
        latin: "Malus domestica",
        photos: [], // TODO — no photo yet, next photo walk
        position: "Bottom of the drive, by the boundary wall",
        light: "Full sun.",
        water: "Water well in dry spells while fruiting.",
        care: "Winter prune for shape and airflow; thin fruit in June if heavy.",
        seasonal: "Blossom April–May; fruit late summer–autumn.",
      },
    ],
```

## Step 4 — `data.js` → PHOTOS_BY_MONTH `"jul-2026"`

Replace the four zone keys inside the existing `"jul-2026"` entry (keep `label: "July 2026"`) with:

```js
      frontBed1: [
        { src: "images/jul-2026/front-door.webp",  caption: "Front door & porch, hydrangea at the base" },
        { src: "images/jul-2026/study-gate.webp",  caption: "Study window & side gate — hydrangea and lavender" },
      ],
      frontBed2: [
        { src: "images/jul-2026/porch-nameplate.webp",  caption: "Porch, name plate, box ball and blue pot" },
        { src: "images/jul-2026/entrance-troughs.webp", caption: "Entrance — box ball and stone trough" },
        { src: "images/jul-2026/honeysuckle.webp",      caption: "Honeysuckle over the entrance" },
        { src: "images/jul-2026/box-close.webp",        caption: "Box bush by the front door (close)" },
      ],
      frontBed3: [
        { src: "images/jul-2026/overview.webp",            caption: "Front garden overview from the entrance" },
        { src: "images/jul-2026/wallbed-start.webp",       caption: "Start of the bed — cotoneaster, WC & Bedroom 3 windows" },
        { src: "images/jul-2026/climbing-rose.webp",       caption: "Climbing rose on the wall by Bedroom 3" },
        { src: "images/jul-2026/fern-window.webp",         caption: "Fern & climbing rose by the Bedroom 1 window" },
        { src: "images/jul-2026/pink-rose.webp",           caption: "Pink rose between Bedroom 1 and the ensuite" },
        { src: "images/jul-2026/weigela.webp",             caption: "Weigela in front of the ensuite window (to cut back)" },
        { src: "images/jul-2026/cotoneaster.webp",         caption: "Cotoneaster (close)" },
        { src: "images/jul-2026/corner-bush.webp",         caption: "The corner viburnum, wrapping to the boundary" },
        { src: "images/jul-2026/corner-bush-berries.webp", caption: "Corner viburnum — berry clusters (close)" },
      ],
      frontBed4: [
        { src: "images/jul-2026/boundary-corner.webp", caption: "Boundary corner — box topiary & variegated shrub" },
        { src: "images/jul-2026/boundary-thyme.webp",  caption: "Near corner of the boundary bed — thyme" },
        { src: "images/jul-2026/laurel.webp",          caption: "Boundary bed running back toward the entrance" },
        { src: "images/jul-2026/choisya.webp",         caption: "Variegated Choisya against the wall" },
        { src: "images/jul-2026/choisya-flowers.webp", caption: "Choisya with flowers at the corner" },
        { src: "images/jul-2026/climber.webp",         caption: "Climber trained up the wall — end of the run" },
        { src: "images/jul-2026/climber-berries.webp", caption: "Climber — pinnate leaves & red berries (close)" },
      ],
      frontStone: [
        { src: "images/jul-2026/hosta-trough.webp",     caption: "Hosta in the stone trough" },
        { src: "images/jul-2026/entrance-troughs.webp", caption: "The stone trough by the entrance" },
      ],
      // frontBoxHedge, frontHedge, frontApple — no photos yet (next photo walk)
```

## Step 5 — `data.js` → BED_PLANT_MAPS

Delete the four old front entries (`frontEntrance`, `frontWallBed`, `frontCornerBush`, `frontBoundaryBed`) and insert:

```js
    frontBed1: [
      { name: "Hydrangea", x: 68, y: 25, r: 14, hue: 300 },
      { name: "Lavender",  x: 35, y: 78, r: 11, hue: 275 },
    ],
    frontBed2: [
      { name: "Box",         x: 35, y: 40, r: 14, hue: 130 },
      { name: "Honeysuckle", x: 68, y: 65, r: 11, hue: 45  },
    ],
    frontBed3: [
      { name: "Cotoneaster",                x: 7,  y: 55, r: 9,  hue: 15  },
      { name: "Climbing Rose (white-pink)", x: 22, y: 32, r: 10, hue: 340 },
      { name: "Fern",                       x: 36, y: 60, r: 9,  hue: 120 },
      { name: "Rose (pink)",                x: 50, y: 32, r: 9,  hue: 330 },
      { name: "Weigela",                    x: 62, y: 55, r: 11, hue: 320 },
      { name: "Hosta",                      x: 62, y: 80, r: 7,  hue: 105 },
      { name: "Viburnum",                   x: 85, y: 50, r: 16, hue: 140 },
    ],
    frontBed4: [
      { name: "Cherry Laurel",          x: 50, y: 20, r: 13, hue: 135 },
      { name: "Mexican Orange Blossom", x: 50, y: 45, r: 12, hue: 70  },
      { name: "Climber (unidentified)", x: 50, y: 68, r: 10, hue: 10  },
      { name: "Thyme",                  x: 50, y: 88, r: 8,  hue: 90  },
    ],
    frontStone: [
      { name: "Hosta", x: 50, y: 50, r: 22, hue: 105 },
    ],
    frontBoxHedge: [
      { name: "Box Hedging", x: 50, y: 50, r: 24, hue: 130 },
    ],
    frontHedge: [
      { name: "Hedge (to identify)", x: 50, y: 50, r: 22, hue: 120 },
    ],
    frontApple: [
      { name: "Apple Tree", x: 50, y: 45, r: 28, hue: 110 },
    ],
```

## Step 6 — `watering-data.js` → WATER_BANDS

Delete the four old keys `"Front Entrance"`, `"Front Wall Bed"`, `"Front Corner Bush"`, `"Front Boundary Bed"` and insert:

```js
    "Front Bed 1": {
      "Hydrangea": 4, "Lavender": 1,
    },
    "Front Bed 2": {
      "Box": 3, "Honeysuckle": 3,
    },
    "Front Bed 3": {
      "Cotoneaster": 2, "Climbing Rose (white-pink)": 3, "Fern": 4,
      "Rose (pink)": 3, "Weigela": 3, "Hosta": 4, "Viburnum": 2,
    },
    "Front Bed 4": {
      "Cherry Laurel": 2, "Mexican Orange Blossom": 2, "Climber (unidentified)": 3, "Thyme": 1,
    },
    "Front Stone Trough": {
      "Hosta": 4,
    },
    "Front Box Hedge": {
      "Box Hedging": 3,
    },
    "Front Hedge": {
      "Hedge (to identify)": 2,
    },
    "Front Apple Tree": {
      "Apple Tree": 2,
    },
```

## Step 7 — `app.jsx` — front-zone key list

Line ~84 has the front-zone membership check. Replace the array:

```js
    ["frontBed1", "frontBed2", "frontBed3", "frontBed4",
     "frontStone", "frontBoxHedge", "frontHedge", "frontApple"].includes(k);
```

The "Front garden" tab and `frontplan` view already exist — no other `app.jsx` change.

## Step 8 — `index.html` — cache-bust

Bump **every** `?v=` suffix in `index.html` to a new shared date (e.g. `?v=20260706`). The `FrontGardenPlan.jsx` script tag already exists.

## Step 9 — Test

- Front plan renders: house wall with study window/front door/bedroom windows, path, both gravel forecourts, slabbed patio, timber-sleeper steps, skinny brick wall, pillar, boundary wall. No red survey measurements anywhere.
- All **8** front zones open in BedDetail; legend lists all 8.
- `frontBoxHedge`, `frontHedge`, `frontApple` open cleanly with **no photos** (plant card still works — verify no crash on empty gallery).
- Stone Trough opens with the hosta photos.
- Test all **5 palettes** (Spring/Summer/Autumn/Winter/Night).
- **Back garden regression:** back plan unchanged; a back bed (e.g. Bed 1) still shows its photos; watering guide shows no orphaned "Front Entrance/Wall Bed/Corner Bush/Boundary Bed" groups and includes the 8 new ones.
- Do **not** reintroduce `tweaks-panel.jsx` (check `index.html`).

## Step 10 — Deploy

From Brad's machine: `./deploy.sh "front garden v2 — measured survey, 8 zones"`

---

## Geometry crib (for any adjustments)

Survey scale: **57 SVG-units = 1m**. `X = 40 + (m_east + 0.6) × 57`, `Y = 30 + (m_south + 4.4) × 57`, origin = far-left end of the study-window wall.

House wall: `52,281 → 268,281 → 268,201 → 336,201 → 439,190 → 439,201 → 547,201 → 547,42 → 958,42`
(0.8 + 1.8 window + 0.8 along the bottom; up 1.4m; across 1.2m; front door diagonal 1.8; wall 1.8m; return north 2.8m; bedroom run east.)

| Feature | Shape (SVG) | Survey dims |
|---|---|---|
| Bed 1 | polygon 222,281 268,281 268,201 336,201 336,372 222,372 (+pillar 222,315 34×34) | L-shaped; 2.0 wide, pillar 0.6 |
| Bed 2 | rect 439,201 63×69 | 1.1×1.2 |
| Bed 3 | polygon 547,42 958,42 958,170 880,170 775,88 547,88 | 0.8 deep along the run; fills the whole corner east of the 2m diagonal, down to the knee |
| Bed 4 | polygon 880,170 958,170 958,475 827,475 827,386 760,372 760,292 815,292 | the whole space right of the steps: patio point → steps edge → level-change line → boundary |
| Stone trough | rect 547,292 72×40 | 1.2×0.8 |
| Box hedge | rect 527,87 20×114 | 2m run |
| Hedge | rect 502,201 37×69 | 0.6×1.2 |
| Apple tree | rect 912,475 46×102 | ≈0.8×1.8, corner below Bed 4 against the boundary wall |
| Skinny brick wall | rect 539,201 8×91 (scenery) | 1.6m |
| Slabbed patio | polygon 547,87 775,87 880,170 815,292 547,292 | arrow point: 2m diag → knee (880,170) → 2.4m diag to steps corner |
| Steps | rect 547,292 213×80 — gravel fill, 3 timber sleeper treads + timber edging (#8b6a44), per Brad's photo | — |
| Path | polygon 336,201 439,190 439,271 469,404 336,404 | 3m west edge, 1.2m east edge |
| Gravel W | polygon 440,272 539,272 539,292 547,292 547,372 619,372 619,430 472,430 | — |
| Gravel E | polygon 619,372 760,372 827,386 827,475 619,475 | small pocket below the steps only; its slanted east edge is Bed 4's western boundary |

Note: the red survey measurements were removed from the rendered plan (they were scale scaffolding only). Zone dims still show under bed labels, matching the back-garden style.

## Open items (Brad, not blocking)

Carried over from v1: identify the two roses, confirm viburnum / box / honeysuckle / fern / weigela / cotoneaster / laurel / choisya / thyme latin names, identify the end-of-run climber, plus new: identify the small hedge by the door. Photo TODOs: box hedge, small hedge, apple tree. Geometry flags Brad is reviewing are listed in `wireframe.html`.
