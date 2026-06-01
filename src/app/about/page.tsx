import { CTAButton } from "@/components/cta-button";
import { ImageHero } from "@/components/image-hero";
import { Section } from "@/components/section";
import { VideoBlock } from "@/components/video-block";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Live in Port Moody",
  description:
    "About Live in Port Moody, Leilani Fong, Paul Bennett, local real estate guidance, local intelligence, Raving Fans, and contact paths.",
  path: "/about",
});

const aboutCards = [
  {
    title: "Meet Us",
    body: "Learn how Leilani and Paul combine licensed real estate representation, local research, data, media, and property intelligence.",
    href: "/meet-us",
    cta: "Meet Leilani and Paul",
  },
  {
    title: "Raving Fans",
    body: "A prepared home for verified reviews, connected review sources, and client-approved stories when approved material is available.",
    href: "/raving-fans",
    cta: "View Raving Fans",
  },
  {
    title: "Contact",
    body: "Ask a buying, selling, neighbourhood, building, complex, presale, local life, or guide request question.",
    href: "/contact",
    cta: "Contact us",
  },
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
        <div className="grid gap-4 md:grid-cols-3">
          {aboutCards.map((card) => (
            <article key={card.title} className="rounded-lg border border-softBorder bg-white p-6">
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
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Neighbourhood and nearby community fit",
            "Condo building and townhouse complex due diligence",
            "Local Life context without unverified businesses or events",
            "Buyer and seller guidance connected to real decisions",
          ].map((item) => (
            <div key={item} className="rounded-lg border border-softBorder bg-mist p-5 text-sm font-semibold text-deepInlet">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Intro video" tone="white">
        <VideoBlock title="Why we built Live in Port Moody" description="A short video introducing our local approach to Port Moody real estate, research, and client service." />
      </Section>

      <Section title="Ask a Port Moody question" tone="sand">
        <CTAButton href="/contact">Contact Paul and Leilani</CTAButton>
      </Section>
    </>
  );
}
