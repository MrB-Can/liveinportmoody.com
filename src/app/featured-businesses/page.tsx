import Image from "next/image";
import { CTAButton } from "@/components/cta-button";
import { LeadForm } from "@/components/lead-form";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";
import { UtensilsCrossed, Wrench, Heart, Dumbbell, Home, ShoppingBag, MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

export const metadata = createMetadata({
  title: "Port Moody Featured Businesses",
  description:
    "A Port Moody featured business hub with nomination structure, review standards, and no unverified business listings.",
  path: "/featured-businesses",
});

// All fields sourced from rootdowntreecompany.ca (verified against raw HTML) and
// content/settings/business.json in the website-rdtc.ca repo. Nothing is invented.
const rootDownServices = [
  { name: "Tree Removal", description: "Safe, efficient removal of trees of any size, including hazardous and hard-to-access trees." },
  { name: "Tree Pruning & Trimming", description: "Expert pruning to improve tree health, safety, and appearance while protecting your property." },
  { name: "Stump Grinding & Removal", description: "Complete stump removal to reclaim your yard and eliminate trip hazards and pest habitats." },
  { name: "24/7 Emergency Tree Service", description: "Rapid response to storm damage, fallen trees, and hazardous situations any time, day or night." },
  { name: "Land Clearing", description: "Complete land clearing for construction, development, and property improvement projects." },
  { name: "Certified Arborist Reports", description: "Professional tree assessments and reports for permits, insurance, real estate, and legal matters." },
];

const rootDownServiceArea =
  "Port Moody, Coquitlam, Port Coquitlam, Anmore, Belcarra, Pitt Meadows, Maple Ridge, New Westminster, Burnaby, Surrey, Delta, and Langley";

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

      <Section title="Featured business" intro="The first reviewed feature on this page.">
        <article className="rounded-lg border border-softBorder bg-white p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <div>
              <Image
                src="/images/featured-businesses/root-down/paul-rdtc.webp"
                alt="Paul Bennett of Root Down Tree Company standing on a large tree stump with a chainsaw."
                width={900}
                height={600}
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <h3 className="font-heading text-2xl text-deepInlet md:text-3xl">Root Down Tree Company</h3>
              <p className="mt-2 text-base font-semibold text-forest">Port Moody &amp; Tri-Cities Tree Removal Specialists</p>
              <p className="mt-4 text-sm leading-6 text-slateText">
                Safe, technical tree work for homeowners, strata properties, and commercial sites across Port Moody, Coquitlam, Port Coquitlam, Anmore, Belcarra, and Greater Vancouver.
              </p>
              <p className="mt-3 text-sm leading-6 text-slateText">
                Founded and run by Paul Bennett, who is also your realtor on this site.
              </p>

              <ul className="mt-6 grid gap-3">
                {rootDownServices.map((service) => (
                  <li key={service.name} className="flex gap-3">
                    <Wrench className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest" aria-hidden="true" />
                    <span className="text-sm leading-6 text-slateText">
                      <span className="font-semibold text-deepInlet">{service.name}.</span> {service.description}
                    </span>
                  </li>
                ))}
              </ul>

              <dl className="mt-6 grid gap-3 border-t border-softBorder pt-6 text-sm text-slateText">
                <div className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest" aria-hidden="true" />
                  <span><span className="font-semibold text-deepInlet">Service area:</span> {rootDownServiceArea}.</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest" aria-hidden="true" />
                  <span>
                    <span className="font-semibold text-deepInlet">Phone:</span>{" "}
                    <a href="tel:+17789999511" className="text-forest hover:underline">778-999-9511</a>
                  </span>
                </div>
                <div className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest" aria-hidden="true" />
                  <span>
                    <span className="font-semibold text-deepInlet">Email:</span>{" "}
                    <a href="mailto:paul@rdtc.ca" className="text-forest hover:underline">paul@rdtc.ca</a>
                  </span>
                </div>
                <div className="flex gap-3">
                  <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-forest" aria-hidden="true" />
                  <span><span className="font-semibold text-deepInlet">Hours:</span> Monday to Friday 7:00 AM to 6:00 PM. Saturday 8:00 AM to 4:00 PM. Sunday closed.</span>
                </div>
              </dl>

              <div className="mt-6">
                <a
                  href="https://rootdowntreecompany.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit the Root Down Tree Company website, opens in a new tab"
                  className="inline-flex min-h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-deepInlet px-4 py-2 text-sm font-semibold text-white transition hover:bg-forest"
                >
                  Visit rootdowntreecompany.ca
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </Section>

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
            formType="nominate-a-business"
            leadType="local-question"
            title="Nominate a business"
            description="Send the business name, public source, category, and why it matters to Port Moody residents or real estate decisions."
            ctaLabel="Send business suggestion"
            messageLabel="Business nomination"
            messagePlaceholder="Business name, website or public source, category, Port Moody area, and why it should be reviewed."
            tags={["source:liveinportmoody", "intent:featured_business_suggestion", "community-contribution-no-opportunity", "area:port-moody"]}
          />
        </div>
      </Section>
    </>
  );
}
