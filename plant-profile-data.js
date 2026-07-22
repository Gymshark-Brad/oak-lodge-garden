// Oak Lodge Garden — authored plant profiles
// Researched, plant-specific records for the full-page profile. Nothing here
// is inferred: plants without an entry continue to use the legacy card.

(() => {
  const OAK_SOURCE = {
    title: "Oak Lodge garden record",
    url: null,
    note: "Position, photographs, planting history and on-site observations",
  };

  const RHS = {
    acer: {
      title: "Royal Horticultural Society · Acer palmatum",
      url: "https://www.rhs.org.uk/plants/225/acer-palmatum/details",
      note: "Species description, size, cultivation, hardiness and problems",
    },
    fatsia: {
      title: "Royal Horticultural Society · Fatsia guide",
      url: "https://www.rhs.org.uk/plants/fatsia",
      note: "Cultivar appearance, size, position and winter exposure",
    },
    rhododendron: {
      title: "Royal Horticultural Society · Rhododendron ‘Goldflimmer’",
      url: "https://www.rhs.org.uk/plants/75618/rhododendron-goldflimmer-v/details",
      note: "Cultivar description, cultivation, size, hardiness and safety",
    },
    astilbe: {
      title: "Royal Horticultural Society · How to grow astilbes",
      url: "https://www.rhs.org.uk/plants/astilbe/growing-guide",
      note: "Cultivation, seasonal care, propagation and problems",
    },
    hosta: {
      title: "Royal Horticultural Society · How to grow hostas",
      url: "https://www.rhs.org.uk/plants/hosta/growing-guide",
      note: "Cultivation, seasonal care, propagation and problems",
    },
    box: {
      title: "Royal Horticultural Society · Buxus sempervirens",
      url: "https://www.rhs.org.uk/plants/2579/buxus-sempervirens/details",
      note: "Species description, cultivation, hardiness, safety and problems",
    },
    euonymus: {
      title: "Royal Horticultural Society · Evergreen euonymus guide",
      url: "https://www.rhs.org.uk/plants/euonymus/evergreen-euonymus",
      note: "Growth, foliage, position and care of Euonymus fortunei cultivars",
    },
    dahlia: {
      title: "Royal Horticultural Society · How to grow dahlias",
      url: "https://www.rhs.org.uk/plants/dahlia/growing-guide",
      note: "Cultivation, flowering, winter protection, propagation and problems",
    },
    pieris: {
      title: "Royal Horticultural Society · Pieris japonica ‘Little Heath’",
      url: "https://www.rhs.org.uk/plants/68304/pieris-japonica-little-heath-v/details",
      note: "Cultivar description, cultivation, hardiness, safety and problems",
    },
  };

  const ANGEL_WINGS_SOURCE = {
    title: "NC State Extension · Senecio Angel Wings® ‘Senaw’",
    url: "https://plants.ces.ncsu.edu/plants/senecio-candicans-angel-wings-senaw/",
    note: "Cultivar identity, habit, dimensions, drought tolerance and safety",
  };

  const hostaShared = {
    careGuide: [
      {
        title: "Keep the root run cool and moist",
        summary: "Water deeply when the upper 4–5cm begins to dry.",
        detail: "A spring mulch of compost or leaf mould slows moisture loss. Water the soil rather than repeatedly wetting the leaves, and do not let the crown sit in stagnant winter wet.",
      },
      {
        title: "Protect the first shoots",
        summary: "Slug and snail damage is most serious as leaves unfurl.",
        detail: "Check after damp nights, remove hiding places around the crown and use wildlife-conscious controls early. Once a leaf is shredded it will not repair itself that season.",
      },
      {
        title: "Divide only when needed",
        summary: "Split a congested clump in early spring or autumn.",
        detail: "Lift carefully and keep one to three healthy buds on each division. Replant at the original depth; burying the crown too deeply can encourage rot.",
      },
    ],
    waterSigns: {
      under: "Leaf edges turn brown or papery and the whole leaf may droop. Check beneath the mulch; if the soil is dry 4–5cm down, soak the root area slowly.",
      over: "Yellow lower leaves with a soft or foul-smelling crown point to stagnant wet rather than thirst. Ease watering and improve drainage around the crown.",
    },
    seasons: [
      { season: "Spring", action: "Clear old foliage before the pointed shoots expand, mulch around—not over—the crown, and begin slug checks immediately." },
      { season: "Summer", action: "Maintain moisture through dry spells. Remove badly damaged leaves and cut flower stems after blooming if seed is not wanted." },
      { season: "Autumn", action: "Allow the leaves to yellow naturally, then clear collapsed foliage. Divide established clumps now or in early spring." },
      { season: "Winter", action: "The crown is dormant below ground. Avoid standing wet and leave its position marked so it is not disturbed." },
    ],
    problems: [
      { name: "Slugs and snails", sign: "Irregular holes, shredded new leaves and slime trails", response: "Inspect after dark or rain and act while shoots are small. Do not mistake chewing damage for a watering problem." },
      { name: "Leaf scorch", sign: "Dry brown margins or bleached patches", response: "Check soil moisture and afternoon sun exposure. Deep watering and mulch help; repeatedly scorched plants may need more shade." },
      { name: "Crown rot", sign: "Yellow collapse with a soft crown in wet soil", response: "Remove rotten tissue, improve drainage and avoid piling mulch directly over the crown." },
    ],
  };

  const euonymusShared = {
    careGuide: [
      {
        title: "Let the shrub establish deeply",
        summary: "Water during its first seasons, then mainly through sustained drought.",
        detail: "Check below the surface before watering. Established Euonymus fortunei is tolerant, but a newly moved or recently planted shrub still needs a thorough soak when the root zone dries.",
      },
      {
        title: "Trim for shape, not on a timetable",
        summary: "Shorten wandering shoots in spring and again after the main flush if necessary.",
        detail: "Cut back to a leafy side shoot and remove any all-green reversions from the base. Reverted shoots can outgrow and eventually overwhelm variegated foliage.",
      },
      {
        title: "Watch the leaves before feeding",
        summary: "Routine feeding is rarely needed in garden soil.",
        detail: "Poor colour is more often caused by deep shade, dry roots, waterlogging or scale insects than lack of fertiliser. Mulch lightly in spring instead of feeding heavily.",
      },
    ],
    waterSigns: {
      under: "Leaves become dull, curl at the edges or drop after a long dry spell. Check 6–8cm down and water deeply only if the root zone is dry.",
      over: "Persistent yellowing, soft stem bases or dieback while soil remains wet suggests poor aeration. Stop watering and open the soil surface around the plant.",
    },
    seasons: [
      { season: "Spring", action: "Remove dead or reverted shoots, make any shaping cuts and add a light organic mulch without burying the stems." },
      { season: "Summer", action: "Water only through real dry spells. Check stems and leaf undersides for scale, and trim growth that is obscuring neighbours." },
      { season: "Autumn", action: "Cold weather may bring pink or red foliage tints. Avoid soft late growth caused by unnecessary feeding." },
      { season: "Winter", action: "The evergreen framework remains visible. Brush off heavy snow and leave frost-coloured leaves unless they are genuinely dead." },
    ],
    problems: [
      { name: "Scale insects", sign: "Brown or pale bumps on stems, sticky leaves and sooty mould", response: "Inspect closely before treating. Remove small colonies by hand and prune heavily infested shoots." },
      { name: "Powdery mildew", sign: "White dusty coating and distorted young leaves", response: "Improve airflow, water the soil during drought and avoid wetting foliage late in the day." },
      { name: "Reversion", sign: "Strong shoots with plain green leaves", response: "Cut the entire reverted shoot back to its point of origin before it outcompetes the variegated growth." },
    ],
  };

  const dahliaShared = {
    careGuide: [
      {
        title: "Build a strong, branching plant",
        summary: "Pinch the growing tip when young and stake before stems become top-heavy.",
        detail: "Early pinching produces more flowering shoots. Add supports while stems are still short, so the foliage grows through and hides them rather than being tied up after wind damage.",
      },
      {
        title: "Water and mulch through active growth",
        summary: "Soak deeply in hot, dry weather and keep the stem base open.",
        detail: "Dahlias are thirsty while flowering but their tubers rot in airless soil. A compost mulch conserves moisture; leave a small clear circle around the stems.",
      },
      {
        title: "Deadhead to the next side shoot",
        summary: "Remove fading flowers before seed forms.",
        detail: "Follow the flower stem down to a pair of leaves or a new bud and cut there. Removing only the flower head leaves untidy stalks and does less to redirect the plant’s energy.",
      },
      {
        title: "Choose a winter strategy",
        summary: "Lift and store the tubers frost-free, or protect them heavily in free-draining soil.",
        detail: "In Bromsgrove, lifting after frost is the safer option. Dry the tubers, label them by flower colour, and store cool and frost-free; inspect occasionally for rot or shrivelling.",
      },
    ],
    waterSigns: {
      under: "Leaves and stems stay limp beyond the hottest part of the day, and buds stall. If the top 3–4cm is dry, soak the whole root area rather than sprinkling the surface.",
      over: "Lower leaves yellow and the stem base becomes soft or black while the soil stays wet. Reduce watering immediately; tubers can rot quickly in waterlogged ground.",
    },
    seasons: [
      { season: "Spring", action: "Start stored tubers frost-free, divide only where each piece has a viable shoot, pinch young growth and plant out after the last frost." },
      { season: "Summer", action: "Tie stems loosely, water deeply in dry spells and deadhead continuously. Watch soft tips for blackfly and young growth for slugs." },
      { season: "Autumn", action: "Keep deadheading until frost blackens the top growth. Label by colour before cutting down and lifting the tubers." },
      { season: "Winter", action: "Store lifted tubers cool, dry and frost-free, checking for rot. Outdoor tubers need deep mulch and excellent drainage." },
    ],
    problems: [
      { name: "Slugs and snails", sign: "Young shoots disappear or are ragged overnight", response: "Protect emerging growth early; mature stems can recover, but repeated damage delays flowering." },
      { name: "Aphids or blackfly", sign: "Dense colonies on tips and buds, sticky leaves or distorted growth", response: "Rub off small colonies or wash them away before flower buds are crowded with insects." },
      { name: "Powdery mildew", sign: "White coating on leaves, often during dry late summer weather", response: "Water the roots consistently, improve airflow and remove the worst affected foliage." },
      { name: "Tuber rot", sign: "Soft black stems or a foul, collapsing crown", response: "Stop watering and inspect the tubers. Remove rotten tissue; badly affected clumps should be discarded." },
    ],
  };

  const profiles = {
    "bed1-japanese-maple": {
      version: 2,
      type: "Deciduous ornamental tree",
      badges: ["Architectural canopy", "Autumn colour", "Cultivar unconfirmed"],
      description: "A small Japanese maple forming the dominant canopy in Flower Bed 1. Its fine, palmately lobed leaves emerge red-bronze, settle into their summer colour and then turn fiery shades before falling. The tracery of bare branches remains ornamental through winter. Oak Lodge records the plant confidently as Acer palmatum, but not as a named cultivar, so the mature size and exact leaf-colour sequence should be judged from this individual rather than borrowed from a cultivar label.",
      floweringMonths: ["Apr", "May"],
      facts: [
        { label: "Size", value: "Cultivar dependent", detail: "The species may reach 4–8m; this garden form is still being measured" },
        { label: "Position", value: "Light shade", detail: "Sheltered from drying wind and harsh afternoon sun" },
        { label: "Soil", value: "Moist, well-drained", detail: "Fertile acid-to-neutral soil; avoid waterlogging" },
        { label: "Hardiness", value: "H6", detail: "Cold hardy; young leaves remain vulnerable to late frost" },
        { label: "Main feature", value: "Foliage", detail: "Fine leaf shape, seasonal colour and winter branch structure" },
        { label: "Identity", value: "Acer palmatum", detail: "Named cultivar not yet confirmed" },
      ],
      careGuide: [
        { title: "Protect the fine foliage", summary: "Keep roots cool and shelter leaves from drying wind.", detail: "Morning sun or dappled light usually gives good colour without scorching. A 5cm organic mulch helps, but keep it clear of the trunk." },
        { title: "Water slowly in dry spells", summary: "Deep, occasional watering is better than frequent surface sprinkling.", detail: "Concentrate water over the root area when the upper soil begins to dry, especially while the tree is establishing or during hot windy weather." },
        { title: "Prune as little as possible", summary: "Remove only dead, crossing or badly placed growth.", detail: "Make essential structural cuts while dormant, preferably after leaf fall and before midwinter sap movement. Do not shear the canopy into a shape." },
      ],
      waterSigns: {
        under: "Crisp brown leaf margins and curling foliage, especially after heat or wind, usually indicate root dryness or scorch. Check the soil before watering.",
        over: "Persistent yellowing, weak extension growth or dieback in wet soil points to poor drainage. Do not respond to leaf scorch by keeping the roots saturated.",
      },
      seasons: [
        { season: "Spring", action: "Watch the red-bronze leaves unfurl and protect new growth from a late frost if a severe night is forecast." },
        { season: "Summer", action: "Check soil during hot or windy spells, water deeply when needed and avoid disturbing shallow roots beneath the canopy." },
        { season: "Autumn", action: "Record the colour sequence before leaf fall. Replenish mulch after the ground is moist, keeping the trunk clear." },
        { season: "Winter", action: "Use the bare framework to identify dead or crossing wood, but keep pruning minimal and avoid late-winter cuts." },
      ],
      problems: [
        { name: "Leaf scorch", sign: "Brown, crisp margins or bleached patches", response: "Check moisture and exposure together. Mulch, water deeply if dry and reduce reflected heat or wind rather than continually watering." },
        { name: "Late frost", sign: "Blackened or limp newly opened leaves", response: "Wait for secondary buds before pruning; the tree often refoliates once conditions settle." },
        { name: "Verticillium wilt", sign: "Sudden one-sided wilting or branch death despite moist soil", response: "Remove dead wood hygienically and avoid replanting susceptible species in contaminated soil; confirm the diagnosis before major action." },
      ],
      about: "Acer palmatum is naturally variable, which is why thousands of garden selections exist. The species carries small red spring flowers followed by paired winged seeds, but it is grown chiefly for its finely divided leaves, graceful branching and autumn colour. Without the original label, assigning a cultivar from foliage photographs alone would be unreliable.",
      provenanceNote: "Identity confidence: species level is strong; cultivar is deliberately left unconfirmed.",
      botanical: [
        { label: "Family", value: "Sapindaceae" }, { label: "Genus", value: "Acer" },
        { label: "Botanical name", value: "Acer palmatum · cultivar unknown" }, { label: "Plant type", value: "Small deciduous tree" },
        { label: "Native range", value: "Japan, central China and Korea" }, { label: "Foliage", value: "Deciduous; palmately lobed" },
        { label: "Time to mature", value: "10–20 years" }, { label: "Safety", value: "No specific handling warning recorded by the RHS" },
      ],
      oakLodge: { location: "Back centre of Flower Bed 1", added: "Established before the 2026 journal", role: "Dominant canopy and seasonal focal point", observation: "Red-bronze spring growth and strong autumn colour; exact cultivar label is absent.", status: "Measure height and canopy spread each winter; retain the cultivar uncertainty until documentary evidence appears." },
      sources: [RHS.acer, OAK_SOURCE],
    },

    "bed1-japanese-aralia": {
      version: 2,
      type: "Evergreen architectural shrub",
      badges: ["Variegated foliage", "Shade tolerant", "Autumn flowers"],
      description: "‘Spider’s Web’ is a slow-growing Fatsia with large, hand-shaped evergreen leaves irregularly dusted and splashed with cream-white. The pattern is strongest on fresh growth and gives the shrub a frosted appearance beneath the Japanese maple. Mature plants develop thick stems and a rounded architectural framework, followed in autumn by spherical clusters of small cream flowers that can feed late pollinators.",
      floweringMonths: ["Oct", "Nov"],
      facts: [
        { label: "Size", value: "1.5–2.5m", detail: "Similar eventual height and spread; slow growing" },
        { label: "Position", value: "Part shade", detail: "Tolerates shade but needs some light to show variegation" },
        { label: "Soil", value: "Fertile, well-drained", detail: "Avoid ground that is persistently parched or waterlogged" },
        { label: "Hardiness", value: "H5", detail: "Hardy in most UK gardens; shelter from cold winds" },
        { label: "Foliage", value: "Evergreen", detail: "Large palmate leaves mottled cream and green" },
        { label: "Growth", value: "Slow, rounded", detail: "Can become leggy beneath a dense canopy" },
      ],
      careGuide: [
        { title: "Give it bright shade", summary: "Enough light maintains the white marbling without scorching it.", detail: "Deep shade can reduce variegation; exposed sun and wind can bleach or tear the broad leaves. Its position under the Acer should be monitored as the canopy thickens." },
        { title: "Water while roots establish", summary: "Let the surface begin to dry, then soak the root area.", detail: "An established Fatsia is fairly tolerant, but prolonged drought causes drooping and brown edges. Avoid automatic watering that leaves the crown wet." },
        { title: "Renew a leggy framework gradually", summary: "Cut one tired stem low in spring rather than shearing every shoot.", detail: "Selective renewal encourages shoots from lower down while preserving the shrub’s architecture. Remove frost-damaged growth only once new growth shows what is alive." },
      ],
      waterSigns: { under: "Leaves hang down and lose their firmness; edges may brown after drought or wind. Check 5cm down, then water deeply if dry.", over: "Yellow lower leaves, soft stem bases or collapse in wet soil indicate poor root aeration. Reduce watering and improve drainage." },
      seasons: [
        { season: "Spring", action: "Remove genuinely dead or frost-damaged growth and selectively shorten leggy stems once new buds are moving." },
        { season: "Summer", action: "Check moisture under the Acer canopy and watch for capsid damage or scale on the large leaves and stems." },
        { season: "Autumn", action: "Leave the cream flower globes for pollinators and record whether the variegation changes as light levels fall." },
        { season: "Winter", action: "Shelter from severe drying wind and shake off heavy snow. Wait until spring before judging cold-damaged leaves and stems." },
      ],
      problems: [
        { name: "Wind or frost damage", sign: "Torn leaves, black patches or collapsed tips", response: "Improve shelter and wait for spring growth before cutting back; the woody framework often recovers." },
        { name: "Capsid bugs", sign: "Small ragged holes and distorted young leaves", response: "Remove badly marked growth and monitor new shoots; established plants usually tolerate cosmetic damage." },
        { name: "Scale insects", sign: "Fixed brown bumps, sticky leaves and sooty mould", response: "Inspect stems and leaf undersides, remove small colonies manually and prune heavily infested shoots." },
      ],
      about: "Fatsia japonica is an evergreen shrub from Japan and South Korea, valued for its bold palmate leaves and unusual autumn flowers. ‘Spider’s Web’, also listed under the name ‘Tsumugi-shibori’, is a slower variegated selection whose cream speckling differs from leaf to leaf.",
      provenanceNote: "Cultivar identity is supported by the recorded label and characteristic white-speckled foliage.",
      botanical: [
        { label: "Family", value: "Araliaceae" }, { label: "Genus", value: "Fatsia" },
        { label: "Botanical name", value: "Fatsia japonica ‘Spider’s Web’" }, { label: "Synonym", value: "‘Tsumugi-shibori’" },
        { label: "Plant type", value: "Bushy evergreen shrub" }, { label: "Native species range", value: "Japan and South Korea" },
        { label: "Foliage", value: "Evergreen and variegated" }, { label: "Wildlife", value: "Late flowers used by pollinators" },
      ],
      oakLodge: { location: "Mid-centre of Flower Bed 1, beneath the Acer", added: "Established before the 2026 journal", role: "Large-leaved evergreen structure in shade", observation: "Cream-flecked leaves brighten the centre of the bed beneath the finer maple canopy.", status: "Watch whether increasing Acer shade reduces the variegation or makes the shrub leggy." },
      sources: [RHS.fatsia, OAK_SOURCE],
    },

    "bed1-rhododendron": {
      version: 2,
      type: "Evergreen acid-loving shrub",
      badges: ["Variegated foliage", "Late-spring flowers", "Harmful if eaten"],
      description: "‘Goldflimmer’ is a slow-growing evergreen rhododendron distinguished even when it is not flowering: each narrow dark-green leaf carries an irregular yellow central splash. Small trusses of funnel-shaped purplish-pink flowers arrive in late spring and early summer. It eventually forms a substantial rounded shrub, so the variegated foliage is the lasting contribution while the floral display is brief.",
      floweringMonths: ["May", "Jun"],
      facts: [
        { label: "Size", value: "1.5–2.5m", detail: "Slow-growing, with a similar eventual spread" },
        { label: "Position", value: "Part shade", detail: "Sheltered from drying wind and hot afternoon sun" },
        { label: "Soil", value: "Acidic", detail: "Moist, humus-rich and well-drained" },
        { label: "Hardiness", value: "H6", detail: "Fully hardy in the UK" },
        { label: "Foliage", value: "Evergreen", detail: "Dark green with a golden central splash" },
        { label: "Safety", value: "Harmful if eaten", detail: "Wear gloves when handling; keep pets from chewing" },
      ],
      careGuide: [
        { title: "Protect its shallow roots", summary: "Mulch with leaf mould or composted bark and avoid digging nearby.", detail: "Rhododendrons root close to the surface. Keep the root zone cool and evenly moist, but leave the stem base open and never bury the root flare." },
        { title: "Use rainwater when practical", summary: "Water deeply in dry spells, especially during bud development.", detail: "Repeated hard tap water can raise pH over time. Yellow leaves with green veins may be a pH problem rather than a request for more general fertiliser." },
        { title: "Deadhead carefully, prune sparingly", summary: "Snap spent trusses away without damaging the buds beneath.", detail: "Routine pruning is unnecessary. Remove dead wood after flowering and avoid cutting large old stems unless renovation is genuinely needed." },
      ],
      waterSigns: { under: "Leaves roll lengthways, become dull and may brown at the margins. Check beneath the mulch and soak with rainwater if the root zone is dry.", over: "Yellowing, weak growth or sudden collapse in persistently wet soil suggests root stress or Phytophthora. Stop watering and investigate drainage." },
      seasons: [
        { season: "Spring", action: "Top up an acidic organic mulch, water during dry bud development and enjoy the purplish-pink trusses in late spring." },
        { season: "Summer", action: "Deadhead carefully after flowering and keep shallow roots moist in dry weather while next year’s buds form." },
        { season: "Autumn", action: "Avoid late feeding or pruning. Remove fallen diseased leaves and make sure winter water can drain away." },
        { season: "Winter", action: "Evergreen leaves may curl temporarily in cold weather. Water only if the ground is genuinely dry and unfrozen." },
      ],
      problems: [
        { name: "Lime-induced chlorosis", sign: "Yellow leaves with distinctly green veins", response: "Check soil pH and root health before feeding. Maintain an acidic mulch and use a suitable trace-element treatment only if deficiency is confirmed." },
        { name: "Phytophthora root rot", sign: "Dull foliage, dieback or collapse in wet soil", response: "Improve drainage immediately; severely affected plants may not recover and should not be replaced with another rhododendron in the same soil." },
        { name: "Vine weevil", sign: "Notched leaf edges or sudden root loss", response: "Leaf notches identify adults; larvae damage roots. Confirm their presence and use a seasonally appropriate biological control." },
      ],
      caution: "All parts are harmful if eaten. Wear gloves for prolonged handling and prevent pets or children from chewing leaves or flowers.",
      about: "‘Goldflimmer’, also found under the synonym ‘Goldshine’, is an accepted variegated cultivar of Rhododendron. Its dark leaves with a central yellow splash distinguish it from edge-variegated shrubs. Like other rhododendrons it belongs to the heath family and needs acidic soil to take up nutrients normally.",
      provenanceNote: "Cultivar identity is supported by the recorded label and distinctive central leaf variegation.",
      botanical: [
        { label: "Family", value: "Ericaceae" }, { label: "Genus", value: "Rhododendron" },
        { label: "Botanical name", value: "Rhododendron ‘Goldflimmer’" }, { label: "Synonym", value: "‘Goldshine’" },
        { label: "Plant type", value: "Bushy evergreen shrub" }, { label: "Native to Britain or Ireland", value: "No" },
        { label: "Time to mature", value: "10–20 years" }, { label: "Name status", value: "Accepted" },
      ],
      oakLodge: { location: "Mid-left of Flower Bed 1", added: "Established before the 2026 journal", role: "Variegated evergreen mass beneath the maple", observation: "Golden-centred leaves remain ornamental year-round; lavender-purple flowers are recorded in May.", status: "Monitor soil acidity and mature spread as it fills the space beneath the Acer." },
      sources: [RHS.rhododendron, OAK_SOURCE],
    },

    "bed1-astilbe": {
      version: 2,
      type: "Clump-forming herbaceous perennial",
      badges: ["Moisture lover", "Summer plumes", "Cultivar unconfirmed"],
      description: "This Astilbe produces upright pink, feathery flower plumes above divided, fern-like foliage on the right side of Bed 1. The leaves emerge in spring, the airy flowers give height without a dense visual block, and both foliage and stems die back for winter. Its cultivar is not recorded, so final height and the exact flowering window are based on the Oak Lodge plant rather than a named-variety description.",
      floweringMonths: ["Jun", "Jul", "Aug"],
      facts: [
        { label: "Size", value: "About 45–90cm", detail: "Provisional range until the unidentified clump is measured" },
        { label: "Position", value: "Light shade", detail: "More sun is acceptable only if soil stays damp" },
        { label: "Soil", value: "Rich and moisture-retentive", detail: "Damp but not stagnant or waterlogged" },
        { label: "Hardiness", value: "Fully hardy", detail: "Top growth dies back; crown survives below ground" },
        { label: "Flowers", value: "Pink plumes", detail: "Recorded at Oak Lodge from June into summer" },
        { label: "Identity", value: "Astilbe sp.", detail: "Cultivar or hybrid group not yet confirmed" },
      ],
      careGuide: [
        { title: "Never let the clump bake dry", summary: "Check the first 2.5cm of soil and soak deeply when dry.", detail: "Astilbes need consistent root moisture, especially in their first season. A generous organic mulch helps; repeated drought causes scorched leaves and a shortened flower display." },
        { title: "Feed the soil, not the plant", summary: "Mulch with well-rotted organic matter rather than routine fertiliser.", detail: "In the rich, damp soil Astilbe prefers, extra feeding is usually unnecessary. Improving water retention is more useful than pushing soft growth." },
        { title: "Leave or cut the faded plumes", summary: "Seedheads can stand for winter texture, then be cut to ground level.", detail: "Clear old stems before new spring shoots appear. Divide a congested clump about every four years to restore vigour." },
      ],
      waterSigns: { under: "Brown crisp margins, pale papery leaves and a shortened flower display mean the clump has dried. Soak deeply and renew the mulch.", over: "Yellowing with a soft crown in stagnant soil indicates waterlogging. Astilbes like damp ground, not roots deprived of air." },
      seasons: [
        { season: "Spring", action: "Clear last year’s stems before new shoots expand, divide if congested and mulch generously around the crown." },
        { season: "Summer", action: "Do not allow the soil to dry. Record plume height and flowering dates to improve the unidentified plant’s profile." },
        { season: "Autumn", action: "Leave faded plumes for buff-coloured structure and small-wildlife shelter, or remove them if they collapse." },
        { season: "Winter", action: "The crown is dormant. Cut remaining stems before spring growth and avoid compacting the moist soil around it." },
      ],
      problems: [
        { name: "Drought scorch", sign: "Crisp brown margins and faded, thin leaves", response: "Deep-water and mulch; if it recurs annually, increase shade or improve the soil’s water-holding capacity." },
        { name: "Vine weevil", sign: "Semicircular leaf notches or sudden root damage", response: "Confirm larvae around the roots and use a suitable biological control at the correct soil temperature." },
        { name: "Poor flowering", sign: "Healthy leaves but few or short plumes", response: "Check for drought, overcrowding and excessive shade; divide an old congested clump in spring." },
      ],
      about: "Astilbe is a genus of hardy perennials from moist habitats in East Asia and eastern North America. Garden plants include several hybrid groups that differ markedly in height, leaf texture and flowering time, so a pink-flowered plant cannot be assigned a cultivar reliably from colour alone.",
      provenanceNote: "Identity confidence: genus is confirmed; cultivar and hybrid group remain deliberately open.",
      botanical: [
        { label: "Family", value: "Saxifragaceae" }, { label: "Genus", value: "Astilbe" },
        { label: "Botanical name", value: "Astilbe · cultivar unknown" }, { label: "Plant type", value: "Herbaceous perennial" },
        { label: "Foliage", value: "Deciduous; divided and fern-like" }, { label: "Habit", value: "Upright, clump-forming" },
        { label: "Propagation", value: "Division in spring" }, { label: "Identity status", value: "Further label or provenance needed" },
      ],
      oakLodge: { location: "Right side of Flower Bed 1", added: "Established before the 2026 journal", role: "Pink summer plume and soft vertical texture", observation: "Pink feathery plumes are recorded from June, above fern-like foliage.", status: "Measure mature height and photograph flowers and leaves together before attempting a more precise identification." },
      sources: [RHS.astilbe, OAK_SOURCE],
    },

    "bed1-hosta": {
      version: 2,
      type: "Variegated herbaceous perennial",
      badges: ["Shade foliage", "Summer flowers", "Cultivar unconfirmed"],
      description: "A green-and-white variegated Hosta forming a broad mound at the front-left of Bed 1. Its ribbed leaves unfurl from pointed spring shoots, overlap into a dense summer clump and are followed by pale lilac flower bells on taller stems. The image archive contains old ‘Patriot’ and ‘Francee’ filename guesses, but the journal does not have a surviving label, so this profile stops at Hosta rather than choosing between similar white-margined cultivars.",
      floweringMonths: ["Jul", "Aug"],
      facts: [
        { label: "Size", value: "Measure this clump", detail: "Likely medium-sized; cultivar-dependent rather than assumed" },
        { label: "Position", value: "Shade or part shade", detail: "Sheltered from hot afternoon sun and drying wind" },
        { label: "Soil", value: "Moist and fertile", detail: "Humus-rich, moisture-retentive and drained" },
        { label: "Hardiness", value: "Fully hardy", detail: "Leaves die back; dormant crown remains below ground" },
        { label: "Foliage", value: "Green, white-margined", detail: "The principal ornamental feature" },
        { label: "Identity", value: "Hosta cultivar", detail: "‘Patriot’/‘Francee’ resemblance is not proof" },
      ],
      ...hostaShared,
      about: "Hostas are long-lived shade perennials grown mainly for bold, ribbed leaves, with summer flowers as a secondary feature. White-margined cultivars can be extremely similar and their appearance changes with age, light and growing conditions; a verified label or specialist comparison is needed for a cultivar-level name.",
      provenanceNote: "Identity confidence: genus is certain; the current cultivar suggestions remain unverified filename history, not accepted identification.",
      botanical: [
        { label: "Family", value: "Asparagaceae" }, { label: "Genus", value: "Hosta" },
        { label: "Botanical name", value: "Hosta · white-margined cultivar unknown" }, { label: "Plant type", value: "Herbaceous perennial" },
        { label: "Foliage", value: "Deciduous; green with white margins" }, { label: "Habit", value: "Clump-forming" },
        { label: "Propagation", value: "Division in spring or autumn" }, { label: "Identity status", value: "Label or specialist confirmation needed" },
      ],
      oakLodge: { location: "Front-left of Flower Bed 1", added: "Established before the 2026 journal", role: "Broad variegated foliage in shade", observation: "Green leaves with strong white margins; pale lilac flowers recorded in July.", status: "Do not promote the old ‘Patriot’ or ‘Francee’ filename guesses without stronger evidence." },
      sources: [RHS.hosta, OAK_SOURCE],
    },

    "bed1-angel-wings": {
      version: 2,
      type: "Tender evergreen foliage perennial",
      badges: ["Silver felted leaves", "Sharp drainage", "Harmful if eaten"],
      description: "Angel Wings® is grown for extraordinary broad leaves covered in dense silver-white felt, giving the plant a luminous, almost sculpted appearance at the front of Bed 1. The rounded mound is succulent in texture and tolerates drought once established, but wet soil and winter cold are a dangerous combination. Yellow daisy-like flowers may appear, although the foliage is the real display.",
      floweringMonths: ["Jun", "Jul", "Aug"],
      facts: [
        { label: "Size", value: "25–40cm", detail: "Rounded mound with a similar spread" },
        { label: "Position", value: "Sun or light shade", detail: "Sheltered, with airflow around the felted leaves" },
        { label: "Soil", value: "Sharply drained", detail: "Allow it to dry between waterings" },
        { label: "Hardiness", value: "Tender in cold wet winters", detail: "Protect or keep a frost-free backup" },
        { label: "Foliage", value: "Silver-white", detail: "Broad, evergreen and densely felted" },
        { label: "Safety", value: "Harmful if eaten", detail: "Keep pets from chewing the foliage" },
      ],
      careGuide: [
        { title: "Prioritise drainage", summary: "Let the root zone dry well before watering again.", detail: "The felted foliage can disguise stress, so test the soil 8–10cm down. In winter, cold wet soil is a greater threat than short periods of dryness." },
        { title: "Keep the leaves dry and clean", summary: "Water the soil and avoid splashing the silver felt.", detail: "Wet, dirty foliage marks easily and can rot where leaves overlap. Give the mound airflow and remove only leaves that are fully damaged." },
        { title: "Plan for winter before frost", summary: "Take cuttings or move a container under cover as insurance.", detail: "An outdoor plant may survive in a mild, sharply drained spot, but a cold wet Bromsgrove winter is unreliable. Keep backup material bright and frost-free." },
      ],
      waterSigns: { under: "The thick leaves lose firmness, curl inward or look dull rather than luminous. Water only after confirming the soil is dry well below the surface.", over: "Yellowing leaves, blackened bases or a soft collapsing crown indicate rot. Stop watering, remove affected tissue and improve drainage immediately." },
      seasons: [
        { season: "Spring", action: "Remove winter-damaged leaves once growth restarts, refresh drainage around the crown and harden off protected plants gradually." },
        { season: "Summer", action: "Water sparingly but deeply, keep leaves dry and take healthy tip cuttings if a winter backup is wanted." },
        { season: "Autumn", action: "Reduce watering as growth slows and decide whether to lift, cover or rely on cuttings before prolonged cold rain." },
        { season: "Winter", action: "Keep protected plants frost-free and on the dry side. Outdoor crowns need excellent drainage and shelter from persistent wet." },
      ],
      problems: [
        { name: "Root or crown rot", sign: "Soft black bases, yellow leaves or rapid collapse", response: "Stop watering, cut back to sound tissue and improve drainage; severe rot is often terminal." },
        { name: "Frost damage", sign: "Translucent, blackened or mushy foliage after cold", response: "Keep damaged tissue dry and wait until spring growth begins before deciding how far to cut back." },
        { name: "Aphids", sign: "Colonies on soft new leaves and distorted tips", response: "Remove early by hand or with a gentle water jet that avoids soaking the whole crown." },
      ],
      caution: "Senecio foliage can be harmful if eaten. Prevent pets and children from chewing the leaves and wash hands after prolonged handling.",
      about: "This plant is sold as Senecio candicans Angel Wings® ‘Senaw’. It combines a rounded, succulent habit with unusually large silver-felted leaves and is used as a foliage accent in borders and containers. Taxonomic treatments of Senecio and related genera change, so the registered trade/cultivar wording is more useful here than forcing a newer generic name.",
      provenanceNote: "Cultivar identity is supported by the distinctive foliage and the recorded Angel Wings name; the full trade designation is added for precision.",
      botanical: [
        { label: "Family", value: "Asteraceae" }, { label: "Genus", value: "Senecio" },
        { label: "Botanical name", value: "Senecio candicans Angel Wings® ‘Senaw’" }, { label: "Plant type", value: "Succulent evergreen perennial" },
        { label: "Habit", value: "Fast-growing and rounded" }, { label: "Foliage", value: "Broad, silver and densely felted" },
        { label: "Drought tolerance", value: "Good once established" }, { label: "Safety", value: "Problematic if eaten by cats, dogs or horses" },
      ],
      oakLodge: { location: "Front-centre of Flower Bed 1", added: "Established before the 2026 journal", role: "Bright silver foliage contrast", observation: "Large furry white leaves provide a strong year-round textural contrast beside greener planting.", status: "Winter survival should be recorded; sharp drainage matters more than routine watering." },
      sources: [ANGEL_WINGS_SOURCE, OAK_SOURCE],
    },

    "bed1-box-hedging": {
      version: 2,
      type: "Clipped evergreen hedge",
      badges: ["Formal edging", "Native species", "Health monitoring"],
      description: "Common box is a dense, fine-textured evergreen shrub kept as a low clipped edge along the right side of Bed 1. Left unpruned, Buxus sempervirens can become a large shrub or small tree, but here its value comes from the opposite: compact geometry, small glossy leaves and a calm green structure through every season. Modern box care is as much about health surveillance as clipping because box blight and box-tree caterpillar can spread quickly.",
      floweringMonths: ["Mar", "Apr"],
      facts: [
        { label: "Size", value: "Kept clipped", detail: "Species can reach 4–8m; Oak Lodge controls it as low edging" },
        { label: "Position", value: "Sun to shade", detail: "Partial shade reduces scorch on dry sites" },
        { label: "Soil", value: "Moist, well-drained", detail: "Tolerates many soil types and pH levels" },
        { label: "Hardiness", value: "H6", detail: "Fully hardy in the UK" },
        { label: "Foliage", value: "Evergreen", detail: "Small, glossy, dark green leaves" },
        { label: "Safety", value: "Harmful if eaten", detail: "Especially relevant to dogs; collect clippings" },
      ],
      careGuide: [
        { title: "Inspect before clipping", summary: "Look inside the hedge for webbing, caterpillars and black stem lesions.", detail: "Clipping can spread contaminated material. Work only when foliage is dry, clean tools between affected sections and collect every clipping rather than leaving debris beneath the hedge." },
        { title: "Clip once after the main flush", summary: "August is the main shaping window; avoid creating repeated soft growth.", detail: "Use sharp shears, taper the sides slightly so the base receives light, and avoid cutting in hot sun when newly exposed leaves may scorch." },
        { title: "Water roots, not foliage", summary: "Established box needs help mainly during prolonged dry weather.", detail: "Soak the root zone and maintain airflow through the surface. Frequent overhead watering and dense wet foliage favour disease." },
      ],
      waterSigns: { under: "Leaves lose gloss, turn straw-coloured and may fall after drought. Check 8cm down and soak deeply if dry.", over: "General yellowing and weak roots in persistently wet soil indicate poor drainage; orange or black patches may instead be disease and need closer inspection." },
      seasons: [
        { season: "Spring", action: "Inspect for box-tree caterpillar and remove dead leaves caught inside the hedge. Mulch lightly without touching stems." },
        { season: "Summer", action: "Monitor again for caterpillars, water during sustained drought and make the main shaping clip in August on a dry, overcast day." },
        { season: "Autumn", action: "Collect fallen and clipped leaves, clean tools and avoid late nitrogen that produces vulnerable soft growth." },
        { season: "Winter", action: "Check snow load and wind scorch. Do not mistake cold bronzing for thirst or blight without inspecting stems and leaf lesions." },
      ],
      problems: [
        { name: "Box-tree caterpillar", sign: "Webbing, stripped leaves, green-black droppings and caterpillars", response: "Inspect the interior, hand-remove where practical and follow current targeted control guidance; repeat monitoring is essential." },
        { name: "Box blight", sign: "Black stem streaks, dark leaf spots and rapid defoliation", response: "Isolate affected tools and clippings, improve airflow and hygiene, and confirm the disease before deciding whether removal is necessary." },
        { name: "Winter bronzing", sign: "Orange or bronze outer foliage after cold or wind", response: "Check stems and buds. If tissue is alive, wait for spring recovery rather than watering or cutting immediately." },
      ],
      caution: "Box is harmful if eaten, including to dogs. Wear gloves for prolonged clipping and collect all cut material rather than leaving it where pets can reach it.",
      about: "Buxus sempervirens is native to Britain and parts of Europe, North Africa and western Asia. Its natural form is a large evergreen shrub or small tree, with small yellowish spring flowers. Centuries of clipping created its familiar garden role as formal edging and topiary, but its current care must account for introduced caterpillars and fungal blight.",
      provenanceNote: "Species identity is secure; the hedge is recorded as common box rather than a dwarf cultivar because no cultivar label survives.",
      botanical: [
        { label: "Family", value: "Buxaceae" }, { label: "Genus", value: "Buxus" },
        { label: "Botanical name", value: "Buxus sempervirens" }, { label: "Plant type", value: "Evergreen shrub or small tree" },
        { label: "Native to Britain or Ireland", value: "Yes" }, { label: "Habit", value: "Naturally bushy; clipped at Oak Lodge" },
        { label: "Time to mature", value: "10–20 years unclipped" }, { label: "Propagation", value: "Semi-ripe cuttings in summer" },
      ],
      oakLodge: { location: "Full right edge of Flower Bed 1", added: "Established before the 2026 journal", role: "Low formal evergreen boundary", observation: "Maintained as clipped edging rather than allowed to reach the species’ natural size.", status: "Record caterpillar and blight inspections; health should take priority over a rigid twice-yearly clipping habit." },
      sources: [RHS.box, OAK_SOURCE],
    },

    "bed1-euonymus": {
      version: 2,
      type: "Golden-variegated evergreen shrub",
      badges: ["Year-round foliage", "Cold-weather colour", "Cultivar unconfirmed"],
      description: "A low evergreen Euonymus fortunei with green leaves edged or splashed in gold, positioned at the front-left corner of Bed 1. The bright foliage supplies colour when flowers are absent and can take pink or reddish tints in cold weather. It resembles familiar golden cultivars such as ‘Emerald ’n’ Gold’, but the label is missing and several selections are similar, so the profile records the observed plant without upgrading that resemblance into a cultivar claim.",
      floweringMonths: ["May", "Jun"],
      facts: [
        { label: "Size", value: "Cultivar dependent", detail: "Keep measured at Oak Lodge rather than assuming a named form" },
        { label: "Position", value: "Sun or part shade", detail: "Better light usually strengthens golden colour" },
        { label: "Soil", value: "Well-drained", detail: "Adaptable to most ordinary garden soils" },
        { label: "Hardiness", value: "Hardy", detail: "Most E. fortunei cultivars tolerate UK winters" },
        { label: "Foliage", value: "Green and gold", detail: "Evergreen; may blush pink in cold" },
        { label: "Identity", value: "E. fortunei cultivar", detail: "Golden cultivar not yet confirmed" },
      ],
      ...euonymusShared,
      about: "Euonymus fortunei is an evergreen, often creeping or climbing shrub from East Asia. Garden cultivars have been selected for compact habit and cream, white or yellow variegation. Tiny flowers are secondary to the foliage. Because multiple golden cultivars overlap in appearance, the original label is needed for a reliable cultivar name.",
      provenanceNote: "Identity confidence: species and golden-variegated character are strong; ‘Emerald ’n’ Gold’ remains a possibility, not a conclusion.",
      botanical: [
        { label: "Family", value: "Celastraceae" }, { label: "Genus", value: "Euonymus" },
        { label: "Botanical name", value: "Euonymus fortunei · golden cultivar unknown" }, { label: "Plant type", value: "Evergreen shrub" },
        { label: "Native range", value: "East Asia" }, { label: "Habit", value: "Low, spreading or climbing with support" },
        { label: "Foliage", value: "Evergreen and golden-variegated" }, { label: "Identity status", value: "Original label or specialist confirmation needed" },
      ],
      oakLodge: { location: "Front-left corner of Flower Bed 1", added: "Established before the 2026 journal", role: "Low golden foliage at the bed edge", observation: "Green-and-gold evergreen leaves develop pink tints during cold weather.", status: "Photograph mature leaves, stems and whole-plant habit together before attempting cultivar confirmation." },
      sources: [RHS.euonymus, OAK_SOURCE],
    },

    "bed1-wintercreeper": {
      version: 2,
      type: "White-variegated evergreen shrub",
      badges: ["Spreading groundcover", "Winter pink tints", "Cultivar unconfirmed"],
      description: "A spreading white-and-green Euonymus fortunei at the front-right of Bed 1. The small evergreen leaves create a pale-edged groundcover and often flush pink in cold weather. Archive filenames refer to both ‘Silver Queen’ and a generic wintercreeper, while the foliage could overlap with ‘Emerald Gaiety’; without a label or decisive mature habit, this record deliberately stays at species level.",
      floweringMonths: ["May", "Jun"],
      facts: [
        { label: "Size", value: "Cultivar dependent", detail: "Spreading at Oak Lodge; mature height still to record" },
        { label: "Position", value: "Sun or part shade", detail: "Tolerates shade; colour is usually brighter with light" },
        { label: "Soil", value: "Well-drained", detail: "Adaptable to ordinary garden soil" },
        { label: "Hardiness", value: "Hardy", detail: "Cold commonly adds pink foliage colour" },
        { label: "Foliage", value: "Green and white", detail: "Evergreen with winter pink tints" },
        { label: "Identity", value: "E. fortunei cultivar", detail: "‘Silver Queen’/‘Emerald Gaiety’ unresolved" },
      ],
      ...euonymusShared,
      about: "White-variegated selections of Euonymus fortunei are widely used as tough groundcover and low shrubs. Some climb when given support, while others remain compact. ‘Emerald Gaiety’ and ‘Silver Queen’ differ in ultimate habit and details of leaf size and variegation, but garden conditions blur those distinctions; a filename is not adequate evidence.",
      provenanceNote: "Identity confidence: species is strong; the competing cultivar names remain explicitly unresolved.",
      botanical: [
        { label: "Family", value: "Celastraceae" }, { label: "Genus", value: "Euonymus" },
        { label: "Botanical name", value: "Euonymus fortunei · white-variegated cultivar unknown" }, { label: "Plant type", value: "Evergreen spreading shrub" },
        { label: "Native range", value: "East Asia" }, { label: "Habit", value: "Spreading; may climb with support" },
        { label: "Foliage", value: "Evergreen, white-margined" }, { label: "Identity status", value: "‘Silver Queen’ or ‘Emerald Gaiety’ not resolved" },
      ],
      oakLodge: { location: "Front-right of Flower Bed 1", added: "Established before the 2026 journal", role: "Pale evergreen groundcover along the bed edge", observation: "White-and-green leaves develop pink tints in cold weather and spread low across the front.", status: "Compare leaf size and mature habit with verified plants before accepting either archived cultivar filename." },
      sources: [RHS.euonymus, OAK_SOURCE],
    },

    "bed1-dahlia": {
      version: 2,
      type: "Dark-leaved tuberous perennial",
      badges: ["Red flowers", "Pollinator-friendly form", "Cultivar unconfirmed"],
      description: "A dark-leaved, red-flowered Dahlia of the open-centred ‘Bishop’ style, planted near the centre of Bed 1. Bronze-black foliage supplies contrast from late spring, then single or near-single red flowers carry the display from summer until frost. The open centre gives insects access to pollen, unlike tightly doubled decorative dahlias. No cultivar label survives, so ‘Bishop type’ describes its appearance rather than naming it ‘Bishop of Llandaff’.",
      floweringMonths: ["Jul", "Aug", "Sep", "Oct"],
      facts: [
        { label: "Size", value: "About 60–120cm", detail: "Provisional Bishop-type range; measure this plant" },
        { label: "Position", value: "Full sun", detail: "Warm, sheltered and supported before it flops" },
        { label: "Soil", value: "Fertile, moist, drained", detail: "Needs moisture in growth but not winter waterlogging" },
        { label: "Hardiness", value: "Tender tubers", detail: "Top growth dies at frost; tubers need protection" },
        { label: "Flowers", value: "Open-centred red", detail: "Accessible to pollinating insects" },
        { label: "Identity", value: "Bishop-type Dahlia", detail: "Named cultivar not confirmed" },
      ],
      ...dahliaShared,
      about: "Dahlias are tender tuberous perennials from Mexico and Central America, transformed by breeding into thousands of garden cultivars. Dark-leaved, open-centred selections owe much of their popularity to ‘Bishop of Llandaff’, but many related cultivars and seedlings share the same general look. Flower colour and dark foliage alone do not prove that famous name.",
      provenanceNote: "Identity confidence: Dahlia and Bishop-type appearance are secure; the precise cultivar remains unconfirmed.",
      botanical: [
        { label: "Family", value: "Asteraceae" }, { label: "Genus", value: "Dahlia" },
        { label: "Botanical name", value: "Dahlia · dark-leaved red Bishop type" }, { label: "Plant type", value: "Tuberous herbaceous perennial" },
        { label: "Native genus range", value: "Mexico and Central America" }, { label: "Foliage", value: "Dark bronze; deciduous at frost" },
        { label: "Flower form", value: "Single or open-centred" }, { label: "Identity status", value: "Cultivar label needed" },
      ],
      oakLodge: { location: "Centre of Flower Bed 1", added: "2026 journal plant", role: "Dark foliage and red late-season flower", observation: "Bronze-black foliage was present from May, with red flowers expected from July to frost.", status: "Photograph the mature flower face, reverse, foliage and whole plant before any cultivar comparison." },
      sources: [RHS.dahlia, OAK_SOURCE],
    },

    "bed1-dahlia-yellow": {
      version: 2,
      type: "Dark-leaved tuberous perennial",
      badges: ["Yellow flowers", "Added June 2026", "Cultivar unconfirmed"],
      description: "A dark-leaved Dahlia with yellow flowers, added to the centre of Bed 1 in June 2026. Its bronze-black foliage provides colour before the buds open, while the yellow blooms create a sharper contrast than the neighbouring red Bishop-type plant. It is recorded as a Bishop-type garden Dahlia because its exact cultivar was not retained; that honest description is more useful than assigning a famous name from foliage alone.",
      floweringMonths: ["Jul", "Aug", "Sep", "Oct"],
      facts: [
        { label: "Size", value: "About 60–120cm", detail: "Provisional type range; record the first mature season" },
        { label: "Position", value: "Full sun", detail: "Warm, sheltered and supported" },
        { label: "Soil", value: "Fertile, moist, drained", detail: "Avoid both summer drought and winter waterlogging" },
        { label: "Hardiness", value: "Tender tubers", detail: "Lift or protect from freezing conditions" },
        { label: "Flowers", value: "Yellow", detail: "Expected July to the first frost" },
        { label: "Identity", value: "Bishop-type Dahlia", detail: "Named cultivar not confirmed" },
      ],
      ...dahliaShared,
      about: "Dark-leaved dahlias are a broad garden group rather than one cultivar. Many modern selections descend from or resemble the open-centred Bishop series, but yellow flowers occur in multiple named and unnamed forms. Recording the actual plant’s height, flower structure and overwintering performance will be more valuable than guessing from a nursery-style description.",
      provenanceNote: "Identity confidence: genus, flower colour and dark-leaved type are known; cultivar remains intentionally unassigned.",
      botanical: [
        { label: "Family", value: "Asteraceae" }, { label: "Genus", value: "Dahlia" },
        { label: "Botanical name", value: "Dahlia · dark-leaved yellow Bishop type" }, { label: "Plant type", value: "Tuberous herbaceous perennial" },
        { label: "Native genus range", value: "Mexico and Central America" }, { label: "Foliage", value: "Dark bronze; deciduous at frost" },
        { label: "Flower colour", value: "Yellow" }, { label: "Identity status", value: "Cultivar label needed" },
      ],
      oakLodge: { location: "Centre of Flower Bed 1", added: "June 2026", role: "Dark foliage with bright yellow late-season colour", observation: "Planted with bronze-black foliage; the first full flowering season is still being documented.", status: "Keep its winter label tied to the tubers so the yellow and red plants are not confused after lifting." },
      sources: [RHS.dahlia, OAK_SOURCE],
    },

    "bed1-hosta-gold": {
      version: 2,
      type: "Golden variegated herbaceous perennial",
      badges: ["Confirmed cultivar", "Shade foliage", "Moved June 2026"],
      description: "‘Gold Standard’ is a medium-to-large Hosta whose broad heart-shaped leaves change as the season develops: green centres brighten towards gold while irregular darker green margins remain. Pale lavender flower bells rise above the mound in midsummer. The plant moved from Bed 2 into Bed 1 in June 2026, so its current spread and leaf colour will reflect both the move and the amount of light it receives.",
      floweringMonths: ["Jul", "Aug"],
      facts: [
        { label: "Size", value: "45–60cm high", detail: "Mature spread can approach 90cm" },
        { label: "Position", value: "Part shade", detail: "Some gentle light develops the golden centre" },
        { label: "Soil", value: "Moist and fertile", detail: "Humus-rich and moisture-retentive, with drainage" },
        { label: "Hardiness", value: "Fully hardy", detail: "Dormant crown survives below ground" },
        { label: "Foliage", value: "Gold and green", detail: "Centres brighten through the season" },
        { label: "Flowers", value: "Pale lavender", detail: "Bell-shaped flowers on taller stems" },
      ],
      ...hostaShared,
      about: "‘Gold Standard’ is a long-established sport of Hosta ‘Fortunei Hyacinthina’ and became an influential gold-centred cultivar. Its leaf centre changes from greener spring tones towards yellow-gold, with the speed and intensity affected by light. Newly divided or moved plants may take several seasons to reach their characteristic mature mound.",
      provenanceNote: "Cultivar identity is supported by the recorded name and characteristic gold-centred, green-margined foliage.",
      botanical: [
        { label: "Family", value: "Asparagaceae" }, { label: "Genus", value: "Hosta" },
        { label: "Botanical name", value: "Hosta ‘Gold Standard’" }, { label: "Plant type", value: "Herbaceous perennial" },
        { label: "Foliage", value: "Deciduous; gold-centred with green margins" }, { label: "Habit", value: "Broad, clump-forming mound" },
        { label: "Flowers", value: "Pale lavender in midsummer" }, { label: "Propagation", value: "Division; seedlings do not remain true" },
      ],
      oakLodge: { location: "Mid-bed in Flower Bed 1", added: "Moved from Flower Bed 2 in June 2026", role: "Golden broad-leaved contrast beneath the canopy", observation: "Re-established after its move with the expected green-and-gold foliage and lilac flowers.", status: "Allow several seasons before judging final spread or whether the new light level gives the best gold colour." },
      sources: [RHS.hosta, OAK_SOURCE],
    },

    "bed1-little-heath": {
      version: 2,
      type: "Compact evergreen acid-loving shrub",
      badges: ["Seven-plant border", "Spring flowers", "Harmful if eaten"],
      description: "‘Little Heath’ is a compact Pieris with small evergreen leaves edged in silvery white and young growth flushed pink. Sparse white urn-shaped flowers open from pink buds in spring, but the fine variegated foliage is the more dependable feature. Seven plants form a repeated low border at the front of Bed 1, where their slow growth and consistent colouring create a deliberate edge rather than seven separate specimens.",
      floweringMonths: ["Mar", "Apr", "May"],
      facts: [
        { label: "Size", value: "About 60cm", detail: "RHS describes a compact shrub; may slowly approach 1m" },
        { label: "Position", value: "Sun or part shade", detail: "Sheltered from cold drying wind" },
        { label: "Soil", value: "Acidic", detail: "Humus-rich, moist but well-drained" },
        { label: "Hardiness", value: "H5", detail: "Hardy in most UK gardens; protect young plants" },
        { label: "Foliage", value: "Evergreen", detail: "Green with white margins and pink young shoots" },
        { label: "Safety", value: "Harmful if eaten", detail: "Wear gloves; keep pets from chewing" },
      ],
      careGuide: [
        { title: "Maintain an acidic root zone", summary: "Use leaf mould, composted bark or ericaceous material as mulch.", detail: "Pieris cannot use nutrients normally in alkaline soil. Keep lime-rich materials away and use rainwater where practical during dry spells." },
        { title: "Water the seven plants individually", summary: "A continuous border can hide one drying root ball.", detail: "Check along the whole row during establishment rather than assuming one moisture reading represents every plant. Keep soil moist, never stagnant." },
        { title: "Prune very lightly", summary: "Remove damaged growth and faded flowers; preserve the compact natural shape.", detail: "Routine shearing would spoil the variegated tips. If one plant outgrows the line, shorten individual shoots after flowering rather than clipping the entire border." },
      ],
      waterSigns: { under: "Young shoots droop, leaf edges brown and individual plants lose lustre. Check each root ball separately and soak with rainwater if dry.", over: "Yellowing, black stem bases or collapse in wet soil indicate root stress or Phytophthora. Stop watering and improve drainage." },
      seasons: [
        { season: "Spring", action: "Watch pink buds open to white flowers, remove winter damage and top up an acidic mulch after the soil is moist." },
        { season: "Summer", action: "Check all seven root balls in dry weather, use rainwater where practical and inspect leaves for lacebug stippling." },
        { season: "Autumn", action: "Leave new growth to harden naturally; avoid late feeding and clear diseased fallen leaves from within the border." },
        { season: "Winter", action: "Protect young plants from drying wind and avoid waterlogged soil. Wait until spring before pruning cold-marked tips." },
      ],
      problems: [
        { name: "Pieris lacebug", sign: "Pale stippling above and dark specks beneath leaves", response: "Confirm insects on leaf undersides, remove heavily affected foliage and improve plant vigour without overfeeding." },
        { name: "Phytophthora root rot", sign: "Dull leaves, blackened bases or sudden collapse in wet soil", response: "Improve drainage and isolate affected plants; severe cases may need removal to protect the rest of the seven-plant line." },
        { name: "Alkaline-soil chlorosis", sign: "New leaves turn yellow while veins remain greener", response: "Check pH and drainage, maintain acidic organic matter and avoid lime-rich compost or tap-water accumulation." },
      ],
      caution: "Pieris is harmful if eaten. Wear gloves when pruning and prevent pets or children from chewing foliage or flowers.",
      about: "Pieris japonica is a Japanese evergreen shrub in the heath family. ‘Little Heath’ is a compact variegated cultivar selected for small white-margined leaves, pink-tinged new growth and restrained size. Its white spring flowers are often sparse, so it should be valued principally as a foliage shrub rather than judged by flower count.",
      provenanceNote: "Cultivar identity is supported by the retained name, seven-plant planting record and characteristic compact variegation.",
      botanical: [
        { label: "Family", value: "Ericaceae" }, { label: "Genus", value: "Pieris" },
        { label: "Botanical name", value: "Pieris japonica ‘Little Heath’" }, { label: "Plant type", value: "Compact evergreen shrub" },
        { label: "Native to Britain or Ireland", value: "No" }, { label: "Habit", value: "Bushy and slow-growing" },
        { label: "Time to mature", value: "10–20 years" }, { label: "Name status", value: "Accepted" },
      ],
      oakLodge: { location: "Front edge of Flower Bed 1", added: "Seven plants added June 2026", role: "Repeated low variegated border", observation: "Cream-edged leaves and pink-red young shoots form a continuous pale line at the front of the bed.", status: "Track each plant separately through establishment so a weak member of the row is not hidden by its neighbours." },
      sources: [RHS.pieris, OAK_SOURCE],
    },
  };

  Object.entries(profiles).forEach(([plantId, profile]) => {
    const record = (window.OAK.PLANT_BY_ID || {})[plantId];
    if (!record) throw new Error(`Authored profile has no matching plant: ${plantId}`);
    record.plant.profile = profile;
  });

  window.OAK.AUTHORED_PLANT_PROFILES = profiles;
})();
