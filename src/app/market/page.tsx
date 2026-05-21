import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { CTAButton } from "@/components/cta-button";
import { LeadForm } from "@/components/lead-form";

export const metadata = createMetadata({
  title: "Port Moody Market Intelligence | Live in Port Moody",
  description: "Local Port Moody real estate market context for buyers, sellers, and owners, including property types, neighbourhoods, strata considerations, buyer demand, and active listing guidance.",
  path: "/market",
});

const propertyTypeCards = [
  {
    title: "Detached homes",
    description: "Limited supply, land value, lot characteristics, renovation quality, slope, drainage, privacy, suite potential, trees, and condition can all materially affect value.",
  },
  {
    title: "Townhomes",
    description: "Family demand, strata condition, parking, outdoor space, layout, visitor parking, school-area fit, and exterior maintenance history can drive competition.",
  },
  {
    title: "Condos",
    description: "Walkability, building age, strata fees, amenities, views, exposure, parking, storage, noise, and SkyTrain proximity often matter heavily.",
  },
  {
    title: "Strata properties",
    description: "Depreciation reports, contingency reserve fund, insurance, bylaws, minutes, fees, and upcoming capital projects can change buyer confidence.",
  },
  {
    title: "Land and redevelopment context",
    description: "Neighbourhood planning, transit access, lot characteristics, zoning context, and redevelopment potential can affect buyer interest, but should be verified before relying on it.",
  },
];

const valueDrivers = [
  "Walkability and transit",
  "Views, exposure, and privacy",
  "Strata health",
  "Renovation level",
  "Parking and storage",
  "Outdoor space",
  "Trails and lifestyle access",
  "School-area demand",
  "Lot, slope, drainage, and trees",
  "Development or density context",
];

const buyerCompetitionAreas = [
  "Walkable condo areas",
  "Family townhomes",
  "Detached homes with usable lots",
  "Homes near trails and parks",
  "Properties with strong parking/storage",
  "Renovated homes with fewer obvious concerns",
];

const sellerPositioningCards = [
  "Why this neighbourhood?",
  "Why this building or complex?",
  "What does the property compete against?",
  "What has been updated?",
  "What should buyers not miss?",
  "What documents reduce uncertainty?",
  "What trade-off is the buyer making?",
];

const neighbourhoodCards = [
  { name: "Suter Brook", focus: "walkability and condo convenience" },
  { name: "Newport Village", focus: "established village lifestyle" },
  { name: "Klahanie", focus: "central condo and townhouse lifestyle" },
  { name: "Moody Centre", focus: "transit-oriented and changing" },
  { name: "Heritage Mountain", focus: "hillside, family-oriented, townhomes and detached homes" },
  { name: "College Park", focus: "established residential alternatives" },
  { name: "Glenayre", focus: "quieter detached-home residential feel" },
  { name: "Pleasantside / Ioco / Barber Street", focus: "nature, quiet, and north shore context" },
];

const strataContextCards = [
  "Strata document quality",
  "Insurance and deductibles",
  "Depreciation report",
  "Upcoming capital projects",
  "Renovation quality",
  "Building envelope and exterior maintenance",
  "Parking/storage",
  "Noise, exposure, and layout",
];

const faqItems = [
  {
    question: "Does this page show live Port Moody market stats?",
    answer:
      "No. This page provides qualitative local market context. Live statistics, recent sales, and detailed valuation work should be reviewed with current, approved data before making a decision.",
  },
  {
    question: "Can I ask for current market context?",
    answer:
      "Yes. Use the form at the bottom of this page or contact us directly with your property type, area, or specific question.",
  },
  {
    question: "Why does property type matter so much in Port Moody?",
    answer:
      "Port Moody has detached homes, townhomes, and condos in very different areas with different buyer bases, price points, and lifestyle appeals. Market behaviour is different by property type.",
  },
  {
    question: "How do strata documents affect value?",
    answer:
      "For condos and townhouses, strata condition, fees, depreciation reports, and upcoming projects can materially affect buyer confidence and resale appeal.",
  },
  {
    question: "How do neighbourhoods affect pricing?",
    answer:
      "Walkability, transit, trails, schools, hillside context, density, and development activity all shape neighbourhood appeal and pricing independently of property type.",
  },
  {
    question: "Can you help compare a listing to the local market?",
    answer:
      "Yes. Contact us with the property address or details, and we can provide context about its area, building or complex, property type, and local market positioning.",
  },
];

