import Link from "next/link";
import { CTAButton } from "@/components/cta-button";
import { FAQAccordion } from "@/components/faq-accordion";
import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { complexes, complexNeighbourhoodGroups } from "@/data/complexes";
import { createMetadata } from "@/lib/seo";
import { PortMoodyMap } from "@/components/maps/PortMoodyMap";
import { complexMapPoints } from "@/data/mapPoints";

export const metadata = createMetadata({
  title: "Port Moody Townhouse Complexes",
  description:
    "Compare Port Moody townhouse complexes by location, layout, age, amenities, walkability, schools, trails, strata considerations, and buyer fit.",
  path: "/complexes",
});

const filters = [
  "Heritage Mountain",
  "Klahanie",
  "Moody Centre",
  "College Park",
  "Near SkyTrain",
  "Near trails",
  "Family-oriented",
  "Newer construction",
  "Established complex",
  "Larger layouts",
  "Lower-density feel",
  "Active listings",
  "Guide live",
  "Preview",
];

const decisionCards = [
  {
    title: "Location",
    body: "Walkability, transit, schools, trails, commute, and daily errands.",
  },
  {
    title: "Strata health",
    body: "Depreciation report, contingency fund, maintenance history, special levies, insurance, and bylaws.",
  },
  {
    title: "Layout",
    body: "Bedrooms, stairs, garage, outdoor space, storage, work-from-home fit, and long-term usability.",
  },
  {
    title: "Age and construction",
    body: "Roof, windows, decks, siding, drainage, envelope, mechanical systems, and exterior maintenance history.",
  },
  {
    title: "Parking and access",
    body: "Garage usability, visitor parking, street parking, EV charging potential, and access grade.",
  },
  {
    title: "Resale demand",
    body: "Family fit, school appeal, walkability, complex reputation, listing supply, layout, and condition.",
  },
];

const faqs = [
  {
    question: "What should buyers review before buying a Port Moody townhouse?",
    answer:
      "Review the strata documents, depreciation report, minutes, insurance, bylaws, Form B, parking and storage allocation, pet and rental rules, inspection findings, and unit-specific condition before relying on a general complex guide.",
  },
  {
    question: "Which Port Moody areas have the most townhomes?",
    answer:
      "Townhouse options appear across Heritage Mountain, Klahanie, Moody Centre, College Park, and other residential pockets. Each area has different trade-offs around walkability, age, setting, schools, transit, and strata type.",
  },
  {
    question: "Are older townhouse complexes a problem?",
    answer:
      "Not automatically. Older complexes can offer larger layouts, mature landscaping, and established locations, but buyers should pay close attention to exterior maintenance, insurance, depreciation planning, past levies, and upcoming capital work.",
  },
  {
    question: "Are Port Moody townhouses good for families?",
    answer:
      "Many buyers consider townhouses because they can offer more functional space than a condo without the cost or upkeep of a detached home. Always verify stairs, bedrooms, storage, parking, outdoor space, school catchment, and strata rules for the specific unit.",
  },
  {
    question: "How do I compare two townhouse complexes?",
    answer:
      "Compare location, layout, condition, strata health, fees, bylaws, parking, outdoor space, maintenance history, resale demand, and current listing context rather than choosing only by price or neighbourhood name.",
  },
  {
    question: "Can I ask about a specific complex or listing?",
    answer:
      "Yes. Send the complex name or listing address and we can help you understand the location, strata questions, layout trade-offs, document review priorities, and buyer or seller considerations.",
  },
];

const howToUseCards = [
  {
    heading: "Compare by neighbourhood",
    body: "Start with Heritage Mountain, Klahanie, Moody Centre, or College Park before comparing individual complexes.",
  },
  {
    heading: "Compare strata health",
    body: "Depreciation report, reserve fund, maintenance history, special levies, and insurance differ by complex and matter more than price alone.",
  },
  {
    heading: "Compare layout and parking",
    body: "Bedrooms, stairs, garage usability, visitor parking, outdoor space, and storage allocation vary significantly in established complexes.",
  },
  {
    heading: "Ask about current availability",
    body: "Use the inquiry form to ask about active listings in a specific complex through approved MLS Reciprocity sources.",
  },
  {
    heading: "Verify details before buying",
    body: "Guides are for orientation. Verify strata documents, bylaws, fees, and unit-specific details with a professional before deciding.",
  },
];

