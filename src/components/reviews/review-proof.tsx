import Link from "next/link";
import { ExternalLink, Quote, ShieldCheck } from "lucide-react";
import { getApprovedReviews, googleReviewProfileUrl, type ApprovedReview, type ReviewTag } from "@/data/reviews";

type ReviewProofProps = {
  title?: string;
  intro?: string;
  tags?: ReviewTag[];
  limit?: number;
  ctaLabel?: string;
};

function ReviewCard({ review }: { review: ApprovedReview }) {
  return (
    <article className="rounded-lg border border-softBorder bg-white p-5">
      <Quote className="h-5 w-5 text-forest" aria-hidden="true" />
      <blockquote className="mt-4 text-sm leading-6 text-slateText">&ldquo;{review.excerpt}&rdquo;</blockquote>
      <div className="mt-5 border-t border-softBorder pt-4">
        <p className="text-sm font-semibold text-deepInlet">{review.authorName}</p>
        <p className="mt-1 text-xs text-slateText">
          {review.sourceLabel}
          {review.reviewedAt ? `, ${review.reviewedAt}` : ""}
        </p>
        {review.sourceUrl ? (
          <Link
            href={review.sourceUrl}
            className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-forest hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View source <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export function ReviewProof({
  title = "Verified Google reviews and client proof.",
  intro = "Public proof is published only when the source, exact wording, and usage context are confirmed.",
  tags = [],
  limit = 3,
  ctaLabel = "Review trust standards",
}: ReviewProofProps) {
  const reviews = getApprovedReviews(tags, limit);
  const reviewHref = googleReviewProfileUrl || "/raving-fans";
  const reviewHrefIsExternal = Boolean(googleReviewProfileUrl);

  return (
    <div className="rounded-lg border border-softBorder bg-white p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
        <div className="flex gap-4">
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-seaGlass/15">
            <ShieldCheck className="h-5 w-5 text-forest" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-emphasis">Source-backed proof</p>
            <h2 className="mt-2 font-heading text-3xl leading-tight text-deepInlet">{title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slateText">{intro}</p>
          </div>
        </div>
        <Link
          href={reviewHref}
          className="inline-flex min-h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-seaGlass bg-white px-4 py-2 text-sm font-semibold text-deepInlet transition hover:bg-mist"
          target={reviewHrefIsExternal ? "_blank" : undefined}
          rel={reviewHrefIsExternal ? "noopener noreferrer" : undefined}
        >
          {ctaLabel}
          {reviewHrefIsExternal ? <ExternalLink className="h-4 w-4" aria-hidden="true" /> : null}
        </Link>
      </div>

      {reviews.length > 0 ? (
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-lg border border-softBorder bg-mist p-5">
          <p className="text-sm font-semibold text-deepInlet">Google review excerpts are ready to display once approved.</p>
          <p className="mt-2 text-sm leading-6 text-slateText">
            No review excerpt, star rating, count, ranking, or award is shown unless it is source-backed and approved for public use.
          </p>
        </div>
      )}
    </div>
  );
}

export function ApprovedReviewGrid({ tags = [], limit = 9 }: { tags?: ReviewTag[]; limit?: number }) {
  const reviews = getApprovedReviews(tags, limit);

  if (reviews.length === 0) {
    return (
      <ReviewProof
        title="Approved review excerpts will live here."
        intro="The page is wired for Google reviews and client-approved stories, but it does not publish unverified review text."
      />
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}

