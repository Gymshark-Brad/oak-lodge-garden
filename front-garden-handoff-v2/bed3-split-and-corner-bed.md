# Front Garden — Split Bed 3, add corner Bed 4, box hedge fix

Follow-up to `front-garden-handoff-v2/README.md` (the original 8-zone build). Still on the
`front-garden-v2-migration` branch, not merged to `main`. This doc covers one more geometry/plant
change before that merge: Bed 3 (the long house-wall run) splits into two beds at the corner, the
old boundary Bed 4 shifts to Bed 5, two plants get corrected IDs, and two mystery/duplicate
entries get removed.

Read `CLAUDE.md` first if this is a fresh session — it has the deploy workflow and file map.

## What's changing and why

Bed 3 currently runs the full length of the house wall (under Bedroom 3, Bedroom 1, and the
ensuite) *and* wraps the corner down to the knee — one 7.2m zone covering two visually distinct
areas. Brad's confirmed the corner (the bit under the ensuite window, with the trained tree and
the shrub beneath it) should be its own bed. Splitting it also lines up with reality: everything
currently tagged `Weigela`, `Hosta`, and `Viburnum` in Bed 3's plant list is actually the corner
group, not the wall-run group.

Two plant IDs also needed correcting from close-up photos Brad took before pruning:
- The "Viburnum" (marked `IDENTIFY` in the data) is a **Photinia × fraseri**, not Viburnum tinus —
  glossy finely-toothed leaves, flat corymbs of flowers that dry rust-brown by midsummer (not the
  green-ripening-to-black berries Viburnum tinus would show in July).
- The "Weigela" is actually a **Spiraea thunbergii** — the foliage is narrow, willow-like, and
  finely serrated on arching red-brown stems, nothing like Weigela's broad ovate leaves. (Best
  read from photos — confirm in April when it should flower white on bare stems.)

The "Cotoneaster" entry turns out to be the box hedge itself, photographed at the join between
the two zones — not a separate plant. Drop it from Bed 3; the photos are worth keeping against
`Front Box Hedge` instead, since that entry currently has none.

Separately: the box hedge zone is drawn on the wrong side of the house-return wall line in the
plan — sitting in the approach/gravel area instead of against the wall where it screens the
patio (which is what its own description already says it does). Nudge it across.

---

## Step 1 — `data.js` → ZONES (split Bed 3, insert new Bed 4, rename old Bed 4 → Bed 5)

The original Bed 3 polygon (`547,42 958,42 958,170 880,170 775,88 547,88`) is the union of a
straight strip (the wall run) and a trapezoid wedge (the corner). Splitting along the shared
edge at `y=88` reproduces both pieces exactly — no gaps, no overlap:

- Straight run → stays `frontBed3`: `547,42 958,42 958,88 547,88`
- Corner wedge → new `frontBed4`: `958,88 958,170 880,170 775,88`

Replace the existing `frontBed3` and `frontBed4` entries (~lines 275–300) with:

```js
    frontBed3: {
      id: "frontBed3",
      title: "Front · Bed 3",
      badge: "House-wall bed · wall run",
      dims: "≈7.2m run · 0.8m deep",
      where: "Under the Bedroom 3 and Bedroom 1 windows",
      desc:
        "The house-wall bed running under the Bedroom 3 and Bedroom 1 windows, up to where the wall turns the corner at the ensuite — Bed 4 takes over from there, wrapping the corner. Climbing roses on the wall, a large fern, and a pink rose near the corner end.",
      shape: { kind: "polygon", points: "547,42 958,42 958,88 547,88" },
      color: "#8b5e3c",
      labelXY: [700, 62],
      plantKey: "Front Bed 3",
    },
    frontBed4: {
      id: "frontBed4",
      title: "Front · Bed 4",
      badge: "Corner bed · under the ensuite window",
      dims: "Irregular · wraps the corner, ~2m deep",
      where: "Wrapping the corner below the ensuite window, down to the knee",
      desc:
        "The corner where the house wall turns below the ensuite window, wrapping down to the knee where Bed 5 takes over. Centred on a multi-stem Photinia trained as a canopy tree against the wall, with a Spiraea underneath it — both hard-pruned back in July 2026. Cleared of debris and ready for infill planting; see the planning note below the plant list.",
      shape: { kind: "polygon", points: "958,88 958,170 880,170 775,88" },
      color: "#77613f",
      labelXY: [890, 128],
      plantKey: "Front Bed 4",
    },
    frontBed5: {
      id: "frontBed5",
      title: "Front · Bed 5",
      badge: "Boundary bed",
      dims: "Irregular · patio point to boundary wall",
      where: "From the steps out to the brick boundary wall",
      desc:
        "The whole area right of the steps — bounded by the patio's arrow-point diagonals, the timber steps' east edge, and the brick boundary wall. Cherry laurel, a lime-variegated Choisya, a wall-trained climber at the far end, and thyme at the near corner.",
      shape: { kind: "polygon", points: "880,170 958,170 958,475 827,475 827,386 760,372 760,292 815,292" },
      color: "#587a3a",
      labelXY: [860, 330],
      plantKey: "Front Bed 5",
    },
```

