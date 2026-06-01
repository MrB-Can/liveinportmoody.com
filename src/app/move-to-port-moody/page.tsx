import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { CTAButton } from "@/components/cta-button";
import { LeadForm } from "@/components/lead-form";

export const metadata = createMetadata({
  title: "Moving to Port Moody | Neighbourhoods, Lifestyle, Housing and Local Guidance",
  description: "A practical guide to moving to Port Moody, including neighbourhoods, housing types, schools, trails, transit, commute trade-offs, lifestyle, and real estate decisions.",
  path: "/move-to-port-moody",
});

const mayFitBullets = [
  "You want a smaller city feel with access to Metro Vancouver.",
  "You value water, trails, trees, and outdoor routines.",
  "You like village-style areas such as Newport Village, Suter Brook, and Moody Centre.",
  "You want access to SkyTrain but do not necessarily need every neighbourhood to be walkable.",
  "You are comparing condos, townhomes, and detached homes across very different micro-areas.",
];

const mayNotFitBullets = [
  "You want flat streets everywhere.",
  "You expect every neighbourhood to be walkable.",
  "You want large amounts of newer detached inventory.",
  "You want the lowest-cost option in the region.",
  "You do not want to think carefully about strata, hills, commute, parking, or neighbourhood trade-offs.",
];

const lifestyleCards = [
  {
    title: "I want walkability",
    areas: "Suter Brook, Newport Village, Klahanie, Moody Centre",
  },
  {
    title: "I want trails and nature",
    areas: "Heritage Mountain, Pleasantside, Ioco / North Shore, College Park",
  },
  {
    title: "I want a family neighbourhood",
    areas: "Heritage Mountain, College Park, Glenayre, Klahanie, Heritage Woods",
  },
  {
    title: "I want condo convenience",
    areas: "Suter Brook, Newport Village, Klahanie, Moody Centre",
  },
  {
    title: "I want townhomes",
    areas: "Heritage Mountain, Klahanie, College Park, Moody Centre pockets",
  },
  {
    title: "I want quiet detached streets",
    areas: "Glenayre, College Park, Pleasantside, Barber Street, Ioco side",
  },
];

const housingTypeCards = [
  {
    title: "Condos",
    description: "Common in more central, walkable areas. Compare building age, strata fees, amenities, parking, storage, and transit access.",
  },
  {
    title: "Townhomes",
    description: "Often appeal to buyers who want more space, family function, garages, outdoor areas, and a step between condo and detached.",
  },
  {
    title: "Detached homes",
    description: "Often valued for land, privacy, renovation potential, views, yards, suite flexibility, and long-term control, but condition and maintenance matter.",
  },
];

const commuteCards = [
  "SkyTrain access",
  "Driving routes",
  "Bus connections",
  "Hills and winter conditions",
  "Work-from-home fit",
  "Daily errands",
];

const schoolCards = [
  "Catchment verification",
  "Elementary and secondary fit",
  "Parks and sports",
  "Walkability to school",
  "Traffic and hills",
  "Family-oriented housing",
  "Resale demand from family buyers",
];

const parksTrailsCards = [
  "Rocky Point and waterfront",
  "Forest trails",
  "Breweries and village areas",
  "Recreation and outdoor routines",
  "Dog walking and green space",
  "Quiet residential pockets",
];

const tradeoffCards = [
  "Walkability varies sharply by neighbourhood",
  "Some areas are hilly and car-oriented",
  "Strata due diligence matters",
  "Supply can be limited",
  "Older buildings and complexes may need careful review",
  "Railway, road, or construction context may matter by location",
  "Parking and storage are important",
  "Density and redevelopment are changing some areas",
];

const comparisonCards = [
  {
    area: "Coquitlam",
    note: "More large-scale retail and broader housing supply in some areas",
  },
  {
    area: "Burnaby",
    note: "Larger city, more transit-oriented high-rise areas, different pricing and commute patterns",
  },
  {
    area: "Anmore / Belcarra",
    note: "More rural, private, and nature-oriented, usually less urban convenience",
  },
  {
    area: "Vancouver",
    note: "Different price, density, and commute trade-offs",
  },
  {
    area: "Burke Mountain",
    note: "Newer inventory in some areas, different commute and maturity profile",
  },
];

