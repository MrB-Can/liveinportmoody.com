import { Camera } from "lucide-react";

export function TeamImagePlaceholder() {
  return (
    <div className="mb-8 aspect-video w-full rounded-lg border border-softBorder bg-gradient-to-br from-mist to-seaGlass/20 flex flex-col items-center justify-center p-8 text-center">
      <Camera className="mb-4 h-12 w-12 text-forest" />
      <h3 className="font-semibold text-deepInlet mb-2">Team photo coming soon</h3>
      <p className="text-sm text-slateText max-w-md">
        Wide local photo of Paul and Leilani together in Port Moody, ideally with waterfront, forest, village, or neighbourhood context.
      </p>
    </div>
  );
}
