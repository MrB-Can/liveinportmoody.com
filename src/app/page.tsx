import { CTAButton } from "@/components/cta-button";
import { ImageHero } from "@/components/image-hero";
import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Port Moody Real Estate Decision Engine",
  description:
    "Local guides, market context, listings, and practical real estate advice for buying, selling, and comparing homes in Port Moody.",
  path: "/",
});

const decisionCards = [
  {
    title: "Move to Port Moody",
    copy: "Understand lifestyle, commute, schools, trails, density, and neighbourhood trade-offs.",
    cta: "Explore life here",
    href: "/explore",
  },
  {
    title: "Buy in Port Moody",
    copy: "Find the right neighbourhood, property type, building, or complex before you write an offer.",
    cta: "Start buying research",
    href: "/buy",
  },
  {
    title: "Sell in Port Moody",
    copy: "Position your home around what buyers actually value here.",
    cta: "Plan my sale",
    href: "/sell",
  },
  {
    title: "Compare neighbourhoods",
    copy: "See which areas fit walkability, schools, trails, transit, space, and budget.",
    cta: "Compare areas",
    href: "/neighbourhoods",
  },
  {
    title: "Research buildings and complexes",
    copy: "Review condo buildings and townhouse complexes before you commit.",
    cta: "Research homes",
    href: "/complexes",
  },
  {
    title: "See current listings",
    copy: "Search active MLS Reciprocity listings and ask for local context.",
    cta: "View listings",
    href: "/listings",
  },
];

const glanceTiles = [
  "Waterfront lifestyle",
  "SkyTrain access",
  "Forest trails",
  "Family neighbourhoods",
  "Village-style condo areas",
  "Limited land supply",
];

const guideFocusCards = [
  {
    title: "Places and property types",
    copy: "Compare Port Moody neighbourhoods, condo buildings, townhouse complexes, presales, new builds, and current listing context in one local research flow.",
  },
  {
    title: "Community and daily life",
    copy: "Use local-business, event, school-verification, trail, commute, and village-context pages to understand what living here actually feels like.",
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
    title: "Local businesses",
    copy: "Verified local business and community features will help explain daily life in Port Moody without invented listings.",
    cta: "Explore businesses",
    href: "/local-businesses",
  },
  {
    title: "Events",
    copy: "Community, seasonal, family, and real estate events will be added only after dates and hosts are verified.",
    cta: "View events",
    href: "/events",
  },
  {
    title: "Testimonials",
    copy: "Approved Google reviews and client stories will be added only when the public source or client approval is confirmed.",
    cta: "View trust page",
    href: "/testimonials",
  },
  {
    title: "Accolades",
    copy: "Verified recognition, community involvement, and professional background will be added without invented awards or rankings.",
    cta: "View recognition",
    href: "/accolades",
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
        subtitle="Local guides, market context, listings, and practical real estate advice from people who live and work in Port Moody."
        primaryCta={{ label: "Start with the decision hub", href: "#decision-hub" }}
        secondaryCta={{ label: "Ask a local question", href: "#ask" }}
        imageSrc="/images/hero/port-moody-hero-original.jpg"
        imageAlt="Calm view across Burrard Inlet in Port Moody with forested mountains, still water, and tree branches framing the shoreline."
        homeSizing
      />

      <Section eyebrow="Start here" title="What are you trying to figure out?" tone="white">
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
        intro="LiveInPortMoody.com is being built as a local decision guide for people comparing where to live, what to buy, when to sell, and which questions to verify before they commit."
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
        intro="Request a guide, ask for help, get notified, or ask for compliant market context. These pages use request language until guide assets or verified data are ready."
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
            <div key={tile} className="rounded-lg border border-softBorder bg-white px-5 py-4 font-semibold text-deepInlet">
              {tile}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Neighbourhood/map preview" tone="white">
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
        intro="Use neighbourhood context, building notes, complex research, and live listing conversations together. The goal is to understand what you are buying before the offer deadline."
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
          <div className="grid min-h-[360px] content-center rounded-lg border border-softBorder bg-white p-8 text-center">
            <p className="font-heading text-3xl text-deepInlet">Local guidance, verified over time</p>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-slateText">
              The site is structured around research, verification, client questions, and local context instead of unsupported claims.
            </p>
          </div>
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
        title="Trust and community coverage"
        intro="Community and trust pages are intentionally conservative until details are verified. Approved testimonials and verified recognition will be added here before public launch."
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

      <Section title="Public trust assets in progress" tone="sand">
        <div className="rounded-lg border border-softBorder bg-white p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-emphasis">Trust</p>
              <h2 className="mt-3 font-heading text-3xl text-deepInlet">Verified social proof will be added carefully.</h2>
            </div>
            <div>
              <p className="text-sm leading-6 text-slateText">
                Approved testimonials, client stories, Google review links, accolades, and community involvement details will be added only after the source and permission are confirmed.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CTAButton href="/testimonials" variant="secondary">View testimonials page</CTAButton>
                <CTAButton href="/accolades" variant="ghost">View recognition page</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Ask a local question" tone="sand">
        <div id="ask" className="max-w-2xl">
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
