type BadgeTone = "sea" | "forest" | "sand" | "amber" | "slate" | "blue" | "purple";

type BadgeProps = {
  children: React.ReactNode;
  tone?: BadgeTone;
};

const tones: Record<BadgeTone, string> = {
  sea:    "bg-seaGlass/20 text-forest",
  forest: "bg-forest/10 text-forest",
  sand:   "bg-warmSand text-charcoal",
  amber:  "bg-amber-50 text-amber-700",
  slate:  "bg-slate-100 text-slate-600",
  blue:   "bg-blue-50 text-blue-700",
  purple: "bg-purple-50 text-purple-700",
};

export function Badge({ children, tone = "sea" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${tones[tone]}`}>
      {children}
    </span>
  );
}
