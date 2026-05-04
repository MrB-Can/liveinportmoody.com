import { CTAButton } from "@/components/cta-button";
import { ImageHero } from "@/components/image-hero";
import { LeadForm } from "@/components/lead-form";
import { MarketSnapshot } from "@/components/market-snapshot";
import { Section } from "@/components/section";
import { TeamMemberCard } from "@/components/team-member-card";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Port Moody Real Estate Intelligence",
  description: "Port Moody real estate guidance, neighbourhood insight, seller strategy, buyer education, and local market context from Leilani Fong, Personal Real Estate Corporation and Paul Bennett.",
  path: "/",
});

const pathCards = [
  ["I want to buy in Port Moody", "Understand the trade-offs between walkability, transit, schools, strata risk, property type, and resale demand.", "/buy"],
  ["I am thinking of selling", "Get practical positioning around value, timing, preparation, media, buyer demand, and negotiation.", "/sell"],
  ["I might move here", "Start with lifestyle, commute, schools, trails, density, and what each part of Port Moody feels like.", "/move-to-port-moody"],
];

export default function HomePage() {
  return (
    <>
      <ImageHero
        eyebrow="Live in Port Moody"
        title="Port Moody real estate intelligence from people who live it."
        subtitle="Neighbourhood insight, seller strategy, buyer guidance, local video, and market context from Leilani Fong, Personal Real Estate Corporation and Paul Bennett."
        primaryCta={{ label: "Explore Port Moody", href: "#paths" }}
        secondaryCta={{ label: "Ask a local real estate question", href: "#ask" }}
      />
      <Section eyebrow="Start here" title="What are you trying to do?" tone="white">
        <div id="paths" className="grid gap-4 md:grid-cols-3">
          {pathCards.map(([title, copy, href]) => (
            <article key={title} className="rounded-lg border border-softBorder bg-mist p-6">
              <h2 className="font-heading text-2xl text-deepInlet">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slateText">{copy}</p>
              <div className="mt-5"><CTAButton href={href} variant="secondary">Continue</CTAButton></div>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Why Port Moody?" intro="Port Moody combines waterfront access, forest trails, village-style condo areas, family neighbourhoods, breweries, SkyTrain, and fast access to the rest of Metro Vancouver. The right choice depends on how you actually live." />
      <Section title="Port Moody market snapshot" intro="Phase 1 uses clear placeholders until verified monthly commentary is ready. No fake market numbers are included." tone="white">
        <MarketSnapshot />
      </Section>
      <Section title="Selling in Port Moody" intro="A strong listing needs pricing strategy, property preparation, media, local lifestyle positioning, buyer targeting, fast follow-up, and disciplined negotiation.">
        <CTAButton href="/sell">Learn about selling</CTAButton>
      </Section>
      <Section title="Buying in Port Moody" intro="The right property depends on micro-market, commute, strata health, parking, slope, schools, future development, and resale demand." tone="white">
        <CTAButton href="/buy">Learn about buying</CTAButton>
      </Section>
      <Section title="Coming next: deeper local guides" intro="Suter Brook, Newport Village, Klahanie, Moody Centre, and Heritage Mountain guides are planned next. They are not part of Phase 1 and are not linked yet." />
      <Section title="Meet Leilani and Paul" tone="white">
        <div className="grid gap-5 md:grid-cols-2">
          <TeamMemberCard name="Leilani Fong, Personal Real Estate Corporation" role="Listing strategy and negotiation" note="TODO: final bio, brokerage facts, and production claims required before launch." focus={["Seller confidence", "Pricing judgment", "Transaction experience", "Offer situations"]} />
          <TeamMemberCard name="Paul Bennett" role="Licensed realtor, research, media, and local intelligence" note="TODO: final bio, licence/public profile details, and approved credibility items required before launch." focus={["Digital marketing", "Property storytelling", "Buyer education", "Analytics and CRM intelligence"]} />
        </div>
      </Section>
      <Section title="Ask a local question" tone="sand">
        <div id="ask" className="max-w-2xl">
          <LeadForm formType="ask-question" leadType="local-question" ctaLabel="Ask a local question" title="What are you trying to figure out?" />
        </div>
      </Section>
    </>
  );
}
