import type { Metadata } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE } from "@/lib/constants";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Masterbatches from Morbi, Gujarat`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "masterbatch",
    "white masterbatch",
    "black masterbatch",
    "colour masterbatch",
    "additive masterbatch",
    "filler masterbatch",
    "Morbi",
    "Gujarat",
    "PE",
    "PP",
    "SkyBlend",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Quality, Consistency & Performance`,
    description: SITE.description,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: `${SITE.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "256x256" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  legalName: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  description: SITE.description,
  slogan: SITE.tagline,
  parentOrganization: {
    "@type": "Organization",
    name: SITE.group,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 21, S. No. 651 P1 & 651 P2, Lajai, Tankara",
    addressLocality: "Morbi",
    addressRegion: "Gujarat",
    postalCode: "363650",
    addressCountry: "IN",
  },
  telephone: "+919157336441",
  taxID: SITE.gstin,
  areaServed: "IN",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-surface font-sans text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
