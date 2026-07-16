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
  eval(readText(`${root}/seasonal-data.js`));
  eval(readText(`${root}/watering-data.js`));

  const OAK = window.OAK;
  const errors = [];
  const ids = Object.keys(OAK.PLANT_BY_ID || {});
  if (ids.length !== new Set(ids).size) errors.push("duplicate plant IDs");

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

  if (errors.length) {
    errors.forEach((error) => console.log(`ERROR: ${error}`));
    throw new Error(`Data audit failed with ${errors.length} error(s)`);
  }
  console.log(`Data audit passed: ${ids.length} unique plants and all references resolved.`);
}
