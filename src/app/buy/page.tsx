import Link from "next/link";
import { MapPin, Home, FileCheck, Eye, Handshake, Building2, FileSearch, Phone, LucideIcon } from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { ImageHero } from "@/components/image-hero";
import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { FAQSection } from "@/components/ui/faq-section";
import { TrustStrip } from "@/components/trust-strip";
import { createMetadata } from "@/lib/seo";
import { ProcessStep } from "@/components/process-step";
import { ChecklistPanel } from "@/components/visual-elements/ChecklistPanel";

export const metadata = createMetadata({
  title: "Buy in Port Moody | Buyer Guide and Local Real Estate Research",
  description:
    "A local guide for buying in Port Moody, including neighbourhoods, condo buildings, townhouse complexes, listings, strata review, buyer due diligence, and property trade-offs.",
  path: "/buy",
});

// ─── data ────────────────────────────────────────────────────────────────────

const decisionCards = [
  { label: "Where should I live?", href: "/neighbourhoods" },
  { label: "Condo, townhouse, or detached?", href: "/buy#property-type" },
  { label: "Which building or complex should I research?", href: "/complexes" },
  { label: "Is this listing worth writing on?", href: "/listings" },
  { label: "What should I verify first?", href: "/buy#buyer-due-diligence" },
];

const pathCards = [
  {
    heading: "I want walkability",
    body: "Start with Suter Brook, Newport Village, Klahanie, and Moody Centre. Compare convenience, building age, strata fees, noise, parking, and transit access.",
    cta: "Compare walkable areas",
    href: "/neighbourhoods",
  },
  {
    heading: "I want a townhouse",
    body: "Focus on layout, stairs, garage, visitor parking, strata condition, exterior maintenance, schools, trails, and resale demand.",
    cta: "Research townhouse complexes",
    href: "/complexes",
  },
  {
    heading: "I want a condo",
    body: "Compare building age, construction, amenities, strata fees, elevators, exposure, parking, storage, and walkability.",
    cta: "Research condo buildings",
    href: "/buildings",
  },
  {
    heading: "I want more space or a family area",
    body: "Compare Heritage Mountain, College Park, Glenayre, Klahanie, and other areas by housing type, school fit, trails, and daily driving.",
    cta: "Compare neighbourhoods",
    href: "/neighbourhoods",
  },
  {
    heading: "I am relocating to Port Moody",
    body: "Understand commute, schools, trails, density, village areas, hills, weather, and trade-offs before choosing an area.",
    cta: "Explore Port Moody",
    href: "/local-life",
  },
  {
    heading: "I found a listing",
    body: "Send the listing before you write. We can help you understand the neighbourhood, building, complex, strata documents, pricing context, and trade-offs.",
    cta: "Ask about a listing",
    href: "/buy#ask-about-a-listing",
  },
];

const processSteps = [
  {
    title: "Choose your lifestyle area",
    body: "Walkability, trails, schools, commute, quiet, density, and daily errands.",
  },
  {
    title: "Choose your property type",
    body: "Condo, townhouse, detached, or a hybrid trade-off.",
  },
  {
    title: "Research the building or complex",
    body: "Strata history, fees, insurance, depreciation report, parking, storage, amenities, and bylaws.",
  },
  {
    title: "Review the specific property",
    body: "Layout, exposure, condition, renovations, noise, outdoor space, parking, and maintenance.",
  },
  {
    title: "Write with context",
    body: "Use current listing context, comparable alternatives, risks, and negotiation strategy before committing.",
  },
];

