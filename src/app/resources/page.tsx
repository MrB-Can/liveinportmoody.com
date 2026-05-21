import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { CTAButton } from "@/components/cta-button";
import { LeadForm } from "@/components/lead-form";

export const metadata = createMetadata({
  title: "Port Moody Real Estate Resources | Buyer, Seller, Strata and Neighbourhood Guides",
  description: "Practical Port Moody real estate resources for buyers, sellers, owners, and relocation researchers, including neighbourhood guides, strata review notes, market context, listings, and preparation checklists.",
  path: "/resources",
});

const categoryCards = [
  {
    title: "Buyer resources",
    description: "Guides for neighbourhood selection, property types, listings, strata documents, and offer preparation.",
  },
  {
    title: "Seller resources",
    description: "Preparation, pricing, media, positioning, and micro-market value context.",
  },
  {
    title: "Strata resources",
    description: "Form B, minutes, depreciation reports, insurance, bylaws, fees, pets, rentals, parking, and storage.",
  },
  {
    title: "Neighbourhood resources",
    description: "Compare areas by lifestyle, housing, walkability, schools, transit, trails, and trade-offs.",
  },
  {
    title: "Moving resources",
    description: "Port Moody relocation, commute, schools, trails, village areas, and property type decisions.",
  },
  {
    title: "Market resources",
    description: "Local qualitative market context, active listings, buyer demand, and property-type considerations.",
  },
];

const featuredResources = [
  {
    title: "Buyer Decision Checklist",
    cta: "Read buyer checklist",
    link: "/buy",
  },
  {
    title: "Seller Prep Checklist",
    cta: "Read seller checklist",
    link: "/sell",
  },
  {
    title: "Strata Review Notes",
    cta: "Review strata basics",
    link: "#strata-section",
  },
  {
    title: "Moving to Port Moody Starter Guide",
    cta: "Start relocation guide",
    link: "/move-to-port-moody",
  },
  {
    title: "Port Moody Neighbourhood Comparison",
    cta: "Compare neighbourhoods",
    link: "/neighbourhoods",
  },
  {
    title: "Townhouse Complex Research Guide",
    cta: "Research townhouse complexes",
    link: "/complexes",
  },
  {
    title: "Condo Building Research Guide",
    cta: "Research condo buildings",
    link: "/buildings",
  },
  {
    title: "Market Context Guide",
    cta: "View market context",
    link: "/market",
  },
];

const strataContextCards = [
  "Form B",
  "Strata minutes",
  "Depreciation report",
  "Contingency reserve fund",
  "Insurance and deductibles",
  "Bylaws and rules",
  "Parking and storage",
  "Pets and rentals",
  "Special levies and capital projects",
];

