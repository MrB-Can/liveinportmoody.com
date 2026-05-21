import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { complexes } from "@/data/complexes";
import { LeadForm } from "@/components/lead-form";
import { Badge } from "@/components/ui/badge";
import { QuickFactsWithBars } from "@/components/neighbourhoods/quick-facts-with-bars";
import { FitCards } from "@/components/neighbourhoods/fit-cards";
import { NeighbourhoodMapPlaceholder } from "@/components/neighbourhoods/neighbourhood-map-placeholder";
import { NeighbourhoodFAQ } from "@/components/neighbourhoods/neighbourhood-faq";
import { Trees, GraduationCap, TrainFront, AlertCircle } from "lucide-react";

export const metadata = createMetadata({
  title: "Heritage Mountain Port Moody Neighbourhood Guide",
  description: "A local guide to Heritage Mountain in Port Moody, including housing types, townhouse complexes, parks, trails, schools, transit, buyer notes, seller notes, and active listing guidance.",
  path: "/neighbourhoods/heritage-mountain",
});

const faqItems = [
  {
    question: "Is Heritage Mountain a good area for families?",
    answer:
      "Yes. Heritage Mountain has parks, schools nearby, quiet streets, trail access, and established townhouse communities like Treetops that appeal to families. The main trade-off is less daily walkability than central Port Moody areas.",
  },
  {
    question: "What types of homes are common in Heritage Mountain?",
    answer:
      "Heritage Mountain has a mix of detached homes and townhouse complexes. Townhouses are concentrated in planned communities like Treetops. Detached homes are scattered throughout with varied lot sizes and conditions.",
  },
  {
    question: "Is Heritage Mountain walkable?",
    answer:
      "Heritage Mountain has limited daily walkability. Most residents drive for groceries, shops, and restaurants. The neighbourhood is better for walking trails and parks than for urban convenience.",
  },
  {
    question: "What should buyers watch for in Heritage Mountain townhomes?",
    answer:
      "Verify strata fees, depreciation reserves, exterior condition (roofing, siding, windows), hillside grading and drainage, parking and garage usability, unit exposure and privacy, and recent sales context. Hillside properties need careful assessment of grading and water management.",
  },
  {
    question: "How does Heritage Mountain compare with Suter Brook or Newport Village?",
    answer:
      "Heritage Mountain is quieter and more residential, with more space and trail access but less walkability. Suter Brook and Newport Village are more walkable and have more condo inventory. Choose Heritage Mountain for family space and nature; choose the others for walkability and urban lifestyle.",
  },
];

const standardVerificationNote =
  "This guide is for general orientation. Unit details, bylaws, strata fees, rental rules, pet rules, parking, storage, school catchments, measurements, and strata documents should be verified for the specific property before making a decision.";

