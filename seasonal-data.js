// Oak Lodge seasonal calendar. Reviewed 21 September 2026.
// Explicit tasks for the current inventory; this is advice, not journal history.
(function () {
  const SEASONAL = {
  "January": {
    "theme": "Use bare branches to make careful cuts, then keep winter protection secure.",
    "jobs": [
      {
        "scope": "plant",
        "zoneKeys": [
          "bed4"
        ],
        "plantIds": [
          "bed4-apple-tree"
        ],
        "steps": [
          "Remove dead, damaged or diseased wood first.",
          "Take out branches that rub or grow into the centre.",
          "Shorten only what is needed to balance the crown; keep the natural outline."
        ],
        "id": "jan-prune-back-apple",
        "priority": "first",
        "category": "prune",
        "title": "Winter-prune the back-garden apple",
        "timing": "Choose a dry, frost-free day while the tree is dormant.",
        "summary": "Open the crown gradually and remove damaged or crossing wood without taking too much at once.",
        "why": "A light winter prune keeps the framework sound and lets light and air reach the fruiting wood.",
        "doneWhen": "The crown looks open and balanced, with no rubbing branches and well under a quarter of the canopy removed.",
        "caution": "Do not make a drastic one-year reduction or prune during hard frost.",
        "guide": "prune",
        "sources": [
          "fruit",
          "shrubs",
          "plant-bed4-apple-tree"
        ],
        "plantNotes": {
          "bed4-apple-tree": "Preserve fruiting spurs and remove dead or rubbing wood first. Keep total removal modest; do not shorten every branch tip, especially on the assumed Bramley which may bear some fruit at tips."
        },
        "diagram": "collar"
      },
      {
        "scope": "plant",
        "zoneKeys": [
          "pear"
        ],
        "plantIds": [
          "stone-pear-tree"
        ],
        "steps": [
          "Start with dead, damaged and crossing branches.",
          "Remove vigorous inward-growing shoots.",
          "Make clean cuts just outside the branch collar."
        ],
        "id": "jan-prune-pear",
        "priority": "first",
        "category": "prune",
        "title": "Winter-prune the pear tree",
        "timing": "Any dry, frost-free day before spring growth begins.",
        "summary": "Remove unhealthy and congested wood, keeping the established framework recognisable.",
        "why": "A restrained dormant prune supports healthy fruiting growth and reduces congestion.",
        "doneWhen": "The centre is less congested and every cut has a clear purpose.",
        "caution": "Avoid removing more than about a quarter of the canopy in one winter.",
        "guide": "prune",
        "sources": [
          "fruit",
          "shrubs",
          "plant-stone-pear-tree"
        ],
        "plantNotes": {
          "stone-pear-tree": "Keep the established fruiting framework and short spur-bearing wood. Remove inward or rubbing shoots only when necessary; avoid a hard height reduction."
        },
        "diagram": "collar"
      },
      {
        "scope": "plant",
        "zoneKeys": [
          "frontApple"
        ],
        "plantIds": [
          "frontApple-apple-tree"
        ],
        "steps": [
          "Prune dead, crossing and inward-growing apple branches.",
          "Inspect the damson for damage without making routine cuts.",
          "Note any damson branches that need summer attention."
        ],
        "id": "jan-prune-front-fruit",
        "priority": "first",
        "category": "prune",
        "title": "Prune the front apple, but leave the damson alone",
        "timing": "Prune the apple on a dry, frost-free day; only inspect the damson now.",
        "summary": "Tidy the apple’s framework and mark any damson work for summer.",
        "why": "Apples suit dormant pruning; stone fruit is safer pruned in active growth when silver-leaf infection risk is lower.",
        "doneWhen": "The apple is lightly opened and the damson has been inspected but not routine-pruned.",
        "caution": "Do not winter-prune the damson.",
        "guide": "prune",
        "sources": [
          "fruit",
          "shrubs",
          "plant-frontApple-apple-tree"
        ],
        "plantNotes": {
          "frontApple-apple-tree": "Preserve fruiting spurs and remove dead or rubbing wood first. Keep total removal modest; do not shorten every branch tip, especially on the assumed Bramley which may bear some fruit at tips."
        },
        "diagram": "collar"
      },
      {
        "scope": "plant",
        "zoneKeys": [
          "bed5"
        ],
        "plantIds": [
          "bed5-rose"
        ],
        "steps": [
          "Remove dead, damaged and very weak stems.",
          "Retain and tie in well-placed main canes.",
          "Shorten side shoots from the main framework to a few buds."
        ],
        "id": "jan-prune-bed5-rose",
        "priority": "month",
        "category": "prune",
        "title": "Prune the Bed 5 climbing rose framework",
        "timing": "After leaf fall and before strong spring growth.",
        "summary": "Keep the main framework, remove tired wood and shorten flowering side shoots.",
        "why": "An open, tied-in framework produces more useful flowering shoots and is easier to manage on the wall.",
        "doneWhen": "The wall has a balanced fan of sound main stems with shortened side shoots.",
        "caution": "Wear gloves and eye protection; do not strip out the whole established framework.",
        "guide": "prune",
        "sources": [
          "shrubs",
          "plant-bed5-rose"
        ],
        "plantNotes": {},
        "diagram": "rose"
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed3",
          "frontApple"
        ],
        "plantIds": [
          "bed2-weeping-cherry",
          "frontApple-damson-tree"
        ],
        "steps": [
          "Look for rubbing branches, canker, silvered foliage history and suckers.",
          "Photograph or tag questionable branches.",
          "Recheck after flowering before cutting in summer."
        ],
        "id": "jan-inspect-summer-prune-trees",
        "priority": "month",
        "category": "check",
        "title": "Inspect the cherry and damson without pruning",
        "timing": "Use the bare winter framework for a clear look.",
        "summary": "Mark rubbing, dead-looking or awkward branches for a dry summer pruning window.",
        "why": "Planning now makes summer work deliberate while avoiding unsafe dormant cuts on stone fruit.",
        "doneWhen": "Any likely summer cuts are recorded and no routine winter cuts have been made.",
        "caution": "Remove only immediately hazardous storm damage now; reserve routine shaping for summer.",
        "guide": "check",
        "sources": [
          "month-january",
          "plant-bed2-weeping-cherry",
          "plant-frontApple-damson-tree"
        ],
        "plantNotes": {
          "bed2-weeping-cherry": "Inspect the bare framework and photograph any damaged or crossing branch. Reserve routine cuts for dry summer weather.",
          "frontApple-damson-tree": "Inspect the bare framework and photograph any damaged or crossing branch. Reserve routine cuts for dry summer weather."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "stone",
          "bed4",
          "frontBed5"
        ],
        "plantIds": [
          "stone-pennisetum-rubrum",
          "stone-echeveria",
          "stone-echeveria-devotion",
          "bed4-callistemon-inferno-yanferno",
          "frontBed5-bluebell-creeper-sollya",
          "frontBed5-salvia-salgoon-lake-blueberry"
        ],
        "steps": [
          "Refasten loose outdoor covers; remove sodden debris and ventilate in mild spells.",
          "Keep container drainage open and check crowns without cutting healthy protective growth.",
          "For plants housed elsewhere, arrange a check for rot and labels; fleece outdoors is not a substitute for that accommodation."
        ],
        "id": "jan-check-winter-protection-reviewed",
        "priority": "ongoing",
        "category": "protect",
        "title": "Check outdoor protection and any arranged winter homes",
        "timing": "After frost, snow, strong wind or prolonged winter rain.",
        "summary": "Recheck the outdoor plants after cold or wet weather. Inspect stored plants only if frost-free accommodation was actually arranged.",
        "why": "Cold combined with trapped damp is the main winter risk for Oak Lodge’s tender and borderline plants.",
        "doneWhen": "Outdoor protection is secure and breathable, and any plants housed elsewhere have been checked.",
        "sources": [
          "fleece",
          "plant-stone-pennisetum-rubrum",
          "plant-stone-echeveria",
          "plant-stone-echeveria-devotion",
          "plant-bed4-callistemon-inferno-yanferno",
          "plant-frontBed5-bluebell-creeper-sollya",
          "plant-frontBed5-salvia-salgoon-lake-blueberry"
        ],
        "guide": "protect",
        "plantNotes": {
          "stone-pennisetum-rubrum": "Rubrum is H3, unlike hardy fountain grasses. Keep it drained and sheltered, but frost-free accommodation gives a more dependable winter outcome than outdoor fleece.",
          "stone-echeveria": "Needs a bright frost-free winter home. Outdoor fleece or a rain shelter cannot reliably keep this Echeveria alive through a Bromsgrove winter; arrange accommodation elsewhere if keeping it matters.",
          "stone-echeveria-devotion": "Needs a bright frost-free winter home. Outdoor fleece or a rain shelter cannot reliably keep this Echeveria alive through a Bromsgrove winter; arrange accommodation elsewhere if keeping it matters.",
          "bed4-callistemon-inferno-yanferno": "Inferno is borderline outdoors here. Use fleece for brief cold spells, keep drainage open and retain healthy evergreen growth; prolonged freezing may still damage it.",
          "frontBed5-bluebell-creeper-sollya": "Shelter this borderline evergreen climber from cold wind, keeping covers ventilated. A severe winter may exceed what an outdoor wall and fleece can protect against.",
          "frontBed5-salvia-salgoon-lake-blueberry": "Lake Blueberry is H3. Keep some sound top growth and a drained crown. Outdoor protection is uncertain in severe cold; a cutting also needs an arranged frost-free home."
        },
        "caution": "Check the plant-specific limits: fleece reduces exposure but does not make an outdoor position frost-free."
      },
      {
        "id": "jan-winter-viola-round",
        "priority": "ongoing",
        "category": "refresh",
        "scope": "zone",
        "zoneKeys": [
          "stairpots",
          "staircans",
          "bed5",
          "lobeliapot",
          "frontBed5"
        ],
        "plantIds": [
          "stairpots-violas-pansies-group",
          "staircans-violas-pansies-group",
          "bed5-big-pot-violas-pansies",
          "lobeliapot-viola-rocky-purple-picotee",
          "frontBed5-viola-rocky-purple-picotee"
        ],
        "title": "Keep the winter Violas and Pansies flowering",
        "timing": "When blooms fade and after heavy rain; skip frozen plants.",
        "summary": "Remove spent flower stems and wet debris, retaining healthy plants for continued colour.",
        "why": "Give this planting the seasonal attention it needs without disturbing healthy neighbouring plants.",
        "steps": [
          "Pinch each finished flower stalk near its base, including the seed capsule.",
          "Clear wet leaves from crowns and check that cans and pots drain.",
          "Replace only failed plants; settle any replacements with water when the compost is unfrozen."
        ],
        "doneWhen": "The named work is complete and healthy growth remains undamaged.",
        "sources": [
          "deadhead",
          "fleece",
          "plant-stairpots-violas-pansies-group",
          "plant-staircans-violas-pansies-group",
          "plant-bed5-big-pot-violas-pansies",
          "plant-lobeliapot-viola-rocky-purple-picotee",
          "plant-frontBed5-viola-rocky-purple-picotee"
        ],
        "guide": "refresh",
        "plantNotes": {
          "stairpots-violas-pansies-group": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed.",
          "staircans-violas-pansies-group": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed.",
          "bed5-big-pot-violas-pansies": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed.",
          "lobeliapot-viola-rocky-purple-picotee": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed.",
          "frontBed5-viola-rocky-purple-picotee": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed."
        }
      }
    ],
    "highlights": [
      {
        "scope": "zone",
        "zoneKeys": [
          "frontBed3"
        ],
        "plantIds": [
          "bed2-variegated-dogwood"
        ],
        "id": "jan-dogwood-stems",
        "title": "Front Bed 3’s red-stem display",
        "note": "The dogwood carries the strongest winter colour once its leaves are gone."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1"
        ],
        "plantIds": [],
        "id": "jan-bed1-structure",
        "title": "Bed 1 holds its shape",
        "note": "Box, Japanese Aralia and evergreen foliage reveal the bed’s winter structure."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "stone"
        ],
        "plantIds": [],
        "id": "jan-stone-structure",
        "title": "Rosettes and dark foliage in the Stone Bed",
        "note": "Houseleeks, stonecrops and dark Phormium keep the gravel bed architectural."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "frontBed5"
        ],
        "plantIds": [],
        "id": "jan-front5-heathers",
        "title": "Winter colour along Front Bed 5",
        "note": "Evergreen heathers and colour-changing foliage keep the long boundary lively."
      }
    ],
    "indoorJobs": [
      {
        "scope": "plant",
        "zoneKeys": [
          "houseHallKentia"
        ],
        "plantIds": [
          "house-hallway-kentia-palm"
        ],
        "steps": [
          "Support each frond while wiping it gently.",
          "Check the undersides and stem bases for pests.",
          "Remove only fully brown fronds at the base."
        ],
        "id": "jan-indoor-kentia-clean",
        "priority": "month",
        "category": "check",
        "title": "Clean and inspect the Kentia palm",
        "timing": "On a bright winter morning.",
        "summary": "Wipe dust from the fronds and inspect both leaf surfaces for scale or mites.",
        "why": "Clean leaves use limited winter light better and an early pest check prevents a larger problem.",
        "doneWhen": "The fronds are clean and no active pest signs remain unchecked.",
        "guide": "check",
        "sources": [
          "month-january",
          "plant-house-hallway-kentia-palm"
        ],
        "plantNotes": {}
      },
      {
        "id": "jan-birthday-houseplants-moisture-2026",
        "scope": "zone",
        "zoneKeys": [
          "houseSittingRhipsalis",
          "houseSittingDracaena",
          "houseLandingCrassula",
          "houseKitchenPhilodendron",
          "houseLandingZamioculcas"
        ],
        "plantIds": [
          "house-sitting-rhipsalis",
          "house-sitting-dracaena-bicolour",
          "house-landing-crassula-hottentot",
          "house-kitchen-philodendron",
          "house-landing-zamioculcas"
        ],
        "priority": "ongoing",
        "category": "check",
        "title": "Check the five birthday houseplants individually",
        "timing": "When inspecting pots; reduce watering as light and growth decline.",
        "summary": "Feel each root ball before deciding whether to water; drain every outer pot after a drink.",
        "why": "The hanging cactus and young Philodendron dry differently from the water-storing Crassula and Zamioculcas.",
        "doneWhen": "All five root balls have been checked and any surplus water emptied.",
        "steps": [
          "Feel below the surface and lift each accessible inner pot.",
          "Water only the specimens whose compost has reached their stated drying point.",
          "Let runoff finish and return each pot to its marked position."
        ],
        "guide": "check",
        "sources": [
          "oct-house-rhipsalis",
          "oct-house-dracaena",
          "oct-house-crassula",
          "oct-house-philodendron",
          "oct-house-zamioculcas"
        ],
        "plantNotes": {
          "house-sitting-rhipsalis": "Let the surface begin to dry, then water and drain; avoid prolonged drought.",
          "house-sitting-dracaena-bicolour": "Allow the upper compost to dry before soaking and draining; use rainwater where possible.",
          "house-landing-crassula-hottentot": "Let compost dry between soakings; water sparingly through winter.",
          "house-kitchen-philodendron": "Water once the upper compost begins to dry and let excess drain completely.",
          "house-landing-zamioculcas": "Allow the whole root ball to dry before watering; reduce checks into winter."
        }
      }
    ]
  },
  "February": {
    "theme": "Finish dormant pruning, prepare supports and make space for spring growth.",
    "jobs": [
      {
        "scope": "plant",
        "zoneKeys": [
          "bed5"
        ],
        "plantIds": [
          "bed5-wisteria"
        ],
        "steps": [
          "Identify the permanent main framework.",
          "Follow each shortened side shoot back to its base.",
          "Cut to two or three healthy buds and remove dead or tangled growth."
        ],
        "id": "feb-prune-wisteria",
        "priority": "first",
        "category": "prune",
        "title": "Make the winter wisteria prune",
        "timing": "During dormancy, before buds begin extending.",
        "summary": "Shorten last summer’s side shoots back to two or three buds from the main framework.",
        "why": "The winter cut refines August’s prune and concentrates the flowering spurs close to the support.",
        "doneWhen": "Short flowering spurs sit neatly along a clearly visible main framework.",
        "caution": "Do not cut through the established main stems.",
        "guide": "prune",
        "sources": [
          "wisteria",
          "shrubs",
          "plant-bed5-wisteria"
        ],
        "plantNotes": {},
        "diagram": "wisteria-winter"
      },
      {
        "scope": "plant",
        "zoneKeys": [
          "frontBed5"
        ],
        "plantIds": [
          "frontBed5-clematis"
        ],
        "steps": [
          "Work from the base so old stems are not confused with neighbouring climbers.",
          "Cut to sound buds about 15–30cm above ground.",
          "Remove the cut top growth and tie the remaining stems loosely."
        ],
        "id": "feb-prune-front-clematis",
        "priority": "first",
        "category": "prune",
        "title": "Cut back the Front Bed 5 clematis",
        "timing": "Late February, before vigorous new growth tangles into its support.",
        "summary": "Treat the current viticella identification as pruning group 3 and cut every stem to strong low buds.",
        "why": "This clematis flowers on new growth and a firm annual cut prevents a bare, tangled base.",
        "doneWhen": "All clematis stems end at healthy low buds and the support is clear for new growth.",
        "caution": "Confirm each stem belongs to this clematis before cutting near the other shrubs and climbers.",
        "guide": "prune",
        "sources": [
          "clematis",
          "shrubs",
          "plant-frontBed5-clematis"
        ],
        "plantNotes": {},
        "diagram": "clematis-3"
      },
      {
        "scope": "plant",
        "zoneKeys": [
          "frontBed5"
        ],
        "plantIds": [
          "frontBed5-hydrangea-bloody-marie"
        ],
        "steps": [
          "Remove dead or damaged wood first.",
          "Shorten last year's shoots to healthy outward buds.",
          "Keep a balanced woody framework rather than cutting below all live structure."
        ],
        "id": "feb-prune-bloody-marie",
        "priority": "month",
        "category": "prune",
        "title": "Prune the Bloody Marie panicle hydrangea",
        "timing": "Late winter or early spring before active growth begins.",
        "summary": "Shorten last year's shoots to healthy buds while retaining a low permanent framework.",
        "why": "Panicle hydrangeas flower on new growth and a measured annual prune encourages strong flowering stems.",
        "doneWhen": "A compact sound framework remains with healthy buds ready to grow.",
        "caution": "Do not apply mophead-hydrangea pruning rules to this panicle hydrangea.",
        "guide": "prune",
        "sources": [
          "hydrangea",
          "shrubs",
          "plant-frontBed5-hydrangea-bloody-marie"
        ],
        "plantNotes": {},
        "diagram": "bud"
      },
      {
        "scope": "plant",
        "zoneKeys": [
          "frontBed3"
        ],
        "plantIds": [
          "bed2-variegated-dogwood"
        ],
        "steps": [
          "Identify the thickest and dullest old stems.",
          "Remove about one in three cleanly at the base.",
          "Leave strong younger red stems untouched."
        ],
        "id": "feb-coppice-dogwood",
        "priority": "first",
        "category": "prune",
        "title": "Renew the variegated dogwood stems",
        "timing": "Late February to early March, before leaves open.",
        "summary": "Remove roughly one third of the oldest stems at ground level rather than cutting every stem short.",
        "why": "Selective renewal encourages bright young winter stems while preserving the shrub’s established shape.",
        "doneWhen": "Old wood has been thinned and a balanced set of bright young stems remains.",
        "caution": "Do not coppice the whole shrub unless a full renovation is deliberately intended.",
        "guide": "prune",
        "sources": [
          "shrubs",
          "plant-bed2-variegated-dogwood"
        ],
        "plantNotes": {},
        "diagram": "renewal"
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed4",
          "pear",
          "frontApple",
          "frontGateTree"
        ],
        "plantIds": [
          "bed4-apple-tree",
          "stone-pear-tree",
          "frontApple-apple-tree",
          "frontGateTree-weeping-crab-apple"
        ],
        "steps": [
          "Recheck earlier cuts and the remaining framework.",
          "Remove only clearly justified dead, crossing or inward growth.",
          "Preserve the crab apple’s weeping outline."
        ],
        "id": "feb-finish-pome-pruning",
        "priority": "month",
        "category": "prune",
        "title": "Finish restrained apple, pear and crab-apple pruning",
        "timing": "Before bud break, on a dry and frost-free day.",
        "summary": "Complete only the sound-wood and congestion work that was not finished in January.",
        "why": "Finishing before active growth avoids rushed late cuts and keeps the frameworks easy to inspect.",
        "doneWhen": "All four trees have sound, recognisable frameworks with no unnecessary reduction.",
        "caution": "Do not include the cherry or damson in this winter round.",
        "guide": "prune",
        "sources": [
          "fruit",
          "shrubs",
          "plant-bed4-apple-tree",
          "plant-stone-pear-tree",
          "plant-frontApple-apple-tree",
          "plant-frontGateTree-weeping-crab-apple"
        ],
        "plantNotes": {
          "bed4-apple-tree": "Preserve fruiting spurs and remove dead or rubbing wood first. Keep total removal modest; do not shorten every branch tip, especially on the assumed Bramley which may bear some fruit at tips.",
          "stone-pear-tree": "Keep the established fruiting framework and short spur-bearing wood. Remove inward or rubbing shoots only when necessary; avoid a hard height reduction.",
          "frontApple-apple-tree": "Preserve fruiting spurs and remove dead or rubbing wood first. Keep total removal modest; do not shorten every branch tip, especially on the assumed Bramley which may bear some fruit at tips.",
          "frontGateTree-weeping-crab-apple": "Preserve the weeping shape. Limit routine pruning to dead, damaged or crossing branches; avoid shortening every hanging shoot."
        },
        "diagram": "collar"
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "frontBed3",
          "frontBed4"
        ],
        "plantIds": [
          "frontBed3-rose-pink",
          "frontBed4-the-pilgrim",
          "frontBed4-the-generous-gardener"
        ],
        "steps": [
          "Trace each rose from its base so adjacent climbers are not confused.",
          "Remove dead, damaged and very weak wood; tie useful long canes into an open fan.",
          "Shorten flowered side shoots by about two thirds, cutting above a healthy bud."
        ],
        "id": "feb-prune-front-roses-reviewed",
        "priority": "month",
        "category": "prune",
        "title": "Prune the identified front climbing roses",
        "timing": "Late winter, after the harshest weather and before strong leaf growth.",
        "summary": "Keep long main canes and shorten their flowered side shoots; treat Super Fairy and the unidentified shrub rose separately.",
        "why": "Early training keeps paths clear and directs spring growth where it can flower without tangling.",
        "doneWhen": "Each rose has an open framework, secure ties and no branches obstructing access.",
        "caution": "Use gloves and eye protection, and check which stems belong to neighbouring climbers.",
        "leaveAlone": "Do not give Super Fairy or the unidentified roses this standard climbing-rose cut.",
        "diagram": "rose",
        "sources": [
          "roses",
          "plant-frontBed3-rose-pink",
          "plant-frontBed4-the-pilgrim",
          "plant-frontBed4-the-generous-gardener"
        ],
        "guide": "prune",
        "plantNotes": {
          "frontBed3-rose-pink": "Keep and tie the long climbing canes. Shorten flowered side shoots by about two thirds above a healthy bud, rather than cutting every stem to ground level.",
          "frontBed4-the-pilgrim": "Keep and tie the long climbing canes. Shorten flowered side shoots by about two thirds above a healthy bud, rather than cutting every stem to ground level.",
          "frontBed4-the-generous-gardener": "Keep and tie the long climbing canes. Shorten flowered side shoots by about two thirds above a healthy bud, rather than cutting every stem to ground level."
        }
      },
      {
        "scope": "plant",
        "zoneKeys": [
          "bed2"
        ],
        "plantIds": [
          "bed2-peony"
        ],
        "steps": [
          "Clear loose debris without covering the crown buds.",
          "Centre the support over the plant.",
          "Anchor it firmly without spearing the crown."
        ],
        "id": "feb-set-peony-support",
        "priority": "month",
        "category": "prune",
        "title": "Put the peony support in early",
        "timing": "Before the shoots become tall enough to bend.",
        "summary": "Position a support over the dormant or newly emerging crown so growth can rise through it naturally.",
        "why": "Early support disappears into the foliage and prevents heavy flowers collapsing after rain.",
        "doneWhen": "The support is stable, centred and ready for shoots to grow through it.",
        "guide": "support",
        "sources": [
          "month-february",
          "plant-bed2-peony"
        ],
        "plantNotes": {
          "bed2-peony": "Guide shoots through the support while flexible and raise it with growth. Avoid pinching stems under the ring or driving feet through the crown."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "bed2",
          "bed3",
          "bed4",
          "bed5",
          "frontBed1",
          "frontBed2",
          "frontBed3",
          "frontBed4",
          "frontBed5"
        ],
        "plantIds": [],
        "steps": [
          "Hand-remove weeds with their roots.",
          "Lift wet leaf mats from crowns and low evergreens.",
          "Leave healthy soil undisturbed rather than repeatedly digging it."
        ],
        "id": "feb-prepare-ground",
        "priority": "ongoing",
        "category": "check",
        "title": "Clear and prepare border surfaces",
        "timing": "Work only when the ground is not frozen or saturated.",
        "summary": "Remove perennial weeds and compacted leaf litter, then leave clean soil ready for spring mulch.",
        "why": "Early clearing makes spring growth visible and prevents weeds gaining a head start.",
        "doneWhen": "Plant crowns are visible, weed roots are removed and the soil surface is ready for mulch.",
        "guide": "check",
        "sources": [
          "month-february"
        ],
        "plantNotes": {}
      },
      {
        "id": "feb-super-fairy-selective",
        "priority": "month",
        "category": "prune",
        "scope": "plant",
        "zoneKeys": [
          "frontBed3"
        ],
        "plantIds": [
          "frontBed3-climbing-rose-white-pink"
        ],
        "title": "Inspect and train Super Fairy as a repeat rambler",
        "timing": "Late winter on a frost-free day; only if it is congested.",
        "summary": "Keep flexible canes for later flower flushes and remove only dead or genuinely congested old wood.",
        "why": "Give this planting the seasonal attention it needs without disturbing healthy neighbouring plants.",
        "steps": [
          "Trace each cane back to the base.",
          "Remove dead or damaged wood; renew an old cane only where a sound replacement exists.",
          "Tie flexible new canes around the window without forcing them."
        ],
        "doneWhen": "The named work is complete and healthy growth remains undamaged.",
        "leaveAlone": "Do not apply a blanket hard cut or remove all new canes.",
        "sources": [
          "roses",
          "plant-frontBed3-climbing-rose-white-pink"
        ],
        "guide": "prune",
        "plantNotes": {}
      }
    ],
    "highlights": [
      {
        "scope": "zone",
        "zoneKeys": [
          "frontBed3"
        ],
        "plantIds": [
          "bed2-variegated-dogwood"
        ],
        "id": "feb-dogwood-last-show",
        "title": "The dogwood’s last full winter show",
        "note": "Enjoy the brightest red stems before selective renewal pruning."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "frontBed5"
        ],
        "plantIds": [],
        "id": "feb-front5-heath",
        "title": "Winter heath along Front Bed 5",
        "note": "Low evergreen mounds and winter flowers carry colour close to the ground."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "stone"
        ],
        "plantIds": [],
        "id": "feb-stone-rosettes",
        "title": "Cold-coloured Stone Bed rosettes",
        "note": "Houseleeks often deepen in red and purple tones in bright winter weather."
      }
    ],
    "indoorJobs": [
      {
        "id": "feb-birthday-houseplants-moisture-2026",
        "scope": "zone",
        "zoneKeys": [
          "houseSittingRhipsalis",
          "houseSittingDracaena",
          "houseLandingCrassula",
          "houseKitchenPhilodendron",
          "houseLandingZamioculcas"
        ],
        "plantIds": [
          "house-sitting-rhipsalis",
          "house-sitting-dracaena-bicolour",
          "house-landing-crassula-hottentot",
          "house-kitchen-philodendron",
          "house-landing-zamioculcas"
        ],
        "priority": "ongoing",
        "category": "check",
        "title": "Check the five birthday houseplants individually",
        "timing": "When inspecting pots; reduce watering as light and growth decline.",
        "summary": "Feel each root ball before deciding whether to water; drain every outer pot after a drink.",
        "why": "The hanging cactus and young Philodendron dry differently from the water-storing Crassula and Zamioculcas.",
        "doneWhen": "All five root balls have been checked and any surplus water emptied.",
        "steps": [
          "Feel below the surface and lift each accessible inner pot.",
          "Water only the specimens whose compost has reached their stated drying point.",
          "Let runoff finish and return each pot to its marked position."
        ],
        "guide": "check",
        "sources": [
          "oct-house-rhipsalis",
          "oct-house-dracaena",
          "oct-house-crassula",
          "oct-house-philodendron",
          "oct-house-zamioculcas"
        ],
        "plantNotes": {
          "house-sitting-rhipsalis": "Let the surface begin to dry, then water and drain; avoid prolonged drought.",
          "house-sitting-dracaena-bicolour": "Allow the upper compost to dry before soaking and draining; use rainwater where possible.",
          "house-landing-crassula-hottentot": "Let compost dry between soakings; water sparingly through winter.",
          "house-kitchen-philodendron": "Water once the upper compost begins to dry and let excess drain completely.",
          "house-landing-zamioculcas": "Allow the whole root ball to dry before watering; reduce checks into winter."
        }
      }
    ]
  },
  "March": {
    "theme": "Clear old growth, mulch clean ground and protect the first tender shoots.",
    "jobs": [
      {
        "scope": "zone",
        "zoneKeys": [
          "bed3"
        ],
        "plantIds": [
          "bed2-spiraea-double-play-big-bang",
          "frontBed4-magic-carpet"
        ],
        "steps": [
          "Remove dead and very weak stems at the base.",
          "Shorten the remaining stems evenly to healthy outward buds.",
          "Clear the prunings from the crown."
        ],
        "id": "mar-prune-spiraea-bed3-reviewed",
        "priority": "first",
        "category": "prune",
        "title": "Prune the Bed 3 spiraea before growth runs away",
        "timing": "Early March, as buds begin moving but before shoots extend strongly.",
        "summary": "Remove weak wood and shorten the framework to encourage vivid new foliage and fresh flowering growth.",
        "why": "Early-spring pruning renews this summer-flowering spiraea without sacrificing the coming display.",
        "doneWhen": "A compact, balanced framework remains with healthy buds facing outward.",
        "guide": "prune",
        "sources": [
          "shrubs",
          "plant-bed2-spiraea-double-play-big-bang",
          "plant-frontBed4-magic-carpet"
        ],
        "plantNotes": {
          "bed2-spiraea-double-play-big-bang": "These Japanese Spiraeas flower on new summer growth. In early spring shorten last year’s shoots to healthy outward buds and remove weak or congested stems selectively.",
          "frontBed4-magic-carpet": "These Japanese Spiraeas flower on new summer growth. In early spring shorten last year’s shoots to healthy outward buds and remove weak or congested stems selectively."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "frontBed5",
          "bed4",
          "bed1"
        ],
        "plantIds": [
          "frontBed5-gaura-gaudi-red",
          "frontBed5-salvia-salgoon-lake-blueberry",
          "frontBed5-hardy-fuchsia",
          "bed4-gaillardia"
        ],
        "steps": [
          "Wait until live buds or basal shoots are easy to see.",
          "Cut dead stems just above healthy growth.",
          "Remove soft or rotten crown material with clean tools."
        ],
        "id": "mar-cut-back-late-frost-plants-reviewed",
        "priority": "first",
        "category": "deadhead",
        "title": "Delay tender cut-backs until the worst frost has passed",
        "timing": "Only after the worst frosts have passed and living growth is visible; this may be April or May.",
        "summary": "Cut old gaura, salvia, hardy fuchsia and gaillardia growth back to live shoots rather than to an arbitrary height.",
        "why": "Old stems shelter the crowns; visible new growth shows exactly where each plant has survived.",
        "doneWhen": "Only live frameworks or healthy emerging crowns remain.",
        "caution": "If hard frost is still forecast, leave sound old stems a little longer.",
        "leaveAlone": "Do not cut living Salvia, Gaura or Fuchsia hard while hard frost is forecast.",
        "guide": "clear",
        "sources": [
          "deadhead",
          "plant-frontBed5-gaura-gaudi-red",
          "plant-frontBed5-salvia-salgoon-lake-blueberry",
          "plant-frontBed5-hardy-fuchsia",
          "plant-bed4-gaillardia"
        ],
        "plantNotes": {
          "frontBed5-gaura-gaudi-red": "Wait for frost risk to ease and living growth to show. Remove dead stems back to healthy buds; a quiet March crown is not proof that the plant has died.",
          "frontBed5-salvia-salgoon-lake-blueberry": "Wait for frost risk to ease and living growth to show. Remove dead stems back to healthy buds; a quiet March crown is not proof that the plant has died.",
          "frontBed5-hardy-fuchsia": "Wait for frost risk to ease and living growth to show. Remove dead stems back to healthy buds; a quiet March crown is not proof that the plant has died.",
          "bed4-gaillardia": "Remove collapsed stems and dead leaves while retaining the low healthy rosette. Keep wet debris off the crown."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "bed2",
          "bed3",
          "frontBed2",
          "frontBed5",
          "frontStone"
        ],
        "plantIds": [
          "bed1-hosta",
          "bed1-hosta-gold",
          "bed2-peony",
          "bed2-avens",
          "bed2-centaurea-snowy-owl",
          "frontBed2-polemonium-golden-feathers",
          "frontBed4-astrantia-trio",
          "frontBed5-ceratostigma-plumbaginoides",
          "frontStone-hosta"
        ],
        "steps": [
          "Identify each crown before working around it.",
          "Cut or lift away only dead material.",
          "Mark dormant plants that are still hard to see."
        ],
        "id": "mar-clear-herbaceous-crowns",
        "priority": "month",
        "category": "deadhead",
        "title": "Clear old herbaceous growth before new shoots expand",
        "timing": "As each crown begins to show fresh growth.",
        "summary": "Remove collapsed stems and leaves without cutting new buds or burying crowns.",
        "why": "A careful spring clear reduces hiding places for slugs and makes room for clean new growth.",
        "doneWhen": "New shoots are unobstructed and no healthy crown has been covered or damaged.",
        "guide": "clear",
        "sources": [
          "deadhead",
          "plant-bed1-hosta",
          "plant-bed1-hosta-gold",
          "plant-bed2-peony",
          "plant-bed2-avens",
          "plant-bed2-centaurea-snowy-owl",
          "plant-frontBed2-polemonium-golden-feathers",
          "plant-frontBed4-astrantia-trio",
          "plant-frontBed5-ceratostigma-plumbaginoides",
          "plant-frontStone-hosta"
        ],
        "plantNotes": {
          "bed1-hosta": "Remove only dead collapsed leaves and old stalks. Keep the pointed emerging buds and do not cut into the firm crown.",
          "bed1-hosta-gold": "Remove only dead collapsed leaves and old stalks. Keep the pointed emerging buds and do not cut into the firm crown.",
          "bed2-peony": "Cut fully yellowed or dead stems just above soil level, sparing red buds. Do not cover the crown with old foliage or a deep layer of compost.",
          "bed2-avens": "Remove dead stems and leaves individually; keep the healthy basal rosette rather than cutting the entire clump bare.",
          "bed2-centaurea-snowy-owl": "Clear fully dead stems around the crown while protecting fresh basal buds. Do not dig up a late-emerging dormant clump.",
          "frontBed2-polemonium-golden-feathers": "Remove dead stems and leaves individually; keep the healthy basal rosette rather than cutting the entire clump bare.",
          "frontBed4-astrantia-trio": "Clear fully dead stems around the crown while protecting fresh basal buds. Do not dig up a late-emerging dormant clump.",
          "frontBed5-ceratostigma-plumbaginoides": "Clear fully dead stems around the crown while protecting fresh basal buds. Do not dig up a late-emerging dormant clump.",
          "frontStone-hosta": "Remove only dead collapsed leaves and old stalks. Keep the pointed emerging buds and do not cut into the firm crown."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "frontBed5"
        ],
        "plantIds": [
          "frontBed5-heather-bells-extra-special",
          "frontBed5-heather-tib",
          "frontBed5-heather-leprechaun",
          "frontBed5-heather-winter-chocolate"
        ],
        "steps": [
          "Check that flowering has finished.",
          "Follow the mound’s natural outline with small shears.",
          "Stop every cut above live leafy growth."
        ],
        "id": "mar-clip-heathers",
        "priority": "month",
        "category": "prune",
        "title": "Lightly clip the finished heathers",
        "timing": "Immediately after each plant finishes flowering.",
        "summary": "Remove only faded flower tips, keeping green or gold foliage below every cut.",
        "why": "A light annual clip keeps heathers compact without cutting into old wood that may not regrow.",
        "doneWhen": "Faded spikes are gone and each mound still has leafy tips across its surface.",
        "caution": "Never cut back into bare brown wood.",
        "guide": "prune",
        "sources": [
          "shrubs",
          "plant-frontBed5-heather-bells-extra-special",
          "plant-frontBed5-heather-tib",
          "plant-frontBed5-heather-leprechaun",
          "plant-frontBed5-heather-winter-chocolate"
        ],
        "plantNotes": {
          "frontBed5-heather-bells-extra-special": "This Erica flowers in winter and spring: wait until its own flowers finish, then trim lightly within green growth.",
          "frontBed5-heather-tib": "Clip last year’s Calluna flower tips in spring, keeping leafy growth beneath every cut. A bare woody centre may not regrow.",
          "frontBed5-heather-leprechaun": "Clip last year’s Calluna flower tips in spring, keeping leafy growth beneath every cut. A bare woody centre may not regrow.",
          "frontBed5-heather-winter-chocolate": "Clip last year’s Calluna flower tips in spring, keeping leafy growth beneath every cut. A bare woody centre may not regrow."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "bed2",
          "bed3",
          "bed4",
          "bed5",
          "frontBed1",
          "frontBed2",
          "frontBed3",
          "frontBed4",
          "frontBed5"
        ],
        "plantIds": [],
        "steps": [
          "Weed first; water dry soil and wait for frozen or saturated ground to become workable.",
          "Spread mulch between plants, keeping peony buds, low rosettes and woody stem bases exposed.",
          "Use leaf mould around acid-loving shallow roots; leave alpines and dry crowns in their open gravel."
        ],
        "id": "mar-mulch-borders-reviewed",
        "priority": "month",
        "category": "mulch",
        "title": "Mulch the main beds after clearing",
        "timing": "Once weeds are removed and the soil is workable.",
        "summary": "Spread about 5cm of well-rotted organic mulch over moist open soil, leaving space around trunks and crowns.",
        "why": "Spring mulch improves the soil, suppresses weeds and protects the surface before growth closes in.",
        "doneWhen": "Bare soil is covered evenly and every trunk and crown has a clear breathing ring.",
        "diagram": "mulch",
        "sources": [
          "mulch"
        ],
        "guide": "mulch",
        "plantNotes": {},
        "zoneNotes": {
          "bed1": "Mulch between shrubs with leaf mould or well-rotted compost, keeping Hosta buds, fern crowns and the bases of Skimmia and Pieris clear.",
          "bed2": "Keep the Peony crown exposed. Mulch the Hydrangea’s root area but leave Silverbush’s crown dry and open.",
          "bed3": "Spread only between shrubs; keep Sedum, Candytuft and the small groundcover crowns clear.",
          "bed4": "Keep mulch off the apple trunk and Gaillardia crown; retain a moist root area around the perennial Lobelia.",
          "bed5": "Mulch open border soil, not all the mixed pots. Keep the Yucca and Cordyline growing centres exposed.",
          "frontBed1": "Mulch the Hydrangea’s root area while leaving Lavender’s woody base dry and open.",
          "frontBed2": "Keep Coprosma stem bases and Polemonium’s leafy crown uncovered.",
          "frontBed3": "Mulch around the roses and Dogwood without banking against stems or covering Kniphofia’s crown.",
          "frontBed4": "Use leaf mould around Rhododendron, Azalea and Pieris roots; keep Festuca and Calluna crowns open.",
          "frontBed5": "Keep the many small crowns visible. Use leaf mould around Pieris and woodland planting; leave Euphorbia and Gaura centres open."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "frontStone"
        ],
        "plantIds": [
          "bed1-hosta",
          "bed1-hosta-gold",
          "frontStone-hosta"
        ],
        "steps": [
          "Check beneath nearby pots, boards and leaf litter.",
          "Inspect shoots at dusk or early morning.",
          "Use the garden’s preferred wildlife-safe control consistently."
        ],
        "id": "mar-hostas-slugs",
        "priority": "ongoing",
        "category": "check",
        "title": "Start hosta slug checks at shoot stage",
        "timing": "From the first pointed shoots, especially after mild damp nights.",
        "summary": "Inspect around crowns and remove hiding places before leaves unfurl.",
        "why": "Early damage happens quickly and remains visible for the whole season.",
        "doneWhen": "Crowns are clear of hiding debris and new shoots show no unchecked fresh damage.",
        "guide": "check",
        "sources": [
          "month-march",
          "plant-bed1-hosta",
          "plant-bed1-hosta-gold",
          "plant-frontStone-hosta"
        ],
        "plantNotes": {
          "bed1-hosta": "Inspect emerging Hosta buds and nearby hiding places, especially after damp nights. Act on fresh damage; avoid disturbing the crown.",
          "bed1-hosta-gold": "Inspect emerging Hosta buds and nearby hiding places, especially after damp nights. Act on fresh damage; avoid disturbing the crown.",
          "frontStone-hosta": "Inspect emerging Hosta buds and nearby hiding places, especially after damp nights. Act on fresh damage; avoid disturbing the crown."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1"
        ],
        "plantIds": [
          "bed1-box-hedging"
        ],
        "steps": [
          "Open the box foliage and look for webbing, pellets and chewed leaves.",
          "Watch quietly for repeated bird movement.",
          "Postpone clipping wherever a nest may be active."
        ],
        "id": "mar-box-and-nests",
        "priority": "ongoing",
        "category": "check",
        "title": "Check box caterpillar and nesting activity",
        "timing": "Weekly as weather warms, before any box clipping.",
        "summary": "Inspect the Bed 1 box leaves for webbing and check carefully for active nests.",
        "why": "Early pest detection is easier to manage, while active bird nests must not be disturbed.",
        "doneWhen": "Pest signs are assessed and no planned box work risks disturbing a nest.",
        "guide": "check",
        "sources": [
          "month-march",
          "plant-bed1-box-hedging"
        ],
        "plantNotes": {}
      },
      {
        "id": "mar-unknown-woody-plants",
        "priority": "month",
        "category": "prune",
        "scope": "zone",
        "zoneKeys": [
          "bed2",
          "bed3",
          "frontBed5"
        ],
        "plantIds": [
          "bed2-butterfly-bush",
          "bed2-rose-inherited",
          "bed3-rose-inherited",
          "frontBed5-climber-unidentified"
        ],
        "title": "Make conservative cuts on unidentified shrubs",
        "timing": "Before choosing a hard spring prune.",
        "summary": "Identify the flowering wood before treating the Butterfly Bush or inherited roses as a known pruning group.",
        "why": "Give this planting the seasonal attention it needs without disturbing healthy neighbouring plants.",
        "steps": [
          "Remove only clearly dead, damaged or rubbing wood.",
          "Photograph the full plant and later flowers.",
          "Record whether it flowers once or repeatedly before selecting a stronger pruning method."
        ],
        "doneWhen": "The named work is complete and healthy growth remains undamaged.",
        "leaveAlone": "Do not hard-prune the unidentified Buddleja as if it were confirmed B. davidii.",
        "sources": [
          "shrubs",
          "plant-bed2-butterfly-bush",
          "plant-bed2-rose-inherited",
          "plant-bed3-rose-inherited",
          "plant-frontBed5-climber-unidentified"
        ],
        "guide": "prune",
        "plantNotes": {
          "bed2-butterfly-bush": "Species is unresolved. Do not assume it is davidii: remove only damaged or obstructing wood until the flowering habit establishes the right pruning group.",
          "bed2-rose-inherited": "Remove dead, diseased or rubbing wood first. Record the rose’s flowering and cane habit before deciding how far to shorten healthy growth.",
          "bed3-rose-inherited": "Remove dead, diseased or rubbing wood first. Record the rose’s flowering and cane habit before deciding how far to shorten healthy growth.",
          "frontBed5-climber-unidentified": "Remove dead, diseased or rubbing wood first. Record the rose’s flowering and cane habit before deciding how far to shorten healthy growth."
        }
      },
      {
        "id": "mar-abelia-thin",
        "priority": "month",
        "category": "prune",
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "bed2",
          "bed4"
        ],
        "plantIds": [
          "bed1-abelia-kaleidoscope",
          "bed2-abelia-raspberry-profusion",
          "bed4-abelia-kaleidoscope",
          "bed4-abelia-radiance"
        ],
        "title": "Thin Abelias only where needed",
        "timing": "As spring growth reveals winter damage.",
        "summary": "Remove dead tips, green reversions on variegated forms and occasional congested old stems.",
        "why": "Give this planting the seasonal attention it needs without disturbing healthy neighbouring plants.",
        "steps": [
          "Follow each unwanted shoot to its origin.",
          "Cut only dead or congested growth, keeping an open natural outline.",
          "Retain healthy young shoots for the late flowers."
        ],
        "doneWhen": "The named work is complete and healthy growth remains undamaged.",
        "diagram": "renewal",
        "sources": [
          "shrubs",
          "plant-bed1-abelia-kaleidoscope",
          "plant-bed2-abelia-raspberry-profusion",
          "plant-bed4-abelia-kaleidoscope",
          "plant-bed4-abelia-radiance"
        ],
        "guide": "prune",
        "plantNotes": {
          "bed1-abelia-kaleidoscope": "Thin a congested old stem only if needed and remove solid-green reversions at their origin. Keep healthy young foliage and avoid repeated summer shearing.",
          "bed2-abelia-raspberry-profusion": "Allow this replacement shrub to establish. Remove dead tips or an actual obstruction in spring; do not reshape a healthy young plant simply to match its neighbours.",
          "bed4-abelia-kaleidoscope": "Thin a congested old stem only if needed and remove solid-green reversions at their origin. Keep healthy young foliage and avoid repeated summer shearing.",
          "bed4-abelia-radiance": "Thin a congested old stem only if needed and remove solid-green reversions at their origin. Keep healthy young foliage and avoid repeated summer shearing."
        }
      },
      {
        "id": "mar-hydrangea-mophead",
        "priority": "month",
        "category": "prune",
        "scope": "plant",
        "zoneKeys": [
          "frontBed1"
        ],
        "plantIds": [
          "frontBed1-hydrangea"
        ],
        "title": "Tidy the Front Bed 1 mophead Hydrangea",
        "timing": "Late March or April as healthy buds show; delay during hard frost.",
        "summary": "Remove old flowerheads just above strong buds, preserving the stems that can flower.",
        "why": "Give this planting the seasonal attention it needs without disturbing healthy neighbouring plants.",
        "steps": [
          "Find the uppermost strong healthy pair of buds below each old head.",
          "Cut just above that pair.",
          "Remove clearly dead wood; leave healthy unflowered stems."
        ],
        "doneWhen": "The named work is complete and healthy growth remains undamaged.",
        "diagram": "bud",
        "leaveAlone": "Do not use Bloody Marie’s panicle-hydrangea hard prune here, even with the assumed repeat-flowering identity.",
        "sources": [
          "hydrangea",
          "plant-frontBed1-hydrangea"
        ],
        "guide": "prune",
        "plantNotes": {}
      },
      {
        "id": "mar-pots-shrub-refresh",
        "priority": "month",
        "category": "refresh",
        "scope": "zone",
        "zoneKeys": [
          "lobeliapot",
          "bed23wallpot",
          "viburnumpot",
          "cercispot"
        ],
        "plantIds": [
          "lobeliapot-skimmia-cleopatra",
          "lobeliapot-skimmia-antarctica",
          "bed23wallpot-viburnum-lisarose",
          "viburnumpot-viburnum-tinus-spirit",
          "cercispot-cercis-carolina-sweetheart"
        ],
        "title": "Check perennial pots for root room",
        "timing": "As spring growth starts; repot only if roots have filled the container.",
        "summary": "Retain the shrubs and refresh loose surface compost or move up one pot size when genuinely crowded.",
        "why": "Give this planting the seasonal attention it needs without disturbing healthy neighbouring plants.",
        "steps": [
          "Check drainage and root congestion before deciding to repot.",
          "Replace loose surface compost without tearing roots or burying stems.",
          "Water to settle disturbed compost; allow excess to escape."
        ],
        "doneWhen": "The named work is complete and healthy growth remains undamaged.",
        "guide": "refresh",
        "sources": [
          "month-march",
          "plant-lobeliapot-skimmia-cleopatra",
          "plant-lobeliapot-skimmia-antarctica",
          "plant-bed23wallpot-viburnum-lisarose",
          "plant-viburnumpot-viburnum-tinus-spirit",
          "plant-cercispot-cercis-carolina-sweetheart"
        ],
        "plantNotes": {
          "lobeliapot-skimmia-cleopatra": "Keep both Skimmias; refresh loose surface compost without burying stem bases. These shrubs do not require ericaceous compost; check root moisture and drainage before treating yellow leaves.",
          "lobeliapot-skimmia-antarctica": "Keep both Skimmias; refresh loose surface compost without burying stem bases. These shrubs do not require ericaceous compost; check root moisture and drainage before treating yellow leaves.",
          "bed23wallpot-viburnum-lisarose": "Use a drained, stable loam-based container mix when extra root room is needed. Keep the Viburnum planted at the same depth and avoid disturbing live roots for a routine top-dress.",
          "viburnumpot-viburnum-tinus-spirit": "Use a drained, stable loam-based container mix when extra root room is needed. Keep the Viburnum planted at the same depth and avoid disturbing live roots for a routine top-dress.",
          "cercispot-cercis-carolina-sweetheart": "Keep the young tree stable and its root collar visible. Top-dress gently; repot only if roots have filled the container, not just because it is spring."
        }
      },
      {
        "id": "mar-winter-viola-round",
        "priority": "ongoing",
        "category": "refresh",
        "scope": "zone",
        "zoneKeys": [
          "stairpots",
          "staircans",
          "bed5",
          "lobeliapot",
          "frontBed5"
        ],
        "plantIds": [
          "stairpots-violas-pansies-group",
          "staircans-violas-pansies-group",
          "bed5-big-pot-violas-pansies",
          "lobeliapot-viola-rocky-purple-picotee",
          "frontBed5-viola-rocky-purple-picotee"
        ],
        "title": "Keep the winter Violas and Pansies flowering",
        "timing": "When blooms fade and after heavy rain; skip frozen plants.",
        "summary": "Remove spent flower stems and wet debris, retaining healthy plants for continued colour.",
        "why": "Give this planting the seasonal attention it needs without disturbing healthy neighbouring plants.",
        "steps": [
          "Pinch each finished flower stalk near its base, including the seed capsule.",
          "Clear wet leaves from crowns and check that cans and pots drain.",
          "Replace only failed plants; settle any replacements with water when the compost is unfrozen."
        ],
        "doneWhen": "The named work is complete and healthy growth remains undamaged.",
        "sources": [
          "deadhead",
          "fleece",
          "plant-stairpots-violas-pansies-group",
          "plant-staircans-violas-pansies-group",
          "plant-bed5-big-pot-violas-pansies",
          "plant-lobeliapot-viola-rocky-purple-picotee",
          "plant-frontBed5-viola-rocky-purple-picotee"
        ],
        "guide": "refresh",
        "plantNotes": {
          "stairpots-violas-pansies-group": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed.",
          "staircans-violas-pansies-group": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed.",
          "bed5-big-pot-violas-pansies": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed.",
          "lobeliapot-viola-rocky-purple-picotee": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed.",
          "frontBed5-viola-rocky-purple-picotee": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed."
        }
      },
      {
        "id": "mar-prune-petite-star-2026",
        "scope": "plant",
        "zoneKeys": [
          "frontBed4"
        ],
        "plantIds": [
          "frontBed4-hydrangea-petite-star"
        ],
        "priority": "month",
        "category": "prune",
        "title": "Prune Petite Star as a panicle hydrangea",
        "timing": "Late winter or early spring before strong shoot growth.",
        "summary": "Shorten last year’s shoots to healthy buds, keeping the young shrub’s low framework.",
        "why": "Hydrangea paniculata flowers on new growth; its pruning differs from mophead hydrangeas.",
        "doneWhen": "Dead wood is removed and healthy buds remain on a sound compact framework.",
        "steps": [
          "Inspect the young framework and locate healthy buds.",
          "Remove dead or damaged wood.",
          "Shorten last year’s shoots above sound buds without stripping the young plant."
        ],
        "guide": "prune",
        "sources": [
          "oct-petite-star",
          "oct-panicle-pruning"
        ],
        "plantNotes": {
          "frontBed4-hydrangea-petite-star": "Keep a compact framework in Polar Passion’s former Front Bed 4 position; use panicle-hydrangea timing."
        }
      }
    ],
    "highlights": [
      {
        "scope": "zone",
        "zoneKeys": [
          "pear"
        ],
        "plantIds": [
          "stone-pear-tree"
        ],
        "id": "mar-pear-blossom",
        "title": "Pear blossom at the upper terrace",
        "note": "White blossom begins to soften the bare framework near the gate."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed3"
        ],
        "plantIds": [
          "bed2-weeping-cherry"
        ],
        "id": "mar-bed2-cherry",
        "title": "The Bed 3 weeping cherry starts its show",
        "note": "Pink buds and blossom arrive before the canopy fills with leaves."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1"
        ],
        "plantIds": [
          "bed1-little-heath"
        ],
        "id": "mar-bed1-little-heath",
        "title": "Little Heath brightens Bed 1",
        "note": "Red young shoots and white spring flowers lift the evergreen edge."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "frontBed5"
        ],
        "plantIds": [],
        "id": "mar-front5-spring",
        "title": "Fresh colour wakes Front Bed 5",
        "note": "Pieris, heathers and young evergreen growth begin the front boundary’s spring change."
      }
    ],
    "indoorJobs": [
      {
        "scope": "plant",
        "zoneKeys": [
          "houseHallKentia"
        ],
        "plantIds": [
          "house-hallway-kentia-palm"
        ],
        "steps": [
          "Look for roots densely circling or emerging from drainage holes.",
          "Check that the palm remains stable in its pot.",
          "Repot only one size larger if it is clearly root-bound."
        ],
        "id": "mar-indoor-kentia-spring-check",
        "priority": "month",
        "category": "check",
        "title": "Give the Kentia its spring root check",
        "timing": "As brighter days restart growth.",
        "summary": "Check whether roots are genuinely crowded and refresh only the loose surface compost if repotting is not needed.",
        "why": "Kentias prefer not to be disturbed unnecessarily, so evidence should decide whether a larger pot is required.",
        "doneWhen": "The palm is stable, drainage is clear and any repotting decision is evidence-based.",
        "caution": "Do not break up the root ball or move into an oversized container.",
        "guide": "check",
        "sources": [
          "month-march",
          "plant-house-hallway-kentia-palm"
        ],
        "plantNotes": {}
      },
      {
        "id": "mar-birthday-houseplants-moisture-2026",
        "scope": "zone",
        "zoneKeys": [
          "houseSittingRhipsalis",
          "houseSittingDracaena",
          "houseLandingCrassula",
          "houseKitchenPhilodendron",
          "houseLandingZamioculcas"
        ],
        "plantIds": [
          "house-sitting-rhipsalis",
          "house-sitting-dracaena-bicolour",
          "house-landing-crassula-hottentot",
          "house-kitchen-philodendron",
          "house-landing-zamioculcas"
        ],
        "priority": "ongoing",
        "category": "check",
        "title": "Check the five birthday houseplants individually",
        "timing": "When inspecting pots; reduce watering as light and growth decline.",
        "summary": "Feel each root ball before deciding whether to water; drain every outer pot after a drink.",
        "why": "The hanging cactus and young Philodendron dry differently from the water-storing Crassula and Zamioculcas.",
        "doneWhen": "All five root balls have been checked and any surplus water emptied.",
        "steps": [
          "Feel below the surface and lift each accessible inner pot.",
          "Water only the specimens whose compost has reached their stated drying point.",
          "Let runoff finish and return each pot to its marked position."
        ],
        "guide": "check",
        "sources": [
          "oct-house-rhipsalis",
          "oct-house-dracaena",
          "oct-house-crassula",
          "oct-house-philodendron",
          "oct-house-zamioculcas"
        ],
        "plantNotes": {
          "house-sitting-rhipsalis": "Let the surface begin to dry, then water and drain; avoid prolonged drought.",
          "house-sitting-dracaena-bicolour": "Allow the upper compost to dry before soaking and draining; use rainwater where possible.",
          "house-landing-crassula-hottentot": "Let compost dry between soakings; water sparingly through winter.",
          "house-kitchen-philodendron": "Water once the upper compost begins to dry and let excess drain completely.",
          "house-landing-zamioculcas": "Allow the whole root ball to dry before watering; reduce checks into winter."
        }
      }
    ]
  },
  "April": {
    "theme": "Support fast growth, tidy winter damage and stay ready for late frost.",
    "jobs": [
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "bed2",
          "frontBed2",
          "frontBed5"
        ],
        "plantIds": [
          "bed1-japanese-aralia",
          "bed2-silverbush",
          "frontBed2-coprosma-inferno",
          "frontBed2-coprosma-pina-colada",
          "frontBed2-coprosma-city-knights",
          "frontBed4-flaming-silver",
          "frontBed5-pittosporum-tom-thumb",
          "frontBed5-hebe-rhubarb-and-custard"
        ],
        "steps": [
          "Scratch-test doubtful woody stems lightly if needed.",
          "Cut just above a healthy outward bud or side shoot.",
          "Disinfect tools after any suspicious dieback."
        ],
        "id": "apr-remove-winter-damage",
        "priority": "first",
        "category": "prune",
        "title": "Remove winter damage only after new growth confirms what is alive",
        "timing": "Wait for clear live buds and a mild forecast.",
        "summary": "Trace damaged tips back to healthy growth and make small, clean cuts.",
        "why": "Waiting prevents healthy but slow stems being mistaken for dead wood.",
        "doneWhen": "Dead tips are removed and all retained stems show live buds or healthy tissue.",
        "caution": "Do not hard-prune healthy silver, variegated or evergreen growth simply because it looks weather-marked.",
        "guide": "prune",
        "sources": [
          "shrubs",
          "plant-bed1-japanese-aralia",
          "plant-bed2-silverbush",
          "plant-frontBed2-coprosma-inferno",
          "plant-frontBed2-coprosma-pina-colada",
          "plant-frontBed2-coprosma-city-knights",
          "plant-frontBed4-flaming-silver",
          "plant-frontBed5-pittosporum-tom-thumb",
          "plant-frontBed5-hebe-rhubarb-and-custard"
        ],
        "plantNotes": {
          "bed1-japanese-aralia": "Wait for fresh Fatsia growth to reveal dead portions. Remove only damaged leaves or confirmed dead stem tips; keep the sound evergreen framework.",
          "bed2-silverbush": "Wait for living shoots to show and trim only dead tips above them. Avoid a hard cut into old bare wood; flowering may not yet be finished.",
          "frontBed2-coprosma-inferno": "Wait until frost risk eases and fresh growth identifies live wood. Trim dead tips back to living shoots; avoid a hard spring reduction of a stressed shrub.",
          "frontBed2-coprosma-pina-colada": "Wait until frost risk eases and fresh growth identifies live wood. Trim dead tips back to living shoots; avoid a hard spring reduction of a stressed shrub.",
          "frontBed2-coprosma-city-knights": "Wait until frost risk eases and fresh growth identifies live wood. Trim dead tips back to living shoots; avoid a hard spring reduction of a stressed shrub.",
          "frontBed4-flaming-silver": "This is the Pieris now in Front Bed 5. Remove confirmed dead tips only; retain live shoots and spring flower trusses, with any shaping after flowering.",
          "frontBed5-pittosporum-tom-thumb": "Keep the natural compact mound. Remove winter-damaged tips only once live buds show; do not shear heavily during late frost risk.",
          "frontBed5-hebe-rhubarb-and-custard": "After flowering, shorten only wayward leafy tips. Avoid cuts into bare old wood."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "bed2",
          "frontBed4",
          "frontBed5",
          "bed4"
        ],
        "plantIds": [
          "bed1-japanese-maple",
          "bed1-dahlia",
          "bed1-dahlia-yellow",
          "bed2-peony",
          "frontBed5-pieris-polar-passion",
          "frontBed5-salvia-salgoon-lake-blueberry"
        ],
        "steps": [
          "Place fleece loosely so it does not crush shoots.",
          "Secure the edges against wind.",
          "Remove or open the cover after the frost has lifted."
        ],
        "id": "apr-protect-new-growth",
        "priority": "first",
        "category": "protect",
        "title": "Protect vulnerable new shoots from late frost",
        "timing": "Whenever a clear, cold night is forecast after growth has started.",
        "summary": "Cover tender shoots overnight and remove protection the next morning.",
        "why": "Soft new growth can be damaged even when established roots remain hardy.",
        "doneWhen": "Tender growth is protected for the cold night and uncovered again by day.",
        "guide": "protect",
        "sources": [
          "fleece",
          "plant-bed1-japanese-maple",
          "plant-bed1-dahlia",
          "plant-bed1-dahlia-yellow",
          "plant-bed2-peony",
          "plant-frontBed5-pieris-polar-passion",
          "plant-frontBed5-salvia-salgoon-lake-blueberry"
        ],
        "plantNotes": {
          "bed1-japanese-maple": "Soft new Acer leaves are more vulnerable than dormant wood. Drape fleece on supports during a late frost and uncover after temperatures recover; do not crush shoots.",
          "bed1-dahlia": "Tender Dahlia: protect emerged shoots from spring frost. After autumn dieback, an outdoor tuber needs well-drained ground and roughly 15cm mulch, with losses still possible; lifted tubers require frost-free storage.",
          "bed1-dahlia-yellow": "Tender Dahlia: protect emerged shoots from spring frost. After autumn dieback, an outdoor tuber needs well-drained ground and roughly 15cm mulch, with losses still possible; lifted tubers require frost-free storage.",
          "bed2-peony": "Protect emerged buds on a late-frost night with supported fleece. Keep mulch away from crown buds and remove the cover once the frost lifts.",
          "frontBed5-pieris-polar-passion": "This Pieris is now in Back Bed 4. Shield tender coloured spring shoots on cold nights, uncovering afterwards; do not prune them pre-emptively.",
          "frontBed5-salvia-salgoon-lake-blueberry": "Lake Blueberry is H3. Keep some sound top growth and a drained crown. Outdoor protection is uncertain in severe cold; a cutting also needs an arranged frost-free home."
        },
        "caution": "Check the plant-specific limits: fleece reduces exposure but does not make an outdoor position frost-free."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed2",
          "bed5",
          "patio",
          "frontBed3",
          "frontBed4",
          "frontBed5"
        ],
        "plantIds": [
          "bed2-hydrangea-petiolaris",
          "bed5-wisteria",
          "bed5-rose",
          "stone-honeysuckle",
          "stone-clematis",
          "frontBed3-climbing-rose-white-pink",
          "frontBed4-the-generous-gardener",
          "frontBed5-clematis",
          "frontBed5-bluebell-creeper-sollya"
        ],
        "steps": [
          "Remove failed ties and untangle only what moves easily.",
          "Fan shoots into open gaps without sharp bends.",
          "Use soft figure-eight ties with room for thickening."
        ],
        "id": "apr-tie-climbers",
        "priority": "month",
        "category": "prune",
        "title": "Tie in climbers before stems harden",
        "timing": "On a calm day while new shoots are still flexible.",
        "summary": "Guide useful stems across their supports and replace tight or broken ties.",
        "why": "Early training prevents wind damage and spreads flowering growth across the available wall space.",
        "doneWhen": "New growth is supported, evenly spread and not constricted.",
        "guide": "support",
        "sources": [
          "month-april",
          "plant-bed2-hydrangea-petiolaris",
          "plant-bed5-wisteria",
          "plant-bed5-rose",
          "plant-stone-honeysuckle",
          "plant-stone-clematis",
          "plant-frontBed3-climbing-rose-white-pink",
          "plant-frontBed4-the-generous-gardener",
          "plant-frontBed5-clematis",
          "plant-frontBed5-bluebell-creeper-sollya"
        ],
        "plantNotes": {
          "bed2-hydrangea-petiolaris": "Retain attached main stems and guide new shoots into available wall space. Do not pull established aerial roots off the wall just to make a neater fan.",
          "bed5-wisteria": "Tie the permanent main branches securely and guide extension growth where it is wanted. Keep stems away from gutters; side-shoot shortening has its own winter and summer jobs.",
          "bed5-rose": "Fan flexible long rose canes across sound supports with soft loose ties. Keep new canes for future flowers; do not force a rigid stem horizontal.",
          "stone-honeysuckle": "Guide a flexible new shoot onto its own support before it winds around neighbours. Leave flowering or berrying growth unless it blocks access.",
          "stone-clematis": "Trace stems back to the correct plant and guide them onto fine supports. Keep ties loose; this training round is not permission to apply one pruning group to both clematis.",
          "frontBed3-climbing-rose-white-pink": "Fan flexible long rose canes across sound supports with soft loose ties. Keep new canes for future flowers; do not force a rigid stem horizontal.",
          "frontBed4-the-generous-gardener": "Fan flexible long rose canes across sound supports with soft loose ties. Keep new canes for future flowers; do not force a rigid stem horizontal.",
          "frontBed5-clematis": "Trace stems back to the correct plant and guide them onto fine supports. Keep ties loose; this training round is not permission to apply one pruning group to both clematis.",
          "frontBed5-bluebell-creeper-sollya": "Guide a flexible new shoot onto its own support before it winds around neighbours. Leave flowering or berrying growth unless it blocks access."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "bed2"
        ],
        "plantIds": [
          "bed1-dahlia",
          "bed1-dahlia-yellow",
          "bed2-peony"
        ],
        "steps": [
          "Guide peony shoots through rather than forcing them.",
          "Place dahlia stakes outside the tuber crown.",
          "Add loose ties only when stems need them."
        ],
        "id": "apr-peony-and-dahlia-support",
        "priority": "month",
        "category": "prune",
        "title": "Check peony support and prepare dahlia supports",
        "timing": "Before stems become tall or top-heavy.",
        "summary": "Raise the peony support with growth and place discreet dahlia stakes without damaging tubers.",
        "why": "Support fitted early is safer for the crown and disappears into the foliage.",
        "doneWhen": "Supports are stable, unobtrusive and clear of crowns and tubers.",
        "guide": "support",
        "sources": [
          "month-april",
          "plant-bed1-dahlia",
          "plant-bed1-dahlia-yellow",
          "plant-bed2-peony"
        ],
        "plantNotes": {
          "bed1-dahlia": "Place the stake outside the tuber crown and add soft loose ties as stems grow. Do not drive the stake through the tubers.",
          "bed1-dahlia-yellow": "Place the stake outside the tuber crown and add soft loose ties as stems grow. Do not drive the stake through the tubers.",
          "bed2-peony": "Guide shoots through the support while flexible and raise it with growth. Avoid pinching stems under the ring or driving feet through the crown."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "stone",
          "frontStone",
          "bed1",
          "bed2",
          "bed3",
          "bed4",
          "bed5",
          "frontBed1",
          "frontBed2",
          "frontBed3",
          "frontBed4",
          "frontBed5"
        ],
        "plantIds": [],
        "steps": [
          "Remove weeds from the root, especially along edges.",
          "Pull organic mulch away from crowns and trunks.",
          "Hand-clear gravel around Stone Bed and trough rosettes rather than mulching them."
        ],
        "id": "apr-spring-ground-round",
        "priority": "month",
        "category": "check",
        "title": "Make the spring ground round",
        "timing": "Before foliage closes over the soil surface.",
        "summary": "Remove weeds, uncover crowns and top up thin mulch without burying gravel or alpine plants.",
        "why": "A final early weed pass prevents difficult hand-work among mature stems later.",
        "doneWhen": "Beds are weed-free, crowns are open and each surface has the right finish for its planting.",
        "guide": "check",
        "sources": [
          "month-april"
        ],
        "plantNotes": {}
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "frontBed4",
          "frontBed5",
          "bed4"
        ],
        "plantIds": [
          "bed1-little-heath",
          "bed1-pieris-forest-flame",
          "frontBed5-pieris-polar-passion",
          "frontBed4-flaming-silver",
          "frontBed5-heather-bells-extra-special"
        ],
        "steps": [
          "Check that the whole flower cluster is finished.",
          "Support the stem with one hand.",
          "Remove only the spent head or soft flower tip."
        ],
        "id": "apr-deadhead-spring-evergreens-reviewed",
        "priority": "ongoing",
        "category": "deadhead",
        "title": "Remove finished spring flowers carefully",
        "timing": "Only as each display finishes.",
        "summary": "Snap or snip spent flowers without removing the new leafy growth beneath them.",
        "why": "Careful tidying keeps compact evergreens neat while preserving next season’s framework.",
        "doneWhen": "Finished flowers are gone and fresh leaves and buds remain intact.",
        "guide": "deadhead",
        "sources": [
          "deadhead",
          "plant-bed1-little-heath",
          "plant-bed1-pieris-forest-flame",
          "plant-frontBed5-pieris-polar-passion",
          "plant-frontBed4-flaming-silver",
          "plant-frontBed5-heather-bells-extra-special"
        ],
        "plantNotes": {
          "bed1-little-heath": "Snip only the spent flower truss, protecting the young coloured shoots beneath it. Heavy shaping is unnecessary.",
          "bed1-pieris-forest-flame": "Snip only the spent flower truss, protecting the young coloured shoots beneath it. Heavy shaping is unnecessary.",
          "frontBed5-pieris-polar-passion": "Snip only the spent flower truss, protecting the young coloured shoots beneath it. Heavy shaping is unnecessary.",
          "frontBed4-flaming-silver": "Snip only the spent flower truss, protecting the young coloured shoots beneath it. Heavy shaping is unnecessary.",
          "frontBed5-heather-bells-extra-special": "Once the winter flowers fade, clip the flowered tips within living foliage; stop short of bare brown wood."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "frontStone"
        ],
        "plantIds": [
          "bed1-hosta",
          "bed1-hosta-gold",
          "bed1-box-hedging",
          "frontStone-hosta"
        ],
        "steps": [
          "Check hostas after mild nights.",
          "Look inside box foliage for webbing and feeding.",
          "Observe planted hedging for bird traffic before any work."
        ],
        "id": "apr-pest-round",
        "priority": "ongoing",
        "category": "check",
        "title": "Continue slug, box-caterpillar and nest checks",
        "timing": "Weekly through the main spring growth surge.",
        "summary": "Inspect new hosta leaves, open box foliage and confirm planted hedging is safe before clipping.",
        "why": "Fast spring growth can hide early damage and nesting activity.",
        "doneWhen": "Fresh damage has a response and no work threatens an active nest.",
        "guide": "check",
        "sources": [
          "month-april",
          "plant-bed1-hosta",
          "plant-bed1-hosta-gold",
          "plant-bed1-box-hedging",
          "plant-frontStone-hosta"
        ],
        "plantNotes": {
          "bed1-hosta": "Check the named plant for its actual pest: slugs on Hosta shoots; webbing and caterpillars inside Box. Inspect for nesting activity before cutting shrubs.",
          "bed1-hosta-gold": "Check the named plant for its actual pest: slugs on Hosta shoots; webbing and caterpillars inside Box. Inspect for nesting activity before cutting shrubs.",
          "bed1-box-hedging": "Check the named plant for its actual pest: slugs on Hosta shoots; webbing and caterpillars inside Box. Inspect for nesting activity before cutting shrubs.",
          "frontStone-hosta": "Check the named plant for its actual pest: slugs on Hosta shoots; webbing and caterpillars inside Box. Inspect for nesting activity before cutting shrubs."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed3"
        ],
        "plantIds": [
          "bed3-evergreen-candytuft",
          "bed3-variegated-periwinkle"
        ],
        "steps": [
          "Photograph position 6 flowers and whole habit.",
          "Photograph position 9 flowers, leaf pairs and runners.",
          "Keep both assumed suffixes unless the evidence is diagnostic."
        ],
        "id": "apr-bed3-assumed-identities",
        "priority": "month",
        "category": "check",
        "title": "Check Bed 3’s assumed spring identities",
        "timing": "When position 6 or 9 begins flowering.",
        "summary": "Photograph the Candytuft and Periwinkle flowers before refining either provisional name.",
        "why": "Flowers provide stronger evidence than the August foliage-only photographs used for the assumed records.",
        "doneWhen": "Spring evidence is saved without overstating either identity.",
        "guide": "check",
        "sources": [
          "month-april",
          "plant-bed3-evergreen-candytuft",
          "plant-bed3-variegated-periwinkle"
        ],
        "plantNotes": {
          "bed3-evergreen-candytuft": "Photograph flowers, leaves and whole habit before changing this assumed identity. Retain the qualification until the evidence is diagnostic.",
          "bed3-variegated-periwinkle": "Photograph flowers, leaves and whole habit before changing this assumed identity. Retain the qualification until the evidence is diagnostic."
        }
      },
      {
        "id": "apr-fuchsia-pots-buds",
        "priority": "month",
        "category": "prune",
        "scope": "zone",
        "zoneKeys": [
          "bigpot1",
          "bigpot2"
        ],
        "plantIds": [
          "bigpot1-fuchsia",
          "bigpot2-fuchsia"
        ],
        "title": "Cut Fuchsia only to living spring growth",
        "timing": "After severe frost has passed; often April or May.",
        "summary": "Mrs Popple may regrow from its base. Look for live buds before judging the old stems.",
        "why": "Give this planting the seasonal attention it needs without disturbing healthy neighbouring plants.",
        "steps": [
          "Find buds along stems and at the crown.",
          "Remove dead sections above healthy growth with sharp secateurs.",
          "Keep sound framework and protect new shoots on cold nights."
        ],
        "doneWhen": "The named work is complete and healthy growth remains undamaged.",
        "diagram": "bud",
        "guide": "prune",
        "sources": [
          "shrubs",
          "plant-bigpot1-fuchsia",
          "plant-bigpot2-fuchsia"
        ],
        "plantNotes": {
          "bigpot1-fuchsia": "Look for living Mrs Popple buds on the stems and at the base after severe frost has passed. Cut dead portions back to those buds, preserving sound framework.",
          "bigpot2-fuchsia": "Look for living Mrs Popple buds on the stems and at the base after severe frost has passed. Cut dead portions back to those buds, preserving sound framework."
        }
      }
    ],
    "highlights": [
      {
        "scope": "zone",
        "zoneKeys": [
          "bed3"
        ],
        "plantIds": [
          "bed2-weeping-cherry"
        ],
        "id": "apr-bed2-blossom",
        "title": "Bed 3’s weeping cherry in full blossom",
        "note": "The pink cascade is the month’s clearest signal that spring has arrived."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed4",
          "pear",
          "frontApple",
          "frontGateTree"
        ],
        "plantIds": [],
        "id": "apr-fruit-blossom",
        "title": "Fruit-tree blossom across both gardens",
        "note": "Apple, pear, damson and crab-apple flowers connect the front and back garden."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed3"
        ],
        "plantIds": [],
        "id": "apr-bed3-colour",
        "title": "Bed 3’s first strong colour",
        "note": "The Spiraeas’ orange-gold new growth and the assumed Candytuft’s white flowers brighten the wall gap."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1"
        ],
        "plantIds": [],
        "id": "apr-bed1-foliage",
        "title": "Bed 1 unfurls",
        "note": "Dark maple leaves, hosta shoots and dahlia growth rebuild the bed’s layered canopy."
      }
    ],
    "indoorJobs": [
      {
        "id": "apr-birthday-houseplants-moisture-2026",
        "scope": "zone",
        "zoneKeys": [
          "houseSittingRhipsalis",
          "houseSittingDracaena",
          "houseLandingCrassula",
          "houseKitchenPhilodendron",
          "houseLandingZamioculcas"
        ],
        "plantIds": [
          "house-sitting-rhipsalis",
          "house-sitting-dracaena-bicolour",
          "house-landing-crassula-hottentot",
          "house-kitchen-philodendron",
          "house-landing-zamioculcas"
        ],
        "priority": "ongoing",
        "category": "check",
        "title": "Check the five birthday houseplants individually",
        "timing": "When inspecting pots; reduce watering as light and growth decline.",
        "summary": "Feel each root ball before deciding whether to water; drain every outer pot after a drink.",
        "why": "The hanging cactus and young Philodendron dry differently from the water-storing Crassula and Zamioculcas.",
        "doneWhen": "All five root balls have been checked and any surplus water emptied.",
        "steps": [
          "Feel below the surface and lift each accessible inner pot.",
          "Water only the specimens whose compost has reached their stated drying point.",
          "Let runoff finish and return each pot to its marked position."
        ],
        "guide": "check",
        "sources": [
          "oct-house-rhipsalis",
          "oct-house-dracaena",
          "oct-house-crassula",
          "oct-house-philodendron",
          "oct-house-zamioculcas"
        ],
        "plantNotes": {
          "house-sitting-rhipsalis": "Let the surface begin to dry, then water and drain; avoid prolonged drought.",
          "house-sitting-dracaena-bicolour": "Allow the upper compost to dry before soaking and draining; use rainwater where possible.",
          "house-landing-crassula-hottentot": "Let compost dry between soakings; water sparingly through winter.",
          "house-kitchen-philodendron": "Water once the upper compost begins to dry and let excess drain completely.",
          "house-landing-zamioculcas": "Allow the whole root ball to dry before watering; reduce checks into winter."
        }
      }
    ]
  },
  "May": {
    "theme": "Guide climbers, support heavy flowers and assemble the summer containers after frost.",
    "jobs": [
      {
        "scope": "plant",
        "zoneKeys": [
          "patio"
        ],
        "plantIds": [
          "stone-clematis"
        ],
        "steps": [
          "Remove dead or damaged stems first.",
          "Shorten growth that blocks access, gutters or neighbouring plants.",
          "Tie retained young stems across open support."
        ],
        "id": "may-prune-clematis-montana",
        "priority": "first",
        "category": "prune",
        "title": "Prune Clematis montana after flowering",
        "timing": "As soon as the main flower display finishes.",
        "summary": "Shorten growth that is outgrowing the wall and tie the new framework into useful space.",
        "why": "Pruning immediately after flowering gives the climber a full season to make next year’s flowering wood.",
        "doneWhen": "The climber is contained, evenly spread and still has a strong leafy framework.",
        "caution": "Avoid a severe cut unless renovation is genuinely needed.",
        "guide": "prune",
        "sources": [
          "clematis",
          "shrubs",
          "plant-stone-clematis"
        ],
        "plantNotes": {},
        "diagram": "clematis-1"
      },
      {
        "scope": "plant",
        "zoneKeys": [
          "bed1"
        ],
        "plantIds": [
          "bed1-rhododendron"
        ],
        "steps": [
          "Cup the faded truss in one hand.",
          "Find the joint directly above the new buds.",
          "Snap the truss sideways without pulling on the buds."
        ],
        "id": "may-deadhead-rhododendron",
        "priority": "month",
        "category": "deadhead",
        "title": "Deadhead the Bed 1 rhododendron",
        "timing": "When the flower trusses fade and before new shoots lengthen around them.",
        "summary": "Snap off spent trusses while protecting the soft growth buds immediately below.",
        "why": "Careful deadheading tidies the shrub without sacrificing next year’s structure.",
        "doneWhen": "All faded trusses are removed and every cluster of new shoots is intact.",
        "caution": "The new buds are brittle; stop if the joint does not release cleanly.",
        "guide": "deadhead",
        "sources": [
          "deadhead",
          "plant-bed1-rhododendron"
        ],
        "plantNotes": {}
      },
      {
        "scope": "plant",
        "zoneKeys": [
          "bed2"
        ],
        "plantIds": [
          "bed2-peony"
        ],
        "steps": [
          "Lift leaning stems gently rather than pulling them upright.",
          "Raise adjustable support rings beneath the buds.",
          "Add a soft outer tie only where necessary."
        ],
        "id": "may-support-peony",
        "priority": "month",
        "category": "prune",
        "title": "Raise and secure the peony support",
        "timing": "Before the buds become heavy and open.",
        "summary": "Guide stems through the support and give the outer flower stems room without crowding them.",
        "why": "Large blooms can bend or snap unsupported stems.",
        "doneWhen": "Every heavy bud is supported but the plant still looks natural.",
        "guide": "support",
        "sources": [
          "month-may",
          "plant-bed2-peony"
        ],
        "plantNotes": {
          "bed2-peony": "Guide shoots through the support while flexible and raise it with growth. Avoid pinching stems under the ring or driving feet through the crown."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1"
        ],
        "plantIds": [
          "bed1-dahlia",
          "bed1-dahlia-yellow"
        ],
        "steps": [
          "Choose a healthy shoot above at least three leaf pairs.",
          "Pinch or snip out only the soft tip.",
          "Leave weak or recently damaged shoots to build strength."
        ],
        "id": "may-pinching-dahlias",
        "priority": "month",
        "category": "prune",
        "title": "Pinch the Double Dreamy dahlias for bushier growth",
        "timing": "When each plant has several strong sets of leaves and is actively growing.",
        "summary": "Remove the soft central growing tip above a leaf pair.",
        "why": "Early pinching encourages more branching, a sturdier shape and more flowering stems.",
        "doneWhen": "The main tips are removed cleanly and healthy leaf pairs remain below each cut.",
        "guide": "prune",
        "sources": [
          "month-may",
          "plant-bed1-dahlia",
          "plant-bed1-dahlia-yellow"
        ],
        "plantNotes": {
          "bed1-dahlia": "Only pinch a young, unbranched shoot: remove its growing tip above a leaf pair once several pairs are present. Skip an already bushy plant or one in bud.",
          "bed1-dahlia-yellow": "Only pinch a young, unbranched shoot: remove its growing tip above a leaf pair once several pairs are present. Skip an already bushy plant or one in bud."
        },
        "diagram": "bud"
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "bigpot1"
        ],
        "plantIds": [
          "bigpot1-fuchsia",
          "bigpot1-verbena",
          "bigpot1-calibrachoa",
          "bigpot1-nepeta",
          "bigpot1-lobelia",
          "bigpot1-petunia"
        ],
        "steps": [
          "Identify the living Fuchsia and Nepeta crowns before clearing anything.",
          "Remove only failed bedding and refresh loose surface compost without pulling shared roots.",
          "Plant replacements at their original depth after frost risk has passed; water in and let excess drain."
        ],
        "id": "may-bigpot1-summer-reviewed",
        "priority": "month",
        "category": "refresh",
        "potKey": "bigpot1",
        "title": "Refresh gaps in Big Pot 1 for summer",
        "timing": "After frost risk has passed and all plants are hardened off.",
        "summary": "Keep the established Fuchsia and Nepeta; fill only gaps left by failed seasonal trailers after frost risk has passed.",
        "why": "Treating the mixed planting as one container keeps its different plants balanced rather than managed as six separate records.",
        "doneWhen": "Permanent plants are intact and any genuine gaps have healthy, watered-in replacements.",
        "guide": "refresh",
        "sources": [
          "month-may",
          "plant-bigpot1-fuchsia",
          "plant-bigpot1-verbena",
          "plant-bigpot1-calibrachoa",
          "plant-bigpot1-nepeta",
          "plant-bigpot1-lobelia",
          "plant-bigpot1-petunia"
        ],
        "plantNotes": {
          "bigpot1-fuchsia": "Retain Mrs Popple as the perennial centre. Keep its crown clear and protect the container roots in severe cold; do not empty the pot around its living root ball.",
          "bigpot1-verbena": "Retain a healthy trailer. Replace only a failed plant, after spring frost risk has passed for summer bedding; keeping tender plants through winter needs suitable shelter elsewhere.",
          "bigpot1-calibrachoa": "Retain a healthy trailer. Replace only a failed plant, after spring frost risk has passed for summer bedding; keeping tender plants through winter needs suitable shelter elsewhere.",
          "bigpot1-nepeta": "Keep the hardy catmint crown. Trim only tired growth and make room for it without pulling the Fuchsia’s shared roots.",
          "bigpot1-lobelia": "Retain a healthy trailer. Replace only a failed plant, after spring frost risk has passed for summer bedding; keeping tender plants through winter needs suitable shelter elsewhere.",
          "bigpot1-petunia": "Retain a healthy trailer. Replace only a failed plant, after spring frost risk has passed for summer bedding; keeping tender plants through winter needs suitable shelter elsewhere."
        }
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "bigpot2"
        ],
        "plantIds": [
          "bigpot2-lobelia",
          "bigpot2-verbena",
          "bigpot2-petunia",
          "bigpot2-nepeta",
          "bigpot2-fuchsia"
        ],
        "steps": [
          "Identify the living Fuchsia and Nepeta crowns before clearing anything.",
          "Remove only failed bedding and refresh loose surface compost without pulling shared roots.",
          "Plant replacements at their original depth after frost risk has passed; water in and let excess drain."
        ],
        "id": "may-bigpot2-summer-reviewed",
        "priority": "month",
        "category": "refresh",
        "potKey": "bigpot2",
        "title": "Refresh gaps in Big Pot 2 for summer",
        "timing": "After frost risk has passed and all plants are hardened off.",
        "summary": "Keep the established Fuchsia and Nepeta; fill only gaps left by failed seasonal trailers after frost risk has passed.",
        "why": "A pot-level check keeps the fuchsia, trailers and catmint in proportion from the start.",
        "doneWhen": "Permanent plants are intact and any genuine gaps have healthy, watered-in replacements.",
        "guide": "refresh",
        "sources": [
          "month-may",
          "plant-bigpot2-lobelia",
          "plant-bigpot2-verbena",
          "plant-bigpot2-petunia",
          "plant-bigpot2-nepeta",
          "plant-bigpot2-fuchsia"
        ],
        "plantNotes": {
          "bigpot2-lobelia": "Retain a healthy trailer. Replace only a failed plant, after spring frost risk has passed for summer bedding; keeping tender plants through winter needs suitable shelter elsewhere.",
          "bigpot2-verbena": "Retain a healthy trailer. Replace only a failed plant, after spring frost risk has passed for summer bedding; keeping tender plants through winter needs suitable shelter elsewhere.",
          "bigpot2-petunia": "Retain a healthy trailer. Replace only a failed plant, after spring frost risk has passed for summer bedding; keeping tender plants through winter needs suitable shelter elsewhere.",
          "bigpot2-nepeta": "Keep the hardy catmint crown. Trim only tired growth and make room for it without pulling the Fuchsia’s shared roots.",
          "bigpot2-fuchsia": "Retain Mrs Popple as the perennial centre. Keep its crown clear and protect the container roots in severe cold; do not empty the pot around its living root ball."
        }
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "littlepot1"
        ],
        "plantIds": [
          "littlepot1-hellebore-ice-n-roses-bennotta"
        ],
        "steps": [
          "Cut faded stems cleanly at their base.",
          "Remove only damaged or diseased foliage.",
          "Check that the drainage opening remains clear."
        ],
        "id": "may-littlepot1-hellebore",
        "priority": "month",
        "category": "deadhead",
        "potKey": "littlepot1",
        "title": "Tidy Little Pot 1’s Hellebore",
        "timing": "After the main flower display fades.",
        "summary": "Remove fading flower stems and any marked old leaves while keeping the crown clear.",
        "why": "A clean crown reduces the chance of leaf disease and lets the new season’s foliage take over.",
        "doneWhen": "The crown is open, firm and surrounded by clean compost.",
        "guide": "clear",
        "sources": [
          "deadhead",
          "plant-littlepot1-hellebore-ice-n-roses-bennotta"
        ],
        "plantNotes": {}
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "littlepot2"
        ],
        "plantIds": [
          "wallpot2-coreopsis-gold"
        ],
        "steps": [
          "Clear dead growth without damaging new shoots.",
          "Open the drainage holes and replace the upper compost.",
          "Firm the fresh compost gently without burying the crown."
        ],
        "id": "may-littlepot2-coreopsis",
        "priority": "month",
        "category": "refresh",
        "potKey": "littlepot2",
        "title": "Refresh Little Pot 2 around the Coreopsis",
        "timing": "As strong spring growth fills the crown.",
        "summary": "Top-dress the established Coreopsis, check drainage and give the flowering mound a clean start.",
        "why": "The perennial now occupies the pot alone and needs drainage-led care rather than a bedding-plant replant.",
        "doneWhen": "Fresh shoots are unobstructed and the pot drains freely.",
        "guide": "refresh",
        "sources": [
          "month-may",
          "plant-wallpot2-coreopsis-gold"
        ],
        "plantNotes": {}
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "baskets"
        ],
        "plantIds": [
          "baskets-calluna-trio-mix",
          "baskets-viola-rocky-purple-picotee",
          "baskets-hedera-yellow-ripple",
          "baskets-pansy-fire",
          "baskets-pansy-rose-surprise"
        ],
        "steps": [
          "Check both chains, brackets and liners for damage.",
          "Clear winter damage and refresh the compost surface without burying crowns.",
          "Match any replacement planting across both baskets."
        ],
        "id": "may-baskets-summer",
        "priority": "month",
        "category": "refresh",
        "potKey": "baskets",
        "title": "Refresh the paired hanging-basket collection",
        "timing": "After winter, once both baskets are secure and growing again.",
        "summary": "Treat red Basket 1 and green Basket 2 as matching planted containers, refreshing both together where needed.",
        "why": "Their shared planting works best when moisture, deadheading and replacement decisions stay in step.",
        "doneWhen": "Both baskets are secure, healthy and visually balanced.",
        "guide": "refresh",
        "sources": [
          "month-may",
          "plant-baskets-calluna-trio-mix",
          "plant-baskets-viola-rocky-purple-picotee",
          "plant-baskets-hedera-yellow-ripple",
          "plant-baskets-pansy-fire",
          "plant-baskets-pansy-rose-surprise"
        ],
        "plantNotes": {
          "baskets-calluna-trio-mix": "Keep healthy Calluna or move it carefully to a suitable acidic, drained planting pocket if the display is changed. Never discard it merely because the Pansies are tired.",
          "baskets-viola-rocky-purple-picotee": "Leave while flowering well. Replace exhausted plants individually when the cool-season display finishes; do not remove their healthy Ivy and Calluna companions.",
          "baskets-hedera-yellow-ripple": "Keep the Ivy and shorten only trails that overpower companions. Separate roots gently if it is deliberately being moved to another pot.",
          "baskets-pansy-fire": "Leave while flowering well. Replace exhausted plants individually when the cool-season display finishes; do not remove their healthy Ivy and Calluna companions.",
          "baskets-pansy-rose-surprise": "Leave while flowering well. Replace exhausted plants individually when the cool-season display finishes; do not remove their healthy Ivy and Calluna companions."
        }
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "frontpot"
        ],
        "plantIds": [
          "frontpot-gazania-sunny-side-up",
          "frontpot-gazania-orange-flame",
          "frontpot-calibrachoa",
          "frontpot-bacopa-white"
        ],
        "steps": [
          "Check which existing plants are alive before removing any root plugs.",
          "Refresh compost in actual gaps without disturbing retained roots.",
          "Plant replacement Gazania or trailers at the same depth, leaving a watering rim; water in and drain."
        ],
        "id": "may-frontpot-summer-reviewed",
        "priority": "month",
        "category": "refresh",
        "potKey": "frontpot",
        "title": "Refresh the Front Pot only where needed",
        "timing": "After frost risk has passed.",
        "summary": "Keep healthy Gazania and trailers. Replace only winter losses after frost risk has passed.",
        "why": "A single pot-level plan keeps the central daisies visible while the trailers soften the rim.",
        "doneWhen": "Healthy plants remain and any winter gaps are filled after frost risk has passed.",
        "guide": "refresh",
        "sources": [
          "month-may",
          "plant-frontpot-gazania-sunny-side-up",
          "plant-frontpot-gazania-orange-flame",
          "plant-frontpot-calibrachoa",
          "plant-frontpot-bacopa-white"
        ],
        "plantNotes": {
          "frontpot-gazania-sunny-side-up": "Keep healthy Gazania rosettes. If replacing losses, plant only after frost risk has passed and keep the rosette at its original depth in freely draining compost.",
          "frontpot-gazania-orange-flame": "Keep healthy Gazania rosettes. If replacing losses, plant only after frost risk has passed and keep the rosette at its original depth in freely draining compost.",
          "frontpot-calibrachoa": "Retain healthy trailing growth; fill only genuine gaps with summer plants after frost risk passes. Leave space below the pot rim for watering.",
          "frontpot-bacopa-white": "Retain healthy trailing growth; fill only genuine gaps with summer plants after frost risk passes. Leave space below the pot rim for watering."
        }
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "wallpot1"
        ],
        "plantIds": [
          "wallpot1-phormium-flamingo"
        ],
        "steps": [
          "Cut only damaged leaves at the base.",
          "Clear debris from the crown.",
          "Check the fixing and drainage opening."
        ],
        "id": "may-wallpot1-phormium",
        "priority": "month",
        "category": "refresh",
        "potKey": "wallpot1",
        "title": "Refresh the Phormium wall pot",
        "timing": "In spring, once severe frost risk has eased.",
        "summary": "Clear dead foliage and confirm the small wall pot drains freely around the Phormium crown.",
        "why": "Good drainage and a clean crown protect evergreen foliage through the next season.",
        "doneWhen": "The foliage is tidy, the crown is clear and the pot drains freely.",
        "guide": "refresh",
        "sources": [
          "month-may",
          "plant-wallpot1-phormium-flamingo"
        ],
        "plantNotes": {}
      },
      {
        "scope": "plant",
        "zoneKeys": [
          "bed1"
        ],
        "plantIds": [
          "bed1-box-hedging"
        ],
        "steps": [
          "Confirm no active nest or caterpillar problem is present.",
          "Use clean, sharp shears.",
          "Follow the existing outline and collect every clipping."
        ],
        "id": "may-box-light-clip",
        "priority": "ongoing",
        "category": "prune",
        "title": "Give the Bed 1 box only a light first clip",
        "timing": "Late May on a dry, overcast day, after a nest and caterpillar check.",
        "summary": "Trim soft projecting growth to restore the outline without cutting deeply into old wood.",
        "why": "A light early tidy holds the shape until the main late-summer clip.",
        "doneWhen": "The hedge outline is tidy and no bare old wood has been exposed.",
        "caution": "Postpone the work if birds are nesting or leaves are wet.",
        "guide": "prune",
        "sources": [
          "shrubs",
          "plant-bed1-box-hedging"
        ],
        "plantNotes": {}
      },
      {
        "id": "may-viburnum-after-flowers",
        "priority": "month",
        "category": "prune",
        "scope": "zone",
        "zoneKeys": [
          "bed23wallpot",
          "viburnumpot"
        ],
        "plantIds": [
          "bed23wallpot-viburnum-lisarose",
          "viburnumpot-viburnum-tinus-spirit"
        ],
        "title": "Trim pot Viburnums only after flowering",
        "timing": "After the winter-to-spring display; only if branches outgrow the pot position.",
        "summary": "Shorten wayward shoots lightly and decide whether to retain developing berries.",
        "why": "Give this planting the seasonal attention it needs without disturbing healthy neighbouring plants.",
        "steps": [
          "Check that each flower cluster has finished.",
          "Shorten only branches blocking access or unbalancing the plant.",
          "Leave the rest of the leafy framework intact."
        ],
        "doneWhen": "The named work is complete and healthy growth remains undamaged.",
        "leaveAlone": "Heavy autumn clipping would remove the next winter’s flower buds.",
        "sources": [
          "shrubs",
          "plant-bed23wallpot-viburnum-lisarose",
          "plant-viburnumpot-viburnum-tinus-spirit"
        ],
        "guide": "prune",
        "plantNotes": {
          "bed23wallpot-viburnum-lisarose": "After the winter flowers finish, shorten only an outgrowing branch. Keeping spent heads allows berries; heavy clipping removes the next flower-bearing framework.",
          "viburnumpot-viburnum-tinus-spirit": "After the winter flowers finish, shorten only an outgrowing branch. Keeping spent heads allows berries; heavy clipping removes the next flower-bearing framework."
        }
      },
      {
        "id": "may-candytuft-vinca",
        "priority": "month",
        "category": "prune",
        "scope": "zone",
        "zoneKeys": [
          "bed3",
          "bed5",
          "bed23wallpot"
        ],
        "plantIds": [
          "bed3-evergreen-candytuft",
          "bed3-variegated-periwinkle",
          "bed5-big-pot-vinca-minor-illumination",
          "bed23wallpot-vinca-minor-illumination"
        ],
        "title": "Contain low evergreen growth after flowering",
        "timing": "After each plant’s spring flowers fade.",
        "summary": "Trim the Candytuft cushion lightly and contain Vinca runners without stripping the living cover.",
        "why": "Give this planting the seasonal attention it needs without disturbing healthy neighbouring plants.",
        "steps": [
          "Identify the flowering stems and unwanted runners.",
          "Trim Candytuft only within leafy growth; trace Vinca runners to where they root.",
          "Remove unwanted rooted Vinca pieces and green reversions."
        ],
        "doneWhen": "The named work is complete and healthy growth remains undamaged.",
        "leaveAlone": "Keep Candytuft’s bare woody centre uncut and retain both assumed identities until flowers confirm them.",
        "guide": "prune",
        "sources": [
          "shrubs",
          "plant-bed3-evergreen-candytuft",
          "plant-bed3-variegated-periwinkle",
          "plant-bed5-big-pot-vinca-minor-illumination",
          "plant-bed23wallpot-vinca-minor-illumination"
        ],
        "plantNotes": {
          "bed3-evergreen-candytuft": "After the assumed Iberis flowers, lightly trim the flowered cushion with living leaves below each cut. Do not cut into its bare woody centre.",
          "bed3-variegated-periwinkle": "Trace unwanted runners and remove rooted pieces where they invade neighbours. Cut solid-green reversions at their origin; retain useful variegated trails.",
          "bed5-big-pot-vinca-minor-illumination": "Trace unwanted runners and remove rooted pieces where they invade neighbours. Cut solid-green reversions at their origin; retain useful variegated trails.",
          "bed23wallpot-vinca-minor-illumination": "Trace unwanted runners and remove rooted pieces where they invade neighbours. Cut solid-green reversions at their origin; retain useful variegated trails."
        }
      }
    ],
    "highlights": [
      {
        "scope": "zone",
        "zoneKeys": [
          "bed5"
        ],
        "plantIds": [
          "bed5-wisteria"
        ],
        "id": "may-bed5-wisteria",
        "title": "Wisteria becomes the back garden’s headline",
        "note": "Lilac racemes cascade along Bed 5 before the summer pruning growth begins."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "patio"
        ],
        "plantIds": [
          "stone-clematis"
        ],
        "id": "may-patio-clematis",
        "title": "The patio wall turns pink",
        "note": "Clematis montana covers the house wall in a sheet of spring flowers."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1"
        ],
        "plantIds": [],
        "id": "may-bed1",
        "title": "Bed 1 layers foliage and flower",
        "note": "Rhododendron, Little Heath and dark dahlia growth sit beneath the maple canopy."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed2"
        ],
        "plantIds": [],
        "id": "may-bed2",
        "title": "Peony and weigela fill Bed 2",
        "note": "Large peony blooms and pink weigela flowers make this the busiest back-garden bed."
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "frontpot"
        ],
        "plantIds": [
          "frontpot-gazania-sunny-side-up",
          "frontpot-gazania-orange-flame",
          "frontpot-calibrachoa",
          "frontpot-bacopa-white"
        ],
        "id": "may-frontpot",
        "title": "The Front Door Pot starts its summer display",
        "note": "Gazanias provide the bold flowers while calibrachoa and bacopa begin to trail.",
        "potKey": "frontpot"
      }
    ],
    "indoorJobs": [
      {
        "id": "may-birthday-houseplants-moisture-2026",
        "scope": "zone",
        "zoneKeys": [
          "houseSittingRhipsalis",
          "houseSittingDracaena",
          "houseLandingCrassula",
          "houseKitchenPhilodendron",
          "houseLandingZamioculcas"
        ],
        "plantIds": [
          "house-sitting-rhipsalis",
          "house-sitting-dracaena-bicolour",
          "house-landing-crassula-hottentot",
          "house-kitchen-philodendron",
          "house-landing-zamioculcas"
        ],
        "priority": "ongoing",
        "category": "check",
        "title": "Check the five birthday houseplants individually",
        "timing": "When inspecting pots; reduce watering as light and growth decline.",
        "summary": "Feel each root ball before deciding whether to water; drain every outer pot after a drink.",
        "why": "The hanging cactus and young Philodendron dry differently from the water-storing Crassula and Zamioculcas.",
        "doneWhen": "All five root balls have been checked and any surplus water emptied.",
        "steps": [
          "Feel below the surface and lift each accessible inner pot.",
          "Water only the specimens whose compost has reached their stated drying point.",
          "Let runoff finish and return each pot to its marked position."
        ],
        "guide": "check",
        "sources": [
          "oct-house-rhipsalis",
          "oct-house-dracaena",
          "oct-house-crassula",
          "oct-house-philodendron",
          "oct-house-zamioculcas"
        ],
        "plantNotes": {
          "house-sitting-rhipsalis": "Let the surface begin to dry, then water and drain; avoid prolonged drought.",
          "house-sitting-dracaena-bicolour": "Allow the upper compost to dry before soaking and draining; use rainwater where possible.",
          "house-landing-crassula-hottentot": "Let compost dry between soakings; water sparingly through winter.",
          "house-kitchen-philodendron": "Water once the upper compost begins to dry and let excess drain completely.",
          "house-landing-zamioculcas": "Allow the whole root ball to dry before watering; reduce checks into winter."
        }
      }
    ]
  },
  "June": {
    "theme": "Prune spring-flowering wood promptly and settle into the deadheading rhythm.",
    "jobs": [
      {
        "scope": "plant",
        "zoneKeys": [
          "bed2"
        ],
        "plantIds": [
          "bed2-weigela"
        ],
        "steps": [
          "Identify one or two of the oldest stems.",
          "Remove them cleanly at the base.",
          "Shorten badly placed shoots to a useful side branch."
        ],
        "id": "jun-prune-weigela",
        "priority": "first",
        "category": "prune",
        "title": "Renew the weigela after flowering",
        "timing": "Immediately after the main flower display fades.",
        "summary": "Remove selected old stems at the base and shorten only growth that crowds paths or neighbours.",
        "why": "Weigela flowers on older wood, so prompt post-flowering renewal preserves time for next year’s shoots.",
        "doneWhen": "The shrub is less congested but still has a full, natural framework.",
        "caution": "Do not shear the entire shrub into a tight shape.",
        "guide": "prune",
        "sources": [
          "shrubs",
          "plant-bed2-weigela"
        ],
        "plantNotes": {},
        "diagram": "renewal"
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed3",
          "frontApple"
        ],
        "plantIds": [
          "bed2-weeping-cherry",
          "frontApple-damson-tree"
        ],
        "steps": [
          "Confirm the forecast is dry.",
          "Remove suckers and dead or rubbing wood first.",
          "Make the fewest shaping cuts needed and use clean tools."
        ],
        "id": "jun-prune-stone-fruit",
        "priority": "first",
        "category": "prune",
        "title": "Make essential cherry and damson cuts in dry summer weather",
        "timing": "After flowering, during a dry spell and while the trees are in active growth.",
        "summary": "Remove suckers, damaged wood and only the branches previously marked as necessary.",
        "why": "Summer pruning reduces silver-leaf risk and avoids unnecessary disturbance to stone fruit.",
        "doneWhen": "The trees retain their natural forms and every cut solves a specific problem.",
        "caution": "Do not prune in wet weather or make a major renovation cut without specialist advice.",
        "guide": "prune",
        "sources": [
          "shrubs",
          "plant-bed2-weeping-cherry",
          "plant-frontApple-damson-tree"
        ],
        "plantNotes": {
          "bed2-weeping-cherry": "Make only essential cuts in dry summer weather and retain the pendulous framework. Do not prune routinely in winter.",
          "frontApple-damson-tree": "Prune only if damaged or congested, in dry active-growth weather. Leave fruiting wood and do not include it in apple winter pruning."
        },
        "diagram": "collar"
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed5",
          "frontBed3",
          "frontBed4",
          "frontBed5"
        ],
        "plantIds": [
          "bed5-rose",
          "frontBed3-climbing-rose-white-pink",
          "frontBed3-rose-pink",
          "frontBed4-the-pilgrim",
          "frontBed4-the-generous-gardener",
          "frontBed5-climber-unidentified"
        ],
        "steps": [
          "Remove faded blooms and any petals stuck around the centre.",
          "Cut back to a healthy outward-facing leaf on strong stems.",
          "Check ties while handling each climber."
        ],
        "id": "jun-deadhead-roses",
        "priority": "month",
        "category": "deadhead",
        "title": "Start the rose deadheading round",
        "timing": "As individual flower clusters fade.",
        "summary": "Remove spent blooms back to a healthy leaf or flowering side shoot and retie loose stems.",
        "why": "Regular deadheading keeps repeat-flowering roses tidy and directs energy into the next flush.",
        "doneWhen": "No collapsing flower clusters remain and new buds and shoots are unobstructed.",
        "guide": "deadhead",
        "sources": [
          "deadhead",
          "plant-bed5-rose",
          "plant-frontBed3-climbing-rose-white-pink",
          "plant-frontBed3-rose-pink",
          "plant-frontBed4-the-pilgrim",
          "plant-frontBed4-the-generous-gardener",
          "plant-frontBed5-climber-unidentified"
        ],
        "plantNotes": {
          "bed5-rose": "Remove the entire finished flower or cluster to a sound leaf or side shoot. Retain selected hips if wanted; do not cut through a long main cane.",
          "frontBed3-climbing-rose-white-pink": "Super Fairy is a repeat-flowering rambler. Snip finished sprays while keeping long young canes for later flushes; do not strip out the framework.",
          "frontBed3-rose-pink": "Remove the entire finished flower or cluster to a sound leaf or side shoot. Retain selected hips if wanted; do not cut through a long main cane.",
          "frontBed4-the-pilgrim": "Remove the entire finished flower or cluster to a sound leaf or side shoot. Retain selected hips if wanted; do not cut through a long main cane.",
          "frontBed4-the-generous-gardener": "Remove the entire finished flower or cluster to a sound leaf or side shoot. Retain selected hips if wanted; do not cut through a long main cane.",
          "frontBed5-climber-unidentified": "Remove the entire finished flower or cluster to a sound leaf or side shoot. Retain selected hips if wanted; do not cut through a long main cane."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed2",
          "bed3",
          "frontBed4",
          "bed4",
          "frontBed2",
          "frontBed5",
          "bed1"
        ],
        "plantIds": [
          "bed2-peony",
          "bed2-avens",
          "bed2-centaurea-snowy-owl",
          "bed4-achillea",
          "bed4-gaillardia",
          "frontBed2-polemonium-golden-feathers",
          "frontBed4-astrantia-trio",
          "frontBed5-gaura-gaudi-red",
          "frontBed5-salvia-salgoon-lake-blueberry"
        ],
        "steps": [
          "Follow each spent flower stem to a leaf, side bud or basal clump.",
          "Cut cleanly rather than leaving bare stalks.",
          "Leave selected sound seedheads only where they add structure or wildlife value."
        ],
        "id": "jun-deadhead-perennials",
        "priority": "month",
        "category": "deadhead",
        "title": "Deadhead the first perennial flush",
        "timing": "Once flowers lose colour or begin forming unwanted seed.",
        "summary": "Remove spent heads while leaving healthy foliage to feed the plants.",
        "why": "Timely deadheading keeps the beds tidy and encourages repeat flowers where the plant is capable of them.",
        "doneWhen": "Faded flowers are removed and healthy leaves and developing buds remain.",
        "guide": "deadhead",
        "sources": [
          "deadhead",
          "plant-bed2-peony",
          "plant-bed2-avens",
          "plant-bed2-centaurea-snowy-owl",
          "plant-bed4-achillea",
          "plant-bed4-gaillardia",
          "plant-frontBed2-polemonium-golden-feathers",
          "plant-frontBed4-astrantia-trio",
          "plant-frontBed5-gaura-gaudi-red",
          "plant-frontBed5-salvia-salgoon-lake-blueberry"
        ],
        "plantNotes": {
          "bed2-peony": "Remove the faded flower to a healthy leaf. Keep all green leaves to feed next year’s crown; this does not create another peony flowering season.",
          "bed2-avens": "Snip finished Geum flower stalks down to leafy growth or the basal clump; keep the low rosette.",
          "bed2-centaurea-snowy-owl": "After the whole first flush is tired, cut flowered stems and mildew-marked foliage near the base. Keep fresh basal shoots; water if dry to help regrowth.",
          "bed4-achillea": "Remove flowered stems to the basal foliage, unless retaining selected dry heads. Do not cut off fresh leaves.",
          "bed4-gaillardia": "Follow a faded daisy down to the next leafy shoot. Keep the basal crown open and avoid a hard cut through new buds.",
          "frontBed2-polemonium-golden-feathers": "Cut finished flower stems down to the leafy clump. Leave the golden foliage intact.",
          "frontBed4-astrantia-trio": "Cut finished flower stems near the basal leaves; remove tired foliage only if necessary and keep fresh regrowth.",
          "frontBed5-gaura-gaudi-red": "Shorten an exhausted flowering stem to a fresh side shoot. Do not cut the entire airy plant down in summer.",
          "frontBed5-salvia-salgoon-lake-blueberry": "Cut each finished spike just above a leafy side shoot. Preserve fresh flowers and keep the old framework through winter."
        }
      },
      {
        "scope": "plant",
        "zoneKeys": [
          "bed5"
        ],
        "plantIds": [
          "bed1-nemesia"
        ],
        "steps": [
          "Remove the longest tired flowered shoots first.",
          "Trim the rest to an even leafy outline.",
          "Clear all cut material from beneath the plant."
        ],
        "id": "jun-trim-nemesia-bed1",
        "priority": "month",
        "category": "deadhead",
        "title": "Trim Aroma Heart of Gold after its first flush",
        "timing": "When flowering becomes sparse and shoots look stretched.",
        "summary": "Shorten the tired flowering growth evenly without cutting into bare old stems.",
        "why": "A prompt trim encourages compact regrowth and a later flush in the Bed 5 big pot.",
        "doneWhen": "A compact leafy mound remains with no long, fading stems.",
        "guide": "clear",
        "sources": [
          "deadhead",
          "plant-bed1-nemesia"
        ],
        "plantNotes": {}
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "bigpot1"
        ],
        "plantIds": [
          "bigpot1-fuchsia",
          "bigpot1-verbena",
          "bigpot1-calibrachoa",
          "bigpot1-nepeta",
          "bigpot1-lobelia",
          "bigpot1-petunia"
        ],
        "steps": [
          "Remove faded fuchsia, verbena and petunia flowers.",
          "Trim any trailer that has become long and bare.",
          "Cut catmint after its first flush if it is overwhelming neighbours."
        ],
        "id": "jun-bigpot1-round",
        "priority": "ongoing",
        "category": "deadhead",
        "potKey": "bigpot1",
        "title": "Deadhead and balance Big Pot 1",
        "timing": "Once a week through active flowering.",
        "summary": "Treat the whole container as one display: remove spent flowers, pinch leggy trailers and keep the centre open.",
        "why": "A single pot-level round prevents stronger plants from hiding the fuchsia or smothering the rim.",
        "doneWhen": "The pot has a visible centre, an even rim and no mass of faded flowers.",
        "guide": "deadhead",
        "sources": [
          "deadhead",
          "plant-bigpot1-fuchsia",
          "plant-bigpot1-verbena",
          "plant-bigpot1-calibrachoa",
          "plant-bigpot1-nepeta",
          "plant-bigpot1-lobelia",
          "plant-bigpot1-petunia"
        ],
        "plantNotes": {
          "bigpot1-fuchsia": "Remove faded flowers and developing berries if more flowers are wanted. Keep healthy leafy stems and unopened hanging buds.",
          "bigpot1-verbena": "Snip faded flower clusters above a leaf or side shoot. Trim only leggy leafy tips; this does not mean cutting the whole plant down.",
          "bigpot1-calibrachoa": "Routine flower-by-flower deadheading is unnecessary. Trim only leggy or damaged trails and clear fallen petals from the pot.",
          "bigpot1-nepeta": "After the first flush, shorten tired flower stems to the leafy mound. Keep the perennial crown and avoid tugging roots shared with the Fuchsia.",
          "bigpot1-lobelia": "Lightly trim a tired trailing section back to living leafy growth. This bedding Lobelia is not the upright perennial Starship in Bed 4.",
          "bigpot1-petunia": "Pinch behind the faded trumpet to remove its seed capsule too; trim bare-ended shoots just above leaves."
        }
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "bigpot2"
        ],
        "plantIds": [
          "bigpot2-lobelia",
          "bigpot2-verbena",
          "bigpot2-petunia",
          "bigpot2-nepeta",
          "bigpot2-fuchsia"
        ],
        "steps": [
          "Deadhead the visible spent blooms.",
          "Shorten leggy trailers above leafy growth.",
          "Open space around the central fuchsia."
        ],
        "id": "jun-bigpot2-round",
        "priority": "ongoing",
        "category": "deadhead",
        "potKey": "bigpot2",
        "title": "Deadhead and balance Big Pot 2",
        "timing": "Once a week through active flowering.",
        "summary": "Remove spent flowers and trim the mixed planting back to a balanced pot shape.",
        "why": "Regular whole-pot grooming keeps the mirror planting full rather than top-heavy or bare at the edge.",
        "doneWhen": "The composition is even and no component is hiding the rest.",
        "guide": "deadhead",
        "sources": [
          "deadhead",
          "plant-bigpot2-lobelia",
          "plant-bigpot2-verbena",
          "plant-bigpot2-petunia",
          "plant-bigpot2-nepeta",
          "plant-bigpot2-fuchsia"
        ],
        "plantNotes": {
          "bigpot2-lobelia": "Lightly trim a tired trailing section back to living leafy growth. This bedding Lobelia is not the upright perennial Starship in Bed 4.",
          "bigpot2-verbena": "Snip faded flower clusters above a leaf or side shoot. Trim only leggy leafy tips; this does not mean cutting the whole plant down.",
          "bigpot2-petunia": "Pinch behind the faded trumpet to remove its seed capsule too; trim bare-ended shoots just above leaves.",
          "bigpot2-nepeta": "After the first flush, shorten tired flower stems to the leafy mound. Keep the perennial crown and avoid tugging roots shared with the Fuchsia.",
          "bigpot2-fuchsia": "Remove faded flowers and developing berries if more flowers are wanted. Keep healthy leafy stems and unopened hanging buds."
        }
      },
      {
        "scope": "bed5-big-pot",
        "zoneKeys": [
          "bed5"
        ],
        "plantIds": [
          "bed5-big-pot-alstroemeria"
        ],
        "steps": [
          "Check that all flowers on that stem have finished.",
          "Hold nearby young shoots clear and trace the old stem to its base.",
          "Cut near the base with clean secateurs. Only a firmly established plant with free roots suits a gentle upward tug; never force it."
        ],
        "id": "jun-bed5-alstroemeria-reviewed",
        "priority": "ongoing",
        "category": "deadhead",
        "title": "Remove finished Alstroemeria stems carefully",
        "timing": "Whenever an entire flowering stem has finished.",
        "summary": "In this mixed pot, cut a fully finished stem low down if pulling could disturb its roots or neighbours.",
        "why": "Removing the whole stem encourages fresh shoots from the base.",
        "doneWhen": "Finished stems are removed cleanly and young shoots remain undamaged.",
        "caution": "Wear gloves. Do not pull stems on a newly planted clump or when the root ball moves.",
        "sources": [
          "alstroemeria",
          "plant-bed5-big-pot-alstroemeria"
        ],
        "guide": "deadhead",
        "plantNotes": {}
      },
      {
        "scope": "bed5-big-pot",
        "zoneKeys": [
          "bed5"
        ],
        "plantIds": [
          "bed5-big-pot-petunia-bees-knees"
        ],
        "steps": [
          "Follow the faded trumpet to its base.",
          "Pinch off the flower and seed case together.",
          "Shorten bare-ended shoots to a leafy joint."
        ],
        "id": "jun-bed5-petunia",
        "priority": "ongoing",
        "category": "deadhead",
        "title": "Deadhead the Bed 5 big-pot petunia",
        "timing": "As trumpet flowers collapse.",
        "summary": "Remove each faded flower with the swelling seed case behind it and pinch leggy ends above leaves.",
        "why": "Taking the seed case as well as the petals keeps the plant branching and flowering.",
        "doneWhen": "No soft spent trumpets or obvious seed cases remain.",
        "guide": "deadhead",
        "sources": [
          "deadhead",
          "plant-bed5-big-pot-petunia-bees-knees"
        ],
        "plantNotes": {
          "bed5-big-pot-petunia-bees-knees": "Pinch behind the faded trumpet to remove its seed capsule too; trim bare-ended shoots just above leaves."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1"
        ],
        "plantIds": [
          "bed5-big-pot-nemesia"
        ],
        "steps": [
          "Remove the longest tired shoots.",
          "Trim the remaining mound evenly above leaves.",
          "Keep the crown clear of neighbouring woody growth."
        ],
        "id": "jun-bed4-wisley-vanilla-nemesia",
        "priority": "ongoing",
        "category": "deadhead",
        "title": "Trim the Bed 1 nemesia when its first flush fades",
        "timing": "As flowers thin and stems stretch.",
        "summary": "Shear the leafy flowering growth lightly to restart a compact flush.",
        "why": "The moved Wisley Vanilla plant benefits from a light cut that keeps it compact among the Bed 1 shrubs.",
        "doneWhen": "A neat leafy mound remains at the new pocket in Bed 1.",
        "guide": "clear",
        "sources": [
          "deadhead",
          "plant-bed5-big-pot-nemesia"
        ],
        "plantNotes": {}
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "bed2",
          "bed3",
          "bed4",
          "bed5",
          "stone",
          "frontBed1",
          "frontBed2",
          "frontBed3",
          "frontBed4",
          "frontBed5"
        ],
        "plantIds": [],
        "steps": [
          "Pull weeds with roots before seed forms.",
          "Lift cuttings and fallen petals from crowns.",
          "Avoid deep cultivation around shallow-rooted shrubs and trees."
        ],
        "id": "jun-ground-weed-edge",
        "priority": "ongoing",
        "category": "check",
        "title": "Weed edges and keep crowns open",
        "timing": "Little and often before weeds set seed.",
        "summary": "Hand-remove weeds, clear material from plant crowns and restore the visible bed edges.",
        "why": "Short regular rounds prevent a large summer clearance among full foliage.",
        "doneWhen": "Edges read clearly and no weed is close to seeding.",
        "guide": "check",
        "sources": [
          "month-june"
        ],
        "plantNotes": {}
      },
      {
        "scope": "plant",
        "zoneKeys": [
          "frontBed5"
        ],
        "plantIds": [
          "frontBed5-euphorbia-ascot-petite"
        ],
        "steps": [
          "Put on gloves and eye protection before touching cut stems.",
          "Identify the fresh replacement shoots.",
          "Cut old flowered stems at the base and dispose of them safely."
        ],
        "id": "jun-euphorbia-after-flowering",
        "priority": "month",
        "category": "deadhead",
        "title": "Remove old Ascot Petite flower stems safely",
        "timing": "After the spring flower display has completely faded, usually early summer.",
        "summary": "Cut each spent stem at the base without damaging its replacement growth.",
        "why": "Removing the old framework makes room for fresh evergreen shoots while preserving the crown.",
        "doneWhen": "Fresh shoots remain intact and no spent stems crowd the centre.",
        "caution": "Euphorbia sap can severely irritate skin and eyes; wash tools and hands after the job.",
        "leaveAlone": "Keep unflowered leafy replacement stems. March shoots may be carrying this year’s flowers.",
        "sources": [
          "euphorbia",
          "plant-frontBed5-euphorbia-ascot-petite"
        ],
        "guide": "clear",
        "plantNotes": {}
      },
      {
        "id": "jun-hydrangea-climber",
        "priority": "month",
        "category": "prune",
        "scope": "plant",
        "zoneKeys": [
          "bed2"
        ],
        "plantIds": [
          "bed2-hydrangea-petiolaris"
        ],
        "title": "Contain the climbing Hydrangea after its flowers",
        "timing": "Only after flowering, usually late June or July.",
        "summary": "Shorten protruding or overlong shoots without stripping its established wall framework.",
        "why": "Give this planting the seasonal attention it needs without disturbing healthy neighbouring plants.",
        "steps": [
          "Check flowers are finished.",
          "Trace shoots blocking the boundary route.",
          "Cut selected shoots back to a useful side branch and retain the attached framework."
        ],
        "doneWhen": "The named work is complete and healthy growth remains undamaged.",
        "sources": [
          "hydrangea",
          "plant-bed2-hydrangea-petiolaris"
        ],
        "guide": "prune",
        "plantNotes": {}
      }
    ],
    "highlights": [
      {
        "scope": "zone",
        "zoneKeys": [
          "bed5",
          "frontBed3",
          "frontBed4",
          "frontBed5"
        ],
        "plantIds": [],
        "id": "jun-rose-garden",
        "title": "Roses link the front and back gardens",
        "note": "Bed 5 and the front borders begin their first strong flush together."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed4"
        ],
        "plantIds": [],
        "id": "jun-bed4-colour",
        "title": "Bed 4 becomes a colour patch",
        "note": "Callistemon, Gaillardia and the Abelias bring flowers and foliage beneath the apple tree."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed2"
        ],
        "plantIds": [],
        "id": "jun-bed2-summer",
        "title": "Bed 2 shifts from blossom to summer flower",
        "note": "Weigela and Geum share the border with Silverbush, the climbing Hydrangea and Abelia Raspberry Profusion."
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "bigpot1"
        ],
        "plantIds": [],
        "id": "jun-bigpot1",
        "title": "Big Pot 1 settles into one mixed display",
        "note": "The central fuchsia rises above a ring of pink, blue and purple trailers.",
        "potKey": "bigpot1"
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "frontpot"
        ],
        "plantIds": [],
        "id": "jun-frontpot",
        "title": "The Front Door Pot reaches full colour",
        "note": "Cream and orange gazanias sit above a soft trailing edge.",
        "potKey": "frontpot"
      }
    ],
    "indoorJobs": [
      {
        "scope": "plant",
        "zoneKeys": [
          "houseHallKentia"
        ],
        "plantIds": [
          "house-hallway-kentia-palm"
        ],
        "steps": [
          "Confirm the palm is actively producing healthy growth.",
          "Use no more than the labelled houseplant dilution.",
          "Record the date to avoid accidental overfeeding."
        ],
        "id": "jun-indoor-kentia-feed",
        "priority": "month",
        "category": "mulch",
        "title": "Begin the Kentia’s light summer feeding",
        "timing": "During active growth, following the product’s houseplant rate.",
        "summary": "Use a balanced feed sparingly and pause if the palm is stressed or not growing.",
        "why": "A modest summer feed supports new fronds without forcing weak growth.",
        "doneWhen": "One correctly diluted feed is recorded and the next is not due prematurely.",
        "caution": "More feed will not repair brown tips or poor drainage.",
        "guide": "feed",
        "sources": [
          "month-june",
          "plant-house-hallway-kentia-palm"
        ],
        "plantNotes": {}
      },
      {
        "id": "jun-birthday-houseplants-moisture-2026",
        "scope": "zone",
        "zoneKeys": [
          "houseSittingRhipsalis",
          "houseSittingDracaena",
          "houseLandingCrassula",
          "houseKitchenPhilodendron",
          "houseLandingZamioculcas"
        ],
        "plantIds": [
          "house-sitting-rhipsalis",
          "house-sitting-dracaena-bicolour",
          "house-landing-crassula-hottentot",
          "house-kitchen-philodendron",
          "house-landing-zamioculcas"
        ],
        "priority": "ongoing",
        "category": "check",
        "title": "Check the five birthday houseplants individually",
        "timing": "When inspecting pots; reduce watering as light and growth decline.",
        "summary": "Feel each root ball before deciding whether to water; drain every outer pot after a drink.",
        "why": "The hanging cactus and young Philodendron dry differently from the water-storing Crassula and Zamioculcas.",
        "doneWhen": "All five root balls have been checked and any surplus water emptied.",
        "steps": [
          "Feel below the surface and lift each accessible inner pot.",
          "Water only the specimens whose compost has reached their stated drying point.",
          "Let runoff finish and return each pot to its marked position."
        ],
        "guide": "check",
        "sources": [
          "oct-house-rhipsalis",
          "oct-house-dracaena",
          "oct-house-crassula",
          "oct-house-philodendron",
          "oct-house-zamioculcas"
        ],
        "plantNotes": {
          "house-sitting-rhipsalis": "Let the surface begin to dry, then water and drain; avoid prolonged drought.",
          "house-sitting-dracaena-bicolour": "Allow the upper compost to dry before soaking and draining; use rainwater where possible.",
          "house-landing-crassula-hottentot": "Let compost dry between soakings; water sparingly through winter.",
          "house-kitchen-philodendron": "Water once the upper compost begins to dry and let excess drain completely.",
          "house-landing-zamioculcas": "Allow the whole root ball to dry before watering; reduce checks into winter."
        }
      }
    ]
  },
  "July": {
    "theme": "Keep flowers productive, make essential summer cuts and stop vigorous growth tangling the garden.",
    "jobs": [
      {
        "scope": "plant",
        "zoneKeys": [
          "patio"
        ],
        "plantIds": [
          "stone-honeysuckle"
        ],
        "steps": [
          "Look for open flowers and developing buds before touching a shoot.",
          "Guide sound flexible stems onto their own support.",
          "Remove only dead or broken material now; assess pruning against the observed flowering season."
        ],
        "id": "jul-prune-honeysuckle-reviewed",
        "priority": "first",
        "category": "prune",
        "title": "Guide the honeysuckle and keep its flowers",
        "timing": "As the main flower flush ends.",
        "summary": "Retie growth blocking the Patio route; the assumed Serotina can still be flowering in July.",
        "why": "A light prompt prune contains the climber without removing all of the growth that carries future flowers and wildlife value.",
        "doneWhen": "The patio climber is contained and supported without looking stripped.",
        "leaveAlone": "Do not shorten all flowering shoots because it is July. The Serotina identity remains assumed.",
        "sources": [
          "honeysuckle",
          "plant-stone-honeysuckle"
        ],
        "guide": "support",
        "plantNotes": {
          "stone-honeysuckle": "Guide a flexible new shoot onto its own support before it winds around neighbours. Leave flowering or berrying growth unless it blocks access."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed3",
          "frontApple"
        ],
        "plantIds": [
          "bed2-weeping-cherry",
          "frontApple-damson-tree"
        ],
        "steps": [
          "Reassess whether each planned cut is still needed.",
          "Remove suckers and damaged or rubbing wood.",
          "Make clean cuts and stop once the problem is solved."
        ],
        "id": "jul-finish-stone-fruit",
        "priority": "first",
        "category": "prune",
        "title": "Finish any essential stone-fruit pruning",
        "timing": "In a reliably dry spell while growth is active.",
        "summary": "Complete only the cherry and damson work identified earlier in the year.",
        "why": "This is the safer seasonal window; delayed winter cutting would increase disease risk.",
        "doneWhen": "No necessary cut remains and both natural frameworks are preserved.",
        "caution": "Avoid pruning during wet weather.",
        "guide": "prune",
        "sources": [
          "shrubs",
          "plant-bed2-weeping-cherry",
          "plant-frontApple-damson-tree"
        ],
        "plantNotes": {
          "bed2-weeping-cherry": "Make only essential cuts in dry summer weather and retain the pendulous framework. Do not prune routinely in winter.",
          "frontApple-damson-tree": "Prune only if damaged or congested, in dry active-growth weather. Leave fruiting wood and do not include it in apple winter pruning."
        },
        "diagram": "collar"
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1"
        ],
        "plantIds": [
          "bed1-dahlia",
          "bed1-dahlia-yellow"
        ],
        "steps": [
          "Compare the pointed spent head with round firm buds.",
          "Follow the spent stem down to a leaf pair or side bud.",
          "Make a clean cut and check the support tie."
        ],
        "id": "jul-deadhead-dahlias",
        "priority": "month",
        "category": "deadhead",
        "title": "Deadhead both Bed 1 dahlias properly",
        "timing": "Twice weekly once flowering is strong.",
        "summary": "Cut spent pointed flower heads back to a branching leaf joint; leave rounded unopened buds.",
        "why": "Correct deadheading keeps the plants branching and avoids accidentally removing new flowers.",
        "doneWhen": "No pointed spent heads remain and all round buds are intact.",
        "guide": "deadhead",
        "sources": [
          "deadhead",
          "plant-bed1-dahlia",
          "plant-bed1-dahlia-yellow"
        ],
        "plantNotes": {
          "bed1-dahlia": "A spent dahlia head becomes pointed; a fresh bud is round. Follow the old flower stalk down to a branching leaf joint and cut there, keeping new buds.",
          "bed1-dahlia-yellow": "A spent dahlia head becomes pointed; a fresh bud is round. Follow the old flower stalk down to a branching leaf joint and cut there, keeping new buds."
        },
        "diagram": "deadhead"
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed2",
          "bed4",
          "frontBed3",
          "frontBed5",
          "bed1"
        ],
        "plantIds": [
          "bed2-avens",
          "bed4-gaillardia",
          "bed1-red-hot-poker",
          "frontBed4-astrantia-trio",
          "frontBed5-gaura-gaudi-red",
          "frontBed5-hebe-rhubarb-and-custard",
          "frontBed5-salvia-salgoon-lake-blueberry"
        ],
        "steps": [
          "Work area by area with clean snips.",
          "Cut to a side shoot, leaf joint or basal clump.",
          "Remove diseased material rather than adding it to ordinary compost."
        ],
        "id": "jul-deadhead-summer-beds",
        "priority": "month",
        "category": "deadhead",
        "title": "Make the midsummer deadheading round",
        "timing": "When flowers fade but before seed is set everywhere.",
        "summary": "Remove spent flower stems to useful leafy joints and leave selected attractive seedheads only deliberately.",
        "why": "A regular round prolongs repeat flowering and keeps crowded beds airy.",
        "doneWhen": "Faded stems no longer dominate and fresh buds remain easy to see.",
        "guide": "deadhead",
        "sources": [
          "deadhead",
          "plant-bed2-avens",
          "plant-bed4-gaillardia",
          "plant-bed1-red-hot-poker",
          "plant-frontBed4-astrantia-trio",
          "plant-frontBed5-gaura-gaudi-red",
          "plant-frontBed5-hebe-rhubarb-and-custard",
          "plant-frontBed5-salvia-salgoon-lake-blueberry"
        ],
        "plantNotes": {
          "bed2-avens": "Snip finished Geum flower stalks down to leafy growth or the basal clump; keep the low rosette.",
          "bed4-gaillardia": "Follow a faded daisy down to the next leafy shoot. Keep the basal crown open and avoid a hard cut through new buds.",
          "bed1-red-hot-poker": "Cut a fully spent flower stalk near the base without shortening the strap-like leaves.",
          "frontBed4-astrantia-trio": "Cut finished flower stems near the basal leaves; remove tired foliage only if necessary and keep fresh regrowth.",
          "frontBed5-gaura-gaudi-red": "Shorten an exhausted flowering stem to a fresh side shoot. Do not cut the entire airy plant down in summer.",
          "frontBed5-hebe-rhubarb-and-custard": "Snip finished flower tips above live leafy shoots; never cut this compact evergreen into bare wood.",
          "frontBed5-salvia-salgoon-lake-blueberry": "Cut each finished spike just above a leafy side shoot. Preserve fresh flowers and keep the old framework through winter."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed3"
        ],
        "plantIds": [
          "bed2-spiraea-double-play-big-bang",
          "frontBed4-magic-carpet"
        ],
        "steps": [
          "Snip faded flower heads back to leafy growth.",
          "Remove stems lying across smaller neighbours.",
          "Do not repeat the hard spring prune."
        ],
        "id": "jul-clip-spiraea-and-nepeta",
        "priority": "month",
        "category": "deadhead",
        "title": "Tidy Bed 3 after its first summer flush",
        "timing": "Once spiraea flowers fade and before the bed becomes congested.",
        "summary": "Remove spent heads from the Big Bang line and Magic Carpet, shortening only soft obstructive growth.",
        "why": "A light tidy preserves each shrub’s spring-pruned framework and opens the compact wall-gap bed.",
        "doneWhen": "The bed is open and tidy with both spiraea forms clearly visible.",
        "guide": "clear",
        "sources": [
          "deadhead",
          "plant-bed2-spiraea-double-play-big-bang",
          "plant-frontBed4-magic-carpet"
        ],
        "plantNotes": {
          "bed2-spiraea-double-play-big-bang": "Clip spent summer flower clusters above leafy shoots. Do not repeat the harder spring prune; keep the coloured foliage and compact framework.",
          "frontBed4-magic-carpet": "Clip spent summer flower clusters above leafy shoots. Do not repeat the harder spring prune; keep the coloured foliage and compact framework."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "frontBed1",
          "frontBed4",
          "frontBed5"
        ],
        "plantIds": [
          "frontBed1-lavender",
          "frontBed4-photinia-existing",
          "frontBed5-hebe-rhubarb-and-custard",
          "frontBed5-bluebell-creeper-sollya"
        ],
        "steps": [
          "Confirm flowering is finished for that plant.",
          "Follow the natural outline rather than shearing everything flat.",
          "Stop above green leafy growth."
        ],
        "id": "jul-front-shrub-tidy",
        "priority": "month",
        "category": "prune",
        "title": "Make only light post-flowering shrub trims",
        "timing": "As each shrub finishes its main display.",
        "summary": "Remove faded tips and soft growth that blocks paths, keeping every cut within healthy foliage.",
        "why": "A light seasonal trim maintains shape without forcing soft late growth or exposing bare wood.",
        "doneWhen": "Paths are clear and shrubs remain full, leafy and natural-looking.",
        "caution": "Do not cut lavender or hebe back into bare old wood.",
        "guide": "prune",
        "sources": [
          "shrubs",
          "plant-frontBed1-lavender",
          "plant-frontBed4-photinia-existing",
          "plant-frontBed5-hebe-rhubarb-and-custard",
          "plant-frontBed5-bluebell-creeper-sollya"
        ],
        "plantNotes": {
          "frontBed1-lavender": "Wait for the main flowers to finish, then remove flower stalks and a little leafy growth. Never cut below all the green shoots.",
          "frontBed4-photinia-existing": "Shorten a projecting leafy shoot only if needed. Keep the evergreen framework; check for nests before cutting.",
          "frontBed5-hebe-rhubarb-and-custard": "After flowering, shorten only wayward leafy tips. Avoid cuts into bare old wood.",
          "frontBed5-bluebell-creeper-sollya": "Contain obstructing shoots lightly after flowering. Retain the climber’s leafy framework and do not force soft late growth with hard pruning."
        }
      },
      {
        "scope": "plant",
        "zoneKeys": [
          "bed4"
        ],
        "plantIds": [
          "lobeliapot-lobelia-starship-scarlet-bronze-leaf"
        ],
        "steps": [
          "Wait until most flowers on a spike are finished.",
          "Trace it to the first healthy leaves or side shoot.",
          "Cut cleanly without shortening the whole plant."
        ],
        "id": "jul-lobeliapot",
        "priority": "ongoing",
        "category": "deadhead",
        "title": "Deadhead the Bed 4 Lobelia",
        "timing": "As each scarlet flower spike finishes from the bottom upward.",
        "summary": "Cut the complete spent spike back to a leafy joint while leaving developing side spikes.",
        "why": "Removing finished spikes keeps the bronze-leaved plant neat and can encourage further flowering.",
        "doneWhen": "Finished spikes are gone and fresh side growth remains.",
        "guide": "deadhead",
        "sources": [
          "deadhead",
          "plant-lobeliapot-lobelia-starship-scarlet-bronze-leaf"
        ],
        "plantNotes": {}
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "frontpot"
        ],
        "plantIds": [
          "frontpot-gazania-sunny-side-up",
          "frontpot-gazania-orange-flame",
          "frontpot-calibrachoa",
          "frontpot-bacopa-white"
        ],
        "steps": [
          "Remove spent gazania stems at their base.",
          "Snip back long bare trailer ends to leafy growth.",
          "Clear fallen petals and leaves from the compost surface."
        ],
        "id": "jul-frontpot-round",
        "priority": "ongoing",
        "category": "deadhead",
        "potKey": "frontpot",
        "title": "Groom the Front Door Pot as one display",
        "timing": "At least weekly through peak flowering.",
        "summary": "Remove gazania seed stems and trim any trailer that makes the whole composition uneven.",
        "why": "Pot-level grooming keeps the main daisies visible without unnecessary separate entries for self-cleaning trailers.",
        "doneWhen": "The pot has an even trailing edge and the gazanias remain the clear focal point.",
        "guide": "deadhead",
        "sources": [
          "deadhead",
          "plant-frontpot-gazania-sunny-side-up",
          "plant-frontpot-gazania-orange-flame",
          "plant-frontpot-calibrachoa",
          "plant-frontpot-bacopa-white"
        ],
        "plantNotes": {
          "frontpot-gazania-sunny-side-up": "Remove each spent daisy and its leafless stalk near the rosette; leave unopened flower buds and healthy leaves.",
          "frontpot-gazania-orange-flame": "Remove each spent daisy and its leafless stalk near the rosette; leave unopened flower buds and healthy leaves.",
          "frontpot-calibrachoa": "Routine flower-by-flower deadheading is unnecessary. Trim only leggy or damaged trails and clear fallen petals from the pot.",
          "frontpot-bacopa-white": "Routine flower-by-flower deadheading is unnecessary. Trim only leggy or damaged trails and clear fallen petals from the pot."
        }
      },
      {
        "scope": "bed5-big-pot",
        "zoneKeys": [
          "bed5"
        ],
        "plantIds": [
          "bed5-big-pot-alstroemeria"
        ],
        "steps": [
          "Check that all flowers on that stem have finished.",
          "Hold nearby young shoots clear and trace the old stem to its base.",
          "Cut near the base with clean secateurs. Only a firmly established plant with free roots suits a gentle upward tug; never force it."
        ],
        "id": "jul-bed5-alstroemeria-reviewed",
        "priority": "ongoing",
        "category": "deadhead",
        "title": "Remove finished Alstroemeria stems carefully",
        "timing": "Whenever a whole flowering stem finishes.",
        "summary": "In this mixed pot, cut a fully finished stem low down if pulling could disturb its roots or neighbours.",
        "why": "This plant’s pull-from-the-base method differs from the other plants sharing its big pot.",
        "doneWhen": "Only flowering or developing alstroemeria stems remain.",
        "caution": "Wear gloves. Do not pull stems on a newly planted clump or when the root ball moves.",
        "sources": [
          "alstroemeria",
          "plant-bed5-big-pot-alstroemeria"
        ],
        "guide": "deadhead",
        "plantNotes": {}
      },
      {
        "scope": "bed5-big-pot",
        "zoneKeys": [
          "bed5"
        ],
        "plantIds": [
          "bed5-big-pot-petunia-bees-knees"
        ],
        "steps": [
          "Pinch each spent flower behind the seed case.",
          "Shorten bare-ended shoots above leaves.",
          "Keep it from covering the Vinca trail."
        ],
        "id": "jul-bed5-petunia",
        "priority": "ongoing",
        "category": "deadhead",
        "title": "Keep the Bed 5 petunia flowering",
        "timing": "Twice weekly in peak flower.",
        "summary": "Remove spent trumpets with their seed cases and pinch leggy growth.",
        "why": "The petunia needs more exact grooming than the rest of the mixed big pot.",
        "doneWhen": "No seed cases dominate and the plant remains compact.",
        "guide": "deadhead",
        "sources": [
          "deadhead",
          "plant-bed5-big-pot-petunia-bees-knees"
        ],
        "plantNotes": {
          "bed5-big-pot-petunia-bees-knees": "Pinch behind the faded trumpet to remove its seed capsule too; trim bare-ended shoots just above leaves."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "bed2",
          "bed4"
        ],
        "plantIds": [
          "bed1-dahlia",
          "bed1-dahlia-yellow",
          "bed1-box-hedging",
          "bed2-peony",
          "bed4-apple-tree"
        ],
        "steps": [
          "Loosen ties that have become tight.",
          "Inspect soft tips and box foliage for fresh pest activity.",
          "Observe planted hedging before planning a trim."
        ],
        "id": "jul-pests-and-supports",
        "priority": "ongoing",
        "category": "check",
        "title": "Check supports, pests and nesting hedges",
        "timing": "After strong growth, heavy flowers or windy weather.",
        "summary": "Retie top-heavy stems, inspect box and soft shoots, and delay planted-hedge work around active nests.",
        "why": "Small corrections now prevent snapped stems and avoid unsafe or wildlife-disturbing work.",
        "doneWhen": "Ties allow growth, pest signs have a response and nests remain undisturbed.",
        "guide": "check",
        "sources": [
          "month-july",
          "plant-bed1-dahlia",
          "plant-bed1-dahlia-yellow",
          "plant-bed1-box-hedging",
          "plant-bed2-peony",
          "plant-bed4-apple-tree"
        ],
        "plantNotes": {
          "bed1-dahlia": "Inspect this plant’s stems, supports and foliage; loosen constricting ties and photograph unfamiliar damage before choosing a treatment.",
          "bed1-dahlia-yellow": "Inspect this plant’s stems, supports and foliage; loosen constricting ties and photograph unfamiliar damage before choosing a treatment.",
          "bed1-box-hedging": "Inspect this plant’s stems, supports and foliage; loosen constricting ties and photograph unfamiliar damage before choosing a treatment.",
          "bed2-peony": "Inspect this plant’s stems, supports and foliage; loosen constricting ties and photograph unfamiliar damage before choosing a treatment.",
          "bed4-apple-tree": "Inspect this plant’s stems, supports and foliage; loosen constricting ties and photograph unfamiliar damage before choosing a treatment."
        }
      },
      {
        "id": "jul-snowflake-light-tidy",
        "priority": "month",
        "category": "prune",
        "scope": "plant",
        "zoneKeys": [
          "stone"
        ],
        "plantIds": [
          "stone-hydrangea-snowflake"
        ],
        "title": "Leave Snowflake’s flowering wood intact",
        "timing": "After its summer flowers fade; defer if still flowering.",
        "summary": "Only shorten an obstructing shoot if necessary; this oakleaf Hydrangea needs little routine pruning.",
        "why": "Give this planting the seasonal attention it needs without disturbing healthy neighbouring plants.",
        "steps": [
          "Identify any actual obstruction.",
          "After flowering, shorten only that shoot to a healthy branch.",
          "Leave the remaining framework and healthy flowerheads."
        ],
        "doneWhen": "The named work is complete and healthy growth remains undamaged.",
        "leaveAlone": "Do not cut it down like Bloody Marie: Snowflake flowers on older wood.",
        "sources": [
          "hydrangea",
          "plant-stone-hydrangea-snowflake"
        ],
        "guide": "prune",
        "plantNotes": {}
      }
    ],
    "highlights": [
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1"
        ],
        "plantIds": [
          "bed1-dahlia",
          "bed1-dahlia-yellow"
        ],
        "id": "jul-bed1-dahlias",
        "title": "Bed 1’s dark dahlias begin their main show",
        "note": "Lilac and gold flowers stand out against bronze-black foliage beneath the maple."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "stone"
        ],
        "plantIds": [],
        "id": "jul-stone-new",
        "title": "The Stone Bed becomes a foliage tapestry",
        "note": "Rosettes, golden stonecrops, dark grasses and oakleaf hydrangea create contrasting shapes."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed4"
        ],
        "plantIds": [],
        "id": "jul-bed4",
        "title": "Bed 4 is at full colour",
        "note": "Gaillardia and scarlet perennial Lobelia bring colour among the Abelias beneath the apple tree."
      },
      {
        "scope": "bed5-big-pot",
        "zoneKeys": [
          "bed5"
        ],
        "plantIds": [
          "bed5-big-pot-alstroemeria"
        ],
        "id": "jul-bed5-alstro",
        "title": "Bed 5 big-pot alstroemeria",
        "note": "Red-and-gold flowers rise through the mixed container."
      },
      {
        "scope": "bed5-big-pot",
        "zoneKeys": [
          "bed5"
        ],
        "plantIds": [
          "bed5-big-pot-petunia-bees-knees"
        ],
        "id": "jul-bed5-petunia-highlight",
        "title": "Bed 5 big-pot petunia",
        "note": "Clear yellow trumpets brighten the edge of the same container."
      },
      {
        "scope": "plant",
        "zoneKeys": [
          "bed4"
        ],
        "plantIds": [
          "lobeliapot-lobelia-starship-scarlet-bronze-leaf"
        ],
        "id": "jul-lobeliapot-highlight",
        "title": "The Lobelia sends up scarlet spikes",
        "note": "Tall red flowers rise over dramatic bronze foliage in Bed 4."
      }
    ],
    "indoorJobs": [
      {
        "id": "jul-birthday-houseplants-moisture-2026",
        "scope": "zone",
        "zoneKeys": [
          "houseSittingRhipsalis",
          "houseSittingDracaena",
          "houseLandingCrassula",
          "houseKitchenPhilodendron",
          "houseLandingZamioculcas"
        ],
        "plantIds": [
          "house-sitting-rhipsalis",
          "house-sitting-dracaena-bicolour",
          "house-landing-crassula-hottentot",
          "house-kitchen-philodendron",
          "house-landing-zamioculcas"
        ],
        "priority": "ongoing",
        "category": "check",
        "title": "Check the five birthday houseplants individually",
        "timing": "When inspecting pots; reduce watering as light and growth decline.",
        "summary": "Feel each root ball before deciding whether to water; drain every outer pot after a drink.",
        "why": "The hanging cactus and young Philodendron dry differently from the water-storing Crassula and Zamioculcas.",
        "doneWhen": "All five root balls have been checked and any surplus water emptied.",
        "steps": [
          "Feel below the surface and lift each accessible inner pot.",
          "Water only the specimens whose compost has reached their stated drying point.",
          "Let runoff finish and return each pot to its marked position."
        ],
        "guide": "check",
        "sources": [
          "oct-house-rhipsalis",
          "oct-house-dracaena",
          "oct-house-crassula",
          "oct-house-philodendron",
          "oct-house-zamioculcas"
        ],
        "plantNotes": {
          "house-sitting-rhipsalis": "Let the surface begin to dry, then water and drain; avoid prolonged drought.",
          "house-sitting-dracaena-bicolour": "Allow the upper compost to dry before soaking and draining; use rainwater where possible.",
          "house-landing-crassula-hottentot": "Let compost dry between soakings; water sparingly through winter.",
          "house-kitchen-philodendron": "Water once the upper compost begins to dry and let excess drain completely.",
          "house-landing-zamioculcas": "Allow the whole root ball to dry before watering; reduce checks into winter."
        }
      }
    ]
  },
  "August": {
    "theme": "Make the second structural cuts, harvest regularly and keep the late display productive.",
    "jobs": [
      {
        "scope": "plant",
        "zoneKeys": [
          "bed5"
        ],
        "plantIds": [
          "bed5-wisteria"
        ],
        "steps": [
          "Identify the permanent tied-in framework.",
          "Follow each long new side shoot back to its origin.",
          "Cut after the fifth or sixth leaf and remove unwanted basal shoots."
        ],
        "id": "aug-prune-wisteria",
        "priority": "first",
        "category": "prune",
        "title": "Make the summer wisteria prune",
        "timing": "July or August, once the long whippy growth is obvious.",
        "summary": "Shorten this year’s side shoots to about five or six leaves from the permanent framework.",
        "why": "The summer cut controls the climber and starts forming the short spurs refined again in winter.",
        "doneWhen": "The main framework is visible again and no long whip blocks access or gutters.",
        "caution": "Keep useful shoots needed to extend the permanent framework.",
        "guide": "prune",
        "sources": [
          "wisteria",
          "shrubs",
          "plant-bed5-wisteria"
        ],
        "plantNotes": {},
        "diagram": "wisteria-summer"
      },
      {
        "scope": "plant",
        "zoneKeys": [
          "bed1"
        ],
        "plantIds": [
          "bed1-box-hedging"
        ],
        "steps": [
          "Inspect inside the hedge first.",
          "Follow the established sides and top with shallow cuts.",
          "Collect clippings from the plant and soil surface."
        ],
        "id": "aug-clip-box",
        "priority": "first",
        "category": "prune",
        "title": "Give the box hedge its main shaping clip",
        "timing": "A dry, overcast day after checking for nests and caterpillars.",
        "summary": "Restore the existing outline with clean shears and collect every clipping.",
        "why": "A late-summer clip holds the shape without encouraging a large flush of soft autumn growth.",
        "doneWhen": "The outline is even, the interior remains leafy and no clipping debris is trapped.",
        "caution": "Do not clip wet foliage, in strong sun or around an active nest.",
        "guide": "prune",
        "sources": [
          "shrubs",
          "plant-bed1-box-hedging"
        ],
        "plantNotes": {}
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed4",
          "pear",
          "frontApple",
          "frontGateTree"
        ],
        "plantIds": [
          "bed4-apple-tree",
          "stone-pear-tree",
          "frontApple-apple-tree",
          "frontApple-damson-tree",
          "frontGateTree-weeping-crab-apple"
        ],
        "steps": [
          "Lift and gently twist apples and pears rather than pulling.",
          "Taste-test damsons as colour deepens and flesh softens.",
          "Remove damaged or rotting fruit promptly."
        ],
        "id": "aug-harvest-fruit",
        "priority": "month",
        "category": "check",
        "title": "Check and record ripening fruit",
        "timing": "Every few days as colour, softness and flavour develop.",
        "summary": "Harvest ripe apples, pears and damsons in batches and record timing; leave ornamental crab apples for display and wildlife unless needed.",
        "why": "Frequent checks catch fruit at its best and create a useful Oak Lodge harvest record.",
        "doneWhen": "Ripe fruit is gathered, damaged fruit is cleared and harvest dates are noted.",
        "guide": "harvest",
        "sources": [
          "month-august",
          "plant-bed4-apple-tree",
          "plant-stone-pear-tree",
          "plant-frontApple-apple-tree",
          "plant-frontApple-damson-tree",
          "plant-frontGateTree-weeping-crab-apple"
        ],
        "plantNotes": {
          "bed4-apple-tree": "Test a fruit with a gentle lift and twist; pick only when it releases readily. Separate bruised fruit for prompt use and label sound fruit by tree.",
          "stone-pear-tree": "Pick once mature and lifting easily, while still firm; pears usually finish ripening indoors. Do not wait until every fruit is soft on the tree.",
          "frontApple-apple-tree": "Test a fruit with a gentle lift and twist; pick only when it releases readily. Separate bruised fruit for prompt use and label sound fruit by tree.",
          "frontApple-damson-tree": "Judge ripe damsons by deep colour and slight softness, then taste-test. Pick without wrenching the fruiting wood; use bruised fruit promptly.",
          "frontGateTree-weeping-crab-apple": "Leave ornamental fruit for display and wildlife unless wanted for a specific use. Clear rotten windfalls from access routes."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "bed2",
          "bed4",
          "bed5",
          "frontBed3",
          "frontBed4",
          "frontBed5"
        ],
        "plantIds": [
          "bed1-dahlia",
          "bed1-dahlia-yellow",
          "bed2-avens",
          "bed4-gaillardia",
          "bed5-rose",
          "frontBed3-rose-pink",
          "frontBed4-the-pilgrim",
          "frontBed4-the-generous-gardener",
          "frontBed4-dahlia-tampico",
          "frontBed4-verbena-margarets-memory",
          "frontBed5-gaura-gaudi-red",
          "frontBed5-salvia-salgoon-lake-blueberry"
        ],
        "steps": [
          "Work systematically by bed.",
          "Cut spent stems to leaves, side buds or the basal clump.",
          "Leave purposeful seedheads rather than simply missing them."
        ],
        "id": "aug-deadhead-repeaters",
        "priority": "month",
        "category": "deadhead",
        "title": "Keep repeat-flowering plants moving",
        "timing": "Once or twice weekly in warm weather.",
        "summary": "Remove faded flowers to the correct joint and shorten only tired, bare-ended growth.",
        "why": "Consistent late-summer deadheading supports a final flush without a hard cut.",
        "doneWhen": "Fresh buds are visible and no large patch is dominated by spent flowers.",
        "guide": "deadhead",
        "sources": [
          "deadhead",
          "plant-bed1-dahlia",
          "plant-bed1-dahlia-yellow",
          "plant-bed2-avens",
          "plant-bed4-gaillardia",
          "plant-bed5-rose",
          "plant-frontBed3-rose-pink",
          "plant-frontBed4-the-pilgrim",
          "plant-frontBed4-the-generous-gardener",
          "plant-frontBed4-dahlia-tampico",
          "plant-frontBed4-verbena-margarets-memory",
          "plant-frontBed5-gaura-gaudi-red",
          "plant-frontBed5-salvia-salgoon-lake-blueberry"
        ],
        "plantNotes": {
          "bed1-dahlia": "A spent dahlia head becomes pointed; a fresh bud is round. Follow the old flower stalk down to a branching leaf joint and cut there, keeping new buds.",
          "bed1-dahlia-yellow": "A spent dahlia head becomes pointed; a fresh bud is round. Follow the old flower stalk down to a branching leaf joint and cut there, keeping new buds.",
          "bed2-avens": "Snip finished Geum flower stalks down to leafy growth or the basal clump; keep the low rosette.",
          "bed4-gaillardia": "Follow a faded daisy down to the next leafy shoot. Keep the basal crown open and avoid a hard cut through new buds.",
          "bed5-rose": "Remove the entire finished flower or cluster to a sound leaf or side shoot. Retain selected hips if wanted; do not cut through a long main cane.",
          "frontBed3-rose-pink": "Remove the entire finished flower or cluster to a sound leaf or side shoot. Retain selected hips if wanted; do not cut through a long main cane.",
          "frontBed4-the-pilgrim": "Remove the entire finished flower or cluster to a sound leaf or side shoot. Retain selected hips if wanted; do not cut through a long main cane.",
          "frontBed4-the-generous-gardener": "Remove the entire finished flower or cluster to a sound leaf or side shoot. Retain selected hips if wanted; do not cut through a long main cane.",
          "frontBed4-dahlia-tampico": "A spent dahlia head becomes pointed; a fresh bud is round. Follow the old flower stalk down to a branching leaf joint and cut there, keeping new buds.",
          "frontBed4-verbena-margarets-memory": "Snip faded flower clusters above a leaf or side shoot. Trim only leggy leafy tips; this does not mean cutting the whole plant down.",
          "frontBed5-gaura-gaudi-red": "Shorten an exhausted flowering stem to a fresh side shoot. Do not cut the entire airy plant down in summer.",
          "frontBed5-salvia-salgoon-lake-blueberry": "Cut each finished spike just above a leafy side shoot. Preserve fresh flowers and keep the old framework through winter."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "frontBed4"
        ],
        "plantIds": [
          "bed4-achillea"
        ],
        "steps": [
          "Keep any seedhead deliberately wanted for structure.",
          "Cut remaining flowered stems close to the basal clump.",
          "Remove soft or diseased debris from the crown."
        ],
        "id": "aug-cut-achillea-nepeta",
        "priority": "month",
        "category": "deadhead",
        "title": "Cut tired Front Bed 4 achillea growth back",
        "timing": "After the main flower heads have faded.",
        "summary": "Remove flowered stems to the basal foliage and clear weak collapsed growth.",
        "why": "A tidy cut helps the recently moved clump settle without smothering its new neighbours.",
        "doneWhen": "The basal foliage is visible and no collapsed stems smother neighbours.",
        "guide": "clear",
        "sources": [
          "deadhead",
          "plant-bed4-achillea"
        ],
        "plantNotes": {
          "bed4-achillea": "Keep firm dry seedheads if wanted. Cut only collapsed or unwanted flower stems down to the leafy base, preserving fresh basal growth."
        }
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "littlepot1"
        ],
        "plantIds": [
          "littlepot1-hellebore-ice-n-roses-bennotta"
        ],
        "steps": [
          "Remove fallen debris without cutting healthy evergreen leaves.",
          "Check moisture beneath the surface during heat and keep drainage open.",
          "Plan a larger pot only if the root ball has genuinely filled this one."
        ],
        "id": "aug-littlepot1-reviewed",
        "priority": "ongoing",
        "category": "check",
        "potKey": "littlepot1",
        "title": "Check the established Hellebore pot",
        "timing": "Before autumn planting or when reviewing the pot.",
        "summary": "Keep the existing Hellebore roots shaded and the crown clear; there is no routine need to empty its pot.",
        "why": "The plant’s crown needs air and drainage before the wetter months arrive.",
        "doneWhen": "The pot is clean, freely draining and ready for the Hellebore.",
        "guide": "check",
        "sources": [
          "month-august",
          "plant-littlepot1-hellebore-ice-n-roses-bennotta"
        ],
        "plantNotes": {}
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "littlepot2"
        ],
        "plantIds": [
          "wallpot2-coreopsis-gold"
        ],
        "steps": [
          "Remove finished flowers to a leafy joint.",
          "Leave unopened buds and strong fresh stems.",
          "If the whole mound becomes sparse, shorten it evenly and clear the pot surface."
        ],
        "id": "aug-littlepot2",
        "priority": "ongoing",
        "category": "deadhead",
        "potKey": "littlepot2",
        "title": "Keep the moved Coreopsis flowering in Little Pot 2",
        "timing": "Deadhead weekly; make a broader cut only when the first display becomes sparse.",
        "summary": "Remove spent stems to leaves and shorten a tired mound by up to half for a fresh flush.",
        "why": "The newly moved perennial already has a full flowering crown, so selective cutting keeps it compact without stripping every bud.",
        "doneWhen": "A compact leafy mound remains with active buds or fresh regrowth.",
        "guide": "clear",
        "sources": [
          "deadhead",
          "plant-wallpot2-coreopsis-gold"
        ],
        "plantNotes": {}
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "wallpot2"
        ],
        "plantIds": [
          "wallpot2-echinacea-mooodz-glory"
        ],
        "steps": [
          "Wait until the white rays are fully faded.",
          "Trace the stem to healthy leaves or a side bud.",
          "Leave only firm well-shaped cones deliberately."
        ],
        "id": "aug-wallpot2",
        "priority": "ongoing",
        "category": "deadhead",
        "potKey": "wallpot2",
        "title": "Deadhead the new Echinacea pot selectively",
        "timing": "As individual white flowers fade.",
        "summary": "Cut finished stems to a leafy joint while retaining fresh buds and a few sound cones later in the season.",
        "why": "Mooodz Glory can continue flowering into autumn, while selected cones can provide winter structure.",
        "doneWhen": "Fresh flowers and buds remain visible and every retained cone is intentional.",
        "guide": "deadhead",
        "sources": [
          "deadhead",
          "plant-wallpot2-echinacea-mooodz-glory"
        ],
        "plantNotes": {}
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "cercispot"
        ],
        "plantIds": [
          "cercispot-cercis-carolina-sweetheart"
        ],
        "steps": [
          "Test that the container stands firmly in its corner.",
          "Make sure each tie leaves room for the trunk to thicken.",
          "Check the variegated leaves for fresh wind or sun scorch."
        ],
        "id": "aug-cercispot-establish",
        "priority": "first",
        "category": "check",
        "potKey": "cercispot",
        "title": "Settle the new Cercis Pot",
        "timing": "Check every few days through its first warm month.",
        "summary": "Confirm the young tree is stable, its stake and ties are safe, and the pale leaf margins remain unscorched.",
        "why": "A newly positioned standard is vulnerable to rocking, constriction and sudden exposure while its crown adjusts.",
        "doneWhen": "The tree stands securely, leaves remain firm and no tie rubs or constricts the trunk.",
        "guide": "check",
        "sources": [
          "month-august",
          "plant-cercispot-cercis-carolina-sweetheart"
        ],
        "plantNotes": {}
      },
      {
        "scope": "plant",
        "zoneKeys": [
          "frontBed2"
        ],
        "plantIds": [
          "frontBed2-coprosma-city-knights"
        ],
        "steps": [
          "Press loose soil gently around the edge of the original root ball.",
          "Keep mulch and fallen leaves away from the stem base.",
          "Check new growth for wind scorch or physical damage."
        ],
        "id": "aug-frontbed2-city-knights",
        "priority": "first",
        "category": "check",
        "title": "Establish Coprosma City Knights",
        "timing": "Through the first month after planting.",
        "summary": "Check that the new shrub remains firm in the soil and that mulch stays clear of its stem base.",
        "why": "A newly planted nursery root ball can rock or settle below the surrounding bed before new roots anchor it.",
        "doneWhen": "The shrub is firmly anchored, its stem base is clear and new foliage remains glossy.",
        "guide": "check",
        "sources": [
          "month-august",
          "plant-frontBed2-coprosma-city-knights"
        ],
        "plantNotes": {}
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "frontBed4",
          "frontBed5"
        ],
        "plantIds": [
          "frontBed4-physocarpus-cluster-1",
          "frontBed4-physocarpus-cluster-2",
          "frontBed4-azalea-silvester",
          "frontBed4-purple-gem",
          "frontBed4-rhododendron-libretto",
          "frontBed4-azalea-lotte",
          "lobeliapot-nemesia-lady-penelope",
          "frontBed5-fern-jurassic-gold"
        ],
        "steps": [
          "Check moisture inside each original root ball, not only in the surrounding soil.",
          "Firm any plant that rocks and keep mulch away from stems and crowns.",
          "Use collected rain for the Rhododendrons and Azaleas where practical, and confirm every dropper reaches its intended root ball."
        ],
        "id": "aug-front-physocarpus-and-libretto",
        "priority": "first",
        "category": "check",
        "title": "Settle the revised front-garden planting",
        "timing": "Check every few days through the first month after planting and moving.",
        "summary": "Keep each original root ball evenly moist, keep stems clear and confirm the two mixed Physocarpus clusters remain distinct.",
        "why": "New and moved plants can look settled while their compact nursery root balls remain dry beneath the surface.",
        "doneWhen": "Every plant is firm, leaves remain resilient and both three-plant Physocarpus clusters are legible.",
        "guide": "check",
        "sources": [
          "month-august",
          "plant-frontBed4-physocarpus-cluster-1",
          "plant-frontBed4-physocarpus-cluster-2",
          "plant-frontBed4-azalea-silvester",
          "plant-frontBed4-purple-gem",
          "plant-frontBed4-rhododendron-libretto",
          "plant-frontBed4-azalea-lotte",
          "plant-lobeliapot-nemesia-lady-penelope",
          "plant-frontBed5-fern-jurassic-gold"
        ],
        "plantNotes": {
          "frontBed4-physocarpus-cluster-1": "Check the original root ball for moisture and rocking, keeping stems and crowns clear. Leave recently planted shrubs to establish rather than pruning for shape.",
          "frontBed4-physocarpus-cluster-2": "Check the original root ball for moisture and rocking, keeping stems and crowns clear. Leave recently planted shrubs to establish rather than pruning for shape.",
          "frontBed4-azalea-silvester": "Check the original root ball for moisture and rocking, keeping stems and crowns clear. Leave recently planted shrubs to establish rather than pruning for shape.",
          "frontBed4-purple-gem": "Check the original root ball for moisture and rocking, keeping stems and crowns clear. Leave recently planted shrubs to establish rather than pruning for shape.",
          "frontBed4-rhododendron-libretto": "Check the original root ball for moisture and rocking, keeping stems and crowns clear. Leave recently planted shrubs to establish rather than pruning for shape.",
          "frontBed4-azalea-lotte": "Check the original root ball for moisture and rocking, keeping stems and crowns clear. Leave recently planted shrubs to establish rather than pruning for shape.",
          "lobeliapot-nemesia-lady-penelope": "Check the original root ball for moisture and rocking, keeping stems and crowns clear. Leave recently planted shrubs to establish rather than pruning for shape.",
          "frontBed5-fern-jurassic-gold": "Check the original root ball for moisture and rocking, keeping stems and crowns clear. Leave recently planted shrubs to establish rather than pruning for shape."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "bed2",
          "bed4",
          "frontBed4"
        ],
        "plantIds": [
          "bed1-dahlia",
          "bed1-dahlia-yellow",
          "bed2-peony",
          "bed4-apple-tree",
          "frontBed4-the-pilgrim",
          "frontBed4-the-generous-gardener"
        ],
        "steps": [
          "Test every tie with a finger’s width of space.",
          "Add support only where stems are genuinely leaning.",
          "Bag or otherwise remove diseased material from the garden."
        ],
        "id": "aug-support-and-disease",
        "priority": "ongoing",
        "category": "check",
        "title": "Check supports and remove diseased material",
        "timing": "After wind, heavy flowers or humid spells.",
        "summary": "Loosen tight ties, support leaning stems and remove clearly diseased leaves or fruit.",
        "why": "Late-summer growth is heavy and dense; small corrections improve air movement and prevent breakage.",
        "doneWhen": "Stems are secure, ties are loose enough and active disease is not left among plants.",
        "guide": "check",
        "sources": [
          "month-august",
          "plant-bed1-dahlia",
          "plant-bed1-dahlia-yellow",
          "plant-bed2-peony",
          "plant-bed4-apple-tree",
          "plant-frontBed4-the-pilgrim",
          "plant-frontBed4-the-generous-gardener"
        ],
        "plantNotes": {
          "bed1-dahlia": "Loosen tight ties and remove clearly diseased leaves or fruit, keeping sound growth and flowers.",
          "bed1-dahlia-yellow": "Loosen tight ties and remove clearly diseased leaves or fruit, keeping sound growth and flowers.",
          "bed2-peony": "Loosen tight ties and remove clearly diseased leaves or fruit, keeping sound growth and flowers.",
          "bed4-apple-tree": "Loosen tight ties and remove clearly diseased leaves or fruit, keeping sound growth and flowers.",
          "frontBed4-the-pilgrim": "Loosen tight ties and remove clearly diseased leaves or fruit, keeping sound growth and flowers.",
          "frontBed4-the-generous-gardener": "Loosen tight ties and remove clearly diseased leaves or fruit, keeping sound growth and flowers."
        }
      }
    ],
    "highlights": [
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1"
        ],
        "plantIds": [],
        "id": "aug-bed1-dahlias",
        "title": "The Bed 1 dahlias reach their peak",
        "note": "Lilac and gold flowers carry the strongest back-garden contrast of the month."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "stone"
        ],
        "plantIds": [],
        "id": "aug-stone-grass",
        "title": "The Stone Bed gains movement",
        "note": "Purple fountain grass plumes rise above the low rosettes and stonecrops."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed4",
          "pear",
          "frontApple",
          "frontGateTree"
        ],
        "plantIds": [],
        "id": "aug-fruit",
        "title": "Fruit becomes part of the garden view",
        "note": "Apples, pears, damsons and crab apples begin to colour across Oak Lodge."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "frontBed4",
          "frontBed5"
        ],
        "plantIds": [
          "frontBed4-physocarpus-cluster-1",
          "frontBed4-physocarpus-cluster-2",
          "frontBed4-azalea-silvester",
          "frontBed4-azalea-lotte",
          "frontBed5-fern-jurassic-gold"
        ],
        "id": "aug-front5",
        "title": "The front garden reshapes its dark foliage",
        "note": "Two mixed Physocarpus clusters remain in Front Bed 4, joined by Silvester and Lotte Azaleas, while Jurassic Gold fern replaces the failed Little Devil in Front Bed 5."
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "lobeliapot"
        ],
        "plantIds": [
          "lobeliapot-skimmia-cleopatra"
        ],
        "id": "aug-skimmia-pot",
        "title": "The blue pot becomes the Skimmia Pot",
        "note": "Skimmia Cleopatra and Yellow Ripple ivy replaced the moved Nemesia in the renamed pot; the ivy later moved into a hanging basket.",
        "potKey": "lobeliapot"
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "frontBed2"
        ],
        "plantIds": [],
        "id": "aug-frontbed2-city-knights-highlight",
        "title": "City Knights deepens Front Bed 2",
        "note": "A third Coprosma adds glossy burgundy-red foliage to the small front-door bed."
      }
    ],
    "indoorJobs": [
      {
        "id": "aug-birthday-houseplants-moisture-2026",
        "scope": "zone",
        "zoneKeys": [
          "houseSittingRhipsalis",
          "houseSittingDracaena",
          "houseLandingCrassula",
          "houseKitchenPhilodendron",
          "houseLandingZamioculcas"
        ],
        "plantIds": [
          "house-sitting-rhipsalis",
          "house-sitting-dracaena-bicolour",
          "house-landing-crassula-hottentot",
          "house-kitchen-philodendron",
          "house-landing-zamioculcas"
        ],
        "priority": "ongoing",
        "category": "check",
        "title": "Check the five birthday houseplants individually",
        "timing": "When inspecting pots; reduce watering as light and growth decline.",
        "summary": "Feel each root ball before deciding whether to water; drain every outer pot after a drink.",
        "why": "The hanging cactus and young Philodendron dry differently from the water-storing Crassula and Zamioculcas.",
        "doneWhen": "All five root balls have been checked and any surplus water emptied.",
        "steps": [
          "Feel below the surface and lift each accessible inner pot.",
          "Water only the specimens whose compost has reached their stated drying point.",
          "Let runoff finish and return each pot to its marked position."
        ],
        "guide": "check",
        "sources": [
          "oct-house-rhipsalis",
          "oct-house-dracaena",
          "oct-house-crassula",
          "oct-house-philodendron",
          "oct-house-zamioculcas"
        ],
        "plantNotes": {
          "house-sitting-rhipsalis": "Let the surface begin to dry, then water and drain; avoid prolonged drought.",
          "house-sitting-dracaena-bicolour": "Allow the upper compost to dry before soaking and draining; use rainwater where possible.",
          "house-landing-crassula-hottentot": "Let compost dry between soakings; water sparingly through winter.",
          "house-kitchen-philodendron": "Water once the upper compost begins to dry and let excess drain completely.",
          "house-landing-zamioculcas": "Allow the whole root ball to dry before watering; reduce checks into winter."
        }
      }
    ]
  },
  "September": {
    "theme": "Harvest, keep late flowers going and prepare a realistic frost plan before cold nights arrive.",
    "jobs": [
      {
        "scope": "zone",
        "zoneKeys": [
          "bed4",
          "pear",
          "frontApple"
        ],
        "plantIds": [
          "bed4-apple-tree",
          "stone-pear-tree",
          "frontApple-apple-tree",
          "frontApple-damson-tree"
        ],
        "steps": [
          "Lift and twist apples and pears to test readiness.",
          "Pick damsons by colour, softness and taste.",
          "Store only sound fruit and use damaged fruit promptly."
        ],
        "id": "sep-harvest-main",
        "priority": "first",
        "category": "check",
        "title": "Complete the main fruit harvest",
        "timing": "Check every few days and act before fruit becomes overripe or damaged.",
        "summary": "Pick ready fruit in batches, separate bruised fruit and record the useful harvest window.",
        "why": "Timely harvesting improves storage and prevents fallen fruit attracting pests or disease.",
        "doneWhen": "Ripe fruit is gathered, windfalls are cleared and dates are recorded.",
        "guide": "harvest",
        "sources": [
          "month-september",
          "plant-bed4-apple-tree",
          "plant-stone-pear-tree",
          "plant-frontApple-apple-tree",
          "plant-frontApple-damson-tree"
        ],
        "plantNotes": {
          "bed4-apple-tree": "Test a fruit with a gentle lift and twist; pick only when it releases readily. Separate bruised fruit for prompt use and label sound fruit by tree.",
          "stone-pear-tree": "Pick once mature and lifting easily, while still firm; pears usually finish ripening indoors. Do not wait until every fruit is soft on the tree.",
          "frontApple-apple-tree": "Test a fruit with a gentle lift and twist; pick only when it releases readily. Separate bruised fruit for prompt use and label sound fruit by tree.",
          "frontApple-damson-tree": "Judge ripe damsons by deep colour and slight softness, then taste-test. Pick without wrenching the fruiting wood; use bruised fruit promptly."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "stone",
          "bed4",
          "frontBed5"
        ],
        "plantIds": [
          "stone-echeveria",
          "stone-echeveria-devotion",
          "stone-pennisetum-rubrum",
          "bed4-callistemon-inferno-yanferno",
          "frontBed5-bluebell-creeper-sollya",
          "frontBed5-salvia-salgoon-lake-blueberry"
        ],
        "steps": [
          "Read the plant-by-plant notes below and check the local forecast.",
          "Arrange a suitable frost-free home with someone else for plants that cannot reliably stay outside, if keeping them is important.",
          "Prepare fleece and drainage for the outdoor plants; mark uncertain plants for identification rather than assuming hardiness."
        ],
        "id": "sep-prepare-tender-plants-reviewed",
        "priority": "first",
        "category": "protect",
        "title": "Make a realistic outdoor frost plan",
        "timing": "Early September, while days are mild and plants are easy to handle.",
        "summary": "Separate plants that can be sheltered outside from those needing bright frost-free accommodation. No frost-free space is assumed here.",
        "why": "Planning early prevents rushed lifting on the evening of the first frost.",
        "doneWhen": "Each vulnerable plant has a practical shelter plan, including an explicit decision for those needing accommodation elsewhere.",
        "sources": [
          "fleece",
          "plant-stone-echeveria",
          "plant-stone-echeveria-devotion",
          "plant-stone-pennisetum-rubrum",
          "plant-bed4-callistemon-inferno-yanferno",
          "plant-frontBed5-bluebell-creeper-sollya",
          "plant-frontBed5-salvia-salgoon-lake-blueberry"
        ],
        "guide": "protect",
        "plantNotes": {
          "stone-echeveria": "Needs a bright frost-free winter home. Outdoor fleece or a rain shelter cannot reliably keep this Echeveria alive through a Bromsgrove winter; arrange accommodation elsewhere if keeping it matters.",
          "stone-echeveria-devotion": "Needs a bright frost-free winter home. Outdoor fleece or a rain shelter cannot reliably keep this Echeveria alive through a Bromsgrove winter; arrange accommodation elsewhere if keeping it matters.",
          "stone-pennisetum-rubrum": "Rubrum is H3, unlike hardy fountain grasses. Keep it drained and sheltered, but frost-free accommodation gives a more dependable winter outcome than outdoor fleece.",
          "bed4-callistemon-inferno-yanferno": "Inferno is borderline outdoors here. Use fleece for brief cold spells, keep drainage open and retain healthy evergreen growth; prolonged freezing may still damage it.",
          "frontBed5-bluebell-creeper-sollya": "Shelter this borderline evergreen climber from cold wind, keeping covers ventilated. A severe winter may exceed what an outdoor wall and fleece can protect against.",
          "frontBed5-salvia-salgoon-lake-blueberry": "Lake Blueberry is H3. Keep some sound top growth and a drained crown. Outdoor protection is uncertain in severe cold; a cutting also needs an arranged frost-free home."
        },
        "caution": "Check the plant-specific limits: fleece reduces exposure but does not make an outdoor position frost-free."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed5",
          "bed2",
          "frontBed5"
        ],
        "plantIds": [
          "bed1-nemesia",
          "bed2-silverbush",
          "frontBed5-salvia-salgoon-lake-blueberry",
          "frontBed5-bluebell-creeper-sollya"
        ],
        "steps": [
          "Confirm where the rooted cuttings will spend winter before removing tips.",
          "Take a few healthy non-flowering tips, remove lower leaves and insert into free-draining cutting compost.",
          "Label plant and date, keep bright but out of scorching sun, and keep rooting compost lightly moist."
        ],
        "id": "sep-take-insurance-cuttings-reviewed",
        "priority": "month",
        "category": "plant",
        "title": "Take tender cuttings only with winter shelter arranged",
        "timing": "While non-flowering tips are healthy; skip unless a suitable winter home is available.",
        "summary": "A cutting is a useful backup only if it can root and then spend winter in suitable frost-free conditions.",
        "why": "A small backup can preserve a favourite only when its rooting and winter accommodation are suitable.",
        "doneWhen": "A few labelled cuttings are rooting in suitable conditions, or the job is deliberately skipped.",
        "leaveAlone": "With outdoor shelter only, tender cuttings are not reliable winter insurance.",
        "guide": "plant",
        "sources": [
          "divide",
          "plant-bed1-nemesia",
          "plant-bed2-silverbush",
          "plant-frontBed5-salvia-salgoon-lake-blueberry",
          "plant-frontBed5-bluebell-creeper-sollya"
        ],
        "plantNotes": {
          "bed1-nemesia": "Take only healthy non-flowering tips if a suitable place to root and overwinter them has been arranged. Label them; outdoor frost protection is not a reliable backup.",
          "bed2-silverbush": "Take only healthy non-flowering tips if a suitable place to root and overwinter them has been arranged. Label them; outdoor frost protection is not a reliable backup.",
          "frontBed5-salvia-salgoon-lake-blueberry": "Take only healthy non-flowering tips if a suitable place to root and overwinter them has been arranged. Label them; outdoor frost protection is not a reliable backup.",
          "frontBed5-bluebell-creeper-sollya": "Take only healthy non-flowering tips if a suitable place to root and overwinter them has been arranged. Label them; outdoor frost protection is not a reliable backup."
        }
      },
      {
        "scope": "plant",
        "zoneKeys": [
          "bed2"
        ],
        "plantIds": [
          "bed2-peony"
        ],
        "steps": [
          "Wait until the foliage has clearly yellowed.",
          "Cut stems near the base without covering the crown.",
          "Remove the foliage rather than leaving it as mulch."
        ],
        "id": "sep-cut-peony",
        "priority": "month",
        "category": "deadhead",
        "title": "Cut down peony foliage when it dies back",
        "timing": "Only after the leaves yellow and collapse naturally.",
        "summary": "Cut all foliage close to ground level and remove it from the bed.",
        "why": "The dying foliage has finished feeding the crown; clearing it reduces overwintering disease material.",
        "doneWhen": "The crown area is clean, visible and free of old peony foliage.",
        "guide": "clear",
        "sources": [
          "deadhead",
          "plant-bed2-peony"
        ],
        "plantNotes": {
          "bed2-peony": "Cut fully yellowed or dead stems just above soil level, sparing red buds. Do not cover the crown with old foliage or a deep layer of compost."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed3",
          "frontBed4",
          "frontBed2",
          "frontBed5"
        ],
        "plantIds": [
          "bed2-centaurea-snowy-owl",
          "bed4-achillea",
          "frontBed2-polemonium-golden-feathers",
          "frontBed4-astrantia-trio",
          "frontBed5-gaura-gaudi-red"
        ],
        "steps": [
          "Identify seedheads worth keeping for structure.",
          "Remove unwanted seed before it drops.",
          "Cut collapsed stems to healthy basal growth."
        ],
        "id": "sep-manage-seedheads",
        "priority": "month",
        "category": "deadhead",
        "title": "Choose what may seed and what should be cleared",
        "timing": "Before unwanted seed drops widely.",
        "summary": "Keep attractive or wildlife-useful seedheads deliberately and remove invasive or untidy spreaders.",
        "why": "A conscious choice preserves winter structure without allowing every plant to seed through crowded beds.",
        "doneWhen": "Every remaining seedhead is there by choice and unwanted seed is removed.",
        "guide": "clear",
        "sources": [
          "deadhead",
          "plant-bed2-centaurea-snowy-owl",
          "plant-bed4-achillea",
          "plant-frontBed2-polemonium-golden-feathers",
          "plant-frontBed4-astrantia-trio",
          "plant-frontBed5-gaura-gaudi-red"
        ],
        "plantNotes": {
          "bed2-centaurea-snowy-owl": "Clear fully dead stems around the crown while protecting fresh basal buds. Do not dig up a late-emerging dormant clump.",
          "bed4-achillea": "Keep firm dry seedheads if wanted. Cut only collapsed or unwanted flower stems down to the leafy base, preserving fresh basal growth.",
          "frontBed2-polemonium-golden-feathers": "Remove dead stems and leaves individually; keep the healthy basal rosette rather than cutting the entire clump bare.",
          "frontBed4-astrantia-trio": "Clear fully dead stems around the crown while protecting fresh basal buds. Do not dig up a late-emerging dormant clump.",
          "frontBed5-gaura-gaudi-red": "Wait for frost risk to ease and living growth to show. Remove dead stems back to healthy buds; a quiet March crown is not proof that the plant has died."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "bed2",
          "bed4",
          "frontBed2",
          "frontBed4",
          "frontBed5"
        ],
        "plantIds": [
          "bed1-japanese-maple",
          "bed2-silverbush",
          "bed4-callistemon-inferno-yanferno",
          "frontBed2-coprosma-inferno",
          "frontBed2-coprosma-pina-colada",
          "frontBed2-coprosma-city-knights",
          "frontBed4-photinia-existing",
          "frontBed5-pittosporum-tom-thumb",
          "frontBed5-hebe-rhubarb-and-custard"
        ],
        "steps": [
          "Remove recurring feed reminders for these beds.",
          "Do not add high-nitrogen fertiliser during autumn clearing.",
          "Let current shoots mature naturally."
        ],
        "id": "sep-stop-late-feed",
        "priority": "month",
        "category": "mulch",
        "title": "Stop feeding woody and frost-sensitive plants",
        "timing": "From early September as growth begins to slow.",
        "summary": "End routine feeding so new shoots can firm up before winter.",
        "why": "Late nutrient-rich growth stays soft and is more vulnerable to cold and wind.",
        "doneWhen": "No late feed is scheduled for woody or frost-sensitive plants.",
        "guide": "feed",
        "sources": [
          "month-september",
          "plant-bed1-japanese-maple",
          "plant-bed2-silverbush",
          "plant-bed4-callistemon-inferno-yanferno",
          "plant-frontBed2-coprosma-inferno",
          "plant-frontBed2-coprosma-pina-colada",
          "plant-frontBed2-coprosma-city-knights",
          "plant-frontBed4-photinia-existing",
          "plant-frontBed5-pittosporum-tom-thumb",
          "plant-frontBed5-hebe-rhubarb-and-custard"
        ],
        "plantNotes": {
          "bed1-japanese-maple": "Stop routine nitrogen-rich feeding as growth slows. Let this woody or frost-sensitive plant’s existing shoots mature naturally.",
          "bed2-silverbush": "Stop routine nitrogen-rich feeding as growth slows. Let this woody or frost-sensitive plant’s existing shoots mature naturally.",
          "bed4-callistemon-inferno-yanferno": "Stop routine nitrogen-rich feeding as growth slows. Let this woody or frost-sensitive plant’s existing shoots mature naturally.",
          "frontBed2-coprosma-inferno": "Stop routine nitrogen-rich feeding as growth slows. Let this woody or frost-sensitive plant’s existing shoots mature naturally.",
          "frontBed2-coprosma-pina-colada": "Stop routine nitrogen-rich feeding as growth slows. Let this woody or frost-sensitive plant’s existing shoots mature naturally.",
          "frontBed2-coprosma-city-knights": "Stop routine nitrogen-rich feeding as growth slows. Let this woody or frost-sensitive plant’s existing shoots mature naturally.",
          "frontBed4-photinia-existing": "Stop routine nitrogen-rich feeding as growth slows. Let this woody or frost-sensitive plant’s existing shoots mature naturally.",
          "frontBed5-pittosporum-tom-thumb": "Stop routine nitrogen-rich feeding as growth slows. Let this woody or frost-sensitive plant’s existing shoots mature naturally.",
          "frontBed5-hebe-rhubarb-and-custard": "Stop routine nitrogen-rich feeding as growth slows. Let this woody or frost-sensitive plant’s existing shoots mature naturally."
        }
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "cercispot"
        ],
        "plantIds": [
          "cercispot-cercis-carolina-sweetheart"
        ],
        "steps": [
          "Remove the Cercis from recurring feed reminders.",
          "Do not add high-nitrogen fertiliser during autumn.",
          "Let the current shoots mature naturally."
        ],
        "id": "sep-cercispot-stop-feed",
        "priority": "month",
        "category": "mulch",
        "potKey": "cercispot",
        "title": "Stop feeding the Cercis Pot",
        "timing": "From early September as extension growth slows.",
        "summary": "End routine feeding so the young tree's new shoots can firm before winter.",
        "why": "Late nutrient-rich growth remains soft and more vulnerable to cold and wind.",
        "doneWhen": "No late feed is scheduled for the Cercis Pot.",
        "guide": "feed",
        "sources": [
          "month-september",
          "plant-cercispot-cercis-carolina-sweetheart"
        ],
        "plantNotes": {}
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "bigpot1"
        ],
        "plantIds": [
          "bigpot1-fuchsia",
          "bigpot1-verbena",
          "bigpot1-calibrachoa",
          "bigpot1-nepeta",
          "bigpot1-lobelia",
          "bigpot1-petunia"
        ],
        "steps": [
          "Identify and label the Fuchsia and Nepeta crowns to retain.",
          "Inspect the seasonal trailers; leave flowering, healthy plants in place for now.",
          "Only take tender cuttings if frost-free accommodation has been arranged; plan selective removal of plants that fail."
        ],
        "id": "sep-bigpot1-decision-reviewed",
        "priority": "ongoing",
        "category": "refresh",
        "potKey": "bigpot1",
        "title": "Decide the winter plan for Big Pot 1",
        "timing": "Before the first frost warning.",
        "summary": "Keep the hardy Fuchsia and Nepeta. Keep healthy seasonal flowers until they finish; decide before frost whether any tender favourites can be housed elsewhere.",
        "why": "The mixed pot contains plants with different winter outcomes, but it needs one coordinated container plan.",
        "doneWhen": "Every component has a clear keep, cut back, lift or compost decision.",
        "keep": "Fuchsia, Nepeta and all seasonal plants still flowering well.",
        "remove": "Nothing healthy just because September has arrived.",
        "guide": "refresh",
        "sources": [
          "month-september",
          "plant-bigpot1-fuchsia",
          "plant-bigpot1-verbena",
          "plant-bigpot1-calibrachoa",
          "plant-bigpot1-nepeta",
          "plant-bigpot1-lobelia",
          "plant-bigpot1-petunia"
        ],
        "plantNotes": {
          "bigpot1-fuchsia": "Retain Mrs Popple as the perennial centre. Keep its crown clear and protect the container roots in severe cold; do not empty the pot around its living root ball.",
          "bigpot1-verbena": "Retain a healthy trailer. Replace only a failed plant, after spring frost risk has passed for summer bedding; keeping tender plants through winter needs suitable shelter elsewhere.",
          "bigpot1-calibrachoa": "Retain a healthy trailer. Replace only a failed plant, after spring frost risk has passed for summer bedding; keeping tender plants through winter needs suitable shelter elsewhere.",
          "bigpot1-nepeta": "Keep the hardy catmint crown. Trim only tired growth and make room for it without pulling the Fuchsia’s shared roots.",
          "bigpot1-lobelia": "Retain a healthy trailer. Replace only a failed plant, after spring frost risk has passed for summer bedding; keeping tender plants through winter needs suitable shelter elsewhere.",
          "bigpot1-petunia": "Retain a healthy trailer. Replace only a failed plant, after spring frost risk has passed for summer bedding; keeping tender plants through winter needs suitable shelter elsewhere."
        }
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "bigpot2"
        ],
        "plantIds": [
          "bigpot2-lobelia",
          "bigpot2-verbena",
          "bigpot2-petunia",
          "bigpot2-nepeta",
          "bigpot2-fuchsia"
        ],
        "steps": [
          "Identify and label the Fuchsia and Nepeta crowns to retain.",
          "Inspect the seasonal trailers; leave flowering, healthy plants in place for now.",
          "Only take tender cuttings if frost-free accommodation has been arranged; plan selective removal of plants that fail."
        ],
        "id": "sep-bigpot2-decision-reviewed",
        "priority": "ongoing",
        "category": "refresh",
        "potKey": "bigpot2",
        "title": "Decide the winter plan for Big Pot 2",
        "timing": "Before the first frost warning.",
        "summary": "Keep the hardy Fuchsia and Nepeta. Keep healthy seasonal flowers until they finish; decide before frost whether any tender favourites can be housed elsewhere.",
        "why": "A single container decision prevents tender and hardy material being treated identically by mistake.",
        "doneWhen": "The pot has one written winter plan covering every component.",
        "keep": "Fuchsia, Nepeta and all seasonal plants still flowering well.",
        "remove": "Nothing healthy just because September has arrived.",
        "guide": "refresh",
        "sources": [
          "month-september",
          "plant-bigpot2-lobelia",
          "plant-bigpot2-verbena",
          "plant-bigpot2-petunia",
          "plant-bigpot2-nepeta",
          "plant-bigpot2-fuchsia"
        ],
        "plantNotes": {
          "bigpot2-lobelia": "Retain a healthy trailer. Replace only a failed plant, after spring frost risk has passed for summer bedding; keeping tender plants through winter needs suitable shelter elsewhere.",
          "bigpot2-verbena": "Retain a healthy trailer. Replace only a failed plant, after spring frost risk has passed for summer bedding; keeping tender plants through winter needs suitable shelter elsewhere.",
          "bigpot2-petunia": "Retain a healthy trailer. Replace only a failed plant, after spring frost risk has passed for summer bedding; keeping tender plants through winter needs suitable shelter elsewhere.",
          "bigpot2-nepeta": "Keep the hardy catmint crown. Trim only tired growth and make room for it without pulling the Fuchsia’s shared roots.",
          "bigpot2-fuchsia": "Retain Mrs Popple as the perennial centre. Keep its crown clear and protect the container roots in severe cold; do not empty the pot around its living root ball."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "bed2",
          "bed4",
          "frontBed1",
          "frontBed3",
          "frontBed4",
          "frontApple",
          "frontGateTree"
        ],
        "plantIds": [],
        "steps": [
          "Separate clearly diseased leaves and fruit.",
          "Clear material packed against crowns and trunks.",
          "Leave clean standing stems and useful habitat deliberately."
        ],
        "id": "sep-clear-diseased-fall",
        "priority": "ongoing",
        "category": "check",
        "title": "Begin the autumn hygiene round",
        "timing": "As leaves, fruit and petals begin falling regularly.",
        "summary": "Remove diseased foliage, mummified fruit and dense wet debris while leaving healthy material where it is useful.",
        "why": "Targeted hygiene reduces disease carry-over without stripping the garden of all shelter and structure.",
        "doneWhen": "Disease material and smothering debris are gone while healthy structure remains.",
        "guide": "check",
        "sources": [
          "month-september"
        ],
        "plantNotes": {}
      },
      {
        "id": "sep-divide-only-congested",
        "priority": "month",
        "category": "plant",
        "scope": "zone",
        "zoneKeys": [
          "bed3",
          "bed2",
          "frontBed5"
        ],
        "plantIds": [
          "bed2-centaurea-snowy-owl",
          "bed2-avens",
          "frontBed4-astrantia-trio"
        ],
        "title": "Divide established clumps only if overcrowded",
        "timing": "After flowering in moist, workable soil; defer to spring if wet or cold.",
        "summary": "Check for a failing centre or crowding. Recently moved, young or healthy clumps can be left alone.",
        "why": "Give this planting the seasonal attention it needs without disturbing healthy neighbouring plants.",
        "steps": [
          "Prepare the destination before lifting.",
          "Lift only a congested established clump; separate healthy rooted outer pieces.",
          "Replant at the same depth, water in and keep an eye on moisture until rooted."
        ],
        "doneWhen": "Any necessary divisions are replanted and watered in, or healthy clumps are deliberately left intact.",
        "sources": [
          "divide",
          "plant-bed2-centaurea-snowy-owl",
          "plant-bed2-avens",
          "plant-frontBed4-astrantia-trio"
        ],
        "leaveAlone": "Leave the recently moved Astrantia unless established and genuinely congested.",
        "guide": "plant",
        "plantNotes": {
          "bed2-centaurea-snowy-owl": "Divide only an established overcrowded clump. Replant rooted outer pieces immediately and remove spreading roots only where they invade neighbours.",
          "bed2-avens": "Split only a crowded, established Geum with a declining centre. Keep healthy rooted rosettes and replant at the same depth.",
          "frontBed4-astrantia-trio": "These Astrantias are now in Front Bed 5. Leave recently moved plants alone; divide only after establishment if genuinely congested, preserving each cultivar’s label."
        }
      },
      {
        "id": "sep-winter-viola-round",
        "priority": "ongoing",
        "category": "refresh",
        "scope": "zone",
        "zoneKeys": [
          "stairpots",
          "staircans",
          "bed5",
          "lobeliapot",
          "frontBed5"
        ],
        "plantIds": [
          "stairpots-violas-pansies-group",
          "staircans-violas-pansies-group",
          "bed5-big-pot-violas-pansies",
          "lobeliapot-viola-rocky-purple-picotee",
          "frontBed5-viola-rocky-purple-picotee"
        ],
        "title": "Keep the winter Violas and Pansies flowering",
        "timing": "When blooms fade and after heavy rain; skip frozen plants.",
        "summary": "Remove spent flower stems and wet debris, retaining healthy plants for continued colour.",
        "why": "Give this planting the seasonal attention it needs without disturbing healthy neighbouring plants.",
        "steps": [
          "Pinch each finished flower stalk near its base, including the seed capsule.",
          "Clear wet leaves from crowns and check that cans and pots drain.",
          "Replace only failed plants; settle any replacements with water when the compost is unfrozen."
        ],
        "doneWhen": "The named work is complete and healthy growth remains undamaged.",
        "sources": [
          "deadhead",
          "fleece",
          "plant-stairpots-violas-pansies-group",
          "plant-staircans-violas-pansies-group",
          "plant-bed5-big-pot-violas-pansies",
          "plant-lobeliapot-viola-rocky-purple-picotee",
          "plant-frontBed5-viola-rocky-purple-picotee"
        ],
        "guide": "refresh",
        "plantNotes": {
          "stairpots-violas-pansies-group": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed.",
          "staircans-violas-pansies-group": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed.",
          "bed5-big-pot-violas-pansies": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed.",
          "lobeliapot-viola-rocky-purple-picotee": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed.",
          "frontBed5-viola-rocky-purple-picotee": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed."
        }
      },
      {
        "id": "sep-basket3-retain",
        "priority": "month",
        "category": "refresh",
        "scope": "zone",
        "zoneKeys": [
          "basket3"
        ],
        "plantIds": [
          "baskets-lysimachia-unidentified",
          "baskets-chrysanthemum-unidentified",
          "baskets-cyclamen-unidentified",
          "basket3-hedera-pair-unidentified"
        ],
        "title": "Care for Basket 3 without discarding its permanent planting",
        "timing": "As autumn flowers fade and before cold nights.",
        "summary": "Keep healthy Ivy and Lysimachia. Chrysanthemum and Cyclamen hardiness is unresolved, so do not assume the whole basket is winter-hardy.",
        "why": "Give this planting the seasonal attention it needs without disturbing healthy neighbouring plants.",
        "steps": [
          "Remove faded flowers using the plant notes below.",
          "Check the hanger and drainage, and keep the Cyclamen crown clear.",
          "Seek labels for the flowering plants; arrange appropriate frost-free shelter if they prove tender and are to be kept."
        ],
        "doneWhen": "The named work is complete and healthy growth remains undamaged.",
        "leaveAlone": "Do not pinch off Chrysanthemum buds or divide the Cyclamen tuber.",
        "guide": "refresh",
        "sources": [
          "month-september",
          "plant-baskets-lysimachia-unidentified",
          "plant-baskets-chrysanthemum-unidentified",
          "plant-baskets-cyclamen-unidentified",
          "plant-basket3-hedera-pair-unidentified"
        ],
        "plantNotes": {
          "baskets-lysimachia-unidentified": "Keep sound trails and roots. Shorten only shoots smothering companions; the exact Lysimachia is still unidentified.",
          "baskets-chrysanthemum-unidentified": "Remove whole spent heads to leafy growth. Do not pinch unopened autumn buds; florist and garden types differ in hardiness, so confirm before relying on an outdoor winter.",
          "baskets-cyclamen-unidentified": "Gently twist a finished flower stalk away at its base and keep the crown open. Until identified, allow for tender florist Cyclamen: frost-free shelter may be needed.",
          "basket3-hedera-pair-unidentified": "Retain both Ivy plants and trim only encroaching trails. Do not strip them out with the finished flowers."
        }
      }
    ],
    "highlights": [
      {
        "scope": "zone",
        "zoneKeys": [
          "bed4",
          "pear",
          "frontApple"
        ],
        "plantIds": [],
        "id": "sep-harvest",
        "title": "Harvest takes over from blossom",
        "note": "Back and front fruit trees now provide the garden’s main seasonal event."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1"
        ],
        "plantIds": [],
        "id": "sep-bed1-late",
        "title": "Bed 1 keeps flowering late",
        "note": "Dahlias continue beneath the maple; the moved Fuchsia and fern fill out the shaded planting."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "frontBed5"
        ],
        "plantIds": [],
        "id": "sep-front5-late",
        "title": "Front Bed 5 holds a long late display",
        "note": "Ceratostigma blue, warm foliage, salvia and late heathers carry the boundary into autumn."
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "littlepot2"
        ],
        "plantIds": [],
        "id": "sep-stair-pots",
        "title": "Gold and white carry the stair pots into autumn",
        "note": "Coreopsis may give a final yellow flush while the adjacent Mooodz Glory holds white flowers and cones.",
        "potKey": "littlepot2"
      }
    ],
    "indoorJobs": [
      {
        "scope": "plant",
        "zoneKeys": [
          "houseHallKentia"
        ],
        "plantIds": [
          "house-hallway-kentia-palm"
        ],
        "steps": [
          "Record the end of the feeding period.",
          "Wipe dust from the fronds.",
          "Check the position for radiator heat and cold door draughts."
        ],
        "id": "sep-indoor-kentia-autumn",
        "priority": "month",
        "category": "check",
        "title": "Move the Kentia into its autumn routine",
        "timing": "As daylight shortens and active growth slows.",
        "summary": "Stop routine feeding, clean the fronds and make sure the palm is clear of cold draughts and direct heat.",
        "why": "Reduced light means slower growth and less need for feeding, while dry heated air can mark fronds.",
        "doneWhen": "Feeding has stopped and the palm has a bright, stable position away from temperature extremes.",
        "guide": "check",
        "sources": [
          "month-september",
          "plant-house-hallway-kentia-palm"
        ],
        "plantNotes": {}
      },
      {
        "id": "sep-birthday-houseplants-moisture-2026",
        "scope": "zone",
        "zoneKeys": [
          "houseSittingRhipsalis",
          "houseSittingDracaena",
          "houseLandingCrassula",
          "houseKitchenPhilodendron",
          "houseLandingZamioculcas"
        ],
        "plantIds": [
          "house-sitting-rhipsalis",
          "house-sitting-dracaena-bicolour",
          "house-landing-crassula-hottentot",
          "house-kitchen-philodendron",
          "house-landing-zamioculcas"
        ],
        "priority": "ongoing",
        "category": "check",
        "title": "Check the five birthday houseplants individually",
        "timing": "When inspecting pots; reduce watering as light and growth decline.",
        "summary": "Feel each root ball before deciding whether to water; drain every outer pot after a drink.",
        "why": "The hanging cactus and young Philodendron dry differently from the water-storing Crassula and Zamioculcas.",
        "doneWhen": "All five root balls have been checked and any surplus water emptied.",
        "steps": [
          "Feel below the surface and lift each accessible inner pot.",
          "Water only the specimens whose compost has reached their stated drying point.",
          "Let runoff finish and return each pot to its marked position."
        ],
        "guide": "check",
        "sources": [
          "oct-house-rhipsalis",
          "oct-house-dracaena",
          "oct-house-crassula",
          "oct-house-philodendron",
          "oct-house-zamioculcas"
        ],
        "plantNotes": {
          "house-sitting-rhipsalis": "Let the surface begin to dry, then water and drain; avoid prolonged drought.",
          "house-sitting-dracaena-bicolour": "Allow the upper compost to dry before soaking and draining; use rainwater where possible.",
          "house-landing-crassula-hottentot": "Let compost dry between soakings; water sparingly through winter.",
          "house-kitchen-philodendron": "Water once the upper compost begins to dry and let excess drain completely.",
          "house-landing-zamioculcas": "Allow the whole root ball to dry before watering; reduce checks into winter."
        }
      }
    ]
  },
  "October": {
    "theme": "Act before frost: lift the tender plants, clear summer containers and protect vulnerable crowns.",
    "jobs": [
      {
        "scope": "zone",
        "zoneKeys": [
          "stone"
        ],
        "plantIds": [
          "stone-echeveria",
          "stone-echeveria-devotion",
          "stone-pennisetum-rubrum",
          "stone-sedum-chocolate-ball"
        ],
        "steps": [
          "Label the two Echeverias separately from the hardy houseleeks.",
          "If a suitable frost-free home is arranged, pot tender plants carefully in drained compost and move them before cold damage.",
          "If they must remain outdoors, use the warmest sheltered, ventilated position and limit winter wet, understanding that losses remain possible."
        ],
        "id": "oct-lift-stone-tender-reviewed",
        "priority": "first",
        "category": "protect",
        "title": "Find suitable winter homes for the tender Stone Bed plants",
        "timing": "Before the first damaging frost, following forecasts rather than waiting for a fixed October date.",
        "summary": "The Echeverias need bright frost-free accommodation. Rubrum grass and Chocolate Ball stonecrop are less hardy than their neighbours; outdoor shelter is a risk.",
        "why": "These plants differ from the hardy gravel-bed neighbours; keeping them requires a realistic winter temperature and drainage plan.",
        "doneWhen": "Tender specimens have a documented winter choice; hardy houseleeks and stonecrops are undisturbed.",
        "caution": "Handle powdery Echeveria leaves as little as possible and avoid trapping damp around stored crowns.",
        "leaveAlone": "Do not lift all Stone Bed rosettes: Sempervivum are hardy; Echeveria are different.",
        "sources": [
          "fleece",
          "plant-stone-echeveria",
          "plant-stone-echeveria-devotion",
          "plant-stone-pennisetum-rubrum",
          "plant-stone-sedum-chocolate-ball"
        ],
        "guide": "protect",
        "plantNotes": {
          "stone-echeveria": "Needs a bright frost-free winter home. Outdoor fleece or a rain shelter cannot reliably keep this Echeveria alive through a Bromsgrove winter; arrange accommodation elsewhere if keeping it matters.",
          "stone-echeveria-devotion": "Needs a bright frost-free winter home. Outdoor fleece or a rain shelter cannot reliably keep this Echeveria alive through a Bromsgrove winter; arrange accommodation elsewhere if keeping it matters.",
          "stone-pennisetum-rubrum": "Rubrum is H3, unlike hardy fountain grasses. Keep it drained and sheltered, but frost-free accommodation gives a more dependable winter outcome than outdoor fleece.",
          "stone-sedum-chocolate-ball": "Chocolate Ball is H3. Keep its mat free of wet debris and shelter from severe cold; do not assume the hardiness of the neighbouring Sempervivum."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "frontBed4"
        ],
        "plantIds": [
          "bed1-dahlia",
          "bed1-dahlia-yellow",
          "frontBed4-dahlia-tampico"
        ],
        "steps": [
          "Label each clump before the foliage is lost; wait for frost-blackened top growth.",
          "Cut stems to roughly 10–15cm and clear the collapsed foliage.",
          "If keeping in well-drained ground, cover the tuber area with around 15cm of mulch. If the bed stays wet, arrange frost-free storage elsewhere before lifting."
        ],
        "id": "oct-dahlia-after-frost-reviewed",
        "priority": "first",
        "category": "protect",
        "title": "Protect all three dahlias after dieback",
        "timing": "After frost blackens the top growth, not merely after a cool night.",
        "summary": "With outdoor shelter only, leaving tubers in well-drained ground under about 15cm of mulch is a risk-managed option, not guaranteed winter survival.",
        "why": "Correct timing lets the foliage finish its job while preventing tubers being lost to prolonged cold and wet.",
        "doneWhen": "Each labelled clump is protected in drained ground or lifted to an arranged frost-free home.",
        "caution": "A cold or wet Bromsgrove winter can kill tubers left outside. Lifted tubers also need genuinely frost-free storage.",
        "keep": "Firm tubers with their crown attached; label each clump.",
        "sources": [
          "dahlia",
          "plant-bed1-dahlia",
          "plant-bed1-dahlia-yellow",
          "plant-frontBed4-dahlia-tampico"
        ],
        "guide": "protect",
        "plantNotes": {
          "bed1-dahlia": "Tender Dahlia: protect emerged shoots from spring frost. After autumn dieback, an outdoor tuber needs well-drained ground and roughly 15cm mulch, with losses still possible; lifted tubers require frost-free storage.",
          "bed1-dahlia-yellow": "Tender Dahlia: protect emerged shoots from spring frost. After autumn dieback, an outdoor tuber needs well-drained ground and roughly 15cm mulch, with losses still possible; lifted tubers require frost-free storage.",
          "frontBed4-dahlia-tampico": "Tender Dahlia: protect emerged shoots from spring frost. After autumn dieback, an outdoor tuber needs well-drained ground and roughly 15cm mulch, with losses still possible; lifted tubers require frost-free storage."
        },
        "remove": "Only frost-blackened top growth and decayed material; keep sound tubers."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed2",
          "bed4",
          "frontBed2",
          "frontBed5"
        ],
        "plantIds": [
          "bed2-silverbush",
          "bed4-callistemon-inferno-yanferno",
          "frontBed2-coprosma-inferno",
          "frontBed2-coprosma-pina-colada",
          "frontBed2-coprosma-city-knights",
          "frontBed4-flaming-silver",
          "frontBed5-bluebell-creeper-sollya",
          "frontBed5-salvia-salgoon-lake-blueberry"
        ],
        "steps": [
          "Mulch vulnerable root zones with dry, airy material.",
          "Use fleece on forecast cold nights and remove or vent it in milder weather.",
          "Keep wet leaves and mulch away from crowns."
        ],
        "id": "oct-protect-border-tender",
        "priority": "first",
        "category": "protect",
        "title": "Put border frost protection in place",
        "timing": "Before forecast frost or a spell of cold, wet weather.",
        "summary": "Shelter vulnerable tops and crowns while keeping airflow and drainage open.",
        "why": "Many borderline evergreens are damaged more by cold wet and drying wind than by a single light frost.",
        "doneWhen": "Every vulnerable plant is protected without being tightly wrapped or buried.",
        "guide": "protect",
        "sources": [
          "fleece",
          "plant-bed2-silverbush",
          "plant-bed4-callistemon-inferno-yanferno",
          "plant-frontBed2-coprosma-inferno",
          "plant-frontBed2-coprosma-pina-colada",
          "plant-frontBed2-coprosma-city-knights",
          "plant-frontBed4-flaming-silver",
          "plant-frontBed5-bluebell-creeper-sollya",
          "plant-frontBed5-salvia-salgoon-lake-blueberry"
        ],
        "plantNotes": {
          "bed2-silverbush": "Keep the silver foliage and woody framework intact. Prioritise free drainage and a ventilated cover in severe cold; do not pack wet mulch against the crown.",
          "bed4-callistemon-inferno-yanferno": "Inferno is borderline outdoors here. Use fleece for brief cold spells, keep drainage open and retain healthy evergreen growth; prolonged freezing may still damage it.",
          "frontBed2-coprosma-inferno": "Protect from severe frost and drying wind with breathable fleece when needed. Keep stems exposed to air; wait until spring regrowth before judging frost damage.",
          "frontBed2-coprosma-pina-colada": "Protect from severe frost and drying wind with breathable fleece when needed. Keep stems exposed to air; wait until spring regrowth before judging frost damage.",
          "frontBed2-coprosma-city-knights": "Protect from severe frost and drying wind with breathable fleece when needed. Keep stems exposed to air; wait until spring regrowth before judging frost damage.",
          "frontBed4-flaming-silver": "Flaming Silver is a Pieris now in Front Bed 5. Protect vulnerable new shoots from late frost, but do not treat the established evergreen as a tender plant to lift.",
          "frontBed5-bluebell-creeper-sollya": "Shelter this borderline evergreen climber from cold wind, keeping covers ventilated. A severe winter may exceed what an outdoor wall and fleece can protect against.",
          "frontBed5-salvia-salgoon-lake-blueberry": "Lake Blueberry is H3. Keep some sound top growth and a drained crown. Outdoor protection is uncertain in severe cold; a cutting also needs an arranged frost-free home."
        },
        "caution": "Check the plant-specific limits: fleece reduces exposure but does not make an outdoor position frost-free."
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "bigpot1"
        ],
        "plantIds": [
          "bigpot1-fuchsia",
          "bigpot1-verbena",
          "bigpot1-calibrachoa",
          "bigpot1-nepeta",
          "bigpot1-lobelia",
          "bigpot1-petunia"
        ],
        "steps": [
          "Remove the dead annual trailers from the root.",
          "Leave sound fuchsia stems and catmint basal growth.",
          "Clear debris from the surface and check the pot remains stable."
        ],
        "id": "oct-bigpot1-clear",
        "priority": "month",
        "category": "remove",
        "potKey": "bigpot1",
        "title": "Clear Big Pot 1 for winter",
        "timing": "After frost ends the tender display.",
        "summary": "Compost failed annuals, retain the hardy fuchsia and catmint framework, and leave the glazed pot safe for winter.",
        "why": "One coordinated clear-out preserves the hardy components without leaving collapsing annual material around them.",
        "doneWhen": "Only the chosen hardy framework remains and the pot surface is clean.",
        "guide": "remove",
        "sources": [
          "month-october",
          "plant-bigpot1-fuchsia",
          "plant-bigpot1-verbena",
          "plant-bigpot1-calibrachoa",
          "plant-bigpot1-nepeta",
          "plant-bigpot1-lobelia",
          "plant-bigpot1-petunia"
        ],
        "plantNotes": {
          "bigpot1-fuchsia": "Retain Mrs Popple’s crown and sound woody stems. Insulate the pot during hard frost; wait for spring buds before the main cut-back.",
          "bigpot1-verbena": "Leave while healthy and flowering. Once this seasonal trailer has failed, snip and lift only its own root plug; retain neighbouring perennial crowns.",
          "bigpot1-calibrachoa": "Leave while healthy and flowering. Once this seasonal trailer has failed, snip and lift only its own root plug; retain neighbouring perennial crowns.",
          "bigpot1-nepeta": "Keep the hardy Nepeta crown and basal growth. Remove dead seasonal trailers around it without dragging out its roots.",
          "bigpot1-lobelia": "Leave while healthy and flowering. Once this seasonal trailer has failed, snip and lift only its own root plug; retain neighbouring perennial crowns.",
          "bigpot1-petunia": "Leave while healthy and flowering. Once this seasonal trailer has failed, snip and lift only its own root plug; retain neighbouring perennial crowns."
        }
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "bigpot2"
        ],
        "plantIds": [
          "bigpot2-lobelia",
          "bigpot2-verbena",
          "bigpot2-petunia",
          "bigpot2-nepeta",
          "bigpot2-fuchsia"
        ],
        "steps": [
          "Remove collapsed annual trailers.",
          "Keep sound fuchsia stems and catmint growth.",
          "Clear the compost surface and confirm the pot is secure."
        ],
        "id": "oct-bigpot2-clear",
        "priority": "month",
        "category": "remove",
        "potKey": "bigpot2",
        "title": "Clear Big Pot 2 for winter",
        "timing": "After frost ends the tender display.",
        "summary": "Remove annual material and retain only the planned hardy framework.",
        "why": "The mirror pot needs its own whole-container clear-out without separate plant reminders.",
        "doneWhen": "The pot is clean and only intentionally retained hardy plants remain.",
        "guide": "remove",
        "sources": [
          "month-october",
          "plant-bigpot2-lobelia",
          "plant-bigpot2-verbena",
          "plant-bigpot2-petunia",
          "plant-bigpot2-nepeta",
          "plant-bigpot2-fuchsia"
        ],
        "plantNotes": {
          "bigpot2-lobelia": "Leave while healthy and flowering. Once this seasonal trailer has failed, snip and lift only its own root plug; retain neighbouring perennial crowns.",
          "bigpot2-verbena": "Leave while healthy and flowering. Once this seasonal trailer has failed, snip and lift only its own root plug; retain neighbouring perennial crowns.",
          "bigpot2-petunia": "Leave while healthy and flowering. Once this seasonal trailer has failed, snip and lift only its own root plug; retain neighbouring perennial crowns.",
          "bigpot2-nepeta": "Keep the hardy Nepeta crown and basal growth. Remove dead seasonal trailers around it without dragging out its roots.",
          "bigpot2-fuchsia": "Retain Mrs Popple’s crown and sound woody stems. Insulate the pot during hard frost; wait for spring buds before the main cut-back."
        }
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "littlepot1"
        ],
        "plantIds": [
          "littlepot1-hellebore-ice-n-roses-bennotta"
        ],
        "steps": [
          "Raise the pot on feet so rain drains away.",
          "Clear old leaves and debris from around the crown.",
          "Let the upper compost begin to dry before the next drink."
        ],
        "id": "oct-littlepot1-hellebore",
        "priority": "month",
        "category": "protect",
        "potKey": "littlepot1",
        "title": "Protect Little Pot 1’s Hellebore",
        "timing": "Before persistent cold, wet weather.",
        "summary": "Keep the Hellebore’s crown clear and the small pot freely drained for winter.",
        "why": "A hardy Hellebore can still fail when its crown remains wet in a small container.",
        "doneWhen": "The pot drains freely and the crown is clean and firm.",
        "guide": "protect",
        "sources": [
          "fleece",
          "plant-littlepot1-hellebore-ice-n-roses-bennotta"
        ],
        "plantNotes": {},
        "caution": "Check the plant-specific limits: fleece reduces exposure but does not make an outdoor position frost-free."
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "littlepot2"
        ],
        "plantIds": [
          "wallpot2-coreopsis-gold"
        ],
        "steps": [
          "Clear fallen petals and soft debris from the crown.",
          "Check every drainage hole.",
          "Raise the pot on stable feet without exposing it to tipping."
        ],
        "id": "oct-littlepot2-drain",
        "priority": "month",
        "category": "protect",
        "potKey": "littlepot2",
        "title": "Prepare Little Pot 2 for winter drainage",
        "timing": "As the Coreopsis finishes and autumn rain becomes persistent.",
        "summary": "Stop feeding, remove only collapsed growth and raise the square pot so rain can escape.",
        "why": "The likely-hardy crown is more at risk from cold saturated compost than from ordinary frost.",
        "doneWhen": "The crown is open and rain drains straight through the pot.",
        "guide": "protect",
        "sources": [
          "fleece",
          "plant-wallpot2-coreopsis-gold"
        ],
        "plantNotes": {},
        "caution": "Check the plant-specific limits: fleece reduces exposure but does not make an outdoor position frost-free."
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "cercispot"
        ],
        "plantIds": [
          "cercispot-cercis-carolina-sweetheart"
        ],
        "steps": [
          "Place the pot on stable feet.",
          "Wrap or shelter the container during severe frost without sealing the compost.",
          "Check that insulation cannot trap fallen leaves against the trunk."
        ],
        "id": "oct-cercispot-protect",
        "priority": "first",
        "category": "protect",
        "potKey": "cercispot",
        "title": "Winter-proof the new Cercis Pot",
        "timing": "Before the first hard frost or prolonged wet spell.",
        "summary": "Raise the container for drainage and prepare breathable insulation around the exposed root ball.",
        "why": "The tree is H5, but container roots have less protection than roots in open ground.",
        "doneWhen": "The pot drains freely and breathable frost protection is ready.",
        "guide": "protect",
        "sources": [
          "fleece",
          "plant-cercispot-cercis-carolina-sweetheart"
        ],
        "plantNotes": {},
        "caution": "Check the plant-specific limits: fleece reduces exposure but does not make an outdoor position frost-free."
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "wallpot2"
        ],
        "plantIds": [
          "wallpot2-echinacea-mooodz-glory"
        ],
        "steps": [
          "Place the pot on stable feet.",
          "Clear fallen leaves from the crown.",
          "Confirm that trapped rain can leave every drainage hole."
        ],
        "id": "oct-echinacea-pot-protect",
        "priority": "first",
        "category": "protect",
        "potKey": "wallpot2",
        "title": "Winter-proof the Echinacea Pot",
        "timing": "Before the first hard frost or prolonged wet spell.",
        "summary": "Raise the container for drainage and keep the dormant crown open to the air.",
        "why": "Mooodz Glory is H5, but a small exposed container reduces that margin.",
        "doneWhen": "The pot drains freely and the crown remains clear and ventilated.",
        "guide": "protect",
        "sources": [
          "fleece",
          "plant-wallpot2-echinacea-mooodz-glory"
        ],
        "plantNotes": {},
        "caution": "Check the plant-specific limits: fleece reduces exposure but does not make an outdoor position frost-free."
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "baskets"
        ],
        "plantIds": [
          "baskets-calluna-trio-mix",
          "baskets-viola-rocky-purple-picotee",
          "baskets-hedera-yellow-ripple",
          "baskets-pansy-fire",
          "baskets-pansy-rose-surprise"
        ],
        "steps": [
          "Remove faded Viola and Pansy flowers from both baskets.",
          "Check that rain drains freely through each liner.",
          "Inspect chains and brackets before gales or hard frost."
        ],
        "id": "oct-baskets-clear",
        "priority": "month",
        "category": "protect",
        "potKey": "baskets",
        "title": "Care for the paired winter baskets",
        "timing": "As autumn rain and wind become persistent.",
        "summary": "Keep red Basket 1 and green Basket 2 together as a single winter collection: deadhead, check drainage and secure both hangers.",
        "why": "The cool-season planting can continue through winter, but exposed baskets are vulnerable to waterlogging and wind.",
        "doneWhen": "Both baskets drain freely, are secure and remain evenly maintained.",
        "guide": "protect",
        "sources": [
          "fleece",
          "plant-baskets-calluna-trio-mix",
          "plant-baskets-viola-rocky-purple-picotee",
          "plant-baskets-hedera-yellow-ripple",
          "plant-baskets-pansy-fire",
          "plant-baskets-pansy-rose-surprise"
        ],
        "plantNotes": {
          "baskets-calluna-trio-mix": "Keep these hardy evergreen plants in the basket, with their shallow roots drained but not allowed to dry hard. Do not prune into bare wood.",
          "baskets-viola-rocky-purple-picotee": "Retain these cool-season flowers, pinch faded flowers with their stalks and lift wet leaf mats off the crowns. Check the basket drains after rain.",
          "baskets-hedera-yellow-ripple": "Keep the hardy Ivy trails; shorten only damaged or obstructing growth and check the hanger remains secure under the extra wet weight.",
          "baskets-pansy-fire": "Retain these cool-season flowers, pinch faded flowers with their stalks and lift wet leaf mats off the crowns. Check the basket drains after rain.",
          "baskets-pansy-rose-surprise": "Retain these cool-season flowers, pinch faded flowers with their stalks and lift wet leaf mats off the crowns. Check the basket drains after rain."
        },
        "caution": "Check the plant-specific limits: fleece reduces exposure but does not make an outdoor position frost-free."
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "frontpot"
        ],
        "plantIds": [
          "frontpot-gazania-sunny-side-up",
          "frontpot-gazania-orange-flame",
          "frontpot-calibrachoa",
          "frontpot-bacopa-white"
        ],
        "steps": [
          "Check each Gazania and trailer for healthy growth.",
          "Retain sound plants; arrange a suitable frost-free home elsewhere if keeping tender specimens through winter matters.",
          "Remove only dead plants, cutting tangled roots rather than pulling retained neighbours loose; keep the glazed pot freely drained."
        ],
        "id": "oct-frontpot-clear-reviewed",
        "priority": "month",
        "category": "remove",
        "potKey": "frontpot",
        "title": "Keep the Front Pot going; remove only failed plants",
        "timing": "Assess before frost and again once individual plants collapse.",
        "summary": "Leave healthy Gazania and trailers while they flower. They are tender perennials used seasonally here; do not empty the whole pot by date alone.",
        "why": "Selective clearing preserves plants still worth keeping and avoids unnecessary disturbance to shared roots.",
        "doneWhen": "Healthy plants remain, failed material is removed and the pot drains freely.",
        "keep": "Every healthy Gazania and trailer until its winter decision is made.",
        "guide": "remove",
        "sources": [
          "month-october",
          "plant-frontpot-gazania-sunny-side-up",
          "plant-frontpot-gazania-orange-flame",
          "plant-frontpot-calibrachoa",
          "plant-frontpot-bacopa-white"
        ],
        "plantNotes": {
          "frontpot-gazania-sunny-side-up": "This is tender perennial planting used as a seasonal display. Keep it while healthy; retaining it through winter needs appropriate frost-free shelter. Remove an individual only once it has failed or its replacement has been chosen.",
          "frontpot-gazania-orange-flame": "This is tender perennial planting used as a seasonal display. Keep it while healthy; retaining it through winter needs appropriate frost-free shelter. Remove an individual only once it has failed or its replacement has been chosen.",
          "frontpot-calibrachoa": "This is tender perennial planting used as a seasonal display. Keep it while healthy; retaining it through winter needs appropriate frost-free shelter. Remove an individual only once it has failed or its replacement has been chosen.",
          "frontpot-bacopa-white": "This is tender perennial planting used as a seasonal display. Keep it while healthy; retaining it through winter needs appropriate frost-free shelter. Remove an individual only once it has failed or its replacement has been chosen."
        }
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "wallpot1"
        ],
        "plantIds": [
          "wallpot1-phormium-flamingo"
        ],
        "steps": [
          "Remove torn leaves at the base.",
          "Raise or shelter the pot if rain collects beneath it.",
          "Protect the crown during severe frost."
        ],
        "id": "oct-wallpot1-protect",
        "priority": "month",
        "category": "protect",
        "potKey": "wallpot1",
        "title": "Protect the Phormium wall pot",
        "timing": "Before persistent frost or winter saturation.",
        "summary": "Keep the Phormium crown free of debris and make sure rain drains from the pot.",
        "why": "Container roots and foliage are more exposed than a Phormium planted in open ground.",
        "doneWhen": "The crown is clear, the pot drains and foliage is protected from severe weather.",
        "guide": "protect",
        "sources": [
          "fleece",
          "plant-wallpot1-phormium-flamingo"
        ],
        "plantNotes": {},
        "caution": "Check the plant-specific limits: fleece reduces exposure but does not make an outdoor position frost-free."
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "bed5"
        ],
        "plantIds": [
          "bed5-medium-pot-lythrum-robin"
        ],
        "steps": [
          "Wait until the stems are clearly finished.",
          "Cut them close to the crown.",
          "Clear debris and place the pot in a sheltered, stable position."
        ],
        "id": "oct-bed5-medium-pot",
        "priority": "month",
        "category": "deadhead",
        "potKey": "bed5-medium-pot",
        "title": "Cut back and protect the Bed 5 medium pot",
        "timing": "After the Lythrum dies back.",
        "summary": "Remove finished stems and protect the container from prolonged hard frost and winter saturation.",
        "why": "This hardy perennial can return, but its roots are more exposed in a container than in open ground.",
        "doneWhen": "The crown is tidy and the pot is secure for winter.",
        "guide": "clear",
        "sources": [
          "deadhead",
          "plant-bed5-medium-pot-lythrum-robin"
        ],
        "plantNotes": {}
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "bed5"
        ],
        "plantIds": [
          "bed5-little-pot-begonia-carmen"
        ],
        "steps": [
          "Arrange frost-free storage elsewhere before lifting if the plant is to be kept.",
          "Let foliage die down, lift carefully and dry the labelled tuber before cool frost-free storage.",
          "If no suitable storage is available, acknowledge that outdoor survival is unreliable; remove only material that has failed."
        ],
        "id": "oct-bed5-little-pot-reviewed",
        "priority": "month",
        "category": "protect",
        "potKey": "bed5-little-pot",
        "title": "Decide how to keep the Carmen begonia",
        "timing": "Before or immediately after the first frost.",
        "summary": "This tuberous Begonia needs frost-free storage to survive reliably. Outdoor shelter alone is insufficient.",
        "why": "The begonia will not reliably survive outdoors in its small pot.",
        "doneWhen": "The tuber has suitable storage arranged or the outdoor risk is explicit; healthy material was not discarded automatically.",
        "guide": "protect",
        "sources": [
          "fleece",
          "plant-bed5-little-pot-begonia-carmen"
        ],
        "plantNotes": {},
        "caution": "Check the plant-specific limits: fleece reduces exposure but does not make an outdoor position frost-free."
      },
      {
        "scope": "bed5-big-pot",
        "zoneKeys": [
          "bed5"
        ],
        "plantIds": [
          "bed5-big-pot-alstroemeria"
        ],
        "steps": [
          "Remove only fully dead stems with secateurs, avoiding disturbance to shared roots.",
          "Keep the container freely drained and insulate its sides during severe cold.",
          "Use the warmest sheltered position; if retaining the plant is essential, arrange frost-free accommodation rather than relying on fleece."
        ],
        "id": "oct-bed5-alstroemeria-winter-reviewed",
        "priority": "month",
        "category": "protect",
        "title": "Protect the Bed 5 big-pot alstroemeria",
        "timing": "As top growth dies back and before hard frost.",
        "summary": "Keep the perennial crown and insulate the shared container. RHS recommends frost-free winter shelter for container Alstroemeria; outdoor protection here is a compromise.",
        "why": "Container roots experience colder conditions than the same plant in open ground.",
        "doneWhen": "The crown is retained, the pot drains and the limits of outdoor protection are understood or a frost-free home has been arranged.",
        "caution": "Do not heap wet mulch over Vinca, Gaultheria, Violas or the Nemesia sharing this pot.",
        "sources": [
          "alstroemeria",
          "fleece",
          "plant-bed5-big-pot-alstroemeria"
        ],
        "guide": "protect",
        "plantNotes": {}
      },
      {
        "scope": "bed5-big-pot",
        "zoneKeys": [
          "bed5"
        ],
        "plantIds": [
          "bed5-big-pot-petunia-bees-knees"
        ],
        "steps": [
          "Cut the top growth back so the base is visible.",
          "Ease out the petunia root ball without pulling neighbouring crowns.",
          "Fill and firm the small gap with fresh free-draining compost."
        ],
        "id": "oct-bed5-petunia-finish",
        "priority": "month",
        "category": "remove",
        "title": "Remove the finished Bed 5 big-pot petunia",
        "timing": "After frost ends its flowering.",
        "summary": "Remove the tender annual cleanly without disturbing the hardy Vinca and Alstroemeria roots.",
        "why": "Clearing the failed annual opens the mixed pot and reduces winter debris.",
        "doneWhen": "The annual is gone and the remaining plants sit firmly.",
        "guide": "remove",
        "sources": [
          "month-october",
          "plant-bed5-big-pot-petunia-bees-knees"
        ],
        "plantNotes": {}
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "bed2",
          "bed3",
          "bed4",
          "bed5",
          "stone",
          "frontBed1",
          "frontBed2",
          "frontBed3",
          "frontBed4",
          "frontBed5",
          "frontStone"
        ],
        "plantIds": [],
        "steps": [
          "Prioritise the Stone Bed, trough and compact evergreen mounds.",
          "Remove diseased leaves separately.",
          "Use healthy loose leaves only where they cannot seal a crown."
        ],
        "id": "oct-autumn-leaf-round",
        "priority": "ongoing",
        "category": "check",
        "title": "Keep fallen leaves off vulnerable crowns",
        "timing": "Weekly during heavy leaf fall.",
        "summary": "Clear wet mats from alpines, succulents, low evergreens and herbaceous crowns while leaving useful clean leaves in open areas.",
        "why": "Dense wet leaves can smother low plants and hold damaging damp around crowns.",
        "doneWhen": "No vulnerable crown is buried under a wet leaf mat.",
        "guide": "check",
        "sources": [
          "month-october"
        ],
        "plantNotes": {}
      },
      {
        "id": "oct-winter-viola-round",
        "priority": "ongoing",
        "category": "refresh",
        "scope": "zone",
        "zoneKeys": [
          "stairpots",
          "staircans",
          "bed5",
          "lobeliapot",
          "frontBed5"
        ],
        "plantIds": [
          "stairpots-violas-pansies-group",
          "staircans-violas-pansies-group",
          "bed5-big-pot-violas-pansies",
          "lobeliapot-viola-rocky-purple-picotee",
          "frontBed5-viola-rocky-purple-picotee"
        ],
        "title": "Keep the winter Violas and Pansies flowering",
        "timing": "When blooms fade and after heavy rain; skip frozen plants.",
        "summary": "Remove spent flower stems and wet debris, retaining healthy plants for continued colour.",
        "why": "Give this planting the seasonal attention it needs without disturbing healthy neighbouring plants.",
        "steps": [
          "Pinch each finished flower stalk near its base, including the seed capsule.",
          "Clear wet leaves from crowns and check that cans and pots drain.",
          "Replace only failed plants; settle any replacements with water when the compost is unfrozen."
        ],
        "doneWhen": "The named work is complete and healthy growth remains undamaged.",
        "sources": [
          "deadhead",
          "fleece",
          "plant-stairpots-violas-pansies-group",
          "plant-staircans-violas-pansies-group",
          "plant-bed5-big-pot-violas-pansies",
          "plant-lobeliapot-viola-rocky-purple-picotee",
          "plant-frontBed5-viola-rocky-purple-picotee"
        ],
        "guide": "refresh",
        "plantNotes": {
          "stairpots-violas-pansies-group": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed.",
          "staircans-violas-pansies-group": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed.",
          "bed5-big-pot-violas-pansies": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed.",
          "lobeliapot-viola-rocky-purple-picotee": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed.",
          "frontBed5-viola-rocky-purple-picotee": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed."
        }
      },
      {
        "id": "oct-basket3-retain",
        "priority": "month",
        "category": "refresh",
        "scope": "zone",
        "zoneKeys": [
          "basket3"
        ],
        "plantIds": [
          "baskets-lysimachia-unidentified",
          "baskets-chrysanthemum-unidentified",
          "baskets-cyclamen-unidentified",
          "basket3-hedera-pair-unidentified"
        ],
        "title": "Care for Basket 3 without discarding its permanent planting",
        "timing": "As autumn flowers fade and before cold nights.",
        "summary": "Keep healthy Ivy and Lysimachia. Chrysanthemum and Cyclamen hardiness is unresolved, so do not assume the whole basket is winter-hardy.",
        "why": "Give this planting the seasonal attention it needs without disturbing healthy neighbouring plants.",
        "steps": [
          "Remove faded flowers using the plant notes below.",
          "Check the hanger and drainage, and keep the Cyclamen crown clear.",
          "Seek labels for the flowering plants; arrange appropriate frost-free shelter if they prove tender and are to be kept."
        ],
        "doneWhen": "The named work is complete and healthy growth remains undamaged.",
        "leaveAlone": "Do not pinch off Chrysanthemum buds or divide the Cyclamen tuber.",
        "guide": "refresh",
        "sources": [
          "month-october",
          "plant-baskets-lysimachia-unidentified",
          "plant-baskets-chrysanthemum-unidentified",
          "plant-baskets-cyclamen-unidentified",
          "plant-basket3-hedera-pair-unidentified"
        ],
        "plantNotes": {
          "baskets-lysimachia-unidentified": "Keep sound trails and roots. Shorten only shoots smothering companions; the exact Lysimachia is still unidentified.",
          "baskets-chrysanthemum-unidentified": "Remove whole spent heads to leafy growth. Do not pinch unopened autumn buds; florist and garden types differ in hardiness, so confirm before relying on an outdoor winter.",
          "baskets-cyclamen-unidentified": "Gently twist a finished flower stalk away at its base and keep the crown open. Until identified, allow for tender florist Cyclamen: frost-free shelter may be needed.",
          "basket3-hedera-pair-unidentified": "Retain both Ivy plants and trim only encroaching trails. Do not strip them out with the finished flowers."
        }
      },
      {
        "id": "oct-unconfirmed-fuchsia-fern",
        "priority": "month",
        "category": "protect",
        "scope": "zone",
        "zoneKeys": [
          "frontPots"
        ],
        "plantIds": [
          "frontPots-fuchsia-pot"
        ],
        "title": "Check winter needs of the unidentified front Fuchsia",
        "timing": "Before damaging frost.",
        "summary": "The front Fuchsia pot does not have confirmed hardiness.",
        "why": "Give this planting the seasonal attention it needs without disturbing healthy neighbouring plants.",
        "steps": [
          "Look for retained labels or clear identification evidence.",
          "Leave healthy stems and fronds while checking their winter needs.",
          "Use temporary outdoor shelter during brief cold, but arrange suitable accommodation if identification shows they are tender."
        ],
        "doneWhen": "The named work is complete and healthy growth remains undamaged.",
        "sources": [
          "fleece",
          "plant-frontPots-fuchsia-pot"
        ],
        "guide": "protect",
        "plantNotes": {
          "frontPots-fuchsia-pot": "Fuchsia hardiness is not confirmed here. Keep living stems and seek the label; tender types need a frost-free home rather than assuming the Mrs Popple care used in the big pots."
        },
        "caution": "Check the plant-specific limits: fleece reduces exposure but does not make an outdoor position frost-free."
      },
      {
        "id": "oct-birthday-bed-establishment-2026",
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "bed4",
          "frontBed4"
        ],
        "plantIds": [
          "bed5-big-pot-nemesia",
          "bed4-gaillardia",
          "frontBed5-pieris-polar-passion",
          "frontBed4-hydrangea-petite-star",
          "bed4-viola-pineapple-crush"
        ],
        "priority": "ongoing",
        "category": "check",
        "title": "Check the October border additions and moves",
        "timing": "Through the first weeks after planting, especially during dry spells.",
        "summary": "Check each moved root ball separately and keep crowns clear of wet debris.",
        "why": "New planting can dry inside the original root ball while the surrounding ground stays damp.",
        "doneWhen": "Root balls are checked, watered only when needed, and crowns remain open.",
        "steps": [
          "Feel the original root ball and adjacent ground.",
          "Soak only drying planting pockets and let water drain.",
          "Clear heavy wet litter without disturbing newly settled roots."
        ],
        "guide": "check",
        "sources": [
          "plant-bed4-gaillardia",
          "plant-bed5-big-pot-nemesia",
          "plant-frontBed5-pieris-polar-passion",
          "oct-petite-star",
          "oct-viola"
        ],
        "plantNotes": {
          "bed5-big-pot-nemesia": "Check Wisley Vanilla in Back Bed 1 and avoid letting fine roots dry hard.",
          "bed4-gaillardia": "Check the new Bed 1 pocket for adequate light and keep the Gaillardia crown drained.",
          "frontBed5-pieris-polar-passion": "Check Polar Passion in Gaillardia’s former Back Bed 4 pocket; preserve acidic soil.",
          "frontBed4-hydrangea-petite-star": "Keep Petite Star’s new Front Bed 4 root ball evenly moist without stagnant water.",
          "bed4-viola-pineapple-crush": "Check the small Viola plug at Back Bed 4’s front edge and remove soggy spent flowers."
        }
      }
    ],
    "highlights": [
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1"
        ],
        "plantIds": [
          "bed1-japanese-maple"
        ],
        "id": "oct-maple",
        "title": "The Japanese maple turns fiery",
        "note": "Bed 1’s deep purple canopy brightens to its strongest red before leaf fall."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "frontBed3"
        ],
        "plantIds": [],
        "id": "oct-front-dogwood",
        "title": "Front Bed 3 changes from leaf to stem colour",
        "note": "Cream-edged foliage drops away and the dogwood’s red framework starts to take over."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "frontBed5"
        ],
        "plantIds": [],
        "id": "oct-front5",
        "title": "Front Bed 5 carries the autumn palette",
        "note": "Ceratostigma, heathers and variegated evergreens mix blue, red, bronze and gold."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed3"
        ],
        "plantIds": [],
        "id": "oct-bed3",
        "title": "Bed 3 echoes spring in warmer tones",
        "note": "Spiraea foliage returns to orange-red as the compact bed winds down."
      }
    ],
    "indoorJobs": [
      {
        "id": "oct-birthday-houseplants-moisture-2026",
        "scope": "zone",
        "zoneKeys": [
          "houseSittingRhipsalis",
          "houseSittingDracaena",
          "houseLandingCrassula",
          "houseKitchenPhilodendron",
          "houseLandingZamioculcas"
        ],
        "plantIds": [
          "house-sitting-rhipsalis",
          "house-sitting-dracaena-bicolour",
          "house-landing-crassula-hottentot",
          "house-kitchen-philodendron",
          "house-landing-zamioculcas"
        ],
        "priority": "ongoing",
        "category": "check",
        "title": "Check the five birthday houseplants individually",
        "timing": "When inspecting pots; reduce watering as light and growth decline.",
        "summary": "Feel each root ball before deciding whether to water; drain every outer pot after a drink.",
        "why": "The hanging cactus and young Philodendron dry differently from the water-storing Crassula and Zamioculcas.",
        "doneWhen": "All five root balls have been checked and any surplus water emptied.",
        "steps": [
          "Feel below the surface and lift each accessible inner pot.",
          "Water only the specimens whose compost has reached their stated drying point.",
          "Let runoff finish and return each pot to its marked position."
        ],
        "guide": "check",
        "sources": [
          "oct-house-rhipsalis",
          "oct-house-dracaena",
          "oct-house-crassula",
          "oct-house-philodendron",
          "oct-house-zamioculcas"
        ],
        "plantNotes": {
          "house-sitting-rhipsalis": "Let the surface begin to dry, then water and drain; avoid prolonged drought.",
          "house-sitting-dracaena-bicolour": "Allow the upper compost to dry before soaking and draining; use rainwater where possible.",
          "house-landing-crassula-hottentot": "Let compost dry between soakings; water sparingly through winter.",
          "house-kitchen-philodendron": "Water once the upper compost begins to dry and let excess drain completely.",
          "house-landing-zamioculcas": "Allow the whole root ball to dry before watering; reduce checks into winter."
        }
      }
    ]
  },
  "November": {
    "theme": "Finish the tidy-up selectively, secure climbers and keep winter wet away from crowns.",
    "jobs": [
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "bed2",
          "frontBed2",
          "frontBed5",
          "frontStone"
        ],
        "plantIds": [
          "bed1-hosta",
          "bed1-hosta-gold",
          "bed2-peony",
          "frontBed2-polemonium-golden-feathers",
          "frontBed4-astrantia-trio",
          "frontBed5-ceratostigma-plumbaginoides",
          "frontStone-hosta"
        ],
        "steps": [
          "Confirm each stem is fully finished.",
          "Cut close to the crown without damaging buds.",
          "Leave chosen seedheads and healthy basal rosettes."
        ],
        "id": "nov-clear-collapsed-foliage",
        "priority": "first",
        "category": "deadhead",
        "title": "Clear fully collapsed herbaceous foliage",
        "timing": "Once leaves and stems have yellowed or collapsed naturally.",
        "summary": "Cut finished material to the crown while retaining sound seedheads and semi-evergreen basal growth deliberately.",
        "why": "Selective clearing removes wet debris without stripping away all winter structure and shelter.",
        "doneWhen": "No collapsed material smothers a crown and every remaining stem is intentional.",
        "guide": "clear",
        "sources": [
          "deadhead",
          "plant-bed1-hosta",
          "plant-bed1-hosta-gold",
          "plant-bed2-peony",
          "plant-frontBed2-polemonium-golden-feathers",
          "plant-frontBed4-astrantia-trio",
          "plant-frontBed5-ceratostigma-plumbaginoides",
          "plant-frontStone-hosta"
        ],
        "plantNotes": {
          "bed1-hosta": "Remove only dead collapsed leaves and old stalks. Keep the pointed emerging buds and do not cut into the firm crown.",
          "bed1-hosta-gold": "Remove only dead collapsed leaves and old stalks. Keep the pointed emerging buds and do not cut into the firm crown.",
          "bed2-peony": "Cut fully yellowed or dead stems just above soil level, sparing red buds. Do not cover the crown with old foliage or a deep layer of compost.",
          "frontBed2-polemonium-golden-feathers": "Remove dead stems and leaves individually; keep the healthy basal rosette rather than cutting the entire clump bare.",
          "frontBed4-astrantia-trio": "Clear fully dead stems around the crown while protecting fresh basal buds. Do not dig up a late-emerging dormant clump.",
          "frontBed5-ceratostigma-plumbaginoides": "Clear fully dead stems around the crown while protecting fresh basal buds. Do not dig up a late-emerging dormant clump.",
          "frontStone-hosta": "Remove only dead collapsed leaves and old stalks. Keep the pointed emerging buds and do not cut into the firm crown."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "stone",
          "bed2",
          "frontBed4",
          "frontBed5",
          "frontStone"
        ],
        "plantIds": [
          "stone-houseleeks",
          "stone-common-houseleek",
          "stone-sedum-chocolate-ball",
          "bed2-silverbush",
          "frontBed4-calluna-trio-mix",
          "frontBed5-gaura-gaudi-red",
          "frontBed5-euphorbia-ascot-petite",
          "frontStone-hosta"
        ],
        "steps": [
          "Remove leaf mats and blocked gravel channels.",
          "Check trough and pot drainage openings.",
          "Use a ventilated rain shelter only where needed; do not wrap plants tightly."
        ],
        "id": "nov-protect-winter-wet",
        "priority": "first",
        "category": "protect",
        "title": "Keep vulnerable crowns clear of winter wet",
        "timing": "Before prolonged rain and after every heavy leaf fall.",
        "summary": "Open drainage channels, clear debris and shelter only the plants that genuinely need overhead protection.",
        "why": "Cold wet around the crown can be more damaging than cold air to alpines, succulents and silver-leaved plants.",
        "doneWhen": "Crowns are visible, drainage routes are open and shelters allow airflow.",
        "guide": "protect",
        "sources": [
          "fleece",
          "plant-stone-houseleeks",
          "plant-stone-common-houseleek",
          "plant-stone-sedum-chocolate-ball",
          "plant-bed2-silverbush",
          "plant-frontBed4-calluna-trio-mix",
          "plant-frontBed5-gaura-gaudi-red",
          "plant-frontBed5-euphorbia-ascot-petite",
          "plant-frontStone-hosta"
        ],
        "plantNotes": {
          "stone-houseleeks": "Keep hardy Sempervivum outside with clear gritty drainage. Lift wet leaf mats from the rosette; do not wrap it tightly or put rich mulch over its centre.",
          "stone-common-houseleek": "Keep hardy Sempervivum outside with clear gritty drainage. Lift wet leaf mats from the rosette; do not wrap it tightly or put rich mulch over its centre.",
          "stone-sedum-chocolate-ball": "Chocolate Ball is H3. Keep its mat free of wet debris and shelter from severe cold; do not assume the hardiness of the neighbouring Sempervivum.",
          "bed2-silverbush": "Keep the silver foliage and woody framework intact. Prioritise free drainage and a ventilated cover in severe cold; do not pack wet mulch against the crown.",
          "frontBed4-calluna-trio-mix": "Retain the hardy Calluna’s leafy tips. Remove smothering debris and check drainage; no routine indoor overwintering is needed.",
          "frontBed5-gaura-gaudi-red": "Keep the crown free of winter wet and retain sound old stems until spring. Avoid a heavy wet mulch over its centre.",
          "frontBed5-euphorbia-ascot-petite": "Keep evergreen replacement stems and a drained crown. Remove wet leaf mats carefully; use gloves because damaged stems release irritant sap.",
          "frontStone-hosta": "The Hosta is dormant, not an evergreen rosette. Clear collapsed leaves, preserve its firm buds and check the trough drains freely."
        },
        "caution": "Check the plant-specific limits: fleece reduces exposure but does not make an outdoor position frost-free."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed2",
          "bed5",
          "patio",
          "frontBed3",
          "frontBed4",
          "frontBed5"
        ],
        "plantIds": [
          "bed2-hydrangea-petiolaris",
          "bed5-wisteria",
          "bed5-rose",
          "stone-honeysuckle",
          "stone-clematis",
          "frontBed3-climbing-rose-white-pink",
          "frontBed4-the-generous-gardener",
          "frontBed5-clematis",
          "frontBed5-bluebell-creeper-sollya"
        ],
        "steps": [
          "Test supports and anchor points before adding ties.",
          "Use soft figure-eight ties with room for thickening.",
          "Remove only dead, broken or access-blocking tangles."
        ],
        "id": "nov-secure-climbers",
        "priority": "month",
        "category": "prune",
        "title": "Secure climbers before winter wind",
        "timing": "On a calm day after most leaves have fallen.",
        "summary": "Replace failed ties and remove only clearly dead or hazardous loose growth.",
        "why": "Sound winter ties prevent stems rubbing, snapping or pulling supports away from walls.",
        "doneWhen": "No long stem can whip freely and no tie cuts into bark.",
        "guide": "support",
        "sources": [
          "month-november",
          "plant-bed2-hydrangea-petiolaris",
          "plant-bed5-wisteria",
          "plant-bed5-rose",
          "plant-stone-honeysuckle",
          "plant-stone-clematis",
          "plant-frontBed3-climbing-rose-white-pink",
          "plant-frontBed4-the-generous-gardener",
          "plant-frontBed5-clematis",
          "plant-frontBed5-bluebell-creeper-sollya"
        ],
        "plantNotes": {
          "bed2-hydrangea-petiolaris": "Retain attached main stems and guide new shoots into available wall space. Do not pull established aerial roots off the wall just to make a neater fan.",
          "bed5-wisteria": "Tie the permanent main branches securely and guide extension growth where it is wanted. Keep stems away from gutters; side-shoot shortening has its own winter and summer jobs.",
          "bed5-rose": "Fan flexible long rose canes across sound supports with soft loose ties. Keep new canes for future flowers; do not force a rigid stem horizontal.",
          "stone-honeysuckle": "Guide a flexible new shoot onto its own support before it winds around neighbours. Leave flowering or berrying growth unless it blocks access.",
          "stone-clematis": "Trace stems back to the correct plant and guide them onto fine supports. Keep ties loose; this training round is not permission to apply one pruning group to both clematis.",
          "frontBed3-climbing-rose-white-pink": "Fan flexible long rose canes across sound supports with soft loose ties. Keep new canes for future flowers; do not force a rigid stem horizontal.",
          "frontBed4-the-generous-gardener": "Fan flexible long rose canes across sound supports with soft loose ties. Keep new canes for future flowers; do not force a rigid stem horizontal.",
          "frontBed5-clematis": "Trace stems back to the correct plant and guide them onto fine supports. Keep ties loose; this training round is not permission to apply one pruning group to both clematis.",
          "frontBed5-bluebell-creeper-sollya": "Guide a flexible new shoot onto its own support before it winds around neighbours. Leave flowering or berrying growth unless it blocks access."
        }
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "bed2",
          "bed4",
          "pear",
          "frontBed1",
          "frontBed3",
          "frontApple",
          "frontGateTree"
        ],
        "plantIds": [],
        "steps": [
          "Check beneath fruit trees and roses.",
          "Remove attached mummified fruit where reachable safely.",
          "Keep diseased material out of ordinary garden compost."
        ],
        "id": "nov-clear-diseased-leaves-fruit",
        "priority": "month",
        "category": "check",
        "title": "Remove diseased leaves and forgotten fruit",
        "timing": "After the main leaf fall.",
        "summary": "Collect spotted leaves, mummified fruit and rotting windfalls while leaving clean habitat material elsewhere.",
        "why": "Targeted removal reduces disease carry-over without over-tidying the whole garden.",
        "doneWhen": "No obvious diseased pile or rotting fruit remains around susceptible plants.",
        "guide": "check",
        "sources": [
          "month-november"
        ],
        "plantNotes": {}
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "stone",
          "bed4",
          "frontBed2",
          "frontBed5"
        ],
        "plantIds": [
          "stone-pennisetum-rubrum",
          "stone-echeveria",
          "stone-echeveria-devotion",
          "bed4-callistemon-inferno-yanferno",
          "frontBed2-coprosma-inferno",
          "frontBed2-coprosma-pina-colada",
          "frontBed2-coprosma-city-knights",
          "frontBed4-flaming-silver",
          "frontBed5-bluebell-creeper-sollya"
        ],
        "steps": [
          "Refasten loose outdoor covers; remove sodden debris and ventilate in mild spells.",
          "Keep container drainage open and check crowns without cutting healthy protective growth.",
          "For plants housed elsewhere, arrange a check for rot and labels; fleece outdoors is not a substitute for that accommodation."
        ],
        "id": "nov-check-protection-reviewed",
        "priority": "ongoing",
        "category": "protect",
        "title": "Check outdoor protection and any arranged winter homes",
        "timing": "After storms, hard frost or a run of mild damp days.",
        "summary": "Recheck the outdoor plants after cold or wet weather. Inspect stored plants only if frost-free accommodation was actually arranged.",
        "why": "Winter protection needs adjustment; leaving it sealed and unchecked can create its own damage.",
        "doneWhen": "Outdoor protection is secure and breathable, and any plants housed elsewhere have been checked.",
        "sources": [
          "fleece",
          "plant-stone-pennisetum-rubrum",
          "plant-stone-echeveria",
          "plant-stone-echeveria-devotion",
          "plant-bed4-callistemon-inferno-yanferno",
          "plant-frontBed2-coprosma-inferno",
          "plant-frontBed2-coprosma-pina-colada",
          "plant-frontBed2-coprosma-city-knights",
          "plant-frontBed4-flaming-silver",
          "plant-frontBed5-bluebell-creeper-sollya"
        ],
        "guide": "protect",
        "plantNotes": {
          "stone-pennisetum-rubrum": "Rubrum is H3, unlike hardy fountain grasses. Keep it drained and sheltered, but frost-free accommodation gives a more dependable winter outcome than outdoor fleece.",
          "stone-echeveria": "Needs a bright frost-free winter home. Outdoor fleece or a rain shelter cannot reliably keep this Echeveria alive through a Bromsgrove winter; arrange accommodation elsewhere if keeping it matters.",
          "stone-echeveria-devotion": "Needs a bright frost-free winter home. Outdoor fleece or a rain shelter cannot reliably keep this Echeveria alive through a Bromsgrove winter; arrange accommodation elsewhere if keeping it matters.",
          "bed4-callistemon-inferno-yanferno": "Inferno is borderline outdoors here. Use fleece for brief cold spells, keep drainage open and retain healthy evergreen growth; prolonged freezing may still damage it.",
          "frontBed2-coprosma-inferno": "Protect from severe frost and drying wind with breathable fleece when needed. Keep stems exposed to air; wait until spring regrowth before judging frost damage.",
          "frontBed2-coprosma-pina-colada": "Protect from severe frost and drying wind with breathable fleece when needed. Keep stems exposed to air; wait until spring regrowth before judging frost damage.",
          "frontBed2-coprosma-city-knights": "Protect from severe frost and drying wind with breathable fleece when needed. Keep stems exposed to air; wait until spring regrowth before judging frost damage.",
          "frontBed4-flaming-silver": "Flaming Silver is a Pieris now in Front Bed 5. Protect vulnerable new shoots from late frost, but do not treat the established evergreen as a tender plant to lift.",
          "frontBed5-bluebell-creeper-sollya": "Shelter this borderline evergreen climber from cold wind, keeping covers ventilated. A severe winter may exceed what an outdoor wall and fleece can protect against."
        },
        "caution": "Check the plant-specific limits: fleece reduces exposure but does not make an outdoor position frost-free."
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "cercispot"
        ],
        "plantIds": [
          "cercispot-cercis-carolina-sweetheart"
        ],
        "steps": [
          "Inspect beneath the wrap rather than assuming it is sound.",
          "Remove sodden material and improve airflow.",
          "Confirm the pot feet remain level and stable."
        ],
        "id": "nov-cercispot-protection",
        "priority": "ongoing",
        "category": "protect",
        "potKey": "cercispot",
        "title": "Check the Cercis Pot's winter protection",
        "timing": "After storms, hard frost or a run of mild damp days.",
        "summary": "Refasten breathable insulation and keep the container stable and freely drained.",
        "why": "Wind-loosened protection can expose the root ball or trap damp material against the young trunk.",
        "doneWhen": "Protection is secure and breathable and the trunk base is clear.",
        "guide": "protect",
        "sources": [
          "fleece",
          "plant-cercispot-cercis-carolina-sweetheart"
        ],
        "plantNotes": {},
        "caution": "Check the plant-specific limits: fleece reduces exposure but does not make an outdoor position frost-free."
      },
      {
        "scope": "pot",
        "zoneKeys": [
          "wallpot2"
        ],
        "plantIds": [
          "wallpot2-echinacea-mooodz-glory"
        ],
        "steps": [
          "Lift away fallen leaves and collapsed petals.",
          "Check the drainage holes and pot feet.",
          "Remove any soft decaying tissue with clean tools."
        ],
        "id": "nov-echinacea-pot-protection",
        "priority": "ongoing",
        "category": "protect",
        "potKey": "wallpot2",
        "title": "Keep the Echinacea crown clear",
        "timing": "After storms, hard frost or persistent autumn rain.",
        "summary": "Clear debris, confirm drainage and leave the dormant crown open to the air.",
        "why": "A small container can hold cold damp debris around the crown unless it is checked regularly.",
        "doneWhen": "The crown is visible, firm and freely ventilated.",
        "guide": "protect",
        "sources": [
          "fleece",
          "plant-wallpot2-echinacea-mooodz-glory"
        ],
        "plantNotes": {},
        "caution": "Check the plant-specific limits: fleece reduces exposure but does not make an outdoor position frost-free."
      },
      {
        "scope": "zone",
        "zoneKeys": [],
        "plantIds": [],
        "steps": [
          "Wash and dry blades thoroughly.",
          "Sharpen to the existing bevel and oil the joint.",
          "Replace damaged blades or loose fasteners."
        ],
        "id": "nov-clean-tools",
        "priority": "month",
        "category": "check",
        "title": "Clean and sharpen the winter pruning tools",
        "timing": "Before the apple and pear pruning season begins again.",
        "summary": "Clean blades, remove sap and rust, sharpen cutting edges and check moving parts.",
        "why": "Sharp clean tools make smaller wounds and reduce the chance of carrying disease between plants.",
        "doneWhen": "Secateurs and loppers cut clean paper or a test twig without crushing.",
        "guide": "check",
        "sources": [
          "month-november"
        ],
        "plantNotes": {}
      },
      {
        "id": "nov-winter-viola-round",
        "priority": "ongoing",
        "category": "refresh",
        "scope": "zone",
        "zoneKeys": [
          "stairpots",
          "staircans",
          "bed5",
          "lobeliapot",
          "frontBed5"
        ],
        "plantIds": [
          "stairpots-violas-pansies-group",
          "staircans-violas-pansies-group",
          "bed5-big-pot-violas-pansies",
          "lobeliapot-viola-rocky-purple-picotee",
          "frontBed5-viola-rocky-purple-picotee"
        ],
        "title": "Keep the winter Violas and Pansies flowering",
        "timing": "When blooms fade and after heavy rain; skip frozen plants.",
        "summary": "Remove spent flower stems and wet debris, retaining healthy plants for continued colour.",
        "why": "Give this planting the seasonal attention it needs without disturbing healthy neighbouring plants.",
        "steps": [
          "Pinch each finished flower stalk near its base, including the seed capsule.",
          "Clear wet leaves from crowns and check that cans and pots drain.",
          "Replace only failed plants; settle any replacements with water when the compost is unfrozen."
        ],
        "doneWhen": "The named work is complete and healthy growth remains undamaged.",
        "sources": [
          "deadhead",
          "fleece",
          "plant-stairpots-violas-pansies-group",
          "plant-staircans-violas-pansies-group",
          "plant-bed5-big-pot-violas-pansies",
          "plant-lobeliapot-viola-rocky-purple-picotee",
          "plant-frontBed5-viola-rocky-purple-picotee"
        ],
        "guide": "refresh",
        "plantNotes": {
          "stairpots-violas-pansies-group": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed.",
          "staircans-violas-pansies-group": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed.",
          "bed5-big-pot-violas-pansies": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed.",
          "lobeliapot-viola-rocky-purple-picotee": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed.",
          "frontBed5-viola-rocky-purple-picotee": "Keep healthy Violas and Pansies. Pinch off each finished flower with its seed capsule; clear soggy leaves and replace only plants that have failed."
        }
      }
    ],
    "highlights": [
      {
        "scope": "zone",
        "zoneKeys": [
          "frontBed3"
        ],
        "plantIds": [],
        "id": "nov-dogwood",
        "title": "Dogwood stems take over Front Bed 3",
        "note": "The red framework becomes the front garden’s strongest winter feature."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1"
        ],
        "plantIds": [],
        "id": "nov-bed1-evergreen",
        "title": "Bed 1 returns to evergreen structure",
        "note": "Box, Japanese Aralia and rhododendron remain after the softer layers collapse."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "frontBed4",
          "frontBed5"
        ],
        "plantIds": [],
        "id": "nov-front4-5",
        "title": "The front borders hold colour in foliage",
        "note": "Physocarpus, spiraea, Coprosma, heathers and evergreen shrubs carry the transition."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "frontGateTree"
        ],
        "plantIds": [
          "frontGateTree-weeping-crab-apple"
        ],
        "id": "nov-crab-apples",
        "title": "Crab apples may persist by the gate",
        "note": "Small fruit can continue the display and feed visiting birds."
      }
    ],
    "indoorJobs": [
      {
        "id": "nov-birthday-houseplants-moisture-2026",
        "scope": "zone",
        "zoneKeys": [
          "houseSittingRhipsalis",
          "houseSittingDracaena",
          "houseLandingCrassula",
          "houseKitchenPhilodendron",
          "houseLandingZamioculcas"
        ],
        "plantIds": [
          "house-sitting-rhipsalis",
          "house-sitting-dracaena-bicolour",
          "house-landing-crassula-hottentot",
          "house-kitchen-philodendron",
          "house-landing-zamioculcas"
        ],
        "priority": "ongoing",
        "category": "check",
        "title": "Check the five birthday houseplants individually",
        "timing": "When inspecting pots; reduce watering as light and growth decline.",
        "summary": "Feel each root ball before deciding whether to water; drain every outer pot after a drink.",
        "why": "The hanging cactus and young Philodendron dry differently from the water-storing Crassula and Zamioculcas.",
        "doneWhen": "All five root balls have been checked and any surplus water emptied.",
        "steps": [
          "Feel below the surface and lift each accessible inner pot.",
          "Water only the specimens whose compost has reached their stated drying point.",
          "Let runoff finish and return each pot to its marked position."
        ],
        "guide": "check",
        "sources": [
          "oct-house-rhipsalis",
          "oct-house-dracaena",
          "oct-house-crassula",
          "oct-house-philodendron",
          "oct-house-zamioculcas"
        ],
        "plantNotes": {
          "house-sitting-rhipsalis": "Let the surface begin to dry, then water and drain; avoid prolonged drought.",
          "house-sitting-dracaena-bicolour": "Allow the upper compost to dry before soaking and draining; use rainwater where possible.",
          "house-landing-crassula-hottentot": "Let compost dry between soakings; water sparingly through winter.",
          "house-kitchen-philodendron": "Water once the upper compost begins to dry and let excess drain completely.",
          "house-landing-zamioculcas": "Allow the whole root ball to dry before watering; reduce checks into winter."
        }
      }
    ]
  },
  "December": {
    "theme": "Protect, inspect and plan; make only the winter cuts that are genuinely due.",
    "jobs": [
      {
        "scope": "zone",
        "zoneKeys": [
          "bed4",
          "pear",
          "frontApple",
          "frontGateTree"
        ],
        "plantIds": [
          "bed4-apple-tree",
          "stone-pear-tree",
          "frontApple-apple-tree",
          "frontGateTree-weeping-crab-apple"
        ],
        "steps": [
          "Inspect each full framework before cutting.",
          "Remove only dead, damaged or rubbing wood first.",
          "Preserve the crab apple’s pendulous outline."
        ],
        "id": "dec-start-fruit-pruning",
        "priority": "first",
        "category": "prune",
        "title": "Begin restrained apple, pear and crab-apple pruning",
        "timing": "After leaf fall on a dry, frost-free day.",
        "summary": "Start with dead, damaged and crossing wood; leave optional shaping for January if conditions are poor.",
        "why": "Bare branches reveal the framework, but there is no benefit in rushing cuts during bad weather.",
        "doneWhen": "Safety and sound-wood cuts are complete and any optional work is recorded for later.",
        "caution": "Do not include the cherry or damson in this dormant prune.",
        "guide": "prune",
        "sources": [
          "fruit",
          "shrubs",
          "plant-bed4-apple-tree",
          "plant-stone-pear-tree",
          "plant-frontApple-apple-tree",
          "plant-frontGateTree-weeping-crab-apple"
        ],
        "plantNotes": {
          "bed4-apple-tree": "Preserve fruiting spurs and remove dead or rubbing wood first. Keep total removal modest; do not shorten every branch tip, especially on the assumed Bramley which may bear some fruit at tips.",
          "stone-pear-tree": "Keep the established fruiting framework and short spur-bearing wood. Remove inward or rubbing shoots only when necessary; avoid a hard height reduction.",
          "frontApple-apple-tree": "Preserve fruiting spurs and remove dead or rubbing wood first. Keep total removal modest; do not shorten every branch tip, especially on the assumed Bramley which may bear some fruit at tips.",
          "frontGateTree-weeping-crab-apple": "Preserve the weeping shape. Limit routine pruning to dead, damaged or crossing branches; avoid shortening every hanging shoot."
        },
        "diagram": "collar"
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "stone",
          "bed1",
          "frontBed4",
          "bed4",
          "frontBed5"
        ],
        "plantIds": [
          "stone-echeveria",
          "stone-echeveria-devotion",
          "stone-pennisetum-rubrum",
          "bed1-dahlia",
          "bed1-dahlia-yellow",
          "frontBed4-dahlia-tampico",
          "bed4-callistemon-inferno-yanferno",
          "frontBed5-salvia-salgoon-lake-blueberry"
        ],
        "steps": [
          "Refasten loose outdoor covers; remove sodden debris and ventilate in mild spells.",
          "Keep container drainage open and check crowns without cutting healthy protective growth.",
          "For plants housed elsewhere, arrange a check for rot and labels; fleece outdoors is not a substitute for that accommodation."
        ],
        "id": "dec-check-tender-storage-reviewed",
        "priority": "first",
        "category": "protect",
        "title": "Check outdoor protection and any arranged winter homes",
        "timing": "Monthly, and after severe weather.",
        "summary": "Recheck the outdoor plants after cold or wet weather. Inspect stored plants only if frost-free accommodation was actually arranged.",
        "why": "Small winter problems are easier to correct before they spread through stored plants or exposed crowns.",
        "doneWhen": "Outdoor protection is secure and breathable, and any plants housed elsewhere have been checked.",
        "sources": [
          "fleece",
          "plant-stone-echeveria",
          "plant-stone-echeveria-devotion",
          "plant-stone-pennisetum-rubrum",
          "plant-bed1-dahlia",
          "plant-bed1-dahlia-yellow",
          "plant-frontBed4-dahlia-tampico",
          "plant-bed4-callistemon-inferno-yanferno",
          "plant-frontBed5-salvia-salgoon-lake-blueberry"
        ],
        "guide": "protect",
        "plantNotes": {
          "stone-echeveria": "Needs a bright frost-free winter home. Outdoor fleece or a rain shelter cannot reliably keep this Echeveria alive through a Bromsgrove winter; arrange accommodation elsewhere if keeping it matters.",
          "stone-echeveria-devotion": "Needs a bright frost-free winter home. Outdoor fleece or a rain shelter cannot reliably keep this Echeveria alive through a Bromsgrove winter; arrange accommodation elsewhere if keeping it matters.",
          "stone-pennisetum-rubrum": "Rubrum is H3, unlike hardy fountain grasses. Keep it drained and sheltered, but frost-free accommodation gives a more dependable winter outcome than outdoor fleece.",
          "bed1-dahlia": "Tender Dahlia: protect emerged shoots from spring frost. After autumn dieback, an outdoor tuber needs well-drained ground and roughly 15cm mulch, with losses still possible; lifted tubers require frost-free storage.",
          "bed1-dahlia-yellow": "Tender Dahlia: protect emerged shoots from spring frost. After autumn dieback, an outdoor tuber needs well-drained ground and roughly 15cm mulch, with losses still possible; lifted tubers require frost-free storage.",
          "frontBed4-dahlia-tampico": "Tender Dahlia: protect emerged shoots from spring frost. After autumn dieback, an outdoor tuber needs well-drained ground and roughly 15cm mulch, with losses still possible; lifted tubers require frost-free storage.",
          "bed4-callistemon-inferno-yanferno": "Inferno is borderline outdoors here. Use fleece for brief cold spells, keep drainage open and retain healthy evergreen growth; prolonged freezing may still damage it.",
          "frontBed5-salvia-salgoon-lake-blueberry": "Lake Blueberry is H3. Keep some sound top growth and a drained crown. Outdoor protection is uncertain in severe cold; a cutting also needs an arranged frost-free home."
        },
        "caution": "Check the plant-specific limits: fleece reduces exposure but does not make an outdoor position frost-free."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "bed2",
          "bed4",
          "bed5",
          "pear",
          "frontBed3",
          "frontBed4",
          "frontBed5",
          "frontApple",
          "frontGateTree"
        ],
        "plantIds": [],
        "steps": [
          "Check paths from ground level before working overhead.",
          "Remove only broken hanging material that is safe to reach.",
          "Retie climbers and gently clear heavy snow from flexible evergreens."
        ],
        "id": "dec-storm-damage",
        "priority": "month",
        "category": "check",
        "title": "Walk the garden after winter storms",
        "timing": "After strong wind, snow or ice.",
        "summary": "Look for split branches, pulled ties, leaning pots and overloaded evergreen foliage.",
        "why": "Promptly making hazards safe prevents further tearing and damage to supports.",
        "doneWhen": "Paths are safe, supports are secure and any specialist tree work is clearly identified.",
        "caution": "Do not climb or work beneath unstable branches.",
        "guide": "check",
        "sources": [
          "month-december"
        ],
        "plantNotes": {}
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "steps",
          "lounge",
          "patio"
        ],
        "plantIds": [],
        "steps": [
          "Clear the steps from top to bottom.",
          "Sweep the patio and access edges where leaves collect.",
          "Move debris to an appropriate habitat or compost area away from the walking route."
        ],
        "id": "dec-clear-winter-access",
        "priority": "month",
        "category": "check",
        "title": "Keep steps and winter access clear",
        "timing": "After leaf fall, storms or freezing weather.",
        "summary": "Remove slippery leaf mats, loose branches and debris from the main garden route without disturbing planted areas.",
        "why": "Safe access makes every later winter inspection easier and prevents wet debris building up against bed edges.",
        "doneWhen": "The route from house to upper garden is clear, stable and easy to inspect.",
        "guide": "check",
        "sources": [
          "month-december"
        ],
        "plantNotes": {}
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1",
          "bed2",
          "bed3",
          "bed4",
          "bed5",
          "stone",
          "frontBed1",
          "frontBed2",
          "frontBed3",
          "frontBed4",
          "frontBed5"
        ],
        "plantIds": [],
        "steps": [
          "Walk each bed with the garden plan.",
          "Note jobs by location rather than creating a shopping list first.",
          "Mark which tasks must wait for new growth or post-flowering timing."
        ],
        "id": "dec-plan-spring",
        "priority": "month",
        "category": "check",
        "title": "Make the spring preparation list",
        "timing": "During the quietest garden weeks.",
        "summary": "Record missing supports, mulch needs, congested plants, failed annuals and any labels that need confirming.",
        "why": "A short site-specific list prevents impulse work and makes February and March more manageable.",
        "doneWhen": "Spring priorities are written by area with the correct timing attached.",
        "guide": "check",
        "sources": [
          "month-december"
        ],
        "plantNotes": {}
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "stone",
          "frontStone",
          "bed1",
          "bed2",
          "frontBed4",
          "frontBed5"
        ],
        "plantIds": [],
        "steps": [
          "Prioritise the Stone Bed and trough.",
          "Clear around peony, hosta and low evergreen crowns.",
          "Leave clean loose habitat material in safer open positions."
        ],
        "id": "dec-leaf-and-crown-check",
        "priority": "ongoing",
        "category": "check",
        "title": "Keep vulnerable crowns free of compacted debris",
        "timing": "After leaf fall, wind or heavy rain.",
        "summary": "Lift dense wet material from rosettes, alpines, low evergreens and dormant crowns.",
        "why": "Open crowns and drainage reduce winter rot while the rest of the garden can remain less tidied.",
        "doneWhen": "No vulnerable plant is sealed under a wet mat.",
        "guide": "check",
        "sources": [
          "month-december"
        ],
        "plantNotes": {}
      }
    ],
    "highlights": [
      {
        "scope": "zone",
        "zoneKeys": [
          "frontBed3"
        ],
        "plantIds": [],
        "id": "dec-dogwood",
        "title": "The dogwood reaches peak winter colour",
        "note": "Low winter sun makes the red stems of Front Bed 3 especially vivid."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "stone"
        ],
        "plantIds": [],
        "id": "dec-stone",
        "title": "The Stone Bed keeps its graphic shapes",
        "note": "Rosettes, sword leaves and gravel remain legible when softer planting has disappeared."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "frontBed2",
          "frontBed4",
          "frontBed5"
        ],
        "plantIds": [],
        "id": "dec-front-evergreen",
        "title": "Evergreen front borders carry the garden",
        "note": "Laurel, Choisya, Pieris, heathers, Coprosma and other foliage plants hold the entrance together."
      },
      {
        "scope": "zone",
        "zoneKeys": [
          "bed1"
        ],
        "plantIds": [],
        "id": "dec-bed1",
        "title": "Bed 1’s winter framework",
        "note": "The maple branches sit over a steady layer of box, rhododendron and Japanese Aralia."
      }
    ],
    "indoorJobs": [
      {
        "scope": "plant",
        "zoneKeys": [
          "houseHallKentia"
        ],
        "plantIds": [
          "house-hallway-kentia-palm"
        ],
        "steps": [
          "Feel for draughts around doors and windows.",
          "Confirm no radiator blows directly onto the fronds.",
          "Clean leaves and inspect for pests."
        ],
        "id": "dec-indoor-kentia-winter",
        "priority": "month",
        "category": "check",
        "title": "Keep the Kentia clear of winter extremes",
        "timing": "During the shortest days and whenever the heating pattern changes.",
        "summary": "Check for cold draughts, direct radiator heat, dust and pests; do not feed through the slow-growth period.",
        "why": "Stable light and temperature matter more than active intervention in winter.",
        "doneWhen": "The position is stable, leaves are clean and no winter feeding is scheduled.",
        "guide": "check",
        "sources": [
          "month-december",
          "plant-house-hallway-kentia-palm"
        ],
        "plantNotes": {}
      },
      {
        "id": "dec-birthday-houseplants-moisture-2026",
        "scope": "zone",
        "zoneKeys": [
          "houseSittingRhipsalis",
          "houseSittingDracaena",
          "houseLandingCrassula",
          "houseKitchenPhilodendron",
          "houseLandingZamioculcas"
        ],
        "plantIds": [
          "house-sitting-rhipsalis",
          "house-sitting-dracaena-bicolour",
          "house-landing-crassula-hottentot",
          "house-kitchen-philodendron",
          "house-landing-zamioculcas"
        ],
        "priority": "ongoing",
        "category": "check",
        "title": "Check the five birthday houseplants individually",
        "timing": "When inspecting pots; reduce watering as light and growth decline.",
        "summary": "Feel each root ball before deciding whether to water; drain every outer pot after a drink.",
        "why": "The hanging cactus and young Philodendron dry differently from the water-storing Crassula and Zamioculcas.",
        "doneWhen": "All five root balls have been checked and any surplus water emptied.",
        "steps": [
          "Feel below the surface and lift each accessible inner pot.",
          "Water only the specimens whose compost has reached their stated drying point.",
          "Let runoff finish and return each pot to its marked position."
        ],
        "guide": "check",
        "sources": [
          "oct-house-rhipsalis",
          "oct-house-dracaena",
          "oct-house-crassula",
          "oct-house-philodendron",
          "oct-house-zamioculcas"
        ],
        "plantNotes": {
          "house-sitting-rhipsalis": "Let the surface begin to dry, then water and drain; avoid prolonged drought.",
          "house-sitting-dracaena-bicolour": "Allow the upper compost to dry before soaking and draining; use rainwater where possible.",
          "house-landing-crassula-hottentot": "Let compost dry between soakings; water sparingly through winter.",
          "house-kitchen-philodendron": "Water once the upper compost begins to dry and let excess drain completely.",
          "house-landing-zamioculcas": "Allow the whole root ball to dry before watering; reduce checks into winter."
        }
      }
    ]
  }
};
  window.OAK.SEASONAL = SEASONAL;
  window.OAK.SEASONAL_SOURCES = {
  "wisteria": {
    "title": "RHS · Wisteria pruning",
    "url": "https://www.rhs.org.uk/plants/wisteria/pruning-guide"
  },
  "hydrangea": {
    "title": "RHS · Hydrangea pruning",
    "url": "https://www.rhs.org.uk/plants/hydrangea/pruning-guide"
  },
  "clematis": {
    "title": "RHS · Clematis pruning",
    "url": "https://www.rhs.org.uk/plants/clematis/pruning-guide"
  },
  "roses": {
    "title": "RHS · Climbing roses",
    "url": "https://www.rhs.org.uk/plants/roses/climbing/pruning-guide"
  },
  "fruit": {
    "title": "RHS · Apple and pear pruning",
    "url": "https://www.rhs.org.uk/fruit/apples/winter-pruning"
  },
  "mulch": {
    "title": "RHS · Mulches and mulching",
    "url": "https://www.rhs.org.uk/soil-composts-mulches/mulch"
  },
  "fleece": {
    "title": "RHS · Fleece and frost protection",
    "url": "https://www.rhs.org.uk/prevention-protection/fleece-and-crop-covers"
  },
  "dahlia": {
    "title": "RHS · Dahlias",
    "url": "https://www.rhs.org.uk/plants/dahlia/growing-guide"
  },
  "alstroemeria": {
    "title": "RHS · Alstroemeria",
    "url": "https://www.rhs.org.uk/plants/alstroemeria/growing-guide"
  },
  "euphorbia": {
    "title": "RHS · Garden Euphorbias",
    "url": "https://www.rhs.org.uk/plants/euphorbia/growing-guide"
  },
  "deadhead": {
    "title": "RHS · Deadheading",
    "url": "https://www.rhs.org.uk/garden-jobs/deadheading-plants"
  },
  "divide": {
    "title": "RHS · Dividing perennials",
    "url": "https://www.rhs.org.uk/plants/types/perennials/dividing"
  },
  "plant": {
    "title": "RHS · Planting trees and shrubs",
    "url": "https://www.rhs.org.uk/plants/types/trees/planting-trees-shrubs"
  },
  "shrubs": {
    "title": "RHS · Pruning shrubs",
    "url": "https://www.rhs.org.uk/advice/beginners-guide/pruning-plants/pruning-shrubs"
  },
  "heathers": {
    "title": "RHS · Heathers",
    "url": "https://www.rhs.org.uk/plants/types/heathers"
  },
  "honeysuckle": {
    "title": "RHS · Climbing honeysuckle",
    "url": "https://www.rhs.org.uk/plants/honeysuckle/climbing/growing-guide"
  },
  "month-january": {
    "title": "RHS · January garden jobs",
    "url": "https://www.rhs.org.uk/advice/in-month/january/flowers"
  },
  "plant-bed4-apple-tree": {
    "title": "Royal Horticultural Society · How to grow apples",
    "url": "https://www.rhs.org.uk/fruit/apples/grow-your-own"
  },
  "plant-stone-pear-tree": {
    "title": "Royal Horticultural Society · How to grow pears",
    "url": "https://www.rhs.org.uk/fruit/pears/grow-your-own"
  },
  "plant-frontApple-apple-tree": {
    "title": "Royal Horticultural Society · How to grow apples",
    "url": "https://www.rhs.org.uk/fruit/apples/grow-your-own"
  },
  "plant-bed5-rose": {
    "title": "Royal Horticultural Society · How to grow roses",
    "url": "https://www.rhs.org.uk/plants/roses/growing-guide"
  },
  "plant-bed2-weeping-cherry": {
    "title": "Royal Horticultural Society · How to grow cherries",
    "url": "https://www.rhs.org.uk/fruit/cherries/grow-your-own"
  },
  "plant-frontApple-damson-tree": {
    "title": "Royal Horticultural Society · How to grow damsons",
    "url": "https://www.rhs.org.uk/fruit/damsons/grow-your-own"
  },
  "plant-stone-pennisetum-rubrum": {
    "title": "Royal Horticultural Society · Pennisetum ‘Rubrum’",
    "url": "https://www.rhs.org.uk/plants/46761/pennisetum-setaceum-rubrum/details"
  },
  "plant-stone-echeveria": {
    "title": "Royal Horticultural Society · Echeveria ‘Perle von Nürnberg’",
    "url": "https://www.rhs.org.uk/plants/104319/echeveria-perle-von-nurnberg/details"
  },
  "plant-stone-echeveria-devotion": {
    "title": "Royal Horticultural Society · Echeveria pulvinata Devotion",
    "url": "https://www.rhs.org.uk/plants/519979/echeveria-pulvinata-devotion-bcec12001-pbr/details"
  },
  "plant-bed4-callistemon-inferno-yanferno": {
    "title": "Royal Horticultural Society · Callistemon Inferno (‘Yanferno’)",
    "url": "https://www.rhs.org.uk/plants/299484/callistemon-inferno-yanferno/details"
  },
  "plant-frontBed5-bluebell-creeper-sollya": {
    "title": "Royal Horticultural Society · Billardiera heterophylla",
    "url": "https://www.rhs.org.uk/plants/247863/billardiera-heterophylla/details"
  },
  "plant-frontBed5-salvia-salgoon-lake-blueberry": {
    "title": "Royal Horticultural Society · Salvia Lake Blueberry (‘Tl1016’)",
    "url": "https://www.rhs.org.uk/plants/524743/salvia-lake-blueberry-tl1016-salgoon-series/details"
  },
  "plant-stairpots-violas-pansies-group": {
    "title": "RHS · Winter container selection",
    "url": "https://www.rhs.org.uk/container-gardening/winter-selection"
  },
  "plant-staircans-violas-pansies-group": {
    "title": "RHS · Winter container selection",
    "url": "https://www.rhs.org.uk/container-gardening/winter-selection"
  },
  "plant-bed5-big-pot-violas-pansies": {
    "title": "RHS · Grow pansies",
    "url": "https://www.rhs.org.uk/education-learning/children-young-people/family-activities/grow-it/pansy"
  },
  "plant-lobeliapot-viola-rocky-purple-picotee": {
    "title": "RHS · Grow pansies",
    "url": "https://www.rhs.org.uk/education-learning/children-young-people/family-activities/grow-it/pansy"
  },
  "plant-frontBed5-viola-rocky-purple-picotee": {
    "title": "RHS · Grow pansies",
    "url": "https://www.rhs.org.uk/education-learning/children-young-people/family-activities/grow-it/pansy"
  },
  "plant-house-hallway-kentia-palm": {
    "title": "Royal Horticultural Society · Kentia palm houseplant care",
    "url": "https://www.rhs.org.uk/shows-events/rhs-urban-show/houseplant-profiles/houseplants-for-humidity"
  },
  "month-february": {
    "title": "RHS · February garden jobs",
    "url": "https://www.rhs.org.uk/advice/in-month/february/flowers"
  },
  "plant-bed5-wisteria": {
    "title": "RHS · Wisteria pruning",
    "url": "https://www.rhs.org.uk/plants/wisteria/pruning-guide"
  },
  "plant-frontBed5-clematis": {
    "title": "RHS · Clematis pruning",
    "url": "https://www.rhs.org.uk/plants/clematis/pruning-guide"
  },
  "plant-frontBed5-hydrangea-bloody-marie": {
    "title": "RHS · Hydrangea pruning",
    "url": "https://www.rhs.org.uk/plants/hydrangea/pruning-guide"
  },
  "plant-bed2-variegated-dogwood": {
    "title": "Royal Horticultural Society · Cornus alba ‘Elegantissima’",
    "url": "https://www.rhs.org.uk/plants/89376/cornus-alba-elegantissima-v/details"
  },
  "plant-frontGateTree-weeping-crab-apple": {
    "title": "Royal Horticultural Society · Crab apple ‘Red Jade’",
    "url": "https://www.rhs.org.uk/plants/55898/malus-scheideckeri-red-jade/details"
  },
  "plant-frontBed3-rose-pink": {
    "title": "Royal Horticultural Society · How to grow roses",
    "url": "https://www.rhs.org.uk/plants/roses/growing-guide"
  },
  "plant-frontBed4-the-pilgrim": {
    "title": "Royal Horticultural Society · Rose The Pilgrim (‘Auswalker’)",
    "url": "https://www.rhs.org.uk/plants/61955/rosa-the-pilgrim-auswalker-s/details"
  },
  "plant-frontBed4-the-generous-gardener": {
    "title": "Royal Horticultural Society · Rose The Generous Gardener (‘Ausdrawn’)",
    "url": "https://www.rhs.org.uk/plants/196207/rosa-the-generous-gardener-ausdrawn-pbr-cl/details"
  },
  "plant-bed2-peony": {
    "title": "Royal Horticultural Society · Herbaceous peony guide",
    "url": "https://www.rhs.org.uk/plants/peony/herbaceous/growing-guide"
  },
  "plant-frontBed3-climbing-rose-white-pink": {
    "title": "Royal Horticultural Society · Rose Super Fairy (‘Helsufair’)",
    "url": "https://www.rhs.org.uk/plants/136423/rosa-super-fairy-%28-helsufair-pbr%29-%28ra%29/details"
  },
  "month-march": {
    "title": "RHS · March garden jobs",
    "url": "https://www.rhs.org.uk/advice/in-month/march/flowers"
  },
  "plant-bed2-spiraea-double-play-big-bang": {
    "title": "Royal Horticultural Society · Spiraea Double Play Big Bang",
    "url": "https://www.rhs.org.uk/plants/353105/spiraea-span-style-font-variant-small-caps-double-play-big-bang/details"
  },
  "plant-frontBed4-magic-carpet": {
    "title": "Royal Horticultural Society · Spiraea Magic Carpet (‘Walbuma’)",
    "url": "https://www.rhs.org.uk/plants/104244/japanese-spirea-magic-carpet/details"
  },
  "plant-frontBed5-gaura-gaudi-red": {
    "title": "Royal Horticultural Society · Gaura Gaudi Red (‘Florgaured’)",
    "url": "https://www.rhs.org.uk/plants/334787/gaura-lindheimeri-gaudi-red-florgaured/details"
  },
  "plant-frontBed5-hardy-fuchsia": {
    "title": "Royal Horticultural Society · Hardy fuchsias",
    "url": "https://www.rhs.org.uk/plants/fuchsia/hardy/growing-guide"
  },
  "plant-bed4-gaillardia": {
    "title": "Royal Horticultural Society · Gaillardia × grandiflora",
    "url": "https://www.rhs.org.uk/plants/190980/gaillardia-grandiflora-fanfare-pbr/details"
  },
  "plant-bed1-hosta": {
    "title": "Royal Horticultural Society · Hosta ‘Patriot’",
    "url": "https://www.rhs.org.uk/plants/64893/hosta-patriot-v/details"
  },
  "plant-bed1-hosta-gold": {
    "title": "Royal Horticultural Society · How to grow hostas",
    "url": "https://www.rhs.org.uk/plants/hosta/growing-guide"
  },
  "plant-bed2-avens": {
    "title": "Royal Horticultural Society · How to grow geums",
    "url": "https://www.rhs.org.uk/plants/geum/growing-guide"
  },
  "plant-bed2-centaurea-snowy-owl": {
    "title": "Royal Horticultural Society · Centaurea trial and cultivation",
    "url": "https://www.rhs.org.uk/plants/trials-awards/ongoing-plant-trials/centaurea"
  },
  "plant-frontBed2-polemonium-golden-feathers": {
    "title": "Royal Horticultural Society · Polemonium ‘Golden Feathers’",
    "url": "https://www.rhs.org.uk/plants/504797/polemonium-golden-feathers-pbr-%28v%29/details"
  },
  "plant-frontBed4-astrantia-trio": {
    "title": "Royal Horticultural Society · Astrantia plant guide",
    "url": "https://www.rhs.org.uk/plants/astrantia"
  },
  "plant-frontBed5-ceratostigma-plumbaginoides": {
    "title": "Royal Horticultural Society · Ceratostigma plumbaginoides",
    "url": "https://www.rhs.org.uk/plants/3410/hardy-blue-flowered-leadwort/details"
  },
  "plant-frontStone-hosta": {
    "title": "Royal Horticultural Society · How to grow hostas",
    "url": "https://www.rhs.org.uk/plants/hosta/growing-guide"
  },
  "plant-frontBed5-heather-bells-extra-special": {
    "title": "Royal Horticultural Society · Erica ‘Bell’s Extra Special’",
    "url": "https://www.rhs.org.uk/plants/47571/erica-carnea-f-aureifolia-bell-s-extra-special/details"
  },
  "plant-frontBed5-heather-tib": {
    "title": "Royal Horticultural Society · Calluna vulgaris ‘Tib’",
    "url": "https://www.rhs.org.uk/plants/90121/calluna-vulgaris-tib-%28d%29/details"
  },
  "plant-frontBed5-heather-leprechaun": {
    "title": "Royal Horticultural Society · Calluna vulgaris",
    "url": "https://www.rhs.org.uk/plants/2712/calluna-vulgaris/details"
  },
  "plant-frontBed5-heather-winter-chocolate": {
    "title": "Royal Horticultural Society · Calluna ‘Winter Chocolate’",
    "url": "https://www.rhs.org.uk/plants/98949/calluna-vulgaris-winter-chocolate/details"
  },
  "plant-bed1-box-hedging": {
    "title": "Royal Horticultural Society · Buxus sempervirens",
    "url": "https://www.rhs.org.uk/plants/2579/buxus-sempervirens/details"
  },
  "plant-bed2-butterfly-bush": {
    "title": "Royal Horticultural Society · How to grow Buddleja",
    "url": "https://www.rhs.org.uk/plants/buddleja/growing-guide"
  },
  "plant-bed2-rose-inherited": {
    "title": "Royal Horticultural Society · How to grow roses",
    "url": "https://www.rhs.org.uk/plants/roses/growing-guide"
  },
  "plant-bed3-rose-inherited": {
    "title": "Royal Horticultural Society · How to grow roses",
    "url": "https://www.rhs.org.uk/plants/roses/growing-guide"
  },
  "plant-frontBed5-climber-unidentified": {
    "title": "Royal Horticultural Society · How to grow roses",
    "url": "https://www.rhs.org.uk/plants/roses/growing-guide"
  },
  "plant-bed1-abelia-kaleidoscope": {
    "title": "Royal Horticultural Society · Abelia ‘Kaleidoscope’",
    "url": "https://www.rhs.org.uk/plants/250073/abelia-kaleidoscope/details"
  },
  "plant-bed2-abelia-raspberry-profusion": {
    "title": "RHS · Abelia 'Raspberry Profusion'",
    "url": "https://www.rhs.org.uk/plants/305064/abelia-raspberry-profusion/details"
  },
  "plant-bed4-abelia-kaleidoscope": {
    "title": "Royal Horticultural Society · Abelia ‘Kaleidoscope’",
    "url": "https://www.rhs.org.uk/plants/250073/abelia-kaleidoscope/details"
  },
  "plant-bed4-abelia-radiance": {
    "title": "RHS · Abelia",
    "url": "https://www.rhs.org.uk/plants/abelia"
  },
  "plant-frontBed1-hydrangea": {
    "title": "RHS · Hydrangea pruning",
    "url": "https://www.rhs.org.uk/plants/hydrangea/pruning-guide"
  },
  "plant-lobeliapot-skimmia-cleopatra": {
    "title": "RHS · Skimmia growing guide",
    "url": "https://www.rhs.org.uk/plants/skimmia/growing-guide"
  },
  "plant-lobeliapot-skimmia-antarctica": {
    "title": "RHS · Skimmia growing guide",
    "url": "https://www.rhs.org.uk/plants/skimmia/growing-guide"
  },
  "plant-bed23wallpot-viburnum-lisarose": {
    "title": "Royal Horticultural Society · Viburnum tinus ‘Lisarose’",
    "url": "https://www.rhs.org.uk/plants/302763/viburnum-tinus-lisarose-pbr-laurustinus-lisarose/details"
  },
  "plant-viburnumpot-viburnum-tinus-spirit": {
    "title": "Royal Horticultural Society · Viburnum tinus Spirit (‘Anvi’)",
    "url": "https://www.rhs.org.uk/plants/196958/viburnum-tinus-spirit-%28anvipbr%29/details"
  },
  "plant-cercispot-cercis-carolina-sweetheart": {
    "title": "Royal Horticultural Society · Cercis canadensis Carolina Sweetheart",
    "url": "https://www.rhs.org.uk/plants/360237/cercis-canadensis-carolina-sweetheart-nccc1/details"
  },
  "month-april": {
    "title": "RHS · April garden jobs",
    "url": "https://www.rhs.org.uk/advice/in-month/april/flowers"
  },
  "plant-bed1-japanese-aralia": {
    "title": "Royal Horticultural Society · Fatsia guide",
    "url": "https://www.rhs.org.uk/plants/fatsia"
  },
  "plant-bed2-silverbush": {
    "title": "Royal Horticultural Society · Convolvulus cneorum",
    "url": "https://www.rhs.org.uk/plants/4333/convolvulus-cneorum/details"
  },
  "plant-frontBed2-coprosma-inferno": {
    "title": "Royal Horticultural Society · Coprosma ‘Inferno’",
    "url": "https://www.rhs.org.uk/plants/322018/coprosma-inferno-pbr-fv/details"
  },
  "plant-frontBed2-coprosma-pina-colada": {
    "title": "Royal Horticultural Society · Coprosma repens ‘Pina Colada’",
    "url": "https://www.rhs.org.uk/plants/297952/coprosma-repens-pina-colada-pbr-%28v%29/details"
  },
  "plant-frontBed2-coprosma-city-knights": {
    "title": "Royal Horticultural Society · Coprosma ‘City Knights’",
    "url": "https://www.rhs.org.uk/plants/505001/coprosma-city-knights-%28v%29/details"
  },
  "plant-frontBed4-flaming-silver": {
    "title": "Royal Horticultural Society · Pieris japonica ‘Flaming Silver’",
    "url": "https://www.rhs.org.uk/plants/117190/pieris-japonica-flaming-silver/details"
  },
  "plant-frontBed5-pittosporum-tom-thumb": {
    "title": "Royal Horticultural Society · Pittosporum ‘Tom Thumb’",
    "url": "https://www.rhs.org.uk/plants/77301/i-pittosporum-tenuifolium-i-tom-thumb/details"
  },
  "plant-frontBed5-hebe-rhubarb-and-custard": {
    "title": "Royal Horticultural Society · Veronica Rhubarb and Custard (‘Tull 302’)",
    "url": "https://www.rhs.org.uk/plants/388351/veronica-rhubarb-and-custard-tull-302-pbr-h/details"
  },
  "plant-bed1-japanese-maple": {
    "title": "Royal Horticultural Society · Acer palmatum ‘Bloodgood’",
    "url": "https://www.rhs.org.uk/plants/90785/acer-palmatum-bloodgood-a/details"
  },
  "plant-bed1-dahlia": {
    "title": "Concept Plants · Dahlia Double Dreamy® series",
    "url": "https://www.conceptplants.com/varieties/dahlia-double-dreamy"
  },
  "plant-bed1-dahlia-yellow": {
    "title": "Concept Plants · Dahlia Double Dreamy® series",
    "url": "https://www.conceptplants.com/varieties/dahlia-double-dreamy"
  },
  "plant-frontBed5-pieris-polar-passion": {
    "title": "Royal Horticultural Society · Pieris Polar Passion (‘Ppobas’)",
    "url": "https://www.rhs.org.uk/plants/504956/pieris-japonica-polar-passion-ppobas-pbr-v/details"
  },
  "plant-bed2-hydrangea-petiolaris": {
    "title": "Royal Horticultural Society · Climbing hydrangea",
    "url": "https://www.rhs.org.uk/plants/97624/hydrangea-anomala-subsp-petiolaris/details"
  },
  "plant-stone-honeysuckle": {
    "title": "Royal Horticultural Society · How to grow climbing honeysuckle",
    "url": "https://www.rhs.org.uk/plants/honeysuckle/climbing/growing-guide"
  },
  "plant-stone-clematis": {
    "title": "RHS · Clematis pruning",
    "url": "https://www.rhs.org.uk/plants/clematis/pruning-guide"
  },
  "plant-bed1-little-heath": {
    "title": "Royal Horticultural Society · Pieris japonica ‘Little Heath’",
    "url": "https://www.rhs.org.uk/plants/68304/pieris-japonica-little-heath-v/details"
  },
  "plant-bed1-pieris-forest-flame": {
    "title": "Royal Horticultural Society · Pieris ‘Forest Flame’",
    "url": "https://www.rhs.org.uk/plants/95172/i-pieris-i-forest-flame/details"
  },
  "plant-bed3-evergreen-candytuft": {
    "title": "Royal Horticultural Society · Iberis sempervirens",
    "url": "https://www.rhs.org.uk/plants/9066/iberis-sempervirens-perennial-candytuft-edging-candytuft-evergreen-candytuft/details"
  },
  "plant-bed3-variegated-periwinkle": {
    "title": "Royal Horticultural Society · Vinca minor ‘Illumination’",
    "url": "https://www.rhs.org.uk/plants/161486/vinca-minor-illumination-v/details"
  },
  "plant-bigpot1-fuchsia": {
    "title": "Royal Horticultural Society · Fuchsia ‘Mrs Popple’",
    "url": "https://www.rhs.org.uk/plants/84426/fuchsia-mrs-popple/details"
  },
  "plant-bigpot2-fuchsia": {
    "title": "Royal Horticultural Society · Fuchsia ‘Mrs Popple’",
    "url": "https://www.rhs.org.uk/plants/84426/fuchsia-mrs-popple/details"
  },
  "month-may": {
    "title": "RHS · May garden jobs",
    "url": "https://www.rhs.org.uk/advice/in-month/may/flowers"
  },
  "plant-bed1-rhododendron": {
    "title": "Royal Horticultural Society · Rhododendron ‘Goldflimmer’",
    "url": "https://www.rhs.org.uk/plants/75618/rhododendron-goldflimmer-v/details"
  },
  "plant-bigpot1-verbena": {
    "title": "Royal Horticultural Society · How to grow verbena",
    "url": "https://www.rhs.org.uk/plants/verbena/growing-guide"
  },
  "plant-bigpot1-calibrachoa": {
    "title": "Royal Horticultural Society · Calibrachoa Cabaret Series",
    "url": "https://www.rhs.org.uk/plants/297225/calibrachoa-cabaret-deep-blue-%28-balcabdebu-pbr%29-%28cabaret-series%29/details"
  },
  "plant-bigpot1-nepeta": {
    "title": "Royal Horticultural Society · Nepeta plant guide",
    "url": "https://www.rhs.org.uk/plants/nepeta"
  },
  "plant-bigpot1-lobelia": {
    "title": "Royal Horticultural Society · Lobelia Waterfall Blue Ice",
    "url": "https://www.rhs.org.uk/plants/311039/lobelia-erinus-waterfall-blue-ice-waterfall-series/details"
  },
  "plant-bigpot1-petunia": {
    "title": "Michigan State University Extension · Night Sky and Midnight Sky",
    "url": "https://msu-prod.dotcmscloud.com/news/consult-breeder-culture-sheets-for-success-with-new-cultivars"
  },
  "plant-bigpot2-lobelia": {
    "title": "Royal Horticultural Society · Lobelia Waterfall Blue Ice",
    "url": "https://www.rhs.org.uk/plants/311039/lobelia-erinus-waterfall-blue-ice-waterfall-series/details"
  },
  "plant-bigpot2-verbena": {
    "title": "Royal Horticultural Society · How to grow verbena",
    "url": "https://www.rhs.org.uk/plants/verbena/growing-guide"
  },
  "plant-bigpot2-petunia": {
    "title": "Royal Horticultural Society · Petunia Night Sky and cultivation",
    "url": "https://www.rhs.org.uk/plants/353095/petunia-kleph15313/details"
  },
  "plant-bigpot2-nepeta": {
    "title": "Royal Horticultural Society · Nepeta plant guide",
    "url": "https://www.rhs.org.uk/plants/nepeta"
  },
  "plant-littlepot1-hellebore-ice-n-roses-bennotta": {
    "title": "RHS · Hellebore growing guide",
    "url": "https://www.rhs.org.uk/plants/hellebore/growing-guide"
  },
  "plant-wallpot2-coreopsis-gold": {
    "title": "Royal Horticultural Society · How to grow Coreopsis",
    "url": "https://www.rhs.org.uk/plants/coreopsis/growing-guide"
  },
  "plant-baskets-calluna-trio-mix": {
    "title": "RHS · Calluna growing guide",
    "url": "https://www.rhs.org.uk/plants/calluna/growing-guide"
  },
  "plant-baskets-viola-rocky-purple-picotee": {
    "title": "RHS · Grow pansies",
    "url": "https://www.rhs.org.uk/education-learning/children-young-people/family-activities/grow-it/pansy"
  },
  "plant-baskets-hedera-yellow-ripple": {
    "title": "RHS · Hedera helix 'Golden Starlight' ('Yellow Ripple')",
    "url": "https://www.rhs.org.uk/plants/357534/hedera-helix-golden-starlight-v/details"
  },
  "plant-baskets-pansy-fire": {
    "title": "RHS · Grow pansies",
    "url": "https://www.rhs.org.uk/education-learning/children-young-people/family-activities/grow-it/pansy"
  },
  "plant-baskets-pansy-rose-surprise": {
    "title": "RHS · Grow pansies",
    "url": "https://www.rhs.org.uk/education-learning/children-young-people/family-activities/grow-it/pansy"
  },
  "plant-frontpot-gazania-sunny-side-up": {
    "title": "Royal Horticultural Society · Gazania Zany Sunny-Side Up",
    "url": "https://www.rhs.org.uk/plants/531161/gazania-rigens-zany-sunny-side-up-%28zany-series%29/details"
  },
  "plant-frontpot-gazania-orange-flame": {
    "title": "Royal Horticultural Society · Gazania rigens",
    "url": "https://www.rhs.org.uk/plants/86144/i-gazania-rigens-i/details"
  },
  "plant-frontpot-calibrachoa": {
    "title": "Royal Horticultural Society · Calibrachoa Cabaret Series",
    "url": "https://www.rhs.org.uk/plants/297225/calibrachoa-cabaret-deep-blue-%28-balcabdebu-pbr%29-%28cabaret-series%29/details"
  },
  "plant-frontpot-bacopa-white": {
    "title": "Royal Horticultural Society · Bacopa ‘Snowflake’",
    "url": "https://www.rhs.org.uk/plants/103997/sutera-cordata-snowflake/details"
  },
  "plant-wallpot1-phormium-flamingo": {
    "title": "RHS · Phormium Flamingo",
    "url": "https://www.rhs.org.uk/plants/135026/phormium-tenax-flamingo/details"
  },
  "plant-bed5-big-pot-vinca-minor-illumination": {
    "title": "Royal Horticultural Society · Vinca minor ‘Illumination’",
    "url": "https://www.rhs.org.uk/plants/161486/vinca-minor-illumination-v/details"
  },
  "plant-bed23wallpot-vinca-minor-illumination": {
    "title": "Royal Horticultural Society · Vinca minor ‘Illumination’",
    "url": "https://www.rhs.org.uk/plants/161486/vinca-minor-illumination-v/details"
  },
  "month-june": {
    "title": "RHS · June garden jobs",
    "url": "https://www.rhs.org.uk/advice/in-month/june/flowers"
  },
  "plant-bed2-weigela": {
    "title": "Royal Horticultural Society · Weigela guide",
    "url": "https://www.rhs.org.uk/plants/weigela"
  },
  "plant-bed4-achillea": {
    "title": "Royal Horticultural Society · Achillea guide",
    "url": "https://www.rhs.org.uk/plants/achillea"
  },
  "plant-bed1-nemesia": {
    "title": "Royal Horticultural Society plant profile",
    "url": "https://www.rhs.org.uk/plants/383168/nemesia-aroma-heart-of-gold-aroma-series/details"
  },
  "plant-bed5-big-pot-alstroemeria": {
    "title": "Royal Horticultural Society · How to grow alstroemerias",
    "url": "https://www.rhs.org.uk/plants/alstroemeria/growing-guide"
  },
  "plant-bed5-big-pot-petunia-bees-knees": {
    "title": "Royal Horticultural Society · Petunia Night Sky and cultivation",
    "url": "https://www.rhs.org.uk/plants/353095/petunia-kleph15313/details"
  },
  "plant-bed5-big-pot-nemesia": {
    "title": "Royal Horticultural Society · How to grow Nemesia",
    "url": "https://www.rhs.org.uk/plants/nemesia/how-to-grow-nemesia"
  },
  "plant-frontBed5-euphorbia-ascot-petite": {
    "title": "RHS · Garden Euphorbia care",
    "url": "https://www.rhs.org.uk/plants/euphorbia/growing-guide"
  },
  "month-july": {
    "title": "RHS · July garden jobs",
    "url": "https://www.rhs.org.uk/advice/in-month/july/flowers"
  },
  "plant-bed1-red-hot-poker": {
    "title": "Royal Horticultural Society · How to grow Kniphofia",
    "url": "https://www.rhs.org.uk/plants/kniphofia/growing-guide"
  },
  "plant-frontBed1-lavender": {
    "title": "Royal Horticultural Society · How to grow lavender",
    "url": "https://www.rhs.org.uk/plants/lavender/growing-guide"
  },
  "plant-frontBed4-photinia-existing": {
    "title": "Royal Horticultural Society · How to grow Photinia",
    "url": "https://www.rhs.org.uk/plants/photinia/growing-guide"
  },
  "plant-lobeliapot-lobelia-starship-scarlet-bronze-leaf": {
    "title": "Royal Horticultural Society · Lobelia Starship Scarlet Bronze Leaf",
    "url": "https://www.rhs.org.uk/plants/505406/lobelia-x-speciosa-starship-scarlet-bronze-leaf-pas1302716-starship-series/details"
  },
  "plant-stone-hydrangea-snowflake": {
    "title": "RHS · Hydrangea pruning",
    "url": "https://www.rhs.org.uk/plants/hydrangea/pruning-guide"
  },
  "month-august": {
    "title": "RHS · August garden jobs",
    "url": "https://www.rhs.org.uk/advice/in-month/august/flowers"
  },
  "plant-frontBed4-dahlia-tampico": {
    "title": "Royal Horticultural Society · Dahlia Dalina Maxi Tampico (‘Datretten’)",
    "url": "https://www.rhs.org.uk/plants/264136/dahlia-dalina-maxi-tampico-%28-datretten-pbr%29-%28dalina-maxi-series%29-%28d-dwb%29/details"
  },
  "plant-frontBed4-verbena-margarets-memory": {
    "title": "Royal Horticultural Society · Glandularia ‘Margaret’s Memory’",
    "url": "https://www.rhs.org.uk/plants/504945/glandularia-margarets-memory/details"
  },
  "plant-wallpot2-echinacea-mooodz-glory": {
    "title": "Royal Horticultural Society · Echinacea Mooodz Glory",
    "url": "https://www.rhs.org.uk/plants/357383/echinacea-mooodz-glory-hilmooglor-mooodz-series/details"
  },
  "plant-frontBed4-physocarpus-cluster-1": {
    "title": "Royal Horticultural Society · Physocarpus Little Devil",
    "url": "https://www.rhs.org.uk/plants/332243/physocarpus-opulifolius-little-devil/details"
  },
  "plant-frontBed4-physocarpus-cluster-2": {
    "title": "Royal Horticultural Society · Physocarpus Lady in Red",
    "url": "https://www.rhs.org.uk/plants/249460/physocarpus-opulifolius-lady-in-red-tuilad-pbr/details"
  },
  "plant-frontBed4-azalea-silvester": {
    "title": "Royal Horticultural Society · Rhododendron ‘Sylvester’",
    "url": "https://www.rhs.org.uk/plants/64181/rhododendron-sylvester/details"
  },
  "plant-frontBed4-purple-gem": {
    "title": "Royal Horticultural Society · Sarcococca Purple Gem",
    "url": "https://www.rhs.org.uk/plants/520914/sarcococca-hookeriana-purple-gem-%28-purplerij1-pbr%29/details"
  },
  "plant-frontBed4-rhododendron-libretto": {
    "title": "Millais Nurseries · Rhododendron Libretto",
    "url": "https://www.rhododendrons.co.uk/rhododendron-libretto/p1243"
  },
  "plant-frontBed4-azalea-lotte": {
    "title": "International Rhododendron Register · ‘Lotte’",
    "url": "https://www.rhodogroup-rhs.org/media/docs/publications/rhodoregister/International%20Rhododendron%20Register%20Second%20Edition%20Volume%202%20Lem-Z%20FOR%20WEBSITE.pdf"
  },
  "plant-lobeliapot-nemesia-lady-penelope": {
    "title": "Crocus · Nemesia ‘Lady Penelope’",
    "url": "https://www.crocus.co.uk/plants/_/nemesia-lady-penelope/classid.2000052987/"
  },
  "plant-frontBed5-fern-jurassic-gold": {
    "title": "Royal Horticultural Society · Dryopteris wallichiana Jurassic Gold",
    "url": "https://www.rhs.org.uk/plants/374182/dryopteris-wallichiana-jurassic-gold/details"
  },
  "month-september": {
    "title": "RHS · September garden jobs",
    "url": "https://www.rhs.org.uk/advice/in-month/september/flowers"
  },
  "plant-baskets-lysimachia-unidentified": {
    "title": "RHS · Lysimachia nummularia",
    "url": "https://www.rhs.org.uk/plants/10632/lysimachia-nummularia/details"
  },
  "plant-baskets-chrysanthemum-unidentified": {
    "title": "RHS · Chrysanthemum growing guide",
    "url": "https://www.rhs.org.uk/plants/chrysanthemum/growing-guide"
  },
  "plant-baskets-cyclamen-unidentified": {
    "title": "RHS · Cyclamen persicum",
    "url": "https://www.rhs.org.uk/plants/101163/cyclamen-persicum-persian-cyclamen/details"
  },
  "plant-basket3-hedera-pair-unidentified": {
    "title": "RHS · Ivy growing guide",
    "url": "https://www.rhs.org.uk/plants/ivy/growing-guide"
  },
  "month-october": {
    "title": "RHS · October garden jobs",
    "url": "https://www.rhs.org.uk/advice/in-month/october/flowers"
  },
  "plant-stone-sedum-chocolate-ball": {
    "title": "Royal Horticultural Society · Sedum ‘Chocolate Ball’",
    "url": "https://www.rhs.org.uk/plants/353550/sedum-polytrichoides-chocolate-ball-stonecrop-chocolate-ball/details"
  },
  "plant-bed5-medium-pot-lythrum-robin": {
    "title": "Royal Horticultural Society · Lythrum salicaria ‘Robin’",
    "url": "https://www.rhs.org.uk/plants/228332/lythrum-salicaria-robin/details"
  },
  "plant-bed5-little-pot-begonia-carmen": {
    "title": "Royal Horticultural Society · Begonias outdoors",
    "url": "https://www.rhs.org.uk/plants/begonias/outdoors"
  },
  "plant-baskets-trailing-fuchsia": {
    "title": "Royal Horticultural Society · Fuchsia ‘Mrs Popple’",
    "url": "https://www.rhs.org.uk/plants/84426/fuchsia-mrs-popple/details"
  },
  "plant-baskets-fern-unidentified": {
    "title": "RHS · Fern growing guide",
    "url": "https://www.rhs.org.uk/plants/types/ferns/growing-guide"
  },
  "plant-frontPots-fuchsia-pot": {
    "title": "Royal Horticultural Society · Hardy fuchsias",
    "url": "https://www.rhs.org.uk/plants/fuchsia/hardy/growing-guide"
  },
  "month-november": {
    "title": "RHS · November garden jobs",
    "url": "https://www.rhs.org.uk/advice/in-month/november/flowers"
  },
  "plant-stone-houseleeks": {
    "title": "Royal Horticultural Society · How to grow sempervivum",
    "url": "https://www.rhs.org.uk/plants/sempervivum/growing-guide"
  },
  "plant-stone-common-houseleek": {
    "title": "Royal Horticultural Society · Sempervivum tectorum",
    "url": "https://www.rhs.org.uk/plants/17164/sempervivum-tectorum/details"
  },
  "plant-frontBed4-calluna-trio-mix": {
    "title": "Royal Horticultural Society · Calluna vulgaris",
    "url": "https://www.rhs.org.uk/plants/2712/calluna-vulgaris/details"
  },
  "month-december": {
    "title": "RHS · December garden jobs",
    "url": "https://www.rhs.org.uk/advice/in-month/december/flowers"
  }
};
  window.OAK.MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  window.OAK.MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
})();

