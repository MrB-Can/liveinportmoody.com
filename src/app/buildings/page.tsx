import Link from "next/link";
import { FAQAccordion } from "@/components/faq-accordion";
import { BuildingComparisonTable } from "@/components/buildings/BuildingComparisonTable";
import { BuildingFilterChips } from "@/components/buildings/BuildingFilterChips";
import { BuildingInquiryForm } from "@/components/buildings/BuildingInquiryForm";
import { PortMoodyMap } from "@/components/maps/PortMoodyMap";
import { buildingMapPoints, neighbourhoodMapPoints } from "@/data/mapPoints";
import { BuildingPreviewCard } from "@/components/buildings/BuildingPreviewCard";
import { CondoDecisionGuide } from "@/components/buildings/CondoDecisionGuide";
import { CTAButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { VerificationNote } from "@/components/ui/verification-note";
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
      "Compare location, walkability, construction type, age, strata history, fees, amenities, parking, storage, layout, exposure, and resale demand. Then verify current documents for each specific building.",
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
      "Yes. Send the building name or listing and we can help you understand the local context, strata questions to ask, pricing trade-offs, and what needs verification.",
  },
];

const standardVerificationNote =
  "This guide is for general orientation. Unit details, bylaws, strata fees, rental rules, pet rules, parking, storage, school catchments, measurements, and strata documents should be verified for the specific property before making a decision.";

const howToUseCards = [
  {
    heading: "Compare by area",
    body: "Start with the neighbourhood — Suter Brook, Newport Village, Klahanie, or Moody Centre — before comparing buildings.",
  },
  {
    heading: "Compare lifestyle fit",
    body: "Walkability, transit, noise, views, commute, and daily convenience vary significantly between buildings and areas.",
  },
  {
    heading: "Verify strata documents",
    body: "Every building decision needs current strata documents: Form B, depreciation report, minutes, insurance, and financials.",
  },
  {
    heading: "Ask about active listings",
    body: "Use the inquiry form to ask about availability in a specific building through approved MLS Reciprocity sources.",
  },
  {
    heading: "Use guides as orientation",
    body: "Building previews give orientation, not final answers. Verify unit-specific details before relying on any guide.",
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
            <CTAButton href="#building-grid">Compare buildings</CTAButton>
            <CTAButton href="/listings" variant="secondary">View condo listings</CTAButton>
            <CTAButton href="#ask-building" variant="ghost">Ask about a building</CTAButton>
          </div>
        </div>
      </section>

      <Section title="How to use this guide" intro="Port Moody condo building research works best when you start broad and verify specific details before making a decision." tone="white">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {howToUseCards.map((card) => (
            <div key={card.heading} className="rounded-lg border border-softBorder bg-mist p-5">
              <p className="font-heading text-lg text-deepInlet">{card.heading}</p>
              <p className="mt-2 text-sm leading-6 text-slateText">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Research shortcuts" intro="Start with the area and lifestyle fit, then verify each building against current strata documents and active listing context.">
        <BuildingFilterChips />
      </Section>

      <Section title="Port Moody condo building map" intro="Map locations are approximate and intended for orientation.">
        <PortMoodyMap points={[...buildingMapPoints, ...neighbourhoodMapPoints]} showLegend={true} className="h-[360px] md:h-[480px] rounded-lg" />
      </Section>

      <Section title="Building previews" intro="These are preview-level research cards, not full building guides. They are designed to help you ask better questions before reviewing a listing or writing an offer." tone="white">
        <div id="building-grid" className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {buildings.map((building) => (
            <BuildingPreviewCard key={building.slug} building={building} />
          ))}
        </div>
      </Section>

      <Section title="Buildings by area" intro="Port Moody condo buildings are concentrated in Suter Brook, Moody Centre, Newport Village, and Klahanie. Each area has different trade-offs around walkability, transit, building age, and lifestyle.">
        <div className="space-y-10">
          {buildingDisplayGroups.map((group) => {
            const groupBuildings = buildings.filter((b) => b.displayGroup === group);
            if (groupBuildings.length === 0) return null;
            return (
              <div key={group}>
                <h3 className="font-heading text-2xl text-deepInlet">{group}</h3>
                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  {groupBuildings.map((building) => (
                    <article key={building.slug} className="rounded-lg border border-softBorder bg-white p-5">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-mist px-2.5 py-1 text-xs font-semibold text-slateText">Preview</span>
                        <span className="text-xs text-slateText">{building.type}</span>
                      </div>
                      <h4 className="mt-3 font-heading text-xl text-deepInlet">{building.name}</h4>
                      {building.address && (
                        <p className="mt-1 text-xs text-slateText">{building.address}</p>
                      )}
                      <p className="mt-3 text-sm leading-6 text-slateText">{building.bestFor}</p>
                      <div className="mt-4">
                        <Link
                          href={`/buildings/${building.slug}`}
                          className="text-sm font-semibold text-forest hover:text-deepInlet"
                        >
                          Open preview →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section title="Port Moody condo building comparison">
        <BuildingComparisonTable buildings={buildings} />
        <div className="mt-5">
          <VerificationNote note={standardVerificationNote} />
        </div>
      </Section>

      <Section
        title="How to compare Port Moody condo buildings"
        intro="A strong condo decision combines local fit, unit quality, building condition, strata documents, and resale context. This is general guidance, not legal or financial advice."
        tone="white"
      >
        <CondoDecisionGuide />
        <div className="mt-8 rounded-lg border border-softBorder bg-mist p-6">
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
            <p className="mt-3 text-xs leading-5 text-slateText">
              Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.
            </p>
            <div className="mt-5">
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
