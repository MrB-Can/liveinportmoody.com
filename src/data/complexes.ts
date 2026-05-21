export type ComplexGuideStatus = "live" | "coming-soon" | "in-progress" | "Guide live" | "Preview" | "Full guide in progress";

export type Complex = {
  name: string;
  slug: string;
  address?: string;
  area: string;
  neighbourhoodSlug?: string;
  style: string;
  bestFor: string;
  setting: string;
  summary: string;
  whatToVerify: string;
  guideStatus: ComplexGuideStatus;
  guideStatusLabel: "Guide live" | "Preview" | "Full guide in progress";
  ctaLabel: string;
  href?: string;
  detailPageUrl?: string;
  latitude?: number;
  longitude?: number;
  tags: string[];
};

export const complexes: Complex[] = [
  {
    name: "Treetops",
    slug: "treetops-101-parkside-drive",
    address: "101 Parkside Drive",
    area: "Heritage Mountain",
    neighbourhoodSlug: "heritage-mountain",
    style: "Established townhouse community",
    bestFor: "Green surroundings, family-oriented layouts, and larger multi-level homes",
    setting: "Mature landscaping, recreation amenities, and a residential hillside feel",
    summary:
      "Established Heritage Mountain townhouse community with mature landscaping, recreation amenities, and larger multi-level layouts.",
    whatToVerify:
      "Strata documents, exterior maintenance history, parking, depreciation report, fees, pet/rental rules, and unit condition.",
    guideStatus: "Guide live",
    guideStatusLabel: "Guide live",
    ctaLabel: "View Treetops guide",
    href: "/complexes/treetops-101-parkside-drive",
    detailPageUrl: "/complexes/treetops-101-parkside-drive",
    latitude: 49.2919,
    longitude: -122.8348,
    tags: ["Heritage Mountain", "Near trails", "Family-oriented", "Established complex", "Larger layouts", "Guide live"],
  },
  {
    name: "Discovery Ridge",
    slug: "discovery-ridge-forest-park-way",
    address: "Forest Park Way",
    area: "Heritage Mountain",
    neighbourhoodSlug: "heritage-mountain",
    style: "Preview only",
    bestFor: "Buyers wanting established townhomes and green surroundings",
    setting: "Residential Heritage Mountain setting",
    summary: "Established townhouse community with green space and a residential Heritage Mountain setting.",
    whatToVerify: "Year built, unit count, strata fees, depreciation report, recent maintenance, parking, and unit condition.",
    guideStatus: "Preview",
    guideStatusLabel: "Preview",
    ctaLabel: "Ask about Discovery Ridge",
    latitude: 49.296,
    longitude: -122.839,
    tags: ["Heritage Mountain", "Near trails", "Family-oriented", "Established complex", "Preview"],
  },
  {
    name: "Aria Townhomes",
    slug: "aria-townhomes",
    address: "Brew Street area",
    area: "Moody Centre / Brewers Row",
    style: "Preview only",
    bestFor: "Buyers comparing urban-access townhomes",
    setting: "More central / urban Port Moody context",
    summary: "Urban-access townhome option for buyers comparing newer or more central Port Moody townhouse living.",
    whatToVerify:
      "Exact project details, strata structure, parking, storage, fees, bylaws, construction details, and active listing availability.",
    guideStatus: "Preview",
    guideStatusLabel: "Preview",
    ctaLabel: "Ask about Aria Townhomes",
    latitude: 49.277,
    longitude: -122.85,
    tags: ["Moody Centre", "Near SkyTrain", "Newer construction", "Preview"],
  },
  {
    name: "Klahanie townhomes",
    slug: "klahanie-townhomes",
    area: "Klahanie",
    style: "Preview only",
    bestFor: "Buyers wanting a more central location near Rocky Point, Suter Brook, and Newport Village",
    setting: "More walkable, amenity-oriented Port Moody context",
    summary:
      "Central Port Moody townhouse pockets that often appeal to buyers comparing Rocky Point, Suter Brook, Newport Village, and Klahanie convenience.",
    whatToVerify: "Exact strata, parking, storage, bylaws, amenity access, fees, maintenance history, and unit condition.",
    guideStatus: "Preview",
    guideStatusLabel: "Preview",
    ctaLabel: "Ask about Klahanie townhomes",
    latitude: 49.279,
    longitude: -122.826,
    tags: ["Klahanie", "Near SkyTrain", "Active listings", "Preview"],
  },
  {
    name: "College Park townhomes",
    slug: "college-park-townhomes",
    area: "College Park",
    style: "Preview only",
    bestFor: "Buyers considering established residential alternatives",
    setting: "Quieter residential context",
    summary: "Established residential townhouse alternatives for buyers comparing quieter Port Moody settings.",
    whatToVerify: "Complex age, strata fees, capital projects, parking, access, exterior maintenance, and unit condition.",
    guideStatus: "Preview",
    guideStatusLabel: "Preview",
    ctaLabel: "Ask about College Park townhomes",
    latitude: 49.27,
    longitude: -122.87,
    tags: ["College Park", "Established complex", "Lower-density feel", "Preview"],
  },
];

export const complexNeighbourhoodGroups = [
  "Heritage Mountain",
  "Klahanie",
  "Moody Centre / Brewers Row",
  "College Park",
  "Other Port Moody areas",
] as const;
