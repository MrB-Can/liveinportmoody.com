import { ImageHero } from "@/components/image-hero";
import { LeadForm } from "@/components/lead-form";
import { MarketSnapshot } from "@/components/market-snapshot";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Port Moody Market Notes",
  description: "Port Moody market commentary placeholders for detached homes, townhomes, condos, buyer demand, and seller conditions without fake statistics.",
  path: "/market",
});

export default function MarketPage() {
  return (
    <>
      <ImageHero imageSrc="/hero-market.png" title="Port Moody market notes without the generic spin." subtitle="Monthly context for detached homes, townhomes, condos, buyer demand, seller conditions, and neighbourhood-level differences." primaryCta={{ label: "Get monthly market notes", href: "#market-form" }} secondaryCta={{ label: "Ask about your property type", href: "#market-form" }} />
      <Section title="Current market summary placeholder" intro="The first monthly Port Moody market note will be published here after launch. This page intentionally avoids fake market numbers." tone="white"><MarketSnapshot /></Section>
      <Section title="Detached notes placeholder" intro="Detached commentary will be added after verified market review." />
      <Section title="Townhome notes placeholder" intro="Townhome commentary will be added after verified market review." tone="white" />
      <Section title="Condo notes placeholder" intro="Condo commentary will be added after verified market review." />
      <Section title="Buyer interpretation placeholder" intro="Buyer interpretation will be based on actual conditions, inventory, and property type." tone="white" />
      <Section title="Seller interpretation placeholder" intro="Seller interpretation will focus on pricing, preparation, buyer demand, and positioning once the first note is ready." />
      <Section title="Market notes signup form" tone="sand"><div id="market-form" className="max-w-2xl"><LeadForm formType="market-notes" leadType="market-update" ctaLabel="Get monthly market notes" title="Get Port Moody market notes" messageLabel="What property type or area should the notes focus on?" /></div></Section>
    </>
  );
}
