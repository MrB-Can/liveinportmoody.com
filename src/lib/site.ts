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
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Move Here", href: "/move-to-port-moody" },
  { label: "Market", href: "/market" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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
