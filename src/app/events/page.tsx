import { CTAButton } from "@/components/cta-button";
import { LeadForm } from "@/components/lead-form";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Port Moody Events Hub",
  description:
    "A Port Moody events hub for verified community, seasonal, family, real estate, and local event suggestions.",
  path: "/events",
});

const eventGroups = [
  {
    title: "Family",
    body: "Family-friendly events are useful for buyers comparing routines, weekends, schools, parks, and community fit.",
  },
  {
    title: "Outdoors",
    body: "Outdoor events can help people understand waterfront, park, recreation, and seasonal lifestyle patterns after details are verified.",
  },
  {
    title: "Markets",
    body: "Markets and seasonal gatherings can shape local routines when host, date, location, and public source details are confirmed.",
  },
  {
    title: "Arts and culture",
    body: "Arts, culture, civic, and community gatherings can be included when the organizer and public event details are confirmed.",
  },
  {
    title: "Real estate and community events",
    body: "Local seminars, open-house style education, market sessions, or neighbourhood events can be included after details are confirmed.",
  },
];

const reviewItems = [
  "Host or organizer",
  "Date and location",
  "Public source or registration link",
  "Whether the event is open to the public",
  "Why it is relevant to Port Moody residents or people considering a move",
  "Any change risk, capacity limits, or source details that should be verified",
];

export default function EventsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Events</p>
          <h1 className="mt-4 font-heading text-4xl text-deepInlet md:text-5xl">Port Moody events hub</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slateText">
            A local events page for verified community, seasonal, family, and real estate/community events.
            Current dates and event details will be listed only after they are checked.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="#suggest-event">Suggest a Port Moody event</CTAButton>
            <CTAButton href="/local-life" variant="secondary">Explore Local Life</CTAButton>
            <CTAButton href="/explore" variant="ghost">Explore Port Moody</CTAButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          {eventGroups.map((group) => (
            <article key={group.title} className="rounded-lg border border-softBorder bg-white p-6">
              <h2 className="font-heading text-2xl text-deepInlet">{group.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slateText">{group.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-warmSand px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-lg border border-dashed border-softBorder bg-white/85 p-6">
            <h2 className="font-heading text-3xl text-deepInlet">Request updates or suggest an event</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slateText">
              We are collecting verified event details from public sources and organizers. This page avoids stale
              calendars, unconfirmed hosts, and invented event schedules.
            </p>
            <div className="mt-5">
              <CTAButton href="/contact" variant="secondary">Suggest an event</CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <h2 className="font-heading text-3xl text-deepInlet">What to include when suggesting an event</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {reviewItems.map((item) => (
            <div key={item} className="rounded-lg border border-softBorder bg-white p-5 text-sm font-semibold text-deepInlet">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="suggest-event" className="mx-auto grid max-w-5xl gap-8 px-5 py-12 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Suggest an event</p>
          <h2 className="mt-3 font-heading text-3xl text-deepInlet">Send an event for review.</h2>
          <p className="mt-4 text-sm leading-6 text-slateText">
            Share the host, date, location, public source, and why it matters to Port Moody residents.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="/contact">Contact us</CTAButton>
            <CTAButton href="/explore" variant="ghost">Back to Explore</CTAButton>
          </div>
        </div>
        <LeadForm
          formType="ask-question"
          leadType="local-question"
          title="Submit or suggest an event"
          description="Events are reviewed before being added."
          ctaLabel="Send event suggestion"
          messageLabel="Event details and verification source"
          tags={["source:liveinportmoody", "intent:event-suggestion", "area:port-moody"]}
        />
      </section>
    </>
  );
}
