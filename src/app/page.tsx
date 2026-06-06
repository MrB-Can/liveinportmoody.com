import { Home, MapPin, Train, Trees, type LucideIcon, Users, Waves } from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { ImageHero } from "@/components/image-hero";
import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { TeamImagePlaceholder } from "@/components/team-image-placeholder";
import { TrustStrip } from "@/components/trust-strip";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Port Moody Real Estate Decision Engine",
  description:
    "Local guides, market context, listings, and practical real estate advice for buying, selling, and comparing homes in Port Moody.",
  path: "/",
});

const decisionCards = [
  {
    title: "Buy in Port Moody",
    copy: "Find the right neighbourhood, property type, building, or complex before you write an offer.",
    cta: "Buying guidance",
    href: "/buy",
  },
  {
    title: "Sell in Port Moody",
    copy: "Position your home around what buyers actually value here: pricing, preparation, and local market context.",
    cta: "Selling guidance",
    href: "/sell",
  },
  {
    title: "Relocate to Port Moody",
    copy: "Understand lifestyle, commute, schools, trails, density, and neighbourhood trade-offs before you commit.",
    cta: "Relocation guide",
    href: "/local-life",
  },
  {
    title: "Compare neighbourhoods",
    copy: "See which areas fit walkability, schools, trails, transit, space, and budget.",
    cta: "Compare areas",
    href: "/neighbourhoods",
  },
  {
    title: "Research buildings and complexes",
    copy: "Review condo buildings and townhouse complexes by location, strata context, and buyer considerations.",
    cta: "Research buildings",
    href: "/buildings",
  },
  {
    title: "See current listings",
    copy: "Search active MLS Reciprocity listings and ask for local context on any property.",
    cta: "View listings",
    href: "/listings",
  },
];

const glanceTiles: { label: string; icon: LucideIcon }[] = [
  { label: "Waterfront lifestyle", icon: Waves },
  { label: "SkyTrain access", icon: Train },
  { label: "Forest trails", icon: Trees },
  { label: "Family neighbourhoods", icon: Users },
  { label: "Village-style condo areas", icon: Home },
  { label: "Limited land supply", icon: MapPin },
];

const guideFocusCards = [
  {
    title: "Places and property types",
    copy: "Compare Port Moody neighbourhoods, condo buildings, townhouse complexes, presales, new builds, and current listing context in one local research flow.",
  },
  {
    title: "Community and daily life",
    copy: "Use local-business, event, school-catchment, trail, commute, and village-context pages to understand what living here actually feels like.",
  },
  {
    title: "Decisions over time",
    copy: "Work through buying, selling, first-time ownership, and longer-term real estate questions without treating every property decision as a quick listing search.",
  },
];

const leadMagnetCards = [
  {
    title: "Buyer Guide",
    copy: "Request the buyer guide and ask for help comparing neighbourhoods, property types, buildings, complexes, and offer questions.",
    cta: "Request the guide",
    href: "/buyer-guide",
  },
  {
    title: "Seller Guide",
    copy: "Request the seller guide and ask for help with preparation, pricing, positioning, media, and launch planning.",
    cta: "Request the guide",
    href: "/seller-guide",
  },
  {
    title: "First-Time Buyer Guide",
    copy: "Learn the buying process, closing-cost planning, strata basics, common mistakes, and Port Moody area fit.",
    cta: "Learn more",
    href: "/first-time-home-buyers",
  },
  {
    title: "Generational Wealth Guide",
    copy: "Explore long-term real estate thinking, family help, rental decisions, cash flow, taxes, leverage, and market-cycle risk.",
    cta: "Ask for help",
    href: "/generational-wealth-real-estate",
  },
  {
    title: "Recent Sales Context",
    copy: "Request comparable-sales context where permitted. Sold data availability depends on applicable rules and professional context.",
    cta: "Request context",
    href: "/request-recent-sales",
  },
  {
    title: "Presales Updates",
    copy: "Get notified about verified Port Moody presale and new-build information when there is current context worth reviewing.",
    cta: "Get notified",
    href: "/presales",
  },
];

const communityCards = [
  {
    title: "Local life",
    copy: "Local cafes, breweries, parks, trails, schools, and community context that shapes daily life in Port Moody.",
    cta: "Explore local life",
    href: "/local-life",
  },
  {
    title: "Featured businesses",
    copy: "Local cafes, breweries, fitness, services, and community groups worth knowing.",
    cta: "Featured businesses",
    href: "/featured-businesses",
  },
  {
    title: "Events",
    copy: "Community, seasonal, and family events that help you understand what living in Port Moody feels like.",
    cta: "View events",
    href: "/events",
  },
  {
    title: "Raving fans",
    copy: "Client stories and approved public reviews from buyers, sellers, and relocators who worked with Paul and Leilani.",
    cta: "Read client stories",
    href: "/raving-fans",
  },
];

