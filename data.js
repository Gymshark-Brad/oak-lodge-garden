// Oak Lodge Garden — data module
// Zones, plants (per the brief), photo paths (May + June 2026), and bed plant maps.

window.OAK = (function () {
  // ─── ZONES ────────────────────────────────────────────────────────
  // SVG coords from the brief (viewBox 820x620, ~50px = 1m)
  const ZONES = {
    bed1: {
      id: "bed1",
      title: "Flower Bed 1",
      badge: "Raised timber bed",
      dims: "2.6m × 2.6m",
      where: "Corner by the gate, upper level",
      desc:
        "Raised timber-edged bed dominated by a purple-leaved Japanese Maple. The August planting added a second Abelia 'Kaleidoscope' and Pieris 'Forest Flame', while both Nemesias moved into pots and the former Angel Wings was removed.",
      shape: {
        kind: "polygon",
        points: "94,98 164,58 214,58 214,188 104,188 94,168",
      },
      color: "#8b5e3c",
      labelXY: [154, 126],
      plantKey: "Bed 1",
    },
    bed2: {
      id: "bed2",
      title: "Flower Bed 2",
      badge: "Boundary border",
      dims: "2m wide · ≈3.1m run",
      where: "Lower level, west boundary",
      desc:
        "The upright section of the former sideways T-shaped border along the west boundary. Weigela, peony, two established Geums, Euonymus, climbing Hydrangea, Dianthus, an inherited rose, Silverbush and Butterfly Bush fill the narrow border.",
      shape: { kind: "rect", x: 94, y: 323, w: 100, h: 155 },
      color: "#6b8e4e",
      labelXY: [144, 390],
      plantKey: "Bed 2",
    },
    bed3: {
      id: "bed3",
      title: "Flower Bed 3",
      badge: "Wall-gap border",
      dims: "≈2.8m × 0.8m",
      where: "Lower level, running east from Bed 2",
      desc:
        "The horizontal arm split from the former T-shaped Bed 2. Sedum 'Rose Carpet', four Spiraea, Centaurea, an inherited rose, the Weeping Cherry and yellow Corydalis share the wall run; two positions still await identification.",
      shape: { kind: "rect", x: 194, y: 333, w: 140, h: 40 },
      color: "#7f9b58",
      labelXY: [264, 351],
      plantKey: "Bed 3",
    },
    bed4: {
      id: "bed4",
      title: "Flower Bed 4",
      badge: "Compact bed",
      dims: "≈1.2m × 0.8m",
      where: "Junction of steps and stone bed",
      desc:
        "Compact bed at the junction of the steps and stone bed. An apple tree with bird feeders stands over Gaillardia, Abelia 'Kaleidoscope', Callistemon and Lobelia 'Starship Scarlet Bronze Leaf'.",
      shape: { kind: "rect", x: 474, y: 243, w: 60, h: 40 },
      color: "#c7a54a",
      labelXY: [520, 212],
      plantKey: "Bed 4",
    },
    bed5: {
      id: "bed5",
      title: "Flower Bed 5",
      badge: "Boundary bed",
      dims: "≈1m × 4m",
      where: "Right boundary wall, upper",
      desc:
        "Long boundary bed against the right wall. Wisteria and rose rise above the Yucca and Cabbage Tree, while three planted pots sit along the wall: a mixed big pot, Lythrum 'Robin' in the medium pot and Begonia 'Carmen' in the little pot.",
      shape: {
        kind: "polygon",
        points: "715,55 765,55 765,283 673,283 673,233 715,233",
      },
      color: "#8e6fbf",
      labelXY: [665, 140],
      plantKey: "Bed 5",
    },
    stone: {
      id: "stone",
      title: "Stone Bed",
      badge: "Gravel bed",
      where: "Decking edge, lower level",
      desc:
        "Narrow gravel bed running the full length of the decking edge. Twenty-two mapped plants combine stonecrops, houseleeks, two tender Echeverias, Ajugas, Agapanthus, dark Phormium, fountain grass, Achillea, Thrift and oakleaf Hydrangea.",
      dims: "6m × 1m",
      shape: { kind: "rect", x: 474, y: 283, w: 300, h: 50 },
      color: "#7a8f9a",
      labelXY: [624, 308],
      plantKey: "Stone Bed",
    },
    steps: {
      id: "steps",
      title: "Steps",
      badge: "Hardscape",
      dims: "3m × 3m",
      where: "Connecting upper and lower",
      desc:
        "Block paving with brick edging, several levels stepping down. The Cercis, Viburnum, Nemesia, Echinacea, two little pots and Candy House wall pot are catalogued together in this folio.",
      shape: { kind: "rect", x: 334, y: 243, w: 140, h: 150 },
      color: "#6e6e5e",
      labelXY: [404, 344],
    },
    patio: {
      id: "patio",
      title: "Decking",
      badge: "Composite deck",
      dims: "6m × 3m",
      where: "Lower level, by the house",
      desc:
        "Composite decking running along the back of the house. A mature Clematis montana and Honeysuckle climb the house wall, while Big Pot 1 is catalogued within this folio.",
      shape: {
        kind: "polygon",
        points: "474,333 764,333 764,393 774,393 774,478 474,478",
      },
      color: "#8a7e6b",
      labelXY: [624, 405],
      plantKey: "Patio",
    },
    lounge: {
      id: "lounge",
      title: "Patio Kitchen & Lounge",
      badge: "Outdoor living",
      dims: "≈5.4m × 1.4m",
      where: "Lower terrace, beside the house",
      desc:
        "One outdoor-living section combining the sheltered kitchen and lower lounge. The three hanging baskets are catalogued within this folio.",
      shape: { kind: "rect", x: 194, y: 393, w: 280, h: 85 },
      color: "#5c6b54",
      labelXY: [334, 429],
    },
    pear: {
      id: "pear",
      title: "Pear Tree",
      badge: "Specimen tree",
      dims: "Mature canopy",
      where: "Upper terrace, near gate",
      desc: "A mature pear tree on the upper terrace, near the gate.",
      shape: { kind: "rect", x: 464, y: 43, w: 50, h: 50 },
      color: "#3a6830",
      labelXY: [489, 70],
      plantKey: "Tree",
    },
    bigpot1: {
      id: "bigpot1",
      title: "Big Pot 1",
      badge: "Glazed pot",
      dims: "Large round blue pot",
      where: "Tucked into the upper-left corner of the decking",
      desc:
        "A large blue glazed pot tucked into the upper-left corner of the decking, packed with summer colour — fuchsia, verbena, calibrachoa, lobelia, nepeta and a dark-sky petunia.",
      shape: { kind: "circle", cx: 492, cy: 350, r: 16 },
      color: "#2b5c9e",
      labelXY: [520, 371],
      plantKey: "Big Pot 1",
      isPot: true,
    },
    lobeliapot: {
      id: "lobeliapot",
      title: "Nemesia Pot",
      badge: "Glazed pot",
      dims: "Medium blue pot",
      where: "Immediately south of the Cercis Pot",
      desc:
        "The former Lobelia Pot now sits just south of the Cercis and holds the pink-and-white Nemesia that was missed from the original Bed 1 inventory. Its best-fit identity is recorded cautiously until a label is found.",
      shape: { kind: "circle", cx: 354, cy: 265, r: 13 },
      color: "#2b5c9e",
      labelXY: [355, 291],
      plantKey: "Nemesia Pot",
      isPot: true,
    },
    bed23wallpot: {
      id: "bed23wallpot",
      title: "Bed 2/3 Wall Pot",
      badge: "Brick wall pot",
      dims: "Large blue pot",
      where: "On the dividing wall between Flower Beds 2 and 3",
      desc:
        "A new blue pot on the brick wall where Beds 2 and 3 meet, planted with label-confirmed Viburnum 'Lisarose' and a second Vinca minor 'Illumination' trailing over the wall.",
      shape: { kind: "circle", cx: 194, cy: 333, r: 13 },
      color: "#2b5c9e",
      labelXY: [220, 310],
      plantKey: "Bed 2/3 Wall Pot",
      isPot: true,
    },
    viburnumpot: {
      id: "viburnumpot",
      title: "Viburnum Pot",
      badge: "Specimen pot",
      dims: "Tall glazed pot",
      where: "At the foot of the steps beside Flower Bed 4",
      desc:
        "A new glazed specimen pot in the Lobelia's former Bed 4-side position, planted with label-confirmed Viburnum tinus Spirit ('Anvi') for evergreen structure and winter flower.",
      shape: { kind: "circle", cx: 466, cy: 215, r: 13 },
      color: "#345f83",
      labelXY: [430, 204],
      plantKey: "Viburnum Pot",
      isPot: true,
    },
    cercispot: {
      id: "cercispot",
      title: "Cercis Pot",
      badge: "Large specimen pot",
      dims: "Potted young tree",
      where: "Open upper-left corner of the steps",
      desc:
        "A potted Cercis canadensis 'Carolina Sweetheart' now occupies the Lobelia Pot's former position, with heart-shaped foliage opening maroon-red before developing green, cream and pink variegation.",
      shape: { kind: "circle", cx: 343, cy: 227, r: 13 },
      color: "#a86138",
      labelXY: [315, 216],
      plantKey: "Cercis Pot",
      isPot: true,
    },
    bigpot2: {
      id: "bigpot2",
      title: "Big Pot 2",
      badge: "Glazed pot",
      dims: "Large round blue pot",
      where: "Upper paving beside Flower Bed 1",
      desc:
        "A large blue glazed pot on the upper paving. Lobelia, verbena, petunia, nepeta and fuchsia — the mirror planting to Big Pot 1.",
      shape: { kind: "circle", cx: 259, cy: 78, r: 16 },
      color: "#2b5c9e",
      labelXY: [259, 107],
      plantKey: "Big Pot 2",
      isPot: true,
    },
    littlepot1: {
      id: "littlepot1",
      title: "Little Pot 1",
      badge: "Small pot",
      dims: "Small square blue pot",
      where: "Right edge of the steps, south of the Echinacea pot",
      desc:
        "A small blue pot shifted farther south along the right edge of the steps in August 2026. Geranium and petunia — simple and bright.",
      shape: { kind: "circle", cx: 464, cy: 291, r: 12 },
      color: "#3a7abf",
      labelXY: [520, 349],
      plantKey: "Little Pot 1",
      isPot: true,
    },
    littlepot2: {
      id: "littlepot2",
      title: "Little Pot 2",
      badge: "Small pot",
      dims: "Small square blue pot",
      where: "Upper stair wall, directly west of the Echinacea pot",
      desc:
        "The square blue Little Pot 2 moved to the upper stair wall in August 2026. Its former summer bedding was removed and the established golden Coreopsis moved into it.",
      shape: { kind: "circle", cx: 440, cy: 265, r: 11 },
      color: "#3a7abf",
      labelXY: [418, 291],
      plantKey: "Little Pot 2",
      isPot: true,
    },
    baskets: {
      id: "baskets",
      title: "Hanging Baskets",
      badge: "Front of house",
      dims: "3 baskets",
      where: "Inside the Patio Kitchen & Lounge area",
      desc:
        "Three hanging baskets grouped within the Patio Kitchen & Lounge area. Trailing fuchsia, bacopa, lobelia and verbena — reliable summer colour from June through to the first frosts.",
      shape: { kind: "circle", cx: 269, cy: 445, r: 11 },
      color: "#c06a2a",
      labelXY: [238, 468],
      plantKey: "Baskets",
      isPot: true,
    },
    wallpot1: {
      id: "wallpot1",
      title: "Wall Pot — Candy House",
      badge: "Stair wall pot",
      dims: "Small pot",
      where: "Lower-right corner of the steps",
      desc: "A small pot moved to the lower-right corner of the steps in July 2026, planted with Candy House Mix — a tumbling mix of colourful trailing flowers for long season colour.",
      shape: { kind: "circle", cx: 461, cy: 381, r: 10 },
      color: "#c06a2a",
      labelXY: [405, 382],
      plantKey: "Wall Pot 1",
      isPot: true,
    },
    wallpot2: {
      id: "wallpot2",
      title: "Echinacea Pot",
      badge: "Small glazed pot",
      dims: "Small blue pot",
      where: "Former Little Pot 1 position on the right edge of the steps",
      desc: "The former Coreopsis pot now holds Echinacea Mooodz Glory ('Hilmooglor'), a compact white coneflower with golden-green central cones. It occupies Little Pot 1's former position.",
      shape: { kind: "circle", cx: 464, cy: 265, r: 10 },
      color: "#3a7abf",
      labelXY: [575, 270],
      plantKey: "Wall Pot 2",
      isPot: true,
    },
    frontpot: {
      id: "frontpot",
      title: "Front Door Pot",
      badge: "Front of house",
      dims: "Medium glazed pot",
      where: "Front garden gravel, immediately south of Bed 2",
      desc:
        "A colourful pot on the gravel immediately south of Front Bed 2. Bold Gazania daisies in cream and orange, with trailing Calibrachoa and Bacopa White for a long season of colour.",
      shape: { kind: "circle", cx: 470, cy: 310, r: 14 },
      color: "#c06a2a",
      labelXY: [470, 338],
      plantKey: "Front Pot",
      isPot: true,
    },
    houseHallKentia: {
      id: "houseHallKentia",
      title: "Hallway · Kentia Palm",
      badge: "Indoor specimen",
      dims: "Nursery pot in white cachepot",
      where: "Ground-floor hallway, beside the main staircase",
      desc:
        "A dark-green architectural palm marking the turn beside the main staircase. The high-confidence Kentia identification remains visibly assumed until a retained label is found.",
      color: "#4f7650",
      plantKey: "House · Hallway · Kentia Palm",
      isPot: true,
      environment: "indoor",
      floor: "Ground Floor",
      room: "Hallway",
      marker: { floor: "ground", x: 835, y: 342 },
    },

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
        "Small bed tucked between the front door and the hedge. Replanted and bark-mulched in July 2026, then expanded to three colourful Coprosma cultivars in August with label-confirmed 'City Knights' joining 'Inferno', 'Pina Colada', Hebe 'Kiwi' and Polemonium 'Golden Feathers'.",
      shape: { kind: "rect", x: 439, y: 201, w: 63, h: 69 },
      color: "#7f8f4a",
      labelXY: [470, 240],
      plantKey: "Front Bed 2",
    },
    frontBed3: {
      id: "frontBed3",
      title: "Front · Bed 3",
      badge: "House-wall bed · wall run",
      dims: "≈4.0m run · 0.8m deep",
      where: "Under the Bedroom 3 and Bedroom 1 windows",
      desc:
        "The house-wall bed running under the Bedroom 3 and Bedroom 1 windows, up to the vertical line between the Bedroom 1 window and the ensuite where Bed 4 takes over. Climbing roses cover the wall, with the relocated variegated dogwood and Red Hot Poker plus new Leucothoe 'Little Flames' below; the former fern was removed in July 2026.",
      shape: { kind: "polygon", points: "547,42 775,42 775,88 547,88" },
      color: "#8b5e3c",
      labelXY: [661, 65],
      plantKey: "Front Bed 3",
    },
    frontBed4: {
      id: "frontBed4",
      title: "Front · Bed 4",
      badge: "Corner bed · under the ensuite window",
      dims: "≈3.2m at the wall · wraps the corner to ~2.2m deep",
      where: "Under the ensuite window, wrapping the corner down to the knee",
      desc:
        "A foliage-rich corner border beneath the ensuite window, wrapping down the return wall to the knee. Two David Austin climbing roses rise above three clustered groups of burgundy Physocarpus, the moved Purple Gem, Rhododendron 'Libretto', Pieris 'Polar Passion', gold Spiraea and blue Festuca. Dahlia 'Tampico' and Verbena 'Margaret's Memory' add late colour beside Achillea and Delosperma; the established Photinia canopy remains at the return-wall side.",
      shape: { kind: "polygon", points: "775,42 958,42 958,170 880,170 775,88" },
      color: "#77613f",
      labelXY: [867, 106],
      plantKey: "Front Bed 4",
    },
    frontBed5: {
      id: "frontBed5",
      title: "Front · Bed 5",
      badge: "Boundary bed",
      dims: "Irregular · patio point to boundary wall",
      where: "From the steps out to the brick boundary wall",
      desc:
        "The whole area right of the steps — bounded by the patio's arrow-point diagonals, the timber steps' east edge, and the brick boundary wall. Golden Choisya, the retained shrub rose, bay, skimmia, hardy fuchsia and clematis share the bed with heathers, Pittosporum, Gaura, Sollya, Ceratostigma, Hypericum, Hebe and Salvia. August brought the moved Astrantia trio and Pieris 'Flaming Silver', plus Hydrangea 'Bloody Marie', Euphorbia 'Ascot Petite' and a spare Little Devil; the Honeysuckle and Cherry Laurel were removed.",
      shape: { kind: "polygon", points: "880,170 958,170 958,475 827,475 827,386 760,372 760,292 815,292" },
      color: "#587a3a",
      labelXY: [860, 330],
      plantKey: "Front Bed 5",
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
      shape: { kind: "rect", x: 547, y: 87, w: 20, h: 114 },
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
      title: "Front · Fruit Trees",
      badge: "Apple & damson",
      dims: "≈0.8m × 1.8m",
      where: "Corner below the Front Pots, against the boundary wall",
      desc:
        "The apple and damson trees tucked into the southern corner below the two Front Pots, against the boundary wall.",
      shape: { kind: "rect", x: 912, y: 577, w: 46, h: 102 },
      color: "#4f6d35",
      labelXY: [895, 700],
      plantKey: "Front Fruit Trees",
    },
    frontPots: {
      id: "frontPots",
      title: "Front · Pots",
      badge: "Boundary pots",
      dims: "Two pots · P1 and P2",
      where: "Between Front Bed 5 and the Fruit Trees",
      desc:
        "Two photographed containers against the boundary wall. P1 is the mixed seasonal pot on the left; P2 is the Fuchsia pot on the right. Their exact constituent cultivars remain to be confirmed, and each pot is supplied by its own sprinkler from the 13mm boundary pipe.",
      shape: { kind: "rect", x: 912, y: 475, w: 46, h: 102 },
      color: "#9a623d",
      labelXY: [895, 560],
      plantKey: "Front Pots",
      surface: "paving",
    },
    frontGateTree: {
      id: "frontGateTree",
      title: "Front · Gate Tree",
      badge: "Weeping crab apple",
      dims: "Canopy position approximate",
      where: "At the gateway, on the drive side marked on the July plan",
      desc:
        "The small weeping ornamental tree beside the gateway. Its crab-apple identity is a strong photographic fit; the exact cultivar remains to be confirmed from spring flowers, ripe fruit and any surviving label.",
      shape: { kind: "circle", cx: 292, cy: 530, r: 27 },
      color: "#5d793e",
      labelXY: [292, 574],
      plantKey: "Front Gate Tree",
    },
  };

  // ─── PLANTS ───────────────────────────────────────────────────────
  // Care info synthesized from horticultural common knowledge per the brief.
  const PLANTS = {
    "Bed 1": [
      {
        name: "Japanese Maple 'Bloodgood'",
        id: "bed1-japanese-maple",
        latin: "Acer palmatum 'Bloodgood'",
        photos: ["images/plants/japanese-maple.webp", "images/plants/japanese-maple-1.webp"],
        position: "Back centre — dominant canopy",
        light: "Dappled shade to partial sun. Sheltered from harsh afternoon sun.",
        water: "Keep soil consistently moist but never waterlogged.",
        care: "Slightly acidic, well-drained loam. Mulch in spring; minimal pruning.",
        seasonal: "Deep red-purple leaves open in April, hold their colour through summer and brighten to fiery red in autumn; bare and architectural in winter.",
      },
      {
        name: "Japanese Aralia",
        id: "bed1-japanese-aralia",
        latin: "Fatsia japonica 'Spider's Web'",
        photos: ["images/plants/japanese-aralia.webp", "images/plants/japanese-aralia-2.webp", "images/plants/japanese-aralia-3.webp"],
        position: "Mid-centre, under the Acer",
        light: "Shade to partial shade. Tolerates deep shade.",
        water: "Moderate; let top inch dry between waterings.",
        care: "Rich, well-drained soil. Cut back leggy stems in spring.",
        seasonal: "Evergreen with cream-flecked leaves; cream globe flowers October–November.",
      },
      {
        name: "Rhododendron",
        id: "bed1-rhododendron",
        latin: "Rhododendron 'Goldflimmer'",
        photos: ["images/plants/rhododendron.webp", "images/plants/rhododendron-2.webp"],
        position: "Mid-left, variegated evergreen",
        light: "Partial shade. Avoid hot, dry sun.",
        water: "Even moisture; never waterlogged.",
        care: "Acidic, ericaceous soil. Mulch with leaf mould; deadhead spent flowers.",
        seasonal: "Evergreen golden-variegated leaves year-round; lavender-purple flowers May.",
      },
      {
        name: "Hosta 'Patriot'",
        id: "bed1-hosta",
        latin: "Hosta 'Patriot'",
        photos: ["images/plants/hosta-patriot.webp", "images/plants/hosta-patriot-2.webp", "images/plants/hosta-francee.webp"],
        position: "Front-left, green/white variegation",
        light: "Shade to partial shade.",
        water: "Keep soil moist; mulch to retain moisture.",
        care: "Watch for slugs and snails. Divide clumps every few years.",
        seasonal: "Foliage emerges April; lilac flowers July; dies back in autumn.",
      },
      {
        name: "Angel Wings",
        id: "bed1-angel-wings",
        latin: "Senecio candicans",
        photos: ["images/plants/angel-wings-1.webp", "images/plants/angel-wings-2.webp", "images/plants/angel-wings-3.webp"],
        position: "Front-centre — silvery-white leaves",
        light: "Full sun to partial sun.",
        water: "Drought-tolerant once established. Avoid overwatering.",
        care: "Free-draining soil. Tender — protect or lift in hard winters.",
        seasonal: "Silver-white furry leaves all season; small yellow flowers if happy.",
      },
      {
        name: "Box Hedging",
        id: "bed1-box-hedging",
        latin: "Buxus sempervirens",
        photos: ["images/plants/box-hedging.webp", "images/plants/box-hedging-1.webp"],
        position: "Full right edge — clipped",
        light: "Sun or partial shade.",
        water: "Moderate; established plants tolerate dry spells.",
        care: "Clip twice yearly (May and August). Watch for box blight.",
        seasonal: "Evergreen year-round.",
      },
      {
        name: "Euonymus 'Emerald 'n' Gold'",
        id: "bed1-euonymus",
        latin: "Euonymus fortunei 'Emerald 'n' Gold'",
        photos: ["images/plants/euonymus.webp", "images/plants/euonymus-1.webp"],
        position: "Front-left corner",
        light: "Sun or partial shade.",
        water: "Moderate; very tolerant once established.",
        care: "Trim to shape in spring. Tough and trouble-free.",
        seasonal: "Golden-variegated evergreen; pink tints in cold weather.",
      },
      {
        name: "Nemesia 'Aroma Heart of Gold'",
        id: "bed1-nemesia",
        latin: "Nemesia Aroma Heart of Gold (Aroma Series)",
        photos: [
          "images/jul-2026/july-update-bed1-nemesia-aroma-heart-of-gold-1.webp",
          "images/jul-2026/july-update-bed1-nemesia-aroma-heart-of-gold-2.webp",
        ],
        position: "Front edge — burgundy, cream and yellow; added July 2026",
        light: "Full sun to partial shade in a sheltered position.",
        water: "Keep moist but well drained, watering in dry spells to maintain flowering.",
        care: "Pinch the growing tips for a bushy plant. Trim flowering shoots after the first flush to encourage more blooms; protect cuttings from frost if overwintering.",
        seasonal: "Sweetly fragrant burgundy-red and creamy-yellow flowers with burnt-orange centres from summer into autumn.",
        profile: {
          version: 2,
          type: "Half-hardy perennial · bedding plant",
          badges: ["Sweetly scented", "Summer–autumn flowers", "Added July 2026"],
          description: "A compact, bushy Nemesia that forms a low cushion of dark green foliage, usually around 25–35cm high and wide. Above it sit loose clouds of two-lipped flowers: burgundy-red and creamy yellow petals gathered around warm burnt-orange centres. The flowers are sweetly scented and can continue from summer into autumn when the plant is kept evenly watered and its first spent flowering shoots are trimmed away. At Oak Lodge it is being used as a low, fragrant edge plant, bringing close-up colour without hiding the planting behind it.",
          floweringMonths: ["Jun", "Jul", "Aug", "Sep", "Oct"],
          facts: [
            { label: "Size", value: "25–35cm", detail: "Compact and bushy; similar height and spread" },
            { label: "Position", value: "Sun or light shade", detail: "Best in a warm, sheltered position" },
            { label: "Soil", value: "Moist, well-drained", detail: "Fertile loam or sandy soil; acid to neutral" },
            { label: "Hardiness", value: "H3", detail: "Protect from hard frost; roughly −5 to 1°C" },
            { label: "Fragrance", value: "Sweetly scented", detail: "Most noticeable close to the flowers" },
            { label: "Habit", value: "Low and bushy", detail: "A deciduous, short-lived perennial often used as bedding" },
          ],
          careGuide: [
            {
              title: "Water by touch, not by routine",
              summary: "Check the top 2–3cm of soil and water when it feels dry.",
              detail: "Its roots are fairly shallow, so a hot or windy spell can slow flowering quickly. Water thoroughly at soil level, then allow the surface to dry slightly rather than keeping the bed constantly wet.",
            },
            {
              title: "Keep the flowers coming",
              summary: "Pinch young tips and trim spent flowering shoots after the first flush.",
              detail: "Pinching encourages a fuller plant. Once the first main display fades, remove the tired flowering growth rather than only picking individual blooms; fresh shoots should produce the next flush.",
            },
            {
              title: "Feed only while it is working",
              summary: "Use a balanced liquid feed during active flowering if growth or colour begins to fade.",
              detail: "A plant growing in fertile bed soil needs less feeding than one in a container. Avoid heavy feeding that produces soft leafy growth at the expense of flowers.",
            },
            {
              title: "Decide how to overwinter it",
              summary: "Treat the Bed 1 plant as vulnerable to a Bromsgrove winter.",
              detail: "H3 means it may survive only a mild, sheltered winter. The reliable option is to take softwood cuttings from non-flowering shoots in late summer and keep them frost-free; otherwise regard the outdoor plant as seasonal.",
            },
          ],
          waterSigns: {
            under: "Leaves and soft stems lose their springiness, the plant looks limp, and flowering slows. Check the soil first: if the top 2–3cm is dry, water deeply.",
            over: "Lower leaves yellow, stems soften or darken at the base, and flowering declines even though the soil stays wet. Pause watering and improve drainage around the crown.",
          },
          seasons: [
            { season: "Spring", action: "If cuttings were overwintered, pinch them once they are growing strongly. Harden plants off gradually and put them outside only after frost risk has passed." },
            { season: "Summer", action: "Keep the root run evenly moist in dry weather. Pinch for shape, feed if flowering weakens, then trim the first tired flowering shoots to prompt another flush." },
            { season: "Autumn", action: "Enjoy the late flowers while weather stays mild. Take non-flowering softwood cuttings before cold nights if this cultivar is to be kept for next year." },
            { season: "Winter", action: "Do not rely on the Bed 1 plant surviving a hard frost. Keep any rooted cuttings bright, frost-free and only lightly moist." },
          ],
          problems: [
            { name: "Drying out", sign: "Sudden limpness and fewer flowers", response: "Check 2–3cm down, then water thoroughly if dry. Do not assume every midday wilt needs water if the soil is still moist." },
            { name: "Root or foot rot", sign: "Yellow leaves, a soft dark stem base or collapse in wet soil", response: "Stop watering, clear soil away from the crown and improve drainage. Badly rotted growth is unlikely to recover." },
            { name: "Aphids", sign: "Clusters on soft tips, sticky leaves or distorted new growth", response: "Squash small colonies by hand or wash them off early, checking the youngest shoots repeatedly." },
            { name: "Frost damage", sign: "Blackened, translucent or collapsed soft growth after a cold night", response: "Remove damaged growth once the risk has passed. Use frost-free cuttings as insurance rather than depending on the outdoor crown." },
          ],
          botanical: [
            { label: "Family", value: "Scrophulariaceae" },
            { label: "Genus", value: "Nemesia" },
            { label: "Botanical name", value: "Nemesia ‘Aroma Heart of Gold’ (Aroma Series)" },
            { label: "Plant type", value: "Bushy, deciduous half-hardy perennial; commonly grown as bedding" },
            { label: "Native to Britain or Ireland", value: "No" },
            { label: "Time to mature", value: "About one year" },
            { label: "Breeding", value: "Reported as bred in the UK by Jimmy Jones at Penhow, Wales" },
            { label: "Name status", value: "Trade designation" },
          ],
          about: "Nemesia is a southern African genus whose species may be annuals, perennials or small sub-shrubs. Their characteristic flowers have two lips and are carried singly or in short clusters. ‘Aroma Heart of Gold’ is a compact garden hybrid selected for fragrance, contrasting flower colour and a long display.",
          provenanceNote: "The cultivar is reported by its nursery supplier as a UK-bred selection by Jimmy Jones of Penhow, Wales. This is useful provenance, but it is recorded as a nursery attribution rather than an independent botanical claim.",
          oakLodge: {
            location: "Front edge of Flower Bed 1",
            added: "July 2026",
            role: "Low, fragrant colour along the raised-bed edge",
            observation: "Planted in flower, showing the cultivar’s burgundy-red, cream-yellow and burnt-orange colouring.",
            status: "First season under observation; outdoor winter survival at Oak Lodge is not yet known.",
          },
          sources: [
            {
              title: "Royal Horticultural Society plant profile",
              url: "https://www.rhs.org.uk/plants/383168/nemesia-aroma-heart-of-gold-aroma-series/details",
              note: "Cultivation, size, habit, flowering, hardiness, pests and diseases",
            },
            {
              title: "Brookside Nursery cultivar listing",
              url: "https://www.brooksidenursery.co.uk/nemesia-aroma-heart-of-gold-5-large-plug-plants.html",
              note: "Cultivar colour, UK breeding attribution and 25–35cm size",
            },
            {
              title: "Oak Lodge garden record",
              url: null,
              note: "Position, planting date, photographs and on-site observations",
            },
          ],
        },
      },
      {
        name: "Wintercreeper 'Emerald Gaiety'",
        id: "bed1-wintercreeper",
        latin: "Euonymus fortunei 'Emerald Gaiety'",
        photos: ["images/plants/wintercreeper.webp", "images/plants/wintercreeper-silver-queen.webp", "images/plants/wintercreeper-3.webp"],
        position: "Front-right — spreading variegated evergreen",
        light: "Sun or partial shade.",
        water: "Moderate.",
        care: "Trim to shape in spring. Very tough and low-care.",
        seasonal: "Evergreen white-and-green leaves year-round; pink tints in cold weather.",
      },
      {
        name: "Dahlia 'Double Dreamy Lilac'",
        id: "bed1-dahlia",
        latin: "Dahlia Double Dreamy Lilac (best-fit identification)",
        photos: ["images/plants/dahlia-1.webp", "images/plants/dahlia-2.webp", "images/plants/dahlia-3.webp"],
        position: "Centre — compact dark foliage and lilac-magenta double flowers",
        light: "Full sun. Needs warmth to thrive.",
        water: "Regular watering, especially in dry spells. Don't let soil dry out completely.",
        care: "Rich, well-drained soil. Mulch the crown and support only if the compact stems lean under their flowers. Lift tubers in autumn or mulch heavily for winter protection. Pinch early and deadhead for continuous blooming.",
        seasonal: "Dark bronze-black foliage from May; fully double lilac-magenta flowers July–October; dies back after the first hard frost. Tubers overwinter with protection.",
      },
      {
        name: "Dahlia 'Double Dreamy Gold'",
        id: "bed1-dahlia-yellow",
        latin: "Dahlia Double Dreamy Gold (best-fit identification)",
        photos: ["images/june-2026-updates/dahlia-black-yellow-1.webp", "images/june-2026-updates/dahlia-black-yellow-2.webp"],
        position: "Centre — compact dark foliage and golden double flowers. Added June 2026.",
        light: "Full sun. Needs warmth to thrive.",
        water: "Regular watering, especially in dry spells. Don't let soil dry out completely.",
        care: "Rich, well-drained soil. Mulch the crown and support only if the compact stems lean under their flowers. Lift tubers in autumn or mulch heavily for winter protection. Pinch early and deadhead for continuous blooming.",
        seasonal: "Dark bronze-black foliage from May; fully double golden-yellow flowers July–October; dies back after the first hard frost. Tubers overwinter with protection.",
      },
      {
        name: "Hosta (gold)",
        id: "bed1-hosta-gold",
        latin: "Hosta 'Gold Standard'",
        photos: ["images/plants/hosta-gold-standard.webp", "images/june-2026/hosta-bed2.webp"],
        position: "Mid-bed — moved from Bed 2, June 2026",
        light: "Shade to partial shade.",
        water: "Keep moist.",
        care: "Slug protection; divide every few years.",
        seasonal: "Emerges April; lilac flowers July.",
      },
      {
        name: "Little Heath",
        id: "bed1-little-heath",
        latin: "Pieris japonica 'Little Heath'",
        photos: ["images/june-2026-update-2/little-heath-1.webp", "images/june-2026-update-2/little-heath-2.webp", "images/june-2026-update-2/little-heath-3.webp", "images/june-2026-update-2/little-heath-4.webp", "images/june-2026-update-2/little-heath-5.webp"],
        position: "Front edge — 7 plants forming a low border. Added June 2026.",
        light: "Partial shade, sheltered from cold drying winds. Tolerates sun if the soil stays moist.",
        water: "Keep evenly moist, especially while establishing. Do not allow the root ball to dry out or sit waterlogged.",
        care: "Grow in humus-rich, acidic soil or ericaceous compost. Mulch with leaf mould or composted bark. Remove faded flowers and damaged growth only; little routine pruning is needed.",
        seasonal: "Cream-edged evergreen foliage year-round; red young shoots and white spring flowers, usually March–May.",
      },
    ],
    "Bed 2": [
      {
        name: "Weeping Cherry",
        id: "bed2-weeping-cherry",
        latin: "Prunus species",
        photos: ["images/plants/weeping-cherry.webp", "images/plants/weeping-cherry-1.webp", "images/plants/weeping-cherry-2.webp"],
        position: "Upper section — overhanging the wall",
        light: "Full sun.",
        water: "Moderate; deep watering when young.",
        care: "Light pruning after flowering; avoid heavy cuts.",
        seasonal: "Pink blossom April; green canopy summer; bare winter.",
      },
      {
        name: "Peony",
        id: "bed2-peony",
        latin: "Paeonia lactiflora",
        photos: ["images/plants/peony.webp"],
        position: "Lower section",
        light: "Full sun, sheltered.",
        water: "Moderate; deep watering when budding.",
        care: "Don't bury the crown. Stake floppy heads. Resents being moved.",
        seasonal: "Huge fragrant flowers May–June; foliage to ground in autumn.",
      },
      {
        name: "Weigela",
        id: "bed2-weigela",
        latin: "Weigela florida",
        photos: ["images/plants/weigela.webp"],
        position: "Mid section",
        light: "Full sun.",
        water: "Moderate.",
        care: "Prune one in three old stems after flowering.",
        seasonal: "Pink trumpet flowers May–June; sometimes a second flush.",
      },
      {
        name: "Silverbush",
        id: "bed2-silverbush",
        latin: "Convolvulus cneorum",
        photos: ["images/plants/silverbush.webp", "images/plants/silverbush-2.webp", "images/plants/silverbush-3.webp"],
        position: "Mid-right — silvery foliage",
        light: "Full sun.",
        water: "Drought-tolerant. Hates wet feet.",
        care: "Sharp drainage essential. Light trim after flowering.",
        seasonal: "White trumpet flowers May–September on silver mound.",
      },
      {
        name: "Angel Wings",
        id: "bed2-angel-wings",
        latin: "Senecio candicans",
        photos: ["images/plants/angel-wings-1.webp", "images/plants/angel-wings-2.webp", "images/plants/angel-wings-3.webp"],
        position: "Lower, front",
        light: "Full sun.",
        water: "Drought-tolerant.",
        care: "Free-draining soil; tender in hard winters.",
        seasonal: "Silver foliage all season.",
      },
      {
        name: "Avens",
        id: "bed2-avens",
        latin: "Geum",
        photos: ["images/june-2026-updates/avens-bed1.webp", "images/plants/avens-orange.webp", "images/plants/avens-red-orange.webp", "images/plants/avens-orange-2.webp"],
        position: "Lower section — orange flowers. Moved from Bed 1 in July 2026.",
        light: "Sun or partial shade.",
        water: "Moderate.",
        care: "Deadhead to encourage a second flush. Divide clumps every few years.",
        seasonal: "Orange flowers May–July, often a second flush in late summer.",
      },
      {
        name: "Kerria",
        id: "bed2-kerria",
        latin: "Kerria japonica",
        photos: ["images/plants/kerria.webp", "images/plants/kerria-1.webp"],
        position: "Against the wall — arching stems with yellow flowers",
        light: "Partial shade to full sun.",
        water: "Low to moderate. Tolerates dry shade.",
        care: "Cut flowered stems back to the base after flowering. Remove all-green suckers promptly.",
        seasonal: "Bright single yellow flowers April–May; arching green stems attractive all year.",
      },
      {
        name: "Forget-me-not",
        id: "bed2-forget-me-not",
        latin: "Myosotis",
        photos: ["images/plants/forget-me-not.webp"],
        position: "Lower — small blue flowers",
        light: "Sun to partial shade.",
        water: "Moderate.",
        care: "Biennial; lets itself seed about. Pull spent plants in summer.",
        seasonal: "Sky-blue clouds April–June.",
      },
      {
        name: "Maiden Pink",
        id: "bed2-maiden-pink",
        latin: "Dianthus deltoides 'Leuchtfunk'",
        photos: ["images/plants/maiden-pink.webp", "images/plants/dianthus.webp", "images/plants/dianthus-1.webp", "images/plants/dianthus-2.webp"],
        position: "Between walls — pink flowers",
        light: "Full sun.",
        water: "Low; sharp drainage.",
        care: "Trim after flowering. Mat-forming.",
        seasonal: "Pink stars June–August.",
      },
      {
        name: "Centaurea 'Snowy Owl'",
        id: "bed2-centaurea-snowy-owl",
        latin: "Centaurea montana 'Snowy Owl'",
        position: "Against the wall — white cornflower flowers",
        light: "Full sun.",
        water: "Low to moderate.",
        care: "Cut back after flowering for a second flush. Short-lived perennial; divide every 2–3 years.",
        seasonal: "White cornflower blooms May–July; ferny silver-green foliage.",
      },
      {
        name: "Hydrangea petiolaris",
        id: "bed2-hydrangea-petiolaris",
        latin: "Hydrangea anomala subsp. petiolaris",
        position: "Against the far wall — self-clinging climber",
        light: "Partial shade to full shade. Tolerates north-facing walls.",
        water: "Moist but well-drained.",
        care: "Slow to establish; once settled it is vigorous. Light prune to shape after flowering.",
        seasonal: "White lace-cap flowers June–July; golden autumn leaf colour; interesting bark in winter.",
      },
      {
        name: "Euonymus 'Emerald Gaiety'",
        id: "bed2-euonymus-emerald-gaiety",
        latin: "Euonymus fortunei 'Emerald Gaiety'",
        position: "Lower section — spreading, white-margined leaves",
        light: "Sun or partial shade.",
        water: "Moderate; tolerates dry spells once established.",
        care: "Trim to shape in spring. Very hardy and low-maintenance. Moved from Bed 3, June 2026.",
        seasonal: "Evergreen white-margined leaves year-round; pink blush to the margins in cold spells.",
      },
      {
        name: "Spiraea 'Double Play Big Bang'",
        id: "bed2-spiraea-double-play-big-bang",
        latin: "Spiraea japonica 'Double Play Big Bang'",
        photos: ["images/june-2026-update-2/spiraea-big-bang-1.webp", "images/june-2026-update-2/spiraea-big-bang-2.webp", "images/june-2026-update-2/spiraea-big-bang-3.webp", "images/june-2026-update-2/spiraea-big-bang-4.webp", "images/june-2026-update-2/spiraea-big-bang-5.webp"],
        position: "Positions 2–5 against the wall — 4 plants.",
        light: "Full sun to partial shade.",
        water: "Moderate. Water well until established; tolerates dry spells after.",
        care: "Prune hard in early spring to encourage bright new foliage and flowers. Remove spent flower heads. Hardy shrub.",
        seasonal: "Vivid orange-red new growth in spring; bright pink flowers June–August; foliage turns orange-red in autumn.",
      },
      {
        name: "Hebe",
        id: "stone-hebe",
        latin: "Hebe (syn. Veronica) cultivar",
        photos: ["images/plants/hebe.webp"],
        position: "Lower section — moved from the Stone Bed in July 2026",
        light: "Full sun to partial shade in a sheltered position.",
        water: "Moderate while re-establishing; avoid winter waterlogging.",
        care: "Lightly trim green growth after flowering and protect from prolonged hard frost or cold drying winds.",
        seasonal: "Evergreen cream-edged foliage, often strongly flushed pink in cold weather; purple-white summer flower spikes.",
      },
    ],
    "Bed 4": [
      {
        name: "Apple Tree",
        id: "bed4-apple-tree",
        latin: "Malus domestica",
        photos: ["images/plants/apple-tree.webp", "images/plants/apple-tree-1.webp"],
        position: "Centre — with bird feeders",
        light: "Full sun.",
        water: "Deep watering in dry spells, especially when fruiting.",
        care: "Winter prune for shape. Thin fruit in June for size.",
        seasonal: "Blossom April; fruit August–October; bare winter.",
      },
      {
        name: "Callistemon Inferno ('Yanferno')",
        id: "bed4-callistemon-inferno-yanferno",
        latin: "Callistemon Inferno ('Yanferno')",
        photos: ["images/june-2026-updates/callistemon-inferno-1.webp", "images/june-2026-updates/callistemon-inferno-2.webp"],
        position: "Front-left — vivid red bottlebrush flowers",
        light: "Full sun. Thrives in a warm, sheltered spot.",
        water: "Moderate. Drought-tolerant once established. Good drainage essential.",
        care: "RHS hardiness H3 (about −5°C to 1°C). Keep in a warm, sheltered position and protect thoroughly from severe cold and winter winds. Prune only in summer immediately after flowering, removing a little older growth at a time.",
        seasonal: "Evergreen; vivid red bottlebrush flowers June–August, sometimes a repeat flush in autumn. Architectural foliage year-round.",
      },
      {
        name: "Achillea",
        id: "bed4-achillea",
        latin: "Achillea millefolium",
        photos: ["images/june-2026-updates/achillea.webp"],
        position: "Left — flat-headed flower clusters",
        light: "Full sun.",
        water: "Low to moderate. Drought-tolerant once established.",
        care: "Cut back after first flush for a second showing. Divide clumps every 2–3 years to keep vigorous. Good for cutting.",
        seasonal: "Flat-headed flower clusters in red, pink or yellow June–September; feathery aromatic foliage through the season.",
      },
      {
        name: "Gaillardia",
        id: "bed4-gaillardia",
        latin: "Gaillardia × grandiflora",
        photos: ["images/june-2026-updates/gaillardia.webp"],
        position: "Right — vivid daisy flowers",
        light: "Full sun.",
        water: "Low to moderate. Sharp drainage essential — hates wet feet.",
        care: "Deadhead regularly for near-continuous bloom. Cut back hard in autumn. Short-lived perennial — may need replacing every 2–3 years.",
        seasonal: "Vivid red, orange and yellow daisy-like flowers June–October; near-continuous if deadheaded.",
      },
      {
        name: "Abelia 'Kaleidoscope'",
        id: "bed4-abelia-kaleidoscope",
        latin: "Abelia × grandiflora 'Kaleidoscope'",
        photos: ["images/june-2026-updates/abelia-kaleidoscope.webp"],
        position: "Front-right — variegated foliage shrub",
        light: "Full sun to partial shade. Best foliage colour in full sun.",
        water: "Moderate. Good drainage.",
        care: "Light trim after flowering to maintain shape. Very low maintenance. Semi-evergreen — may drop some leaves in a hard winter but recovers readily.",
        seasonal: "Variegated yellow and green leaves spring–summer, turning orange-red in autumn; small white fragrant flowers July–September. Semi-evergreen.",
      },
      {
        name: "Celosia",
        id: "bed4-celosia",
        latin: "Celosia argentea var. cristata",
        photos: ["images/june-2026-update-2/celosia.webp"],
        position: "Front of the bed — purple, yellow and red varieties. Moved from Bed 1 in July 2026.",
        light: "Full sun.",
        water: "Moderate; water at the base, avoid wetting the plumes.",
        care: "Annual. Deadhead spent plumes to encourage more flowers. Tender — plant out after last frost. Feed fortnightly with a balanced liquid feed.",
        seasonal: "Vivid crested or plumed flowers June–October; dies with the first hard frost.",
      },
    ],
    "Bed 5": [
      {
        name: "Wisteria",
        id: "bed5-wisteria",
        latin: "Wisteria spp.",
        photos: ["images/plants/wisteria.webp", "images/plants/wisteria-1.webp", "images/plants/wisteria-2.webp"],
        group: "In the bed",
        position: "Top — cascading over the wall",
        light: "Full sun.",
        water: "Deep watering when young; established plants tolerate drought.",
        care: "Prune twice yearly: August (long shoots to 6 leaves) and February (back to 2–3 buds).",
        seasonal: "Lilac racemes May; bare gnarled stems winter.",
      },
      {
        name: "Rose",
        id: "bed5-rose",
        latin: "Rosa",
        photos: ["images/plants/rose.webp"],
        group: "In the bed",
        position: "Mid — on trellis/support",
        light: "Full sun.",
        water: "Deep watering, mulch in spring.",
        care: "Prune in late winter. Feed in spring and after first flush.",
        seasonal: "Flowers June–September; bare winter.",
      },
      {
        name: "New Zealand Flax (cultivar to confirm)",
        id: "bed5-new-zealand-flax-cultivar-to-confirm",
        latin: "Phormium (cultivar to confirm)",
        photos: ["images/plants/yucca.webp", "images/plants/yucca-1.webp"],
        group: "In the bed",
        position: "Lower-left — striped, architectural foliage",
        light: "Full sun to partial shade; shelter from cold drying winds.",
        water: "Moderate while establishing; drought-tolerant later, but avoid prolonged waterlogging.",
        care: "Grow in fertile, well-drained soil. Remove damaged leaves at the base in spring and mulch the crown before hard frost. Cultivar still needs confirmation from a label or diagnostic photos.",
        seasonal: "Evergreen sword-shaped foliage year-round; mature plants may produce tall flower stems in summer.",
      },
      {
        name: "Alstroemeria",
        id: "bed5-big-pot-alstroemeria",
        latin: "Alstroemeria hybrid",
        photos: [
          "images/jul-2026/bed5-big-pot-alstroemeria-1.webp",
          "images/jul-2026/bed5-big-pot-alstroemeria-2.webp",
        ],
        group: "Big pot",
        position: "Big pot — upright centre planting",
        light: "Full sun to partial shade; flowering is strongest with plenty of light.",
        water: "Keep evenly moist in the growing season, but never waterlogged.",
        care: "Feed weekly while flowering. Pull spent flower stems cleanly from the base rather than cutting them. Protect the pot from hard frost in winter.",
        seasonal: "Red-and-gold flowers from summer into autumn above dark foliage; dies back in cold weather.",
      },
      {
        name: "Petunia 'Bee's Knees'",
        id: "bed5-big-pot-petunia-bees-knees",
        latin: "Petunia 'Bee's Knees'",
        photos: [
          "images/jul-2026/bed5-big-pot-petunia-bees-knees-1.webp",
          "images/jul-2026/bed5-big-pot-petunia-bees-knees-2.webp",
        ],
        group: "Big pot",
        position: "Big pot — yellow flowering edge",
        light: "Full sun for the most flowers; tolerates light partial shade.",
        water: "Water when the top of the compost begins to dry; pots may need daily checks in hot weather.",
        care: "Feed weekly with a high-potash liquid feed and deadhead or trim leggy growth to keep flowers coming.",
        seasonal: "Clear yellow flowers from summer until the first frost; grown as a tender annual.",
      },
      {
        name: "Vinca minor 'Illumination'",
        id: "bed5-big-pot-vinca-minor-illumination",
        latin: "Vinca minor 'Illumination'",
        photos: [
          "images/jul-2026/bed5-big-pot-vinca-illumination-1.webp",
          "images/jul-2026/bed5-big-pot-vinca-illumination-2.webp",
        ],
        group: "Big pot",
        position: "Big pot — trailing over the rim",
        light: "Sun to shade; the yellow-and-green foliage colours best in bright indirect light or partial shade.",
        water: "Moderate. Let the surface dry slightly between waterings, without letting the pot dry out completely.",
        care: "Trim trailing stems to shape. Hardy and evergreen, but vigorous if later planted into open ground.",
        seasonal: "Golden variegated foliage year-round with small violet-blue flowers mainly in spring.",
      },
      {
        name: "Nemesia",
        id: "bed5-big-pot-nemesia",
        latin: "Nemesia hybrid",
        photos: [
          "images/jul-2026/july-update-bed-5-nemesia.webp",
          "images/jul-2026/july-update-bed-5-big-pot-nemesia.webp",
        ],
        group: "Big pot",
        position: "Big pot — compact flowering filler added July 2026",
        light: "Full sun to light partial shade; a little afternoon shade helps during hot spells.",
        water: "Keep the compost evenly moist but not waterlogged; check the pot frequently in warm or windy weather.",
        care: "Feed fortnightly while flowering. Deadhead or trim back tired stems by about a third to encourage a fresh flush.",
        seasonal: "Small, scented flowers from summer into autumn; usually grown as tender seasonal colour.",
      },
      {
        name: "Lythrum 'Robin'",
        id: "bed5-medium-pot-lythrum-robin",
        latin: "Lythrum salicaria 'Robin'",
        photos: [
          "images/jul-2026/bed5-medium-pot-lythrum-robin-1.webp",
          "images/jul-2026/bed5-medium-pot-lythrum-robin-2.webp",
          "images/jul-2026/bed5-medium-pot-lythrum-robin-3.webp",
          "images/jul-2026/bed5-medium-pot-lythrum-robin-4.webp",
        ],
        group: "Medium pot",
        position: "Medium pot — standalone pollinator plant",
        light: "Full sun to partial shade; flowers best in full sun.",
        water: "Moisture-loving. Keep the compost consistently moist, especially during flowering.",
        care: "Deadhead to prolong flowering or leave some seedheads for wildlife. Cut old stems down in late winter or early spring.",
        seasonal: "Dense magenta flower spikes in summer, popular with bees; herbaceous and dormant in winter.",
      },
      {
        name: "Begonia 'Carmen'",
        id: "bed5-little-pot-begonia-carmen",
        latin: "Begonia 'Carmen'",
        photos: [
          "images/jul-2026/bed5-little-pot-begonia-carmen-1.webp",
          "images/jul-2026/bed5-little-pot-begonia-carmen-2.webp",
        ],
        group: "Little pot",
        position: "Little pot — red double flowers",
        light: "Bright partial shade or gentle morning sun; protect from harsh midday sun.",
        water: "Keep evenly moist but not saturated. Water the compost rather than the leaves and flowers.",
        care: "Deadhead faded blooms and feed fortnightly in summer. Tender — protect from frost and overwinter under cover if keeping it.",
        seasonal: "Double red flowers through summer and early autumn; tender and dormant or discarded after frost.",
      },
    ],
    "Stone Bed": [
      {
        name: "Houseleeks",
        id: "stone-houseleeks",
        latin: "Sempervivum",
        photos: ["images/plants/houseleek.webp"],
        position: "Left-centre — rosettes in gravel",
        light: "Full sun.",
        water: "Very low. Hates wet.",
        care: "Sharp drainage; almost no maintenance.",
        seasonal: "Evergreen rosettes; flowering rosettes die after blooming, replaced by offsets.",
      },
      {
        name: "Echeveria",
        id: "stone-echeveria",
        latin: "Echeveria cultivar",
        photos: [
          "images/jul-2026/stone-echeveria-perle-von-nurnberg-planted.webp",
          "images/jul-2026/stone-echeveria-perle-von-nurnberg-1.webp",
          "images/jul-2026/stone-echeveria-perle-von-nurnberg-2.webp",
        ],
        position: "Centre-left — grey rosette beside the houseleeks",
        light: "Full sun or very bright light; acclimatise gradually to strong sun.",
        water: "Low. Water only when the soil has dried; keep almost dry in winter.",
        care: "Sharply drained soil. Tender: lift before frost and overwinter frost-free under cover.",
        seasonal: "Evergreen powdery grey-purple rosette; pink-red flower stems may appear in summer.",
      },
      {
        name: "Sedum 'Chocolate Ball'",
        id: "stone-sedum-chocolate-ball",
        latin: "Sedum polytrichoides 'Chocolate Ball'",
        photos: ["images/jul-2026/stone-bed-sedum-chocolate-ball-2.webp", "images/jul-2026/stone-bed-sedum-chocolate-ball-3.webp"],
        position: "Front gravel — bronze, needle-leaved mound. Added July 2026.",
        light: "Full sun.",
        water: "Very low; let the gritty soil dry between waterings.",
        care: "Sharp drainage is essential. RHS H3: protect from severe frost and prolonged winter wet.",
        seasonal: "Evergreen bronze-brown foliage; small yellow flowers in summer.",
      },
      {
        name: "Older Caucasian Stonecrop",
        id: "stone-older-caucasian-stonecrop",
        latin: "Phedimus spurius cultivar",
        photos: ["images/jul-2026/stone-bed-older-caucasian-stonecrop-assumed-1.webp"],
        position: "Established low patch — separate from the newly planted 'Dragon's Blood'.",
        light: "Full sun for compact growth and strongest colour.",
        water: "Low; water only during establishment or prolonged drought.",
        care: "Trim spent flower stems and pull wandering shoots back from smaller alpines. Keep the crown sharply drained.",
        seasonal: "Scalloped green leaves flush red; pink-red flower clusters age to brown seedheads.",
      },
      {
        name: "Common Houseleek",
        id: "stone-common-houseleek",
        latin: "Sempervivum tectorum",
        photos: ["images/jul-2026/stone-bed-common-houseleek-assumed-1.webp"],
        position: "Established green rosettes with red tips among the gravel.",
        light: "Full sun.",
        water: "Very low; established rosettes normally need no extra water.",
        care: "Keep grit around the crowns, clear trapped leaves and remove a parent rosette only after it flowers and dies naturally.",
        seasonal: "Evergreen rosettes colour more strongly in cold or bright conditions; starry flowers may appear in summer.",
      },
      {
        name: "Six-rowed Stonecrop",
        id: "stone-six-rowed-stonecrop",
        latin: "Sedum sexangulare",
        photos: ["images/jul-2026/stone-bed-six-rowed-stonecrop-assumed-1.webp"],
        position: "Established fine green mat through the gravel.",
        light: "Full sun.",
        water: "Very low once rooted.",
        care: "Use gritty, lean soil and trim spreading stems where they crowd slower alpines.",
        seasonal: "Evergreen cylindrical leaves in six neat ranks; yellow star flowers in summer.",
      },
      {
        name: "Ajuga 'Fancy Finch'",
        id: "stone-ajuga-fancy-finch",
        latin: "Ajuga 'Fanfin' (Feathered Friends Fancy Finch)",
        photos: ["images/jul-2026/stone-bed-ajuga-fancy-finch-2.webp", "images/jul-2026/stone-bed-ajuga-fancy-finch-3.webp"],
        position: "Cooler edge of the Stone Bed. Added July 2026.",
        light: "Partial shade; protect the golden foliage from scorching midday sun.",
        water: "Moderate. Keep evenly moist while establishing.",
        care: "Trim spent flower spikes and remove runners that stray into the driest succulent pockets.",
        seasonal: "Golden to orange narrow foliage year-round; blue flower spikes in spring.",
      },
      {
        name: "Hydrangea 'Snowflake'",
        id: "stone-hydrangea-snowflake",
        latin: "Hydrangea quercifolia 'Brido' (Snowflake)",
        photos: ["images/jul-2026/stone-bed-hydrangea-quercifolia-snowflake-2.webp", "images/jul-2026/stone-bed-hydrangea-quercifolia-snowflake-5.webp"],
        position: "Back of the bed — moisture-retentive planting pocket. Added July 2026.",
        light: "Full sun to partial shade; afternoon shade is useful in hot weather.",
        water: "Moderate to high while establishing; soak deeply during dry spells.",
        care: "Give it a humus-rich pocket beneath the gravel, mulch clear of the crown and prune only dead or misplaced wood after flowering.",
        seasonal: "Double white flower panicles fade pink; oak-shaped leaves turn rich red and purple in autumn.",
      },
      {
        name: "Chick Charms Houseleek Mix",
        id: "stone-chick-charms-mix",
        latin: "Sempervivum Chick Charms Series",
        photos: ["images/jul-2026/stone-bed-chick-charms-mix-2.webp", "images/jul-2026/stone-bed-chick-charms-mix-4.webp"],
        position: "Mixed rosette group in open gravel. Added July 2026.",
        light: "Full sun.",
        water: "Very low; only newly planted offsets need occasional water.",
        care: "The label confirms the series but not its individual cultivars. Keep crowns dry and remove spent flowering rosettes.",
        seasonal: "Evergreen rosettes change colour with season and temperature; mature rosettes may flower in summer.",
      },
      {
        name: "Achillea 'King Alfred'",
        id: "stone-achillea-king-alfred",
        latin: "Achillea 'King Alfred'",
        photos: ["images/jul-2026/stone-bed-achillea-king-alfred-1.webp", "images/jul-2026/stone-bed-achillea-king-alfred-2.webp"],
        position: "Sunny front edge. Added July 2026.",
        light: "Full sun.",
        water: "Low once established.",
        care: "Keep in lean, sharply drained soil and trim untidy growth in spring.",
        seasonal: "Low grey-green aromatic mat with pale yellow flower heads in late spring and early summer.",
      },
      {
        name: "Golden Stonecrop 'Aureum'",
        id: "stone-sedum-aureum",
        latin: "Sedum acre 'Aureum'",
        photos: ["images/jul-2026/stone-bed-sedum-aureum-1.webp", "images/jul-2026/stone-bed-sedum-aureum-2.webp"],
        position: "Front gravel — bright golden mat. Added July 2026.",
        light: "Full sun.",
        water: "Very low.",
        care: "Avoid rich soil and trim after flowering if it spreads over slower plants.",
        seasonal: "Evergreen yellow-gold foliage with small yellow flowers in summer.",
      },
      {
        name: "Cobweb Houseleek",
        id: "stone-sempervivum-arachnoideum",
        latin: "Sempervivum arachnoideum",
        photos: ["images/jul-2026/stone-bed-sempervivum-arachnoideum-1.webp", "images/jul-2026/stone-bed-sempervivum-arachnoideum-2.webp"],
        position: "Open gravel — white-webbed rosettes. Added July 2026.",
        light: "Full sun.",
        water: "Very low.",
        care: "Keep winter rain and leaf litter out of the rosettes; detach offsets to extend the colony.",
        seasonal: "Evergreen cobwebbed rosettes, often red-flushed; pink star flowers in summer.",
      },
      {
        name: "Thrift 'Armada White'",
        id: "stone-armeria-armada-white",
        latin: "Armeria maritima 'Armada White'",
        photos: ["images/jul-2026/stone-bed-armeria-armada-white-2.webp", "images/jul-2026/stone-bed-armeria-armada-white-3.webp"],
        position: "Sunny edge — compact grass-like mound. Added July 2026.",
        light: "Full sun.",
        water: "Low to moderate while establishing; drought tolerant later.",
        care: "Deadhead the white globes and keep the crown clear in gritty soil.",
        seasonal: "Evergreen grassy cushions with white flower heads from spring into summer.",
      },
      {
        name: "Houseleek 'Purple Quartz'",
        id: "stone-sempervivum-purple-quartz",
        latin: "Sempervivum 'Purple Quartz' (Big Sam Series)",
        photos: ["images/jul-2026/stone-bed-sempervivum-purple-quartz-1.webp", "images/jul-2026/stone-bed-sempervivum-purple-quartz-2.webp"],
        position: "Open gravel — large purple-flushed rosettes. Added July 2026.",
        light: "Full sun.",
        water: "Very low.",
        care: "Provide sharp drainage, clear debris and protect from persistent winter wet rather than cold.",
        seasonal: "Grey-green rosettes flush pink and purple; mature rosettes flower once before offsets replace them.",
      },
      {
        name: "Sedum 'Angelina'",
        id: "stone-sedum-angelina",
        latin: "Sedum rupestre 'Angelina'",
        photos: ["images/jul-2026/stone-bed-sedum-angelina-2.webp", "images/jul-2026/stone-bed-sedum-angelina-4.webp"],
        position: "Trailing through the sunny front gravel. Added July 2026.",
        light: "Full sun for strongest gold and orange colour.",
        water: "Very low once established.",
        care: "Shear or pull back spreading shoots when they overrun small rosettes.",
        seasonal: "Golden needle-like foliage turns orange in cold weather; yellow flowers in summer.",
      },
      {
        name: "Stonecrop 'Dragon's Blood'",
        id: "stone-sedum-dragons-blood",
        latin: "Phedimus spurius 'Schorbuser Blut'",
        photos: ["images/jul-2026/stone-bed-sedum-dragons-blood-1.webp", "images/jul-2026/stone-bed-sedum-dragons-blood-2.webp"],
        position: "New red-leaved groundcover, recorded separately from the older stonecrop. Added July 2026.",
        light: "Full sun.",
        water: "Low once established.",
        care: "Trim spent heads and keep spreading stems within their allotted gravel pocket.",
        seasonal: "Green-red scalloped leaves deepen burgundy; clusters of deep pink-red summer flowers.",
      },
      {
        name: "Echeveria 'Devotion'",
        id: "stone-echeveria-devotion",
        latin: "Echeveria pulvinata 'Bcec12001' (Devotion)",
        photos: ["images/jul-2026/stone-bed-echeveria-pulvinata-devotion-1.webp", "images/jul-2026/stone-bed-echeveria-pulvinata-devotion-3.webp"],
        position: "Sunny gravel — velvety upright rosettes. Added July 2026.",
        light: "Full sun or very bright light.",
        water: "Low; soak only after the root zone dries.",
        care: "Tender H2: lift before frost and overwinter bright, frost-free and almost dry.",
        seasonal: "Velvety green leaves develop burgundy margins and tips in strong light and cool weather.",
      },
      {
        name: "Sedum 'Atlantis'",
        id: "stone-sedum-atlantis",
        latin: "Sedum takesimense 'Nonsitnal' (Atlantis)",
        photos: ["images/jul-2026/stone-bed-sedum-takesimense-atlantis-1.webp", "images/jul-2026/stone-bed-sedum-takesimense-atlantis-2.webp"],
        position: "Front-to-middle gravel — cream-edged mound. Added July 2026.",
        light: "Full sun.",
        water: "Low once established.",
        care: "Cut back old flower stems in spring and divide if the mound opens in the centre.",
        seasonal: "Green leaves with broad cream-yellow margins blush pink in autumn; yellow summer flowers.",
      },
      {
        name: "Purple Fountain Grass 'Rubrum'",
        id: "stone-pennisetum-rubrum",
        latin: "Pennisetum advena 'Rubrum'",
        photos: ["images/jul-2026/stone-bed-pennisetum-rubrum-1.webp", "images/jul-2026/stone-bed-pennisetum-rubrum-3.webp"],
        position: "Back of the bed — burgundy fountain. Added July 2026.",
        light: "Full sun in a warm, sheltered position.",
        water: "Moderate during active growth; never leave waterlogged.",
        care: "Tender H3: lift or pot before hard frost and overwinter frost-free; fleece alone is unreliable in Bromsgrove.",
        seasonal: "Arching burgundy leaves and purple-brown bottlebrush plumes from summer into autumn.",
      },
      {
        name: "Ajuga 'Midnight Mystery'",
        id: "stone-ajuga-midnight-mystery",
        latin: "Ajuga reptans 'Midnight Mystery'",
        photos: ["images/jul-2026/stone-bed-ajuga-midnight-mystery-1.webp"],
        position: "Cooler edge — dark spreading foliage. Added July 2026.",
        light: "Partial shade or gentle sun.",
        water: "Moderate; keep moist while establishing.",
        care: "Remove unwanted runners and maintain airflow to reduce mildew.",
        seasonal: "Dark bronze evergreen foliage with contrasting rosy-pink spring flowers.",
      },
      {
        name: "New Zealand Flax (dark)",
        id: "stone-new-zealand-flax-dark",
        latin: "Phormium 'Platt's Black'",
        photos: ["images/plants/phormium.webp", "images/plants/phormium-1.webp"],
        position: "Centre — dark burgundy spikes",
        light: "Full sun.",
        water: "Moderate; drought-tolerant once established.",
        care: "Remove old leaves at base. Architectural and low-care.",
        seasonal: "Evergreen dark foliage year-round.",
      },
      {
        name: "Cabbage Tree",
        id: "stone-cabbage-tree",
        latin: "Cordyline australis 'Red Star'",
        photos: ["images/plants/cordyline.webp"],
        position: "Right — large palm-like tree",
        light: "Full sun.",
        water: "Moderate; established plants tolerate drought.",
        care: "Tie up leaves in winter to protect crown if hard frost forecast.",
        seasonal: "Evergreen burgundy fountain of leaves.",
      },
    ],
    Patio: [
      {
        name: "Honeysuckle",
        id: "stone-honeysuckle",
        latin: "Lonicera",
        photos: ["images/plants/honeysuckle.webp", "images/plants/honeysuckle-1.webp", "images/plants/honeysuckle-2.webp"],
        position: "Far right — climbing on support",
        light: "Sun, with shaded roots.",
        water: "Moderate.",
        care: "Light prune after flowering. Train onto support.",
        seasonal: "Fragrant flowers June–August.",
      },
      {
        name: "Clematis",
        id: "stone-clematis",
        latin: "Clematis montana",
        photos: ["images/plants/clematis.webp"],
        position: "Left side of house wall — mature woody stems",
        light: "Sun, with shaded roots.",
        water: "Moderate.",
        care: "Group 1 clematis — light prune after flowering only. Tie in new growth.",
        seasonal: "Sheets of pale pink flowers May; vigorous summer growth.",
      },
    ],
    Tree: [
      {
        name: "Pear Tree",
        id: "stone-pear-tree",
        latin: "Pyrus",
        photos: ["images/plants/pear-tree.webp", "images/plants/pear-tree-1.webp", "images/plants/pear-tree-2.webp"],
        position: "Upper terrace — near the gate",
        light: "Full sun.",
        water: "Deep watering in dry summers.",
        care: "Winter prune for shape. Thin fruit if heavy.",
        seasonal: "White blossom April; fruit September; bare winter.",
      },
    ],
    "Big Pot 1": [
      {
        name: "Fuchsia",
        id: "bigpot1-fuchsia",
        latin: "Fuchsia 'Mrs Popple'",
        photos: ["images/plants/big-pot-1.webp", "images/plants/big-pot-1-2.webp"],
        position: "Back centre — upright",
        light: "Partial shade to full sun.",
        water: "Keep compost moist. Water daily in hot weather.",
        care: "Hardy bush fuchsia. Cut back hard in spring. Feed fortnightly through summer.",
        seasonal: "Red and purple pendant flowers June–October; deciduous in winter; new growth from the base in spring.",
      },
      {
        name: "Verbena",
        id: "bigpot1-verbena",
        latin: "Verbena 'Showboat Light Pink'",
        photos: ["images/plants/big-pot-1.webp"],
        position: "Front-left — trailing clusters",
        light: "Full sun.",
        water: "Regular; don't let compost dry out.",
        care: "Deadhead to keep flowering. Tender annual — replace yearly.",
        seasonal: "Clusters of soft pink flowers June–October.",
      },
      {
        name: "Calibrachoa",
        id: "bigpot1-calibrachoa",
        latin: "Calibrachoa 'Cabaret Special Pink Star'",
        photos: ["images/plants/big-pot-1.webp"],
        position: "Front — trailing",
        light: "Full sun.",
        water: "Keep evenly moist. Hates drying out.",
        care: "Feed weekly with liquid tomato food. Tender annual.",
        seasonal: "Pink star-patterned flowers May–October. Continuous if fed.",
      },
      {
        name: "Nepeta",
        id: "bigpot1-nepeta",
        latin: "Nepeta (catmint)",
        photos: ["images/plants/big-pot-1.webp"],
        position: "Mid — aromatic foliage",
        light: "Full sun.",
        water: "Low to moderate. Drought-tolerant once established.",
        care: "Cut back after first flush for a repeat. Aromatic — cats love it.",
        seasonal: "Lavender-blue spikes June–September; grey-green aromatic foliage.",
      },
      {
        name: "Lobelia",
        id: "bigpot1-lobelia",
        latin: "Lobelia 'Waterfall Deep Blue Ice'",
        photos: ["images/plants/big-pot-1.webp"],
        position: "Edge — trailing cascade",
        light: "Partial shade to full sun.",
        water: "Keep moist at all times. Hates drying out.",
        care: "Trim back leggy growth mid-season. Tender annual.",
        seasonal: "Deep blue and white trailing flowers May–October.",
      },
      {
        name: "Petunia",
        id: "bigpot1-petunia",
        latin: "Petunia 'Midnight Sky'",
        photos: ["images/plants/big-pot-1.webp"],
        position: "Front-right — dark purple trumpet flowers",
        light: "Full sun.",
        water: "Regular; don't let compost dry out completely.",
        care: "Deadhead spent blooms. Feed weekly. Tender annual.",
        seasonal: "Dark purple-white trumpet flowers May–October.",
      },
    ],
    "Big Pot 2": [
      {
        name: "Lobelia",
        id: "bigpot2-lobelia",
        latin: "Lobelia 'Waterfall Deep Blue Ice'",
        photos: ["images/plants/big-pot-2.webp", "images/plants/big-pot-2-2.webp"],
        position: "Edge — trailing cascade",
        light: "Partial shade to full sun.",
        water: "Keep moist at all times. Hates drying out.",
        care: "Trim back leggy growth mid-season. Tender annual.",
        seasonal: "Deep blue and white trailing flowers May–October.",
      },
      {
        name: "Verbena",
        id: "bigpot2-verbena",
        latin: "Verbena 'Venturi Pink Bicolour'",
        photos: ["images/plants/big-pot-2.webp"],
        position: "Front — pink and white clusters",
        light: "Full sun.",
        water: "Regular; don't let compost dry out.",
        care: "Deadhead to keep flowering. Tender annual.",
        seasonal: "Pink bicolour flower clusters June–October.",
      },
      {
        name: "Petunia",
        id: "bigpot2-petunia",
        latin: "Petunia 'Sky Purple White Sky'",
        photos: ["images/plants/big-pot-2.webp"],
        position: "Front — purple and white trumpets",
        light: "Full sun.",
        water: "Regular; don't let compost dry out completely.",
        care: "Deadhead spent blooms. Feed weekly. Tender annual.",
        seasonal: "Purple-white striped trumpet flowers May–October.",
      },
      {
        name: "Nepeta",
        id: "bigpot2-nepeta",
        latin: "Nepeta (catmint)",
        photos: ["images/plants/big-pot-2.webp"],
        position: "Mid — aromatic foliage",
        light: "Full sun.",
        water: "Low to moderate. Drought-tolerant once established.",
        care: "Cut back after first flush for a repeat. Aromatic.",
        seasonal: "Lavender-blue spikes June–September; grey-green aromatic foliage.",
      },
      {
        name: "Fuchsia",
        id: "bigpot2-fuchsia",
        latin: "Fuchsia 'Mrs Popple'",
        photos: ["images/plants/big-pot-2.webp"],
        position: "Back centre — upright",
        light: "Partial shade to full sun.",
        water: "Keep compost moist. Water daily in hot weather.",
        care: "Hardy bush fuchsia. Cut back hard in spring. Feed fortnightly through summer.",
        seasonal: "Red and purple pendant flowers June–October; deciduous in winter.",
      },
    ],
    "Little Pot 1": [
      {
        name: "Geranium",
        id: "littlepot1-geranium",
        latin: "Pelargonium 'Trend Sophie Dark Red'",
        photos: ["images/plants/little-pot-1.webp"],
        position: "Back — upright dark red flowers",
        light: "Full sun.",
        water: "Moderate. Let compost dry slightly between waterings.",
        care: "Deadhead regularly. Feed fortnightly. Not frost-hardy — overwinter indoors or treat as annual.",
        seasonal: "Dark red flower heads May–October; scented rounded leaves.",
      },
      {
        name: "Petunia",
        id: "littlepot1-petunia",
        latin: "Petunia 'Vivini Blue Star'",
        photos: ["images/plants/little-pot-1.webp"],
        position: "Front — blue and white star pattern",
        light: "Full sun.",
        water: "Regular; don't let compost dry out completely.",
        care: "Deadhead spent blooms. Feed weekly. Tender annual.",
        seasonal: "Blue-white star-patterned flowers May–October.",
      },
    ],
    "Little Pot 2": [
      {
        name: "Coreopsis Gold",
        id: "wallpot2-coreopsis-gold",
        latin: "Coreopsis 'Gold'",
        photos: [
          "images/aug-2026/little-pot-2-coreopsis-1.jpeg",
          "images/aug-2026/little-pot-2-coreopsis-2.jpeg",
          "images/aug-2026/little-pot-2-coreopsis-3.jpeg",
        ],
        position: "Single golden-flowered mound filling Little Pot 2",
        light: "Full sun.",
        water: "Moderate; the small pot dries quickly, but avoid permanently wet compost.",
        care: "Deadhead regularly for continuous flowering. Cut tired growth back by up to half for a second flush and keep the pot freely drained through winter.",
        seasonal: "Bright golden-yellow daisy flowers June–September above a compact leafy mound.",
      },
    ],
    "Cercis Pot": [
      {
        name: "Cercis 'Carolina Sweetheart'",
        id: "cercispot-cercis-carolina-sweetheart",
        latin: "Cercis canadensis 'Nccc1'",
        photos: [
          "images/aug-2026/cercis-carolina-sweetheart-pot.jpeg",
          "images/aug-2026/cercis-carolina-sweetheart-label.jpeg",
          "images/aug-2026/cercis-carolina-sweetheart-foliage-1.jpeg",
          "images/aug-2026/cercis-carolina-sweetheart-foliage-2.jpeg",
        ],
        position: "Single standard-form specimen in a large pot",
        light: "Full sun in a warm position; shelter the pot from severe drying wind.",
        water: "Keep evenly moist while establishing. Water deeply when the upper compost starts to dry, without leaving the pot waterlogged.",
        care: "Avoid routine pruning; remove only dead, damaged or crossing growth. Refresh the compost surface in spring and plan for a larger root run as the tree matures.",
        seasonal: "Heart-shaped leaves open maroon-red and mature through green, cream and pink variegation; bare branches may carry pink-purple flowers in spring as the tree matures.",
      },
    ],
    "Front Pot": [
      {
        name: "Gazania 'Sunny Side Up'",
        id: "frontpot-gazania-sunny-side-up",
        latin: "Gazania rigens 'Sunny Side Up'",
        photos: ["images/june-2026-updates/gazania-sunny-side-up.webp"],
        position: "Left — large cream and white daisy flowers",
        light: "Full sun. Flowers close in shade and on overcast days.",
        water: "Low to moderate. Drought-tolerant. Sharp drainage.",
        care: "Deadhead spent flowers to encourage more. Tender annual — replace each year. Does not recover from frost.",
        seasonal: "Large cream-white daisy flowers with contrasting dark centres May–October; closes at night and on dull days.",
      },
      {
        name: "Gazania 'Orange Flame'",
        id: "frontpot-gazania-orange-flame",
        latin: "Gazania rigens 'Orange Flame'",
        photos: ["images/june-2026-updates/gazania-orange-flame.webp"],
        position: "Right — vivid orange daisy flowers",
        light: "Full sun. Flowers close in shade.",
        water: "Low to moderate. Drought-tolerant.",
        care: "Deadhead to extend flowering. Tender annual — replace each year. Not frost-hardy.",
        seasonal: "Vivid orange flame-patterned daisy flowers May–October; closes at night and on dull days.",
      },
      {
        name: "Calibrachoa",
        id: "frontpot-calibrachoa",
        latin: "Calibrachoa spp.",
        photos: ["images/june-2026-updates/calibrachoa-front-pot.webp"],
        position: "Trailing — around the pot edge",
        light: "Full sun.",
        water: "Keep evenly moist. Hates drying out.",
        care: "Feed weekly with liquid tomato food. Self-cleaning — no deadheading needed. Tender annual.",
        seasonal: "Masses of small petunia-like flowers May–October. Continuous if fed.",
      },
      {
        name: "Bacopa White",
        id: "frontpot-bacopa-white",
        latin: "Sutera cordata (white cultivar)",
        photos: ["images/june-2026-updates/bacopa-white.webp"],
        position: "Trailing — delicate white flowers at the edges",
        light: "Sun to partial shade.",
        water: "Keep evenly moist.",
        care: "Self-cleaning; no deadheading needed. Trim back if leggy. Tender annual.",
        seasonal: "Tiny white flowers May–October; neat trailing habit.",
      },
    ],
    "Wall Pot 1": [
      {
        name: "Candy House Mix",
        id: "wallpot1-candy-house-mix",
        latin: "Calibrachoa 'Candy House Mix'",
        photos: ["images/june-2026-update-2/candy-house-mix.webp"],
        position: "Left wall of steps — trailing mix of red, yellow and pink flowers",
        light: "Full sun.",
        water: "Regular; do not let dry out. Water at the base.",
        care: "Feed weekly with liquid tomato food. Deadhead spent flowers. Tender annual — replace each season. Trim back if leggy to encourage bushy growth.",
        seasonal: "Prolific trailing flowers in mixed red, yellow and pink June–October; dies with first frost.",
      },
    ],
    "Wall Pot 2": [
      {
        name: "Echinacea 'Mooodz Glory'",
        id: "wallpot2-echinacea-mooodz-glory",
        latin: "Echinacea 'Hilmooglor'",
        photos: [
          "images/aug-2026/echinacea-mooodz-glory-1.jpeg",
          "images/aug-2026/echinacea-mooodz-glory-2.jpeg",
        ],
        position: "Single compact specimen filling the former Coreopsis pot",
        light: "Full sun for strongest flowering; tolerates partial shade.",
        water: "Moderate. Water thoroughly, then let the upper compost begin to dry; never leave the crown in cold, wet compost.",
        care: "Deadhead fading flowers for further blooms, or retain selected cones for winter structure. Protect the pot from prolonged winter saturation.",
        seasonal: "White, slightly drooping petals around golden-green cones from summer into autumn; dies back to a hardy crown in winter.",
      },
    ],
    "Lobelia Pot": [
      {
        name: "Lobelia 'Starship Scarlet Bronze Leaf'",
        id: "lobeliapot-lobelia-starship-scarlet-bronze-leaf",
        latin: "Lobelia × speciosa 'Starship Scarlet Bronze Leaf'",
        photos: [
          "images/jul-2026/lobelia-starship-scarlet-pot.jpeg",
          "images/jul-2026/lobelia-starship-scarlet-close.jpeg",
        ],
        position: "Single specimen filling the pot",
        light: "Full sun to partial shade. Best flowering with at least half a day of sun.",
        water: "Keep evenly moist; do not allow the compost to dry out in summer.",
        care: "Deadhead spent spikes to encourage more flowers. Feed fortnightly while flowering. Hardy in the ground, but protect the pot from prolonged hard frost and winter waterlogging.",
        seasonal: "Bronze foliage from spring; tall scarlet flower spikes July–September; dies back in winter and returns from the crown.",
      },
    ],
    "Baskets": [
      {
        name: "Trailing Fuchsia",
        id: "baskets-trailing-fuchsia",
        latin: "Fuchsia (trailing cultivar)",
        position: "Main trailing plant",
        light: "Partial shade to full sun.",
        water: "Daily in hot weather; never let dry out completely.",
        care: "Feed weekly. Deadhead spent flowers. Not frost-hardy — replace each year.",
        seasonal: "Pendant bicolour flowers June–October.",
      },
      {
        name: "Bacopa",
        id: "baskets-bacopa",
        latin: "Sutera cordata",
        position: "Trailing filler",
        light: "Sun to partial shade.",
        water: "Keep evenly moist.",
        care: "Self-cleaning; no deadheading needed. Trim back if leggy. Tender annual.",
        seasonal: "Tiny white flowers May–October; neat trailing habit.",
      },
      {
        name: "Trailing Lobelia",
        id: "baskets-trailing-lobelia",
        latin: "Lobelia erinus (trailing)",
        position: "Trailing — blue cascade",
        light: "Sun to partial shade.",
        water: "Keep moist; hates drying out.",
        care: "Trim back mid-season if it gets straggly. Tender annual.",
        seasonal: "Blue trailing flowers May–October.",
      },
      {
        name: "Trailing Verbena",
        id: "baskets-trailing-verbena",
        latin: "Verbena (trailing cultivar)",
        position: "Trailing — mixed colours",
        light: "Full sun.",
        water: "Regular; don't let dry out.",
        care: "Deadhead to extend flowering. Tender annual.",
        seasonal: "Clusters of flowers June–October.",
      },
    ],

    // ── Front garden ──────────────────────────────────────────────
    "Front Bed 1": [
      {
        name: "Hydrangea",
        id: "frontBed1-hydrangea",
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
        id: "frontBed1-lavender",
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
        name: "Coprosma 'Inferno'",
        id: "frontBed2-coprosma-inferno",
        latin: "Coprosma 'Inferno'",
        photos: [
          "images/jul-2026/front-bed2-coprosma-inferno-1.webp",
          "images/jul-2026/front-bed2-coprosma-inferno-2.webp",
        ],
        position: "Back-left — upright red-edged foliage",
        light: "Full sun to partial shade; stronger light brings out the warm foliage colour.",
        water: "Moderate while establishing. Avoid waterlogged soil.",
        care: "Shelter from cold drying winds and protect in severe frost. Trim lightly in spring to keep a compact shape.",
        seasonal: "Glossy green, cream, orange and red foliage intensifies in cooler weather; evergreen in a sheltered spot.",
      },
      {
        name: "Coprosma 'Pina Colada'",
        id: "frontBed2-coprosma-pina-colada",
        latin: "Coprosma 'Pina Colada'",
        photos: [
          "images/jul-2026/front-bed2-coprosma-pina-colada-1.webp",
          "images/jul-2026/front-bed2-coprosma-pina-colada-2.webp",
        ],
        position: "Back-right — gold and orange foliage",
        light: "Full sun to partial shade; best colour in a bright, sheltered position.",
        water: "Moderate while establishing. Let the soil drain between waterings.",
        care: "Protect from severe frost and cold winds. Lightly trim any untidy growth in spring.",
        seasonal: "Golden foliage develops orange and bronze tones through autumn and winter; evergreen when sheltered.",
      },
      {
        name: "Coprosma 'City Knights'",
        id: "frontBed2-coprosma-city-knights",
        latin: "Coprosma 'City Knights'",
        photos: [
          "images/aug-2026/front-bed2-coprosma-city-knights-1.jpeg",
          "images/aug-2026/front-bed2-coprosma-city-knights-2.jpeg",
          "images/aug-2026/front-bed2-coprosma-city-knights-label.jpeg",
        ],
        position: "Back-right edge — glossy burgundy foliage with red flashes",
        light: "Full sun to partial shade; bright shelter gives the richest leaf colour.",
        water: "Moderate while establishing. Keep the root zone drained and do not allow prolonged drought in its first season.",
        care: "Protect from severe frost and cold drying winds. Remove only damaged tips in spring and avoid forcing soft late growth with autumn feed.",
        seasonal: "Glossy evergreen foliage holds deep burgundy, red and dark green tones, strengthening the bed's winter colour.",
      },
      {
        name: "Hebe 'Kiwi' (Horopito)",
        id: "frontBed2-hebe-kiwi-horopito",
        latin: "Hebe 'Kiwi'",
        photos: ["images/jul-2026/front-bed2-hebe-kiwi-horopito.webp"],
        position: "Front-left — compact purple-flowering shrub",
        light: "Full sun to partial shade in a sheltered position.",
        water: "Moderate while establishing; avoid waterlogged winter soil.",
        care: "Deadhead faded spikes and trim lightly after flowering. Avoid cutting back into old bare wood.",
        seasonal: "Purple flower spikes in summer above glossy green leaves with dark new growth; evergreen.",
      },
      {
        name: "Polemonium 'Golden Feathers'",
        id: "frontBed2-polemonium-golden-feathers",
        latin: "Polemonium 'Golden Feathers'",
        photos: [
          "images/jul-2026/front-bed-2-polemonium-golden-feathers-2.webp",
          "images/jul-2026/front-bed-2-polemonium-golden-feathers-3.webp",
        ],
        position: "Front-right — replacing Begonia Cocktail 'Gin' in July 2026",
        light: "Sun to partial shade; give afternoon shade in hot weather.",
        water: "Moderate. Keep evenly moist but not waterlogged while establishing.",
        care: "Deadhead after flowering and cut tired foliage back for fresh growth. Watch for powdery mildew in dry, crowded conditions.",
        seasonal: "Gold-edged ferny foliage from spring; lilac-mauve bell flowers in spring and early summer; herbaceous in winter.",
      },
    ],
    "Front Bed 3": [
      {
        name: "Climbing Rose 'Super Fairy'",
        id: "frontBed3-climbing-rose-white-pink",
        latin: "Rosa 'Helsufair'",
        photos: [
          "images/jul-2026/front-bed-3-super-fairy-1.jpeg",
          "images/jul-2026/front-bed-3-super-fairy-2.jpeg",
          "images/jul-2026/front-bed-3-super-fairy-label.jpeg",
          "images/jul-2026/front-bed-3-super-fairy-tag.jpeg",
        ],
        position: "On the wall by the Bedroom 3 window",
        light: "Sun to light partial shade.",
        water: "Deep water at the base in dry spells, especially while establishing.",
        care: "Vigorous climber to about 2.5m high and 1.5m wide. Tie long shoots into the wall support and fan laterals out. Prune in late winter and deadhead after flowering.",
        seasonal: "Clusters of small, light-pink double flowers from June into autumn; deciduous in winter.",
      },
      {
        name: "Variegated Dogwood",
        id: "bed2-variegated-dogwood",
        latin: "Cornus alba 'Elegantissima'",
        photos: [
          "images/jul-2026/july-update-front-bed-3-dogwood.webp",
          "images/jul-2026/july-update-front-bed-3-dogwood-2.webp",
          "images/jul-2026/july-update-front-bed-3-dogwood-3.webp",
        ],
        position: "Below the Bedroom 1 window — moved from Back Bed 2 in July 2026",
        light: "Sun or partial shade; the leaf colour and winter stems are strongest in good light.",
        water: "Moisture-loving. Water deeply while it re-establishes and during prolonged dry spells.",
        care: "Mulch after planting. Once settled, remove about a third of the oldest stems at the base in March to encourage vivid new winter stems.",
        seasonal: "Cream-edged leaves spring–autumn; brilliant red stems provide the main display in winter.",
      },
      {
        name: "Red Hot Poker",
        id: "bed1-red-hot-poker",
        latin: "Kniphofia",
        photos: [
          "images/jul-2026/july-update-front-bed3-red-hot-poker.webp",
          "images/june-2026/red-hot-poker.webp",
        ],
        position: "Front of the wall bed — moved from Back Bed 1 in July 2026",
        light: "Full sun for the strongest flowering.",
        water: "Moderate while re-establishing; drought-tolerant once rooted, but dislikes winter waterlogging.",
        care: "Keep the crown clear and well drained. Remove spent flower stems, tidy old foliage in spring and divide congested clumps every four or five years.",
        seasonal: "Bold orange-red poker spikes July–September above strappy, mostly evergreen foliage.",
      },
      {
        name: "Leucothoe 'Little Flames'",
        id: "frontBed3-leucothoe-little-flames",
        latin: "Leucothoe 'Little Flames'",
        photos: [
          "images/jul-2026/july-update-front-bed3-leucothoe-little-flame-1.webp",
          "images/jul-2026/july-update-front-bed3-leucothoe-little-flame-2.webp",
        ],
        position: "Below the wall trellis — compact evergreen added July 2026",
        light: "Full sun to partial shade; some shade helps the soil stay evenly moist.",
        water: "Keep moist but well drained, especially while establishing. Use rainwater where practical.",
        care: "Needs acidic soil. Mulch with leaf mould or composted bark and prune only to remove damaged growth or lightly reshape after flowering.",
        seasonal: "Evergreen leaves and stems flush vivid red when young, with clusters of small white urn-shaped flowers in spring.",
      },
      {
        name: "Rose (pink)",
        id: "frontBed3-rose-pink",
        latin: "Rosa — IDENTIFY", // IDENTIFY (IMG_4023)
        photos: ["images/jul-2026/pink-rose.webp"],
        position: "Between the Bedroom 1 window and the ensuite corner",
        light: "Sun.",
        water: "Deep watering, mulch in spring.",
        care: "Prune late winter; deadhead through summer.",
        seasonal: "Flowers June–Sept; bare winter.",
      },
    ],
    "Front Bed 4": [
      {
        name: "Photinia (existing canopy)",
        id: "frontBed4-photinia-existing",
        latin: "Photinia (cultivar to confirm)",
        position: "Established multi-stem canopy on the return-wall side",
        light: "Sun to partial shade.",
        water: "Water deeply only in prolonged dry periods once established.",
        care: "Lightly prune after the spring flush if shaping is needed. Keep the new underplanting mulched and watered while it establishes around the existing roots.",
        seasonal: "Evergreen canopy; fresh growth is often bronze-red and white flower clusters can appear in spring.",
      },
      {
        name: "The Pilgrim",
        id: "frontBed4-the-pilgrim",
        latin: "Rosa 'Auswalker'",
        photos: ["images/jul-2026/rose-the-pilgrim.jpeg"],
        position: "Against the wall, left side of the bed",
        light: "Full sun to light partial shade. Aim for at least four hours of direct sun.",
        water: "Deep water at the base during dry spells, especially while establishing.",
        care: "David Austin medium climber. Tie new canes into the support, fanning them horizontally where possible. Feed and mulch in spring; deadhead through summer; prune in late winter.",
        seasonal: "Soft yellow, rosette-shaped flowers with a tea fragrance from June into autumn; deciduous in winter.",
      },
      {
        name: "The Generous Gardener",
        id: "frontBed4-the-generous-gardener",
        latin: "Rosa 'Ausdrawn'",
        photos: ["images/jul-2026/rose-the-generous-gardener.jpeg"],
        position: "Against the wall, right side of the bed",
        light: "Full sun to light partial shade. Tolerates a little less sun than many climbing roses.",
        water: "Deep water at the base during dry spells, especially in its first two years.",
        care: "David Austin medium climber. Train and tie in long shoots, feed and mulch in spring, deadhead repeat flowers and prune in late winter. Good disease resistance.",
        seasonal: "Pale pink, cup-shaped flowers fading almost white, with a strong old-rose and musk fragrance; repeat flowers June–autumn.",
      },
      {
        name: "Physocarpus Cluster 1 (2 × Little Devil)",
        id: "frontBed4-physocarpus-cluster-1",
        latin: "Physocarpus opulifolius 'Little Devil'",
        photos: [
          "images/aug-2026-front-garden/front-bed4-physocarpus-cluster-1.jpeg",
          "images/aug-2026-front-garden/front-bed4-physocarpus-clusters-1-2.jpeg",
          "images/jul-2026/front-bed-4-little-devil-1.jpeg",
          "images/jul-2026/front-bed-4-little-devil-2.jpeg",
        ],
        position: "Cluster 1 — two retained Little Devils grouped together in August 2026",
        light: "Sun to partial shade; foliage is darkest with good light.",
        water: "Water both root balls deeply in dry spells for the first two growing seasons; then only during prolonged drought.",
        care: "Treat as two compact deciduous ninebarks. Keep each crown distinct and remove a few oldest stems at ground level only once established; avoid clipping the cluster into one solid ball.",
        seasonal: "Burgundy-purple foliage spring to autumn; pale pinkish-white flowers in early summer; bare in winter.",
      },
      {
        name: "Physocarpus Cluster 2 (2 × Lady in Red)",
        id: "frontBed4-physocarpus-cluster-2",
        latin: "Physocarpus opulifolius 'Lady in Red'",
        photos: [
          "images/aug-2026-front-garden/front-bed4-physocarpus-cluster-2.jpeg",
          "images/aug-2026-front-garden/front-bed4-physocarpus-clusters-1-2.jpeg",
        ],
        position: "Cluster 2 — two new Lady in Reds added August 2026",
        light: "Sun to partial shade; best foliage colour in brighter light.",
        water: "Water both root balls deeply in dry spells while establishing; afterwards they are fairly drought tolerant.",
        care: "Treat as two deciduous ninebarks. Keep their layered outlines distinct and remove a few oldest stems at the base in late winter only when congestion develops.",
        seasonal: "Fresh red foliage matures bronze-purple; pink flower clusters in summer; bare in winter.",
      },
      {
        name: "Physocarpus Cluster 3 (2 × Little Devil + 1 × Lady in Red)",
        id: "frontBed4-physocarpus-cluster-3",
        latin: "Physocarpus opulifolius 'Little Devil' & 'Lady in Red'",
        photos: [
          "images/aug-2026-front-garden/front-bed4-physocarpus-cluster-3-1.jpeg",
          "images/aug-2026-front-garden/front-bed4-physocarpus-cluster-3-2.jpeg",
        ],
        position: "Cluster 3 — two new Little Devils with one new Lady in Red, added August 2026",
        light: "Sun to partial shade; brighter light strengthens the burgundy and red-bronze foliage.",
        water: "Water all three root balls deeply in dry spells while establishing; afterwards the cluster is fairly drought tolerant.",
        care: "Keep the two lower Little Devils and taller Lady in Red readable as a layered trio. Renew individual shrubs from the base only when mature and congested; do not shear the cluster into one mass.",
        seasonal: "Burgundy and red-bronze foliage spring to autumn with pale pink flower clusters in early summer; bare in winter.",
      },
      {
        name: "Magic Carpet",
        id: "frontBed4-magic-carpet",
        latin: "Spiraea japonica 'Magic Carpet'",
        photos: ["images/jul-2026/front-bed-4-magic-carpet.jpeg"],
        position: "Bright open centre, above the stepping stones",
        light: "Sun to light partial shade; brighter light gives the strongest gold foliage.",
        water: "Water regularly during its first summer, then only in prolonged dry spells.",
        care: "Lightly trim after flowering or cut back by about a third in early spring to encourage colourful new growth.",
        seasonal: "Gold foliage with red young growth, deep-pink summer flowers and warm autumn colour; deciduous in winter.",
      },
      {
        name: "Purple Gem",
        id: "frontBed4-purple-gem",
        latin: "Sarcococca hookeriana var. humilis 'Purple Gem'",
        photos: [
          "images/aug-2026-front-garden/front-bed4-purple-gem-moved.jpeg",
          "images/jul-2026/front-bed-4-purple-gem.jpeg",
        ],
        position: "One of the former Lady in Red positions — moved within Front Bed 4 in August 2026",
        light: "Shade to partial shade.",
        water: "Water in dry spells while establishing; tolerates dry shade once settled.",
        care: "Evergreen winter-scented shrub. Keep ivy from engulfing it and prune only lightly after flowering if needed.",
        seasonal: "Glossy evergreen foliage and purple young stems; small fragrant winter flowers followed by dark berries.",
      },
      {
        name: "Rhododendron 'Libretto'",
        id: "frontBed4-rhododendron-libretto",
        latin: "Rhododendron 'Libretto'",
        photos: [
          "images/aug-2026-front-garden/front-bed4-rhododendron-libretto-1.jpeg",
          "images/aug-2026-front-garden/front-bed4-rhododendron-libretto-2.jpeg",
        ],
        position: "Shaded brick corner — added August 2026",
        light: "Light dappled shade, sheltered from cold drying wind and harsh early-morning sun.",
        water: "Keep the shallow root zone evenly moist but never waterlogged. Prefer rainwater, especially in hard-water areas.",
        care: "Plant shallowly in acidic, humus-rich soil. Mulch with composted bark while keeping the stem clear; deadhead carefully and prune only dead or wayward growth after flowering.",
        seasonal: "Evergreen foliage all year; large dark-purple flowers with an olive-yellow flare in late May and early June.",
      },
      {
        name: "Festuca 'Elijah Blue' (3 plants)",
        id: "frontBed4-festuca-elijah-blue",
        latin: "Festuca glauca 'Elijah Blue'",
        photos: ["images/jul-2026/front-bed-4-festuca.jpeg"],
        position: "Three blue-grey tufts along the front-left edge",
        light: "Full sun to light partial shade.",
        water: "Water regularly during the first season; drought tolerant once established.",
        care: "Comb out dead leaves in spring and divide congested clumps every few years. Do not routinely shear hard.",
        seasonal: "Blue-grey, mostly evergreen foliage for year-round texture; airy flower stems in early summer.",
      },
      {
        name: "Pieris 'Polar Passion'",
        id: "frontBed5-pieris-polar-passion",
        latin: "Pieris japonica 'Ppobas' (Polar Passion)",
        photos: [
          "images/aug-2026-small-changes/front-bed4-pieris-polar-passion-move-1.jpeg",
          "images/aug-2026-small-changes/front-bed4-pieris-polar-passion-move-2.jpeg",
          "images/aug-2026-small-changes/front-bed4-pieris-polar-passion-move-3.jpeg",
          "images/jul-2026/front-260725-bed-5-pieris-japonica-polar-passion-1.webp",
        ],
        position: "Moved from Front Bed 5 into the former Flaming Silver position in August 2026",
        light: "Partial shade, sheltered from cold winds and harsh early sun.",
        water: "Keep evenly moist in acidic, well-drained soil; use rainwater where practical.",
        care: "Mulch with ericaceous material and remove only spent flowers or damaged stems. Do not apply lime.",
        seasonal: "Colourful young foliage and hanging clusters of spring flowers above evergreen leaves.",
      },
      {
        name: "Dahlia 'Tampico'",
        id: "frontBed4-dahlia-tampico",
        latin: "Dahlia Dalina Maxi Tampico ('Datretten')",
        photos: [
          "images/aug-2026-small-changes/front-bed4-dahlia-tampico-1.jpeg",
          "images/aug-2026-small-changes/front-bed4-dahlia-tampico-2.jpeg",
        ],
        position: "Open front-right section — added August 2026",
        light: "Full sun, sheltered from strong wind.",
        water: "Water deeply whenever the upper soil begins to dry; do not leave the tuber in saturated ground.",
        care: "Deadhead to keep flowers coming and support stems if they begin to lean. Lift and store the tuber frost-free after the first frost, or protect it with a deep dry mulch in a mild winter.",
        seasonal: "Red-and-white decorative flowers from summer until frost; dormant tuber in winter.",
      },
      {
        name: "Verbena 'Margaret's Memory'",
        id: "frontBed4-verbena-margarets-memory",
        latin: "Glandularia 'Margaret's Memory'",
        photos: [
          "images/aug-2026-small-changes/front-bed4-verbena-margarets-memory-1.jpeg",
          "images/aug-2026-small-changes/front-bed4-verbena-margarets-memory-2.jpeg",
          "images/aug-2026-small-changes/front-bed4-verbena-margarets-memory-3.jpeg",
        ],
        position: "Sunny front edge beside Dahlia 'Tampico' — added August 2026",
        light: "Full sun to light partial shade.",
        water: "Keep moist but well drained while establishing; avoid waterlogged winter soil.",
        care: "Deadhead or cut back after a flower flush. Take late-summer tip cuttings as insurance where winter cold or wet is severe.",
        seasonal: "Lilac-pink flowers with dark eyes from spring into late autumn; semi-evergreen in a sheltered winter.",
      },
      {
        name: "Delosperma 'Ice Cream Mix'",
        id: "frontBed4-delosperma-ice-cream-mix",
        latin: "Delosperma cooperi Ice Cream Series",
        photos: [
          "images/jul-2026/july-update-front-bed-4-delosperma-ice-cream-mix.webp",
          "images/jul-2026/july-update-front-bed-4-delosperma-ice-cream-mix-2.webp",
        ],
        position: "Sunny open ground near the established canopy — added July 2026",
        light: "Full sun; flowers open best in bright, warm conditions.",
        water: "Drought-tolerant once established. Water sparingly and never leave the crown in wet winter soil.",
        care: "Sharp drainage is essential. Avoid rich feeding, trim away damaged growth in spring and protect from prolonged severe frost if the soil is wet.",
        seasonal: "A low evergreen succulent mat with mixed pink, orange and yellow daisy flowers from summer into autumn.",
      },
    ],
    "Front Bed 5": [
      {
        name: "Mexican Orange Blossom",
        id: "frontBed5-mexican-orange-blossom",
        latin: "Choisya ternata 'Sundance'", // CONFIRM
        photos: ["images/jul-2026/choisya.webp", "images/jul-2026/choisya-flowers.webp"],
        position: "Mid boundary bed — lime-yellow foliage",
        light: "Sun for best colour.",
        water: "Moderate.",
        care: "Light prune after flowering to shape. Low-care.",
        seasonal: "Golden evergreen foliage; scented white flowers spring & again autumn.",
      },
      {
        name: "Shrub Rose (cultivar to confirm)",
        id: "frontBed5-climber-unidentified",
        latin: "Rosa (Shrub Group; cultivar to confirm)",
        photos: [
          "images/jul-2026/climber.webp",
          "images/jul-2026/climber-berries.webp",
          "images/jul-2026/front-260725-bed-5-shrub-rose-1.webp",
          "images/jul-2026/front-260725-bed-5-shrub-rose-2.webp",
          "images/jul-2026/front-260725-bed-5-shrub-rose-3.webp",
        ],
        position: "Boundary end of the bed — established shrub rose",
        light: "Full sun for the strongest flowering; tolerates light partial shade.",
        water: "Water deeply in sustained dry spells, especially while flowering and forming hips.",
        care: "Remove dead, damaged and crossing stems in late winter. Thin congested growth and preserve sound hips where autumn colour and wildlife value are wanted.",
        seasonal: "Flowers are followed by red-orange rose hips — the fruits seen in the July photographs.",
      },
      {
        name: "Bay Tree",
        id: "frontBed5-bay-tree",
        latin: "Laurus nobilis",
        photos: ["images/jul-2026/front-260725-bed-5-bay-tree-1-1.webp"],
        position: "Established standard in the boundary bed",
        light: "Full sun to partial shade in a sheltered position.",
        water: "Water while establishing and during prolonged drought; avoid waterlogged winter soil.",
        care: "Trim lightly in late spring or summer to retain the standard shape. Remove suckers and frost-damaged tips with secateurs.",
        seasonal: "Aromatic evergreen leaves throughout the year; small spring flowers may be followed by dark berries on female plants.",
      },
      {
        name: "Japanese Skimmia",
        id: "frontBed5-japanese-skimmia",
        latin: "Skimmia japonica (cultivar and sex to confirm)",
        photos: [
          "images/jul-2026/front-260725-bed-5-japanese-skimmia-2-1.webp",
          "images/jul-2026/front-260725-bed-5-japanese-skimmia-2-2.webp",
        ],
        position: "Established evergreen shrub beneath the boundary planting",
        light: "Partial shade to shade; shelter from the hottest afternoon sun.",
        water: "Keep evenly moist but well drained, especially in dry summer weather.",
        care: "Mulch with leaf mould or ericaceous compost and prune only to remove damaged or awkward stems. Confirm sex and cultivar from flowers and fruit.",
        seasonal: "Evergreen foliage and spring flower clusters; female or hermaphrodite forms can carry red berries when pollinated.",
      },
      {
        name: "Hardy Fuchsia (cultivar to confirm)",
        id: "frontBed5-hardy-fuchsia",
        latin: "Fuchsia magellanica hybrid (cultivar to confirm)",
        photos: [
          "images/jul-2026/front-260725-bed-5-hardy-fuchsia-1-1.webp",
          "images/jul-2026/front-260725-bed-5-hardy-fuchsia-1-2.webp",
        ],
        position: "Established flowering shrub in the boundary bed",
        light: "Full sun to partial shade, sheltered from cold drying winds.",
        water: "Moist but well-drained soil; water in sustained dry spells while in flower.",
        care: "Leave the top growth through winter, mulch the crown, then cut frost-damaged stems back to live buds in spring.",
        seasonal: "Pendant flowers from summer into autumn; top growth may die back in hard winters and regrow from the base.",
      },
      {
        name: "Clematis (cultivar to confirm)",
        id: "frontBed5-clematis",
        latin: "Clematis viticella (cultivar to confirm)",
        photos: [
          "images/jul-2026/front-260725-bed-5-clematis-1.webp",
          "images/jul-2026/front-260725-bed-5-clematis-2.webp",
          "images/jul-2026/front-260725-bed-5-clematis-3.webp",
        ],
        position: "Twining through support at the boundary side",
        light: "Sun to partial shade, with a cool shaded root run.",
        water: "Keep moist but well drained; soak the root zone during prolonged drought.",
        care: "Treat as pruning group 3 while the viticella identity remains the best fit: cut to strong buds 30–45cm above ground in late winter and tie in new shoots.",
        seasonal: "Deciduous climber with abundant summer flowers on new growth.",
      },
      {
        name: "Hydrangea 'Bloody Marie'",
        id: "frontBed5-hydrangea-bloody-marie",
        latin: "Hydrangea paniculata 'Bloody Marie'",
        photos: [
          "images/aug-2026-small-changes/front-bed5-hydrangea-bloody-marie-1.jpeg",
          "images/aug-2026-small-changes/front-bed5-hydrangea-bloody-marie-2.jpeg",
          "images/aug-2026-small-changes/front-bed5-hydrangea-bloody-marie-3.jpeg",
        ],
        position: "Former Honeysuckle position at the open drive-side edge — added August 2026",
        light: "Full sun to partial shade; afternoon shelter helps preserve moisture.",
        water: "Keep the root zone consistently moist while establishing and through hot dry spells.",
        care: "Mulch in spring and prune in late winter or early spring before new growth, retaining a sound low framework. Panicle hydrangeas flower on the current season's shoots.",
        seasonal: "Large cream panicles age through pink toward red from July to September; deciduous in winter.",
      },
      {
        name: "Euphorbia 'Ascot Petite'",
        id: "frontBed5-euphorbia-ascot-petite",
        latin: "Euphorbia × martinii 'Ascot Petite'",
        photos: [
          "images/aug-2026-small-changes/front-bed5-euphorbia-ascot-petite-1.jpeg",
          "images/aug-2026-small-changes/front-bed5-euphorbia-ascot-petite-2.jpeg",
          "images/aug-2026-small-changes/front-bed5-euphorbia-hydrangea.jpeg",
        ],
        position: "Former Polar Passion position — added August 2026",
        light: "Full sun in a sheltered position.",
        water: "Water while establishing, then sparingly; sharp drainage is important in winter.",
        care: "Remove old flowering stems at the base with gloves once replacement shoots are clear. Avoid disturbing the crown in cold wet weather.",
        seasonal: "Compact evergreen mound with yellow-green spring and early-summer flowerheads.",
      },
      {
        name: "Flaming Silver",
        id: "frontBed4-flaming-silver",
        latin: "Pieris japonica 'Flaming Silver'",
        photos: [
          "images/aug-2026-small-changes/front-bed5-flaming-silver-move.jpeg",
          "images/jul-2026/front-bed-4-flaming-silver.jpeg",
        ],
        position: "Moved from Front Bed 4 into the sheltered middle of Front Bed 5 in August 2026",
        light: "Partial shade to sun, sheltered from harsh morning frost.",
        water: "Keep evenly moist, especially in dry spells; do not let the rootball dry out.",
        care: "Ericaceous shrub. Use rainwater where practical and mulch with ericaceous material; prune only lightly after flowering.",
        seasonal: "Evergreen, cream-edged leaves with red spring growth and cream flowers in spring.",
      },
      {
        name: "Astrantia trio",
        id: "frontBed4-astrantia-trio",
        latin: "Astrantia major 'Buckland', 'Claret' & 'Star of Love'",
        photos: [
          "images/aug-2026-small-changes/front-bed5-astrantia-move.jpeg",
          "images/jul-2026/front-bed-4-astrantia-selection.jpeg",
          "images/jul-2026/front-bed-4-astrantia-1.jpeg",
        ],
        position: "Three-plant group moved from Front Bed 4 to the wall-side pocket in Front Bed 5 in August 2026",
        light: "Sun to light shade.",
        water: "Keep consistently moist during dry weather, particularly while re-establishing.",
        care: "Mulch annually with organic matter. Deadhead to prolong flowering and cut back tired stems after flowering.",
        seasonal: "Pin-cushion flowers in blush, soft pink and claret shades through summer; foliage dies back in winter.",
      },
      {
        name: "Pittosporum 'Tom Thumb'",
        id: "frontBed5-pittosporum-tom-thumb",
        latin: "Pittosporum tenuifolium 'Tom Thumb'",
        photos: [
          "images/jul-2026/front-260725-bed-5-pittosporum-tenuifolium-tom-thumb-1.webp",
          "images/jul-2026/front-260725-bed-5-pittosporum-tenuifolium-tom-thumb-2.webp",
          "images/jul-2026/front-260725-bed-5-pittosporum-tenuifolium-tom-thumb-3.webp",
        ],
        position: "Compact dark-leaved evergreen in the July planting",
        light: "Full sun to partial shade in a sheltered position.",
        water: "Water while establishing; later only during prolonged drought. Avoid winter waterlogging.",
        care: "Usually needs little pruning. Remove frost-damaged tips in late spring and protect from cold drying wind.",
        seasonal: "Lime-green young leaves mature to deep purple, forming a dense rounded evergreen mound.",
      },
      {
        name: "Gaura 'Gaudi Red'",
        id: "frontBed5-gaura-gaudi-red",
        latin: "Oenothera lindheimeri 'Florgaured' (Gaudi Red)",
        photos: [
          "images/jul-2026/front-260725-bed-5-gaura-goudi-red-1.webp",
          "images/jul-2026/front-260725-bed-5-gaura-goudi-red-2.webp",
        ],
        position: "Sunny open pocket in the July planting",
        light: "Full sun in a warm, sheltered position.",
        water: "Water while establishing, then sparingly; sharp winter drainage is essential.",
        care: "Deadhead for a longer display. Leave stems over winter and cut back after the worst frosts in spring.",
        seasonal: "Deep pink-red flowers dance above burgundy-green foliage from summer into autumn.",
      },
      {
        name: "Heather 'Bell's Extra Special'",
        id: "frontBed5-heather-bells-extra-special",
        latin: "Erica carnea 'Bell's Extra Special'",
        photos: [
          "images/jul-2026/july-update-front-bed-5-heather-1-bell-s-extra-special.webp",
          "images/jul-2026/july-update-front-bed-5-heather-1-bell-s-extra-special-2.webp",
        ],
        position: "Front edge — golden winter heath added July 2026",
        light: "Full sun to light partial shade; stronger light keeps the foliage richly coloured.",
        water: "Water while establishing, then only in prolonged dry spells. Do not allow winter waterlogging.",
        care: "Grow in well-drained soil. Unlike Calluna, winter heath tolerates neutral to mildly alkaline conditions. Trim lightly after flowering without cutting into bare old wood.",
        seasonal: "Golden evergreen foliage provides year-round colour, with small heath flowers in winter and early spring.",
      },
      {
        name: "Heather 'Tib'",
        id: "frontBed5-heather-tib",
        latin: "Calluna vulgaris 'Tib'",
        photos: [
          "images/jul-2026/july-update-front-bed-5-heather-2-tib.webp",
          "images/jul-2026/july-update-front-bed-5-heather-2-tib-2.webp",
        ],
        position: "Front edge — pink-flowered heather added July 2026",
        light: "Full sun for compact growth and the best flower display.",
        water: "Water while establishing; afterwards it tolerates short dry spells but dislikes waterlogged soil.",
        care: "Needs acidic, well-drained soil. Clip the faded flower spikes lightly in early spring to keep the mound compact, never cutting into bare old wood.",
        seasonal: "Dark evergreen foliage carries double deep-pink flower spikes from July into early autumn.",
      },
      {
        name: "Bell Heather 'Providence' (2 plants)",
        id: "frontBed5-bell-heather-providence",
        latin: "Daboecia cantabrica 'Providence'",
        photos: [
          "images/jul-2026/july-update-front-bed-5-heather-2-providence-left.webp",
          "images/jul-2026/july-update-front-bed-5-heather-3-providence-left-2.webp",
          "images/jul-2026/july-update-front-bed-5-heather-3-providence-right.webp",
          "images/jul-2026/july-update-front-bed-5-heather-3-providence-right-2.webp",
        ],
        position: "Front edge — matching plants to the left and right of the central planting",
        light: "Full sun to partial shade in a position sheltered from cold drying winds.",
        water: "Keep evenly moist while establishing, using rainwater where practical; avoid both drought and waterlogging.",
        care: "Grow in acidic, humus-rich but freely drained soil. Lightly trim faded stems after flowering without cutting into old wood.",
        seasonal: "Evergreen mounds with comparatively large, deep rose-red bell flowers through summer and early autumn.",
      },
      {
        name: "Heather 'Leprechaun'",
        id: "frontBed5-heather-leprechaun",
        latin: "Calluna vulgaris 'Leprechaun'",
        photos: [
          "images/jul-2026/july-update-front-bed-5-heather-4-leprechaun.webp",
          "images/jul-2026/july-update-front-bed-5-heather-4-leprechaun-2.webp",
        ],
        position: "Front edge — low gold-and-pink heather added July 2026",
        light: "Full sun for the brightest foliage colour.",
        water: "Water while establishing; later, water only during prolonged dry spells and keep the roots well drained.",
        care: "Plant in acidic, freely drained soil. Clip faded flower spikes lightly in spring, avoiding cuts into bare old stems.",
        seasonal: "A low evergreen mound with bright lime-gold foliage, pink-tinted new growth and small late-summer flowers.",
      },
      {
        name: "Heather 'Winter Chocolate'",
        id: "frontBed5-heather-winter-chocolate",
        latin: "Calluna vulgaris 'Winter Chocolate'",
        photos: [
          "images/jul-2026/july-update-front-bed-5-heather-5-winter-chocolate.webp",
          "images/jul-2026/july-update-front-bed-5-heather-5-winter-chocolate-2.webp",
        ],
        position: "Front edge — colour-changing heather added July 2026",
        light: "Full sun to light partial shade; full sun produces the strongest foliage colour.",
        water: "Water while establishing; once rooted it tolerates short dry spells but must not sit wet.",
        care: "Grow in acidic, well-drained soil. Lightly remove old flower spikes in March to prevent the mound becoming woody and leggy.",
        seasonal: "Golden foliage with pink tips in summer turns bronze and chocolate-red in winter; lavender flowers appear August–October.",
      },
      {
        name: "Ceratostigma",
        id: "frontBed5-ceratostigma-plumbaginoides",
        latin: "Ceratostigma plumbaginoides",
        photos: [
          "images/jul-2026/july-update-front-bed-5-ceratostigma-plumbaginoides.webp",
          "images/jul-2026/july-update-front-bed-5-ceratostigma-plumbaginoides-2.webp",
          "images/jul-2026/july-update-front-bed-5-ceratostigma-plumbaginoides-3.webp",
        ],
        position: "Low front planting — blue-flowered groundcover added July 2026",
        light: "Full sun to partial shade; flowers and autumn colour are strongest in sun.",
        water: "Water while establishing, then only in prolonged drought. Prefers soil that drains freely.",
        care: "Allow room for the rhizomes to spread. Cut old top growth to the ground in spring once new shoots begin to show.",
        seasonal: "Clear cobalt-blue flowers appear from late summer into autumn as the foliage develops vivid red tints; dormant in winter.",
      },
      {
        name: "Hypericum (cultivar to confirm)",
        id: "frontBed5-hypericum-cultivar-to-confirm",
        latin: "Hypericum (cultivar to confirm)",
        photos: [
          "images/jul-2026/july-update-front-bed-5-hypericum.webp",
          "images/jul-2026/july-update-front-bed-5-hypericum-2.webp",
          "images/jul-2026/july-update-front-bed-5-hypericum-3.webp",
        ],
        position: "Mid-bed — compact St John's wort added July 2026",
        light: "Full sun to partial shade; more sun generally gives stronger flowering.",
        water: "Water while establishing, then during prolonged dry spells only. Avoid persistently waterlogged soil.",
        care: "Trim lightly in early spring and remove any weak or damaged stems. Confirm the cultivar from its label, flowers and berries before cultivar-specific pruning.",
        seasonal: "A compact shrub grown for golden flowers with prominent stamens and, depending on cultivar, colourful ornamental berries.",
      },
      {
        name: "Bluebell Creeper",
        id: "frontBed5-bluebell-creeper-sollya",
        latin: "Billardiera heterophylla (syn. Sollya heterophylla)",
        photos: [
          "images/jul-2026/july-update-front-bed-5-sollya.webp",
          "images/jul-2026/july-update-front-bed-5-sollya-2.webp",
        ],
        position: "Against the warm brick wall — blue-flowered climber added July 2026",
        light: "Full sun to partial shade in a warm, sheltered position.",
        water: "Keep evenly moist while establishing, then water during dry spells; avoid waterlogged winter soil.",
        care: "Tie new shoots into support and trim after flowering to control the twining growth. Protect the root area and young stems during hard frost.",
        seasonal: "A slender evergreen climber with nodding blue bell flowers from summer into autumn, followed by narrow berries when pollinated.",
      },
      {
        name: "Hebe 'Rhubarb and Custard'",
        id: "frontBed5-hebe-rhubarb-and-custard",
        latin: "Veronica 'Tull 302' (Rhubarb and Custard)",
        photos: [
          "images/jul-2026/july-update-front-bed-5-rhubarb-and-custard-hebe.webp",
          "images/jul-2026/july-update-front-bed-5-rhubarb-and-custard-hebe-2.webp",
        ],
        position: "Mid-bed — variegated evergreen shrub added July 2026",
        light: "Full sun to partial shade in a warm, sheltered spot.",
        water: "Moderate while establishing; drought-tolerant later, but avoid winter waterlogging.",
        care: "Lightly trim after flowering to keep its rounded shape and protect from severe frost or cold drying winds.",
        seasonal: "Cream-edged grey-green leaves flush pink and rhubarb-red in cold weather; short purple flower spikes appear in mid- to late summer.",
      },
      {
        name: "Salvia 'Salgoon Lake Blueberry'",
        id: "frontBed5-salvia-salgoon-lake-blueberry",
        latin: "Salvia 'Tl1016' (Salgoon Lake Blueberry)",
        photos: [
          "images/jul-2026/july-update-front-bed-5-salvia-salgoon-lake-blueberry.webp",
          "images/jul-2026/july-update-front-bed-5-salvia-salgoon-lake-blueberry-2.webp",
        ],
        position: "Against the brick wall — upright blue salvia added July 2026",
        light: "Full sun in a warm, sheltered position.",
        water: "Water regularly while establishing; once rooted it has good heat and drought tolerance, provided drainage is sharp.",
        care: "Deadhead to prolong flowering. Leave top growth over winter, mulch the crown and cut back after the worst frosts in spring; take cuttings as insurance in colder winters.",
        seasonal: "Compact upright growth to around 60cm with rich blueberry-purple flowers and near-black calyces from summer into autumn.",
      },
      {
        name: "Little Devil",
        id: "frontBed5-little-devil",
        latin: "Physocarpus opulifolius 'Little Devil'",
        photos: ["images/aug-2026-front-garden/front-bed5-little-devil.jpeg"],
        position: "Spare compact ninebark added August 2026",
        light: "Sun to partial shade; foliage is darkest with good light.",
        water: "Water deeply in dry spells for the first two growing seasons; then only during prolonged drought.",
        care: "Compact deciduous ninebark. Remove a few of the oldest stems at ground level in late winter once established; avoid clipping into a tight ball.",
        seasonal: "Burgundy-purple foliage spring to autumn; pale pinkish-white flowers in early summer; bare in winter.",
      },
    ],
    "Front Stone Trough": [
      {
        name: "Hosta",
        id: "frontStone-hosta",
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
        name: "Wall Cotoneaster (species to confirm)",
        id: "frontBoxHedge-wall-cotoneaster-species-to-confirm",
        latin: "Cotoneaster (species to confirm)",
        photos: ["images/jul-2026/wallbed-start.webp", "images/jul-2026/cotoneaster.webp"],
        position: "Arching screen against the house return wall",
        light: "Sun to part shade.",
        water: "Water while establishing; once settled, water only in prolonged dry spells.",
        care: "Train or lightly prune after flowering to keep growth clear of paths and masonry. Do not use box-blight or box-caterpillar treatments. Confirm the species from flowers, berries and leaf undersides.",
        seasonal: "Small leaves on herringbone stems; flowers in late spring or summer followed by red berries. Evergreen or semi-evergreen depending on species and winter.",
      },
    ],
    "Front Hedge": [
      {
        name: "Hedge (to identify)",
        id: "frontHedge-hedge-to-identify",
        latin: "IDENTIFY",
        photos: [], // TODO — no photo yet, next photo walk
        position: "Right of the front door, in front of the skinny brick wall",
        light: "TBC.",
        water: "TBC.",
        care: "TBC once identified.",
        seasonal: "TBC.",
      },
    ],
    "Front Pots": [
      {
        name: "Mixed Pot",
        id: "frontPots-mixed-pot",
        latin: "Mixed seasonal planting — contents to confirm",
        photos: ["images/aug-2026-front-garden/front-pots.jpeg"],
        position: "P1 · left-hand pot against the boundary wall",
        light: "Bright outdoor position; confirm the needs of each constituent plant when identified.",
        water: "Check the compost frequently in warm or windy weather; supplied by an adjustable sprinkler.",
        care: "Deadhead finished flowers, keep the drainage holes clear and record the individual plants and cultivars as labels or clearer photographs become available.",
        seasonal: "A mixed seasonal container providing varied flower colour; exact contents remain unresolved.",
      },
      {
        name: "Fuchsia Pot",
        id: "frontPots-fuchsia-pot",
        latin: "Fuchsia cultivars — identities to confirm",
        photos: ["images/aug-2026-front-garden/front-pots.jpeg"],
        position: "P2 · right-hand pot against the boundary wall",
        light: "Bright light or partial shade, protected from the harshest reflected afternoon heat.",
        water: "Keep the compost evenly moist but freely drained; supplied by an adjustable sprinkler.",
        care: "Deadhead for continued flowering, check the sprinkler reaches the compost rather than only the foliage, and confirm whether the plants are hardy before winter.",
        seasonal: "Pendant Fuchsia flowers through summer and autumn; exact cultivars and winter hardiness remain unresolved.",
      },
    ],
    "Front Fruit Trees": [
      {
        name: "Apple Tree",
        id: "frontApple-apple-tree",
        latin: "Malus domestica",
        photos: [
          "images/jul-2026/front-260725-fruit-trees-apple-tree-1.webp",
          "images/jul-2026/front-260725-fruit-trees-apple-tree-2.webp",
          "images/jul-2026/front-260725-fruit-trees-apple-tree-3.webp",
          "images/jul-2026/front-260725-fruit-trees-apple-tree-4.webp",
          "images/jul-2026/front-260725-fruit-trees-apple-tree-5.webp",
        ],
        position: "Bottom of the drive, by the boundary wall",
        light: "Full sun.",
        water: "Water well in dry spells while fruiting.",
        care: "Winter prune for shape and airflow; thin fruit in June if heavy.",
        seasonal: "Blossom April–May; fruit late summer–autumn.",
      },
      {
        name: "Damson Tree",
        id: "frontApple-damson-tree",
        latin: "Prunus domestica subsp. insititia (cultivar to confirm)",
        photos: [
          "images/jul-2026/front-260725-fruit-trees-damson-tree-1.webp",
          "images/jul-2026/front-260725-fruit-trees-damson-tree-2.webp",
          "images/jul-2026/front-260725-fruit-trees-damson-tree-3.webp",
          "images/jul-2026/front-260725-fruit-trees-damson-tree-4.webp",
        ],
        position: "Beside the apple tree at the bottom of the drive",
        light: "Full sun for reliable blossom and fruit ripening.",
        water: "Water deeply during prolonged dry spells, especially from fruit set to harvest.",
        care: "Prune only in dry summer weather to reduce silver-leaf and canker risk; remove suckers from below the graft.",
        seasonal: "White spring blossom followed by blue-black damsons in late summer or early autumn.",
      },
    ],
    "Front Gate Tree": [
      {
        name: "Weeping Crab Apple (cultivar to confirm)",
        id: "frontGateTree-weeping-crab-apple",
        latin: "Malus (weeping cultivar; 'Red Jade' is a best-fit possibility)",
        photos: [
          "images/jul-2026/front-260725-gateway-tree.webp",
          "images/jul-2026/front-260725-gateway-tree-2.webp",
          "images/jul-2026/front-260725-gateway-tree-fruit-1.webp",
          "images/jul-2026/front-260725-gateway-tree-fruit-2.webp",
          "images/jul-2026/front-260725-gateway-tree-habit-3.webp",
        ],
        position: "Beside the gateway, at the location marked on the July plan",
        light: "Full sun for the best blossom, fruit colour and balanced growth.",
        water: "Water deeply during prolonged drought, particularly while establishing and while fruit is swelling.",
        care: "Remove dead, damaged and crossing wood in winter, preserving the natural weeping framework. Record blossom and ripe-fruit details before naming the cultivar.",
        seasonal: "Spring blossom followed by small ornamental crab apples that can persist into autumn and winter.",
      },
    ],
    "House · Hallway · Kentia Palm": [
      {
        name: "Kentia Palm — assumed",
        id: "house-hallway-kentia-palm",
        latin: "Howea forsteriana",
        photos: [
          "images/house-plants/jul-2026/kentia-palm-hallway-hero.webp",
          "images/house-plants/jul-2026/kentia-palm-hallway-context.webp",
          "images/house-plants/jul-2026/kentia-palm-hallway-detail.webp",
          "images/house-plants/jul-2026/kentia-palm-hallway-condition.webp",
        ],
        position: "Ground-floor hallway, beside the main staircase",
        light: "Bright indirect light; protect the fronds from strong direct sun.",
        water: "Check the upper few centimetres of compost before watering, then drain fully and empty the white cachepot.",
        care: "Maintain moderate humidity, keep away from cold draughts and radiators, and feed monthly during active spring and summer growth.",
        seasonal: "Evergreen indoor foliage throughout the year; growth slows as light levels fall in winter.",
      },
    ],
  };

  // Bed 2's former sideways-T footprint is now two separate beds. The plant
  // records remain authored together above, then are divided here by their
  // physical side of the split so care cards and maps stay in sync.
  const BED3_PLANT_IDS = new Set([
    "bed2-kerria",
    "bed2-centaurea-snowy-owl",
    "bed2-spiraea-double-play-big-bang",
  ]);
  PLANTS["Bed 3"] = PLANTS["Bed 2"].filter((plant) => BED3_PLANT_IDS.has(plant.id));
  PLANTS["Bed 2"] = PLANTS["Bed 2"].filter((plant) => !BED3_PLANT_IDS.has(plant.id) && plant.id !== "bed2-forget-me-not");

  // August 2026 brought a second major reshuffle. Stable plant IDs are kept
  // through each move so journal links, profiles and earlier photographs still
  // resolve to the same physical specimen.
  const takePlant = (plantKey, plantId) => {
    const index = PLANTS[plantKey].findIndex((plant) => plant.id === plantId);
    if (index < 0) throw new Error(`Cannot move missing plant ${plantId} from ${plantKey}`);
    return PLANTS[plantKey].splice(index, 1)[0];
  };

  PLANTS["Bed 1"] = PLANTS["Bed 1"].filter((plant) => !["bed1-angel-wings", "bed1-wintercreeper"].includes(plant.id));
  PLANTS["Bed 2"] = PLANTS["Bed 2"].filter((plant) => !["bed2-angel-wings", "stone-hebe"].includes(plant.id));

  const aromaNemesia = takePlant("Bed 1", "bed1-nemesia");
  Object.assign(aromaNemesia, {
    group: "Big pot",
    position: "Bed 5 big pot — moved from Bed 1 in August 2026",
    photos: [
      "images/aug-2026-big-changes/bed5-big-pot-nemesia-aroma-1.webp",
      "images/aug-2026-big-changes/bed5-big-pot-nemesia-aroma-2.webp",
      "images/jul-2026/july-update-bed1-nemesia-aroma-heart-of-gold-1.webp",
    ],
  });
  aromaNemesia.profile.badges = ["Sweetly scented", "Summer–autumn flowers", "Moved August 2026"];
  aromaNemesia.profile.oakLodge = {
    location: "Mixed big pot within Flower Bed 5",
    added: "Added to Bed 1 in July 2026; moved to the Bed 5 big pot in August 2026",
    role: "Low fragrant colour among the taller Alstroemeria and trailing plants",
    observation: "The burgundy, cream and yellow flowers now sit beside the existing white ‘Wisley Vanilla’ Nemesia.",
    status: "First season in a shared container; keep its crown open and monitor competition for moisture.",
  };
  PLANTS["Bed 5"].push(aromaNemesia);

  const achilleaSummerBerries = takePlant("Bed 4", "bed4-achillea");
  Object.assign(achilleaSummerBerries, {
    position: "Sunny front section — moved from Back Bed 4 in August 2026",
    photos: [
      "images/aug-2026-front-garden/front-bed4-achillea-planted.jpeg",
      "images/june-2026-updates/achillea.webp",
    ],
  });
  PLANTS["Front Bed 4"].push(achilleaSummerBerries);

  const starshipLobelia = takePlant("Lobelia Pot", "lobeliapot-lobelia-starship-scarlet-bronze-leaf");
  Object.assign(starshipLobelia, {
    position: "Former Achillea position — planted out in August 2026",
    photos: [
      "images/aug-2026-big-changes/bed4-lobelia-starship-1.webp",
      "images/aug-2026-big-changes/bed4-lobelia-starship-2.webp",
      "images/jul-2026/lobelia-starship-scarlet-close.jpeg",
    ],
    care: "Keep evenly moist while it establishes. Deadhead spent spikes; mulch the crown for winter and avoid stagnant soil.",
  });
  PLANTS["Bed 4"].push(starshipLobelia);
  delete PLANTS["Lobelia Pot"];
  PLANTS["Bed 4"] = PLANTS["Bed 4"].filter((plant) => plant.id !== "bed4-celosia");

  const cabbageTree = takePlant("Stone Bed", "stone-cabbage-tree");
  cabbageTree.position = "Lower centre of Bed 5 — architectural burgundy fountain";
  PLANTS["Bed 5"].push(cabbageTree);

  PLANTS["Stone Bed"].push({
    name: "Agapanthus",
    id: "stone-agapanthus",
    latin: "Agapanthus (species and cultivar unknown)",
    photos: [],
    position: "Position 9 — Stone Bed; photographs still needed",
    light: "Full sun for reliable flowering.",
    water: "Low once established; water during establishment and prolonged late-summer drought.",
    care: "Grow in moisture-retentive but well-drained soil. Deadhead or retain seedheads deliberately and protect the crown in severe winter weather until hardiness is known.",
    seasonal: "Strap-shaped foliage with rounded blue, purple or white flowerheads expected from midsummer; exact form still to be photographed.",
  });

  PLANTS["Bed 1"].push(
    {
      name: "Abelia 'Kaleidoscope'",
      id: "bed1-abelia-kaleidoscope",
      latin: "Abelia × grandiflora 'Kaleidoscope'",
      photos: [
        "images/aug-2026-big-changes/bed1-abelia-kaleidoscope-1.webp",
        "images/aug-2026-big-changes/bed1-abelia-kaleidoscope-2.webp",
        "images/aug-2026-big-changes/bed1-abelia-kaleidoscope-3.webp",
      ],
      position: "Front edge — second Oak Lodge specimen, added August 2026",
      light: "Full sun to partial shade; the foliage colours best with good light.",
      water: "Moderate while establishing; avoid waterlogged soil.",
      care: "Lightly trim after flowering only if needed. Shelter from cold drying wind and mulch over moist soil.",
      seasonal: "Yellow-and-green foliage warms to orange-red; fragrant white flowers continue into autumn.",
    },
    {
      name: "Pieris 'Forest Flame'",
      id: "bed1-pieris-forest-flame",
      latin: "Pieris 'Forest Flame'",
      photos: [
        "images/aug-2026-big-changes/bed1-pieris-forest-flame-1.webp",
        "images/aug-2026-big-changes/bed1-pieris-forest-flame-2.webp",
        "images/aug-2026-big-changes/bed1-pieris-forest-flame-3.webp",
      ],
      position: "Front-right inside the box edge — added August 2026",
      light: "Partial shade or sheltered sun; protect new growth from early frost and harsh morning sun.",
      water: "Keep evenly moist but well drained; use rainwater where practical.",
      care: "Grow in acidic, humus-rich soil. Mulch with leaf mould or composted bark and prune only damaged growth.",
      seasonal: "Evergreen foliage opens vivid red, softens through pink and cream, then matures green; cream spring flowers.",
    },
  );

  PLANTS["Bed 3"].push({
    name: "Sedum 'Rose Carpet'",
    id: "bed2-sedum-rose-carpet",
    latin: "Sedum pluricaule 'Rose Carpet'",
    photos: [
      "images/aug-2026-big-changes/bed2-sedum-rose-carpet-planted.webp",
      "images/aug-2026-big-changes/bed2-sedum-rose-carpet-label.webp",
    ],
    position: "Position 1 — lower edge of Bed 3",
    light: "Full sun to partial shade.",
    water: "Low once established; allow the soil surface to dry and avoid winter saturation.",
    care: "Keep in sharply drained neutral to alkaline soil. Cut back after flowering and divide in spring if needed.",
    seasonal: "Grey-green succulent leaves and dense rose-pink flower clusters in late summer; dormant in winter.",
  });

  const weepingCherry = takePlant("Bed 2", "bed2-weeping-cherry");
  weepingCherry.position = "Position 10 — established weeping canopy in Bed 3";
  PLANTS["Bed 3"].push(weepingCherry);

  PLANTS["Bed 2"].push(
    {
      name: "Rose (inherited)",
      id: "bed2-rose-inherited",
      latin: "Rosa (cultivar unknown)",
      position: "Position 8 — established by the previous owners",
      light: "Best in full sun; tolerates light partial shade.",
      water: "Water deeply during sustained dry spells, checking the soil first.",
      care: "Mulch and feed in spring. Deadhead if it repeats and delay class-specific pruning until its growth habit is documented.",
      seasonal: "Summer flowers; repeat pattern and hip production still to be recorded.",
    },
    {
      name: "Butterfly Bush",
      id: "bed2-butterfly-bush",
      latin: "Buddleja (species unknown)",
      position: "Position 10 — established shrub",
      light: "Full sun for the strongest flowering.",
      water: "Low to moderate once established; water deeply during prolonged drought.",
      care: "Deadhead after flowering. Confirm the species before choosing a hard- or light-pruning regime.",
      seasonal: "Fragrant summer flower panicles attract butterflies and other pollinators.",
    },
  );

  PLANTS["Bed 3"].push({
    name: "Rose (inherited)",
    id: "bed3-rose-inherited",
    latin: "Rosa (cultivar unknown)",
    position: "Position 8 — established by the previous owners",
    light: "Best in full sun; tolerates light partial shade.",
    water: "Water deeply during sustained dry spells, checking the soil first.",
    care: "Mulch and feed in spring. Deadhead if it repeats and delay class-specific pruning until its growth habit is documented.",
    seasonal: "Summer flowers; repeat pattern and hip production still to be recorded.",
  });

  PLANTS["Nemesia Pot"] = [{
    name: "Nemesia 'Lady Penelope'",
    id: "lobeliapot-nemesia-lady-penelope",
    latin: "Nemesia 'Lady Penelope' (best-fit identification)",
    photos: [
      "images/aug-2026-big-changes/nemesia-lady-penelope-1.webp",
      "images/aug-2026-big-changes/nemesia-lady-penelope-2.webp",
    ],
    position: "Single specimen in the former Lobelia Pot — moved from Bed 1 in August 2026",
    light: "Full sun to light partial shade in a sheltered position.",
    water: "Keep the container evenly moist but never waterlogged.",
    care: "Trim tired flowering stems by about a third for another flush. Feed lightly while flowering and protect from frost.",
    seasonal: "Fragrant rose-pink and white flowers with pink markings and a yellow eye from late spring into autumn.",
  }];

  PLANTS["Bed 2/3 Wall Pot"] = [
    {
      name: "Viburnum 'Lisarose'",
      id: "bed23wallpot-viburnum-lisarose",
      latin: "Viburnum tinus 'Lisarose'",
      photos: [
        "images/aug-2026-big-changes/bed23-wallpot-viburnum-lisarose-1.webp",
        "images/aug-2026-big-changes/bed23-wallpot-viburnum-lisarose-2.webp",
        "images/aug-2026-big-changes/bed23-wallpot-viburnum-lisarose-3.webp",
      ],
      position: "Upright evergreen centrepiece — added August 2026",
      light: "Sun, partial shade or shade, sheltered from cold drying winds.",
      water: "Keep evenly moist while establishing; never leave the container waterlogged.",
      care: "Use humus-rich, well-drained compost. Prune only after flowering if its size needs controlling.",
      seasonal: "Brick-red winter buds open to pink-and-white flowers, followed by dark blue ornamental berries.",
    },
    {
      name: "Vinca minor 'Illumination'",
      id: "bed23wallpot-vinca-minor-illumination",
      latin: "Vinca minor 'Illumination'",
      photos: [
        "images/aug-2026-big-changes/bed23-wallpot-vinca-illumination-1.webp",
        "images/aug-2026-big-changes/bed23-wallpot-vinca-illumination-2.webp",
        "images/aug-2026-big-changes/bed23-wallpot-vinca-illumination-3.webp",
      ],
      position: "Trailing over the dividing wall — additional plant added August 2026",
      light: "Sun to shade; foliage colours best in bright indirect light or partial shade.",
      water: "Moderate. Let the surface dry slightly without allowing the pot to dry completely.",
      care: "Trim trailing stems to shape and keep drainage holes clear. Do not plant into open ground without a spread plan.",
      seasonal: "Golden evergreen foliage with narrow green margins and violet-blue flowers from spring into autumn.",
    },
  ];

  PLANTS["Viburnum Pot"] = [{
    name: "Viburnum tinus Spirit",
    id: "viburnumpot-viburnum-tinus-spirit",
    latin: "Viburnum tinus 'Anvi' (Spirit)",
    photos: [
      "images/aug-2026-big-changes/viburnum-pot-spirit-1.webp",
      "images/aug-2026-big-changes/viburnum-pot-spirit-2.webp",
      "images/aug-2026-big-changes/viburnum-pot-spirit-3.webp",
      "images/aug-2026-big-changes/viburnum-pot-spirit-4.webp",
      "images/aug-2026-big-changes/viburnum-pot-spirit-label.webp",
    ],
    position: "Single evergreen specimen — added August 2026",
    light: "Sun or partial shade, with shelter from cold drying winds.",
    water: "Keep evenly moist but well drained while establishing; check the pot through dry and windy weather.",
    care: "Prune only after flowering if needed. Refresh the top compost in spring and protect the container during prolonged severe cold.",
    seasonal: "Pink buds open to lightly fragrant creamy-white flowers from late winter into spring, followed by blue-black ornamental berries.",
  }];

  // ─── PLANT PROFILES ───────────────────────────────────────────────
  // Every specimen gets an RHS-style introduction and a consistent set of
  // at-a-glance characteristics. Existing care prose remains the detailed
  // source; these helpers turn it into compact, comparable card metadata and
  // provide safe fallbacks for future plants as soon as they are registered.
  const PROFILE_OVERRIDES = {
    "Japanese Maple 'Bloodgood'": { habit: "Small deciduous tree", size: "2.5–4m high and wide", wildlife: "Shelter for insects and birds" },
    "Japanese Aralia": { habit: "Evergreen architectural shrub", size: "1.5–2.5m high and wide", hardiness: "H5 · hardy in most UK gardens" },
    "Rhododendron": { habit: "Evergreen flowering shrub", size: "1–1.5m high and wide", hardiness: "H5 · hardy in most UK gardens", wildlife: "Early nectar for pollinators" },
    "Hosta 'Patriot'": { habit: "Clump-forming herbaceous perennial", size: "Up to 55cm high · 50–100cm spread", wildlife: "Flowers visited by bees" },
    "Hosta (gold)": { habit: "Clump-forming herbaceous perennial", size: "45–60cm high · 90cm spread", wildlife: "Flowers visited by bees" },
    "Angel Wings": { habit: "Evergreen foliage perennial", size: "40–50cm high and wide", hardiness: "H3 · protect below −5°C" },
    "Box Hedging": { habit: "Dense evergreen shrub", size: "Kept clipped at Oak Lodge", wildlife: "Year-round shelter for small wildlife" },
    "Dahlia 'Double Dreamy Lilac'": { habit: "Compact tuberous perennial", size: "About 40–50cm high and wide", hardiness: "H3 · tubers need winter protection" },
    "Dahlia 'Double Dreamy Gold'": { habit: "Compact tuberous perennial", size: "About 40–50cm high and wide", hardiness: "H3 · tubers need winter protection" },
    "Little Heath": { habit: "Compact evergreen shrub", size: "50–100cm high and wide", hardiness: "H5 · hardy in most UK gardens", wildlife: "Spring flowers support pollinators" },
    "Variegated Dogwood": { habit: "Suckering deciduous shrub", size: "2–3m high and wide", hardiness: "H6 · fully hardy", wildlife: "Flowers and fruit support wildlife" },
    "Peony": { habit: "Clump-forming herbaceous perennial", size: "75–100cm high and wide", hardiness: "H6 · fully hardy", wildlife: "Flowers visited by pollinators" },
    "Weeping Cherry": { habit: "Small weeping deciduous tree", size: "2.5–4m high and wide", wildlife: "Spring blossom for pollinators" },
    "Red Hot Poker": { habit: "Clump-forming evergreen perennial", size: "90–150cm high · 60–90cm spread", hardiness: "H5 · hardy with good drainage", wildlife: "Nectar-rich flowers for bees" },
    "Apple Tree": { habit: "Deciduous fruit tree", size: "Rootstock dependent", wildlife: "Blossom, fruit and shelter for wildlife" },
    "Pear Tree": { habit: "Deciduous fruit tree", size: "Rootstock dependent", wildlife: "Blossom, fruit and shelter for wildlife" },
    "Callistemon Inferno ('Yanferno')": { habit: "Compact evergreen shrub", size: "1–1.5m high and wide", hardiness: "H3 · protect below −5°C", wildlife: "Nectar-rich flowers for pollinators" },
    "Wisteria": { habit: "Vigorous deciduous climber", size: "8–12m when trained", wildlife: "Flowers visited by bees" },
    "Rose": { habit: "Deciduous flowering shrub or climber", size: "Cultivar and training dependent", wildlife: "Flowers and hips can support wildlife" },
    "Houseleeks": { habit: "Mat-forming evergreen succulent", size: "5–15cm high · spreading", hardiness: "H5 · hardy with sharp drainage", wildlife: "Flowers visited by bees" },
    "Echeveria": { habit: "Rosette-forming tender succulent", size: "10–30cm high · 15–30cm wide", hardiness: "H2 · lift before frost", wildlife: "Flowers may be visited by pollinators" },
    "Cabbage Tree": { habit: "Evergreen architectural tree", size: "2.5–4m high · 1–2m spread", hardiness: "H3/H4 · protect in severe cold" },
    "Honeysuckle": { habit: "Twining deciduous climber", size: "4–8m when trained", wildlife: "Nectar, berries and nesting cover" },
    "Clematis": { habit: "Vigorous deciduous climber", size: "8–12m when trained", wildlife: "Early flowers and nesting cover" },
    "Lavender": { habit: "Compact evergreen aromatic shrub", size: "45–75cm high and wide", hardiness: "H5 · hardy with sharp drainage", wildlife: "Excellent nectar for bees" },
    "Nemesia": { habit: "Compact seasonal flowering plant", size: "20–40cm high and wide", hardiness: "Tender · protect from frost", wildlife: "Flowers visited by pollinators" },
    "Nemesia 'Aroma Heart of Gold'": { habit: "Compact bushy half-hardy perennial", size: "20–35cm high and wide", hardiness: "H3 · protect below −5°C", wildlife: "Fragrant flowers visited by pollinators" },
    "Lobelia 'Starship Scarlet Bronze Leaf'": { habit: "Upright herbaceous perennial", size: "60–90cm high · 30–45cm spread", hardiness: "H4 · protect a container in hard frost", wildlife: "Nectar-rich spikes for pollinators" },
    "Climbing Rose 'Super Fairy'": { habit: "Repeat-flowering climbing rose", size: "About 2.5m high · 1.5m spread", wildlife: "Flowers visited by pollinators" },
    "Leucothoe 'Little Flames'": { habit: "Compact evergreen shrub", size: "Up to 50cm high and wide", hardiness: "H7 · exceptionally hardy", wildlife: "Spring flowers for pollinators" },
    "The Pilgrim": { habit: "Repeat-flowering climbing rose", size: "3–3.75m when trained", wildlife: "Flowers visited by pollinators" },
    "The Generous Gardener": { habit: "Repeat-flowering climbing rose", size: "3–4.5m when trained", wildlife: "Flowers visited by pollinators" },
    "Purple Gem": { habit: "Low evergreen suckering shrub", size: "45–60cm high · 1m spread", wildlife: "Winter scent and berries for wildlife" },
    "Flaming Silver": { habit: "Compact evergreen shrub", size: "1–1.5m high and wide", hardiness: "H5 · hardy in most UK gardens", wildlife: "Spring flowers support pollinators" },
    "Festuca 'Elijah Blue' (3 plants)": { habit: "Tuft-forming evergreen grass", size: "20–30cm high and wide", wildlife: "Seed and shelter for small wildlife" },
    "Astrantia trio": { habit: "Clump-forming herbaceous perennials", size: "50–75cm high · 45–60cm spread", wildlife: "Excellent flowers for pollinators" },
    "Dahlia 'Tampico'": { habit: "Tuberous tender perennial", size: "Typically 40–60cm high and wide", hardiness: "Tender · protect tubers from frost", wildlife: "Flowers visited by pollinators" },
    "Verbena 'Margaret's Memory'": { habit: "Bushy spreading semi-evergreen perennial", size: "10–50cm high and wide", hardiness: "H4 · hardy through most UK winters", wildlife: "Long-season nectar for pollinators" },
    "Hydrangea 'Bloody Marie'": { habit: "Compact deciduous flowering shrub", size: "About 1.2–1.5m high · around 0.8–1m spread", hardiness: "H5 · hardy in most UK gardens", wildlife: "Flower panicles visited by pollinators" },
    "Euphorbia 'Ascot Petite'": { habit: "Compact evergreen perennial", size: "About 30–40cm high and wide", hardiness: "Hardy in most UK gardens with sharp drainage", wildlife: "Spring flowers visited by pollinators" },
    "Delosperma 'Ice Cream Mix'": { habit: "Mat-forming evergreen succulent", size: "About 10cm high · 30–50cm spread", hardiness: "H4 · hardy with sharp drainage", wildlife: "Daisy flowers visited by pollinators" },
    "Heather 'Bell's Extra Special'": { habit: "Low evergreen winter heath", size: "15–25cm high · 30–45cm spread", hardiness: "H6 · fully hardy", wildlife: "Winter nectar for pollinators" },
    "Heather 'Tib'": { habit: "Compact evergreen heather", size: "30–45cm high and wide", hardiness: "H7 · exceptionally hardy", wildlife: "Late nectar for pollinators" },
    "Bell Heather 'Providence' (2 plants)": { habit: "Low evergreen bell heather", size: "30–45cm high and wide", hardiness: "H5 · hardy in most UK gardens", wildlife: "Long-lasting nectar for pollinators" },
    "Heather 'Leprechaun'": { habit: "Low evergreen heather", size: "20–40cm high and wide", hardiness: "H6 · fully hardy", wildlife: "Late nectar for pollinators" },
    "Heather 'Winter Chocolate'": { habit: "Mat-forming evergreen heather", size: "20–40cm high · 30–50cm spread", hardiness: "H7 · exceptionally hardy", wildlife: "RHS Plants for Pollinators" },
    "Ceratostigma": { habit: "Spreading herbaceous groundcover", size: "30–45cm high · spreading", hardiness: "H5 · hardy in most UK gardens", wildlife: "Late flowers visited by pollinators" },
    "Bluebell Creeper": { habit: "Slender evergreen twining climber", size: "1.5–2.5m when trained", hardiness: "H3 · protect below −5°C", wildlife: "Flowers visited by pollinators" },
    "Hebe 'Rhubarb and Custard'": { habit: "Rounded evergreen shrub", size: "About 60cm high and wide", hardiness: "H3 · protect below −5°C", wildlife: "Summer flowers for pollinators" },
    "Salvia 'Salgoon Lake Blueberry'": { habit: "Compact upright perennial", size: "40–60cm high · about 45cm spread", hardiness: "H3 · protect below −5°C", wildlife: "Excellent nectar for bees and butterflies" },
    "Kentia Palm — assumed": { habit: "Evergreen indoor palm", size: "1.5–3m indoors", hardiness: "H1A · keep above 15°C", foliage: "Evergreen arching fronds", wildlife: "Indoor foliage specimen" },
  };

  const firstSentence = (text, fallback) => {
    if (!text || /^TBC\.?$/i.test(text.trim())) return fallback;
    const match = text.trim().match(/^.*?(?:\.(?=\s|$)|;|$)/);
    return (match ? match[0] : text).replace(/[.;]+$/, "");
  };

  const inferHabit = (plant) => {
    const text = `${plant.name} ${plant.latin || ""}`;
    if (/(Maple|Tree|Cherry|Pyrus|Malus|Cordyline)/i.test(text)) return "Ornamental tree";
    if (/(Wisteria|Clematis|Honeysuckle|Climber|Sollya|Billardiera|climbing rose|Hydrangea anomala)/i.test(text)) return "Climbing plant";
    if (/(Begonia|Petunia|Calibrachoa|Verbena|Lobelia|Celosia|Nemesia|Gazania|Bacopa|Pelargonium|Fuchsia)/i.test(text)) return "Seasonal flowering plant";
    if (/(Echeveria|Sedum|Sempervivum|Delosperma|Stonecrop|Houseleek)/i.test(text)) return "Succulent groundcover";
    if (/(Hebe|Heather|Calluna|Erica|Daboecia|Rose|Rhododendron|Hydrangea|Pieris|Spiraea|Euonymus|Box|Buxus|Dogwood|Cornus|Weigela|Abelia|Photinia|Laurel|Choisya|Hypericum|Coprosma|Sarcococca|Silverbush|Kerria|Physocarpus|Leucothoe|Cotoneaster|Hedge)/i.test(text)) return "Garden shrub";
    if (/(Festuca|Phormium|Flax)/i.test(text)) return "Architectural foliage plant";
    return "Herbaceous perennial";
  };

  const inferHardiness = (plant) => {
    const text = `${plant.name} ${plant.latin || ""} ${plant.care || ""} ${plant.seasonal || ""}`;
    if (/(IDENTIFY|to identify)/i.test(text)) return "To be confirmed";
    if (/(tender annual|not frost-hardy|dies with the first|first hard frost|replace each year|tender seasonal)/i.test(text)) return "Tender · protect from frost";
    if (/(Coprosma|Callistemon|Angel Wings|Sollya|Billardiera|Salgoon|Rhubarb and Custard)/i.test(text)) return "H3 · protect below −5°C";
    if (/(Calluna|Erica carnea|Daboecia|Dogwood|Cornus|Hosta|Peony|Hydrangea|Apple|Pear|Wisteria|Clematis|Lythrum)/i.test(text)) return "Fully hardy in the UK";
    return "Hardy in most UK gardens";
  };

  const inferSize = (plant, habit) => {
    const text = `${plant.name} ${plant.latin || ""}`;
    if (/(IDENTIFY|to identify)/i.test(text)) return "To be confirmed";
    if (/Climbing plant/i.test(habit)) return "2–8m when trained";
    if (/tree/i.test(habit)) return "Cultivar or rootstock dependent";
    if (/Seasonal flowering plant/i.test(habit)) return "Typically 15–60cm";
    if (/Succulent groundcover/i.test(habit)) return "Typically 5–30cm · spreading";
    if (/Garden shrub/i.test(habit)) return "Typically 0.5–2m";
    return "Typically 30–100cm";
  };

  const inferFoliage = (plant) => {
    const text = `${plant.seasonal || ""} ${plant.care || ""}`;
    if (/semi-evergreen/i.test(text)) return "Semi-evergreen";
    if (/evergreen/i.test(text)) return "Evergreen";
    if (/(bare in winter|dies back|dies with|dormant in winter|foliage to ground)/i.test(text)) return "Deciduous or dormant in winter";
    return "Seasonal foliage";
  };

  const inferWildlife = (plant) => {
    const text = `${plant.name} ${plant.latin || ""} ${plant.seasonal || ""}`;
    if (/(Apple|Pear|Cherry|berry|berries|Honeysuckle|Cotoneaster)/i.test(text)) return "Flowers, fruit or shelter for wildlife";
    if (/(flower|bloom|spike|raceme|daisy|blossom)/i.test(text)) return "Flowers visited by pollinators";
    return "Foliage provides garden habitat";
  };

  Object.values(PLANTS).flat().forEach((plant) => {
    const override = PROFILE_OVERRIDES[plant.name] || {};
    const habit = override.habit || inferHabit(plant);
    const seasonalDisplay = firstSentence(plant.seasonal, "Seasonal interest is still being recorded");
    const article = /^[aeiou]/i.test(habit) ? "an" : "a";
    plant.description = plant.description || `${plant.name} is ${article} ${habit.toLowerCase()} grown at Oak Lodge for its distinctive garden character. ${seasonalDisplay}.`;
    plant.characteristics = {
      sunlight: firstSentence(plant.light, "Position to be confirmed"),
      hardiness: override.hardiness || inferHardiness(plant),
      flowering: seasonalDisplay,
      water: firstSentence(plant.water, "Water needs to be confirmed"),
      habit,
      size: override.size || inferSize(plant, habit),
      foliage: override.foliage || inferFoliage(plant),
      wildlife: override.wildlife || inferWildlife(plant),
    };
  });

  // ─── PHOTOS (by month) ────────────────────────────────────────────
  const PHOTOS_BY_MONTH = {
    "may-2026": {
      label: "May 2026",
      bed1: [
        { src: "images/may-2026/bed1.jpg",        caption: "Overview from paving" },
        { src: "images/may-2026/bed1-close1.jpg",  caption: "Japanese Maple area" },
        { src: "images/may-2026/bed1-close2.jpg",  caption: "Front planting" },
        { src: "images/may-2026/bed1-3.webp",      caption: "From above" },
        { src: "images/may-2026/bed1-4.webp",      caption: "From upper terrace" },
        { src: "images/may-2026/bed1-wide.webp",   caption: "Wide shot from street" },
        { src: "images/may-2026/bed1-wide-2.webp", caption: "From gate, angle 2" },
        { src: "images/may-2026/bed1-maple.webp",  caption: "Japanese Maple from street" },
        { src: "images/may-2026/bed1-close3.webp", caption: "Box edging detail" },
        { src: "images/may-2026/bed1-7.webp",      caption: "Box hedging close" },
        { src: "images/plants/dahlia-1.webp",       caption: "Dahlia — dark-leaved, newly planted" },
        { src: "images/plants/dahlia-2.webp",       caption: "Dahlia — close-up of foliage" },
        { src: "images/plants/dahlia-3.webp",       caption: "Dahlia — from above" },
      ],
      bed2: [
        { src: "images/may-2026/bed2-1.jpg",       caption: "Overview, angle 1" },
        { src: "images/may-2026/bed2-2.jpg",       caption: "Overview, angle 2" },
        { src: "images/may-2026/bed2-kitchen.jpg", caption: "From the patio kitchen" },
        { src: "images/may-2026/bed2-steps.jpg",   caption: "From the steps" },
        { src: "images/may-2026/bed2-south1.jpg",  caption: "South angle 1" },
        { src: "images/may-2026/bed2-south2.jpg",  caption: "South angle 2" },
        { src: "images/may-2026/bed2-wide.webp",   caption: "Wide overview" },
        { src: "images/may-2026/bed2-3.webp",      caption: "From lower paving" },
        { src: "images/may-2026/bed2-4.webp",      caption: "Steps side" },
        { src: "images/may-2026/bed2-5.webp",      caption: "Lower angle" },
        { src: "images/may-2026/bed2-6.webp",      caption: "From patio" },
      ],
      bed3: [
        { src: "images/may-2026/bed2-kitchen.jpg", caption: "Horizontal border from the patio kitchen" },
        { src: "images/may-2026/bed2-steps.jpg",   caption: "Horizontal border from the steps" },
        { src: "images/may-2026/bed2-south1.jpg",  caption: "Wall-gap border, south angle" },
        { src: "images/may-2026/bed2-south2.jpg",  caption: "Wall-gap border, second south angle" },
      ],
      bed4: [
        { src: "images/may-2026/bed3.jpg",         caption: "Apple tree & avens" },
        { src: "images/may-2026/bed3-detail.jpg",  caption: "From lower paving" },
        { src: "images/may-2026/bed3-3.webp",      caption: "Apple tree & bird feeders" },
      ],
      bed5: [
        { src: "images/may-2026/bed4.jpg",         caption: "Wisteria overview" },
        { src: "images/may-2026/bed4-wide.jpg",    caption: "Wider angle" },
        { src: "images/may-2026/bed4-3.webp",      caption: "Wisteria in full flower" },
      ],
      stone: [
        { src: "images/may-2026/stone-bed.jpg",         caption: "Overview" },
        { src: "images/may-2026/stone-bed-wide.jpg",    caption: "From the patio" },
        { src: "images/may-2026/stone-bed-detail1.jpg", caption: "Phormium & houseleeks" },
        { src: "images/may-2026/stone-bed-detail2.jpg", caption: "Cordyline Red Star" },
        { src: "images/may-2026/stone-bed-5.webp",      caption: "Stone bed & decking" },
        { src: "images/may-2026/stone-bed-6.webp",      caption: "From above" },
        { src: "images/may-2026/stone-bed-wide-2.webp", caption: "Wide, from patio" },
        { src: "images/may-2026/stone-bed-7.webp",      caption: "With Cordyline" },
      ],
      patio: [
        { src: "images/may-2026/patio.jpg",            caption: "Decking" },
        { src: "images/may-2026/patio-door.jpg",       caption: "Towards the house" },
        { src: "images/may-2026/patio-clematis.jpg",   caption: "Clematis montana" },
        { src: "images/may-2026/patio-2.webp",         caption: "Circular paving" },
        { src: "images/may-2026/patio-3.webp",         caption: "Decking full length" },
      ],
      steps: [
        { src: "images/may-2026/steps.jpg",        caption: "Steps between levels" },
        { src: "images/may-2026/steps-2.webp",     caption: "Steps from front" },
        { src: "images/may-2026/steps-wide.webp",  caption: "Wide view from above" },
        { src: "images/may-2026/steps-3.webp",     caption: "Upper terrace looking down" },
      ],
      kitchen: [],
      lounge: [
        { src: "images/may-2026/lounge.webp", caption: "Side passage" },
      ],
      pear: [
        { src: "images/may-2026/pear-2.webp", caption: "Upper garden overview" },
      ],
      bigpot1: [
        { src: "images/plants/big-pot-1.webp",   caption: "Big Pot 1 — overview" },
        { src: "images/plants/big-pot-1-2.webp", caption: "Big Pot 1 — from above" },
      ],
      bigpot2: [
        { src: "images/plants/big-pot-2.webp",   caption: "Big Pot 2 — overview" },
        { src: "images/plants/big-pot-2-2.webp", caption: "Big Pot 2 — from above" },
      ],
      littlepot1: [
        { src: "images/plants/little-pot-1.webp", caption: "Little Pot 1 — geranium & petunia" },
      ],
      littlepot2: [
        { src: "images/plants/little-pot-2.webp", caption: "Little Pot 2 — geranium & petunia" },
      ],
      baskets: [],
    },
    "june-2026": {
      label: "June 2026",
      bed1: [
        { src: "images/june-2026/japanese-maple.webp",  caption: "Japanese Maple 'Bloodgood' — full summer canopy (best-fit identification)" },
        { src: "images/june-2026/hosta-bed1-1.webp",    caption: "Hosta 'Patriot' — Bed 1" },
        { src: "images/june-2026/hosta-bed1-2.webp",    caption: "Hosta 'Patriot' — close-up" },
        { src: "images/june-2026/hosta-bed2.webp",      caption: "Hosta (gold) — moved from Bed 2" },
        { src: "images/june-2026/red-hot-poker.webp",   caption: "Red Hot Poker — moved from Bed 2" },
        { src: "images/june-2026/dahlia-context.webp",  caption: "Dahlia Double Dreamy Lilac — in context (best fit)" },
        { src: "images/june-2026/dahlia.webp",          caption: "Dahlia Double Dreamy Lilac — flower and dark foliage (best fit)" },
        { src: "images/june-2026/angel-wings.webp",     caption: "Angel Wings" },
        { src: "images/june-2026/euonymus.webp",        caption: "Euonymus 'Emerald 'n' Gold'" },
        { src: "images/june-2026/fatsia.webp",          caption: "Fatsia japonica" },
        { src: "images/june-2026-updates/avens-bed1.webp",             caption: "Avens in Bed 1 — before the July move to Bed 2" },
        { src: "images/june-2026-updates/dahlia-black-yellow-1.webp",   caption: "Dahlia Double Dreamy Gold — dark foliage, newly planted (best fit)" },
        { src: "images/june-2026-updates/dahlia-black-yellow-2.webp",   caption: "Dahlia Double Dreamy Gold — close-up (best fit)" },
        { src: "images/june-2026-update-2/little-heath-1.webp",         caption: "Little Heath — border planting" },
        { src: "images/june-2026-update-2/little-heath-2.webp",         caption: "Little Heath — close-up" },
        { src: "images/june-2026-update-2/little-heath-3.webp",         caption: "Little Heath — foliage" },
        { src: "images/june-2026-update-2/little-heath-4.webp",         caption: "Little Heath — group" },
        { src: "images/june-2026-update-2/little-heath-5.webp",         caption: "Little Heath — in bed" },
      ],
      bed2: [
        { src: "images/june-2026/centaurea-snowy-owl-1.webp", caption: "Centaurea 'Snowy Owl'" },
        { src: "images/june-2026/centaurea-snowy-owl-2.webp", caption: "Centaurea — close-up" },
        { src: "images/june-2026/silverbush.webp",            caption: "Silverbush" },
        { src: "images/june-2026/maiden-pink.webp",           caption: "Maiden Pink" },
        { src: "images/june-2026/variegated-dogwood.webp",    caption: "Variegated Dogwood" },
        { src: "images/june-2026/hydrangea-petiolaris.webp",  caption: "Hydrangea petiolaris — newly identified" },
        { src: "images/june-2026/peony.webp",                 caption: "Peony" },
        { src: "images/june-2026/weigela.webp",               caption: "Weigela" },
        { src: "images/june-2026/weeping-cherry-june-1.webp", caption: "Weeping Cherry — full summer canopy" },
        { src: "images/june-2026/weeping-cherry-june-2.webp", caption: "Weeping Cherry — wide shot" },
        { src: "images/june-2026/forget-me-not.webp",             caption: "Forget-me-not" },
        { src: "images/june-2026/euonymus-emerald-gaiety.webp",  caption: "Euonymus 'Emerald Gaiety' — newly moved from Bed 3" },
        { src: "images/june-2026-update-2/spiraea-big-bang-1.webp", caption: "Spiraea 'Double Play Big Bang'" },
        { src: "images/june-2026-update-2/spiraea-big-bang-2.webp", caption: "Spiraea — against the wall" },
        { src: "images/june-2026-update-2/spiraea-big-bang-3.webp", caption: "Spiraea — close-up" },
        { src: "images/june-2026-update-2/spiraea-big-bang-4.webp", caption: "Spiraea — flowers" },
        { src: "images/june-2026-update-2/spiraea-big-bang-5.webp", caption: "Spiraea — wide" },
      ],
      bed3: [
        { src: "images/june-2026/centaurea-snowy-owl-1.webp", caption: "Centaurea 'Snowy Owl'" },
        { src: "images/june-2026/centaurea-snowy-owl-2.webp", caption: "Centaurea — close-up" },
        { src: "images/june-2026/forget-me-not.webp",         caption: "Forget-me-not" },
        { src: "images/june-2026-update-2/spiraea-big-bang-1.webp", caption: "Spiraea 'Double Play Big Bang'" },
        { src: "images/june-2026-update-2/spiraea-big-bang-4.webp", caption: "Spiraea — flowers" },
      ],
      bed4: [
        { src: "images/june-2026-updates/bed3-after-wide-1.webp",      caption: "Bed 4 — after replanting (formerly Bed 3)" },
        { src: "images/june-2026-updates/bed3-after-wide-2.webp",      caption: "Bed 4 — wide shot (formerly Bed 3)" },
        { src: "images/june-2026-updates/callistemon-inferno-1.webp",  caption: "Callistemon 'Inferno'" },
        { src: "images/june-2026-updates/callistemon-inferno-2.webp",  caption: "Callistemon 'Inferno' — close-up" },
        { src: "images/june-2026-updates/achillea.webp",               caption: "Achillea" },
        { src: "images/june-2026-updates/gaillardia.webp",             caption: "Gaillardia" },
        { src: "images/june-2026-updates/abelia-kaleidoscope.webp",    caption: "Abelia 'Kaleidoscope'" },
        { src: "images/june-2026/apple-tree.webp",                     caption: "Apple Tree — June" },
        { src: "images/june-2026-update-2/celosia.webp",               caption: "Celosia — mixed colours" },
      ],
      bed4Archive: [
        { src: "images/june-2026/avens-1.webp",    caption: "Avens — orange flowers" },
        { src: "images/june-2026/avens-2.webp",    caption: "Avens — close-up" },
        { src: "images/june-2026/avens-3.webp",    caption: "Avens — cluster" },
        { src: "images/june-2026/avens-4.webp",    caption: "Avens — wide shot" },
        { src: "images/may-2026/bed3.jpg",         caption: "Bed 4 (then Bed 3) — May 2026 overview" },
        { src: "images/may-2026/bed3-detail.jpg",  caption: "Bed 4 (then Bed 3) — May 2026 detail" },
        { src: "images/may-2026/bed3-3.webp",      caption: "Bed 4 (then Bed 3) — May 2026, apple tree" },
      ],
      bed5: [
        { src: "images/june-2026/wisteria.webp", caption: "Wisteria" },
        { src: "images/june-2026/rose.webp",     caption: "Rose" },
        { src: "images/june-2026/lavender.webp", caption: "Lavender" },
        { src: "images/june-2026/yucca.webp",    caption: "Yucca" },
      ],
      stone: [
        { src: "images/june-2026/cordyline-1.webp",   caption: "Cordyline" },
        { src: "images/june-2026/cordyline-2.webp",   caption: "Cordyline — mid-shot" },
        { src: "images/june-2026/cordyline-3.webp",   caption: "Cordyline — close-up" },
        { src: "images/june-2026/houseleeks-1.webp",  caption: "Houseleeks" },
        { src: "images/june-2026/houseleeks-2.webp",  caption: "Houseleeks — rosettes" },
        { src: "images/june-2026/stonecrop-1.webp",   caption: "Stonecrop" },
        { src: "images/june-2026/stonecrop-2.webp",   caption: "Stonecrop — mid-shot" },
        { src: "images/june-2026/stonecrop-3.webp",   caption: "Stonecrop — close-up" },
        { src: "images/june-2026/phormium-dark.webp", caption: "Dark Phormium" },
        { src: "images/june-2026/rosemary.webp",      caption: "Rosemary" },
      ],
      patio: [
        { src: "images/june-2026/honeysuckle-1.webp", caption: "Honeysuckle" },
        { src: "images/june-2026/honeysuckle-2.webp", caption: "Honeysuckle — flowers" },
        { src: "images/june-2026/clematis.webp",      caption: "Clematis montana" },
      ],
      steps: [],
      kitchen: [],
      lounge: [],
      pear: [
        { src: "images/june-2026/pear-tree.webp", caption: "Pear Tree — June" },
      ],
      bigpot1: [
        { src: "images/june-2026/big-pot-1-wide.webp", caption: "Big Pot 1 — wide" },
        { src: "images/june-2026/big-pot-1.webp",      caption: "Big Pot 1" },
      ],
      bigpot2: [
        { src: "images/june-2026/big-pot-2-wide.webp", caption: "Big Pot 2 — wide" },
        { src: "images/june-2026/big-pot-2.webp",      caption: "Big Pot 2" },
      ],
      littlepot1: [
        { src: "images/june-2026/little-pot-1-wide.webp", caption: "Little Pot 1 — wide" },
        { src: "images/june-2026/little-pot-1.webp",      caption: "Little Pot 1" },
      ],
      littlepot2: [
        { src: "images/june-2026/little-pot-2.webp", caption: "Little Pot 2" },
      ],
      baskets: [
        { src: "images/june-2026/hanging-basket-1.webp", caption: "Hanging Basket — front of house" },
        { src: "images/june-2026/hanging-basket-2.webp", caption: "Hanging Basket — close-up" },
      ],
      frontpot: [
        { src: "images/june-2026-updates/front-pot-overview.webp",     caption: "Front door pot — overview" },
        { src: "images/june-2026-updates/gazania-sunny-side-up.webp",  caption: "Gazania 'Sunny Side Up'" },
        { src: "images/june-2026-updates/gazania-orange-flame.webp",   caption: "Gazania 'Orange Flame'" },
        { src: "images/june-2026-updates/calibrachoa-front-pot.webp",  caption: "Calibrachoa — trailing" },
        { src: "images/june-2026-updates/bacopa-white.webp",           caption: "Bacopa White" },
      ],
      wallpot1: [
        { src: "images/june-2026-update-2/candy-house-mix.webp", caption: "Candy House Mix — stair wall pot" },
      ],
      wallpot2: [
        { src: "images/june-2026-update-2/coreopsis-gold-1.webp", caption: "Coreopsis Gold — in blue pot" },
        { src: "images/june-2026-update-2/coreopsis-gold-2.webp", caption: "Coreopsis Gold — top down" },
      ],
    },
    "jul-2026": {
      label: "July 2026",
      bed1: [
        { src: "images/jul-2026/july-update-back-bed-1-before-changes.webp", caption: "Back Bed 1 before the July additions" },
        { src: "images/jul-2026/july-update-back-bed-1-before-changes-2.webp", caption: "Back Bed 1 — second view before the July additions" },
        { src: "images/jul-2026/july-update-bed1-nemesia-aroma-heart-of-gold-1.webp", caption: "Nemesia 'Aroma Heart of Gold' along the front edge" },
        { src: "images/jul-2026/july-update-bed1-nemesia-aroma-heart-of-gold-2.webp", caption: "Nemesia — fragrant burgundy, cream and yellow flowers" },
      ],
      bed2: [
        { src: "images/jul-2026/july-update-back-bed-2-before-changes.webp", caption: "Back Bed 2 before the dogwood moved to Front Bed 3" },
      ],
      bed3: [
        { src: "images/jul-2026/july-update-back-bed-3-before-changes.webp", caption: "Back Bed 3 before the July garden update" },
      ],
      stone: [
        { src: "images/jul-2026/stone-bed-after-replanting-1.webp", caption: "Stone Bed after the late-July replanting" },
        { src: "images/jul-2026/stone-bed-after-replanting-2.webp", caption: "The completed alpine and succulent planting from the decking" },
        { src: "images/jul-2026/stone-bed-hydrangea-quercifolia-snowflake-5.webp", caption: "Hydrangea quercifolia 'Snowflake' planted at the back" },
        { src: "images/jul-2026/stone-bed-pennisetum-rubrum-3.webp", caption: "Purple Fountain Grass 'Rubrum'" },
        { src: "images/jul-2026/stone-bed-ajuga-fancy-finch-3.webp", caption: "Ajuga Feathered Friends 'Fancy Finch'" },
        { src: "images/jul-2026/stone-bed-ajuga-midnight-mystery-1.webp", caption: "Ajuga 'Midnight Mystery'" },
        { src: "images/jul-2026/stone-bed-achillea-king-alfred-2.webp", caption: "Achillea 'King Alfred'" },
        { src: "images/jul-2026/stone-bed-armeria-armada-white-3.webp", caption: "Armeria 'Armada White'" },
        { src: "images/jul-2026/stone-bed-sedum-chocolate-ball-3.webp", caption: "Sedum 'Chocolate Ball'" },
        { src: "images/jul-2026/stone-bed-sedum-aureum-2.webp", caption: "Golden Stonecrop 'Aureum'" },
        { src: "images/jul-2026/stone-bed-sedum-angelina-4.webp", caption: "Sedum 'Angelina'" },
        { src: "images/jul-2026/stone-bed-sedum-dragons-blood-2.webp", caption: "New Stonecrop 'Dragon's Blood'" },
        { src: "images/jul-2026/stone-bed-older-caucasian-stonecrop-assumed-1.webp", caption: "Older Caucasian stonecrop — separate assumed identity" },
        { src: "images/jul-2026/stone-bed-sedum-takesimense-atlantis-2.webp", caption: "Sedum 'Atlantis'" },
        { src: "images/jul-2026/stone-bed-six-rowed-stonecrop-assumed-1.webp", caption: "Established Six-rowed Stonecrop — assumed" },
        { src: "images/jul-2026/stone-bed-sempervivum-arachnoideum-2.webp", caption: "Cobweb Houseleek" },
        { src: "images/jul-2026/stone-bed-sempervivum-purple-quartz-2.webp", caption: "Houseleek 'Purple Quartz'" },
        { src: "images/jul-2026/stone-bed-chick-charms-mix-4.webp", caption: "Chick Charms houseleek mix" },
        { src: "images/jul-2026/stone-bed-common-houseleek-assumed-1.webp", caption: "Established Common Houseleek — assumed" },
        { src: "images/jul-2026/stone-bed-houseleek-rubin-assumed-1.webp", caption: "Established Houseleek 'Rubin' colony — assumed" },
        { src: "images/jul-2026/stone-bed-echeveria-perle-von-nurnberg-3.webp", caption: "Echeveria 'Perle von Nürnberg'" },
        { src: "images/jul-2026/stone-bed-echeveria-pulvinata-devotion-3.webp", caption: "Echeveria pulvinata 'Devotion'" },
      ],
      stoneArchive: [
        { src: "images/jul-2026/stone-bed-before-lavender-removal-1.webp", caption: "Before the late-July changes, with the lavender still present" },
        { src: "images/jul-2026/stone-bed-before-lavender-removal-2.webp", caption: "The former lavender planting before its rotten crown was discovered" },
        { src: "images/jul-2026/stone-bed-before-lavender-removal-3.webp", caption: "Stone Bed before the new alpine and succulent planting" },
      ],
      bed5: [
        { src: "images/jul-2026/bed5-after-pruning-1.webp", caption: "Bed 5 after the Wisteria pruning and clearing — full view" },
        { src: "images/jul-2026/bed5-after-pruning-2.webp", caption: "The opened-up trellis, rose and lavender after pruning" },
        { src: "images/jul-2026/bed5-before-pruning-1.webp", caption: "Before pruning — dense Wisteria growth across the wall" },
        { src: "images/jul-2026/bed5-before-pruning-2.webp", caption: "Before clearing — Wisteria over the trellis and rose" },
        { src: "images/jul-2026/bed5-big-pot-overview.webp", caption: "Bed 5 big pot — Alstroemeria, Petunia and trailing Vinca" },
        { src: "images/jul-2026/bed5-big-pot-alstroemeria-1.webp", caption: "Alstroemeria — red-and-gold flowers in the big pot" },
        { src: "images/jul-2026/bed5-big-pot-alstroemeria-2.webp", caption: "Alstroemeria flower detail" },
        { src: "images/jul-2026/bed5-big-pot-petunia-bees-knees-1.webp", caption: "Petunia 'Bee's Knees' — plant label" },
        { src: "images/jul-2026/bed5-big-pot-petunia-bees-knees-2.webp", caption: "Petunia 'Bee's Knees' in the big pot" },
        { src: "images/jul-2026/bed5-big-pot-vinca-illumination-1.webp", caption: "Vinca minor 'Illumination' trailing over the big pot" },
        { src: "images/jul-2026/bed5-big-pot-vinca-illumination-2.webp", caption: "Vinca minor 'Illumination' — plant label" },
        { src: "images/jul-2026/july-update-bed-5-big-pot-update.webp", caption: "Bed 5 big pot after the July Nemesia addition" },
        { src: "images/jul-2026/july-update-bed-5-nemesia.webp", caption: "Nemesia added to the Bed 5 big pot" },
        { src: "images/jul-2026/july-update-bed-5-big-pot-nemesia.webp", caption: "Nemesia among the established big-pot planting" },
        { src: "images/jul-2026/bed5-medium-pot-lythrum-robin-1.webp", caption: "Lythrum 'Robin' — plant label" },
        { src: "images/jul-2026/bed5-medium-pot-lythrum-robin-2.webp", caption: "Lythrum 'Robin' in the medium pot" },
        { src: "images/jul-2026/bed5-medium-pot-lythrum-robin-3.webp", caption: "Lythrum 'Robin' — magenta flower spikes" },
        { src: "images/jul-2026/bed5-medium-pot-lythrum-robin-4.webp", caption: "Lythrum 'Robin' flower detail" },
        { src: "images/jul-2026/bed5-little-pot-begonia-carmen-1.webp", caption: "Begonia 'Carmen' — plant label" },
        { src: "images/jul-2026/bed5-little-pot-begonia-carmen-2.webp", caption: "Begonia 'Carmen' in the little pot" },
        { src: "images/jul-2026/bed2-bed5-shopping-1.webp", caption: "Choosing the new plants for Beds 2 and 5" },
        { src: "images/jul-2026/bed2-bed5-shopping-2.webp", caption: "The July plant selection before planting" },
      ],
      lobeliapot: [
        { src: "images/jul-2026/lobelia-starship-scarlet-pot.jpeg", caption: "Lobelia 'Starship Scarlet Bronze Leaf' in its blue pot at the foot of the stairs" },
        { src: "images/jul-2026/lobelia-starship-scarlet-close.jpeg", caption: "Scarlet flower spikes and bronze foliage, close-up" },
      ],
      frontBed1: [
        { src: "images/jul-2026/front-260725-bed-1-1.webp", caption: "Front Bed 1 — July overview from the drive" },
        { src: "images/jul-2026/front-260725-bed-1-2.webp", caption: "Front Bed 1 — Hydrangea beneath the study window" },
        { src: "images/jul-2026/front-260725-bed-1-3.webp", caption: "Front Bed 1 — planting at the gateway end" },
        { src: "images/jul-2026/front-door.webp",  caption: "Front door & porch, hydrangea at the base" },
        { src: "images/jul-2026/study-gate.webp",  caption: "Study window & side gate — hydrangea and lavender" },
      ],
      frontBed2: [
        { src: "images/jul-2026/front-260725-bed-2-1.webp", caption: "Front Bed 2 — late-July overview" },
        { src: "images/jul-2026/front-bed2-after-bark-1.webp", caption: "Front Bed 2 after planting and bark mulching" },
        { src: "images/jul-2026/front-bed2-after-bark-2.webp", caption: "The finished planting from the front-door side" },
        { src: "images/jul-2026/front-bed2-before-bark-1.webp", caption: "New plants set out before the bark mulch" },
        { src: "images/jul-2026/front-bed2-before-bark-2.webp", caption: "Front Bed 2 before replanting" },
        { src: "images/jul-2026/front-bed2-coprosma-inferno-1.webp", caption: "Coprosma 'Inferno' — warm-edged foliage" },
        { src: "images/jul-2026/front-bed2-coprosma-inferno-2.webp", caption: "Coprosma 'Inferno' in the new bed" },
        { src: "images/jul-2026/front-bed2-coprosma-pina-colada-1.webp", caption: "Coprosma 'Pina Colada' — gold and orange foliage" },
        { src: "images/jul-2026/front-bed2-coprosma-pina-colada-2.webp", caption: "Coprosma 'Pina Colada' in the new bed" },
        { src: "images/jul-2026/front-bed2-hebe-kiwi-horopito.webp", caption: "Hebe 'Kiwi' Horopito — purple flower spikes" },
        { src: "images/jul-2026/front-bed-2-polemonium-golden-feathers-2.webp", caption: "Polemonium 'Golden Feathers' newly planted at the front-right" },
        { src: "images/jul-2026/front-bed-2-polemonium-golden-feathers-3.webp", caption: "Gold-edged Polemonium foliage" },
        { src: "images/jul-2026/bed2-bed5-shopping-1.webp", caption: "Choosing the new plants for Beds 2 and 5" },
        { src: "images/jul-2026/bed2-bed5-shopping-2.webp", caption: "The July plant selection before planting" },
      ],
      frontBed2Archive: [
        { src: "images/jul-2026/front-bed2-wax-begonia-1.webp", caption: "Begonia Cocktail 'Gin' before removal" },
        { src: "images/jul-2026/front-bed2-wax-begonia-2.webp", caption: "Begonia Cocktail 'Gin' flower detail" },
      ],
      frontBed3: [
        { src: "images/jul-2026/front-260725-bed-3-4-5-pano.webp", caption: "Panorama across Front Beds 3, 4 and 5" },
        { src: "images/jul-2026/july-update-front-bed-1.webp", caption: "Front Bed 3 after the July moves and additions" },
        { src: "images/jul-2026/july-update-front-bed-2.webp", caption: "Front Bed 3 — full wall run after replanting" },
        { src: "images/jul-2026/july-update-front-bed-3-dogwood.webp", caption: "Variegated Dogwood newly moved into Front Bed 3" },
        { src: "images/jul-2026/july-update-front-bed-3-dogwood-2.webp", caption: "Dogwood foliage after the move" },
        { src: "images/jul-2026/july-update-front-bed3-red-hot-poker.webp", caption: "Red Hot Poker newly moved into Front Bed 3" },
        { src: "images/jul-2026/july-update-front-bed3-leucothoe-little-flame-1.webp", caption: "Leucothoe 'Little Flames' newly planted" },
        { src: "images/jul-2026/july-update-front-bed3-leucothoe-little-flame-2.webp", caption: "Leucothoe red new growth and plant label" },
        { src: "images/jul-2026/front-bed3-super-fairy-trained.jpg", caption: "‘Super Fairy’ after deadheading, with the long stems worked back into the trellis" },
        { src: "images/jul-2026/front-bed3-pink-rose-trained.jpg", caption: "Pink rose after deadheading and training into the wall trellis" },
        { src: "images/jul-2026/overview.webp",      caption: "Front garden overview from the entrance" },
        { src: "images/jul-2026/climbing-rose.webp", caption: "Climbing rose on the wall by Bedroom 3" },
        { src: "images/jul-2026/fern-window.webp",   caption: "Fern & climbing rose by the Bedroom 1 window" },
        { src: "images/jul-2026/pink-rose.webp",     caption: "Pink rose between Bedroom 1 and the ensuite corner" },
        { src: "images/jul-2026/front-bed-3-super-fairy-1.jpeg", caption: "Climbing Rose 'Super Fairy' trained against the Bedroom 3 wall" },
        { src: "images/jul-2026/front-bed-3-super-fairy-2.jpeg", caption: "Climbing Rose 'Super Fairy' in flower" },
        { src: "images/jul-2026/front-bed-3-super-fairy-label.jpeg", caption: "Super Fairy plant label — Rosa 'Helsufair'" },
        { src: "images/jul-2026/front-bed-3-super-fairy-tag.jpeg", caption: "Super Fairy picture tag" },
      ],
      frontBed3Archive: [
        { src: "images/jul-2026/july-update-front-bed-3-removed-fern.webp", caption: "The fern removed before the July replant" },
        { src: "images/jul-2026/fern-window.webp", caption: "Front Bed 3 with the former fern" },
      ],
      frontBed4: [
        { src: "images/jul-2026/front-260725-bed-3-4-5-pano.webp", caption: "Panorama across Front Beds 3, 4 and 5" },
        { src: "images/jul-2026/front-260725-bed-4-5-pano.webp", caption: "Panorama across Front Beds 4 and 5" },
        { src: "images/jul-2026/july-update-front-bed-4-delosperma-ice-cream-mix.webp", caption: "Delosperma 'Ice Cream Mix' newly planted" },
        { src: "images/jul-2026/july-update-front-bed-4-delosperma-ice-cream-mix-2.webp", caption: "Delosperma mixed daisy flowers" },
        { src: "images/jul-2026/front-bed-4-roses.jpeg", caption: "Front Bed 4 cleared, composted and planted with the two climbing roses" },
        { src: "images/jul-2026/rose-the-pilgrim.jpeg", caption: "The Pilgrim — soft yellow David Austin climbing rose" },
        { src: "images/jul-2026/rose-the-generous-gardener.jpeg", caption: "The Generous Gardener — pale pink David Austin climbing rose" },
        { src: "images/jul-2026/front-bed-4-before-planting.jpeg", caption: "Full bed layout before planting, with positions set out" },
        { src: "images/jul-2026/front-bed-4-little-devil-1.jpeg", caption: "Little Devil 1, newly planted beneath the window" },
        { src: "images/jul-2026/front-bed-4-lady-in-red-1.jpeg", caption: "Lady in Red 1, newly planted along the back of the bed" },
        { src: "images/jul-2026/front-bed-4-purple-gem.jpeg", caption: "Purple Gem in the ivy corner" },
        { src: "images/jul-2026/front-bed-4-magic-carpet.jpeg", caption: "Magic Carpet — gold foliage and red new growth" },
        { src: "images/jul-2026/front-bed-4-festuca.jpeg", caption: "Festuca 'Elijah Blue' — blue-grey front-edge texture" },
        { src: "images/jul-2026/front-bed-4-astrantia-selection.jpeg", caption: "Astrantia 'Buckland', 'Claret' and 'Star of Love' before planting" },
        { src: "images/jul-2026/front-bed-4-astrantia-1.jpeg", caption: "Astrantia trio planted in the open centre-front" },
        { src: "images/jul-2026/front-bed-4-astrantia-2.jpeg", caption: "Astrantia planting beside the Photinia canopy" },
        { src: "images/jul-2026/front-bed-4-little-devil-2.jpeg", caption: "Little Devil 2 on the return-wall side" },
        { src: "images/jul-2026/front-bed-4-lady-in-red-2.jpeg", caption: "Lady in Red 2 in front of the Photinia canopy" },
        { src: "images/jul-2026/front-bed-4-flaming-silver.jpeg", caption: "Pieris 'Flaming Silver' beside the return wall" },
      ],
      frontBed4Archive: [
        { src: "images/jul-2026/corner-bush.webp",         caption: "Photinia — before removal" },
        { src: "images/jul-2026/corner-bush-berries.webp", caption: "Photinia flower clusters — before removal" },
        { src: "images/jul-2026/weigela.webp",             caption: "Spiraea — before removal" },
      ],
      frontBed5: [
        { src: "images/jul-2026/front-260725-bed-3-4-5-pano.webp", caption: "Panorama across Front Beds 3, 4 and 5" },
        { src: "images/jul-2026/front-260725-bed-4-5-pano.webp", caption: "Panorama across Front Beds 4 and 5" },
        { src: "images/jul-2026/front-260725-bed-5-fruit-trees-1.webp", caption: "Front Bed 5 and the Fruit Trees beyond" },
        { src: "images/jul-2026/front-260725-bed-5-fruit-trees-2.webp", caption: "Front Bed 5 meeting the Fruit Trees strip" },
        { src: "images/jul-2026/front-260725-bed-5-1.webp", caption: "Front Bed 5 — established and July planting together" },
        { src: "images/jul-2026/front-260725-bed-5-bay-tree-1-1.webp", caption: "Established bay tree" },
        { src: "images/jul-2026/front-260725-bed-5-choisya-ternata-sundance-1.webp", caption: "Choisya ternata 'Sundance'" },
        { src: "images/jul-2026/front-260725-bed-5-choisya-ternata-sundance3-2.webp", caption: "Golden Choisya foliage in context" },
        { src: "images/jul-2026/front-260725-bed-5-clematis-1.webp", caption: "Established Clematis — habit and support" },
        { src: "images/jul-2026/front-260725-bed-5-clematis-2.webp", caption: "Clematis foliage and stems" },
        { src: "images/jul-2026/front-260725-bed-5-clematis-3.webp", caption: "Clematis close view" },
        { src: "images/jul-2026/front-260725-bed-5-gaura-goudi-red-1.webp", caption: "Gaura 'Gaudi Red'" },
        { src: "images/jul-2026/front-260725-bed-5-gaura-goudi-red-2.webp", caption: "Gaura 'Gaudi Red' flower detail" },
        { src: "images/jul-2026/front-260725-bed-5-hardy-fuchsia-1-1.webp", caption: "Established hardy fuchsia" },
        { src: "images/jul-2026/front-260725-bed-5-hardy-fuchsia-1-2.webp", caption: "Hardy fuchsia flowers" },
        { src: "images/jul-2026/front-260725-bed-5-honey-suckle.webp", caption: "Established honeysuckle" },
        { src: "images/jul-2026/front-260725-bed-5-japanese-skimmia-2-1.webp", caption: "Japanese skimmia — corrected from the former bay-tree label" },
        { src: "images/jul-2026/front-260725-bed-5-japanese-skimmia-2-2.webp", caption: "Japanese skimmia foliage and habit" },
        { src: "images/jul-2026/front-260725-bed-5-pieris-japonica-polar-passion-1.webp", caption: "Pieris 'Polar Passion'" },
        { src: "images/jul-2026/front-260725-bed-5-pieris-japonica-polar-passion-2.webp", caption: "Pieris 'Polar Passion' foliage" },
        { src: "images/jul-2026/front-260725-bed-5-pieris-japonica-polar-passion-3.webp", caption: "Pieris 'Polar Passion' label and planting" },
        { src: "images/jul-2026/front-260725-bed-5-pittosporum-tenuifolium-tom-thumb-1.webp", caption: "Pittosporum 'Tom Thumb'" },
        { src: "images/jul-2026/front-260725-bed-5-pittosporum-tenuifolium-tom-thumb-2.webp", caption: "Pittosporum 'Tom Thumb' foliage" },
        { src: "images/jul-2026/front-260725-bed-5-pittosporum-tenuifolium-tom-thumb-3.webp", caption: "Pittosporum 'Tom Thumb' in the bed" },
        { src: "images/jul-2026/front-260725-bed-5-shrub-rose-1.webp", caption: "Established shrub rose" },
        { src: "images/jul-2026/front-260725-bed-5-shrub-rose-2.webp", caption: "Shrub rose foliage and hips" },
        { src: "images/jul-2026/front-260725-bed-5-shrub-rose-3.webp", caption: "Rose hips — the fruits formed after flowering" },
        { src: "images/jul-2026/july-update-front-bed-7-preplanting.webp", caption: "The new Front Bed 5 plants set out before planting" },
        { src: "images/jul-2026/july-update-front-bed-5-1.webp", caption: "Front Bed 5 after the July replant" },
        { src: "images/jul-2026/july-update-front-bed-5-2.webp", caption: "Front Bed 5 — new planting from the boundary side" },
        { src: "images/jul-2026/july-update-front-bed-5-3.webp", caption: "Front Bed 5 — new planting, view three" },
        { src: "images/jul-2026/july-update-front-bed-5-4.webp", caption: "Front Bed 5 — new planting, view four" },
        { src: "images/jul-2026/july-update-front-bed-5-5.webp", caption: "Front Bed 5 — new planting, view five" },
        { src: "images/jul-2026/july-update-front-bed-5-6.webp", caption: "Front Bed 5 — new planting, view six" },
        { src: "images/jul-2026/july-update-front-bed-5-ceratostigma-plumbaginoides.webp", caption: "Ceratostigma plumbaginoides" },
        { src: "images/jul-2026/july-update-front-bed-5-heather-1-bell-s-extra-special.webp", caption: "Heather 'Bell's Extra Special'" },
        { src: "images/jul-2026/july-update-front-bed-5-heather-2-tib.webp", caption: "Heather 'Tib'" },
        { src: "images/jul-2026/july-update-front-bed-5-heather-3-providence-right.webp", caption: "Bell Heather 'Providence'" },
        { src: "images/jul-2026/july-update-front-bed-5-heather-4-leprechaun.webp", caption: "Heather 'Leprechaun'" },
        { src: "images/jul-2026/july-update-front-bed-5-heather-5-winter-chocolate.webp", caption: "Heather 'Winter Chocolate'" },
        { src: "images/jul-2026/july-update-front-bed-5-hypericum.webp", caption: "New Hypericum" },
        { src: "images/jul-2026/july-update-front-bed-5-rhubarb-and-custard-hebe.webp", caption: "Hebe 'Rhubarb and Custard'" },
        { src: "images/jul-2026/july-update-front-bed-5-salvia-salgoon-lake-blueberry.webp", caption: "Salvia 'Salgoon Lake Blueberry'" },
        { src: "images/jul-2026/july-update-front-bed-5-sollya.webp", caption: "Bluebell Creeper (Sollya)" },
        { src: "images/jul-2026/boundary-corner.webp", caption: "Boundary corner — box topiary & variegated shrub" },
        { src: "images/jul-2026/laurel.webp",          caption: "Boundary bed running back toward the entrance" },
        { src: "images/jul-2026/choisya.webp",         caption: "Variegated Choisya against the wall" },
        { src: "images/jul-2026/choisya-flowers.webp", caption: "Choisya with flowers at the corner" },
        { src: "images/jul-2026/climber.webp",         caption: "Established shrub rose — formerly recorded as an unidentified climber" },
        { src: "images/jul-2026/climber-berries.webp", caption: "Shrub rose with red-orange hips" },
      ],
      frontApple: [
        { src: "images/jul-2026/front-260725-fruit-trees.webp", caption: "Apple and damson trees at the bottom of the drive" },
        { src: "images/jul-2026/front-260725-bed-5-fruit-trees-1.webp", caption: "Fruit Trees beside Front Bed 5" },
        { src: "images/jul-2026/front-260725-bed-5-fruit-trees-2.webp", caption: "Fruit Trees and the boundary planting" },
        { src: "images/jul-2026/front-260725-fruit-trees-apple-tree-1.webp", caption: "Apple tree — full habit" },
        { src: "images/jul-2026/front-260725-fruit-trees-apple-tree-2.webp", caption: "Apple tree canopy" },
        { src: "images/jul-2026/front-260725-fruit-trees-apple-tree-3.webp", caption: "Developing apples" },
        { src: "images/jul-2026/front-260725-fruit-trees-apple-tree-4.webp", caption: "Apple fruit and foliage detail" },
        { src: "images/jul-2026/front-260725-fruit-trees-apple-tree-5.webp", caption: "Apple tree from the boundary side" },
        { src: "images/jul-2026/front-260725-fruit-trees-damson-tree-1.webp", caption: "Damson tree — full habit" },
        { src: "images/jul-2026/front-260725-fruit-trees-damson-tree-2.webp", caption: "Damson canopy" },
        { src: "images/jul-2026/front-260725-fruit-trees-damson-tree-3.webp", caption: "Developing damsons" },
        { src: "images/jul-2026/front-260725-fruit-trees-damson-tree-4.webp", caption: "Damson fruit and foliage detail" },
      ],
      frontGateTree: [
        { src: "images/jul-2026/front-260725-gateway-tree.webp", caption: "Gate Tree beside the drive entrance" },
        { src: "images/jul-2026/front-260725-gateway-tree-2.webp", caption: "Weeping canopy and developing crab apples" },
        { src: "images/jul-2026/front-260725-gateway-tree-fruit-1.webp", caption: "Developing crab apples among the serrated Malus foliage" },
        { src: "images/jul-2026/front-260725-gateway-tree-fruit-2.webp", caption: "Developing fruit — useful evidence for the Malus identification" },
        { src: "images/jul-2026/front-260725-gateway-tree-habit-3.webp", caption: "Pendulous branch habit supporting the weeping crab-apple identification" },
      ],
      frontBoxHedge: [
        { src: "images/jul-2026/wallbed-start.webp", caption: "Box hedge at the start of the wall run" },
        { src: "images/jul-2026/cotoneaster.webp",   caption: "Box hedge (close) — previously mislabeled Cotoneaster" },
      ],
      frontStone: [
        { src: "images/jul-2026/hosta-trough.webp",     caption: "Hosta in the stone trough" },
        { src: "images/jul-2026/entrance-troughs.webp", caption: "The stone trough by the entrance" },
      ],
      // frontHedge — still no photos (next photo walk)
    },
    "aug-2026": {
      label: "August 2026",
      bed1: [
        { src: "images/aug-2026-big-changes/bed1-overview-1.webp", caption: "Bed 1 after the August reshuffle" },
        { src: "images/aug-2026-big-changes/bed1-overview-2.webp", caption: "The refreshed planting beneath the Japanese maple" },
        { src: "images/aug-2026-big-changes/bed1-overview-3.webp", caption: "Bed 1 overview from the path" },
        { src: "images/aug-2026-big-changes/bed1-abelia-kaleidoscope-1.webp", caption: "The second Abelia 'Kaleidoscope'" },
        { src: "images/aug-2026-big-changes/bed1-pieris-forest-flame-1.webp", caption: "Pieris 'Forest Flame' newly planted" },
      ],
      bed2: [
        { src: "images/aug-2026-big-changes/bed2-sedum-rose-carpet-planted.webp", caption: "Sedum 'Rose Carpet' at Bed 3 position 1" },
        { src: "images/aug-2026-big-changes/bed2-sedum-rose-carpet-label.webp", caption: "Retained Sedum 'Rose Carpet' label" },
      ],
      bed4: [
        { src: "images/aug-2026-big-changes/bed4-lobelia-starship-1.webp", caption: "Lobelia 'Starship Scarlet Bronze Leaf' planted in Bed 4" },
        { src: "images/aug-2026-big-changes/bed4-lobelia-starship-2.webp", caption: "Scarlet Lobelia in the former Achillea position" },
      ],
      bed5: [
        { src: "images/aug-2026-big-changes/bed5-big-pot-nemesia-aroma-1.webp", caption: "Nemesia 'Aroma Heart of Gold' moved into the Bed 5 big pot" },
        { src: "images/aug-2026-big-changes/bed5-big-pot-nemesia-aroma-2.webp", caption: "Both Nemesia plants sharing the mixed pot" },
      ],
      lobeliapot: [
        { src: "images/aug-2026-big-changes/nemesia-lady-penelope-1.webp", caption: "The former Lobelia Pot now planted with the pink-and-white Nemesia" },
        { src: "images/aug-2026-big-changes/nemesia-lady-penelope-2.webp", caption: "Nemesia 'Lady Penelope' — best-fit identification" },
      ],
      bed23wallpot: [
        { src: "images/aug-2026-big-changes/bed23-wallpot-viburnum-lisarose-2.webp", caption: "Viburnum 'Lisarose' in the new dividing-wall pot" },
        { src: "images/aug-2026-big-changes/bed23-wallpot-vinca-illumination-1.webp", caption: "The additional Vinca minor 'Illumination' trailing over the wall" },
        { src: "images/aug-2026-big-changes/bed23-wallpot-viburnum-lisarose-1.webp", caption: "Retained Viburnum 'Lisarose' label" },
      ],
      viburnumpot: [
        { src: "images/aug-2026-big-changes/viburnum-pot-spirit-1.webp", caption: "Viburnum tinus Spirit in its new glazed pot" },
        { src: "images/aug-2026-big-changes/viburnum-pot-spirit-2.webp", caption: "The new Viburnum pot at the foot of the steps" },
        { src: "images/aug-2026-big-changes/viburnum-pot-spirit-label.webp", caption: "Retained Viburnum tinus Spirit label" },
      ],
      frontBed4: [
        { src: "images/aug-2026-front-garden/front-bed4-updated-1.jpeg", caption: "Front Bed 4 after the August Physocarpus clusters and Rhododendron were planted" },
        { src: "images/aug-2026-front-garden/front-bed4-updated-2.jpeg", caption: "The refreshed corner bed from the return-wall side" },
        { src: "images/aug-2026-front-garden/front-bed4-achillea-planted.jpeg", caption: "Achillea Summer Berries planted in Front Bed 4" },
        { src: "images/aug-2026-front-garden/front-bed4-physocarpus-clusters-1-2.jpeg", caption: "Physocarpus Clusters 1 and 2 along the wall" },
        { src: "images/aug-2026-front-garden/front-bed4-physocarpus-cluster-1.jpeg", caption: "Cluster 1 — two Little Devils" },
        { src: "images/aug-2026-front-garden/front-bed4-physocarpus-cluster-2.jpeg", caption: "Cluster 2 — two Lady in Reds" },
        { src: "images/aug-2026-front-garden/front-bed4-physocarpus-cluster-3-1.jpeg", caption: "Cluster 3 — two Little Devils and one Lady in Red" },
        { src: "images/aug-2026-front-garden/front-bed4-physocarpus-cluster-3-2.jpeg", caption: "Cluster 3 from the stepping route" },
        { src: "images/aug-2026-front-garden/front-bed4-purple-gem-moved.jpeg", caption: "Purple Gem in one of the former Lady in Red positions" },
        { src: "images/aug-2026-front-garden/front-bed4-rhododendron-libretto-1.jpeg", caption: "Rhododendron 'Libretto' newly planted in the shaded corner" },
        { src: "images/aug-2026-front-garden/front-bed4-rhododendron-libretto-2.jpeg", caption: "Evergreen foliage and developing buds on 'Libretto'" },
        { src: "images/june-2026-updates/achillea.webp", caption: "Achillea Summer Berries before its August move from Back Bed 4" },
        { src: "images/aug-2026-small-changes/front-bed4-update-1.jpeg", caption: "Front Bed 4 after the smaller August changes" },
        { src: "images/aug-2026-small-changes/front-bed4-update-2.jpeg", caption: "Dahlia, Verbena and the moved Polar Passion in Front Bed 4" },
        { src: "images/aug-2026-small-changes/front-bed4-dahlia-tampico-1.jpeg", caption: "Dahlia Dalina Maxi 'Tampico' newly planted" },
        { src: "images/aug-2026-small-changes/front-bed4-verbena-margarets-memory-1.jpeg", caption: "Verbena 'Margaret's Memory' at the front edge" },
        { src: "images/aug-2026-small-changes/front-bed4-pieris-polar-passion-move-1.jpeg", caption: "Pieris 'Polar Passion' after its move from Front Bed 5" },
      ],
      frontBed5: [
        { src: "images/aug-2026-front-garden/front-bed5-little-devil.jpeg", caption: "The spare Little Devil newly planted in Front Bed 5" },
        { src: "images/aug-2026-small-changes/front-bed5-update-1.jpeg", caption: "Front Bed 5 after the smaller August changes" },
        { src: "images/aug-2026-small-changes/front-bed5-hydrangea-bloody-marie-1.jpeg", caption: "Hydrangea 'Bloody Marie' in the former Honeysuckle position" },
        { src: "images/aug-2026-small-changes/front-bed5-euphorbia-ascot-petite-1.jpeg", caption: "Euphorbia 'Ascot Petite' in Polar Passion's former position" },
        { src: "images/aug-2026-small-changes/front-bed5-flaming-silver-move.jpeg", caption: "Pieris 'Flaming Silver' after its move from Front Bed 4" },
        { src: "images/aug-2026-small-changes/front-bed5-astrantia-move.jpeg", caption: "The Astrantia trio re-established in Front Bed 5" },
      ],
      frontPots: [
        { src: "images/aug-2026-front-garden/front-pots.jpeg", caption: "P1 mixed seasonal pot and P2 Fuchsia pot beside the boundary wall" },
      ],
      frontBed5Archive: [
        { src: "images/jul-2026/front-260725-bed-5-honey-suckle.webp", caption: "The Honeysuckle before its August removal" },
      ],
      cercispot: [
        { src: "images/aug-2026/cercis-carolina-sweetheart-pot.jpeg", caption: "Cercis canadensis 'Carolina Sweetheart' in its new pot by the steps" },
        { src: "images/aug-2026/cercis-carolina-sweetheart-label.jpeg", caption: "Retained Carolina Sweetheart plant label" },
        { src: "images/aug-2026/cercis-carolina-sweetheart-foliage-1.jpeg", caption: "Maroon, cream, green and pink heart-shaped foliage" },
        { src: "images/aug-2026/cercis-carolina-sweetheart-foliage-2.jpeg", caption: "Variegated Cercis foliage in the August sun" },
        { src: "images/aug-2026/cercis-carolina-sweetheart-context-1.jpeg", caption: "The potted Cercis in its new upper-steps position" },
        { src: "images/aug-2026/cercis-carolina-sweetheart-context-2.jpeg", caption: "Cercis Pot in the wider back-garden setting" },
      ],
      littlepot2: [
        { src: "images/aug-2026/little-pot-2-coreopsis-1.jpeg", caption: "Coreopsis moved into Little Pot 2" },
        { src: "images/aug-2026/little-pot-2-coreopsis-2.jpeg", caption: "Golden Coreopsis filling the square blue pot" },
        { src: "images/aug-2026/little-pot-2-coreopsis-3.jpeg", caption: "Little Pot 2 in its new upper stair-wall position" },
      ],
      littlepot2Archive: [
        { src: "images/plants/little-pot-2.webp", caption: "Little Pot 2 before the August clear-out, with Pelargonium and Petunia" },
      ],
      wallpot2: [
        { src: "images/aug-2026/echinacea-mooodz-glory-1.jpeg", caption: "Echinacea Mooodz Glory planted in the former Coreopsis pot" },
        { src: "images/aug-2026/echinacea-mooodz-glory-2.jpeg", caption: "White ray florets around the golden-green cones" },
      ],
      wallpot2Archive: [
        { src: "images/june-2026-update-2/coreopsis-gold-1.webp", caption: "The same pot before the August change, planted with Coreopsis" },
        { src: "images/june-2026-update-2/coreopsis-gold-2.webp", caption: "Coreopsis before it moved into Little Pot 2" },
      ],
      frontBed2: [
        { src: "images/aug-2026/front-bed2-update-1.jpeg", caption: "Front Bed 2 after Coprosma 'City Knights' joined the planting" },
        { src: "images/aug-2026/front-bed2-update-2.jpeg", caption: "The refreshed five-plant layout from the front-door side" },
        { src: "images/aug-2026/front-bed2-coprosma-city-knights-1.jpeg", caption: "Coprosma 'City Knights' — glossy burgundy and red foliage" },
        { src: "images/aug-2026/front-bed2-coprosma-city-knights-2.jpeg", caption: "City Knights newly planted against the hedge" },
        { src: "images/aug-2026/front-bed2-coprosma-city-knights-label.jpeg", caption: "Retained Coprosma 'City Knights' plant label" },
      ],
      frontBed2Archive: [
        { src: "images/jul-2026/front-bed2-wax-begonia-1.webp", caption: "Begonia Cocktail 'Gin' before removal" },
        { src: "images/jul-2026/front-bed2-wax-begonia-2.webp", caption: "Begonia Cocktail 'Gin' flower detail" },
      ],
    },
  };

  // ─── PLANT PHOTOS ─────────────────────────────────────────────────
  // Per-plant photo journal. Keyed by plant name, newest month first.
  // Each entry: { month, label, photos: [{src, caption}] }
  const PLANT_PHOTOS = {
    "Japanese Maple 'Bloodgood'": [
      { month: "june-2026", label: "June 2026", photos: [{ src: "images/june-2026/japanese-maple.webp", caption: "Full summer canopy" }] },
      { month: "may-2026",  label: "May 2026",  photos: [{ src: "images/may-2026/bed1-close1.jpg",      caption: "Japanese Maple area" }] },
    ],
    "Japanese Aralia": [
      { month: "june-2026", label: "June 2026", photos: [{ src: "images/june-2026/fatsia.webp", caption: "Fatsia japonica" }] },
    ],
    "Dahlia 'Double Dreamy Lilac'": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026/dahlia-context.webp", caption: "Compact plant in context" },
        { src: "images/june-2026/dahlia.webp",         caption: "Lilac-magenta double flower and dark foliage" },
      ]},
    ],
    "Angel Wings": [
      { month: "june-2026", label: "June 2026", photos: [{ src: "images/june-2026/angel-wings.webp", caption: "Angel Wings — silvery leaves" }] },
    ],
    "Euonymus 'Emerald 'n' Gold'": [
      { month: "june-2026", label: "June 2026", photos: [{ src: "images/june-2026/euonymus.webp", caption: "‘Emerald ’n’ Gold’ — golden foliage" }] },
    ],
    "Nemesia 'Aroma Heart of Gold'": [
      { month: "jul-2026", label: "July 2026 · Back Bed 1", photos: [
        { src: "images/jul-2026/july-update-bed1-nemesia-aroma-heart-of-gold-1.webp", caption: "Fragrant burgundy, cream and yellow flowers along the front edge" },
        { src: "images/jul-2026/july-update-bed1-nemesia-aroma-heart-of-gold-2.webp", caption: "Nemesia 'Aroma Heart of Gold' in Back Bed 1" },
      ]},
    ],
    "Hosta 'Patriot'": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026/hosta-bed1-1.webp", caption: "‘Patriot’ in Bed 1" },
        { src: "images/june-2026/hosta-bed1-2.webp", caption: "‘Patriot’ foliage close-up" },
      ]},
    ],
    "Hosta (gold)": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026/hosta-bed2.webp", caption: "Hosta (gold) — Bed 1 (moved from Bed 2)" },
      ]},
    ],
    "Weeping Cherry": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026/weeping-cherry-june-1.webp", caption: "Full summer canopy" },
        { src: "images/june-2026/weeping-cherry-june-2.webp", caption: "Wide shot" },
      ]},
    ],
    "Variegated Dogwood": [
      { month: "jul-2026", label: "July 2026 · moved to Front Bed 3", photos: [
        { src: "images/jul-2026/july-update-front-bed-3-dogwood.webp", caption: "New position in Front Bed 3" },
        { src: "images/jul-2026/july-update-front-bed-3-dogwood-2.webp", caption: "Variegated foliage after the move" },
        { src: "images/jul-2026/july-update-front-bed-3-dogwood-3.webp", caption: "Dogwood settling into the wall bed" },
      ]},
      { month: "june-2026", label: "June 2026", photos: [{ src: "images/june-2026/variegated-dogwood.webp", caption: "Variegated Dogwood" }] },
    ],
    "Peony": [
      { month: "june-2026", label: "June 2026", photos: [{ src: "images/june-2026/peony.webp", caption: "Peony — full bloom" }] },
    ],
    "Weigela": [
      { month: "june-2026", label: "June 2026", photos: [{ src: "images/june-2026/weigela.webp", caption: "Weigela" }] },
    ],
    "Silverbush": [
      { month: "june-2026", label: "June 2026", photos: [{ src: "images/june-2026/silverbush.webp", caption: "Silverbush in flower" }] },
    ],
    "Maiden Pink": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026/maiden-pink.webp", caption: "Maiden Pink" },
        { src: "images/plants/dianthus.webp", caption: "Maiden Pink in flower" },
        { src: "images/plants/dianthus-1.webp", caption: "Pink flower detail" },
        { src: "images/plants/dianthus-2.webp", caption: "Established clump" },
      ]},
    ],
    "Centaurea 'Snowy Owl'": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026/centaurea-snowy-owl-1.webp", caption: "Centaurea 'Snowy Owl'" },
        { src: "images/june-2026/centaurea-snowy-owl-2.webp", caption: "Close-up" },
      ]},
    ],
    "Hydrangea petiolaris": [
      { month: "june-2026", label: "June 2026", photos: [{ src: "images/june-2026/hydrangea-petiolaris.webp", caption: "Hydrangea petiolaris — newly identified" }] },
    ],
    "Red Hot Poker": [
      { month: "jul-2026", label: "July 2026 · moved to Front Bed 3", photos: [
        { src: "images/jul-2026/july-update-front-bed3-red-hot-poker.webp", caption: "New position below the brick wall" },
      ]},
      { month: "june-2026", label: "June 2026", photos: [{ src: "images/june-2026/red-hot-poker.webp", caption: "Red Hot Poker — not yet flowered" }] },
    ],
    "Little Heath": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026-update-2/little-heath-1.webp", caption: "Little Heath — border planting" },
        { src: "images/june-2026-update-2/little-heath-2.webp", caption: "Little Heath — close-up" },
        { src: "images/june-2026-update-2/little-heath-3.webp", caption: "Little Heath — foliage" },
        { src: "images/june-2026-update-2/little-heath-4.webp", caption: "Little Heath — group" },
        { src: "images/june-2026-update-2/little-heath-5.webp", caption: "Little Heath — in bed" },
      ]},
    ],
    "Celosia": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026-update-2/celosia.webp", caption: "Celosia — mixed colours" },
      ]},
    ],
    "Spiraea 'Double Play Big Bang'": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026-update-2/spiraea-big-bang-1.webp", caption: "Spiraea 'Double Play Big Bang'" },
        { src: "images/june-2026-update-2/spiraea-big-bang-2.webp", caption: "Spiraea — against the wall" },
        { src: "images/june-2026-update-2/spiraea-big-bang-3.webp", caption: "Spiraea — close-up" },
        { src: "images/june-2026-update-2/spiraea-big-bang-4.webp", caption: "Spiraea — flowers" },
        { src: "images/june-2026-update-2/spiraea-big-bang-5.webp", caption: "Spiraea — wide" },
      ]},
    ],
    "Candy House Mix": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026-update-2/candy-house-mix.webp", caption: "Candy House Mix — stair wall pot" },
      ]},
    ],
    "Coreopsis Gold": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026-update-2/coreopsis-gold-1.webp", caption: "Coreopsis Gold — in blue pot" },
        { src: "images/june-2026-update-2/coreopsis-gold-2.webp", caption: "Coreopsis Gold — top down" },
      ]},
    ],
    "Forget-me-not": [
      { month: "june-2026", label: "June 2026", photos: [{ src: "images/june-2026/forget-me-not.webp", caption: "Forget-me-not — tiny blue flowers" }] },
    ],
    "Wintercreeper 'Emerald Gaiety'": [
      { month: "june-2026", label: "June 2026", photos: [{ src: "images/plants/wintercreeper.webp", caption: "White-margined foliage in Bed 1" }] },
    ],
    "New Zealand Flax (cultivar to confirm)": [
      { month: "june-2026", label: "June 2026", photos: [{ src: "images/june-2026/yucca.webp", caption: "Yucca — architectural form" }] },
    ],
    "Euonymus 'Emerald Gaiety'": [
      { month: "june-2026", label: "June 2026", photos: [{ src: "images/june-2026/euonymus-emerald-gaiety.webp", caption: "White-margined leaves; now in Bed 2" }] },
    ],
    "Apple Tree": [
      { month: "june-2026", label: "June 2026", photos: [{ src: "images/june-2026/apple-tree.webp", caption: "Apple Tree" }] },
    ],
    "Avens": [
      { month: "june-2026", label: "June 2026 (Bed 1 — before move to Bed 2)", photos: [
        { src: "images/june-2026-updates/avens-bed1.webp", caption: "Avens in its former Bed 1 position" },
      ]},
      { month: "june-2026", label: "June 2026 (Bed 3 — before move)", photos: [
        { src: "images/june-2026/avens-1.webp", caption: "Avens — orange flowers" },
        { src: "images/june-2026/avens-2.webp", caption: "Close-up" },
        { src: "images/june-2026/avens-3.webp", caption: "Cluster" },
        { src: "images/june-2026/avens-4.webp", caption: "Wide" },
      ]},
    ],
    "Wisteria": [
      { month: "june-2026", label: "June 2026", photos: [{ src: "images/june-2026/wisteria.webp", caption: "Wisteria — June" }] },
    ],
    "Rose": [
      { month: "june-2026", label: "June 2026", photos: [{ src: "images/june-2026/rose.webp", caption: "Rose" }] },
    ],
    "Lavender": [
      { month: "june-2026", label: "June 2026 (Bed 5 — before move to the decking)", photos: [{ src: "images/june-2026/lavender.webp", caption: "Lavender coming into flower in its former Bed 5 position" }] },
    ],
    "Houseleeks": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026/houseleeks-1.webp", caption: "Houseleeks" },
        { src: "images/june-2026/houseleeks-2.webp", caption: "Rosette detail" },
      ]},
    ],
    "Echeveria": [
      { month: "jul-2026", label: "July 2026 · newly planted", photos: [
        { src: "images/jul-2026/stone-echeveria-perle-von-nurnberg-planted.webp", caption: "Newly planted in the Stone Bed beside the houseleeks" },
        { src: "images/jul-2026/stone-echeveria-perle-von-nurnberg-1.webp", caption: "Powdery grey-purple rosette before planting" },
        { src: "images/jul-2026/stone-echeveria-perle-von-nurnberg-2.webp", caption: "Pink-edged leaves viewed from the side" },
      ]},
    ],
    "New Zealand Flax (dark)": [
      { month: "june-2026", label: "June 2026", photos: [{ src: "images/june-2026/phormium-dark.webp", caption: "Dark Phormium" }] },
    ],
    "Cabbage Tree": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026/cordyline-1.webp", caption: "Cordyline" },
        { src: "images/june-2026/cordyline-2.webp", caption: "Mid-shot" },
        { src: "images/june-2026/cordyline-3.webp", caption: "Close-up" },
      ]},
    ],
    "Honeysuckle": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026/honeysuckle-1.webp", caption: "Honeysuckle" },
        { src: "images/june-2026/honeysuckle-2.webp", caption: "Flowers" },
      ]},
    ],
    "Clematis": [
      { month: "june-2026", label: "June 2026", photos: [{ src: "images/june-2026/clematis.webp", caption: "Clematis montana" }] },
    ],
    "Pear Tree": [
      { month: "june-2026", label: "June 2026", photos: [{ src: "images/june-2026/pear-tree.webp", caption: "Pear Tree — June" }] },
    ],
    "Dahlia 'Double Dreamy Gold'": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026-updates/dahlia-black-yellow-1.webp", caption: "Dark foliage and golden buds — newly planted" },
        { src: "images/june-2026-updates/dahlia-black-yellow-2.webp", caption: "Golden double flower close-up" },
      ]},
    ],
    "Callistemon Inferno ('Yanferno')": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026-updates/callistemon-inferno-1.webp", caption: "Callistemon 'Inferno'" },
        { src: "images/june-2026-updates/callistemon-inferno-2.webp", caption: "Callistemon 'Inferno' — close-up" },
      ]},
    ],
    "Achillea": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026-updates/achillea.webp", caption: "Achillea — flat-headed flower clusters" },
      ]},
    ],
    "Gaillardia": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026-updates/gaillardia.webp", caption: "Gaillardia — vivid daisy flowers" },
      ]},
    ],
    "Abelia 'Kaleidoscope'": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026-updates/abelia-kaleidoscope.webp", caption: "Abelia 'Kaleidoscope' — variegated foliage" },
      ]},
    ],
    "Gazania 'Sunny Side Up'": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026-updates/gazania-sunny-side-up.webp", caption: "Gazania 'Sunny Side Up'" },
      ]},
    ],
    "Gazania 'Orange Flame'": [
      { month: "june-2026", label: "June 2026", photos: [
        { src: "images/june-2026-updates/gazania-orange-flame.webp", caption: "Gazania 'Orange Flame'" },
      ]},
    ],
    "Lobelia 'Starship Scarlet Bronze Leaf'": [
      { month: "jul-2026", label: "July 2026", photos: [
        { src: "images/jul-2026/lobelia-starship-scarlet-pot.jpeg", caption: "In its blue pot at the foot of the stairs" },
        { src: "images/jul-2026/lobelia-starship-scarlet-close.jpeg", caption: "Scarlet flower spikes and bronze foliage" },
      ]},
    ],
    "Alstroemeria": [
      { month: "jul-2026", label: "July 2026 · Bed 5 big pot", photos: [
        { src: "images/jul-2026/bed5-big-pot-alstroemeria-1.webp", caption: "Red-and-gold flowers in the big pot" },
        { src: "images/jul-2026/bed5-big-pot-alstroemeria-2.webp", caption: "Flower detail" },
      ]},
    ],
    "Petunia 'Bee's Knees'": [
      { month: "jul-2026", label: "July 2026 · Bed 5 big pot", photos: [
        { src: "images/jul-2026/bed5-big-pot-petunia-bees-knees-1.webp", caption: "Plant label" },
        { src: "images/jul-2026/bed5-big-pot-petunia-bees-knees-2.webp", caption: "Yellow flowers in the mixed pot" },
      ]},
    ],
    "Vinca minor 'Illumination'": [
      { month: "jul-2026", label: "July 2026 · Bed 5 big pot", photos: [
        { src: "images/jul-2026/bed5-big-pot-vinca-illumination-1.webp", caption: "Trailing over the pot rim" },
        { src: "images/jul-2026/bed5-big-pot-vinca-illumination-2.webp", caption: "Plant label and variegated foliage" },
      ]},
    ],
    "Lythrum 'Robin'": [
      { month: "jul-2026", label: "July 2026 · Bed 5 medium pot", photos: [
        { src: "images/jul-2026/bed5-medium-pot-lythrum-robin-1.webp", caption: "Plant label" },
        { src: "images/jul-2026/bed5-medium-pot-lythrum-robin-2.webp", caption: "In the medium pot" },
        { src: "images/jul-2026/bed5-medium-pot-lythrum-robin-3.webp", caption: "Magenta flower spikes" },
        { src: "images/jul-2026/bed5-medium-pot-lythrum-robin-4.webp", caption: "Flower detail" },
      ]},
    ],
    "Begonia 'Carmen'": [
      { month: "jul-2026", label: "July 2026 · Bed 5 little pot", photos: [
        { src: "images/jul-2026/bed5-little-pot-begonia-carmen-1.webp", caption: "Plant label and red double flowers" },
        { src: "images/jul-2026/bed5-little-pot-begonia-carmen-2.webp", caption: "In the little pot" },
      ]},
    ],
    "Coprosma 'Inferno'": [
      { month: "jul-2026", label: "July 2026 · Front Bed 2", photos: [
        { src: "images/jul-2026/front-bed2-coprosma-inferno-1.webp", caption: "Warm-edged foliage" },
        { src: "images/jul-2026/front-bed2-coprosma-inferno-2.webp", caption: "Newly planted" },
      ]},
    ],
    "Coprosma 'Pina Colada'": [
      { month: "jul-2026", label: "July 2026 · Front Bed 2", photos: [
        { src: "images/jul-2026/front-bed2-coprosma-pina-colada-1.webp", caption: "Gold and orange foliage" },
        { src: "images/jul-2026/front-bed2-coprosma-pina-colada-2.webp", caption: "Newly planted" },
      ]},
    ],
    "Hebe 'Kiwi' (Horopito)": [
      { month: "jul-2026", label: "July 2026 · Front Bed 2", photos: [
        { src: "images/jul-2026/front-bed2-hebe-kiwi-horopito.webp", caption: "Purple flower spikes and dark new growth" },
      ]},
    ],
    "Climbing Rose 'Super Fairy'": [
      { month: "jul-2026", label: "July 2026 · Front Bed 3", photos: [
        { src: "images/jul-2026/front-bed3-super-fairy-trained.jpg", caption: "Deadheaded, with the long stems worked back into the trellis" },
      ]},
    ],
    "Rose (pink)": [
      { month: "jul-2026", label: "July 2026 · Front Bed 3", photos: [
        { src: "images/jul-2026/front-bed3-pink-rose-trained.jpg", caption: "Deadheaded and trained into the wall trellis" },
      ]},
    ],
    "The Pilgrim": [
      { month: "jul-2026", label: "July 2026", photos: [
        { src: "images/jul-2026/rose-the-pilgrim.jpeg", caption: "The Pilgrim, newly planted against the wall" },
      ]},
    ],
    "The Generous Gardener": [
      { month: "jul-2026", label: "July 2026", photos: [
        { src: "images/jul-2026/rose-the-generous-gardener.jpeg", caption: "The Generous Gardener, newly planted against the wall" },
      ]},
    ],
  };

  // ─── BED PLANT MAPS ───────────────────────────────────────────────
  // Each map is a list of {name, x, y, r, hue} for SVG circles.
  // Coordinates are in a 100×100 viewBox; the bed view scales it up.
  const BED_PLANT_MAPS = {
    bed1: [
      { mapNo: 1, plantId: "bed1-hosta", name: "Hosta 'Patriot'", x: 79, y: 69, r: 7, hue: 105 },
      { mapNo: 2, plantId: "bed1-pieris-forest-flame", name: "Pieris 'Forest Flame'", x: 64, y: 71, r: 6, hue: 5 },
      { mapNo: 3, plantId: "bed1-dahlia", name: "Dahlia 'Double Dreamy Lilac'", x: 79, y: 54, r: 7, hue: 0 },
      { mapNo: 4, plantId: "bed1-dahlia-yellow", name: "Dahlia 'Double Dreamy Gold'", x: 55, y: 58, r: 8, hue: 55 },
      { mapNo: 5, plantId: "bed1-abelia-kaleidoscope", name: "Abelia 'Kaleidoscope'", x: 47, y: 83, r: 7, hue: 35 },
      { mapNo: 6, plantId: "bed1-rhododendron", name: "Rhododendron", x: 32, y: 84, r: 7, hue: 60 },
      { mapNo: 7, plantId: "bed1-euonymus", name: "Euonymus 'Emerald 'n' Gold'", x: 18, y: 84, r: 6, hue: 55 },
      { mapNo: 8, plantId: "bed1-hosta", name: "Hosta 'Patriot'", x: 31, y: 67, r: 8, hue: 105 },
      { mapNo: 9, plantId: "bed1-japanese-aralia", name: "Japanese Aralia", x: 36, y: 49, r: 11, hue: 90 },
      { mapNo: 10, plantId: "bed1-hosta-gold", name: "Hosta (gold)", x: 64, y: 45, r: 8, hue: 105 },
      { mapNo: 11, plantId: "bed1-japanese-maple", name: "Japanese Maple 'Bloodgood'", x: 58, y: 25, r: 17, hue: 18 },
      { mapNo: "BOX", plantId: "bed1-box-hedging", name: "Box Hedging", x: 92, y: 58, r: 7, hue: 130 },
      { mapNo: "LH", plantId: "bed1-little-heath", name: "Little Heath", x: 18, y: 53, r: 7, hue: 320 },
    ],
    bed2: [
      { mapNo: 1, plantId: "bed2-weigela", name: "Weigela", x: 82, y: 84, r: 8, hue: 320 },
      { mapNo: 2, plantId: "bed2-peony", name: "Peony", x: 82, y: 66, r: 8, hue: 350 },
      { mapNo: 3, plantId: "bed2-avens", name: "Avens", x: 49, y: 72, r: 7, hue: 30 },
      { mapNo: 4, plantId: "bed2-euonymus-emerald-gaiety", name: "Euonymus 'Emerald Gaiety'", x: 62, y: 59, r: 7, hue: 110 },
      { mapNo: 5, plantId: "bed2-hydrangea-petiolaris", name: "Hydrangea petiolaris", x: 36, y: 50, r: 9, hue: 210 },
      { mapNo: 6, plantId: "bed2-avens", name: "Avens", x: 61, y: 41, r: 7, hue: 30 },
      { mapNo: 7, plantId: "bed2-maiden-pink", name: "Maiden Pink", x: 78, y: 47, r: 6, hue: 330 },
      { mapNo: 8, plantId: "bed2-rose-inherited", name: "Rose (inherited)", x: 60, y: 25, r: 8, hue: 350 },
      { mapNo: 9, plantId: "bed2-silverbush", name: "Silverbush", x: 82, y: 14, r: 8, hue: 70 },
      { mapNo: 10, plantId: "bed2-butterfly-bush", name: "Butterfly Bush", x: 24, y: 14, r: 14, hue: 285 },
    ],
    bed3: [
      { mapNo: 1, plantId: "bed2-sedum-rose-carpet", name: "Sedum 'Rose Carpet'", x: 15, y: 20, r: 7, hue: 340 },
      { mapNo: 2, plantId: "bed2-spiraea-double-play-big-bang", name: "Spiraea 'Double Play Big Bang'", x: 20, y: 42, r: 6, hue: 330 },
      { mapNo: 3, plantId: "bed2-spiraea-double-play-big-bang", name: "Spiraea 'Double Play Big Bang'", x: 34, y: 42, r: 6, hue: 330 },
      { mapNo: 4, plantId: "bed2-spiraea-double-play-big-bang", name: "Spiraea 'Double Play Big Bang'", x: 48, y: 42, r: 6, hue: 330 },
      { mapNo: 5, plantId: "bed2-spiraea-double-play-big-bang", name: "Spiraea 'Double Play Big Bang'", x: 62, y: 42, r: 6, hue: 330 },
      { mapNo: 6, name: "Identification pending · position 6", pending: true, x: 28, y: 20, r: 5, hue: 80 },
      { mapNo: 7, plantId: "bed2-centaurea-snowy-owl", name: "Centaurea 'Snowy Owl'", x: 45, y: 20, r: 7, hue: 200 },
      { mapNo: 8, plantId: "bed3-rose-inherited", name: "Rose (inherited)", x: 60, y: 20, r: 6, hue: 350 },
      { mapNo: 9, name: "Identification pending · position 9", pending: true, x: 82, y: 20, r: 10, hue: 80 },
      { mapNo: 10, plantId: "bed2-weeping-cherry", name: "Weeping Cherry", x: 82, y: 42, r: 9, hue: 340 },
      { mapNo: 11, plantId: "bed2-kerria", name: "Kerria", x: 95, y: 42, r: 5, hue: 55 },
    ],
    bed4: [
      { mapNo: 1, plantId: "bed4-gaillardia", name: "Gaillardia", x: 35, y: 24, r: 8, hue: 25 },
      { mapNo: 2, plantId: "bed4-abelia-kaleidoscope", name: "Abelia 'Kaleidoscope'", x: 60, y: 24, r: 8, hue: 310 },
      { mapNo: 3, plantId: "bed4-callistemon-inferno-yanferno", name: "Callistemon Inferno ('Yanferno')", x: 35, y: 48, r: 9, hue: 0 },
      { mapNo: 4, plantId: "lobeliapot-lobelia-starship-scarlet-bronze-leaf", name: "Lobelia 'Starship Scarlet Bronze Leaf'", x: 53, y: 48, r: 8, hue: 8 },
      { mapNo: 5, plantId: "bed4-apple-tree", name: "Apple Tree", x: 72, y: 48, r: 10, hue: 105 },
    ],
    bed5: [
      { mapNo: "W", plantId: "bed5-wisteria", name: "Wisteria", x: 88, y: 12, r: 10, hue: 270 },
      { mapNo: "R", plantId: "bed5-rose", name: "Rose", x: 75, y: 84, r: 8, hue: 350 },
      { mapNo: "Y", plantId: "bed5-new-zealand-flax-cultivar-to-confirm", name: "New Zealand Flax (cultivar to confirm)", x: 18, y: 84, r: 10, hue: 90 },
      { mapNo: "B1", plantId: "bed5-big-pot-alstroemeria", name: "Alstroemeria", x: 70, y: 20, r: 5, hue: 20 },
      { mapNo: "B2", plantId: "bed5-big-pot-petunia-bees-knees", name: "Petunia 'Bee's Knees'", x: 78, y: 20, r: 4, hue: 75 },
      { mapNo: "B3", plantId: "bed5-big-pot-vinca-minor-illumination", name: "Vinca minor 'Illumination'", x: 70, y: 28, r: 4, hue: 110 },
      { mapNo: "B4", plantId: "bed5-big-pot-nemesia", name: "Nemesia", x: 78, y: 28, r: 4, hue: 25 },
      { mapNo: "B5", plantId: "bed1-nemesia", name: "Nemesia 'Aroma Heart of Gold'", x: 74, y: 35, r: 4, hue: 15 },
      { mapNo: "M", plantId: "bed5-medium-pot-lythrum-robin", name: "Lythrum 'Robin'", x: 74, y: 64, r: 6, hue: 325 },
      { mapNo: "L", plantId: "bed5-little-pot-begonia-carmen", name: "Begonia 'Carmen'", x: 70, y: 45, r: 5, hue: 10 },
      { mapNo: "C", plantId: "stone-cabbage-tree", name: "Cabbage Tree", x: 45, y: 88, r: 13, hue: 350 },
    ],
    stone: [
      { mapNo: 1, plantId: "stone-sedum-chocolate-ball", name: "Sedum 'Chocolate Ball'", x: 5, y: 8, r: 3.5, hue: 35 },
      { mapNo: 2, plantId: "stone-older-caucasian-stonecrop", name: "Older Caucasian Stonecrop", x: 12, y: 8, r: 3.5, hue: 5 },
      { mapNo: 3, plantId: "stone-common-houseleek", name: "Common Houseleek", x: 9, y: 18, r: 3.5, hue: 120 },
      { mapNo: 4, plantId: "stone-six-rowed-stonecrop", name: "Six-rowed Stonecrop", x: 14, y: 27, r: 3.5, hue: 105 },
      { mapNo: 5, plantId: "stone-echeveria-devotion", name: "Echeveria 'Devotion'", x: 21, y: 8, r: 4, hue: 340 },
      { mapNo: 6, plantId: "stone-achillea-king-alfred", name: "Achillea 'King Alfred'", x: 26, y: 27, r: 3.5, hue: 55 },
      { mapNo: 7, plantId: "stone-ajuga-fancy-finch", name: "Ajuga 'Fancy Finch'", x: 30, y: 18, r: 4, hue: 70 },
      { mapNo: 8, plantId: "stone-ajuga-midnight-mystery", name: "Ajuga 'Midnight Mystery'", x: 34, y: 18, r: 4, hue: 325 },
      { mapNo: 9, plantId: "stone-agapanthus", name: "Agapanthus", x: 39, y: 21, r: 4, hue: 255 },
      { mapNo: 10, plantId: "stone-sedum-aureum", name: "Golden Stonecrop 'Aureum'", x: 43, y: 18, r: 4, hue: 75 },
      { mapNo: 11, plantId: "stone-new-zealand-flax-dark", name: "New Zealand Flax (dark)", x: 47, y: 27, r: 4, hue: 0 },
      { mapNo: 12, plantId: "stone-sedum-angelina", name: "Sedum 'Angelina'", x: 50, y: 17, r: 4, hue: 70 },
      { mapNo: 13, plantId: "stone-echeveria", name: "Echeveria", x: 55, y: 18, r: 4, hue: 315 },
      { mapNo: 14, plantId: "stone-sempervivum-arachnoideum", name: "Cobweb Houseleek", x: 58, y: 8, r: 3.5, hue: 150 },
      { mapNo: 15, plantId: "stone-chick-charms-mix", name: "Chick Charms Houseleek Mix", x: 58, y: 27, r: 4, hue: 15 },
      { mapNo: 16, plantId: "stone-houseleeks", name: "Houseleeks", x: 61, y: 18, r: 4, hue: 350 },
      { mapNo: 17, plantId: "stone-sempervivum-purple-quartz", name: "Houseleek 'Purple Quartz'", x: 66, y: 27, r: 4, hue: 310 },
      { mapNo: 18, plantId: "stone-sedum-dragons-blood", name: "Stonecrop 'Dragon's Blood'", x: 70, y: 12, r: 4, hue: 355 },
      { mapNo: 19, plantId: "stone-sedum-atlantis", name: "Sedum 'Atlantis'", x: 77, y: 7, r: 4, hue: 85 },
      { mapNo: 20, plantId: "stone-armeria-armada-white", name: "Thrift 'Armada White'", x: 77, y: 27, r: 4, hue: 95 },
      { mapNo: 21, plantId: "stone-pennisetum-rubrum", name: "Purple Fountain Grass 'Rubrum'", x: 83, y: 8, r: 4, hue: 345 },
      { mapNo: 22, plantId: "stone-hydrangea-snowflake", name: "Hydrangea 'Snowflake'", x: 88, y: 22, r: 5, hue: 15 },
    ],
    patio: [
      { mapNo: 1, plantId: "stone-clematis", name: "Clematis", x: 90, y: 38, r: 10, hue: 320 },
      { mapNo: 2, plantId: "stone-honeysuckle", name: "Honeysuckle", x: 18, y: 58, r: 14, hue: 50 },
    ],
    pear: [
      { name: "Pear Tree", x: 50, y: 50, r: 30, hue: 100 },
    ],
    bigpot1: [
      { name: "Fuchsia", x: 50, y: 25, r: 14, hue: 340 },
      { name: "Verbena", x: 22, y: 55, r: 10, hue: 330 },
      { name: "Calibrachoa", x: 50, y: 65, r: 10, hue: 350 },
      { name: "Nepeta", x: 78, y: 40, r: 9, hue: 250 },
      { name: "Lobelia", x: 20, y: 80, r: 8, hue: 230 },
      { name: "Petunia", x: 75, y: 72, r: 9, hue: 280 },
    ],
    bigpot2: [
      { name: "Lobelia", x: 20, y: 35, r: 10, hue: 230 },
      { name: "Verbena", x: 55, y: 30, r: 10, hue: 330 },
      { name: "Petunia", x: 78, y: 50, r: 10, hue: 280 },
      { name: "Nepeta", x: 50, y: 55, r: 9, hue: 250 },
      { name: "Fuchsia", x: 50, y: 25, r: 12, hue: 340 },
    ],
    littlepot1: [
      { name: "Geranium", x: 45, y: 32, r: 18, hue: 0 },
      { name: "Petunia", x: 50, y: 72, r: 16, hue: 230 },
    ],
    littlepot2: [
      { name: "Coreopsis Gold", x: 50, y: 50, r: 36, hue: 55 },
    ],
    cercispot: [
      { name: "Cercis 'Carolina Sweetheart'", x: 50, y: 50, r: 34, hue: 345 },
    ],
    lobeliapot: [
      { name: "Nemesia 'Lady Penelope'", x: 50, y: 50, r: 34, hue: 335 },
    ],
    bed23wallpot: [
      { name: "Viburnum 'Lisarose'", x: 50, y: 30, r: 24, hue: 340 },
      { name: "Vinca minor 'Illumination'", x: 50, y: 72, r: 22, hue: 85 },
    ],
    viburnumpot: [
      { name: "Viburnum tinus Spirit", x: 50, y: 50, r: 34, hue: 345 },
    ],
    baskets: [
      { name: "Trailing Fuchsia", x: 22, y: 50, r: 16, hue: 340 },
      { name: "Bacopa", x: 52, y: 25, r: 12, hue: 200 },
      { name: "Trailing Lobelia", x: 78, y: 50, r: 12, hue: 230 },
      { name: "Trailing Verbena", x: 50, y: 75, r: 12, hue: 330 },
    ],
    frontpot: [
      { name: "Gazania 'Sunny Side Up'", x: 28, y: 28, r: 16, hue: 60  },
      { name: "Gazania 'Orange Flame'",  x: 72, y: 28, r: 16, hue: 25  },
      { name: "Calibrachoa",             x: 25, y: 72, r: 12, hue: 350 },
      { name: "Bacopa White",            x: 72, y: 72, r: 12, hue: 200 },
    ],
    wallpot1: [
      { name: "Candy House Mix", x: 50, y: 50, r: 36, hue: 350 },
    ],
    wallpot2: [
      { name: "Echinacea 'Mooodz Glory'", x: 50, y: 50, r: 36, hue: 70 },
    ],
    frontBed1: [
      { name: "Hydrangea", x: 68, y: 25, r: 14, hue: 300 },
      { name: "Lavender",  x: 35, y: 78, r: 11, hue: 275 },
    ],
    frontBed2: [
      { name: "Coprosma 'Inferno'", x: 16, y: 24, r: 12, hue: 15 },
      { name: "Coprosma 'Pina Colada'", x: 42, y: 22, r: 12, hue: 75 },
      { name: "Coprosma 'City Knights'", x: 67, y: 28, r: 12, hue: 350 },
      { name: "Hebe 'Kiwi' (Horopito)", x: 25, y: 68, r: 12, hue: 285 },
      { name: "Polemonium 'Golden Feathers'", x: 58, y: 66, r: 10, hue: 70 },
    ],
    frontBed3: [
      { name: "Climbing Rose 'Super Fairy'", x: 26, y: 53, r: 10, hue: 340 },
      { name: "Variegated Dogwood",          x: 58, y: 53, r: 10, hue: 10 },
      { name: "Red Hot Poker",               x: 10, y: 53, r: 9, hue: 25 },
      { name: "Leucothoe 'Little Flames'",   x: 42, y: 53, r: 9, hue: 5 },
      { name: "Rose (pink)",                 x: 90, y: 53, r: 9, hue: 330 },
    ],
    frontBed4: [
      { name: "The Pilgrim", x: 10, y: 12, r: 11, hue: 55 },
      { name: "Physocarpus Cluster 1 (2 × Little Devil)", x: 22, y: 25, r: 8, hue: 345 },
      { name: "Physocarpus Cluster 2 (2 × Lady in Red)", x: 34, y: 17, r: 8, hue: 350 },
      { name: "Rhododendron 'Libretto'", x: 50, y: 28, r: 14, hue: 280 },
      { name: "Magic Carpet", x: 35, y: 43, r: 8, hue: 70 },
      { name: "Physocarpus Cluster 3 (2 × Little Devil + 1 × Lady in Red)", x: 66, y: 14, r: 9, hue: 348 },
      { name: "Purple Gem", x: 56, y: 47, r: 7, hue: 115 },
      { name: "Photinia (existing canopy)", x: 77, y: 34, r: 18, hue: 112 },
      { name: "Festuca 'Elijah Blue' (3 plants)", x: 32, y: 61, r: 12, hue: 215 },
      { name: "Dahlia 'Tampico'", x: 66, y: 69, r: 12, hue: 5 },
      { name: "Verbena 'Margaret's Memory'", x: 50, y: 82, r: 7, hue: 330 },
      { name: "Delosperma 'Ice Cream Mix'", x: 82, y: 72, r: 7, hue: 20 },
      { name: "Pieris 'Polar Passion'", x: 82, y: 56, r: 10, hue: 345 },
      { name: "The Generous Gardener", x: 91, y: 88, r: 11, hue: 345 },
      { name: "Achillea", x: 29, y: 78, r: 9, hue: 15 },
    ],
    frontBed5: [
      { mapNo: 1,  plantId: "frontBed5-bluebell-creeper-sollya",           name: "Bluebell Creeper",                     x: 90, y: 4,  r: 4,   hue: 240 },
      { mapNo: 2,  plantId: "frontBed5-heather-bells-extra-special",       name: "Heather 'Bell's Extra Special'",       x: 72, y: 4,  r: 4,   hue: 75  },
      { mapNo: 3,  plantId: "frontBed5-heather-tib",                       name: "Heather 'Tib'",                        x: 72, y: 10, r: 4,   hue: 325 },
      { mapNo: 4,  plantId: "frontBed5-ceratostigma-plumbaginoides",       name: "Ceratostigma",                         x: 79, y: 17, r: 4.5, hue: 235 },
      { mapNo: 5,  plantId: "frontBed5-bell-heather-providence",           name: "Bell Heather 'Providence' (2 plants)", x: 91, y: 20, r: 4.5, hue: 335 },
      { mapNo: 6,  plantId: "frontBed5-hebe-rhubarb-and-custard",          name: "Hebe 'Rhubarb and Custard'",           x: 91, y: 31, r: 4.5, hue: 340 },
      { mapNo: 7,  plantId: "frontBed4-flaming-silver",                    name: "Flaming Silver",                       x: 82, y: 27, r: 4,   hue: 85  },
      { mapNo: 8,  plantId: "frontBed5-heather-leprechaun",                name: "Heather 'Leprechaun'",                 x: 58, y: 23, r: 4,   hue: 95  },
      { mapNo: 9,  plantId: "frontBed5-hypericum-cultivar-to-confirm",      name: "Hypericum (cultivar to confirm)",      x: 56, y: 30, r: 6.5, hue: 55 },
      { mapNo: 10, plantId: "frontBed4-astrantia-trio",                    name: "Astrantia trio",                       x: 76, y: 37, r: 4,   hue: 335 },
      { mapNo: 11, plantId: "frontBed5-bell-heather-providence",           name: "Bell Heather 'Providence' (2 plants)", x: 66, y: 40, r: 4.5, hue: 335 },
      { mapNo: 12, plantId: "frontBed5-salvia-salgoon-lake-blueberry",      name: "Salvia 'Salgoon Lake Blueberry'",      x: 73, y: 50, r: 7.5, hue: 270 },
      { mapNo: 13, plantId: "frontBed5-little-devil",                      name: "Little Devil",                         x: 88, y: 40, r: 4,   hue: 345 },
      { mapNo: 14, plantId: "frontBed5-heather-winter-chocolate",          name: "Heather 'Winter Chocolate'",           x: 54, y: 38, r: 4,   hue: 45  },
      { mapNo: 15, plantId: "frontBed5-gaura-gaudi-red",                   name: "Gaura 'Gaudi Red'",                    x: 54, y: 50, r: 6,   hue: 350 },
      { mapNo: 16, plantId: "frontBed5-euphorbia-ascot-petite",            name: "Euphorbia 'Ascot Petite'",             x: 32, y: 49, r: 5.5, hue: 80  },
      { mapNo: 17, plantId: "frontBed5-hydrangea-bloody-marie",            name: "Hydrangea 'Bloody Marie'",             x: 18, y: 47, r: 6.5, hue: 345 },
      { mapNo: 18, plantId: "frontBed5-pittosporum-tom-thumb",             name: "Pittosporum 'Tom Thumb'",              x: 24, y: 64, r: 6.5, hue: 320 },
      { mapNo: 19, plantId: "frontBed5-bay-tree",                          name: "Bay Tree",                             x: 47, y: 59, r: 11,  hue: 125 },
      { mapNo: 20, plantId: "frontBed5-japanese-skimmia",                  name: "Japanese Skimmia",                     x: 54, y: 74, r: 8,   hue: 120 },
      { mapNo: 21, plantId: "frontBed5-mexican-orange-blossom",            name: "Mexican Orange Blossom",               x: 65, y: 89, r: 12,  hue: 70  },
      { mapNo: 22, plantId: "frontBed5-hardy-fuchsia",                     name: "Hardy Fuchsia (cultivar to confirm)",  x: 86, y: 69, r: 9,   hue: 335 },
      { mapNo: 23, plantId: "frontBed5-clematis",                          name: "Clematis (cultivar to confirm)",       x: 90, y: 90, r: 6,   hue: 285 },
    ],
    frontPots: [
      { mapNo: "P1", plantId: "frontPots-mixed-pot",   name: "Mixed Pot",   x: 30, y: 50, r: 19, hue: 65  },
      { mapNo: "P2", plantId: "frontPots-fuchsia-pot", name: "Fuchsia Pot", x: 70, y: 50, r: 22, hue: 335 },
    ],
    frontStone: [
      { name: "Hosta", x: 50, y: 50, r: 22, hue: 105 },
    ],
    frontBoxHedge: [
      { name: "Wall Cotoneaster (species to confirm)", x: 50, y: 50, r: 24, hue: 130 },
    ],
    frontHedge: [
      { name: "Hedge (to identify)", x: 50, y: 50, r: 22, hue: 120 },
    ],
    frontApple: [
      { name: "Apple Tree",  x: 35, y: 42, r: 24, hue: 110 },
      { name: "Damson Tree", x: 68, y: 62, r: 23, hue: 125 },
    ],
    frontGateTree: [
      { name: "Weeping Crab Apple (cultivar to confirm)", x: 50, y: 50, r: 30, hue: 105 },
    ],
  };

  // Child areas shown inside a parent folio rather than as separate markers
  // on the main garden plan. Each remains a normal zone with its own plants,
  // photographs and care pages.
  const NESTED_ZONE_MAPS = {
    bed1: [
      { name: "Big Pot 2", marker: "P2", zoneKey: "bigpot2", x: 88, y: 15, r: 7, hue: 240 },
    ],
    patio: [
      { name: "Big Pot 1", marker: "P1", zoneKey: "bigpot1", x: 22, y: 18, r: 8, hue: 240 },
    ],
    steps: [
      { name: "Cercis Pot", marker: "C", zoneKey: "cercispot", x: 10, y: 10, r: 8, hue: 30 },
      { name: "Viburnum Pot", marker: "V", zoneKey: "viburnumpot", x: 90, y: 10, r: 8, hue: 235 },
      { name: "Nemesia Pot", marker: "N", zoneKey: "lobeliapot", x: 20, y: 32, r: 7, hue: 335 },
      { name: "Little Pot 2", marker: "L2", zoneKey: "littlepot2", x: 65, y: 30, r: 6, hue: 240 },
      { name: "Echinacea Pot", marker: "E", zoneKey: "wallpot2", x: 83, y: 30, r: 6, hue: 70 },
      { name: "Little Pot 1", marker: "L1", zoneKey: "littlepot1", x: 83, y: 46, r: 6, hue: 240 },
      { name: "Wall Pot — Candy House", marker: "W", zoneKey: "wallpot1", x: 83, y: 86, r: 6, hue: 350 },
    ],
    lounge: [
      { name: "Hanging Baskets", marker: "HB", zoneKey: "baskets", x: 20, y: 80, r: 9, hue: 25 },
    ],
  };

  // Stable plant identity. Display names can change after an identification,
  // but these zone-scoped IDs remain unique and are used by maps, calendars,
  // watering links and photo journals.
  const slugify = (value) => String(value)
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const PLANT_BY_ID = {};
  const PLANT_ID_BY_ZONE_AND_NAME = {};
  Object.entries(ZONES).forEach(([zoneKey, zone]) => {
    if (!zone.plantKey) return;
    const zonePlants = PLANTS[zone.plantKey] || [];
    PLANT_ID_BY_ZONE_AND_NAME[zoneKey] = {};
    zonePlants.forEach((plant) => {
      plant.id = plant.id || `${zoneKey}-${slugify(plant.name)}`;
      if (PLANT_BY_ID[plant.id]) throw new Error(`Duplicate plant id: ${plant.id}`);
      PLANT_BY_ID[plant.id] = { plant, zoneKey, plantKey: zone.plantKey };
      PLANT_ID_BY_ZONE_AND_NAME[zoneKey][plant.name] = plant.id;
    });
    (BED_PLANT_MAPS[zoneKey] || []).forEach((pin) => {
      pin.plantId = pin.plantId || PLANT_ID_BY_ZONE_AND_NAME[zoneKey][pin.name] || null;
    });
  });

  // Migrate the original name-keyed journals to stable IDs. Ambiguous common
  // names are attached explicitly to the photographed specimen only.
  const PLANT_PHOTOS_BY_ID = {};
  Object.entries(PLANT_PHOTOS).forEach(([plantName, entries]) => {
    const matches = Object.values(PLANT_ID_BY_ZONE_AND_NAME)
      .map((names) => names[plantName])
      .filter(Boolean);
    if (matches.length === 1) PLANT_PHOTOS_BY_ID[matches[0]] = entries;
  });
  const journalZoneOverrides = {
    "Angel Wings": "bed1",
    "Apple Tree": "bed4",
    "Hosta 'Patriot'": "bed1",
  };
  Object.entries(journalZoneOverrides).forEach(([plantName, zoneKey]) => {
    const plantId = (PLANT_ID_BY_ZONE_AND_NAME[zoneKey] || {})[plantName];
    if (plantId && PLANT_PHOTOS[plantName]) PLANT_PHOTOS_BY_ID[plantId] = PLANT_PHOTOS[plantName];
  });
  const julyJournal = (photos) => [{ month: "jul-2026", label: "July 2026", photos }];
  const augustJournal = (photos) => [{ month: "aug-2026", label: "August 2026", photos }];
  PLANT_PHOTOS_BY_ID["cercispot-cercis-carolina-sweetheart"] = augustJournal([
    { src: "images/aug-2026/cercis-carolina-sweetheart-pot.jpeg", caption: "The complete potted tree in its new position" },
    { src: "images/aug-2026/cercis-carolina-sweetheart-label.jpeg", caption: "Retained Carolina Sweetheart plant label" },
    { src: "images/aug-2026/cercis-carolina-sweetheart-foliage-1.jpeg", caption: "Maroon, cream, green and pink heart-shaped leaves" },
    { src: "images/aug-2026/cercis-carolina-sweetheart-foliage-2.jpeg", caption: "Variegated foliage in strong August light" },
  ]);
  PLANT_PHOTOS_BY_ID["wallpot2-echinacea-mooodz-glory"] = augustJournal([
    { src: "images/aug-2026/echinacea-mooodz-glory-1.jpeg", caption: "Mooodz Glory newly planted in the blue pot" },
    { src: "images/aug-2026/echinacea-mooodz-glory-2.jpeg", caption: "White ray florets and golden-green cones" },
  ]);
  PLANT_PHOTOS_BY_ID["wallpot2-coreopsis-gold"] = [
    { month: "aug-2026", label: "August 2026 · moved to Little Pot 2", photos: [
      { src: "images/aug-2026/little-pot-2-coreopsis-1.jpeg", caption: "Coreopsis moved into Little Pot 2" },
      { src: "images/aug-2026/little-pot-2-coreopsis-2.jpeg", caption: "Golden flowers filling the square blue pot" },
      { src: "images/aug-2026/little-pot-2-coreopsis-3.jpeg", caption: "Little Pot 2 in its new stair-wall position" },
    ]},
    { month: "june-2026", label: "June 2026 · former pot", photos: [
      { src: "images/june-2026-update-2/coreopsis-gold-1.webp", caption: "Coreopsis in its former pot" },
      { src: "images/june-2026-update-2/coreopsis-gold-2.webp", caption: "Top-down view before the August move" },
    ]},
  ];
  PLANT_PHOTOS_BY_ID["frontBed2-coprosma-city-knights"] = augustJournal([
    { src: "images/aug-2026/front-bed2-coprosma-city-knights-1.jpeg", caption: "Glossy burgundy-red foliage in Front Bed 2" },
    { src: "images/aug-2026/front-bed2-coprosma-city-knights-2.jpeg", caption: "City Knights newly planted against the hedge" },
    { src: "images/aug-2026/front-bed2-coprosma-city-knights-label.jpeg", caption: "Retained Coprosma 'City Knights' label" },
  ]);
  PLANT_PHOTOS_BY_ID["bed4-achillea"] = [
    ...augustJournal([
      { src: "images/aug-2026-front-garden/front-bed4-achillea-planted.jpeg", caption: "Achillea Summer Berries planted in Front Bed 4" },
    ]),
    { month: "june-2026", label: "June 2026 · former Back Bed 4 position", photos: [
      { src: "images/june-2026-updates/achillea.webp", caption: "Achillea before its August move to the front garden" },
    ]},
  ];
  PLANT_PHOTOS_BY_ID["frontBed4-physocarpus-cluster-1"] = [
    ...augustJournal([
    { src: "images/aug-2026-front-garden/front-bed4-physocarpus-cluster-1.jpeg", caption: "Cluster 1 — two established Little Devils grouped together" },
    { src: "images/aug-2026-front-garden/front-bed4-physocarpus-clusters-1-2.jpeg", caption: "Clusters 1 and 2 along the wall" },
    ]),
    { month: "jul-2026", label: "July 2026 · before the cluster layout", photos: [
      { src: "images/jul-2026/front-bed-4-little-devil-1.jpeg", caption: "The first retained Little Devil before regrouping" },
      { src: "images/jul-2026/front-bed-4-little-devil-2.jpeg", caption: "The second retained Little Devil before regrouping" },
    ]},
  ];
  PLANT_PHOTOS_BY_ID["frontBed4-physocarpus-cluster-2"] = augustJournal([
    { src: "images/aug-2026-front-garden/front-bed4-physocarpus-cluster-2.jpeg", caption: "Cluster 2 — two newly planted Lady in Reds" },
    { src: "images/aug-2026-front-garden/front-bed4-physocarpus-clusters-1-2.jpeg", caption: "Clusters 1 and 2 along the wall" },
  ]);
  PLANT_PHOTOS_BY_ID["frontBed4-physocarpus-cluster-3"] = augustJournal([
    { src: "images/aug-2026-front-garden/front-bed4-physocarpus-cluster-3-1.jpeg", caption: "Cluster 3 — two Little Devils with one Lady in Red" },
    { src: "images/aug-2026-front-garden/front-bed4-physocarpus-cluster-3-2.jpeg", caption: "The new mixed Physocarpus cluster from the stepping route" },
  ]);
  PLANT_PHOTOS_BY_ID["frontBed4-purple-gem"] = augustJournal([
    { src: "images/aug-2026-front-garden/front-bed4-purple-gem-moved.jpeg", caption: "Purple Gem in one of the former Lady in Red positions" },
  ]);
  PLANT_PHOTOS_BY_ID["frontBed4-rhododendron-libretto"] = augustJournal([
    { src: "images/aug-2026-front-garden/front-bed4-rhododendron-libretto-1.jpeg", caption: "Rhododendron 'Libretto' newly planted in the shaded corner" },
    { src: "images/aug-2026-front-garden/front-bed4-rhododendron-libretto-2.jpeg", caption: "Evergreen foliage and developing buds" },
  ]);
  PLANT_PHOTOS_BY_ID["frontBed5-little-devil"] = augustJournal([
    { src: "images/aug-2026-front-garden/front-bed5-little-devil.jpeg", caption: "The spare Little Devil newly planted in Front Bed 5" },
  ]);
  PLANT_PHOTOS_BY_ID["bed1-abelia-kaleidoscope"] = augustJournal([
    { src: "images/aug-2026-big-changes/bed1-abelia-kaleidoscope-1.webp", caption: "The new Abelia 'Kaleidoscope' in Back Bed 1" },
    { src: "images/aug-2026-big-changes/bed1-abelia-kaleidoscope-2.webp", caption: "Variegated Abelia foliage" },
    { src: "images/aug-2026-big-changes/bed1-abelia-kaleidoscope-3.webp", caption: "The planted shrub in its Bed 1 setting" },
  ]);
  PLANT_PHOTOS_BY_ID["bed1-pieris-forest-flame"] = augustJournal([
    { src: "images/aug-2026-big-changes/bed1-pieris-forest-flame-1.webp", caption: "Pieris 'Forest Flame' newly planted in Back Bed 1" },
    { src: "images/aug-2026-big-changes/bed1-pieris-forest-flame-2.webp", caption: "Fresh Pieris foliage" },
    { src: "images/aug-2026-big-changes/bed1-pieris-forest-flame-3.webp", caption: "Forest Flame in the Bed 1 planting" },
  ]);
  PLANT_PHOTOS_BY_ID["bed2-sedum-rose-carpet"] = augustJournal([
    { src: "images/aug-2026-big-changes/bed2-sedum-rose-carpet-planted.webp", caption: "Sedum 'Rose Carpet' planted at Bed 3 position 1" },
    { src: "images/aug-2026-big-changes/bed2-sedum-rose-carpet-label.webp", caption: "Retained Rose Carpet label" },
  ]);
  PLANT_PHOTOS_BY_ID["lobeliapot-nemesia-lady-penelope"] = augustJournal([
    { src: "images/aug-2026-big-changes/nemesia-lady-penelope-1.webp", caption: "The unidentified Nemesia moved into the former Lobelia pot" },
    { src: "images/aug-2026-big-changes/nemesia-lady-penelope-2.webp", caption: "Pink-and-white flowers supporting the assumed Lady Penelope identification" },
  ]);
  PLANT_PHOTOS_BY_ID["bed1-nemesia"] = [
    ...augustJournal([
      { src: "images/aug-2026-big-changes/bed5-big-pot-nemesia-aroma-1.webp", caption: "Aroma Heart of Gold moved into the Bed 5 big pot" },
      { src: "images/aug-2026-big-changes/bed5-big-pot-nemesia-aroma-2.webp", caption: "The Nemesia among its new pot companions" },
    ]),
    ...julyJournal([
      { src: "images/jul-2026/july-update-bed1-nemesia-aroma-heart-of-gold-1.webp", caption: "Aroma Heart of Gold in its former Bed 1 position" },
      { src: "images/jul-2026/july-update-bed1-nemesia-aroma-heart-of-gold-2.webp", caption: "Burgundy, cream and yellow flowers before the move" },
    ]),
  ];
  PLANT_PHOTOS_BY_ID["bed23wallpot-viburnum-lisarose"] = augustJournal([
    { src: "images/aug-2026-big-changes/bed23-wallpot-viburnum-lisarose-1.webp", caption: "Viburnum 'Lisarose' in the new shared-wall pot" },
    { src: "images/aug-2026-big-changes/bed23-wallpot-viburnum-lisarose-2.webp", caption: "Evergreen Lisarose foliage" },
    { src: "images/aug-2026-big-changes/bed23-wallpot-viburnum-lisarose-3.webp", caption: "The Viburnum and trailing Vinca together" },
  ]);
  PLANT_PHOTOS_BY_ID["bed23wallpot-vinca-minor-illumination"] = augustJournal([
    { src: "images/aug-2026-big-changes/bed23-wallpot-vinca-illumination-1.webp", caption: "The additional Vinca minor 'Illumination' in the wall pot" },
    { src: "images/aug-2026-big-changes/bed23-wallpot-vinca-illumination-2.webp", caption: "Cream-and-green Vinca foliage" },
    { src: "images/aug-2026-big-changes/bed23-wallpot-vinca-illumination-3.webp", caption: "Trailing Vinca at the pot edge" },
  ]);
  PLANT_PHOTOS_BY_ID["viburnumpot-viburnum-tinus-spirit"] = augustJournal([
    { src: "images/aug-2026-big-changes/viburnum-pot-spirit-1.webp", caption: "Viburnum tinus Spirit in its new garden pot" },
    { src: "images/aug-2026-big-changes/viburnum-pot-spirit-2.webp", caption: "The new potted Viburnum beside Bed 4" },
    { src: "images/aug-2026-big-changes/viburnum-pot-spirit-label.webp", caption: "Retained Spirit plant label" },
  ]);
  PLANT_PHOTOS_BY_ID["lobeliapot-lobelia-starship-scarlet-bronze-leaf"] = augustJournal([
    { src: "images/aug-2026-big-changes/bed4-lobelia-starship-1.webp", caption: "Starship Scarlet Bronze Leaf replanted in Bed 4" },
    { src: "images/aug-2026-big-changes/bed4-lobelia-starship-2.webp", caption: "Scarlet spikes and bronze foliage in the bed" },
  ]);
  PLANT_PHOTOS_BY_ID["house-hallway-kentia-palm"] = julyJournal([
    { src: "images/house-plants/jul-2026/kentia-palm-hallway-hero.webp", caption: "Kentia palm beside the ground-floor staircase" },
    { src: "images/house-plants/jul-2026/kentia-palm-hallway-context.webp", caption: "The full grouped specimen in its hallway position" },
    { src: "images/house-plants/jul-2026/kentia-palm-hallway-detail.webp", caption: "Broad, dark-green arching leaflets supporting the Kentia identification" },
    { src: "images/house-plants/jul-2026/kentia-palm-hallway-condition.webp", caption: "July 2026 condition baseline — brown tips and irregular patches" },
  ]);
  PLANT_PHOTOS_BY_ID["frontBed5-climber-unidentified"] = julyJournal([
    { src: "images/jul-2026/front-260725-bed-5-shrub-rose-1.webp", caption: "Established shrub rose in Front Bed 5" },
    { src: "images/jul-2026/front-260725-bed-5-shrub-rose-2.webp", caption: "Shrub rose foliage and hips" },
    { src: "images/jul-2026/front-260725-bed-5-shrub-rose-3.webp", caption: "Red-orange rose hips after flowering" },
  ]);
  PLANT_PHOTOS_BY_ID["frontBed5-bay-tree"] = julyJournal([
    { src: "images/jul-2026/front-260725-bed-5-bay-tree-1-1.webp", caption: "Established bay tree" },
  ]);
  PLANT_PHOTOS_BY_ID["frontBed5-japanese-skimmia"] = julyJournal([
    { src: "images/jul-2026/front-260725-bed-5-japanese-skimmia-2-1.webp", caption: "Japanese skimmia — corrected identification" },
    { src: "images/jul-2026/front-260725-bed-5-japanese-skimmia-2-2.webp", caption: "Evergreen habit and foliage" },
  ]);
  PLANT_PHOTOS_BY_ID["frontBed5-hardy-fuchsia"] = julyJournal([
    { src: "images/jul-2026/front-260725-bed-5-hardy-fuchsia-1-1.webp", caption: "Established hardy fuchsia" },
    { src: "images/jul-2026/front-260725-bed-5-hardy-fuchsia-1-2.webp", caption: "Pendant flowers" },
  ]);
  PLANT_PHOTOS_BY_ID["frontBed5-clematis"] = julyJournal([
    { src: "images/jul-2026/front-260725-bed-5-clematis-1.webp", caption: "Clematis on its support" },
    { src: "images/jul-2026/front-260725-bed-5-clematis-2.webp", caption: "Clematis foliage and stems" },
    { src: "images/jul-2026/front-260725-bed-5-clematis-3.webp", caption: "Close identification view" },
  ]);
  PLANT_PHOTOS_BY_ID["frontBed5-honeysuckle"] = julyJournal([
    { src: "images/jul-2026/front-260725-bed-5-honey-suckle.webp", caption: "Established honeysuckle" },
  ]);
  PLANT_PHOTOS_BY_ID["frontBed5-pieris-polar-passion"] = julyJournal([
    { src: "images/jul-2026/front-260725-bed-5-pieris-japonica-polar-passion-1.webp", caption: "Pieris 'Polar Passion'" },
    { src: "images/jul-2026/front-260725-bed-5-pieris-japonica-polar-passion-2.webp", caption: "Evergreen foliage" },
    { src: "images/jul-2026/front-260725-bed-5-pieris-japonica-polar-passion-3.webp", caption: "Plant and retained label" },
  ]);
  PLANT_PHOTOS_BY_ID["frontBed5-pieris-polar-passion"].unshift({ month: "aug-2026", label: "August 2026", photos: [{ src: "images/aug-2026-small-changes/front-bed4-pieris-polar-passion-move-1.jpeg", caption: "Moved into Front Bed 4" }] });
  PLANT_PHOTOS_BY_ID["frontBed4-dahlia-tampico"] = [{ month: "aug-2026", label: "August 2026", photos: [{ src: "images/aug-2026-small-changes/front-bed4-dahlia-tampico-1.jpeg", caption: "Dahlia 'Tampico' newly planted" }] }];
  PLANT_PHOTOS_BY_ID["frontBed4-verbena-margarets-memory"] = [{ month: "aug-2026", label: "August 2026", photos: [{ src: "images/aug-2026-small-changes/front-bed4-verbena-margarets-memory-1.jpeg", caption: "Verbena 'Margaret's Memory' newly planted" }] }];
  PLANT_PHOTOS_BY_ID["frontBed5-hydrangea-bloody-marie"] = [{ month: "aug-2026", label: "August 2026", photos: [{ src: "images/aug-2026-small-changes/front-bed5-hydrangea-bloody-marie-1.jpeg", caption: "Hydrangea 'Bloody Marie' newly planted" }] }];
  PLANT_PHOTOS_BY_ID["frontBed5-euphorbia-ascot-petite"] = [{ month: "aug-2026", label: "August 2026", photos: [{ src: "images/aug-2026-small-changes/front-bed5-euphorbia-ascot-petite-1.jpeg", caption: "Euphorbia 'Ascot Petite' newly planted" }] }];
  PLANT_PHOTOS_BY_ID["frontBed5-pittosporum-tom-thumb"] = julyJournal([
    { src: "images/jul-2026/front-260725-bed-5-pittosporum-tenuifolium-tom-thumb-1.webp", caption: "Pittosporum 'Tom Thumb'" },
    { src: "images/jul-2026/front-260725-bed-5-pittosporum-tenuifolium-tom-thumb-2.webp", caption: "Purple mature foliage" },
    { src: "images/jul-2026/front-260725-bed-5-pittosporum-tenuifolium-tom-thumb-3.webp", caption: "Compact habit in Front Bed 5" },
  ]);
  PLANT_PHOTOS_BY_ID["frontBed5-gaura-gaudi-red"] = julyJournal([
    { src: "images/jul-2026/front-260725-bed-5-gaura-goudi-red-1.webp", caption: "Gaura 'Gaudi Red'" },
    { src: "images/jul-2026/front-260725-bed-5-gaura-goudi-red-2.webp", caption: "Deep pink-red flowers" },
  ]);
  PLANT_PHOTOS_BY_ID["frontApple-apple-tree"] = julyJournal([
    { src: "images/jul-2026/front-260725-fruit-trees-apple-tree-1.webp", caption: "Front-garden apple tree" },
    { src: "images/jul-2026/front-260725-fruit-trees-apple-tree-3.webp", caption: "Developing apples" },
    { src: "images/jul-2026/front-260725-fruit-trees-apple-tree-4.webp", caption: "Fruit and foliage detail" },
  ]);
  PLANT_PHOTOS_BY_ID["frontApple-damson-tree"] = julyJournal([
    { src: "images/jul-2026/front-260725-fruit-trees-damson-tree-1.webp", caption: "Damson tree beside the apple" },
    { src: "images/jul-2026/front-260725-fruit-trees-damson-tree-3.webp", caption: "Developing damsons" },
    { src: "images/jul-2026/front-260725-fruit-trees-damson-tree-4.webp", caption: "Damson fruit and foliage detail" },
  ]);
  PLANT_PHOTOS_BY_ID["frontGateTree-weeping-crab-apple"] = julyJournal([
    { src: "images/jul-2026/front-260725-gateway-tree.webp", caption: "Gate Tree at the drive entrance" },
    { src: "images/jul-2026/front-260725-gateway-tree-2.webp", caption: "Weeping branches and developing crab apples" },
    { src: "images/jul-2026/front-260725-gateway-tree-fruit-1.webp", caption: "Small developing crab apples and Malus foliage" },
    { src: "images/jul-2026/front-260725-gateway-tree-fruit-2.webp", caption: "Fruit detail supporting Malus with very high confidence" },
    { src: "images/jul-2026/front-260725-gateway-tree-habit-3.webp", caption: "Pendulous canopy supporting a weeping crab apple with high confidence" },
  ]);

  // Cards and galleries use lightweight display derivatives. Originals stay
  // available for the full-screen lightboxes, and components fall back to
  // them automatically if a newly added thumbnail has not been generated yet.
  const thumbnailFor = (src) => {
    if (!src || !src.startsWith("images/") || src.startsWith("images/thumbs/")) return src;
    return src
      .replace(/^images\//, "images/thumbs/")
      .replace(/\.(?:jpe?g|webp)$/i, ".webp");
  };

  return {
    ZONES,
    PLANTS,
    PHOTOS_BY_MONTH,
    PLANT_PHOTOS,
    PLANT_PHOTOS_BY_ID,
    PLANT_BY_ID,
    PLANT_ID_BY_ZONE_AND_NAME,
    BED_PLANT_MAPS,
    NESTED_ZONE_MAPS,
    thumbnailFor,
  };
})();
