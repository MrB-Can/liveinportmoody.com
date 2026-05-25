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
  type: "elementary" | "secondary" | "k-12";
  catchmentNote?: string;
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
    intro: "Heritage Mountain is a hillside Port Moody neighbourhood known for mature townhouse complexes and detached homes set among forest, established trees, and trail networks. It has a quieter, more residential feel than central Port Moody areas, with limited daily walkability but strong appeal for families seeking space, privacy, and nature access.",

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
        name: "Glenayre Elementary",
        type: "elementary",
        catchmentNote: "Some homes may fall within catchment; verify with SD43",
        district: "School District 43 (Port Moody)",
        verificationLink: "https://www.sd43.bc.ca"
      }
    ],
    schoolVerificationNote: "School catchments change; always verify exact address with SD43 before assuming enrollment.",

    parks: [
      {
        name: "Heritage Mountain Trail System",
        features: ["Walking trails", "Forest paths", "Viewpoints"],
        distance: "Within neighbourhood"
      },
      {
        name: "Port Moody Parks & Trails Network",
        features: ["Regional trails", "Parks", "Waterfront access"],
        distance: "Nearby"
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
      "Consider proximity to schools but verify catchment separately"
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
      disclosure: "GVR area search limited to active listings; verify neighbourhood designation with realtor"
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

    shortSummary: "Newer neighbourhood development with mixed housing types, parks, and growing community character.",
    intro: "Heritage Woods is a developing Port Moody neighbourhood featuring newer construction, diverse housing options, and accessible parks. It appeals to buyers seeking newer homes in a neighbourhood with growing amenities and character. The community continues to evolve while offering schools nearby and outdoor recreation. Verify school catchments for your specific address with SD43.",

    bestFor: ["New construction buyers", "Growing families", "Modern home seekers", "Value-conscious buyers"],
    housingTypes: ["Detached homes", "Townhouses", "Some condos"],
    tradeOffs: [
      "Ongoing development and construction activity",
      "Neighbourhood character still establishing",
      "Some amenities still developing"
    ],

    schools: [
      {
        name: "Glenayre Elementary",
        type: "elementary",
        catchmentNote: "Some homes in the area may be associated with this school; verify exact address with SD43 School Locator",
        district: "School District 43 (Port Moody)",
        verificationLink: "https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx"
      }
    ],
    schoolVerificationNote: "School assignment and catchments vary by specific property address. Use the SD43 School Locator (https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx) or contact SD43 directly before relying on any school assignment.",

    parks: [
      {
        name: "Port Moody Parks Network",
        features: ["Community parks", "Playgrounds", "Recreation areas"],
        distance: "Within neighbourhood and nearby"
      },
      {
        name: "Moody Park",
        features: ["Athletic fields", "Trails", "Picnic areas"],
        distance: "Nearby"
      }
    ],

    trails: [
      {
        name: "Port Moody trail system",
        type: "multi-use",
        difficulty: "easy"
      },
      {
        name: "Neighbourhood pedestrian paths",
        type: "walking",
        difficulty: "easy"
      }
    ],

    transitAndAccess: "Bus access via local TransLink routes. Transit connectivity developing with neighbourhood growth. Verify specific transit options for exact address.",
    walkabilityNotes: "Walkability increasing as neighbourhood matures. Local parks and trails accessible by foot from most locations. Car helpful for shopping and services outside immediate area.",

    buyerNotes: [
      "Review new home warranty coverage and builder reputation",
      "Check property location relative to schools and transit",
      "Verify property taxes and assess future development plans",
      "Ensure parking, storage, and outdoor space meet needs",
      "Consider proximity to parks and outdoor recreation"
    ],

    sellerNotes: [
      "Highlight modern finishes, energy efficiency, and construction quality",
      "Emphasize newer homes, nearby schools, and accessible parks",
      "Market to first-time buyers and growing families",
      "Showcase community amenities and transit development"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: {
      mode: "gvr_area_search",
      disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.",
      notes: "New construction homes available; check builder information"
    },

    photoStatus: "not_started",
    mapLabel: "Heritage Woods",
    seoTitle: "Heritage Woods Port Moody Neighbourhood Guide",
    seoDescription: "Heritage Woods Port Moody neighbourhood guide featuring newer construction, schools, parks, and growing community amenities.",

    faq: [
      {
        question: "What schools serve Heritage Woods?",
        answer: "School assignments for Heritage Woods vary by specific address. Some homes may be associated with Glenayre Elementary through School District 43. Verify exact school assignments for your specific address using the SD43 school locator at https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx before making assumptions about school placement."
      },
      {
        question: "What parks and outdoor recreation are nearby?",
        answer: "The neighbourhood has access to Port Moody's park system including community parks, playgrounds, and multi-use trails. Moody Park nearby offers athletic fields, trails, and picnic areas. For current parks and recreation programs, check the City of Port Moody parks page at https://www.portmoody.ca/parks-recreation-and-environment/parks/"
      },
      {
        question: "Is Heritage Woods walkable?",
        answer: "Walkability is increasing as the neighbourhood matures. Local parks and trails are accessible by foot. Shopping and dining typically require a car or transit for most locations. Verify specific walkability for your address by checking proximity to shops, transit, and services."
      },
      {
        question: "What are the main considerations for buying a newer home in Heritage Woods?",
        answer: "Check new home warranty coverage, builder reputation, and property taxes. Verify exact school assignments and transit connections for your address. Ensure parking, storage, and outdoor space meet your needs. Consider future development and neighbourhood changes as the community grows."
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
    status: "draft",

    shortSummary: "A smaller northeast Port Moody residential area with school-area context, nearby parks to verify, and access toward both Port Moody and Coquitlam amenities.",
    intro: "Mountain Meadows is a northeast Port Moody residential area often researched by buyers comparing Noons Creek, Heritage Mountain, and nearby Coquitlam-edge options. It can appeal to households looking for a quieter residential setting, but exact school assignment, park access, transit options, traffic patterns, and walkability should be verified by address.",

    bestFor: ["Families verifying schools by address", "Quiet residential buyers", "Northeast Port Moody access", "Coquitlam-edge convenience"],
    housingTypes: ["Detached homes", "Some townhouses or strata options to verify", "Residential streets with varied property ages"],
    tradeOffs: [
      "School-area convenience must be verified by exact address",
      "Possible school traffic or peak-hour activity near busier streets",
      "Less immediate commercial convenience than central Port Moody nodes",
      "Transit, slope, and walkability vary by specific street"
    ],

    schools: [
      {
        name: "Mountain Meadows Elementary",
        type: "elementary",
        catchmentNote: "Some homes may be associated with this school; school assignment varies by exact address and must be verified with SD43.",
        district: "School District 43 (Port Moody)",
        verificationLink: "https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx"
      },
      {
        name: "Heritage Woods Secondary",
        type: "secondary",
        catchmentNote: "Some northeast Port Moody addresses may be associated with this school; verify exact address with SD43 before relying on any assignment.",
        district: "School District 43 (Port Moody)",
        verificationLink: "https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx"
      },
      {
        name: "Port Moody Secondary",
        type: "secondary",
        catchmentNote: "Some Port Moody addresses may be associated with this school; verify exact address with SD43 before relying on any assignment.",
        district: "School District 43 (Port Moody)",
        verificationLink: "https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx"
      }
    ],
    schoolVerificationNote: "School assignment varies by exact address. Use the SD43 School Locator or contact SD43 directly before relying on any elementary, middle, secondary, program, or capacity assumption.",

    parks: [
      {
        name: "Mountain Meadows Field",
        features: ["Sports field context to verify", "School-area recreation context", "City source check required"],
        distance: "Nearby for some addresses; verify exact access"
      },
      {
        name: "Northeast Port Moody parks",
        features: ["Community parks to verify", "Neighbourhood recreation access", "Family recreation context"],
        distance: "Varies by address"
      }
    ],
    trails: [
      {
        name: "Noons Creek and northeast Port Moody trail context",
        type: "walking",
        difficulty: "easy"
      },
      {
        name: "Broader Port Moody trail network access",
        type: "multi-use",
        difficulty: "easy"
      }
    ],

    transitAndAccess: "Transit and road access should be checked by exact address. Some buyers may value the northeast Port Moody position for access toward both Port Moody and nearby Coquitlam amenities, but routes and convenience vary by street.",
    walkabilityNotes: "Walkability is address-specific. Some homes may have useful access to school-area or recreation destinations, while other streets may be more car-dependent. Verify walking routes, grade, crossings, and transit stops for the property.",

    buyerNotes: [
      "Verify elementary, middle, and secondary school assignment with SD43 for the exact address",
      "Check school traffic, street position, parking, and driveway usability at the specific property",
      "Compare access to Noons Creek, Heritage Mountain, and nearby Coquitlam services based on daily routines",
      "Verify nearby parks, fields, and trails through City of Port Moody sources before relying on specific amenities",
      "Assess slope, walkability, transit, and commute routes by street rather than by neighbourhood name"
    ],

    sellerNotes: [
      "Position around quiet residential feel and practical northeast Port Moody access when supported by the property",
      "Use cautious school-area language and point buyers to SD43 verification for exact assignment",
      "Highlight verified property strengths such as layout, yard usability, parking, updates, storage, and street position",
      "If relevant, address school traffic, access, or parking honestly in showing preparation",
      "Use verified park and recreation proximity rather than broad amenity claims"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: {
      mode: "fallback",
      disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.",
      notes: "Use fallback listing support until a filtered MLS Reciprocity URL is verified for Mountain Meadows."
    },

    photoStatus: "not_started",
    mapLabel: "Mountain Meadows",
    seoTitle: "Mountain Meadows Port Moody Neighbourhood Guide",
    seoDescription: "A cautious local guide to Mountain Meadows in Port Moody, including housing types, school verification notes, parks, trails, access, buyer notes, and seller notes.",

    faq: [
      {
        question: "Is Mountain Meadows mainly a family neighbourhood?",
        answer: "Mountain Meadows may appeal to families because of its residential setting and school-area context, but fit depends on exact address, housing type, school verification, traffic patterns, and daily routes."
      },
      {
        question: "Which schools serve Mountain Meadows?",
        answer: "School assignment varies by exact address. Some homes may be associated with Mountain Meadows Elementary or nearby SD43 secondary schools, but elementary, middle, and secondary assignment should be verified directly with SD43 before relying on any school assumption."
      },
      {
        question: "What parks or recreation should buyers verify?",
        answer: "Buyers should verify Mountain Meadows Field, nearby parks, and trail access through City of Port Moody sources. Amenities, field status, access, and walking routes can change or vary by address."
      },
      {
        question: "How should buyers compare Mountain Meadows with Heritage Mountain or Noons Creek?",
        answer: "Compare street grade, lot usability, age and condition, school verification, commute routes, traffic patterns, and access to shops, parks, and recreation. The best fit depends on the exact property and daily routine."
      },
      {
        question: "What should sellers emphasize in Mountain Meadows?",
        answer: "Sellers should emphasize verified property strengths such as layout, yard, parking, updates, storage, and practical access. School and recreation claims should be worded cautiously and verified through SD43 or City sources."
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
    intro: "Moody Centre (also called Port Moody Centre) is the downtown core of Port Moody, featuring walkable streets, local shops, restaurants, waterfront parks, and vibrant community gathering spaces. It appeals to urban-lifestyle seekers, downsizers, and active buyers looking for convenience, walkability, and proximity to community events.",

    bestFor: ["Urban lifestyle", "Downsizers", "Walkability seekers", "Active/social buyers", "Professionals"],
    housingTypes: ["Condos", "Townhouses", "Apartments", "Mixed-use residential"],
    tradeOffs: [
      "Higher density and urban activity",
      "Parking more limited and may have fees",
      "Less private outdoor space in condo units",
      "More street noise and activity than residential areas"
    ],

    schools: [],
    schoolVerificationNote: "Downtown catchments in Port Moody can be complex and vary significantly by specific address. Use the SD43 School Locator (https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx) to verify exact school assignment for your property address before relying on any school assumption.",

    parks: [
      {
        name: "Port Moody Waterfront Parks",
        features: ["Waterfront access", "Walking paths", "Community gathering spaces", "Scenic views"],
        distance: "Downtown location"
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
      "Downtown is actively revitalizing; verify current construction activity and timelines for your building"
    ],

    sellerNotes: [
      "Highlight exceptional walkability and no-car lifestyle appeal",
      "Emphasize waterfront access, parks, and community gathering spaces",
      "Market transit convenience and easy access to shopping and dining",
      "Position downtown living for downsizers, young professionals, and active lifestyle buyers",
      "Feature renovated and modern condo options for property updates"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: {
      mode: "gvr_area_search",
      disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.",
      notes: "Condo and townhouse inventory varies; some buildings newer, some heritage/renovation opportunities"
    },

    photoStatus: "not_started",
    mapLabel: "Moody Centre",
    seoTitle: "Moody Centre Port Moody Neighbourhood Guide",
    seoDescription: "Moody Centre downtown Port Moody neighbourhood guide featuring walkability, waterfront parks, transit access, and urban amenities.",

    faq: [
      {
        question: "What schools serve Moody Centre?",
        answer: "Downtown school catchments are complex and vary significantly by specific address. Port Moody uses School District 43. Use the SD43 School Locator to verify exact school assignments for your specific property address: https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx"
      },
      {
        question: "How walkable is Moody Centre?",
        answer: "Moody Centre has high walkability. Shops, restaurants, cafes, and services are accessible on foot. Waterfront parks and trails are nearby. Most residents can meet daily needs without a car, though some may prefer a vehicle for weekend trips outside downtown."
      },
      {
        question: "What parks and outdoor recreation are in Moody Centre?",
        answer: "Port Moody Waterfront Parks offer waterfront access, walking paths, and community gathering spaces. Moody Park nearby has athletic fields, trails, and picnic areas. For current park hours, programs, and amenities, visit https://www.portmoody.ca/parks-recreation-and-environment/parks/"
      },
      {
        question: "What should condo buyers know about Moody Centre?",
        answer: "Review strata documents thoroughly: monthly fees, reserve funds, special assessments, and bylaws. Verify parking availability and cost. Visit the building at different times to assess noise and activity levels. Check amenities, security, and outdoor space. Consider that downtown living includes urban activity and construction periods during revitalization."
      },
      {
        question: "How is the downtown revitalization affecting Moody Centre?",
        answer: "Port Moody's downtown is actively revitalizing with new condos, shops, restaurants, and community spaces. This means new amenities are being added but also periods of construction activity. Verify current development plans and timelines affecting your specific address with the City of Port Moody."
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
    intro: "Glenayre is a quiet, established Port Moody neighbourhood characterised by detached homes on varied lot sizes, mature trees, and community calm. It appeals to families and buyers prioritizing privacy, space, established character, and proximity to schools and parks over urban walkability.",

    bestFor: ["Families with children", "Quiet living", "Privacy seekers", "Established community"],
    housingTypes: ["Detached homes", "Some townhouses", "Varied lot sizes"],
    tradeOffs: [
      "Limited daily walkability",
      "Car-dependent for shopping and services",
      "Limited evening/night transit options"
    ],

    schools: [
      {
        name: "Glenayre Elementary",
        type: "elementary",
        catchmentNote: "Some homes in the area may be associated with this school; verify exact address with SD43 School Locator",
        district: "School District 43 (Port Moody)",
        verificationLink: "https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx"
      }
    ],
    schoolVerificationNote: "School assignment and catchments vary by specific property address. Use the SD43 School Locator (https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx) or contact SD43 directly before relying on any school assignment.",

    parks: [
      {
        name: "Port Moody Parks System",
        features: ["Community parks", "Playgrounds", "Recreation facilities"],
        distance: "Within neighbourhood"
      },
      {
        name: "Trail access to regional network",
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

    transitAndAccess: "Local TransLink routes available; car helpful for daily errands and services. Some areas closer to transit connections than others. Verify specific transit access for your address.",
    walkabilityNotes: "Limited daily walkability. Most residents drive for shopping, dining, and services. Better for walking trails and community parks than urban convenience. Quiet residential streets encourage walking within neighbourhood.",

    buyerNotes: [
      "Lot size and condition vary significantly; assess individual property carefully",
      "Tree preservation and property character important to neighbourhood appeal",
      "Review home condition: structure, roof, foundation, and any updates needed",
      "Verify exact school catchment and program access for your specific address",
      "Consider commute implications if car-dependent; assess local transit for your needs"
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
      mode: "gvr_area_search",
      disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.",
      notes: "Detached homes vary in age and condition; many well-established with mature landscaping"
    },

    photoStatus: "not_started",
    mapLabel: "Glenayre",
    seoTitle: "Glenayre Port Moody Neighbourhood Guide",
    seoDescription: "Glenayre Port Moody neighbourhood guide featuring quiet residential living, detached homes, parks, and family-friendly character.",

    faq: [
      {
        question: "What schools serve Glenayre?",
        answer: "School assignments vary by specific address. Some homes may be associated with Glenayre Elementary through School District 43. Some homes may be in different catchments or qualify for alternate schools. Verify exact school assignment and program access for your specific address using the SD43 school locator at https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx"
      },
      {
        question: "Is Glenayre a good neighbourhood for families?",
        answer: "Yes. Glenayre appeals to families with its quiet streets, nearby schools and parks, and established community character. The main trade-off is lower walkability, so families typically drive for shopping and services. Verify school assignments for your specific address with SD43 School Locator."
      },
      {
        question: "What parks and outdoor recreation are in Glenayre?",
        answer: "The Port Moody Parks System includes community parks and playgrounds within the neighbourhood. Trail access connects to the broader Port Moody trail network for walking and recreation. For current park hours, programs, and facilities, visit https://www.portmoody.ca/parks-recreation-and-environment/parks/"
      },
      {
        question: "How walkable is Glenayre for daily living?",
        answer: "Glenayre has limited daily walkability for shopping and services. Most residents drive for groceries, dining, and shopping. The neighbourhood is better for recreational walking along neighbourhood streets and trails. Walking trails and parks are accessible by foot; urban convenience requires a car or transit."
      },
      {
        question: "What should home buyers watch for in Glenayre?",
        answer: "Lot size, home condition, roof and foundation status, and any needed renovations are important. Mature trees and property character add value. Verify exact school assignments for your address. Check local transit options if car-dependent commuting is a concern. Properties vary in age and updates; assess individual homes carefully."
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
    status: "draft",

    shortSummary: "A quieter west-side Port Moody neighbourhood with hillside streets, established housing, and access toward Barnet Highway, Burnaby, and SFU.",
    intro: "College Park is a west-side Port Moody residential neighbourhood often researched by buyers who want a quieter setting with access toward Barnet Highway, Burnaby, and SFU. It can offer established housing and recreation access, but slope, driveway grade, walkability, transit, park amenities, and school assignment should be checked by exact address.",

    bestFor: ["West-side Port Moody access", "Quieter residential buyers", "Hillside-home researchers", "Buyers comparing Burnaby/SFU routes"],
    housingTypes: ["Detached homes", "Townhouses", "Some apartment or strata options to verify", "Established residential properties"],
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
        catchmentNote: "Some homes may be associated with this school; school assignment varies by exact address and must be verified with SD43.",
        district: "School District 43 (Port Moody)",
        verificationLink: "https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx"
      },
      {
        name: "Heritage Woods Secondary",
        type: "secondary",
        catchmentNote: "Some Port Moody addresses may be associated with this school; verify exact address with SD43 before relying on any assignment.",
        district: "School District 43 (Port Moody)",
        verificationLink: "https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx"
      },
      {
        name: "Port Moody Secondary",
        type: "secondary",
        catchmentNote: "Some Port Moody addresses may be associated with this school; verify exact address with SD43 before relying on any assignment.",
        district: "School District 43 (Port Moody)",
        verificationLink: "https://www.sd43.bc.ca/Schools/Registration/Pages/default.aspx"
      }
    ],
    schoolVerificationNote: "School assignment varies by exact address. Use the SD43 School Locator or contact SD43 directly before relying on any elementary, middle, secondary, program, or capacity assumption.",

    parks: [
      {
        name: "Westhill-area recreation",
        features: ["Park and recreation context to verify", "Seasonal pool context to verify", "Sports box context to verify"],
        distance: "Nearby for some addresses; verify exact access"
      },
      {
        name: "Seaview-area parks",
        features: ["Neighbourhood park context", "Family recreation context", "Amenities to verify through City sources"],
        distance: "Varies by address"
      }
    ],
    trails: [
      {
        name: "Alfred Howe Greenway context",
        type: "walking",
        difficulty: "easy"
      },
      {
        name: "West-side Port Moody trail connections",
        type: "multi-use",
        difficulty: "easy"
      }
    ],

    transitAndAccess: "College Park access should be checked by exact address. Some buyers may value west-side access toward Barnet Highway, Burnaby, and SFU, but transit, road convenience, grade, and daily routes vary by street.",
    walkabilityNotes: "Walkability is address-specific. Some streets may have useful access to parks, transit, or local routes, while hillside grade and distance from shops can make other locations more car-dependent.",

    buyerNotes: [
      "Verify elementary, middle, and secondary school assignment with SD43 for the exact address",
      "Assess hillside factors such as drainage, retaining walls, stairs, driveway grade, and winter practicality",
      "Check road and transit routes toward Barnet Highway, Burnaby, SFU, and central Port Moody based on daily routines",
      "Verify Westhill, Seaview, and nearby park amenities through City of Port Moody sources",
      "Review age, condition, updates, strata documents, and long-term maintenance for the specific property"
    ],

    sellerNotes: [
      "Position around quiet residential setting, west-side access, and verified recreation proximity",
      "Highlight property-specific strengths such as views, lot usability, parking, storage, updates, exposure, and outdoor space",
      "Address hillside due diligence proactively where relevant: drainage, retaining walls, grade, roof, and exterior condition",
      "Use cautious school language and direct buyers to SD43 verification for exact assignment",
      "Avoid overstating walkability, views, school placement, or future redevelopment unless verified"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: {
      mode: "fallback",
      disclosure: "Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.",
      notes: "Use fallback listing support until a filtered MLS Reciprocity URL is verified for College Park."
    },

    photoStatus: "not_started",
    mapLabel: "College Park",
    seoTitle: "College Park Port Moody Neighbourhood Guide",
    seoDescription: "A cautious local guide to College Park in Port Moody, including west-side access, housing types, school verification notes, parks, trails, buyer notes, and seller notes.",

    faq: [
      {
        question: "Is College Park walkable?",
        answer: "Walkability depends on the exact address and destination. Some streets may have useful access to parks, transit, or local routes, while grade and distance from shops can make other locations more car-dependent."
      },
      {
        question: "Which schools serve College Park?",
        answer: "School assignment varies by exact address. Some homes may be associated with nearby SD43 schools, but elementary, middle, and secondary assignment should be verified directly with SD43 before relying on any school assumption."
      },
      {
        question: "What should buyers inspect carefully in College Park?",
        answer: "For hillside or established homes, buyers should review drainage, retaining walls, driveway grade, stairs, exterior condition, roof age, updates, parking, and long-term maintenance. Strata properties also require document and bylaw review."
      },
      {
        question: "Who is College Park a good fit for?",
        answer: "College Park may fit buyers who want a quieter west-side Port Moody setting and who value access toward Barnet Highway, Burnaby, or SFU. The fit should be checked against school verification, commute routes, hillside comfort, and daily walkability."
      },
      {
        question: "How should sellers position a College Park home?",
        answer: "Sellers should emphasize verified property strengths such as lot usability, views if present, parking, storage, updates, and west-side access. School, park, trail, and walkability claims should be checked against official sources and worded cautiously."
      }
    ],
    latitude: 49.34,
    longitude: -122.82
  },

  {
    name: "North Shore / Ioco / Pleasantside",
    slug: "north-shore-ioco-pleasantside",
    municipality: "Port Moody",
    areaType: "port_moody_neighbourhood",
    status: "draft",

    shortSummary: "Historic waterfront and industrial neighbourhood undergoing urban revitalization.",
    intro: "The North Shore, Ioco, and Pleasantside area represents Port Moody's historic waterfront and industrial character, currently undergoing urban revitalization. It appeals to buyers interested in developing neighbourhoods, waterfront access, and emerging urban renewal opportunities.",

    bestFor: ["Developers", "Urban explorers", "Value seekers", "Waterfront access"],
    housingTypes: ["Older detached homes", "Mixed commercial/residential", "New development"],
    tradeOffs: [
      "Historical industrial character",
      "Active development and construction",
      "Varied amenities during transition"
    ],

    schools: [],
    schoolVerificationNote: "Verify school catchments with SD43 for specific addresses",

    parks: [
      {
        name: "Waterfront access",
        features: ["Waterfront parks", "Future community spaces"]
      }
    ],

    trails: [],

    transitAndAccess: "Improving transit access; near waterfront connectivity",
    walkabilityNotes: "Developing walkability as revitalization progresses",

    buyerNotes: [
      "Monitor development plans and timelines",
      "Assess property condition and improvement needs",
      "Consider appreciation potential during revitalization",
      "Verify environmental clearances if applicable"
    ],

    sellerNotes: [
      "Highlight development opportunities",
      "Emphasize waterfront and revitalization potential",
      "Market timing important during transition"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: {
      mode: "gvr_area_search"
    },

    photoStatus: "not_started",
    mapLabel: "North Shore / Ioco",
    seoTitle: "North Shore, Ioco, and Pleasantside Port Moody Guide",
    seoDescription: "North Shore, Ioco, and Pleasantside neighbourhood guide featuring waterfront access and urban revitalization.",

    faq: [],
    latitude: 49.31,
    longitude: -122.8
  },

  {
    name: "Barber Street",
    slug: "barber-street",
    municipality: "Port Moody",
    areaType: "port_moody_neighbourhood",
    status: "draft",

    shortSummary: "Historic neighbourhood with industrial character, waterfront proximity, and revitalization potential.",
    intro: "Barber Street represents Port Moody's historic character with industrial heritage, waterfront proximity, and active revitalization. It appeals to buyers interested in urban renewal, character homes, and emerging neighbourhood development.",

    bestFor: ["Developers", "Character home seekers", "Value investors", "Waterfront proximity"],
    housingTypes: ["Historic homes", "Mixed-use properties", "Development potential"],
    tradeOffs: [
      "Industrial heritage and ongoing activity",
      "Renovation requirements for historic properties",
      "Neighbourhood in transition"
    ],

    schools: [],
    schoolVerificationNote: "Verify school catchments with SD43 for specific addresses",

    parks: [],
    trails: [],

    transitAndAccess: "Transit improving; waterfront access nearby",
    walkabilityNotes: "Developing; varies by specific location",

    buyerNotes: [
      "Historic homes may need renovation investment",
      "Review heritage designations if applicable",
      "Monitor revitalization timelines",
      "Assess location relative to industrial areas"
    ],

    sellerNotes: [
      "Highlight character and history",
      "Emphasize development potential and revitalization",
      "Market to renovation and investment buyers"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: {
      mode: "gvr_area_search"
    },

    photoStatus: "not_started",
    mapLabel: "Barber Street",
    seoTitle: "Barber Street Port Moody Neighbourhood Guide",
    seoDescription: "Barber Street neighbourhood guide featuring historic character, waterfront proximity, and revitalization potential.",

    faq: [],
    latitude: 49.32,
    longitude: -122.79
  },

  // Placeholder neighbourhoods for future development
  {
    name: "Suter Brook",
    slug: "suter-brook",
    municipality: "Port Moody",
    areaType: "port_moody_neighbourhood",
    status: "draft",

    shortSummary: "Growing neighbourhood with newer developments and developing amenities.",
    intro: "Suter Brook is a growing Port Moody neighbourhood with newer developments, diverse housing, and developing community amenities. Coming soon.",

    bestFor: ["First-time buyers", "New construction", "Growing families"],
    housingTypes: ["Townhouses", "Condos", "Detached homes"],
    tradeOffs: ["Active development", "Developing community"],

    schools: [],
    schoolVerificationNote: "Verify school catchments with SD43 for specific addresses",
    parks: [],
    trails: [],
    transitAndAccess: "Good transit access",
    walkabilityNotes: "Developing walkability",

    buyerNotes: [],
    sellerNotes: [],
    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: { mode: "none" },

    photoStatus: "not_started",
    mapLabel: "Suter Brook",
    seoTitle: "Suter Brook Port Moody Neighbourhood Guide",
    seoDescription: "Suter Brook neighbourhood guide coming soon.",

    faq: [],
    latitude: 49.32,
    longitude: -122.84
  },

  {
    name: "Newport Village",
    slug: "newport-village",
    municipality: "Port Moody",
    areaType: "port_moody_neighbourhood",
    status: "draft",

    shortSummary: "Waterfront-adjacent neighbourhood with modern condos, townhouses, and walkable amenities.",
    intro: "Newport Village is a waterfront-adjacent Port Moody neighbourhood featuring modern condos, townhouses, and walkable lifestyle amenities. Coming soon.",

    bestFor: ["Lifestyle seekers", "Condo buyers", "Walkability focused"],
    housingTypes: ["Condos", "Townhouses", "Some detached homes"],
    tradeOffs: ["Urban density", "Higher pricing"],

    schools: [],
    schoolVerificationNote: "Verify school catchments with SD43 for specific addresses",
    parks: [{ name: "Waterfront parks", features: ["Waterfront", "Promenade"] }],
    trails: [{ name: "Waterfront paths", type: "walking", difficulty: "easy" }],
    transitAndAccess: "Excellent transit access",
    walkabilityNotes: "High walkability to shops and restaurants",

    buyerNotes: [],
    sellerNotes: [],
    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: { mode: "none" },

    photoStatus: "not_started",
    mapLabel: "Newport Village",
    seoTitle: "Newport Village Port Moody Neighbourhood Guide",
    seoDescription: "Newport Village neighbourhood guide coming soon.",

    faq: [],
    latitude: 49.33,
    longitude: -122.81
  },

  {
    name: "Klahanie",
    slug: "klahanie",
    municipality: "Port Moody",
    areaType: "port_moody_neighbourhood",
    status: "draft",

    shortSummary: "Family-oriented neighbourhood with parks, schools, and established community feel.",
    intro: "Klahanie is a family-oriented Port Moody neighbourhood featuring parks, schools, and established community character. Coming soon.",

    bestFor: ["Families with children", "School proximity", "Community-focused"],
    housingTypes: ["Detached homes", "Townhouses", "Some condos"],
    tradeOffs: [],

    schools: [],
    schoolVerificationNote: "Verify school catchments with SD43 for specific addresses",
    parks: [{ name: "Community parks", features: ["Recreation areas"] }],
    trails: [],
    transitAndAccess: "Good transit access to schools",
    walkabilityNotes: "Moderate walkability",

    buyerNotes: [],
    sellerNotes: [],
    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: { mode: "none" },

    photoStatus: "not_started",
    mapLabel: "Klahanie",
    seoTitle: "Klahanie Port Moody Neighbourhood Guide",
    seoDescription: "Klahanie neighbourhood guide coming soon.",

    faq: [],
    latitude: 49.31,
    longitude: -122.83
  },

  {
    name: "Seaview",
    slug: "seaview",
    municipality: "Port Moody",
    areaType: "port_moody_neighbourhood",
    status: "draft",

    shortSummary: "Neighbourhood with waterfront or water-view characteristics. Coming soon.",
    intro: "Seaview neighbourhood coming soon.",

    bestFor: [],
    housingTypes: [],
    tradeOffs: [],

    schools: [],
    schoolVerificationNote: "Verify school catchments with SD43 for specific addresses",
    parks: [],
    trails: [],
    transitAndAccess: "",
    walkabilityNotes: "",

    buyerNotes: [],
    sellerNotes: [],
    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: { mode: "none" },

    photoStatus: "not_started",
    mapLabel: "Seaview",
    seoTitle: "Seaview Port Moody Neighbourhood Guide",
    seoDescription: "Seaview neighbourhood guide coming soon.",

    faq: [],
    latitude: 49.3,
    longitude: -122.8
  },

  // =============================================================================
  // NEARBY COMMUNITIES
  // =============================================================================

  {
    name: "Anmore",
    slug: "anmore",
    municipality: "Anmore",
    areaType: "nearby_community",
    status: "draft",

    shortSummary: "Rural nearby community with larger lot homes and quiet, established character.",
    intro: "Anmore is a rural neighbouring community offering larger lot homes, quiet established character, and forest setting. It appeals to buyers seeking more land, privacy, and rural character outside the Port Moody core. Coming soon.",

    bestFor: ["Privacy seekers", "Larger lot buyers", "Rural lifestyle", "Commuters"],
    housingTypes: ["Detached homes on larger lots", "Some acreage"],
    tradeOffs: [
      "Car-dependent",
      "Limited local amenities",
      "School access varies",
      "Longer commute to Port Moody"
    ],

    schools: [],
    schoolVerificationNote: "Verify school catchments with appropriate school district for Anmore.",
    parks: [],
    trails: [],
    transitAndAccess: "Car-dependent; limited transit",
    walkabilityNotes: "Not walkable; rural setting",

    buyerNotes: [
      "Lot size and property condition important",
      "Verify school districts separately from Port Moody SD43",
      "Consider commute implications"
    ],

    sellerNotes: [
      "Highlight privacy and larger lots",
      "Emphasize rural/nature setting"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: { mode: "none" },

    photoStatus: "not_started",
    mapLabel: "Anmore",
    seoTitle: "Anmore Nearby Community Guide",
    seoDescription: "Anmore nearby community guide featuring rural character, larger properties, and privacy.",

    faq: [],
    latitude: 49.32,
    longitude: -122.9
  },

  {
    name: "Belcarra",
    slug: "belcarra",
    municipality: "Belcarra",
    areaType: "nearby_community",
    status: "draft",

    shortSummary: "Rural waterfront nearby community with forest, water access, and quiet character.",
    intro: "Belcarra is a rural neighbouring community featuring forest setting, waterfront/water-access characteristics, and quiet established character. It appeals to buyers seeking nature connection, privacy, and a retreat-like setting. Coming soon.",

    bestFor: ["Nature seekers", "Privacy buyers", "Waterfront access", "Established buyers"],
    housingTypes: ["Detached homes", "Some waterfront properties"],
    tradeOffs: [
      "Very car-dependent",
      "Limited local services",
      "Longer commute",
      "School access outside community"
    ],

    schools: [],
    schoolVerificationNote: "Verify school catchments with appropriate school district for Belcarra.",
    parks: [{ name: "Natural areas", features: ["Forest", "Water access"] }],
    trails: [{ name: "Natural trails", type: "walking", difficulty: "moderate" }],
    transitAndAccess: "No local transit; car essential",
    walkabilityNotes: "Not walkable; nature-based setting",

    buyerNotes: [
      "Property access and road conditions important",
      "Verify utilities and services",
      "Consider extreme isolation for some properties",
      "Environmental and water access features valuable"
    ],

    sellerNotes: [
      "Highlight privacy and waterfront/nature access",
      "Emphasize retreat-like character"
    ],

    relatedComplexes: [],
    relatedBuildings: [],

    listingsConfig: { mode: "none" },

    photoStatus: "not_started",
    mapLabel: "Belcarra",
    seoTitle: "Belcarra Nearby Community Guide",
    seoDescription: "Belcarra nearby community guide featuring waterfront access, nature, and rural privacy.",

    faq: [],
    latitude: 49.35,
    longitude: -122.88
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

// Utility to get all nearby communities
export function getNearbyCommunitiesGuides(): NeighbourhoodGuide[] {
  return neighbourhoodGuides.filter(guide => guide.areaType === "nearby_community");
}
