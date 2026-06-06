import Link from "next/link";
import { type LucideIcon, DollarSign, Hammer, Rocket, Lightbulb, GraduationCap, Camera, Video, LayoutList, FileText } from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { ImageHero } from "@/components/image-hero";
import { LeadForm } from "@/components/lead-form";
import { ProcessStep } from "@/components/process-step";
import { Section } from "@/components/section";
import { FAQSection } from "@/components/ui/faq-section";
import { TrustStrip } from "@/components/trust-strip";
import { ChecklistPanel } from "@/components/visual-elements/ChecklistPanel";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Sell in Port Moody | Seller Strategy and Local Real Estate Positioning",
  description:
    "A local guide for selling in Port Moody, including pricing strategy, preparation, media, buyer demand, strata documents, neighbourhood positioning, and micro-market value context.",
  path: "/sell",
});

// ─── data ────────────────────────────────────────────────────────────────────

const positioningCards = [
  { question: "What does your property compete against?" },
  { question: "What buyer is most likely to care?" },
  { question: "What should be fixed or prepared first?" },
  { question: "What needs to be explained clearly?" },
  { question: "What media will make the value obvious?" },
];

const pathCards = [
  {
    heading: "I own a townhouse",
    body: "Townhouse buyers care about layout, garage, storage, outdoor space, strata documents, exterior maintenance, fees, and family function.",
    cta: "Build a townhouse selling plan",
    href: "/sell#value-opinion",
  },
  {
    heading: "I own a condo",
    body: "Condo buyers compare building reputation, fees, amenities, walkability, exposure, parking, storage, and strata history.",
    cta: "Build a condo selling plan",
    href: "/sell#value-opinion",
  },
  {
    heading: "I own a detached home",
    body: "Detached buyers care about land, privacy, renovation quality, suite potential, drainage, roof, trees, slope, and long-term flexibility.",
    cta: "Build a detached selling plan",
    href: "/sell#value-opinion",
  },
  {
    heading: "I own in a specific building or complex",
    body: "Micro-market positioning matters. The right comparison is often the same complex, building, or neighbourhood, not the whole city.",
    cta: "Ask for micro-market context",
    href: "/sell#value-opinion",
  },
  {
    heading: "Not sure whether to sell?",
    body: "Understand likely buyer demand, prep priorities, timing, and trade-offs before committing.",
    cta: "Talk through your options",
    href: "/sell#value-opinion",
  },
];

const processSteps = [
  {
    title: "Assess",
    body: "Property type, condition, location, buyer pool, competition, and timing.",
  },
  {
    title: "Prepare",
    body: "Repairs, cleaning, staging, landscaping, strata documents, and visual priorities.",
  },
  {
    title: "Position",
    body: "Neighbourhood story, buyer fit, pricing strategy, property strengths, and trade-offs.",
  },
  {
    title: "Launch",
    body: "Photography, video, copy, MLS, social, local distribution, and buyer follow-up.",
  },
  {
    title: "Negotiate",
    body: "Offer review, terms, subjects, dates, risk, leverage, and backup strategy.",
  },
];

const buyerValues = [
  {
    type: "Condos",
    items: [
      "Walkability and daily convenience",
      "Building reputation and age",
      "Strata fees and what they cover",
      "Parking and storage allocation",
      "Views, light, and exposure",
      "Amenities and common areas",
      "SkyTrain and transit access",
      "Noise and privacy",
    ],
  },
  {
    type: "Townhouses",
    items: [
      "Layout and functional square footage",
      "Garage and storage capacity",
      "Outdoor space and privacy",
      "Family function and bedroom count",
      "Strata condition and reserve fund",
      "Visitor parking availability",
      "Schools and trail access",
      "Renovation level and condition",
    ],
  },
  {
    type: "Detached",
    items: [
      "Lot size, shape, and privacy",
      "Condition and renovation level",
      "Renovation potential",
      "Suite flexibility and legality",
      "Yard and outdoor usability",
      "Tree management and drainage",
      "Slope, access, and grade",
      "Neighbourhood and street feel",
    ],
  },
];

const allSellerChecklist = [
  "Clean, declutter, and repair obvious defects",
  "Improve lighting throughout",
  "Address odours and moisture issues",
  "Gather all relevant documents",
  "Prepare utility and maintenance history",
  "Review title and permits where relevant",
  "Prepare property disclosure information",
];

const strataSellerChecklist = [
  "Order strata documents early",
  "Review Form B for accuracy",
  "Confirm depreciation report is current",
  "Review minutes for anything buyers will ask about",
  "Confirm bylaws, rental restrictions, and pet rules",
  "Confirm insurance certificate and deductibles",
  "Confirm parking and storage details",
  "Note strata fees, special levies, and scheduled work",
  "Document any renovation approvals",
];

