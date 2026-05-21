import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getPostBySlug, generateStaticParams as getParams } from "@/lib/blog";
import { LeadForm } from "@/components/lead-form";
import { createMetadata } from "@/lib/seo";

export { getParams as generateStaticParams };

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return createMetadata({ title: post.title, description: post.excerpt, path: `/blog/${slug}` });
}

const categoryLabel: Record<string, string> = {
  neighbourhood: "Neighbourhood",
  buying: "Buying",
  selling: "Selling",
  strategy: "Strategy",
  market: "Market",
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-CA", { year: "numeric", month: "long", day: "numeric" }).format(new Date(iso));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      {/* Back */}
      <Link href="/blog" className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-slateText hover:text-forest">
        ← All articles
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-full bg-seaGlass/20 px-2.5 py-0.5 text-xs font-semibold text-forest">
            {categoryLabel[post.category] ?? post.category}
          </span>
          <time className="text-xs text-slateText">{formatDate(post.date)}</time>
        </div>
        <h1 className="font-heading text-4xl leading-tight text-deepInlet sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-slateText">{post.excerpt}</p>
      </header>

      {/* Article body */}
      <article className="prose prose-slate max-w-none
        prose-headings:font-heading prose-headings:text-deepInlet
        prose-h2:text-2xl prose-h3:text-xl
        prose-a:text-forest prose-a:no-underline hover:prose-a:underline
        prose-strong:text-charcoal
        prose-li:text-slateText prose-p:text-slateText
        prose-table:text-sm">
        <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </article>

      {/* Tags */}
      {post.tags?.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-2 border-t border-softBorder pt-6">
          {post.tags.map(tag => (
            <span key={tag} className="rounded-full border border-softBorder px-3 py-1 text-xs text-slateText">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Lead CTA */}
      <div className="mt-12 rounded-lg border border-softBorder bg-mist p-6">
        <h2 className="mb-1 font-heading text-2xl text-deepInlet">Have a Port Moody question?</h2>
        <p className="mb-6 text-sm text-slateText">Ask about a specific complex, neighbourhood, or situation — we&apos;ll respond personally.</p>
        <LeadForm
          formType="ask-question"
          leadType="local-question"
          ctaLabel="Send question"
          title=""
          messageLabel="Your question"
        />
      </div>
    </div>
  );
}
