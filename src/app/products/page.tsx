import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { FacilityImage } from "@/components/FacilityImage";
import { ProductFamily } from "@/components/ProductFamily";
import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/constants";
import { PHOTOS } from "@/lib/photos";
import { PRODUCT_FAMILIES } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description: `SkyBlend product catalogue — White, Black, Colour, Additive, Filler, Desiccant and Transparent grades from ${SITE.name}.`,
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <Image
          src={PHOTOS.quality.src}
          alt=""
          fill
          priority
          fetchPriority="high"
          quality={65}
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold tracking-[0.16em] text-cyan uppercase">
            Products
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            SkyBlend product catalogue
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
            White, black, colour, additive, CaCO₃ filler, desiccant and
            transparent sodium-filler grades — with codes and specs from our
            product catalogue. Contact us for TDS confirmation.
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
            title="Catalogue families"
            description="Each family lists current catalogue grades with active content / pigment type, colour and application. CaCO₃ filler remains a SkyBlend core strength."
          />
        </div>
        {PRODUCT_FAMILIES.map((product) => (
          <ProductFamily key={product.id} product={product} />
        ))}
      </section>

      <section className="border-t border-navy/10 bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <FacilityImage
            src={PHOTOS.warehouse.src}
            alt={PHOTOS.warehouse.alt}
            caption={PHOTOS.warehouse.caption}
            aspect="video"
            overlay="navy"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div>
            <p className="max-w-3xl text-base leading-relaxed text-slate sm:text-lg">
              Need a custom shade, additive package or filler loading for a
              specific line?{" "}
              <Link
                href="/contact?type=tds"
                className="focus-ring font-semibold text-teal underline-offset-4 hover:underline"
              >
                Contact us for TDS and grades
              </Link>
              .
            </p>
          </div>
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
