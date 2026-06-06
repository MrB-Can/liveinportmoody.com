import { Target, MapPin, FileSearch, BarChart2 } from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { TeamImagePlaceholder } from "@/components/team-image-placeholder";
import { TrustStrip } from "@/components/trust-strip";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Meet Leilani Fong and Paul Bennett",
  description:
    "Meet Leilani Fong and Paul Bennett, the people behind Live in Port Moody real estate guidance, local research, and property intelligence.",
  path: "/meet-us",
});

const roleCards = [
  {
    name: "Leilani Fong PREC",
    role: "Licensed listing agent, established credentials",
    body: "Leilani leads listing strategy, pricing, negotiation, transaction guidance, and client representation. She holds a Personal Real Estate Corporation and brings established real estate credentials and experience to every transaction.",
  },
  {
    name: "Paul Bennett",
    role: "Licensed REALTOR, buyer support, and local intelligence",
    body: "Paul is a licensed REALTOR with eXp Realty Canada, focused on client outreach, buyer support, and lead management alongside local research, neighbourhood context, and property due diligence.",
  },
];

const approachCards = [
  { Icon: Target, text: "Start with the decision, not just the listing." },
  { Icon: MapPin, text: "Compare neighbourhood, building, complex, and lifestyle fit." },
  { Icon: FileSearch, text: "Verify school, strata, trail, listing, and property-specific details before relying on them." },
  { Icon: BarChart2, text: "Use local context to support buying, selling, moving, and long-term planning." },
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

      <TrustStrip />

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
        <div className="grid gap-4 sm:grid-cols-2">
          {approachCards.map(({ Icon, text }) => (
            <div key={text} className="flex items-start gap-4 rounded-lg border border-softBorder bg-white p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest/10">
                <Icon className="h-4 w-4 text-forest" />
              </span>
              <p className="text-sm font-semibold leading-6 text-deepInlet">{text}</p>
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
