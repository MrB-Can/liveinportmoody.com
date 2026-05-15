import { ContextImage } from "@/components/context-image";
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
      <ImageHero imageSrc="/images/hero/port-moody-hero-original.jpg" imageAlt="Calm view across Burrard Inlet in Port Moody with forested mountains, still water, and tree branches framing the shoreline." title="Port Moody market notes without the generic spin." subtitle="Monthly context for detached homes, townhomes, condos, buyer demand, seller conditions, and neighbourhood-level differences." primaryCta={{ label: "Get monthly market notes", href: "#market-form" }} secondaryCta={{ label: "Ask about your property type", href: "#market-form" }} />
      <Section title="Current market summary placeholder" intro="The first monthly Port Moody market note will be published here after launch. This page intentionally avoids fake market numbers." tone="white"><MarketSnapshot /></Section>
      <Section title="Regional context" intro="Port Moody sits between inlet, hillside, transit, and regional commute patterns. Market notes should be interpreted by property type and location, not as one blended city average."><ContextImage src="/images/phase1/port-moody-regional-view.jpg" alt="View from Port Moody toward the Metro Vancouver skyline with trees and hillside homes in the foreground." /></Section>
      <Section title="Detached and hillside context" intro="Detached and hillside properties can behave differently from village-area condos and townhomes. This section is reserved for context, not placeholder statistics." tone="white"><ContextImage src="/images/phase1/port-moody-hillside-homes.jpg" alt="Port Moody hillside homes framed by trees with the distant skyline in the background." /></Section>
      <Section title="Detached notes placeholder" intro="Detached commentary will be added after verified market review." />
      <Section title="Townhome notes placeholder" intro="Townhome commentary will be added after verified market review." tone="white" />
      <Section title="Condo notes placeholder" intro="Condo commentary will be added after verified market review." />
      <Section title="Buyer interpretation placeholder" intro="Buyer interpretation will be based on actual conditions, inventory, and property type." tone="white" />
      <Section title="Seller interpretation placeholder" intro="Seller interpretation will focus on pricing, preparation, buyer demand, and positioning once the first note is ready." />
      <Section title="Market notes signup form" tone="sand"><div id="market-form" className="max-w-2xl"><LeadForm formType="market-notes" leadType="market-update" ctaLabel="Get monthly market notes" title="Get Port Moody market notes" messageLabel="What property type or area should the notes focus on?" /></div></Section>
    </>
  );
}
