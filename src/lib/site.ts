export const siteConfig = {
  name: "Live in Port Moody",
  domain: "liveinportmoody.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.liveinportmoody.com",
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
  {
    label: "Buy",
    href: "/buy",
    groups: [
      {
        title: "Buying in Port Moody",
        items: [
          { label: "Buy in Port Moody", href: "/buy" },
          { label: "Buyer Guide", href: "/buyer-guide" },
          { label: "First-Time Buyers", href: "/first-time-home-buyers" },
          { label: "Generational Wealth", href: "/generational-wealth-real-estate" },
          { label: "Request Recent Sales", href: "/request-recent-sales" },
          { label: "Presales", href: "/presales" },
          { label: "FAQ", href: "/faq" },
        ],
      },
    ],
  },
  {
    label: "Sell",
    href: "/sell",
    groups: [
      {
        title: "Selling in Port Moody",
        items: [
          { label: "Sell in Port Moody", href: "/sell" },
          { label: "Seller Guide", href: "/seller-guide" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    groups: [
      {
        title: "Guides & Tools",
        items: [
          { label: "Resource Library", href: "/resources" },
          { label: "Market", href: "/market" },
          { label: "Blog", href: "/blog" },
          { label: "FAQ", href: "/faq" },
        ],
      },
      {
        title: "Community",
        items: [
          { label: "Local Businesses", href: "/local-businesses" },
          { label: "Events", href: "/events" },
          { label: "Testimonials", href: "/testimonials" },
          { label: "Accolades", href: "/accolades" },
        ],
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const exploreItems = [
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
    label: "Active Listings",
    href: "/listings",
    description: "Start with active listings, then use local guides to understand the property context.",
    group: "Property Search",
  },
  {
    label: "Presales",
    href: "/presales",
    description: "Research Port Moody presales and new builds with verification-first buyer guidance.",
    group: "Property Search",
  },
  {
    label: "Request Recent Sales",
    href: "/request-recent-sales",
    description: "Request comparable sales context for the buildings, complexes, and areas you're comparing.",
    group: "Property Search",
  },
  {
    label: "Living in Port Moody",
    href: "/move-to-port-moody",
    description: "Understand lifestyle, commute, hillsides, amenities, and relocation trade-offs.",
    group: "Local Life",
  },
  {
    label: "Events",
    href: "/events",
    description: "Port Moody community, seasonal, family, and local events.",
    group: "Local Life",
  },
  {
    label: "Local Businesses",
    href: "/local-businesses",
    description: "Local business, lifestyle, and community group features for Port Moody.",
    group: "Local Life",
  },
  {
    label: "Blog",
    href: "/blog",
    description: "In-depth articles on Port Moody properties, market context, and local life.",
    group: "Local Life",
  },
  {
    label: "Buyer Guide",
    href: "/buyer-guide",
    description: "Step-by-step buyer guidance for micro-markets, shortlist decisions, and offer context.",
    group: "Resources",
  },
  {
    label: "Seller Guide",
    href: "/seller-guide",
    description: "Plan positioning, pricing, media, and launch strategy for a Port Moody sale.",
    group: "Resources",
  },
  {
    label: "Market",
    href: "/market",
    description: "Read Port Moody market notes without generic spin or fake numbers.",
    group: "Resources",
  },
  {
    label: "FAQ",
    href: "/faq",
    description: "Straight answers to common Port Moody real estate questions.",
    group: "Resources",
  },
];

export type SocialLink = { label: string; platform: string; href: string; disabled?: boolean };
export const socialLinks: SocialLink[] = [
  { label: "Instagram", platform: "instagram", href: "#", disabled: true },
  { label: "YouTube", platform: "youtube", href: "#", disabled: true },
  { label: "Facebook", platform: "facebook", href: "#", disabled: true },
];

export type FooterLinkItem = { label: string; href: string };
export type FooterGroup = { title: string; links: FooterLinkItem[] };

export const footerGroups: FooterGroup[] = [
  {
    title: "City Guide",
    links: [
      { label: "Explore Port Moody", href: "/explore" },
      { label: "Neighbourhoods", href: "/neighbourhoods" },
      { label: "Living in Port Moody", href: "/move-to-port-moody" },
      { label: "Events", href: "/events" },
      { label: "Local Businesses", href: "/local-businesses" },
    ],
  },
  {
    title: "Property",
    links: [
      { label: "Townhouse Complexes", href: "/complexes" },
      { label: "Condo Buildings", href: "/buildings" },
      { label: "Listings", href: "/listings" },
      { label: "Presales", href: "/presales" },
      { label: "Market", href: "/market" },
    ],
  },
  {
    title: "Buyers & Sellers",
    links: [
      { label: "Buyer Guide", href: "/buyer-guide" },
      { label: "First-Time Buyers", href: "/first-time-home-buyers" },
      { label: "Seller Guide", href: "/seller-guide" },
      { label: "Request Recent Sales", href: "/request-recent-sales" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Accolades", href: "/accolades" },
      { label: "Contact", href: "/contact" },
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
