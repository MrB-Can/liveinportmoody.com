import { type LucideIcon, Building2, Home, Trees } from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { FAQAccordion } from "@/components/faq-accordion";
import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "First-Time Home Buyers in Port Moody",
  description:
    "A practical first-time buyer guide for Port Moody, including property types, deposits, closing costs, strata documents, neighbourhood fit, and common mistakes to avoid.",
  path: "/first-time-home-buyers",
});

const understandingItems = [
  "Port Moody is not one market. Condo, townhouse, and detached options behave differently by area, age, strata profile, and buyer demand.",
  "Your lender should confirm budget, approval conditions, down payment source, and closing-cost assumptions before you rely on a price range.",
  "A strong first purchase is not just about the lowest price. It should fit your daily life, risk tolerance, holding period, and future resale audience.",
  "For strata properties, the building or complex can matter as much as the unit itself.",
];

const propertyTypes: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Building2,
    title: "Condos",
    body: "Often the most accessible first purchase in central Port Moody areas, but strata fees, insurance, parking, storage, exposure, noise, and building history need careful review.",
  },
  {
    icon: Home,
    title: "Townhouses",
    body: "Can offer more space and function, but buyers should compare strata documents, exterior responsibilities, parking, outdoor space, and maintenance planning.",
  },
  {
    icon: Trees,
    title: "Detached homes",
    body: "Usually require a larger budget and more maintenance planning. Condition, lot usability, drainage, updates, and future repair costs matter.",
  },
];

const mistakeItems = [
  "Shopping before lender guidance is clear.",
  "Comparing list prices without understanding strata fees, upcoming work, or building risk.",
  "Assuming every Port Moody neighbourhood fits the same commute, lifestyle, or budget.",
  "Skipping document review because the unit looks good.",
  "Using online payment estimates as a substitute for lender, legal, accounting, or insurance advice.",
];

const processSteps = [
  {
    title: "Prepare the budget",
    body: "Confirm lender guidance, available deposit funds, down payment source, closing-cost assumptions, and the type of approval conditions you may need.",
  },
  {
    title: "Choose the right search lane",
    body: "Decide whether you are comparing condos, townhomes, detached homes, or a specific neighbourhood before reacting to every new listing.",
  },
  {
    title: "Review the property risk",
    body: "Look at strata documents, condition, insurance, fees, parking, storage, building history, renovation needs, and resale fit before writing.",
  },
  {
    title: "Write with context",
    body: "Use local context, professional advice, and property-specific review so the offer matches your budget, timeline, and risk tolerance.",
  },
];

const faqItems = [
  {
    question: "What should a first-time buyer do before viewing homes?",
    answer:
      "Speak with a lender or mortgage broker, understand your down payment and closing-cost assumptions, clarify your must-haves, and decide which Port Moody areas and property types fit your daily life.",
  },
  {
    question: "Are condos better for first-time buyers?",
    answer:
      "Not automatically. Condos can be more accessible, but strata documents, fees, building condition, parking, storage, and resale fit all matter. A townhouse or detached home may fit better depending on budget and goals.",
  },
  {
    question: "How much deposit do I need?",
    answer:
      "Deposit expectations vary by offer, property, and market conditions. Confirm your available funds with your lender and get legal advice before relying on contract terms.",
  },
  {
    question: "What closing costs should I expect?",
    answer:
      "Common items may include property transfer tax, legal fees, inspection costs, insurance, adjustments, moving costs, and lender-related costs. Get current advice from your lender, lawyer/notary, and accountant where relevant.",
  },
  {
    question: "Can I ask about a specific first-time buyer option?",
    answer:
      "Yes. Send the listing, building, complex, or neighbourhood you are comparing and we can help you identify what matters most before making a decision.",
  },
];

export default function FirstTimeHomeBuyersPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-14 md:py-18">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-emphasis">Buyer education</p>
          <h1 className="max-w-4xl font-heading text-4xl leading-tight text-deepInlet md:text-6xl">
            First-time buying in Port Moody
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slateText">
            A practical starting point for first-time buyers comparing Port Moody condos, townhouses, neighbourhoods, costs, documents, and decision risks.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="/buyer-guide">Request the Port Moody buyer guide</CTAButton>
            <CTAButton href="/contact" variant="secondary">Ask a first-time buyer question</CTAButton>
          </div>
        </div>
      </section>

      <Section title="What first-time buyers need to understand" tone="white">
        <div className="grid gap-4 md:grid-cols-2">
          {understandingItems.map((item) => (
            <div key={item} className="rounded-lg border border-softBorder bg-mist p-5 text-sm leading-6 text-slateText">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Condo vs townhouse vs detached realities">
        <div className="grid gap-5 md:grid-cols-3">
          {propertyTypes.map((item) => (
            <div key={item.title} className="rounded-lg border border-softBorder bg-white p-6">
              <item.icon className="h-5 w-5 text-forest mb-3" />
              <h2 className="font-heading text-2xl text-deepInlet">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slateText">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="A practical first-time buying process" tone="white">
        <div className="grid gap-4 md:grid-cols-2">
          {processSteps.map((step, i) => (
            <article key={step.title} className="rounded-lg border border-softBorder bg-mist p-5">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-deepInlet text-xs font-bold text-white mb-3">
                {i + 1}
              </div>
              <h2 className="font-heading text-2xl text-deepInlet">{step.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slateText">{step.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Deposit, down payment, and closing cost overview" tone="white">
        <div className="rounded-lg border border-softBorder bg-white p-6">
          <p className="text-sm leading-6 text-slateText">
            Deposit, down payment, and closing costs should be planned before you rely on a purchase price. This page is general education only. Confirm financing, contract terms, property transfer tax, legal fees, adjustments, insurance, and other costs with your lender, lawyer/notary, accountant, and insurance provider where appropriate.
          </p>
        </div>
      </Section>

      <Section title="Strata document basics">
        <div className="flex flex-wrap gap-2">
          {["Form B", "Strata minutes", "Depreciation report", "Insurance", "Bylaws and rules", "Contingency reserve fund"].map((item) => (
            <span key={item} className="rounded-full border border-softBorder bg-mist px-4 py-2 text-sm font-semibold text-deepInlet">
              {item}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-slateText">Review current documents for the specific property and get professional advice where needed.</p>
      </Section>

      <Section title="Common first-time buyer mistakes" tone="white">
        <div className="rounded-lg border border-softBorder bg-mist p-6">
          <ul className="grid gap-3 text-sm leading-6 text-slateText">
            {mistakeItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="Port Moody neighbourhood fit">
        <p className="max-w-3xl text-sm leading-6 text-slateText">
          Suter Brook, Newport Village, Moody Centre, Klahanie, Heritage Mountain, Glenayre, College Park, and other Port Moody areas solve different problems. Compare commute, walkability, property type, strata profile, school catchment, parks, trails, and resale audience before choosing only by price.
        </p>
        <div className="mt-5">
          <CTAButton href="/neighbourhoods" variant="secondary">Compare neighbourhoods</CTAButton>
        </div>
      </Section>

      <Section id="first-time-guide" title="Request First-Time Buyer Guidance" tone="white">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_0.85fr] lg:items-start">
          <div className="self-start rounded-lg border border-softBorder bg-mist p-6">
            <h2 className="font-heading text-2xl text-deepInlet">Request first-time buyer guidance</h2>
            <p className="mt-3 text-sm leading-6 text-slateText">
              Request the buyer guide and include what you are trying to buy: condo, townhouse, detached home, neighbourhood, building, or complex.
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slateText">
              <li>• Budget range and property type you are exploring</li>
              <li>• Areas, buildings, or complexes on your shortlist</li>
              <li>• Deposit, closing-cost, or strata questions to clarify</li>
            </ul>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CTAButton href="/buyer-guide" variant="secondary">Request the buyer guide</CTAButton>
              <CTAButton href="/listings" variant="ghost">View current listings</CTAButton>
            </div>
          </div>
          <div id="ask-first-time-question">
            <LeadForm
              formType="ask-question"
              leadType="buyer"
              ctaLabel="Ask a first-time buyer question"
              title="Ask a first-time buyer question"
              tags={["source:liveinportmoody", "intent:first-time-buyer", "lead_type:buyer", "area:port-moody"]}
            />
          </div>
        </div>
      </Section>

      <Section title="First-time buyer FAQ">
        <FAQAccordion items={faqItems} />
      </Section>
    </>
  );
}
