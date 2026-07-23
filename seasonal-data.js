// Oak Lodge Garden — seasonal-data.js
// Month-by-month highlights and tasks, derived from plants.json seasonal/care notes.
// Registered onto window.OAK.SEASONAL (alongside ZONES / PLANTS / etc).

(function () {
  const SEASONAL = {
    January: {
      mood: "Bare bones and bright stems. The bones of the garden show through.",
      highlights: [
        { plant: "Variegated Dogwood", bed: "Front Bed 3", note: "Bright red winter stems on full display." },
        { plant: "Box Hedging", bed: "Bed 1", note: "Dense evergreen structure holds the bed shape through winter." },
        { plant: "Japanese Aralia", bed: "Bed 1", note: "Tropical speckled leaves carry on regardless." },
        { plant: "New Zealand Flax (dark)", bed: "Stone Bed", note: "Burgundy sword leaves arching low over the gravel." },
        { plant: "Cabbage Tree", bed: "Stone Bed", note: "Evergreen burgundy fountain — the focal point of the lower terrace." },
      ],
      tasks: [
        { task: "Prune apple tree while dormant", plants: ["Apple Tree"], bed: "Bed 3" },
        { task: "Check Callistemon winter protection after severe weather; do not prune in winter", plants: ["Callistemon Inferno ('Yanferno')"], bed: "Bed 4" },
        { task: "Check Gaillardia — cut back any dead growth. Replace if it hasn't survived the winter", plants: ["Gaillardia"], bed: "Bed 3" },
        { task: "Prune pear tree while dormant", plants: ["Pear Tree"], bed: "Tree" },
        { task: "Prune the Bed 5 climbing rose to a balanced framework, removing dead or unproductive canes without stripping out the whole structure", plants: ["Rose"], bed: "Bed 5" },
        { task: "Remove dead or crossing branches from the Japanese Maple only if necessary", plants: ["Japanese Maple 'Bloodgood'"], bed: "Bed 1" },
        { task: "Check Cordyline for frost damage; tie up leaves if hard frost forecast", plants: ["Cabbage Tree"], bed: "Stone Bed" },
      ],
    },

    February: {
      mood: "Last of the winter colour, first stirrings underground.",
      highlights: [
        { plant: "Variegated Dogwood", bed: "Front Bed 3", note: "Red stems still glowing — the last big show before they're cut down." },
        { plant: "Box Hedging", bed: "Bed 1", note: "Steady green presence while everything else is bare." },
        { plant: "Houseleeks", bed: "Stone Bed", note: "Tight winter rosettes, sometimes with a red flush." },
      ],
      tasks: [
        { task: "Coppice dogwood — cut a third of stems to ground for next year's colour", plants: ["Variegated Dogwood"], bed: "Front Bed 3" },
        { task: "Continue winter pruning of fruit trees while still dormant", plants: ["Apple Tree", "Pear Tree"], bed: "Bed 3" },
        { task: "Prepare supports for peony before shoots emerge", plants: ["Peony"], bed: "Bed 2" },
        { task: "Winter prune wisteria — long shoots back to 2–3 buds", plants: ["Wisteria"], bed: "Bed 4" },
        { task: "Mulch Abelia 'Kaleidoscope' base lightly to protect roots from hard frost", plants: ["Abelia 'Kaleidoscope'"], bed: "Bed 3" },
      ],
    },

    March: {
      mood: "Things wake up. The first blossom catches you off guard.",
      highlights: [
        { plant: "Weeping Cherry", bed: "Bed 2", note: "Pink blossom buds breaking — the beginning of the show." },
        { plant: "Pear Tree", bed: "Tree", note: "White blossom appearing at the gate." },
        { plant: "Little Heath", bed: "Bed 1", note: "Red young shoots and white spring flowers beginning above the cream-edged evergreen foliage." },
        { plant: "Spiraea 'Double Play Big Bang'", bed: "Bed 2", note: "Vivid orange-red new growth emerging — one of the loudest spring foliage moments in the garden." },
      ],
      tasks: [
        { task: "Prune Spiraea 'Double Play Big Bang' hard in early spring before growth gets going — cut back hard to encourage vivid new growth and flowers", plants: ["Spiraea 'Double Play Big Bang'"], bed: "Bed 2" },
        { task: "Pull away dead Yucca leaves with gloves and clear debris from the crown; do not cut into the live rosette", plants: ["Yucca"], bed: "Bed 5" },
        { task: "Cut old leaves from the dark New Zealand Flax individually at the base", plants: ["New Zealand Flax (dark)"], bed: "Stone Bed" },
        { task: "Prune Euonymus to shape", plants: ["Euonymus 'Emerald 'n' Gold'"], bed: "Bed 1" },
        { task: "Prune Wintercreeper to shape", plants: ["Wintercreeper 'Emerald Gaiety'"], bed: "Bed 1" },
        { task: "Check Avens for signs of life and clear dead foliage", plants: ["Avens"], bed: "Bed 2" },
        { task: "Mulch the Clematis base with compost or leaf mould", plants: ["Clematis"], bed: "Patio" },
        { task: "Watch for box caterpillar — check leaves regularly", plants: ["Box Hedging"], bed: "Bed 1" },
        { task: "Check Dahlia tubers for signs of life — new shoots should appear at the crowns. Remove mulch gradually.", plants: ["Dahlia 'Double Dreamy Lilac'", "Dahlia 'Double Dreamy Gold'"], bed: "Bed 1" },
      ],
    },

    April: {
      mood: "Everything emerges at once. New leaves the colour of copper.",
      highlights: [
        { plant: "Spiraea 'Double Play Big Bang'", bed: "Bed 2", note: "Brilliant orange-red new foliage at peak — stunning before the flowers arrive." },
        { plant: "Weeping Cherry", bed: "Bed 2", note: "Pink blossom in full cascade over the wall." },
        { plant: "Pear Tree", bed: "Tree", note: "White blossom against bare branches." },
        { plant: "Apple Tree", bed: "Bed 3", note: "Pink-tinged blossom around the bird feeders." },
        { plant: "Japanese Maple 'Bloodgood'", bed: "Bed 1", note: "Deep red-purple leaves unfurling for a long season of dark colour." },
        { plant: "Forget-me-not", bed: "Bed 2", note: "Sky-blue clouds at ground level." },
        { plant: "Hosta 'Patriot'", bed: "Bed 1", note: "Tightly furled cream-edged shoots pushing up through the leaf litter." },
        { plant: "Dahlia 'Double Dreamy Lilac'", bed: "Bed 1", note: "Dark shoots emerging from the crown — the foliage show begins." },
      ],
      tasks: [
        { task: "Remove faded Little Heath flower trusses and any damaged growth; routine pruning is rarely needed", plants: ["Little Heath"], bed: "Bed 1" },
        { task: "Watch for slugs on Hostas — check after rain, especially at dusk", plants: ["Hosta 'Patriot'", "Hosta (gold)"], bed: "Bed 1" },
        { task: "Begin regular rose watering and feed; mulch around the base", plants: ["Rose"], bed: "Bed 4" },
        { task: "Cut back Fuchsia hard to a low framework — new growth will come from the base", plants: ["Fuchsia"], bed: "Big Pot 1" },
        { task: "New growth on Abelia 'Kaleidoscope' — no action needed, just enjoy the emerging variegation", plants: ["Abelia 'Kaleidoscope'"], bed: "Bed 3" },
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
        { plant: "Avens", bed: "Bed 2", note: "Bright orange flowers — moved from Bed 1 into Bed 2 in July 2026." },
        { plant: "Dahlia 'Double Dreamy Lilac'", bed: "Bed 1", note: "Striking dark bronze-black foliage with lilac-magenta buds forming." },
      ],
      tasks: [
        { task: "Deadhead Rhododendron carefully after flowering — snap the spent trusses cleanly", plants: ["Rhododendron"], bed: "Bed 1" },
        { task: "Prune Clematis montana lightly after flowering, tie in new growth", plants: ["Clematis"], bed: "Patio" },
        { task: "Deadhead Avens to encourage a second flush", plants: ["Avens"], bed: "Bed 2" },
        { task: "Plant up front door pot with summer bedding — water in well and feed fortnightly from now", plants: ["Gazania 'Sunny Side Up'", "Gazania 'Orange Flame'", "Calibrachoa", "Bacopa White"], bed: "Front Pot" },
        { task: "First clip of the box hedging (late May)", plants: ["Box Hedging"], bed: "Bed 1" },
        { task: "Plant up pots with summer bedding — water in well and feed fortnightly from now", plants: ["Fuchsia", "Verbena", "Petunia", "Lobelia", "Calibrachoa"], bed: "Big Pot 1" },
        { task: "Pinch out Dahlia growing tips to encourage bushiness", plants: ["Dahlia 'Double Dreamy Lilac'", "Dahlia 'Double Dreamy Gold'"], bed: "Bed 1" },
      ],
    },

    June: {
      mood: "Settles into summer. Roses start, scent in the evening air.",
      highlights: [
        { plant: "Rose", bed: "Bed 4", note: "First flush opening on the trellis." },
        { plant: "Maiden Pink", bed: "Bed 2", note: "Pink stars spilling from the wall gap." },
        { plant: "Nemesia 'Aroma Heart of Gold'", bed: "Bed 1", note: "Fragrant burgundy, cream and yellow flowers along the front edge." },
        { plant: "Honeysuckle", bed: "Stone Bed", note: "Fragrant flowers — strongest in the evening." },
        { plant: "New Zealand Flax (cultivar to confirm)", bed: "Bed 5", note: "Striped sword-shaped foliage giving the boundary bed strong structure; mature plants may raise a tall flower stem." },
        { plant: "Silverbush", bed: "Bed 2", note: "White trumpet flowers on the silver mound." },
        { plant: "Fuchsia", bed: "Big Pot 1", note: "Red and purple pendant flowers starting — both big pots coming alive." },
        { plant: "Geranium", bed: "Little Pot 2", note: "Red-and-white bicolour heads bright against the blue pot." },
        { plant: "Callistemon 'Inferno'", bed: "Bed 3", note: "First vivid red bottlebrush flowers of the season — a real statement against the gravel." },
        { plant: "Gaillardia", bed: "Bed 3", note: "Bold daisy flowers in red, orange and yellow — continuous if deadheaded." },
        { plant: "Achillea", bed: "Bed 3", note: "Flat-headed flower clusters beginning above the ferny foliage." },
        { plant: "Gazania 'Sunny Side Up'", bed: "Front Pot", note: "Large cream-white daisies — only open in sun, but bright when they do." },
        { plant: "Gazania 'Orange Flame'", bed: "Front Pot", note: "Vivid orange flames — stunning in the morning sun by the front door." },
        { plant: "Spiraea 'Double Play Big Bang'", bed: "Bed 2", note: "Bright pink flowers opening against the vivid orange-red foliage — a genuinely striking combination." },
        { plant: "Celosia", bed: "Bed 3", note: "Purple, yellow and red crested plumes in the gaps — vivid and exotic-looking." },
        { plant: "Candy House Mix", bed: "Wall Pot 1", note: "Mixed red, yellow and pink trailing flowers tumbling from the stair wall — something to look at on the way down." },
        { plant: "Coreopsis Gold", bed: "Wall Pot 2", note: "Cheerful yellow daisies in the blue pot on the wall — simple and effective." },
      ],
      tasks: [
        { task: "Prune Weigela after flowering — one in three old stems out", plants: ["Weigela"], bed: "Bed 2" },
        { task: "Deadhead roses regularly to keep them flowering", plants: ["Rose"], bed: "Bed 4" },
        { task: "Deadhead Maiden Pink and trim back lightly", plants: ["Maiden Pink"], bed: "Bed 2" },
        { task: "Trim Nemesia hard after first flush for a second show", plants: ["Nemesia 'Aroma Heart of Gold'"], bed: "Bed 1" },
        { task: "Make sure peony supports are doing their job — heavy heads after rain", plants: ["Peony"], bed: "Bed 2" },
        { task: "Feed pots weekly with liquid tomato food — don't let them dry out", plants: ["Calibrachoa", "Petunia", "Lobelia"], bed: "Big Pot 1" },
        { task: "Add discreet support only if the compact Dahlias begin to lean under their flowers", plants: ["Dahlia 'Double Dreamy Lilac'", "Dahlia 'Double Dreamy Gold'"], bed: "Bed 1" },
        { task: "Deadhead Gaillardia — regular removal is essential for continuous flowering", plants: ["Gaillardia"], bed: "Bed 3" },
        { task: "Feed front door pot weekly with liquid tomato food — Gazania, Calibrachoa and Bacopa all benefit", plants: ["Gazania 'Sunny Side Up'", "Gazania 'Orange Flame'", "Calibrachoa", "Bacopa White"], bed: "Front Pot" },
        { task: "Deadhead Gazania spent flowers to keep them going", plants: ["Gazania 'Sunny Side Up'", "Gazania 'Orange Flame'"], bed: "Front Pot" },
        { task: "Feed wall pots weekly with liquid tomato food — Calibrachoa and Coreopsis both respond well", plants: ["Candy House Mix", "Coreopsis Gold"], bed: "Wall Pot 1" },
        { task: "Deadhead Celosia spent plumes to keep more flowers coming", plants: ["Celosia"], bed: "Bed 3" },
        { task: "Remove dead flower heads from Spiraea to tidy; do not cut hard until next spring", plants: ["Spiraea 'Double Play Big Bang'"], bed: "Bed 2" },
      ],
    },

    July: {
      mood: "Lavender and bees. The hot middle of the year.",
      highlights: [
        { plant: "Lavender", bed: "Patio", note: "Purple flower spikes at peak on the decking — bees from dawn." },
        { plant: "Rose", bed: "Bed 4", note: "Second wave coming through if deadheaded." },
        { plant: "Hosta 'Patriot'", bed: "Bed 1", note: "Lavender-blue flower spikes rising above the cream-edged leaves." },
        { plant: "Stonecrop", bed: "Stone Bed", note: "Yellow trailing flowers along the gravel." },
        { plant: "New Zealand Flax (cultivar to confirm)", bed: "Bed 5", note: "Architectural striped foliage at its strongest; remove only damaged leaves at the base." },
        { plant: "Dahlia 'Double Dreamy Lilac'", bed: "Bed 1", note: "First lilac-magenta double flowers opening against the dark foliage." },
        { plant: "Calibrachoa", bed: "Big Pot 1", note: "Pink star flowers trailing over the pot rim." },
        { plant: "Callistemon 'Inferno'", bed: "Bed 3", note: "Bottlebrush flowers in full cry — bright red against the summer foliage." },
        { plant: "Gaillardia", bed: "Bed 3", note: "Peak flowering — bold oranges and reds if kept deadheaded." },
        { plant: "Abelia 'Kaleidoscope'", bed: "Bed 3", note: "Small white fragrant flowers appearing among the variegated foliage." },
        { plant: "Dahlia 'Double Dreamy Gold'", bed: "Bed 1", note: "First golden double flowers opening against that dark bronze foliage — a strong contrast." },
        { plant: "Avens", bed: "Bed 2", note: "Second flush of orange flowers if well deadheaded through June." },
        { plant: "Gazania 'Orange Flame'", bed: "Front Pot", note: "Orange flame daisies at their most vivid in the summer sun." },
        { plant: "Celosia", bed: "Bed 3", note: "Vivid crested plumes in full — purple, yellow and red all going at once." },
        { plant: "Spiraea 'Double Play Big Bang'", bed: "Bed 2", note: "Pink flowers against orange foliage — still going strong." },
        { plant: "Candy House Mix", bed: "Wall Pot 1", note: "Trailing flowers in full flow — earning its spot on the wall." },
        { plant: "Coreopsis Gold", bed: "Wall Pot 2", note: "Golden daisy flowers at peak — bees love them." },
      ],
      tasks: [
        { task: "Deadhead lavender — never cut into the old woody growth", plants: ["Lavender"], bed: "Patio" },
        { task: "Continue deadheading roses; feed with rose food after first flush", plants: ["Rose"], bed: "Bed 4" },
        { task: "Prune Honeysuckle lightly after flowering", plants: ["Honeysuckle"], bed: "Stone Bed" },
        { task: "Deadhead the lilac Dahlia regularly to keep it flowering until frost", plants: ["Dahlia 'Double Dreamy Lilac'"], bed: "Bed 1" },
        { task: "Keep on top of pot watering — daily in hot weather, twice daily if baking", plants: ["Fuchsia", "Petunia", "Lobelia"], bed: "Big Pot 1" },
        { task: "Trim back leggy Lobelia mid-season for a fresh flush", plants: ["Lobelia"], bed: "Big Pot 2" },
        { task: "Deadhead Gaillardia and Callistemon spent flowers — keeps both performing", plants: ["Gaillardia", "Callistemon 'Inferno'"], bed: "Bed 3" },
        { task: "Deadhead the gold Dahlia regularly to keep it flowering until frost", plants: ["Dahlia 'Double Dreamy Gold'"], bed: "Bed 1" },
        { task: "Keep front pot well watered — Gazania and Calibrachoa suffer quickly if they dry out in heat", plants: ["Gazania 'Sunny Side Up'", "Gazania 'Orange Flame'", "Calibrachoa"], bed: "Front Pot" },
        { task: "Keep wall pots watered daily in hot weather — small pots dry out fast", plants: ["Candy House Mix", "Coreopsis Gold"], bed: "Wall Pot 1" },
        { task: "Cut Coreopsis back by half in midsummer for a strong second flush", plants: ["Coreopsis Gold"], bed: "Wall Pot 2" },
        { task: "Deadhead Celosia regularly — keeps the plumes coming", plants: ["Celosia"], bed: "Bed 3" },
      ],
    },

    August: {
      mood: "Heavy with fruit. The garden looks lush but ready for its second clip.",
      highlights: [
        { plant: "Lavender", bed: "Patio", note: "Still flowering on the decking, slightly faded — clip after." },
        { plant: "Apple Tree", bed: "Bed 3", note: "First apples colouring up on the branches." },
        { plant: "Pear Tree", bed: "Tree", note: "Pears swelling, near ready." },
        { plant: "Rose", bed: "Bed 4", note: "Second flush carrying on through the heat." },
        { plant: "Maiden Pink", bed: "Bed 2", note: "Still throwing out pink stars." },
        { plant: "Dahlia 'Double Dreamy Lilac'", bed: "Bed 1", note: "Lilac-magenta flowers at their peak against the dark leaves — the best month." },
        { plant: "Dahlia 'Double Dreamy Gold'", bed: "Bed 1", note: "Golden flowers at their peak — a vivid companion to the lilac plant." },
        { plant: "Abelia 'Kaleidoscope'", bed: "Bed 3", note: "Still flowering; foliage beginning its late-season colour change." },
        { plant: "Gaillardia", bed: "Bed 3", note: "Still going strong if kept deadheaded — one of the longest-flowering plants in the garden." },
        { plant: "Celosia", bed: "Bed 3", note: "Plumes still vivid — more flowers forming if it's been deadheaded." },
        { plant: "Coreopsis Gold", bed: "Wall Pot 2", note: "Second flush of yellow daisies after the midsummer cut-back." },
        { plant: "Candy House Mix", bed: "Wall Pot 1", note: "Still trailing and flowering — keep it fed and watered." },
      ],
      tasks: [
        { task: "Second clip of the box hedging", plants: ["Box Hedging"], bed: "Bed 1" },
        { task: "Wisteria summer prune — long whippy shoots back to 6 leaves", plants: ["Wisteria"], bed: "Bed 4" },
        { task: "Continue deadheading roses", plants: ["Rose"], bed: "Bed 4" },
        { task: "Harvest apples and pears as they ripen — taste-test daily", plants: ["Apple Tree", "Pear Tree"], bed: "Bed 3" },
        { task: "Trim Stonecrop back if it's getting leggy", plants: ["Stonecrop"], bed: "Stone Bed" },
        { task: "Keep deadheading both Double Dreamy Dahlias — regular removal keeps them flowering until frost", plants: ["Dahlia 'Double Dreamy Lilac'", "Dahlia 'Double Dreamy Gold'"], bed: "Bed 1" },
        { task: "Continue weekly feeding of all pots", plants: ["Calibrachoa", "Petunia", "Verbena"], bed: "Big Pot 1" },
        { task: "Cut Achillea back after its second flush — tidy up and mulch lightly", plants: ["Achillea"], bed: "Bed 3" },
        { task: "Trim Abelia 'Kaleidoscope' lightly after flowering to maintain shape — never cut hard", plants: ["Abelia 'Kaleidoscope'"], bed: "Bed 3" },
        { task: "Continue deadheading Gazania and feeding the front pot weekly", plants: ["Gazania 'Sunny Side Up'", "Gazania 'Orange Flame'"], bed: "Front Pot" },
        { task: "Continue feeding wall pots weekly and keep watered — Calibrachoa especially dislikes drying out", plants: ["Candy House Mix", "Coreopsis Gold"], bed: "Wall Pot 1" },
        { task: "Continue deadheading Celosia — keep removing finished plumes to extend the show", plants: ["Celosia"], bed: "Bed 3" },
      ],
    },

    September: {
      mood: "Harvest month. Things start to slow.",
      highlights: [
        { plant: "Apple Tree", bed: "Bed 3", note: "Main harvest week — pick when they twist off in the hand." },
        { plant: "Pear Tree", bed: "Tree", note: "Pears ready — pick slightly under-ripe and ripen indoors." },
        { plant: "Honeysuckle", bed: "Stone Bed", note: "Small red berries appearing where the flowers were." },
        { plant: "Nemesia 'Aroma Heart of Gold'", bed: "Bed 1", note: "Still flowering after the second trim." },
        { plant: "Silverbush", bed: "Bed 2", note: "Last of the white flowers on silver foliage." },
        { plant: "Celosia", bed: "Bed 3", note: "Still holding colour but beginning to fade — enjoy the last of it." },
        { plant: "Coreopsis Gold", bed: "Wall Pot 2", note: "Late flowers if the summer cut-back worked — winding down now." },
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
        { plant: "Japanese Maple 'Bloodgood'", bed: "Bed 1", note: "Deep purple foliage brightening to fiery red — peak fortnight of the year." },
        { plant: "Weeping Cherry", bed: "Bed 2", note: "Yellow and bronze leaves before they drop." },
        { plant: "Variegated Dogwood", bed: "Front Bed 3", note: "Cream-edged leaves dropping to reveal the red stems beneath." },
        { plant: "Apple Tree", bed: "Bed 3", note: "Last apples; leaves yellowing." },
        { plant: "Japanese Aralia", bed: "Bed 1", note: "Cream globe flowers opening — odd, alien, lovely." },
        { plant: "Dahlia 'Double Dreamy Lilac'", bed: "Bed 1", note: "Last lilac-magenta flowers before the first frost finishes the show." },
        { plant: "Dahlia 'Double Dreamy Gold'", bed: "Bed 1", note: "Last golden flowers — enjoy them while they last." },
        { plant: "Abelia 'Kaleidoscope'", bed: "Bed 3", note: "Foliage turning orange and flame-red — best autumn colour of the bed." },
        { plant: "Spiraea 'Double Play Big Bang'", bed: "Bed 2", note: "Foliage turning orange-red again — bookends the season nicely." },
      ],
      tasks: [
        { task: "Protect Angel Wings from the first frosts — fleece or move to shelter", plants: ["Angel Wings"], bed: "Bed 1" },
        { task: "Clear fallen leaves from the Yucca crown and top-dress with grit; avoid moisture-trapping winter wrapping", plants: ["Yucca"], bed: "Bed 5" },
        { task: "Clear debris around the dark New Zealand Flax and prepare loose crown protection only if severe frost is forecast", plants: ["New Zealand Flax (dark)"], bed: "Stone Bed" },
        { task: "Tidy Houseleek rosettes — remove any spent flowering rosettes", plants: ["Houseleeks"], bed: "Stone Bed" },
        { task: "Clear fallen leaves off the gravel beds and stone bed", plants: [], bed: "Stone Bed" },
        { task: "After first frost blackens the Dahlia foliage, cut stems to 15cm and mulch the crowns heavily — or lift the tubers and store dry", plants: ["Dahlia 'Double Dreamy Lilac'", "Dahlia 'Double Dreamy Gold'"], bed: "Bed 1" },
        { task: "Empty and clean pots once annuals are spent — compost the bedding, store pots frost-free if glazed", plants: ["Petunia", "Lobelia", "Calibrachoa", "Verbena"], bed: "Big Pot 1" },
        { task: "Bring Geraniums (Pelargoniums) indoors to overwinter if you want to keep them — or compost", plants: ["Geranium"], bed: "Little Pot 1" },
        { task: "Clear the front door pot — Gazania, Calibrachoa and Bacopa are tender annuals. Compost them and store the pot for winter", plants: ["Gazania 'Sunny Side Up'", "Gazania 'Orange Flame'", "Calibrachoa", "Bacopa White"], bed: "Front Pot" },
        { task: "Remove Celosia after the first frost — compost this tender annual", plants: ["Celosia"], bed: "Bed 3" },
        { task: "Cut Coreopsis Gold back to the crown for winter — it's a hardy perennial and should return next year", plants: ["Coreopsis Gold"], bed: "Wall Pot 2" },
        { task: "Cut Gaillardia back hard to the crown — some may not survive winter, have replacements in mind", plants: ["Gaillardia"], bed: "Bed 3" },
        { task: "Protect Callistemon thoroughly from severe cold and winter winds — RHS H3 means it needs a warm, sheltered position", plants: ["Callistemon Inferno ('Yanferno')"], bed: "Bed 4" },
      ],
    },

    November: {
      mood: "Things settle. The garden's bones reassert themselves.",
      highlights: [
        { plant: "Japanese Maple 'Bloodgood'", bed: "Bed 1", note: "Last of the red leaves clinging on." },
        { plant: "Variegated Dogwood", bed: "Front Bed 3", note: "Bare red stems beginning to dominate." },
        { plant: "Box Hedging", bed: "Bed 1", note: "Steady evergreen structure as everything else falls back." },
        { plant: "Japanese Aralia", bed: "Bed 1", note: "Cream flowers fading; leaves still glossy." },
      ],
      tasks: [
        { task: "Protect Silverbush from winter wet — sharp drainage and a sheltered spot", plants: ["Silverbush"], bed: "Bed 2" },
        { task: "Final tidy of the Peony after its foliage dies back", plants: ["Peony"], bed: "Bed 2" },
        { task: "Check Clematis montana framework — tie in any loose stems before winter winds", plants: ["Clematis"], bed: "Patio" },
      ],
    },

    December: {
      mood: "Quiet months. Read seed catalogues. Plan.",
      highlights: [
        { plant: "Variegated Dogwood", bed: "Front Bed 3", note: "Bright red stems at peak — the winter focal point." },
        { plant: "Box Hedging", bed: "Bed 1", note: "Dense green structure carrying the bed through winter." },
        { plant: "Japanese Aralia", bed: "Bed 1", note: "Glossy evergreen leaves — a tropical note in the cold." },
        { plant: "New Zealand Flax", bed: "Bed 4", note: "Architectural sword leaves regardless of weather." },
        { plant: "Cabbage Tree", bed: "Stone Bed", note: "Burgundy fountain holds its shape all winter." },
      ],
      tasks: [
        { task: "Enjoy the dogwood stems — best in low winter sun", plants: ["Variegated Dogwood"], bed: "Front Bed 3" },
        { task: "Protect tender plants from hard frost — fleece Angel Wings, Silverbush, Cordyline", plants: ["Angel Wings", "Silverbush", "Cabbage Tree"], bed: "Bed 1" },
        { task: "Check Callistemon frost protection and keep it sheltered from severe cold and winter winds", plants: ["Callistemon Inferno ('Yanferno')"], bed: "Bed 4" },
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
    "Bed 5": "bed5",
    "Stone Bed": "stone",
    "Patio": "patio",
    "Tree": "pear",
    "Big Pot 1": "bigpot1",
    "Big Pot 2": "bigpot2",
    "Little Pot 1": "littlepot1",
    "Little Pot 2": "littlepot2",
    "Lobelia Pot": "lobeliapot",
    "Front Pot": "frontpot",
    "Wall Pot 1": "wallpot1",
    "Wall Pot 2": "wallpot2",
    "Front Bed 1": "frontBed1",
    "Front Bed 2": "frontBed2",
    "Front Bed 3": "frontBed3",
    "Front Bed 4": "frontBed4",
    "Front Bed 5": "frontBed5",
  };

  const SEASONAL_NAME_ALIASES = {
    "Callistemon 'Inferno'": "Callistemon Inferno ('Yanferno')",
    "Clematis montana": "Clematis",
    "Yucca": "New Zealand Flax (cultivar to confirm)",
    "New Zealand Flax": "New Zealand Flax (cultivar to confirm)",
  };
  const DUPLICATE_NAME_DEFAULTS = {
    "Angel Wings": "bed1",
    "Apple Tree": "bed4",
    "Box Hedging": "bed1",
    "Hosta 'Patriot'": "bed1",
    "Lavender": "patio",
  };

  function resolvePlantReference(plantName, bedHint) {
    const resolvedName = SEASONAL_NAME_ALIASES[plantName] || plantName;
    const hintedZone = BED_TO_ZONE[bedHint];
    if (hintedZone && (window.OAK.PLANT_ID_BY_ZONE_AND_NAME[hintedZone] || {})[resolvedName]) {
      return {
        zoneKey: hintedZone,
        plantId: window.OAK.PLANT_ID_BY_ZONE_AND_NAME[hintedZone][resolvedName],
        plantName: resolvedName,
      };
    }
    const defaultZone = DUPLICATE_NAME_DEFAULTS[resolvedName];
    if (defaultZone && (window.OAK.PLANT_ID_BY_ZONE_AND_NAME[defaultZone] || {})[resolvedName]) {
      return {
        zoneKey: defaultZone,
        plantId: window.OAK.PLANT_ID_BY_ZONE_AND_NAME[defaultZone][resolvedName],
        plantName: resolvedName,
      };
    }
    const matches = Object.entries(window.OAK.PLANT_ID_BY_ZONE_AND_NAME)
      .filter(([, names]) => names[resolvedName])
      .map(([zoneKey, names]) => ({ zoneKey, plantId: names[resolvedName], plantName: resolvedName }));
    return matches.length === 1 ? matches[0] : null;
  }

  // Replace legacy bed/name links with validated stable references. Tasks
  // mentioning plants in more than one zone are split so every rendered task
  // has one unambiguous location.
  Object.entries(SEASONAL).forEach(([monthName, month]) => {
    month.highlights = month.highlights.map((entry, index) => {
      const reference = resolvePlantReference(entry.plant, entry.bed);
      if (!reference) throw new Error(`Unresolved seasonal reference: ${monthName} highlight ${index} (${entry.plant})`);
      return {
        ...entry,
        plant: reference.plantName,
        bed: window.OAK.ZONES[reference.zoneKey].plantKey,
        reference,
      };
    });
    month.tasks = month.tasks.flatMap((entry, index) => {
      const names = entry.plants || [];
      if (names.length === 0) return [{ ...entry, references: [] }];
      const references = names.map((name) => resolvePlantReference(name, entry.bed));
      const unresolved = references.findIndex((reference) => !reference);
      if (unresolved >= 0) {
        throw new Error(`Unresolved seasonal reference: ${monthName} task ${index} (${names[unresolved]})`);
      }
      const byZone = new Map();
      references.forEach((reference) => {
        if (!byZone.has(reference.zoneKey)) byZone.set(reference.zoneKey, []);
        byZone.get(reference.zoneKey).push(reference);
      });
      return Array.from(byZone.entries()).map(([zoneKey, zoneReferences]) => ({
        ...entry,
        plants: zoneReferences.map((reference) => reference.plantName),
        bed: window.OAK.ZONES[zoneKey].plantKey,
        references: zoneReferences,
      }));
    });
  });

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
