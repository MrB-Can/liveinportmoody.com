import { createMetadata } from "@/lib/seo";
import { redirect } from "next/navigation";

export const metadata = createMetadata({
  title: "Port Moody Featured Businesses",
  description:
    "Compatibility page for Port Moody featured businesses, business nominations, and local life context.",
  path: "/local-businesses",
});

export default function LocalBusinessesPage() {
  redirect("/featured-businesses");
}