export default function HeritageM() {
  const heritageMountainComplexes = complexes.filter((c) => c.neighbourhoodSlug === "heritage-mountain");

  return (
    <>
      {/* Back link */}
      <div className="bg-mist px-5 py-3 border-b border-softBorder">
        <div className="mx-auto max-w-4xl">
          <Link href="/neighbourhoods" className="text-sm font-semibold text-forest hover:text-deepInlet">
            ← Back to all neighbourhoods
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <Badge tone="forest">Guide live</Badge>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl text-deepInlet">Heritage Mountain, Port Moody</h1>
          <p className="mt-4 text-lg text-slateText">
            A hillside, forest-connected Port Moody neighbourhood with established detached homes, family-oriented townhouse complexes, trail access, and a quieter residential feel than the walkable village areas closer to the inlet.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5 py-12 space-y-16">
        {/* Quick facts with bars */}
        <QuickFactsWithBars
          facts={[
            { label: "Main housing", value: "Detached homes, townhomes" },
            { label: "Lifestyle", value: "Quiet, family-oriented, trail-connected" },
            { label: "Walkability", value: "Limited for daily errands" },
            { label: "Transit", value: "Bus access, car helpful" },
            { label: "Buyer fit", value: "Families, townhouse buyers, outdoor-focused" },
            { label: "Watch-out", value: "Hills, strata due diligence, catchment verify" },
          ]}
          scoringBars={[
            { label: "Walkability", score: 35 },
            { label: "Transit access", score: 45 },
            { label: "Trails & parks", score: 85 },
            { label: "Family fit", score: 80 },
            { label: "Condo inventory", score: 20 },
            { label: "Townhome inventory", score: 75 },
            { label: "Detached homes", score: 70 },
          ]}
        />

        <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {standardVerificationNote}
        </p>

        {/* May fit / May not fit */}
        <FitCards
          mayFit={[
            "You want a townhome or detached home rather than a condo.",
            "You value trails, parks, and green space.",
            "You are comfortable driving for many errands.",
            "You want a quieter residential feel.",
            "You are comparing Port Moody with parts of Coquitlam, Burke Mountain, or Heritage Woods.",
          ]}
          mayNotFit={[
            "You want to walk to SkyTrain, cafes, groceries, and restaurants every day.",
            "You want a dense urban village feel.",
            "You strongly prefer flat streets.",
            "You want mostly newer construction.",
          ]}
        />

        {/* Map */}
        <section>
          <h2 className="font-heading text-2xl text-deepInlet mb-4">Where Heritage Mountain is</h2>
          <p className="text-slateText mb-8">
            Heritage Mountain sits above the more walkable inlet-side areas of Port Moody. It is more residential and hillside-oriented, with stronger trail and park access but less daily walkability than Newport Village, Suter Brook, Klahanie, or Moody Centre.
          </p>
          <NeighbourhoodMapPlaceholder />
        </section>

        {/* Housing types */}
        <section>
          <h2 className="font-heading text-2xl text-deepInlet mb-4">Housing types</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-softBorder bg-white p-6">
              <h3 className="font-semibold text-deepInlet mb-2">Townhouses</h3>
              <p className="text-sm text-slateText mb-3">Ground-oriented townhouses with individual entrances, often arranged over multiple levels. Common in established complexes like Treetops.</p>
              <ul className="text-sm text-slateText space-y-1">
                <li>• Finished area varies by complex and unit</li>
                <li>• Attached or semi-detached</li>
                <li>• Strata-governed with shared amenities</li>
                <li>• Mature landscaping and community facilities</li>
              </ul>
            </div>
            <div className="rounded-lg border border-softBorder bg-white p-6">
              <h3 className="font-semibold text-deepInlet mb-2">Detached Homes</h3>
              <p className="text-sm text-slateText mb-3">Single-family detached homes on their own lot, varying in age and condition.</p>
              <ul className="text-sm text-slateText space-y-1">
                <li>• Lot size varies by street, slope, and property</li>
                <li>• Greater flexibility for renovations</li>
                <li>• No strata fees</li>
                <li>• Limited new construction</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Townhouse complexes */}
        {heritageMountainComplexes.length > 0 && (
          <section>
            <h2 className="font-heading text-2xl text-deepInlet mb-6">Townhouse complexes</h2>
            <div className="space-y-4">
              {heritageMountainComplexes.map((complex) => (
                <div key={complex.slug} className="rounded-lg border border-softBorder bg-white p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-heading text-lg text-deepInlet">{complex.name}</h3>
                      <p className="text-sm text-slateText mt-1">{complex.address}</p>
                    </div>
                    {complex.guideStatus === "Guide live" && (
                      <Badge tone="forest">Guide live</Badge>
                    )}
                  </div>
                  <p className="text-sm text-slateText mb-3">{complex.summary}</p>
                  <p className="text-xs text-slateText mb-4">
                    <span className="font-semibold">Best for:</span> Buyers wanting established townhomes near trails and community amenities
                  </p>
                  <p className="text-xs text-forest font-medium mb-4">Check: strata fees, exterior maintenance, depreciation report, parking, unit exposure</p>
                  {complex.href && (
                    <Link href={complex.href} className="text-sm font-semibold text-forest hover:text-deepInlet">
                      View {complex.name} guide →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Parks & trails */}
        <section>
          <h2 className="font-heading text-2xl text-deepInlet mb-4 flex items-center gap-2">
            <Trees className="h-6 w-6 text-forest" />
            Parks & trails
          </h2>
          <p className="text-slateText mb-6">Heritage Mountain offers excellent access to Port Moody parks and trails system.</p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { name: "Heritage Mountain Community Park", distance: "Walking distance" },
              { name: "Port Moody Trails Network", distance: "Various locations" },
              { name: "Ioco Shoreline Park", distance: "Nearby" },
              { name: "Burrard Inlet Waterfront", distance: "Short drive" },
            ].map((item) => (
              <div key={item.name} className="rounded-lg border border-softBorder bg-mist p-4">
                <p className="font-semibold text-deepInlet text-sm">{item.name}</p>
                <p className="text-xs text-slateText mt-1">{item.distance}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Schools */}
        <section>
          <h2 className="font-heading text-2xl text-deepInlet mb-4 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-forest" />
            Schools & catchment verification
          </h2>
          <div className="rounded-lg border border-softBorder bg-sand p-6 mb-6">
            <p className="text-sm text-slateText">
              <span className="font-semibold">Important:</span> School catchments can change. Verify current boundaries directly with School District 43 (SD43) and the specific schools listed below.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { name: "Heritage Woods Secondary School", type: "Secondary", catchment: "Check with SD43 for current catchment" },
              { name: "Port Moody Elementary School", type: "Elementary", catchment: "Check with SD43 for current catchment" },
            ].map((school) => (
              <div key={school.name} className="rounded-lg border border-softBorder bg-white p-4">
                <h3 className="font-semibold text-deepInlet text-sm">{school.name}</h3>
                <p className="text-xs text-slateText mt-2">{school.type}</p>
                <p className="text-xs text-slateText mt-1">Catchment: {school.catchment}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a href="https://www.sd43.bc.ca" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-forest hover:text-deepInlet">
              School District 43 Official Catchment Maps →
            </a>
          </div>
        </section>

        {/* Transit & walkability */}
        <section>
          <h2 className="font-heading text-2xl text-deepInlet mb-4 flex items-center gap-2">
            <TrainFront className="h-6 w-6 text-forest" />
            Transit & walkability
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-deepInlet mb-3">Transit access</h3>
              <p className="text-sm text-slateText mb-4">Heritage Mountain has access to Translink bus routes serving Port Moody. Service is available but many residents rely on personal vehicles for daily commuting.</p>
              <a href="https://www.translink.ca" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-forest hover:text-deepInlet">
                TransLink Trip Planner →
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-deepInlet mb-3">Walkability</h3>
              <p className="text-sm text-slateText mb-4">The neighbourhood has limited walkability for daily errands. Shopping centres and services require a short drive for most residents.</p>
              <a href="https://www.walkscore.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-forest hover:text-deepInlet">
                Walk Score Explorer →
              </a>
            </div>
          </div>
        </section>

        {/* Buyer notes */}
        <section>
          <h2 className="font-heading text-2xl text-deepInlet mb-4 flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-forest" />
            Buyer watch-outs
          </h2>
          <div className="space-y-4">
            <div className="rounded-lg border-l-4 border-emphasis bg-white p-6">
              <p className="text-sm text-slateText">
                Heritage Mountain buyers should verify depreciation report and contingency reserve fund, assess exterior condition (roofing, siding, windows, decks), evaluate hillside grading and water management, confirm parking and garage usability, and check unit exposure, privacy, and road noise. Snow and ice on steeper streets should also be considered.
              </p>
            </div>
          </div>
        </section>

        {/* Seller notes */}
        <section>
          <h2 className="font-heading text-2xl text-deepInlet mb-6">Seller positioning</h2>
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <p className="text-sm text-slateText mb-4">
              Heritage Mountain listings should usually be positioned around space, greenery, family function, trail access, storage, parking, and value compared with more central Port Moody areas. Buyers here often need help understanding the trade-off: less walkability, but more space, quiet, and established residential character.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-semibold text-deepInlet text-sm mb-2">How Heritage Mountain compares</h3>
              </div>
              {[
                { area: "Suter Brook", text: "Heritage Mountain is quieter and more residential, but less walkable." },
                { area: "Newport Village", text: "More space and green setting, less village convenience." },
                { area: "Klahanie", text: "More hillside and established-residential feel, less central to Rocky Point." },
                { area: "College Park", text: "Both are established, but Heritage Mountain has more planned townhouse pockets and trail-oriented positioning." },
                { area: "Glenayre", text: "Heritage Mountain has more townhome inventory; Glenayre feels more detached-home residential." },
              ].map((comparison) => (
                <div key={comparison.area} className="text-sm text-slateText">
                  <span className="font-semibold text-deepInlet">{comparison.area}:</span> {comparison.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Listings CTA */}
        <section className="rounded-lg border border-softBorder bg-sand p-8">
          <h2 className="font-heading text-2xl text-deepInlet mb-3">Looking for a home in Heritage Mountain?</h2>
          <p className="text-slateText mb-6">View active listings or ask for local guidance.</p>
          <div className="grid gap-4 md:grid-cols-2 mb-6">
            <a href="/listings" className="flex items-center justify-center px-6 py-3 bg-emphasis text-white rounded-lg font-semibold hover:opacity-90">
              View active listings
            </a>
            <div>
              <p className="text-xs text-slateText">
                <span className="font-semibold">Compliance:</span> Active listings are provided through MLS Reciprocity. Only active listings are shown. Sold and expired listings are not included.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <NeighbourhoodFAQ items={faqItems} />

        {/* Contact CTA */}
        <section className="rounded-lg border border-softBorder bg-white p-8">
          <h2 className="font-heading text-2xl text-deepInlet mb-3">Questions about Heritage Mountain?</h2>
          <p className="text-slateText mb-6">Whether you&apos;re a buyer, seller, or just exploring, Paul and Leilani can help.</p>
          <div className="max-w-md">
            <LeadForm
              formType="ask-question"
              leadType="buyer"
              ctaLabel="Send a question"
              title="Ask about Heritage Mountain"
              messageLabel="What would you like to know about Heritage Mountain?"
              resourceName="Heritage Mountain neighbourhood guidance"
              tags={[
                "source:liveinportmoody",
                "intent:neighbourhood-guidance",
                "lead_type:buyer",
                "neighbourhood_name:Heritage Mountain",
                "neighbourhood_slug:heritage-mountain",
                "neighbourhood:heritage-mountain",
                "area:port-moody",
              ]}
            />
          </div>
        </section>
      </div>
    </>
  );
}
