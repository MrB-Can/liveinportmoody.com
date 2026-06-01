export type BuildingGuideStatus = "preview" | "full-guide-in-progress" | "guide-live";

export type PortMoodyBuilding = {
  name: string;
  slug: string;
  type: string;
  address: string | null;
  neighbourhood: string;
  neighbourhoodSlug: string;
  displayGroup: string;
  summary: string;
  bestFor: string;
  watchouts: string;
  yearBuilt: number | null;
  unitCount: number | null;
  construction: string | null;
  amenities: string[];
  latitude: number | null;
  longitude: number | null;
  guideStatus: BuildingGuideStatus;
};

export const buildings: PortMoodyBuilding[] = [
  {
    name: "The Grande",
    slug: "the-grande",
    type: "Condo building",
    address: null,
    neighbourhood: "Suter Brook / Port Moody Centre",
    neighbourhoodSlug: "suter-brook",
    displayGroup: "Suter Brook / Port Moody Centre",
    summary:
      "Preview guide for buyers comparing larger Port Moody condo buildings near walkable amenities, shops, and SkyTrain access.",
    bestFor:
      "Buyers who want a central condo lifestyle with shops, services, transit, and Port Moody waterfront access nearby.",
    watchouts:
      "Strata documents, fees, amenities, parking, storage, bylaws, depreciation report, insurance, and active listing availability should be confirmed for the specific unit.",
    yearBuilt: null,
    unitCount: null,
    construction: null,
    amenities: [],
    latitude: null,
    longitude: null,
    guideStatus: "preview",
  },
  {
    name: "50 Electronic Ave",
    slug: "50-electronic-ave",
    type: "Condo building",
    address: "50 Electronic Avenue, Port Moody",
    neighbourhood: "Moody Centre",
    neighbourhoodSlug: "moody-centre",
    displayGroup: "Moody Centre",
    summary:
      "Preview guide for buyers researching newer condo options near Moody Centre, Rocky Point, Brewers Row, and SkyTrain.",
    bestFor:
      "Buyers wanting a more central Port Moody location with waterfront, breweries, SkyTrain, and village amenities nearby.",
    watchouts:
      "Strata documents, amenities, parking, storage, bylaws, insurance, fees, and active listing availability should be confirmed for the specific unit.",
    yearBuilt: null,
    unitCount: null,
    construction: null,
    amenities: [],
    latitude: 49.2795,
    longitude: -122.8512,
    guideStatus: "preview",
  },
  {
    name: "Aria 1",
    slug: "aria-1",
    type: "Condo building",
    address: null,
    neighbourhood: "Suter Brook",
    neighbourhoodSlug: "suter-brook",
    displayGroup: "Suter Brook / Port Moody Centre",
    summary:
      "Preview guide for buyers comparing Suter Brook condo options near shops, services, transit, and daily amenities.",
    bestFor:
      "Buyers who want a walkable condo location with a village-style setting and convenient access to SkyTrain.",
    watchouts:
      "Strata documents, fees, parking, storage, bylaws, amenities, insurance, exposure, and active listings should be confirmed for the specific unit.",
    yearBuilt: null,
    unitCount: null,
    construction: null,
    amenities: [],
    latitude: null,
    longitude: null,
    guideStatus: "preview",
  },
  {
    name: "Aria 2",
    slug: "aria-2",
    type: "Condo building",
    address: null,
    neighbourhood: "Suter Brook",
    neighbourhoodSlug: "suter-brook",
    displayGroup: "Suter Brook / Port Moody Centre",
    summary:
      "Preview guide for buyers comparing Suter Brook high-rise condo options, building feel, walkability, and strata considerations.",
    bestFor:
      "Buyers who want central Port Moody convenience with shops, services, restaurants, and transit nearby.",
    watchouts:
      "Strata health, fees, amenities, parking, storage, bylaws, insurance, and listing availability should be confirmed for the specific unit.",
    yearBuilt: null,
    unitCount: null,
    construction: null,
    amenities: [],
    latitude: null,
    longitude: null,
    guideStatus: "preview",
  },
  {
    name: "Suter Brook buildings",
    slug: "suter-brook-buildings",
    type: "Building group",
    address: null,
    neighbourhood: "Suter Brook",
    neighbourhoodSlug: "suter-brook",
    displayGroup: "Suter Brook / Port Moody Centre",
    summary:
      "Preview group for buyers comparing Suter Brook condo buildings by location, walkability, strata profile, and exposure.",
    bestFor:
      "Buyers who value daily convenience, shops, services, transit access, and a central Port Moody condo lifestyle.",
    watchouts:
      "Specific building, strata documents, fees, parking, storage, amenities, bylaws, insurance, noise, and exposure should be confirmed per building.",
    yearBuilt: null,
    unitCount: null,
    construction: null,
    amenities: [],
    latitude: null,
    longitude: null,
    guideStatus: "preview",
  },
  {
    name: "Newport Village buildings",
    slug: "newport-village-buildings",
    type: "Building group",
    address: null,
    neighbourhood: "Newport Village",
    neighbourhoodSlug: "newport-village",
    displayGroup: "Newport Village",
    summary:
      "Preview group for buyers comparing Newport Village condo options, village convenience, age profile, and strata considerations.",
    bestFor:
      "Buyers who want a walkable village setting close to groceries, cafes, services, and central Port Moody amenities.",
    watchouts:
      "Building age, envelope history, strata documents, fees, parking, storage, bylaws, insurance, and active listings should be confirmed per building.",
    yearBuilt: null,
    unitCount: null,
    construction: null,
    amenities: [],
    latitude: null,
    longitude: null,
    guideStatus: "preview",
  },
  {
    name: "Klahanie buildings",
    slug: "klahanie-buildings",
    type: "Building group",
    address: null,
    neighbourhood: "Klahanie",
    neighbourhoodSlug: "klahanie",
    displayGroup: "Klahanie",
    summary:
      "Preview guide for buyers comparing Klahanie condo options near Rocky Point, Suter Brook, Newport Village, and the inlet-side lifestyle.",
    bestFor:
      "Buyers wanting a more central Port Moody lifestyle with trails, amenities, and mixed condo and townhome options nearby.",
    watchouts:
      "Specific building, strata documents, parking, storage, amenities, fees, bylaws, and exposure should be confirmed per building.",
    yearBuilt: null,
    unitCount: null,
    construction: null,
    amenities: [],
    latitude: null,
    longitude: null,
    guideStatus: "preview",
  },
  {
    name: "Platform",
    slug: "platform",
    type: "Condo building",
    address: null,
    neighbourhood: "Moody Centre",
    neighbourhoodSlug: "moody-centre",
    displayGroup: "Moody Centre",
    summary:
      "Preview guide for buyers researching central Port Moody condo options with transit, waterfront, and daily amenities nearby.",
    bestFor:
      "Buyers comparing newer-feeling central condo options and wanting local context before relying on listing copy.",
    watchouts:
      "Strata documents, fees, amenities, parking, storage, bylaws, insurance, and availability should be confirmed for the specific unit.",
    yearBuilt: null,
    unitCount: null,
    construction: null,
    amenities: [],
    latitude: null,
    longitude: null,
    guideStatus: "preview",
  },
  {
    name: "George",
    slug: "george",
    type: "Condo building",
    address: null,
    neighbourhood: "Moody Centre",
    neighbourhoodSlug: "moody-centre",
    displayGroup: "Moody Centre",
    summary:
      "Preview guide for buyers comparing Port Moody Centre condo options, walkability, transit, layout, and strata considerations.",
    bestFor:
      "Buyers who want a central location and need help comparing building context, exposure, fees, and resale factors.",
    watchouts:
      "Strata documents, insurance, bylaws, parking, storage, amenities, fees, planned work, and active listing details should be confirmed for the specific unit.",
    yearBuilt: null,
    unitCount: null,
    construction: null,
    amenities: [],
    latitude: null,
    longitude: null,
    guideStatus: "preview",
  },
  {
    name: "Sonrisa",
    slug: "sonrisa",
    type: "Condo building",
    address: null,
    neighbourhood: "Moody Centre",
    neighbourhoodSlug: "moody-centre",
    displayGroup: "Moody Centre",
    summary:
      "Preview guide for buyers researching established Port Moody Centre condo options and strata document considerations.",
    bestFor:
      "Buyers comparing value, central location, building age, layout, parking, and walkability trade-offs.",
    watchouts:
      "Strata documents, depreciation report, insurance, fees, bylaws, parking, storage, and condition should be confirmed for the specific unit.",
    yearBuilt: null,
    unitCount: null,
    construction: null,
    amenities: [],
    latitude: null,
    longitude: null,
    guideStatus: "preview",
  },
  {
    name: "The Tides",
    slug: "the-tides",
    type: "Condo building",
    address: null,
    neighbourhood: "Klahanie",
    neighbourhoodSlug: "klahanie",
    displayGroup: "Klahanie",
    summary:
      "Preview guide for buyers comparing Klahanie-area condo options, lifestyle access, strata considerations, and exposure.",
    bestFor:
      "Buyers wanting central Port Moody access to trails, waterfront, shops, transit, and condo amenities nearby.",
    watchouts:
      "Building-specific documents, fees, amenities, parking, storage, bylaws, insurance, exposure, and active listings should be confirmed for the specific unit.",
    yearBuilt: null,
    unitCount: null,
    construction: null,
    amenities: [],
    latitude: null,
    longitude: null,
    guideStatus: "preview",
  },
  {
    name: "Nahanni",
    slug: "nahanni",
    type: "Condo building",
    address: null,
    neighbourhood: "Klahanie",
    neighbourhoodSlug: "klahanie",
    displayGroup: "Klahanie",
    summary:
      "Preview guide for buyers comparing Klahanie condo buildings, amenity access, strata profile, layout, and resale considerations.",
    bestFor:
      "Buyers who want an inlet-side lifestyle near Rocky Point, central amenities, trails, and transit connections.",
    watchouts:
      "Strata documents, fees, insurance, parking, storage, bylaws, amenities, exposure, and listing availability should be confirmed for the specific unit.",
    yearBuilt: null,
    unitCount: null,
    construction: null,
    amenities: [],
    latitude: null,
    longitude: null,
    guideStatus: "preview",
  },
  {
    name: "Libra",
    slug: "libra",
    type: "Condo building",
    address: null,
    neighbourhood: "Suter Brook",
    neighbourhoodSlug: "suter-brook",
    displayGroup: "Suter Brook / Port Moody Centre",
    summary:
      "Preview guide for buyers comparing Suter Brook condo buildings by daily convenience, strata considerations, and unit trade-offs.",
    bestFor:
      "Buyers who want a walkable condo setting close to shops, services, restaurants, and SkyTrain access.",
    watchouts:
      "Building documents, depreciation report, insurance, bylaws, parking, storage, fees, amenities, and exposure should be confirmed for the specific unit.",
    yearBuilt: null,
    unitCount: null,
    construction: null,
    amenities: [],
    latitude: null,
    longitude: null,
    guideStatus: "preview",
  },
];

export const buildingDisplayGroups = [
  "Suter Brook / Port Moody Centre",
  "Moody Centre",
  "Newport Village",
  "Klahanie",
] as const;
