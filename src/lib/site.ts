export const siteConfig = {
  name: "Live in Port Moody",
  domain: "liveinportmoody.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://liveinportmoody.com",
  description:
    "A local real estate and lifestyle resource from Leilani Fong, Personal Real Estate Corporation and Paul Bennett for buyers, sellers, and homeowners in Port Moody, BC.",
  publicEmail: process.env.NEXT_PUBLIC_PUBLIC_EMAIL || "team@liveinportmoody.com",
  publicPhone: process.env.NEXT_PUBLIC_PUBLIC_PHONE || "604-757-1553",
  brokerageName: process.env.NEXT_PUBLIC_BROKERAGE_NAME || "eXp Realty",
  brokerageAddress: process.env.NEXT_PUBLIC_BROKERAGE_ADDRESS || "#1500 - 701 West Georgia Street, Vancouver BC V7Y 1G5",
  ogImage: "/og-placeholder.jpg",
  privacyContactName: "Live in Port Moody",
  legalBusinessName: "Live in Port Moody",
  realtors: "Leilani Fong, Personal Real Estate Corporation and Paul Bennett",
};

export const navItems = [
  { label: "Explore", href: "/explore", submenu: true },
  { label: "Neighbourhoods", href: "/neighbourhoods" },
  { label: "Complexes & Buildings", href: "/complexes" },
  { label: "Listings", href: "/listings" },
  { label: "Market", href: "/market" },
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
];

export const exploreItems = [
  {
    label: "Start Exploring",
    href: "/explore",
    description: "Use the main Port Moody exploration hub to choose your next path.",
    group: "Overview",
  },
  {
    label: "Neighbourhoods",
    href: "/neighbourhoods",
    description: "Compare Port Moody areas by lifestyle, housing type, schools, transit, trails, and buyer fit.",
    group: "Places",
  },
  {
    label: "Townhouse Complexes",
    href: "/complexes",
    description: "Research townhouse complexes, strata considerations, amenities, layouts, and local context.",
    group: "Places",
  },
  {
    label: "Condo Buildings",
    href: "/buildings",
    description: "Compare condo buildings by location, age, amenities, construction, transit access, and fit.",
    group: "Places",
  },
  {
    label: "Listings",
    href: "/listings",
    description: "Start with active listings, then use local guides to understand the property context.",
    group: "Property Search",
  },
  {
    label: "Moving to Port Moody",
    href: "/move-to-port-moody",
    description: "Understand lifestyle, commute, hillsides, amenities, and relocation trade-offs.",
    group: "Local Life",
  },
  {
    label: "Schools",
    href: "/resources#schools",
    description: "Use school context as one input in a broader neighbourhood and property decision.",
    group: "Local Life",
  },
  {
    label: "Trails",
    href: "/move-to-port-moody#trails",
    description: "Explore the outdoor lifestyle that shapes daily life in Port Moody.",
    group: "Local Life",
  },
  {
    label: "Transit",
    href: "/move-to-port-moody#transit",
    description: "Compare SkyTrain, driving, walking, and bike access by area.",
    group: "Local Life",
  },
  {
    label: "Market",
    href: "/market",
    description: "Read Port Moody market notes without generic spin or fake numbers.",
    group: "Resources",
  },
  {
    label: "Buyer Resources",
    href: "/buy",
    description: "Get buyer guidance for micro-markets, shortlist decisions, and offer context.",
    group: "Resources",
  },
  {
    label: "Seller Resources",
    href: "/sell",
    description: "Plan positioning, pricing, media, and launch strategy for a Port Moody sale.",
    group: "Resources",
  },
  {
    label: "Resource Library",
    href: "/resources",
    description: "Find checklists, local questions, relocation prompts, and market-note signup.",
    group: "Resources",
  },
];

export const footerLinks = [
  { label: "Explore Port Moody", href: "/explore" },
  { label: "Neighbourhoods", href: "/neighbourhoods" },
  { label: "Townhouse Complexes", href: "/complexes" },
  { label: "Condo Buildings", href: "/buildings" },
  { label: "Listings", href: "/listings" },
  { label: "Market", href: "/market" },
  { label: "Move to Port Moody", href: "/move-to-port-moody" },
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Ask a Question", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export const phaseOneRoutes = [
  "/",
  "/buy",
  "/sell",
  "/move-to-port-moody",
  "/market",
  "/resources",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];
