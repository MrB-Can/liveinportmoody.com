import { LeadForm } from "@/components/lead-form";
import type { LeadInput } from "@/lib/crm/types";

type LeadCTATone = "mist" | "sand" | "white";

type LeadCTAProps = {
  title?: string;
  subtitle?: string;
  formType: LeadInput["formType"];
  leadType: LeadInput["leadType"];
  ctaLabel?: string;
  messageLabel?: string;
  tags?: string[];
  tone?: LeadCTATone;
};

const tones: Record<LeadCTATone, string> = {
  mist: "bg-mist",
  sand: "bg-warmSand",
  white: "bg-white",
};

export function LeadCTA({
  title,
  subtitle,
  formType,
  leadType,
  ctaLabel = "Send",
  messageLabel,
  tags,
  tone = "mist",
}: LeadCTAProps) {
  return (
    <div className={`rounded-lg border border-softBorder ${tones[tone]} p-6`}>
      {title ? (
        <h2 className="mb-1 font-heading text-2xl text-deepInlet">{title}</h2>
      ) : null}
      {subtitle ? (
        <p className="mb-6 text-sm text-slateText">{subtitle}</p>
      ) : null}
      <LeadForm
        formType={formType}
        leadType={leadType}
        ctaLabel={ctaLabel}
        title=""
        messageLabel={messageLabel}
        tags={tags}
      />
    </div>
  );
}
