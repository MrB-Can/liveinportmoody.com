export type ReviewSource = "google" | "rankmyagent" | "ratemyagent" | "client-approved";

export type ReviewTag =
  | "buyer"
  | "seller"
  | "relocation"
  | "listing"
  | "home-evaluation"
  | "general"
  | "port-moody";

export type ApprovedReview = {
  id: string;
  source: ReviewSource;
  sourceLabel: string;
  sourceUrl?: string;
  authorName: string;
  excerpt: string;
  reviewedAt?: string;
  tags: ReviewTag[];
  approved: boolean;
};

export const googleReviewProfileUrl = "";

export const approvedReviews: ApprovedReview[] = [
  // Add exact owner-approved Google review excerpts here after the public source URL is confirmed.
];

export function getApprovedReviews(tags: ReviewTag[] = [], limit = 3) {
  const selected = approvedReviews.filter((review) => {
    if (!review.approved) {
      return false;
    }

    if (tags.length === 0) {
      return true;
    }

    return tags.some((tag) => review.tags.includes(tag));
  });

  return selected.slice(0, limit);
}

