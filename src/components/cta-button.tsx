"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackCTA } from "@/lib/analytics";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  /** Override the tracked CTA label (defaults to the button text or href). */
  trackLabel?: string;
};

const variants = {
  primary: "bg-deepInlet text-white hover:bg-forest",
  secondary: "border border-seaGlass bg-white text-deepInlet hover:bg-mist",
  ghost: "text-deepInlet underline-offset-4 hover:underline",
};

export function CTAButton({ href, children, variant = "primary", trackLabel }: CTAButtonProps) {
  const pathname = usePathname();
  const label = trackLabel ?? (typeof children === "string" ? children : href);

  return (
    <Link
      href={href}
      onClick={() => trackCTA(label, pathname || "")}
      className={`inline-flex min-h-10 whitespace-nowrap items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
