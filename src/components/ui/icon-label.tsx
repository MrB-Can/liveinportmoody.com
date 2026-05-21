import type { LucideIcon } from "lucide-react";

type IconLabelProps = {
  icon: LucideIcon;
  label: string;
  sublabel?: string;
  iconColor?: string;
};

export function IconLabel({ icon: Icon, label, sublabel, iconColor = "text-forest" }: IconLabelProps) {
  return (
    <div className="flex items-start gap-3">
      <Icon className={`mt-0.5 h-4 w-4 flex-shrink-0 ${iconColor}`} />
      <div>
        <span className="text-sm text-slateText">{label}</span>
        {sublabel ? <p className="text-xs text-slateText/70">{sublabel}</p> : null}
      </div>
    </div>
  );
}
