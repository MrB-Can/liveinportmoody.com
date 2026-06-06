import { CTAButton } from "@/components/cta-button";
import { ImageHero } from "@/components/image-hero";
import { Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";
import { type LucideIcon, MapPin, FileCheck, Coffee, Compass } from "lucide-react";

export const metadata = createMetadata({
  title: "About Live in Port Moody",
  description:
    "About Live in Port Moody, Leilani Fong, Paul Bennett, local real estate guidance, local intelligence, Raving Fans, and contact paths.",
  path: "/about",
});

const aboutCards = [
  {
    title: "Meet Us",
    body: "Learn how Leilani and Paul, both licensed REALTORS with eXp Realty Canada, bring real estate representation, local research, data, media, and property intelligence together.",
    href: "/meet-us",
    cta: "Meet Leilani and Paul",
  },
  {
    title: "Contact",
    body: "Ask a buying, selling, neighbourhood, building, complex, presale, local life, or guide request question.",
    href: "/contact",
    cta: "Contact us",
  },
];

const proofStatusCards = [
  "Verified reviews appear only from approved public sources.",
  "Awards and recognition appear only with confirmed source details.",
  "Local businesses and events are reviewed before they appear as public content.",
];

export default function AboutPage() {
  return (
    <>
      <ImageHero
        imageSrc="/images/hero/port-moody-hero-original.jpg"
        imageAlt="Calm view across Burrard Inlet in Port Moody with forested mountains, still water, and tree branches framing the shoreline."
        title="About Live in Port Moody."
        subtitle="A local real estate and lifestyle resource built around neighbourhood fit, property due diligence, local intelligence, and better buying and selling decisions."
        primaryCta={{ label: "Meet us", href: "/meet-us" }}
        secondaryCta={{ label: "Contact us", href: "/contact" }}
        priority
      />

      <Section title="Real estate plus local intelligence" tone="white" intro="The site connects buyer and seller decisions with the local context that changes how a property actually works: neighbourhood, building, complex, lifestyle, commute, strata, preparation, and long-term fit." />

      <Section title="Where to go next">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white md:grid md:grid-cols-2 md:divide-x md:divide-y-0">
          {aboutCards.map((card) => (
            <article key={card.title} className="p-6">
              <h2 className="font-heading text-2xl text-deepInlet">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slateText">{card.body}</p>
              <div className="mt-5">
                <CTAButton href={card.href} variant="secondary">{card.cta}</CTAButton>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section title="How the local content supports real estate" tone="white">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white sm:grid sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {(
            [
              { icon: MapPin, text: "Neighbourhood and nearby community fit" },
              { icon: FileCheck, text: "Condo building and townhouse complex due diligence" },
              { icon: Coffee, text: "Local Life context without unverified businesses or events" },
              { icon: Compass, text: "Buyer and seller guidance connected to real decisions" },
            ] as { icon: LucideIcon; text: string }[]
          ).map((item) => (
            <div key={item.text} className="p-5 text-sm font-semibold text-deepInlet">
              <item.icon className="h-5 w-5 text-forest mb-2" />
              {item.text}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Trust content status">
        <div className="divide-y divide-softBorder rounded-lg border border-softBorder bg-white md:grid md:grid-cols-3 md:divide-x md:divide-y-0">
          {proofStatusCards.map((item) => (
            <div key={item} className="p-5 text-sm font-semibold leading-6 text-deepInlet">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Ask a Port Moody question" tone="sand">
        <CTAButton href="/contact">Contact Paul and Leilani</CTAButton>
      </Section>
    </>
  );
}
