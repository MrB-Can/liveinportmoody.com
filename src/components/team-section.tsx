import { CTAButton } from "@/components/cta-button";
import { TeamImagePlaceholder } from "@/components/team-image-placeholder";
import { TeamRoleCard } from "@/components/team-role-card";
import { FileSearch, TrendingUp } from "lucide-react";

export function TeamSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-5 py-12">
        <h2 className="font-heading text-3xl md:text-4xl text-deepInlet mb-3">Meet the Live in Port Moody team</h2>
        <p className="text-lg text-slateText mb-8 max-w-2xl">
          Live in Port Moody combines local research, real estate strategy, media, and market context to help buyers and sellers make better decisions in Port Moody.
        </p>

        {/* Shared Team Image */}
        <TeamImagePlaceholder />

        {/* Role Cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <TeamRoleCard
            name="Paul Bennett"
            roleTitle="Licensed REALTOR®, research, media, and local intelligence"
            description="Paul focuses on local research, neighbourhood context, property storytelling, digital strategy, photography, video, and data-informed buyer and seller guidance."
            bullets={[
              "Port Moody neighbourhood and complex research",
              "Buyer education and local decision support",
              "Property media, storytelling, and digital strategy",
              "Market context and CRM-driven follow-up",
            ]}
            icon={<FileSearch className="h-5 w-5" />}
          />
          <TeamRoleCard
            name="Leilani Fong"
            roleTitle="Listing strategy and negotiation"
            description="Leilani brings real estate experience, seller strategy, pricing judgment, negotiation, and transaction guidance to help clients move through the process with confidence."
            bullets={[
              "Seller strategy and listing preparation",
              "Pricing and market positioning",
              "Negotiation and offer strategy",
              "Transaction guidance and client advocacy",
            ]}
            icon={<TrendingUp className="h-5 w-5" />}
          />
        </div>

        {/* CTA */}
        <div className="rounded-lg border border-softBorder bg-sand p-8 text-center">
          <h3 className="font-heading text-2xl text-deepInlet mb-3">Have a Port Moody real estate question?</h3>
          <p className="text-slateText mb-6 max-w-2xl mx-auto">
            Ask us what you are trying to figure out and we will point you in the right direction.
          </p>
          <div className="flex justify-center">
            <CTAButton href="/contact">Ask a local question</CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
