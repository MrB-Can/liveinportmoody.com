import { CTAButton } from "@/components/cta-button";
import { LeadForm } from "@/components/lead-form";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Port Moody Local Businesses",
  description:
    "A Port Moody local business feature hub for lifestyle context, community groups, and business nominations.",
  path: "/local-businesses",
});

const categories = [
  "Coffee and restaurants",
  "Breweries",
  "Fitness and wellness",
  "Family and kids",
  "Services",
  "Community groups",
];

const featureTypes = [
  {
    title: "Everyday local stops",
    body: "Coffee shops, restaurants, breweries, fitness studios, grocers, clinics, services, and family-friendly places that shape daily routines.",
  },
  {
    title: "Neighbourhood lifestyle stories",
    body: "Local context that helps buyers compare village convenience, weekend habits, walkability, transit access, parks, trails, and community feel.",
  },
  {
    title: "Community groups and initiatives",
    body: "Organizations, volunteer groups, arts, recreation, youth programs, and local initiatives that can be profiled after details and permission are confirmed.",
  },
];

const nominationSteps = [
  "Send the business or organization name, website or public profile, and the Port Moody area it serves.",
  "Include why it matters to residents, buyers, sellers, or people considering a move to Port Moody.",
  "We review public details, permission needs, and whether the feature is useful community context before publishing.",
];

export default function LocalBusinessesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Local businesses</p>
          <h1 className="mt-4 font-heading text-4xl text-deepInlet md:text-5xl">
            Port Moody local business features
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slateText">
            A local feature hub for business stories, community groups, and lifestyle context that helps people
            understand what day-to-day life in Port Moody feels like.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="/contact">Suggest a local business</CTAButton>
            <CTAButton href="/explore" variant="ghost">Explore Port Moody</CTAButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <div>
            <h2 className="font-heading text-3xl text-deepInlet">Why local businesses matter</h2>
            <p className="mt-4 text-sm leading-6 text-slateText">
              Port Moody lifestyle is shaped by walkable villages, small businesses, breweries, cafes, services,
              family activities, recreation, and community groups. Business features are useful because they show
              how an area works between showings, school runs, workdays, and weekends.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {categories.map((category) => (
              <div key={category} className="rounded-lg border border-softBorder bg-white p-5">
                <p className="font-semibold text-deepInlet">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warmSand px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl text-deepInlet">What kinds of businesses can be featured</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slateText">
            We are collecting approved examples that can help residents and future residents understand Port Moody.
            Profiles will use verified public details and permission where needed.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {featureTypes.map((card) => (
              <article key={card.title} className="rounded-lg border border-softBorder bg-white/85 p-6">
                <h3 className="font-heading text-xl text-deepInlet">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slateText">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <h2 className="font-heading text-3xl text-deepInlet">How nominations are reviewed</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {nominationSteps.map((step, index) => (
            <div key={step} className="rounded-lg border border-softBorder bg-white p-5 text-sm leading-6 text-slateText">
              <span className="mb-3 grid h-8 w-8 place-items-center rounded-full bg-deepInlet text-sm font-semibold text-white">{index + 1}</span>
              {step}
            </div>
          ))}
        </div>
      </section>

      <section id="nominate-business" className="mx-auto grid max-w-5xl gap-8 px-5 py-12 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Nominate or partner</p>
          <h2 className="mt-3 font-heading text-3xl text-deepInlet">Suggest a Port Moody business or community group.</h2>
          <p className="mt-4 text-sm leading-6 text-slateText">
            Use this form to suggest a feature. Submissions are reviewed before anything is published.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="/contact">Contact us</CTAButton>
            <CTAButton href="/explore" variant="ghost">Back to Explore</CTAButton>
          </div>
        </div>
        <div id="partner-feature">
          <LeadForm
            formType="ask-question"
            leadType="local-question"
            title="Nominate a local business"
            description="Tell us who should be considered and what should be verified."
            ctaLabel="Send nomination"
            messageLabel="Business, group, or feature idea"
            tags={["source:liveinportmoody", "intent:local-business-nomination", "area:port-moody"]}
          />
        </div>
      </section>
    </>
  );
}
