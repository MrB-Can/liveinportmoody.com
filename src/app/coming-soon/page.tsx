import { LeadForm } from "@/components/lead-form";
import { Wordmark } from "@/components/wordmark";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = createMetadata({
  title: "Coming Soon",
  description: "LiveInPortMoody.com is becoming Port Moody's complete city guide: neighbourhoods, buildings, complexes, local businesses, events, and real estate.",
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
            <p className="mt-12 text-sm font-semibold uppercase tracking-[0.16em] text-seaGlass">Coming soon</p>
            <h1 className="mt-4 max-w-3xl font-heading text-5xl leading-[1.02] sm:text-6xl">
              Port Moody&apos;s complete city guide is on its way.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">
              We&apos;re building something bigger: a full resource for anyone who lives, works, or wants to put down roots in Port Moody, built by local agents who know this city.
            </p>
            <ul className="mt-6 space-y-2 text-base text-mist/90">
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-seaGlass">&#10003;</span>
                A Port Moody city and community guide: neighbourhoods, parks, schools, transit, and lifestyle
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-seaGlass">&#10003;</span>
                Building and townhouse complex profiles with real buyer and seller notes
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-seaGlass">&#10003;</span>
                A local business, events, and lifestyle guide for the community
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 shrink-0 text-seaGlass">&#10003;</span>
                A real estate decision hub for buyers, sellers, and everyone in between
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-seaGlass px-5 py-2.5 text-sm font-semibold text-deepInlet hover:bg-seaGlass/90"
              >
                Contact Paul &amp; Leilani
              </Link>
            </div>
            <p className="mt-5 text-sm text-mist/70">
              Already working with us?{" "}
              <Link href="/contact" className="underline underline-offset-4 hover:text-white">
                Reach out directly
              </Link>
              .
            </p>
          </section>
          <section className="rounded-lg border border-white/20 bg-white/95 p-6 text-charcoal shadow-soft">
            <LeadForm
              formType="ask-question"
              leadType="local-question"
              ctaLabel="Ask a Port Moody question"
              title="Have a Port Moody question?"
              description="Ask anything about the city, neighbourhoods, buildings, or the market. We'll get back to you personally."
              messageLabel="What are you trying to figure out?"
              tags={["source:liveinportmoody", "intent:coming-soon-question", "area:port-moody"]}
            />
          </section>
        </div>
      </div>
    </main>
  );
}
