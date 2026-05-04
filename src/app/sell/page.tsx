import { FAQAccordion } from "@/components/faq-accordion";
import { ImageHero } from "@/components/image-hero";
import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Sell in Port Moody",
  description: "Seller strategy for Port Moody homeowners focused on pricing, media, positioning, buyer targeting, preparation, and negotiation.",
  path: "/sell",
});

const performance = ["Correct pricing band", "Preparation and staging guidance", "Photography and video", "Floorplan and feature writing", "Local lifestyle positioning", "Buyer targeting", "Showing strategy", "Offer management"];
const highEnd = ["Editorial-level photography", "Cinematic video", "Drone work where legal", "Lifestyle context", "Privacy-aware marketing", "Buyer qualification"];
const readiness = ["Timeline: 0-3, 3-6, 6-12, or 12+ months", "Property type and approximate area", "Major upgrades and known issues", "Biggest concern", "Need to buy next", "Preference for discreet advice"];

export default function SellPage() {
  return (
    <>
      <ImageHero imageSrc="/hero-sell.png" title="Sell your Port Moody home with local positioning, stronger media, and sharper strategy." subtitle="A good listing does more than appear on MLS. It explains the property, the neighbourhood, the lifestyle, the buyer pool, and the value clearly." primaryCta={{ label: "Get a practical home value opinion", href: "#value-form" }} secondaryCta={{ label: "See how we position Port Moody homes", href: "#positioning" }} />
      <Section title="What makes a Port Moody listing perform?" tone="white"><div id="positioning" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{performance.map((item) => <div key={item} className="rounded-md border border-softBorder bg-mist p-4 text-sm font-medium text-charcoal">{item}</div>)}</div></Section>
      <Section title="High-end Port Moody listings"><div className="grid gap-3 md:grid-cols-3">{highEnd.map((item) => <div key={item} className="rounded-md bg-white p-4 text-sm font-semibold text-deepInlet shadow-sm">{item}</div>)}</div></Section>
      <Section title="Seller readiness checklist, static only" tone="white"><ul className="grid gap-3 md:grid-cols-2">{readiness.map((item) => <li key={item} className="rounded-md border border-softBorder p-4 text-sm text-slateText">{item}</li>)}</ul></Section>
      <Section title="Home value opinion form" tone="sand"><div id="value-form" className="max-w-2xl"><LeadForm formType="home-value" leadType="seller" ctaLabel="Get a home value opinion" title="Ask for a practical value opinion" messageLabel="Approximate address, property type, timeline, and what you want to understand" /></div></Section>
      <Section title="FAQ" tone="white"><FAQAccordion items={[{ question: "Is this an automated valuation?", answer: "No. Phase 1 routes the request for a practical human opinion, not an automated guess." }, { question: "Is there a seller readiness calculator?", answer: "No. Phase 1 includes only a static checklist." }]} /></Section>
    </>
  );
}
