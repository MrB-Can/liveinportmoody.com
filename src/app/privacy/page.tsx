import { ImageHero } from "@/components/image-hero";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy placeholder for Live in Port Moody. Final legal and privacy copy is required before launch.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <ImageHero imageSrc="/hero-legal.png" title="Privacy Policy" subtitle="TODO: Final legal/privacy copy required before launch." />
      <Section title="Privacy Policy" tone="white" intro="TODO: Final legal/privacy copy required before launch.">
        <div className="max-w-3xl space-y-4 text-sm leading-7 text-slateText">
          <p>This placeholder page marks the required privacy topics for Phase 1 and must not be treated as final legal copy.</p>
          <p>TODO: disclose what personal information is collected, why it is collected, how it is stored, GoHighLevel CRM use, analytics tools, cookies, correction/deletion requests, form follow-up, SMS consent, and privacy contact details.</p>
          <p>TODO: add cookie notice and preference model before paid traffic or retargeting.</p>
        </div>
      </Section>
    </>
  );
}