`labelXY` and `color` on the new Bed 4 are placeholders — nudge once it renders if the label sits
awkwardly in the wedge.

Also update `frontApple` (~line 340–351) — its `where`/`desc` reference "Bed 4," which is now Bed 5:

```js
      where: "Corner below Bed 5, against the boundary wall",
      ...
      desc:
        "The apple tree tucked into the corner below Bed 5, against the boundary wall.",
```

## Step 2 — `data.js` → box hedge position fix

`frontBoxHedge`'s shape currently has its **right** edge flush against the house-return wall line
(`x: 527, w: 20` → spans x527–547, wall is at x=547) — meaning it's drawn on the approach/gravel
side of the wall, not against it. Its own description says it screens the patio, which sits on
the *other* side of that line. Shift it across so it stands against the wall on the patio side:

```js
    frontBoxHedge: {
      ...
      shape: { kind: "rect", x: 547, y: 87, w: 20, h: 114 },
      ...
    },
```

Only `x` changes (527 → 547); `y`, `w`, `h` stay the same. Render it and sanity-check against the
plan — this was read off Brad's screenshot, not measured, so eyeball it before calling it done.

## Step 3 — `data.js` → PLANTS

Replace the `"Front Bed 3"` array (~lines 1177–1248) — drop `Cotoneaster`, `Weigela`, `Hosta`,
`Viburnum` (moving/removing per below), keep the other three as-is:

```js
    "Front Bed 3": [
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
        position: "Between the Bedroom 1 window and the ensuite corner",
        light: "Sun.",
        water: "Deep watering, mulch in spring.",
        care: "Prune late winter; deadhead through summer.",
        seasonal: "Flowers June–Sept; bare winter.",
      },
    ],
```

Insert a new `"Front Bed 4"` array right after it:

```js
    // PLANNED (autumn 2026): Sarcococca confusa + Mahonia × media as an evergreen shade backdrop
    // behind/around the Photinia and Spiraea — see the planting-plan note at the end of this doc
    // before adding them here as real entries.
    "Front Bed 4": [
      {
        name: "Photinia",
        latin: "Photinia × fraseri", // CONFIRM — likely 'Red Robin'; check for a coppery-red new-growth flush next spring to be sure
        photos: ["images/jul-2026/corner-bush.webp", "images/jul-2026/corner-bush-berries.webp"], // pre-prune — TODO: add post-prune photos (see Step 5)
        position: "The corner, trained as a multi-stem canopy tree over the ensuite window",
        light: "Sun to part shade.",
        water: "Moderate; extra while re-establishing after the July 2026 prune.",
        care: "Prune to shape after the spring flush; watch for leaf spot in wet years. Evergreen, tolerates hard pruning well.",
        seasonal: "Coppery-red new growth in spring; small white flowers in flat clusters late spring, fading to rust-brown through summer; evergreen year-round.",
      },
      {
        name: "Spiraea",
        latin: "Spiraea thunbergii", // CONFIRM — narrow finely-serrated leaves on arching stems; confirm with small white flowers on bare wood in April
        photos: ["images/jul-2026/weigela.webp"], // pre-prune, was mislabeled Weigela — TODO: add post-prune photos (see Step 5)
        position: "At the base of the corner tree, in front of the ensuite window",
        light: "Sun to part shade.",
        water: "Moderate; extra while re-establishing after the July 2026 prune.",
        care: "Flowers on old wood — prune immediately after flowering if needed, thinning rather than cutting hard into old wood.",
        seasonal: "Small white flowers smother the bare stems in April, before the narrow leaves emerge; fine deciduous foliage through summer.",
      },
    ],
```

