import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactPageClient } from "@/components/ContactPageClient";
import { SectionHeading } from "@/components/SectionHeading";
import { getWhatsAppUrl, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a quote, sample or TDS from ${SITE.name}. Let's create better products together.`,
};

export default function ContactPage() {
  const whatsapp = getWhatsAppUrl();

  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold tracking-[0.16em] text-cyan uppercase">
            Contact
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Let’s create better products together.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Quote, sample or TDS — same technical team. {SITE.responseSla}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-16 lg:px-8 lg:py-16">
          <aside>
            <SectionHeading
              title="SkyBlend Masterbatch LLP"
              description={`Part of the ${SITE.group}. Based in ${SITE.location}.`}
            />
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="font-semibold tracking-[0.08em] text-navy uppercase">
                  Response
                </dt>
                <dd className="mt-1 text-slate">{SITE.responseSla}</dd>
              </div>
              <div>
                <dt className="font-semibold tracking-[0.08em] text-navy uppercase">
                  Address
                </dt>
                <dd className="mt-1 text-slate">{SITE.address}</dd>
              </div>
              <div>
                <dt className="font-semibold tracking-[0.08em] text-navy uppercase">
                  GSTIN
                </dt>
                <dd className="mt-1 text-slate">{SITE.gstin}</dd>
              </div>
              <div>
                <dt className="font-semibold tracking-[0.08em] text-navy uppercase">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-semibold text-teal underline-offset-4 hover:underline"
                  >
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold tracking-[0.08em] text-navy uppercase">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href="tel:+919157336441"
                    className="font-semibold text-teal underline-offset-4 hover:underline"
                  >
                    {SITE.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold tracking-[0.08em] text-navy uppercase">
                  WhatsApp
                </dt>
                <dd className="mt-1 text-slate">
                  {whatsapp ? (
                    <a
                      href={whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-teal underline-offset-4 hover:underline"
                    >
                      {SITE.phone} — Chat on WhatsApp
                    </a>
                  ) : null}
                </dd>
              </div>
              <div>
                <dt className="font-semibold tracking-[0.08em] text-navy uppercase">
                  Map
                </dt>
                <dd className="mt-1">
                  <a
                    href={SITE.mapLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-teal underline-offset-4 hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-8 text-sm leading-relaxed text-slate">
              {SITE.tagline}
            </p>
          </aside>

          <div className="border border-navy/10 bg-surface p-5 sm:p-8">
            <Suspense
              fallback={
                <p className="text-sm text-slate">Loading enquiry form…</p>
              }
            >
              <ContactPageClient />
            </Suspense>
          </div>
        </div>

        {SITE.mapEmbedUrl ? (
          <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
            <div className="overflow-hidden border border-navy/10 bg-surface">
              <iframe
                title="SkyBlend Masterbatch LLP location map"
                src={SITE.mapEmbedUrl}
                className="h-72 w-full border-0 sm:h-96"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}
