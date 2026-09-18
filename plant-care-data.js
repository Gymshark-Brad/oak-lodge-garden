// September 2026 content audit. Explicit botanical care, never inferred from
// a broad "shrub", "perennial" or "tender" category. Load after identities.
// Related specimens can share sound horticulture; their local actions are
// authored individually below. Sources on each original profile are retained.
(() => {
  const OAK = window.OAK;
  // Older authored records shared nested arrays by reference. Detach those
  // arrays before reviewing one specimen, preserving the public profile object.
  Object.values(OAK.PLANT_BY_ID).forEach(({ plant }) => {
    Object.keys(plant.profile).forEach((key) => {
      const value = plant.profile[key];
      if (value && typeof value === "object") plant.profile[key] = JSON.parse(JSON.stringify(value));
    });
  });
  const reviewed = new Set();
  const card = (title, summary, detail) => ({ title, summary, detail });
  const fact = (profile, label, value, detail) => {
    const row = profile.facts.find((item) => item.label === label);
    if (row) Object.assign(row, { value, detail });
    else profile.facts.push({ label, value, detail });
  };
  function care(ids, water, cards) {
    ids.split(" ").forEach((id) => {
      const record = OAK.PLANT_BY_ID[id];
      if (!record) throw new Error(`Care review references missing plant: ${id}`);
      const profile = record.plant.profile;
      profile.careGuide = cards.map((item) => ({ ...item }));
      fact(profile, "Water", water[0], water[1]);
      reviewed.add(id);
    });
  }

  care("bed1-abelia-kaleidoscope bed4-abelia-kaleidoscope bed4-abelia-radiance", ["Deeply during dry spells", "Young Abelias need establishment moisture; established roots tolerate short dry spells."], [
    card("Keep the variegated framework", "Remove solid-green reversions at their origin.", "Give the shrub good light for leaf colour. Cut a reverted shoot back to where it starts rather than repeatedly clipping its tip."),
    card("Thin Abelia in spring", "Wait until winter damage can be distinguished from living growth.", "Remove dead tips and selected old or crowded stems. Avoid repeated summer shearing, which removes the shoots carrying the late flowers."),
  ]);
  care("bed1-pieris-forest-flame frontBed5-pieris-polar-passion frontBed4-flaming-silver", ["Even root moisture", "Shallow Pieris roots must not dry hard; use rainwater where available and allow excess to drain."], [
    card("Keep the root run acidic", "Use acidic, humus-rich soil and a shallow leaf-mould mulch.", "Keep lime away and do not cultivate through the fine surface roots. Check soil pH if young leaves yellow between green veins."),
    card("Preserve next spring's flowers", "Remove spent flower clusters carefully, with little routine pruning.", "Make any necessary shaping cuts after flowering. Protect new coloured shoots from drying winds and late frost; do not clip away developing buds later in the year."),
  ]);
  care("bed2-butterfly-bush", ["After prolonged drought", "An established Buddleja usually needs little supplementary water in drained garden soil."], [
    card("Match pruning to the flowering wood", "Record whether flowers arise on new shoots or last year's branches.", "Hard spring pruning suits B. davidii, but can remove the display of other species. While this shrub remains unidentified, remove damaged wood and contain only obstructive growth."),
    card("Manage spent panicles", "Remove fading heads if seedlings are not wanted.", "Keep sound flowering shoots in the sun and inspect them for aphids. Avoid rich feeding that encourages long soft growth against the boundary."),
  ]);
  care("bed2-spiraea-double-play-big-bang frontBed4-magic-carpet", ["While establishing; then in drought", "Water the root area rather than wetting only the surrounding wall surface."], [
    card("Prune summer-flowering Spiraea in spring", "Shorten last year's shoots before vigorous new growth starts.", "These Japanese Spiraeas flower on the current season's growth. Remove weak and oldest stems selectively to maintain a low, open mound."),
    card("Refresh the pink flower display", "Clip faded flower clusters just above leafy shoots.", "A light trim may encourage another flush. Preserve enough golden foliage to rebuild the plant and avoid heavy late-autumn pruning."),
  ]);
  care("bed4-callistemon-inferno-yanferno", ["Moist during active growth", "Bottlebrush tolerates some dryness after rooting, but buds suffer if the root ball dries completely."], [
    card("Protect Inferno from severe frost", "Use the warmest sheltered position and watch cold forecasts.", "This H3 bottlebrush is marginal outdoors in Bromsgrove. A fleece cover may help in brief cold, but sustained freezing can still damage the shrub."),
    card("Trim behind the bottlebrushes", "Shorten flowered tips lightly after the display.", "Retain the leafy framework and remove dead wood once spring growth reveals it. Avoid treating this evergreen as a perennial to cut to the ground."),
  ]);
  care("stone-cabbage-tree", ["Water young roots in dry weather", "Established Cordyline tolerates drought; avoid a saturated stem base in winter."], [
    card("Keep the growing crown intact", "Remove fully dead lower leaves without cutting across live blades.", "The central spear makes the next leaves. A trunked Cordyline is not a grass to shear or divide routinely; allow its natural skirt or remove dead leaves individually."),
    card("Protect Red Star in cold weather", "Shield the crown from prolonged frost and wet.", "The coloured form is less dependable in severe cold than green Cordyline. Wait for recovery in spring before cutting damaged stems; new shoots may appear below an injured crown."),
  ]);
  care("stone-hydrangea-snowflake", ["Moist below the gravel", "Check this shrub's deeper root pocket separately from the dry succulent planting."], [
    card("Keep oakleaf Hydrangea's old wood", "Prune only lightly after flowering when necessary.", "Snowflake forms the next flower buds on existing stems. Avoid the hard spring cut used for panicle hydrangeas; remove dead stems once growth makes them clear."),
    card("Make room for the broad leaves", "Maintain a humus-rich pocket and space around its crown.", "Mulch its root area without covering the stem base or neighbouring alpine rosettes. Afternoon shade can reduce leaf scorch in hot weather."),
  ]);
  care("stone-new-zealand-flax-dark wallpot1-phormium-flamingo", ["Moderate; allow drainage", "Water Phormium through active growth, then reduce in cold weather without keeping its crown wet."], [
    card("Cut damaged blades at the base", "Remove whole dead or badly split leaves individually.", "Do not cut across every leaf or pull hard on partly living fans. Use clean tools near the base without damaging the central growing points."),
    card("Retain the evergreen fans through winter", "Protect exposed roots and avoid cold, saturated compost.", "Wait until spring to judge superficial frost injury. Divide only a congested healthy clump in spring; this is not a plant needing routine annual division."),
  ]);
  care("bigpot1-fuchsia bigpot2-fuchsia", ["Even moisture while flowering", "Check the mixed pot below the surface; drain thoroughly after watering and reduce during dormancy."], [
    card("Wait for Fuchsia's spring buds", "Cut winter-killed stems back to live growth after severe frost has passed.", "Mrs Popple can regenerate from its base. Retain living framework where possible and pinch young shoots early if a bushier plant is needed."),
    card("Support the long flowering season", "Feed the container during active growth and remove spent flowers and berries.", "Use the feed label rate on moist compost. Hardy-in-the-ground does not mean freeze-proof in a glazed pot; shelter or insulate its roots in hard weather."),
  ]);
  care("lobeliapot-skimmia-cleopatra lobeliapot-skimmia-antarctica frontBed5-japanese-skimmia stairpots-p1-skimmia-double-diamond", ["Avoid a dry root ball", "Shade and reliable drainage matter; yellowing alone does not mean iron deficiency."], [
    card("Shade the Skimmia's roots", "Keep moisture steady without standing water.", "Skimmias do not require ericaceous compost. Check exposure, dryness and drainage before trying to correct yellow leaves with iron or acidifying products."),
    card("Preserve flowers and possible berries", "Prune only wayward or damaged shoots, usually in spring.", "Heavy clipping removes flower buds. Female forms generally need a nearby male to set fruit; two female plants do not supply that pollen."),
  ]);
  care("bed23wallpot-viburnum-lisarose viburnumpot-viburnum-tinus-spirit", ["Check the pot all year", "Evergreen Viburnum still loses moisture in winter; water only when the root ball needs it and is unfrozen."], [
    card("Prune after the winter flowers", "Shorten only outgrowing branches after the spring display.", "Viburnum tinus develops the next flowers on its existing framework. Heavy late-summer or autumn trimming sacrifices buds; removing spent heads also reduces subsequent berries."),
    card("Allow for a shrub-sized root system", "Top-dress in spring and repot when roots fill the container.", "Use a stable, drained loam-based container mix. Check leaf undersides and new shoots for Viburnum beetle damage rather than assuming every hole is drought stress."),
  ]);
  care("cercispot-cercis-carolina-sweetheart frontBed3-cercis-eternal-flame", ["Deeply while establishing", "Keep the young redbud root ball moist but aerated; shelter reduces leaf scorch and wind damage."], [
    card("Let the redbud build its framework", "Remove only dead, damaged or crossing branches as needed.", "Avoid repeated heading-back of healthy branches. Check ties before they constrict the trunk, and protect the root collar from a bank of mulch."),
    card("Give the coloured leaves good light", "Use sun with shelter from drying wind.", "Water below the canopy during dry establishment weather. Fresh foliage can scorch if roots dry while leaves are exposed; extra fertiliser does not solve that imbalance."),
  ]);
  care("baskets-calluna-trio-mix frontBed4-calluna-trio-mix frontBed5-heather-tib frontBed5-heather-leprechaun frontBed5-heather-winter-chocolate", ["Keep the shallow roots from drying", "Calluna needs acidic, drained soil; small plugs in baskets can dry before the surrounding compost."], [
    card("Clip Calluna within green growth", "In spring, remove last year's flowered tips lightly.", "Leave leafy shoots below every cut. Cutting into a bare woody centre is unlikely to regenerate a dense plant."),
    card("Retain an open, acidic planting pocket", "Give the heather sun and keep larger neighbours from covering it.", "Use rainwater where practical. Avoid lime and rich manure; lightly maintain the soil rather than forcing soft growth with heavy feeding."),
  ]);
  care("bed2-rose-inherited bed3-rose-inherited frontBed5-climber-unidentified", ["Deeply in sustained dry spells", "Water established roses at soil level, especially beside a wall; avoid waterlogging."], [
    card("Prune an unknown rose conservatively", "Remove dead, diseased and rubbing stems first.", "Record its height, repeat-flowering pattern and long-cane behaviour before choosing shrub, climbing or rambling pruning. Do not cut it down like a herbaceous perennial."),
    card("Keep rose foliage healthy", "Feed and mulch in spring, leaving the stem base clear.", "Remove fallen diseased leaves and inspect new shoots for aphids. Deadhead if repeat flowers are wanted; retain selected hips where autumn fruit is part of the display."),
  ]);
  care("bed2-kerria", ["During dry establishment spells", "A cool, drained wall pocket suits yellow corydalis; avoid a permanently wet crown."], [
    card("Thin corydalis seedlings selectively", "Keep desired seedlings and remove those crowding smaller neighbours.", "Pseudofumaria can seed into cracks. Pull young unwanted plants before their roots establish in difficult masonry joints."),
    card("Refresh tired soft growth", "Trim exhausted flowering stems to healthy foliage.", "This is a low perennial, not the Kerria shrub named in the old ID. No woody-shrub pruning or annual stooling is appropriate."),
  ]);
  care("bed2-centaurea-snowy-owl", ["Water when the root zone dries", "Avoid drought during flowering, but let surplus moisture drain away from the clump."], [
    card("Cut cornflower back after its first flush", "Remove finished stems and tired foliage near the base.", "Fresh leaves may make a cleaner mound and a smaller second display. Water if the soil is dry after cutting; avoid leaving mildew-covered foliage tangled in the centre."),
    card("Control the spreading clump", "Divide in spring or autumn only when it becomes crowded.", "Replant vigorous outer sections and remove roots spreading into adjacent planting. Deadheading also limits unwanted seed."),
  ]);
  care("bed3-evergreen-candytuft", ["Mainly during establishment", "Once rooted, candytuft prefers drainage over frequent soaking; keep winter wet away."], [
    card("Trim after the spring white flowers", "Lightly shorten spent flowering growth while leaves remain below the cut.", "Do not shear into a bare woody centre. Keep the low evergreen cushion open to light rather than allowing taller plants to shade it."),
    card("Confirm the spring display", "Photograph the flowers before tightening the identification.", "The current Iberis identity is assumed from foliage. Retain the qualification and avoid assigning a cultivar from its compact habit alone."),
  ]);
  care("bed3-variegated-periwinkle bed5-big-pot-vinca-minor-illumination bed23wallpot-vinca-minor-illumination", ["Moderate; avoid prolonged drying", "Vinca tolerates some dry shade once established, but trailing plants in pots still depend on the container's moisture."], [
    card("Keep Vinca runners within bounds", "Shorten trails that root into neighbouring planting.", "Remove unwanted rooted pieces completely. Trim after the main spring flowers, retaining leafy growth for the next display."),
    card("Remove green reversions", "Cut all-green shoots back to their point of origin.", "Variegated forms can be overtaken by vigorous green growth. Give enough light for leaf colour without letting the shallow roots bake."),
  ]);
  care("bed4-gaillardia", ["Allow drying between soakings", "Established Gaillardia dislikes rich wet ground; drought tolerance is greater than winter-wet tolerance."], [
    card("Deadhead to keep blanket flowers coming", "Remove faded heads to the next leafy shoot.", "Leave a few late heads only if seed is wanted. Do not expect seedlings to preserve an assumed cultivar or the same colour pattern."),
    card("Protect the crown from winter wet", "Clear collapsed stems and keep heavy mulch off the centre.", "Lean, freely drained soil supports a sturdier clump than rich feeding. Even with good care, these hybrids can be short-lived."),
  ]);
  care("lobeliapot-lobelia-starship-scarlet-bronze-leaf", ["Consistently moist in growth", "This upright perennial Lobelia needs a moister root run than drought-tolerant neighbours in Bed 4."], [
    card("Keep Starship's crown hydrated", "Mulch the soil around the clump after spring growth starts.", "Water thoroughly when the soil begins to dry. This scarlet perennial does not share the short seasonal life or trailing habit of bedding Lobelia."),
    card("Manage the upright flowering stems", "Remove faded spikes and clear dead stems after dieback.", "Protect the crown in severe cold without sealing it beneath soggy debris. Divide a congested clump in spring when new growth is visible."),
  ]);
  care("bed5-big-pot-alstroemeria", ["Even moisture in the deep pot", "Fleshy roots need moisture in growth and drainage through winter; never leave the pot standing in water."], [
    card("Remove spent Alstroemeria stems carefully", "On a well-rooted plant, pull finished flower stems gently from the base.", "If the young crown lifts or resists, cut instead. Support taller shoots and feed during flowering without damaging the fleshy root system."),
    card("Shelter the perennial crown", "Insulate or move the container during severe cold.", "Keep the dormant root system only lightly moist. Disturb established roots sparingly; split an overcrowded clump in spring rather than dividing every year."),
  ]);
  care("bed5-medium-pot-lythrum-robin", ["Keep continuously moist", "Lythrum is moisture-loving; this pot must not follow the dry-soil routine used for succulents."], [
    card("Maintain Robin's moisture reserve", "Use moisture-retentive compost and check often in hot weather.", "Thoroughly rewet the whole root ball before the flower spikes flag. The small container dries faster than the damp ground this species naturally favours."),
    card("Cut old stems after dieback", "Remove spent spikes if seed is not wanted.", "Leave sound late stems for structure if useful, then cut them near ground level before spring regrowth. Divide when the pot becomes root-bound."),
  ]);
  care("stone-ajuga-fancy-finch stone-ajuga-midnight-mystery", ["Keep their root pockets moist", "Ajuga needs humus and moisture beneath the gravel, unlike neighbouring Sempervivum."], [
    card("Direct Ajuga's runners", "Lift or trim rooted runners before they cover small alpines.", "Keep each carpet open to air. Replant vigorous pieces where coverage is wanted rather than repeatedly feeding a crowded, declining centre."),
    card("Remove finished spring spikes", "Snip flower stalks down to the leaf mat.", "Retain sound evergreen foliage and clear rotting leaves from the crown. Shade during the hottest part of the day reduces scorching in the lighter-leaved forms."),
  ]);
  care("stone-achillea-king-alfred", ["Little once rooted", "This alpine yarrow needs lean, sharply drained ground; avoid frequent watering around its mat."], [
    card("Keep King Alfred low and open", "Trim faded flower stalks without cutting away the whole leaf cushion.", "Do not feed or stake it as though it were tall border yarrow. Sun and lean soil preserve its compact grey-green habit."),
    card("Lift wet debris from the mat", "Keep winter leaves and rich mulch away from the small crown.", "Separate a healthy rooted edge only when renewal is needed. A mat deteriorating in wet shade needs better conditions, not more fertiliser."),
  ]);
  care("stone-armeria-armada-white", ["Light watering after drying", "Established thrift handles coastal-style dryness; persistent wet at its cushion is the main avoidable risk."], [
    card("Remove spent thrift stems at the base", "Follow each faded globe down into the grass-like cushion.", "Keep the foliage rather than mowing the whole mound flat. Removing old flower stems encourages a tidy display and can support more blooms."),
    card("Keep the alpine cushion exposed", "Brush leaves away and maintain grit around the base.", "Avoid rich compost piled over the crown. Divide only a tired or overcrowded clump and replant healthy edges into free-draining soil."),
  ]);
  care("stone-pennisetum-rubrum", ["Moderate in summer", "Keep this grass supplied during active growth, then much drier in cool protected winter quarters."], [
    card("Move Rubrum before hard cold", "Plan a bright frost-free winter home for the root ball.", "This burgundy fountain grass is not reliably hardy in Bromsgrove. Leaving ornamental grasses standing for winter does not make this tender one safe outdoors."),
    card("Cut back when spring growth restarts", "Remove old leaves without cutting through new shoots.", "Keep the overwintered clump ventilated and only slightly moist until growth resumes. Harden it off after frost risk before returning it to the gravel bed."),
  ]);
  care("stone-agapanthus", ["Water during active growth", "Provide moisture for developing flowers while keeping the crown well drained in winter."], [
    card("Record its winter foliage", "Note whether the leaves die back or remain evergreen.", "Evergreen and deciduous Agapanthus differ in cold tolerance. Until the form is identified, provide conservative frost protection instead of assigning a precise hardiness rating."),
    card("Feed for flowers; divide sparingly", "Use a suitable flowering feed in growth and remove spent stalks.", "Good sun is essential. Split only when congested or flowering declines; repeated disturbance can delay the display. Record flower colour and height when it blooms."),
  ]);
  care("bigpot1-nepeta bigpot2-nepeta", ["Let the upper root zone dry", "Catmint tolerates dryness better than the neighbouring Fuchsia and Lobelia; avoid a permanently wet crown."], [
    card("Shear catmint after the first flowers", "Cut spent stems back to fresh basal or low leafy growth.", "A drink after cutting helps a second flush if the pot is dry. Do not leave lanky stems tangled through the other container plants."),
    card("Give the grey foliage light and air", "Keep taller companions from covering the catmint's centre.", "Avoid extra nitrogen, which encourages weak sprawling growth. Walker's Low is an assumed identity; do not rely on seed to reproduce it."),
  ]);
  care("lobeliapot-viola-rocky-purple-picotee baskets-viola-rocky-purple-picotee baskets-pansy-fire baskets-pansy-rose-surprise frontBed5-viola-rocky-purple-picotee stairpots-p1-pansy-fire-red stairpots-p2-pansy-fire-red", ["Moist, with free drainage", "Small Viola and pansy roots dry quickly; cool, saturated compost can rot their crowns."], [
    card("Remove flowers and seed capsules", "Pinch each spent stem back to a leaf joint.", "Clear rain-damaged blooms promptly to limit grey mould. A light feed during growth helps sustain flowers in a container."),
    card("Let cool weather set the pace", "Expect pauses during hard frost or summer heat.", "Trim stretched stems to leafy growth if the crown is sound. Give light shade in hot weather and avoid burying small crowns under fallen leaves."),
  ]);
  care("littlepot1-hellebore-ice-n-roses-bennotta", ["Even moisture, never stagnant", "A hellebore in a small pot needs checks even when cool weather reduces demand."], [
    card("Reveal the winter flowers selectively", "Remove damaged or spotted leaves rather than all healthy evergreen growth.", "Cut affected leaves at the base with clean tools. Keep the emerging buds clear of decaying petals and dense debris."),
    card("Give Bennotta lasting root room", "Use a deep, drained container and top-dress in spring.", "Shelter the pot from drying wind and summer heat. Hellebores resent unnecessary disturbance; repot for crowding rather than routinely splitting the crown."),
  ]);
  care("wallpot2-coreopsis-gold", ["Moderate; dry slightly between checks", "The small pot needs summer water but not a cold wet crown through winter."], [
    card("Deadhead the golden daisies", "Cut finished stems to leafy side growth before seed builds up.", "If flowering becomes sparse, trim the tired display back and support the fresh regrowth with modest feed and water."),
    card("Renew only when the clump tires", "Watch for a bare centre or a crowded root ball.", "Divide or repot in spring when new growth is evident. Keep Early Sunrise visibly assumed; seed-raised plants may not match the original."),
  ]);
  care("baskets-fern-unidentified", ["Keep evenly moist, not saturated", "Until the fern is identified, check its own root ball rather than letting the basket dry completely."], [
    card("Protect the retained fronds", "Keep it in bright shade and remove only dead foliage.", "Do not deadhead, shear or feed this foliage plant to encourage flowers. Ferns reproduce by spores; brown spore patches can be normal rather than disease."),
    card("Resolve winter hardiness before frost", "Use sheltered, frost-free holding conditions while its identity is unknown.", "Photograph the whole frond, its underside and the crown. An unidentified basket fern must not automatically inherit the hardiness of the garden Dryopteris."),
  ]);
  care("baskets-lysimachia-unidentified", ["Maintain steady moisture", "Inspect the trailing plant's root plug; do not allow the exposed basket rim to bake dry."], [
    card("Contain the trailing stems", "Shorten trails that smother the Cyclamen or fern.", "Remove unwanted rooted pieces if stems reach another pot or the ground. The genus is recorded, but this is not a confirmed Lysimachia nummularia cultivar."),
    card("Check the identity before renewal", "Retain the label or photograph foliage and flowers.", "Use light trimming while its species remains unresolved. Do not assign a particular flower season, mature spread or winter survival from a generic genus name."),
  ]);
  care("baskets-chrysanthemum-unidentified", ["Even moisture while in bud", "Water the compost, not the flower heads; let the basket drain after rain."], [
    card("Keep the autumn flower heads clean", "Remove whole faded heads and damaged leaves promptly.", "Give open light and airflow. Do not pinch a plant already in bud for its autumn display; that removes the flowers being grown."),
    card("Treat winter survival as unresolved", "Shelter the root ball from hard frost and persistent wet if keeping it.", "Florist and garden Chrysanthemums differ in hardiness. Retain healthy basal growth and confirm the type before relying on an outdoor return."),
  ]);
  care("baskets-cyclamen-unidentified", ["Lightly moist during leaf growth", "Water around the root ball, keeping the tuber and flower-stalk centre out of standing wet."], [
    card("Remove finished Cyclamen stalks", "Gently twist spent flowers away at the base without leaving rotting stubs.", "Keep the plant cool and bright. Remove yellow leaves individually and keep crowded basket companions from covering the growing point."),
    card("Do not assume hardy Cyclamen care", "Shelter from frost until the species is known.", "Autumn bedding may be tender C. persicum rather than hardy C. hederifolium. Reduce water if it becomes naturally dormant; do not force a leafless resting tuber into soggy growth."),
  ]);
  care("wallpot2-echinacea-mooodz-glory", ["Moderate in active growth", "A pot dries faster than a border, but winter drainage remains essential for the coneflower crown."], [
    card("Manage flowers and seed cones separately", "Deadhead early flowers for continuity, leaving selected later cones if wanted.", "Cut a finished stem to a healthy leaf or side bud. Sound autumn cones can remain for structure rather than stripping the plant bare."),
    card("Protect emerging basal growth", "Clear collapsed leaves before spring shoots open and check for slugs.", "Do not keep the dormant pot wet. Divide or repot only when the established root system becomes crowded, retaining strong growing points."),
  ]);
  care("bed4-achillea", ["Mainly during establishment", "Summer Berries yarrow prefers drained ground and needs little extra water once rooted."], [
    card("Cut yarrow after the first flower plates", "Remove faded stems to low leafy growth.", "A second display is possible if the plant has enough moisture. Leave some late heads only where seed and winter structure are wanted."),
    card("Keep tall growth firm", "Avoid rich feeding and shade that encourage floppy stems.", "Divide the clump in spring or autumn if its centre becomes bare. This tall border yarrow should not use the alpine King Alfred's size or pruning expectations."),
  ]);

  care("frontBed1-hydrangea", ["Keep the root zone moist", "Big mophead leaves wilt readily in heat; check soil before adding water to an already wet bed."], [
    card("Keep the mophead's flower buds", "In spring, remove old heads to the first strong pair of buds.", "Retain healthy stems and thin a few old ones only if crowded. Endless Summer is assumed, so do not depend on repeat flowering to compensate for severe pruning."),
    card("Mulch the broad root area", "Use organic mulch over moist soil, clear of the stems.", "Morning light and afternoon shelter reduce scorch. Soil chemistry can influence flower colour, but adding products without checking pH can damage roots."),
  ]);
  care("frontBed1-lavender", ["Sparingly once established", "English lavender needs a dry, airy crown and little extra water in normal weather."], [
    card("Trim lavender while leaves remain", "Shorten spent flower shoots after the summer display.", "Keep green foliage below the cuts; old bare wood may not regrow. Give full sun and avoid hard autumn renovation."),
    card("Keep fertility and moisture modest", "Do not heap rich mulch against the woody base.", "Drainage and ventilation matter more than feeding. Take cuttings from healthy non-flowering shoots before an old plant becomes too woody to reshape."),
  ]);
  care("frontBed2-coprosma-inferno frontBed2-coprosma-pina-colada frontBed2-coprosma-city-knights", ["Moderate; avoid saturation", "Glossy evergreen foliage needs moisture in dry spells, with much less demand in cold weather."], [
    card("Plan for a cold-sensitive evergreen", "Shelter from drying wind and protect during severe frost.", "These Coprosmas are marginal in a cold inland garden. Fleece helps with brief cold; a container under cover is more dependable during prolonged freezing."),
    card("Reshape after winter damage is clear", "Trim lightly in spring once fresh growth starts.", "Remove dead tips rather than cutting deeply into uncertain wood in autumn. Maintain light around the foliage and avoid late feeding that forces soft shoots."),
  ]);
  care("frontBed2-hebe-kiwi-horopito frontBed5-hebe-rhubarb-and-custard", ["During establishment and drought", "Hebe roots require drainage; repeated soaking in cold weather encourages dieback."], [
    card("Trim Hebe lightly after flowering", "Shorten spent shoots while leaving green leaves below each cut.", "Avoid cutting back into old bare wood. Remove winter-damaged shoots only when spring growth reveals living tissue."),
    card("Keep wind and wet away from the crown", "Maintain shelter and free-draining soil.", "Watch variegated plants for all-green reversions and remove those at their origin. Do not feed late enough to produce frost-vulnerable autumn growth."),
  ]);
  care("frontBed3-leucothoe-little-flames", ["Even moisture around shallow roots", "Leucothoe dislikes both drying out and airless wet soil; rainwater suits its acidic root run."], [
    card("Preserve Little Flames' arching shoots", "Remove damaged or misplaced stems after flowering.", "Avoid shearing the evergreen foliage into a hard outline. Allow the coloured young growth to develop above older leaves."),
    card("Mulch gently in acid soil", "Use leaf mould or another lime-free organic mulch.", "Do not bury the crown or hoe through surface roots. Shelter from strong drying wind and intense sun if the leaves scorch."),
  ]);
  care("bed2-variegated-dogwood", ["Moist while the moved shrub establishes", "Check the transplanted root area during dry weather; mature dogwood tolerates wetter ground than many neighbouring shrubs."], [
    card("Renew colourful dogwood stems in spring", "Once established, remove a proportion of the oldest dull stems low down.", "New stems provide the strongest red winter colour. Allow this relocated shrub to root well before a severe renovation cut."),
    card("Remove green reversions cleanly", "Trace all-green branches to their origin before cutting.", "Retain the variegated canopy and give the broad shrub space. A light surface mulch conserves moisture without burying the stool."),
  ]);
  care("frontBed4-photinia-existing", ["During long dry spells", "An established Photinia has a broad root system; soak its root area rather than sprinkling the trunk."], [
    card("Prune for red replacement growth", "Make selective cuts in spring or early summer.", "Shortening shoots encourages another red flush but can reduce flowering. Avoid a heavy late-season trim that exposes tender new leaves to frost."),
    card("Open congested growth", "Remove crowded branches and clear badly spotted fallen leaves.", "Improve airflow before treating leaf spots. Preserve the established canopy while preventing it from shading all the smaller Front Bed 4 plants."),
  ]);
  care("frontBed4-physocarpus-cluster-1 frontBed4-physocarpus-cluster-2", ["Water each crown while establishing", "Three shrubs share each group; check around every root ball instead of assuming one wet spot serves them all."], [
    card("Keep three separate ninebark crowns", "Thin crossing branches rather than clipping the group into one hedge.", "Remove selected oldest stems after flowering when renewal is needed. Regular hard cutting produces foliage at the expense of the flowers."),
    card("Watch the centre for mildew", "Maintain light and airflow between Little Devil and Lady in Red.", "Do not force soft dense growth with heavy feed. Water the ground in drought and remove badly affected foliage when practical."),
  ]);
  care("frontBed4-azalea-silvester frontBed4-azalea-lotte frontBed4-rhododendron-libretto", ["Keep the shallow root mat moist", "Use rainwater where practical; flower-bud development suffers after prolonged summer drought."], [
    card("Keep acidic roots close to the surface", "Mulch with leaf mould without covering the root collar.", "Avoid lime, deep hoeing and digging through the fine roots. Check soil pH and drainage before feeding a yellowing shrub."),
    card("Protect next year's flower buds", "Shape sparingly just after flowering.", "If deadheading, remove the old truss without snapping the new shoots below it. Later pruning removes buds already forming for spring."),
  ]);
  care("frontBed4-purple-gem", ["Water through dry establishment spells", "Sarcococca tolerates dry shade better once rooted, but the recently moved root ball needs attention."], [
    card("Keep the winter-flowering shape", "Prune lightly after the scented flowers finish.", "Remove wayward shoots or unwanted suckers rather than shearing the shrub in autumn when flower buds are present."),
    card("Exclude smothering ivy", "Keep competing runners away from the base.", "Top-dress with organic matter while leaving stems clear. Shade suits this shrub, but dense competing roots can still deprive it of moisture."),
  ]);
  care("frontBed5-mexican-orange-blossom", ["Water new roots, then in drought", "Choisya needs drainage through winter and shelter from drying cold winds."], [
    card("Shape Sundance after its spring flowers", "Shorten only the shoots needed to keep the shrub in bounds.", "Retain a leafy framework and remove winter damage once new growth shows. A light trim may encourage later flowering; repeated shearing loses its natural mound."),
    card("Protect the golden leaves from scorch", "Keep establishment moisture steady in hot weather.", "Some shelter from intense reflected sun helps pale foliage. Check soil and exposure before interpreting browned margins as a nutrient shortage."),
  ]);
  care("frontBed5-bay-tree", ["Water deeply in prolonged drought", "The standard's evergreen crown loses moisture year-round; avoid a wet, buried trunk base."], [
    card("Maintain the bay standard", "Trim the head in spring or summer and remove basal suckers.", "Keep the clear stem and check any support tie for constriction. Make small regular shaping cuts instead of exposing the whole framework at once."),
    card("Inspect folded leaves and sticky growth", "Check for bay sucker and scale before treating.", "Remove affected leaves or small colonies where practical. Cold or waterlogged roots can also yellow foliage; diagnosis should come before feeding."),
  ]);
  care("frontBed5-hardy-fuchsia", ["Moist while growing and flowering", "Mulch the border root run and water during sustained dryness without saturating the crown."], [
    card("Leave the old framework through winter", "Wait for spring buds before cutting back dead stems.", "A hardy Fuchsia may regrow from low down after frost. Do not discard a dormant crown solely because its upper branches look dead."),
    card("Allow a loose flowering shrub", "Thin crowded shoots and remove spent flowers if needed.", "The border plant can become much larger than basket Fuchsia. Keep neighbouring stems from tangling through it and avoid hard trimming during its summer display."),
  ]);
  care("frontBed5-clematis", ["Moist roots through summer", "Clematis viticella needs a deep, drained root run; wall-side soil can remain dry after rain."], [
    card("Use Group 3 pruning for viticella", "In late winter, cut old stems to strong low buds, about 30cm above ground.", "It flowers on the new season's shoots. This is deliberately different from the spring-flowering montana on the Patio."),
    card("Guide the new climbing shoots", "Provide slender supports that leaf stalks can grip.", "Spread shoots before they tangle into a single knot. Mulch around the roots, keeping the crown clear and moisture available as the canopy expands."),
  ]);
  care("frontBed5-hydrangea-bloody-marie", ["Keep soil moist in growth", "Panicle Hydrangea needs more moisture than the dry-loving Euphorbia and Gaura nearby."], [
    card("Prune the panicle Hydrangea in spring", "Shorten last year's shoots to healthy buds on a sound framework.", "H. paniculata flowers on new growth. Remove weak and crossing stems; avoid borrowing the old-wood pruning rule used for the Stone Bed's oakleaf Hydrangea."),
    card("Support colour with good conditions", "Mulch, water in drought and leave room for the flower heads.", "The cream-to-pink ageing of panicles is not the acid/alkaline blue-pink response of mopheads. Do not add bluing products to change this cultivar's colour."),
  ]);
  care("frontBed5-pittosporum-tom-thumb", ["Moderate until established", "A mature drained clump tolerates dry spells; avoid wet roots during cold weather."], [
    card("Retain Tom Thumb's natural mound", "Trim lightly in late spring if a shoot spoils the outline.", "Green young leaves normally darken to purple, so do not remove every green tip as a reversion. Avoid routine hard pruning into old wood."),
    card("Shelter the evergreen foliage", "Protect from cold drying wind and prolonged hard frost.", "Keep the root collar exposed to air. Wait until spring growth starts before judging which frost-marked tips have actually died."),
  ]);
  care("frontBed5-hypericum-cultivar-to-confirm", ["Water during establishment", "Once rooted, a drained Hypericum usually needs extra water mainly in drought."], [
    card("Shape Radiance in spring", "Remove dead wood and shorten overlong stems to live buds.", "Retain the label-confirmed garden name. Trade names are reused, so a breeder code should not be attached without matching the original label."),
    card("Record foliage as well as flowers", "Photograph the young leaves, summer flowers and any fruit.", "Keep good light around the shrub and do not treat berry production as guaranteed. These details help distinguish conflicting commercial descriptions of Radiance."),
  ]);
  care("frontBed5-bluebell-creeper-sollya", ["Moderate in growth", "Billardiera needs a drained root run with less water in cold weather."], [
    card("Guide the fine twining shoots", "Tie young growth to slender supports against the sheltered wall.", "Shorten tangled or overlong shoots lightly after flowering. This climber cannot cling directly to smooth masonry."),
    card("Protect the H3 framework", "Plan shelter before prolonged frost reaches the wall.", "Take cuttings as insurance if desired. A warm wall reduces exposure but does not guarantee survival of this tender Australian climber in a severe winter."),
  ]);
  care("frontArbutus-arbutus-unedo", ["Deeply while establishing", "Strawberry tree needs drained soil; a young root ball can dry even when surrounding ground looks damp."], [
    card("Give the strawberry tree long-term space", "Allow for a broad evergreen crown rather than repeatedly clipping it small.", "Typical mature height and spread are each 4–8m. Review clearance from the narrow wall and nearby route as the tree grows."),
    card("Prune Arbutus as little as possible", "Remove only damaged or badly placed growth when needed.", "Shelter the young plant from cold drying wind. Flowers and last year's ripening fruit can share the autumn canopy; pruning removes both potential displays."),
  ]);
  care("frontBoxHedge-wall-cotoneaster-species-to-confirm", ["Little once rooted, except in drought", "Water the wall-side root area deeply while establishing; avoid persistent wet."], [
    card("Train the arching Cotoneaster gently", "Keep outward-growing stems within the path clearance.", "Retain flowered shoots if berries are wanted. Do not impose a box-hedge clipping routine just because the old zone name contains Box Hedge."),
    card("Keep the working identity qualified", "Record winter leaf retention and close views of flowers and fruit.", "Coral Beauty remains an assumption. Remove unwanted seedlings and contain runners; do not spread cuttings or garden waste into natural areas."),
  ]);
  care("stairpots-p1-hedera-yellow-ripple stairpots-p2-hedera-yellow-ripple baskets-hedera-yellow-ripple", ["Moderate container moisture", "Young trailing ivy cannot draw on deep garden roots; allow drainage between watering."], [
    card("Trim ivy before it smothers its companions", "Shorten long trails to a leafy joint.", "Remove solid-green reversions and stems rooting into other pots or masonry. Juvenile trailing ivy is grown for leaves and should not promise mature flowering or berries."),
    card("Retain the evergreen edge", "Clear dead leaves and inspect stems for scale.", "Shelter the exposed root ball during severe frost. Refresh tired container compost in spring without burying the stems."),
  ]);
  care("stairpots-p2-gaultheria-unidentified", ["Moist, acidic and drained", "Keep the small Gaultheria root ball from drying; rainwater is useful where tap water is hard."], [
    card("Do not infer the species from the display", "Retain Gaultheria as the recorded identification level.", "Height, spreading habit, berry colour and frost tolerance vary. Preserve a label or photograph flowers and leaf undersides before narrowing the record."),
    card("Keep the central shrub clear", "Trim only damaged growth while its habit is being documented.", "Prevent the ivy from rooting over the crown and clear fallen pansy petals. Avoid heavy feeding and winter saturation in the shared pot."),
  ]);
  care("bed2-sedum-rose-carpet stone-sedum-chocolate-ball stone-older-caucasian-stonecrop stone-six-rowed-stonecrop stone-sedum-aureum stone-sedum-angelina stone-sedum-dragons-blood stone-sedum-atlantis", ["Let the root zone dry between soakings", "Mat-forming stonecrops store water in their leaves; frequent small splashes are unnecessary."], [
    card("Keep stonecrop stems out of wet debris", "Maintain an open, gritty surface around the mat.", "Avoid rich feeding and dense organic mulch over the crown. Remove decaying stems selectively while keeping sound rooted growth."),
    card("Control the mat after flowering", "Trim encroaching stems and remove unwanted rooted pieces.", "Replant healthy pieces only where more cover is needed. Stonecrops differ in hardiness: follow this plant's own rating rather than assuming every Sedum survives severe frost."),
  ]);
  care("stone-houseleeks stone-common-houseleek stone-chick-charms-mix stone-sempervivum-arachnoideum stone-sempervivum-purple-quartz", ["Very little once rooted", "Houseleeks need sun and fast drainage; wet winter rosettes are a greater risk than a dry surface."], [
    card("Keep each houseleek rosette open", "Lift fallen leaves and invading stonecrop from the colony.", "Do not cover the fleshy growing points with compost or rich mulch. Avoid routine feeding, which opens up the compact rosettes."),
    card("Replace only the rosette that flowered", "A flowering rosette dies after seed production; nearby offsets continue.", "Remove the dead rosette without disturbing the whole colony. Set healthy offsets into gritty soil when more plants are wanted."),
  ]);
  care("stone-echeveria stone-echeveria-devotion", ["Soak, then let compost dry", "Reduce watering sharply in a cool bright winter home; never let water collect around the crown."], [
    card("Lift tender Echeveria before frost", "Overwinter in bright, frost-free conditions.", "Do not apply the hardy Sempervivum routine to these rosettes. A sheltered patch of gravel cannot prevent freezing during a cold Bromsgrove winter."),
    card("Preserve the leaf surface", "Handle leaves as little as possible and water the soil.", "Powdery bloom or fine hairs help protect the foliage. Remove dead basal leaves gently and check sheltered rosette bases for mealybugs."),
  ]);
  care("bed5-new-zealand-flax-cultivar-to-confirm", ["Little after establishment", "Yucca tolerates drought but needs sharp drainage around its rigid rosette."], [
    card("Preserve the sword-leaved rosette", "Cut fully dead lower leaves close to their base.", "Keep the pointed tips away from paths and wear gloves when handling. Do not shear the leaves across the middle or treat the plant as flexible Phormium fans."),
    card("Remove the spent flower stalk", "Cut the old flowering stem near its base after the display.", "Retain healthy foliage and leave offsets unless overcrowded. Clear wet leaves from the centre in winter rather than adding moisture-holding mulch."),
  ]);
  care("bed4-apple-tree frontApple-apple-tree", ["Deeply in dry spells during fruit swell", "Mulch the root area while keeping the trunk clear; shallow frequent splashes do not reach tree roots."], [
    card("Prune according to the apple's training", "Free-standing trees are normally pruned while dormant; trained forms need their own summer routine.", "Retain fruiting spurs and remove dead or crossing wood gradually. Do not select a pruning system from the assumed rootstock alone."),
    card("Record fruit before relying on a cultivar", "Thin crowded fruitlets and pick when fruit releases readily with a gentle lift.", "Log flavour, skin, picking date and storage. Cox or Bramley and MM106 are working assumptions; pollination and final tree size remain unconfirmed."),
  ]);
  care("stone-pear-tree", ["Deeply while fruit develops in drought", "The mature tree needs moisture below the surface, with mulch clear of the trunk."], [
    card("Preserve pear fruiting spurs", "Prune the free-standing framework in winter, removing overcrowded wood gradually.", "If any branches are deliberately trained as an espalier or cordon, use the appropriate summer pruning method there instead. Avoid taking off a large share of the canopy at once."),
    card("Pick pears before they soften on the tree", "Test for an easy release, then ripen a small batch indoors.", "Record the harvest window and ripening behaviour. Conference and Quince A remain assumed; do not promise a specific pollination group or storage period."),
  ]);
  care("frontApple-damson-tree", ["In dry spells while fruit swells", "Keep the root area moist without waterlogging; mulch clear of the graft and trunk."], [
    card("Prune damson in dry summer weather", "Remove dead, damaged and congested wood sparingly.", "Avoid copying the apple's winter pruning routine. Summer cuts reduce the risk of silver leaf and bacterial canker in Prunus."),
    card("Harvest by fruit readiness", "Pick when fruits have developed their dark colour and soften slightly.", "Remove damaged windfalls and inspect branches carrying heavy crops. The cultivar and rootstock remain unknown, so record this tree's own timing."),
  ]);
  care("frontGateTree-weeping-crab-apple", ["During establishment and prolonged drought", "Water below the canopy and maintain mulch without covering the graft or trunk."], [
    card("Preserve the weeping grafted crown", "Remove rootstock suckers and upright shoots arising below the graft.", "Shorten only branches obstructing the gateway. Retain well-placed pendulous growth rather than cutting the tree into an umbrella with a flat lower edge."),
    card("Record blossom and ripe fruit", "Use spring flower and autumn fruit photographs to test the proposed identity.", "Red Jade is only a possibility. Retain some sound crab apples for the garden display and birds rather than treating them as a dessert-apple harvest."),
  ]);
  care("bed5-wisteria", ["During drought, especially while buds develop", "Check the dry boundary root zone; established Wisteria needs moisture but little nitrogen."], [
    card("Shorten Wisteria shoots twice yearly", "In July–August cut unwanted whippy shoots to five or six leaves.", "In January–February shorten those same shoots to two or three buds. Keep shoots needed to extend the permanent framework."),
    card("Maintain a strong permanent support", "Tie selected structural stems to sound wires or supports.", "Keep twining growth out of gutters and away from vulnerable fittings. Feed only for a demonstrated need; excessive nitrogen favours foliage over flowers."),
  ]);
  care("bed5-rose frontBed3-rose-pink frontBed4-the-pilgrim frontBed4-the-generous-gardener", ["Deeply during sustained drought", "Roses beside walls need checks below the rain shadow, especially when supporting repeat flowers."], [
    card("Train main canes before shortening laterals", "Tie flexible structural growth across the support, with room for thickening.", "On established climbing roses, shorten flowered side shoots in late winter and renew old canes gradually. Keep healthy main canes; do not prune the whole plant to ground level."),
    card("Sustain the repeat rose display", "Feed and mulch in spring, then deadhead to healthy leaves.", "Use a rose feed at its label rate and clear diseased fallen leaves. Keep selected hips only where their autumn display matters more than further flowers."),
  ]);
  care("frontBed3-climbing-rose-white-pink", ["Deeply when the wall-side soil dries", "The long flowering canes depend on a well-mulched, moist but drained root area."], [
    card("Manage Super Fairy as a repeat rambler", "Tie in flexible new canes and renew congested old wood selectively.", "Do not automatically apply a once-flowering rambler's complete post-bloom cut. Keep the framework that supports later flushes and clear growth from the window."),
    card("Remove finished flower clusters", "Deadhead complete faded sprays when further flowering is wanted.", "Feed and mulch in spring. Check that ties allow the long canes to thicken and that dense leaf cover is not trapping persistent damp against the wall."),
  ]);
  care("stone-honeysuckle", ["Keep the shaded root run moist", "Honeysuckle may flower in sun while its roots need shelter from wall-side drought."], [
    card("Train the new honeysuckle stems", "Tie shoots into the support before they become a tangled mass.", "Keep growth away from gutters and neighbouring crowns. Mulch the root area without burying the stem base."),
    card("Time pruning to observed flowering", "Use light cuts after the main display and record the flowering season.", "Serotina is an assumed late-flowering form. Avoid hard winter cuts until the plant's habit is clear; retain selected berrying growth if wanted."),
  ]);
  care("stone-clematis", ["Moist roots beneath the wall", "The large montana canopy needs a deep root run that does not dry hard in summer."], [
    card("Prune montana just after flowering", "Shorten encroaching shoots after the late-spring display.", "It flowers on old wood. The hard February cut used for viticella would remove this year's flowers; only renovate severely when necessary and expect a reduced display."),
    card("Check the weight on its supports", "Keep mature stems off gutters and weak masonry.", "Guide young shoots into sound wires before they tangle. Keep roots cool with mulch while leaving the crown clear of wet debris."),
  ]);
  care("bed5-big-pot-petunia-bees-knees bigpot1-petunia bigpot2-petunia", ["Evenly moist while flowering", "Water the compost thoroughly and drain; hanging trails do not show how dry the central root ball has become."], [
    card("Remove Petunia flowers with their seed bases", "Pinch spent blooms back to a leaf joint.", "Do not pull off only the coloured trumpet and leave the seed capsule. Shorten a few leggy trails at a time to keep flowers elsewhere on the plant."),
    card("Feed the seasonal container display", "Use a flowering-plant feed during active growth at the label rate.", "Apply to moist compost. Protect deliberately overwintered plants from frost; outdoor flowering normally finishes as temperatures fall."),
  ]);
  care("bed5-big-pot-nemesia lobeliapot-nemesia-lady-penelope", ["Even moisture without saturation", "Fine Nemesia roots suffer if the root ball dries hard; some shade helps during intense heat."], [
    card("Trim Nemesia after a tired flower flush", "Shorten spent shoots to healthy leafy growth.", "Keep the crown intact and maintain moisture for the new shoots. A pause in hot weather may recover as conditions cool; more feed alone will not restore heat-stressed bloom."),
    card("Plan frost protection separately from trimming", "Treat these plants as tender unless protected over winter.", "Take healthy non-flowering cuttings if the cultivar is worth keeping. Avoid cold wet soil around the crown, whether in a pot or the front border."),
  ]);
  care("bed5-little-pot-begonia-carmen", ["Let the surface begin drying", "Keep the fleshy Begonia crown out of stagnant water; water the compost rather than the flowers."], [
    card("Protect the double blooms", "Remove fading flowers and soft stems before grey mould spreads.", "Give bright sheltered light with protection from scorching midday sun. Do not handle the brittle stems as roughly as woody shrubs."),
    card("Confirm the Begonia group before winter storage", "Keep it frost-free while the tuber or root type remains unresolved.", "Different begonias need different dormant or actively growing winter routines. A Carmen label alone is insufficient reason to dry the whole root system as a tuber."),
  ]);
  care("bigpot1-verbena bigpot2-verbena frontBed4-verbena-margarets-memory", ["Moderate, with reliable drainage", "Flowering Verbena needs moisture in growth, but a persistently wet crown encourages decline."], [
    card("Trim finished Verbena flower clusters", "Cut back to leafy branching growth before trails become bare.", "Give full light and air around the stems. Water the roots during drought; stressed plants are more prone to a powdery coating on the leaves."),
    card("Match winter care to the selection", "Keep tender bedding forms frost-free if retaining them.", "Margaret's Memory has greater hardiness than tender pot Verbena, but still needs free winter drainage. Do not assume all plants sold as Verbena have the same lifespan."),
  ]);
  care("bigpot1-calibrachoa frontpot-calibrachoa", ["Moist but airy compost", "Fine roots react quickly to both drought and saturation; inspect the root ball before watering."], [
    card("Feed Calibrachoa while it grows", "Use a suitable container feed at the stated dilution.", "Young leaves yellowing between green veins can indicate poor iron uptake in alkaline compost. Check pH and drainage before adding more general fertiliser."),
    card("Refresh trails without routine heavy deadheading", "Lightly shorten bare shoots to encourage branching.", "Many spent flowers fall naturally. Clear rotten blooms, give strong light and keep any overwintered stock bright and frost-free."),
  ]);
  care("bigpot1-lobelia bigpot2-lobelia", ["Do not let the fine roots dry hard", "Trailing bedding Lobelia can fail quickly at a hot pot rim even while larger companions look well."], [
    card("Refresh a tired Lobelia cascade", "Trim spent or straggling growth lightly after its first flush.", "Maintain moisture and use a modest container feed as new shoots emerge. A fully dead, dried crown will not recover merely through heavier feeding."),
    card("Treat bedding Lobelia as frost-tender", "Plant outside after frost and clear collapsed growth at season's end.", "These fine trailing plants are not the upright Starship perennial in Bed 4. Avoid promising a dormant hardy crown for next spring."),
  ]);
  care("baskets-trailing-fuchsia frontPots-fuchsia-pot", ["Moist while actively growing", "Container Fuchsia dries rapidly in warm wind; reduce water in cool dormant conditions."], [
    card("Keep Fuchsia flowering on fresh shoots", "Remove finished flowers and berries, and pinch young growth before flowering.", "Feed during active growth using the container-feed rate. Avoid repeatedly cutting off shoots already carrying a display of buds."),
    card("Do not borrow Mrs Popple's hardiness", "Use frost-free shelter while these cultivars remain unresolved.", "Inspect living buds in spring before removing old wood. A trailing habit or a Fuchsia flower does not establish reliable outdoor winter survival."),
  ]);
  care("frontpot-gazania-sunny-side-up frontpot-gazania-orange-flame", ["Let the upper compost dry", "Gazania tolerates dryness better than the Bacopa sharing its pot; keep its crown out of the wettest pocket."], [
    card("Give Gazania direct sunshine", "Flowers naturally close in shade, dull weather and at night.", "Do not add water to make closed flowers open. Remove finished flower stalks near the base while retaining healthy silver-green leaves."),
    card("Keep the rosette warm and drained", "Avoid heavy feeding and water held against the crown.", "Treat as seasonal bedding or overwinter in bright frost-free conditions. Protect before freezing weather rather than relying on winter mulch."),
  ]);
  care("frontpot-bacopa-white", ["Steady moisture through flowering", "Bacopa is more drought-sensitive than the Gazanias; check its own root area in the mixed pot."], [
    card("Prevent a drought break in flowering", "Rewet the root ball before the fine stems wilt badly.", "Severe drying can interrupt flowers for some time even after watering resumes. Keep drainage open rather than compensating with constant saturation."),
    card("Shorten bare trails selectively", "Trim to healthy leafy growth and feed lightly during active growth.", "Most little flowers fall without individual deadheading. Preserve bright frost-free stock only if overwintering deliberately; Snowflake remains an assumed identity."),
  ]);
  care("frontBed4-dahlia-tampico", ["Deeply during active flowering", "Keep the tuber zone moist but aerated, with mulch clear of the main stems."], [
    card("Support and deadhead Tampico", "Cut each fading bloom to the next strong pair of leaves.", "Support stems before heavy decorative flowers lean. Pinching is useful on young growth, but not a reason to remove the current late-season display."),
    card("Keep the tubers safe from frost and wet", "After frost blackens foliage, choose lifting or suitable in-ground protection.", "In cold wet ground, lift and store sound labelled tubers cool and frost-free. Start them into growth in spring and plant out after frost risk."),
  ]);
  care("frontPots-mixed-pot", ["Check the whole container", "The planting is unidentified, so check individual root pockets and drainage instead of assuming one species' demand."], [
    card("Maintain the mixed display gently", "Remove spent flowers, rotten leaves and broken stems individually.", "Avoid wholesale pruning, division or a heavy feed until the component plants are recorded. Photograph each plant with enough detail to separate the inventory."),
    card("Plan a cautious end-of-season move", "Do not assume every component is winter-hardy.", "Keep any valued unresolved plants sheltered from frost while their identities are checked. Retain the pot as one group rather than inventing species or quantities."),
  ]);
  care("frontBed2-polemonium-golden-feathers", ["Maintain cool, moist soil", "Gold-edged Jacob's ladder scorches in hot dry ground; keep moisture available without stagnant roots."], [
    card("Remove finished flower stems", "Cut the old stems back to the fern-like leaf mound.", "Retain healthy variegated foliage and remove solid-green reversions. Do not shear away the whole mound merely because flowering ends."),
    card("Renew a tired clump in cool weather", "Divide in spring or autumn if its centre becomes congested.", "Replant healthy portions at their previous depth. Light shade and a moisture-retentive mulch help the pale leaf margins remain sound."),
  ]);
  care("bed1-red-hot-poker", ["Moist in summer, drained in winter", "Kniphofia needs water for flowering but resents a cold saturated crown."], [
    card("Cut spent poker stalks at their base", "Retain healthy strap-shaped leaves after flowering.", "Remove damaged old leaves in spring, taking care around emerging shoots. Do not cut the whole foliage fountain down every autumn."),
    card("Let the moved clump re-establish", "Divide only when necessary in spring.", "Keep the centre free of wet debris and provide sun. Royal Standard remains an assumption, so photograph complete flower spikes before making cultivar-specific predictions."),
  ]);
  care("frontBed4-festuca-elijah-blue", ["Little extra water once rooted", "Blue fescue keeps its best compact colour in lean, sunny, freely drained ground."], [
    card("Comb the blue tufts in spring", "Remove dead blades gently and snip old flower stems.", "Avoid cutting through every living leaf as if mowing a lawn. Rich feeding and damp shade encourage loose green growth rather than a dense blue mound."),
    card("Renew a hollow centre by division", "Lift a tired tuft in spring and retain healthy outer pieces.", "Space the replacements so air reaches each crown. Mark the three plants separately; a gap in one should not prompt disturbance of the other two."),
  ]);
  care("frontBed5-euphorbia-ascot-petite", ["Sparingly after establishment", "This compact spurge needs sun and drainage rather than rich, constantly moist ground."], [
    card("Remove only the flowered Euphorbia stems", "After flowering, cut spent stems low while preserving fresh basal shoots.", "Wear gloves and eye protection: the milky sap irritates skin and eyes. Keep cut material away from children and animals."),
    card("Keep Ascot Petite's crown airy", "Clear wet fallen leaves without damaging new shoots.", "Avoid hard autumn cutting and heavy feed. Protect from severe cold and persistent winter wet, especially while the plant is newly established."),
  ]);
  care("frontBed4-astrantia-trio", ["Consistently moist in growth", "Astrantia needs more summer moisture than drought-loving border plants; avoid dry shade."], [
    card("Cut spent masterwort stems for a fresh flush", "Remove tired flowers and marked foliage to the basal growth.", "Water the clump if the soil is dry after cutting. Leave selected seedheads only if self-sowing is wanted; seedlings will not reliably reproduce the named trio."),
    card("Retain the three named crowns", "Divide in spring or autumn only when crowded.", "Keep Buckland, Claret and Star of Love labelled separately within the group. Do not merge their colours into a fictitious single cultivar."),
  ]);
  care("frontBed5-gaura-gaudi-red", ["Moderate until rooted, then sparingly", "Gaura tolerates summer dryness but can rot in persistently wet winter soil."], [
    card("Refresh Gaura's airy flowers lightly", "Shorten exhausted stems to encourage a compact new flush.", "Avoid heavy nitrogen feed, which makes weak growth. Give the moving flower stems space instead of repeatedly clipping them into a dense mound."),
    card("Leave protective growth through winter", "Cut old stems back in spring when new growth becomes visible.", "Keep the crown above wet debris and consider cuttings as insurance. Frequent division is less useful than sound drainage for this often short-lived perennial."),
  ]);
  care("frontBed5-ceratostigma-plumbaginoides", ["Moderate while establishing", "Once rooted, this groundcover tolerates some dryness; keep winter drainage open."], [
    card("Wait for late spring emergence", "Mark the dormant patch before working around it.", "Ceratostigma often starts late. Do not dig out an apparently empty patch simply because earlier perennials are already growing."),
    card("Trim old stems and control the spread", "Cut dead top growth in spring and remove wandering rooted pieces.", "Retain room for the blue flowers and red autumn leaves. Divide only to limit or renew the patch, not as an annual requirement."),
  ]);
  care("frontBed5-salvia-salgoon-lake-blueberry", ["Moderate in summer; drier in winter", "Salvia needs drainage at the crown and moisture for active flowering, without constant saturation."], [
    card("Deadhead above a fresh side shoot", "Remove finished spikes to keep new flowers developing.", "Leave healthy leafy growth and give full sun. Avoid forcing soft stems with excessive nitrogen late in the season."),
    card("Protect Lake Blueberry as an H3 Salvia", "Retain some old top growth and take cuttings if insurance is wanted.", "Use frost-free protection where practical; an exposed inland winter is a risk. Delay the main cut until spring growth reveals which stems survived."),
  ]);
  care("frontBed5-fern-jurassic-gold", ["Cool, evenly moist roots", "Check the fern's root pocket despite the shared sprinkler; shade does not guarantee moist soil."], [
    card("Make room for the new croziers", "Remove old damaged fronds before the fresh ones expand.", "Cut individual stems without damaging the tightly curled growth at the crown. Leave healthy fronds contributing to the plant."),
    card("Preserve the woodland root conditions", "Top-dress with leaf mould and keep the crown clear.", "Protect the golden new foliage from scorching sun and drying wind. Ferns do not need flower feed, deadheading or a flowering-season calendar."),
  ]);
  care("frontBed5-heather-bells-extra-special", ["Moderate; avoid a dry shallow root mat", "Erica carnea tolerates neutral and mildly alkaline soil; do not assume it has Calluna's acid-only requirement."], [
    card("Trim winter heath after its spring display", "Clip spent flower tips while leafy growth remains below.", "Do not cut into bare old wood. The timing differs from late-summer Calluna flowering, so inspect the actual display before trimming."),
    card("Keep Bell's Extra Special in open light", "Remove fallen leaves from the low evergreen mat.", "Seasonal orange-gold foliage is normal; brittle brown dead shoots are not. Check root moisture before treating a colour change as a deficiency."),
  ]);
  care("frontBed5-bell-heather-providence", ["Even moisture in acid soil", "Daboecia needs a cool, humus-rich but drained root run, especially during summer bloom."], [
    card("Trim bell heather lightly in spring", "Shorten last year's flowering tips without entering bare wood.", "Keep healthy evergreen leaves and remove dead shoots individually. This is not winter-flowering Erica carnea, despite the shared heather name."),
    card("Protect both shallow root balls", "Mulch lightly with lime-free material and use rainwater where practical.", "Retain an open crown and space around the two plants. Deadhead selectively if a tidier extended summer display is wanted."),
  ]);
  care("bed1-hosta bed1-hosta-gold frontStone-hosta", ["Keep the root run cool and moist", "Hosta's broad leaves lose water rapidly; check below mulch and avoid stagnant water around the crown."], [
    card("Protect Hosta shoots as they emerge", "Check for slugs and snails from the first pointed spring buds.", "Remove hiding places near the crown and inspect after damp nights. Damaged leaves do not repair; retain sound foliage to feed the roots."),
    card("Clear foliage after natural dieback", "Let autumn leaves yellow before removing collapsed growth.", "Divide only when crowded, in spring or autumn, keeping healthy buds on each piece. Avoid burying the crown under dense winter mulch."),
  ]);
  care("bed1-euonymus bed2-euonymus-emerald-gaiety", ["Water while establishing, then in drought", "Evergreen Euonymus tolerates some dryness once rooted, but a newly moved root ball needs checks."], [
    card("Remove reverted Euonymus shoots", "Cut all-green growth out at its origin.", "Those vigorous shoots can overtake the variegated plant. Retain leafy framework when shortening stems that encroach on neighbouring planting."),
    card("Inspect evergreen leaves for scale", "Look for fixed bumps, sticky leaves and sooty growth.", "Treat the actual cause of poor foliage rather than automatically feeding. Cold-weather pink tinges on variegated leaves can be normal."),
  ]);
  care("bed1-dahlia bed1-dahlia-yellow", ["Deeply during hot flowering weather", "Dahlia tubers need moisture in growth but rot in airless wet soil; leave the stem base clear."], [
    card("Deadhead the compact double Dahlias", "Cut fading blooms back to a pair of leaves or a side bud.", "Support top-heavy shoots before wind damages them. Pinch young plants for branching, then let the formed buds develop."),
    card("Keep each tuber label through winter", "Lift after frost blackens the top if the bed cannot remain well drained.", "Store sound tubers cool and frost-free, checking for rot. Both Double Dreamy colour identities remain assumptions; label divisions without promoting them to confirmed cultivars."),
  ]);

  // Concrete specimen-level decisions. These are not autogenerated location
  // prefixes added to identical guidance to make duplicate checks pass.
  const priorities = {
    "bed1-japanese-maple": ["Protect the shallow roots", "Keep mulch over the maple's root area, clear of its trunk, and avoid digging beneath its canopy."],
    "bed1-japanese-aralia": ["Shelter the white-splashed leaves", "Keep Spider's Web out of harsh reflected sun and remove only damaged leaves beneath the maple."],
    "bed1-rhododendron": ["Keep the soil acidic", "Test the root pocket if Goldflimmer yellows; its normal yellow leaf markings should not be mistaken for chlorosis."],
    "bed1-hosta": ["Keep the cream margins sound", "Patriot's exposed pale leaf edges need protection from hot sun and slug damage at the front of Bed 1."],
    "bed1-box-hedging": ["Inspect before clipping", "Check the right-hand edging for box caterpillar webbing and blight before spreading damage with shears."],
    "bed1-euonymus": ["Retain the gold edge", "Remove green reversions and stop Emerald 'n' Gold from overtaking the neighbouring Hosta at Bed 1's front."],
    "bed1-dahlia": ["Support the central lilac display", "Keep the dark-leaved Dahlia upright without letting its stems shade the lower Bed 1 edging."],
    "bed1-dahlia-yellow": ["Keep Gold labelled separately", "Store any lifted Gold tubers apart from the lilac plant so next year's central pairing stays traceable."],
    "bed1-hosta-gold": ["Watch the relocated crown", "Check the gold Hosta's root area for dryness before increasing sun exposure to intensify its yellow colour."],
    "bed1-little-heath": ["Preserve all seven small shrubs", "Check moisture along the whole Little Heath border; one healthy plant does not prove every root ball is moist."],
    "bed1-abelia-kaleidoscope": ["Keep room below the canopy", "Monitor shade from the maple as this younger Kaleidoscope fills out; avoid feeding to compensate for insufficient light."],
    "bed1-pieris-forest-flame": ["Allow for a taller Pieris", "Keep Forest Flame distinct from the low Little Heath edging and allow its upright crown enough future space."],
    "bed2-peony": ["Keep buds close to the surface", "Do not bury the peony's crown under repeated mulch layers; support flower stems before the large heads open."],
    "bed2-weigela": ["Prune after the spring trumpets", "Retain the labelled Prism Magic Carpet framework and remove selected flowered shoots rather than clipping off next year's buds."],
    "bed2-silverbush": ["Keep the silver mound dry in winter", "Avoid extending the moisture-loving Hydrangea's watering routine into the Silverbush crown."],
    "bed2-avens": ["Check the moved Geum's roots", "Keep the lower Bed 2 root pocket moist and photograph open blooms before treating Totally Tangerine as confirmed."],
    "bed2-maiden-pink": ["Maintain a sunny low mat", "Clear taller growth from the labelled Leuchtfunk Dianthus and trim faded stems above its narrow evergreen leaves."],
    "bed2-hydrangea-petiolaris": ["Protect the wall attachment", "Guide young stems while the climbing Hydrangea establishes and inspect the wall before its self-clinging framework becomes heavy."],
    "bed2-euonymus-emerald-gaiety": ["Keep the relocated white edge visible", "Remove solid-green shoots and trim only stems crowding the lower Bed 2 planting beside the wall."],
    "bed2-rose-inherited": ["Record this rose's own habit", "Use the Bed 2 flowering photographs and new cane growth to choose pruning, independently of the yellow Bed 3 rose."],
    "bed2-butterfly-bush": ["Confirm the flowering wood", "Photograph where flower stalks join branches before deciding whether this established Buddleja should be cut hard in spring."],
    "bed2-kerria": ["Manage a small wall perennial", "Thin corydalis seedlings in the Bed 3 wall gap; the old Kerria identifier is historical, not a shrub-care instruction."],
    "bed2-centaurea-snowy-owl": ["Refresh the white-flowered clump", "Cut Snowy Owl's tired first-flush foliage back before it sprawls across the lower wall-gap planting."],
    "bed2-spiraea-double-play-big-bang": ["Keep four crowns distinguishable", "Prune the four Big Bang shrubs individually; do not include the smaller relocated Magic Carpet in the same height target."],
    "frontBed4-magic-carpet": ["Retain the lower gold mound", "Let Magic Carpet remain smaller than the four Big Bang shrubs beside it in Back Bed 3."],
    "bed2-sedum-rose-carpet": ["Protect position 1 from wet mulch", "Keep the low Rose Carpet cushion out of the deeper organic mulch used for neighbouring shrubs."],
    "bed2-weeping-cherry": ["Prune the cherry in summer", "Retain the umbrella framework and make only necessary cuts in dry summer weather rather than adopting winter apple pruning."],
    "bed3-rose-inherited": ["Retain the yellow-flowered framework", "Tie in useful Bed 3 canes and keep the Vinca beneath them from covering the rose's stem base."],
    "bed3-evergreen-candytuft": ["Record position 6 in spring", "Keep the assumed Candytuft mound visible until white flowers can test the foliage-based identification."],
    "bed3-variegated-periwinkle": ["Contain the groundcover under the rose", "Lift unwanted rooted runners at position 9 before they connect with neighbouring planting pockets."],
    "bed4-apple-tree": ["Keep feeder access clear", "Maintain the apple's useful framework around the bird feeders and photograph fruit before relying on the assumed Cox identity."],
    "bed4-callistemon-inferno-yanferno": ["Plan frost shelter for Inferno", "The bottlebrush is one of Bed 4's least hardy shrubs; check protection before a prolonged inland freeze."],
    "bed4-gaillardia": ["Keep a dry crown near thirstier plants", "Separate the Gaillardia's watering decisions from the moisture-loving Starship Lobelia in the same bed."],
    "bed4-abelia-kaleidoscope": ["Retain the warm foliage contrast", "Give the established Kaleidoscope light around the apple planting and remove reversions without shearing all its flower shoots."],
    "bed4-abelia-radiance": ["Keep the pale Abelia separate", "Distinguish Radiance's cream-edged shoots from nearby Kaleidoscope when inspecting reversions and recording growth."],
    "lobeliapot-lobelia-starship-scarlet-bronze-leaf": ["Water the new bed root run", "Starship now grows in Bed 4, so check soil around its moved crown rather than following its former pot location."],
    "bed5-wisteria": ["Keep the boundary framework accessible", "Train selected Wisteria extensions while shortening side shoots so they do not engulf the pots beneath."],
    "bed5-rose": ["Keep the supported rose distinct", "Train the rose clear of the Wisteria and retain Golden Showers as an assumption until the flower record proves it."],
    "bed5-new-zealand-flax-cultivar-to-confirm": ["Keep sharp leaves away from access", "Maintain clearance around the lower-left Yucca without cutting across its rigid sword leaves."],
    "bed5-big-pot-alstroemeria": ["Protect the central perennial roots", "Avoid pulling hard on Alstroemeria stems while its roots share the big pot with seasonal trailers."],
    "bed5-big-pot-petunia-bees-knees": ["Give Bee's Knees room to trail", "Shorten bare yellow-Petunia stems before they tangle through the Alstroemeria and the two Nemesias."],
    "bed5-big-pot-vinca-minor-illumination": ["Contain the original gold-centred Vinca", "Keep this established big-pot specimen separate in the record from the additional Vinca on the Bed 2/3 wall."],
    "bed5-big-pot-nemesia": ["Retain the Wisley Vanilla label", "Trim the white scented Nemesia independently of the moved Aroma Heart of Gold sharing the Bed 5 pot."],
    "bed5-medium-pot-lythrum-robin": ["Check the separate medium pot first", "Robin's moisture demand is higher than most Bed 5 pot plants; inspect its root ball during every hot dry spell."],
    "bed5-little-pot-begonia-carmen": ["Shelter the little pot's flowers", "Keep Carmen's brittle red-flowered stems out of strong wind and avoid soaking its fleshy centre."],
    "bed1-nemesia": ["Follow the moved specimen", "Aroma Heart of Gold now shares the Bed 5 big pot; check that root pocket rather than its former Bed 1 edge."],
    "stone-cabbage-tree": ["Use the Bed 5 location", "Keep the Red Star Cordyline's trunk base drained in Bed 5; its old stone-prefixed ID does not place it in the gravel bed."],
    "stone-houseleeks": ["Retain the older red colony", "Keep the assumed Rubin rosettes distinct from the newer labelled houseleeks when taking offsets or recording colour."],
    "stone-echeveria": ["Lift the powdery rosette before frost", "Handle the assumed Perle von Nürnberg by its pot or roots so the protective leaf bloom remains intact."],
    "stone-sedum-chocolate-ball": ["Protect this less-hardy stonecrop", "Chocolate Ball is rated H3; keep a protected plant or cutting rather than assuming it shares the hardiness of Angelina."],
    "stone-older-caucasian-stonecrop": ["Retain the older mat separately", "Trim the established unidentified Caucasian stonecrop without merging its record with the newly labelled Dragon's Blood."],
    "stone-common-houseleek": ["Keep the red-tipped rosettes visible", "Remove encroaching fine stonecrop before it masks the assumed common houseleek colony."],
    "stone-six-rowed-stonecrop": ["Record flowers before confirming species", "Keep a clear patch of the fine six-ranked stems and photograph its yellow display when it appears."],
    "stone-ajuga-fancy-finch": ["Protect the gold leaves from dry heat", "Maintain the cooler moist pocket beneath Fancy Finch and stop it spreading over the smaller succulent rosettes."],
    "stone-hydrangea-snowflake": ["Water its own deeper pocket", "Keep organic mulch around Snowflake's roots while preserving the dry gravel around adjacent alpines."],
    "stone-chick-charms-mix": ["Keep the series as a mix", "Propagate labelled offsets as Chick Charms mix unless a retained tag identifies an individual cultivar."],
    "stone-achillea-king-alfred": ["Preserve the miniature cushion", "Keep taller leaves away from King Alfred's low pale-yellow flowers and avoid applying border-yarrow feeding."],
    "stone-sedum-aureum": ["Stop gold stonecrop covering rosettes", "Remove Aureum stems that root into the houseleek colonies while keeping its own bright patch intact."],
    "stone-sempervivum-arachnoideum": ["Leave the natural cobweb hairs", "Do not wash away the fine white webbing from the houseleek tips or mistake it for spider-mite damage."],
    "stone-armeria-armada-white": ["Clear spent white flower stalks", "Remove Armada White's old globes individually so the tight grassy cushion remains open and visible."],
    "stone-sempervivum-purple-quartz": ["Allow space for the larger rosettes", "Keep the Big Sam Purple Quartz colony from being crowded by faster stonecrop mats."],
    "stone-sedum-angelina": ["Contain the golden trails", "Trim Angelina before it bridges separate alpine planting pockets and roots into slower-growing neighbours."],
    "stone-sedum-dragons-blood": ["Keep the new label with this mat", "Take cuttings only from the labelled Dragon's Blood patch if that exact cultivar is wanted elsewhere."],
    "stone-echeveria-devotion": ["Keep the velvety foliage frost-free", "Lift Devotion with its roots intact and keep its hairy leaves dry in bright protected winter conditions."],
    "stone-sedum-atlantis": ["Watch for plain-green reversions", "Remove solid-green Atlantis shoots at their origin so they do not overtake the cream-margined mound."],
    "stone-pennisetum-rubrum": ["Arrange movable winter protection", "Plan how to lift or pot the broad Rubrum clump before freezing weather makes moving it difficult."],
    "stone-ajuga-midnight-mystery": ["Retain its moist dark-leaved patch", "Check the soil under Midnight Mystery rather than copying the neighbouring drought-tolerant stonecrop routine."],
    "stone-new-zealand-flax-dark": ["Maintain the dark fan's clearance", "Cut individual damaged Platt's Black blades at the base without shading or slicing adjacent alpine plants."],
    "stone-agapanthus": ["Measure position 9 in flower", "Record flower colour, stalk height and winter leaf retention before assigning this Agapanthus a cultivar or hardiness."],
    "stone-honeysuckle": ["Keep the right Patio support clear", "Guide the honeysuckle on its own support and inspect the sheltered root area for drought beneath the house wall."],
    "stone-clematis": ["Retain the left-wall spring display", "Make containment cuts after the montana flowers, while checking that its mature weight remains safely supported."],
    "stone-pear-tree": ["Record the upper-terrace harvest", "Test a few pears for indoor ripening before picking the whole crop; keep Conference and Quince A qualified."],
    "bigpot1-fuchsia": ["Leave space around the lower pot's crown", "Keep trailing plants from matting over Mrs Popple's woody base in the decking-corner container."],
    "bigpot1-verbena": ["Refresh the front-left pink trails", "Trim a few Showboat Light Pink stems at a time so the lower pot keeps flowers during regrowth."],
    "bigpot1-calibrachoa": ["Inspect the miniature pink trumpets", "Check the fine Cabaret roots and young leaf colour before adding water or feed to the whole lower pot."],
    "bigpot1-nepeta": ["Keep the catmint's centre open", "Stop the lower pot's Fuchsia and bedding from covering the grey Nepeta crown after its first cutback."],
    "bigpot1-lobelia": ["Check the shaded lower-pot rim", "Rewet the fine blue-and-white Lobelia roots before the cascade browns beneath the taller container flowers."],
    "bigpot1-petunia": ["Keep Midnight Sky's name unresolved", "Retain the recorded Midnight Sky name and a fresh label; white speckling alone does not prove NightSky's breeder identity."],
    "lobeliapot-skimmia-cleopatra": ["Check pollination before expecting berries", "Cleopatra shares the pot with Antarctica; do not assume the second Skimmia supplies compatible male flowers."],
    "lobeliapot-skimmia-antarctica": ["Record Antarctica's flowers and fruit", "Retain its separate label and observe the berry colour rather than copying Cleopatra's red-fruit description."],
    "lobeliapot-viola-rocky-purple-picotee": ["Check all three low crowns", "Keep the three Rocky Purple Picotee plants clear of fallen Skimmia leaves and inspect each small root plug."],
    "bed23wallpot-viburnum-lisarose": ["Allow Lisarose room above the Vinca", "Keep the wall pot's ivy-like trailer off the Viburnum base and plan greater root room as the shrub grows."],
    "bed23wallpot-vinca-minor-illumination": ["Keep the additional Vinca on the wall", "Trim rooted runners before this second Illumination leaves its shared wall pot or smothers Lisarose."],
    "viburnumpot-viburnum-tinus-spirit": ["Inspect the separate Spirit pot", "Check drainage and root crowding in Spirit's own glazed pot rather than assuming it matches the shared Lisarose container."],
    "cercispot-cercis-carolina-sweetheart": ["Plan for the specimen pot to fill", "Check Carolina Sweetheart's root space and support ties; a tree-sized canopy cannot remain indefinitely in exhausted potting mix."],
    "bigpot2-lobelia": ["Check the exposed upper-pot rim", "Wind and sun can dry Big Pot 2's Lobelia faster than the matching plant near the decking."],
    "bigpot2-verbena": ["Keep the bicolour front edge branching", "Trim Venturi Pink Bicolour where its trails become bare, preserving flowering shoots elsewhere in the upper pot."],
    "bigpot2-petunia": ["Retain its separate purple-white display", "Label Big Pot 2's Sky Purple White Sky independently of the speckled Petunia in Big Pot 1."],
    "bigpot2-nepeta": ["Balance the upper pot's mixed needs", "Let Nepeta's crown dry slightly while checking the more thirsty Lobelia and Fuchsia roots separately."],
    "bigpot2-fuchsia": ["Protect the upper pot's exposed roots", "Insulate or shelter Mrs Popple's glazed container in prolonged cold even if the lower-pot Fuchsia appears sheltered."],
    "littlepot1-hellebore-ice-n-roses-bennotta": ["Keep Little Pot 1's winter crown clear", "Remove collapsed hellebore leaves and petals without treating this new winter planting as the removed summer bedding."],
    "wallpot2-coreopsis-gold": ["Use the upper stair-wall pot", "Coreopsis now grows in Little Pot 2; inspect that small root ball rather than the Echinacea's former shared history."],
    "baskets-calluna-trio-mix": ["Check both heather root plugs", "One Calluna plant is recorded in each matching basket; inspect both rather than assuming a three-plant commercial mix count."],
    "baskets-viola-rocky-purple-picotee": ["Deadhead each matching basket", "One Rocky Purple Picotee grows in Basket 1 and one in Basket 2; keep both low crowns clear."],
    "baskets-hedera-yellow-ripple": ["Keep both ivy trails in balance", "Trim the two basket ivies independently so neither covers the small heather and pansy crowns."],
    "baskets-pansy-fire": ["Preserve the warm-coloured pair", "Remove spent Fire pansy flowers in both matching baskets, including their developing seed capsules."],
    "baskets-pansy-rose-surprise": ["Keep the rosy crowns visible", "Clear trailing ivy from each Rose Surprise pansy so its small flowers are not shaded out."],
    "baskets-trailing-fuchsia": ["Keep Basket 3's large flowers supported", "Arrange the arching Fuchsia stems clear of the new Cyclamen and fern rather than clipping the whole basket together."],
    "baskets-fern-unidentified": ["Keep a frond for identification", "Photograph the retained Basket 3 fern's underside before removing old fronds; its winter requirements are still unresolved."],
    "baskets-lysimachia-unidentified": ["Contain Basket 3's fast trailer", "Shorten Lysimachia before it covers the Cyclamen tuber or tangles through the retained fern."],
    "baskets-chrysanthemum-unidentified": ["Protect the autumn buds", "Do not pinch the newly planted Basket 3 Chrysanthemum as though preparing a summer nursery plant."],
    "baskets-cyclamen-unidentified": ["Keep the tuber undivided", "Do not apply the old perennial-template division advice to Basket 3's Cyclamen; protect it until its species is known."],
    "wallpot1-phormium-flamingo": ["Check the wall pot's stability", "Flamingo's strap leaves catch wind; secure the container and plan more root room as the clump expands."],
    "wallpot2-echinacea-mooodz-glory": ["Protect the white coneflower's crown", "Keep Mooodz Glory's own pot drained through winter and mark where new basal shoots should emerge."],
    "frontpot-gazania-sunny-side-up": ["Keep the pale rosette in direct light", "Position the Sunny-Side Up side of the Front Pot clear of trailing foliage that shades its sun-opening flowers."],
    "frontpot-gazania-orange-flame": ["Keep the orange crown out of wet trails", "Move Bacopa stems away from Orange Flame's centre and check its soil before watering for the thirsty trailer."],
    "frontpot-calibrachoa": ["Check the fine roots beside the Gazanias", "The assumed Can-Can Sunrise needs steadier moisture than the daisies, but cannot tolerate permanently saturated compost."],
    "frontpot-bacopa-white": ["Prevent the white edge drying out", "Check Bacopa's root pocket during hot weather even when the drought-tolerant Gazanias still look firm."],
    "house-hallway-kentia-palm": ["Keep the hallway root ball drained", "Empty standing water from the outer pot and keep Kentia fronds out of draughts near the staircase."],
    "house-sitting-asplenium-gioia": ["Use the new kitchen-window conditions", "Check Gioia's light and moisture at its September kitchen/dining position, keeping water out of the rosette centre."],
    "house-hallway-staghorn-fern": ["Retain the papery shield fronds", "Leave the brown basal shields intact and keep Nicola's hallway fern clear of direct radiator heat."],
    "house-sitting-mixed-spider-plant": ["Keep runners off the smaller companions", "Trim or pot selected spider plantlets before the vigorous arching growth shades the shared planter's palm and vine."],
    "house-sitting-mixed-parlour-palm": ["Expose the palm's small crown to light", "Guide Spider Plant leaves away from the palm and inspect its fine fronds for mites in dry room air."],
    "house-sitting-mixed-arrowhead-vine": ["Keep the vine accessible and out of reach", "Trim climbing stems before they disappear through the palm, and keep this irritant plant away from pets and children."],
    "frontBed1-hydrangea": ["Preserve the upper anchor's buds", "Keep strong old stems through winter rather than cutting this mophead like the Bloody Marie panicle Hydrangea."],
    "frontBed1-lavender": ["Keep the mound below the pillar sunny", "Prevent taller Front Bed 1 foliage from shading the Lavender and avoid mulching its woody centre."],
    "frontBed2-coprosma-inferno": ["Protect the upright back-left shrub", "Keep winter shelter ready for Inferno without enclosing its glossy foliage in constantly damp coverings."],
    "frontBed2-coprosma-pina-colada": ["Check the gold-leaved back-right roots", "Watch Pina Colada's pale foliage for scorch and dry roots before trying to restore colour with fertiliser."],
    "frontBed2-coprosma-city-knights": ["Check competition beside the hedge", "Keep the newly planted City Knights root ball moist while the established hedge draws water from the surrounding ground."],
    "frontBed2-hebe-kiwi-horopito": ["Retain the compact front-left outline", "Trim Kiwi lightly after its purple spikes finish without cutting the small evergreen framework into bare wood."],
    "frontBed2-polemonium-golden-feathers": ["Protect the gold leaf margins", "Keep Golden Feathers' front-right root pocket moist and shade it from the hottest reflected afternoon sun."],
    "frontBed3-cercis-eternal-flame": ["Allow a small tree's eventual spread", "Keep the September redbud's root area clear while planning for a crown up to about four metres across."],
    "frontBed3-climbing-rose-white-pink": ["Keep Super Fairy off the window", "Tie flexible flowering canes around the Bedroom 3 opening while retaining shoots for the repeat display."],
    "bed2-variegated-dogwood": ["Let the relocated dogwood root first", "Avoid stooling the whole moved shrub before it establishes beneath the Bedroom 1 window."],
    "bed1-red-hot-poker": ["Give the moved poker open sun", "Keep the clump at the front of the wall bed from being shaded by the relocated dogwood."],
    "frontBed3-leucothoe-little-flames": ["Protect the low acidic root pocket", "Keep Little Flames beneath the trellis clear of alkaline rubble and dense competing roots."],
    "frontBed3-rose-pink": ["Retain the pink rose's long canes", "Train its observed climbing framework near the ensuite corner while leaving Compassion visibly qualified as an assumption."],
    "frontBed4-photinia-existing": ["Balance canopy and lower planting", "Thin selected Photinia branches if they shade the new plants rather than repeatedly clipping the entire canopy."],
    "frontBed4-the-pilgrim": ["Train the left wall's yellow rose", "Keep The Pilgrim's long canes across its support instead of pruning it to the size of a freestanding shrub."],
    "frontBed4-the-generous-gardener": ["Plan for the taller right-hand climber", "Spread The Generous Gardener's main canes across sound supports and retain selected hips if wanted in autumn."],
    "frontBed4-physocarpus-cluster-1": ["Retain two Little Devils and one Lady", "Check the added Lady in Red's roots separately from the two established Little Devils in Cluster 1."],
    "frontBed4-physocarpus-cluster-2": ["Retain two Ladies and one Little Devil", "Keep the relocated surviving Little Devil visible below Cluster 2's two taller Lady in Red shrubs."],
    "frontBed4-azalea-silvester": ["Check the new location 6 root ball", "Protect Silvester's shallow roots at the former cluster position and preserve its original label spelling."],
    "lobeliapot-nemesia-lady-penelope": ["Use the front-bed root conditions", "Check Lady Penelope at Front Bed 4 location 7; the old pot-based watering instructions no longer describe its setting."],
    "frontBed4-purple-gem": ["Keep the moved shrub free of ivy", "Maintain the cleared space around Purple Gem in the former Lady in Red position so its roots can establish."],
    "frontBed4-rhododendron-libretto": ["Leave room in the shaded corner", "Keep Libretto's broad future crown distinct from the nearby Physocarpus groups rather than clipping it to fit later."],
    "frontBed4-festuca-elijah-blue": ["Check each of the three blue tufts", "Renew only a Festuca whose centre is failing and keep damp leaf litter out of the other crowns."],
    "frontBed5-pieris-polar-passion": ["Follow Polar Passion to Front Bed 4", "Check its moved root ball in Flaming Silver's former position rather than its old Front Bed 5 location."],
    "frontBed4-dahlia-tampico": ["Retain Tampico's own tuber label", "Keep the red-and-white front-bed Dahlia separate from both dark-leaved Double Dreamy plants when lifting."],
    "frontBed4-verbena-margarets-memory": ["Keep the sunny edge drained", "Protect Margaret's Memory's low crown from winter wet beside Tampico rather than automatically replacing it as tender pot Verbena."],
    "frontBed4-calluna-trio-mix": ["Maintain the two remaining plants", "Keep the Front Bed 4 heathers open to sun after one plant from this group moved into a basket."],
    "bed4-achillea": ["Use the new sunny front-bed position", "Cut Summer Berries back in Front Bed 4; the old Back Bed 4 identifier only preserves its history."],
    "frontBed4-azalea-lotte": ["Keep location 16's root mat cool", "Mulch around Lotte lightly without burying its new crown beneath surrounding shrub leaves."],
    "frontBed5-mexican-orange-blossom": ["Preserve the golden mid-bed mound", "Shape Sundance after flowering without removing all the evergreen shelter it gives the lower boundary planting."],
    "frontBed5-climber-unidentified": ["Treat the boundary rose as observed", "Retain the established shrub framework and hips; the old climber ID does not prove a rambling growth class."],
    "frontBed5-bay-tree": ["Maintain the standard's clear stem", "Remove basal suckers and inspect the bay's head separately from the nearby shrub previously mistaken for another bay."],
    "frontBed5-japanese-skimmia": ["Record sex from flowers, not leaves", "Document the boundary Skimmia's flowers and fruit before using it as a pollination partner for the potted females."],
    "frontBed5-hardy-fuchsia": ["Keep the border crown over winter", "Wait for spring regrowth before deciding how much of this established Fuchsia's framework has died back."],
    "frontBed5-clematis": ["Cut the summer climber in late winter", "Mark this viticella as Group 3 so its pruning is not confused with the Patio's spring montana."],
    "frontBed5-hydrangea-bloody-marie": ["Keep the drive-side root run moist", "Check Bloody Marie's new planting pocket where the Honeysuckle stood, especially as the panicles expand."],
    "frontBed5-euphorbia-ascot-petite": ["Keep the replacement spurge dry at the crown", "Do not apply Polar Passion's former moisture and acid-soil routine to Ascot Petite in the same pocket."],
    "frontBed4-flaming-silver": ["Check the moved silver-edged Pieris", "Maintain acidic mulch and moisture around Flaming Silver in its sheltered Front Bed 5 position."],
    "frontBed4-astrantia-trio": ["Water the relocated wall-side group", "Check all three Astrantia crowns for dryness rather than assuming the wall pocket stays cool and moist."],
    "frontBed5-pittosporum-tom-thumb": ["Let the fresh green leaves darken", "Tom Thumb's lime new growth is normal; retain it unless a branch stays persistently unlike the purple mound."],
    "frontBed5-gaura-gaudi-red": ["Keep the open pocket lean", "Protect Gaudi Red from wet mulch and rich feeding so its compact airy stems remain firm."],
    "frontBed5-heather-bells-extra-special": ["Separate winter heath from Calluna care", "Clip Bell's Extra Special after spring flowering, rather than treating all the front-edge heathers as one flowering group."],
    "frontBed5-heather-tib": ["Keep Tib's double pink spikes labelled", "Trim its own spent tips lightly in spring and avoid merging this dark-green mound with the golden heathers."],
    "frontBed5-bell-heather-providence": ["Check both bell-heather plants", "Maintain moisture around the matching Providence root balls on either side of the central planting."],
    "frontBed5-heather-leprechaun": ["Retain the label for the gold mound", "Keep Leprechaun's shallow roots moist without assuming its foliage colour proves a different golden Calluna cultivar."],
    "frontBed5-heather-winter-chocolate": ["Allow the winter colour change", "Do not remove firm chocolate-red foliage as dead growth; test brittle shoots and soil moisture before cutting."],
    "frontBed5-viola-rocky-purple-picotee": ["Keep the single remaining Viola visible", "Clear surrounding Astrantia and heather foliage from this low plant rather than applying a hanging-basket count or location."],
    "frontBed5-ceratostigma-plumbaginoides": ["Mark the late-emerging groundcover", "Keep the Ceratostigma patch labelled through winter so spring work among the heathers does not disturb dormant roots."],
    "frontBed5-hypericum-cultivar-to-confirm": ["Retain Radiance without inventing a breeder code", "Compare the original label with future foliage and fruit photographs before choosing among conflicting commercial Radiance descriptions."],
    "frontBed5-bluebell-creeper-sollya": ["Keep twining stems on the warm wall", "Inspect Bluebell Creeper's fine supports and plan cold protection before the exposed tips are damaged."],
    "frontBed5-hebe-rhubarb-and-custard": ["Protect the pink-flushed evergreen", "Rhubarb and Custard is rated H3; shelter its foliage and do not use a hardier Hebe's winter expectations."],
    "frontBed5-salvia-salgoon-lake-blueberry": ["Keep a protected Salvia backup", "Take Lake Blueberry cuttings if retaining this H3 wall-side plant matters after a severe winter."],
    "frontBed5-fern-jurassic-gold": ["Check beyond the shared sprinkler", "Feel Jurassic Gold's soil at location 13 because its shared irrigation with location 10 does not prove even coverage."],
    "frontStone-hosta": ["Check the stone trough's drainage", "Keep the Hosta root ball moist in heat while ensuring winter rain can leave the heavy stone container."],
    "frontArbutus-arbutus-unedo": ["Allow for the evergreen tree's width", "Review future clearance beside the narrow brick wall as Arbutus grows beyond its September planting size."],
    "frontBoxHedge-wall-cotoneaster-species-to-confirm": ["Retain the arching wall screen", "Keep the assumed Coral Beauty off the path while preserving berrying stems and documenting its winter leaves."],
    "frontApple-apple-tree": ["Document the drive-side apples", "Record the fruit before planning around Bramley's triploid pollination needs; the Bramley and MM106 names are still assumptions."],
    "frontApple-damson-tree": ["Separate it from the apple's pruning job", "Mark the adjacent damson for dry-summer pruning so a winter apple tidy does not accidentally include it."],
    "frontPots-mixed-pot": ["Record P1's component plants", "Photograph each distinct plant in the left boundary pot before splitting this container group into individual records."],
    "frontPots-fuchsia-pot": ["Keep P2's Fuchsias distinct", "Retain labels from the right boundary pot before assuming they match the two Mrs Popple specimens in the back garden."],
    "stairpots-p1-hedera-yellow-ripple": ["Keep White Pot 1's edge open", "Trim Yellow Ripple trails away from the Skimmia stem base and the Fire Red pansy crowns."],
    "stairpots-p1-skimmia-double-diamond": ["Retain Double Diamond's label", "Keep the white-pot centre clear and record flowers before assuming its sex or berry colour from another Skimmia."],
    "stairpots-p1-pansy-fire-red": ["Clear blooms beneath the white-pot Skimmia", "Deadhead the Fire Red pansies before damp petals collect around the shared evergreen stem base."],
    "stairpots-p2-hedera-yellow-ripple": ["Keep Blue Pot 2's focal shrub visible", "Shorten the ivy before it grows across the Gaultheria crown and hides the small pansy flowers."],
    "stairpots-p2-gaultheria-unidentified": ["Resolve the blue-pot shrub's species", "Retain a label or close flower and fruit photographs; a Gaultheria genus record does not establish mature size or berry colour."],
    "stairpots-p2-pansy-fire-red": ["Check blue-pot pansy crowns separately", "Keep the Fire Red roots moist without leaving their crowns saturated while watering for Gaultheria."],
    "frontGateTree-weeping-crab-apple": ["Maintain gateway clearance selectively", "Shorten only obstructive pendulous branches and retain blossom and ripe-fruit evidence before confirming Red Jade."],
  };

  Object.entries(priorities).forEach(([id, [value, detail]]) => {
    const profile = OAK.PLANT_BY_ID[id].plant.profile;
    fact(profile, "Care priority", value, detail);
    profile.careSummary = `${value}. ${detail}`;
    if (reviewed.has(id)) profile.careGuide.push(card(value, "For this Oak Lodge specimen", detail));
  });

  const profileFor = (id) => OAK.PLANT_BY_ID[id].plant.profile;
  const descriptions = {
    "bed2-peony": "The herbaceous peony in lower Bed 2 makes a substantial leafy clump with a brief early-summer flower display, then dies back in autumn. Sarah Bernhardt is the existing working cultivar assumption, not a retained-label identification. Record a fully open flower before relying on that cultivar's exact colour and form; keep the crown shallow and support heavy stems before the buds open.",
    "bed2-avens": "The moved Geum brings warm orange flowers on branching stems above a low leafy rosette in Bed 2. Totally Tangerine is recorded as an assumed match, so the flower form and full-season behaviour still need checking. Its practical needs are a cool, moist but drained root run, removal of tired flowering stems and occasional division when the clump becomes congested.",
    "bed2-weeping-cherry": "Long pendent branches give this Bed 3 cherry an umbrella-shaped framework, followed by pink spring blossom and a green summer canopy. Kiku-shidare-zakura is the recorded working assumption; neither that cultivar nor the rootstock is proven. Retain the tree's observed shape, document open flowers and make necessary pruning cuts in dry summer weather.",
    "bed4-apple-tree": "The Bed 4 apple provides spring blossom, summer shade and fruit, as well as the framework for the bird feeders. Cox's Orange Pippin on MM106 is an existing assumption, not a verified identification. Record ripe fruit and picking behaviour before relying on cultivar-specific pollination, flavour or storage advice; eventual size also depends on the unresolved rootstock.",
    "bed4-abelia-radiance": "Radiance adds a compact mound of cream-edged evergreen to semi-evergreen foliage around the Bed 4 apple. Pale tubular flowers extend its interest into late summer, while cold weather may cause some normal leaf loss. Keep its light variegation distinct from nearby Kaleidoscope, remove all-green reversions and prune selectively in spring rather than repeatedly shearing the flowering shoots.",
    "bed5-wisteria": "This vigorous woody climber carries hanging lilac spring flower clusters along the Bed 5 boundary, then produces long leafy shoots through summer. Chinese Wisteria Prolific is the recorded assumption and remains unconfirmed. Its main care is a strong trained framework and twice-yearly shortening of side shoots so the canopy does not engulf the planting and pots below.",
    "bed5-rose": "The supported Bed 5 rose adds summer flowers among the boundary framework. Golden Showers is a working identification rather than a proven cultivar, so flower photographs and repeat-flowering observations remain useful. Keep its main canes clear of the Wisteria and train them deliberately, preserving the distinction between woody framework and shorter flowering side shoots.",
    "bed5-big-pot-nemesia": "The retained label identifies this Bed 5 pot plant as Nemesia Wisley Vanilla. Its small pale flowers provide close-range scent and a light contrast to the darker Aroma Heart of Gold sharing the container. A trim after a tired flush, even moisture and shelter from severe heat help it flower again; winter survival should not be assumed without protection.",
    "bed1-nemesia": "Aroma Heart of Gold forms a low bushy Nemesia with scented, two-lipped flowers combining burgundy, cream-yellow and warm orange tones. It moved from Bed 1 into the Bed 5 big pot in August 2026 and is distinct from the labelled Wisley Vanilla already there. Check the shared pot for drying and trim tired flower shoots to retain a compact, branching display.",
    "stone-honeysuckle": "The honeysuckle climbs its support at the far right of the Patio, providing fragrant tubular summer flowers above a shaded root run. Serotina is the current assumed cultivar, not a retained-label certainty. Guide the new shoots before they tangle, record the flowering window and keep the wall-side roots from drying during warm weather.",
    "stone-pear-tree": "The mature upper-terrace pear supplies white spring blossom, a broad summer canopy and a crop that should be tested for picking while still firm. Conference on Quince A is the existing working assumption; fruit and graft evidence have not confirmed it. Record harvest and indoor-ripening behaviour rather than promising a particular storage period or pollination group.",
    "bigpot1-nepeta": "Grey-green aromatic catmint threads through Big Pot 1 and lifts lavender-blue flower spikes between its summer bedding. Walker's Low is an assumed identity. Give it light and air, cut the first tired flowering stems back to fresh growth and keep its crown drier than the thirstier Fuchsia and Lobelia sharing the pot; do not assume it will produce useful seed.",
    "bigpot1-petunia": "The Petunia recorded as Midnight Sky trails from the front-right of Big Pot 1 with dark purple flowers and variable white markings. Midnight Sky and NightSky are different commercial selections, so the speckled flowers do not justify assigning the NightSky breeder code Kleph15313. Retain the recorded name while checking a label, and use ordinary tender Petunia care: good light, regular feeding and selective deadheading.",
    "lobeliapot-skimmia-cleopatra": "Cleopatra forms one of the evergreen centres of the Skimmia Pot, with glossy foliage and fragrant pale spring flowers. This female selection can carry red berries when compatible pollen is available; sharing a pot with another female does not provide it. Shade, an evenly moist root ball and drainage matter more than acidity: Skimmias do not require ericaceous compost.",
    "lobeliapot-skimmia-antarctica": "Antarctica is the second labelled Skimmia in the blue pot, sharing its root space with Cleopatra and three Rocky Purple Picotee Violas. Its compact evergreen framework gives year-round structure, while the spring flowers and any later fruit should be recorded separately from Cleopatra. Protect the root ball from drying and avoid assuming that pale foliage needs acidifying treatment.",
    "lobeliapot-viola-rocky-purple-picotee": "Three Rocky Purple Picotee Violas form a low purple-and-pale-edged flowering layer beneath the two Skimmias. Their cool-season display can pause in hard frost or summer heat. Each little crown needs light, airflow and reliable moisture, with spent flower stems and seed capsules removed before the shared pot becomes crowded with decaying petals.",
    "wallpot2-coreopsis-gold": "The Coreopsis moved into Little Pot 2 on the upper stair wall carries golden daisy flowers above a compact leafy clump. Early Sunrise is the existing assumed match; the original garden name Gold does not prove a cultivar. Deadheading and a light trim of exhausted stems sustain the display, while the small pot needs summer moisture and an airy crown through winter.",
    "baskets-calluna-trio-mix": "Two Calluna plants from the recorded Trio Mix now provide low evergreen structure across the matching baskets, one in Basket 1 and one in Basket 2. The commercial mix name does not mean three plants are present in each basket. Keep the shallow root plugs moist in acidic compost and lightly clip flowered tips in spring without cutting into bare wood.",
    "baskets-fern-unidentified": "The retained fern brings divided green fronds to Hanging Basket 3, contrasting with the new autumn flowers and trailing Lysimachia. Ferns do not flower: their display is foliage, and brown spore patches on frond undersides can be normal. Its species and hardiness remain unresolved, so preserve identification photographs and use cautious frost protection rather than assuming a hardy woodland fern.",
    "baskets-lysimachia-unidentified": "This Lysimachia supplies trailing foliage around Hanging Basket 3. The genus is recorded, but neither a species nor a cultivar has been established, so precise flower colour, mature spread and hardiness remain open. Keep its root plug moist and shorten trails before they cover the fern or Cyclamen; photograph flowers and leaf arrangement when available.",
    "baskets-chrysanthemum-unidentified": "The Chrysanthemum adds a compact autumn flower display to Hanging Basket 3. Its cultivar and florist-versus-hardy-garden status remain unresolved. Give the buds light, remove fading heads before mould develops and maintain moisture in the drained basket; do not divide it or promise an outdoor return merely because the old record classified it as a perennial.",
    "baskets-cyclamen-unidentified": "Swept-back flowers and patterned leaves make the Cyclamen a low autumn focus in Hanging Basket 3. Its species is unknown, which matters: common bedding C. persicum and hardy garden cyclamens have different winter limits. Keep the tuber undivided, clear decaying flower stalks from its centre and shelter it from frost until the identity is resolved.",
    "wallpot1-phormium-flamingo": "Flamingo replaced the seasonal Calibrachoa in the Steps wall pot. Arching sword-shaped leaves striped pink and olive-green provide the lasting display; flowers are occasional on mature plants, not a year-round feature. The clump can approach a metre in height and spread, so its small container needs secure placement, drainage and a plan for increasing root room.",
    "frontBed3-cercis-eternal-flame": "Eternal Flame is a deciduous redbud whose heart-shaped foliage combines fresh red leaves with older orange and yellow tones through the growing season. Mature branches can carry dark pink flowers in mid-spring before the leaves. The new Front Bed 3 tree needs sun, establishment moisture and space for an eventual crown about 2.5–4m high and wide.",
    "frontBed3-rose-pink": "This rose carries pink flowers on a climbing framework between the Bedroom 1 window and the ensuite corner. Compassion is recorded as a photographic working assumption, not a confirmed cultivar. Retain useful long canes, document scent and repeat flowering, and avoid promising the exact height or flower form of a named rose before stronger evidence appears.",
    "frontBed4-photinia-existing": "The established Photinia supplies a multi-stem evergreen canopy on Front Bed 4's return-wall side. Red Robin is the recorded assumption, consistent with red young growth but unproven without stronger identification evidence. Selective pruning can balance the colourful new foliage with the need for light beneath the canopy, rather than repeatedly shearing away its natural framework.",
    "frontBed4-astrantia-trio": "Buckland, Claret and Star of Love form a three-cultivar Astrantia group in the wall-side pocket of Front Bed 5, following their August move from Front Bed 4. Papery bracts surround pin-cushion flowerheads in contrasting pink and claret shades above lobed leaves. Keep the three crowns labelled and their soil moist; they do not suit the dry treatment used for the former nearby Festuca setting.",
    "frontBed5-bell-heather-providence": "Two labelled Providence bell heathers carry larger nodding bells than their Calluna neighbours, adding a rose-red summer display above small evergreen leaves. Daboecia cantabrica is associated with western Ireland and Atlantic Europe; it should not be described as native throughout western Britain. Keep both shallow root balls in acidic, humus-rich, freely drained soil and retain the label without inventing a breeder code.",
    "frontBed5-hypericum-cultivar-to-confirm": "The retained label names this compact Front Bed 5 Hypericum Radiance. The genus gives it yellow flowers with conspicuous stamens, but commercial Radiance descriptions and breeder names are not consistent enough to attach a more precise identity from the name alone. Record its new foliage and any fruit, keep the label-confirmed garden name and avoid promising an unverified berry colour or mature size.",
    "frontStone-hosta": "The stone trough contains a broad-leaved Hosta recorded as the assumed cultivar June, with pale centres and blue-green margins supporting that working match. It provides foliage from spring into autumn and may carry lavender summer flowers before dying back in winter. Container moisture and drainage are more useful immediate care priorities than an unverified cultivar-size prediction.",
    "frontBoxHedge-wall-cotoneaster-species-to-confirm": "The arching shrub at the house return wall is recorded as assumed Cotoneaster Coral Beauty. Small leaves, flowers and berries support Cotoneaster, while winter leaf retention and closer flower and fruit views are still needed to establish the exact identity. Preserve the wall screen, keep it clear of the path and contain unwanted rooted stems or seedlings.",
    "frontApple-apple-tree": "The drive-side apple adds spring blossom, developing fruit and a permanent framework beside the damson. Bramley's Seedling on MM106 is an existing working assumption, not verified cultivar or rootstock data. Document ripe fruit, flavour and harvest timing before relying on Bramley-specific pollination or storage advice; keep its winter pruning separate from the damson's summer work.",
    "frontArbutus-arbutus-unedo": "Arbutus unedo is an evergreen strawberry tree with leathery leaves, reddish peeling bark and small pale urn-shaped autumn flowers. Rounded fruit from the previous year's flowers can ripen on the same canopy. Planted beside the narrow front-garden wall in September, it needs sun, drainage and long-term space: a mature tree can reach 4–8m in both height and spread.",
    "stairpots-p1-skimmia-double-diamond": "Double Diamond provides the evergreen centre of White Pot 1 among Yellow Ripple ivy and Fire Red pansies. Its retained garden name is useful, but the profile should not borrow another Skimmia's flower sex, berry colour or exact mature size. Give the roots shade, even moisture and drainage, and record the spring flowers as this young pot planting establishes.",
    "stairpots-p2-gaultheria-unidentified": "The Gaultheria is the low evergreen focus in Blue Pot 2, surrounded by trailing ivy and Fire Red pansies. The genus is recorded but its species and cultivar remain unknown; year-round foliage must not be mistaken for year-round flowering. Keep the root pocket acidic and evenly moist, and retain a label or diagnostic photographs before assigning a precise size or hardiness.",
  };
  Object.entries(descriptions).forEach(([id, description]) => { profileFor(id).description = description; });

  // Correct misleading generic facts; retain honest unknowns where a label or
  // measurement is still needed. Size values below are potential, not measured.
  const correctedFacts = {
    "frontBed3-cercis-eternal-flame": [
      ["Size", "2.5–4m high and wide", "Potential mature crown over many years, not the current planting size."],
      ["Position", "Full sun", "Good light supports the red, orange and yellow foliage sequence."],
      ["Hardiness", "H5", "Young roots still need establishment care; foliage falls naturally in autumn."],
      ["Main feature", "Changing heart-shaped foliage", "Pink flowers may appear on mature stems in mid-spring."],
    ],
    "frontArbutus-arbutus-unedo": [
      ["Size", "4–8m high and wide", "Potential mature dimensions; allow clearance from the narrow wall."],
      ["Position", "Full sun; sheltered", "Protect the young evergreen from cold drying winds."],
      ["Soil", "Well-drained", "Arbutus unedo tolerates acid, neutral or alkaline soil; Ericaceae does not always mean acid-only."],
      ["Hardiness", "H5", "Young plants are more vulnerable than an established tree."],
      ["Main feature", "Autumn bells and ripening fruit", "Fruit can take about a year to ripen, sharing the canopy with the next flowers."],
    ],
    "wallpot1-phormium-flamingo": [
      ["Size", "0.5–1m high and wide", "Arching foliage will eventually need more space than the small wall pot."],
      ["Position", "Sun or partial shade", "Shelter the container from wind that catches its tall leaves."],
      ["Hardiness", "H4", "Border hardiness does not guarantee an exposed pot's roots survive freezing."],
    ],
    "bigpot1-petunia": [["Identity", "Midnight Sky · garden record", "Do not substitute NightSky or Kleph15313 without a matching retained label."]],
    "stone-agapanthus": [["Size", "Not yet measured", "Record the flowering-stem height of the photographed position 9 plant; genus-wide limits are not a specimen measurement."]],
    "frontBed4-azalea-lotte": [["Hardiness", "Cultivar rating unresolved", "Evergreen is a foliage habit, not a hardiness rating. Protect the newly planted root ball during severe cold."]],
    "frontBed5-hypericum-cultivar-to-confirm": [["Hardiness", "Exact selection unresolved", "The Radiance garden name is label-confirmed; conflicting commercial identities prevent a precise cultivar rating."]],
    "baskets-fern-unidentified": [["Size", "Species not yet identified", "Measure the fronds and record their form; basket size is not a mature plant dimension."], ["Hardiness", "Unresolved; protect from frost", "An unidentified fern must not inherit the hardy Dryopteris rating."]],
    "baskets-lysimachia-unidentified": [["Size", "Species-dependent", "Record the trailing spread rather than imposing a generic 60cm estimate."], ["Hardiness", "Species not yet identified", "Keep valued stock protected until the Lysimachia identity is resolved."]],
    "baskets-chrysanthemum-unidentified": [["Size", "Selection not yet identified", "Measure this autumn basket plant; florist and garden forms differ."], ["Hardiness", "Unresolved; protect if keeping", "Autumn sale as bedding does not establish reliable outdoor hardiness."]],
    "baskets-cyclamen-unidentified": [["Size", "Species not yet identified", "Record leaf and flower size before assigning species dimensions."], ["Hardiness", "Unresolved; protect from frost", "Tender florist's Cyclamen and hardy garden species need different winter care."]],
    "stairpots-p2-gaultheria-unidentified": [["Size", "Species-dependent", "Measure this young shrub; a genus name alone cannot supply a mature size."], ["Position", "Partial shade", "Keep the root pocket cool and the ivy off the central crown."], ["Hardiness", "Species not yet identified", "Protect the shared root ball; do not claim a specific rating from container use."]],
    "stairpots-p1-skimmia-double-diamond": [["Size", "Cultivar size not verified", "Keep track of the centrepiece's spread and plan more root room as it grows."], ["Position", "Partial shade", "Avoid reflected midday heat on the evergreen leaves."], ["Hardiness", "Hardy genus; pot roots exposed", "Exact cultivar rating is not established here; protect the container in prolonged frost."]],
    "bed3-rose-inherited": [["Main feature", "Yellow summer flowers", "August photographs record this rose separately from the inherited Bed 2 specimen."]],
    "stone-six-rowed-stonecrop": [["Hardiness", "Identity-dependent", "The Sedum sexangulare match is assumed; keep drainage sharp and confirm the flowering plant before assigning a cultivar rating."]],
  };
  Object.entries(correctedFacts).forEach(([id, rows]) => rows.forEach((row) => fact(profileFor(id), ...row)));
  const factDetails = {
    "bed4-abelia-radiance": ["Compact shrub dimensions; allow space around the apple planting.", "Good light supports cream-edged foliage; shelter reduces winter leaf loss."],
    "lobeliapot-skimmia-antarctica": ["Cultivar dimensions need verification; pot size is not a permanent height limit.", "Sheltered shade reduces yellowing caused by hot dry exposure."],
    "lobeliapot-viola-rocky-purple-picotee": ["Typical bedding-Viola height; three separate plants are recorded in this pot.", "Keep the low flowers open to light beneath the two Skimmias."],
    "baskets-calluna-trio-mix": ["Typical low heather height; one plant is recorded in each matching basket.", "Keep the heather clear of taller companions; deep shade weakens its compact growth."],
    "baskets-viola-rocky-purple-picotee": ["Typical bedding-Viola height; one crown in Basket 1 and one in Basket 2.", "Give the low purple flowers light without baking the exposed root plugs."],
    "baskets-pansy-fire": ["Typical bedding-pansy height; allow space for each crown to branch.", "Bright cool conditions support flowers; shade from hot midday sun if needed."],
    "baskets-pansy-rose-surprise": ["A low branching bedding plant; height is a guide rather than a measured cultivar limit.", "Keep ivy trails away from the rosy flowers so light reaches their stems."],
    "baskets-fern-unidentified": [null, "Filtered light protects soft fronds while its exact shade preference remains unresolved."],
    "baskets-lysimachia-unidentified": [null, "Keep its trails in open light without letting the small root plug dry hard."],
    "baskets-chrysanthemum-unidentified": [null, "Good light and airflow support the autumn buds and reduce mould."],
    "baskets-cyclamen-unidentified": [null, "Cool bright shelter preserves flowers; avoid heat and freezing exposure."],
  };
  Object.entries(factDetails).forEach(([id, details]) => {
    ["Size", "Position"].forEach((label, index) => {
      const row = profileFor(id).facts.find((item) => item.label === label);
      if (details[index] && row) row.detail = details[index];
    });
  });

  const soilAndDisplayDetails = {
    "bed4-abelia-radiance": ["Mulch around the shrub without burying the woody stem bases.", "The cream-edged leaves carry the display between the summer and autumn flowers."],
    "lobeliapot-skimmia-antarctica": [null, "Record its spring flowers and any fruit separately; the label alone does not establish pollination in this pot."],
    "lobeliapot-viola-rocky-purple-picotee": ["Check the three small Viola plugs as well as the larger Skimmia root balls.", "Pinch off spent flowers to keep the pale-edged purple display visible beneath the shrubs."],
    "baskets-calluna-trio-mix": ["Keep the acid-loving heather root pockets moist without saturating the basket base.", "The mixed heather selection supplies foliage and late-season colour; trim only into leafy growth."],
    "baskets-viola-rocky-purple-picotee": ["Basket wind can dry these small Viola plugs before the centre of the compost dries.", "Keep trailing neighbours clear of the low purple-and-pale flowers."],
    "baskets-hedera-yellow-ripple": ["Allow the basket to drain after soaking the ivy's rooted plug.", "The variegated juvenile trails provide foliage; flowers are not expected on these short shoots."],
    "baskets-pansy-fire": ["Soak the pansy root pocket when drying, then let excess water escape from the basket.", "Cool weather supports the warm-toned display; remove spent flower stems."],
    "baskets-pansy-rose-surprise": ["Keep this small flowering crown moist without packing wet compost around its base.", "Deadheading and light around the crown help sustain the rosy flowers."],
    "baskets-fern-unidentified": ["Keep the frond-producing crown above the compost and prevent the small root plug drying hard.", "Fronds are the display: this fern produces spores, not flowers."],
    "baskets-lysimachia-unidentified": ["Check the rooted plug, since a long visible trail does not indicate how much moist compost it has.", "Photograph leaves and any flowers before assigning a species or a fixed bloom season."],
    "baskets-chrysanthemum-unidentified": ["Water the root ball rather than repeatedly wetting the dense flower heads.", "Remove faded heads and protect the remaining autumn buds from prolonged wet weather."],
    "baskets-cyclamen-unidentified": ["Water around the tuber and drain thoroughly; keep the centre free of standing water.", "Its autumn flowers do not establish whether this is a hardy species or a tender florist's selection."],
    "frontBed3-cercis-eternal-flame": ["Water across the establishing root ball and mulch clear of the trunk; avoid a permanently wet planting pocket."],
    "stairpots-p1-hedera-yellow-ripple": ["Water the ivy plug as well as the central Skimmia; keep the drain hole clear."],
    "stairpots-p2-hedera-yellow-ripple": ["Check the ivy's own root pocket without allowing the Gaultheria's acidic compost to dry hard."],
    "stairpots-p1-pansy-fire-red": ["Check the shallow pansy roots independently of the larger central Skimmia root ball."],
    "stairpots-p2-pansy-fire-red": ["Keep the pansy crowns above the compost and let rain or irrigation drain freely."],
    "stairpots-p2-gaultheria-unidentified": ["Retain an acidic root pocket and use rainwater where practical; identify the species before setting a permanent pot plan."],
  };
  Object.entries(soilAndDisplayDetails).forEach(([id, details]) => {
    ["Soil", "Main feature"].forEach((label, index) => {
      const row = profileFor(id).facts.find((item) => item.label === label);
      if (row && details[index]) row.detail = details[index];
    });
  });

  const ivyIds = ["baskets-hedera-yellow-ripple", "stairpots-p1-hedera-yellow-ripple", "stairpots-p2-hedera-yellow-ripple"];
  ivyIds.forEach((id) => {
    const profile = profileFor(id);
    fact(profile, "Size", "Trailing; trim to the container", "Ivy can grow far beyond a pot if allowed to climb and root; no fixed small mature size is implied.");
    fact(profile, "Position", "Sun or partial shade", "Bright shelter supports variegation without baking the shared root ball.");
    fact(profile, "Hardiness", "Hardy evergreen; protect pot roots", "Leaves persist through winter, but a small exposed root ball is more vulnerable than roots in soil.");
    profile.floweringMonths = [];
    profile.display = { ...profile.display, cycleTitle: "Foliage display", cycleEmpty: "evergreen trailing leaves", cycleAria: "Juvenile ivy grown for evergreen foliage", cycleNote: "Mature climbing ivy can flower in autumn; these juvenile container trails have no regular flowering window recorded." };
  });
  ["stairpots-p1-pansy-fire-red", "stairpots-p2-pansy-fire-red"].forEach((id) => {
    const profile = profileFor(id);
    fact(profile, "Size", "Typically 15–25cm high", "A bedding-pansy guide, not a verified Fire Red cultivar measurement.");
    fact(profile, "Position", "Sun or partial shade", "Open light supports flowers; light shade helps during hot weather.");
    fact(profile, "Hardiness", "Cool-season bedding", "Hard frost can pause the display and damage blooms even while crowns survive.");
    profile.floweringMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Sep", "Oct", "Nov", "Dec"];
    profile.display = { ...profile.display, cycleNote: "Typical cool-season display; frost and heat can interrupt flowering. This is not a promise of uninterrupted bloom." };
  });
  ["lobeliapot-skimmia-cleopatra", "lobeliapot-skimmia-antarctica", "frontBed5-japanese-skimmia", "stairpots-p1-skimmia-double-diamond"].forEach((id) => {
    const profile = profileFor(id);
    fact(profile, "Soil", "Humus-rich, moist and drained", "Ericaceous compost is not required. Check moisture and exposure before treating yellow leaves.");
    profile.floweringMonths = ["Mar", "Apr", "May"];
  });
  profileFor("frontBed3-cercis-eternal-flame").floweringMonths = ["Apr", "May"];
  profileFor("frontArbutus-arbutus-unedo").floweringMonths = ["Oct", "Nov", "Dec"];
  profileFor("wallpot1-phormium-flamingo").floweringMonths = ["Jun", "Jul"];
  profileFor("wallpot1-phormium-flamingo").display = { cycleNote: "Occasional flowers on mature plants; pink-striped foliage is the dependable display and a young pot plant may not flower." };
  profileFor("bed4-abelia-radiance").floweringMonths = ["Jul", "Aug", "Sep", "Oct"];
  ["baskets-fern-unidentified", "frontBed5-fern-jurassic-gold"].forEach((id) => {
    const profile = profileFor(id);
    profile.floweringMonths = [];
    profile.display = { ...profile.display, cycleTitle: "Foliage display", cycleEmpty: "fronds, not flowers", cycleAria: "Fern: no flowering period", cycleNote: "Ferns reproduce by spores. Frond emergence and persistence depend on the species and season." };
  });
  ["stairpots-p2-gaultheria-unidentified", "baskets-lysimachia-unidentified", "baskets-cyclamen-unidentified"].forEach((id) => {
    const profile = profileFor(id);
    profile.floweringMonths = [];
    profile.display = { ...profile.display, cycleEmpty: "flowering window to confirm", cycleNote: "The species is unresolved. Record this plant's flowers before assigning a full annual flowering window." };
  });

  const attachSource = (id, title, url, note) => {
    const profile = profileFor(id);
    if (!profile.sources.some((source) => source.url === url)) profile.sources.unshift({ title, url, note });
  };
  const sourceChecks = [
    ["bed5-wisteria", "RHS · Wisteria pruning", "https://www.rhs.org.uk/plants/wisteria/pruning-guide", "Summer and winter pruning; checked September 2026"],
    ["stone-clematis", "RHS · Clematis pruning", "https://www.rhs.org.uk/plants/clematis/pruning-guide", "Pruning groups and old-wood versus new-wood flowering"],
    ["frontBed5-clematis", "RHS · Clematis pruning", "https://www.rhs.org.uk/plants/clematis/pruning-guide", "Group 3 pruning contrasted with montana"],
    ["frontBed1-hydrangea", "RHS · Hydrangea pruning", "https://www.rhs.org.uk/plants/hydrangea/pruning-guide", "Mophead pruning; checked September 2026"],
    ["stone-hydrangea-snowflake", "RHS · Hydrangea pruning", "https://www.rhs.org.uk/plants/hydrangea/pruning-guide", "Oakleaf Hydrangea flowers on existing wood"],
    ["frontBed5-hydrangea-bloody-marie", "RHS · Hydrangea pruning", "https://www.rhs.org.uk/plants/hydrangea/pruning-guide", "Panicle Hydrangea pruning in spring"],
    ["frontArbutus-arbutus-unedo", "RHS · Arbutus unedo", "https://www.rhs.org.uk/plants/1473/arbutus-unedo/details", "Mature height and spread, sun, H5, drainage and autumn flowers; checked September 2026"],
    ["frontBed3-cercis-eternal-flame", "RHS · Cercis Eternal Flame", "https://www.rhs.org.uk/plants/506839/cercis-canadensis-eternal-flame-nc2016-2/details", "Foliage, spring flowering, mature size and H5; checked September 2026"],
    ["wallpot1-phormium-flamingo", "RHS · Phormium Flamingo", "https://www.rhs.org.uk/plants/135026/phormium-tenax-flamingo/details", "Size, foliage, light, H4 and division; checked September 2026"],
    ["baskets-cyclamen-unidentified", "RHS · Cyclamen persicum", "https://www.rhs.org.uk/plants/101163/cyclamen-persicum-persian-cyclamen/details", "Tender Cyclamen comparison only; does not identify the Oak Lodge plant"],
    ["baskets-fern-unidentified", "RHS · Growing ferns", "https://www.rhs.org.uk/plants/types/ferns/growing-guide", "Non-flowering habit and differences in winter hardiness"],
    ["frontBed5-euphorbia-ascot-petite", "RHS · Garden Euphorbia care", "https://www.rhs.org.uk/plants/euphorbia/growing-guide", "Sap precautions and care of flowered stems"],
    ["bigpot1-petunia", "Michigan State University Extension · Night Sky and Midnight Sky", "https://msu-prod.dotcmscloud.com/news/consult-breeder-culture-sheets-for-success-with-new-cultivars", "Separate named selections; speckling does not make their identities interchangeable"],
    ["frontBed5-hypericum-cultivar-to-confirm", "Plantipp · Hypericum Radiance", "https://plantipp.eu/uk/varieties/hypericum-radiance-methyrapbr", "Commercial Radiance example; breeder code is not assigned to the Oak Lodge plant without matching label evidence"],
    ["frontBed5-bell-heather-providence", "Kew · Daboecia cantabrica", "https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A327713-1/general-information", "Native range; separates Ireland from a blanket western-Britain claim"],
  ];
  sourceChecks.forEach((row) => attachSource(...row));
  ["lobeliapot-skimmia-cleopatra", "lobeliapot-skimmia-antarctica", "frontBed5-japanese-skimmia", "stairpots-p1-skimmia-double-diamond"].forEach((id) => attachSource(id, "RHS · Skimmia growing guide", "https://www.rhs.org.uk/plants/skimmia/growing-guide", "Shade, soil, pollination and minimal pruning; checked September 2026"));

  // Resolve contradictions that persisted outside the main description.
  const petunia = profileFor("bigpot1-petunia");
  petunia.about = "Speckled Petunias include several distinct named selections. The Oak Lodge name is Midnight Sky; matching a purple-and-white flower pattern alone cannot establish that it is NightSky or supply the latter's breeder code.";
  petunia.provenanceNote = "Midnight Sky is retained from the garden record. The earlier automatic equivalence with NightSky (Kleph15313) was unsupported and has been removed; a matching label is still needed.";
  petunia.badges = ["Garden name retained", "Tender Petunia", "Breeder identity unresolved"];
  petunia.botanical = petunia.botanical.map((row) => row.label === "Accepted trade name" ? { label: "Identity status", value: "Midnight Sky recorded; breeder code unresolved" } : row);
  petunia.sources = petunia.sources.filter((source) => !(source.url || "").includes("353095"));
  profileFor("lobeliapot-skimmia-antarctica").about = "Antarctica is the retained cultivar name for the second Skimmia in this pot. Record its flowers and any fruit before relying on it as a pollination partner. As with other Skimmias, sheltered shade, even root moisture and drainage matter; ericaceous compost is not required.";
  const cleopatra = profileFor("lobeliapot-skimmia-cleopatra");
  cleopatra.about = "Cleopatra is the selling name associated with Skimmia japonica Snep24. Its female flowers can produce red fruit with compatible pollen. Container moisture, shade and drainage are the main cultivation needs; acid-only compost is not a requirement.";
  const skimmiaAutumn = profileFor("frontBed5-japanese-skimmia").seasons.find((item) => item.season === "Autumn");
  skimmiaAutumn.action = "Record any berries on the boundary Skimmia and clear heavy fallen leaves; investigate dryness or harsh exposure if its foliage yellows.";
  profileFor("bed1-nemesia").seasons.find((item) => item.season === "Winter").action = "Do not rely on Aroma Heart of Gold surviving outdoors in the Bed 5 big pot; keep any rooted cuttings bright, frost-free and lightly moist.";
  const basketHeather = profileFor("baskets-calluna-trio-mix");
  basketHeather.seasons.find((item) => item.season === "Summer").action = "Check the two Calluna root plugs, one in each matching basket, and use rainwater to rewet them thoroughly before they dry hard.";
  basketHeather.seasons.find((item) => item.season === "Autumn").action = "Keep both basket heathers open to light and remove dead sprigs while the mixed selection supplies late-season colour.";
  profileFor("baskets-cyclamen-unidentified").problems = [
    { name: "Tuber or stalk rot", sign: "Soft collapsing stalks around a wet centre", response: "Remove decayed stalks, restore drainage and keep water out of the tuber crown; do not divide the tuber." },
    { name: "Frost damage", sign: "Flowers or leaves collapse after freezing weather", response: "Move the unidentified Cyclamen to cool frost-free shelter and assess remaining healthy growth." },
  ];
  ["baskets-fern-unidentified", "baskets-lysimachia-unidentified", "baskets-chrysanthemum-unidentified", "wallpot1-phormium-flamingo"].forEach((id) => {
    // The old shared "congestion" response prescribed division to everything.
    profileFor(id).problems = profileFor(id).problems.filter((item) => item.name !== "Congestion");
  });
  const replaceCongestion = (ids, problem) => ids.split(" ").forEach((id) => {
    const profile = profileFor(id);
    profile.problems = profile.problems.filter((item) => item.name !== "Congestion");
    profile.problems.push({ ...problem });
  });
  replaceCongestion("bed2-rose-inherited bed3-rose-inherited", { name: "Crowded rose framework", sign: "Crossing woody stems rub and the centre becomes dense", response: "Identify the rose's growth habit before pruning; remove dead or rubbing stems selectively. Do not divide the woody crown." });
  replaceCongestion("bed3-evergreen-candytuft", { name: "Bare woody base", sign: "Flowers and leaves retreat to the ends of old stems", response: "Trim lightly after flowering while retaining leafy shoots. Take cuttings to renew an ageing plant rather than cutting into bare old wood." });
  replaceCongestion("lobeliapot-viola-rocky-purple-picotee baskets-viola-rocky-purple-picotee baskets-pansy-fire baskets-pansy-rose-surprise frontBed5-viola-rocky-purple-picotee", { name: "Flowering slows", sign: "Seed pods or lanky shoots replace new buds", response: "Remove spent flower stems, check moisture and give light shade in heat. Replace exhausted seasonal plants; routine clump division is not the remedy." });
  replaceCongestion("frontBed5-euphorbia-ascot-petite", { name: "Spent flowering stems", sign: "Old flowering shoots fade beside fresh leafy growth", response: "Remove spent flowering stems without cutting away replacement shoots. Wear gloves and protect eyes from irritating milky sap." });
  replaceCongestion("frontBed5-gaura-gaudi-red", { name: "Winter crown decline", sign: "The crown softens or fails to restart after a wet winter", response: "Improve drainage and assess live growth in spring before cutting back. Keep cuttings as insurance where winter losses recur." });
  replaceCongestion("frontBed5-salvia-salgoon-lake-blueberry", { name: "Cold-damaged framework", sign: "Older stems brown after winter but low buds may remain alive", response: "Wait for active spring growth before cutting to sound buds. Keep frost-free cuttings as insurance rather than dividing a weakened woody base." });
  replaceCongestion("littlepot1-hellebore-ice-n-roses-bennotta", { name: "Root-bound container", sign: "Roots fill the pot and watering becomes difficult", response: "Move the intact root ball into a larger draining pot when needed. Hellebores resent disturbance; do not prescribe routine division to restore flowers." });

  // Keep public summaries and downloads aligned with the authored profile.
  // This copies reviewed content OUT to legacy fields, never infers v2 prose
  // from the old generic characteristics in data.js.
  Object.values(OAK.PLANT_BY_ID).forEach(({ plant }) => {
    const profile = plant.profile;
    const lookup = (labels) => profile.facts.find((item) => labels.includes(item.label));
    const value = (labels, fallback) => { const row = lookup(labels); return row ? row.value : fallback; };
    const prose = (labels, fallback) => { const row = lookup(labels); return row ? `${row.value}. ${row.detail}` : fallback; };
    plant.description = profile.description;
    plant.light = prose(["Position", "Light"], plant.light);
    plant.water = prose(["Water"], prose(["Soil", "Pot & compost"], plant.water));
    plant.care = profile.careGuide.map((item) => `${item.title}: ${item.summary} ${item.detail}`).join("\n\n");
    plant.seasonal = profile.seasons.map((item) => `${item.season}: ${item.action}`).join("\n");
    plant.characteristics.sunlight = value(["Position", "Light"], plant.characteristics.sunlight);
    plant.characteristics.hardiness = value(["Hardiness", "Temperature"], plant.characteristics.hardiness);
    plant.characteristics.size = value(["Size", "Ultimate size", "Indoor size"], plant.characteristics.size);
    plant.characteristics.water = value(["Water"], plant.characteristics.water);
    plant.characteristics.flowering = profile.floweringMonths.length ? profile.floweringMonths.join(", ") : ((profile.display || {}).cycleEmpty || "No regular flowering period recorded");
    profile.contentReview = { date: "2026-09-18", care: reviewed.has(plant.id) ? "Rewritten with botanical and specimen-specific actions" : "Retained existing plant-specific authored care" };
  });
  OAK.PLANT_CARE_REVIEW = { date: "2026-09-18", rewrittenIds: Array.from(reviewed), priorityIds: Object.keys(priorities), descriptionIds: Object.keys(descriptions) };
})();
