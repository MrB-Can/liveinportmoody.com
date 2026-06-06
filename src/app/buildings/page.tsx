import Link from "next/link";
import { FAQAccordion } from "@/components/faq-accordion";
import { BuildingFilterChips } from "@/components/buildings/BuildingFilterChips";
import { BuildingInquiryForm } from "@/components/buildings/BuildingInquiryForm";
import { PortMoodyMap } from "@/components/maps/PortMoodyMap";
import { buildingMapPoints, neighbourhoodMapPoints } from "@/data/mapPoints";
import { CondoDecisionGuide } from "@/components/buildings/CondoDecisionGuide";
import { CTAButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { buildings, buildingDisplayGroups } from "@/data/buildings";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Port Moody Condo Buildings",
  description:
    "Compare Port Moody condo buildings by location, age, amenities, construction, transit access, strata considerations, and buyer fit.",
  path: "/buildings",
});

const faqs = [
  {
    question: "What should buyers review before buying a Port Moody condo?",
    answer:
      "Review the strata documents, Form B, depreciation report, insurance, bylaws, strata fees, parking, storage, building condition, exposure, noise, and active listing context before relying on the listing alone.",
  },
  {
    question: "How do I compare two condo buildings in Port Moody?",
    answer:
      "Compare location, walkability, construction type, age, strata history, fees, amenities, parking, storage, layout, exposure, and resale demand. Then review current documents for each specific building.",
  },
  {
    question: "Are older condo buildings a problem?",
    answer:
      "Not automatically. Older buildings can work well, but buyers should pay close attention to maintenance history, envelope work, mechanical systems, insurance, contingency reserve fund, and upcoming projects.",
  },
  {
    question: "What matters most in a strata review?",
    answer:
      "Minutes, depreciation report, Form B, insurance, bylaws, financials, fee history, special levies, litigation, and planned capital work are all important. Get professional advice where needed.",
  },
  {
    question: "Should I prioritize walkability or building age?",
    answer:
      "It depends on lifestyle, budget, risk tolerance, and resale goals. A newer building is not automatically better, and a walkable location can still require careful strata review.",
  },
  {
    question: "Can I ask about a specific building or listing?",
    answer:
      "Yes. Send the building name or listing and we can help you understand the local context, strata questions to ask, pricing trade-offs, and key due diligence.",
  },
];

const howToUseCards = [
  {
    heading: "Compare by area",
    body: "Start with the neighbourhood (Suter Brook, Newport Village, Klahanie, or Moody Centre) before comparing buildings.",
  },
  {
    heading: "Compare lifestyle fit",
    body: "Walkability, transit, noise, views, commute, and daily convenience vary significantly between buildings and areas.",
  },
  {
    heading: "Review strata documents",
    body: "Every building decision needs current strata documents: Form B, depreciation report, minutes, insurance, and financials.",
  },
  {
    heading: "Ask about active listings",
    body: "Use the inquiry form to ask about availability in a specific building through approved MLS Reciprocity sources.",
  },
  {
    heading: "Use guides as orientation",
    body: "Building previews help with comparison. Confirm unit-specific details, strata documents, and listing details before making decisions.",
  },
];

const comparisonPrompts = [
  {
    title: "Location and walkability",
    body: "Compare the area first: Suter Brook, Newport Village, Klahanie, Moody Centre, or nearby pockets solve different lifestyle and commute problems.",
  },
  {
    title: "Building age and construction",
    body: "Use building age, concrete versus wood-frame construction, amenities, elevators, and common property history as prompts for deeper review.",
  },
  {
    title: "Strata document focus",
    body: "Verify minutes, Form B, depreciation report, insurance, bylaws, fees, parking, storage, planned work, and any special levies.",
  },
  {
    title: "Listing-specific fit",
    body: "Confirm exposure, noise, layout, parking, storage, fees, and active alternatives for the specific unit before making a decision.",
  },
];

