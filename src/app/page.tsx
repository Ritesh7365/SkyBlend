import Link from "next/link";
import { CTABand } from "@/components/CTABand";
import { FacilityGallery } from "@/components/FacilityGallery";
import { FacilityImage } from "@/components/FacilityImage";
import { Hero } from "@/components/Hero";
import { PelletDivider } from "@/components/PelletMotif";
import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/constants";
import { MARKETS } from "@/lib/markets";
import { PHOTOS } from "@/lib/photos";
import { PRODUCT_FAMILIES } from "@/lib/products";

const WHY = [
  {
    title: "Specialty & custom formulations",
    text: "Regular, specialty and customised masterbatch solutions matched to polymer and process.",
  },
  {
    title: "Application-led optimisation",
    text: "Grades tuned to your machine, process window and end-use performance targets.",
  },
  {
    title: "Consistent quality",
    text: "Batch-to-batch reliability so production teams can run with confidence.",
  },
  {
    title: "Process & cost support",
    text: "Technical partnership that looks beyond pigment — towards efficiency and value.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        headline="Masterbatches engineered for performance."
        support="White, Black, Colour, Additive & Filler masterbatches for PE, PP and engineering polymers — from Morbi, Gujarat."
        primaryHref="/find-grade"
        primaryLabel="Find a Grade"
        secondaryHref="/contact?type=quote"
        secondaryLabel="Talk to Us"
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
          <div>
            <SectionHeading
              eyebrow="Company"
              title="SkyBlend Masterbatch LLP"
              description="A part of the Sky Group — manufacturing from Morbi, Gujarat."
            />
            <PelletDivider />
            <p className="mt-6 text-base leading-relaxed text-slate sm:text-lg">
              SkyBlend Masterbatch LLP, a part of the Sky Group, is a Morbi,
              Gujarat-based manufacturer of White, Black, Colour, and Additive
              Masterbatches for PE, PP and Engineering Polymers, including PE-
              and PP-based Filler Masterbatches. With over 15 years of industry
              experience, we specialise in regular, specialty and customised
              masterbatch solutions across film, moulding, raffia, pipe, fibre
              and sheet applications. {SITE.tagline}
            </p>
            <Link
              href="/about"
              className="focus-ring mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-teal underline-offset-4 hover:underline"
            >
              Read our story
            </Link>
          </div>
          <FacilityImage
            src={PHOTOS.quality.src}
            alt={PHOTOS.quality.alt}
            caption={PHOTOS.quality.caption}
            aspect="video"
            sizes="(max-width: 1024px) 100vw, 45vw"
            overlay="navy"
          />
        </div>
      </section>

      <FacilityGallery />

      <section className="border-y border-navy/10 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Products"
            title="Masterbatch families"
            description="Catalogue families: white, black, colour, additive, CaCO₃ filler, desiccant and transparent sodium filler — with grade codes on the Products page."
          />
          <ul className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
            {PRODUCT_FAMILIES.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/products#${product.id}`}
                  className="focus-ring group flex flex-col gap-2 py-5 transition-colors sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="font-display text-xl font-semibold text-navy group-hover:text-teal">
                    {product.name}
                    {product.highlight ? (
                      <span className="ml-2 text-xs font-semibold tracking-[0.12em] text-teal uppercase">
                        Core
                      </span>
                    ) : null}
                  </span>
                  <span className="max-w-xl text-sm text-slate sm:text-right">
                    {product.carriers.join(" · ")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Markets"
            title="Built for real processing lines"
            description="From film and fibre to moulding, pipe and sheet — mapped to the families that fit."
          />
          <div className="mt-10 flex flex-wrap gap-x-4 gap-y-3">
            {MARKETS.map((market) => (
              <Link
                key={market.id}
                href={`/markets#${market.id}`}
                className="focus-ring border-b border-navy/20 pb-0.5 text-sm font-medium text-navy transition-colors hover:border-teal hover:text-teal"
              >
                {market.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white content-visibility-auto">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Why SkyBlend"
            title="Technical depth. Practical results."
            light
          />
          <ul className="mt-10 grid gap-8 sm:grid-cols-2">
            {WHY.map((item) => (
              <li key={item.title}>
                <h3 className="font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABand
        title="Partner with a masterbatch team that stays with the process."
        description="Share your polymer, application and performance targets — we'll help formulate grades that hold up batch after batch."
        primaryLabel="Request a Quote"
        primaryHref="/contact"
        secondaryHref="/products"
        secondaryLabel="Browse products"
      />

      <section className="border-t border-navy/10 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Tools"
            title="Shortlist faster than a brochure."
            description="Use the grade finder, product × market matrix and process notes — then request a quote, sample or TDS."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/find-grade"
              className="focus-ring inline-flex min-h-11 items-center bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal"
            >
              Find a Grade
            </Link>
            <Link
              href="/markets#matrix"
              className="focus-ring inline-flex min-h-11 items-center border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy hover:border-teal"
            >
              View matrix
            </Link>
            <Link
              href="/resources"
              className="focus-ring inline-flex min-h-11 items-center border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy hover:border-teal"
            >
              Resources
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s start a technical conversation."
            description={`${SITE.location} · Part of the ${SITE.group}. ${SITE.responseSla}`}
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact?type=quote"
              className="focus-ring inline-flex min-h-11 items-center bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy"
            >
              Request a Quote
            </Link>
            <Link
              href="/contact?type=sample"
              className="focus-ring inline-flex min-h-11 items-center border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy hover:border-teal"
            >
              Request a Sample
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
