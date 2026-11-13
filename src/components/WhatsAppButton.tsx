"use client";

import Link from "next/link";
import { getWhatsAppUrl, SITE } from "@/lib/constants";

export function WhatsAppButton() {
  const url = getWhatsAppUrl();
  const className =
    "focus-ring fixed right-4 bottom-4 z-[60] inline-flex min-h-12 items-center gap-2 rounded-sm bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(11,42,74,0.28)] transition-colors hover:bg-[#1ebe57] sm:right-6 sm:bottom-6";

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
    );
  }

  // Visible on all breakpoints until SITE.whatsapp is configured
  return (
    <Link
      href="/contact?type=quote"
      className={className}
      aria-label="WhatsApp enquiry — opens contact form until number is set"
      title={`Set SITE.whatsapp to enable chat. ${SITE.responseSla}`}
    >
      <WhatsAppIcon />
      WhatsApp
    </Link>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2zm0 1.82c4.46 0 8.09 3.63 8.09 8.09 0 4.46-3.63 8.09-8.09 8.09-1.42 0-2.81-.37-4.03-1.07l-.29-.17-3.12.82.83-3.04-.19-.31a8.05 8.05 0 0 1-1.23-4.32c0-4.46 3.63-8.09 8.09-8.09zm4.57 10.58c-.22-.11-1.32-.65-1.52-.73-.2-.07-.35-.11-.5.11-.15.22-.58.73-.71.88-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.09-.65-.58-1.1-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.21-.69-1.66-.18-.43-.37-.37-.5-.38h-.43c-.15 0-.39.06-.6.28-.2.22-.79.77-.79 1.88s.81 2.18.92 2.33c.11.15 1.59 2.43 3.86 3.41.54.23.96.37 1.29.48.54.17 1.04.15 1.43.09.44-.06 1.32-.54 1.51-1.06.19-.52.19-.97.13-1.06-.05-.09-.2-.15-.42-.26z" />
    </svg>
  );
}
