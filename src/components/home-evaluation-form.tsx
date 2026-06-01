"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { trackFormStart, trackFormSubmit } from "@/lib/analytics";
import { getAttribution } from "@/lib/attribution";
import { siteConfig } from "@/lib/site";

const formSchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().min(10, "Enter a valid phone number."),
  propertyAddress: z.string().trim().min(5, "Enter your property address."),
  propertyType: z.enum(["condo", "townhouse", "detached", "other"]).optional(),
  sellingTimeline: z.enum(["now", "1-3-months", "3-6-months", "6-12-months", "1-2-years", "unsure"]).optional(),
  message: z.string().trim().optional(),
  consentToContact: z.boolean().optional(),
  consentToSms: z.boolean().optional(),
  honeypot: z.string().optional(),
});

type HomeEvaluationFormValues = z.infer<typeof formSchema>;

type HomeEvaluationFormProps = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  tags?: string[];
};

export function HomeEvaluationForm({
  title = "Request a home evaluation",
  description,
  ctaLabel = "Request evaluation",
  tags = [],
}: HomeEvaluationFormProps) {
  const pathname = usePathname();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [started, setStarted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<HomeEvaluationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { consentToContact: true },
  });

  function onFocus() {
    if (!started) {
      setStarted(true);
      trackFormStart("home-evaluation");
    }
  }

  async function onSubmit(values: HomeEvaluationFormValues) {
    setStatus("idle");
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: [
            `Property Address: ${values.propertyAddress}`,
            values.propertyType && `Property Type: ${values.propertyType}`,
            values.sellingTimeline && `Selling Timeline: ${values.sellingTimeline}`,
            values.message && `Message: ${values.message}`,
          ]
            .filter(Boolean)
            .join("\n"),
          formType: "home-evaluation",
          leadType: "seller",
          pagePath: pathname,
          ctaLabel,
          consentToContact: values.consentToContact,
          consentToSms: values.consentToSms,
          tags: [
            "source:liveinportmoody",
            "intent:seller",
            "intent:home-evaluation-request",
            "lead_type:seller",
            "area:port-moody",
            ...tags,
          ],
          attribution: getAttribution(),
          honeypot: values.honeypot,
        }),
      });

      if (response.ok) {
        trackFormSubmit("home-evaluation");
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
        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Name
          <input className="min-h-11 rounded-md border border-softBorder px-3" autoComplete="name" {...register("name")} />
          {errors.name ? <span className="text-sm text-red-700">{errors.name.message}</span> : null}
        </label>

        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Email
          <input className="min-h-11 rounded-md border border-softBorder px-3" type="email" autoComplete="email" {...register("email")} />
          {errors.email ? <span className="text-sm text-red-700">{errors.email.message}</span> : null}
        </label>

        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Phone
          <input className="min-h-11 rounded-md border border-softBorder px-3" type="tel" autoComplete="tel" {...register("phone")} />
          {errors.phone ? <span className="text-sm text-red-700">{errors.phone.message}</span> : null}
        </label>

        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Property address
          <input className="min-h-11 rounded-md border border-softBorder px-3" placeholder="Address or intersection" {...register("propertyAddress")} />
          {errors.propertyAddress ? <span className="text-sm text-red-700">{errors.propertyAddress.message}</span> : null}
        </label>

        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Property type <span className="font-normal text-slateText">optional</span>
          <select className="min-h-11 rounded-md border border-softBorder px-3" {...register("propertyType")}>
            <option value="">Select property type</option>
            <option value="condo">Condo</option>
            <option value="townhouse">Townhouse</option>
            <option value="detached">Detached</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Selling timeline <span className="font-normal text-slateText">optional</span>
          <select className="min-h-11 rounded-md border border-softBorder px-3" {...register("sellingTimeline")}>
            <option value="">Select timeline</option>
            <option value="now">Selling now</option>
            <option value="1-3-months">1–3 months</option>
            <option value="3-6-months">3–6 months</option>
            <option value="6-12-months">6–12 months</option>
            <option value="1-2-years">1–2 years</option>
            <option value="unsure">Not sure yet</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Questions or notes <span className="font-normal text-slateText">optional</span>
          <textarea
            className="min-h-24 rounded-md border border-softBorder px-3 py-3"
            placeholder="Anything else you want us to know?"
            {...register("message")}
          />
        </label>

        <label className="hidden">
          Leave this field blank
          <input tabIndex={-1} autoComplete="off" {...register("honeypot")} />
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

      <div className="mt-5 flex flex-col gap-3">
        <button
          type="submit"
          className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-deepInlet px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest disabled:opacity-60 sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : ctaLabel}
        </button>
        {status === "success" && (
          <p className="text-sm text-green-700">Thank you! We&apos;ll be in touch soon.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-700">Something went wrong. Please try again.</p>
        )}
      </div>
    </form>
  );
}
