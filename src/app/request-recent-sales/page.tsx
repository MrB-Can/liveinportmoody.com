import { CTAButton } from "@/components/cta-button";
import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Request Recent Port Moody Sales Context",
  description:
    "Request recent Port Moody sales context for buying or selling. Sold data availability depends on applicable rules, permissions, and professional context.",
  path: "/request-recent-sales",
});

export default function RequestRecentSalesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-14 md:py-18">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-emphasis">Market context request</p>
          <h1 className="max-w-4xl font-heading text-4xl leading-tight text-deepInlet md:text-6xl">
            Request recent sales context
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slateText">
            We can help you understand comparable sales where permitted. This is a request page for professional context, not a public sold-data display.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="#recent-sales-request">Request recent sales context</CTAButton>
            <CTAButton href="/contact" variant="secondary">Contact us</CTAButton>
            <CTAButton href="/listings" variant="ghost">View current listings</CTAButton>
          </div>
        </div>
      </section>

      <Section title="How recent sales context can help" tone="white">
        <div className="grid gap-4 md:grid-cols-3">
          {["Compare active listings with permitted sales context", "Understand property-type and neighbourhood context", "Prepare pricing or offer questions"].map((item) => (
            <div key={item} className="rounded-lg border border-softBorder bg-mist p-5 text-sm leading-6 text-slateText">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section id="recent-sales-request" title="Request Recent Sales Context">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
          <div className="rounded-lg border border-softBorder bg-white p-6">
            <h2 className="font-heading text-2xl text-deepInlet">Compliance-safe request</h2>
            <p className="mt-3 text-sm leading-6 text-slateText">
              Tell us the property type, neighbourhood, building, complex, or address range you are researching. We will respond with comparable-sales context where permitted and in the appropriate professional context.
            </p>
            <p className="mt-3 text-xs leading-5 text-slateText">
              Sold data availability depends on applicable rules, permissions, and professional context.
            </p>
            <div className="mt-5">
              <CTAButton href="/contact" variant="secondary">Ask through contact</CTAButton>
            </div>
          </div>
          <LeadForm
            formType="ask-question"
            leadType="local-question"
            ctaLabel="Request recent sales"
            title="Request recent sales context"
            tags={["source:liveinportmoody", "intent:recent-sales-request", "area:port-moody"]}
          />
        </div>
      </Section>
    </>
  );
}
