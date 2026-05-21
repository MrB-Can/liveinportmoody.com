import { LeadForm } from "@/components/lead-form";

type LeadData = {
  buyerCTA: {
    label: string;
    leadType: string;
    intent: string;
    complexName: string;
    complexAddress: string;
    area: string;
    tags: string[];
  };
  sellerCTA: {
    label: string;
    leadType: string;
    intent: string;
    complexName: string;
    complexAddress: string;
    area: string;
    tags: string[];
  };
};

type ComplexListingsCTAProps = {
  leadData: LeadData;
};

export function ComplexListingsCTA({ leadData }: ComplexListingsCTAProps) {
  const name = leadData.buyerCTA.complexName;
  return (
    <div className="space-y-8">
      <section>
        <h2 className="font-heading text-2xl text-deepInlet">Interested in {name}?</h2>
        <p className="mt-2 text-slateText">Whether you&apos;re looking to buy or thinking about selling, get in touch.</p>
      </section>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border border-softBorder bg-mist p-6">
          <h3 className="font-semibold text-deepInlet">Looking to buy at {name}?</h3>
          <p className="mt-2 text-sm text-slateText">Learn about available units and get local market insight.</p>
          <div className="mt-4">
            <LeadForm
              formType="complex-inquiry"
              leadType="buyer"
              ctaLabel={leadData.buyerCTA.label}
              title={`Ask about ${name}`}
              messageLabel="Tell us what you're looking for in a townhome"
              tags={leadData.buyerCTA.tags}
            />
          </div>
        </div>

        <div className="rounded-lg border border-softBorder bg-seaGlass/10 p-6">
          <h3 className="font-semibold text-deepInlet">Do you own at {name}?</h3>
          <p className="mt-2 text-sm text-slateText">Get a value opinion and market perspective from Leilani and Paul.</p>
          <div className="mt-4">
            <LeadForm
              formType="complex-value-opinion"
              leadType="seller"
              ctaLabel={leadData.sellerCTA.label}
              title="Value Opinion Request"
              messageLabel="Tell us about your unit and what questions you have"
              tags={leadData.sellerCTA.tags}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