const areaCards = [
  {
    name: "Suter Brook",
    bestFor: "Walkable condo living",
    housing: "Condos and townhomes",
    tradeoff: "More density and strata review required",
  },
  {
    name: "Newport Village",
    bestFor: "Village convenience",
    housing: "Condos and nearby townhomes",
    tradeoff: "Older buildings vary by strata health",
  },
  {
    name: "Klahanie",
    bestFor: "Amenities and inlet access",
    housing: "Condos and townhomes",
    tradeoff: "Buyer demand can be competitive",
  },
  {
    name: "Moody Centre",
    bestFor: "Transit and redevelopment context",
    housing: "Condos, townhomes, and detached pockets",
    tradeoff: "Change and construction need watching",
  },
  {
    name: "Heritage Mountain",
    bestFor: "Space and family streets",
    housing: "Detached homes and townhomes",
    tradeoff: "Less walkable to daily retail",
  },
  {
    name: "College Park",
    bestFor: "Access to SFU and commuter routes",
    housing: "Detached homes and townhomes",
    tradeoff: "Slope and renovation needs vary",
  },
  {
    name: "Glenayre",
    bestFor: "Quiet residential feel",
    housing: "Detached homes",
    tradeoff: "Inventory is often limited",
  },
  {
    name: "Pleasantside",
    bestFor: "North shore lifestyle",
    housing: "Detached homes and townhomes",
    tradeoff: "Fewer services within a short walk",
  },
  {
    name: "Ioco / North Shore",
    bestFor: "Privacy and nature access",
    housing: "Detached homes",
    tradeoff: "Longer drive times to SkyTrain",
  },
  {
    name: "Barber Street",
    bestFor: "Waterfront and character streets",
    housing: "Detached homes",
    tradeoff: "Lot, slope, and condition matter heavily",
  },
];

const marketCards = [
  {
    title: "Detached homes",
    copy: "Limited supply, land value, renovation potential, lot characteristics, slope, privacy, and condition matter heavily.",
  },
  {
    title: "Townhomes",
    copy: "Family demand, strata condition, parking, outdoor space, layout, and school-area fit drive competition.",
  },
  {
    title: "Condos",
    copy: "Walkability, building age, strata fees, amenities, reputation, and SkyTrain proximity matter.",
  },
  {
    title: "Strata risk",
    copy: "Review depreciation reports, insurance, bylaws, minutes, strata fees, and upcoming capital projects.",
  },
];

const buyingSteps = ["Choose area", "Compare property type", "Review building or strata", "Offer with confidence"];
const sellingSteps = ["Price strategy", "Prep and positioning", "Media and launch", "Negotiation and follow-up"];