// October birthday planting sources.
Object.assign(window.OAK.SEASONAL_SOURCES, {
  "oct-house-rhipsalis": {
    "title": "NC State · Mistletoe cactus",
    "url": "https://plants.ces.ncsu.edu/plants/rhipsalis-baccifera/"
  },
  "oct-house-dracaena": {
    "title": "RHS · Dracaena",
    "url": "https://www.rhs.org.uk/plants/dracaena/how-to-grow-dracaena"
  },
  "oct-house-crassula": {
    "title": "RHS · Worm plant",
    "url": "https://www.rhs.org.uk/plants/4749/crassula-rupestris-subsp-marnieriana/details"
  },
  "oct-house-philodendron": {
    "title": "RHS · Philodendron",
    "url": "https://www.rhs.org.uk/plants/philodendron/growing-guide"
  },
  "oct-house-zamioculcas": {
    "title": "NC State · ZZ plant",
    "url": "https://plants.ces.ncsu.edu/plants/zamioculcas-zamiifolia/"
  },
  "oct-petite-star": {
    "title": "Sapho · Petite Star",
    "url": "https://www.sapho.fr/fr/arbres-et-arbustes/352-hydrangea-paniculata-petite-star-coustar02-.html"
  },
  "oct-panicle-pruning": {
    "title": "RHS · Hydrangea pruning",
    "url": "https://www.rhs.org.uk/plants/hydrangea/pruning-guide"
  },
  "oct-viola": {
    "title": "RHS · Pineapple Crush",
    "url": "https://www.rhs.org.uk/plants/517052/viola-bel-viso-pineapple-crush-bel-viso-series/details"
  }
});

