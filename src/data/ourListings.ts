export type OurListingStatus = "active" | "coming-soon" | "pending" | "sold";
export type ListingAgent = "paul" | "leilani" | "both";

export type OurListingGalleryImage = { src: string; alt: string; caption?: string };
export type OurListingRoom = { name: string; dimensions: string; floor?: string };
export type OurListingDetailRow = { label: string; value: string };
export type OurListingDetailTab = { label: string; rows: OurListingDetailRow[] };

// Curated icon keys for listing highlights  -  kept as a closed set (rather than
// guessing an icon from free-text) so each bullet gets a deliberately chosen icon.
export type OurListingHighlightIcon = "chef-hat" | "umbrella" | "sparkles" | "train-front" | "martini";
export type OurListingHighlight = { text: string; icon: OurListingHighlightIcon };

export type OurListing = {
  slug: string;
  mlsNumber: string;
  status: OurListingStatus;
  address: string;
  unit?: string;
  neighbourhoodSlug?: string;
  buildingSlug?: string;
  price: number;
  // Set when status is "sold": the actual closed price and close date. Shown
  // in place of the list price wherever the listing surfaces once sold, and
  // soldDate drives both the "Recently sold" sort order and the 30-day
  // "Just Sold" homepage window. Left unset for a sold listing whose real
  // sold price/date isn't known - display code falls back to the list price
  // and omits date-specific copy rather than inventing either.
  soldPrice?: number;
  soldDate?: string;
  beds: number;
  baths: number;
  sqft: number;
  lotSqft?: number;
  yearBuilt?: number;
  propertyType: string;
  listingAgent: ListingAgent;
  heroImage: OurListingGalleryImage;
  galleryImages: OurListingGalleryImage[];
  floorplanImage?: OurListingGalleryImage;
  summary: string;
  highlights: OurListingHighlight[];
  rooms?: OurListingRoom[];
  details?: OurListingDetailTab[];
  latitude: number;
  longitude: number;
  virtualTourUrl?: string;
  // Short parking summary for the rail's key-facts block (e.g. "1 covered (garage)").
  // The full descriptive string lives in the Exterior tab's "Parking" row.
  parkingSummary?: string;
};

