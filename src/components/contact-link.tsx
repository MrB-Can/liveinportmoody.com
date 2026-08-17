"use client";

import { trackCall, trackEmail } from "@/lib/analytics";

type ContactLinkProps = {
  type: "phone" | "email";
  value: string;
  /** Where on the site the click happened, e.g. "footer", "header". */
  location: string;
  className?: string;
  /** Appended as ?subject= on mailto: links. */
  subject?: string;
  /** Overrides the displayed content (defaults to `value`) - e.g. for an icon + label. */
  children?: React.ReactNode;
};

export function ContactLink({ type, value, location, className, subject, children }: ContactLinkProps) {
  const href =
    type === "phone"
      ? `tel:${value.replace(/[^0-9+]/g, "")}`
      : `mailto:${value}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
  const onClick = () => (type === "phone" ? trackCall(location) : trackEmail(location));

  return (
    <a href={href} onClick={onClick} className={className}>
      {children ?? value}
    </a>
  );
}
