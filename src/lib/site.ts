export const siteConfig = {
  name: "Live in Port Moody",
  domain: "liveinportmoody.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.liveinportmoody.com",
  description:
    "A local real estate and lifestyle resource from Leilani Fong PREC and Paul Bennett, licensed REALTORS with eXp Realty Canada, for buyers, sellers, and homeowners in Port Moody, BC.",
  publicEmail: process.env.NEXT_PUBLIC_PUBLIC_EMAIL || "team@liveinportmoody.com",
  publicPhone: process.env.NEXT_PUBLIC_PUBLIC_PHONE || "604-757-1553",
  brokerageName: process.env.NEXT_PUBLIC_BROKERAGE_NAME || "eXp Realty",
  brokerageAddress: process.env.NEXT_PUBLIC_BROKERAGE_ADDRESS || "#1500 - 701 West Georgia Street, Vancouver BC V7Y 1G5",
  ogImage: "/images/social/live-in-port-moody-og.png",
  privacyContactName: "Live in Port Moody",
  legalBusinessName: "Live in Port Moody",
  realtors: "Leilani Fong PREC and Paul Bennett, licensed REALTORS with eXp Realty Canada",
};

export const headerAssetTodo = {
  item: "Facebook-aligned logo/header asset",
  status: "needs_approved_asset",
  note: "Do not replace the current header or logo artwork until an approved Facebook-aligned asset is available.",
} as const;

export type NavDropdownItem = { label: string; href: string; badge?: string };
export type NavGroup = { title?: string; items: NavDropdownItem[] };
export type NavItem = {
  label: string;
  href: string;
  /** When true the label itself is a link to href in addition to opening the dropdown */
  linkedLabel?: boolean;
  submenu?: boolean;
  groups?: NavGroup[];
};

