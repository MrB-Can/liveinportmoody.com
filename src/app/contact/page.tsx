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

export default function ContactPage() {
  return (
    <>
      <ImageHero imageSrc="/images/phase1/port-moody-forest-path.jpg" imageAlt="Forest trail in Port Moody with sunlight filtering through trees." title="Ask a Port Moody real estate question." subtitle="No pressure. Tell us what you are trying to figure out and we will point you in the right direction." primaryCta={{ label: "Send a question", href: "#contact-form" }} />
      <Section title="Contact form" tone="sand">
        <div id="contact-form" className="max-w-2xl">
          <LeadForm
            formType="ask-question"
            leadType="local-question"
            ctaLabel="Send question"
            title="What are you trying to figure out?"
            tags={["source:liveinportmoody", "intent:general-local-question", "area:port-moody"]}
          />
        </div>
      </Section>
      <Section title="Contact methods placeholder" tone="white">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-softBorder bg-mist p-5"><p className="font-semibold text-deepInlet">Phone</p><p className="mt-2 text-sm text-slateText">{siteConfig.publicPhone}</p></div>
          <div className="rounded-lg border border-softBorder bg-mist p-5"><p className="font-semibold text-deepInlet">Email</p><p className="mt-2 text-sm text-slateText">{siteConfig.publicEmail}</p></div>
        </div>
      </Section>
      <Section title="Buyer/seller/relocation routing explanation" intro="Form submissions include form type, lead type, page path, CTA label, tags, and attribution fields so GHL can route buyer, seller, relocation, market, and local-question inquiries." />
    </>
  );
}