const faqItems = [
  {
    question: "Is Port Moody a good place to move?",
    answer:
      "It depends on your lifestyle priorities, commute, property type needs, and how much you value trails, water, smaller-city feel, and distinct micro-neighbourhoods over flat walkability everywhere.",
  },
  {
    question: "Which Port Moody areas are most walkable?",
    answer:
      "Suter Brook, Newport Village, Klahanie, and Moody Centre have the most daily walkability. Heritage Mountain and other hillside or quieter areas prioritize space and nature over walkability.",
  },
  {
    question: "Which areas are better for families?",
    answer:
      "Heritage Mountain, College Park, Glenayre, Klahanie, and Heritage Woods are popular with families. They offer parks, schools, community feel, and housing types suited to families.",
  },
  {
    question: "Do you need a car in Port Moody?",
    answer:
      "It depends on the neighbourhood. Suter Brook, Newport Village, and Klahanie offer more daily convenience without a car. Heritage Mountain, College Park, Glenayre, and hillside areas are more car-oriented.",
  },
  {
    question: "What housing types are common in Port Moody?",
    answer:
      "All three. Condos are common in walkable, central areas. Townhomes are popular in mid-range areas like Heritage Mountain and Klahanie. Detached homes are spread across hillside and residential neighbourhoods.",
  },
  {
    question: "Can I ask which area fits my lifestyle?",
    answer:
      "Yes. Use the form at the bottom of this page or contact us. Tell us where you are moving from, what you do day to day, your commute needs, schools, and lifestyle priorities.",
  },
];

