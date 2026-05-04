import { ImageHero } from "@/components/image-hero";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms and Real Estate Disclaimer",
  description: "Terms and real estate disclaimer placeholder for Live in Port Moody. Final compliance copy is required before launch.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <ImageHero imageSrc="/hero-legal.png" title="Terms and Real Estate Disclaimer" subtitle="TODO: Final legal, brokerage, and real estate compliance copy required before launch." />
      <Section title="Terms and Real Estate Disclaimer" tone="white" intro="TODO: Final legal, brokerage, and real estate compliance copy required before launch.">
        <div className="max-w-3xl space-y-4 text-sm leading-7 text-slateText">
          <p>This placeholder is not final legal advice, privacy language, brokerage compliance language, or real estate disclaimer copy.</p>
          <p>TODO: add brokerage-approved terms, agency/disclaimer wording, accuracy limitations, no-advice language, consent terms, and required real estate notices.</p>
        </div>
      </Section>
    </>
  );
}
