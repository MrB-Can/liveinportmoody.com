"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { trackFormStart, trackFormSubmit } from "@/lib/analytics";
import { getAttribution } from "@/lib/attribution";
import { formTypes, leadTypes } from "@/lib/crm/types";
import { siteConfig } from "@/lib/site";

const formSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().optional(),
  message: z.string().trim().optional(),
  consentToContact: z.boolean().optional(),
  consentToSms: z.boolean().optional(),
  honeypot: z.string().optional(),
});

type LeadFormValues = z.infer<typeof formSchema>;

type LeadFormProps = {
  formType: (typeof formTypes)[number];
  leadType: (typeof leadTypes)[number];
  title?: string;
  description?: string;
  ctaLabel: string;
  resourceName?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  phoneOptional?: boolean;
  tags?: string[];
};

export function LeadForm({
  formType,
  leadType,
  title,
  description,
  ctaLabel,
  resourceName,
  messageLabel = "What are you trying to figure out?",
  messagePlaceholder = "Share the property type, area, timeline, or question you have.",
  phoneOptional = true,
  tags,
}: LeadFormProps) {
  const pathname = usePathname();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [started, setStarted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { consentToContact: true },
  });

  function onFocus() {
    if (!started) {
      setStarted(true);
      trackFormStart(formType);
    }
  }

  async function onSubmit(values: LeadFormValues) {
    setStatus("idle");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          formType,
          leadType,
          pagePath: pathname,
          ctaLabel,
          resourceName,
          tags,
          attribution: getAttribution(),
        }),
      });

      if (response.ok) {
        trackFormSubmit(formType);
        setStatus("success");
        reset();
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="rounded-lg border border-softBorder bg-white p-5 shadow-sm sm:p-6"
      onSubmit={handleSubmit(onSubmit)}
      onFocus={onFocus}
      noValidate
    >
      {title ? <h3 className="font-heading text-xl leading-tight text-deepInlet sm:text-2xl">{title}</h3> : null}
      {description ? <p className="mt-2 text-sm leading-6 text-slateText">{description}</p> : null}

      <div className="mt-5 grid gap-4">
        <label htmlFor="name" className="grid gap-2 text-sm font-medium text-charcoal">
          Name
          <input id="name" className="min-h-11 rounded-md border border-softBorder px-3" autoComplete="name" {...register("name")} />
          {errors.name ? <span className="text-sm text-red-700">{errors.name.message}</span> : null}
        </label>
        <label htmlFor="email" className="grid gap-2 text-sm font-medium text-charcoal">
          Email
          <input id="email" className="min-h-11 rounded-md border border-softBorder px-3" type="email" autoComplete="email" {...register("email")} />
          {errors.email ? <span className="text-sm text-red-700">{errors.email.message}</span> : null}
        </label>
        <label htmlFor="phone" className="grid gap-2 text-sm font-medium text-charcoal">
          Phone {phoneOptional ? <span className="font-normal text-slateText">optional</span> : null}
          <input id="phone" className="min-h-11 rounded-md border border-softBorder px-3" type="tel" autoComplete="tel" {...register("phone")} />
        </label>
        <label htmlFor="message" className="grid gap-2 text-sm font-medium text-charcoal">
          {messageLabel}
          <textarea id="message" className="min-h-24 rounded-md border border-softBorder px-3 py-3" placeholder={messagePlaceholder} {...register("message")} />
        </label>
        <label htmlFor="honeypot" className="hidden">
          Leave this field blank
          <input id="honeypot" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
        </label>
        <label className="flex gap-3 text-sm leading-6 text-slateText">
          <input className="mt-1 h-4 w-4" type="checkbox" {...register("consentToContact")} />
          I consent to {siteConfig.name} contacting me about this request by email or phone using the information I provided. I can withdraw consent at any time.
        </label>
        <label className="flex gap-3 text-sm leading-6 text-slateText">
          <input className="mt-1 h-4 w-4" type="checkbox" {...register("consentToSms")} />
          I consent to SMS follow-up if I provided a phone number. Message and data rates may apply. Reply STOP to opt out.
        </label>
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-deepInlet px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest disabled:opacity-60 sm:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : ctaLabel}
      </button>
      {status === "success" ? <p className="mt-4 text-sm font-medium text-forest">Thanks. Your request was sent.</p> : null}
      {status === "error" ? <p className="mt-4 text-sm font-medium text-red-700">Something went wrong. Please try again.</p> : null}
    </form>
  );
}
