"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import type { PortMoodyBuilding } from "@/data/buildings";

type Status = "idle" | "success" | "error";

export function BuildingInquiryForm({ buildings }: { buildings: PortMoodyBuilding[] }) {
  const [status, setStatus] = useState<Status>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setIsSubmitting(true);

    const form = new FormData(event.currentTarget);
    const buildingSlug = String(form.get("building") || "");
    const building = buildings.find((item) => item.slug === buildingSlug);
    const question = String(form.get("question") || "");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "ask-question",
          leadType: "buyer",
          name: String(form.get("name") || ""),
          email: String(form.get("email") || ""),
          phone: String(form.get("phone") || ""),
          message: [
            "intent:building-inquiry",
            `building_name: ${building?.name || "General Port Moody condo building"}`,
            `building_slug: ${building?.slug || "general"}`,
            `neighbourhood_slug: ${building?.neighbourhoodSlug || "port-moody"}`,
            `Question: ${question}`,
          ].join("\n"),
          pagePath: "/buildings",
          ctaLabel: "Ask about a condo building",
          resourceName: building?.name || "Port Moody condo building inquiry",
          consentToContact: form.get("consentToContact") === "on",
          tags: [
            "source:liveinportmoody",
            "intent:buyer",
            "intent:building-inquiry",
            "lead_type:buyer",
            "property:condo",
            "area:port-moody",
            ...(building ? [`building:${building.slug}`, `building_name:${building.name}`, `neighbourhood_slug:${building.neighbourhoodSlug}`] : []),
          ],
        }),
      });

      if (response.ok) {
        setStatus("success");
        event.currentTarget.reset();
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form id="ask-building" className="rounded-lg border border-softBorder bg-white p-6 shadow-sm" onSubmit={onSubmit}>
      <div className="sr-only" aria-hidden="true">
        {buildings.map((building) => (
          <span key={building.slug} id={`ask-building-${building.slug}`} />
        ))}
      </div>
      <h3 className="font-heading text-2xl text-deepInlet">Ask about a condo building</h3>
      <p className="mt-2 text-sm leading-6 text-slateText">
        Example: We are looking at a condo in Suter Brook and want to understand the building, strata fees, parking, and whether the price makes sense.
      </p>
      <div className="mt-5 grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Building
          <select name="building" className="min-h-11 rounded-md border border-softBorder bg-white px-3">
            <option value="">General Port Moody condo building question</option>
            {buildings.map((building) => (
              <option key={building.slug} value={building.slug}>
                {building.name}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Name
          <input name="name" className="min-h-11 rounded-md border border-softBorder px-3" required autoComplete="name" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Email
          <input name="email" className="min-h-11 rounded-md border border-softBorder px-3" required type="email" autoComplete="email" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Phone <span className="font-normal text-slateText">optional</span>
          <input name="phone" className="min-h-11 rounded-md border border-softBorder px-3" type="tel" autoComplete="tel" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-charcoal">
          What do you want help with?
          <textarea
            name="question"
            className="min-h-28 rounded-md border border-softBorder px-3 py-3"
            placeholder="Send us the building name, listing, strata question, or trade-off you are weighing."
          />
        </label>
        <label className="flex gap-3 text-sm leading-6 text-slateText">
          <input name="consentToContact" className="mt-1 h-4 w-4" type="checkbox" defaultChecked />
          I consent to Live in Port Moody contacting me about this request by email or phone.
        </label>
      </div>
      <button
        type="submit"
        className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-deepInlet px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest disabled:opacity-60"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Ask about a condo building"}
      </button>
      {status === "success" ? <p className="mt-4 text-sm font-medium text-forest">Thanks. Your building question was sent.</p> : null}
      {status === "error" ? <p className="mt-4 text-sm font-medium text-red-700">Something went wrong. Please try again.</p> : null}
    </form>
  );
}
