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
    label: "Real Estate",
    href: "/listings",
    groups: [
      {
        items: [
          { label: "Listings", href: "/listings" },
          { label: "Presales", href: "/presales" },
          { label: "Condo Buildings", href: "/buildings" },
          { label: "Townhouse Complexes", href: "/complexes" },
          { label: "Buy", href: "/buy" },
          { label: "Sell", href: "/sell" },
        ],
      },
    ],
  },
  {
    label: "Guides",
    href: "/buyer-guide",
    groups: [
      {
        items: [
          { label: "Buyer Guide", href: "/buyer-guide" },
          { label: "Seller Guide", href: "/seller-guide" },
          { label: "First-Time Buyers", href: "/first-time-home-buyers" },
          { label: "Generational Wealth", href: "/generational-wealth-real-estate" },
          { label: "Request Recent Sales", href: "/request-recent-sales" },
          { label: "FAQ", href: "/faq" },
        ],
      },
    ],
  },
  {
    label: "Local Life",
    href: "/local-businesses",
    groups: [
      {
        items: [
          { label: "Local Businesses", href: "/local-businesses" },
          { label: "Events", href: "/events" },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    groups: [
      {
        items: [
          { label: "About", href: "/about" },
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
    title: "Explore",
    links: [
      { label: "Explore Port Moody", href: "/explore" },
      { label: "Neighbourhoods", href: "/neighbourhoods" },
      { label: "Move to Port Moody", href: "/move-to-port-moody" },
      { label: "Market", href: "/market" },
    ],
  },
  {
    title: "Real Estate",
    links: [
      { label: "Listings", href: "/listings" },
      { label: "Presales", href: "/presales" },
      { label: "Condo Buildings", href: "/buildings" },
      { label: "Townhouse Complexes", href: "/complexes" },
      { label: "Buy", href: "/buy" },
      { label: "Sell", href: "/sell" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "Buyer Guide", href: "/buyer-guide" },
      { label: "Seller Guide", href: "/seller-guide" },
      { label: "First-Time Buyers", href: "/first-time-home-buyers" },
      { label: "Generational Wealth", href: "/generational-wealth-real-estate" },
      { label: "Request Recent Sales", href: "/request-recent-sales" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Local Life",
    links: [
      { label: "Local Businesses", href: "/local-businesses" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "About", href: "/about" },
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
  "/buyer-guide",
  "/seller-guide",
];
