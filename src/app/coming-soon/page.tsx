import { LeadForm } from "@/components/lead-form";
import { Wordmark } from "@/components/wordmark";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Coming Soon",
  description: "Live in Port Moody is preparing a local real estate and lifestyle resource for Port Moody, BC.",
  path: "/coming-soon",
});

export default function ComingSoonPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-deepInlet text-white">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(18,48,47,0.96),rgba(18,48,47,0.78) 48%,rgba(18,48,47,0.35)),url('/hero-home.webp')",
        }}
      />
      <div className="mx-auto grid min-h-screen max-w-6xl items-center px-5 py-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <section>
            <Wordmark variant="light" />
            <p className="mt-12 text-sm font-semibold uppercase tracking-[0.16em] text-seaGlass">Launching soon</p>
            <h1 className="mt-4 max-w-3xl font-heading text-5xl leading-[1.02] sm:text-6xl">
              Port Moody real estate intelligence is almost here.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">
              A local real estate and lifestyle resource from Leilani Fong, Personal Real Estate Corporation and Paul Bennett,
              built for buyers, sellers, homeowners, and people thinking about moving to Port Moody.
            </p>
          </section>
          <section className="rounded-lg border border-white/20 bg-white/95 p-6 text-charcoal shadow-soft">
            <LeadForm
              formType="ask-question"
              leadType="local-question"
              ctaLabel="Ask a local question"
              title="Need Port Moody help before launch?"
              description="Send a question and we will route it through the same lead system."
              messageLabel="What are you trying to figure out?"
            />
          </section>
        </div>
      </div>
    </main>
  );
}
