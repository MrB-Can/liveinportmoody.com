import { CTAButton } from "@/components/cta-button";
import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata(
  {
    title: "Port Moody Buyer Guide",
    description:
      "Request the Port Moody buyer guide for neighbourhood fit, property types, listings, strata documents, offer preparation, and local buyer decision-making.",
    path: "/buyer-guide",
  },
  { robots: { index: false, follow: true } }
);

const guideCovers = [
  "How to compare Port Moody neighbourhoods by lifestyle, commute, property type, and trade-offs",
  "How condos, townhouses, and detached homes differ in risk, documents, and resale considerations",
  "What to verify before relying on a listing",
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
            Get the Port Moody buyer guide
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slateText">
            A first-version guide request page for buyers comparing Port Moody neighbourhoods, listings, property types, buildings, complexes, and offer decisions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="#request-buyer-guide">Request the guide</CTAButton>
            <CTAButton href="/contact" variant="secondary">Ask a buyer question</CTAButton>
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

      <Section id="request-buyer-guide" title="Download/request form placeholder" tone="white">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-lg border border-softBorder bg-mist p-6">
            <h2 className="font-heading text-2xl text-deepInlet">Request the buyer guide</h2>
            <p className="mt-3 text-sm leading-6 text-slateText">
              The downloadable version is being prepared. Use this request form for now and include what you are researching.
            </p>
            <div className="mt-5">
              <CTAButton href="/contact" variant="secondary">Use contact page instead</CTAButton>
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
