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

  record.plant.profile = profile;
  window.OAK.AUTHORED_PLANT_PROFILES = window.OAK.AUTHORED_PLANT_PROFILES || {};
  window.OAK.AUTHORED_PLANT_PROFILES[plantId] = profile;
  window.OAK.HOUSE_PLANT_PROFILES = { [plantId]: profile };
})();
