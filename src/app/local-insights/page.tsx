import { CTAButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";
import { Map, Building2, Leaf, DollarSign, HelpCircle, CheckCircle2, AlertCircle, Users } from "lucide-react";

export const metadata = createMetadata({
  title: "Port Moody Local Insights",
  description:
    "Local Port Moody insights for real estate decisions, including neighbourhood fit, buildings, complexes, local life, and verification-first research.",
  path: "/local-insights",
});

const insightCards = [
  {
    title: "Neighbourhood fit",
    body: "Compare walkability, housing type, trails, transit, and daily routines before narrowing to properties.",
    href: "/neighbourhoods",
    cta: "Compare communities",
    icon: Map,
  },
  {
    title: "Buildings and complexes",
    body: "Use preview guides to frame strata questions, location trade-offs, buyer fit, and what to verify before writing.",
    href: "/buildings",
    cta: "Compare buildings",
    icon: Building2,
  },
  {
    title: "Local life",
    body: "Use parks, schools, trails, activities, events, and businesses as context, then verify exact address-specific details.",
    href: "/local-life",
    cta: "Explore local life",
    icon: Leaf,
  },
  {
    title: "Buying and selling",
    body: "Connect local context to pricing, preparation, offer strategy, and long-term real estate decisions.",
    href: "/resources",
    cta: "Browse resources",
    icon: DollarSign,
  },
];

const verificationPrompts = [
  { text: "What does this change about the shortlist?", icon: HelpCircle },
  { text: "Which detail must be verified by exact address?", icon: CheckCircle2 },
  { text: "What trade-off is easy to miss online?", icon: AlertCircle },
  { text: "Who should confirm the technical or professional detail?", icon: Users },
];

export default function LocalInsightsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Local insights</p>
          <h1 className="mt-4 font-heading text-4xl text-deepInlet md:text-5xl">
            Local Port Moody context for better real estate decisions.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slateText">
            Local insight should help you choose, compare, and verify. This page connects neighbourhoods,
            buildings, complexes, local life, and real estate guidance without adding unverified claims.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="/contact">Ask a local question</CTAButton>
            <CTAButton href="/listings" variant="secondary">View Port Moody listings</CTAButton>
          </div>
        </div>
      </section>

      <Section title="Start with the decision you are making" tone="white">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white md:grid md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-3">
          {insightCards.map(({ title, body, href, cta, icon: Icon }) => (
            <article key={title} className="flex min-h-64 flex-col p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-6 h-6 text-forest flex-shrink-0" />
                <h2 className="font-heading text-2xl text-deepInlet">{title}</h2>
              </div>
              <p className="flex-1 text-sm leading-6 text-slateText">{body}</p>
              <div className="mt-5">
                <CTAButton href={href} variant="secondary">{cta}</CTAButton>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="How to use local insight safely">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white sm:grid sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {verificationPrompts.map(({ text, icon: Icon }) => (
            <div key={text} className="p-5 flex items-start gap-3">
              <Icon className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
              <p className="text-sm font-semibold text-deepInlet">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <CTAButton href="/contact" variant="secondary">Ask a local question</CTAButton>
        </div>
      </Section>
    </>
  );
}
