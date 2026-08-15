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
  eval(readText(`${root}/house-plant-profile-data.js`));
  eval(readText(`${root}/seasonal-data.js`));
  eval(readText(`${root}/watering-data.js`));
  eval(readText(`${root}/cultivar-resolution-data.js`));
  eval(readText(`${root}/journal-data.js`));

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
      if (pin.pending === true) return;
      if (!pin.plantId || !OAK.PLANT_BY_ID[pin.plantId]) {
        errors.push(`unresolved map pin: ${zoneKey} / ${pin.name}`);
      }
    });
  });

  Object.entries(OAK.ZONES).forEach(([zoneKey, zone]) => {
    if (zone.environment !== "indoor") return;
    const plants = OAK.PLANTS[zone.plantKey] || [];
    if (!zone.floor || !zone.room) errors.push(`incomplete indoor location: ${zoneKey}`);
    if (!zone.marker || !["ground", "first"].includes(zone.marker.floor)
      || typeof zone.marker.x !== "number" || typeof zone.marker.y !== "number") {
      errors.push(`invalid indoor marker: ${zoneKey}`);
    }
    if (plants.length !== 1) errors.push(`indoor pot must resolve to exactly one plant: ${zoneKey}`);
    if (plants[0]) {
      const record = OAK.PLANT_BY_ID[plants[0].id];
      if (!record || record.zoneKey !== zoneKey) errors.push(`unresolved indoor specimen: ${zoneKey}`);
      if (!plants[0].profile || plants[0].profile.environment !== "indoor") {
        errors.push(`indoor specimen lacks indoor profile context: ${plants[0].id}`);
      }
    }
  });

  const kentia = OAK.PLANT_BY_ID["house-hallway-kentia-palm"];
  if (!kentia || !kentia.plant.name.endsWith("— assumed")
    || !kentia.plant.profile.petSafety
    || kentia.plant.profile.petSafety.label !== "Non-toxic to cats & dogs") {
    errors.push("Kentia identity qualification or pet-safety record is incomplete");
  }

  const allowedSeasonalPriorities = new Set(["first", "month", "ongoing"]);
  const allowedSeasonalCategories = new Set([
    "prune", "deadhead", "cut-back", "ground", "protect",
    "prepare", "support", "feed", "check", "harvest",
  ]);
  const allowedSeasonalScopes = new Set(["zone", "plant", "pot", "bed5-big-pot"]);
  const seasonalIds = new Set();
  const requiredJobText = ["title", "timing", "summary", "why", "doneWhen"];

  function auditSeasonalReference(entry, monthName, section, indoor) {
    if (!entry.id || seasonalIds.has(entry.id)) {
      errors.push(`duplicate or missing seasonal id: ${entry.id || `${monthName} / ${section}`}`);
    }
    seasonalIds.add(entry.id);
    if (!allowedSeasonalScopes.has(entry.scope)) {
      errors.push(`invalid seasonal scope: ${monthName} / ${entry.id}`);
    }
    if (!Array.isArray(entry.zoneKeys) || !Array.isArray(entry.plantIds)) {
      errors.push(`invalid seasonal references: ${monthName} / ${entry.id}`);
      return;
    }
    entry.zoneKeys.forEach((zoneKey) => {
      const zone = OAK.ZONES[zoneKey];
      if (!zone) {
        errors.push(`unresolved seasonal zone: ${monthName} / ${entry.id} / ${zoneKey}`);
      } else if (indoor !== (zone.environment === "indoor")) {
        errors.push(`seasonal indoor/outdoor mismatch: ${monthName} / ${entry.id} / ${zoneKey}`);
      } else if (!indoor && zone.isPot && entry.scope !== "pot") {
        errors.push(`outdoor pot must use pot scope: ${monthName} / ${entry.id} / ${zoneKey}`);
      }
    });
    entry.plantIds.forEach((plantId) => {
      const record = OAK.PLANT_BY_ID[plantId];
      if (!record) {
        errors.push(`unresolved seasonal plant: ${monthName} / ${entry.id} / ${plantId}`);
      } else if (indoor !== (OAK.ZONES[record.zoneKey].environment === "indoor")) {
        errors.push(`seasonal plant environment mismatch: ${monthName} / ${entry.id} / ${plantId}`);
      } else if (entry.zoneKeys.length > 0 && !entry.zoneKeys.includes(record.zoneKey)) {
        errors.push(`seasonal plant is outside its referenced zone: ${monthName} / ${entry.id} / ${plantId}`);
      }
    });
    if (entry.scope === "plant" && entry.plantIds.length !== 1) {
      errors.push(`single-plant seasonal entry must have one plant: ${monthName} / ${entry.id}`);
    }
    if (entry.scope === "pot") {
      if (!entry.potKey || entry.zoneKeys.length !== 1) {
        errors.push(`pot seasonal entry needs one zone and a potKey: ${monthName} / ${entry.id}`);
      }
      const bed5Pot = entry.potKey === "bed5-medium-pot" || entry.potKey === "bed5-little-pot";
      const zone = OAK.ZONES[entry.zoneKeys[0]];
      if (!bed5Pot && zone && !zone.isPot) {
        errors.push(`pot seasonal entry targets a non-pot zone: ${monthName} / ${entry.id}`);
      }
      if (!bed5Pot && entry.potKey !== entry.zoneKeys[0]) {
        errors.push(`ordinary pot seasonal key must match its zone: ${monthName} / ${entry.id}`);
      }
      if (bed5Pot && entry.zoneKeys[0] !== "bed5") {
        errors.push(`Bed 5 pot has the wrong zone: ${monthName} / ${entry.id}`);
      }
      if (bed5Pot) {
        const expectedGroup = entry.potKey === "bed5-medium-pot" ? "Medium pot" : "Little pot";
        entry.plantIds.forEach((plantId) => {
          const record = OAK.PLANT_BY_ID[plantId];
          if (record && record.plant.group !== expectedGroup) {
            errors.push(`Bed 5 pot contains the wrong plant: ${monthName} / ${entry.id} / ${plantId}`);
          }
        });
      }
    }
    if (entry.scope === "bed5-big-pot") {
      if (entry.zoneKeys.length !== 1 || entry.zoneKeys[0] !== "bed5" || entry.plantIds.length === 0) {
        errors.push(`invalid Bed 5 big-pot seasonal entry: ${monthName} / ${entry.id}`);
      }
      entry.plantIds.forEach((plantId) => {
        const record = OAK.PLANT_BY_ID[plantId];
        if (record && record.plant.group !== "Big pot") {
          errors.push(`Bed 5 big-pot exception used by another plant: ${monthName} / ${entry.id} / ${plantId}`);
        }
      });
    }
  }

  if (Object.keys(OAK.SEASONAL || {}).length !== 12) errors.push("seasonal calendar must contain 12 months");
  Object.entries(OAK.SEASONAL || {}).forEach(([monthName, month]) => {
    if (!month.theme || !Array.isArray(month.jobs) || !Array.isArray(month.highlights) || !Array.isArray(month.indoorJobs)) {
      errors.push(`incomplete maintenance-first seasonal month: ${monthName}`);
      return;
    }
    if (month.jobs.length < 6) errors.push(`seasonal month has fewer than 6 outdoor jobs: ${monthName}`);
    if (month.highlights.length < 3 || month.highlights.length > 6) {
      errors.push(`seasonal month must have 3-6 highlights: ${monthName}`);
    }

    const jobPotKeys = new Set();
    const highlightPotKeys = new Set();
    month.jobs.forEach((entry) => {
      auditSeasonalReference(entry, monthName, "jobs", false);
      if (!allowedSeasonalPriorities.has(entry.priority)) errors.push(`invalid seasonal priority: ${monthName} / ${entry.id}`);
      if (!allowedSeasonalCategories.has(entry.category)) errors.push(`invalid seasonal category: ${monthName} / ${entry.id}`);
      requiredJobText.forEach((field) => {
        if (!entry[field]) errors.push(`missing seasonal job field: ${monthName} / ${entry.id} / ${field}`);
      });
      if (!Array.isArray(entry.steps) || entry.steps.length === 0) errors.push(`seasonal job has no steps: ${monthName} / ${entry.id}`);
      const jobCopy = requiredJobText.map((field) => entry[field] || "").concat(entry.steps || []).join(" ");
      if (/\bwater(?:ing|ed|s)?\b/i.test(jobCopy)) errors.push(`watering advice leaked into seasonal job: ${monthName} / ${entry.id}`);
      if (entry.scope === "pot") {
        if (jobPotKeys.has(entry.potKey)) errors.push(`duplicate monthly pot job: ${monthName} / ${entry.potKey}`);
        jobPotKeys.add(entry.potKey);
      }
    });
    month.indoorJobs.forEach((entry) => {
      auditSeasonalReference(entry, monthName, "indoorJobs", true);
      if (!allowedSeasonalPriorities.has(entry.priority)) errors.push(`invalid indoor seasonal priority: ${monthName} / ${entry.id}`);
      if (!allowedSeasonalCategories.has(entry.category)) errors.push(`invalid indoor seasonal category: ${monthName} / ${entry.id}`);
      requiredJobText.forEach((field) => {
        if (!entry[field]) errors.push(`missing indoor seasonal field: ${monthName} / ${entry.id} / ${field}`);
      });
      if (!Array.isArray(entry.steps) || entry.steps.length === 0) errors.push(`indoor seasonal job has no steps: ${monthName} / ${entry.id}`);
      const jobCopy = requiredJobText.map((field) => entry[field] || "").concat(entry.steps || []).join(" ");
      if (/\bwater(?:ing|ed|s)?\b/i.test(jobCopy)) errors.push(`watering advice leaked into indoor seasonal job: ${monthName} / ${entry.id}`);
    });
    month.highlights.forEach((entry) => {
      auditSeasonalReference(entry, monthName, "highlights", false);
      if (!entry.title || !entry.note) errors.push(`incomplete seasonal highlight: ${monthName} / ${entry.id}`);
      if (entry.scope === "pot") {
        if (highlightPotKeys.has(entry.potKey)) errors.push(`duplicate monthly pot highlight: ${monthName} / ${entry.potKey}`);
        highlightPotKeys.add(entry.potKey);
      }
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

  const journal = OAK.JOURNAL;
  const journalEntries = journal && Array.isArray(journal.entries) ? journal.entries : [];
  const allowedJournalTypes = new Set(["baseline", "planted", "moved", "removed", "work", "photographed"]);
  const allowedJournalAreas = new Set(["back", "front", "house"]);
  const allowedDatePrecision = new Set(["month", "day"]);
  const journalEntryIds = new Set();
  const journalEventIds = new Set();
  const journalPhotoIds = new Set();
  if (!journal || journal.version !== 1 || journalEntries.length === 0) {
    errors.push("missing or unsupported garden journal");
  }
  journalEntries.forEach((entry, index) => {
    if (!entry.id || journalEntryIds.has(entry.id)) errors.push(`duplicate or missing journal entry id: ${entry.id || "unknown"}`);
    journalEntryIds.add(entry.id);
    if (!Number.isInteger(entry.year) || !Number.isInteger(entry.month) || entry.month < 1 || entry.month > 12) {
      errors.push(`invalid journal month: ${entry.id}`);
    }
    if (index > 0) {
      const previous = journalEntries[index - 1];
      const previousOrder = previous.year * 12 + previous.month;
      const currentOrder = entry.year * 12 + entry.month;
      if (currentOrder >= previousOrder) errors.push(`journal is not newest-first: ${entry.id}`);
    }
    if (!entry.label || !entry.title || !entry.note) errors.push(`incomplete journal entry: ${entry.id}`);
    if (!Array.isArray(entry.photos) || entry.photos.length < 2 || entry.photos.length > 4) {
      errors.push(`journal entry must select 2-4 photos: ${entry.id}`);
    }
    if (!Array.isArray(entry.events) || entry.events.length === 0) errors.push(`journal entry has no events: ${entry.id}`);
    (entry.photos || []).forEach((photo) => {
      if (!photo.id || journalPhotoIds.has(photo.id)) errors.push(`duplicate or missing journal photo id: ${photo.id || entry.id}`);
      journalPhotoIds.add(photo.id);
      if (!allowedJournalAreas.has(photo.area)) errors.push(`invalid journal photo area: ${photo.id}`);
      if (!photo.src || !photo.caption) errors.push(`incomplete journal photo: ${photo.id}`);
    });
    (entry.events || []).forEach((event) => {
      if (!event.id || journalEventIds.has(event.id)) errors.push(`duplicate or missing journal event id: ${event.id || entry.id}`);
      journalEventIds.add(event.id);
      if (!allowedJournalTypes.has(event.type)) errors.push(`invalid journal event type: ${event.id}`);
      if (!allowedJournalAreas.has(event.area)) errors.push(`invalid journal event area: ${event.id}`);
      if (!allowedDatePrecision.has(event.datePrecision)) errors.push(`invalid journal date precision: ${event.id}`);
      const expectedDate = event.datePrecision === "day" ? /^\d{4}-\d{2}-\d{2}$/ : /^\d{4}-\d{2}$/;
      if (!expectedDate.test(event.date || "")) errors.push(`invalid journal date: ${event.id}`);
      if (!event.dateLabel || !event.title || !event.note) errors.push(`incomplete journal event: ${event.id}`);
      if (event.type === "moved" && (!event.from || !event.to)) errors.push(`journal move lacks from/to: ${event.id}`);
      if (event.plantId && !OAK.PLANT_BY_ID[event.plantId]) errors.push(`unresolved journal plant: ${event.id} / ${event.plantId}`);
      if (event.zoneKey && !OAK.ZONES[event.zoneKey]) errors.push(`unresolved journal zone: ${event.id} / ${event.zoneKey}`);
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
  Object.values(OAK.PLANT_PHOTOS_BY_ID || {}).forEach((months) => {
    months.forEach((month) => (month.photos || []).forEach((photo) => imageSources.add(photo.src)));
  });
  journalEntries.forEach((entry) => (entry.photos || []).forEach((photo) => imageSources.add(photo.src)));
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

  const publicCopy = `${readText(`${root}/index.html`)} ${readText(`${root}/HousePlan.jsx`)}`.toLowerCase();
  if (publicCopy.includes("fockbury") || publicCopy.includes("b61 9ap") || publicCopy.includes("metropix")) {
    errors.push("private address or source watermark leaked into the public house plan");
  }

  if (errors.length) {
    errors.forEach((error) => console.log(`ERROR: ${error}`));
    throw new Error(`Data audit failed with ${errors.length} error(s)`);
  }
  console.log(`Data audit passed: ${ids.length} unique plants, ${imageSources.size} image thumbnails and all references resolved.`);
}
