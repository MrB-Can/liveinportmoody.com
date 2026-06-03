import Link from "next/link";
import { ImageHero } from "@/components/image-hero";
import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description: "Ask a Port Moody real estate question and get routed by buyer, seller, relocation, market, listing, or local-question intent.",
  path: "/contact",
});

const topicCards = [
  { label: "Buying in Port Moody", href: "/buy" },
  { label: "Selling in Port Moody", href: "/sell" },
  { label: "Neighbourhood guidance", href: "/neighbourhoods" },
  { label: "Building or complex questions", href: "/buildings" },
  { label: "Presales and new builds", href: "/presales" },
  { label: "Recent sales context", href: "/request-recent-sales" },
  { label: "Buyer or seller guide request", href: "/buyer-guide" },
  { label: "Local business or event suggestion", href: "/featured-businesses" },
];

export default function ContactPage() {
  return (
    <>
      <ImageHero
        imageSrc="/images/phase1/port-moody-forest-path.jpg"
        imageAlt="Forest trail in Port Moody with sunlight filtering through trees."
        title="Ask a Port Moody real estate question."
        subtitle="No pressure. Tell us what you are trying to figure out and we will point you in the right direction."
        primaryCta={{ label: "Send a question", href: "#contact-form" }}
      />

      <Section eyebrow="What can you ask?" title="Topics we can help with" tone="white">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {topicCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex items-center justify-between rounded-lg border border-softBorder bg-mist px-4 py-4 text-sm font-semibold text-deepInlet transition hover:border-forest hover:bg-white"
            >
              <span>{card.label}</span>
              <span className="ml-2 text-forest opacity-0 transition group-hover:opacity-100">→</span>
            </Link>
          ))}
        </div>
        <p className="mt-4 text-sm text-slateText">
          Not sure which category fits? Just send your question — we will route it to the right person.
        </p>
      </Section>

      <Section id="contact-form" title="Send a question" tone="sand">
        <div className="max-w-2xl">
          <LeadForm
            formType="ask-question"
            leadType="local-question"
            ctaLabel="Send question"
            title="What are you trying to figure out?"
            description="Share the area, building, property type, listing, or decision you are weighing. We respond personally."
            tags={["source:liveinportmoody", "intent:general-local-question", "area:port-moody"]}
          />
        </div>
      </Section>

      <Section title="Contact details" tone="white">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-softBorder bg-mist p-5">
            <p className="font-semibold text-deepInlet">Phone</p>
            <p className="mt-2 text-sm text-slateText">{siteConfig.publicPhone}</p>
          </div>
          <div className="rounded-lg border border-softBorder bg-mist p-5">
            <p className="font-semibold text-deepInlet">Email</p>
            <p className="mt-2 text-sm text-slateText">{siteConfig.publicEmail}</p>
          </div>
          <div className="rounded-lg border border-softBorder bg-mist p-5">
            <p className="font-semibold text-deepInlet">Leilani Fong, Personal Real Estate Corporation</p>
            <p className="mt-2 text-sm text-slateText">Listing strategy, pricing, negotiation, and client representation.</p>
          </div>
          <div className="rounded-lg border border-softBorder bg-mist p-5">
            <p className="font-semibold text-deepInlet">Paul Bennett</p>
            <p className="mt-2 text-sm text-slateText">Local research, media, neighbourhood context, and buyer guidance.</p>
          </div>
        </div>
      </Section>

      <Section title="Why ask us" tone="sand">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Licensed BC real estate guidance through eXp Realty.",
            "Port Moody-focused local research for neighbourhood, building, and complex questions.",
            "Verified-only public proof: no invented reviews, rankings, awards, or sold data.",
          ].map((item) => (
            <div key={item} className="rounded-lg border border-softBorder bg-white p-5 text-sm font-semibold leading-6 text-deepInlet">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="How your question is handled" intro="Your message is reviewed by context so the right follow-up can focus on buying, selling, relocation, market questions, listings, or local Port Moody guidance.">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Buyer questions routed to buyer guidance and local research",
            "Seller questions routed to pricing, preparation, and positioning",
            "Listing questions get neighbourhood and building context",
            "Strata questions get document review guidance",
            "Relocation questions get area-fit and lifestyle context",
            "Market questions get current local context without unsupported stats",
          ].map((item) => (
            <div key={item} className="rounded-lg border border-softBorder bg-white px-5 py-4 text-sm text-slateText">
              {item}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
