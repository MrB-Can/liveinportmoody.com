"use client";

import { usePathname } from "next/navigation";
import type { FormEvent } from "react";
import { useState } from "react";
import { getAttribution } from "@/lib/attribution";

const intentOptions = [
  {
    label: "I am looking at a Treetops listing",
    leadType: "buyer",
    intent: "complex-inquiry",
  },
  {
    label: "I own at Treetops and may sell",
    leadType: "seller",
    intent: "complex-owner-value",
  },
  {
    label: "I want listing alerts",
    leadType: "buyer",
    intent: "complex-watch",
  },
  {
    label: "I have a strata/document question",
    leadType: "buyer",
    intent: "strata-document-question",
  },
  {
    label: "I want to compare Treetops to another complex",
    leadType: "buyer",
    intent: "complex-comparison",
  },
] as const;

export function TreetopsInquiryForm() {
  const pathname = usePathname();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const selectedLabel = String(formData.get("helpType") || intentOptions[0].label);
    const selected = intentOptions.find((option) => option.label === selectedLabel) ?? intentOptions[0];
    const message = String(formData.get("message") || "");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(formData.get("name") || ""),
          email: String(formData.get("email") || ""),
          phone: String(formData.get("phone") || ""),
          message: [
            `Help type: ${selected.label}`,
            "complex_name: Treetops",
            "complex_address: 101 Parkside Drive",
            "neighbourhood_slug: heritage-mountain",
            "property_type: townhouse",
            "",
            message,
          ].join("\n"),
          formType: selected.intent === "complex-owner-value" ? "complex-value-opinion" : "complex-inquiry",
          leadType: selected.leadType,
          pagePath: pathname,
          ctaLabel: selected.label,
          consentToContact: formData.get("consentToContact") === "on",
          consentToSms: formData.get("consentToSms") === "on",
          honeypot: String(formData.get("website") || ""),
          tags: [
            "source:liveinportmoody",
            "complex:treetops-101-parkside-drive",
            "complex_name:Treetops",
            "complex_address:101 Parkside Drive",
            "neighbourhood_slug:heritage-mountain",
            "property:townhouse",
            "property_type:townhouse",
            `lead_type:${selected.leadType}`,
            `intent:${selected.intent}`,
          ],
          attribution: getAttribution(),
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
    <form className="w-full min-w-0 rounded-lg border border-softBorder bg-white p-6 shadow-sm" onSubmit={onSubmit}>
      <h2 className="font-heading text-2xl text-deepInlet">Ask about Treetops</h2>
      <p className="mt-2 text-sm leading-6 text-slateText">
        One form routes your request with Treetops-specific context for buyer, seller, listing alert, strata, or comparison questions.
      </p>
      <div className="mt-5 grid min-w-0 gap-4">
        <label className="grid min-w-0 gap-2 text-sm font-medium text-charcoal">
          What do you need help with?
          <select name="helpType" className="min-h-11 w-full min-w-0 rounded-md border border-softBorder px-3">
            {intentOptions.map((option) => (
              <option key={option.label} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-medium text-charcoal">
          Name
          <input name="name" className="min-h-11 w-full min-w-0 rounded-md border border-softBorder px-3" autoComplete="name" required />
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-medium text-charcoal">
          Email
          <input name="email" className="min-h-11 w-full min-w-0 rounded-md border border-softBorder px-3" type="email" autoComplete="email" required />
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-medium text-charcoal">
          Phone <span className="font-normal text-slateText">optional</span>
          <input name="phone" className="min-h-11 w-full min-w-0 rounded-md border border-softBorder px-3" type="tel" autoComplete="tel" />
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-medium text-charcoal">
          Details
          <textarea
            name="message"
            className="min-h-28 w-full min-w-0 rounded-md border border-softBorder px-3 py-3"
            placeholder="Share the unit, listing link, strata question, selling timeline, or comparison complex."
          />
        </label>
        <label className="hidden">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <label className="flex min-w-0 gap-3 text-sm leading-6 text-slateText">
          <input className="mt-1 h-4 w-4" type="checkbox" name="consentToContact" defaultChecked />
          I consent to being contacted about this request by email or phone.
        </label>
        <label className="flex min-w-0 gap-3 text-sm leading-6 text-slateText">
          <input className="mt-1 h-4 w-4" type="checkbox" name="consentToSms" />
          I consent to SMS follow-up if I provided a phone number. Message and data rates may apply.
        </label>
      </div>
      <button
        type="submit"
        className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-deepInlet px-5 py-3 text-sm font-semibold text-white hover:bg-forest disabled:opacity-60"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Treetops request"}
      </button>
      {status === "success" ? <p className="mt-4 text-sm font-medium text-forest">Thanks. Your Treetops request was sent.</p> : null}
      {status === "error" ? <p className="mt-4 text-sm font-medium text-red-700">Something went wrong. Please try again.</p> : null}
    </form>
  );
}
