// Oak Lodge Garden — authored houseplant profiles
// Indoor specimens use the same researched profile contract as garden plants,
// with context labels for room placement, year-round foliage and pet safety.

(() => {
  const plantId = "house-hallway-kentia-palm";
  const record = (window.OAK.PLANT_BY_ID || {})[plantId];
  if (!record) throw new Error(`Houseplant profile has no matching plant: ${plantId}`);

  const profile = {
    version: 2,
    environment: "indoor",
    type: "Evergreen indoor palm",
    badges: ["High-confidence identification", "Bright indirect light", "Slow growing"],
    petSafety: {
      tone: "safe",
      label: "Non-toxic to cats & dogs",
      detail: "The ASPCA lists Howea forsteriana as non-toxic to cats and dogs. Chewing any houseplant is still best discouraged.",
    },
    display: {
      cycleTitle: "Indoor display",
      cycleNote: "Evergreen foliage is the display; Kentia palms seldom flower in ordinary indoor conditions.",
      cycleAria: "Evergreen indoor foliage throughout the year",
      cycleEmpty: "foliage all year",
      roleLabel: "Role in the room",
      fieldNoteLabel: "Condition note · July ’26",
      sourceIntro: "Identification and care are source-backed; position, photographs, container details and condition are Oak Lodge observations.",
      waterBandNote: "Check the compost about weekly in this bright-indirect position, but water only after the upper few centimetres have dried.",
    },
    description:
      "This grouped palm makes a dark-green architectural landmark beside the ground-floor staircase. Its broad, leathery leaflets hang in loose arcs from relatively open fronds, strongly favouring Kentia palm over the finer, narrow-leafleted Parlour palm. Several separate Kentia seedlings are commonly planted together for a fuller indoor specimen, which explains the multiple stems in one pot.",
    floweringMonths: [],
    facts: [
      { label: "Indoor size", value: "1.5–3m", detail: "Slow-growing in a container; several seedlings share this pot" },
      { label: "Light", value: "Bright indirect", detail: "Tolerates lower light but protect the fronds from strong direct sun" },
      { label: "Temperature", value: "16–27°C", detail: "Keep away from cold draughts and sudden temperature changes" },
      { label: "Humidity", value: "Moderate", detail: "Average rooms are tolerated; dry heated air can worsen brown tips" },
      { label: "Pot & compost", value: "Free draining", detail: "Draining nursery pot inside a cachepot; empty every drop of runoff" },
      { label: "Identity", value: "Howea forsteriana", detail: "High-confidence photo identification; retained as assumed until label-confirmed" },
    ],
    careGuide: [
      {
        title: "Keep the light bright but filtered",
        summary: "The hallway position is suitable while the leaves receive good indirect light.",
        detail: "Kentia palms tolerate lower light better than many palms, but growth becomes slower and watering intervals lengthen. Protect the foliage from strong direct sunlight through glass, which can bleach or scorch the broad leaflets.",
      },
      {
        title: "Check compost before every drink",
        summary: "Water when the upper few centimetres have dried, not because a date has arrived.",
        detail: "Water the inner nursery pot thoroughly, let it finish draining, then empty the white cachepot. Never allow the root ball to stand in runoff; permanently wet compost is a greater risk than slight surface dryness.",
      },
      {
        title: "Protect the fronds from dry-room stress",
        summary: "Keep it away from radiators, cold draughts and repeated brushing at the stair turn.",
        detail: "Moderate humidity and stable warmth support clean new growth. Wipe dust gently from both sides of the leaflets and inspect the undersides for spider mites, scale or mealybugs rather than routinely misting a plant that is already wet.",
      },
      {
        title: "Feed and repot conservatively",
        summary: "Monthly feed in active growth is enough; do not disturb a healthy root ball without evidence.",
        detail: "Use a balanced liquid houseplant feed at label strength from spring into early autumn. Repot in spring only when roots are densely congested, moving up by one modest pot size and preserving free drainage.",
      },
    ],
    waterSigns: {
      under: "Leaflets lose their relaxed arch, become dull or fold inward, while tips turn dry and crisp. Confirm that the compost is dry below the surface before soaking and draining the inner pot.",
      over: "Lower fronds yellow while the compost remains wet, the cachepot feels heavy or stem bases soften. Empty all standing water immediately, pause watering and restore air around the roots.",
    },
    seasons: [
      { season: "Spring", action: "Increase moisture checks as daylight and new growth return; begin monthly balanced feed and inspect whether the root ball is genuinely congested." },
      { season: "Summer", action: "Maintain bright filtered light, check compost about weekly and empty the cachepot after every watering; watch for mites during hot, dry spells." },
      { season: "Autumn", action: "Stop routine feeding as growth slows, keep the plant away from colder draughts and lengthen the interval between moisture checks." },
      { season: "Winter", action: "Water sparingly after checking below the surface, maximise indirect daylight and protect the fronds from radiators and sudden cold." },
    ],
    problems: [
      {
        name: "Brown tips or irregular patches",
        sign: "Crisp tips and uneven brown areas, already visible on several July 2026 leaflets",
        response: "Judge only new damage. Check moisture history, standing water, dry heated air, mineral build-up, direct sun and physical rubbing before changing several care factors at once.",
      },
      {
        name: "Spider mites, scale or mealybugs",
        sign: "Fine webbing, pale stippling, sticky leaves, cottony clusters or fixed brown bumps",
        response: "Isolate if necessary, wipe leaves and identify the pest before treatment. Improve humidity and inspect neighbouring houseplants.",
      },
      {
        name: "Root decline",
        sign: "Progressive yellowing, stalled new spears and a root ball that stays wet or smells sour",
        response: "Remove the inner pot, empty runoff and inspect drainage. Do not compensate with feed; damaged roots need air and corrected moisture first.",
      },
    ],
    about:
      "Howea forsteriana is a solitary-trunked palm native to Lord Howe Island. Indoor nursery pots often contain several seedlings to create a fuller plant, but the palm does not naturally sucker. Mature fronds are pinnate, dark green and arching, with leaflets that bend downward. Parlour palm, Chamaedorea elegans, is a smaller, finer-textured palm with narrow linear leaflets and slender green stems.",
    provenanceNote:
      "The broad drooping leaflets, open frond structure and grouped nursery planting support Kentia palm at high confidence. No label has been retained, so the public name remains visibly qualified as assumed.",
    botanical: [
      { label: "Family", value: "Arecaceae" },
      { label: "Genus", value: "Howea" },
      { label: "Species", value: "Howea forsteriana" },
      { label: "Native range", value: "Lord Howe Island" },
      { label: "Foliage", value: "Evergreen, pinnate and leathery" },
      { label: "Identity status", value: "High-confidence assumption; label not retained" },
    ],
    oakLodge: {
      location: "Ground-floor hallway, beside the main staircase",
      added: "Added early 2026",
      role: "Architectural foliage marking the turn beside the staircase",
      observation: "A grouped palm with broad dark-green arching leaflets; several older leaves show brown tips and irregular patches.",
      status: "Use clean new growth as the baseline. Empty the white cachepot after every watering and change only one care variable at a time.",
    },
    sources: [
      {
        title: "Royal Horticultural Society · Kentia palm houseplant care",
        url: "https://www.rhs.org.uk/shows-events/rhs-urban-show/houseplant-profiles/houseplants-for-humidity",
        note: "Indoor light, watering, drainage, humidity, temperature and feeding",
      },
      {
        title: "North Carolina Extension · Howea forsteriana",
        url: "https://plants.ces.ncsu.edu/plants/howea-forsteriana/",
        note: "Kentia habit, grouped nursery planting, leaflet form and common indoor problems",
      },
      {
        title: "North Carolina Extension · Chamaedorea elegans",
        url: "https://plants.ces.ncsu.edu/plants/chamaedorea-elegans/",
        note: "Parlour palm comparison: fine texture, narrow linear leaflets and slender stems",
      },
      {
        title: "Plants of the World Online · Howea forsteriana",
        url: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:667434-1",
        note: "Accepted botanical name, family and native range",
      },
      {
        title: "ASPCA · Kentia Palm",
        url: "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/kentia-palm",
        note: "Listed as non-toxic to cats and dogs",
      },
      {
        title: "Oak Lodge houseplant record",
        url: null,
        note: "Position, bright indirect light, acquisition history, container arrangement and July 2026 photographs",
      },
    ],
  };

  const makeFernProfile = ({ plantId, type, badges, petSafety, description, facts, careGuide, waterSigns, problems, about, provenanceNote, botanical, oakLodge, sources, waterBandNote }) => ({
    version: 2,
    environment: "indoor",
    type,
    badges,
    petSafety,
    display: {
      cycleTitle: "Indoor display",
      cycleNote: "Evergreen fronds are the display; growth naturally slows in lower winter light.",
      cycleAria: "Evergreen indoor foliage throughout the year",
      cycleEmpty: "foliage all year",
      roleLabel: "Role in the room",
      fieldNoteLabel: "Condition note · September ’26",
      sourceIntro: "Identification and care are source-backed; placement, photographs and history are Oak Lodge observations.",
      waterBandNote,
    },
    description,
    floweringMonths: [],
    facts,
    careGuide,
    waterSigns,
    seasons: [
      { season: "Spring", action: "Increase moisture checks with stronger light; feed lightly only while healthy new fronds are forming." },
      { season: "Summer", action: "Keep light filtered, maintain humidity and check the growing medium regularly without leaving it waterlogged." },
      { season: "Autumn", action: "Stop routine feeding as growth slows and keep the plant clear of cool draughts." },
      { season: "Winter", action: "Use the brightest gentle light available, water less often after checking below the surface and protect foliage from radiator heat." },
    ],
    problems,
    about,
    provenanceNote,
    botanical,
    oakLodge,
    sources,
  });

  const gioiaId = "house-sitting-asplenium-gioia";
  const gioiaRecord = (window.OAK.PLANT_BY_ID || {})[gioiaId];
  if (!gioiaRecord) throw new Error("Missing Gioia record");
  const gioiaProfile = makeFernProfile({
    plantId: gioiaId,
    type: "Crested bird’s nest fern",
    badges: ["Label confirmed", "Bright indirect light", "Humidity-loving"],
    petSafety: { tone: "note", label: "Pet safety not verified here", detail: "The retained passport confirms the identity, but this notebook has not located a cultivar-specific pet-safety listing. Discourage chewing any houseplant." },
    description: "This compact, ruffled green rosette is a crested bird’s nest fern. Its retained plant passport identifies it precisely as Asplenium antiquum ‘Gioia’, so the name is confirmed rather than a photo-based best fit. It moved from the sitting-room window to the kitchen / dining window in September 2026.",
    facts: [
      { label: "Indoor size", value: "Up to 60–90cm", detail: "A compact rosette in a pot; the named cultivar has characteristically crested frond tips" },
      { label: "Light", value: "Bright indirect", detail: "Direct sun can scorch the fronds; lower light slows growth" },
      { label: "Water", value: "Evenly moist", detail: "Allow only the surface to begin drying; never leave the pot saturated" },
      { label: "Humidity", value: "High preferred", detail: "Keep away from dry radiator air and boost surrounding humidity where practical" },
      { label: "Crown", value: "Keep it dry", detail: "Water the compost, not the centre of the rosette, to reduce rot risk" },
      { label: "Identity", value: "Label confirmed", detail: "Plant passport photographed 1 September 2026" },
    ],
    careGuide: [
      { title: "Hold the light just off direct sun", summary: "The window position should stay bright but filtered.", detail: "Direct sun through glass can burn the glossy fronds. Move it back from the pane or use a sheer barrier if strong sun reaches the leaves." },
      { title: "Water around the edge", summary: "Keep compost gently moist, never sodden.", detail: "Test the upper few centimetres, then water the growing medium around the pot edge. Do not pour water into the nest-like centre, where it can sit and encourage crown rot." },
      { title: "Make humidity more consistent", summary: "Dry heated air is more damaging than ordinary still air.", detail: "Keep it away from radiator flow. A pebble tray or grouping plants nearby can raise local humidity without making the crown wet." },
      { title: "Feed gently in growth", summary: "A weak monthly feed from late spring to summer is sufficient.", detail: "Use a half-strength general liquid feed only while the fern is actively producing healthy fronds, then stop as light levels fall." },
    ],
    waterSigns: { under: "Fronds lose their fresh tension, tips crisp and the compost feels dry below the surface. Re-wet gradually and review dry air as well as the watering interval.", over: "The centre darkens or softens, fronds yellow and the compost stays heavy. Stop watering, empty any cachepot and improve drainage and airflow." },
    problems: [
      { name: "Crown rot", sign: "Dark, soft growth at the centre of the rosette", response: "Keep water out of the crown, pause watering and assess drainage. Remove only completely collapsed fronds." },
      { name: "Brown edges", sign: "Crisp brown tips or margins", response: "Check for dry compost, direct sun, radiator heat and low humidity before increasing water." },
      { name: "Scale insects", sign: "Fixed brown bumps or sticky residue on fronds", response: "Isolate if needed, wipe gently and identify the pest before choosing a treatment." },
    ],
    about: "Asplenium antiquum is an evergreen fern from Taiwan that forms a rosette of glossy fronds. RHS describes it as a tender houseplant for bright indirect light, moist but well-drained compost and moderate humidity. ‘Gioia’ is confirmed by the photographed plant passport.",
    provenanceNote: "The identity is supported by a photographed UK plant passport dated 1 September 2026, naming Asplenium antiquum ‘Gioia’.",
    botanical: [{ label: "Family", value: "Aspleniaceae" }, { label: "Genus", value: "Asplenium" }, { label: "Species", value: "Asplenium antiquum" }, { label: "Cultivar", value: "‘Gioia’ · label confirmed" }, { label: "Native range", value: "Taiwan (species)" }, { label: "Foliage", value: "Evergreen rosette of glossy, crested fronds" }],
    oakLodge: { location: "Ground-floor kitchen / dining room, at the window marked in September 2026", added: "Recorded and moved September 2026", role: "Small ruffled foliage specimen at the kitchen window", observation: "Compact grey-potted fern with clean, crested green fronds; passport retained and photographed in its former sitting-room position.", status: "Keep the crown dry and confirm that the new kitchen-window light remains bright but filtered." },
    sources: [{ title: "RHS · Asplenium antiquum", url: "https://www.rhs.org.uk/plants/1721/asplenium-antiquum/details", note: "Identity, growing conditions, size, humidity and feeding guidance" }, { title: "RHS · Thirsty houseplants: bird’s nest fern", url: "https://www.rhs.org.uk/shows-events/rhs-urban-show/houseplant-profiles/houseplants-for-humidity", note: "Bright indirect light, consistently moist compost and keeping water out of the centre" }, { title: "Oak Lodge houseplant record", url: null, note: "Plant passport, September 2026 photographs and placement" }],
    waterBandNote: "Check the compost two or three times a week in a warm, bright room, watering only once the surface begins to dry.",
  });

  const staghornId = "house-hallway-staghorn-fern";
  const staghornRecord = (window.OAK.PLANT_BY_ID || {})[staghornId];
  if (!staghornRecord) throw new Error("Missing Staghorn record");
  const staghornProfile = makeFernProfile({
    plantId: staghornId,
    type: "Epiphytic staghorn fern",
    badges: ["High-confidence identification", "Bright indirect light", "Gift from Nicola"],
    petSafety: { tone: "safe", label: "Non-toxic to cats & dogs", detail: "ASPCA lists Platycerium bifurcatum as non-toxic to cats and dogs. Chewing any houseplant is still best discouraged." },
    description: "This dramatic Staghorn fern makes an architectural hallway specimen, with long forked green antler fronds growing around its brown shield fronds. It was a gift from Katie’s mum, Nicola, who needed to make room at her house.",
    facts: [
      { label: "Habit", value: "Epiphyte", detail: "In nature it grows on trees rather than in ordinary soil" },
      { label: "Light", value: "Bright indirect", detail: "Strong direct sun can scorch the fronds" },
      { label: "Water", value: "Moist, free-draining", detail: "Water the growing medium only when it is beginning to dry; drain excess completely" },
      { label: "Humidity", value: "Moderate to high", detail: "Keep clear of direct radiator heat and very dry air" },
      { label: "Shield fronds", value: "Leave in place", detail: "The papery brown base fronds protect the plant and are not dead foliage to remove" },
      { label: "Pet safety", value: "Non-toxic listed", detail: "ASPCA listing for Platycerium bifurcatum" },
    ],
    careGuide: [
      { title: "Give it a bright, sheltered position", summary: "Keep the fern in strong indirect light, away from harsh glass sun.", detail: "The hallway location should also be checked for cold door draughts and radiator heat; either extreme dries and marks the antler fronds." },
      { title: "Water the medium, then let it drain", summary: "Moisture should be regular but never stagnant.", detail: "Check the medium rather than watering by routine. Water thoroughly when it has begun to dry, then ensure there is no standing water beneath the plant." },
      { title: "Respect the brown shield fronds", summary: "They are a working part of the plant, not a failure.", detail: "Do not peel away or cut the dry-looking brown basal shields. They help catch moisture and organic matter around the root area." },
      { title: "Feed only while actively growing", summary: "Use a weak houseplant feed in spring and summer.", detail: "Apply at label dilution to moist growing medium and stop routine feeding as light and growth decline in autumn." },
    ],
    waterSigns: { under: "Antler fronds feel limp or dull and the growing medium is dry. Water thoroughly, allow complete drainage and check whether radiator heat is accelerating drying.", over: "The base smells sour, the medium remains heavy or soft dark patches develop. Pause watering and restore drainage and air around the roots." },
    problems: [
      { name: "Overwatered base", sign: "Sour, wet medium or soft dark tissue at the base", response: "Remove standing water, pause watering and make sure the container can drain freely." },
      { name: "Heat or draught stress", sign: "Crisping tips and fronds losing their firm outline", response: "Move it out of radiator flow and away from cold porch draughts, then review the moisture level." },
      { name: "Scale or mealybugs", sign: "Sticky residue, cottony clusters or fixed bumps", response: "Inspect the crevices and undersides, isolate if needed and identify the pest before treatment." },
    ],
    about: "Platycerium bifurcatum is a staghorn fern from tropical and subtropical forests of Australia and Southeast Asia. It is an epiphyte: it grows on another plant, usually a tree, without taking nourishment from that host. Its green antler fronds funnel moisture to the brown shield fronds at the base.",
    provenanceNote: "The forked antler fronds and layered shield fronds make this a high-confidence Staghorn fern identification. Its personal history is retained: Nicola gifted it when there was no room for it at her house.",
    botanical: [{ label: "Family", value: "Polypodiaceae" }, { label: "Genus", value: "Platycerium" }, { label: "Species", value: "Platycerium bifurcatum" }, { label: "Habit", value: "Evergreen epiphytic fern" }, { label: "Native range", value: "Australia and Southeast Asia" }, { label: "Foliage", value: "Forked antler fronds with persistent brown shield fronds" }],
    oakLodge: { location: "Ground-floor hallway, by the porch and radiator", added: "Gift from Nicola · recorded September 2026", role: "Large sculptural foliage specimen at the entrance hall", observation: "A mature, spreading Staghorn fern displayed on a wooden stand; shield fronds and long green antler fronds are clearly visible.", status: "Keep the base free-draining and protect it from direct radiator heat and cold porch draughts." },
    sources: [{ title: "RHS · Wisley’s Staghorn Fern", url: "https://collections.rhs.org.uk/view/415541/wisley-s-staghorn-fern-a-century-old-marvel", note: "Epiphytic habit, antler and shield fronds, and native habitat" }, { title: "RHS · Plants Before Time", url: "https://www.rhs.org.uk/gardens/pdf/wisley/rhs-plants-before-time-booklet.pdf", note: "Staghorn care as a houseplant and watering the roots and absorbent fronds" }, { title: "ASPCA · Common Staghorn Fern", url: "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/common-staghorn-fern", note: "Listed as non-toxic to cats and dogs" }, { title: "Oak Lodge houseplant record", url: null, note: "Gift history from Nicola, September 2026 photographs and placement" }],
    waterBandNote: "Check the medium about weekly and water only once it begins to dry; direct radiator heat may call for an extra check.",
  });

  const mixedSpiderId = "house-sitting-mixed-spider-plant";
  const mixedPalmId = "house-sitting-mixed-parlour-palm";
  const mixedArrowId = "house-sitting-mixed-arrowhead-vine";
  const mixedSpiderRecord = (window.OAK.PLANT_BY_ID || {})[mixedSpiderId];
  const mixedPalmRecord = (window.OAK.PLANT_BY_ID || {})[mixedPalmId];
  const mixedArrowRecord = (window.OAK.PLANT_BY_ID || {})[mixedArrowId];
  if (!mixedSpiderRecord || !mixedPalmRecord || !mixedArrowRecord) throw new Error("Missing shared gift-pot houseplant record");

  const mixedDisplay = (waterBandNote) => ({
    cycleTitle: "Indoor display",
    cycleNote: "Evergreen foliage is the display; growth naturally slows in lower winter light.",
    cycleAria: "Evergreen indoor foliage throughout the year",
    cycleEmpty: "foliage all year",
    roleLabel: "Role in the shared planter",
    fieldNoteLabel: "Condition note · September ’26",
    sourceIntro: "Identification and care are source-backed; the gift history, shared container, placement and photographs are Oak Lodge observations.",
    waterBandNote,
  });
  const mixedSeasons = [
    { season: "Spring", action: "Increase moisture checks as active growth returns, begin light feeding and inspect whether the three root systems are becoming too congested." },
    { season: "Summer", action: "Keep the shared pot in bright filtered light, check below the surface before watering and drain every excess drop." },
    { season: "Autumn", action: "Stop routine feeding as growth slows, remove only spent or fully damaged foliage and keep the planter away from cold draughts." },
    { season: "Winter", action: "Maximise gentle daylight, water less often after checking the compost and keep the foliage clear of radiator heat." },
  ];

  const mixedSpiderProfile = {
    version: 2,
    environment: "indoor",
    type: "Variegated spider plant",
    badges: ["High-confidence species", "‘Vittatum’ assumed", "Gift from Nicola"],
    petSafety: { tone: "safe", label: "Non-toxic to cats & dogs", detail: "ASPCA lists Chlorophytum as non-toxic to cats and dogs. Chewing any houseplant is still best discouraged." },
    display: mixedDisplay("Check the shared compost about weekly and water only after the surface begins to dry; all three plants receive the same drink."),
    description: "The dominant cascading plant in Nicola’s mixed gift pot is a Spider Plant. Its creamy central leaf stripe, green margins and long runners carrying young plantlets closely fit Chlorophytum comosum ‘Vittatum’; the cultivar remains visibly assumed because no label has been retained.",
    floweringMonths: [],
    facts: [
      { label: "Habit", value: "Arching clump", detail: "Long striped leaves form a dense fountain over the shared planter" },
      { label: "Light", value: "Bright indirect", detail: "Tolerates lower light; hot direct sun can mark the foliage" },
      { label: "Water", value: "Moderate", detail: "Let the surface begin drying, then soak and drain the shared pot" },
      { label: "Plantlets", value: "Many runners", detail: "Young plants can be rooted while attached or removed once rooted" },
      { label: "Identity", value: "‘Vittatum’ assumed", detail: "Central creamy stripes and especially long arching leaves support the best fit" },
      { label: "Pet safety", value: "Non-toxic listed", detail: "ASPCA listing for Chlorophytum" },
    ],
    careGuide: [
      { title: "Keep the window light filtered", summary: "Bright indirect light maintains clean variegation.", detail: "The sitting-room window is useful light, but move the planter back or filter the glass if strong direct sun begins bleaching or scorching the leaves." },
      { title: "Water the shared root ball, then drain", summary: "Use the compost, not a calendar, to decide.", detail: "Test below the surface in several places because the large clump can hide dry pockets. Water thoroughly only when the surface is beginning to dry and never leave runoff in the outer container." },
      { title: "Choose which plantlets to keep", summary: "The long runners are healthy propagation growth.", detail: "Root wanted plantlets in small pots while still attached, then cut the connecting stem. Remove spent flowering stems only when no more plantlets are wanted." },
      { title: "Review crowding in spring", summary: "Three vigorous species are sharing one root space.", detail: "If water runs straight through, the centre stays dry or growth weakens, slide out the root ball in spring and decide whether to divide the Spider Plant or separate the three species." },
    ],
    waterSigns: { under: "Leaves fold, lose tension or develop dry brown tips while the compost is dry below the surface. Soak the whole shared root ball and let it drain.", over: "Lower leaves yellow, the crown softens or the pot stays heavy for many days. Empty runoff, pause watering and check that the shared container drains freely." },
    seasons: mixedSeasons,
    problems: [
      { name: "Brown tips", sign: "Crisp points on otherwise healthy striped leaves", response: "Check uneven watering, dry heated air, salt build-up and strong sun before trimming only the dead tissue." },
      { name: "Congested root ball", sign: "Water races through or different parts of the pot dry at different speeds", response: "Inspect in spring and divide or separate only if congestion is confirmed." },
      { name: "Scale insects", sign: "Fixed bumps or sticky residue among the dense leaf bases", response: "Inspect closely, isolate if needed and identify the pest before treatment." },
    ],
    about: "Chlorophytum comosum is an evergreen South African perennial widely grown as a resilient houseplant. ‘Vittatum’ forms long arching leaves with a broad creamy-white central stripe and produces small white flowers and plantlets on trailing stems.",
    provenanceNote: "Species confidence is high from the diagnostic runners and striped leaves. The central stripe and long arching habit make ‘Vittatum’ the leading cultivar, but it remains assumed without a retained label. Nicola, Katie’s mum, gave the complete three-plant pot to Oak Lodge.",
    botanical: [{ label: "Family", value: "Asparagaceae" }, { label: "Genus", value: "Chlorophytum" }, { label: "Species", value: "Chlorophytum comosum" }, { label: "Cultivar", value: "‘Vittatum’ · assumed" }, { label: "Native range", value: "South Africa (species)" }, { label: "Foliage", value: "Evergreen, centrally striped linear leaves" }],
    oakLodge: { location: "Ground-floor sitting room, beside the garden-facing window", added: "Gift from Nicola · recorded September 2026", role: "Dominant cascading canopy of the shared three-plant pot", observation: "A very large clump with numerous long plantlet-bearing runners and some minor brown tips.", status: "Monitor shared-pot drainage and crowding; retain the cultivar qualification until a label or stronger evidence is found." },
    sources: [{ title: "RHS · Chlorophytum comosum ‘Vittatum’", url: "https://www.rhs.org.uk/plants/67933/chlorophytum-comosum-vittatum-v/details", note: "Cultivar foliage, habit, plantlets and growing conditions" }, { title: "RHS · How to grow spider plants", url: "https://www.rhs.org.uk/plants/spider-plants/growing-guide", note: "Indoor light, watering, repotting and propagation guidance" }, { title: "ASPCA · Chlorophytum", url: "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/chlorophytum", note: "Listed as non-toxic to cats and dogs" }, { title: "Oak Lodge houseplant record", url: null, note: "Gift history, shared planter, September 2026 photographs and placement" }],
  };

  const mixedPalmProfile = {
    version: 2,
    environment: "indoor",
    type: "Compact evergreen indoor palm",
    badges: ["High-confidence identification", "Photo identification", "Gift from Nicola"],
    petSafety: { tone: "safe", label: "Non-toxic to cats & dogs", detail: "ASPCA lists Chamaedorea elegans as non-toxic to cats and dogs. Chewing any houseplant is still best discouraged." },
    display: mixedDisplay("Check the shared compost about weekly, watering when it has begun to dry below the surface; avoid keeping the palm’s roots constantly wet."),
    description: "The upright plant rising through Nicola’s mixed gift pot is a Parlour Palm. Its slender clustered stems and compact pinnate fronds with many narrow leaflets strongly fit Chamaedorea elegans; the photo-based identification remains visibly assumed until a label is found.",
    floweringMonths: [],
    facts: [
      { label: "Indoor size", value: "Usually 30–60cm", detail: "Slow growing indoors, though old plants can eventually become larger" },
      { label: "Light", value: "Indirect or light shade", detail: "Forest-understorey foliage scorches in strong direct sun" },
      { label: "Water", value: "Moderate", detail: "Moist but free-draining in growth; less water in winter" },
      { label: "Temperature", value: "Warm room", detail: "RHS recommends roughly 10–27°C, with stronger growth around 20–27°C" },
      { label: "Identity", value: "Chamaedorea elegans", detail: "Fine pinnate fronds and slender stems support a high-confidence photo identification" },
      { label: "Pet safety", value: "Non-toxic listed", detail: "ASPCA listing for Chamaedorea elegans" },
    ],
    careGuide: [
      { title: "Shelter the fine fronds from sun", summary: "Bright indirect light or light shade suits this understorey palm.", detail: "Direct summer sun through the sitting-room glass can scorch or bleach the leaflets. Rotate the shared planter periodically for balanced light." },
      { title: "Avoid permanent wetness", summary: "The palm likes regular moisture with air around its roots.", detail: "Check the shared root ball before watering, soak evenly when it has begun to dry and empty all runoff. Reduce the frequency as winter growth slows." },
      { title: "Keep old fronds until fully brown", summary: "Remove only finished growth at the base.", detail: "Do not cut green leaflet tips into a tidy shape. Remove a frond cleanly at its base only after it has become fully brown." },
      { title: "Feed and repot gently", summary: "Slow growth needs modest feeding and infrequent disturbance.", detail: "Apply a balanced liquid feed monthly during spring and summer. Review the whole mixed root ball in spring if crowding or uneven drying becomes a problem." },
    ],
    waterSigns: { under: "Fine leaflets lose their fresh green colour and tips crisp while the compost feels dry. Water the shared root ball thoroughly and assess dry air.", over: "Lower fronds yellow while the pot remains heavy or stem bases darken. Pause watering, empty runoff and restore drainage." },
    seasons: mixedSeasons,
    problems: [
      { name: "Brown leaflet tips", sign: "Dry points on the fine fronds", response: "Check dry compost, hot sun, radiator air and mineral build-up before changing the watering routine." },
      { name: "Spider mites or thrips", sign: "Fine speckling, webbing or silvery scars", response: "Inspect leaflet undersides, isolate if needed and identify the pest before treatment." },
      { name: "Root stress", sign: "Yellow lower fronds with persistently wet or unevenly drying compost", response: "Check the shared planter’s drainage and consider separation during a spring repot." },
    ],
    about: "Chamaedorea elegans is a small evergreen palm native from southern Mexico to Guatemala. It naturally grows beneath taller rainforest vegetation, explaining its tolerance of indirect light. Nursery pots commonly group several single-stemmed seedlings for a fuller display.",
    provenanceNote: "The fine pinnate fronds, numerous narrow leaflets and slender clustered stems make Parlour palm a high-confidence best fit, retained as assumed without a label. Nicola, Katie’s mum, gave the complete three-plant pot to Oak Lodge.",
    botanical: [{ label: "Family", value: "Arecaceae" }, { label: "Genus", value: "Chamaedorea" }, { label: "Species", value: "Chamaedorea elegans · assumed" }, { label: "Habit", value: "Slow-growing evergreen palm" }, { label: "Native range", value: "Southern Mexico to Guatemala" }, { label: "Foliage", value: "Pinnate fronds with narrow linear leaflets" }],
    oakLodge: { location: "Ground-floor sitting room, beside the garden-facing window", added: "Gift from Nicola · recorded September 2026", role: "Upright fine-textured centre of the shared three-plant pot", observation: "Fresh green central growth rises through the much larger Spider Plant canopy; several older tips are browned.", status: "Protect from strong glass sun and monitor whether the dominant Spider Plant is crowding its roots and light." },
    sources: [{ title: "RHS · How to grow Chamaedorea", url: "https://www.rhs.org.uk/plants/chamaedorea/growing-guide", note: "Identity, habitat, indoor light, temperature, watering and repotting guidance" }, { title: "RHS · Chamaedorea elegans", url: "https://www.rhs.org.uk/plants/29185/chamaedorea-elegans/details", note: "Botanical description, range, size and cultivation" }, { title: "ASPCA · Chamaedorea", url: "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/chamaedorea", note: "Listed as non-toxic to cats and dogs" }, { title: "Oak Lodge houseplant record", url: null, note: "Gift history, shared planter, September 2026 photographs and placement" }],
  };

  const mixedArrowProfile = {
    version: 2,
    environment: "indoor",
    type: "Evergreen tropical vine",
    badges: ["High-confidence species", "Photo identification", "Handle with care"],
    petSafety: { tone: "warn", label: "Harmful if eaten", detail: "Syngonium podophyllum contains insoluble calcium oxalates and is toxic to cats and dogs. Keep it out of reach; sap can also irritate skin and eyes." },
    display: mixedDisplay("Keep the shared compost lightly moist in active growth, but check before watering and reduce the frequency during winter."),
    description: "The smaller arrow-leaved plant tucked beneath the Spider Plant is an Arrowhead Vine. Its juvenile sagittate leaves, pale midrib and climbing stem strongly support Syngonium podophyllum. No cultivar can be resolved from these photographs, and the species remains visibly assumed until labelled.",
    floweringMonths: [],
    facts: [
      { label: "Habit", value: "Climbing vine", detail: "Compact while young, then lengthens and can be guided or allowed to trail" },
      { label: "Light", value: "Bright indirect", detail: "Green forms tolerate partial shade; strong direct sun can scorch" },
      { label: "Water", value: "Lightly moist", detail: "Water freely in active growth, more sparingly in winter, always with drainage" },
      { label: "Temperature", value: "Above 15°C", detail: "RHS rates it H1A for warm indoor conditions" },
      { label: "Identity", value: "Species assumed", detail: "Juvenile arrow-shaped leaves and climbing stem support Syngonium podophyllum" },
      { label: "Safety", value: "Oxalate irritant", detail: "Harmful if eaten and irritating to skin and eyes" },
    ],
    careGuide: [
      { title: "Keep it bright without harsh sun", summary: "Filtered window light maintains compact leafy growth.", detail: "The larger Spider Plant may shade it heavily, so watch new growth for stretching while also preventing direct sun through the glass." },
      { title: "Balance moisture across the shared pot", summary: "This vine prefers slightly steadier moisture than its companions.", detail: "Test the compost around the vine as well as at the pot edge. Water the whole container when needed, drain fully and reduce watering in winter." },
      { title: "Guide or shorten long stems", summary: "Arrowhead Vine naturally becomes a climber.", detail: "Add a small support or trim leggy stems in spring. Wear gloves, keep sap away from eyes and wash tools and hands after pruning." },
      { title: "Keep away from pets and children", summary: "Every part should be treated as harmful if chewed.", detail: "Place the shared planter and any cuttings out of reach. Seek veterinary or medical advice promptly after suspected ingestion or significant sap exposure." },
    ],
    waterSigns: { under: "Leaves droop or curl and the compost feels dry around the vine. Re-wet the shared root ball evenly, then let all excess drain.", over: "Leaves yellow, stems soften or dark patches appear while compost remains wet. Pause watering and restore warmth, airflow and drainage." },
    seasons: mixedSeasons,
    problems: [
      { name: "Leggy growth", sign: "Long gaps between leaves and weak stems leaning through the planter", response: "Increase filtered light and trim in spring if a bushier plant is wanted." },
      { name: "Soft rot or leaf spots", sign: "Water-soaked dark tissue or rapidly spreading spots", response: "Reduce wetness on foliage, improve airflow and remove badly affected tissue with gloves." },
      { name: "Mealybugs or spider mites", sign: "Cottony clusters, stippling or fine webbing", response: "Inspect stems and leaf undersides, isolate if needed and identify the pest before treatment." },
    ],
    about: "Syngonium podophyllum is an evergreen aroid vine native from tropical America. Young plants bear simple arrow-shaped leaves; as stems mature and climb, leaves become divided into several lobes. Indoor flowers are uncommon.",
    provenanceNote: "Juvenile arrow-shaped leaves, pale venation and a climbing stem make Syngonium podophyllum a high-confidence best fit, but the species remains assumed and no cultivar is claimed. Nicola, Katie’s mum, gave the complete three-plant pot to Oak Lodge.",
    botanical: [{ label: "Family", value: "Araceae" }, { label: "Genus", value: "Syngonium" }, { label: "Species", value: "Syngonium podophyllum · assumed" }, { label: "Habit", value: "Evergreen climbing vine" }, { label: "Native range", value: "Tropical America" }, { label: "Foliage", value: "Arrow-shaped when juvenile, divided when mature" }],
    oakLodge: { location: "Ground-floor sitting room, beside the garden-facing window", added: "Gift from Nicola · recorded September 2026", role: "Smaller broad-leaved accent beneath the Spider Plant canopy", observation: "Several juvenile arrow-shaped leaves are visible through the striped foliage; some stems appear shaded by the larger companions.", status: "Keep out of reach, wear gloves for pruning and monitor whether shade and root competition justify separating the planter in spring." },
    sources: [{ title: "RHS · Syngonium podophyllum", url: "https://www.rhs.org.uk/plants/17899/syngonium-podophyllum/details", note: "Identity, mature leaf change, light, temperature, watering, feeding and handling caution" }, { title: "ASPCA · Arrow-Head Vine", url: "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants/arrow-head-vine", note: "Toxicity to cats and dogs, calcium oxalates and ingestion signs" }, { title: "Oak Lodge houseplant record", url: null, note: "Gift history, shared planter, September 2026 photographs and placement" }],
  };

  record.plant.profile = profile;
  gioiaRecord.plant.profile = gioiaProfile;
  staghornRecord.plant.profile = staghornProfile;
  mixedSpiderRecord.plant.profile = mixedSpiderProfile;
  mixedPalmRecord.plant.profile = mixedPalmProfile;
  mixedArrowRecord.plant.profile = mixedArrowProfile;
  window.OAK.AUTHORED_PLANT_PROFILES = window.OAK.AUTHORED_PLANT_PROFILES || {};
  Object.assign(window.OAK.AUTHORED_PLANT_PROFILES, { [plantId]: profile, [gioiaId]: gioiaProfile, [staghornId]: staghornProfile, [mixedSpiderId]: mixedSpiderProfile, [mixedPalmId]: mixedPalmProfile, [mixedArrowId]: mixedArrowProfile });
  window.OAK.HOUSE_PLANT_PROFILES = { [plantId]: profile, [gioiaId]: gioiaProfile, [staghornId]: staghornProfile, [mixedSpiderId]: mixedSpiderProfile, [mixedPalmId]: mixedPalmProfile, [mixedArrowId]: mixedArrowProfile };
})();