const detachedSellerChecklist = [
  "Inspect and address roof, gutters, and drainage",
  "Clean and tidy all exterior landscaping",
  "Repair or refresh decks and railings",
  "Review retaining walls and slopes",
  "Freshen exterior paint or siding where needed",
  "Present basement and suite cleanly",
  "Gather permits and renovation history",
  "Address any known tree and yard issues",
];

const pricingCards = [
  "Price against true alternatives, not general market averages.",
  "Explain the micro-market context buyers may not know.",
  "Reduce buyer uncertainty before they ask questions.",
  "Launch with complete approved media.",
  "Prepare strata documents before buyers ask for them.",
  "Follow up with serious buyers quickly.",
];

const mediaCards: { label: string; body: string; icon: LucideIcon }[] = [
  { label: "Photography", body: "Show light, space, layout, and condition honestly.", icon: Camera },
  { label: "Video", body: "Demonstrate how the property flows and feels to live in.", icon: Video },
  { label: "Floor plan", body: "Remove confusion about layout, flow, and room use.", icon: LayoutList },
  { label: "Neighbourhood context", body: "Connect trail access, walkability, commute, and area lifestyle to the listing.", icon: FileText },
  { label: "Building or complex explanation", body: "Help buyers understand the strata, amenities, and reputation.", icon: FileText },
  { label: "Feature callouts", body: "Flag parking, storage, outdoor space, and renovation details clearly.", icon: LayoutList },
  { label: "Buyer objections answered", body: "Address the predictable concerns before buyers need to ask.", icon: FileText },
];

const complexOwnerCards = [
  {
    label: "Own in a condo building?",
    copy: "Your value is shaped by building reputation, strata health, fees, amenities, and unit position, not just market averages.",
    href: "/buildings",
    cta: "Research condo buildings",
  },
  {
    label: "Own in a townhouse complex?",
    copy: "Comparable sales, strata condition, exterior status, and complex reputation all affect your positioning.",
    href: "/complexes",
    cta: "Research townhouse complexes",
  },
  {
    label: "Own in Heritage Mountain?",
    copy: "Heritage Mountain has a distinct buyer pool, trail appeal, and family-oriented positioning that affects how to market effectively.",
    href: "/neighbourhoods/heritage-mountain",
    cta: "Heritage Mountain guide",
  },
  {
    label: "Own at Treetops?",
    copy: "Get a value opinion and market perspective specific to Treetops at 101 Parkside Drive.",
    href: "/complexes/treetops-101-parkside-drive",
    cta: "Treetops complex guide",
  },
];

const faqs = [
  {
    question: "What should I do before selling in Port Moody?",
    answer:
      "Before listing, address obvious repairs, gather strata documents (for condos and townhouses), prepare a disclosure statement, and get a practical value opinion that considers your specific neighbourhood and property type, not just broad market averages.",
  },
  {
    question: "How do I know what my Port Moody property is worth?",
    answer:
      "A useful value opinion looks at current active competition, recent sales context, your property type and condition, strata situation if applicable, and how buyers in your neighbourhood are making decisions. We don't publish automated valuations. Ask for a practical human opinion.",
  },
  {
    question: "Should I prepare strata documents before listing?",
    answer:
      "Yes. Having documents ready reduces buyer uncertainty and avoids delays during subject removal. Buyers for condos and townhomes will ask for Form B, minutes, the depreciation report, bylaws, insurance, and strata fees before writing or removing subjects.",
  },
  {
    question: "What matters most when selling a townhouse or condo?",
    answer:
      "Pricing against real alternatives, documenting the strata situation clearly, explaining parking and storage, showing the unit and layout well, and positioning the neighbourhood and building context for the specific buyer pool.",
  },
  {
    question: "How do you position a property differently by neighbourhood?",
    answer:
      "Heritage Mountain, Suter Brook, Newport Village, and Klahanie each attract different buyers with different priorities. A Heritage Mountain townhouse is positioned around trail access, family function, and space. A Suter Brook condo is positioned around walkability and convenience. The marketing and messaging differ accordingly.",
  },
  {
    question: "Can I ask about selling in a specific building or complex?",
    answer:
      "Yes. Send the building name, complex, or address and we can discuss micro-market positioning, what recent buyers in that area have prioritized, and what preparation and pricing strategy makes sense.",
  },
];

// ─── page ─────────────────────────────────────────────────────────────────────