// Add real listings here as Paul and Leilani take them on. Every placement
// across the site (homepage, /sell, /listings, matching building/neighbourhood
// pages) is driven off this array and renders nothing while it is empty.
export const ourListings: OurListing[] = [
  {
    slug: "326-55-klahanie-drive",
    mlsNumber: "R3144061",
    status: "sold",
    address: "55 Klahanie Drive",
    unit: "326",
    neighbourhoodSlug: "klahanie",
    buildingSlug: "50-electronic-ave",
    price: 749900,
    beds: 2,
    baths: 2,
    sqft: 902,
    yearBuilt: 2023,
    propertyType: "Apartment/Condo",
    listingAgent: "leilani",
    heroImage: {
      src: "/images/listings/326-55-klahanie-drive/07.jpg",
      alt: "Living room with large window at 326-55 Klahanie Drive, Port Moody",
    },
    galleryImages: [
      { src: "/images/listings/326-55-klahanie-drive/29.jpg", alt: "Bathtub and shower alcove" },
      { src: "/images/listings/326-55-klahanie-drive/14.jpg", alt: "Living room seating area" },
      { src: "/images/listings/326-55-klahanie-drive/26.jpg", alt: "Primary bedroom" },
      { src: "/images/listings/326-55-klahanie-drive/05.jpg", alt: "Bright open-concept living room" },
      { src: "/images/listings/326-55-klahanie-drive/01.jpg", alt: "Exterior of the Klahanie Drive condo building" },
      { src: "/images/listings/326-55-klahanie-drive/02.jpg", alt: "Exterior of the Klahanie Drive condo building" },
      { src: "/images/listings/326-55-klahanie-drive/03.jpg", alt: "Exterior of the Klahanie Drive condo building" },
      { src: "/images/listings/326-55-klahanie-drive/04.jpg", alt: "Exterior of the Klahanie Drive condo building" },
      { src: "/images/listings/326-55-klahanie-drive/06.jpg", alt: "Open-concept living and dining area" },
      { src: "/images/listings/326-55-klahanie-drive/08.jpg", alt: "Living and dining area" },
      { src: "/images/listings/326-55-klahanie-drive/09.jpg", alt: "Kitchen with waterfall-edge quartz island" },
      { src: "/images/listings/326-55-klahanie-drive/10.jpg", alt: "Kitchen and dining area" },
      { src: "/images/listings/326-55-klahanie-drive/11.jpg", alt: "Kitchen with Bosch appliances" },
      { src: "/images/listings/326-55-klahanie-drive/12.jpg", alt: "Kitchen cabinetry and counter space" },
      { src: "/images/listings/326-55-klahanie-drive/13.jpg", alt: "Dining area" },
      { src: "/images/listings/326-55-klahanie-drive/15.jpg", alt: "Living room with balcony access" },
      { src: "/images/listings/326-55-klahanie-drive/16.jpg", alt: "Open-concept living space" },
      { src: "/images/listings/326-55-klahanie-drive/17.jpg", alt: "Kitchen island and cabinetry" },
      { src: "/images/listings/326-55-klahanie-drive/18.jpg", alt: "Kitchen counter and pantry space" },
      { src: "/images/listings/326-55-klahanie-drive/19.jpg", alt: "Living and dining area" },
      { src: "/images/listings/326-55-klahanie-drive/20.jpg", alt: "Kitchen with quartz counters" },
      { src: "/images/listings/326-55-klahanie-drive/21.jpg", alt: "Kitchen close-up with waterfall-edge quartz counters" },
      { src: "/images/listings/326-55-klahanie-drive/22.jpg", alt: "Kitchen cabinetry detail" },
      { src: "/images/listings/326-55-klahanie-drive/23.jpg", alt: "Kitchen and living area" },
      { src: "/images/listings/326-55-klahanie-drive/24.jpg", alt: "Living room" },
      { src: "/images/listings/326-55-klahanie-drive/25.jpg", alt: "Primary bedroom" },
      { src: "/images/listings/326-55-klahanie-drive/27.jpg", alt: "Ensuite bathroom double vanity" },
      { src: "/images/listings/326-55-klahanie-drive/28.jpg", alt: "Second bedroom" },
      { src: "/images/listings/326-55-klahanie-drive/30.jpg", alt: "Bathroom vanity" },
      { src: "/images/listings/326-55-klahanie-drive/31.jpg", alt: "Ensuite glass-enclosed shower and soaker tub with hexagon tile" },
      { src: "/images/listings/326-55-klahanie-drive/32.jpg", alt: "Walk-in closet leading to the ensuite bathroom" },
      { src: "/images/listings/326-55-klahanie-drive/33.jpg", alt: "Den set up as a home office with a window view" },
      { src: "/images/listings/326-55-klahanie-drive/34.jpg", alt: "Den detail with artwork and plants" },
      { src: "/images/listings/326-55-klahanie-drive/35.jpg", alt: "Second bathroom vanity and toilet" },
      { src: "/images/listings/326-55-klahanie-drive/36.jpg", alt: "Shower tile detail with rain shower head" },
      { src: "/images/listings/326-55-klahanie-drive/37.jpg", alt: "Flex nook off the entry" },
      { src: "/images/listings/326-55-klahanie-drive/38.jpg", alt: "In-suite laundry closet with stacked washer and dryer" },
      { src: "/images/listings/326-55-klahanie-drive/39.jpg", alt: "Covered patio with string lights and mountain view" },
      { src: "/images/listings/326-55-klahanie-drive/40.jpg", alt: "Covered patio with BBQ and seating" },
      { src: "/images/listings/326-55-klahanie-drive/41.jpg", alt: "Patio view of the mountains and elevated walkway" },
      { src: "/images/listings/326-55-klahanie-drive/42.jpg", alt: "Building exterior with rooftop garden plots" },
      { src: "/images/listings/326-55-klahanie-drive/43.jpg", alt: "Rooftop community garden plots" },
      { src: "/images/listings/326-55-klahanie-drive/44.jpg", alt: "Building dog park run" },
      { src: "/images/listings/326-55-klahanie-drive/45.jpg", alt: "Dog park entrance" },
      { src: "/images/listings/326-55-klahanie-drive/46.jpg", alt: "Indoor children's playroom" },
      { src: "/images/listings/326-55-klahanie-drive/47.jpg", alt: "Kids' clubroom kitchenette and lounge" },
      { src: "/images/listings/326-55-klahanie-drive/48.jpg", alt: "Building lounge with kitchen bar and fireplace feature" },
      { src: "/images/listings/326-55-klahanie-drive/49.jpg", alt: "Amenity lounge with pool table and seating" },
      { src: "/images/listings/326-55-klahanie-drive/50.jpg", alt: "Children's playroom" },
      { src: "/images/listings/326-55-klahanie-drive/51.jpg", alt: "Kids' clubroom kitchenette" },
      { src: "/images/listings/326-55-klahanie-drive/52.jpg", alt: "Amenity lounge seating area" },
      { src: "/images/listings/326-55-klahanie-drive/53.jpg", alt: "Co-working lounge with study nooks" },
      { src: "/images/listings/326-55-klahanie-drive/54.jpg", alt: "Theatre room with sectional sofa" },
      { src: "/images/listings/326-55-klahanie-drive/55.jpg", alt: "Building fitness centre with cardio equipment" },
      { src: "/images/listings/326-55-klahanie-drive/56.jpg", alt: "Yoga and stretch studio" },
      { src: "/images/listings/326-55-klahanie-drive/57.jpg", alt: "Building exterior and landscaped courtyard" },
      { src: "/images/listings/326-55-klahanie-drive/58.jpg", alt: "Landscaped walkway on the building grounds" },
      { src: "/images/listings/326-55-klahanie-drive/59.jpg", alt: "Rooftop deck with covered furniture and mountain view" },
      { src: "/images/listings/326-55-klahanie-drive/60.jpg", alt: "Outdoor playground on the building grounds" },
      { src: "/images/listings/326-55-klahanie-drive/61.jpg", alt: "Outdoor playground structure" },
    ],
    floorplanImage: {
      src: "/images/listings/326-55-klahanie-drive/floorplan.png",
      alt: "Floor plan for 326-55 Klahanie Drive: 2 bedroom plus den, 2 bathroom, 902 sqft interior with 161 sqft balcony",
    },
    summary:
      "This 902 sqft, 2 bedroom plus den home faces the quiet east side and features an open-concept layout, 9 ft ceilings, premium finishings, Bosch appliances, waterfall-edge quartz counters, and plenty of cabinet and pantry space. Enjoy a huge covered 170 sqft patio, perfect for summer BBQs, morning coffee, or a children's play area. Steps to Rocky Point Park, Shoreline Trail, Brewer's Row, Suter Brook Village, Newport Village, Moody Centre SkyTrain, West Coast Express, cafés, restaurants, and shopping.",
    highlights: [
      { text: "Bosch appliances & waterfall-edge quartz island", icon: "chef-hat" },
      { text: "170 sqft covered patio", icon: "umbrella" },
      { text: "Built in 2023  -  like new", icon: "sparkles" },
      { text: "Steps to Rocky Point Park & Moody Centre SkyTrain", icon: "train-front" },
    ],
    details: [
      {
        label: "Interior",
        rows: [
          { label: "Bedrooms", value: "2" },
          { label: "Bathrooms", value: "2 full, 0 half" },
          { label: "Kitchens", value: "1" },
          { label: "Fireplaces", value: "0" },
          { label: "Floor finish", value: "Laminate, Tile" },
          { label: "Heating", value: "Baseboard, Electric" },
        ],
      },
      {
        label: "Exterior",
        rows: [
          { label: "Construction", value: "Frame - Wood" },
          { label: "Exterior finish", value: "Brick, Fibre Cement Board, Other" },
          { label: "Foundation", value: "Concrete Perimeter" },
          { label: "Roof", value: "Asphalt" },
          { label: "Outdoor area", value: "Balcony(s)" },
          { label: "Parking", value: "1 total, 1 covered, Garage/Underground, front access" },
          { label: "Locker", value: "Yes" },
        ],
      },
      {
        label: "Building",
        rows: [
          { label: "Units in development", value: "358" },
          { label: "Total units in strata", value: "358" },
          { label: "Management company", value: "First Service Residential" },
          {
            label: "Amenities",
            value: "Bike Room, Club House, Elevator, Exercise Centre, Guest Suite, In Suite Laundry, Playground, Storage",
          },
        ],
      },
      {
        label: "Community",
        rows: [
          {
            label: "Site influences",
            value: "Central Location, Marina Nearby, Private Setting, Recreation Nearby, Shopping Nearby",
          },
          {
            label: "Nearby",
            value:
              "Rocky Point Park, Shoreline Trail, Brewer's Row, Suter Brook Village, Newport Village, Moody Centre SkyTrain, West Coast Express",
          },
        ],
      },
      {
        label: "Taxes & Fees",
        rows: [
          { label: "Gross taxes", value: "$3,285.12/yr" },
          { label: "Maintenance fee", value: "$464.12/mo" },
          { label: "Maint fee includes", value: "Caretaker, Garbage Pickup, Gardening, Hot Water, Management, Sewer" },
          { label: "Zoning", value: "CD" },
        ],
      },
      {
        label: "Other",
        rows: [
          { label: "Pets", value: "Allowed w/ restrictions (2 pets; cats & dogs OK)" },
          { label: "Rentals", value: "Allowed" },
          { label: "Short-term rental (<1yr)", value: "Not allowed" },
          { label: "Title to land", value: "Freehold Strata" },
        ],
      },
    ],
    rooms: [
      { name: "Living Room", dimensions: "11'5 x 10'3", floor: "Main" },
      { name: "Dining Room", dimensions: "7'5 x 5'5", floor: "Main" },
      { name: "Kitchen", dimensions: "10'0 x 9'0", floor: "Main" },
      { name: "Primary Bedroom", dimensions: "17'5 x 10'5", floor: "Main" },
      { name: "Bedroom", dimensions: "10'0 x 9'0", floor: "Main" },
      { name: "Den", dimensions: "9'0 x 5'0", floor: "Main" },
    ],
    latitude: 49.2785,
    longitude: -122.8391,
    parkingSummary: "1 covered (garage)",
  },
  {
    slug: "3464-vincent-street",
    mlsNumber: "R3155588",
    status: "active",
    address: "3464 Vincent Street",
    price: 1145000,
    beds: 6,
    baths: 2,
    sqft: 2000,
    lotSqft: 4148,
    yearBuilt: 1972,
    propertyType: "House/Single Family",
    listingAgent: "paul",
    heroImage: {
      src: "/images/listings/3464-vincent-street/1.jpg",
      alt: "Front exterior of the two-storey home at 3464 Vincent Street, Port Coquitlam",
    },
    galleryImages: [
      { src: "/images/listings/3464-vincent-street/4.jpg", alt: "Bright upper-level living room open to the entry and staircase" },
      { src: "/images/listings/3464-vincent-street/9.jpg", alt: "Renovated main bathroom with marble-tile walk-in shower" },
      { src: "/images/listings/3464-vincent-street/7.jpg", alt: "Primary bedroom with large window and ceiling fan" },
      { src: "/images/listings/3464-vincent-street/12.jpg", alt: "Covered upper deck with seating overlooking the neighbourhood" },
      { src: "/images/listings/3464-vincent-street/3.jpg", alt: "Upper-level living room with sectional sofa and picture window" },
      { src: "/images/listings/3464-vincent-street/5.jpg", alt: "Upper-level living room open to the dining area" },
      { src: "/images/listings/3464-vincent-street/2.jpg", alt: "Entry foyer and staircase to the upper level" },
      { src: "/images/listings/3464-vincent-street/11.jpg", alt: "Upper-level dining room with table seating six" },
      { src: "/images/listings/3464-vincent-street/6.jpg", alt: "Upper-level kitchen with white cabinetry and stainless dishwasher" },
      { src: "/images/listings/3464-vincent-street/8.jpg", alt: "Upper-level bedroom with ceiling fan" },
      { src: "/images/listings/3464-vincent-street/10.jpg", alt: "Upper-level bedroom with iron-frame bed" },
      { src: "/images/listings/3464-vincent-street/13.jpg", alt: "Gazebo-covered patio in the backyard" },
      { src: "/images/listings/3464-vincent-street/15.jpg", alt: "Lower-level suite living area and kitchenette" },
      { src: "/images/listings/3464-vincent-street/16.jpg", alt: "Lower-level suite bedroom" },
      { src: "/images/listings/3464-vincent-street/17.jpg", alt: "Lower-level suite bedroom, alternate angle" },
      { src: "/images/listings/3464-vincent-street/18.jpg", alt: "Lower-level suite bathroom with tub and shower" },
      { src: "/images/listings/3464-vincent-street/19.jpg", alt: "Lower-level suite laundry closet with stacked washer and dryer" },
    ],
    summary:
      "Welcome to this spacious family home in the heart of Port Coquitlam, offering 3 bedrooms upstairs plus a separate 3-bedroom mortgage helper downstairs  -  ideal for extended family or additional income. The large backyard is made for gathering, with a generous outdoor deck and gazebo perfect for summer dinners, entertaining and relaxing. Located just a 1-minute walk to Minnekhada Middle School, with shopping, restaurants and everyday amenities nearby. Only minutes to the Port Coquitlam West Coast Express, Coquitlam Centre and SkyTrain. With plenty of parking, flexible living space and a wonderful family-friendly location, this home has so much to offer.",
    highlights: [
      { text: "Two full kitchens  -  main level plus a self-contained 3-bedroom lower suite", icon: "chef-hat" },
      { text: "Covered upper deck plus a gazebo-covered patio in the backyard", icon: "umbrella" },
      { text: "Updated main bathroom with a marble-tile walk-in shower", icon: "sparkles" },
      { text: "Minutes to the Port Coquitlam West Coast Express and Coquitlam Centre SkyTrain", icon: "train-front" },
    ],
    details: [
      {
        label: "Interior",
        rows: [
          { label: "Bedrooms", value: "6" },
          { label: "Bathrooms", value: "2 full, 0 half" },
          { label: "Kitchens", value: "2" },
          { label: "Fireplaces", value: "2 (Electric, Wood)" },
          { label: "Heating", value: "Forced Air" },
        ],
      },
      {
        label: "Exterior",
        rows: [
          { label: "Style", value: "2 Storey" },
          { label: "Construction", value: "Frame - Wood" },
          { label: "Exterior finish", value: "Stucco, Wood" },
          { label: "Foundation", value: "Concrete Perimeter" },
          { label: "Roof", value: "Asphalt" },
          { label: "Outdoor area", value: "Balcony(s)" },
          { label: "Parking", value: "5 total, 0 covered, Open, Front/Lane access" },
          { label: "Lot size", value: "4,148 sq ft (33 ft frontage)" },
        ],
      },
      {
        label: "Community",
        rows: [
          { label: "Site influences", value: "Central Location, Recreation Nearby, Shopping Nearby" },
          { label: "Nearby", value: "Minnekhada Middle School, Port Coquitlam West Coast Express, Coquitlam Centre, SkyTrain" },
          { label: "Water supply", value: "City/Municipal" },
          { label: "Sewer type", value: "Community" },
        ],
      },
      {
        label: "Taxes & Fees",
        rows: [
          { label: "Gross taxes", value: "$4,426.46/yr" },
          { label: "Zoning", value: "SFD" },
        ],
      },
      {
        label: "Other",
        rows: [
          { label: "Title to land", value: "Freehold NonStrata" },
          { label: "Legal description", value: "Lot 3, Plan NWP2145, District Lot 479, Group 1, New Westminster Land District" },
          { label: "Appliances included", value: "Washer, Dryer, Fridge, Stove, Dishwasher" },
        ],
      },
    ],
    rooms: [
      { name: "Bedroom", dimensions: "13'8 x 8'8", floor: "Main" },
      { name: "Bedroom", dimensions: "17'11 x 6'9", floor: "Main" },
      { name: "Kitchen", dimensions: "14'1 x 8'8", floor: "Main" },
      { name: "Bedroom", dimensions: "12'6 x 10'1", floor: "Main" },
      { name: "Living Room", dimensions: "12'9 x 10'5", floor: "Main" },
      { name: "Living Room", dimensions: "20'3 x 11'11", floor: "Above" },
      { name: "Dining Room", dimensions: "11'7 x 10'9", floor: "Above" },
      { name: "Bedroom", dimensions: "10'11 x 9'0", floor: "Above" },
      { name: "Primary Bedroom", dimensions: "13'1 x 9'0", floor: "Above" },
      { name: "Bedroom", dimensions: "11'8 x 7'5", floor: "Above" },
      { name: "Kitchen", dimensions: "12'5 x 10'2", floor: "Above" },
    ],
    latitude: 49.2744788,
    longitude: -122.7585901,
    parkingSummary: "5 open (driveway, lane access)",
  },
  {
    slug: "3225-pinda-drive",
    mlsNumber: "R3150684",
    status: "active",
    address: "3225 Pinda Drive",
    neighbourhoodSlug: "moody-centre",
    price: 1498800,
    beds: 3,
    baths: 2,
    sqft: 2283,
    lotSqft: 6137,
    yearBuilt: 1974,
    propertyType: "House/Single Family",
    listingAgent: "paul",
    heroImage: {
      src: "/images/listings/3225-pinda-drive/01.jpg",
      alt: "Front exterior of the rancher at 3225 Pinda Drive, Port Moody",
    },
    galleryImages: [
      { src: "/images/listings/3225-pinda-drive/02.jpg", alt: "Retro walk-out basement rec room with wet bar and brick archways" },
      { src: "/images/listings/3225-pinda-drive/03.jpg", alt: "Family room with brick fireplace and mountain-view windows" },
      { src: "/images/listings/3225-pinda-drive/04.jpg", alt: "Primary bedroom with a view toward the trees and mountains" },
      { src: "/images/listings/3225-pinda-drive/05.jpg", alt: "Covered patio under the deck, opening onto the fenced backyard" },
      { src: "/images/listings/3225-pinda-drive/06.jpg", alt: "Living room in original condition" },
      { src: "/images/listings/3225-pinda-drive/07.jpg", alt: "Family room with a view through to the dining room" },
      { src: "/images/listings/3225-pinda-drive/08.jpg", alt: "Formal dining room" },
      { src: "/images/listings/3225-pinda-drive/09.jpg", alt: "Original oak kitchen" },
      { src: "/images/listings/3225-pinda-drive/10.jpg", alt: "Kitchen sink with a view over the wooded backyard" },
      { src: "/images/listings/3225-pinda-drive/11.jpg", alt: "Second bedroom" },
      { src: "/images/listings/3225-pinda-drive/12.jpg", alt: "Third bedroom set up as a home office" },
      { src: "/images/listings/3225-pinda-drive/13.jpg", alt: "Main bathroom" },
      { src: "/images/listings/3225-pinda-drive/14.jpg", alt: "Laundry room with side door to the yard" },
      { src: "/images/listings/3225-pinda-drive/15.jpg", alt: "Covered upper balcony with seating" },
      { src: "/images/listings/3225-pinda-drive/16.jpg", alt: "View toward Port Moody Centre and the mountains from an upper window" },
      { src: "/images/listings/3225-pinda-drive/17.jpg", alt: "Wet bar in the basement rec room" },
      { src: "/images/listings/3225-pinda-drive/18.jpg", alt: "Unfinished basement workshop and storage area" },
      { src: "/images/listings/3225-pinda-drive/19.jpg", alt: "Basement mechanical and storage area" },
      { src: "/images/listings/3225-pinda-drive/20.jpg", alt: "Rear exterior showing the covered patio and deck above" },
    ],
    summary:
      "First time on the market in 48 years! Lovingly owned by the same family for nearly five decades, this rancher with a walk out basement is filled with character, history and incredible potential. Mostly in its original condition, it offers the perfect opportunity to renovate, personalize or create the home you have always envisioned. All of this is set in a highly desirable location  -  an exciting opportunity for first time home buyers, renovators, or anyone looking for a special property to make their own.",
    highlights: [
      { text: "Retro walk-out basement rec room with a full wet bar", icon: "martini" },
      { text: "Fenced backyard with a covered patio and upper balcony", icon: "umbrella" },
      { text: "Central Port Moody Centre location", icon: "train-front" },
    ],
    details: [
      {
        label: "Interior",
        rows: [
          { label: "Bedrooms", value: "3" },
          { label: "Bathrooms", value: "2 full, 0 half" },
          { label: "Kitchens", value: "1" },
          { label: "Fireplaces", value: "Natural gas (insert)" },
          { label: "Floor finish", value: "Concrete, Vinyl/Linoleum, Carpet" },
          { label: "Heating", value: "Forced Air" },
        ],
      },
      {
        label: "Exterior",
        rows: [
          { label: "Style", value: "Rancher/Bungalow w/ Bsmt." },
          { label: "Construction", value: "Frame - Wood" },
          { label: "Exterior finish", value: "Stucco" },
          { label: "Foundation", value: "Concrete Perimeter" },
          { label: "Roof", value: "Asphalt" },
          { label: "Outdoor area", value: "Balcony(s), Fenced Yard, Patio(s)" },
          { label: "Parking", value: "4 total, 2 covered, Carport, multiple, front access" },
          { label: "Lot size", value: "6,137 sq ft (0.14 acres)" },
          { label: "Basement", value: "Partly finished  -  697 sq ft finished, 825 sq ft unfinished" },
        ],
      },
      {
        label: "Community",
        rows: [{ label: "Water supply", value: "Community" }],
      },
      {
        label: "Taxes & Fees",
        rows: [
          { label: "Gross taxes", value: "$6,700.25/yr" },
          { label: "Zoning", value: "RS1" },
        ],
      },
      {
        label: "Other",
        rows: [
          { label: "Title to land", value: "Freehold NonStrata" },
          { label: "Legal description", value: "Lot 124, Plan NWP45114, District Lot 233, Group 1, New Westminster Land District" },
          { label: "Features", value: "Air Conditioning, Fireplace Insert, Washer, Dryer, Fridge, Stove, Dishwasher" },
        ],
      },
    ],
    rooms: [
      { name: "Foyer", dimensions: "13'10 x 7'10", floor: "Main" },
      { name: "Living Room", dimensions: "17'10 x 14'3", floor: "Main" },
      { name: "Family Room", dimensions: "11'0 x 10'10", floor: "Main" },
      { name: "Kitchen", dimensions: "10'4 x 9'1", floor: "Main" },
      { name: "Dining Room", dimensions: "10'3 x 8'10", floor: "Main" },
      { name: "Laundry", dimensions: "7'4 x 5'8", floor: "Main" },
      { name: "Primary Bedroom", dimensions: "13'5 x 13'4", floor: "Main" },
      { name: "Bedroom", dimensions: "10'9 x 9'10", floor: "Main" },
      { name: "Bedroom", dimensions: "13'4 x 9'6", floor: "Main" },
      { name: "Recreation Room", dimensions: "33'7 x 14'4", floor: "Below" },
      { name: "Bar Room", dimensions: "14'4 x 7'6", floor: "Below" },
    ],
    latitude: 49.2750016,
    longitude: -122.8335539,
    parkingSummary: "2 covered (carport)",
  },
  {
    slug: "413-3038-st-george-street",
    mlsNumber: "R3150195",
    status: "active",
    address: "3038 St George Street",
    unit: "413",
    neighbourhoodSlug: "moody-centre",
    buildingSlug: "george",
    price: 559000,
    beds: 1,
    baths: 1,
    sqft: 665,
    yearBuilt: 2020,
    propertyType: "Apartment/Condo",
    listingAgent: "leilani",
    heroImage: {
      src: "/images/listings/413-3038-st-george-street/01.jpg",
      alt: "Living room with balcony access and wall-mounted TV at 413-3038 St George Street, Port Moody",
    },
    galleryImages: [
      { src: "/images/listings/413-3038-st-george-street/02.jpg", alt: "L-shaped kitchen with island, stainless appliances, and subway tile backsplash" },
      { src: "/images/listings/413-3038-st-george-street/03.jpg", alt: "Bathroom with black vanity and brass sconces" },
      { src: "/images/listings/413-3038-st-george-street/04.jpg", alt: "West-facing balcony with a mountain view" },
      { src: "/images/listings/413-3038-st-george-street/05.jpg", alt: "Open-concept living, dining, and kitchen space" },
      { src: "/images/listings/413-3038-st-george-street/06.jpg", alt: "Open-concept living space, alternate angle" },
      { src: "/images/listings/413-3038-st-george-street/07.jpg", alt: "Kitchen island with a view through to the living room" },
      { src: "/images/listings/413-3038-st-george-street/08.jpg", alt: "Kitchen pantry cabinet with a glimpse of the primary bedroom" },
      { src: "/images/listings/413-3038-st-george-street/09.jpg", alt: "Kitchen detail with subway tile backsplash" },
      { src: "/images/listings/413-3038-st-george-street/10.jpg", alt: "Kitchen stove and sink detail" },
      { src: "/images/listings/413-3038-st-george-street/11.jpg", alt: "View toward the forested hillside and neighbouring townhomes" },
      { src: "/images/listings/413-3038-st-george-street/12.jpg", alt: "Building courtyard patio and pergola" },
    ],
    summary:
      "The George by Marcon. This bright 1 bedroom + large den home features mountain views, high ceilings, an open-concept layout, and a modern kitchen with stainless-steel appliances. The spacious den is large enough to function as a bedroom, office, or flex space. Enjoy a west-facing balcony, 1 parking stall, 1 storage locker, and a pet-friendly building with great amenities including an outdoor patio, BBQ/fire pit area, playground, bike room, dog wash/car wash station and EV charging.",
    highlights: [
      { text: "Modern kitchen with stainless-steel appliances", icon: "chef-hat" },
      { text: "West-facing balcony with mountain views", icon: "umbrella" },
      { text: "Built in 2020  -  like new", icon: "sparkles" },
      { text: "Central Port Moody Centre location", icon: "train-front" },
    ],
    details: [
      {
        label: "Interior",
        rows: [
          { label: "Bedrooms", value: "1 + den" },
          { label: "Bathrooms", value: "1 full, 0 half" },
          { label: "Kitchens", value: "1" },
          { label: "Heating", value: "Baseboard" },
        ],
      },
      {
        label: "Exterior",
        rows: [
          { label: "Construction", value: "Frame - Wood" },
          { label: "Exterior finish", value: "Mixed, Wood" },
          { label: "Foundation", value: "Concrete Perimeter" },
          { label: "Roof", value: "Asphalt" },
          { label: "Outdoor area", value: "Balcony(s)" },
          { label: "Parking", value: "1 total, 1 covered, Garage/Underground, front/side access" },
          { label: "Locker", value: "Yes" },
        ],
      },
      {
        label: "Building",
        rows: [
          { label: "Units in development", value: "176" },
          { label: "Total units in strata", value: "176" },
          { label: "Storeys in building", value: "6" },
          { label: "Management company", value: "First Service Residential" },
          {
            label: "Amenities",
            value: "Bike Room, Elevator, In Suite Laundry, Playground, Storage, outdoor patio, BBQ/fire pit area, dog wash/car wash station, EV charging",
          },
        ],
      },
      {
        label: "Community",
        rows: [{ label: "Water supply", value: "City/Municipal" }],
      },
      {
        label: "Taxes & Fees",
        rows: [
          { label: "Gross taxes", value: "$2,426.42/yr" },
          { label: "Maintenance fee", value: "$285.72/mo" },
          { label: "Maint fee includes", value: "Caretaker, Garbage Pickup, Gardening, Hot Water, Management, Sewer, Snow removal" },
          { label: "Zoning", value: "CD" },
        ],
      },
      {
        label: "Other",
        rows: [
          { label: "Pets", value: "Allowed w/ restrictions (2 pets; cats & dogs OK)" },
          { label: "Rentals", value: "Allowed" },
          { label: "Short-term rental (<1yr)", value: "Not allowed" },
          { label: "Title to land", value: "Freehold Strata" },
        ],
      },
    ],
    rooms: [
      { name: "Living Room", dimensions: "12'3 x 11'10", floor: "Main" },
      { name: "Kitchen", dimensions: "11'6 x 6'8", floor: "Main" },
      { name: "Dining Room", dimensions: "11'6 x 6'2", floor: "Main" },
      { name: "Den", dimensions: "7'5 x 6'8", floor: "Main" },
      { name: "Primary Bedroom", dimensions: "11'4 x 9'7", floor: "Main" },
      { name: "Walk-In Closet", dimensions: "7'9 x 4'1", floor: "Main" },
      { name: "Foyer", dimensions: "6'4 x 3'5", floor: "Main" },
    ],
    latitude: 49.2758603,
    longitude: -122.8438031,
    parkingSummary: "1 covered (garage)",
  },
];

