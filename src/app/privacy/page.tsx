import { ImageHero } from "@/components/image-hero";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy Policy for Live in Port Moody, including how website inquiries, analytics, cookies, and CRM data are handled.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <ImageHero
        imageSrc="/hero-legal.png"
        title="Privacy Policy"
        subtitle="How Live in Port Moody collects, uses, stores, and protects information submitted through this website."
      />
      <Section title="Privacy Policy" tone="white" intro={`Last updated: May 4, 2026. This policy applies to ${siteConfig.name}, a local real estate and lifestyle website operated by ${siteConfig.realtors}.`}>
        <div className="max-w-3xl space-y-8 text-sm leading-7 text-slateText">
          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-deepInlet">Information we collect</h2>
            <p>When you submit a form, request a resource, ask a question, or contact us, we may collect your name, email address, phone number, message, property interests, timeline, form type, page path, call-to-action source, and related inquiry details.</p>
            <p>We also collect basic website attribution and analytics information, including landing pages, referrers, UTM parameters, visitor and session identifiers, timestamps, page count, browser/device information, and cookie preferences where applicable.</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-deepInlet">How we use information</h2>
            <p>We use information to respond to inquiries, provide requested resources, route buyer, seller, relocation, market, and local-question leads, prepare useful real estate guidance, improve the website, understand marketing attribution, and maintain basic business records.</p>
            <p>If you provide a phone number and consent to SMS follow-up, we may use text messaging for direct follow-up about your request. You can opt out of SMS by replying STOP.</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-deepInlet">CRM, analytics, and service providers</h2>
            <p>Website inquiries are sent to GoHighLevel/LeadConnector for contact management, opportunity routing, follow-up, email, SMS, and internal notifications. We may also use hosting, analytics, security, email, storage, and automation providers to operate the site.</p>
            <p>Analytics tools such as Google Analytics 4 or Microsoft Clarity may be enabled to understand website usage. These tools may use cookies or similar technologies. Analytics and marketing cookies are not required for the core website to function.</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-deepInlet">Cookies and tracking</h2>
            <p>Necessary cookies and local storage may be used for security, form attribution, session continuity, and basic site operation. Optional analytics or marketing cookies may be used if enabled. You can control cookies through your browser settings, but some site functions may not work as intended if cookies are blocked.</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-deepInlet">Consent and communication</h2>
            <p>By submitting a form, you consent to being contacted about your request using the contact information you provide. Commercial electronic messages will include identification and an unsubscribe or opt-out mechanism where required. You can withdraw consent at any time by contacting us or using the unsubscribe option in a message.</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-deepInlet">Storage, safeguards, and retention</h2>
            <p>We use reasonable administrative, technical, and service-provider safeguards to protect personal information against unauthorized access, disclosure, loss, or misuse. No website or online system can guarantee absolute security.</p>
            <p>We keep personal information only as long as reasonably needed for the purposes described in this policy, to provide real estate services, maintain business records, meet legal or regulatory requirements, resolve disputes, and improve operations.</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-deepInlet">Access, correction, and deletion requests</h2>
            <p>You may request access to, correction of, or deletion of your personal information, subject to legal, regulatory, brokerage, and business-record obligations. We may need to verify your identity before acting on a request.</p>
            <p>Contact us at <a className="font-semibold text-deepInlet underline" href={`mailto:${siteConfig.publicEmail}`}>{siteConfig.publicEmail}</a> or {siteConfig.publicPhone} for privacy questions or requests.</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-2xl text-deepInlet">Updates</h2>
            <p>We may update this policy as the website, tools, legal requirements, or business practices change. The updated version will be posted on this page with a revised date.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
