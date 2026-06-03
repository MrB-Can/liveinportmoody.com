import { createMetadata } from "@/lib/seo";
import { redirect } from "next/navigation";

export const metadata = createMetadata({
  title: "Testimonials and Raving Fans",
  description:
    "Compatibility page for testimonials, raving fans, verified reviews, and approved client stories.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  redirect("/raving-fans");
}
