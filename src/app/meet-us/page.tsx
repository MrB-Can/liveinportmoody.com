import { CTAButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { TeamImagePlaceholder } from "@/components/team-image-placeholder";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Meet Leilani Fong and Paul Bennett",
  description:
    "Meet Leilani Fong and Paul Bennett, the people behind Live in Port Moody real estate guidance, local research, and property intelligence.",
  path: "/meet-us",
});

const roleCards = [
  {
    name: "Leilani Fong",
    role: "Licensed real estate expertise",
    body: "Leilani leads real estate representation, pricing strategy, negotiation, listing preparation, buyer guidance, offer strategy, and client decision support.",
  },
  {
    name: "Paul Bennett",
    role: "Local research and property intelligence",
    body: "Paul supports local research, data, analysis, media planning, renovation context, property due diligence, and Port Moody neighbourhood intelligence.",
  },
];

const approachCards = [
  "Start with the decision, not just the listing.",
  "Compare neighbourhood, building, complex, and lifestyle fit.",
  "Verify school, strata, trail, listing, and property-specific details before relying on them.",
  "Use local context to support buying, selling, moving, and long-term planning.",
];

const nextStepCards = [
  {
    title: "Buying",
    body: "Ask about neighbourhood fit, buildings, complexes, listings, and what to verify before writing.",
    href: "/buy",
    cta: "Buyer resources",
  },
  {
    title: "Selling",
    body: "Ask about positioning, preparation, pricing context, and how to make the property easier to understand.",
    href: "/sell",
    cta: "Seller resources",
  },
  {
    title: "Local questions",
    body: "Ask about local life, relocation, trails, schools by address, and area-fit trade-offs.",
    href: "/contact",
    cta: "Ask a question",
  },
];

export default function MeetUsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Meet Us</p>
          <h1 className="mt-4 font-heading text-4xl text-deepInlet md:text-5xl">
            Meet Leilani and Paul.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slateText">
            Live in Port Moody combines licensed real estate representation with local research, property analysis,
            media, and community context for clearer Port Moody decisions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="/contact">Contact Paul and Leilani</CTAButton>
            <CTAButton href="/raving-fans" variant="secondary">Raving Fans</CTAButton>
          </div>
        </div>
      </section>

      <Section title="Leilani Fong and Paul Bennett" tone="white">
        <TeamImagePlaceholder />
      </Section>

      <Section title="How we work together" tone="white">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white md:grid md:grid-cols-2 md:divide-x md:divide-y-0">
          {roleCards.map((person) => (
            <article key={person.name} className="p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emphasis">{person.role}</p>
              <h2 className="mt-3 font-heading text-3xl text-deepInlet">{person.name}</h2>
              <p className="mt-3 text-sm leading-6 text-slateText">{person.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Why Port Moody" intro="The site is built around local resident perspective, practical real estate decisions, and the details people need before choosing an area or property.">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white sm:grid sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {approachCards.map((item) => (
            <div key={item} className="p-5 text-sm font-semibold text-deepInlet">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Start with the question you have" tone="white">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
          {nextStepCards.map((card) => (
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

      <Section title="No stock proof" tone="sand" intro="Approved photos, reviews, recognition, and client stories appear only when real source material is available.">
        <CTAButton href="/contact">Ask a Port Moody question</CTAButton>
      </Section>
    </>
  );
}
