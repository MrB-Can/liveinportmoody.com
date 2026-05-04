import { FAQAccordion } from "@/components/faq-accordion";
import { ImageHero } from "@/components/image-hero";
import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Buy in Port Moody",
  description: "Buyer guidance for Port Moody micro-markets, property types, commute patterns, strata risk, schools, and lifestyle trade-offs.",
  path: "/buy",
});

const decisionMap = ["Walkability vs space", "SkyTrain access vs quiet streets", "Condo convenience vs detached privacy", "School catchments", "Future development", "Strata risk", "Parking and storage", "Slope and driveway usability"];
const paths = ["Condo buyer", "Townhome buyer", "Detached buyer", "Downsizer", "Family buyer", "Investor", "Relocating buyer"];
const mistakes = ["Treating all Port Moody condos as equivalent.", "Ignoring strata documents.", "Underestimating parking and storage.", "Missing future development context.", "Buying based only on listing photos.", "Overpaying for surface-level updates."];

export default function BuyPage() {
  return (
    <>
      <ImageHero imageSrc="/hero-buy.png" title="Buying in Port Moody starts with understanding the micro-markets." subtitle="Suter Brook, Newport Village, Klahanie, Moody Centre, Heritage Mountain, College Park, and the waterfront all solve different problems for different buyers." primaryCta={{ label: "Get buyer guidance", href: "#buyer-form" }} secondaryCta={{ label: "Tell us what you are looking for", href: "#buyer-form" }} />
      <Section title="The Port Moody buyer decision map" tone="white"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{decisionMap.map((item) => <div key={item} className="rounded-md border border-softBorder bg-mist p-4 text-sm font-medium text-charcoal">{item}</div>)}</div></Section>
      <Section title="Buyer paths"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{paths.map((item) => <div key={item} className="rounded-md bg-white p-4 text-sm font-semibold text-deepInlet shadow-sm">{item}</div>)}</div></Section>
      <Section title="Common buyer mistakes" tone="white"><ul className="grid gap-3 md:grid-cols-2">{mistakes.map((item) => <li key={item} className="rounded-md border border-softBorder p-4 text-sm text-slateText">{item}</li>)}</ul></Section>
      <Section title="Buyer shortlist form" tone="sand"><div id="buyer-form" className="max-w-2xl"><LeadForm formType="buyer-shortlist" leadType="buyer" ctaLabel="Get buyer guidance" title="Tell us what you are looking for" messageLabel="Property type, budget range, timeline, and where you are moving from" /></div></Section>
      <Section title="FAQ" tone="white"><FAQAccordion items={[{ question: "Do you show listings in Phase 1?", answer: "No. Phase 1 does not include IDX, listing search, or listing detail pages." }, { question: "Can you help compare Port Moody areas?", answer: "Yes, through direct guidance. Neighbourhood comparison tools are planned for later phases." }]} /></Section>
    </>
  );
}
