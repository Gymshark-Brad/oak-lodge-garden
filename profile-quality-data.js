(function () {
  const OAK = window.OAK;
  if (!OAK || !OAK.PLANTS) return;

  const source = (label, url) => ({ label, url });
  const seasons = (spring, summer, autumn, winter) => [
    { season: "Spring", action: spring },
    { season: "Summer", action: summer },
    { season: "Autumn", action: autumn },
    { season: "Winter", action: winter },
  ];

  const RHS = {
    abelia: source("RHS · Abelia", "https://www.rhs.org.uk/plants/abelia"),
    skimmiaAntarctica: source("RHS · Skimmia japonica 'Antarctica'", "https://www.rhs.org.uk/plants/364299/skimmia-japonica-antarctica/details"),
    skimmia: source("RHS · Skimmia growing guide", "https://www.rhs.org.uk/plants/skimmia/growing-guide"),
    pansy: source("RHS · Grow pansies", "https://www.rhs.org.uk/education-learning/children-young-people/family-activities/grow-it/pansy"),
    hellebore: source("RHS · Hellebore growing guide", "https://www.rhs.org.uk/plants/hellebore/growing-guide"),
    calluna: source("RHS · Calluna growing guide", "https://www.rhs.org.uk/plants/calluna/growing-guide"),
    hedera: source("RHS · Hedera helix 'Golden Starlight' ('Yellow Ripple')", "https://www.rhs.org.uk/plants/357534/hedera-helix-golden-starlight-v/details"),
    fern: source("RHS · Fern growing guide", "https://www.rhs.org.uk/plants/types/ferns/growing-guide"),
    lysimachia: source("RHS · Lysimachia nummularia", "https://www.rhs.org.uk/plants/10632/lysimachia-nummularia/details"),
    chrysanthemum: source("RHS · Chrysanthemum growing guide", "https://www.rhs.org.uk/plants/chrysanthemum/growing-guide"),
    cyclamen: source("RHS · Hardy cyclamen growing guide", "https://www.rhs.org.uk/plants/cyclamen/growing-guide"),
    phormium: source("RHS · Phormium", "https://www.rhs.org.uk/plants/phormium"),
    gaultheria: source("RHS · Gaultheria", "https://www.rhs.org.uk/plants/106471/gaultheria/details"),
  };

  const REVIEWS = {
    "bed4-abelia-radiance": {
      source: RHS.abelia,
      waterSigns: {
        under: "New white-edged leaves curl inward and their tips turn tan; if the Bed 4 soil is dry at finger depth, soak around the shrub's full root spread.",
        over: "A sour-smelling root zone with yellow leaves and blackening shoot bases points to trapped moisture around this young Abelia; open the surface and pause watering.",
      },
      seasons: seasons(
        "After the last hard frost, remove only dead tips and any completely green reverted shoots; add a thin mulch while keeping it clear of the stems.",
        "Let the white-and-green framework fill out, watering deeply only in prolonged heat; lightly shorten wayward shoots after the first flower flush.",
        "Leave late flowers for insects and stop feeding so the cream-margined growth hardens before cold weather.",
        "Keep fallen leaves from banking against the crown and wait until spring before judging frost-darkened shoot tips or reshaping the shrub."
      ),
    },
    "lobeliapot-skimmia-antarctica": {
      source: RHS.skimmiaAntarctica,
      about: "Skimmia japonica 'Antarctica' is a compact evergreen female cultivar grown for fragrant spring flowers and berries when a compatible male Skimmia is nearby. In this pot, even moisture, shelter and dependable drainage matter more than using ericaceous compost: Skimmias are not acid-loving plants.",
      facts: { Soil: { value: "Moist, free-draining", detail: "Not ericaceous; avoid both saturation and a completely dry root ball." } },
      waterSigns: {
        under: "Leaves lose their gloss, curl down and develop dry brown margins while the pot becomes noticeably light; re-wet the root ball slowly rather than flooding it once.",
        over: "Yellowing through the centre combined with a cold, heavy pot or soft stem bases signals poor drainage; empty any saucer and let air back into the compost.",
      },
      seasons: seasons(
        "Enjoy the fragrant flower clusters, remove frost-burned leaves individually and top-dress with fresh peat-free compost without covering the stem bases.",
        "Keep this evergreen pot evenly moist in hot weather and sheltered from harsh midday sun; do not shear off the developing berry clusters.",
        "Check whether berries are setting, clear fallen leaves from the pot and stop feeding so the new wood ripens.",
        "Move the pot out of drying wind, raise it on feet and water only on frost-free days when the compost below the surface is genuinely dry."
      ),
    },
    "lobeliapot-viola-rocky-purple-picotee": {
      source: RHS.pansy,
      waterSigns: {
        under: "The three Viola plants flag first at the flower stalks, then petals crumple and leaves lose their spring; water when the upper compost has dried but before the whole pot pulls away.",
        over: "Grey mould on crowded blooms or yellow leaves around a soft crown means the shared pot is staying wet; deadhead, improve airflow and allow the surface to dry.",
      },
      seasons: seasons(
        "Deadhead back to a leaf joint, trim winter-scorched edges and give a light feed once fresh buds begin to move.",
        "Keep spent flowers and seed capsules removed; if heat stops flowering, shade the pot in the afternoon and expect a cooler-weather recovery.",
        "This is the main display period: inspect each of the three crowns, remove rain-damaged blooms and water the compost rather than the flowers.",
        "Pick off collapsed petals before botrytis spreads and protect the small root ball from alternating waterlogging and hard frost."
      ),
    },
    "littlepot1-hellebore-ice-n-roses-bennotta": {
      source: RHS.hellebore,
      seasons: seasons(
        "Cut away old or spotted leaves at the base as flower stems rise, then top-dress the pot and photograph the bloom colour for cultivar confirmation.",
        "Allow clean foliage to feed the crown, water through prolonged drought and move to dappled shade if the small pot heats sharply.",
        "Remove badly marked leaves, refresh the top layer of compost and keep the drainage hole clear ahead of the winter flowering cycle.",
        "Turn the outward-facing flowers into view, clear fallen petals and leaves promptly, and water sparingly on frost-free mornings when the compost is dry."
      ),
    },
    "wallpot1-phormium-flamingo": {
      source: RHS.phormium,
      seasons: seasons(
        "Pull out only fully dead blades from the base, inspect the fan for winter damage and replace the top few centimetres of exhausted potting mix.",
        "Water the wall pot deeply during hot spells and rotate it if one-sided light is distorting the pink-striped fan; avoid high-nitrogen feed.",
        "Stop feeding, remove leaves that have split beyond recovery and secure the pot before autumn gales catch the strap-like foliage.",
        "Keep the crown on the dry side, shield the container during prolonged hard frost and do not cut superficially scorched leaves until spring."
      ),
    },
    "baskets-calluna-trio-mix": {
      source: RHS.calluna,
      waterSigns: {
        under: "Shoot tips become brittle and the fine scale leaves lose colour; soak the basket thoroughly with rainwater if the root plugs are dry inside, not just on the surface.",
        over: "Brown patches spreading from the centre while the basket stays heavy suggest airless roots rather than drought; clear blocked drainage and reduce watering frequency.",
      },
      seasons: seasons(
        "After flowering, lightly clip each Calluna mound below its spent flower spikes but never into bare old wood; top-dress around the plugs.",
        "Use rainwater during dry weather and keep the three root balls evenly moist while avoiding frequent small splashes.",
        "Let the trio provide its main colour, teasing out dead sprigs and checking that vigorous basket companions are not shading the heathers.",
        "Keep drainage holes open and shelter the hanging root balls from drying easterly wind; do not feed while growth is resting."
      ),
    },
    "baskets-viola-rocky-purple-picotee": {
      source: RHS.pansy,
      waterSigns: {
        under: "Picotee blooms hang on bent stalks and the leaf rosettes flatten against the basket; water until the entire liner is moist, then let it drain freely.",
        over: "Translucent stems, yellow basal leaves and furry grey petals reveal persistently wet, crowded conditions; remove affected tissue and increase the gap between waterings.",
      },
      seasons: seasons(
        "Pinch out seed pods and leggy stems to a leafy joint, then feed lightly to support a fresh cool-season flush.",
        "Expect flowering to ease in heat; keep the two plants shaded at the hottest part of the day and trim rather than forcing soft growth.",
        "Deadhead both plants several times a week and check that their crowns have not been buried by settling basket compost.",
        "Remove storm-damaged flowers promptly, keep the liner drained and water on mild mornings rather than immediately before a freeze."
      ),
    },
    "baskets-hedera-yellow-ripple": {
      source: RHS.hedera,
      waterSigns: {
        under: "The cream-edged ivy leaves fold, feel papery and lose their shine; check the trailing root plugs separately because the basket surface can look damp while they are dry.",
        over: "Blackened petiole bases and dull yellow leaves that detach easily indicate wet, oxygen-starved compost; cut affected trails back and restore drainage.",
      },
      seasons: seasons(
        "Shorten winter-damaged trails to a healthy variegated leaf and remove any all-green shoot before it can dominate the two plants.",
        "Guide the two ivy trails around the basket edge, checking for scale beneath leaves and preventing them from smothering flowering companions.",
        "Trim only the longest strands to preserve the yellow-rippled cascade and clear leaf litter caught where stems enter the liner.",
        "The ivy remains structural while flowers pause; protect the exposed basket roots from hard frost and drying wind rather than bringing on soft new growth."
      ),
    },
    "baskets-pansy-fire": {
      source: RHS.pansy,
      waterSigns: {
        under: "The dark Fire petals crease and the flower stems flop before the leaves wilt; rehydrate the whole hanging liner slowly, then allow excess water to escape.",
        over: "A wet crown with yellow lower leaves and rapidly collapsing flowers points to rot or botrytis; remove affected material and stop evening watering.",
      },
      seasons: seasons(
        "Cut each pair of plants back to compact leafy growth if they have stretched, then resume deadheading as new buds open.",
        "Give afternoon shade during heat, remove every seed capsule and replace plants only if the crowns fail rather than merely pausing in flower.",
        "Keep the fiery blooms coming by deadheading to the next leaf and applying a dilute high-potash feed after watering.",
        "Pick off rain-spoiled petals, keep air moving through the basket and avoid leaving wet flowers to freeze overnight."
      ),
    },
    "baskets-pansy-rose-surprise": {
      source: RHS.pansy,
      waterSigns: {
        under: "Rose-toned petals become thin and curled and the two rosettes lose their upright centre; soak the liner before the root plugs shrink away from surrounding compost.",
        over: "Mushy leaf stalks or grey-furred flowers while the basket remains heavy show excessive moisture; strip damaged blooms and delay the next watering.",
      },
      seasons: seasons(
        "Remove stretched stems from the pair one at a time so some flowers remain, and feed only after compact new shoots appear.",
        "During hot pauses, retain healthy leaves, shelter from afternoon scorch and keep seed heads removed so energy returns to buds.",
        "Photograph the changing rose markings, deadhead back to leaf joints and turn the basket weekly for an even display.",
        "Clear collapsed petals from the plant centres after rain and keep the hanging liner moist but never saturated through cold spells."
      ),
    },
    "baskets-fern-unidentified": {
      source: RHS.fern,
      waterSigns: {
        under: "Young frond tips crisp and older fronds curl inward while the basket feels light; wet the fern's own root pocket thoroughly without assuming neighbouring plants received enough.",
        over: "Fronds yellow from the base and the crown smells sour in continuously wet compost; reduce watering and keep fallen material out of the crown.",
      },
      seasons: seasons(
        "Remove only brown fronds at their base and photograph new croziers, scale texture and mature fronds to narrow the identification.",
        "Shield the fronds from hot midday sun, maintain even moisture around the compact root ball and mist only when airflow can dry the foliage.",
        "Keep chrysanthemum and Lysimachia stems from pressing into the fern crown and record whether the fronds remain evergreen as temperatures fall.",
        "Because the species is unconfirmed, protect Basket 3 from hard frost; keep the crown just moist and retain diagnostic fronds until identification is secure."
      ),
    },
    "baskets-lysimachia-unidentified": {
      source: RHS.lysimachia,
      waterSigns: {
        under: "Trailing stems lose their spring and the smallest leaves dry from the tip backwards; water the Lysimachia plug before brittle sections develop.",
        over: "Blackened nodes and yellow leaves where the trails meet wet compost indicate stagnant conditions; remove damaged stems and expose the crown to air.",
      },
      seasons: seasons(
        "Trim dead ends to live nodes and photograph leaf arrangement, flower colour and trailing habit before assigning a species or cultivar.",
        "Pinch selected trails to branch, stop them rooting into neighbouring plugs and keep moisture steady during rapid extension.",
        "Let healthy stems spill over Basket 3 but cut back any growth crowding the Cyclamen or holding wet leaves against its crown.",
        "Retain a short labelled section for identification, protect the uncertain plant from severe frost and avoid keeping dormant stems wet."
      ),
    },
    "baskets-chrysanthemum-unidentified": {
      source: RHS.chrysanthemum,
      waterSigns: {
        under: "Soft shoot tips droop and lower leaves become thin while buds fail to enlarge; water at compost level before the flower stems bend permanently.",
        over: "Lower foliage yellows and stem bases darken in a persistently heavy basket; remove affected leaves and let the upper compost breathe.",
      },
      seasons: seasons(
        "If the plant survives, cut old stems to sound basal growth, refresh the surface and record new leaf shape for identification.",
        "Pinch only while stems are vegetative, support developing shoots and inspect young tips for aphids before flower buds tighten.",
        "This is the main flowering period: deadhead to a side shoot, keep petals dry when watering and photograph the blooms for cultivar comparison.",
        "After flowering, shelter the uncertain Chrysanthemum from prolonged frost and keep the crown barely moist until its hardiness is known."
      ),
    },
    "baskets-cyclamen-unidentified": {
      source: RHS.cyclamen,
      waterSigns: {
        under: "Flower stems bend and healthy leaves lose tension while the tuber zone feels dry; water around the pot edge rather than into the crown.",
        over: "Leaves and flower stalks collapse soft at their bases while compost stays cold and wet; remove them cleanly and let the tuber surface dry.",
      },
      seasons: seasons(
        "Record whether leaves and flowers persist before assuming a hardy cycle; remove spent stems with a clean twist rather than leaving stubs.",
        "If foliage naturally disappears, keep the tuber shaded and almost dry; if it remains active, continue cautious edge watering.",
        "As growth resumes, keep the top of the tuber clear, remove yellow leaves and photograph flower and leaf pattern for species identification.",
        "Shelter Basket 3 during severe frost until the Cyclamen is identified, and keep rain from pooling in the crown or around the tuber."
      ),
    },

    "frontBed3-cercis-eternal-flame": {
      waterSigns: {
        under: "The newly planted tree's heart-shaped leaves hang and scorch first at the margins while the root ball is dry beneath the mulch; soak slowly across the original root ball and surrounding soil.",
        over: "Persistently yellow foliage, stalled shoot extension and a wet planting pocket suggest the Cercis roots lack air; stop watering and check that surrounding soil drains away.",
      },
      seasons: seasons(
        "Watch the bare stems for flower and leaf break, keep mulch clear of the trunk and remove only damaged wood because Cercis dislikes unnecessary pruning.",
        "Water this establishing tree deeply during dry weeks, keep grass and weeds away from the root zone and avoid high-nitrogen feeding.",
        "Record the orange, red and purple colour progression, clear leaves from the trunk flare and stake ties before autumn gales.",
        "Check the stake without tightening it against the bark and leave sound branches untouched; prune only dead wood in a suitable dry spell."
      ),
    },
    "frontBed5-viola-rocky-purple-picotee": {
      source: RHS.pansy,
    },
    "frontArbutus-arbutus-unedo": {
      waterSigns: {
        under: "Young leathery leaves lose gloss and curl at the edges while the recently planted root ball dries; soak deeply, then recheck the inner root ball rather than the surrounding surface.",
        over: "General yellowing with soft shoot tips in a wet planting pocket indicates poor aeration; stop supplementary water and make sure runoff is not collecting at the trunk.",
      },
      seasons: seasons(
        "Look for fresh evergreen shoots, renew a modest mulch clear of the trunk and avoid pruning except to remove frost-damaged tips.",
        "Water deeply through dry spells during establishment and leave the glossy canopy uncut so the tree develops its natural framework.",
        "Expect flowers and ripening strawberry-like fruit together; clear fallen fruit from paving and keep checking the young tree's ties.",
        "Protect the root area during severe cold, shelter the canopy from cutting wind where practical and postpone shaping until active growth returns."
      ),
    },
    "stairpots-p1-hedera-yellow-ripple": {
      source: RHS.hedera,
      waterSigns: {
        under: "Pot 1's ivy leaves fold along the midrib and the pale margins become crisp; water the trailing side of the pot until the full root plug is wet.",
        over: "Loose yellow leaves and blackened stem joints beside the Skimmia indicate the lower compost is staying wet; clear the drainage hole and shorten damaged trails.",
      },
      seasons: seasons(
        "Remove all-green reversions and shorten winter-damaged trails to a variegated node, keeping the Skimmia centre visible.",
        "Guide the ivy around Pot 1's rim, check leaf undersides for scale and trim only strands that shade the pansies.",
        "Let the yellow-edged trails frame the autumn planting while lifting fallen leaves out from beneath them.",
        "Use the evergreen trails as the pot's structure, shielding exposed roots from frost and avoiding wet compost around stem joints."
      ),
    },
    "stairpots-p1-skimmia-double-diamond": {
      source: RHS.skimmia,
      about: "Skimmia 'Double Diamond' is recorded from its supplied label. Treat it as a compact evergreen Skimmia: sheltered light, even moisture and free drainage suit the container. RHS guidance notes that Skimmias are not ericaceous plants, so there is no need to use acid compost as a default.",
      facts: { Soil: { value: "Moist, free-draining", detail: "Not ericaceous; ordinary peat-free compost is suitable if moisture stays even." } },
      waterSigns: {
        under: "The central Skimmia's glossy leaves dull, curl and brown at their tips while Pot 1 feels light; re-wet slowly so water reaches the compact root ball.",
        over: "Pale leaves combined with soft dark tissue at the stem bases mean Pot 1 is holding too much water around the evergreen crown; raise the pot and pause watering.",
      },
      seasons: seasons(
        "Remove damaged leaves one by one, top-dress around—not over—the stems and record flower buds to confirm how this labelled cultivar performs.",
        "Shelter from harsh midday sun, water when the upper compost dries and keep Hedera trails from covering the Skimmia's centre.",
        "Let new flower buds form undisturbed, stop feeding and clear fallen pansy petals from the evergreen framework.",
        "Raise Pot 1 on feet, shield the compact root ball from prolonged hard frost and water sparingly on mild mornings only."
      ),
    },
    "stairpots-p1-pansy-fire-red": {
      source: RHS.pansy,
      waterSigns: {
        under: "Pot 1's red flowers droop and their stalks bend while the leaf rosette is still green; water around the pansies before the small plugs shrink from the compost.",
        over: "Grey petals caught under the ivy and yellow, soft leaf stalks indicate wet stagnant growth; deadhead to the base and open space around the rosettes.",
      },
      seasons: seasons(
        "Cut leggy stems to a leafy joint and restart deadheading, taking care not to crowd the central Skimmia with new growth.",
        "Expect a pause in hot weather; move Pot 1 out of afternoon scorch and retain healthy crowns for a cooler-season return.",
        "Deadhead the red display frequently, feed lightly after watering and remove petals that fall into the Skimmia.",
        "Keep flowers off the wet compost, water early on frost-free days and remove any crown that turns soft rather than trimming only its leaves."
      ),
    },
    "stairpots-p2-hedera-yellow-ripple": {
      source: RHS.hedera,
      waterSigns: {
        under: "Pot 2's trailing ivy becomes papery at the cream margins and the stems lose flexibility; soak its edge of the container before the root plug hardens.",
        over: "Dark, soft nodes and shedding yellow leaves beside the Gaultheria show the shared lower compost is too wet; improve the pot's drainage and remove affected growth.",
      },
      seasons: seasons(
        "Prune back to strongly variegated leaves, remove green reversions and leave room for the Gaultheria's upright shoots.",
        "Train Pot 2's trails evenly around the rim and check for scale insects where stems cross the container edge.",
        "Retain the cream-edged cascade as a contrast to Gaultheria berries, clearing trapped leaves from beneath the stems.",
        "Protect the hanging trails from icy wind, keep stem joints out of saturated compost and postpone major cutting until spring."
      ),
    },
    "stairpots-p2-gaultheria-unidentified": {
      source: RHS.gaultheria,
      waterSigns: {
        under: "The evergreen leaves lose gloss and curl while berry stalks shrivel; use rainwater to re-wet the Gaultheria root plug before it dries solid.",
        over: "Yellow leaves and soft brown roots in a persistently heavy Pot 2 indicate stagnant compost; raise the pot, clear its outlet and reduce watering.",
      },
      seasons: seasons(
        "Photograph flowers, leaf shape and growth habit to resolve the cultivar, then top-dress lightly without burying the woody stems.",
        "Keep Pot 2 evenly moist with rainwater in dry weather and shield the evergreen foliage from fierce afternoon sun.",
        "Enjoy and record the berry colour, stop feeding and prevent ivy trails or fallen leaves from covering the shrub's centre.",
        "Leave berries for display, keep drainage open and protect the container root ball during prolonged hard frost or drying wind."
      ),
    },
    "stairpots-p2-pansy-fire-red": {
      source: RHS.pansy,
      waterSigns: {
        under: "Pot 2's red pansy blooms crease and face down while the rosettes flatten near the Gaultheria; water the pansy side thoroughly and drain the excess.",
        over: "Water-soaked stalks and grey mould among berries and ivy signal poor airflow in wet compost; remove whole affected stems and delay watering.",
      },
      seasons: seasons(
        "Trim stretched growth back to healthy leaves and resume deadheading without exposing the Gaultheria roots.",
        "Give Pot 2 cool morning light during heat and keep seed capsules removed while the plants wait for autumn conditions.",
        "Maintain the red flowers by deadheading at the stem base and brushing fallen petals out of the Gaultheria foliage.",
        "Protect compact crowns from repeated freeze-thaw, keep airflow around them and water only after checking beneath the ivy canopy."
      ),
    },
  };

  const addStone = (id, waterSigns, seasonal) => { REVIEWS[id] = { waterSigns, seasons: seasonal }; };
  addStone("stone-sedum-chocolate-ball", {
    under: "The chocolate needle-like leaves wrinkle and the cushion contracts after sustained drought; water only when this change reaches established stems, not for a dry gravel surface.",
    over: "Translucent needles and a dark soft centre show moisture is sitting in the tight mound; remove rotted pieces and open a dry grit collar around it.",
  }, seasons("Comb moss and dead needles from the cushion and press loose living tips back into gritty gaps.", "Let the yellow flowers finish, then remove only spent stems that spoil the chocolate mound.", "Clear wet leaves from the fine foliage and stop all feeding before cold weather.", "Keep the compact crown exposed to air and rain-shelter it if the gravel remains saturated."));
  addStone("stone-older-caucasian-stonecrop", {
    under: "The scalloped leaves thin and fold along older mat edges during prolonged drought; give one deep drink only if rooted sections are losing firmness.",
    over: "Brown mush spreading where the mat crosses damp soil marks trapped winter wet; lift sound pieces onto fresh grit and discard soft growth.",
  }, seasons("Lift winter-loosened runners, tuck rooted nodes into grit and trim away blackened mat sections.", "Shear faded flower stems lightly so the groundcover stays dense without burying neighbouring alpines.", "Thin growth that is invading smaller rosettes and sweep leaf litter off the mat before rain increases.", "Leave the foliage exposed and dry; redirect runoff that collects beneath its spreading edges."));
  addStone("stone-common-houseleek", {
    under: "Outer rosette leaves wrinkle inward only after a long dry spell while the centre remains firm; water at soil level once, then allow the grit to dry.",
    over: "A rosette that becomes translucent at the base and detaches from its roots is rotting; remove it promptly and replace wet compost with mineral grit.",
  }, seasons("Remove dead rosettes, re-seat lifted offsets and top up grit beneath leaves without covering the central growing point.", "After a rosette flowers, let insects use the blooms, then remove that dying rosette while preserving its offsets.", "Separate overcrowded chicks if they are holding moisture and clear every fallen leaf from the colony.", "Keep rosette hearts free of debris and protect from water running off adjacent plants into the colony."));
  addStone("stone-six-rowed-stonecrop", {
    under: "The tiny six-ranked leaves lose plumpness and the mat turns brittle at exposed edges; water once only if rooted stems fail to recover overnight.",
    over: "Black gaps appearing inside the mat while surrounding shoots stay soft reveal crown rot; cut back to sound green stems and add grit below them.",
  }, seasons("Press wandering stems onto bare gritty patches and remove winter-blackened material with fine snips.", "Trim flower stalks after pollinators finish and stop the mat running across slower Stone Bed plants.", "Rake fine debris from between the tiny stems and root a few healthy tips as insurance against winter loss.", "Avoid foot traffic and standing moisture; the low mat needs light and airflow more than winter watering."));
  addStone("stone-ajuga-fancy-finch", {
    under: "The variegated leaves flatten and their pale edges crisp while the soil beneath the runner nodes is dry; soak the rooted patch rather than sprinkling foliage.",
    over: "Blackened centres, mildew and runners that pull away without roots show the Ajuga is too wet or congested; thin it and improve airflow.",
  }, seasons("Remove tatty leaves before blue flower spikes rise and pin selected cream-splashed runners into the intended patch.", "Cut spent spikes, water during real drought and remove any plain-green reversion before it outruns the variegated plant.", "Thin dense runners away from succulent crowns and clear leaves that would smother the low rosettes.", "Retain sound evergreen rosettes but remove any black central growth during mild dry weather."));
  addStone("stone-hydrangea-snowflake", {
    under: "Large oak-shaped leaves droop, curl and scorch at the edge while the deeper root zone is dry; soak slowly beneath the shrub, not over the flower heads.",
    over: "Yellow lower leaves and stalled shoots in continuously wet soil point to oxygen-poor roots; stop watering and keep runoff away from its planting pocket.",
  }, seasons("Remove only dead wood once buds are obvious, mulch the root area and preserve old stems that carry this year's flowers.", "Deep-water during dry spells and support very heavy double flower panicles without pruning healthy canes.", "Enjoy the burgundy foliage, leave sound flower heads for structure and clear wet debris from the crown.", "Retain the papery panicles if stable, checking after storms for split or rubbing wood rather than hard-pruning."));
  addStone("stone-chick-charms-mix", {
    under: "Different rosettes colour and tighten naturally, but true drought shows as deeply wrinkled outer leaves across several offsets; water once beneath the mix.",
    over: "Soft leaves radiating from a brown centre identify a rotting rosette; lift it before decay reaches touching offsets and renew the grit.",
  }, seasons("Map the differently coloured rosettes, remove dead centres and give crowded chicks their own gritty pockets.", "Remove each spent flowering rosette after bloom while keeping its offsets labelled as part of the mix.", "Reduce crowding where the mixed rosettes overlap and clear windblown leaves before they lodge in the centres.", "Keep every rosette heart uncovered and photograph winter colour rather than mistaking normal colour change for damage."));
  addStone("stone-achillea-king-alfred", {
    under: "The ferny foliage becomes grey and limp and new flower stems lose rigidity while the root zone is dry; soak once at the base, then return to lean conditions.",
    over: "Yellow floppy shoots and a loosening crown in wet soil signal that the Achillea is being kept too rich or damp; remove affected stems and improve drainage.",
  }, seasons("Cut old stems to basal shoots, divide a congested crown if needed and keep mulch away from the centre.", "Deadhead the yellow flower plates to side buds or leave selected heads for insects, supporting only stems that actually lean.", "Stop feeding and leave a few sound seed heads while removing collapsed growth that would trap moisture.", "Keep the crown open and dry; save structural stems until late winter if they remain upright."));
  addStone("stone-sedum-aureum", {
    under: "The golden bead-like foliage dulls and wrinkles from the exposed tips after extended drought; give a single base watering only when rooted stems soften.",
    over: "Pale mushy stems beneath apparently bright tips show water trapped under the mat; take healthy cuttings and reset them onto fresh grit.",
  }, seasons("Trim black tips and spread sound golden pieces over open gritty soil to renew the carpet.", "Prevent faster green neighbours shading the colour and snip flower remains without scalping the mat.", "Remove fallen leaves immediately because the fine golden growth rots quickly beneath a damp cover.", "Maximise light, avoid watering and keep roof or path runoff from saturating its shallow rooting layer."));
  addStone("stone-sempervivum-arachnoideum", {
    under: "The cobwebbed rosettes close tightly and outer leaves wrinkle after prolonged dryness; water below the webbing so the crown itself stays dry.",
    over: "Brown liquid tissue beneath the cobweb centre means water is lingering inside the rosette; remove it and add coarse grit around surviving offsets.",
  }, seasons("Pick debris from the natural cobweb fibres with tweezers and re-seat small offsets without covering their centres.", "Water below the rosettes during exceptional drought and remove a flowering parent only after its chicks are secure.", "Thin overlapping rosettes so the webbed centres dry quickly after rain and clear every fallen leaf.", "Give this woolly colony maximum ventilation and overhead shelter if prolonged rain keeps its centres wet."));
  addStone("stone-armeria-armada-white", {
    under: "The grassy tuft turns straw-coloured from the tips and flower stems bend while the gritty root zone is dry; water once around the tuft during sustained drought.",
    over: "A soft brown centre with easily pulled leaves shows the thrift crown is staying too wet; divide away healthy outer pieces and rebuild the grit collar.",
  }, seasons("Comb dead blades from the cushion and top-dress with grit before the white flower stems emerge.", "Shear faded pompons to their bases and keep taller neighbours from shading this sun-loving mound.", "Remove any second flush of spent stems and keep fallen leaves from settling inside the grassy crown.", "Avoid routine watering and ensure the compact tuft is not sitting in a winter puddle."));
  addStone("stone-sempervivum-purple-quartz", {
    under: "The purple rosette loses leaf tension and its outer leaves pucker after a long dry interval; water the soil once without filling the centre.",
    over: "A glassy brown base or leaves sliding from the central core mark rot, not frost colour; lift the rosette and save firm offsets on dry grit.",
  }, seasons("Remove winter-damaged outer leaves and space offsets so the named rosette keeps a clear purple form.", "Let any flowering rosette complete its cycle, then label and retain the best-coloured chicks before removing the parent.", "Clear leaf litter to preserve colour and airflow, moving crowded offsets to separate gritty pockets.", "Photograph cold-season colour, keep the heart dry and do not water merely because the outer leaves tighten."));
  addStone("stone-sedum-angelina", {
    under: "The needle foliage wrinkles and loses its spring beyond the normal orange colour shift; water rooted stems once if the gravel below is completely dry.",
    over: "Yellow translucent stems under the spreading mat indicate wet rot; cut back to firm orange-green tips and reroot them in drier grit.",
  }, seasons("Shorten winter-battered stems and push vigorous cuttings into intended gaps before they run into small rosettes.", "Trim spent yellow flower heads and edge the spreading mat away from slower alpines.", "Enjoy the orange-red colour change while lifting any sections that are trapping leaves or moisture beneath them.", "Keep runoff away and use healthy loose tips as insurance if central stems succumb to prolonged wet."));
  addStone("stone-sedum-dragons-blood", {
    under: "The red-edged leaves become thin and the creeping stems stop rooting during prolonged drought; soak only the established patch, then let it dry.",
    over: "Blackening where stems overlap and a sour smell beneath the mat show trapped moisture; thin the carpet and reset sound red tips on grit.",
  }, seasons("Remove dead mat centres and pin live burgundy runners into the resulting gritty openings.", "Leave the pink-red flowers for pollinators, then trim their stems and contain runners at the bed edge.", "Clear debris to display the deeper red foliage and prevent the carpet smothering neighbouring rosettes.", "Do not water; keep the creeping crown aired and redirect any winter runoff crossing the patch."));
  addStone("stone-echeveria-devotion", {
    under: "Lower velvety leaves wrinkle and feel thinner while the central rosette remains firm; water sparingly below the foliage only after the mix has dried through.",
    over: "Translucent lower leaves or a soft black stem mean urgent rot in this tender Echeveria; isolate sound tissue and take it under cover immediately.",
  }, seasons("Remove dried lower leaves, check for mealybug in the leaf joints and acclimatise gradually to stronger outdoor light.", "Keep rain out of the fuzzy rosette, water the gritty mix only after drying and preserve airflow around the leaves.", "Move under cover before cold wet nights, inspecting every leaf joint so pests are not carried indoors.", "Keep bright, frost-free and almost dry; never allow the soft-leaved rosette to touch a cold window or stand in water."));
  addStone("stone-sedum-atlantis", {
    under: "Cream margins crisp and the variegated leaves cup after prolonged dryness; water the rooted crown once when the soil beneath, not just the gravel, is dry.",
    over: "Brown translucent stems inside the cream-and-green mound indicate rot hidden by dense foliage; remove affected pieces and reset firm shoots in grit.",
  }, seasons("Cut out winter-browned stems and remove any strongly green reversion so the variegated mound stays true.", "Deadhead the yellow flower clusters after insects finish and keep neighbouring mats from shading the pale foliage.", "Clear fallen leaves from inside the mound and stop feeding so compact growth hardens before wet weather.", "Keep the variegated crown airy and shield it from sustained waterlogging rather than from ordinary cold."));
  addStone("stone-pennisetum-rubrum", {
    under: "Leaf blades roll lengthways and tips turn straw-brown while the clump's root zone is dry; soak deeply during active warm growth.",
    over: "Yellowing from the base with a cold wet crown signals danger for this tender grass; stop watering and move it under cover before rot advances.",
  }, seasons("Keep the overwintered plant frost-free until nights warm, then cut dead blades above visible shoots and harden it off gradually.", "Feed and water while the burgundy fountain is growing strongly, tying only if exposure flattens the whole clump.", "Save or photograph seed heads, stop feeding and move the plant under cover before the first damaging frost.", "Maintain a bright frost-free crown with minimal water, removing dead blades that could harbour mould."));
  addStone("stone-ajuga-midnight-mystery", {
    under: "The dark rosettes become limp and lose their glossy surface while runner roots are dry; soak the patch at soil level before leaf edges crisp.",
    over: "Black collapsed centres and mildew beneath overlapping purple leaves indicate congestion in wet soil; thin runners and discard damaged crowns.",
  }, seasons("Comb out black leaves, peg selected dark runners into bare gravel gaps and remove any unwanted escapees.", "Cut flower spikes after bees finish and keep the spreading rosettes from climbing into succulent crowns.", "Thin the darkest rooted offsets for replanting and clear all windblown leaves from the low mat.", "Retain healthy evergreen rosettes but improve airflow if the central leaves stay wet or begin to blacken."));

  const addContext = (id, data) => { REVIEWS[id] = { ...(REVIEWS[id] || {}), ...data }; };
  addContext("bed1-hosta-gold", { waterSigns: {
    under: "The gold leaves lose their satin surface, crease between the veins and scorch along the brighter margins; soak the Bed 1 root zone if it is dry beneath the mulch.",
    over: "A soft crown and yellow leaves unrelated to autumn dieback show the gold Hosta is sitting wet; pull mulch back and improve air around the crown.",
  }, seasons: seasons("Clear the gold Hosta's old leaves before its shoots open and begin slug protection earlier than for neighbouring mature foliage.", "Maintain an even root run so the pale leaves do not scorch, removing badly slugged leaves after replacements have expanded.", "Mark this crown separately as the gold Hosta while its leaves yellow, then clear them once fully collapsed.", "Keep the dormant crown uncovered by Bed 1 leaf litter and avoid digging in its marked position.") });
  addContext("bed2-euonymus-emerald-gaiety", { waterSigns: {
    under: "The white-margined leaves dull and curl on the exposed Bed 2 side while soil below is dry; soak the established root area only after a sustained dry spell.",
    over: "Pale foliage and soft dieback beside the wall while the soil remains wet indicate poor aeration; hold water and clear compacted material from the shrub's base.",
  }, seasons: seasons("Remove any solid-green Emerald Gaiety reversions at their origin and shape only stems pressing into nearby Bed 2 plants.", "Inspect the white-margined leaves for scale and water deeply only through prolonged drought along the boundary.", "Let cold bring its pink tint, clearing fallen leaves caught inside the low evergreen framework.", "Brush off heavy snow and retain sound white-edged shoots; postpone reshaping until spring growth confirms what is alive.") });
  addContext("bed1-dahlia-yellow", { waterSigns: {
    under: "Gold Dahlia buds hang and the dark leaves remain limp into the evening while Bed 1 soil is dry; soak the tuber zone slowly without wetting blooms.",
    over: "Yellow lower leaves and a dark soft stem collar on the Gold plant indicate tuber rot risk; stop watering and expose the crown to air.",
  }, seasons: seasons("Start the labelled Gold tubers frost-free and retain only divisions with a live eye before returning them to their mapped Bed 1 position.", "Tie the flowering stems before the gold heads become heavy, deadhead to a side bud and check dark shoot tips for aphids.", "Keep the Gold label with the plant, photograph the final flowers and lift after frost blackens the top growth.", "Store the labelled Gold tubers dry and frost-free, separating any soft tissue before it spreads through the clump.") });
  addContext("bed4-abelia-kaleidoscope", { waterSigns: {
    under: "Kaleidoscope's yellow-edged leaves curl and crisp first on Bed 4's exposed side while soil is dry below the surface; soak around the shrub's spread.",
    over: "Diffuse yellowing that erases the variegation, together with soft basal shoots in wet soil, signals root stress; stop watering and improve surface drainage.",
  } });
  addContext("bed3-rose-inherited", { waterSigns: {
    under: "Bed 3's inherited rose flags at the soft shoot tips and folds its leaflets while the deeper wall-side soil is dry; soak the root area rather than the foliage.",
    over: "Weak pale canes and blackened fine roots in saturated soil beside the wall indicate water stress of the wrong kind; pause watering and relieve compaction.",
  }, seasons: seasons("Feed and mulch Bed 3's inherited rose, removing only dead or crossing wood while its unknown habit is still being documented.", "Deadhead selectively and photograph flowers, prickles and whole-plant form against the Bed 3 wall to improve identification.", "Retain useful hips and secure any cane exposed to wall-gap winds without shortening sound growth unnecessarily.", "Remove unsafe or dead wood only; wait for a confirmed rose class before applying a class-specific winter pruning regime.") });
  addContext("lobeliapot-nemesia-lady-penelope", { waterSigns: {
    under: "Lady Penelope's fine stems sag and the bicoloured flowers stop opening while Front Bed 4 soil is dry; water the relocated root zone gently and deeply.",
    over: "Yellow foliage and dark soft tissue at this Nemesia's crown show the front-bed pocket is staying wet; remove affected stems and keep mulch away from the crown.",
  } });
  addContext("stone-armeria-armada-white", { source: source("RHS · Armeria maritima", "https://www.rhs.org.uk/plants/1568/armeria-maritima/details") });
  addContext("bigpot2-fuchsia", { waterSigns: {
    under: "Big Pot 2's Fuchsia drops buds and its shoot tips hang while this upper pot becomes light; soak the whole container until water reaches the lower root ball.",
    over: "A sour smell, yellow leaves and black stem bases in Big Pot 2 show water is collecting below the mixed planting; clear its outlet before watering again.",
  }, seasons: seasons("Wait for basal buds in Big Pot 2, cut dead stems above them and top-dress without disturbing neighbouring roots.", "Water this more exposed upper pot consistently, feed while the Fuchsia flowers and turn foliage outward from crowded companions.", "Stop feeding Big Pot 2 early enough for stems to firm, and decide on frost protection before cold nights arrive.", "Insulate the upper pot's root ball from freezing wind and keep it only lightly moist while the Fuchsia crown rests.") });
  addContext("bigpot2-nepeta", { waterSigns: {
    under: "Big Pot 2's Nepeta becomes grey, brittle and sparse at the rim only after sustained drought; water once deeply if the root plug itself is dry.",
    over: "Floppy yellow stems and a loosening crown beneath denser pot companions indicate wet shade; cut back affected growth and open the surface.",
  }, seasons: seasons("Clear Big Pot 2's dead Nepeta stems and divide only if its root plug is congested among the mixed planting.", "Shear this rim plant after its first flush so fresh aromatic growth can trail without tangling the Fuchsia.", "Remove collapsed stems that hold moisture against the pot edge while leaving a short labelled crown.", "Keep Big Pot 2 freely drained and do not water the dormant Nepeta just because evergreen companions need checking.") });
  addContext("bigpot2-lobelia", { waterSigns: {
    under: "The fine Lobelia mat in Big Pot 2 turns limp and grey at the outer rim within hours of drying; soak that side of the mixed container promptly.",
    over: "Yellow threads, grey mould and soft stems under neighbouring foliage show the Lobelia is staying wet and shaded; trim it back and increase airflow.",
  }, seasons: seasons("Replant Lobelia into Big Pot 2 only after frost, keeping its tiny crown level with the compost at the display edge.", "Check the exposed rim daily in heat, trim a tired cascade by one third and feed lightly after new green tips appear.", "Keep deadheading while flowers remain, then remove the seasonal Lobelia cleanly after frost rather than leaving a wet mat.", "No Lobelia crown is expected to persist in Big Pot 2; keep its edge open for next season's planting.") });
  addContext("frontBed4-azalea-lotte", { waterSigns: {
    under: "Lotte's leaves roll and dull around the outer Bed 4 stems while its shallow root mat is dry; use rainwater to soak beneath the evergreen canopy.",
    over: "Uniform yellowing and soft roots in cold wet soil differ from normal winter colour; stop watering and pull dense mulch away from Lotte's crown.",
  }, seasons: seasons("Renew an airy leaf-mould mulch around Lotte, use rainwater when needed and snap off spent flowers without disturbing the new shoots below.", "Keep the shallow roots cool in dry weather and avoid pruning after the next flower buds begin to form.", "Stop feeding Lotte, clear heavy leaves from its centre and leave the evergreen shoots to harden naturally.", "Shield this Azalea from drying wind and check the root zone before reacting to temporary frost droop with more water.") });
  addContext("house-hallway-staghorn-fern", { seasons: seasons("Resume dilute feeding as fresh shield or antler fronds appear, keeping all liquid out of the fuzzy growing point.", "Maintain bright filtered hallway light, soak the mounting medium or root ball when nearly dry and let it drain completely.", "Stop routine feeding, dust antler fronds gently without wiping off their protective fuzz and keep away from cool door draughts.", "Use the brightest indirect light available, lengthen the interval between waterings and never remove a brown papery shield frond merely for appearance.") });
  addContext("house-sitting-mixed-spider-plant", { seasons: seasons("Look for fresh striped leaves and plantlets, feed lightly and check whether the Spider Plant's fleshy roots are displacing its two pot companions.", "Keep the striped rosette in filtered light, water the shared pot only after checking depth and trim brown tips without cutting healthy green tissue.", "Remove spent plantlet stems and stop feeding as growth slows, noting whether its vigorous roots are making separation necessary.", "Maximise gentle light for the white stripe, water sparingly and keep leaf tips away from the sitting-room radiator.") });
  addContext("house-sitting-mixed-parlour-palm", { seasons: seasons("Watch for a new palm spear before beginning weak feed, and inspect the shared planter for crowding around the Palm's fine roots.", "Keep the fronds in bright filtered light, rotate the shared pot for even growth and check for spider mite in dry weather.", "Stop feeding, remove only fully brown fronds at the base and protect the delicate leaflets from cold window draughts.", "Maintain steady room temperature and modest humidity, watering only after the shared compost has partly dried below the surface.") });
  addContext("house-sitting-mixed-arrowhead-vine", { seasons: seasons("Pinch the Arrowhead Vine above a node to encourage a compact shoot and begin light feeding only when new arrow-shaped leaves open.", "Guide or trim the fastest vine so it does not climb through the Palm, and check undersides of tender leaves for pests.", "Stop feeding, remove yellow leaves at their petioles and decide whether the increasingly vining habit still suits the shared planter.", "Give the Arrowhead Vine bright indirect light, protect it from cold glass and allow the upper shared compost to dry slightly between checks.") });

  const byId = new Map();
  Object.values(OAK.PLANTS).forEach((plants) => plants.forEach((plant) => {
    if (plant.id && plant.profile) byId.set(plant.id, plant.profile);
  }));

  Object.entries(REVIEWS).forEach(([id, review]) => {
    const profile = byId.get(id);
    if (!profile) return;
    if (review.source && !profile.sources.some((item) => item && item.url === review.source.url)) {
      profile.sources = [review.source, ...profile.sources];
    }
    if (review.about) profile.about = review.about;
    if (review.description) profile.description = review.description;
    if (review.waterSigns) profile.waterSigns = review.waterSigns;
    if (review.seasons) profile.seasons = review.seasons;
    if (review.careGuide) profile.careGuide = review.careGuide;
    if (review.facts) {
      Object.entries(review.facts).forEach(([label, replacement]) => {
        const fact = profile.facts.find((item) => item.label === label);
        if (fact) Object.assign(fact, replacement);
        else profile.facts.push({ label, ...replacement });
      });
    }
  });
})();
