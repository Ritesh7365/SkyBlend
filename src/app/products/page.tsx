import type { Metadata } from "next";
import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { ProductFamily } from "@/components/ProductFamily";
import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/constants";
import { PRODUCT_FAMILIES } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description: `White, Black, Colour, Additive and Filler masterbatches from ${SITE.name} for PE, PP and engineering polymers.`,
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold tracking-[0.16em] text-cyan uppercase">
            Products
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Masterbatch families for PE, PP & engineering polymers
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Regular, specialty and customised grades. Contact us for TDS and
            available grades — we do not publish unverified capacity or lab
            claims.
          </p>
          <nav
            aria-label="Product families"
            className="mt-8 flex flex-wrap gap-x-4 gap-y-2"
          >
            {PRODUCT_FAMILIES.map((product) => (
              <a
                key={product.id}
                href={`#${product.id}`}
                className="focus-ring text-sm font-medium text-cyan underline-offset-4 hover:underline"
              >
                {product.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
          <SectionHeading
            title="Choose a family"
            description="Each family below outlines carriers, benefits and example applications. Filler masterbatches (PE & PP) are a core SkyBlend strength."
          />
        </div>
        {PRODUCT_FAMILIES.map((product) => (
          <ProductFamily key={product.id} product={product} />
        ))}
      </section>

      <section className="border-t border-navy/10 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="max-w-3xl text-base text-slate">
            Need a custom shade, additive package or filler loading for a
            specific line?{" "}
            <Link
              href="/contact"
              className="focus-ring font-semibold text-teal underline-offset-4 hover:underline"
            >
              Contact us for TDS and grades
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABand
        title="Discuss your grade with SkyBlend."
        description="Tell us your polymer, process and performance targets — we’ll help shortlist or customise the right masterbatch."
        primaryLabel="Request a Quote"
      />
    </>
  );
}