window.OAK.SEASONAL["October"].jobs.push({
  "id": "october-bed1-berry-check-2026",
  "scope": "zone",
  "zoneKeys": [
    "bed1"
  ],
  "plantIds": [
    "bed1-pernettya-pink",
    "bed1-solanum-jupiter"
  ],
  "priority": "first",
  "category": "protect",
  "title": "Check Pernettya roots and Jupiter frost protection",
  "timing": "Before frost and during cold or dry spells.",
  "summary": "Check each new root ball; Jupiter needs frost-free conditions to survive winter.",
  "why": "The two berry plants have different winter needs despite sharing a planting pocket.",
  "doneWhen": "Roots have been checked and the decision about Jupiter’s winter accommodation has been made.",
  "steps": [
    "Feel each original root ball and water only when drying.",
    "Keep bark off the stems and clear fallen fruit safely.",
    "Arrange frost-free accommodation for Jupiter if retaining it; record its outcome if left outside."
  ],
  "guide": "check",
  "sources": [
    "oct-pernettya-pink",
    "oct-solanum-jupiter"
  ],
  "plantNotes": {
    "bed1-pernettya-pink": "Keep Pernettya evenly moist and drained; check soil acidity. Pink is a supplied colour name, not a confirmed cultivar.",
    "bed1-solanum-jupiter": "Jupiter is tender and poisonous. Outdoor shelter or fleece does not provide frost-free conditions; retain only with suitable accommodation."
  },
  "caution": "Both plants bear ornamental fruit; prevent children and pets eating it."
});

