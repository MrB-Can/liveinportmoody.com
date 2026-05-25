import Link from "next/link";
import { Section } from "@/components/section";

export default function NotFound() {
  return (
    <Section title="Page not found" tone="white" intro="That page could not be found.">
      <Link href="/" className="inline-flex min-h-11 items-center rounded-md bg-deepInlet px-5 py-3 text-sm font-semibold text-white">Go home</Link>
    </Section>
  );
}
