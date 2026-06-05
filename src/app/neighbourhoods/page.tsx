import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { neighbourhoods } from "@/data/neighbourhoods";
import type { MapCategory } from "@/components/maps/mapTypes";
import { LeadForm } from "@/components/lead-form";
import { CTAButton } from "@/components/cta-button";
import { Badge } from "@/components/ui/badge";
import { VerificationNote } from "@/components/ui/verification-note";
import { StartWithWhatMatters } from "@/components/neighbourhoods/start-with-what-matters";
import { PortMoodyMap } from "@/components/maps/PortMoodyMap";
import { neighbourhoodMapPoints } from "@/data/mapPoints";
import { NeighbourhoodComparisonTable } from "@/components/neighbourhoods/neighbourhood-comparison-table";
import { FilterChips } from "@/components/neighbourhoods/filter-chips";
import { NeighbourhoodFAQ } from "@/components/neighbourhoods/neighbourhood-faq";

const CATEGORY_BADGE: Record<MapCategory, { tone: "forest" | "blue" | "sea" | "sand"; label: string }> = {
  residential: { tone: "forest", label: "Residential / hillside" },
  village: { tone: "blue", label: "Village / walkable centre" },
  waterfront: { tone: "sea", label: "Waterfront / north shore" },
  nearby: { tone: "sand", label: "Nearby community" },
};

export const metadata = createMetadata({
  title: "Port Moody Neighbourhoods and Communities Guide",
  description: "Compare Port Moody neighbourhoods and nearby communities by lifestyle, housing type, walkability, schools, transit, trails, and buyer fit.",
  path: "/neighbourhoods",
});

const faqItems = [
  {
    question: "What is the most walkable neighbourhood in Port Moody?",
    answer:
      "Moody Centre and Newport Village are the most walkable neighbourhoods, with excellent access to shops, cafes, restaurants, and transit. Suter Brook and Klahanie offer moderate walkability. Heritage Mountain and other hillside areas prioritize space and nature over daily walkability.",
  },
  {
    question: "What are the best Port Moody areas for families?",
    answer:
      "Heritage Mountain, College Park, Klahanie, and Glenayre are popular family neighbourhoods with parks, schools, and community feel. Heritage Mountain offers trail access and established townhouse communities. College Park and Glenayre are quieter and more detached-home focused.",
  },
  {
    question: "Where are most Port Moody condos?",
    answer:
      "Suter Brook, Newport Village, Klahanie, and Moody Centre have the most condo inventory. Newport Village and Moody Centre offer the most walkability. Klahanie provides a balance of central location and established community feel.",
  },
  {
    question: "Where are most Port Moody townhomes?",
    answer:
      "Heritage Mountain, Klahanie, College Park, and Heritage Woods have the most townhouse complexes. Heritage Mountain offers established townhouse communities like Treetops with trail access and community amenities.",
  },
  {
    question: "Which Port Moody areas feel quieter?",
    answer:
      "Heritage Mountain, Glenayre, College Park, and Pleasantside feel quieter and more residential. These areas prioritize green space, trails, and established character over walkability and density.",
  },
  {
    question: "How do I choose between Suter Brook, Newport Village, and Klahanie?",
    answer:
      "Suter Brook is a growing mixed-use area good for first-time buyers. Newport Village is the most walkable and modern but at higher price points. Klahanie offers the most balance of walkability, schools, and housing variety. Your choice depends on whether you want density, lifestyle, or established community feel.",
  },
];

const standardVerificationNote =
  "This guide is for general orientation. Unit details, bylaws, strata fees, rental rules, pet rules, parking, storage, school catchments, measurements, and strata documents should be verified for the specific property before making a decision.";

