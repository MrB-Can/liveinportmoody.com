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

export const headerAssetTodo = {
  item: "Facebook-aligned logo/header asset",
  status: "pending_approved_asset",
  note: "Do not replace the current header or logo artwork until an approved Facebook-aligned asset is available.",
} as const;

export type NavDropdownItem = { label: string; href: string; badge?: string };
export type NavGroup = { title?: string; items: NavDropdownItem[] };
export type NavItem = {
  label: string;
  href: string;
  submenu?: boolean;
  groups?: NavGroup[];
};

export const navItems: NavItem[] = [
  { label: "Explore", href: "/explore", submenu: true },
  {
    label: "Neighbourhoods",
    href: "/neighbourhoods",
    groups: [
      {
        title: "Neighbourhood guides",
        items: [
          { label: "All neighbourhoods", href: "/neighbourhoods" },
          { label: "Heritage Mountain", href: "/neighbourhoods/heritage-mountain", badge: "Guide" },
          { label: "Heritage Woods", href: "/neighbourhoods/heritage-woods", badge: "Preview" },
          { label: "Moody Centre", href: "/neighbourhoods/moody-centre", badge: "Preview" },
          { label: "Glenayre", href: "/neighbourhoods/glenayre", badge: "Preview" },
        ],
      },
    ],
  },
  {
    label: "Buildings & Complexes",
    href: "/complexes",
    groups: [
      {
        title: "Townhouse complexes",
        items: [
          { label: "All complexes", href: "/complexes" },
          { label: "Treetops", href: "/complexes/treetops-101-parkside-drive", badge: "Guide" },
          { label: "Discovery Ridge", href: "/complexes/discovery-ridge", badge: "Preview" },
          { label: "Aria Townhomes", href: "/complexes/aria-townhomes", badge: "Preview" },
          { label: "Klahanie Townhomes", href: "/complexes/klahanie-townhomes", badge: "Preview" },
          { label: "College Park Townhomes", href: "/complexes/college-park-townhomes", badge: "Preview" },
        ],
      },
      {
        title: "Condo buildings",
        items: [
          { label: "All buildings", href: "/buildings" },
        ],
      },
    ],
  },
  { label: "Listings", href: "/listings" },
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Resources", href: "/resources" },
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
  {
    label: "Presales",
    href: "/presales",
    description: "Research Port Moody presales and new builds with verification-first buyer guidance.",
    group: "Resources",
  },
  {
    label: "Local Businesses",
    href: "/local-businesses",
    description: "Future hub for verified local business, lifestyle, and community group features.",
    group: "Local Life",
  },
  {
    label: "Events",
    href: "/events",
    description: "Future hub for verified Port Moody community, seasonal, family, and real estate events.",
    group: "Local Life",
  },
  {
    label: "Testimonials",
    href: "/testimonials",
    description: "Approved public reviews and client stories will be added without invented testimonials.",
    group: "Resources",
  },
  {
    label: "Accolades",
    href: "/accolades",
    description: "Approved recognition, community involvement, and professional background.",
    group: "Resources",
  },
];

export type SocialLink = { label: string; platform: string; href: string };
export const socialLinks: SocialLink[] = [
  { label: "Instagram", platform: "instagram", href: "#" },
  { label: "YouTube", platform: "youtube", href: "#" },
  { label: "Facebook", platform: "facebook", href: "#" },
];

export type FooterLinkItem = { label: string; href: string };
export type FooterGroup = { title: string; links: FooterLinkItem[] };

export const footerGroups: FooterGroup[] = [
  {
    title: "City & Community",
    links: [
      { label: "Explore Port Moody", href: "/explore" },
      { label: "Living in Port Moody", href: "/move-to-port-moody" },
      { label: "Market", href: "/market" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Property",
    links: [
      { label: "Neighbourhoods", href: "/neighbourhoods" },
      { label: "Townhouse Complexes", href: "/complexes" },
      { label: "Condo Buildings", href: "/buildings" },
      { label: "Listings", href: "/listings" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Buy", href: "/buy" },
      { label: "Sell", href: "/sell" },
      { label: "Resources", href: "/resources" },
      { label: "Ask a Question", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export const footerLinks = footerGroups.flatMap((g) => g.links);

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