function StepList({ title, steps }: { title: string; steps: string[] }) {
  return (
    <article className="rounded-lg border border-softBorder bg-white p-6">
      <h3 className="font-heading text-2xl text-deepInlet">{title}</h3>
      <ol className="mt-5 grid gap-3">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-3 rounded-md bg-mist px-4 py-3 text-sm font-semibold text-charcoal">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-deepInlet text-white">{index + 1}</span>
            {step}
          </li>
        ))}
      </ol>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      <ImageHero
        eyebrow="Live in Port Moody"
        title="Make clearer Port Moody real estate decisions."
        subtitle="Local neighbourhood guides, buyer strategy, seller advice, building research, listings, and market context from people who live and work in Port Moody."
        primaryCta={{ label: "Get started", href: "/get-started" }}
        secondaryCta={{ label: "Ask a local question", href: "#ask" }}
        imageSrc="/images/hero/port-moody-hero-original.jpg"
        imageAlt="Calm view across Burrard Inlet in Port Moody with forested mountains, still water, and tree branches framing the shoreline."
        homeSizing
      />

      <TrustStrip />

      <Section eyebrow="Buy, sell, or relocate" title="What are you trying to figure out?" tone="white">
        <div id="decision-hub" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {decisionCards.map((card) => (
            <article key={card.title} className="flex min-h-64 flex-col rounded-lg border border-softBorder bg-mist p-6">
              <h2 className="font-heading text-2xl text-deepInlet">{card.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-slateText">{card.copy}</p>
              <div className="mt-5">
                <CTAButton href={card.href} variant="secondary">
                  {card.cta}
                </CTAButton>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="A Port Moody guide, not just a listing search"
        intro="LiveInPortMoody.com is a local decision guide for people comparing where to live, what to buy, when to sell, and which questions to ask before they commit."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {guideFocusCards.map((card) => (
            <article key={card.title} className="rounded-lg border border-softBorder bg-white p-6">
              <h2 className="font-heading text-2xl text-deepInlet">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slateText">{card.copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Guides and requests"
        title="Start with the right next question"
        intro="Request a guide, ask for help, get notified, or ask for compliant market context. These pages use request language for guide assets and verified data."
        tone="white"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {leadMagnetCards.map((card) => (
            <article key={card.title} className="flex min-h-56 flex-col rounded-lg border border-softBorder bg-mist p-6">
              <h2 className="font-heading text-2xl text-deepInlet">{card.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-slateText">{card.copy}</p>
              <div className="mt-5">
                <CTAButton href={card.href} variant="secondary">
                  {card.cta}
                </CTAButton>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Port Moody at a glance"
        intro="Port Moody is not one market. Newport Village, Suter Brook, Klahanie, Heritage Mountain, College Park, Glenayre, and the north shore areas attract different buyers and behave differently."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {glanceTiles.map((tile) => (
            <div key={tile.label} className="rounded-lg border border-softBorder bg-white px-5 py-4 font-semibold text-deepInlet">
              <tile.icon className="h-6 w-6 text-forest mb-3" />
              {tile.label}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Find the right Port Moody neighbourhood" tone="white">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-lg border border-softBorder bg-mist p-6">
            <div className="grid min-h-[360px] gap-3 sm:grid-cols-2">
              {["North Shore", "Heritage Mountain", "Moody Centre", "Newport / Suter Brook", "Klahanie", "College Park"].map((area) => (
                <div key={area} className="grid place-items-center rounded-md border border-seaGlass bg-white px-4 py-6 text-center text-sm font-semibold text-deepInlet">
                  {area}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-softBorder bg-deepInlet p-6 text-white">
            <h3 className="font-heading text-3xl">Compare areas before you compare homes.</h3>
            <p className="mt-4 text-sm leading-6 text-mist">
              The same budget can mean a walkable condo, a hillside townhouse, an older detached home, or a quieter north shore property. Start with the area logic, then narrow the housing options.
            </p>
            <div className="mt-6">
              <CTAButton href="/neighbourhoods" variant="secondary">
                Compare neighbourhoods
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Explore Port Moody by area">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {areaCards.map((area) => (
            <article key={area.name} className="rounded-lg border border-softBorder bg-white p-5">
              <h3 className="font-heading text-2xl text-deepInlet">{area.name}</h3>
              <dl className="mt-4 grid gap-3 text-sm leading-6">
                <div>
                  <dt className="font-semibold text-charcoal">Best for</dt>
                  <dd className="text-slateText">{area.bestFor}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-charcoal">Main housing</dt>
                  <dd className="text-slateText">{area.housing}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-charcoal">Trade-off</dt>
                  <dd className="text-slateText">{area.tradeoff}</dd>
                </div>
              </dl>
              <div className="mt-5">
                <CTAButton href="/neighbourhoods" variant="ghost">
                  View area guide
                </CTAButton>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Research homes"
        intro="Use neighbourhood context, building notes, complex research, and active listing conversations together. The goal is to understand what you are buying before the offer deadline."
        tone="white"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-lg border border-softBorder bg-mist p-6">
            <h3 className="font-heading text-2xl text-deepInlet">Buildings</h3>
            <p className="mt-3 text-sm leading-6 text-slateText">Review condo building context, location, strata considerations, and buyer questions.</p>
            <div className="mt-5">
              <CTAButton href="/buildings" variant="secondary">Research buildings</CTAButton>
            </div>
          </article>
          <article className="rounded-lg border border-softBorder bg-mist p-6">
            <h3 className="font-heading text-2xl text-deepInlet">Complexes</h3>
            <p className="mt-3 text-sm leading-6 text-slateText">Compare townhouse and strata communities by layout, parking, outdoor space, and risk.</p>
            <div className="mt-5">
              <CTAButton href="/complexes" variant="secondary">Research complexes</CTAButton>
            </div>
          </article>
          <article className="rounded-lg border border-softBorder bg-mist p-6">
            <h3 className="font-heading text-2xl text-deepInlet">Listings</h3>
            <p className="mt-3 text-sm leading-6 text-slateText">Search active MLS Reciprocity listings and ask what local context is missing from the listing page.</p>
            <p className="mt-3 text-xs leading-5 text-slateText">
              Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.
            </p>
            <div className="mt-5">
              <CTAButton href="/listings" variant="secondary">View listings</CTAButton>
            </div>
          </article>
        </div>
      </Section>

      <Section title="Market intelligence">
        <div className="grid gap-4 md:grid-cols-2">
          {marketCards.map((card) => (
            <article key={card.title} className="rounded-lg border border-softBorder bg-white p-6">
              <h3 className="font-heading text-2xl text-deepInlet">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slateText">{card.copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <CTAButton href="/market" variant="secondary">
            Read market guidance
          </CTAButton>
        </div>
      </Section>

      <Section title="Buying and selling guidance" tone="white">
        <div className="grid gap-5 lg:grid-cols-2">
          <StepList title="Buying process" steps={buyingSteps} />
          <StepList title="Selling process" steps={sellingSteps} />
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <CTAButton href="/buy" variant="secondary">Buying guidance</CTAButton>
          <CTAButton href="/sell" variant="secondary">Selling guidance</CTAButton>
        </div>
      </Section>

      <Section
        title="Local real estate advice from Leilani and Paul"
        intro="Live in Port Moody combines licensed real estate guidance, local research, property analysis, media, and market context to help buyers and sellers make clearer decisions in Port Moody."
      >
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <TeamImagePlaceholder />
          <div className="grid gap-4">
            <article className="rounded-lg border border-softBorder bg-white p-6">
              <h3 className="font-heading text-2xl text-deepInlet">Paul Bennett</h3>
              <p className="mt-1 text-sm font-semibold text-forest">Licensed REALTOR, research, media, and local intelligence</p>
              <p className="mt-4 text-sm leading-6 text-slateText">
                Paul focuses on local research, neighbourhood context, property storytelling, digital strategy, photography, video, renovation perspective, and data-informed buyer and seller guidance.
              </p>
            </article>
            <article className="rounded-lg border border-softBorder bg-white p-6">
              <h3 className="font-heading text-2xl text-deepInlet">Leilani Fong PREC</h3>
              <p className="mt-1 text-sm font-semibold text-forest">Listing strategy, pricing, negotiation, and client representation</p>
              <p className="mt-4 text-sm leading-6 text-slateText">
                Leilani brings licensed real estate expertise, seller strategy, pricing judgment, negotiation, and transaction guidance to help clients move through the process with confidence.
              </p>
            </article>
          </div>
        </div>
      </Section>

      <Section
        title="Community and local life"
        intro="Local business features, community events, client stories, and professional recognition, built with verified content only."
        tone="white"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {communityCards.map((card) => (
            <article key={card.title} className="flex min-h-56 flex-col rounded-lg border border-softBorder bg-mist p-5">
              <h2 className="font-heading text-2xl text-deepInlet">{card.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-slateText">{card.copy}</p>
              <div className="mt-5">
                <CTAButton href={card.href} variant="secondary">
                  {card.cta}
                </CTAButton>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Client stories and recognition" tone="sand">
        <div className="rounded-lg border border-softBorder bg-white p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-emphasis">Trust</p>
              <h2 className="mt-3 font-heading text-3xl text-deepInlet">Client stories and verified recognition.</h2>
            </div>
            <div>
              <p className="text-sm leading-6 text-slateText">
                Testimonials, client stories, Google reviews, and professional recognition are published from verified public sources or with client approval. No invented reviews, rankings, or awards.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CTAButton href="/raving-fans" variant="secondary">View client stories</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Ask a local question" tone="sand">
        <div id="ask" className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div>
            <p className="text-base leading-7 text-slateText">
              Ask about a property, neighbourhood, listing, building, or decision you are weighing. Paul and Leilani respond with local context, not a sales pitch.
            </p>
            <dl className="mt-8 grid gap-5 text-sm">
              <div>
                <dt className="font-semibold text-deepInlet">Phone</dt>
                <dd className="mt-1 text-slateText">{siteConfig.publicPhone}</dd>
              </div>
              <div>
                <dt className="font-semibold text-deepInlet">Email</dt>
                <dd className="mt-1 text-slateText">{siteConfig.publicEmail}</dd>
              </div>
              <div>
                <dt className="font-semibold text-deepInlet">Office</dt>
                <dd className="mt-1 text-slateText">eXp Realty, Port Moody BC</dd>
              </div>
            </dl>
          </div>
          <LeadForm
            formType="ask-question"
            leadType="local-question"
            ctaLabel="Ask a local question"
            title="What are you trying to figure out?"
            description="Share the area, building, property type, listing, or decision you are weighing."
            tags={["source:liveinportmoody", "intent:general-local-question", "area:port-moody"]}
          />
        </div>
      </Section>
    </>
  );
}
