import { CTAButton } from "@/components/cta-button";
import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(
  {
    title: "Request the Port Moody Buyer Guide",
    description:
      "Request the Port Moody buyer guide and ask for local buyer guidance on neighbourhood fit, property types, listings, strata documents, and offer preparation.",
    path: "/buyer-guide",
  },
);

const guideCovers = [
  "How to compare Port Moody neighbourhoods by lifestyle, commute, property type, and trade-offs",
  "How condos, townhouses, and detached homes differ in risk, documents, and resale considerations",
  "How to assess a listing before relying on it",
  "How to approach strata documents, building history, parking, storage, bylaws, and fees",
  "How to prepare questions before writing an offer",
];

export default function BuyerGuidePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-14 md:py-18">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-emphasis">Buyer guide</p>
          <h1 className="max-w-4xl font-heading text-4xl leading-tight text-deepInlet md:text-6xl">
            Request the Port Moody Buyer Guide
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slateText">
            Join the request list for the Port Moody Buyer Guide and ask for local buyer guidance now while the guide is being prepared.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="#request-buyer-guide">Request the guide</CTAButton>
            <CTAButton href="/contact" variant="secondary">Ask a buyer question</CTAButton>
            <CTAButton href="/buy" variant="ghost">Review buyer resources</CTAButton>
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

      <Section title="Who it is for">
        <div className="rounded-lg border border-softBorder bg-white p-6">
          <p className="text-sm leading-6 text-slateText">
            This guide is for first-time buyers, move-up buyers, relocation buyers, condo and townhouse buyers, and anyone comparing Port Moody areas before relying on listing copy alone.
          </p>
        </div>
      </Section>

      <Section id="request-buyer-guide" title="Request the Port Moody Buyer Guide" tone="white">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_0.85fr] lg:items-start">
          <div className="self-start rounded-lg border border-softBorder bg-mist p-6">
            <h2 className="font-heading text-2xl text-deepInlet">Request the buyer guide</h2>
            <p className="mt-3 text-sm leading-6 text-slateText">
              We will send the guide when it is ready. Use this form to join the request list and include what you are researching now.
            </p>
            <p className="mt-3 text-sm leading-6 text-slateText">
              If you need help before the guide is ready, ask for buyer guidance and share the neighbourhood, property type, building, complex, or listing you are comparing.
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slateText">
              <li>• The area or property type you are comparing</li>
              <li>• Any listing, building, or complex you want context on</li>
              <li>• Your timing and main decision question</li>
            </ul>
            <div className="mt-5">
              <CTAButton href="/contact" variant="secondary">Ask for buyer guidance now</CTAButton>
            </div>
          </div>
          <LeadForm
            formType="ask-question"
            leadType="buyer"
            ctaLabel="Request buyer guide"
            title="Request the Port Moody buyer guide"
            tags={["source:liveinportmoody", "intent:buyer-guide-request", "lead_type:buyer", "area:port-moody"]}
          />
        </div>
      </Section>
    </>
  );
}
