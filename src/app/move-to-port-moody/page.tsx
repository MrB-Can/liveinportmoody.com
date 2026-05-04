import { FAQAccordion } from "@/components/faq-accordion";
import { ImageHero } from "@/components/image-hero";
import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Move to Port Moody",
  description: "A practical relocation starting point for Port Moody lifestyle, commute, schools, trails, neighbourhood feel, and real estate trade-offs.",
  path: "/move-to-port-moody",
});

const reasons = ["Waterfront access", "Trails and forest", "Rocky Point Park", "Breweries and restaurants", "SkyTrain", "Family-friendly neighbourhoods", "Condo villages", "Small-city identity"];
const know = ["Housing is expensive.", "Some areas are steep.", "Parking can be limited in condo zones.", "Traffic can matter at certain times.", "Moody Centre will keep changing.", "Not every area is equally walkable."];

export default function MovePage() {
  return (
    <>
      <ImageHero imageSrc="/hero-move.png" title="Thinking about moving to Port Moody? Start with the lifestyle, then the real estate." subtitle="Trails, waterfront, breweries, SkyTrain, schools, hillsides, density, and neighbourhood feel all matter when deciding where to live." primaryCta={{ label: "Get the relocation starter guide", href: "#relocation-form" }} secondaryCta={{ label: "Ask about living here", href: "#relocation-form" }} />
      <Section title="Why people move here" tone="white"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{reasons.map((item) => <div key={item} className="rounded-md border border-softBorder bg-mist p-4 text-sm font-medium text-charcoal">{item}</div>)}</div></Section>
      <Section title="What to know before moving here"><ul className="grid gap-3 md:grid-cols-2">{know.map((item) => <li key={item} className="rounded-md bg-white p-4 text-sm text-slateText shadow-sm">{item}</li>)}</ul></Section>
      <Section title="Moving from Vancouver to Port Moody" intro="Expect a different mix of space, price, commute, transit, schools, and community feel. The right answer depends on your daily pattern, not just the map." tone="white" />
      <Section title="Relocation guide form" tone="sand"><div id="relocation-form" className="max-w-2xl"><LeadForm formType="relocation-guide" leadType="relocation" ctaLabel="Get the relocation starter guide" title="Tell us where you are moving from" messageLabel="Moving from, timeline, household type, property type, and budget range if useful" /></div></Section>
      <Section title="FAQ" tone="white"><FAQAccordion items={[{ question: "Is Port Moody a fit for families?", answer: "Often, but the right area depends on school needs, commute, housing type, hills, and lifestyle." }, { question: "Are neighbourhood tools available?", answer: "Not in Phase 1. Comparison tools are reserved for future phases." }]} /></Section>
    </>
  );
}
