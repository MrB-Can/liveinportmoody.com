import { CTAButton } from "@/components/cta-button";
import { Section } from "@/components/section";
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
            <CTAButton href="/accolades" variant="ghost">Accolades</CTAButton>
          </div>
        </div>
      </section>

      <Section title="How we work together" tone="white">
        <div className="grid gap-5 md:grid-cols-2">
          {roleCards.map((person) => (
            <article key={person.name} className="rounded-lg border border-softBorder bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emphasis">{person.role}</p>
              <h2 className="mt-3 font-heading text-3xl text-deepInlet">{person.name}</h2>
              <p className="mt-3 text-sm leading-6 text-slateText">{person.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Why Port Moody" intro="The site is built around local resident perspective, practical real estate decisions, and the details people need before choosing an area or property.">
        <div className="grid gap-3 sm:grid-cols-2">
          {approachCards.map((item) => (
            <div key={item} className="rounded-lg border border-softBorder bg-white p-5 text-sm font-semibold text-deepInlet">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="No stock proof" tone="sand" intro="Approved photos, reviews, recognition, and client stories can be added later when real source material is available.">
        <CTAButton href="/contact">Ask a Port Moody question</CTAButton>
      </Section>
    </>
  );
}