export default function MarketPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl text-deepInlet">Port Moody market intelligence</h1>
          <p className="mt-4 text-lg text-slateText mb-2">
            A local view of the factors that shape Port Moody real estate decisions, including property type, neighbourhood, walkability, strata condition, land value, buyer demand, and active listing context.
          </p>
          <div className="mt-8 flex gap-3 flex-col sm:flex-row sm:flex-wrap">
            <CTAButton href="#ask-market">Ask about the market</CTAButton>
            <CTAButton href="/listings" variant="secondary">View active listings</CTAButton>
            <CTAButton href="/neighbourhoods" variant="ghost">Compare neighbourhoods</CTAButton>
          </div>
        </div>
      </section>

      {/* Market Intelligence Note */}
      <section className="mx-auto max-w-4xl px-5 py-12">
        <div className="rounded-lg border border-softBorder bg-sand p-6">
          <p className="text-sm text-slateText leading-6">
            This page provides qualitative local market context. Live statistics, recent sales, and detailed valuation work should be reviewed with current, approved data before making a decision.
          </p>
        </div>
      </section>

      {/* Property Type Market Cards */}
      <section className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="font-heading text-2xl text-deepInlet mb-6">Property types in Port Moody</h2>
        <div className="space-y-4">
          {propertyTypeCards.map((card) => (
            <div key={card.title} className="rounded-lg border border-softBorder bg-white p-6">
              <h3 className="font-semibold text-deepInlet mb-2">{card.title}</h3>
              <p className="text-sm text-slateText">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What Changes Value */}
      <section className="mx-auto max-w-4xl px-5 py-12 bg-mist">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl text-deepInlet mb-6">What changes value here?</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {valueDrivers.map((driver) => (
              <div key={driver} className="rounded-lg border border-softBorder bg-white p-4">
                <p className="text-sm font-semibold text-deepInlet">{driver}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Competition Context */}
      <section className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="font-heading text-2xl text-deepInlet mb-3">Where buyers tend to compete</h2>
        <p className="text-slateText mb-6">
          Competition changes with inventory, pricing, season, rates, property condition, and buyer confidence.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {buyerCompetitionAreas.map((area) => (
            <div key={area} className="rounded-lg border border-softBorder bg-white p-4">
              <p className="text-sm font-semibold text-deepInlet">{area}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seller Positioning Context */}
      <section className="mx-auto max-w-4xl px-5 py-12 bg-warmSand">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl text-deepInlet mb-3">What sellers need to position clearly</h2>
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            {sellerPositioningCards.map((card) => (
              <div key={card} className="rounded-lg border border-softBorder bg-white p-4">
                <p className="text-sm font-semibold text-deepInlet">{card}</p>
              </div>
            ))}
          </div>
          <Link href="/sell" className="inline-block px-6 py-3 bg-forest text-white rounded-lg font-semibold hover:opacity-90">
            Build a selling plan
          </Link>
        </div>
      </section>

      {/* Neighbourhood Market Context */}
      <section className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="font-heading text-2xl text-deepInlet mb-3">Port Moody is not one market</h2>
        <p className="text-slateText mb-6">Each neighbourhood has a different buyer base, property type mix, and market behaviour.</p>
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          {neighbourhoodCards.map((neighbourhood) => (
            <div key={neighbourhood.name} className="rounded-lg border border-softBorder bg-white p-4">
              <p className="font-semibold text-deepInlet text-sm mb-1">{neighbourhood.name}</p>
              <p className="text-xs text-slateText">{neighbourhood.focus}</p>
            </div>
          ))}
        </div>
        <Link href="/neighbourhoods" className="inline-block px-6 py-3 bg-forest text-white rounded-lg font-semibold hover:opacity-90">
          Compare neighbourhoods
        </Link>
      </section>

      {/* Strata and Property Risk Context */}
      <section className="mx-auto max-w-4xl px-5 py-12 bg-mist">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl text-deepInlet mb-3">Market value is not just list price</h2>
          <p className="text-slateText mb-6">For strata properties, documents and condition can change real value more than list price.</p>
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            {strataContextCards.map((card) => (
              <div key={card} className="rounded-lg border border-softBorder bg-white p-4">
                <p className="text-sm font-semibold text-deepInlet">{card}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link href="/buildings" className="inline-block px-6 py-3 bg-forest text-white rounded-lg font-semibold hover:opacity-90">
              Research condo buildings
            </Link>
            <Link href="/complexes" className="inline-block px-6 py-3 border border-forest text-forest rounded-lg font-semibold hover:bg-mist">
              Research townhouse complexes
            </Link>
          </div>
        </div>
      </section>

      {/* Market Question CTA */}
      <section id="ask-market" className="mx-auto max-w-4xl px-5 py-12">
        <div className="rounded-lg border border-softBorder bg-sand p-8">
          <h2 className="font-heading text-2xl text-deepInlet mb-3">Have a Port Moody market question?</h2>
          <p className="text-slateText mb-6">Ask about a specific property, area, neighbourhood, building, complex, or property type market context.</p>
          <div className="max-w-md">
            <LeadForm
              formType="ask-question"
              leadType="market-update"
              ctaLabel="Ask about the market"
              title="Ask about Port Moody market"
              messageLabel="What property type, area, building, or market question do you have?"
              tags={["source:liveinportmoody", "intent:market-question", "intent:general-local-question", "area:port-moody"]}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-12 bg-mist">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl text-deepInlet mb-2">Frequently asked questions</h2>
          <p className="text-slateText mb-8">Common questions about the Port Moody market and how to use this context.</p>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <details key={index} className="rounded-lg border border-softBorder overflow-hidden group">
                <summary className="w-full flex items-center justify-between p-5 hover:bg-white transition-colors text-left cursor-pointer font-semibold text-deepInlet">
                  {item.question}
                  <span className="group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 py-4 bg-white/50 border-t border-softBorder">
                  <p className="text-sm text-slateText leading-6">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
