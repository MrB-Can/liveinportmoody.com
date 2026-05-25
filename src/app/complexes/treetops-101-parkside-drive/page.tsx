import Link from "next/link";
import type { ReactNode } from "react";
import { TreetopsInquiryForm } from "@/components/complexes/TreetopsInquiryForm";
import { createMetadata } from "@/lib/seo";
import { PortMoodyMap } from "@/components/maps/PortMoodyMap";
import { neighbourhoodMapPoints, complexMapPoints } from "@/data/mapPoints";

export const metadata = createMetadata({
  title: "Treetops 101 Parkside Drive Port Moody | Townhouse Complex Guide",
  description:
    "A local guide to Treetops at 101 Parkside Drive in Port Moody’s Heritage Mountain area, including homes, amenities, location, buyer notes, seller notes, schools, trails, transit, and what to verify before buying.",
  path: "/complexes/treetops-101-parkside-drive",
});

const anchorLinks = [
  ["Overview", "#overview"],
  ["Quick facts", "#quick-facts"],
  ["Layouts", "#homes"],
  ["Amenities", "#amenities"],
  ["Location", "#location"],
  ["Schools", "#schools"],
  ["Transit", "#transit"],
  ["Buying", "#buying"],
  ["Selling", "#selling"],
  ["FAQ", "#faq"],
];

const fitYes = [
  "You want a townhouse instead of a condo.",
  "You value mature landscaping and a green setting.",
  "You like Heritage Mountain’s quieter residential feel.",
  "You want more space than many central Port Moody condos.",
  "You are comfortable being more car-dependent.",
  "You are willing to do proper strata due diligence.",
];

const fitNo = [
  "You want to walk daily to SkyTrain, groceries, cafes, and restaurants.",
  "You strongly prefer newer construction.",
  "You want maximum privacy from shared-wall living.",
  "You want a detached home with no strata.",
  "You are not willing to review strata documents carefully.",
];

const knownFacts = [
  ["Address", "101 Parkside Drive"],
  ["Area", "Heritage Mountain"],
  ["Property type", "Townhouse strata"],
  ["Approx. units", "Approximately 172, verify"],
  ["Built", "Early 1990s, verify"],
  ["Setting", "Forested, mature landscaping"],
];

const mustVerify = [
  "Current strata fee",
  "Pets",
  "Rental restrictions",
  "Parking allocation",
  "Storage",
  "Bylaws",
  "Depreciation report",
  "Recent minutes and capital projects",
];

const conditionItems = [
  ["Exterior", "Siding, roofing, decks, windows, drainage, retaining walls, stairs, and railings."],
  ["Interior", "Renovation quality, plumbing fixtures, electrical updates, flooring, kitchen, bathrooms, and laundry."],
  ["Strata", "Depreciation report, contingency reserve fund, meeting minutes, insurance, maintenance schedule, and recent levies."],
  ["Unit-specific", "Exposure, privacy, noise, parking, storage, stairs, patio condition, and signs of moisture."],
];

const homeCards = [
  ["Exteriors", "Wood-frame townhomes, pitched roofs, private or semi-private entries, mature landscaping, patios, and decks."],
  ["Interiors", "Condition varies significantly by unit. Some may be renovated, while others may need updating."],
  [
    "Layouts",
    "Often multi-level, with bedrooms separated from main living areas. Many units appear to be two to four-bedroom layouts, with size and configuration varying by unit. Verify the exact finished floor area, strata plan, and listing measurements for any specific home.",
  ],
  ["Common areas", "Internal lanes, pedestrian routes, green space, recreation areas, and visitor parking areas."],
];

const amenities = [
  [
    "Visitor parking",
    "Important for families, guests, and resale value. Verify current parking rules and enforcement.",
  ],
  [
    "On-site paths and green space",
    "Adds lifestyle value, but buyers should consider maintenance costs and strata responsibility.",
  ],
  [
    "Recreation facilities",
    "Potential lifestyle benefit, but verify availability, condition, fees, rules, and planned maintenance.",
  ],
];

const commuteTiles = [
  ["Inlet Centre / Moody Centre SkyTrain", "Short drive or bus connection"],
  ["Coquitlam Centre", "Short drive"],
  ["Downtown Vancouver", "Commute varies heavily by time and route"],
  ["Daily errands", "Car is useful for most trips"],
];

