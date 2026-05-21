import Link from "next/link";
import { LeadForm } from "@/components/lead-form";
import { complexes, complexNeighbourhoodGroups } from "@/data/complexes";
import { createMetadata } from "@/lib/seo";

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

const standardVerificationNote =
  "This guide is for general orientation. Unit details, bylaws, strata fees, rental rules, pet rules, parking, storage, school catchments, measurements, and strata documents should be verified for the specific property before making a decision.";

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
            <Link
              href="#comparison"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-deepInlet px-5 py-3 text-sm font-semibold text-white hover:bg-forest"
            >
              Compare complexes
            </Link>
            <Link
              href="/listings"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-deepInlet px-5 py-3 text-sm font-semibold text-deepInlet hover:bg-mist"
            >
              View townhouse listings
            </Link>
            <Link
              href="#ask-about-a-complex"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-softBorder px-5 py-3 text-sm font-semibold text-charcoal hover:bg-mist"
            >
              Ask about a complex
            </Link>
          </div>
        </div>
      </section>

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

      <section className="bg-warmSand px-5 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Map orientation</p>
              <h2 className="mt-3 font-heading text-3xl text-deepInlet">Port Moody townhouse complex map</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slateText">
                Use this orientation map to understand how the major townhouse pockets relate to Heritage Mountain,
                Klahanie, Moody Centre, College Park, trails, SkyTrain, and daily amenities.
              </p>
              <p className="mt-3 text-xs text-slateText">Map locations are approximate and intended for orientation.</p>
            </div>
            <div className="relative min-h-80 overflow-hidden rounded-lg border border-softBorder bg-gradient-to-br from-seaGlass/40 via-mist to-white p-5">
              <div className="absolute left-5 top-6 h-24 w-40 rounded-full border border-forest/30 bg-forest/10" />
              <div className="absolute bottom-8 right-8 h-24 w-44 rounded-full border border-emphasis/30 bg-emphasis/10" />
              <div className="absolute inset-x-8 top-1/2 h-1 -rotate-12 rounded-full bg-white/80" />
              {complexes.map((complex, index) => (
                <div
                  key={complex.slug}
                  className="absolute rounded-full bg-deepInlet px-3 py-1 text-xs font-semibold text-white shadow-soft"
                  style={{
                    left: `${14 + ((index * 19) % 64)}%`,
                    top: `${18 + ((index * 17) % 58)}%`,
                  }}
                >
                  <span className="mr-1 text-seaGlass">•</span>
                  {complex.name}
                </div>
              ))}
              <div className="absolute bottom-5 left-5 rounded-md bg-white/85 px-3 py-2 text-xs text-slateText">
                Future additions: Heritage Woods, Brewers Row, Moody Centre, and other Port Moody townhouse pockets.
              </div>
            </div>
          </div>
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
        <div className="mt-6 overflow-x-auto rounded-lg border border-softBorder bg-white">
          <table className="min-w-[900px] text-left text-sm">
            <thead className="bg-mist text-xs uppercase tracking-[0.1em] text-slateText">
              <tr>
                <th className="px-4 py-3">Complex</th>
                <th className="px-4 py-3">Area</th>
                <th className="px-4 py-3">Style</th>
                <th className="px-4 py-3">Best for</th>
                <th className="px-4 py-3">Setting</th>
                <th className="px-4 py-3">Guide status</th>
                <th className="px-4 py-3">CTA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-softBorder">
              {complexes.map((complex) => (
                <tr key={complex.slug} className="align-top">
                  <td className="px-4 py-4 font-semibold text-deepInlet">{complex.name}</td>
                  <td className="px-4 py-4 text-slateText">{complex.area}</td>
                  <td className="px-4 py-4 text-slateText">{complex.style}</td>
                  <td className="px-4 py-4 text-slateText">{complex.bestFor}</td>
                  <td className="px-4 py-4 text-slateText">{complex.setting}</td>
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
        <p className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {standardVerificationNote}
        </p>
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
                <div className="mt-5 grid gap-5 lg:grid-cols-2">
                  {groupComplexes.map((complex) => (
                    <article key={complex.slug} className="rounded-lg border border-softBorder bg-white p-6 shadow-sm">
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
                        className="mt-5 inline-flex min-h-11 items-center rounded-md bg-deepInlet px-4 py-2 text-sm font-semibold text-white hover:bg-forest"
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
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {decisionCards.map((card) => (
              <article key={card.title} className="rounded-lg border border-softBorder bg-white p-5">
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
            <Link
              href="#ask-about-a-complex"
              className="mt-5 inline-flex min-h-11 items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-deepInlet hover:bg-mist"
            >
              Ask about a townhouse complex
            </Link>
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
            <p className="mt-3 text-xs leading-5 text-slateText">
              Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.
            </p>
            <Link
              href="/listings"
              className="mt-5 inline-flex min-h-11 items-center rounded-md bg-deepInlet px-4 py-2 text-sm font-semibold text-white hover:bg-forest"
            >
              View townhouse listings
            </Link>
          </div>
          <div id="ask-about-a-complex" className="rounded-lg border border-softBorder bg-sand p-6">
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

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="font-heading text-3xl text-deepInlet">Port Moody townhouse FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-softBorder bg-white p-5">
              <h3 className="font-semibold text-deepInlet">{faq.question}</h3>
              <p className="mt-3 text-sm leading-6 text-slateText">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
