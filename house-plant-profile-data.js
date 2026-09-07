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
    description: "The compact, ruffled green rosette by the sitting-room window is a crested bird’s nest fern. Its retained plant passport identifies it precisely as Asplenium antiquum ‘Gioia’, so the name is a confirmed record rather than a photo-based best fit.",
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
    oakLodge: { location: "Ground-floor sitting room, beside the garden-facing window", added: "Recorded September 2026", role: "Small ruffled foliage specimen at the window", observation: "Compact grey-potted fern with clean, crested green fronds; passport retained and photographed.", status: "Keep the crown dry and use the window’s bright light without allowing direct sun to scorch the fronds." },
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

  record.plant.profile = profile;
  gioiaRecord.plant.profile = gioiaProfile;
  staghornRecord.plant.profile = staghornProfile;
  window.OAK.AUTHORED_PLANT_PROFILES = window.OAK.AUTHORED_PLANT_PROFILES || {};
  Object.assign(window.OAK.AUTHORED_PLANT_PROFILES, { [plantId]: profile, [gioiaId]: gioiaProfile, [staghornId]: staghornProfile });
  window.OAK.HOUSE_PLANT_PROFILES = { [plantId]: profile, [gioiaId]: gioiaProfile, [staghornId]: staghornProfile };
})();
