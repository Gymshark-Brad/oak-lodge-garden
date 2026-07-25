#!/usr/bin/env osascript -l JavaScript

// Read-only deployment guard. Uses macOS JavaScriptCore, so it adds no npm or
// build dependency to the garden journal.

ObjC.import("Foundation");

function readText(path) {
  const text = $.NSString.stringWithContentsOfFileEncodingError(
    $(path).stringByStandardizingPath,
    $.NSUTF8StringEncoding,
    null
  );
  if (!text) throw new Error(`Cannot read ${path}`);
  return ObjC.unwrap(text);
}

function run(argv) {
  const root = argv[0] || ".";
  const window = {};
  eval(readText(`${root}/data.js`));
  eval(readText(`${root}/plant-profile-data.js`));
  eval(readText(`${root}/back-garden-profile-data.js`));
  eval(readText(`${root}/front-garden-profile-data.js`));
  eval(readText(`${root}/seasonal-data.js`));
  eval(readText(`${root}/watering-data.js`));
  eval(readText(`${root}/cultivar-resolution-data.js`));

  const OAK = window.OAK;
  const errors = [];
  const ids = Object.keys(OAK.PLANT_BY_ID || {});
  if (ids.length !== new Set(ids).size) errors.push("duplicate plant IDs");

  const profileFields = [
    "description", "facts", "careGuide", "waterSigns", "seasons",
    "problems", "botanical", "oakLodge", "sources",
  ];
  Object.values(OAK.PLANT_BY_ID || {}).forEach((record) => {
    const profile = record.plant.profile;
    if (!profile) {
      errors.push(`missing authored profile: ${record.plant.id}`);
      return;
    }
    profileFields.forEach((field) => {
      if (!profile[field]) errors.push(`incomplete authored profile: ${record.plant.id} / ${field}`);
    });
    if (!Array.isArray(profile.facts) || profile.facts.length < 4) {
      errors.push(`insufficient profile facts: ${record.plant.id}`);
    }
    if (!Array.isArray(profile.seasons) || profile.seasons.length !== 4) {
      errors.push(`incomplete seasonal profile: ${record.plant.id}`);
    }
    if (!profile.waterSigns.under || !profile.waterSigns.over) {
      errors.push(`incomplete profile water signs: ${record.plant.id}`);
    }
    const waterBand = (OAK.WATER_BANDS_BY_ID || {})[record.plant.id];
    if (![1, 2, 3, 4, 5].includes(waterBand)) {
      errors.push(`missing stable-id watering band: ${record.plant.id}`);
    }
  });

  const identityContentChecks = {
    "bed2-kerria": { required: "Pseudofumaria", forbidden: "Kerria japonica makes" },
    "bed5-new-zealand-flax-cultivar-to-confirm": { required: "Yucca filamentosa", forbidden: "This Phormium" },
    "frontBed5-climber-unidentified": { required: "Rosa", forbidden: "Kiftsgate" },
    "frontHedge-hedge-to-identify": { required: "Ligustrum ovalifolium", forbidden: "Unidentified established hedge" },
  };
  Object.entries(identityContentChecks).forEach(([plantId, check]) => {
    const record = OAK.PLANT_BY_ID[plantId];
    const content = record && record.plant.profile
      ? `${record.plant.profile.type} ${record.plant.profile.description} ${record.plant.profile.about}`
      : "";
    if (!content.includes(check.required) || content.includes(check.forbidden)) {
      errors.push(`identity-specific profile content is stale: ${plantId}`);
    }
  });

  Object.entries(OAK.CULTIVAR_RESOLUTIONS || {}).forEach(([plantId, resolution]) => {
    const record = OAK.PLANT_BY_ID[plantId];
    if (!record) errors.push(`unresolved cultivar-resolution id: ${plantId}`);
    if (!resolution || !["assumed", "confirmed"].includes(resolution.status)) {
      errors.push(`invalid cultivar-resolution status: ${plantId}`);
    }
    const expectedSuffix = resolution.status === "assumed" ? "— assumed" : "— label confirmed";
    if (!resolution.name.endsWith(expectedSuffix)) {
      errors.push(`missing visible cultivar-resolution suffix: ${plantId}`);
    }
  });

  Object.entries(OAK.BED_PLANT_MAPS).forEach(([zoneKey, pins]) => {
    pins.forEach((pin) => {
      if (!pin.plantId || !OAK.PLANT_BY_ID[pin.plantId]) {
        errors.push(`unresolved map pin: ${zoneKey} / ${pin.name}`);
      }
    });
  });

  Object.entries(OAK.SEASONAL).forEach(([monthName, month]) => {
    month.highlights.forEach((entry) => {
      if (!entry.reference || !OAK.PLANT_BY_ID[entry.reference.plantId]) {
        errors.push(`unresolved seasonal highlight: ${monthName} / ${entry.plant}`);
      }
    });
    month.tasks.forEach((entry) => {
      (entry.references || []).forEach((reference) => {
        if (!OAK.PLANT_BY_ID[reference.plantId]) {
          errors.push(`unresolved seasonal task: ${monthName} / ${reference.plantName}`);
        }
      });
    });
  });

  Object.entries(OAK.WATER_BANDS).forEach(([plantKey, bands]) => {
    const plants = OAK.PLANTS[plantKey] || [];
    Object.keys(bands).forEach((name) => {
      if (!plants.some((plant) => plant.name === name)) {
        errors.push(`unresolved watering entry: ${plantKey} / ${name}`);
      }
    });
  });

  const imageSources = new Set();
  Object.values(OAK.PLANTS).forEach((plants) => {
    plants.forEach((plant) => (plant.photos || []).forEach((src) => imageSources.add(src)));
  });
  Object.values(OAK.PHOTOS_BY_MONTH).forEach((month) => {
    Object.values(month).forEach((entries) => {
      if (!Array.isArray(entries)) return;
      entries.forEach((entry) => entry && entry.src && imageSources.add(entry.src));
    });
  });
  Object.values(OAK.PLANT_PHOTOS).forEach((months) => {
    months.forEach((month) => (month.photos || []).forEach((photo) => imageSources.add(photo.src)));
  });
  imageSources.forEach((src) => {
    const originalPath = `${root}/${src}`;
    const thumbnailPath = `${root}/${OAK.thumbnailFor(src)}`;
    if (!$.NSFileManager.defaultManager.fileExistsAtPath($(originalPath))) {
      errors.push(`missing image: ${src}`);
    }
    if (!$.NSFileManager.defaultManager.fileExistsAtPath($(thumbnailPath))) {
      errors.push(`missing thumbnail: ${OAK.thumbnailFor(src)}`);
    }
  });

  if (errors.length) {
    errors.forEach((error) => console.log(`ERROR: ${error}`));
    throw new Error(`Data audit failed with ${errors.length} error(s)`);
  }
  console.log(`Data audit passed: ${ids.length} unique plants, ${imageSources.size} image thumbnails and all references resolved.`);
}
