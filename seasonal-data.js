// Oak Lodge Garden — seasonal-data.js
// Month-by-month highlights and tasks, derived from plants.json seasonal/care notes.
// Registered onto window.OAK.SEASONAL (alongside ZONES / PLANTS / etc).

(function () {
  const SEASONAL = {
    January: {
      mood: "Bare bones and bright stems. The bones of the garden show through.",
      highlights: [
        { plant: "Variegated Dogwood", bed: "Bed 2", note: "Bright red winter stems on full display." },
        { plant: "Box Hedging", bed: "Bed 1", note: "Dense evergreen structure holds the bed shape through winter." },
        { plant: "Japanese Aralia", bed: "Bed 1", note: "Tropical speckled leaves carry on regardless." },
        { plant: "New Zealand Flax (dark)", bed: "Stone Bed", note: "Burgundy sword leaves arching low over the gravel." },
        { plant: "Cabbage Tree", bed: "Stone Bed", note: "Evergreen burgundy fountain — the focal point of the lower terrace." },
      ],
      tasks: [
        { task: "Prune apple tree while dormant", plants: ["Apple Tree"], bed: "Bed 3" },
        { task: "Prune pear tree while dormant", plants: ["Pear Tree"], bed: "Tree" },
        { task: "Prune roses hard", plants: ["Rose"], bed: "Bed 4" },
        { task: "Remove dead or crossing branches from the Japanese Maple", plants: ["Japanese Maple"], bed: "Bed 1" },
        { task: "Check Cordyline for frost damage; tie up leaves if hard frost forecast", plants: ["Cabbage Tree"], bed: "Stone Bed" },
      ],
    },

    February: {
      mood: "Last of the winter colour, first stirrings underground.",
      highlights: [
        { plant: "Variegated Dogwood", bed: "Bed 2", note: "Red stems still glowing — the last big show before they're cut down." },
        { plant: "Box Hedging", bed: "Bed 1", note: "Steady green presence while everything else is bare." },
        { plant: "Houseleeks", bed: "Stone Bed", note: "Tight winter rosettes, sometimes with a red flush." },
      ],
      tasks: [
        { task: "Coppice dogwood — cut a third of stems to ground for next year's colour", plants: ["Variegated Dogwood"], bed: "Bed 2" },
        { task: "Continue winter pruning of fruit trees while still dormant", plants: ["Apple Tree", "Pear Tree"], bed: "Bed 3" },
        { task: "Prepare supports for peony before shoots emerge", plants: ["Peony"], bed: "Bed 2" },
        { task: "Winter prune wisteria — long shoots back to 2–3 buds", plants: ["Wisteria"], bed: "Bed 4" },
      ],
    },

    March: {
      mood: "Things wake up. The first blossom catches you off guard.",
      highlights: [
        { plant: "Aubrieta", bed: "Stone Bed", note: "First purple flowers tumbling over the gravel edge." },
        { plant: "Weeping Cherry", bed: "Bed 2", note: "Pink blossom buds breaking — the beginning of the show." },
        { plant: "Pear Tree", bed: "Tree", note: "White blossom appearing at the gate." },
        { plant: "English Daisy", bed: "Bed 1", note: "Pink pom-poms beginning along the front edge." },
      ],
      tasks: [
        { task: "Cut old leaves from Phormium / New Zealand Flax at the base", plants: ["New Zealand Flax", "New Zealand Flax (dark)"], bed: "Bed 4" },
        { task: "Prune Euonymus to shape", plants: ["Euonymus"], bed: "Bed 1" },
        { task: "Prune Wintercreeper to shape", plants: ["Wintercreeper"], bed: "Bed 3" },
        { task: "Mulch the Clematis base with compost or leaf mould", plants: ["Clematis"], bed: "Patio" },
        { task: "Watch for box caterpillar — check leaves regularly", plants: ["Box Hedging"], bed: "Bed 1" },
      ],
    },

    April: {
      mood: "Everything emerges at once. New leaves the colour of copper.",
      highlights: [
        { plant: "Aubrieta", bed: "Stone Bed", note: "Sheets of purple at peak." },
        { plant: "Weeping Cherry", bed: "Bed 2", note: "Pink blossom in full cascade over the wall." },
        { plant: "Pear Tree", bed: "Tree", note: "White blossom against bare branches." },
        { plant: "Apple Tree", bed: "Bed 3", note: "Pink-tinged blossom around the bird feeders." },
        { plant: "Japanese Maple", bed: "Bed 1", note: "New leaves emerging red-bronze before turning green." },
        { plant: "Forget-me-not", bed: "Bed 2", note: "Sky-blue clouds at ground level." },
        { plant: "Hosta", bed: "Bed 1", note: "Tightly furled shoots pushing up through the leaf litter." },
      ],
      tasks: [
        { task: "Watch for slugs on Hostas — check after rain, especially at dusk", plants: ["Hosta"], bed: "Bed 1" },
        { task: "Start deadheading English Daisies to prolong flowering", plants: ["English Daisy"], bed: "Bed 1" },
        { task: "Begin regular rose watering and feed; mulch around the base", plants: ["Rose"], bed: "Bed 4" },
      ],
    },

    May: {
      mood: "The garden's loudest month. Everything is happening at once.",
      highlights: [
        { plant: "Wisteria", bed: "Bed 4", note: "Lilac racemes cascading over the wall — the headline act." },
        { plant: "Clematis montana", bed: "Patio", note: "Sheets of pale pink covering the house wall." },
        { plant: "Rhododendron", bed: "Bed 1", note: "Lavender-purple flowers against golden variegated leaves." },
        { plant: "Peony", bed: "Bed 2", note: "Huge fragrant flowers — the heaviest week of the year." },
        { plant: "Weigela", bed: "Bed 2", note: "Pink trumpet flowers covering the shrub." },
        { plant: "Avens", bed: "Bed 3", note: "Bright orange flowers at the foot of the apple tree." },
        { plant: "Aubrieta", bed: "Stone Bed", note: "Last of the purple before the shear." },
      ],
      tasks: [
        { task: "Deadhead Rhododendron carefully after flowering — snap the spent trusses cleanly", plants: ["Rhododendron"], bed: "Bed 1" },
        { task: "Prune Clematis montana lightly after flowering, tie in new growth", plants: ["Clematis"], bed: "Patio" },
        { task: "Shear Aubrieta hard back after blooming to keep it compact", plants: ["Aubrieta"], bed: "Stone Bed" },
        { task: "Deadhead Avens to encourage a second flush", plants: ["Avens"], bed: "Bed 3" },
        { task: "First clip of the box hedging (late May)", plants: ["Box Hedging"], bed: "Bed 1" },
      ],
    },

    June: {
      mood: "Settles into summer. Roses start, scent in the evening air.",
      highlights: [
        { plant: "Rose", bed: "Bed 4", note: "First flush opening on the trellis." },
        { plant: "Astilbe", bed: "Bed 1", note: "Pink feathery plumes beginning above ferny foliage." },
        { plant: "Maiden Pink", bed: "Bed 2", note: "Pink stars spilling from the wall gap." },
        { plant: "Nemesia", bed: "Bed 2", note: "Coral and orange flowers between the walls." },
        { plant: "Honeysuckle", bed: "Stone Bed", note: "Fragrant flowers — strongest in the evening." },
        { plant: "Yucca", bed: "Bed 4", note: "Spire of creamy bell flowers if the plant's mature enough." },
        { plant: "Silverbush", bed: "Bed 2", note: "White trumpet flowers on the silver mound." },
      ],
      tasks: [
        { task: "Prune Weigela after flowering — one in three old stems out", plants: ["Weigela"], bed: "Bed 2" },
        { task: "Deadhead roses regularly to keep them flowering", plants: ["Rose"], bed: "Bed 4" },
        { task: "Deadhead Maiden Pink and trim back lightly", plants: ["Maiden Pink"], bed: "Bed 2" },
        { task: "Trim Nemesia hard after first flush for a second show", plants: ["Nemesia"], bed: "Bed 2" },
        { task: "Make sure peony supports are doing their job — heavy heads after rain", plants: ["Peony"], bed: "Bed 2" },
      ],
    },

    July: {
      mood: "Lavender and bees. The hot middle of the year.",
      highlights: [
        { plant: "Lavender", bed: "Bed 4", note: "Purple flower spikes at peak — bees from dawn." },
        { plant: "Astilbe", bed: "Bed 1", note: "Feathery pink plumes at full height." },
        { plant: "Rose", bed: "Bed 4", note: "Second wave coming through if deadheaded." },
        { plant: "Hosta", bed: "Bed 1", note: "Lilac flower spikes rising above the leaves." },
        { plant: "Stonecrop", bed: "Stone Bed", note: "Yellow trailing flowers along the gravel." },
        { plant: "Yucca", bed: "Bed 4", note: "Tall white flower spires in their full glory." },
      ],
      tasks: [
        { task: "Deadhead lavender — never cut into the old woody growth", plants: ["Lavender"], bed: "Bed 4" },
        { task: "Continue deadheading roses; feed with rose food after first flush", plants: ["Rose"], bed: "Bed 4" },
        { task: "Water Astilbe deeply — never let the soil dry out", plants: ["Astilbe"], bed: "Bed 1" },
        { task: "Prune Honeysuckle lightly after flowering", plants: ["Honeysuckle"], bed: "Stone Bed" },
      ],
    },

    August: {
      mood: "Heavy with fruit. The garden looks lush but ready for its second clip.",
      highlights: [
        { plant: "Lavender", bed: "Bed 4", note: "Still flowering, slightly faded — clip after." },
        { plant: "Apple Tree", bed: "Bed 3", note: "First apples colouring up on the branches." },
        { plant: "Pear Tree", bed: "Tree", note: "Pears swelling, near ready." },
        { plant: "Rose", bed: "Bed 4", note: "Second flush carrying on through the heat." },
        { plant: "Maiden Pink", bed: "Bed 2", note: "Still throwing out pink stars." },
        { plant: "Astilbe", bed: "Bed 1", note: "Plumes fading to russet — leave for autumn structure." },
      ],
      tasks: [
        { task: "Second clip of the box hedging", plants: ["Box Hedging"], bed: "Bed 1" },
        { task: "Wisteria summer prune — long whippy shoots back to 6 leaves", plants: ["Wisteria"], bed: "Bed 4" },
        { task: "Continue deadheading roses", plants: ["Rose"], bed: "Bed 4" },
        { task: "Harvest apples and pears as they ripen — taste-test daily", plants: ["Apple Tree", "Pear Tree"], bed: "Bed 3" },
        { task: "Trim Stonecrop back if it's getting leggy", plants: ["Stonecrop"], bed: "Stone Bed" },
      ],
    },

    September: {
      mood: "Harvest month. Things start to slow.",
      highlights: [
        { plant: "Apple Tree", bed: "Bed 3", note: "Main harvest week — pick when they twist off in the hand." },
        { plant: "Pear Tree", bed: "Tree", note: "Pears ready — pick slightly under-ripe and ripen indoors." },
        { plant: "Honeysuckle", bed: "Stone Bed", note: "Small red berries appearing where the flowers were." },
        { plant: "Nemesia", bed: "Bed 2", note: "Still flowering after the second trim." },
        { plant: "Silverbush", bed: "Bed 2", note: "Last of the white flowers on silver foliage." },
      ],
      tasks: [
        { task: "Cut back peony foliage as it yellows and dies down", plants: ["Peony"], bed: "Bed 2" },
        { task: "Pull up Forget-me-nots if you don't want them self-seeding everywhere", plants: ["Forget-me-not"], bed: "Bed 2" },
        { task: "Harvest any remaining fruit before the wasps find it", plants: ["Apple Tree", "Pear Tree"], bed: "Bed 3" },
      ],
    },

    October: {
      mood: "The fire month. Everything turns colour at once.",
      highlights: [
        { plant: "Japanese Maple", bed: "Bed 1", note: "Fiery red autumn colour — peak fortnight of the year." },
        { plant: "Weeping Cherry", bed: "Bed 2", note: "Yellow and bronze leaves before they drop." },
        { plant: "Variegated Dogwood", bed: "Bed 2", note: "Cream-edged leaves dropping to reveal the red stems beneath." },
        { plant: "Apple Tree", bed: "Bed 3", note: "Last apples; leaves yellowing." },
        { plant: "Japanese Aralia", bed: "Bed 1", note: "Cream globe flowers opening — odd, alien, lovely." },
      ],
      tasks: [
        { task: "Protect Angel Wings from the first frosts — fleece or move to shelter", plants: ["Angel Wings"], bed: "Bed 1" },
        { task: "Mulch Phormium crowns to insulate against the wet cold", plants: ["New Zealand Flax", "New Zealand Flax (dark)"], bed: "Bed 4" },
        { task: "Tidy Houseleek rosettes — remove any spent flowering rosettes", plants: ["Houseleeks"], bed: "Stone Bed" },
        { task: "Clear fallen leaves off the gravel beds and stone bed", plants: [], bed: "Stone Bed" },
      ],
    },

    November: {
      mood: "Things settle. The garden's bones reassert themselves.",
      highlights: [
        { plant: "Japanese Maple", bed: "Bed 1", note: "Last of the red leaves clinging on." },
        { plant: "Variegated Dogwood", bed: "Bed 2", note: "Bare red stems beginning to dominate." },
        { plant: "Box Hedging", bed: "Bed 1", note: "Steady evergreen structure as everything else falls back." },
        { plant: "Japanese Aralia", bed: "Bed 1", note: "Cream flowers fading; leaves still glossy." },
      ],
      tasks: [
        { task: "Protect Silverbush from winter wet — sharp drainage and a sheltered spot", plants: ["Silverbush"], bed: "Bed 2" },
        { task: "Final tidy of herbaceous perennials — but leave seedheads where they look good", plants: ["Astilbe", "Peony"], bed: "Bed 1" },
        { task: "Check Clematis montana framework — tie in any loose stems before winter winds", plants: ["Clematis"], bed: "Patio" },
      ],
    },

    December: {
      mood: "Quiet months. Read seed catalogues. Plan.",
      highlights: [
        { plant: "Variegated Dogwood", bed: "Bed 2", note: "Bright red stems at peak — the winter focal point." },
        { plant: "Box Hedging", bed: "Bed 1", note: "Dense green structure carrying the bed through winter." },
        { plant: "Japanese Aralia", bed: "Bed 1", note: "Glossy evergreen leaves — a tropical note in the cold." },
        { plant: "New Zealand Flax", bed: "Bed 4", note: "Architectural sword leaves regardless of weather." },
        { plant: "Cabbage Tree", bed: "Stone Bed", note: "Burgundy fountain holds its shape all winter." },
      ],
      tasks: [
        { task: "Enjoy the dogwood stems — best in low winter sun", plants: ["Variegated Dogwood"], bed: "Bed 2" },
        { task: "Protect tender plants from hard frost — fleece Angel Wings, Silverbush, Cordyline", plants: ["Angel Wings", "Silverbush", "Cabbage Tree"], bed: "Bed 1" },
        { task: "Plan changes for spring — sketch in the notebook before catalogues arrive", plants: [], bed: "Bed 1" },
        { task: "Winter prune wisteria — long shoots back to 2–3 buds (can do late Dec or Feb)", plants: ["Wisteria"], bed: "Bed 4" },
      ],
    },
  };

  // Reverse lookup: bed display name → zoneKey
  const BED_TO_ZONE = {
    "Bed 1": "bed1",
    "Bed 2": "bed2",
    "Bed 3": "bed3",
    "Bed 4": "bed4",
    "Stone Bed": "stone",
    "Patio": "patio",
    "Tree": "pear",
  };

  window.OAK = window.OAK || {};
  window.OAK.SEASONAL = SEASONAL;
  window.OAK.BED_TO_ZONE = BED_TO_ZONE;
  window.OAK.MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  window.OAK.MONTHS_SHORT = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
})();
