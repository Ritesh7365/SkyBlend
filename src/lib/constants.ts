export const SITE = {
  name: "SkyBlend Masterbatch LLP",
  shortName: "SkyBlend",
  tagline: "SkyBlend – Quality, Consistency & Performance.",
  group: "Sky Group",
  location: "Morbi, Gujarat",
  description:
    "Manufacturer of White, Black, Colour, Additive and Filler masterbatches for PE, PP and engineering polymers — from Morbi, Gujarat.",
  url: "https://skyblend.in",
  // Replace remaining placeholders when confirmed
  email: "skyblendmasterbatchllp2026@gmail.com",
  phone: "+91 99792 36441",
  /** Digits only with country code for wa.me */
  whatsapp: "919979236441",
  gstin: "24AGBFS8785P1Z0",
  address:
    "Plot No. 21, S. No. 651 P1 & 651 P2, Lajai, Tankara, Morbi, Gujarat 363650, India",
  mapQuery:
    "Plot No. 21, Lajai, Tankara, Morbi, Gujarat 363650",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Plot+No.+21,+Lajai,+Tankara,+Morbi,+Gujarat+363650&output=embed",
  mapLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=Plot+No.+21,+Lajai,+Tankara,+Morbi,+Gujarat+363650",
  responseSla: "Technical reply within 1 business day.",
} as const;

export const PRIMARY_CTA = {
  href: "/contact?type=quote",
  label: "Request a Quote",
} as const;

export function getWhatsAppUrl(prefill?: string) {
  if (!SITE.whatsapp) return null;
  const text = encodeURIComponent(
    prefill ??
      `Hello SkyBlend — I'd like to discuss a masterbatch requirement.`,
  );
  return `https://wa.me/${SITE.whatsapp}?text=${text}`;
}