export function getActiveOurListings(): OurListing[] {
  return ourListings.filter((l) => l.status === "active" || l.status === "coming-soon");
}

// Most-recently-sold first. Listings with no known soldDate (an older sale
// whose exact close date wasn't captured) sort to the end rather than being
// dropped, so they still show up as portfolio proof.
export function getSoldOurListings(): OurListing[] {
  return ourListings
    .filter((l) => l.status === "sold")
    .sort((a, b) => {
      if (!a.soldDate && !b.soldDate) return 0;
      if (!a.soldDate) return 1;
      if (!b.soldDate) return -1;
      return new Date(b.soldDate).getTime() - new Date(a.soldDate).getTime();
    });
}

const JUST_SOLD_WINDOW_DAYS = 30;

// Sold listings closed within the last 30 days - the "prominent for a
// while, then it settles into the regular Recently Sold list" placement.
// Only includes listings with a known soldDate, since the window can't be
// computed otherwise.
export function getJustSoldListings(): OurListing[] {
  const cutoff = Date.now() - JUST_SOLD_WINDOW_DAYS * 24 * 60 * 60 * 1000;
  return getSoldOurListings().filter((l) => l.soldDate && new Date(l.soldDate).getTime() >= cutoff);
}

export function getOurListingsForNeighbourhood(slug: string): OurListing[] {
  return getActiveOurListings().filter((l) => l.neighbourhoodSlug === slug);
}

export function getOurListingsForBuilding(slug: string): OurListing[] {
  return getActiveOurListings().filter((l) => l.buildingSlug === slug);
}

// Room dimensions are entered as e.g. "11'5 x 10'3"; render with a proper
// multiplication sign everywhere instead of relying on data entry to type ×.
export function formatRoomDimensions(raw: string): string {
  return raw.replace(/\s*x\s*/gi, " × ");
}