window.OAK.SEASONAL["November"].jobs.push({
  "id": "november-bed1-berry-check-2026",
  "scope": "zone",
  "zoneKeys": [
    "bed1"
  ],
  "plantIds": [
    "bed1-pernettya-pink",
    "bed1-solanum-jupiter"
  ],
  "priority": "ongoing",
  "category": "protect",
  "title": "Check Pernettya roots and Jupiter frost protection",
  "timing": "Before frost and during cold or dry spells.",
  "summary": "Check each new root ball; Jupiter needs frost-free conditions to survive winter.",
  "why": "The two berry plants have different winter needs despite sharing a planting pocket.",
  "doneWhen": "Roots have been checked and the decision about Jupiter’s winter accommodation has been made.",
  "steps": [
    "Feel each original root ball and water only when drying.",
    "Keep bark off the stems and clear fallen fruit safely.",
    "Arrange frost-free accommodation for Jupiter if retaining it; record its outcome if left outside."
  ],
  "guide": "check",
  "sources": [
    "oct-pernettya-pink",
    "oct-solanum-jupiter"
  ],
  "plantNotes": {
    "bed1-pernettya-pink": "Keep Pernettya evenly moist and drained; check soil acidity. Pink is a supplied colour name, not a confirmed cultivar.",
    "bed1-solanum-jupiter": "Jupiter is tender and poisonous. Outdoor shelter or fleece does not provide frost-free conditions; retain only with suitable accommodation."
  },
  "caution": "Both plants bear ornamental fruit; prevent children and pets eating it."
});

