import { ImageIcon } from "lucide-react";

type PlaceholderHeight = "sm" | "md" | "lg";

type PlaceholderImageBlockProps = {
  caption?: string;
  label?: string;
  height?: PlaceholderHeight;
};

const heights: Record<PlaceholderHeight, string> = {
  sm: "h-40",
  md: "h-56",
  lg: "h-72",
};

export function PlaceholderImageBlock({ caption, label, height = "md" }: PlaceholderImageBlockProps) {
  return (
    <figure>
      <div
        className={`flex flex-col items-center justify-center gap-3 rounded-lg bg-gradient-to-br from-mist to-seaGlass/20 ${heights[height]}`}
        aria-label={label ?? "Planned visual area"}
        role="img"
      >
        <ImageIcon className="h-8 w-8 text-seaGlass" />
        {label ? <p className="text-xs text-slateText">{label}</p> : null}
      </div>
      {caption ? (
        <figcaption className="mt-2 text-xs text-slateText">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