const buyerStrengths = [
  "More space than many central condos.",
  "Established resale history.",
  "Green Heritage Mountain setting.",
  "Amenities may support lifestyle value.",
  "Nearby parks and schools may appeal to families.",
];

const buyerTradeoffs = [
  "Renovation quality varies widely by unit.",
  "Special levies or capital projects may affect affordability.",
  "Some units may have privacy, stairs, or exposure differences.",
  "Older complexes can have insurance and maintenance-cost considerations.",
  "More car-dependent than Suter Brook or Newport Village.",
];

const verificationGroups = [
  {
    title: "Strata documents",
    items: ["Financial statements", "Minutes", "Depreciation report", "Bylaws", "Insurance", "Form B"],
  },
  {
    title: "Unit-specific",
    items: ["Parking", "Storage", "Patio/deck", "Roof/window/deck responsibility", "Renovation history", "Property tax assessment"],
  },
  {
    title: "Lifestyle",
    items: ["Noise", "Privacy", "Stairs", "Internet/cable", "Walk the complex at different times of day"],
  },
];

const externalResources = [
  ["GVR MLS Reciprocity", "https://www.gvreb.com/", "Search current MLS listings through approved reciprocity sources."],
  ["City of Port Moody Parks", "https://www.portmoody.ca/parks-trails-recreation", "Official parks and recreation information."],
  ["City of Port Moody Trails & Paths", "https://www.portmoody.ca/parks-trails-recreation", "Official trail and path information."],
  ["SD43 School Locator", "https://www.sd43.bc.ca/", "Verify current catchments by exact property address."],
  ["Heritage Mountain Elementary", "https://www.sd43.bc.ca/", "Confirm school details directly with SD43."],
  ["Heritage Woods Secondary", "https://www.sd43.bc.ca/", "Confirm school details directly with SD43."],
  ["City of Port Moody Transit", "https://www.portmoody.ca/", "Review local transit and city transportation resources."],
  ["TransLink Trip Planner", "https://www.translink.ca/trip-planner", "Plan specific transit routes and timing."],
  ["BC Assessment", "https://www.bcassessment.ca/", "Review public assessment context where available."],
  ["Walk Score", "https://www.walkscore.com/", "Check walkability for the specific address."],
];

const relatedComplexes = [
  ["Discovery Ridge", "Heritage Mountain, established townhomes, green setting."],
  ["Aria Townhomes", "Newer urban townhomes near Brewers Row."],
  ["Klahanie townhomes", "More central, closer to Rocky Point and amenities."],
  ["College Park townhomes", "Established residential alternative."],
];