function statusClass(status: string) {
  if (status === "Guide live" || status === "live") return "bg-forest/10 text-forest";
  if (status === "Full guide in progress" || status === "in-progress") return "bg-seaGlass/30 text-deepInlet";
  return "bg-mist text-slateText";
}

export default function ComplexesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Townhouse research hub</p>
          <h1 className="mt-4 font-heading text-4xl text-deepInlet md:text-5xl">
            Compare Port Moody townhouse complexes
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slateText">
            Research Port Moody townhouse communities by neighbourhood, age, layout, strata considerations,
            amenities, trail access, schools, walkability, and buyer fit.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="#comparison">Compare complexes</CTAButton>
            <CTAButton href="/listings" variant="secondary">View townhouse listings</CTAButton>
            <CTAButton href="#ask-about-a-complex" variant="ghost">Ask about a complex</CTAButton>
          </div>
        </div>
      </section>

      <Section title="How to use this guide" intro="Port Moody townhouse research works best when you start with the area and lifestyle, then verify strata details before deciding." tone="white">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white sm:grid sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
          {howToUseCards.map((card) => (
            <div key={card.heading} className="p-5">
              <p className="font-heading text-lg text-deepInlet">{card.heading}</p>
              <p className="mt-2 text-sm leading-6 text-slateText">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="rounded-lg border border-softBorder bg-white p-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-heading text-2xl text-deepInlet">Quick filters</h2>
              <p className="mt-2 text-sm text-slateText">
                Filter-ready chips for the main ways buyers compare Port Moody townhomes. Active filtering will follow as the guide dataset expands.
              </p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slateText">Research shortcuts</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <span key={filter} className="rounded-full border border-softBorder bg-mist px-3 py-1.5 text-sm text-charcoal">
                {filter}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warmSand px-5 py-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Map orientation</p>
          <h2 className="mt-3 font-heading text-3xl text-deepInlet">Port Moody townhouse complex map</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slateText">
            Use this orientation map to understand how the major townhouse pockets relate to Heritage Mountain,
            Klahanie, Moody Centre, College Park, trails, SkyTrain, and daily amenities.
          </p>
          <p className="mt-3 text-xs text-slateText">Map locations are approximate and intended for orientation.</p>
          <PortMoodyMap points={complexMapPoints} className="mt-5 h-[300px] rounded-lg md:h-[400px]" showLegend={false} />
        </div>
      </section>

      <section id="comparison" className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-3xl text-deepInlet">Complex comparison table</h2>
            <p className="mt-2 text-sm text-slateText">
              Preview rows use cautious orientation notes only. Verify current listing, strata, and property-specific details.
            </p>
          </div>
        </div>
        <p className="mt-4 text-xs text-slateText md:hidden">Swipe sideways to compare all columns.</p>
        <div className="mt-3 overflow-x-auto rounded-lg border border-softBorder bg-white shadow-sm">
          <table className="min-w-[860px] text-left text-sm">
            <thead className="bg-mist text-xs uppercase tracking-[0.1em] text-slateText">
              <tr>
                <th className="px-4 py-3">Complex</th>
                <th className="px-4 py-3">Area</th>
                <th className="px-4 py-3">Best for</th>
                <th className="px-4 py-3">What to verify</th>
                <th className="px-4 py-3">Guide</th>
                <th className="px-4 py-3">Preview</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-softBorder">
              {complexes.map((complex) => (
                <tr key={complex.slug} className="align-top">
                  <td className="px-4 py-4 font-semibold text-deepInlet">{complex.name}</td>
                  <td className="px-4 py-4 text-slateText">{complex.area}</td>
                  <td className="px-4 py-4 text-slateText">{complex.bestFor}</td>
                  <td className="px-4 py-4 text-slateText">{complex.whatToVerify}</td>
                  <td className="px-4 py-4">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass(complex.guideStatusLabel)}`}>
                      {complex.guideStatusLabel}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <Link href={complex.href ?? `#ask-about-a-complex`} className="font-semibold text-forest hover:text-deepInlet">
                      {complex.ctaLabel}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="font-heading text-3xl text-deepInlet">Townhouse complexes by neighbourhood</h2>
        <div className="mt-8 space-y-10">
          {complexNeighbourhoodGroups.map((group) => {
            const groupComplexes = complexes.filter((complex) => complex.area === group);
            if (groupComplexes.length === 0) return null;

            return (
              <div key={group}>
                <h3 className="font-heading text-2xl text-deepInlet">{group}</h3>
                <div className="mt-5 divide-y divide-softBorder rounded-lg border border-softBorder bg-white">
                  {groupComplexes.map((complex) => (
                    <article key={complex.slug} className="p-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass(complex.guideStatusLabel)}`}>
                          {complex.guideStatusLabel}
                        </span>
                        {complex.address ? <span className="text-xs font-medium text-slateText">{complex.address}</span> : null}
                      </div>
                      <h4 className="mt-4 font-heading text-2xl text-deepInlet">{complex.name}</h4>
                      <p className="mt-3 text-sm leading-6 text-slateText">{complex.summary}</p>
                      <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-forest">Best for</p>
                          <p className="mt-2 text-sm leading-6 text-slateText">{complex.bestFor}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-forest">What to verify</p>
                          <p className="mt-2 text-sm leading-6 text-slateText">{complex.whatToVerify}</p>
                        </div>
                      </div>
                      <Link
                        href={complex.href ?? "#ask-about-a-complex"}
                        className="mt-5 inline-flex text-sm font-semibold text-forest hover:text-deepInlet"
                      >
                        {complex.ctaLabel}
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-mist px-5 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl text-deepInlet">How to compare Port Moody townhouse complexes</h2>
          <div className="mt-6 divide-y divide-softBorder rounded-lg border border-softBorder bg-white md:grid md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-3">
            {decisionCards.map((card) => (
              <article key={card.title} className="p-5">
                <h3 className="font-heading text-xl text-deepInlet">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slateText">{card.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-softBorder bg-deepInlet p-6 text-white">
            <h3 className="font-heading text-2xl">Looking at a Port Moody townhouse?</h3>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-mist">
              Send us the complex name or listing. We can help you understand the location, strata documents,
              sales context, layout, parking, maintenance history, and resale considerations.
            </p>
            <div className="mt-5">
              <CTAButton href="#ask-about-a-complex" variant="secondary">Ask about a townhouse complex</CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <h2 className="font-heading text-3xl text-deepInlet">Active townhouse listings</h2>
            <p className="mt-3 text-sm leading-6 text-slateText">
              Use listings as the starting point, then compare the complex, strata, layout, location, and resale context before making a decision.
            </p>
            <div className="mt-5">
              <CTAButton href="/listings">View townhouse listings</CTAButton>
            </div>
          </div>
          <div id="ask-about-a-complex" className="rounded-lg border border-softBorder bg-warmSand p-6">
            <LeadForm
              formType="complex-inquiry"
              leadType="buyer"
              ctaLabel="Ask about a complex"
              title="Ask about a townhouse complex"
              description="Send the complex name, listing link, or question. We will help you understand the location, strata, layout, and buyer or seller considerations."
              messageLabel="Which complex or listing are you asking about?"
              messagePlaceholder="Example: Treetops, Discovery Ridge, Klahanie townhomes, or a listing link."
              resourceName="Port Moody townhouse complex inquiry"
              tags={["source:liveinportmoody", "intent:complex-inquiry", "lead_type:buyer", "property:townhouse", "area:port-moody"]}
            />
          </div>
        </div>
      </section>

      <Section title="Port Moody townhouse FAQ" tone="white">
        <FAQAccordion items={faqs} />
      </Section>
    </>
  );
}
