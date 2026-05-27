import { LeadForm } from "@/components/lead-form";
import { Wordmark } from "@/components/wordmark";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Coming Soon",
  description: "Live in Port Moody is building a complete city guide for Port Moody, BC — neighbourhoods, buildings, complexes, listings, and local lifestyle.",
  path: "/coming-soon",
});

export default function ComingSoonPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-deepInlet text-white">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(18,48,47,0.92) 0%,rgba(18,48,47,0.72) 45%,rgba(18,48,47,0.18) 100%),url('/hero-home.webp')",
        }}
      />
      <div className="mx-auto grid min-h-screen max-w-6xl items-center px-5 py-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <section>
            <Wordmark variant="light" />
            <p className="mt-12 text-sm font-semibold uppercase tracking-[0.16em] text-seaGlass">Launching soon</p>
            <h1 className="mt-4 max-w-3xl font-heading text-5xl leading-[1.02] sm:text-6xl">
              Port Moody&apos;s complete city guide is almost here.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">
              Neighbourhood guides. Building and townhouse complex profiles. Active listings. Market context. Local lifestyle and events.
              A complete resource for anyone buying, selling, or living in Port Moody — built by local agents who know this city.
            </p>
            <ul className="mt-6 space-y-2 text-base text-mist/90">
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-seaGlass">&#10003;</span>
                Neighbourhood guides for Heritage Mountain, Suter Brook, Newport Village, and more
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-seaGlass">&#10003;</span>
                Building and townhouse complex profiles with buyer and seller notes
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-seaGlass">&#10003;</span>
                Real estate decision guides for buyers and sellers
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-seaGlass">&#10003;</span>
                Local lifestyle, parks, trails, and community resources
              </li>
            </ul>
            <p className="mt-8 text-sm text-mist/70">
              Already working with Paul and Leilani?{" "}
              <Link href="/contact" className="underline underline-offset-4 hover:text-white">
                Contact us directly
              </Link>
              .
            </p>
          </section>
          <section className="rounded-lg border border-white/20 bg-white/95 p-6 text-charcoal shadow-soft">
            <LeadForm
              formType="ask-question"
              leadType="local-question"
              ctaLabel="Send your question"
              title="Have a Port Moody question?"
              description="Ask anything about the city, neighbourhoods, buildings, or the market. We'll get back to you personally."
              messageLabel="What are you trying to figure out?"
            />
          </section>
        </div>
      </div>
    </main>
  );
}