export default function MoveToPortMoodyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl text-deepInlet">Moving to Port Moody</h1>
          <p className="mt-4 text-lg text-slateText mb-2">
            A practical local guide to Port Moody lifestyle, neighbourhoods, housing types, trails, transit, schools, density, commute trade-offs, and real estate decisions.
          </p>
          <div className="mt-8 flex gap-3 flex-col sm:flex-row sm:flex-wrap">
            <CTAButton href="#relocation-guidance">Find my best-fit area</CTAButton>
            <CTAButton href="/neighbourhoods" variant="secondary">Compare neighbourhoods</CTAButton>
            <CTAButton href="/contact" variant="ghost">Ask a local question</CTAButton>
          </div>
        </div>
      </section>

      {/* Is Port Moody a Fit - May Fit */}
      <section className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="font-heading text-2xl text-deepInlet mb-3">Port Moody may fit you if</h2>
        <ul className="space-y-3">
          {mayFitBullets.map((bullet, idx) => (
            <li key={idx} className="flex gap-3 text-slateText">
              <span className="flex-shrink-0 text-forest font-bold">✓</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Is Port Moody a Fit - May Not Fit */}
      <section className="mx-auto max-w-4xl px-5 py-12 bg-mist">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl text-deepInlet mb-3">Port Moody may not fit you if</h2>
          <ul className="space-y-3">
            {mayNotFitBullets.map((bullet, idx) => (
              <li key={idx} className="flex gap-3 text-slateText">
                <span className="flex-shrink-0 text-emphasis font-bold">✕</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lifestyle Decision Cards */}
      <section className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="font-heading text-2xl text-deepInlet mb-6">Where to start based on your lifestyle</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {lifestyleCards.map((card) => (
            <div key={card.title} className="rounded-lg border border-softBorder bg-white p-6">
              <h3 className="font-semibold text-deepInlet mb-2">{card.title}</h3>
              <p className="text-sm text-slateText">Start with: {card.areas}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Neighbourhood guide links */}
      <section className="mx-auto max-w-4xl px-5 pb-8">
        <p className="text-sm text-slateText mb-3">Available neighbourhood guides:</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/neighbourhoods/heritage-mountain" className="text-sm font-semibold text-forest hover:underline">
            Heritage Mountain <span className="font-normal text-slateText text-xs">(guide live)</span>
          </Link>
          <Link href="/neighbourhoods/heritage-woods" className="text-sm font-semibold text-forest hover:underline">
            Heritage Woods <span className="font-normal text-slateText text-xs">(guide preview)</span>
          </Link>
          <Link href="/neighbourhoods/moody-centre" className="text-sm font-semibold text-forest hover:underline">
            Moody Centre <span className="font-normal text-slateText text-xs">(guide preview)</span>
          </Link>
          <Link href="/neighbourhoods/glenayre" className="text-sm font-semibold text-forest hover:underline">
            Glenayre <span className="font-normal text-slateText text-xs">(guide preview)</span>
          </Link>
        </div>
      </section>

      {/* Housing Types */}
      <section className="mx-auto max-w-4xl px-5 py-12 bg-warmSand">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl text-deepInlet mb-3">What can you buy in Port Moody?</h2>
          <div className="grid gap-6 md:grid-cols-3 mb-6">
            {housingTypeCards.map((card) => (
              <div key={card.title} className="rounded-lg border border-softBorder bg-white p-6">
                <h3 className="font-semibold text-deepInlet mb-2">{card.title}</h3>
                <p className="text-sm text-slateText">{card.description}</p>
              </div>
            ))}
          </div>
          <Link href="/buy" className="inline-block px-6 py-3 bg-forest text-white rounded-lg font-semibold hover:opacity-90">
            Compare property types
          </Link>
        </div>
      </section>

      {/* Commute and Transit */}
      <section id="transit" className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="font-heading text-2xl text-deepInlet mb-3">Commute and transit reality</h2>
        <p className="text-slateText mb-6">
          Port Moody has SkyTrain access, bus routes, major roads, and regional connections, but daily convenience depends heavily on the neighbourhood. Suter Brook, Newport Village, Klahanie, and Moody Centre feel very different from Heritage Mountain, College Park, Glenayre, Pleasantside, or Ioco.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {commuteCards.map((card) => (
            <div key={card} className="rounded-lg border border-softBorder bg-white p-4">
              <p className="text-sm font-semibold text-deepInlet">{card}</p>
              <p className="text-xs text-slateText mt-2">Varies by route and time of day</p>
            </div>
          ))}
        </div>
      </section>

      {/* Schools and Family */}
      <section id="schools" className="mx-auto max-w-4xl px-5 py-12 bg-mist">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl text-deepInlet mb-3">Schools and family considerations</h2>
          <p className="text-slateText mb-6">
            School fit is address-specific. Always verify the exact property address with SD43 before relying on catchment assumptions.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {schoolCards.map((card) => (
              <div key={card} className="rounded-lg border border-softBorder bg-white p-4">
                <p className="text-sm font-semibold text-deepInlet">{card}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parks, Trails, and Lifestyle */}
      <section id="trails" className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="font-heading text-2xl text-deepInlet mb-3">Parks, trails, water, and village life</h2>
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          {parksTrailsCards.map((card) => (
            <div key={card} className="rounded-lg border border-softBorder bg-white p-4">
              <p className="text-sm font-semibold text-deepInlet">{card}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trade-offs */}
      <section className="mx-auto max-w-4xl px-5 py-12 bg-warmSand">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl text-deepInlet mb-3">Port Moody trade-offs to understand</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {tradeoffCards.map((card) => (
              <div key={card} className="rounded-lg border border-softBorder bg-white p-4">
                <p className="text-sm font-semibold text-deepInlet">{card}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons to Nearby Areas */}
      <section className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="font-heading text-2xl text-deepInlet mb-3">Comparing Port Moody with nearby areas</h2>
        <div className="space-y-4">
          {comparisonCards.map((card) => (
            <div key={card.area} className="rounded-lg border border-softBorder bg-white p-6">
              <h3 className="font-semibold text-deepInlet mb-2">{card.area}</h3>
              <p className="text-sm text-slateText">{card.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Next steps */}
      <section className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="font-heading text-2xl text-deepInlet mb-6">Next steps for Port Moody movers</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/buyer-guide" className="rounded-lg border border-softBorder bg-white p-5 transition hover:border-seaGlass hover:bg-mist">
            <p className="font-semibold text-deepInlet">Request the buyer guide</p>
            <p className="mt-2 text-sm text-slateText">Covers neighbourhood selection, property types, strata documents, and offer preparation for Port Moody buyers.</p>
            <p className="mt-3 text-xs font-semibold text-forest">Request the guide →</p>
          </Link>
          <Link href="/first-time-home-buyers" className="rounded-lg border border-softBorder bg-white p-5 transition hover:border-seaGlass hover:bg-mist">
            <p className="font-semibold text-deepInlet">First-time buyers</p>
            <p className="mt-2 text-sm text-slateText">Step-by-step guidance for first-time home buyers in Port Moody — process, costs, strata basics, and area fit.</p>
            <p className="mt-3 text-xs font-semibold text-forest">Start here →</p>
          </Link>
          <Link href="/presales" className="rounded-lg border border-softBorder bg-white p-5 transition hover:border-seaGlass hover:bg-mist">
            <p className="font-semibold text-deepInlet">Presales and new builds</p>
            <p className="mt-2 text-sm text-slateText">Get notified about verified Port Moody presale and new-build projects when there is current context worth reviewing.</p>
            <p className="mt-3 text-xs font-semibold text-forest">Get updates →</p>
          </Link>
          <Link href="/local-businesses" className="rounded-lg border border-softBorder bg-white p-5 transition hover:border-seaGlass hover:bg-mist">
            <p className="font-semibold text-deepInlet">Local businesses</p>
            <p className="mt-2 text-sm text-slateText">Port Moody local business features — restaurants, services, and community staples being added as they are verified.</p>
            <p className="mt-3 text-xs font-semibold text-forest">Explore businesses →</p>
          </Link>
          <Link href="/events" className="rounded-lg border border-softBorder bg-white p-5 transition hover:border-seaGlass hover:bg-mist">
            <p className="font-semibold text-deepInlet">Events</p>
            <p className="mt-2 text-sm text-slateText">Community, seasonal, family, and real estate events in Port Moody — added when dates and details are verified.</p>
            <p className="mt-3 text-xs font-semibold text-forest">View events →</p>
          </Link>
          <Link href="/contact" className="rounded-lg border border-softBorder bg-deepInlet p-5 text-white transition hover:bg-forest">
            <p className="font-semibold">Ask a local question</p>
            <p className="mt-2 text-sm text-mist">Ask about a specific area, commute, school, property type, or lifestyle fit. We respond personally.</p>
            <p className="mt-3 text-xs font-semibold text-seaGlass">Contact Paul and Leilani →</p>
          </Link>
        </div>
      </section>

      {/* Relocation CTA */}
      <section id="relocation-guidance" className="mx-auto max-w-4xl px-5 py-12 bg-sand">
        <div className="rounded-lg border border-softBorder bg-white p-8">
          <h2 className="font-heading text-2xl text-deepInlet mb-3">Not sure where to start?</h2>
          <p className="text-slateText mb-6">
            Tell us where you are moving from, what you need day to day, your budget range, commute needs, schools, property type, and lifestyle priorities. We will point you toward the Port Moody areas that make the most sense.
          </p>
          <div className="max-w-md">
            <LeadForm
              formType="ask-question"
              leadType="buyer"
              ctaLabel="Get relocation guidance"
              title="Moving to Port Moody?"
              messageLabel="Tell us about your move, lifestyle, work location, and property preferences."
              tags={["source:liveinportmoody", "intent:relocation-guidance", "lead_type:buyer", "area:port-moody"]}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-5 py-12 bg-mist">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl text-deepInlet mb-2">Frequently asked questions</h2>
          <p className="text-slateText mb-8">Common questions about moving to Port Moody and choosing a neighbourhood.</p>

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
