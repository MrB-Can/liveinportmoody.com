"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

// Initializes Microsoft Clarity once on the client via the official package.
// Replaces the inline next/script snippet, which got re-evaluated on client
// navigation and left window.clarity as the wrong type ("a[c] is not a
// function"), so the collector never loaded and no sessions were uploaded.
export function ClarityInit({ projectId }: { projectId: string }) {
  useEffect(() => {
    if (!projectId || typeof window === "undefined") return;
    Clarity.init(projectId);
  }, [projectId]);

  return null;
}
