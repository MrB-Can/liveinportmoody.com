import Link from "next/link";
import { MessageCircle, Search, CheckCircle2 } from "lucide-react";
import { ImageHero } from "@/components/image-hero";
import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site";
import { TrustStrip } from "@/components/trust-strip";
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

      <TrustStrip />

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

      <Section title="What happens next" tone="white">
        <div className="flex flex-col gap-0 sm:flex-row">
          {[
            { step: 1, Icon: MessageCircle, label: "Send your question", body: "Describe the area, building, property, or decision you are weighing." },
            { step: 2, Icon: Search, label: "We review context", body: "Your question is matched to local neighbourhood, building, and market context." },
            { step: 3, Icon: CheckCircle2, label: "Practical next step", body: "You receive a focused, personally written response — not a form email." },
          ].map(({ step, Icon, label, body }, i, arr) => (
            <div key={step} className="relative flex flex-1 flex-col items-start gap-3 rounded-lg border border-softBorder bg-mist p-6 sm:rounded-none sm:border-r-0 last:sm:border-r sm:first:rounded-l-lg sm:last:rounded-r-lg">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-white text-sm font-bold">
                {step}
              </span>
              <Icon className="h-5 w-5 text-forest" />
              <div>
                <p className="font-semibold text-deepInlet">{label}</p>
                <p className="mt-1 text-sm leading-6 text-slateText">{body}</p>
              </div>
              {i < arr.length - 1 && (
                <span className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-softBorder sm:block text-xl">›</span>
              )}
            </div>
          ))}
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
