import { CTAButton } from "@/components/cta-button";
import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";
import { UtensilsCrossed, Wrench, Heart, Dumbbell, Home, ShoppingBag } from "lucide-react";

export const metadata = createMetadata({
  title: "Port Moody Featured Businesses",
  description:
    "A Port Moody featured business hub with nomination structure, review standards, and no unverified business listings.",
  path: "/featured-businesses",
});

const categories = [
  { label: "Cafes and restaurants", icon: UtensilsCrossed },
  { label: "Services", icon: Wrench },
  { label: "Family and local activities", icon: Heart },
  { label: "Fitness and wellness", icon: Dumbbell },
  { label: "Home and renovation", icon: Home },
  { label: "Local shopping", icon: ShoppingBag },
];

const reviewSteps = [
  "Review one business or organization at a time.",
  "Confirm public details, location, website, and relevance to Port Moody residents.",
  "Get permission where a feature uses non-public story details, quotes, or images.",
  "Publish only when the feature helps residents, buyers, sellers, or people considering a move.",
];

export default function FeaturedBusinessesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Featured Businesses</p>
          <h1 className="mt-4 font-heading text-4xl text-deepInlet md:text-5xl">
            Port Moody featured businesses, reviewed one at a time.
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slateText">
            Local businesses help people understand daily life in Port Moody. This hub accepts suggestions and explains
            the review standard for public business features.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CTAButton href="#suggest-feature">Suggest a business</CTAButton>
            <CTAButton href="/local-life" variant="secondary">Explore local life</CTAButton>
            <CTAButton href="/contact" variant="ghost">Contact Paul and Leilani</CTAButton>
          </div>
        </div>
      </section>

      <Section title="Categories we review" intro="Business features are selected only when details are verified and the feature is useful to the local decision context." tone="white">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white sm:grid sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
          {categories.map(({ label, icon: Icon }) => (
            <div key={label} className="p-5 flex items-center gap-3">
              <Icon className="w-6 h-6 text-forest flex-shrink-0" />
              <span className="font-semibold text-deepInlet">{label}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="How featured businesses are reviewed">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white md:grid md:grid-cols-4 md:divide-x md:divide-y-0">
          {reviewSteps.map((step, index) => (
            <div key={step} className="p-5 text-sm leading-6 text-slateText">
              <span className="mb-3 grid h-8 w-8 place-items-center rounded-full bg-deepInlet text-sm font-semibold text-white">{index + 1}</span>
              {step}
            </div>
          ))}
        </div>
      </Section>

      <Section id="suggest-feature" title="Suggest a featured business" tone="sand" intro="Use this request form to nominate a business, organization, or local activity for review. Suggestions are evaluated before any public feature is created.">
        <div className="max-w-2xl">
          <LeadForm
            formType="ask-question"
            leadType="local-question"
            title="Nominate a business"
            description="Send the business name, public source, category, and why it matters to Port Moody residents or real estate decisions."
            ctaLabel="Send business suggestion"
            messageLabel="Business nomination"
            messagePlaceholder="Business name, website or public source, category, Port Moody area, and why it should be reviewed."
            tags={["source:liveinportmoody", "intent:featured_business_suggestion", "area:port-moody"]}
          />
        </div>
      </Section>
    </>
  );
}
