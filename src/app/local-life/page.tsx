import { CTAButton } from "@/components/cta-button";
import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

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
  },
  {
    title: "Schools",
    body: "School planning should be verified by exact address through the applicable official district or school authority before relying on any assumption.",
  },
  {
    title: "Trails",
    body: "Trail access is a major part of Port Moody life, but current trail conditions, access rules, and closures should be checked through official municipal or regional sources.",
  },
  {
    title: "Activities",
    body: "Activities can include recreation, waterfront routines, family programs, breweries, community groups, arts, sports, and everyday errands that shape how an area feels.",
  },
  {
    title: "Events",
    body: "Events will be added when dates, hosts, public sources, and relevance to Port Moody residents are confirmed.",
  },
  {
    title: "Featured Businesses",
    body: "Local businesses will be reviewed one at a time with verified public details and permission where needed.",
  },
];

const officialSources = [
  {
    title: "Schools",
    body: "Use official school district or school authority lookup tools for address-specific school information.",
  },
  {
    title: "Parks and trails",
    body: "Use City of Port Moody, Metro Vancouver, or other official park sources for current access, rules, and closures.",
  },
  {
    title: "Events",
    body: "Use organizer pages or official public calendars before relying on event dates, locations, or registration details.",
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
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {localLifeSections.map((item) => (
            <article key={item.title} className="rounded-lg border border-softBorder bg-mist p-6">
              <h2 className="font-heading text-2xl text-deepInlet">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slateText">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Verification-first local context">
        <div className="grid gap-4 md:grid-cols-3">
          {officialSources.map((item) => (
            <div key={item.title} className="rounded-lg border border-softBorder bg-white p-5">
              <p className="font-semibold text-deepInlet">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-slateText">{item.body}</p>
            </div>
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
