"use client";

import { useSearchParams } from "next/navigation";
import { EnquiryForm, type EnquiryType } from "@/components/EnquiryForm";

function parseType(value: string | null): EnquiryType {
  if (value === "sample" || value === "tds" || value === "quote") return value;
  return "quote";
}

export function ContactPageClient() {
  const params = useSearchParams();
  const type = parseType(params.get("type"));
  const product = params.get("product") ?? "";
  const application = params.get("application") ?? "";

  return (
    <EnquiryForm
      key={`${type}-${product}-${application}`}
      type={type}
      defaultProduct={product}
      defaultApplication={application}
      showTypeTabs
    />
  );
}
