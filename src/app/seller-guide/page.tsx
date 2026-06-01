import { CTAButton } from "@/components/cta-button";
import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(
  {
    title: "Request the Port Moody Seller Guide",
    description:
      "Request the Port Moody seller guide and ask for local seller guidance on preparation, pricing, positioning, media, storytelling, and launch planning.",
    path: "/seller-guide",
  },
);

const prepChecklist = [
  "Clarify timing, motivation, and next-step housing needs",
  "Gather title, strata, renovation, permit, utility, and maintenance documents where relevant",
  "Prepare repairs, cleaning, staging, access, storage, and showing logistics",
  "Understand competing listings and buyer alternatives before setting expectations",
];

const guideCovers = [
  "Seller prep checklist",
  "Pricing and positioning by property type and neighbourhood",
  "Media, photography, floor plans, and story structure",
  "How buyers compare condos, townhouses, detached homes, buildings, and complexes",
  "Launch planning and feedback review",
];

export default function SellerGuidePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-14 md:py-18">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-emphasis">Seller guide</p>
          <h1 className="max-w-4xl font-heading text-4xl leading-tight text-deepInlet md:text-6xl">
            Request the Port Moody Seller Guide
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slateText">
            Join the request list for the Port Moody Seller Guide and ask for local seller guidance now while the guide is being prepared.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="#request-seller-guide">Request the guide</CTAButton>
            <CTAButton href="/contact" variant="secondary">Ask a seller question</CTAButton>
            <CTAButton href="/sell" variant="ghost">Review seller resources</CTAButton>
            <CTAButton href="/listings" variant="ghost">View current listings</CTAButton>
          </div>
        </div>
      </section>

      <Section title="What the guide covers" tone="white">
        <div className="grid gap-4 md:grid-cols-2">
          {guideCovers.map((item) => (
            <div key={item} className="rounded-lg border border-softBorder bg-mist p-5 text-sm leading-6 text-slateText">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Seller prep checklist">
        <div className="grid gap-4 md:grid-cols-2">
          {prepChecklist.map((item) => (
            <div key={item} className="rounded-lg border border-softBorder bg-white p-5 text-sm leading-6 text-slateText">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Pricing and positioning" tone="white">
        <p className="max-w-3xl text-sm leading-6 text-slateText">
          Pricing should be based on property-specific condition, active competition, recent context where available, buyer alternatives, neighbourhood fit, building or complex profile, and current market behaviour. Do not rely on generic online estimates alone.
        </p>
      </Section>

      <Section title="Media and storytelling">
        <p className="max-w-3xl text-sm leading-6 text-slateText">
          Strong media should show the property clearly and tell the right story: layout, light, storage, parking, outdoor space, neighbourhood context, strata confidence, and the buyer problem the home solves.
        </p>
      </Section>

      <Section id="request-seller-guide" title="Request the Port Moody Seller Guide" tone="white">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-lg border border-softBorder bg-mist p-6">
            <h2 className="font-heading text-2xl text-deepInlet">Request the seller guide</h2>
            <p className="mt-3 text-sm leading-6 text-slateText">
              We will send the guide when it is ready. Use this form to join the request list and include the property type or neighbourhood you are considering selling.
            </p>
            <p className="mt-3 text-sm leading-6 text-slateText">
              If you need help before the guide is ready, ask for seller guidance now and share your timing, property type, or preparation questions.
            </p>
            <div className="mt-5">
              <CTAButton href="/contact" variant="secondary">Ask for seller guidance now</CTAButton>
            </div>
          </div>
          <LeadForm
            formType="home-value"
            leadType="seller"
            ctaLabel="Request seller guide"
            title="Request the Port Moody seller guide"
            tags={["source:liveinportmoody", "intent:seller-guide-request", "lead_type:seller", "area:port-moody"]}
          />
        </div>
      </Section>
    </>
  );
}