const faqItems = [
  {
    question: "What should I read before buying in Port Moody?",
    answer:
      "Start with neighbourhood guides to understand area fit, then research the specific property type (detached, townhome, or condo) and building/complex context. Finally, review strata documents if applicable.",
  },
  {
    question: "What should I prepare before selling?",
    answer:
      "Understand your home's positioning in the local market, prepare key documents (title, strata, inspections), clarify what upgrades or repairs matter most, and establish realistic expectations based on neighbourhood and property type.",
  },
  {
    question: "What should I review in strata documents?",
    answer:
      "For condos and townhouses, review Form B, depreciation reports, contingency reserve funding, insurance, bylaws, fees, and upcoming capital projects. These can materially affect resale value and buyer confidence.",
  },
  {
    question: "How do I compare neighbourhoods?",
    answer:
      "Use the neighbourhood comparison tool to see areas side by side by lifestyle, housing type, walkability, schools, transit, trails, and trade-offs. Then dive into detailed neighbourhood guides.",
  },
  {
    question: "Can I ask about a specific listing, building, or complex?",
    answer:
      "Yes. Use the form at the bottom of this page or contact us directly with the property address or building/complex name.",
  },
  {
    question: "Are these resources a replacement for professional advice?",
    answer:
      "No. These resources are for general orientation. Property-specific decisions should be made with current documents, professional advice where needed, and up-to-date market context.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl text-deepInlet">Port Moody real estate resources</h1>
          <p className="mt-4 text-lg text-slateText mb-2">
            Practical guides, checklists, and local research tools for buying, selling, moving, comparing neighbourhoods, reviewing strata documents, and understanding Port Moody real estate decisions.
          </p>
          <div className="mt-8 flex gap-3 flex-col sm:flex-row sm:flex-wrap">
            <CTAButton href="#resource-categories">Browse resources</CTAButton>
            <CTAButton href="#ask-a-question" variant="ghost">Ask a local question</CTAButton>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section id="resource-categories" className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="font-heading text-2xl text-deepInlet mb-6">Resource categories</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {categoryCards.map((card) => (
            <div key={card.title} className="rounded-lg border border-softBorder bg-white p-6">
              <h3 className="font-semibold text-deepInlet mb-2">{card.title}</h3>
              <p className="text-sm text-slateText">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Resources */}
      <section className="mx-auto max-w-4xl px-5 py-12 bg-mist">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl text-deepInlet mb-6">Featured resources</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {featuredResources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.link}
                className="rounded-lg border border-softBorder bg-white p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-deepInlet mb-3">{resource.title}</h3>
                <span className="text-sm font-semibold text-forest hover:text-deepInlet">{resource.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Resources Section */}
      <section className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="font-heading text-2xl text-deepInlet mb-3">Buyer resources</h2>
        <p className="text-slateText mb-6">
          Guides for neighbourhood selection, understanding property types, researching listings, reviewing strata documents for condos and townhouses, and preparing for offers.
        </p>
        <Link href="/buy" className="inline-block px-6 py-3 bg-forest text-white rounded-lg font-semibold hover:opacity-90">
          Read buyer guide
        </Link>
      </section>

      {/* Seller Resources Section */}
      <section className="mx-auto max-w-4xl px-5 py-12 bg-warmSand">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl text-deepInlet mb-3">Seller resources</h2>
          <p className="text-slateText mb-6">
            Preparation guides, pricing discussion context, media planning, buyer positioning strategies, and micro-market value analysis for your Port Moody property.
          </p>
          <Link href="/sell" className="inline-block px-6 py-3 bg-forest text-white rounded-lg font-semibold hover:opacity-90">
            Read seller guide
          </Link>
        </div>
      </section>

      {/* Strata Resources Section */}
      <section id="strata-section" className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="font-heading text-2xl text-deepInlet mb-3">Strata documents buyers should understand</h2>
        <p className="text-slateText mb-6">
          For condos and townhouses, the strata can matter as much as the unit. Always verify current documents for the specific property.
        </p>
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          {strataContextCards.map((card) => (
            <div key={card} className="rounded-lg border border-softBorder bg-white p-4">
              <p className="text-sm font-semibold text-deepInlet">{card}</p>
            </div>
          ))}
        </div>
        <CTAButton href="#ask-a-question">Ask about a strata document</CTAButton>
      </section>

      {/* Neighbourhood Resources Section */}
      <section className="mx-auto max-w-4xl px-5 py-12 bg-mist">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl text-deepInlet mb-3">Neighbourhood resources</h2>
          <p className="text-slateText mb-6">
            Compare Port Moody areas side by side by lifestyle, housing types, walkability, schools, transit, trails, and trade-offs. Then dive into detailed neighbourhood guides for areas that match your priorities.
          </p>
          <Link href="/neighbourhoods" className="inline-block px-6 py-3 bg-forest text-white rounded-lg font-semibold hover:opacity-90">
            Compare neighbourhoods
          </Link>
        </div>
      </section>

      {/* Moving Resources Section */}
      <section className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="font-heading text-2xl text-deepInlet mb-3">Moving to Port Moody resources</h2>
        <p className="text-slateText mb-6">
          Understand Port Moody lifestyle, commute patterns, schools, trails, village areas, and how different neighbourhoods compare. Get practical guidance for relocation planning.
        </p>
        <Link href="/move-to-port-moody" className="inline-block px-6 py-3 bg-forest text-white rounded-lg font-semibold hover:opacity-90">
          Start relocation guide
        </Link>
      </section>

      {/* Market Resources Section */}
      <section className="mx-auto max-w-4xl px-5 py-12 bg-warmSand">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl text-deepInlet mb-3">Market context resources</h2>
          <p className="text-slateText mb-6">
            Qualitative Port Moody market context by property type and neighbourhood. Understand buyer demand, seller positioning strategies, and active listing landscape without fake statistics.
          </p>
          <Link href="/market" className="inline-block px-6 py-3 bg-forest text-white rounded-lg font-semibold hover:opacity-90">
            View market context
          </Link>
        </div>
      </section>

      {/* Ask a Question CTA */}
      <section id="ask-a-question" className="mx-auto max-w-4xl px-5 py-12">
        <div className="rounded-lg border border-softBorder bg-sand p-8">
          <h2 className="font-heading text-2xl text-deepInlet mb-3">Have a Port Moody question that is not answered here?</h2>
          <p className="text-slateText mb-6">
            Ask about a listing, building, complex, neighbourhood, strata document, commute, school area, sale, or move.
          </p>
          <div className="max-w-md">
            <LeadForm
              formType="ask-question"
              leadType="local-question"
              ctaLabel="Ask a local question"
              title="Ask a Port Moody question"
              messageLabel="What would you like to know about Port Moody real estate?"
              tags={["source:liveinportmoody", "intent:general-local-question", "area:port-moody"]}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-12 bg-mist">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl text-deepInlet mb-2">Frequently asked questions</h2>
          <p className="text-slateText mb-8">Common questions about Port Moody real estate resources and how to use them.</p>

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
