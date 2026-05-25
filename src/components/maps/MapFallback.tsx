import { MapPin } from "lucide-react";

export function MapFallback() {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center rounded-lg bg-gradient-to-b from-seaGlass/30 via-mist to-white p-8 text-center">
      <MapPin className="mb-4 h-12 w-12 text-deepInlet/60" />
      <h3 className="mb-2 text-lg font-semibold text-deepInlet">
        Map unavailable
      </h3>
      <p className="mb-4 text-sm text-slateText">
        Interactive maps are not enabled or could not load.
      </p>
      <p className="text-xs text-slateText/70">
        Map locations are approximate and intended for orientation.
      </p>
    </div>
  );
}
