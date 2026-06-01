import { CTAButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Port Moody Featured Businesses",
  description:
    "Compatibility page for Port Moody featured businesses, business nominations, and local life context.",
  path: "/local-businesses",
});

export default function LocalBusinessesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Local businesses</p>
          <h1 className="mt-4 font-heading text-4xl text-deepInlet md:text-5xl">
            Local Businesses is now Featured Businesses.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slateText">
            We are organizing local business content under Featured Businesses so each business can be reviewed one
            at a time with verified public details and permission where needed.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="/featured-businesses">Go to Featured Businesses</CTAButton>
            <CTAButton href="/local-life" variant="secondary">Explore Local Life</CTAButton>
            <CTAButton href="/contact" variant="ghost">Suggest a business</CTAButton>
          </div>
        </div>
      </section>

      <Section title="Why the change?" tone="white" intro="This keeps the site useful and truthful: no invented business lists, scraped ratings, or unsupported local claims.">
        <div className="rounded-lg border border-softBorder bg-mist p-6">
          <p className="text-sm leading-6 text-slateText">
            Featured businesses will support neighbourhood and lifestyle decisions by showing real, reviewed local
            context. Until approved features are ready, use the nomination path to suggest businesses or community
            organizations worth reviewing.
          </p>
        </div>
      </Section>
    </>
  );
}
