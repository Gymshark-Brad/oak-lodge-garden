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
    "stone-hebe": { name: "Hebe ‘Heartbreaker’ — assumed", latin: "Veronica ‘Heartbreaker’", status: "assumed", basis: "The cream-edged narrow leaves and strong cold-pink colouring closely match this cultivar." },
    "stone-honeysuckle": { name: "Honeysuckle ‘Serotina’ — assumed", latin: "Lonicera periclymenum ‘Serotina’", status: "assumed", basis: "A likely fragrant, late-flowering garden honeysuckle; a flower close-up is still needed." },
    "stone-clematis": { name: "Clematis montana ‘Rubens’ — assumed", latin: "Clematis montana var. rubens", status: "assumed", basis: "Best fit for the vigorous wall-covering montana with pale pink spring flowers." },
    "patio-lavender": { name: "Lavender ‘Hidcote’ — assumed", latin: "Lavandula angustifolia ‘Hidcote’", status: "assumed", basis: "Best fit for the established grey mound and deep purple English-lavender spikes." },
    "stone-pear-tree": { name: "Pear ‘Conference’ — assumed", latin: "Pyrus communis ‘Conference’ · rootstock Quince A assumed", status: "assumed", basis: "The overwhelmingly common UK garden pear is used as a working identity until fruit and graft evidence is recorded." },
    "bigpot1-nepeta": { name: "Nepeta ‘Walker’s Low’ — assumed", latin: "Nepeta × faassenii ‘Walker’s Low’", status: "assumed", basis: "Best fit for the grey aromatic mound and lavender-blue spikes used as container filler." },
    "bigpot2-nepeta": { name: "Nepeta ‘Walker’s Low’ — assumed", latin: "Nepeta × faassenii ‘Walker’s Low’", status: "assumed", basis: "Assumed to match the same catmint planted in Big Pot 1." },
    "baskets-trailing-fuchsia": { name: "Trailing Fuchsia ‘Swingtime’ — assumed", latin: "Fuchsia ‘Swingtime’", status: "assumed", basis: "A common trailing basket cultivar used as the best working identity without a flower photograph." },
    "baskets-bacopa": { name: "Bacopa ‘Snowflake’ — assumed", latin: "Chaenostoma cordatum ‘Snowflake’", status: "assumed", basis: "Best fit for the standard white trailing basket Bacopa." },
    "baskets-trailing-lobelia": { name: "Trailing Lobelia ‘Sapphire’ — assumed", latin: "Lobelia erinus ‘Sapphire’", status: "assumed", basis: "A common blue trailing basket selection used as a working identity without its original label." },
    "baskets-trailing-verbena": { name: "Verbena Temari Patio Mix — assumed", latin: "Glandularia Temari Patio Series", status: "assumed", basis: "A plausible compact trailing mixed-colour basket series; no original component labels survive." },
    "wallpot2-coreopsis-gold": { name: "Coreopsis ‘Early Sunrise’ — assumed", latin: "Coreopsis grandiflora ‘Early Sunrise’", status: "assumed", basis: "The photographed compact plant and ruffled semi-double rich-yellow flowers closely fit this cultivar." },

    // Back garden — names recovered from photographed labels
    "bed4-celosia": { name: "Celosia First Flame Mix — label confirmed", latin: "Celosia argentea First Flame Series", status: "confirmed", basis: "Photographed pot labels identify First Flame Red and First Flame Yellow; the purple plant matches the same labelled group." },
    "bed5-big-pot-alstroemeria": { name: "Alstroemeria ‘Indian Summer’ — label confirmed", latin: "Alstroemeria ‘Tesronto’ (Indian Summer)", status: "confirmed", basis: "The photographed plant label reads Summer Paradise Indian Summer." },
    "bed5-big-pot-nemesia": { name: "Nemesia ‘Wisley Vanilla’ — label confirmed", latin: "Nemesia ‘Wisley Vanilla’", status: "confirmed", basis: "The photographed plant label reads Wisley Vanilla." },
    "bed5-little-pot-begonia-carmen": { name: "Begonia ‘Carmen’ — label confirmed", latin: "Begonia ‘Carmen’", status: "confirmed", basis: "The photographed plant label reads Carmen and matches the red double flowers." },
    "wallpot1-candy-house-mix": { name: "Calibrachoa Candy House Mix — label confirmed", latin: "Calibrachoa Candy House Mix", status: "confirmed", basis: "Candy House Mix is the retained commercial identity for the combined red, yellow and pink planting; its components do not need invented individual names." },

    // Front garden — best-fit assumptions
    "frontpot-gazania-sunny-side-up": { name: "Gazania Zany Sunny-Side Up — assumed", latin: "Gazania rigens Zany Sunny-Side Up", status: "assumed", basis: "The retained name, compact habit and cream-to-gold flowers match the Zany selection." },
    "frontpot-gazania-orange-flame": { name: "Gazania Kiss Orange Flame — assumed", latin: "Gazania rigens Kiss Orange Flame", status: "assumed", basis: "Best fit for the vivid orange-and-red striped flowers shown in the Front Pot." },
    "frontpot-calibrachoa": { name: "Calibrachoa Can-Can Sunrise — assumed", latin: "Calibrachoa Can-Can Sunrise", status: "assumed", basis: "Best fit for the small pale-yellow trumpets with a broad red-orange eye and veining." },
    "frontpot-bacopa-white": { name: "Bacopa ‘Snowflake’ — assumed", latin: "Chaenostoma cordatum ‘Snowflake’", status: "assumed", basis: "Best fit for the vigorous white-flowered trailing Bacopa in the Front Pot." },
    "frontBed1-hydrangea": { name: "Hydrangea Endless Summer ‘The Original’ — assumed", latin: "Hydrangea macrophylla ‘Bailmer’ (Endless Summer The Original)", status: "assumed", basis: "A working match for the large repeat-looking mopheads varying from pink to violet-blue; no label survives." },
    "frontBed1-lavender": { name: "Lavender ‘Hidcote’ — assumed", latin: "Lavandula angustifolia ‘Hidcote’", status: "assumed", basis: "Best fit for the broad mature grey mound and deep purple flower spikes." },
    "frontBed2-hebe-kiwi-horopito": { name: "Hebe ‘Kiwi’ — label confirmed", latin: "Veronica ‘Kiwi’", status: "confirmed", basis: "The retained Horopito plant label supplies the cultivar name Kiwi; Horopito is treated as the retail range." },
    "frontBed2-wax-begonia": { name: "Begonia Cocktail ‘Gin’ — assumed", latin: "Begonia Semperflorens-Cultorum Group Cocktail ‘Gin’", status: "assumed", basis: "The bronze waxy foliage and clear pink flowers closely match Cocktail ‘Gin’." },
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

  // Seasonal entries already hold stable references by this point in the load
  // sequence. Refresh their visible names without rebuilding the task data.
  Object.values(window.OAK.SEASONAL || {}).forEach((month) => {
    month.highlights.forEach((entry) => {
      const resolution = entry.reference && RESOLUTIONS[entry.reference.plantId];
      if (!resolution) return;
      entry.plant = resolution.name;
      entry.reference.plantName = resolution.name;
    });
    month.tasks.forEach((entry) => {
      (entry.references || []).forEach((reference) => {
        const resolution = RESOLUTIONS[reference.plantId];
        if (resolution) reference.plantName = resolution.name;
      });
      entry.plants = (entry.references || []).map((reference) => reference.plantName);
    });
  });

  window.OAK.CULTIVAR_RESOLUTIONS = RESOLUTIONS;
})();
