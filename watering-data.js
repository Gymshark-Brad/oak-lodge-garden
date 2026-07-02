// Oak Lodge Garden — watering-data.js
// Watering frequency band (1–5) per plant, keyed the same way as PLANTS in data.js.
// Registered onto window.OAK.WATER_BANDS / window.OAK.WATER_BAND_INFO.
//
// Bands:
//   5  Daily          — thirsty pot & basket annuals, check every day in hot weather
//   4  2–3x a week     — regular pot annuals / moisture-loving border plants
//   3  Weekly          — most established shrubs & perennials, a weekly soak
//   2  Fortnightly     — established, drought-tolerant-ish; only in dry spells
//   1  Rarely          — drought-tolerant, hates wet feet; leave well alone

(function () {
  const WATER_BANDS = {
    "Bed 1": {
      "Japanese Maple": 3,
      "Japanese Aralia": 3,
      "Rhododendron": 3,
      "Astilbe": 4,
      "Hosta": 3,
      "Angel Wings": 1,
      "Box Hedging": 2,
      "Euonymus": 2,
      "Nemesia": 3,
      "Hardy Geranium": 2,
      "Wintercreeper": 3,
      "Dahlia": 4,
      "Avens": 3,
      "Dahlia (yellow)": 4,
      "Hosta (gold)": 3,
      "Red Hot Poker": 2,
      "Little Heath": 2,
      "Celosia": 3,
    },
    "Bed 2": {
      "Weeping Cherry": 3,
      "Variegated Dogwood": 4,
      "Peony": 3,
      "Weigela": 3,
      "Silverbush": 1,
      "Angel Wings": 1,
      "Kerria": 2,
      "Forget-me-not": 3,
      "Maiden Pink": 1,
      "Garden Pink": 1,
      "Centaurea 'Snowy Owl'": 2,
      "Hydrangea petiolaris": 4,
      "Euonymus 'Emerald Gaiety'": 2,
      "Spiraea 'Double Play Big Bang'": 2,
    },
    "Bed 3": {
      "Apple Tree": 2,
      "Callistemon 'Inferno'": 2,
      "Achillea": 1,
      "Gaillardia": 1,
      "Abelia 'Kaleidoscope'": 3,
    },
    "Bed 4": {
      "Wisteria": 1,
      "Rose": 3,
      "Yucca": 1,
      "Lavender": 1,
    },
    "Stone Bed": {
      "Houseleeks": 1,
      "Stonecrop": 1,
      "New Zealand Flax (dark)": 2,
      "Rosemary": 1,
      "Cabbage Tree": 2,
      "Hebe": 3,
    },
    "Patio": {
      "Honeysuckle": 3,
      "Clematis": 3,
    },
    "Tree": {
      "Pear Tree": 1,
    },
    "Big Pot 1": {
      "Fuchsia": 5,
      "Verbena": 4,
      "Calibrachoa": 5,
      "Nepeta": 2,
      "Lobelia": 5,
      "Petunia": 4,
    },
    "Big Pot 2": {
      "Lobelia": 5,
      "Verbena": 4,
      "Petunia": 4,
      "Nepeta": 2,
      "Fuchsia": 5,
    },
    "Little Pot 1": {
      "Geranium": 3,
      "Petunia": 4,
    },
    "Little Pot 2": {
      "Geranium": 3,
      "Petunia": 4,
    },
    "Front Pot": {
      "Gazania 'Sunny Side Up'": 2,
      "Gazania 'Orange Flame'": 2,
      "Calibrachoa": 5,
      "Bacopa White": 4,
    },
    "Wall Pot 1": {
      "Candy House Mix": 2,
    },
    "Wall Pot 2": {
      "Coreopsis Gold": 2,
    },
    "Baskets": {
      "Trailing Fuchsia": 5,
      "Bacopa": 4,
      "Trailing Lobelia": 5,
      "Trailing Verbena": 4,
    },
  };

  const WATER_BAND_INFO = {
    5: {
      label: "Daily",
      chip: "daily",
      freq: "Water every day in hot weather — these dry out fast.",
      days: [1, 1, 1, 1, 1, 1, 1],
    },
    4: {
      label: "2–3× a week",
      chip: "2–3×/wk",
      freq: "Water two or three times a week; more in a heatwave.",
      days: [1, 0, 1, 0, 1, 0, 0],
    },
    3: {
      label: "Weekly",
      chip: "weekly",
      freq: "A good weekly soak is usually enough.",
      days: [0, 0, 0, 0, 0, 0, 1],
    },
    2: {
      label: "Fortnightly",
      chip: "fortnightly",
      freq: "Established — only every couple of weeks, or in a dry spell.",
      days: [0, 0, 0, 0, 0, 0, 1],
    },
    1: {
      label: "Rarely",
      chip: "rarely",
      freq: "Drought-tolerant — leave alone unless there's a proper dry spell.",
      days: [0, 0, 0, 0, 0, 0, 0],
    },
  };

  window.OAK = window.OAK || {};
  window.OAK.WATER_BANDS = WATER_BANDS;
  window.OAK.WATER_BAND_INFO = WATER_BAND_INFO;
})();
