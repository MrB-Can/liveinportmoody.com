import { ImageHero } from "@/components/image-hero";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Terms and Real Estate Disclaimer",
  description: "Terms of use and real estate disclaimer for Live in Port Moody.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <ImageHero
        imageSrc="/hero-legal.png"
        title="Terms and Real Estate Disclaimer"
        subtitle="Plain-language terms for using Live in Port Moody and understanding the limits of website information."
      />
      <Section title="Terms and Real Estate Disclaimer" tone="white" intro={`Last updated: May 4, 2026. ${siteConfig.name} is operated by ${siteConfig.realtors}, licensed realtors with ${siteConfig.brokerageName}.`}>
        <div className="max-w-3xl space-y-8 text-sm leading-7 text-slateText">
          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-deepInlet">Use of this website</h2>
            <p>This website provides general Port Moody real estate, relocation, lifestyle, market, and property-planning information. By using the site, you agree to use it lawfully and not to interfere with its security, forms, tracking systems, or availability.</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-deepInlet">No substitute for professional advice</h2>
            <p>Website content is general information only. It is not legal, financial, tax, lending, inspection, insurance, strata, engineering, or appraisal advice. You should consult qualified professionals before making decisions based on legal, financial, building, strata, tax, or investment matters.</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-deepInlet">Real estate information</h2>
            <p>Real estate conditions, prices, inventory, regulations, zoning, development plans, school catchments, transportation, property availability, and neighbourhood details can change. We aim to provide useful and careful information, but we do not guarantee that all website content is complete, current, or error-free.</p>
            <p>No agency relationship, client relationship, or representation agreement is created by browsing this website, downloading a resource, or submitting a form. Representation begins only when required disclosures are made and the appropriate written agreements are completed.</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-deepInlet">Listings, valuations, and market comments</h2>
            <p>The site may provide active listing access through approved MLS Reciprocity tools where available, but it does not publish sold data or automated valuations. Any value opinion, market comment, or property guidance provided after a form submission is contextual and may require additional property-specific review before it can be relied on.</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-deepInlet">Third-party services and links</h2>
            <p>The site may use or link to third-party services such as GoHighLevel, analytics tools, hosting providers, maps, email, SMS, or external resources. We are not responsible for third-party websites, services, policies, availability, or content.</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-deepInlet">Communications and consent</h2>
            <p>When you submit a form, you agree that we may contact you about your request by email, phone, or text message if you provided that information and consented where required. You can unsubscribe from commercial electronic messages or opt out of SMS follow-up at any time.</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-deepInlet">Limitation of liability</h2>
            <p>To the maximum extent permitted by law, Live in Port Moody, the realtors, brokerage, and service providers are not liable for losses arising from use of the website, reliance on general website content, technical interruptions, third-party tools, or unavailable services.</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-deepInlet">Brokerage and contact</h2>
            <p>{siteConfig.realtors} are licensed with {siteConfig.brokerageName}, {siteConfig.brokerageAddress}. Questions can be sent to <a className="font-semibold text-deepInlet underline" href={`mailto:${siteConfig.publicEmail}`}>{siteConfig.publicEmail}</a> or {siteConfig.publicPhone}.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
