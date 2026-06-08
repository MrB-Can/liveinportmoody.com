"use client";

import { trackCall, trackEmail } from "@/lib/analytics";

type ContactLinkProps = {
  type: "phone" | "email";
  value: string;
  /** Where on the site the click happened, e.g. "footer", "header". */
  location: string;
  className?: string;
};

export function ContactLink({ type, value, location, className }: ContactLinkProps) {
  const href = type === "phone" ? `tel:${value.replace(/[^0-9+]/g, "")}` : `mailto:${value}`;
  const onClick = () => (type === "phone" ? trackCall(location) : trackEmail(location));

  return (
    <a href={href} onClick={onClick} className={className}>
      {value}
    </a>
  );
}