// October 2026 birthday additions — explicit researched profiles.
(() => {
  const profiles = {
  "house-sitting-rhipsalis": {
    "version": 2,
    "type": "Trailing epiphytic cactus",
    "badges": [
      "Recorded October 2026",
      "Birthday plants"
    ],
    "description": "The new Rhipsalis hangs beside the sitting-room stair opening, its slender green stems falling in a long curtain. Brad supplied the genus name; species remains unresolved. Care follows mistletoe-cactus guidance provisionally, with observation of this specimen taking priority.",
    "floweringMonths": [],
    "facts": [
      {
        "label": "Habit",
        "value": "Trailing stems",
        "detail": "The October photograph shows a hanging specimen."
      },
      {
        "label": "Light",
        "value": "Bright indirect",
        "detail": "Protect the trails from harsh window sun."
      },
      {
        "label": "Water",
        "value": "Surface drying",
        "detail": "Drain after watering; avoid sustained dryness."
      },
      {
        "label": "Temperature",
        "value": "Warm room",
        "detail": "Keep away from cold draughts."
      },
      {
        "label": "Identity",
        "value": "Rhipsalis sp.",
        "detail": "Species and exact mature size remain unresolved."
      }
    ],
    "careGuide": [
      {
        "title": "Check the hanging pot",
        "summary": "Feel the compost before watering.",
        "detail": "Soak when its surface dries, then drain away from furniture."
      },
      {
        "title": "Protect its long trails",
        "summary": "Keep stems clear of the stairs.",
        "detail": "The purple star records the hanging point; check that walking past does not snag growth."
      },
      {
        "title": "Give filtered light",
        "summary": "Avoid harsh direct sunshine.",
        "detail": "Observe pale or puckered stems and adjust light or moisture after checking the roots."
      }
    ],
    "waterSigns": {
      "under": "Thin trails pucker and lose firmness with dry compost; check the hanging root ball before watering.",
      "over": "Soft dark stems at the base with wet compost suggest decay; drain the pot and remove failed tissue."
    },
    "seasons": [
      {
        "season": "Spring",
        "action": "Watch for fresh branching and increase checks as growth resumes."
      },
      {
        "season": "Summer",
        "action": "Check the exposed hanging root ball during warm spells."
      },
      {
        "season": "Autumn",
        "action": "Reduce drinks as the long trails grow more slowly."
      },
      {
        "season": "Winter",
        "action": "Keep the hanging cactus warm and water less often."
      }
    ],
    "problems": [
      {
        "name": "Stem damage",
        "sign": "Trails snap or catch at the stair opening",
        "response": "Reposition loose trails while keeping the recorded hanging point accessible."
      }
    ],
    "about": "Rhipsalis are forest cacti; the mistletoe-cactus sources describe a hanging epiphyte needing filtered light and draining compost. Those sources do not confirm the species at Oak Lodge.",
    "provenanceNote": "Genus supplied by Brad; no species or cultivar claimed from the photograph.",
    "botanical": [
      {
        "label": "Family",
        "value": "Cactaceae"
      },
      {
        "label": "Genus",
        "value": "Rhipsalis"
      },
      {
        "label": "Botanical name",
        "value": "Rhipsalis sp."
      },
      {
        "label": "Identity evidence",
        "value": "Genus supplied by Brad; no species or cultivar claimed from the photograph."
      }
    ],
    "oakLodge": {
      "location": "Hanging beside the sitting-room stair opening · purple star",
      "added": "Added October 2026 · birthday update",
      "role": "Hanging green curtain at the purple-star position",
      "observation": "Long narrow trailing stems hang from the beam beside the split-level stair opening.",
      "status": "Retain labels and compare the next photographs with this October baseline."
    },
    "sources": [
      {
        "title": "NC State Extension · Mistletoe cactus",
        "url": "https://plants.ces.ncsu.edu/plants/rhipsalis-baccifera/",
        "note": "Provisional epiphytic-cactus care; not a specimen species confirmation"
      },
      {
        "title": "RHS · Rhipsalis baccifera",
        "url": "https://www.rhs.org.uk/plants/14483/rhipsalis-baccifera/details",
        "note": "Botanical identity and cultivation"
      },
      {
        "title": "Oak Lodge October birthday record",
        "url": null,
        "note": "Brad’s plant names, marked floor plan, confirmed bed moves and supplied photographs"
      }
    ],
    "environment": "indoor",
    "display": {
      "cycleTitle": "Indoor growth",
      "cycleEmpty": "Foliage specimen; no reliable indoor flowering window",
      "waterLabel": "Watering",
      "seasonsTitle": "Through the indoor year",
      "waterNote": "Let the surface begin to dry, then water and drain; avoid prolonged drought."
    },
    "petSafety": {
      "tone": "note",
      "label": "Species safety unverified",
      "detail": "Species remains unresolved; discourage chewing and keep fallen stems away from pets."
    }
  },
  "house-sitting-dracaena-bicolour": {
    "version": 2,
    "type": "Evergreen dragon tree",
    "badges": [
      "Recorded October 2026",
      "Birthday plants"
    ],
    "description": "Brad’s “Dracena Bicolour Touffe” is recorded as Dracaena Bicolour Touffe. The two narrow-leaved tufts beside the split-level stairs fit a marginata-type dragon tree. The formal Bicolor cultivar relationship remains assumed without a retained passport.",
    "floweringMonths": [],
    "facts": [
      {
        "label": "Habit",
        "value": "Upright leafy tufts",
        "detail": "Two crowns are visible in the small pot."
      },
      {
        "label": "Light",
        "value": "Indirect light",
        "detail": "Shelter at the stair opening."
      },
      {
        "label": "Water",
        "value": "Upper compost drying",
        "detail": "Avoid stagnant runoff."
      },
      {
        "label": "Size",
        "value": "Can become tall",
        "detail": "Dragon trees can exceed 2m; this specimen is smaller."
      },
      {
        "label": "Identity",
        "value": "Bicolor type · assumed",
        "detail": "Touffe wording retained from Brad’s record."
      }
    ],
    "careGuide": [
      {
        "title": "Water the inner pot",
        "summary": "Allow the upper compost to dry.",
        "detail": "Drain thoroughly and use rainwater where possible."
      },
      {
        "title": "Keep leaves out of traffic",
        "summary": "Check the green-star stair position.",
        "detail": "Rotate only enough to maintain balanced growth without obstructing the passage."
      },
      {
        "title": "Clean and inspect the tufts",
        "summary": "Wipe dust from strap-shaped leaves.",
        "detail": "Inspect for pests; avoid repeatedly wetting an already damp root ball."
      }
    ],
    "waterSigns": {
      "under": "Drooping tufts and dry leaf tips alongside dry compost call for a thorough, drained drink.",
      "over": "Yellow lower leaves and a soft cane in wet compost call for a pause in watering and a drainage check."
    },
    "seasons": [
      {
        "season": "Spring",
        "action": "Watch the two crowns for new leaves and restart modest feeding."
      },
      {
        "season": "Summer",
        "action": "Protect narrow leaves from strong glass-filtered sun and draughts."
      },
      {
        "season": "Autumn",
        "action": "Extend intervals between drinks as tuft growth slows."
      },
      {
        "season": "Winter",
        "action": "Keep the stair-side plant warm and reduce watering further."
      }
    ],
    "problems": [
      {
        "name": "Brown leaf tips",
        "sign": "Dry tips despite moist roots",
        "response": "Check water quality, draughts and nearby heat before increasing water."
      }
    ],
    "about": "Dracaenas are woody tropical foliage plants. RHS recommends indirect light, warmth and attention to water quality; the supplied commercial name does not establish a verified cultivar.",
    "provenanceNote": "Name supplied by Brad; Dracaena marginata Bicolor type is a qualified photo fit.",
    "botanical": [
      {
        "label": "Family",
        "value": "Asparagaceae"
      },
      {
        "label": "Genus",
        "value": "Dracaena"
      },
      {
        "label": "Botanical name",
        "value": "Dracaena marginata Bicolor type — assumed"
      },
      {
        "label": "Identity evidence",
        "value": "Name supplied by Brad; Dracaena marginata Bicolor type is a qualified photo fit."
      }
    ],
    "oakLodge": {
      "location": "Beside the split-level stair opening · green star",
      "added": "Added October 2026 · birthday update",
      "role": "Two-tier upright foliage at the green-star position",
      "observation": "Two leafy tufts rise at different heights in a small nursery pot beside the stairs.",
      "status": "Retain labels and compare the next photographs with this October baseline."
    },
    "sources": [
      {
        "title": "RHS · How to grow dracaena",
        "url": "https://www.rhs.org.uk/plants/dracaena/how-to-grow-dracaena",
        "note": "Botanical identity and cultivation"
      },
      {
        "title": "RHS · Dracaena guide",
        "url": "https://www.rhs.org.uk/plants/dracaena",
        "note": "Botanical identity and cultivation"
      },
      {
        "title": "Oak Lodge October birthday record",
        "url": null,
        "note": "Brad’s plant names, marked floor plan, confirmed bed moves and supplied photographs"
      }
    ],
    "environment": "indoor",
    "display": {
      "cycleTitle": "Indoor growth",
      "cycleEmpty": "Foliage specimen; no reliable indoor flowering window",
      "waterLabel": "Watering",
      "seasonsTitle": "Through the indoor year",
      "waterNote": "Allow the upper compost to dry before soaking and draining; use rainwater where possible."
    },
    "petSafety": {
      "tone": "caution",
      "label": "Harmful if eaten",
      "detail": "RHS records Dracaena as toxic; keep foliage out of reach of children and pets."
    }
  },
  "house-landing-crassula-hottentot": {
    "version": 2,
    "type": "Trailing succulent",
    "badges": [
      "Recorded October 2026",
      "Birthday plants"
    ],
    "description": "Crassula ‘Hottentot’ spills over the landing shelf in dense bead-like strings of fleshy paired leaves. The supplied commercial name is retained, while its botanical placement follows the marnieriana worm-plant type provisionally. The orange star marks the shelf beside the lamp.",
    "floweringMonths": [],
    "facts": [
      {
        "label": "Habit",
        "value": "Pendant leafy strings",
        "detail": "Long trails spill from the decorative pot."
      },
      {
        "label": "Light",
        "value": "Very bright",
        "detail": "The lamp is part of the display; assess actual daylight."
      },
      {
        "label": "Water",
        "value": "Dry between drinks",
        "detail": "Use the inner-pot weight and compost together."
      },
      {
        "label": "Compost",
        "value": "Gritty cactus mix",
        "detail": "Drain excess from the outer pot."
      },
      {
        "label": "Identity",
        "value": "Marnieriana type",
        "detail": "Commercial Hottentot name supplied by Brad."
      }
    ],
    "careGuide": [
      {
        "title": "Empty the decorative pot",
        "summary": "Water only after drying.",
        "detail": "Soak the inner pot separately and let runoff finish before replacing it."
      },
      {
        "title": "Assess daylight at the shelf",
        "summary": "Give the succulent strong natural light.",
        "detail": "Introduce direct sun gradually; watch stretching at the orange-star position."
      },
      {
        "title": "Keep the leaf strings sound",
        "summary": "Handle trailing growth gently.",
        "detail": "Remove only damaged portions and inspect tightly stacked leaves for mealybugs."
      }
    ],
    "waterSigns": {
      "under": "Leaves wrinkle and trails lose plumpness with a light dry pot; rewet and drain.",
      "over": "Translucent soft leaves and blackened stem bases with wet compost indicate rot risk."
    },
    "seasons": [
      {
        "season": "Spring",
        "action": "Resume moderate watering once the leaf strings extend."
      },
      {
        "season": "Summer",
        "action": "Maintain bright light and allow drying between soakings."
      },
      {
        "season": "Autumn",
        "action": "Check for stretching as shelf daylight declines."
      },
      {
        "season": "Winter",
        "action": "Water the landing succulent sparingly and keep it warm."
      }
    ],
    "problems": [
      {
        "name": "Mealybugs",
        "sign": "White cotton-like patches between paired leaves",
        "response": "Isolate and inspect the dense leaf stacks before treatment."
      }
    ],
    "about": "RHS places worm plant under Crassula rupestris subsp. marnieriana and advises cactus compost, full light and sparse winter watering. The supplied ‘Hottentot’ wording is a garden record rather than a photographed label confirmation.",
    "provenanceNote": "Commercial name supplied by Brad; marnieriana botanical fit remains provisional.",
    "botanical": [
      {
        "label": "Family",
        "value": "Crassulaceae"
      },
      {
        "label": "Genus",
        "value": "Crassula"
      },
      {
        "label": "Botanical name",
        "value": "Crassula rupestris subsp. marnieriana type"
      },
      {
        "label": "Identity evidence",
        "value": "Commercial name supplied by Brad; marnieriana botanical fit remains provisional."
      }
    ],
    "oakLodge": {
      "location": "Landing shelf above the split-level stair · orange star",
      "added": "Added October 2026 · birthday update",
      "role": "Pendant succulent on the orange-star landing shelf",
      "observation": "Dense strings of fleshy paired leaves spill from a decorative pot beside a table lamp.",
      "status": "Retain labels and compare the next photographs with this October baseline."
    },
    "sources": [
      {
        "title": "RHS · Worm plant",
        "url": "https://www.rhs.org.uk/plants/4749/crassula-rupestris-subsp-marnieriana/details",
        "note": "Botanical identity and cultivation"
      },
      {
        "title": "Kew · Crassula rupestris subsp. marnieriana",
        "url": "https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A878790-1",
        "note": "Botanical identity and cultivation"
      },
      {
        "title": "Oak Lodge October birthday record",
        "url": null,
        "note": "Brad’s plant names, marked floor plan, confirmed bed moves and supplied photographs"
      }
    ],
    "environment": "indoor",
    "display": {
      "cycleTitle": "Indoor growth",
      "cycleEmpty": "Foliage specimen; no reliable indoor flowering window",
      "waterLabel": "Watering",
      "seasonsTitle": "Through the indoor year",
      "waterNote": "Let compost dry between soakings; water sparingly through winter."
    },
    "petSafety": {
      "tone": "note",
      "label": "Cultivar safety unverified",
      "detail": "A cultivar-specific safety record is not established here; discourage chewing the succulent."
    }
  },
  "house-kitchen-philodendron": {
    "version": 2,
    "type": "Tropical foliage plant; habit unresolved",
    "badges": [
      "Recorded October 2026",
      "Birthday plants"
    ],
    "description": "The birthday photograph records a small Philodendron in an orange pot. Brad’s red star places it at the kitchen / dining window. Species, cultivar and eventual climbing or upright habit remain unresolved, so this portrait uses genus guidance and keeps those questions visible.",
    "floweringMonths": [],
    "facts": [
      {
        "label": "Light",
        "value": "Bright indirect",
        "detail": "Protect leaves at the kitchen window."
      },
      {
        "label": "Water",
        "value": "Upper compost drying",
        "detail": "Use airy compost and free drainage."
      },
      {
        "label": "Temperature",
        "value": "Warm indoors",
        "detail": "Keep clear of cold glass and draughts."
      },
      {
        "label": "Habit",
        "value": "To confirm",
        "detail": "Observe future stems before choosing support."
      },
      {
        "label": "Identity",
        "value": "Philodendron sp.",
        "detail": "No cultivar inferred from this photograph."
      }
    ],
    "careGuide": [
      {
        "title": "Check the kitchen root ball",
        "summary": "Water after surface drying.",
        "detail": "Drain the orange pot fully before returning it to the window."
      },
      {
        "title": "Leave space for new leaves",
        "summary": "Protect tender foliage from sun scorch.",
        "detail": "Observe growth before deciding whether this particular plant needs a climbing support."
      },
      {
        "title": "Handle with care",
        "summary": "Keep it out of reach.",
        "detail": "Wear gloves when cutting and clean tools after contact with sap."
      }
    ],
    "waterSigns": {
      "under": "Leaves droop with a light dry pot; check beneath the surface before soaking.",
      "over": "Lower leaves yellow while the root ball stays wet; restore drainage before watering again."
    },
    "seasons": [
      {
        "season": "Spring",
        "action": "Record the next leaves to help resolve identity and habit."
      },
      {
        "season": "Summer",
        "action": "Check the small kitchen pot more often during warm weather."
      },
      {
        "season": "Autumn",
        "action": "Reduce water as this young plant slows in lower light."
      },
      {
        "season": "Winter",
        "action": "Keep the Philodendron away from cold window glass."
      }
    ],
    "problems": [
      {
        "name": "Scorched leaves",
        "sign": "Dry pale patches on the exposed side",
        "response": "Filter harsh sun and photograph new growth to compare."
      }
    ],
    "about": "Philodendrons are tropical aroids grown for foliage. Species include climbers and upright plants; the genus-level RHS guide supports indirect light, warmth, draining compost and safe handling while this specimen’s identity remains open.",
    "provenanceNote": "Philodendron genus supplied by Brad; species and cultivar unresolved.",
    "botanical": [
      {
        "label": "Family",
        "value": "Araceae"
      },
      {
        "label": "Genus",
        "value": "Philodendron"
      },
      {
        "label": "Botanical name",
        "value": "Philodendron sp."
      },
      {
        "label": "Identity evidence",
        "value": "Philodendron genus supplied by Brad; species and cultivar unresolved."
      }
    ],
    "oakLodge": {
      "location": "Kitchen / dining window · red star",
      "added": "Added October 2026 · birthday update",
      "role": "Small foliage specimen at the red-star kitchen window",
      "observation": "The supplied birthday photograph records a small broad-leaved plant in an orange pot; species and cultivar remain unresolved.",
      "status": "Retain labels and compare the next photographs with this October baseline."
    },
    "sources": [
      {
        "title": "RHS · How to grow philodendrons",
        "url": "https://www.rhs.org.uk/plants/philodendron/growing-guide",
        "note": "Botanical identity and cultivation"
      },
      {
        "title": "Oak Lodge October birthday record",
        "url": null,
        "note": "Brad’s plant names, marked floor plan, confirmed bed moves and supplied photographs"
      }
    ],
    "environment": "indoor",
    "display": {
      "cycleTitle": "Indoor growth",
      "cycleEmpty": "Foliage specimen; no reliable indoor flowering window",
      "waterLabel": "Watering",
      "seasonsTitle": "Through the indoor year",
      "waterNote": "Water once the upper compost begins to dry and let excess drain completely."
    },
    "petSafety": {
      "tone": "caution",
      "label": "Harmful if eaten",
      "detail": "Philodendron sap is irritant and plants are harmful if eaten; keep out of reach of children and pets."
    }
  },
  "house-landing-zamioculcas": {
    "version": 2,
    "type": "Rhizomatous evergreen foliage plant",
    "badges": [
      "Recorded October 2026",
      "Birthday plants"
    ],
    "description": "Zamioculcas stands beside the console on the bedroom-wing landing, with glossy leaflets on upright fleshy stalks. Its photograph strongly supports Zamioculcas zamiifolia, retained as assumed without a label. The blue star records the position beside Bedroom 3.",
    "floweringMonths": [],
    "facts": [
      {
        "label": "Habit",
        "value": "Upright glossy leaves",
        "detail": "Fleshy stalks rise from underground rhizomes."
      },
      {
        "label": "Light",
        "value": "Indirect; shade tolerated",
        "detail": "Lower light lengthens drying time."
      },
      {
        "label": "Water",
        "value": "Root ball drying",
        "detail": "Check deeply before the next drink."
      },
      {
        "label": "Size",
        "value": "About 60–120cm",
        "detail": "Published species range; allow space at the landing."
      },
      {
        "label": "Identity",
        "value": "Z. zamiifolia · assumed",
        "detail": "Photo fit and supplied genus; no named cultivar."
      }
    ],
    "careGuide": [
      {
        "title": "Let the root ball dry",
        "summary": "Check below the surface.",
        "detail": "Water thoroughly only after drying and let all runoff escape."
      },
      {
        "title": "Protect the landing leaves",
        "summary": "Keep upright stalks away from traffic.",
        "detail": "The blue star sits beside the stair opening; avoid scraping leaflets when passing."
      },
      {
        "title": "Inspect glossy leaflets",
        "summary": "Wipe dust gently.",
        "detail": "Look for scale on stalks and leaf undersides; feed sparingly during active growth."
      }
    ],
    "waterSigns": {
      "under": "Leaflets lose gloss and wrinkle with a thoroughly dry root ball; soak and drain once.",
      "over": "Yellow leaves and soft stalk bases in persistently wet compost suggest rhizome or root rot."
    },
    "seasons": [
      {
        "season": "Spring",
        "action": "Watch for new upright shoots and check whether the pot is congested."
      },
      {
        "season": "Summer",
        "action": "Allow full drying even while the landing is warm."
      },
      {
        "season": "Autumn",
        "action": "Lengthen the gap between drinks as growth slows."
      },
      {
        "season": "Winter",
        "action": "Keep the rhizomes dry between occasional winter drinks."
      }
    ],
    "problems": [
      {
        "name": "Rhizome rot",
        "sign": "Stalks collapse at a wet soft base",
        "response": "Pause watering, inspect roots and restore drainage."
      }
    ],
    "about": "Zamioculcas zamiifolia is an African aroid with water-storing rhizomes. NC State describes slow growth, shade tolerance and poor tolerance of wet roots; the photographed plant is recorded as an assumed species fit.",
    "provenanceNote": "Supplied genus and glossy pinnate leaves strongly support Z. zamiifolia; retained as assumed.",
    "botanical": [
      {
        "label": "Family",
        "value": "Araceae"
      },
      {
        "label": "Genus",
        "value": "Zamioculcas"
      },
      {
        "label": "Botanical name",
        "value": "Zamioculcas zamiifolia — assumed"
      },
      {
        "label": "Identity evidence",
        "value": "Supplied genus and glossy pinnate leaves strongly support Z. zamiifolia; retained as assumed."
      }
    ],
    "oakLodge": {
      "location": "Landing beside Bedroom 3 and the split-level stairs · blue star",
      "added": "Added October 2026 · birthday update",
      "role": "Glossy upright foliage at the blue-star landing position",
      "observation": "Glossy upright leaf stalks stand in a black nursery pot beside the wooden console.",
      "status": "Retain labels and compare the next photographs with this October baseline."
    },
    "sources": [
      {
        "title": "NC State Extension · ZZ plant",
        "url": "https://plants.ces.ncsu.edu/plants/zamioculcas-zamiifolia/",
        "note": "Botanical identity and cultivation"
      },
      {
        "title": "Oak Lodge October birthday record",
        "url": null,
        "note": "Brad’s plant names, marked floor plan, confirmed bed moves and supplied photographs"
      }
    ],
    "environment": "indoor",
    "display": {
      "cycleTitle": "Indoor growth",
      "cycleEmpty": "Foliage specimen; no reliable indoor flowering window",
      "waterLabel": "Watering",
      "seasonsTitle": "Through the indoor year",
      "waterNote": "Allow the whole root ball to dry before watering; reduce checks into winter."
    },
    "petSafety": {
      "tone": "caution",
      "label": "Harmful if eaten",
      "detail": "NC State records toxicity to cats and dogs; prevent chewing and keep removed leaves out of reach."
    }
  }
};
  Object.entries(profiles).forEach(([id, profile]) => {
    const record = window.OAK.PLANT_BY_ID[id];
    if (!record) throw new Error(`Missing October specimen: ${id}`);
    record.plant.profile = profile;
    window.OAK.AUTHORED_PLANT_PROFILES[id] = profile;
  });
  Object.assign(window.OAK.HOUSE_PLANT_PROFILES = window.OAK.HOUSE_PLANT_PROFILES || {}, profiles);
})();