export default function BuildingsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-14 md:py-18">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-emphasis">Building research</p>
          <h1 className="max-w-4xl font-heading text-4xl leading-tight text-deepInlet md:text-6xl">
            Compare Port Moody condo buildings
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slateText">
            Research Port Moody condo buildings by location, walkability, age, strata considerations, transit access, lifestyle fit, and buyer and seller context.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="#buildings-by-area">Compare buildings</CTAButton>
            <CTAButton href="/listings" variant="secondary">View condo listings</CTAButton>
            <CTAButton href="#ask-building" variant="ghost">Ask about a building</CTAButton>
          </div>
        </div>
      </section>

      <Section title="How to use this guide" intro="Port Moody condo building research works best when you start broad and review specific details before making a decision." tone="white">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white sm:grid sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
          {howToUseCards.map((card) => (
            <div key={card.heading} className="p-5">
              <p className="font-heading text-lg text-deepInlet">{card.heading}</p>
              <p className="mt-2 text-sm leading-6 text-slateText">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Research shortcuts" intro="Start with the area and lifestyle fit, then review each building against current strata documents and active listing context.">
        <BuildingFilterChips />
      </Section>

      <Section title="Port Moody condo building map" intro="Map locations are approximate and intended for orientation.">
        <div className="md:hidden">
          <div className="rounded-lg border border-softBorder bg-white p-5">
            <h2 className="font-heading text-2xl text-deepInlet">Mobile map orientation</h2>
            <p className="mt-3 text-sm leading-6 text-slateText">
              Port Moody condo buildings are concentrated around Suter Brook, Newport Village, Klahanie, and Moody Centre.
              Use the desktop map for visual orientation, then review exact building and listing details before making decisions.
            </p>
            <div className="mt-5 grid gap-3">
              {buildingDisplayGroups.map((group) => {
                const count = buildings.filter((building) => building.displayGroup === group).length;
                if (count === 0) return null;
                return (
                  <div key={group} className="rounded-md border border-softBorder bg-mist px-4 py-3">
                    <p className="font-semibold text-deepInlet">{group}</p>
                    <p className="mt-1 text-xs text-slateText">{count} building guide preview{count === 1 ? "" : "s"}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <PortMoodyMap points={[...buildingMapPoints, ...neighbourhoodMapPoints]} showLegend={true} className="h-[400px] rounded-lg" />
        </div>
      </Section>

      <Section id="buildings-by-area" title="Buildings by area" intro="Port Moody condo buildings are concentrated in Suter Brook, Moody Centre, Newport Village, and Klahanie. Each area has different trade-offs around walkability, transit, building age, and lifestyle.">
        <div className="space-y-5">
          {buildingDisplayGroups.map((group) => {
            const groupBuildings = buildings.filter((b) => b.displayGroup === group);
            if (groupBuildings.length === 0) return null;
            return (
              <div key={group} className="rounded-lg border border-softBorder bg-white p-4">
                <h3 className="font-heading text-xl text-deepInlet">{group}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {groupBuildings.map((building) => (
                    <Link
                      key={building.slug}
                      href={`/buildings/${building.slug}`}
                      className="rounded-full border border-softBorder bg-mist px-3 py-1.5 text-xs font-semibold text-deepInlet hover:border-seaGlass hover:bg-white"
                    >
                      {building.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section title="Port Moody condo building comparison">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white lg:grid lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {comparisonPrompts.map((prompt) => (
            <article key={prompt.title} className="p-4">
              <h3 className="font-heading text-lg text-deepInlet">{prompt.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slateText">{prompt.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="How to compare Port Moody condo buildings"
        intro="A strong condo decision combines local fit, unit quality, building condition, strata documents, and resale context. This is general guidance, not legal or financial advice."
        tone="white"
      >
        <CondoDecisionGuide />
        <div className="mt-6 rounded-lg border border-softBorder bg-mist p-4 md:mt-8 md:p-6">
          <h3 className="font-heading text-2xl text-deepInlet">Looking at a Port Moody condo?</h3>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slateText">
            Send us the building name or listing. We can help you understand location, strata documents, layout, exposure, parking, fees, amenities, and resale considerations.
          </p>
          <div className="mt-5">
            <CTAButton href="#ask-building" variant="secondary">Ask about a condo building</CTAButton>
          </div>
        </div>
      </Section>

      <Section title="Listings and building context">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <h2 className="font-heading text-2xl text-deepInlet">Use listings with building research</h2>
            <p className="mt-3 text-sm leading-6 text-slateText">
              A condo listing is only part of the decision. The building, strata documents, parking, exposure, noise, fees, and planned work can change the risk profile.
            </p>
            <p className="mt-3 text-xs text-slateText">Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.</p>
            <div className="mt-4">
              <CTAButton href="/listings" variant="secondary">View active listings</CTAButton>
            </div>
          </div>
          <div className="rounded-lg border border-softBorder bg-deepInlet p-6 text-white">
            <h2 className="font-heading text-2xl">Research before you write</h2>
            <p className="mt-3 text-sm leading-6 text-mist">
              Compare the neighbourhood, building or complex, strata documents, and market context before relying on list price alone.
            </p>
            <div className="mt-5">
              <Link href="/buy" className="text-sm font-semibold text-white underline underline-offset-4">
                Read buyer guidance
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Ask about a building" tone="white">
        <div className="max-w-2xl">
          <BuildingInquiryForm buildings={buildings} />
        </div>
      </Section>

      <Section title="Building FAQ">
        <FAQAccordion items={faqs} />
      </Section>
    </>
  );
}
