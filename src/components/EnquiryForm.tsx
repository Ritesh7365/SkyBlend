"use client";

import { useState, type FormEvent } from "react";
import {
  CATALOGUE_APPLICATIONS,
  PRODUCT_FAMILIES,
} from "@/lib/products";
import { SITE } from "@/lib/constants";

export type EnquiryType = "quote" | "sample" | "tds";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  productInterest: string;
  application: string;
  polymer: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const LABELS: Record<
  EnquiryType,
  { title: string; submit: string; success: string; messageHint: string }
> = {
  quote: {
    title: "Request a Quote",
    submit: "Request a Quote",
    success: "Thanks — your quote request is in. We aim to reply within 1 business day.",
    messageHint: "Polymer, process, volumes and performance needs…",
  },
  sample: {
    title: "Request a Sample",
    submit: "Request a Sample",
    success: "Thanks — your sample request is in. We’ll confirm feasibility and next steps.",
    messageHint: "Target shade/loading, resin grade and what you want to trial…",
  },
  tds: {
    title: "Request TDS / Grades",
    submit: "Request TDS",
    success: "Thanks — we’ll follow up with TDS / grade information for your enquiry.",
    messageHint: "Which process and polymer should the TDS cover?",
  },
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.company.trim()) errors.company = "Company is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (values.phone && !/^[\d\s+\-()]{7,20}$/.test(values.phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!values.productInterest) {
    errors.productInterest = "Select a product interest.";
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Please include a short message (at least 10 characters).";
  }
  return errors;
}

type EnquiryFormProps = {
  type?: EnquiryType;
  defaultProduct?: string;
  defaultApplication?: string;
  showTypeTabs?: boolean;
};

export function EnquiryForm({
  type = "quote",
  defaultProduct = "",
  defaultApplication = "",
  showTypeTabs = false,
}: EnquiryFormProps) {
  const [enquiryType, setEnquiryType] = useState<EnquiryType>(type);
  const [values, setValues] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    phone: "",
    productInterest: defaultProduct,
    application: defaultApplication,
    polymer: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitting, setSubmitting] = useState(false);

  const copy = LABELS[enquiryType];
  const fieldClass =
    "mt-1.5 w-full border border-navy/15 bg-white px-3 py-2.5 text-sm text-charcoal outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/25";

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, enquiryType }),
      });
      const payload = await res.json().catch(() => null);

      if (res.ok) {
        setStatus("success");
        setValues((prev) => ({
          ...prev,
          name: "",
          company: "",
          email: "",
          phone: "",
          polymer: "",
          message: "",
        }));
        return;
      }

      // Fallback if Resend is not configured yet
      if (res.status === 503) {
        const subject = encodeURIComponent(
          `${copy.title} — ${values.productInterest || "SkyBlend"}`,
        );
        const body = encodeURIComponent(
          [
            `Type: ${enquiryType}`,
            `Name: ${values.name}`,
            `Company: ${values.company}`,
            `Email: ${values.email}`,
            `Phone: ${values.phone || "—"}`,
            `Product interest: ${values.productInterest}`,
            `Application / Market: ${values.application || "—"}`,
            `Polymer: ${values.polymer || "—"}`,
            "",
            values.message,
          ].join("\n"),
        );
        window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
        setStatus("success");
        return;
      }

      console.error("[enquiry]", payload?.error || res.statusText);
      setStatus("error");
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      {showTypeTabs ? (
        <div
          className="mb-6 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Enquiry type"
        >
          {(
            [
              ["quote", "Quote"],
              ["sample", "Sample"],
              ["tds", "TDS / Grades"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={enquiryType === id}
              onClick={() => {
                setEnquiryType(id);
                setStatus("idle");
              }}
              className={`focus-ring min-h-11 px-4 py-2 text-sm font-semibold transition-colors ${
                enquiryType === id
                  ? "bg-navy text-white"
                  : "border border-navy/15 text-navy hover:border-teal hover:text-teal"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      ) : null}

      <h2 className="font-display text-2xl font-semibold text-navy">
        {copy.title}
      </h2>
      <p className="mt-2 text-sm text-slate">
        {SITE.responseSla} Fields marked with * are required.
      </p>

      <form
        onSubmit={onSubmit}
        noValidate
        className="mt-6 space-y-5"
        aria-describedby="enquiry-note"
      >
        <p id="enquiry-note" className="sr-only">
          Submissions are emailed to SkyBlend via Resend when configured.
        </p>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-navy">
              Name *
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              className={fieldClass}
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name ? (
              <p className="mt-1 text-sm text-red-700">{errors.name}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="company" className="text-sm font-medium text-navy">
              Company *
            </label>
            <input
              id="company"
              name="company"
              autoComplete="organization"
              className={fieldClass}
              value={values.company}
              onChange={(e) => update("company", e.target.value)}
              aria-invalid={Boolean(errors.company)}
            />
            {errors.company ? (
              <p className="mt-1 text-sm text-red-700">{errors.company}</p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-navy">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={fieldClass}
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email ? (
              <p className="mt-1 text-sm text-red-700">{errors.email}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="phone" className="text-sm font-medium text-navy">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={fieldClass}
              value={values.phone}
              onChange={(e) => update("phone", e.target.value)}
              aria-invalid={Boolean(errors.phone)}
            />
            {errors.phone ? (
              <p className="mt-1 text-sm text-red-700">{errors.phone}</p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="productInterest"
              className="text-sm font-medium text-navy"
            >
              Product interest *
            </label>
            <select
              id="productInterest"
              name="productInterest"
              className={fieldClass}
              value={values.productInterest}
              onChange={(e) => update("productInterest", e.target.value)}
              aria-invalid={Boolean(errors.productInterest)}
            >
              <option value="">Select a product</option>
              {PRODUCT_FAMILIES.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
            {errors.productInterest ? (
              <p className="mt-1 text-sm text-red-700">
                {errors.productInterest}
              </p>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="application"
              className="text-sm font-medium text-navy"
            >
              Application
            </label>
            <select
              id="application"
              name="application"
              className={fieldClass}
              value={values.application}
              onChange={(e) => update("application", e.target.value)}
            >
              <option value="">Select if known</option>
              {CATALOGUE_APPLICATIONS.map((app) => (
                <option key={app} value={app}>
                  {app}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="polymer" className="text-sm font-medium text-navy">
            Polymer
          </label>
          <select
            id="polymer"
            name="polymer"
            className={fieldClass}
            value={values.polymer}
            onChange={(e) => update("polymer", e.target.value)}
          >
            <option value="">Select if known</option>
            <option value="PE">PE</option>
            <option value="PP">PP</option>
            <option value="Engineering polymers">Engineering polymers</option>
            <option value="Other / blend">Other / blend</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-navy">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={fieldClass}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={Boolean(errors.message)}
            placeholder={copy.messageHint}
          />
          {errors.message ? (
            <p className="mt-1 text-sm text-red-700">{errors.message}</p>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="focus-ring inline-flex min-h-11 items-center bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Sending…" : copy.submit}
          </button>
          {status === "success" ? (
            <p className="text-sm font-medium text-teal" role="status">
              {copy.success}
            </p>
          ) : null}
          {status === "error" ? (
            <p className="text-sm font-medium text-red-700" role="alert">
              Something went wrong. Please try again or email us directly.
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
