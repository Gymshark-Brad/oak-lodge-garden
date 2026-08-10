// Oak Lodge Garden — watering-data.js
// Moisture-check priority band (1–5) per plant, keyed the same way as PLANTS in data.js.
// Registered onto window.OAK.WATER_BANDS / window.OAK.WATER_BAND_INFO.
//
// Bands:
// These are prompts to inspect moisture, never automatic watering instructions.

(function () {
  const WATER_BANDS = {
    "Bed 1": {
      "Japanese Maple 'Bloodgood'": 3,
      "Japanese Aralia": 3,
      "Rhododendron": 3,
      "Hosta 'Patriot'": 3,
      "Box Hedging": 2,
      "Euonymus 'Emerald 'n' Gold'": 2,
      "Wintercreeper 'Emerald Gaiety'": 2,
      "Dahlia 'Double Dreamy Lilac'": 4,
      "Dahlia 'Double Dreamy Gold'": 4,
      "Hosta (gold)": 3,
      "Little Heath": 2,
      "Abelia 'Kaleidoscope'": 3,
      "Pieris 'Forest Flame'": 3,
    },
    "Bed 2": {
      "Weeping Cherry": 3,
      "Peony": 3,
      "Sedum 'Rose Carpet'": 1,
      "Weigela": 3,
      "Silverbush": 1,
      "Maiden Pink": 1,
      "Hydrangea petiolaris": 4,
      "Euonymus 'Emerald Gaiety'": 2,
      "Avens": 3,
      "Hebe": 3,
    },
    "Bed 3": {
      "Kerria": 3,
      "Forget-me-not": 3,
      "Centaurea 'Snowy Owl'": 2,
      "Spiraea 'Double Play Big Bang'": 3,
    },
    "Bed 4": {
      "Apple Tree": 2,
      "Callistemon Inferno ('Yanferno')": 3,
      "Lobelia 'Starship Scarlet Bronze Leaf'": 4,
      "Gaillardia": 2,
      "Abelia 'Kaleidoscope'": 3,
      "Celosia": 4,
    },
    "Bed 5": {
      "Wisteria": 1,
      "Rose": 3,
      "New Zealand Flax (cultivar to confirm)": 1,
      "Alstroemeria": 4,
      "Petunia 'Bee's Knees'": 4,
      "Vinca minor 'Illumination'": 3,
      "Nemesia": 4,
      "Lythrum 'Robin'": 4,
      "Begonia 'Carmen'": 4,
      "Nemesia 'Aroma Heart of Gold'": 4,
    },
    "Stone Bed": {
      "Houseleeks": 1,
      "Echeveria": 1,
      "Sedum 'Chocolate Ball'": 1,
      "Older Caucasian Stonecrop": 1,
      "Common Houseleek": 1,
      "Six-rowed Stonecrop": 1,
      "Ajuga 'Fancy Finch'": 3,
      "Hydrangea 'Snowflake'": 4,
      "Chick Charms Houseleek Mix": 1,
      "Achillea 'King Alfred'": 1,
      "Golden Stonecrop 'Aureum'": 1,
      "Cobweb Houseleek": 1,
      "Thrift 'Armada White'": 2,
      "Houseleek 'Purple Quartz'": 1,
      "Sedum 'Angelina'": 1,
      "Stonecrop 'Dragon's Blood'": 1,
      "Echeveria 'Devotion'": 1,
      "Sedum 'Atlantis'": 1,
      "Purple Fountain Grass 'Rubrum'": 3,
      "Ajuga 'Midnight Mystery'": 3,
      "New Zealand Flax (dark)": 2,
      "Cabbage Tree": 2,
    },
    "Patio": {
      "Honeysuckle": 3,
      "Clematis": 3,
    },
    "Tree": {
      "Pear Tree": 1,
    },
    "Big Pot 1": {
      "Fuchsia": 5,
      "Verbena": 4,
      "Calibrachoa": 5,
      "Nepeta": 2,
      "Lobelia": 5,
      "Petunia": 4,
    },
    "Big Pot 2": {
      "Lobelia": 5,
      "Verbena": 4,
      "Petunia": 4,
      "Nepeta": 2,
      "Fuchsia": 5,
    },
    "Little Pot 1": {
      "Geranium": 3,
      "Petunia": 4,
    },
    "Little Pot 2": {
      "Coreopsis Gold": 3,
    },
    "Cercis Pot": {
      "Cercis 'Carolina Sweetheart'": 4,
    },
    "Nemesia Pot": {
      "Nemesia 'Lady Penelope'": 4,
    },
    "Bed 2/3 Wall Pot": {
      "Viburnum 'Lisarose'": 3,
      "Vinca minor 'Illumination'": 3,
    },
    "Viburnum Pot": {
      "Viburnum tinus Spirit": 3,
    },
    "Front Pot": {
      "Gazania 'Sunny Side Up'": 2,
      "Gazania 'Orange Flame'": 2,
      "Calibrachoa": 5,
      "Bacopa White": 4,
    },
    "Wall Pot 1": {
      "Candy House Mix": 5,
    },
    "Wall Pot 2": {
      "Echinacea 'Mooodz Glory'": 3,
    },
    "Baskets": {
      "Trailing Fuchsia": 5,
      "Bacopa": 4,
      "Trailing Lobelia": 5,
      "Trailing Verbena": 4,
    },
    "Front Bed 1": {
      "Hydrangea": 4, "Lavender": 1,
    },
    "Front Bed 2": {
      "Coprosma 'Inferno'": 2,
      "Coprosma 'Pina Colada'": 2,
      "Coprosma 'City Knights'": 3,
      "Hebe 'Kiwi' (Horopito)": 3,
      "Polemonium 'Golden Feathers'": 3,
    },
    "Front Bed 3": {
      "Climbing Rose 'Super Fairy'": 3,
      "Variegated Dogwood": 4,
      "Red Hot Poker": 2,
      "Leucothoe 'Little Flames'": 3,
      "Rose (pink)": 3,
    },
    "Front Bed 4": {
      "Photinia (existing canopy)": 2,
      "The Pilgrim": 3, "The Generous Gardener": 3,
      "Physocarpus Cluster 1 (2 × Little Devil)": 3,
      "Physocarpus Cluster 2 (2 × Lady in Red)": 3,
      "Physocarpus Cluster 3 (2 × Little Devil + 1 × Lady in Red)": 3,
      "Magic Carpet": 2, "Purple Gem": 2, "Flaming Silver": 3,
      "Rhododendron 'Libretto'": 3,
      "Festuca 'Elijah Blue' (3 plants)": 1,
      "Astrantia trio": 3,
      "Delosperma 'Ice Cream Mix'": 1,
      "Achillea": 2,
    },
    "Front Bed 5": {
      "Cherry Laurel": 2,
      "Mexican Orange Blossom": 2,
      "Shrub Rose (cultivar to confirm)": 3,
      "Bay Tree": 2,
      "Japanese Skimmia": 3,
      "Hardy Fuchsia (cultivar to confirm)": 3,
      "Clematis (cultivar to confirm)": 3,
      "Honeysuckle (cultivar to confirm)": 3,
      "Pieris 'Polar Passion'": 3,
      "Pittosporum 'Tom Thumb'": 2,
      "Gaura 'Gaudi Red'": 2,
      "Heather 'Bell's Extra Special'": 2,
      "Heather 'Tib'": 2,
      "Bell Heather 'Providence' (2 plants)": 3,
      "Heather 'Leprechaun'": 2,
      "Heather 'Winter Chocolate'": 2,
      "Ceratostigma": 2,
      "Hypericum (cultivar to confirm)": 2,
      "Bluebell Creeper": 3,
      "Hebe 'Rhubarb and Custard'": 2,
      "Salvia 'Salgoon Lake Blueberry'": 2,
      "Little Devil": 3,
    },
    "Front Stone Trough": {
      "Hosta": 4,
    },
    "Front Box Hedge": {
      "Wall Cotoneaster (species to confirm)": 2,
    },
    "Front Hedge": {
      "Hedge (to identify)": 2,
    },
    "Front Fruit Trees": {
      "Apple Tree": 2,
      "Damson Tree": 2,
    },
    "Front Gate Tree": {
      "Weeping Crab Apple (cultivar to confirm)": 2,
    },
    "House · Hallway · Kentia Palm": {
      "Kentia Palm — assumed": 3,
    },
  };

  const WATER_BAND_INFO = {
    5: {
      label: "Check daily",
      chip: "check daily",
      everyDays: "Check daily",
      freq: "Check compost daily in warm or windy weather; water only when the moisture test says it is needed.",
      days: [1, 1, 1, 1, 1, 1, 1],
    },
    4: {
      label: "Check 2–3× a week",
      chip: "check 2–3×",
      everyDays: "Check every 2–3 days",
      freq: "Inspect two or three times a week, increasing checks in heat or wind; do not water automatically.",
      days: [1, 0, 1, 0, 1, 0, 0],
    },
    3: {
      label: "Check weekly",
      chip: "check weekly",
      everyDays: "Check weekly",
      freq: "Check the root zone about weekly in dry weather. Established border plants may need no water after rain.",
      days: [0, 0, 0, 0, 0, 0, 1],
    },
    2: {
      label: "Check in dry spells",
      chip: "dry spells",
      everyDays: "Check during dry spells",
      freq: "Established plants usually cope without routine watering; inspect during prolonged dry spells.",
      days: [0, 0, 0, 0, 0, 0, 1],
    },
    1: {
      label: "Check only if stressed",
      chip: "stress check",
      everyDays: "Check only if stressed",
      freq: "Drought-tolerant or wet-sensitive: leave alone unless the plant shows stress and the root zone is dry.",
      days: [0, 0, 0, 0, 0, 0, 0],
    },
  };

  // What to check before watering, and the explicit over- vs under-watering
  // signs, per plant. Keyed exactly like WATER_BANDS. Each entry gives a soil
  // depth to test plus a concrete symptom for each direction — for the very
  // drought-tolerant plants, overwatering (rot, blackened stems) is the real
  // risk, not underwatering. Recently planted/moved (June 2026) entries carry
  // an establishment note, since a new plant needs more frequent checks than
  // its long-term band suggests until it's rooted in.
  const WATER_SIGNS = {
    "Bed 1": {
      "Japanese Maple 'Bloodgood'": {
        under: "Check moisture about 15cm down near the root zone, not just the surface — raised beds dry faster than open ground. Leaf scorch or curling at the edges in hot spells is the clearest sign.",
        over: "A sudden flush of yellow leaves out of autumn season, or black, mushy patches at the base of the trunk, means it's sitting too wet.",
      },
      "Japanese Aralia": {
        under: "Push a finger in and water once the top 2–3cm has dried out. Drooping, dull leaves mean it's thirsty.",
        over: "Yellowing lower leaves with soft, blackened stems mean it's been kept too wet.",
      },
      "Rhododendron": {
        under: "Shallow-rooted — check the top 5–8cm. Leaves curling downward and still curled first thing in the morning (not just at midday) means it needs water.",
        over: "Yellowing leaves that drop despite moist soil, or soft dark patches at the base, point to waterlogging — a common problem in ericaceous soil that's too wet.",
      },
      "Hosta 'Patriot'": {
        under: "Feel the soil under the mulch; water once the top 4–5cm is dry. Leaves turning pale, thin and papery, or scorching at the tips, is the sign — slug damage can look similar, so check the soil first.",
        over: "Yellowing lower leaves and a mushy crown mean it's been kept too wet — hostas want moist, not waterlogged, soil.",
      },
      "Angel Wings": {
        under: "Leave this mostly alone — only water once the soil is dry a good 8–10cm down. The furry silver leaves turning floppy or dull is the sign.",
        over: "Root rot is the real risk here — blackened stem bases, leaves yellowing and dropping, or general collapse mean it's been watered too often.",
      },
      "Box Hedging": {
        under: "Check 8cm down and only water through a proper dry spell. Sparse, thin foliage after a long drought is the underwater sign.",
        over: "Bronzing or orange patches are more often box blight or winter cold than thirst — don't water in response to leaf colour alone; overwatering can encourage the fungal disease.",
      },
      "Euonymus 'Emerald 'n' Gold'": {
        under: "Check 8cm down before watering. A slightly dulled leaf colour in a long dry spell is the only sign worth acting on.",
        over: "Very tolerant — yellowing leaves or soft stems at the base would be the rare overwatering sign.",
      },
      "Nemesia 'Aroma Heart of Gold'": {
        under: "Shallow-rooted — check the top 2–3cm and water as soon as it's dry there. Flowering slows and leaves go limp quickly once it dries out.",
        over: "Yellowing leaves, stem rot at the base, or fewer flowers despite frequent watering mean it's being overdone — let it dry slightly between waters.",
      },
      "Wintercreeper 'Emerald Gaiety'": {
        under: "Check 8cm down and only water in a proper dry spell. A slight dulling of leaf colour is the only real cue.",
        over: "Very tough — yellowing leaves or soft stems at the base would be the rare overwatering sign.",
      },
      "Dahlia 'Double Dreamy Lilac'": {
        under: "Check the top 3–4cm daily in hot weather. Leaves and stems going limp by mid-afternoon and not recovering by evening means it needs water now.",
        over: "Yellowing lower leaves or soft, black patches on the stem near the base mean it's been kept too wet — dahlias rot easily in waterlogged soil.",
      },
      "Avens": {
        under: "Check 5–6cm down. This clump moved from Bed 1 into Bed 2 in July 2026, so keep a slightly closer eye than usual — flopping foliage or fading flowers means it needs a drink while it re-establishes.",
        over: "Yellowing leaves or a mushy crown mean it's sitting too wet — a bigger risk than usual while the disturbed roots recover from the move.",
      },
      "Dahlia 'Double Dreamy Gold'": {
        under: "As a brand-new tuber (planted June 2026), check the top 3–4cm daily in hot weather — limp stems by afternoon mean water now.",
        over: "Yellowing leaves or a soft, blackening stem near the base mean it's been kept too wet — a real risk for a newly planted tuber that hasn't rooted out yet.",
      },
      "Hosta (gold)": {
        under: "Check 4–5cm down under the mulch. Recently moved from Bed 2 (June 2026), so watch a little more closely; pale, thin leaves are the underwater sign.",
        over: "Yellowing lower leaves and a mushy crown mean it's been kept too wet.",
      },
      "Red Hot Poker": {
        under: "Check 8cm down; give it slightly more attention this first season after the June 2026 move. Flopping, papery leaf tips mean it's time to water.",
        over: "Yellowing, mushy foliage at the crown means it's sitting too wet — this one dislikes winter wet especially.",
      },
      "Little Heath": {
        under: "Fine, shallow roots — check only the top 5cm. Planted June 2026, so water weekly through this first summer; foliage turning dull or crisp at the tips is the sign.",
        over: "Yellowing foliage or general dieback can mean it's sitting too wet — ericas dislike waterlogged roots as much as bone-dry ones.",
      },
      "Celosia": {
        under: "Check the top 2–3cm daily in hot weather. Leaves and flower plumes drooping by afternoon is the clearest sign; water at the base rather than overhead.",
        over: "Yellowing lower leaves or stem rot at the base mean it's being overwatered — this annual needs consistent moisture, not standing water.",
      },
    },
    "Bed 2": {
      "Weeping Cherry": {
        under: "Check moisture 15cm down at the drip line rather than right against the trunk. Leaves curling and browning at the edges in a dry summer is the sign to give it a deep soak.",
        over: "Gumming or oozing on the bark, and yellowing leaves that drop in summer, can indicate waterlogged roots — prunus dislike sitting wet.",
      },
      "Variegated Dogwood": {
        under: "Check the top 5cm; this one likes to stay on the moist side. Leaf edges browning and curling means it's thirsty.",
        over: "Stems blackening at the base, or a general lack of vigour despite watering, suggests it's sitting too wet — improve drainage rather than watering more.",
      },
      "Peony": {
        under: "Check 8cm down. Flopping stems and buds that brown and fail to open (bud blast) can be a drought-stress sign at the wrong moment — keep it steady through May and June while it's budding.",
        over: "Yellowing leaves and stem rot at the crown mean it's too wet — peonies are famously intolerant of waterlogging, especially if the crown is buried too deep.",
      },
      "Weigela": {
        under: "Check 6–8cm down. Leaves yellowing and dropping from the bottom of the shrub upward is the underwater sign.",
        over: "Soft, blackened stems at the base would signal overwatering — otherwise a tolerant, easy-going shrub.",
      },
      "Silverbush": {
        under: "Let this dry out properly — check 10cm down before watering at all. Silver leaves losing their sheen and looking grey-dull is the sign.",
        over: "Yellowing or blackened lower stems mean it's been kept too wet — sharp drainage matters more than watering frequency for this one.",
      },
      "Angel Wings": {
        under: "Leave this mostly alone — only water once the soil is dry a good 8–10cm down. Dulling of the silver leaves is the only real sign to act on.",
        over: "Root rot is the real risk — blackened stem bases or leaves yellowing and dropping mean it's been watered too often.",
      },
      "Kerria": {
        under: "Check 6–8cm down. Leaves going pale and papery at the edges, or new growth wilting, is the sign it needs a drink.",
        over: "Very self-sufficient — yellowing leaves or soft stems at the base would indicate it's being kept too wet.",
      },
      "Forget-me-not": {
        under: "Check the top 4–5cm. This self-seeding biennial flops noticeably and fast when dry — a good soak revives it within hours if caught early.",
        over: "Powdery mildew and collapsing stems can follow if it's kept too damp with poor air movement, more than genuine root overwatering.",
      },
      "Maiden Pink": {
        under: "Check 8–10cm down; this mat-forming pink hates sitting wet far more than it minds going dry. Foliage looking dull grey-green rather than blue-green is the sign.",
        over: "Yellowing or rotting at the base, especially over winter, means it's been kept too wet — sharp drainage is essential.",
      },
      "Centaurea 'Snowy Owl'": {
        under: "Check 6–8cm down. Silver-green foliage going limp and flower stems flopping is the sign to water.",
        over: "Yellowing foliage or stem rot at the base would mean it's sitting too wet — otherwise a tolerant short-lived perennial.",
      },
      "Hydrangea petiolaris": {
        under: "Check the top 5cm against the wall, which can be a rain shadow even in wet weather. Leaves crisping brown at the edges or flowers wilting is the sign — this climber is slow to establish, so keep it steadier than the band alone suggests.",
        over: "Yellowing leaves and poor flowering despite regular watering can mean the roots are sitting too wet — check drainage if it happens.",
      },
      "Euonymus 'Emerald Gaiety'": {
        under: "Check 8cm down. White leaf margins fading or browning at the tips is the sign. Moved from Bed 3 into Bed 2 in July 2026, so keep half an eye through this first season.",
        over: "Very tolerant — yellowing leaves or soft stems at the base would be the rare overwatering sign.",
      },
      "Spiraea 'Double Play Big Bang'": {
        under: "Newly planted (June 2026) — treat as establishing rather than drought-tolerant for now. Check the top 5cm and water weekly (more in hot spells) through its first year. New orange-red foliage wilting or crisping at the tips is the sign.",
        over: "Yellowing leaves or stem rot at the base mean it's been kept too wet — go easy once it's clearly rooted in next season.",
      },
    },
    "Bed 3": {
      "Apple Tree": {
        under: "Check moisture 15–20cm down at the drip line. Leaves curling and yellowing, or fruit dropping early, is the sign it needs a deep soak — especially once fruit is swelling.",
        over: "Waterlogged roots show as yellowing leaves despite wet soil, or fungal patches at the base of the trunk — apple trees need good drainage.",
      },
      "Callistemon Inferno ('Yanferno')": {
        under: "Newly planted (June 2026) — check the top 5cm and water weekly through its first year, especially in hot spells. Leaves turning dull red-bronze all over or drooping is the sign.",
        over: "Yellowing leaves and root rot are the real risk for this one — good drainage matters more than frequent watering; ease off if leaves drop despite wet soil.",
      },
      "Achillea": {
        under: "Newly planted (June 2026) — check the top 5cm and water weekly for the next few months while it roots in. Feathery foliage going limp and flat is the sign.",
        over: "Yellowing foliage and flopping stems despite moist soil mean it's too wet — achillea is much more tolerant of dry than wet.",
      },
      "Gaillardia": {
        under: "Newly planted (June 2026) — check 5–6cm down and water weekly while it settles in this first season. Flopping leaves and fading flower colour is the sign.",
        over: "This one resents sitting wet more than it minds going dry — yellowing leaves or a mushy crown mean it's been overdone.",
      },
      "Abelia 'Kaleidoscope'": {
        under: "Newly planted (June 2026) — check the top 5–6cm and keep it on a steady weekly soak through summer. Variegated leaves losing their colour and looking washed-out, or dropping, is the sign.",
        over: "Yellowing leaves or soft stems at the base would mean it's sitting too wet — otherwise a fairly forgiving shrub.",
      },
    },
    "Bed 4": {
      "Wisteria": {
        under: "Long established and deep-rooted — only check if there's been weeks without rain, at 15cm+ down. Leaves yellowing and dropping in summer (not autumn) is the sign.",
        over: "Rarely an issue once established, but yellowing leaves and reduced flowering despite regular watering can mean the roots are sitting too wet.",
      },
      "Rose": {
        under: "Check 8–10cm down. Wilting leaves and buds failing to open or 'balling' can be a drought sign — give it a deep soak at the base rather than a light sprinkle.",
        over: "Yellowing leaves, black spot, or stem dieback near the base can follow from waterlogged roots — good drainage matters as much as watering.",
      },
      "New Zealand Flax (cultivar to confirm)": {
        under: "Barely needs checking — look for a proper drought before watering at all. Leaves going limp or pale is the rare sign it actually needs a drink.",
        over: "Soft, mushy leaf bases or yellowing at the crown mean it's been overwatered — the biggest risk for this one by far.",
      },
      "Lavender": {
        under: "Check 10cm down; lavender dislikes wet feet far more than dry ones. Grey-green foliage looking dull rather than silvery, or flopping stems, is the sign.",
        over: "Blackened woody growth at the base, or leaves dropping despite damp soil, means it's been kept too wet — more common than underwatering for lavender.",
      },
    },
    "Stone Bed": {
      "Houseleeks": {
        under: "Never water on a schedule — rosettes looking a little deflated after a very long dry spell is the rare underwater sign.",
        over: "Rosettes going soft, mushy or translucent is a sign of overwatering/rot, which is the real risk here.",
      },
      "Echeveria": {
        under: "Wait until the root zone is dry; wrinkling or loss of firmness in the lower leaves is the sign it is genuinely thirsty.",
        over: "Translucent leaves, blackening at the base or a soft centre means rot risk — stop watering and shelter it from rain.",
      },
      "New Zealand Flax (dark)": {
        under: "Check 8–10cm down. Leaf tips browning and curling, or the whole spike looking limp, is the sign to water.",
        over: "Yellowing at the base of the leaves or a soft, collapsing centre means it's sitting too wet.",
      },
      "Cabbage Tree": {
        under: "Check 10cm down. The whole crown looking limp or pale is the sign to water.",
        over: "Older leaves browning from the tips is normal, but a collapsing, mushy centre means it's been kept too wet.",
      },
    },
    "Patio": {
      "Honeysuckle": {
        under: "Check 8–10cm down at the root zone. Leaves yellowing and dropping, or flowers failing to open, is the underwater sign.",
        over: "Powdery mildew and yellowing lower leaves can follow if it's kept too wet with poor air movement around the base.",
      },
      "Clematis": {
        under: "Likes its roots shaded and cool but not dry — check 8–10cm down near the base.",
        over: "Yellowing leaves across the whole plant with wet soil points to overwatering — but wilting on a single stem is more likely clematis wilt disease than a watering issue, so check the soil before assuming.",
      },
    },
    "Tree": {
      "Pear Tree": {
        under: "Only check after a genuine dry spell, 15–20cm down at the drip line. Leaves curling, yellowing or dropping early in summer is the sign it needs a deep soak, especially while fruit is swelling.",
        over: "Fungal patches at the base of the trunk or leaves yellowing despite wet soil suggest waterlogged roots — good drainage matters more than extra watering for a mature tree.",
      },
    },
  };

  // Apply the July 2026 back-bed split and renumbering to the detailed signs
  // without duplicating the long plant-specific guidance above.
  const bed2SignsBeforeSplit = WATER_SIGNS["Bed 2"];
  const formerBed3Signs = WATER_SIGNS["Bed 3"];
  const formerBed4Signs = WATER_SIGNS["Bed 4"];
  const bed3Names = new Set([
    "Kerria",
    "Forget-me-not",
    "Centaurea 'Snowy Owl'",
    "Spiraea 'Double Play Big Bang'",
  ]);
  WATER_SIGNS["Bed 2"] = Object.fromEntries(
    Object.entries(bed2SignsBeforeSplit).filter(([name]) => !bed3Names.has(name))
  );
  WATER_SIGNS["Bed 3"] = Object.fromEntries(
    Object.entries(bed2SignsBeforeSplit).filter(([name]) => bed3Names.has(name))
  );
  WATER_SIGNS["Bed 4"] = formerBed3Signs;
  WATER_SIGNS["Bed 5"] = formerBed4Signs;
  WATER_SIGNS["Bed 2"].Avens = WATER_SIGNS["Bed 1"].Avens;
  delete WATER_SIGNS["Bed 1"].Avens;
  delete WATER_SIGNS["Bed 5"].Lavender;

  // The researched profiles now own individual moisture symptoms. Refresh the
  // compatibility object from them so older callers cannot drift away from the
  // profile shown on the plant page. Shared pots keep their container-level
  // observations below because they are watered as one unit.
  Object.values(window.OAK.PLANT_BY_ID || {}).forEach((record) => {
    const zone = window.OAK.ZONES[record.zoneKey];
    const waterSigns = record.plant.profile && record.plant.profile.waterSigns;
    if (!zone || zone.isPot || !waterSigns) return;
    WATER_SIGNS[record.plantKey] = WATER_SIGNS[record.plantKey] || {};
    WATER_SIGNS[record.plantKey][record.plant.name] = waterSigns;
  });

  // Pot and hanging-basket zones get ONE combined signs entry for the whole
  // container rather than one per plant — in practice the pot is watered as
  // a single unit, so the useful thing to watch for is the container's
  // overall state, not a per-species breakdown. Keyed by zone (plantKey).
  const POT_WATER_SIGNS = {
    "Big Pot 1": {
      under: "Lift the pot — noticeably light for its size means it's dry right through. Compost pulling away from the pot's edge, or water running straight through the drainage hole without darkening the compost, both mean it's been left too long. Flowers dropping and leaves going matte and floppy across the pot confirms it.",
      over: "Compost staying dark and sodden a day after watering, algae or moss on the surface, or a musty smell are signs it's being overdone. Nepeta in this mix is naturally drought-tolerant, so watch it specifically for yellowing lower leaves or a soft stem base — it's usually the first to suffer if the pot's kept too wet for the thirstier plants around it.",
    },
    "Big Pot 2": {
      under: "Lift the pot — noticeably light for its size means it's dry right through. Compost pulling away from the pot's edge, or water running straight through the drainage hole without darkening the compost, both mean it's been left too long. Flowers dropping and leaves going matte and floppy across the pot confirms it.",
      over: "Compost staying dark and sodden a day after watering, algae or moss on the surface, or a musty smell are signs it's being overdone. Nepeta in this mix is naturally drought-tolerant, so watch it specifically for yellowing lower leaves or a soft stem base — it's usually the first to suffer if the pot's kept too wet for the thirstier plants around it.",
    },
    "Little Pot 1": {
      under: "Compost pulling away from the pot's edge, or the pot feeling noticeably light, means it's dried right out. The geranium's leaves going crisp and brown at the edges, or the petunia's flowers closing up and leaves going matte and floppy, confirm it.",
      over: "A sodden saucer, or compost still dark and wet a day after watering, means it's too much. The geranium is the one to watch — soft, yellowing lower leaves or a mushy stem base is a clear sign; it rots fast if kept wet.",
    },
    "Little Pot 2": {
      under: "The square pot feeling light, compost pulling from the edges, or the Coreopsis foliage turning grey-green and floppy all mean it needs a thorough drink. Buds staying small or failing to open are a later warning.",
      over: "Compost remaining dark and wet for days, yellow weak foliage or blackening at the crown means the pot is staying too wet. Keep the drainage holes open and avoid routine watering when the root ball is still moist.",
    },
    "Cercis Pot": {
      under: "Check below the surface during warm weather. Drooping heart-shaped leaves, scorch along the pale variegated margins or an unusually light pot mean the young tree's root ball is drying too far.",
      over: "Yellowing leaves, weak extension growth or branch dieback while the compost remains wet point to poor drainage. Empty trapped water and let air return to the root ball before watering again.",
    },
    "Nemesia Pot": {
      under: "Check the top 2–3cm daily in warm weather. Limp shoots, dropped flowers or compost pulling away from the rim mean the Nemesia needs a thorough drink.",
      over: "Compost staying dark and sodden for days, yellowing lower leaves or a soft stem base mean drainage is poor or watering is too frequent.",
    },
    "Bed 2/3 Wall Pot": {
      under: "Check beneath the surface in warm or windy weather. Drooping Viburnum leaves, limp Vinca trails or a noticeably light pot mean the shared root ball is drying too far.",
      over: "Persistently sodden compost, yellow lower leaves or blackening at either crown mean the wall pot is holding too much water. Keep its drainage holes clear.",
    },
    "Viburnum Pot": {
      under: "Curling or drooping evergreen leaves and a light pot mean the Viburnum's root ball needs a thorough drink, especially while it establishes.",
      over: "Yellowing leaves, weak growth or a sour smell while the compost remains wet point to poor drainage. Let the upper compost begin to dry before watering again.",
    },
    "Front Pot": {
      under: "Pot feeling light, compost pulling away from the edge, or water running straight through without darkening the compost all mean it's dried out. The Calibrachoa and Bacopa will show it first — flowers dropping and leaves going limp — since they're the thirstiest plants in this pot.",
      over: "A sodden saucer or compost still dark and wet a day later means it's too much. Watch the Gazanias specifically — they're the drought-tolerant ones sharing this pot with thirstier neighbours, and flowers staying closed with dull, soft leaves is their sign of sitting too wet.",
    },
    "Wall Pot 1": {
      under: "A small pot on an exposed stair wall — check by feel daily in hot weather. Flowers dropping, trailing stems going limp, and compost pulling away from the pot's edge all mean it's dried out.",
      over: "A sodden saucer or compost still waterlogged well after watering means it's too much — small pots have nowhere for excess water to go. Yellowing leaves or a soft, mushy stem base is the sign.",
    },
    "Wall Pot 2": {
      under: "Lower leaves and flower stems losing firmness, followed by a light dry root ball, mean the Echinacea needs a thorough drink. Do not wait for the whole compact clump to collapse.",
      over: "Yellow leaves, a soft dark crown or compost staying cold and wet for days are warning signs. Raise the glazed pot so it drains freely and pause watering until the root ball has begun to dry.",
    },
    "Baskets": {
      under: "Hanging baskets dry out fastest of anything in the garden — check by feel or by lifting to gauge weight, ideally twice a day in hot spells. Flowers and buds dropping together, or a cascade turning thin, pale and see-through, means it's gone too long without water.",
      over: "Excess water should drain straight through and not sit — a basket that's still dripping long after watering or feels heavy and sodden the next day is a sign of overwatering. Leaves yellowing from the inside of the basket outward is the visible symptom.",
    },
  };

  // Stable-ID view used by the current profile and watering interfaces. The
  // original name-keyed object remains available for older views, but names
  // are presentation data and may change when an identity is resolved.
  const WATER_BANDS_BY_ID = {};
  Object.values(window.OAK.PLANT_BY_ID || {}).forEach((record) => {
    const band = (WATER_BANDS[record.plantKey] || {})[record.plant.name];
    if (band) WATER_BANDS_BY_ID[record.plant.id] = band;
  });

  // Town-level weather keeps the public guide useful without publishing the
  // garden's precise location or asking visitors for location permission.
  // Thresholds only alter the order of moisture checks; they never instruct
  // the gardener to water without checking soil or compost first.
  const WATER_GUIDE_CONFIG = {
    location: {
      label: "Bromsgrove",
      latitude: 52.3357,
      longitude: -2.0598,
      timezone: "Europe/London",
    },
    weather: {
      recentRainMm: 10,
      heatC: 25,
      gustKph: 35,
      cacheMinutes: 30,
    },
  };

  window.OAK = window.OAK || {};
  window.OAK.WATER_BANDS = WATER_BANDS;
  window.OAK.WATER_BANDS_BY_ID = WATER_BANDS_BY_ID;
  window.OAK.WATER_BAND_INFO = WATER_BAND_INFO;
  window.OAK.WATER_SIGNS = WATER_SIGNS;
  window.OAK.POT_WATER_SIGNS = POT_WATER_SIGNS;
  window.OAK.WATER_GUIDE_CONFIG = WATER_GUIDE_CONFIG;
})();