Rename the key `"Front Bed 4"` → `"Front Bed 5"` on the old boundary-bed array (~line 1249) —
content (Cherry Laurel, Mexican Orange Blossom, Climber, Thyme) is unchanged, key only.

Update `"Front Box Hedge"` (~line 1303) to carry the two reassigned photos instead of `[]`:

```js
    "Front Box Hedge": [
      {
        name: "Box Hedging",
        latin: "Buxus sempervirens", // CONFIRM
        photos: ["images/jul-2026/wallbed-start.webp", "images/jul-2026/cotoneaster.webp"],
        position: "2m clipped screen against the house return wall",
        light: "Sun to part shade.",
        water: "Moderate.",
        care: "Clip May and late summer. Watch for box blight/caterpillar.",
        seasonal: "Evergreen year-round.",
      },
    ],
```

## Step 4 — `data.js` → BED_PLANT_MAPS

Replace `frontBed3`, insert `frontBed4`, rename the old `frontBed4` map to `frontBed5`:

```js
    frontBed3: [
      { name: "Climbing Rose (white-pink)", x: 20, y: 35, r: 11, hue: 340 },
      { name: "Fern",                       x: 50, y: 60, r: 10, hue: 120 },
      { name: "Rose (pink)",                x: 80, y: 35, r: 10, hue: 330 },
    ],
    frontBed4: [
      { name: "Photinia", x: 60, y: 35, r: 20, hue: 130 },
      { name: "Spiraea",  x: 35, y: 70, r: 12, hue: 90  },
    ],
    frontBed5: [
      { name: "Cherry Laurel",          x: 50, y: 20, r: 13, hue: 135 },
      { name: "Mexican Orange Blossom", x: 50, y: 45, r: 12, hue: 70  },
      { name: "Climber (unidentified)", x: 50, y: 68, r: 10, hue: 10  },
      { name: "Thyme",                  x: 50, y: 88, r: 8,  hue: 90  },
    ],
```

Also add the two box hedge photos there's no map change needed for (map only tracks plants, box
hedge map entry is unaffected).

## Step 5 — `watering-data.js` → WATER_BANDS

```js
    "Front Bed 3": {
      "Climbing Rose (white-pink)": 3, "Fern": 4, "Rose (pink)": 3,
    },
    "Front Bed 4": {
      "Photinia": 2, "Spiraea": 3,
    },
    "Front Bed 5": {
      "Cherry Laurel": 2, "Mexican Orange Blossom": 2, "Climber (unidentified)": 3, "Thyme": 1,
    },
```

(Rename the old `"Front Bed 4"` key to `"Front Bed 5"`; insert the new `"Front Bed 4"` block.)

## Step 6 — `data.js` → PHOTOS_BY_MONTH (`jul-2026`)

```js
      frontBed3: [
        { src: "images/jul-2026/overview.webp",      caption: "Front garden overview from the entrance" },
        { src: "images/jul-2026/climbing-rose.webp", caption: "Climbing rose on the wall by Bedroom 3" },
        { src: "images/jul-2026/fern-window.webp",   caption: "Fern & climbing rose by the Bedroom 1 window" },
        { src: "images/jul-2026/pink-rose.webp",     caption: "Pink rose between Bedroom 1 and the ensuite corner" },
      ],
      frontBed4: [
        { src: "images/jul-2026/corner-bush.webp",         caption: "Photinia — before pruning" },
        { src: "images/jul-2026/corner-bush-berries.webp", caption: "Photinia — flower/berry clusters (close), before pruning" },
        { src: "images/jul-2026/weigela.webp",             caption: "Spiraea — before pruning" },
        // TODO Brad: add the post-prune corner photos (tree + bush + cleared ground) once exported —
        // taken July 2026, currently only on your phone.
      ],
      frontBed5: [
        { src: "images/jul-2026/boundary-corner.webp", caption: "Boundary corner — box topiary & variegated shrub" },
        { src: "images/jul-2026/boundary-thyme.webp",  caption: "Near corner of the boundary bed — thyme" },
        { src: "images/jul-2026/laurel.webp",          caption: "Boundary bed running back toward the entrance" },
        { src: "images/jul-2026/choisya.webp",         caption: "Variegated Choisya against the wall" },
        { src: "images/jul-2026/choisya-flowers.webp", caption: "Choisya with flowers at the corner" },
        { src: "images/jul-2026/climber.webp",         caption: "Climber trained up the wall — end of the run" },
        { src: "images/jul-2026/climber-berries.webp", caption: "Climber — pinnate leaves & red berries (close)" },
      ],
      frontBoxHedge: [
        { src: "images/jul-2026/wallbed-start.webp", caption: "Box hedge at the start of the wall run" },
        { src: "images/jul-2026/cotoneaster.webp",   caption: "Box hedge (close) — previously mislabeled Cotoneaster" },
      ],
      // frontHedge, frontApple — still no photos (next photo walk)
```

