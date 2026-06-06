import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Get Started | Live in Port Moody",
  description:
    "Choose your path. Whether you're buying, selling, relocating, or researching Port Moody real estate, start here to find the right next step.",
  path: "/get-started",
});

const paths = [
  {
    title: "I want to buy",
    body: "Research neighbourhoods, buildings, complexes, listings, and buyer due diligence before you write an offer.",
    cta: "Buying guidance",
    href: "/buy",
  },
  {
    title: "I want to sell",
    body: "Preparation, pricing, positioning, media, and launch strategy for a Port Moody sale.",
    cta: "Selling guidance",
    href: "/sell",
  },
  {
    title: "I am moving to Port Moody",
    body: "Understand lifestyle, commute, schools, trails, density, and neighbourhood trade-offs before you commit.",
    cta: "Relocation guide",
    href: "/local-life",
  },
  {
    title: "I want to research neighbourhoods",
    body: "Compare Port Moody areas by housing type, walkability, schools, transit, and buyer fit.",
    cta: "Compare neighbourhoods",
    href: "/neighbourhoods",
  },
  {
    title: "I want to ask about a listing, building, or complex",
    body: "Send us a listing, building, or strata question before you write. Local context can change the decision.",
    cta: "Ask a local question",
    href: "/contact",
  },
  {
    title: "I want to request recent sales context",
    body: "Request comparable sales information as part of a buyer or seller conversation.",
    cta: "Request context",
    href: "/request-recent-sales",
  },
];

export default function GetStartedPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white px-5 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Where to begin</p>
          <h1 className="mt-4 font-heading text-4xl text-deepInlet md:text-5xl">
            What are you trying to figure out?
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slateText">
            Choose the path that matches where you are. Each one leads to the right local context, guides, and people.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {paths.map((path) => (
            <Link
              key={path.href + path.title}
              href={path.href}
              className="flex flex-col rounded-lg border border-softBorder bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <h2 className="font-heading text-xl text-deepInlet">{path.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-slateText">{path.body}</p>
              <span className="mt-5 text-sm font-semibold text-forest">{path.cta} →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-warmSand px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-lg border border-softBorder bg-white p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emphasis">Not sure where to start?</p>
            <h2 className="mt-3 font-heading text-3xl text-deepInlet">Ask a question directly.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slateText">
              If you are still orienting (comparing areas, unsure what property type fits your situation, or weighing a timing decision), you can send a question directly. Paul and Leilani will respond with local context, not a sales pitch.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center rounded-md bg-deepInlet px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest"
              >
                Send a question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