const areas = [
  {
    name: "Suter Brook",
    bestFor: "Walkability, lock-and-leave living, shops, services, and transit access.",
    housing: "Condos, some townhomes.",
    tradeOff: "Higher strata fees are common; some older buildings in the village may need exterior review.",
    href: "/neighbourhoods",
  },
  {
    name: "Newport Village",
    bestFor: "Village lifestyle, walkable restaurants, services, and Rocky Point Park access.",
    housing: "Condos and older townhomes.",
    tradeOff: "Some buildings are older. Review mechanical and exterior condition carefully.",
    href: "/neighbourhoods",
  },
  {
    name: "Klahanie",
    bestFor: "Central condo or townhome lifestyle with access to trails, shops, and Rocky Point.",
    housing: "Condos and townhomes.",
    tradeOff: "Mix of building ages; compare strata fees, amenity value, and parking situation per building.",
    href: "/neighbourhoods",
  },
  {
    name: "Moody Centre",
    bestFor: "Transit-oriented living, evolving area with mixed housing options near SkyTrain.",
    housing: "Condos, older townhomes, some detached.",
    tradeOff: "Area is changing; understand nearby development context and buyer demand before committing.",
    href: "/neighbourhoods/moody-centre",
  },
  {
    name: "Heritage Mountain",
    bestFor: "Hillside living, family-oriented community, trails, parks, and a quieter setting.",
    housing: "Townhomes and detached homes.",
    tradeOff: "Car-dependent for most errands; slopes affect access and drainage for some properties.",
    href: "/neighbourhoods/heritage-mountain",
  },
  {
    name: "Heritage Woods",
    bestFor: "Newer detached homes and townhouses on a hillside setting with trail access.",
    housing: "Detached homes and townhomes.",
    tradeOff: "Car-dependent; limited walkability and transit.",
    href: "/neighbourhoods/heritage-woods",
  },
  {
    name: "College Park",
    bestFor: "Established residential area with family-oriented streets and local school access.",
    housing: "Detached homes and some townhomes.",
    tradeOff: "Older housing stock in parts; review condition, drainage, and renovation history.",
    href: "/neighbourhoods",
  },
  {
    name: "Glenayre",
    bestFor: "Quieter detached-home pocket with established neighbourhood feel.",
    housing: "Primarily detached.",
    tradeOff: "Limited walkability; most daily errands require driving.",
    href: "/neighbourhoods/glenayre",
  },
  {
    name: "Pleasantside / Ioco / Barber Street",
    bestFor: "Quieter north shore living, nature-oriented setting, and larger properties.",
    housing: "Detached homes, limited townhomes.",
    tradeOff: "More isolated from SkyTrain and walkable amenities; commute distance matters here.",
    href: "/neighbourhoods",
  },
];

const propertyTypes = [
  {
    name: "Condos",
    bestFor:
      "Walkability, lower maintenance, central locations, first-time buyers, downsizers, and lock-and-leave living.",
    watchOuts: [
      "Strata fees and what they cover",
      "Insurance and deductibles",
      "Elevator availability and condition",
      "Amenity costs and usage",
      "Parking and storage allocation",
      "Noise and exposure",
      "Building age and envelope history",
      "Rental and pet bylaws",
    ],
    cta: "Research condo buildings",
    href: "/buildings",
  },
  {
    name: "Townhouses",
    bestFor:
      "More space, family layouts, private entries, garages, outdoor areas, and a step between condo and detached.",
    watchOuts: [
      "Strata documents and minutes",
      "Exterior maintenance history",
      "Decks, roofs, and windows",
      "Drainage and envelope condition",
      "Visitor parking availability",
      "Stairs and layout usability",
      "Bylaws and rental/pet rules",
      "Upcoming capital projects",
    ],
    cta: "Research townhouse complexes",
    href: "/complexes",
  },
  {
    name: "Detached",
    bestFor:
      "Land, privacy, renovation potential, control, yards, and long-term flexibility.",
    watchOuts: [
      "Drainage and slope management",
      "Roof, windows, and decks",
      "Foundation and retaining walls",
      "Electrical and plumbing condition",
      "Suite legality and permit history",
      "Tree and yard maintenance",
      "Renovation quality",
      "Resale demand for the specific street",
    ],
    cta: "Ask about detached homes",
    href: "/listings",
  },
];

const strataChecklist = [
  "Form B",
  "Strata minutes (2–3 years minimum)",
  "Depreciation report",
  "Contingency reserve fund balance",
  "Insurance certificate and deductible",
  "Bylaws and rules",
  "Current strata fees",
  "Parking and storage allocation",
  "Rental and pet restrictions",
  "Upcoming levies or capital projects",
  "Building envelope, roof, windows, and deck status",
];

