import { CTAButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Port Moody Featured Businesses",
  description:
    "Compatibility page for Port Moody featured businesses, business nominations, and local life context.",
  path: "/local-businesses",
});

const bridgeCards = [
  {
    title: "Featured Businesses",
    body: "The new hub for reviewed Port Moody business and organization features.",
    href: "/featured-businesses",
    cta: "Open the hub",
  },
  {
    title: "Local Life",
    body: "Use local context alongside neighbourhood, commute, parks, and daily-routine research.",
    href: "/local-life",
    cta: "Explore local life",
  },
  {
    title: "Suggest a business",
    body: "Send a public source and why the business matters to Port Moody residents.",
    href: "/contact",
    cta: "Send a suggestion",
  },
];

export default function LocalBusinessesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Local businesses</p>
          <h1 className="mt-4 font-heading text-4xl text-deepInlet md:text-5xl">
            Featured Businesses.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slateText">
            Local business content is organized under Featured Businesses, where each business is reviewed one at a time with verified public details and permission where needed.
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

      <Section title="Choose the next step">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
          {bridgeCards.map((card) => (
            <article key={card.title} className="p-6">
              <h2 className="font-heading text-2xl text-deepInlet">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slateText">{card.body}</p>
              <div className="mt-5">
                <CTAButton href={card.href} variant="secondary">{card.cta}</CTAButton>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