`wallbed-start.webp` and `cotoneaster.webp` move from `frontBed3` to `frontBoxHedge`;
`weigela.webp`, `corner-bush.webp`, `corner-bush-berries.webp` move from the old `frontBed3` to
the new `frontBed4` (recaptioned per above).

## Step 7 — `app.jsx` — front-zone key list

Line ~84. Add `frontBed5` and confirm `frontBed4` is still present (it is — just means something
different now):

```js
    ["frontBed1", "frontBed2", "frontBed3", "frontBed4", "frontBed5",
     "frontStone", "frontBoxHedge", "frontHedge", "frontApple"].includes(k);
```

## Step 8 — `FrontGardenPlan.jsx` — z-order

Line ~21–24. Add `frontBed5` to the `order` array:

```js
  const order = [
    "frontBed3", "frontBed4", "frontBed5", "frontBed1", "frontBed2",
    "frontStone", "frontHedge", "frontBoxHedge", "frontApple",
  ];
```

No other JSX change needed — shapes, colours, and labels all come from `ZONES` in `data.js`.

## Step 9 — cache-bust

Bump every `?v=` suffix in `index.html` to a new shared date once all edits land.

## Step 10 — test

- Bed 3 renders as the shorter wall-run strip; Bed 4 renders as the corner wedge under the
  ensuite window; Bed 5 is the old boundary bed, unchanged in shape.
- Box hedge now sits against the wall, on the patio side of the line — check it visually against
  Brad's screenshot.
- Bed 3, 4, 5 all open cleanly in `BedDetail`; legend lists 9 front zones (was 8).
- Bed 4 shows the Photinia and Spiraea entries with their pre-prune photos; Box Hedge shows its
  two reassigned photos.
- No leftover references to the old `"Front Bed 4"` meaning the boundary bed anywhere (search
  `data.js`, `watering-data.js` for stray `"Front Bed 4"` strings after the edit).
- Test all 5 palettes. Don't reintroduce `tweaks-panel.jsx`.

## Step 11 — deploy

From Brad's machine: `./deploy.sh "front garden — split Bed 3/4, add Bed 5, fix box hedge, correct Photinia/Spiraea IDs"`
(only once this is merged into whatever's about to go live — check with Brad first, this branch
hasn't been merged to `main` yet as of 2026-07-07).

---

## Planting plan for the new Bed 4 (not yet in the ground — don't add as PLANTS entries until planted)

Bed 4 already has its structure: the Photinia canopy and the Spiraea skirt beneath it, both just
hard-pruned. It's dry shade — wall on one side, tree canopy overhead — so the infill plan leans on
plants that take that combination well, in two phases:

**Autumn 2026** (once the ground's had a season to settle post-prune): work compost or leaf mould
into the soil, then plant the next structural layer —
- *Sarcococca confusa* near the path/entrance edge, for the winter scent
- *Mahonia × media* toward the back corner (give it room — it gets to 2–3m)

Both are evergreen, shade-tolerant, and give winter interest when the Photinia and Spiraea are
doing nothing.

**Spring 2027**: underplant once a full growing season has shown exactly how much light reaches
ground level under the canopy — hardy ferns for texture, hellebores for late-winter flower. Safer
to wait on this layer; guessing at light levels now risks buying plants that sulk.

The existing drip irrigation line runs along the wall already — reroute emitters to the new
planting spots once positions are chosen, rather than assuming the current layout covers them.
