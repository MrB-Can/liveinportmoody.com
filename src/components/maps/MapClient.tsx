"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { MapFallback } from "./MapFallback";
import type { MapConfig } from "@/components/maps/mapTypes";

const InteractiveMap = dynamic(
  () => import("./InteractiveMap").then((mod) => ({ default: mod.InteractiveMap })),
  {
    ssr: false,
    loading: () => <MapFallback />,
  }
);

export function MapClient(config: MapConfig) {
  return (
    <Suspense fallback={<MapFallback />}>
      <InteractiveMap {...config} />
    </Suspense>
  );
}