const detachedChecklist = [
  "Home inspection by qualified inspector",
  "Roof age and condition",
  "Drainage and water management",
  "Electrical panel and wiring",
  "Plumbing and hot water system",
  "Windows and exterior",
  "Foundation and retaining walls",
  "Decks and railings",
  "Suite configuration and permits",
  "Tree and slope issues",
  "Renovation permit history",
];

const allBuyersChecklist = [
  "School catchment verification",
  "Commute test at peak hours",
  "Noise during the day and evening",
  "Privacy from neighbours",
  "Renovation quality assessment",
  "Current competing listings",
  "Resale demand for the property type",
  "Subject removal strategy",
];

const listingCtaCards: { label: string; icon: LucideIcon }[] = [
  { label: "Ask about a listing", icon: Phone },
  { label: "Compare two listings", icon: MapPin },
  { label: "Ask about strata documents", icon: FileSearch },
  { label: "Ask if the price makes sense", icon: Building2 },
];

const mistakes = [
  "Choosing the listing before the neighbourhood.",
  "Ignoring building or complex history.",
  "Underestimating strata document review.",
  "Comparing price without comparing layout, parking, exposure, and condition.",
  "Overvaluing walkability if the daily routine doesn't need it.",
  "Undervaluing commute, hills, schools, and parking.",
  "Treating all Port Moody townhomes or condos as interchangeable.",
];

const faqs = [
  {
    question: "What should I research before buying in Port Moody?",
    answer:
      "Start with the neighbourhood and area trade-offs, then narrow to property type, then research the specific building or complex. Review strata documents for condos and townhomes, and get a home inspection for detached. Verify schools, commute, and parking before writing an offer.",
  },
  {
    question: "Which Port Moody areas are most walkable?",
    answer:
      "Suter Brook, Newport Village, and Klahanie offer the most walkable access to shops, services, and transit. Moody Centre is improving with SkyTrain access. Heritage Mountain, College Park, and Glenayre are more car-dependent but offer different lifestyle trade-offs.",
  },
  {
    question: "Should I buy a condo or townhouse in Port Moody?",
    answer:
      "It depends on your lifestyle, budget, family needs, and priorities. Condos tend to offer more walkable locations with lower maintenance but higher strata fees and less space. Townhouses offer more layout flexibility, private entries, and garages, but require more strata due diligence.",
  },
  {
    question: "What should I check in strata documents?",
    answer:
      "Review the minutes for maintenance issues, special levies, and disputes. Check the depreciation report for upcoming capital work. Confirm the contingency reserve fund balance, insurance deductibles, bylaws, rental restrictions, and parking allocation before writing an offer.",
  },
  {
    question: "Can I ask about a specific listing?",
    answer:
      "Yes. Send the address or MLS number and we can help you understand the neighbourhood, building or complex context, strata questions, layout trade-offs, document review priorities, and what to verify before writing.",
  },
  {
    question: "Can you help compare neighbourhoods or buildings?",
    answer:
      "Yes. Use the neighbourhood and building research pages to start, and then send us what you're comparing. We can help you think through the trade-offs that are relevant to your situation.",
  },
];

// ─── page ─────────────────────────────────────────────────────────────────────

