import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { MarketTile } from "@/components/MarketTile";
import { ProductMarketMatrix } from "@/components/ProductMarketMatrix";
import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/constants";
import { MARKETS } from "@/lib/markets";
import { PHOTOS } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Markets",
  description: `Application markets served by ${SITE.name} — film, moulding, raffia, pipe, filament, agri film and sheet extrusion.`,
};

export default function MarketsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <Image
          src={PHOTOS.warehouse.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/65" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold tracking-[0.16em] text-cyan uppercase">
            Markets
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Application-mapped masterbatch solutions
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
            From blown film to sheet extrusion — each market links to the product
            families most often specified for that process.
          </p>
          <Link
            href="/find-grade"
            className="focus-ring mt-6 inline-flex min-h-11 items-center bg-teal px-5 py-2.5 text-sm font-semibold text-white hover:bg-cyan"
          >
            Find a Grade
          </Link>
        </div>
      </section>

      <section id="matrix" className="scroll-mt-24 border-b border-navy/10 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeading
            title="Product × market matrix"
            description="Filter by process or family to see where SkyBlend typically maps White, Black, Colour, Additive and Filler systems."
          />
          <div className="mt-8">
            <ProductMarketMatrix />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeading
            title="Where SkyBlend performs"
            description="Process notes for each market, with linked product families."
          />
          <div className="mt-4">
            {MARKETS.map((market) => (
              <div key={market.id} id={market.id} className="scroll-mt-28">
                <MarketTile market={market} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Let’s formulate together."
        description="Share your process, polymer and performance targets — we’ll help map the right masterbatch family and discuss grades."
        primaryLabel="Request a Quote"
        primaryHref="/contact?type=quote"
        secondaryHref="/find-grade"
        secondaryLabel="Find a Grade"
      />
    </>
  );
}
