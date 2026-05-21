"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const helpOptions = [
  "I want local context on a listing",
  "I want to understand the building or complex",
  "I want help comparing listings",
  "I want help with strata documents",
  "I want to know if the price makes sense",
  "I want to book a showing",
];

type Status = "idle" | "success" | "error";

export function ListingSupportForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setIsSubmitting(true);

    const form = new FormData(event.currentTarget);
    const helpType = String(form.get("helpType") || "");
    const listingUrl = String(form.get("listingUrl") || "");
    const listingAddress = String(form.get("listingAddress") || "");
    const question = String(form.get("question") || "");

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
          "Listing support request",
          "intent:listing-search-support",
          `Help needed: ${helpType || "Not selected"}`,
          `listing_url: ${listingUrl || "Not provided"}`,
          `listing_address: ${listingAddress || "Not provided"}`,
          `Question: ${question || "Not provided"}`,
        ].join("\n"),
        pagePath: "/listings",
        ctaLabel: "Ask about a listing",
        resourceName: listingAddress || listingUrl || "Port Moody listing support",
        consentToContact: form.get("consentToContact") === "on",
        tags: [
          "source:liveinportmoody",
          "intent:buyer",
          "intent:listing-search-support",
          "lead_type:buyer",
          "area:port-moody",
        ],
      }),
    });

    setIsSubmitting(false);

    if (response.ok) {
      setStatus("success");
      event.currentTarget.reset();
      return;
    }

    setStatus("error");
  }

  return (
    <form id="ask-listing" className="rounded-lg border border-softBorder bg-white p-6 shadow-sm" onSubmit={onSubmit}>
      <h3 className="font-heading text-2xl text-deepInlet">Ask about a listing</h3>
      <p className="mt-2 text-sm leading-6 text-slateText">
        Send us a Port Moody listing before you write. We can help with local context, building or complex questions, strata documents, and buyer trade-offs.
      </p>
      <div className="mt-5 grid gap-4">
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
          Listing URL <span className="font-normal text-slateText">optional</span>
          <input name="listingUrl" className="min-h-11 rounded-md border border-softBorder px-3" type="url" placeholder="https://" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Listing address <span className="font-normal text-slateText">optional</span>
          <input name="listingAddress" className="min-h-11 rounded-md border border-softBorder px-3" placeholder="Example: 123 Example Street, Port Moody" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-charcoal">
          What do you want help with?
          <select name="helpType" className="min-h-11 rounded-md border border-softBorder bg-white px-3" defaultValue={helpOptions[0]}>
            {helpOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Notes
          <textarea
            name="question"
            className="min-h-28 rounded-md border border-softBorder px-3 py-3"
            placeholder="Tell us what you are trying to understand before viewing, writing, or removing subjects."
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
        {isSubmitting ? "Sending..." : "Get local context"}
      </button>
      {status === "success" ? <p className="mt-4 text-sm font-medium text-forest">Thanks. Your listing question was sent.</p> : null}
      {status === "error" ? <p className="mt-4 text-sm font-medium text-red-700">Something went wrong. Please try again.</p> : null}
    </form>
  );
}
