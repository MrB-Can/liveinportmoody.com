export type OurListingStatus = "active" | "coming-soon" | "pending" | "sold";
export type ListingAgent = "paul" | "leilani" | "both";

export type OurListingGalleryImage = { src: string; alt: string; caption?: string };
export type OurListingRoom = { name: string; dimensions: string; floor?: string };
export type OurListingDetailRow = { label: string; value: string };
export type OurListingDetailTab = { label: string; rows: OurListingDetailRow[] };

// Curated icon keys for listing highlights  -  kept as a closed set (rather than
// guessing an icon from free-text) so each bullet gets a deliberately chosen icon.
export type OurListingHighlightIcon = "chef-hat" | "umbrella" | "sparkles" | "train-front";
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
];

export function getActiveOurListings(): OurListing[] {
  return ourListings.filter((l) => l.status === "active" || l.status === "coming-soon");
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
