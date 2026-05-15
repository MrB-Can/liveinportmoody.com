import { ImageHero } from "@/components/image-hero";
import { LeadForm } from "@/components/lead-form";
import { ResourceCard } from "@/components/resource-card";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Port Moody Real Estate Resources",
  description: "Simple Phase 1 resource cards for Port Moody buyers, sellers, relocation planning, market notes, and local questions.",
  path: "/resources",
});

const resources = [
  ["Buyer Decision Checklist", "A web-based starting point for comparing Port Moody property types, commute patterns, strata considerations, and lifestyle trade-offs.", "Request checklist", "/images/phase1/port-moody-hillside-homes.jpg", "Port Moody hillside homes framed by trees with the distant skyline in the background."],
  ["Seller Prep Checklist", "A practical outline for preparation, pricing discussion, media planning, buyer positioning, and launch readiness.", "Request checklist", "/images/phase1/port-moody-residential-greenery.jpg", "Port Moody residential homes partly framed by mature green trees."],
  ["Moving to Port Moody Starter Guide", "A relocation starter resource for lifestyle, schools, trails, SkyTrain, hillsides, and neighbourhood feel.", "Request guide", "/images/phase1/port-moody-forest-path.jpg", "Forest trail in Port Moody with sunlight filtering through trees."],
  ["Market Notes Signup", "Monthly Port Moody market context when the first verified note is ready after launch.", "Sign up", "/images/phase1/port-moody-regional-view.jpg", "View from Port Moody toward the Metro Vancouver skyline with trees and hillside homes in the foreground."],
];

export default function ResourcesPage() {
  return (
    <>
      <ImageHero imageSrc="/images/hero/port-moody-hero-spring.jpg" imageAlt="Spring view across Burrard Inlet in Port Moody with fresh green branches, calm water, and snow-capped mountains." title="Port Moody resources for better real estate decisions." subtitle="Phase 1 includes simple web-based resources and request forms. PDFs are not generated until final content is supplied." primaryCta={{ label: "Request a resource", href: "#resource-form" }} secondaryCta={{ label: "Ask a local question", href: "/contact" }} />
      <Section title="Resource cards" tone="white">
        <div className="grid gap-5 md:grid-cols-2">
          {resources.map(([title, description, cta, imageSrc, imageAlt]) => <ResourceCard key={title} title={title} description={description} cta={cta} imageSrc={imageSrc} imageAlt={imageAlt} />)}
        </div>
      </Section>
      <Section title="Ask a local question CTA" intro="Have a Port Moody real estate question that does not fit a checklist? Send it through and we will route it by buyer, seller, relocation, market, or local-question intent." />
      <Section title="Resource download request" tone="sand">
        <div id="resource-form" className="max-w-2xl">
          <LeadForm formType="resource-download" leadType="resource" ctaLabel="Request resource" title="Request a Phase 1 resource" resourceName="Phase 1 resource request" messageLabel="Which resource do you want?" />
        </div>
      </Section>
    </>
  );
}
