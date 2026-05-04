import { siteConfig } from "@/lib/site";

type WordmarkProps = {
  variant?: "dark" | "light";
};

export function Wordmark({ variant = "dark" }: WordmarkProps) {
  const textColor = variant === "light" ? "text-white" : "text-deepInlet";
  const subColor = variant === "light" ? "text-seaGlass" : "text-slateText";
  const ringColor = variant === "light" ? "border-seaGlass" : "border-forest";

  return (
    <span className="inline-flex items-center gap-3">
      <span className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${ringColor}`} aria-hidden="true">
        <span className="absolute bottom-3 h-2 w-6 rounded-full bg-seaGlass" />
        <span className="absolute bottom-4 h-2 w-7 rounded-full bg-forest" />
        <span className="absolute top-3 h-3 w-3 rounded-full bg-emphasis" />
      </span>
      <span className="grid leading-none">
        <span className={`font-heading text-2xl ${textColor}`}>{siteConfig.name}</span>
        <span className={`mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${subColor}`}>Port Moody, BC</span>
      </span>
    </span>
  );
}