export default function BuyPage() {
  return (
    <>
      {/* 1. Hero */}
      <ImageHero
        eyebrow="Port Moody buyer guidance"
        title="Buy in Port Moody with better local context."
        subtitle="Buying in Port Moody is not just about finding a listing. Neighbourhood, property type, building history, strata documents, walkability, schools, trails, parking, exposure, and resale demand can all change whether a property is the right fit."
        primaryCta={{ label: "Start buying research", href: "#start" }}
        secondaryCta={{ label: "View active listings", href: "/listings" }}
        imageSrc="/hero-buy.webp"
        imageAlt="Port Moody residential homes framed by mature trees on a hillside."
        priority
      />

      <TrustStrip />

      {/* 2. Start with the decision */}
      <Section
        eyebrow="Before you look at listings"
        title="Start with the decision, not the listing."
        intro="A Port Moody listing can look strong online and still be the wrong fit if the neighbourhood, building, strata, commute, parking, layout, or renovation needs don't match your life. Narrow the decision before you chase individual properties."
        tone="white"
      >
        <div id="start" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {decisionCards.map((card) => (
            <Link
              key={card.label}
              href={card.href}
              className="group flex items-center justify-between rounded-lg border border-softBorder bg-mist px-4 py-3.5 text-sm font-semibold text-deepInlet transition hover:border-forest hover:bg-white"
            >
              <span>{card.label}</span>
              <span className="ml-2 text-forest opacity-0 transition group-hover:opacity-100">→</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 3. Buyer path cards */}
      <Section
        eyebrow="Where do you start?"
        title="Choose your buyer path."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pathCards.map((card) => (
            <article key={card.heading} className="flex flex-col rounded-lg border border-softBorder bg-white p-6">
              <h2 className="font-heading text-xl text-deepInlet">{card.heading}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-slateText">{card.body}</p>
              <div className="mt-5">
                <CTAButton href={card.href} variant="secondary">{card.cta}</CTAButton>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* 4. Buyer process */}
      <Section
        eyebrow="A smarter buying sequence"
        title="A smarter Port Moody buying process."
        tone="white"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
          <div className="space-y-7">
            {processSteps.map((s, i) => (
              <ProcessStep key={s.title} step={i + 1} title={s.title} body={s.body} />
            ))}
          </div>
          <div className="flex flex-col justify-center gap-3 lg:min-w-48">
            <CTAButton href="/neighbourhoods">Start with neighbourhoods</CTAButton>
            <CTAButton href="/complexes" variant="secondary">Research complexes</CTAButton>
            <CTAButton href="/buildings" variant="secondary">Research buildings</CTAButton>
          </div>
        </div>
      </Section>

      {/* 4b. Buyer decision framework */}
      <Section title="Buyer decision framework" intro="Use these five stages to structure your buying journey. No two buyers prioritize the same way, so focus on what matters most to you.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { stage: "Area fit", detail: "Neighbourhood walkability, schools, transit, trails, quiet, commute, and lifestyle match", icon: MapPin },
            { stage: "Property type", detail: "Condo, townhouse, or detached? Space, layout, maintenance, privacy, and renovation potential", icon: Home },
            { stage: "Building / Strata", detail: "Fees, reserve fund, insurance, bylaws, condition, parking, storage, and upcoming work", icon: FileCheck },
            { stage: "Listing context", detail: "Exposure, condition, layout, parking, price vs. comparable alternatives, and trade-offs", icon: Eye },
            { stage: "Offer decision", detail: "Inspection results, strata review, financing, subject removal timing, and negotiation strategy", icon: Handshake },
          ].map((item) => {
            const IconComponent = item.icon;
            return (
              <article key={item.stage} className="rounded-lg border border-softBorder bg-white p-5 text-center hover:shadow-md transition">
                <div className="flex justify-center mb-3">
                  <IconComponent className="w-6 h-6 text-forest" />
                </div>
                <h3 className="font-heading text-lg text-deepInlet">{item.stage}</h3>
                <p className="mt-2 text-xs leading-5 text-slateText">{item.detail}</p>
              </article>
            );
          })}
        </div>
      </Section>

      {/* 5. Choose your area */}
      <Section
        eyebrow="Port Moody area guide"
        title="Choose your Port Moody area."
        intro="Each part of Port Moody solves different problems. Use these summaries for orientation, then verify current details before making a decision."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <div key={area.name} className="rounded-lg border border-softBorder bg-white p-5">
              <p className="font-heading text-lg text-deepInlet">{area.name}</p>
              <div className="mt-3 space-y-2.5 text-sm">
                <div>
                  <span className="font-semibold text-forest">Best for</span>
                  <p className="mt-0.5 text-slateText">{area.bestFor}</p>
                </div>
                <div>
                  <span className="font-semibold text-forest">Housing</span>
                  <p className="mt-0.5 text-slateText">{area.housing}</p>
                </div>
                <div>
                  <span className="font-semibold text-forest">Trade-off</span>
                  <p className="mt-0.5 text-slateText">{area.tradeOff}</p>
                </div>
              </div>
              <Link
                href={area.href}
                className="mt-4 inline-flex text-xs font-semibold text-forest hover:underline"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <CTAButton href="/neighbourhoods" variant="secondary">Compare all neighbourhoods</CTAButton>
        </div>
      </Section>

      {/* 6. Property type */}
      <Section
        eyebrow="Condo, townhouse, or detached?"
        title="Choose your property type."
        tone="white"
      >
        <div id="property-type" className="grid gap-5 lg:grid-cols-3">
          {propertyTypes.map((pt) => (
            <div key={pt.name} className="flex flex-col rounded-lg border border-softBorder bg-mist p-6">
              <p className="font-heading text-2xl text-deepInlet">{pt.name}</p>
              <div className="mt-3">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emphasis">Best for</p>
                <p className="mt-1.5 text-sm leading-6 text-slateText">{pt.bestFor}</p>
              </div>
              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emphasis">Watch-outs</p>
                <ul className="mt-2 space-y-1.5">
                  {pt.watchOuts.map((w) => (
                    <li key={w} className="flex items-start gap-2 text-sm text-slateText">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-seaGlass" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <CTAButton href={pt.href} variant="secondary">{pt.cta}</CTAButton>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. Due diligence */}
      <Section
        eyebrow="Before you write an offer"
        title="What to verify before buying."
      >
        <div id="buyer-due-diligence" className="grid gap-8 md:grid-cols-3">
          <ChecklistPanel title="Condos and townhouses" items={strataChecklist.map((label) => ({ label }))} color="forest" />
          <ChecklistPanel title="Detached homes" items={detachedChecklist.map((label) => ({ label }))} color="forest" />
          <ChecklistPanel title="All buyers" items={allBuyersChecklist.map((label) => ({ label }))} color="forest" />
        </div>
      </Section>

      {/* 8. Listing review CTA */}
      <Section
        eyebrow="Found a listing?"
        title="Found a Port Moody listing?"
        intro="Send it before you write. We can help you understand the neighbourhood, building or complex, strata documents, condition, pricing context, parking, exposure, and buyer trade-offs."
        tone="white"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {listingCtaCards.map((card) => (
            <div key={card.label} className="rounded-lg border border-softBorder bg-mist px-5 py-4 text-sm font-semibold text-deepInlet">
              <card.icon className="h-5 w-5 text-forest mb-3" />
              {card.label}
            </div>
          ))}
        </div>
        <div id="ask-about-a-listing" className="mt-8 max-w-2xl rounded-lg border border-softBorder bg-mist p-6">
          <h2 className="mb-1 font-heading text-2xl text-deepInlet">Ask about a listing</h2>
          <p className="mb-6 text-sm text-slateText">Share the address or MLS number. We&apos;ll help you understand what you&apos;re looking at.</p>
          <LeadForm
            formType="buyer-shortlist"
            leadType="buyer"
            ctaLabel="Send your question"
            title=""
            messageLabel="Address, MLS number, or what you want to understand"
            tags={[
              "source:liveinportmoody",
              "intent:buyer",
              "intent:buyer-listing-review",
              "lead_type:buyer",
              "area:port-moody",
            ]}
          />
        </div>
      </Section>

      {/* 9. Common mistakes */}
      <Section
        eyebrow="What to avoid"
        title="Common Port Moody buyer mistakes."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mistakes.map((m, i) => (
            <div key={m} className="flex gap-4 rounded-lg border border-softBorder bg-white p-5">
              <span className="mt-0.5 font-heading text-3xl font-bold leading-none text-seaGlass/40">
                {i + 1}
              </span>
              <p className="text-sm leading-6 text-slateText">{m}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 10. FAQ */}
      <Section tone="white">
        <FAQSection
          title="Buyer questions"
          intro="Common questions from Port Moody buyers."
          items={faqs}
        />
      </Section>

      {/* 11. Final CTA */}
      <Section tone="sand">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl text-deepInlet">Ready to research Port Moody?</h2>
          <p className="mt-3 text-slateText">Tell us what you&apos;re looking for and we&apos;ll help you narrow it down.</p>
          <div className="mt-8">
            <LeadForm
              formType="buyer-shortlist"
              leadType="buyer"
              ctaLabel="Start buyer research"
              title=""
              messageLabel="Property type, area preferences, timeline, and what you're trying to figure out"
              tags={[
                "source:liveinportmoody",
                "intent:buyer",
                "intent:buyer-guidance",
                "lead_type:buyer",
                "area:port-moody",
              ]}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
