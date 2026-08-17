type ListingStatusBadgeProps = {
  status: "active" | "coming-soon" | "sold";
  className?: string;
};

const styles: Record<ListingStatusBadgeProps["status"], { tone: string; label: string }> = {
  active: { tone: "bg-forest text-white", label: "For Sale" },
  "coming-soon": { tone: "bg-amber-500 text-white", label: "Coming soon" },
  sold: { tone: "bg-charcoal text-white", label: "Sold" },
};

export function ListingStatusBadge({ status, className = "" }: ListingStatusBadgeProps) {
  const { tone, label } = styles[status];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-bold uppercase tracking-[0.05em] shadow-md ring-2 ring-white/80 ${tone} ${className}`}
    >
      <span className="h-2 w-2 rounded-full bg-white" />
      {label}
    </span>
  );
}
