import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { ImageHero } from "@/components/image-hero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Port Moody Real Estate Blog",
  description: "Neighbourhood guides, buying and selling strategy, mortgage insights, and local market context for Port Moody, BC.",
  path: "/blog",
});

const categoryLabel: Record<string, string> = {
  neighbourhood: "Neighbourhood",
  buying: "Buying",
  selling: "Selling",
  strategy: "Strategy",
  market: "Market",
};

const categoryColor: Record<string, string> = {
  neighbourhood: "bg-seaGlass/20 text-forest",
  buying: "bg-blue-50 text-blue-700",
  selling: "bg-amber-50 text-amber-700",
  strategy: "bg-purple-50 text-purple-700",
  market: "bg-slate-100 text-slate-600",
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "long", day: "numeric" }).format(new Date(iso));
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <ImageHero
        eyebrow="Port Moody Real Estate"
        title="Local insight worth reading."
        subtitle="Neighbourhood guides, buying strategy, seller education, and market context, written for people making real decisions about Port Moody real estate."
      />

      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-lg border border-softBorder bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColor[post.category] ?? "bg-slate-100 text-slate-600"}`}>
                  {categoryLabel[post.category] ?? post.category}
                </span>
                <span className="text-xs text-slateText">{formatDate(post.date)}</span>
              </div>
              <h2 className="mb-2 font-heading text-xl leading-snug text-deepInlet group-hover:text-forest">
                {post.title}
              </h2>
              <p className="mt-auto pt-3 text-sm leading-6 text-slateText line-clamp-3">
                {post.excerpt}
              </p>
              <span className="mt-4 text-sm font-semibold text-forest">Read →</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
