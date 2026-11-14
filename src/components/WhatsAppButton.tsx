"use client";

import Link from "next/link";
import { getWhatsAppUrl, SITE } from "@/lib/constants";

export function WhatsAppButton() {
  const url = getWhatsAppUrl();
  const label = url
    ? "Chat on WhatsApp"
    : "WhatsApp enquiry — opens contact form until number is set";

  const content = (
    <>
      <span
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#25D366]/40 blur-md transition-opacity duration-300 group-hover:opacity-90"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -inset-1 -z-10 animate-[wa-pulse_2.4s_ease-out_infinite] rounded-full border-2 border-[#25D366]/50"
        aria-hidden="true"
      />
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_2px_6px_rgba(0,0,0,0.12)]">
        <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />
      </span>
      <span className="relative flex flex-col items-start pr-1 leading-tight">
        <span className="text-[13px] font-semibold tracking-wide text-white">
          WhatsApp
        </span>
        <span className="text-[10px] font-medium tracking-wide text-white/85">
          Chat with us
        </span>
      </span>
    </>
  );

  const className =
    "group focus-ring fixed right-4 bottom-4 z-[60] inline-flex items-center gap-3 rounded-full bg-[linear-gradient(145deg,#2FE36B_0%,#25D366_45%,#128C7E_100%)] py-2.5 pr-5 pl-2.5 text-white shadow-[0_10px_28px_rgba(18,140,126,0.45),0_2px_8px_rgba(11,42,74,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(18,140,126,0.55),0_4px_12px_rgba(11,42,74,0.2)] sm:right-6 sm:bottom-6";

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={label}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href="/contact?type=quote"
      className={className}
      aria-label={label}
      title={`Set SITE.whatsapp to enable chat. ${SITE.responseSla}`}
    >
      {content}
    </Link>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.05-.11-.22-.16-.47-.28z" />
    </svg>
  );
}