export const navItems: NavItem[] = [
  {
    label: "Buy",
    href: "/buy",
    groups: [
      {
        items: [
          { label: "Search Listings", href: "/listings" },
          { label: "Buyer Guide", href: "/buyer-guide" },
          { label: "First-Time Buyers", href: "/first-time-home-buyers" },
          { label: "Neighbourhoods", href: "/neighbourhoods" },
          { label: "Buildings", href: "/buildings" },
          { label: "Complexes", href: "/complexes" },
          { label: "Request Recent Sales", href: "/request-recent-sales" },
        ],
      },
    ],
  },
  {
    label: "Sell",
    href: "/sell",
    groups: [
      {
        items: [
          { label: "Seller Guide", href: "/seller-guide" },
          { label: "Home Evaluation", href: "/home-evaluation" },
          { label: "How We Do It", href: "/how-we-do-it" },
          { label: "Recently Sold", href: "/recently-sold" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
  {
    label: "Relocate",
    href: "/local-life",
    groups: [
      {
        items: [
          { label: "Local Life", href: "/local-life" },
          { label: "Neighbourhoods", href: "/neighbourhoods" },
          { label: "Schools, Parks & Trails", href: "/local-life" },
          { label: "Local Insights", href: "/local-insights" },
          { label: "Ask a Local Question", href: "/contact" },
        ],
      },
    ],
  },
  {
    label: "Neighbourhoods",
    href: "/neighbourhoods",
    linkedLabel: true,
    groups: [
      {
        items: [
          { label: "Heritage Mountain", href: "/neighbourhoods/heritage-mountain" },
          { label: "Heritage Woods", href: "/neighbourhoods/heritage-woods" },
          { label: "North Shore Port Moody", href: "/neighbourhoods/north-shore-port-moody" },
          { label: "Moody Centre", href: "/neighbourhoods/moody-centre" },
          { label: "Glenayre", href: "/neighbourhoods/glenayre" },
          { label: "College Park", href: "/neighbourhoods/college-park" },
          { label: "Anmore", href: "/neighbourhoods/anmore" },
          { label: "Barber Street", href: "/neighbourhoods/barber-street" },
          { label: "Belcarra", href: "/neighbourhoods/belcarra" },
          { label: "Mountain Meadows", href: "/neighbourhoods/mountain-meadows" },
        ],
      },
    ],
  },
  {
    label: "Buildings & Complexes",
    href: "/buildings",
    groups: [
      {
        items: [
          { label: "Condo Buildings", href: "/buildings" },
          { label: "Townhouse Complexes", href: "/complexes" },
          { label: "Presales & New Builds", href: "/presales" },
        ],
      },
    ],
  },
  {
    label: "Local Life",
    href: "/local-life",
    groups: [
      {
        items: [
          { label: "Local Life", href: "/local-life" },
          { label: "Featured Businesses", href: "/featured-businesses" },
          { label: "Events", href: "/events" },
          { label: "Parks, Trails & Schools", href: "/local-life" },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/meet-us",
    groups: [
      {
        items: [
          { label: "Meet Us", href: "/meet-us" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
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
    href: "/local-life",
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
    label: "Featured Businesses",
    href: "/featured-businesses",
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
  { label: "Instagram", platform: "instagram", href: "https://www.instagram.com/liveinportmoody/" },
  { label: "Facebook", platform: "facebook", href: "https://www.facebook.com/liveinportmoody" },
];

export type FooterLinkItem = { label: string; href: string };
export type FooterGroup = { title: string; links: FooterLinkItem[] };

export const footerGroups: FooterGroup[] = [
  {
    title: "Buy",
    links: [
      { label: "Search Listings", href: "/listings" },
      { label: "Buyer Guide", href: "/buyer-guide" },
      { label: "First-Time Buyers", href: "/first-time-home-buyers" },
      { label: "Buildings & Complexes", href: "/buildings" },
      { label: "Request Recent Sales", href: "/request-recent-sales" },
    ],
  },
  {
    title: "Sell",
    links: [
      { label: "Seller Guide", href: "/seller-guide" },
      { label: "Home Evaluation", href: "/home-evaluation" },
      { label: "How We Do It", href: "/how-we-do-it" },
      { label: "Recently Sold", href: "/recently-sold" },
    ],
  },
  {
    title: "Relocate",
    links: [
      { label: "Move to Port Moody", href: "/move-to-port-moody" },
      { label: "Neighbourhoods", href: "/neighbourhoods" },
      { label: "Local Insights", href: "/local-insights" },
    ],
  },
  {
    title: "Neighbourhoods",
    links: [
      { label: "Compare Neighbourhoods", href: "/neighbourhoods" },
      { label: "Condo Buildings", href: "/buildings" },
      { label: "Townhouse Complexes", href: "/complexes" },
      { label: "Presales", href: "/presales" },
    ],
  },
  {
    title: "Local Life",
    links: [
      { label: "Local Life", href: "/local-life" },
      { label: "Featured Businesses", href: "/featured-businesses" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Meet Us", href: "/meet-us" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const footerLinks = footerGroups.flatMap((g) => g.links);

export type TrustItem = {
  title: string;
  description: string;
  badgeAssetPath?: string;
  logoAssetPath?: string;
  sourceUrl?: string;
  verified?: boolean;
};

export const trustItems: TrustItem[] = [
  {
    title: "Licensed BC REALTORS",
    description: "Paul Bennett and Leilani Fong PREC · eXp Realty",
    verified: true,
  },
  {
    title: "Port Moody focused",
    description: "We live and work here. This is our local market.",
    verified: true,
  },
  {
    title: "Research-first approach",
    description: "Verified local context, not generic market commentary.",
    verified: true,
  },
  {
    title: "Verified accolades",
    description: "Reviews and recognition published from verified sources.",
    verified: true,
  },
];

export const phaseOneRoutes = [
  "/",
  "/about",
  "/buy",
  "/sell",
  "/local-life",
  "/market",
  "/contact",
  "/privacy",
  "/terms",
  "/buyer-guide",
  "/seller-guide",
  "/first-time-home-buyers",
  "/generational-wealth-real-estate",
  "/meet-us",
  "/home-evaluation",
  "/how-we-do-it",
  "/recently-sold",
  "/raving-fans",
  "/local-insights",
  "/featured-businesses",
  "/events",
  "/presales",
  "/faq",
];
