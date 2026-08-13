// Oak Lodge Garden — cultivar resolution register
//
// Confirmed label readings and deliberately qualified best-fit assumptions.
// Stable plant IDs make every resolution reversible when better evidence appears.

(() => {
  const RESOLUTIONS = {
    // Back garden — best-fit assumptions
    "bed1-japanese-maple": { name: "Japanese Maple ‘Bloodgood’ — assumed", latin: "Acer palmatum ‘Bloodgood’", status: "assumed", basis: "Best fit from the dark foliage, mature habit and Oak Lodge photographs." },
    "bed1-dahlia": { name: "Dahlia Double Dreamy® Lilac — assumed", latin: "Dahlia Double Dreamy® Lilac", status: "assumed", basis: "Best fit from the compact dark foliage and fully double lilac-magenta flowers." },
    "bed1-dahlia-yellow": { name: "Dahlia Double Dreamy® Gold — assumed", latin: "Dahlia Double Dreamy® Gold", status: "assumed", basis: "Best fit from the matching compact dark foliage and fully double golden flowers." },
    "bed2-weeping-cherry": { name: "Weeping Cherry ‘Kiku-shidare-zakura’ — assumed", latin: "Prunus ‘Kiku-shidare-zakura’", status: "assumed", basis: "Best fit for the grafted, strongly pendulous small cherry shown in the photographs." },
    "bed2-peony": { name: "Peony ‘Sarah Bernhardt’ — assumed", latin: "Paeonia lactiflora ‘Sarah Bernhardt’", status: "assumed", basis: "A cautious best fit based on the established herbaceous habit and the recorded large fragrant flowers; a flowering close-up could overturn it." },
    "bed2-weigela": { name: "Weigela ‘Briant Rubidor’ — assumed", latin: "Weigela ‘Briant Rubidor’", status: "assumed", basis: "Best fit for the exceptionally bright golden foliage and recorded pink trumpet flowers." },
    "bed2-avens": { name: "Geum ‘Totally Tangerine’ — assumed", latin: "Geum ‘Totally Tangerine’", status: "assumed", basis: "Best fit from the tall wiry stems and repeated peach-orange semi-double flowers." },
    "bed2-kerria": { name: "Yellow Corydalis — assumed", latin: "Pseudofumaria lutea", status: "assumed", basis: "The photographed divided leaves and yellow tubular flowers fit yellow corydalis, not Kerria japonica." },
    "bed4-apple-tree": { name: "Apple ‘Cox’s Orange Pippin’ — assumed", latin: "Malus domestica ‘Cox’s Orange Pippin’ · rootstock MM106 assumed", status: "assumed", basis: "A deliberately provisional common UK garden-tree match; fruit and graft records are still needed." },
    "bed4-achillea": { name: "Achillea Summer Berries — assumed", latin: "Achillea millefolium Summer Berries", status: "assumed", basis: "Best fit from the compact plant carrying flat heads in vivid pink, red, orange and yellow shades." },
    "bed4-gaillardia": { name: "Gaillardia ‘Arizona Sun’ — assumed", latin: "Gaillardia × grandiflora ‘Arizona Sun’", status: "assumed", basis: "Best fit from the compact mound and red-orange flowers with yellow-tipped rays." },
    "bed5-wisteria": { name: "Chinese Wisteria ‘Prolific’ — assumed", latin: "Wisteria sinensis ‘Prolific’", status: "assumed", basis: "The most plausible common vigorous lilac-flowered wall cultivar; flower direction and raceme detail should be checked." },
    "bed5-rose": { name: "Rose ‘Golden Showers’ — assumed", latin: "Rosa ‘Golden Showers’", status: "assumed", basis: "Best fit from the yellow semi-double flowers and upright climbing framework." },
    "bed5-new-zealand-flax-cultivar-to-confirm": { name: "Yucca ‘Color Guard’ — assumed", latin: "Yucca filamentosa ‘Color Guard’", status: "assumed", basis: "Photographs show a rigid basal rosette with yellow-centred, green-margined leaves, fitting this Yucca better than Phormium." },
    "stone-houseleeks": { name: "Houseleek ‘Rubin’ — assumed", latin: "Sempervivum ‘Rubin’", status: "assumed", basis: "Best fit for the dense colony of small, deep ruby-red rosettes." },
    "stone-echeveria": { name: "Echeveria ‘Perle von Nürnberg’ — assumed", latin: "Echeveria ‘Perle von Nürnberg’", status: "assumed", basis: "Best fit from the large symmetrical rosette, broad obovate leaves, powdery purplish-grey sheen and fine pink margins photographed on 28 July 2026." },
    "stone-older-caucasian-stonecrop": { name: "Older Caucasian Stonecrop — assumed", latin: "Phedimus spurius cultivar", status: "assumed", basis: "The established scalloped, red-flushed mat fits the Caucasian stonecrop group, but it is deliberately separate from the newly bought ‘Dragon’s Blood’ and no older cultivar label survives." },
    "stone-common-houseleek": { name: "Common Houseleek — assumed", latin: "Sempervivum tectorum", status: "assumed", basis: "Best fit for the established green rosettes with red points; similar garden hybrids cannot yet be excluded." },
    "stone-six-rowed-stonecrop": { name: "Six-rowed Stonecrop — assumed", latin: "Sedum sexangulare", status: "assumed", basis: "Best fit for the fine creeping mat with narrow cylindrical leaves arranged densely around the stems; flowering evidence is still needed." },
    "stone-hebe": { name: "Hebe ‘Heartbreaker’ — assumed", latin: "Veronica ‘Heartbreaker’", status: "assumed", basis: "The cream-edged narrow leaves and strong cold-pink colouring closely match this cultivar." },
    "stone-honeysuckle": { name: "Honeysuckle ‘Serotina’ — assumed", latin: "Lonicera periclymenum ‘Serotina’", status: "assumed", basis: "A likely fragrant, late-flowering garden honeysuckle; a flower close-up is still needed." },
    "stone-clematis": { name: "Clematis montana ‘Rubens’ — assumed", latin: "Clematis montana var. rubens", status: "assumed", basis: "Best fit for the vigorous wall-covering montana with pale pink spring flowers." },
    "stone-pear-tree": { name: "Pear ‘Conference’ — assumed", latin: "Pyrus communis ‘Conference’ · rootstock Quince A assumed", status: "assumed", basis: "The overwhelmingly common UK garden pear is used as a working identity until fruit and graft evidence is recorded." },
    "bigpot1-nepeta": { name: "Nepeta ‘Walker’s Low’ — assumed", latin: "Nepeta × faassenii ‘Walker’s Low’", status: "assumed", basis: "Best fit for the grey aromatic mound and lavender-blue spikes used as container filler." },
    "bigpot2-nepeta": { name: "Nepeta ‘Walker’s Low’ — assumed", latin: "Nepeta × faassenii ‘Walker’s Low’", status: "assumed", basis: "Assumed to match the same catmint planted in Big Pot 1." },
    "baskets-trailing-fuchsia": { name: "Trailing Fuchsia ‘Swingtime’ — assumed", latin: "Fuchsia ‘Swingtime’", status: "assumed", basis: "A common trailing basket cultivar used as the best working identity without a flower photograph." },
    "baskets-bacopa": { name: "Bacopa ‘Snowflake’ — assumed", latin: "Chaenostoma cordatum ‘Snowflake’", status: "assumed", basis: "Best fit for the standard white trailing basket Bacopa." },
    "baskets-trailing-lobelia": { name: "Trailing Lobelia ‘Sapphire’ — assumed", latin: "Lobelia erinus ‘Sapphire’", status: "assumed", basis: "A common blue trailing basket selection used as a working identity without its original label." },
    "baskets-trailing-verbena": { name: "Verbena Temari Patio Mix — assumed", latin: "Glandularia Temari Patio Series", status: "assumed", basis: "A plausible compact trailing mixed-colour basket series; no original component labels survive." },
    "wallpot2-coreopsis-gold": { name: "Coreopsis ‘Early Sunrise’ — assumed", latin: "Coreopsis grandiflora ‘Early Sunrise’", status: "assumed", basis: "The photographed compact plant and ruffled semi-double rich-yellow flowers closely fit this cultivar." },
    "lobeliapot-nemesia-lady-penelope": { name: "Nemesia ‘Lady Penelope’ — assumed", latin: "Nemesia ‘Lady Penelope’", status: "assumed", basis: "Best fit from the rose-pink upper petals, white lower lip, pink side markings and yellow eye; no label survives and similar hybrids remain possible." },

    // Back garden — names recovered from photographed labels
    "bed4-celosia": { name: "Celosia First Flame Yellow — label confirmed", latin: "Celosia argentea First Flame Series (yellow)", status: "confirmed", basis: "The retained yellow plant has its photographed First Flame Yellow label; the former red and purple plants were removed in August 2026." },
    "bed5-big-pot-alstroemeria": { name: "Alstroemeria ‘Indian Summer’ — label confirmed", latin: "Alstroemeria ‘Tesronto’ (Indian Summer)", status: "confirmed", basis: "The photographed plant label reads Summer Paradise Indian Summer." },
    "bed5-big-pot-nemesia": { name: "Nemesia ‘Wisley Vanilla’ — label confirmed", latin: "Nemesia ‘Wisley Vanilla’", status: "confirmed", basis: "The photographed plant label reads Wisley Vanilla." },
    "bed5-little-pot-begonia-carmen": { name: "Begonia ‘Carmen’ — label confirmed", latin: "Begonia ‘Carmen’", status: "confirmed", basis: "The photographed plant label reads Carmen and matches the red double flowers." },
    "stone-sedum-chocolate-ball": { name: "Sedum ‘Chocolate Ball’ — label confirmed", latin: "Sedum polytrichoides ‘Chocolate Ball’", status: "confirmed", basis: "The photographed plant label confirms ‘Chocolate Ball’." },
    "stone-ajuga-fancy-finch": { name: "Ajuga ‘Fancy Finch’ — label confirmed", latin: "Ajuga ‘Fanfin’ (Feathered Friends Fancy Finch)", status: "confirmed", basis: "The photographed label confirms Feathered Friends ‘Fancy Finch’; ‘Fanfin’ is its cultivar epithet." },
    "stone-hydrangea-snowflake": { name: "Hydrangea ‘Snowflake’ — label confirmed", latin: "Hydrangea quercifolia ‘Brido’ (Snowflake)", status: "confirmed", basis: "The photographed label confirms Hydrangea quercifolia Snowflake; ‘Brido’ is the accepted cultivar epithet." },
    "stone-chick-charms-mix": { name: "Chick Charms Houseleek Mix — label confirmed", latin: "Sempervivum Chick Charms Series", status: "confirmed", basis: "The photographed tag confirms the Chick Charms series but does not identify the individual cultivars in the mix." },
    "stone-achillea-king-alfred": { name: "Achillea ‘King Alfred’ — label confirmed", latin: "Achillea ‘King Alfred’", status: "confirmed", basis: "The photographed plant label confirms ‘King Alfred’." },
    "stone-sedum-aureum": { name: "Golden Stonecrop ‘Aureum’ — label confirmed", latin: "Sedum acre ‘Aureum’", status: "confirmed", basis: "The photographed plant label confirms ‘Aureum’." },
    "stone-sempervivum-arachnoideum": { name: "Cobweb Houseleek — label confirmed", latin: "Sempervivum arachnoideum", status: "confirmed", basis: "The photographed label confirms Sempervivum arachnoideum and the rosettes show its diagnostic cobwebbing." },
    "stone-armeria-armada-white": { name: "Thrift ‘Armada White’ — label confirmed", latin: "Armeria maritima ‘Armada White’", status: "confirmed", basis: "The photographed plant label confirms ‘Armada White’." },
    "stone-sempervivum-purple-quartz": { name: "Houseleek ‘Purple Quartz’ — label confirmed", latin: "Sempervivum ‘Purple Quartz’ (Big Sam Series)", status: "confirmed", basis: "The photographed label confirms Big Sam ‘Purple Quartz’." },
    "stone-sedum-angelina": { name: "Sedum ‘Angelina’ — label confirmed", latin: "Sedum rupestre ‘Angelina’", status: "confirmed", basis: "The photographed plant label confirms ‘Angelina’." },
    "stone-sedum-dragons-blood": { name: "Stonecrop ‘Dragon’s Blood’ — label confirmed", latin: "Phedimus spurius ‘Schorbuser Blut’", status: "confirmed", basis: "The photographed label confirms the new Dragon’s Blood plant; it is not merged with the older unidentified stonecrop." },
    "stone-echeveria-devotion": { name: "Echeveria ‘Devotion’ — label confirmed", latin: "Echeveria pulvinata ‘Bcec12001’ (Devotion)", status: "confirmed", basis: "The photographed label confirms Devotion and the cultivar epithet ‘Bcec12001’." },
    "stone-sedum-atlantis": { name: "Sedum ‘Atlantis’ — label confirmed", latin: "Sedum takesimense ‘Nonsitnal’ (Atlantis)", status: "confirmed", basis: "The photographed label confirms Atlantis; ‘Nonsitnal’ is the cultivar epithet." },
    "stone-pennisetum-rubrum": { name: "Purple Fountain Grass ‘Rubrum’ — label confirmed", latin: "Pennisetum advena ‘Rubrum’", status: "confirmed", basis: "The photographed label confirms ‘Rubrum’; the original image filename typo ‘Ruburm’ has been corrected." },
    "stone-ajuga-midnight-mystery": { name: "Ajuga ‘Midnight Mystery’ — label confirmed", latin: "Ajuga reptans ‘Midnight Mystery’", status: "confirmed", basis: "The retained name and photographed plant confirm ‘Midnight Mystery’." },
    "wallpot1-candy-house-mix": { name: "Calibrachoa Candy House Mix — label confirmed", latin: "Calibrachoa Candy House Mix", status: "confirmed", basis: "Candy House Mix is the retained commercial identity for the combined red, yellow and pink planting; its components do not need invented individual names." },
    "cercispot-cercis-carolina-sweetheart": { name: "Cercis ‘Carolina Sweetheart’ — label confirmed", latin: "Cercis canadensis ‘Nccc1’ (Carolina Sweetheart)", status: "confirmed", basis: "The photographed plant label explicitly reads Cercis canadensis Carolina Sweetheart." },
    "wallpot2-echinacea-mooodz-glory": { name: "Echinacea Mooodz Glory — label confirmed", latin: "Echinacea ‘Hilmooglor’ (Mooodz Glory)", status: "confirmed", basis: "The retained garden name and white compact flowers match the registered Mooodz Glory trade selection ‘Hilmooglor’." },
    "bed1-pieris-forest-flame": { name: "Pieris ‘Forest Flame’ — label confirmed", latin: "Pieris ‘Forest Flame’", status: "confirmed", basis: "The retained name and photographed red new growth confirm the accepted cultivar ‘Forest Flame’." },
    "bed2-sedum-rose-carpet": { name: "Sedum ‘Rose Carpet’ — label confirmed", latin: "Sedum pluricaule ‘Rose Carpet’", status: "confirmed", basis: "The photographed nursery label reads Sedum Rose Carpet; the RHS accepts the full name Sedum pluricaule ‘Rose Carpet’." },
    "bed23wallpot-viburnum-lisarose": { name: "Viburnum ‘Lisarose’ — label confirmed", latin: "Viburnum tinus ‘Lisarose’", status: "confirmed", basis: "The photographed label explicitly reads Viburnum Lisarose." },
    "bed23wallpot-vinca-minor-illumination": { name: "Vinca minor ‘Illumination’ — label confirmed", latin: "Vinca minor ‘Illumination’", status: "confirmed", basis: "The retained name and distinctive gold-centred foliage confirm this additional ‘Illumination’ specimen." },
    "viburnumpot-viburnum-tinus-spirit": { name: "Viburnum tinus Spirit — label confirmed", latin: "Viburnum tinus ‘Anvi’ (Spirit)", status: "confirmed", basis: "The photographed nursery label reads Viburnum tinus Spirit; ‘Anvi’ is its accepted cultivar epithet." },

    // Front garden — best-fit assumptions
    "frontpot-gazania-sunny-side-up": { name: "Gazania Zany Sunny-Side Up — assumed", latin: "Gazania rigens Zany Sunny-Side Up", status: "assumed", basis: "The retained name, compact habit and cream-to-gold flowers match the Zany selection." },
    "frontpot-gazania-orange-flame": { name: "Gazania Kiss Orange Flame — assumed", latin: "Gazania rigens Kiss Orange Flame", status: "assumed", basis: "Best fit for the vivid orange-and-red striped flowers shown in the Front Pot." },
    "frontpot-calibrachoa": { name: "Calibrachoa Can-Can Sunrise — assumed", latin: "Calibrachoa Can-Can Sunrise", status: "assumed", basis: "Best fit for the small pale-yellow trumpets with a broad red-orange eye and veining." },
    "frontpot-bacopa-white": { name: "Bacopa ‘Snowflake’ — assumed", latin: "Chaenostoma cordatum ‘Snowflake’", status: "assumed", basis: "Best fit for the vigorous white-flowered trailing Bacopa in the Front Pot." },
    "frontBed1-hydrangea": { name: "Hydrangea Endless Summer ‘The Original’ — assumed", latin: "Hydrangea macrophylla ‘Bailmer’ (Endless Summer The Original)", status: "assumed", basis: "A working match for the large repeat-looking mopheads varying from pink to violet-blue; no label survives." },
    "frontBed1-lavender": { name: "Lavender ‘Hidcote’ — assumed", latin: "Lavandula angustifolia ‘Hidcote’", status: "assumed", basis: "Best fit for the broad mature grey mound and deep purple flower spikes." },
    "frontBed2-hebe-kiwi-horopito": { name: "Hebe ‘Kiwi’ — label confirmed", latin: "Veronica ‘Kiwi’", status: "confirmed", basis: "The retained Horopito plant label supplies the cultivar name Kiwi; Horopito is treated as the retail range." },
    "frontBed2-polemonium-golden-feathers": { name: "Polemonium ‘Golden Feathers’ — label confirmed", latin: "Polemonium ‘Golden Feathers’", status: "confirmed", basis: "The photographed plant label confirms ‘Golden Feathers’." },
    "frontBed2-coprosma-city-knights": { name: "Coprosma ‘City Knights’ — label confirmed", latin: "Coprosma ‘City Knights’", status: "confirmed", basis: "The photographed plant label clearly reads Coprosma City Knights." },
    "frontBed4-dahlia-tampico": { name: "Dahlia Dalina Maxi ‘Tampico’ — label confirmed", latin: "Dahlia ‘Datretten’ (Dalina Maxi Tampico)", status: "confirmed", basis: "The photographed plant label confirms Dalina Maxi Tampico; ‘Datretten’ is its registered cultivar epithet." },
    "frontBed4-verbena-margarets-memory": { name: "Verbena ‘Margaret’s Memory’ — label confirmed", latin: "Glandularia ‘Margaret’s Memory’", status: "confirmed", basis: "The photographed plant label confirms Margaret’s Memory; Glandularia is the current genus and Verbena the familiar synonym." },
    "frontBed5-hydrangea-bloody-marie": { name: "Hydrangea Bloody Marie — label confirmed", latin: "Hydrangea paniculata Bloody Marie", status: "confirmed", basis: "Two retained photographed labels explicitly read Hydrangea paniculata Bloody Marie, confirming the Marie spelling." },
    "frontBed5-euphorbia-ascot-petite": { name: "Euphorbia ‘Ascot Petite’ — label confirmed", latin: "Euphorbia × martinii ‘Ascot Petite’", status: "confirmed", basis: "The retained name and photographed nursery material confirm Euphorbia × martinii Ascot Petite." },
    "bed1-red-hot-poker": { name: "Red Hot Poker ‘Royal Standard’ — assumed", latin: "Kniphofia ‘Royal Standard’", status: "assumed", basis: "A common tall orange-red and yellow garden cultivar used as the working identity until the relocated clump flowers again." },
    "frontBed3-rose-pink": { name: "Climbing Rose ‘Compassion’ — assumed", latin: "Rosa ‘Compassion’", status: "assumed", basis: "The photographed large salmon-pink double flowers and climbing habit strongly resemble ‘Compassion’." },
    "frontBed4-photinia-existing": { name: "Photinia ‘Red Robin’ — assumed", latin: "Photinia × fraseri ‘Red Robin’", status: "assumed", basis: "The overwhelmingly likely established UK Photinia with red young growth, but no close label or flower record survives." },
    "frontBed4-delosperma-ice-cream-mix": { name: "Delosperma Ice Cream Mix — label confirmed", latin: "Delosperma Ice Cream Series", status: "confirmed", basis: "The photographed plant label confirms Ice Cream Mix as the commercial identity for the mixed-colour planting." },
    "frontBed5-bell-heather-providence": { name: "Bell Heather ‘Providence’ — label confirmed", latin: "Daboecia cantabrica ‘Providence’", status: "confirmed", basis: "Providence is clearly printed on the photographed summer-flowering heather label." },
    "frontBed5-heather-leprechaun": { name: "Heather ‘Leprechaun’ — label confirmed", latin: "Calluna vulgaris ‘Leprechaun’", status: "confirmed", basis: "Leprechaun and Calluna vulgaris are clearly printed on the photographed plant label." },
    "frontStone-hosta": { name: "Hosta ‘June’ — assumed", latin: "Hosta (Tardiana Group) ‘June’", status: "assumed", basis: "The blue-green margins, chartreuse centres and compact trough habit closely match ‘June’." },
    "frontBoxHedge-wall-cotoneaster-species-to-confirm": { name: "Cotoneaster ‘Coral Beauty’ — assumed", latin: "Cotoneaster × suecicus ‘Coral Beauty’", status: "assumed", basis: "The dense evergreen arching growth, small glossy leaves and heavy berry set fit ‘Coral Beauty’ better than deciduous C. horizontalis." },
    "frontHedge-hedge-to-identify": { name: "Privet Hedge — assumed", latin: "Ligustrum ovalifolium", status: "assumed", basis: "A deliberately low-confidence assumption based only on the established front-garden hedge context; the next photo walk should challenge it." },
    "frontApple-apple-tree": { name: "Apple ‘Bramley’s Seedling’ — assumed", latin: "Malus domestica ‘Bramley’s Seedling’ · rootstock MM106 assumed", status: "assumed", basis: "A provisional common UK garden cooking apple and medium-vigour rootstock; fruit and graft evidence remain essential." },

    // Front garden — name recovered from a photographed label
    "frontBed5-hypericum-cultivar-to-confirm": { name: "Hypericum ‘Radiance’ — label confirmed", latin: "Hypericum ‘Radiance’", status: "confirmed", basis: "The cultivar name Radiance is legible on the plant label in the Oak Lodge photograph." },
  };

  const ASSUMPTION_SOURCE = {
    title: "Oak Lodge cultivar resolution register",
    url: null,
    note: "A qualified best-fit identity from Oak Lodge photographs, retained labels and garden context; replace when stronger evidence appears",
  };

  const CONFIRMED_SOURCE = {
    title: "Oak Lodge photographed plant label",
    url: null,
    note: "Cultivar wording read directly from a retained label visible in the garden photo archive",
  };

  function replaceNameKey(container, oldName, newName) {
    if (!container || !Object.prototype.hasOwnProperty.call(container, oldName)) return;
    container[newName] = container[oldName];
    delete container[oldName];
  }

  Object.entries(RESOLUTIONS).forEach(([plantId, resolution]) => {
    const record = (window.OAK.PLANT_BY_ID || {})[plantId];
    if (!record) throw new Error(`Cultivar resolution has no matching plant: ${plantId}`);

    const { plant, zoneKey, plantKey } = record;
    const oldName = plant.name;
    plant.name = resolution.name;
    plant.latin = resolution.latin;
    plant.identityResolution = { status: resolution.status, basis: resolution.basis };

    // Preserve the original name as a lookup alias while making the resolved
    // name canonical for newly rendered lists and links.
    const zoneNames = window.OAK.PLANT_ID_BY_ZONE_AND_NAME[zoneKey] || {};
    zoneNames[resolution.name] = plantId;

    (window.OAK.BED_PLANT_MAPS[zoneKey] || []).forEach((pin) => {
      if (pin.plantId === plantId) pin.name = resolution.name;
    });

    replaceNameKey(window.OAK.WATER_BANDS && window.OAK.WATER_BANDS[plantKey], oldName, resolution.name);
    replaceNameKey(window.OAK.WATER_SIGNS && window.OAK.WATER_SIGNS[plantKey], oldName, resolution.name);

    const profile = plant.profile;
    if (profile) {
      const assumed = resolution.status === "assumed";
      profile.badges = (profile.badges || [])
        .filter((badge) => !/(unconfirmed|unresolved|to confirm|best.fit|cultivar needed|cultivar record)/i.test(badge));
      profile.badges.unshift(assumed ? "Assumed identity" : "Label confirmed");

      const identityFact = (profile.facts || []).find((fact) => fact.label === "Identity");
      if (identityFact) {
        identityFact.value = resolution.latin;
        identityFact.detail = assumed
          ? "Assumed from Oak Lodge evidence; replace if a label or stronger diagnostic record appears"
          : "Confirmed from a photographed plant label in the Oak Lodge archive";
      }
      const botanicalName = (profile.botanical || []).find((row) => row.label === "Botanical name");
      if (botanicalName) botanicalName.value = `${resolution.latin}${assumed ? " · assumed" : ""}`;
      const nameStatus = (profile.botanical || []).find((row) => /(?:name|identity) status/i.test(row.label));
      if (nameStatus) nameStatus.value = assumed ? "Assumed working identity" : "Label confirmed";

      profile.provenanceNote = `${resolution.basis} ${assumed ? "This is an explicit working assumption, not a confirmed identification." : "This supersedes the earlier unresolved garden record."}`;
      profile.oakLodge.status = assumed
        ? "Keep this identity visibly marked as assumed and replace it if a label, diagnostic flower or fruit record provides stronger evidence."
        : "Cultivar wording is confirmed from the photographed label; retain the label image with the plant journal.";
      profile.sources = [...(profile.sources || []), assumed ? ASSUMPTION_SOURCE : CONFIRMED_SOURCE];
    }
  });

  // The maintenance-first seasonal calendar stores only stable plant IDs.
  // Its visible copy is written at garden- or job-level, so cultivar display
  // names no longer need to be rewritten here.

  window.OAK.CULTIVAR_RESOLUTIONS = RESOLUTIONS;
})();