window.OAK.SEASONAL["December"].jobs.push({
  "id": "december-bed1-berry-check-2026",
  "scope": "zone",
  "zoneKeys": [
    "bed1"
  ],
  "plantIds": [
    "bed1-pernettya-pink",
    "bed1-solanum-jupiter"
  ],
  "priority": "ongoing",
  "category": "protect",
  "title": "Check Pernettya roots and Jupiter frost protection",
  "timing": "Before frost and during cold or dry spells.",
  "summary": "Check each new root ball; Jupiter needs frost-free conditions to survive winter.",
  "why": "The two berry plants have different winter needs despite sharing a planting pocket.",
  "doneWhen": "Roots have been checked and the decision about Jupiter’s winter accommodation has been made.",
  "steps": [
    "Feel each original root ball and water only when drying.",
    "Keep bark off the stems and clear fallen fruit safely.",
    "Arrange frost-free accommodation for Jupiter if retaining it; record its outcome if left outside."
  ],
  "guide": "check",
  "sources": [
    "oct-pernettya-pink",
    "oct-solanum-jupiter"
  ],
  "plantNotes": {
    "bed1-pernettya-pink": "Keep Pernettya evenly moist and drained; check soil acidity. Pink is a supplied colour name, not a confirmed cultivar.",
    "bed1-solanum-jupiter": "Jupiter is tender and poisonous. Outdoor shelter or fleece does not provide frost-free conditions; retain only with suitable accommodation."
  },
  "caution": "Both plants bear ornamental fruit; prevent children and pets eating it."
});

Object.assign(window.OAK.SEASONAL_SOURCES, {
  "oct-pernettya-pink": {
    "title": "RHS · Gaultheria mucronata Pink Pearl (reference pink form, not cultivar identification)",
    "url": "https://www.rhs.org.uk/plants/67076/gaultheria-mucronata-pink-pearl-f/details",
    "note": "Species-group cultivation, pollination and ornamental fruit; not evidence this plant is Pink Pearl"
  },
  "oct-solanum-jupiter": {
    "title": "NC State · Solanum pseudocapsicum",
    "url": "https://plants.ces.ncsu.edu/plants/solanum-pseudocapsicum/",
    "note": "Species care, seasonal fruit, frost sensitivity and toxicity"
  }
});