export default function SellPage() {
  return (
    <>
      {/* 1. Hero */}
      <ImageHero
        eyebrow="Port Moody seller strategy"
        title="Sell in Port Moody with stronger positioning."
        subtitle="Selling in Port Moody is not just about putting a home on MLS. The strongest listings connect price, preparation, media, neighbourhood context, property condition, buyer demand, and the specific trade-offs buyers are weighing."
        primaryCta={{ label: "Build a selling plan", href: "/sell#value-opinion" }}
        secondaryCta={{ label: "Request a value opinion", href: "/sell#value-opinion" }}
        imageSrc="/hero-sell.webp"
        imageAlt="Port Moody residential homes surrounded by mature trees."
      />

      <TrustStrip />

      {/* 2. Start with positioning */}
      <Section
        eyebrow="Before you list"
        title="Start with positioning, not just price."
        intro="The right price matters, but buyers also need to understand why the property fits. In Port Moody, that may mean walkability, trails, schools, storage, parking, strata health, outdoor space, views, renovation quality, or neighbourhood lifestyle."
        tone="white"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {positioningCards.map((card) => (
            <div
              key={card.question}
              className="rounded-lg border border-softBorder bg-mist px-4 py-4 text-sm font-semibold text-deepInlet"
            >
              {card.question}
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Seller path cards */}
      <Section
        eyebrow="What are you selling?"
        title="Choose your seller path."
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

      {/* 4. Selling process */}
      <Section
        eyebrow="A smarter selling sequence"
        title="A smarter Port Moody selling process."
        tone="white"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
          <div className="space-y-7">
            {processSteps.map((s, i) => (
              <ProcessStep key={s.title} step={i + 1} title={s.title} body={s.body} />
            ))}
          </div>
          <div className="flex flex-col justify-center gap-3 lg:min-w-48">
            <CTAButton href="/sell#value-opinion">Request a selling plan</CTAButton>
            <CTAButton href="/market" variant="secondary">Understand the market</CTAButton>
          </div>
        </div>
      </Section>

      {/* 4b. Seller preparation framework */}
      <Section title="Seller preparation framework" intro="Structure your launch around five key decision points. Each stage builds on the previous one.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { stage: "Pricing context", detail: "Recent sales, active competition, strata situation, property condition, and micro-market comparables", icon: DollarSign },
            { stage: "Prep & presentation", detail: "Repairs, cleaning, staging, lighting, photos, strata documents, and disclosure preparation", icon: Hammer },
            { stage: "Launch strategy", detail: "MLS copy, photography, video, social, local distribution, media timeline, and buyer follow-up plan", icon: Rocket },
            { stage: "Showing feedback", detail: "Buyer comments, objection patterns, price perception, positioning response, and timeline adjustment", icon: Lightbulb },
            { stage: "Offer review", detail: "Terms, subjects, dates, contingencies, conditions, deposit, closing timeline, and counter strategy", icon: GraduationCap },
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

      {/* 5. What buyers value by property type */}
      <Section
        eyebrow="Know your buyer"
        title="What Port Moody buyers tend to value."
        intro="Understanding what buyers prioritise by property type helps you prepare, price, and position more effectively."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {buyerValues.map((pv) => (
            <div key={pv.type} className="rounded-lg border border-softBorder bg-white p-6">
              <p className="font-heading text-2xl text-deepInlet">{pv.type}</p>
              <ul className="mt-4 space-y-2">
                {pv.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slateText">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-seaGlass" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* 6. Preparation checklist */}
      <Section
        eyebrow="Before you list"
        title="Seller preparation checklist."
        tone="white"
      >
        <div className="grid gap-8 md:grid-cols-3">
          <ChecklistPanel title="All properties" items={allSellerChecklist.map((label) => ({ label }))} color="forest" />
          <ChecklistPanel title="Condos and townhouses" items={strataSellerChecklist.map((label) => ({ label }))} color="forest" />
          <ChecklistPanel title="Detached homes" items={detachedSellerChecklist.map((label) => ({ label }))} color="forest" />
        </div>
      </Section>

      {/* 7. Pricing and launch */}
      <Section
        eyebrow="Pricing strategy"
        title="Pricing is not just a number."
        intro="The best pricing strategy depends on property type, active competition, condition, buyer demand, recent context, and how easy it is for buyers to understand the value. We don't publish automated valuations."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pricingCards.map((card) => (
            <div key={card} className="rounded-lg border border-softBorder bg-white p-5 text-sm text-slateText">
              {card}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <CTAButton href="/sell#value-opinion">Request a value opinion</CTAButton>
        </div>
      </Section>

      {/* 8. Media and storytelling */}
      <Section
        eyebrow="Media and storytelling"
        title="Media should make the decision easier."
        intro="Strong media shows not just the rooms, but how the property lives: layout, light, privacy, outdoor space, parking, storage, building context, neighbourhood access, and trade-offs."
        tone="white"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mediaCards.map((card) => (
            <div key={card.label} className="rounded-lg border border-softBorder bg-mist p-5">
              <card.icon className="h-5 w-5 text-forest mb-3" />
              <p className="font-semibold text-deepInlet">{card.label}</p>
              <p className="mt-2 text-sm leading-6 text-slateText">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 9. Complex / building owner section */}
      <Section
        eyebrow="Micro-market positioning"
        title="Own in a Port Moody building or complex?"
        intro="If you own in a specific condo building or townhouse complex, your value is shaped by more than the general Port Moody market. Buyers compare your unit against the same building, similar complexes, current inventory, strata documents, fees, condition, layout, exposure, parking, and recent context."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {complexOwnerCards.map((card) => (
            <div key={card.label} className="flex flex-col rounded-lg border border-softBorder bg-white p-5">
              <p className="font-semibold text-deepInlet">{card.label}</p>
              <p className="mt-2 flex-1 text-sm leading-6 text-slateText">{card.copy}</p>
              <Link
                href={card.href}
                className="mt-4 inline-flex text-xs font-semibold text-forest hover:underline"
              >
                {card.cta} →
              </Link>
            </div>
          ))}
        </div>
        <div id="value-opinion" className="mt-10 max-w-2xl rounded-lg border border-softBorder bg-mist p-6">
          <h2 className="mb-1 font-heading text-2xl text-deepInlet">Request a home evaluation</h2>
          <p className="mb-6 text-sm text-slateText">
            Get a property assessment, understand your market positioning, and learn next steps for selling.
          </p>
          <CTAButton href="/home-evaluation">Request evaluation</CTAButton>
        </div>
      </Section>

      {/* 9b. Seller resources section */}
      <Section
        eyebrow="Next steps"
        title="Explore our seller resources."
        tone="white"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          <Link
            href="/how-we-do-it"
            className="flex flex-col rounded-lg border border-softBorder bg-white p-6 hover:border-forest"
          >
            <p className="font-heading text-lg text-deepInlet">How we do it</p>
            <p className="mt-3 flex-1 text-sm text-slateText">
              Walk through our 8-step selling process from strategy consultation to closing.
            </p>
            <span className="mt-4 text-sm font-semibold text-forest">Learn more →</span>
          </Link>

          <Link
            href="/recently-sold"
            className="flex flex-col rounded-lg border border-softBorder bg-white p-6 hover:border-forest"
          >
            <p className="font-heading text-lg text-deepInlet">Recently sold</p>
            <p className="mt-3 flex-1 text-sm text-slateText">
              Request recent Port Moody sales context where it can be shared appropriately.
            </p>
            <span className="mt-4 text-sm font-semibold text-forest">Request context →</span>
          </Link>

          <Link
            href="/seller-guide"
            className="flex flex-col rounded-lg border border-softBorder bg-white p-6 hover:border-forest"
          >
            <p className="font-heading text-lg text-deepInlet">Seller guide</p>
            <p className="mt-3 flex-1 text-sm text-slateText">
              Request the Port Moody seller guide and seller preparation guidance.
            </p>
            <span className="mt-4 text-sm font-semibold text-forest">Request guide →</span>
          </Link>

          <Link
            href="/raving-fans"
            className="flex flex-col rounded-lg border border-softBorder bg-white p-6 hover:border-forest"
          >
            <p className="font-heading text-lg text-deepInlet">Client stories</p>
            <p className="mt-3 flex-1 text-sm text-slateText">
              Read approved client stories and verified public review links.
            </p>
            <span className="mt-4 text-sm font-semibold text-forest">Read stories →</span>
          </Link>

          <Link
            href="/contact"
            className="flex flex-col rounded-lg border border-softBorder bg-white p-6 hover:border-forest"
          >
            <p className="font-heading text-lg text-deepInlet">Contact us</p>
            <p className="mt-3 flex-1 text-sm text-slateText">
              Have questions about selling? Reach out directly and we&apos;ll help you understand your next steps.
            </p>
            <span className="mt-4 text-sm font-semibold text-forest">Get in touch →</span>
          </Link>
        </div>
      </Section>

      {/* 10. FAQ */}
      <Section tone="white">
        <FAQSection
          title="Seller questions"
          intro="Common questions from Port Moody sellers."
          items={faqs}
        />
      </Section>

      {/* 11. Final CTA */}
      <Section tone="sand">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl text-deepInlet">Ready to plan your Port Moody sale?</h2>
          <p className="mt-3 text-slateText">
            Share your situation and we&apos;ll help you think through timing, preparation, and positioning.
          </p>
          <div className="mt-8">
            <LeadForm
              formType="home-value"
              leadType="seller"
              ctaLabel="Start seller conversation"
              title=""
              messageLabel="Property type, area, timeline, and what you're trying to figure out"
              tags={[
                "source:liveinportmoody",
                "intent:seller",
                "intent:seller-micro-market-value",
                "lead_type:seller",
                "area:port-moody",
              ]}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
