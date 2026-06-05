import { CTAButton } from "@/components/cta-button";
import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";
import { Trees, School, Footprints, Zap, Calendar, Store } from "lucide-react";

export const metadata = createMetadata({
  title: "Port Moody Local Life",
  description:
    "A local life hub for Port Moody parks, schools, trails, activities, events, featured businesses, and real estate decision context.",
  path: "/local-life",
});

const localLifeSections = [
  {
    title: "Parks",
    body: "Use parks as part of an area-fit conversation: daily walks, weekend routines, playgrounds, waterfront access, and how close those amenities are to the specific home you are considering.",
    icon: Trees,
  },
  {
    title: "Schools",
    body: "School planning should be verified by exact address through the applicable official district or school authority before relying on any assumption.",
    icon: School,
  },
  {
    title: "Trails",
    body: "Trail access is a major part of Port Moody life, but current trail conditions, access rules, and closures should be checked through official municipal or regional sources.",
    icon: Footprints,
  },
  {
    title: "Activities",
    body: "Activities can include recreation, waterfront routines, family programs, breweries, community groups, arts, sports, and everyday errands that shape how an area feels.",
    icon: Zap,
  },
  {
    title: "Events",
    body: "Events are published when dates, hosts, public sources, and relevance to Port Moody residents are confirmed.",
    icon: Calendar,
  },
  {
    title: "Featured Businesses",
    body: "Local businesses will be reviewed one at a time with verified public details and permission where needed.",
    icon: Store,
  },
];

const officialSources = [
  {
    title: "Schools",
    body: "Use official school district or school authority lookup tools for address-specific school information.",
    icon: School,
  },
  {
    title: "Parks and trails",
    body: "Use City of Port Moody, Metro Vancouver, or other official park sources for current access, rules, and closures.",
    icon: Trees,
  },
  {
    title: "Events",
    body: "Use organizer pages or official public calendars before relying on event dates, locations, or registration details.",
    icon: Calendar,
  },
];

const decisionCards = [
  {
    title: "For buyers",
    body: "Use local life context to compare daily routines, commute patterns, walkability, and what you may want to verify before writing.",
  },
  {
    title: "For sellers",
    body: "Use lifestyle context to explain the practical appeal of a home without overstating amenities, schools, or events.",
  },
  {
    title: "For relocation",
    body: "Use this hub to frame local questions before narrowing to neighbourhoods, buildings, complexes, or listings.",
  },
];

export default function LocalLifePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Local Life</p>
          <h1 className="mt-4 font-heading text-4xl text-deepInlet md:text-5xl">
            Port Moody local life, organized for real estate decisions.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slateText">
            Parks, schools, trails, activities, events, and local businesses all affect how a neighbourhood feels.
            This hub keeps that context useful without replacing property-specific due diligence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="/neighbourhoods">Compare communities</CTAButton>
            <CTAButton href="/featured-businesses" variant="secondary">Featured businesses</CTAButton>
            <CTAButton href="/contact" variant="ghost">Ask a local question</CTAButton>
          </div>
        </div>
      </section>

      <Section title="What shapes daily life here" intro="Start with lifestyle fit, then verify exact details for the property, address, school, trail, or event you care about." tone="white">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white md:grid md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-3">
          {localLifeSections.map(({ title, body, icon: Icon }) => (
            <article key={title} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon className="w-6 h-6 text-forest flex-shrink-0" />
                <h2 className="font-heading text-2xl text-deepInlet">{title}</h2>
              </div>
              <p className="text-sm leading-6 text-slateText">{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Verification-first local context">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
          {officialSources.map(({ title, body, icon: Icon }) => (
            <div key={title} className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-5 h-5 text-forest flex-shrink-0" />
                <p className="font-semibold text-deepInlet">{title}</p>
              </div>
              <p className="text-sm leading-6 text-slateText">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Use local life with a real estate lens" tone="white">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
          {decisionCards.map((card) => (
            <article key={card.title} className="p-6">
              <h2 className="font-heading text-2xl text-deepInlet">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slateText">{card.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="suggest-local-life" title="Suggest local context" tone="sand" intro="Send a park, trail, activity, business, or event idea for review. Submissions are checked before anything is published.">
        <div className="max-w-2xl">
          <LeadForm
            formType="ask-question"
            leadType="local-question"
            title="Suggest something local"
            description="Tell us what should be reviewed and where the public verification source can be found."
            ctaLabel="Send suggestion"
            messageLabel="Local life suggestion"
            messagePlaceholder="Share the park, trail, business, activity, event, or source to review."
            tags={["source:liveinportmoody", "intent:local-life-suggestion", "area:port-moody"]}
          />
        </div>
      </Section>
    </>
  );
}