const faqs = [
  [
    "Are there active listings at Treetops?",
    "Availability changes. Use the listings page or ask us for current Treetops context before assuming there is an active unit that fits your criteria.",
  ],
  [
    "How does Treetops compare with other Heritage Mountain townhomes?",
    "Treetops is an established Heritage Mountain option with a green setting and larger-community feel. Compare it against Discovery Ridge and other hillside townhomes by strata health, layout, parking, privacy, and condition.",
  ],
  [
    "What should I review before buying at Treetops?",
    "Review the Form B, strata minutes, depreciation report, insurance, bylaws, financials, parking and storage allocation, unit condition, exterior responsibility, and any planned capital projects.",
  ],
  [
    "Is Treetops a good fit for families?",
    "It may be, especially for buyers who value space, greenery, schools, and a quieter residential setting. Verify the specific layout, stairs, outdoor space, parking, and current school catchment.",
  ],
  [
    "Is Treetops better for buyers who want walkability or green space?",
    "It is stronger for green space, residential quiet, and Heritage Mountain living than for daily walkability to SkyTrain, groceries, cafes, and restaurants.",
  ],
  [
    "What should owners prepare before selling at Treetops?",
    "Prepare strata documents early, clarify upgrades and maintenance, highlight layout, parking, outdoor privacy, and renovation quality, and make sure the listing explains the Heritage Mountain lifestyle clearly.",
  ],
];

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-softBorder pt-10">
      <h2 className="font-heading text-3xl text-deepInlet">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function TreetopsPage() {
  return (
    <>
      <div className="border-b border-softBorder bg-mist px-5 py-3">
        <div className="mx-auto max-w-6xl">
          <Link href="/neighbourhoods/heritage-mountain" className="text-sm font-semibold text-forest hover:text-deepInlet">
            ← Back to Heritage Mountain neighbourhood
          </Link>
        </div>
      </div>

      <section className="bg-gradient-to-b from-forest/10 to-white px-5 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Heritage Mountain townhouse guide</p>
            <h1 className="mt-4 font-heading text-4xl text-deepInlet md:text-5xl">Treetops at 101 Parkside Drive</h1>
            <p className="mt-4 text-lg leading-8 text-slateText">
              Established Heritage Mountain townhouse community with mature landscaping, forested internal lanes,
              recreation amenities, and family-oriented layouts.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/listings" className="inline-flex min-h-11 items-center justify-center rounded-md bg-deepInlet px-5 py-3 text-sm font-semibold text-white hover:bg-forest">
                View Treetops listings
              </Link>
              <Link href="#treetops-form" className="inline-flex min-h-11 items-center justify-center rounded-md border border-deepInlet px-5 py-3 text-sm font-semibold text-deepInlet hover:bg-mist">
                Ask about a unit
              </Link>
              <Link href="#treetops-form" className="inline-flex min-h-11 items-center justify-center rounded-md border border-softBorder px-5 py-3 text-sm font-semibold text-charcoal hover:bg-mist">
                Request value opinion
              </Link>
            </div>
            <p className="mt-4 max-w-2xl text-xs leading-5 text-slateText">
              Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.
            </p>
          </div>
          <div>
            <div className="min-h-72 rounded-lg border border-softBorder bg-gradient-to-br from-mist via-seaGlass/30 to-white p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-forest">Treetops photos needed</p>
              <p className="mt-4 font-heading text-2xl text-deepInlet">Future photo set</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slateText">
                <li>Treetops entrance sign</li>
                <li>Internal lane and exterior townhomes</li>
                <li>Forested walking path and mature landscaping</li>
                <li>Amenity building and recreation area</li>
              </ul>
            </div>
            <p className="mt-2 text-xs text-slateText">Placeholder only. No listing or competitor photos are used.</p>
          </div>
        </div>
      </section>

      <div className="sticky top-20 z-30 border-y border-softBorder bg-white/95 px-5 py-3 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto text-sm">
          {anchorLinks.map(([label, href]) => (
            <Link key={href} href={href} className="whitespace-nowrap rounded-full border border-softBorder px-3 py-1.5 text-charcoal hover:bg-mist">
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <main className="mx-auto max-w-6xl px-5 py-12">
        <section className="rounded-lg border border-softBorder bg-white p-6 shadow-sm">
          <h2 className="font-heading text-3xl text-deepInlet">Is Treetops a fit?</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-forest/5 p-5">
              <h3 className="font-heading text-xl text-deepInlet">Treetops may fit you if</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slateText">
                {fitYes.map((item) => (
                  <li key={item} className="flex gap-3"><span className="text-forest">✓</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-amber-50 p-5">
              <h3 className="font-heading text-xl text-deepInlet">Treetops may not fit you if</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slateText">
                {fitNo.map((item) => (
                  <li key={item} className="flex gap-3"><span className="text-amber-700">!</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="mt-12 space-y-12">
          <Section id="overview" title="Overview">
            <p className="max-w-4xl text-base leading-8 text-slateText">
              Treetops is one of the larger established townhouse communities in Heritage Mountain. Its appeal is less
              about urban walkability and more about space, greenery, internal pathways, recreation amenities, and a
              mature residential setting. Buyers often compare it against detached homes, other Heritage Mountain
              townhomes, and more central Port Moody condo or townhome options.
            </p>
          </Section>

          <Section id="quick-facts" title="Quick facts">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-lg border border-softBorder bg-white p-6">
                <h3 className="font-heading text-xl text-deepInlet">Known public / observed summary</h3>
                <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                  {knownFacts.map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-forest">{label}</dt>
                      <dd className="mt-1 text-sm text-charcoal">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="rounded-lg border border-softBorder bg-mist p-6">
                <h3 className="font-heading text-xl text-deepInlet">Must verify before purchase</h3>
                <ul className="mt-5 grid gap-2 text-sm text-slateText sm:grid-cols-2">
                  {mustVerify.map((item) => (
                    <li key={item} className="flex gap-2"><span className="text-forest">□</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
              This guide is for general orientation. Unit details, bylaws, strata fees, rental rules, pet rules, parking,
              storage, school catchments, measurements, and strata documents should be verified for the specific property before making a decision.
            </p>
          </Section>

          <Section id="homes" title="What the homes are like">
            <div className="grid gap-5 md:grid-cols-2">
              {homeCards.map(([title, body]) => (
                <article key={title} className="rounded-lg border border-softBorder bg-white p-5">
                  <div className="mb-4 h-24 rounded-md bg-gradient-to-br from-mist to-seaGlass/20" aria-label={`${title} placeholder`} />
                  <h3 className="font-heading text-xl text-deepInlet">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slateText">{body}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section id="condition" title="Key condition items to review">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {conditionItems.map(([title, body]) => (
                <article key={title} className="rounded-lg border border-softBorder bg-white p-5">
                  <h3 className="font-heading text-xl text-deepInlet">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slateText">{body}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section id="amenities" title="Amenities and why they matter">
            <div className="grid gap-5 md:grid-cols-3">
              {amenities.map(([title, body]) => (
                <article key={title} className="rounded-lg border border-softBorder bg-white p-5">
                  <h3 className="font-heading text-xl text-deepInlet">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slateText">{body}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section id="location" title="Location and trade-off">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-base leading-8 text-slateText">
                  The location is stronger for green space, schools, and residential quiet than for daily walkability.
                  Buyers who want cafe, grocery, and SkyTrain convenience may prefer Suter Brook, Newport Village,
                  Klahanie, or Moody Centre.
                </p>
                <div className="mt-5 rounded-lg border border-softBorder bg-white p-5">
                  <h3 className="font-heading text-xl text-deepInlet">Map-style orientation</h3>
                  <p className="mt-2 text-sm text-slateText">
                    Treetops sits in Heritage Mountain, with Heritage Mountain Elementary and Heritage Woods Secondary
                    nearby by neighbourhood context. Rocky Point Park, Newport Village, Suter Brook, Inlet Centre Station,
                    Moody Centre Station, and major roads are best treated as short-drive or bus-connection references.
                  </p>
                </div>
              </div>
              <PortMoodyMap
                points={[
                  complexMapPoints.find((p) => p.id === "treetops-101-parkside-drive")!,
                  neighbourhoodMapPoints.find((p) => p.id === "heritage-mountain")!,
                ]}
                initialCenter={[-122.842, 49.295]}
                initialZoom={13}
                className="min-h-72 rounded-lg"
                showLegend={true}
              />
            </div>
          </Section>

          <Section id="transit" title="Transit and walkability">
            <p className="max-w-4xl text-base leading-8 text-slateText">
              Treetops is best treated as car-oriented Heritage Mountain living with access to transit options, not as a
              walkable SkyTrain village location.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {commuteTiles.map(([title, body]) => (
                <article key={title} className="rounded-lg border border-softBorder bg-white p-5">
                  <h3 className="font-semibold text-deepInlet">{title}</h3>
                  <p className="mt-2 text-sm text-slateText">{body}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section id="schools" title="Schools and catchment">
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm leading-6 text-amber-950">
                Do not rely on neighbourhood name alone for school assignment. Always verify the exact property address.
                Check the current SD43 catchment for the Treetops address before making a decision.
              </p>
            </div>
          </Section>

          <Section id="buying" title="Buyer notes">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-softBorder bg-white p-5">
                <h3 className="font-heading text-xl text-deepInlet">Buyer strengths</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slateText">
                  {buyerStrengths.map((item) => <li key={item} className="flex gap-3"><span className="text-forest">✓</span>{item}</li>)}
                </ul>
              </div>
              <div className="rounded-lg border border-softBorder bg-white p-5">
                <h3 className="font-heading text-xl text-deepInlet">Buyer trade-offs</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slateText">
                  {buyerTradeoffs.map((item) => <li key={item} className="flex gap-3"><span className="text-amber-700">!</span>{item}</li>)}
                </ul>
              </div>
            </div>
          </Section>

          <Section id="checklist" title="Verification checklist">
            <div className="grid gap-5 md:grid-cols-3">
              {verificationGroups.map((group) => (
                <article key={group.title} className="rounded-lg border border-softBorder bg-white p-5">
                  <h3 className="font-heading text-xl text-deepInlet">{group.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-slateText">
                    {group.items.map((item) => <li key={item}>□ {item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-slateText">
              Review the strata insurance policy, deductible amounts, and any insurance-related owner obligations.
            </p>
          </Section>

          <Section id="selling" title="Owner and seller strategy">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <div className="space-y-4 text-sm leading-6 text-slateText">
                <p>
                  Sellers should prepare the strata package early. Buyers in established townhouse complexes often
                  hesitate when strata information is incomplete, unclear, or delayed.
                </p>
                <p>
                  If the unit has strong renovations, outdoor privacy, good parking, or a desirable layout, those need to
                  be highlighted clearly because Treetops units can vary significantly.
                </p>
                <p>
                  A Treetops listing should usually be positioned around space, greenery, family function, parking,
                  storage, outdoor privacy, amenity value, and Heritage Mountain lifestyle rather than generic townhouse features.
                </p>
              </div>
              <div className="rounded-lg border border-softBorder bg-mist p-5">
                <h3 className="font-heading text-xl text-deepInlet">Media note</h3>
                <p className="mt-3 text-sm leading-6 text-slateText">
                  Forest canopy can make interiors appear dark and may require strong lighting and media.
                </p>
              </div>
            </div>
          </Section>

          <Section id="market" title="Market context">
            <p className="max-w-4xl text-base leading-8 text-slateText">
              Treetops competes in the established Port Moody townhouse market. Buyers are usually comparing it against
              other Heritage Mountain townhomes, Klahanie townhomes, older townhome communities in College Park, and
              sometimes detached homes that need more work. Pricing is usually influenced by unit condition, layout,
              strata health, parking, privacy, outdoor space, and recent complex-specific sales context.
            </p>
            <Link href="#treetops-form" className="mt-5 inline-flex min-h-11 items-center rounded-md border border-deepInlet px-4 py-2 text-sm font-semibold text-deepInlet hover:bg-mist">
              Ask for recent sales context
            </Link>
          </Section>

          <section className="grid gap-5 md:grid-cols-3">
            {[
              ["Looking at a Treetops unit?", "Ask us before you write.", "Ask about a unit"],
              ["Own at Treetops?", "Get a local value opinion.", "Request value opinion"],
              ["Want updates?", "Get notified when Treetops listings or market notes are available.", "Subscribe to Treetops updates"],
            ].map(([title, body, cta]) => (
              <article key={title} className="rounded-lg border border-softBorder bg-deepInlet p-5 text-white">
                <h2 className="font-heading text-xl">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-mist">{body}</p>
                <Link href="#treetops-form" className="mt-5 inline-flex min-h-11 items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-deepInlet hover:bg-mist">
                  {cta}
                </Link>
              </article>
            ))}
          </section>

          <section id="treetops-form" className="scroll-mt-28">
            <TreetopsInquiryForm />
          </section>

          <Section id="faq" title="Treetops FAQ">
            <div className="grid gap-4 md:grid-cols-2">
              {faqs.map(([question, answer]) => (
                <article key={question} className="rounded-lg border border-softBorder bg-white p-5">
                  <h3 className="font-semibold text-deepInlet">{question}</h3>
                  <p className="mt-3 text-sm leading-6 text-slateText">{answer}</p>
                </article>
              ))}
            </div>
          </Section>

          <Section id="resources" title="Verify details before you buy">
            <div className="grid gap-4 md:grid-cols-2">
              {externalResources.map(([title, url, description]) => (
                <a
                  key={title}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${title} opens in a new tab`}
                  className="rounded-lg border border-softBorder bg-white p-5 hover:border-forest"
                >
                  <h3 className="font-semibold text-deepInlet">{title} ↗</h3>
                  <p className="mt-2 text-sm leading-6 text-slateText">{description}</p>
                </a>
              ))}
            </div>
          </Section>

          <Section id="related" title="Compare with nearby or similar complexes">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {relatedComplexes.map(([title, body]) => (
                <article key={title} className="rounded-lg border border-softBorder bg-white p-5">
                  <h3 className="font-heading text-xl text-deepInlet">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slateText">{body}</p>
                  <Link href="#treetops-form" className="mt-4 inline-flex text-sm font-semibold text-forest hover:text-deepInlet">
                    Ask about this complex
                  </Link>
                </article>
              ))}
            </div>
          </Section>
        </div>
      </main>
    </>
  );
}
