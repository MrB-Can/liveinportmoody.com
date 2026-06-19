import { type LucideIcon, Navigation, Train, Home, Trees, Volume2, School } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { LeadForm } from "@/components/lead-form";
import { CTAButton } from "@/components/cta-button";
import { StartWithWhatMatters } from "@/components/neighbourhoods/start-with-what-matters";
import { NeighbourhoodCards } from "@/components/neighbourhoods/neighbourhood-cards";
import { PortMoodyMap } from "@/components/maps/PortMoodyMap";
import { neighbourhoodMapPoints } from "@/data/mapPoints";
import { NeighbourhoodComparisonTable } from "@/components/neighbourhoods/neighbourhood-comparison-table";
import { NeighbourhoodFAQ } from "@/components/neighbourhoods/neighbourhood-faq";

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

type FrameworkCard = { icon: LucideIcon; heading: string; body: string };
const frameworkCards: FrameworkCard[] = [
  {
    icon: Navigation,
    heading: "Walkability & Village Feel",
    body: "Moody Centre and Newport Village are most walkable. Suter Brook offers moderate walkability. Hillside areas prioritize nature over walkable services.",
  },
  {
    icon: Train,
    heading: "Transit & Commute",
    body: "SkyTrain access is strong from Moody Centre and parts of Suter Brook. Other areas serve commute by car or bus. Verify your specific route and timing.",
  },
  {
    icon: Home,
    heading: "Housing Type & Density",
    body: "Condos cluster in walkable areas. Townhouses spread across Heritage Mountain, Klahanie, and College Park. Detached homes concentrate in quieter hillside areas.",
  },
  {
    icon: Trees,
    heading: "Trails, Parks & Nature",
    body: "Hillside areas (Heritage Mountain, Pleasantside, Glenayre) have best trail access. All neighbourhoods have parks. Waterfront feels are strongest near Barnet Marine.",
  },
  {
    icon: Volume2,
    heading: "Quiet & Space",
    body: "Heritage Mountain, Pleasantside, and Glenayre offer quiet streets and established character. Walkable villages are livelier. Space vs. convenience is the main trade-off.",
  },
  {
    icon: School,
    heading: "Schools & Families",
    body: "All neighbourhoods have school access. School catchment is assigned by exact property address. Heritage Mountain, College Park, and Klahanie are popular with families.",
  },
];

export default function NeighbourhoodsPage() {
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
          <p className="text-slateText">Use this guide to compare lifestyle, housing type, walkability, transit, trails, and buyer fit. School catchment is assigned by exact property address through SD43.</p>
          <div className="mt-8 flex gap-3 flex-col sm:flex-row sm:flex-wrap">
            <CTAButton href="#neighbourhood-guidance">Find my best-fit area</CTAButton>
            <CTAButton href="/listings" variant="secondary">View Port Moody listings</CTAButton>
            <CTAButton href="/local-life" variant="ghost">Explore local life</CTAButton>
          </div>
        </div>
      </section>

      {/* Visual neighbourhood chooser */}
      <NeighbourhoodCards />

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

      {/* Guidance CTA */}
      <section id="neighbourhood-guidance" className="mx-auto max-w-4xl px-5 py-12">
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
          {frameworkCards.map((card) => (
            <div key={card.heading} className="rounded-lg border border-softBorder bg-white p-6">
              <card.icon className="h-5 w-5 text-forest mb-3" />
              <h3 className="font-semibold text-deepInlet mb-2">{card.heading}</h3>
              <p className="text-sm text-slateText">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <NeighbourhoodFAQ items={faqItems} />
    </>
  );
}
