import { CTAButton } from "@/components/cta-button";
import { ContextImage } from "@/components/context-image";
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
        imageSrc="/images/hero/port-moody-hero-original.jpg"
        imageAlt="Calm view across Burrard Inlet in Port Moody with forested mountains, still water, and tree branches framing the shoreline."
        homeSizing
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
      <Section title="Why Port Moody?" intro="Port Moody combines waterfront access, forest trails, village-style condo areas, family neighbourhoods, breweries, SkyTrain, and fast access to the rest of Metro Vancouver. The right choice depends on how you actually live.">
        <ContextImage src="/images/phase1/port-moody-forest-path.jpg" alt="Forest trail in Port Moody with sunlight filtering through trees." />
      </Section>
      <Section title="Port Moody market snapshot" intro="Phase 1 uses clear placeholders until verified monthly commentary is ready. No fake market numbers are included." tone="white">
        <MarketSnapshot />
      </Section>
      <Section title="Selling in Port Moody" intro="A strong listing needs pricing strategy, property preparation, media, local lifestyle positioning, buyer targeting, fast follow-up, and disciplined negotiation.">
        <CTAButton href="/sell">Learn about selling</CTAButton>
      </Section>
      <Section title="Buying in Port Moody" intro="The right property depends on micro-market, commute, strata health, parking, slope, schools, future development, and resale demand." tone="white">
        <CTAButton href="/buy">Learn about buying</CTAButton>
      </Section>
      <Section title="Coming next: deeper local guides" intro="Suter Brook, Newport Village, Klahanie, Moody Centre, and Heritage Mountain guides are planned next. They are not part of Phase 1 and are not linked yet.">
        <ContextImage src="/images/phase1/port-moody-community-building.jpg" alt="Community building in Port Moody surrounded by trees on a sunny day." />
      </Section>
      <Section title="Meet Leilani and Paul" tone="white">
        <div className="grid gap-5 md:grid-cols-2">
          <TeamMemberCard name="Leilani Fong, Personal Real Estate Corporation" role="Listing strategy and negotiation" note="Leilani brings nearly two decades of real estate expertise to every client interaction. A top 2% producer with eXp Realty and a 2x ICON Agent, she has successfully guided over $500 million in residential transactions across Vancouver, Coquitlam, Burnaby, and Port Moody. Known for her exceptional negotiation skills and client-centric approach, Leilani specializes in residential properties, luxury homes, and investment opportunities. Her clients consistently praise her market knowledge, responsiveness, and unwavering commitment to finding solutions that genuinely serve their interests." focus={["Listing pricing strategy", "Offer negotiation", "Seller preparation", "Market positioning"]} />
          <TeamMemberCard name="Paul Bennett" role="Licensed realtor, research, media, and local intelligence" note="Paul brings a unique blend of investor experience and data-driven insight to real estate. After years as a residential investor and renovation enthusiast, he recently became licensed and discovered his passion for helping others navigate complex decisions with confidence. He specializes in investment analysis, where he leverages data and market trends to uncover opportunity, and pre-sale purchases, where he conducts rigorous unit and building analysis. His approach is straightforward—provide the detailed information and analysis you need to feel confident in your decision, then make it easy and enjoyable to work together." focus={["Investment property analysis", "Pre-sale building evaluation", "Market research and analysis", "Buyer decision clarity"]} photoSrc="/images/team/paul.jpeg" />
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
