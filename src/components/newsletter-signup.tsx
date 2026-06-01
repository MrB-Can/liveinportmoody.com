"use client";

import { usePathname } from "next/navigation";
import { LeadForm } from "@/components/lead-form";

const hiddenPaths = new Set([
  "/coming-soon",
  "/contact",
  "/privacy",
  "/terms",
  "/buyer-guide",
  "/seller-guide",
  "/request-recent-sales",
]);

export function NewsletterSignup() {
  const pathname = usePathname();
  if (hiddenPaths.has(pathname)) return null;

  return (
    <section className="border-t border-softBorder bg-mist py-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-emphasis">Local updates</p>
          <h2 className="mt-3 font-heading text-3xl leading-tight text-deepInlet">
            Get Port Moody real estate and local life updates
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slateText">
            Occasional notes on neighbourhood guides, listings and market notes, presales, sold stories,
            local events, and featured businesses. No fake automation claims or scraped social posts.
          </p>
        </div>
        <LeadForm
          formType="newsletter-signup"
          leadType="market-update"
          ctaLabel="Get updates"
          title=""
          description="Tell us where to send Port Moody updates."
          messageLabel="Anything you want us to focus on?"
          messagePlaceholder="Neighbourhoods, listings, presales, local life, or selling strategy."
          tags={["newsletter_signup"]}
        />
      </div>
    </section>
  );
}