export default function NeighbourhoodsPage() {
  const liveNeighbourhoods = neighbourhoods.filter((n) => n.guideStatus === "live");
  const previewNeighbourhoods = neighbourhoods.filter((n) => n.guideStatus === "preview");
  const comingSoonNeighbourhoods = neighbourhoods.filter((n) => n.guideStatus === "coming-soon");

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl text-deepInlet">
            Find the Port Moody neighbourhood or nearby community that actually fits your life.
          </h1>
          <p className="mt-4 text-lg text-slateText mb-2">
            Port Moody is small, but its neighbourhoods are very different. Walkable condo areas, family townhouse communities, hillside detached homes, and quiet established streets all attract different buyers and come with different trade-offs.
          </p>
          <p className="text-slateText">Use this guide to compare lifestyle, housing type, walkability, transit, trails, and buyer fit. School assumptions should always be verified by exact address before relying on them.</p>
          <div className="mt-8 flex gap-3 flex-col sm:flex-row sm:flex-wrap">
            <CTAButton href="#neighbourhood-guidance">Find my best-fit area</CTAButton>
            <CTAButton href="/listings" variant="secondary">View Port Moody listings</CTAButton>
            <CTAButton href="/local-life" variant="ghost">Explore local life</CTAButton>
          </div>
        </div>
      </section>

      {/* Start with what matters */}
      <StartWithWhatMatters />

      {/* Map section */}
      <section className="mx-auto max-w-5xl px-5 py-10">
        <h2 className="mb-4 font-heading text-2xl text-deepInlet">Port Moody neighbourhood map</h2>
        <PortMoodyMap
          points={neighbourhoodMapPoints}
          showLegend={false}
          showCategoryLegend={true}
          className="h-[320px] rounded-lg md:h-[420px]"
        />
        <p className="mt-2 text-xs text-slateText/70">
          Map locations are approximate and intended for orientation only.
        </p>
      </section>

      {/* Comparison table */}
      <NeighbourhoodComparisonTable />

      <section className="mx-auto max-w-4xl px-5">
        <VerificationNote note={standardVerificationNote} />
      </section>

      {/* Filter chips */}
      <FilterChips />

      {/* Neighbourhood card grid */}
      <section id="neighbourhood-guidance" className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="font-heading text-2xl text-deepInlet mb-6">Explore all neighbourhoods</h2>
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white">
          {liveNeighbourhoods.map((neighbourhood) => (
            <Link
              key={neighbourhood.slug}
              href={`/neighbourhoods/${neighbourhood.slug}`}
              className="block p-6 transition-colors hover:bg-mist/60"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="font-heading text-xl text-deepInlet">{neighbourhood.name}</h3>
                    <Badge tone="forest">Guide live</Badge>
                    {neighbourhood.category && (
                      <Badge tone={CATEGORY_BADGE[neighbourhood.category].tone}>
                        {CATEGORY_BADGE[neighbourhood.category].label}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-slateText mb-3">{neighbourhood.summary}</p>
                  <div className="grid gap-2 md:grid-cols-2 text-xs text-slateText mb-3">
                    <p><span className="font-semibold">Best for:</span> {neighbourhood.bestFor.join(", ")}</p>
                    <p><span className="font-semibold">Housing:</span> {neighbourhood.housingTypes.join(", ")}</p>
                  </div>
                  <p className="text-xs text-forest font-medium">{neighbourhood.developmentChange}</p>
                </div>
                <svg className="w-5 h-5 text-forest flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}

          {previewNeighbourhoods.length > 0 && (
            <>
              <h2 className="px-6 pb-3 pt-8 font-heading text-2xl text-deepInlet">More Port Moody neighbourhood snapshots</h2>
              {previewNeighbourhoods.map((neighbourhood) => (
                <Link
                  key={neighbourhood.slug}
                  href={`/neighbourhoods/${neighbourhood.slug}`}
                  className="block p-6 transition-colors hover:bg-mist/60"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="font-heading text-xl text-deepInlet">{neighbourhood.name}</h3>
                        <Badge tone="blue">Area snapshot</Badge>
                        {neighbourhood.category && (
                          <Badge tone={CATEGORY_BADGE[neighbourhood.category].tone}>
                            {CATEGORY_BADGE[neighbourhood.category].label}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-slateText mb-3">{neighbourhood.summary}</p>
                      <div className="grid gap-2 md:grid-cols-2 text-xs text-slateText">
                        <p><span className="font-semibold">Best for:</span> {neighbourhood.bestFor.join(", ")}</p>
                        <p><span className="font-semibold">Housing:</span> {neighbourhood.housingTypes.join(", ")}</p>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-forest flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </>
          )}

          {comingSoonNeighbourhoods.length > 0 && (
            <>
              <h2 className="px-6 pb-3 pt-8 font-heading text-2xl text-deepInlet">Nearby areas to consider</h2>
              {comingSoonNeighbourhoods.map((neighbourhood) => (
                <div key={neighbourhood.slug} className="bg-mist/60 p-6 opacity-75">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <h3 className="font-heading text-xl text-deepInlet">{neighbourhood.name}</h3>
                        <Badge tone="slate">Nearby area</Badge>
                        {neighbourhood.category && (
                          <Badge tone={CATEGORY_BADGE[neighbourhood.category].tone}>
                            {CATEGORY_BADGE[neighbourhood.category].label}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-slateText mb-3">{neighbourhood.summary}</p>
                      <div className="grid gap-2 md:grid-cols-2 text-xs text-slateText">
                        <p><span className="font-semibold">Best for:</span> {neighbourhood.bestFor.join(", ")}</p>
                        <p><span className="font-semibold">Housing:</span> {neighbourhood.housingTypes.join(", ")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </section>

      {/* Guidance CTA */}
      <section className="mx-auto max-w-4xl px-5 py-12">
        <div className="rounded-lg border border-softBorder bg-warmSand p-8">
          <h2 className="font-heading text-2xl text-deepInlet mb-3">Not sure which neighbourhood fits you?</h2>
          <p className="text-slateText mb-6">
            Tell us about your lifestyle, work location, budget range, property type, and must-haves. We will point you toward the areas that make the most sense.
          </p>
          <div className="max-w-md">
            <LeadForm
              formType="ask-question"
              leadType="buyer"
              ctaLabel="Get neighbourhood guidance"
              title="Which neighbourhoods fit?"
              messageLabel="Tell us about your lifestyle, work location, and property preferences."
              resourceName="Port Moody neighbourhood guidance"
              tags={[
                "source:liveinportmoody",
                "intent:neighbourhood-guidance",
                "lead_type:buyer",
                "neighbourhood_name:Port Moody",
                "neighbourhood_slug:port-moody",
                "area:port-moody",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Neighbourhood Decision Framework */}
      <section className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="font-heading text-2xl text-deepInlet mb-6">Neighbourhood decision framework</h2>
        <p className="text-slateText mb-6">Use these dimensions to narrow your search. No neighbourhood scores perfectly on all, so decide what matters most to you:</p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <h3 className="font-semibold text-deepInlet mb-2">Walkability & Village Feel</h3>
            <p className="text-sm text-slateText">Moody Centre and Newport Village are most walkable. Suter Brook offers moderate walkability. Hillside areas prioritize nature over walkable services.</p>
          </div>
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <h3 className="font-semibold text-deepInlet mb-2">Transit & Commute</h3>
            <p className="text-sm text-slateText">SkyTrain access is strong from Moody Centre and parts of Suter Brook. Other areas serve commute by car or bus. Verify your specific route and timing.</p>
          </div>
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <h3 className="font-semibold text-deepInlet mb-2">Housing Type & Density</h3>
            <p className="text-sm text-slateText">Condos cluster in walkable areas. Townhouses spread across Heritage Mountain, Klahanie, and College Park. Detached homes concentrate in quieter hillside areas.</p>
          </div>
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <h3 className="font-semibold text-deepInlet mb-2">Trails, Parks & Nature</h3>
            <p className="text-sm text-slateText">Hillside areas (Heritage Mountain, Pleasantside, Glenayre) have best trail access. All neighbourhoods have parks. Waterfront feels are strongest near Barnet Marine.</p>
          </div>
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <h3 className="font-semibold text-deepInlet mb-2">Quiet & Space</h3>
            <p className="text-sm text-slateText">Heritage Mountain, Pleasantside, and Glenayre offer quiet streets and established character. Walkable villages are livelier. Space vs. convenience is the main trade-off.</p>
          </div>
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <h3 className="font-semibold text-deepInlet mb-2">Schools & Families</h3>
            <p className="text-sm text-slateText">All neighbourhoods have school access. Verify your exact address for catchment. Heritage Mountain, College Park, and Klahanie are popular with families.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <NeighbourhoodFAQ items={faqItems} />
    </>
  );
}
