/**
 * Neighbourhood Guides Data Model
 * Structured content for all Port Moody neighbourhoods and nearby communities
 */

export type AreaType = "port_moody_neighbourhood" | "nearby_community";
export type GuideStatus = "draft" | "preview" | "published" | "hidden";
export type ListingsMode = "none" | "fallback" | "gvr_area_search" | "saved_search_url" | "vendor_idx_url" | "manual_link";
export type PhotoStatus = "not_started" | "in_progress" | "complete" | "pending_approval";

export interface SchoolInfo {
  name: string;
  type: "elementary" | "middle" | "secondary" | "k-12";
  assignmentNote?: string;
  district: string;
  verificationLink?: string;
}

export interface ParkInfo {
  name: string;
  features: string[];
  distance?: string;
}

export interface TrailInfo {
  name: string;
  type: "walking" | "hiking" | "cycling" | "multi-use";
  difficulty?: "easy" | "moderate" | "challenging";
}

export interface RelatedComplex {
  name: string;
  slug: string;
  href: string;
  description?: string;
}

export interface RelatedBuilding {
  name: string;
  slug: string;
  href: string;
  buildingType?: string;
}

export interface NeighbourhoodListingsConfig {
  mode: ListingsMode;
  label?: string;
  url?: string;
  disclosure?: string;
  notes?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NeighbourhoodGuide {
  // Identity
  name: string;
  slug: string;
  municipality: "Port Moody" | "Anmore" | "Belcarra" | "Coquitlam";
  areaType: AreaType;

  // Status & Access
  status: GuideStatus;
  publicUrl?: string;

  // Content
  shortSummary: string;
  intro: string;
  bestFor: string[];
  housingTypes: string[];
  tradeOffs: string[];

  // Location & Features
  schools: SchoolInfo[];
  schoolVerificationNote?: string;
  parks: ParkInfo[];
  trails: TrailInfo[];
  transitAndAccess: string;
  walkabilityNotes: string;

  // Guidance
  buyerNotes: string[];
  sellerNotes: string[];
  relatedComplexes: RelatedComplex[];
  relatedBuildings: RelatedBuilding[];

  // Listings
  listingsConfig: NeighbourhoodListingsConfig;

  // Canonical narrative content
  overviewParagraph?: string;
  whatMakesItSpecial?: string;
  photos?: { src: string; alt: string }[];

  // Media & SEO
  photoStatus: PhotoStatus;
  heroImage?: string;
  mapLabel?: string;
  seoTitle: string;
  seoDescription: string;

  // FAQ
  faq: FaqItem[];

  // Map coordinates
  latitude: number;
  longitude: number;
}

// =============================================================================
// PORT MOODY NEIGHBOURHOODS
// =============================================================================

export const neighbourhoodGuides: NeighbourhoodGuide[] = [
  {
    name: "Heritage Mountain",
    slug: "heritage-mountain",
    municipality: "Port Moody",
    areaType: "port_moody_neighbourhood",
    status: "published",
    publicUrl: "/neighbourhoods/heritage-mountain",

    shortSummary: "A forest-setting community with established townhouse complexes, quiet residential character, and excellent trail access.",
    intro: "A hillside, forest-connected Port Moody neighbourhood with established detached homes, family-oriented townhouse complexes, trail access, and a quieter residential feel than the walkable village areas closer to the inlet.",
    overviewParagraph: "Heritage Mountain is one of Port Moody's most desirable family neighbourhoods, known for its quiet streets, larger homes, beautiful mountain views, and strong sense of community. Families are drawn to the area for its highly regarded school catchments, including Heritage Mountain Elementary School, Eagle Mountain Middle School, and Heritage Woods Secondary School. The neighbourhood is surrounded by nature, with easy access to Bert Flinn Park and Mountain Meadows Park, offering hiking and biking trails, playgrounds, and green spaces for families to enjoy.",
    whatMakesItSpecial: "What makes Heritage Mountain special is its unique blend of peaceful residential living and everyday convenience. Residents enjoy feeling tucked away among the trees while still being minutes from shops, transit, Rocky Point Park, and Port Moody's vibrant community. It's a neighbourhood where kids ride bikes, neighbours know one another, and many families choose to stay for years.",

    bestFor: ["Families", "Townhouse buyers", "Trail enthusiasts", "Quiet living"],
    housingTypes: ["Townhouses", "Detached homes", "Some condos"],
    tradeOffs: [
      "Limited walkability for daily errands",
      "Hillside grading and drainage considerations",
      "Strata fees in townhouse complexes",
      "Car-dependent for shopping and dining"
    ],

    schools: [
      {
        name: "Heritage Mountain Elementary School",
        type: "elementary",
        assignmentNote: "Verify exact address assignment with SD43",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      },
      {
        name: "Eagle Mountain Middle School",
        type: "middle",
        assignmentNote: "Verify exact address assignment with SD43",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      },
      {
        name: "Heritage Woods Secondary School",
        type: "secondary",
        assignmentNote: "Verify exact address assignment with SD43",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      }
    ],
    schoolVerificationNote: "School catchments can change. Verify current boundaries directly with School District 43 (SD43) and the specific school for your exact address.",

    parks: [
      {
        name: "Bert Flinn Park",
        features: ["Hiking and biking trails", "Forest paths", "Natural setting"],
        distance: "Nearby"
      },
      {
        name: "Mountain Meadows Park",
        features: ["Playgrounds", "Green spaces", "Family recreation"],
        distance: "Nearby"
      },
      {
        name: "Heritage Mountain Community Park",
        features: ["Walking trails", "Viewpoints"],
        distance: "Within neighbourhood"
      }
    ],

    trails: [
      {
        name: "Heritage Mountain trails",
        type: "walking",
        difficulty: "easy"
      },
      {
        name: "Port Moody trail network",
        type: "multi-use",
        difficulty: "moderate"
      }
    ],

    transitAndAccess: "Bus access via local Translink routes; car helpful for daily errands and accessing shopping. Some areas near major transit corridors; verify specific location.",
    walkabilityNotes: "Limited daily walkability. Most residents drive for groceries, shopping, and dining. Better for walking trails and parks than for urban convenience.",

    buyerNotes: [
      "Townhouses require strata due diligence: review depreciation reserves, bylaws, and recent special assessments",
      "Hillside properties need careful assessment of grading, drainage, and water management",
      "Parking and garage usability vary; verify for specific unit",
      "Unit exposure, privacy, and view vary significantly",
      "Consider proximity to schools but verify exact address assignment separately"
    ],

    sellerNotes: [
      "Highlight trail access and forest setting for outdoor-focused buyers",
      "Townhouse pricing depends heavily on strata condition and reserve funds",
      "Detached home value depends on lot size, privacy, and hillside condition",
      "Spring market often stronger for trail-focused neighbourhoods",
      "Supply and days-on-market vary by housing type"
    ],

    relatedComplexes: [
      {
        name: "Treetops",
        slug: "treetops-101-parkside-drive",
        href: "/complexes/treetops-101-parkside-drive",
        description: "Established family-oriented townhouse complex with 3-4 bed units"
      }
    ],

    relatedBuildings: [],

    listingsConfig: {
      mode: "gvr_area_search",
      disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included."
    },

    photoStatus: "complete",
    mapLabel: "Heritage Mountain",
    seoTitle: "Heritage Mountain Port Moody Neighbourhood Guide",
    seoDescription: "A local guide to Heritage Mountain in Port Moody, including housing types, townhouse complexes, parks, trails, schools, transit, buyer notes, and seller notes.",

    faq: [
      {
        question: "Is Heritage Mountain a good area for families?",
        answer: "Yes. Heritage Mountain has parks, schools nearby, quiet streets, trail access, and established townhouse communities like Treetops that appeal to families. The main trade-off is less daily walkability than central Port Moody areas."
      },
      {
        question: "What types of homes are common in Heritage Mountain?",
        answer: "Heritage Mountain has a mix of detached homes and townhouse complexes. Townhouses are concentrated in planned communities like Treetops. Detached homes are scattered throughout with varied lot sizes and conditions."
      },
      {
        question: "Is Heritage Mountain walkable?",
        answer: "Heritage Mountain has limited daily walkability. Most residents drive for groceries, shops, and restaurants. The neighbourhood is better for walking trails and parks than for urban convenience."
      },
      {
        question: "What should buyers watch for in Heritage Mountain townhomes?",
        answer: "Verify strata fees, depreciation reserves, exterior condition (roofing, siding, windows), hillside grading and drainage, parking and garage usability, unit exposure and privacy, and recent sales context. Hillside properties need careful assessment of grading and water management."
      },
      {
        question: "How does Heritage Mountain compare with Suter Brook or Newport Village?",
        answer: "Heritage Mountain is quieter and more residential, with more space and trail access but less walkability. Suter Brook and Newport Village are more walkable and have more condo inventory. Choose Heritage Mountain for family space and nature; choose the others for walkability and urban lifestyle."
      }
    ],

    latitude: 49.3,
    longitude: -122.85
  },

  {
    name: "Heritage Woods",
    slug: "heritage-woods",
    municipality: "Port Moody",
    areaType: "port_moody_neighbourhood",
    status: "preview",

    shortSummary: "Newer hillside neighbourhood with detached homes, quiet streets, and trail access.",
    intro: "Heritage Woods is a newer Port Moody hillside neighbourhood featuring detached homes and some townhomes on quiet residential streets with access to the regional trail network. It appeals to buyers seeking newer construction, space, and a quieter setting.",
    overviewParagraph: "Heritage Woods is a highly sought-after neighbourhood in Port Moody known for its newer homes, stunning mountain and inlet views, and family-oriented atmosphere. Many families are drawn to the area because of its school catchments, including Aspenwood Elementary School, Eagle Mountain Middle School, and Heritage Woods Secondary School. Residents enjoy close access to Bert Flinn Park and nearby trail systems that connect nature directly to the community.",
    whatMakesItSpecial: "What makes Heritage Woods special is the balance of larger modern homes, peaceful streets, and a strong sense of neighbourhood where families often stay for years.",

    bestFor: ["New construction buyers", "Growing families", "Quiet settings", "Trail access"],
    housingTypes: ["Detached homes", "Townhouses"],
    tradeOffs: [
      "Car-dependent for most daily errands",
      "Limited daily walkability",
      "Limited transit access compared to central areas",
      "Verify school assignment by exact address with SD43"
    ],

    schools: [
      {
        name: "Aspenwood Elementary School",
        type: "elementary",
        assignmentNote: "Verify exact address assignment with SD43",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      },
      {
        name: "Eagle Mountain Middle School",
        type: "middle",
        assignmentNote: "Verify exact address assignment with SD43",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      },
      {
        name: "Heritage Woods Secondary School",
        type: "secondary",
        assignmentNote: "Verify exact address assignment with SD43",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      }
    ],
    schoolVerificationNote: "School catchments can change. Verify current boundaries directly with School District 43 (SD43) for your exact address.",

    parks: [
      {
        name: "Bert Flinn Park",
        features: ["Hiking and biking trails", "Forest paths", "Natural setting"],
        distance: "Nearby"
      },
      {
        name: "Port Moody Parks Network",
        features: ["Community parks", "Trail access", "Recreation areas"],
        distance: "Within and adjacent to neighbourhood"
      }
    ],

    trails: [
      {
        name: "Port Moody trail system",
        type: "multi-use",
        difficulty: "easy"
      }
    ],

    transitAndAccess: "Bus access via local TransLink routes. Car helpful for most errands and shopping. Verify specific transit options for your exact address.",
    walkabilityNotes: "Limited daily walkability. Most residents drive for groceries and services. Trail and park access on foot from many locations.",

    buyerNotes: [
      "Verify school assignment with SD43 for the specific address before relying on any school assumption",
      "Review home condition, age, and any updates or renovation history",
      "Check parking, storage, and outdoor space for the specific property",
      "Assess commute routes toward central Port Moody, Coquitlam, and other destinations"
    ],

    sellerNotes: [
      "Highlight newer construction, quiet streets, and trail access",
      "Emphasize space, privacy, and established neighbourhood character",
      "Market to families and buyers prioritizing space over walkability",
      "Use cautious school language and direct buyers to SD43 verification"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: {
      mode: "fallback",
      disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included."
    },

    photoStatus: "not_started",
    mapLabel: "Heritage Woods",
    seoTitle: "Heritage Woods Port Moody Neighbourhood Guide",
    seoDescription: "Heritage Woods Port Moody neighbourhood guide preview featuring newer homes, quiet streets, and trail access.",

    faq: [
      {
        question: "What schools serve Heritage Woods?",
        answer: "School assignment varies by exact address. Use the SD43 School Locator at https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx or contact SD43 directly to verify the specific assignment for your address before making any school-related assumptions."
      },
      {
        question: "Is Heritage Woods walkable?",
        answer: "Heritage Woods has limited daily walkability. Most residents drive for shopping and services. Trail and park access is available on foot from many locations. Verify specific walkability for your address."
      },
      {
        question: "What should buyers check in Heritage Woods?",
        answer: "Review home condition, age, and update history. Verify school assignment with SD43 for your specific address. Check commute routes, transit access, and parking. Assess trail access and outdoor space for the specific property."
      }
    ],
    latitude: 49.31,
    longitude: -122.83
  },

  {
    name: "Mountain Meadows",
    slug: "mountain-meadows",
    municipality: "Port Moody",
    areaType: "port_moody_neighbourhood",
    status: "preview",

    shortSummary: "Established hillside residential neighbourhood with detached homes and quiet streets.",
    intro: "Mountain Meadows is a Port Moody residential neighbourhood with established detached homes on hillside streets, mature trees, and a quieter suburban character. It appeals to buyers seeking space and privacy in a more established setting.",
    overviewParagraph: "Mountain Meadows is a welcoming Port Moody neighbourhood popular with families for its quiet streets and convenient location. School catchments commonly include Mountain Meadows Elementary School, Eagle Mountain Middle School, and Heritage Woods Secondary School. The neighbourhood offers easy access to Mountain Meadows Park, walking trails, playgrounds, and nearby recreation.",
    whatMakesItSpecial: "What makes Mountain Meadows special is the strong sense of community and the combination of family-friendly living with access to nature and everyday conveniences.",

    bestFor: ["Established homes", "Quiet residential living", "Families", "Privacy seekers"],
    housingTypes: ["Detached homes", "Some townhomes"],
    tradeOffs: [
      "Car-dependent for most errands and services",
      "Hillside grade and drainage matter by property",
      "Limited daily walkability",
      "Verify school assignment by exact address"
    ],

    schools: [
      {
        name: "Mountain Meadows Elementary School",
        type: "elementary",
        assignmentNote: "Verify exact address assignment with SD43",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      },
      {
        name: "Eagle Mountain Middle School",
        type: "middle",
        assignmentNote: "Verify exact address assignment with SD43",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      },
      {
        name: "Heritage Woods Secondary School",
        type: "secondary",
        assignmentNote: "Verify exact address assignment with SD43",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      }
    ],
    schoolVerificationNote: "School catchments can change. Verify current boundaries directly with School District 43 (SD43) for your exact address.",

    parks: [
      {
        name: "Mountain Meadows Park",
        features: ["Playgrounds", "Walking trails", "Family recreation"],
        distance: "Within neighbourhood"
      },
      {
        name: "Port Moody Parks Network",
        features: ["Community parks", "Neighbourhood green spaces"],
        distance: "Adjacent to neighbourhood"
      }
    ],

    trails: [
      {
        name: "Local neighbourhood paths",
        type: "walking",
        difficulty: "easy"
      }
    ],

    transitAndAccess: "Local TransLink bus routes available; car helpful for most daily errands. Verify transit access for your specific address.",
    walkabilityNotes: "Limited daily walkability. Most residents drive for groceries, shopping, and services. Residential streets and nearby parks accessible on foot.",

    buyerNotes: [
      "Assess hillside factors: drainage, retaining walls, driveway grade, and winter practicality",
      "Review home condition, roof, foundation, electrical, and any renovation history",
      "Verify school assignment with SD43 for the specific address",
      "Check daily travel routes and transit access based on your routine",
      "Confirm parking and outdoor space for the specific property"
    ],

    sellerNotes: [
      "Highlight established neighbourhood character, mature trees, and quiet streets",
      "Emphasize lot size, privacy, and any home improvements or updates",
      "Market to family buyers and those seeking a quieter residential setting",
      "Use cautious school language; direct buyers to SD43 verification",
      "Prepare clear documentation for renovations, drainage work, retaining walls, or major maintenance where relevant"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: {
      mode: "fallback",
      disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included."
    },

    photoStatus: "not_started",
    mapLabel: "Mountain Meadows",
    seoTitle: "Mountain Meadows Port Moody Neighbourhood Guide",
    seoDescription: "Mountain Meadows Port Moody neighbourhood guide preview featuring established homes, quiet hillside streets, and residential character.",

    faq: [
      {
        question: "What type of housing is in Mountain Meadows?",
        answer: "Mountain Meadows primarily has detached homes on hillside streets, with some townhomes in parts of the area. Home age and condition vary; review any property carefully before purchasing."
      },
      {
        question: "Is Mountain Meadows walkable?",
        answer: "Mountain Meadows has limited daily walkability. Most residents drive for groceries, shopping, and services. Residential streets are accessible on foot; urban convenience requires a car."
      },
      {
        question: "Which schools serve Mountain Meadows?",
        answer: "School assignment varies by exact address. Verify specific elementary, middle, and secondary school assignments with SD43 at https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx before making any school-related assumptions."
      },
      {
        question: "What should buyers watch for on hillside streets?",
        answer: "Buyers should review drainage, retaining walls, driveway grade, stairs, winter access, and parking for the specific property. These factors can matter as much as the home layout."
      },
      {
        question: "How should sellers prepare a Mountain Meadows listing?",
        answer: "Sellers should document updates, maintenance, drainage work, roof age, and any improvements that reduce buyer uncertainty. Quiet streets, mature trees, privacy, and usable outdoor space are useful positioning points."
      }
    ],
    latitude: 49.32,
    longitude: -122.84
  },

  {
    name: "Moody Centre",
    slug: "moody-centre",
    municipality: "Port Moody",
    areaType: "port_moody_neighbourhood",
    status: "preview",

    shortSummary: "Downtown Port Moody with urban living, waterfront access, walkable streets, and vibrant community spaces.",
    intro: "Port Moody Centre is the heart of the city, offering walkable streets, local shops, restaurants, waterfront parks, and vibrant community gathering spaces. It appeals to urban-lifestyle seekers, downsizers, and active buyers looking for convenience, walkability, and proximity to community events.",
    overviewParagraph: "Port Moody Centre is the heart of the city and offers an energetic mix of urban convenience and outdoor lifestyle. School catchments in the area commonly include Moody Elementary School and Port Moody Secondary School. Residents are steps away from Rocky Point Park, local shops, restaurants, and the popular brewery district. SkyTrain access makes commuting simple while still enjoying Port Moody's community atmosphere.",
    whatMakesItSpecial: "What makes Port Moody Centre special is being able to walk to nearly everything, coffee shops, trails, parks, shopping, and the waterfront, creating a lifestyle many people fall in love with.",

    bestFor: ["Urban lifestyle", "Downsizers", "Walkability seekers", "Active/social buyers", "Professionals"],
    housingTypes: ["Condos", "Townhouses", "Apartments", "Mixed-use residential"],
    tradeOffs: [
      "Higher density and urban activity",
      "Parking more limited and may have fees",
      "Less private outdoor space in condo units",
      "More street noise and activity than residential areas",
      "Downtown is actively revitalizing; verify construction context near your address"
    ],

    schools: [
      {
        name: "Moody Elementary School",
        type: "elementary",
        assignmentNote: "Verify exact address assignment with SD43",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      },
      {
        name: "Port Moody Secondary School",
        type: "secondary",
        assignmentNote: "Verify exact address assignment with SD43",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      }
    ],
    schoolVerificationNote: "School catchments can change. Verify current boundaries directly with School District 43 (SD43) for your exact address.",

    parks: [
      {
        name: "Rocky Point Park",
        features: ["Waterfront access", "Walking paths", "Community gathering spaces", "Scenic views"],
        distance: "Walking distance"
      },
      {
        name: "Moody Park",
        features: ["Athletic fields", "Trails", "Picnic areas", "Recreation access"],
        distance: "Adjacent to downtown"
      }
    ],

    trails: [
      {
        name: "Downtown waterfront trail",
        type: "walking",
        difficulty: "easy"
      },
      {
        name: "Port Moody trail network access",
        type: "multi-use",
        difficulty: "easy"
      }
    ],

    transitAndAccess: "Excellent transit connectivity. Major TransLink hub with multiple bus routes. Walkable to shopping, dining, transit, and services. Strong pedestrian and cycling infrastructure.",
    walkabilityNotes: "High walkability. Downtown core with shops, restaurants, cafes, and services within walking distance. Waterfront parks accessible on foot. Most daily needs accessible without a car.",

    buyerNotes: [
      "Condo purchase requires detailed strata review: fees, reserves, bylaws, special assessments",
      "Parking varies by building: may be limited, included, or available at additional cost",
      "Urban noise and activity higher than residential neighbourhoods; verify acceptable noise levels",
      "Verify building amenities: elevators, security, outdoor space, lounge areas",
      "Downtown is actively revitalizing; verify current construction activity near your building"
    ],

    sellerNotes: [
      "Highlight exceptional walkability and no-car lifestyle appeal",
      "Emphasize waterfront access, parks, and community gathering spaces",
      "Market transit convenience and easy access to shopping and dining",
      "Position downtown living for downsizers, young professionals, and active lifestyle buyers"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: {
      mode: "fallback",
      disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.",
      notes: "Condo and townhouse inventory varies; some buildings newer, some older with renovation opportunities"
    },

    photoStatus: "not_started",
    mapLabel: "Moody Centre",
    seoTitle: "Moody Centre Port Moody Neighbourhood Guide",
    seoDescription: "Moody Centre downtown Port Moody neighbourhood guide preview featuring walkability, waterfront parks, transit access, and urban amenities.",

    faq: [
      {
        question: "What schools serve Moody Centre?",
        answer: "School assignment varies significantly by specific address. Use the SD43 School Locator to verify exact school assignments for your specific property address: https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx"
      },
      {
        question: "How walkable is Moody Centre?",
        answer: "Moody Centre has high walkability. Shops, restaurants, cafes, and services are accessible on foot. Waterfront parks and trails are nearby. Most residents can meet daily needs without a car."
      },
      {
        question: "What should condo buyers know about Moody Centre?",
        answer: "Review strata documents thoroughly: monthly fees, reserve funds, special assessments, and bylaws. Verify parking availability and cost. Visit the building at different times to assess noise and activity levels. Check amenities, security, and outdoor space. Consider that downtown living includes urban activity and construction periods during revitalization."
      }
    ],
    latitude: 49.3,
    longitude: -122.81
  },

  {
    name: "Glenayre",
    slug: "glenayre",
    municipality: "Port Moody",
    areaType: "port_moody_neighbourhood",
    status: "preview",

    shortSummary: "Quiet residential neighbourhood with detached homes, mature trees, parks, and peaceful family-focused character.",
    intro: "Glenayre is a quiet, established Port Moody neighbourhood with detached homes on varied lot sizes, mature trees, and community calm. It appeals to families and buyers prioritizing privacy, space, established character, and proximity to schools and parks.",
    overviewParagraph: "Glenayre is one of Port Moody's hidden gems, known for its quiet streets, established homes, and strong neighbourhood pride. Families are often attracted to the area because of school catchments including Glenayre Elementary School and Port Moody Secondary School. The neighbourhood is surrounded by green spaces with easy access to Glenayre Community Centre and nearby walking trails and parks.",
    whatMakesItSpecial: "What makes Glenayre special is its small-community feel, many residents know their neighbours, children play outside together, and families often stay for generations because of the welcoming atmosphere and central location.",

    bestFor: ["Families with children", "Quiet living", "Privacy seekers", "Established community"],
    housingTypes: ["Detached homes", "Some townhouses", "Varied lot sizes"],
    tradeOffs: [
      "Limited daily walkability",
      "Car-dependent for shopping and services",
      "Limited evening/night transit options",
      "Verify school assignment by exact address"
    ],

    schools: [
      {
        name: "Glenayre Elementary School",
        type: "elementary",
        assignmentNote: "Verify exact address assignment with SD43",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      },
      {
        name: "Port Moody Secondary School",
        type: "secondary",
        assignmentNote: "Verify exact address assignment with SD43",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      }
    ],
    schoolVerificationNote: "School catchments can change. Verify current boundaries directly with School District 43 (SD43) for your exact address.",

    parks: [
      {
        name: "Glenayre Community Centre",
        features: ["Recreation facilities", "Community programs", "Green spaces"],
        distance: "Within neighbourhood"
      },
      {
        name: "Port Moody Parks System",
        features: ["Walking trails", "Community pathways", "Regional connections"],
        distance: "Adjacent to neighbourhood"
      }
    ],

    trails: [
      {
        name: "Neighbourhood walking paths",
        type: "walking",
        difficulty: "easy"
      },
      {
        name: "Port Moody trail network access",
        type: "multi-use",
        difficulty: "easy"
      }
    ],

    transitAndAccess: "Local TransLink routes available; car helpful for daily errands and services. Verify specific transit access for your address.",
    walkabilityNotes: "Limited daily walkability. Most residents drive for shopping, dining, and services. Quiet residential streets and nearby parks accessible on foot.",

    buyerNotes: [
      "Lot size and condition vary significantly; assess individual property carefully",
      "Tree preservation and property character important to neighbourhood appeal",
      "Review home condition: structure, roof, foundation, and any updates needed",
      "Verify exact school assignment and program access for your specific address",
      "Consider commute implications; check local transit for your needs"
    ],

    sellerNotes: [
      "Highlight lot size, privacy, and mature landscaping",
      "Emphasize established neighbourhood character and quiet streets",
      "Feature proximity to schools and parks for family buyers",
      "Market to privacy-focused, family-oriented, and mature buyers",
      "Showcase any home improvements, renovations, or character updates"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: {
      mode: "fallback",
      disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.",
      notes: "Detached homes vary in age and condition; many well-established with mature landscaping"
    },

    photoStatus: "not_started",
    mapLabel: "Glenayre",
    seoTitle: "Glenayre Port Moody Neighbourhood Guide",
    seoDescription: "Glenayre Port Moody neighbourhood guide preview featuring quiet residential living, detached homes, parks, and family-friendly character.",

    faq: [
      {
        question: "What schools serve Glenayre?",
        answer: "School assignments vary by specific address. Some homes may be associated with Glenayre Elementary through School District 43. Verify exact school assignment and program access for your specific address using the SD43 school locator at https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx"
      },
      {
        question: "Is Glenayre a good neighbourhood for families?",
        answer: "Yes. Glenayre appeals to families with its quiet streets, nearby schools and parks, and established community character. The main trade-off is lower walkability, so families typically drive for shopping and services. Verify school assignments for your specific address with SD43."
      },
      {
        question: "How walkable is Glenayre for daily living?",
        answer: "Glenayre has limited daily walkability for shopping and services. Most residents drive for groceries, dining, and shopping. Trail and park access is available on foot; urban convenience requires a car."
      }
    ],
    latitude: 49.32,
    longitude: -122.86
  },

  {
    name: "College Park",
    slug: "college-park",
    municipality: "Port Moody",
    areaType: "port_moody_neighbourhood",
    status: "preview",

    shortSummary: "A family-friendly Port Moody neighbourhood with larger lots, established homes, and convenient access to SkyTrain and trails.",
    intro: "College Park is a family-friendly Port Moody neighbourhood offering a peaceful residential setting surrounded by nature, with larger lots, established homes, and convenient access to SkyTrain and major commuter routes.",
    overviewParagraph: "College Park is a family-friendly neighbourhood in Port Moody that offers a peaceful residential setting surrounded by nature. The area is popular with families thanks to school catchments such as Seaview Community School and Port Moody Secondary School. Residents enjoy easy access to Westhill Park, local trails, and nearby green spaces.",
    whatMakesItSpecial: "What makes College Park special is its larger lots, established homes, and strong community feel while still being conveniently located near SkyTrain, shopping, and major commuter routes.",

    bestFor: ["Families", "Larger lots", "Established homes", "Commuter access"],
    housingTypes: ["Detached homes", "Townhouses", "Established residential properties"],
    tradeOffs: [
      "Hillside streets, driveway grade, and drainage can matter by property",
      "Less central village-style walkability than Moody Centre or Newport/Suter Brook",
      "Transit, school assignment, and park access vary by address",
      "Established housing may require renovation, maintenance, or strata due diligence"
    ],

    schools: [
      {
        name: "Seaview Community School",
        type: "elementary",
        assignmentNote: "Verify exact address assignment with SD43",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      },
      {
        name: "Port Moody Secondary School",
        type: "secondary",
        assignmentNote: "Verify exact address assignment with SD43",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      }
    ],
    schoolVerificationNote: "School catchments can change. Verify current boundaries directly with School District 43 (SD43) for your exact address.",

    parks: [
      {
        name: "Westhill Park",
        features: ["Family recreation", "Green spaces", "Trails"],
        distance: "Nearby"
      },
      {
        name: "West-side Port Moody trail connections",
        features: ["Walking trails", "Community pathways"],
        distance: "Adjacent to neighbourhood"
      }
    ],
    trails: [
      {
        name: "West-side Port Moody trail connections",
        type: "multi-use",
        difficulty: "easy"
      }
    ],

    transitAndAccess: "College Park access should be checked by exact address. Some buyers may value west-side access toward Barnet Highway, Burnaby, and SFU, but transit, road convenience, grade, and daily routes vary by street.",
    walkabilityNotes: "Walkability is address-specific. Some streets may have useful access to parks or transit, while hillside grade and distance from shops can make other locations more car-dependent.",

    buyerNotes: [
      "Verify school assignment with SD43 for the exact address before relying on any school assumption",
      "Assess hillside factors: drainage, retaining walls, stairs, driveway grade, and winter practicality",
      "Check road and transit routes toward Barnet Highway, Burnaby, SFU, and central Port Moody",
      "Review age, condition, updates, strata documents, and long-term maintenance for the specific property",
      "Visit at different times of day to understand road noise, slope, parking, and daily access for the specific street"
    ],

    sellerNotes: [
      "Position around quiet residential setting, west-side access, and verified recreation proximity",
      "Highlight property-specific strengths: views, lot usability, parking, storage, updates, outdoor space",
      "Address hillside due diligence proactively where relevant: drainage, retaining walls, grade",
      "Use cautious school language and direct buyers to SD43 verification",
      "Help buyers understand practical access advantages without implying exact travel timing"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: {
      mode: "fallback",
      disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included."
    },

    photoStatus: "not_started",
    mapLabel: "College Park",
    seoTitle: "College Park Port Moody Neighbourhood Guide",
    seoDescription: "College Park Port Moody neighbourhood guide preview featuring west-side access, established housing, hillside streets, and buyer notes.",

    faq: [
      {
        question: "Is College Park walkable?",
        answer: "Walkability depends on the exact address and destination. Some streets may have useful access to parks or transit, while grade and distance from shops can make other locations more car-dependent."
      },
      {
        question: "Which schools serve College Park?",
        answer: "School assignment varies by exact address. Verify with SD43 before relying on any school assumption."
      },
      {
        question: "Who is College Park a good fit for?",
        answer: "College Park may fit buyers who want a quieter west-side Port Moody setting with access toward Barnet Highway, Burnaby, or SFU. The fit should be checked against school verification, commute routes, hillside comfort, and daily walkability."
      },
      {
        question: "What trade-offs should College Park buyers expect?",
        answer: "The main trade-offs are hillside streets, address-specific walkability, and older-property due diligence. Buyers should verify driveway grade, drainage, retaining walls, parking, transit options, and daily access for the exact property."
      },
      {
        question: "How should sellers position a College Park home?",
        answer: "Sellers should focus on property-specific strengths such as updates, parking, storage, usable outdoor space, views, and west-side access. Avoid broad school or commute claims; point buyers to exact-address verification."
      }
    ],
    latitude: 49.34,
    longitude: -122.82
  },

  {
    name: "Suter Brook",
    slug: "suter-brook",
    municipality: "Port Moody",
    areaType: "port_moody_neighbourhood",
    status: "preview",

    shortSummary: "Walkable village area near Rocky Point with condos, townhomes, and central Port Moody access.",
    intro: "Suter Brook is one of Port Moody's most central and walkable areas, clustered near Rocky Point Park and the inlet. It offers a mix of condo buildings and townhomes with access to shops, cafes, and transit. It's popular with first-time buyers, commuters, and buyers prioritizing walkability. This guide is a neighbourhood preview, information is being expanded.",

    bestFor: ["Walkability", "First-time buyers", "Commuters", "Lock-and-leave lifestyle"],
    housingTypes: ["Condos", "Townhomes", "Mixed-use residential"],
    tradeOffs: [
      "Busier and denser feel than residential areas",
      "Strata fees apply to all condo and townhome purchases; vary by building",
      "Parking can be limited; verify per unit",
      "Some buildings are older; review mechanical and envelope condition",
      "Noise and activity higher than hillside areas"
    ],

    schools: [],
    schoolVerificationNote: "School assignment varies by specific address. Use the SD43 School Locator (https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx) to verify for your exact address.",

    parks: [
      {
        name: "Rocky Point Park",
        features: ["Waterfront access", "Walking trails", "Picnic areas", "Community spaces"],
        distance: "Walking distance from most addresses"
      }
    ],

    trails: [
      {
        name: "Shoreline Trail",
        type: "walking",
        difficulty: "easy"
      }
    ],

    transitAndAccess: "Good transit access including TransLink bus routes. Near Moody Centre and Inlet Centre SkyTrain stations. Walkable to many daily needs including shops, services, and restaurants.",
    walkabilityNotes: "High walkability for daily errands and lifestyle. Rocky Point Park, shops, cafes, and transit all within reasonable walking distance for most addresses. One of Port Moody's most convenient areas for car-free or car-light living.",

    buyerNotes: [
      "Review strata documents for each building: fees, depreciation report, reserve fund, bylaws, and any pending levies",
      "Building age varies; some condos are older and may have envelope, mechanical, or elevator considerations",
      "Parking and storage allocation vary by unit; confirm for the specific property",
      "Noise levels can be higher near commercial areas and roads; visit at different times of day",
      "Verify school assignment with SD43 for the specific address"
    ],

    sellerNotes: [
      "Highlight walkability, Rocky Point access, and transit proximity for urban-lifestyle buyers",
      "Emphasize central Port Moody location and proximity to amenities",
      "Feature recent building upgrades or strata improvements where applicable",
      "Market to commuters, first-time buyers, and downsizers",
      "Prepare clear parking, storage, strata fee, amenity, and building-work details before launch"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: {
      mode: "fallback",
      disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included."
    },

    photoStatus: "not_started",
    mapLabel: "Suter Brook",
    seoTitle: "Suter Brook Port Moody Neighbourhood Guide",
    seoDescription: "Suter Brook Port Moody neighbourhood guide preview featuring walkability, condos, townhomes, Rocky Point access, and buyer notes.",

    faq: [
      {
        question: "How walkable is Suter Brook?",
        answer: "Suter Brook is one of Port Moody's most walkable areas. Shops, cafes, Rocky Point Park, and transit are accessible on foot from most addresses. It suits buyers who want car-light or car-free urban living."
      },
      {
        question: "What should condo buyers check in Suter Brook?",
        answer: "Review strata fees, depreciation reports, reserve fund balances, bylaws, and any pending levies. Building age varies; some are older and may have mechanical or envelope considerations. Confirm parking and storage for the specific unit."
      },
      {
        question: "Which schools serve Suter Brook?",
        answer: "School assignment varies by exact address. Verify with SD43 before relying on any school assumption."
      },
      {
        question: "How does Suter Brook compare with hillside Port Moody areas?",
        answer: "Suter Brook is more walkable and denser than hillside areas. Buyers usually trade some privacy and quiet for access to shops, transit, Rocky Point, and a car-light routine."
      },
      {
        question: "What should sellers highlight in Suter Brook?",
        answer: "Sellers should highlight walkability, parking and storage details, building amenities, strata health, and any recent building or unit upgrades. Clear strata documentation matters for buyer confidence."
      }
    ],
    latitude: 49.282,
    longitude: -122.828
  },

  {
    name: "Newport Village",
    slug: "newport-village",
    municipality: "Port Moody",
    areaType: "port_moody_neighbourhood",
    status: "preview",

    shortSummary: "Port Moody's most walkable area, adjacent to Rocky Point Park with condos, restaurants, and inlet views.",
    intro: "Newport Village is Port Moody's most walkable and lifestyle-focused neighbourhood, set along the inlet near Rocky Point Park. It offers condos and some older townhomes with easy access to restaurants, shops, the waterfront, and transit. It tends to carry premium pricing relative to other Port Moody areas. This guide is a neighbourhood preview, information is being expanded.",

    bestFor: ["Walkability", "Waterfront lifestyle", "Downsizers", "Urban convenience"],
    housingTypes: ["Condos", "Mixed-use residential", "Some older townhomes"],
    tradeOffs: [
      "Premium pricing relative to other Port Moody areas",
      "Limited greenspace outside of Rocky Point",
      "Some buildings are older; review mechanical and envelope condition carefully",
      "Strata fees apply; vary by building and amenity level",
      "Parking can be limited; confirm for the specific unit"
    ],

    schools: [],
    schoolVerificationNote: "School assignment varies by specific address. Use the SD43 School Locator (https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx) to verify for your exact address.",

    parks: [
      {
        name: "Rocky Point Park",
        features: ["Waterfront access", "Walking trails", "Events and community spaces", "Picnic areas"],
        distance: "Walking distance"
      }
    ],

    trails: [
      {
        name: "Shoreline Trail",
        type: "walking",
        difficulty: "easy"
      }
    ],

    transitAndAccess: "Excellent transit access. Near Moody Centre SkyTrain station and TransLink bus routes. Walkable to most daily needs. Car optional for many residents.",
    walkabilityNotes: "Highest walkability in Port Moody. Restaurants, cafes, shops, and Rocky Point Park are accessible on foot. Transit is close. Most daily needs accessible without a car.",

    buyerNotes: [
      "Some buildings are older; review envelope condition, mechanical systems, and elevator status carefully",
      "Verify strata fees, reserve funds, bylaws, depreciation report, and any outstanding levies before writing",
      "Parking and storage allocation vary by unit; confirm for the specific property",
      "Premium pricing means careful comparison of value, condition, and strata health is important",
      "Verify school assignment with SD43 for the specific address"
    ],

    sellerNotes: [
      "Highlight walkability, waterfront access, and lifestyle appeal: this is the strongest sell",
      "Emphasize Rocky Point Park proximity and restaurants within walking distance",
      "Feature building condition and any recent upgrades to justify pricing",
      "Market to lifestyle-focused buyers, downsizers, and urban professionals",
      "Have strata documents, parking, storage, amenity, and upgrade details ready before buyers compare similar walkable options"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: {
      mode: "fallback",
      disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included."
    },

    photoStatus: "not_started",
    mapLabel: "Newport Village",
    seoTitle: "Newport Village Port Moody Neighbourhood Guide",
    seoDescription: "Newport Village Port Moody neighbourhood guide preview featuring walkability, waterfront access, condos, and Rocky Point Park.",

    faq: [
      {
        question: "How walkable is Newport Village?",
        answer: "Newport Village is Port Moody's most walkable neighbourhood. Restaurants, cafes, shops, Rocky Point Park, and transit are all accessible on foot. It suits buyers who want to minimize car dependence."
      },
      {
        question: "What should buyers know about building condition in Newport Village?",
        answer: "Some buildings in Newport Village are older. Review the strata depreciation report, reserve fund balance, and any envelope or mechanical work history. Confirm elevator condition and strata fees for the specific building before making a decision."
      },
      {
        question: "Why is Newport Village priced higher than other Port Moody areas?",
        answer: "Newport Village tends to carry a premium due to its walkability, waterfront access, and Rocky Point Park proximity. Buyers should compare that premium against the condition and strata health of the specific building."
      },
      {
        question: "Is Newport Village a good fit for car-light living?",
        answer: "Newport Village can work well for a car-light lifestyle because shops, services, parks, and transit are nearby. Buyers should still verify parking, transit routes, building access, and daily routines for the specific address."
      },
      {
        question: "What should sellers prepare in Newport Village?",
        answer: "Sellers should prepare strata documents, building-work history, parking and storage details, upgrade notes, and lifestyle context. Buyers often compare several walkable buildings closely."
      }
    ],
    latitude: 49.283,
    longitude: -122.824
  },

  {
    name: "Klahanie",
    slug: "klahanie",
    municipality: "Port Moody",
    areaType: "port_moody_neighbourhood",
    status: "preview",

    shortSummary: "Established Port Moody community with condos, townhomes, parks, and access to the waterfront.",
    intro: "Klahanie is an established Port Moody neighbourhood with a mix of condos and townhomes, good access to parks, trails, and the waterfront, and moderate walkability. It offers a balanced option between central village areas and quieter hillside neighbourhoods. This guide is a neighbourhood preview, information is being expanded.",

    bestFor: ["Condos and townhomes", "Waterfront and trail access", "Established community feel", "Moderate walkability"],
    housingTypes: ["Condos", "Townhomes", "Some detached homes"],
    tradeOffs: [
      "Mix of building ages; strata condition varies significantly",
      "Strata fees apply; review depreciation reports and reserve funds",
      "Some buildings require careful mechanical and envelope review",
      "Parking and storage vary by unit; confirm for the specific property"
    ],

    schools: [],
    schoolVerificationNote: "School assignment varies by specific address. Use the SD43 School Locator (https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx) to verify for your exact address.",

    parks: [
      {
        name: "Rocky Point Park area",
        features: ["Waterfront access", "Walking trails", "Community spaces"],
        distance: "Accessible from many Klahanie addresses"
      }
    ],

    trails: [
      {
        name: "Inlet trail connections",
        type: "walking",
        difficulty: "easy"
      }
    ],

    transitAndAccess: "Good transit access via TransLink. Near Moody Centre and Inlet Centre SkyTrain stations. Walkable to some amenities; car useful for others.",
    walkabilityNotes: "Moderate walkability. Some daily needs accessible on foot; other errands require a car or transit. Better for lifestyle access to parks and waterfront than for urban daily convenience.",

    buyerNotes: [
      "Building age varies; some condos and townhomes are older and require careful strata review",
      "Review depreciation report, reserve fund balance, strata fees, bylaws, and pending levies",
      "Parking and storage allocation vary by unit; confirm for the specific property",
      "Compare buildings and complexes carefully. Strata health varies significantly",
      "Verify school assignment with SD43 for the specific address"
    ],

    sellerNotes: [
      "Highlight waterfront and park access, community character, and established setting",
      "Emphasize strata health and building condition if strong",
      "Market to buyers who want a central Port Moody lifestyle without maximum urban density",
      "Be transparent about building age and strata context",
      "Prepare clear documentation for amenities, parking, storage, strata fees, bylaws, and any recent capital work"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: {
      mode: "fallback",
      disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included."
    },

    photoStatus: "not_started",
    mapLabel: "Klahanie",
    seoTitle: "Klahanie Port Moody Neighbourhood Guide",
    seoDescription: "Klahanie Port Moody neighbourhood guide preview featuring condos, townhomes, waterfront access, and established community character.",

    faq: [
      {
        question: "What type of housing is in Klahanie?",
        answer: "Klahanie has a mix of condos, townhomes, and some detached homes. Building age and strata condition vary; compare specific buildings and complexes carefully before purchasing."
      },
      {
        question: "What should strata buyers check in Klahanie?",
        answer: "Review the depreciation report, reserve fund balance, strata fees, bylaws, and any pending levies for each specific building or complex. Some properties are older and require careful mechanical and envelope review."
      },
      {
        question: "Which schools serve Klahanie?",
        answer: "School assignment varies by exact address. Verify with SD43 before relying on any school assumption."
      },
      {
        question: "How does Klahanie compare with Newport Village or Suter Brook?",
        answer: "Klahanie can feel more residential while still offering access to parks, waterfront areas, and transit. Buyers should compare building age, strata health, walkability, and the specific daily routine they want."
      },
      {
        question: "What should sellers highlight in Klahanie?",
        answer: "Sellers should highlight community feel, park and waterfront access, strata health, parking, storage, amenities, and any recent updates. Buyers will often compare several strata options in central Port Moody."
      }
    ],
    latitude: 49.276,
    longitude: -122.824
  },

  {
    name: "Ioco / North Shore",
    slug: "ioco-north-shore",
    municipality: "Port Moody",
    areaType: "port_moody_neighbourhood",
    status: "preview",

    shortSummary: "A distinctive waterfront area on Port Moody's north shore with scenic Inlet views and a quiet, car-dependent character.",
    intro: "The Ioco and north shore area is one of Port Moody's most distinctive and scenic pockets, with winding roads, Burrard Inlet views, detached homes, and a strong sense of separation from the more urban core. It appeals to buyers who value privacy, character, and a quieter lifestyle over daily walkability and transit access. This guide is a neighbourhood preview, information is being expanded.",

    bestFor: ["Privacy seekers", "Waterfront character", "Quiet residential living", "Nature-oriented buyers"],
    housingTypes: ["Detached homes", "Established residential properties"],
    tradeOffs: [
      "Very car-dependent; limited transit access",
      "Winding roads can be a consideration in winter or with mobility needs",
      "Further from central Port Moody amenities, SkyTrain, and services",
      "Limited daily walkable services",
      "Verify school assignment by exact address"
    ],

    schools: [],
    schoolVerificationNote: "School assignment varies by specific address. Use the SD43 School Locator (https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx) to verify for your exact address.",

    parks: [
      {
        name: "Port Moody waterfront and north shore access",
        features: ["Inlet views", "Waterfront character", "Quiet residential setting"],
        distance: "Varies by address"
      }
    ],

    trails: [
      {
        name: "North shore area paths",
        type: "walking",
        difficulty: "moderate"
      }
    ],

    transitAndAccess: "Limited transit access. Car essential for most daily errands, shopping, and services. Access involves winding roads; verify road conditions and access for specific addresses.",
    walkabilityNotes: "Very limited walkability for daily needs. The area's appeal is its scenic character and privacy rather than urban convenience. Most residents drive for all errands and services.",

    buyerNotes: [
      "Car access and road conditions should be assessed for the specific property and route",
      "Review home condition: roof, foundation, drainage, exterior, and any renovation history",
      "Verify school assignment with SD43 for the exact address",
      "Assess travel routes given distance from SkyTrain and central Port Moody",
      "Verify utility access, septic or sewer status, and services for the specific property"
    ],

    sellerNotes: [
      "Highlight scenic character, privacy, inlet views, and the distinctive nature of the area",
      "Be transparent about car dependence and distance from urban amenities",
      "Market to buyers seeking privacy, character, and a quieter lifestyle",
      "Use cautious school language and direct buyers to SD43 verification",
      "Prepare clear information on utilities, access, drainage, and property maintenance because buyers will scrutinize practical trade-offs"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: {
      mode: "fallback",
      disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included."
    },

    photoStatus: "not_started",
    mapLabel: "Ioco / North Shore",
    seoTitle: "Ioco North Shore Port Moody Neighbourhood Guide",
    seoDescription: "Ioco and North Shore Port Moody neighbourhood guide preview featuring waterfront character, scenic views, quiet living, and buyer notes.",

    faq: [
      {
        question: "Is the Ioco / North Shore area walkable?",
        answer: "No. The area is very car-dependent. There is limited transit and the roads are winding. Most residents drive for all daily needs. The appeal is privacy, character, and scenic surroundings rather than urban convenience."
      },
      {
        question: "What should buyers check when buying in Ioco or the north shore?",
        answer: "Review road access conditions, home condition, roof, drainage, and any utility or service considerations for the specific property. Verify school assignment with SD43. Assess travel routes given the distance from SkyTrain and central Port Moody."
      },
      {
        question: "Who is this area a good fit for?",
        answer: "The Ioco and north shore area suits buyers who strongly value privacy, scenic surroundings, and a quieter lifestyle, and who are comfortable with car dependence and distance from urban services."
      },
      {
        question: "What practical issues matter in Ioco or the north shore?",
        answer: "Road access, utilities, drainage, tree cover, service access, and property condition should be reviewed carefully. The lifestyle can be appealing, but it is not a substitute for property-specific due diligence."
      },
      {
        question: "How should sellers position an Ioco or north shore home?",
        answer: "Sellers should highlight privacy, views, character, and outdoor setting while being transparent about car dependence, access, and distance from central amenities."
      }
    ],
    latitude: 49.306,
    longitude: -122.891
  },

  {
    name: "Barber Street",
    slug: "barber-street",
    municipality: "Port Moody",
    areaType: "port_moody_neighbourhood",
    status: "preview",

    shortSummary: "A highly desirable Port Moody neighbourhood with stunning inlet views, larger properties, and waterfront access.",
    intro: "Barber Street is a highly desirable Port Moody neighbourhood known for its stunning inlet views, larger properties, and peaceful atmosphere with quick access to Old Orchard Park and nearby waterfront areas.",
    overviewParagraph: "Barber Street is a highly desirable Port Moody neighbourhood known for its stunning inlet views, larger properties, and peaceful atmosphere. Families in the area often fall within catchments including Pleasantside Elementary School and Port Moody Secondary School. Residents enjoy quick access to Old Orchard Park and nearby waterfront areas.",
    whatMakesItSpecial: "What makes Barber Street special is its unique mix of privacy, nature, and incredible water views while remaining only minutes from shops, restaurants, and transit.",

    bestFor: ["Inlet views", "Larger properties", "Waterfront access", "Peaceful atmosphere"],
    housingTypes: ["Detached homes", "Some townhomes"],
    tradeOffs: [
      "Limited daily walkability; most errands require a car",
      "Older housing stock; review condition and renovation history",
      "Limited walkable amenities",
      "Verify school assignment by exact address"
    ],

    schools: [
      {
        name: "Pleasantside Elementary School",
        type: "elementary",
        assignmentNote: "Verify exact address assignment with SD43",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      },
      {
        name: "Port Moody Secondary School",
        type: "secondary",
        assignmentNote: "Verify exact address assignment with SD43",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      }
    ],
    schoolVerificationNote: "School catchments can change. Verify current boundaries directly with School District 43 (SD43) for your exact address.",

    parks: [
      {
        name: "Old Orchard Park",
        features: ["Waterfront access", "Beaches", "Walking paths"],
        distance: "Nearby"
      },
      {
        name: "Local neighbourhood parks",
        features: ["Community green spaces", "Nearby recreation access"],
        distance: "Varies by address"
      }
    ],

    trails: [
      {
        name: "Local walking paths",
        type: "walking",
        difficulty: "easy"
      }
    ],

    transitAndAccess: "Local TransLink bus routes available; car useful for most daily needs. Convenient Barnet Highway access for commuting toward Burnaby and Vancouver or SFU.",
    walkabilityNotes: "Limited daily walkability. Most residents drive for groceries, shopping, and services. Convenient road access toward Barnet Highway is a practical strength for car-commuting households.",

    buyerNotes: [
      "Review home condition: roof, foundation, drainage, exterior, plumbing, and any renovation history",
      "Older housing stock is common; assess condition carefully before purchasing",
      "Verify school assignment with SD43 for the specific address",
      "Check commute routes toward Barnet Highway, Burnaby, and central Port Moody",
      "Confirm parking and outdoor space for the specific property"
    ],

    sellerNotes: [
      "Highlight Barnet Highway access and west-side commute convenience",
      "Emphasize quiet residential streets and established neighbourhood character",
      "Feature property-specific strengths: lot size, updates, parking, outdoor space",
      "Use cautious school language and direct buyers to SD43 verification",
      "Prepare maintenance, update, and condition details for older homes before launch"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: {
      mode: "fallback",
      disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included."
    },

    photoStatus: "not_started",
    mapLabel: "Barber Street",
    seoTitle: "Barber Street Port Moody Neighbourhood Guide",
    seoDescription: "Barber Street Port Moody neighbourhood guide preview featuring established detached homes, west-side access, and buyer notes.",

    faq: [
      {
        question: "Who is Barber Street a good fit for?",
        answer: "Barber Street suits buyers who want a quieter west Port Moody residential setting with convenient Barnet Highway access. It may appeal to car-commuting households going toward Burnaby, SFU, or Vancouver."
      },
      {
        question: "What should buyers check in Barber Street?",
        answer: "Review home condition carefully, especially for older properties: roof, foundation, drainage, plumbing, electrical, and any renovation history. Verify school assignment with SD43 for the specific address."
      },
      {
        question: "Is Barber Street walkable?",
        answer: "No. Barber Street has limited daily walkability. Most residents drive for errands and services. The practical appeal is Barnet Highway access and established residential character rather than walkability."
      },
      {
        question: "How does Barber Street compare with College Park?",
        answer: "Barber Street may feel less hillside-oriented than some College Park streets, while still offering west-side access. Buyers should compare exact road access, grade, home condition, and daily routes."
      },
      {
        question: "What should sellers prepare in Barber Street?",
        answer: "Sellers should prepare renovation history, roof and system details, drainage or exterior maintenance notes, parking details, and clear school-verification language."
      }
    ],
    latitude: 49.279,
    longitude: -122.860
  },

  {
    name: "Seaview",
    slug: "seaview",
    municipality: "Port Moody",
    areaType: "port_moody_neighbourhood",
    status: "preview",

    shortSummary: "Quiet north-shore Port Moody neighbourhood with detached homes, forest access, and a very car-dependent character.",
    intro: "Seaview is one of Port Moody's quietest and most car-dependent neighbourhoods, situated on the north shore with access to Sasamat Lake, forest trails, and a peaceful residential setting. It appeals to buyers who strongly value nature access, privacy, and quiet over urban convenience. This guide is a neighbourhood preview, information is being expanded.",

    bestFor: ["Nature-oriented buyers", "Privacy", "Forest trail access", "Quiet residential living"],
    housingTypes: ["Detached homes"],
    tradeOffs: [
      "Very car-dependent; no meaningful walkable amenities",
      "Furthest from SkyTrain of Port Moody's residential areas",
      "Limited transit access",
      "Distance from central Port Moody services and shopping",
      "Verify school assignment by exact address"
    ],

    schools: [],
    schoolVerificationNote: "School assignment varies by specific address. Use the SD43 School Locator (https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx) to verify for your exact address.",

    parks: [
      {
        name: "Sasamat Lake and regional parks",
        features: ["Lake access", "Forest trails", "Nature-based recreation"],
        distance: "Near for many addresses"
      }
    ],

    trails: [
      {
        name: "Forest and regional trail network",
        type: "hiking",
        difficulty: "moderate"
      }
    ],

    transitAndAccess: "Very limited transit access. Car essential for all daily errands, shopping, and services. Distance from SkyTrain stations requires driving or a long bus connection.",
    walkabilityNotes: "Not walkable for daily needs. The area's appeal is nature access, Sasamat Lake, forest trails, and privacy, not urban convenience. All residents drive for errands.",

    buyerNotes: [
      "Review home condition: roof, foundation, drainage, exterior, and any renovation history",
      "Assess daily travel routes carefully given distance from SkyTrain and central services",
      "Verify school assignment with SD43 for the specific address",
      "Check utility access, road conditions, and any service considerations for the property",
      "Sasamat Lake and trail access are the primary lifestyle advantages; verify access for your address"
    ],

    sellerNotes: [
      "Highlight Sasamat Lake access, forest trails, privacy, and nature-based lifestyle",
      "Be transparent about car dependence and distance from SkyTrain and urban services",
      "Market to nature-oriented buyers who are comfortable with the lifestyle trade-offs",
      "Emphasize property-specific strengths: lot, privacy, views, outdoor space"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: {
      mode: "fallback",
      disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included."
    },

    photoStatus: "not_started",
    mapLabel: "Seaview",
    seoTitle: "Seaview Port Moody Neighbourhood Guide",
    seoDescription: "Seaview Port Moody neighbourhood guide preview featuring quiet north-shore living, Sasamat Lake access, forest trails, and buyer notes.",

    faq: [
      {
        question: "Who is Seaview a good fit for?",
        answer: "Seaview suits buyers who strongly value nature access, privacy, Sasamat Lake, and forest trails, and who are comfortable being very car-dependent with limited transit access."
      },
      {
        question: "How should buyers think about SkyTrain access from Seaview?",
        answer: "Seaview is one of Port Moody's least transit-oriented residential areas. Buyers should check the exact route from the property to SkyTrain, work, schools, and daily services before relying on any access assumption."
      },
      {
        question: "What should buyers check in Seaview?",
        answer: "Review home condition carefully. Check road access, utility services, daily travel routes, and park or trail access for the exact property. Verify school assignment with SD43 for the specific address."
      },
      {
        question: "What should sellers highlight in Seaview?",
        answer: "Sellers should highlight privacy, nature access, outdoor space, and property-specific condition while being clear about car dependence and distance from daily services."
      },
      {
        question: "Should buyers verify park and trail details?",
        answer: "Yes. Park access, trail access, amenities, and conditions can change. Verify current details through the applicable municipal or regional source before relying on a lifestyle assumption."
      }
    ],
    latitude: 49.308,
    longitude: -122.862
  },

  {
    name: "North Shore Port Moody",
    slug: "north-shore-port-moody",
    municipality: "Port Moody",
    areaType: "port_moody_neighbourhood",
    status: "preview",

    shortSummary: "A waterfront area with character homes, relaxed community feel, and access to Old Orchard Park and Rocky Point Park.",
    intro: "North Shore Port Moody offers a unique blend of waterfront living, character homes, and a relaxed community feel with access to parks, beaches, and walking paths along the inlet.",
    overviewParagraph: "North Shore Port Moody offers a unique blend of waterfront living, character homes, and a relaxed community feel. The area provides access to school catchments such as Pleasantside Elementary School and Port Moody Secondary School. Residents love being close to Old Orchard Park and Rocky Point Park where beaches, walking paths, and waterfront activities create an incredible lifestyle.",
    whatMakesItSpecial: "What makes North Shore Port Moody special is its laid-back atmosphere and feeling of being tucked away in nature while remaining close to the city.",

    bestFor: ["Waterfront lifestyle", "Character homes", "Privacy seekers", "Nature-oriented buyers"],
    housingTypes: ["Detached homes", "Character properties"],
    tradeOffs: [
      "Car-dependent for most daily errands",
      "Limited transit access compared to central areas",
      "Winding roads; verify access for your specific property",
      "Verify school assignment by exact address"
    ],

    schools: [
      {
        name: "Pleasantside Elementary School",
        type: "elementary",
        assignmentNote: "Verify exact address assignment with SD43",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      },
      {
        name: "Port Moody Secondary School",
        type: "secondary",
        assignmentNote: "Verify exact address assignment with SD43",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      }
    ],
    schoolVerificationNote: "School catchments can change. Verify current boundaries directly with School District 43 (SD43) for your exact address.",

    parks: [
      {
        name: "Old Orchard Park",
        features: ["Beaches", "Walking paths", "Waterfront activities"],
        distance: "Nearby"
      },
      {
        name: "Rocky Point Park",
        features: ["Waterfront access", "Walking trails", "Community spaces"],
        distance: "Nearby"
      }
    ],

    trails: [
      {
        name: "North shore waterfront paths",
        type: "walking",
        difficulty: "easy"
      }
    ],

    transitAndAccess: "Limited transit access. Car helpful for most daily errands and services. Verify specific transit options for your exact address.",
    walkabilityNotes: "Limited daily walkability. The area's appeal is its waterfront character and proximity to parks rather than urban convenience. Most residents drive for errands and services.",

    buyerNotes: [
      "Review home condition: roof, foundation, drainage, exterior, and any renovation history",
      "Verify school assignment with SD43 for the exact address",
      "Assess travel routes given the distance from SkyTrain and central Port Moody",
      "Check road access conditions for the specific property"
    ],

    sellerNotes: [
      "Highlight waterfront character, views, privacy, and park proximity",
      "Be transparent about car dependence and distance from urban amenities",
      "Market to buyers seeking a relaxed, nature-oriented lifestyle"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: {
      mode: "fallback",
      disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included."
    },

    photoStatus: "not_started",
    mapLabel: "North Shore Port Moody",
    seoTitle: "North Shore Port Moody Neighbourhood Guide",
    seoDescription: "North Shore Port Moody neighbourhood guide featuring waterfront living, character homes, Old Orchard Park, Rocky Point Park, and community lifestyle.",

    faq: [
      {
        question: "What makes North Shore Port Moody different from other areas?",
        answer: "North Shore Port Moody has a laid-back, waterfront character with access to Old Orchard Park and Rocky Point Park. It offers privacy and a relaxed atmosphere while remaining close to central Port Moody."
      },
      {
        question: "Which schools serve North Shore Port Moody?",
        answer: "School catchments commonly include Pleasantside Elementary School and Port Moody Secondary School. Verify exact assignment with SD43 for your specific address before relying on any school assumption."
      },
      {
        question: "Is North Shore Port Moody walkable?",
        answer: "No. The area is car-dependent for daily errands. Its appeal is waterfront access, park proximity, and a relaxed community feel rather than walkable urban convenience."
      }
    ],
    latitude: 49.295,
    longitude: -122.876
  },

  // Keep this draft (slug does not match any active sprint target route)
  {
    name: "North Shore / Ioco / Pleasantside",
    slug: "north-shore-ioco-pleasantside",
    municipality: "Port Moody",
    areaType: "port_moody_neighbourhood",
    status: "draft",

    shortSummary: "Combined north shore, Ioco, and Pleasantside area context.",
    intro: "Combined area context for north shore, Ioco, and Pleasantside. This entry is retained for reference; see individual area guides for active routes.",

    bestFor: [],
    housingTypes: ["Detached homes"],
    tradeOffs: [],

    schools: [],
    schoolVerificationNote: "Verify school assignment with SD43 for specific addresses",
    parks: [],
    trails: [],
    transitAndAccess: "Varies by specific address",
    walkabilityNotes: "Varies by specific address",

    buyerNotes: [],
    sellerNotes: [],
    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: { mode: "none" },

    photoStatus: "not_started",
    mapLabel: "North Shore / Ioco",
    seoTitle: "North Shore Port Moody Area Guide",
    seoDescription: "North shore, Ioco, and Pleasantside area guide for Port Moody.",

    faq: [],
    latitude: 49.31,
    longitude: -122.88
  },

  // =============================================================================
  // NEARBY COMMUNITIES
  // =============================================================================

  {
    name: "Anmore",
    slug: "anmore",
    municipality: "Anmore",
    areaType: "nearby_community",
    status: "preview",

    shortSummary: "A quiet rural municipality adjacent to Port Moody with estate-style properties, Buntzen Lake access, and a country-style lifestyle.",
    intro: "Anmore is a separate rural municipality adjacent to Port Moody, offering estate-style properties, larger lots, and a forested setting with access to Buntzen Lake and extensive hiking and biking trails.",
    overviewParagraph: "Anmore offers a unique lifestyle for those looking for privacy, space, and a connection to nature. Known for its estate-style properties and larger lots, the area attracts families seeking a quieter pace of life. School catchments often include Anmore Elementary School and Heritage Woods Secondary School. Outdoor lovers appreciate being close to Buntzen Lake and countless hiking and biking trails.",
    whatMakesItSpecial: "What makes Anmore special is the rare opportunity to enjoy country-style living while remaining just minutes from Port Moody amenities and transit.",

    bestFor: ["Estate-style properties", "Privacy seekers", "Nature and trail access", "Larger lots"],
    housingTypes: ["Detached homes on larger lots", "Some acreage properties"],
    tradeOffs: [
      "Separate municipality: taxes, bylaws, and services differ from Port Moody",
      "Very car-dependent; no transit and no walkable services",
      "School district may differ from Port Moody SD43; verify for your address",
      "Longer commute to Port Moody core, SkyTrain, and regional services",
      "Limited local amenities; most services require driving to Port Moody or Coquitlam"
    ],

    schools: [
      {
        name: "Anmore Elementary School",
        type: "elementary",
        assignmentNote: "Verify exact address assignment. Anmore is a separate municipality, school district may differ from SD43",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      },
      {
        name: "Heritage Woods Secondary School",
        type: "secondary",
        assignmentNote: "Verify exact address assignment with the applicable school district",
        district: "School District 43 (Coquitlam)",
        verificationLink: "https://www.sd43.bc.ca"
      }
    ],
    schoolVerificationNote: "Anmore is a separate municipality. School district assignment may differ from Port Moody SD43. Verify school assignment by exact address before making any assumptions.",

    parks: [
      {
        name: "Buntzen Lake",
        features: ["Swimming", "Hiking and biking trails", "Nature-based recreation"],
        distance: "Nearby"
      },
      {
        name: "Regional park and trail access",
        features: ["Forest trails", "Nature access", "Regional park connections"],
        distance: "Varies by property"
      }
    ],

    trails: [
      {
        name: "Regional trail connections",
        type: "hiking",
        difficulty: "moderate"
      }
    ],

    transitAndAccess: "No local transit. Car essential for all errands, services, and commuting. Access to Port Moody core, SkyTrain, and regional services requires driving.",
    walkabilityNotes: "Not walkable. Anmore has no local shops, services, or transit. All residents drive for everything. This is a rural setting where the appeal is land, privacy, and nature rather than any form of urban convenience.",

    buyerNotes: [
      "Anmore is a separate municipality. Verify taxes, bylaws, and applicable regulations separately from Port Moody",
      "School assignment may differ from Port Moody SD43; verify for your specific address",
      "Assess daily travel routes carefully given distance from SkyTrain and Port Moody core",
      "Review property access, road conditions, septic or sewer status, and utility services",
      "Larger lots and acreage require property-specific inspection of land, drainage, and condition"
    ],

    sellerNotes: [
      "Highlight land size, privacy, forest setting, and nature access",
      "Be transparent about car dependence, separate municipality status, and distance from services",
      "Market to buyers who specifically want rural acreage and privacy",
      "Use cautious school language; direct buyers to verify the applicable school district",
      "Prepare clear information on water, septic or sewer, access, bylaws, taxes, and property maintenance before launch"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: {
      mode: "fallback",
      disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included."
    },

    photoStatus: "not_started",
    mapLabel: "Anmore",
    seoTitle: "Anmore Nearby Community Guide",
    seoDescription: "Anmore nearby community guide preview: a rural municipality adjacent to Port Moody with larger lots, acreage, and forest setting.",

    faq: [
      {
        question: "Is Anmore part of Port Moody?",
        answer: "No. Anmore is a separate municipality adjacent to Port Moody. It has its own municipal government, property taxes, bylaws, and services. Buyers should verify all municipal regulations separately from Port Moody."
      },
      {
        question: "Which school district serves Anmore?",
        answer: "School district assignment in Anmore may differ from Port Moody's SD43. Verify the applicable school district and exact school assignment for your specific address before making any school-related assumptions."
      },
      {
        question: "Who is Anmore a good fit for?",
        answer: "Anmore suits buyers who specifically want larger lots or acreage, forest setting, privacy, and rural character, and who are comfortable being very car-dependent with no local services."
      },
      {
        question: "Why do Port Moody-area buyers consider Anmore?",
        answer: "Some Port Moody-area buyers consider Anmore when they want more land, privacy, or a rural feel while staying near the broader Tri-Cities area. It should still be evaluated as a separate municipality."
      },
      {
        question: "What should buyers verify before considering Anmore?",
        answer: "Verify municipal bylaws, taxes, services, water, septic or sewer, road access, school district, and daily travel routes for the exact property."
      }
    ],
    latitude: 49.333,
    longitude: -122.840
  },

  {
    name: "Belcarra",
    slug: "belcarra",
    municipality: "Belcarra",
    areaType: "nearby_community",
    status: "preview",

    shortSummary: "One of the Lower Mainland's most scenic communities, centered around nature and Belcarra Regional Park.",
    intro: "Belcarra is one of the Lower Mainland's most scenic communities, offering a lifestyle centered around nature and outdoor recreation, with Belcarra Regional Park, hiking trails, beaches, and kayaking on the doorstep.",
    overviewParagraph: "Belcarra is one of the Lower Mainland's most scenic communities, offering a lifestyle centered around nature and outdoor recreation. Families living here often access nearby Port Moody school catchments while enjoying a quieter, rural atmosphere. Residents are surrounded by natural beauty including Belcarra Regional Park, hiking trails, beaches, and kayaking opportunities.",
    whatMakesItSpecial: "What makes Belcarra special is its breathtaking coastal setting and the feeling of escaping city life while being only a short drive from Port Moody.",

    bestFor: ["Coastal and nature lifestyle", "Privacy seekers", "Belcarra Regional Park access", "Outdoor recreation"],
    housingTypes: ["Detached homes", "Some waterfront properties"],
    tradeOffs: [
      "Separate and very small municipality, minimal local services",
      "Extremely car-dependent; no transit",
      "No local shops, restaurants, or daily services within Belcarra",
      "School district differs from Port Moody SD43; verify for your address",
      "Very long commute to SkyTrain and urban services"
    ],

    schools: [],
    schoolVerificationNote: "Belcarra is a separate municipality. School district assignment differs from Port Moody SD43. Verify school assignment by exact address before making any assumptions.",

    parks: [
      {
        name: "Belcarra Regional Park",
        features: ["Waterfront access", "Forest trails", "Picnic areas", "Nature-based recreation"],
        distance: "Adjacent to community"
      }
    ],

    trails: [
      {
        name: "Regional park trails",
        type: "hiking",
        difficulty: "moderate"
      }
    ],

    transitAndAccess: "No local transit. Car essential for all needs. All services, shopping, and commuting require driving to Port Moody or Coquitlam.",
    walkabilityNotes: "Not walkable. There are no local services within Belcarra. All residents drive for everything. The appeal is nature, Belcarra Regional Park, and privacy.",

    buyerNotes: [
      "Belcarra is a separate municipality. Verify taxes, bylaws, and regulations independently",
      "School assignment differs from Port Moody SD43; verify for your specific address",
      "Assess daily travel routes carefully; SkyTrain and urban services require significant driving",
      "Review property access, utilities, septic status, and road conditions for the specific property",
      "Very few properties become available; verify current condition and maintenance carefully"
    ],

    sellerNotes: [
      "Highlight park access, waterfront character, privacy, and the retreat-like setting",
      "Be transparent about the lack of local services, car dependence, and separate municipality status",
      "Market to a narrow range of buyers specifically seeking remote privacy and nature",
      "Use cautious school language; direct buyers to verify the applicable school district",
      "Prepare clear information on utilities, access, road conditions, maintenance, and municipal context before launch"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: {
      mode: "fallback",
      disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included."
    },

    photoStatus: "not_started",
    mapLabel: "Belcarra",
    seoTitle: "Belcarra Nearby Community Guide",
    seoDescription: "Belcarra nearby community guide preview: a remote municipality adjacent to Port Moody near Belcarra Regional Park with waterfront character.",

    faq: [
      {
        question: "Is Belcarra part of Port Moody?",
        answer: "No. Belcarra is a separate and very small municipality adjacent to Port Moody. It has its own government, taxes, and bylaws. Buyers should verify all municipal regulations separately."
      },
      {
        question: "Which school district serves Belcarra?",
        answer: "Belcarra has its own school district assignment separate from Port Moody SD43. Verify the applicable school district and exact assignment for your specific address before making any assumptions."
      },
      {
        question: "Who is Belcarra a good fit for?",
        answer: "Belcarra suits a very narrow range of buyers who specifically want maximum privacy, Belcarra Regional Park access, waterfront character, and remote living, and who are completely comfortable with car dependence and no local services."
      },
      {
        question: "Why do Port Moody-area buyers consider Belcarra?",
        answer: "Some Port Moody-area buyers consider Belcarra when they want a remote, nature-oriented setting near the broader inlet area. It should be evaluated as a separate municipality, not as a Port Moody neighbourhood."
      },
      {
        question: "What should buyers verify before considering Belcarra?",
        answer: "Verify municipal bylaws, taxes, services, utilities, road access, school district, park or trail access, and daily travel routes for the exact property."
      }
    ],
    latitude: 49.317,
    longitude: -122.905
  }
];

// Utility to find a guide by slug
export function getNeighbourhoodGuide(slug: string): NeighbourhoodGuide | undefined {
  return neighbourhoodGuides.find(guide => guide.slug === slug);
}

// Utility to get all published guides
export function getPublishedGuides(): NeighbourhoodGuide[] {
  return neighbourhoodGuides.filter(guide => guide.status === "published");
}

// Utility to get all Port Moody neighbourhoods
export function getPortMoodyNeighbourhoods(): NeighbourhoodGuide[] {
  return neighbourhoodGuides.filter(guide => guide.areaType === "port_moody_neighbourhood");
}
