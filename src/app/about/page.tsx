import type { Metadata } from "next";
import Image from "next/image";
import { CTABand } from "@/components/CTABand";
import { FacilityGallery } from "@/components/FacilityGallery";
import { FacilityImage } from "@/components/FacilityImage";
import { PelletDivider } from "@/components/PelletMotif";
import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/constants";
import { PHOTOS } from "@/lib/photos";

export const metadata: Metadata = {
  title: "About",
  description: `About ${SITE.name} — Sky Group, Morbi Gujarat manufacturer of masterbatches with 15+ years of industry experience.`,
};

const VALUES = [
  "Clarity in Thought",
  "Integrity in Action",
  "Trust in Quality",
  "Customer First",
  "Value Driven",
  "Commitment Honoured",
  "Open to Change",
];

const WHY = [
  "Specialty and custom formulations for demanding applications",
  "Optimisation to your application, machine and process",
  "Consistent quality you can plan production around",
  "Support for process improvement and cost optimisation",
  "Long-term partnerships built on technical trust",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[28rem] overflow-hidden bg-navy text-white sm:min-h-[32rem]">
        <Image
          src={PHOTOS.exterior.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(11,42,74,0.92)_0%,rgba(11,42,74,0.72)_55%,rgba(11,42,74,0.5)_100%)]" />
        <div className="relative mx-auto flex min-h-[28rem] max-w-6xl flex-col justify-end px-4 py-16 sm:min-h-[32rem] sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold tracking-[0.16em] text-cyan uppercase">
            About
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            SkyBlend Masterbatch LLP
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
            Part of the {SITE.group}. Manufacturing from {SITE.location}.{" "}
            {SITE.tagline}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-16">
          <div>
            <SectionHeading title="About Us" />
            <PelletDivider />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate sm:text-lg">
              <p>
                SkyBlend Masterbatch LLP is a part of the Sky Group and a Morbi,
                Gujarat-based manufacturer of PE- and PP-based Filler
                Masterbatches, alongside White, Black, Colour and Additive
                Masterbatches based on PE, PP and engineering polymers.
              </p>
              <p>
                With over 15 years of industry experience in Morbi, we serve
                applications including injection moulding, blow moulding,
                rotational moulding, raffia & FIBC, blown & cast film, mono &
                multifilament, pipe & profile extrusion, agricultural films, and
                sheet extrusion (PP, HIPS, PC & PET).
              </p>
            </div>
          </div>
          <FacilityImage
            src={PHOTOS.office.src}
            alt={PHOTOS.office.alt}
            caption={PHOTOS.office.caption}
            aspect="video"
            overlay="navy"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </section>

      <FacilityGallery />

      <section className="border-y border-navy/10 bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
          <div>
            <SectionHeading title="Vision" />
            <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
              To be a trusted partner delivering high-performance,
              application-specific masterbatches that combine consistent quality
              with processing efficiency.
            </p>
          </div>
          <div>
            <SectionHeading title="Mission" />
            <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
              To provide reliable, cost-effective and technically superior
              masterbatch solutions through innovation, process expertise and a
              deep understanding of customer applications.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeading
            title="Core Values"
            description="The principles that guide how we formulate, manufacture and partner."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => (
              <li
                key={value}
                className="border-l-2 border-teal pl-4 py-2 text-base font-medium text-navy"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-16">
          <FacilityImage
            src={PHOTOS.quality.src}
            alt={PHOTOS.quality.alt}
            caption={PHOTOS.quality.caption}
            aspect="video"
            overlay="navy"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div>
            <SectionHeading title="Why SkyBlend" />
            <ul className="mt-8 space-y-4">
              {WHY.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-base leading-relaxed text-slate sm:text-lg"
                >
                  <span
                    className="mt-2.5 h-2 w-2 shrink-0 bg-teal"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeading
            title="Leadership"
            description="Experience across manufacturing capability, market presence and technical process excellence."
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <article className="border-t border-navy/15 pt-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="relative h-44 w-36 shrink-0 overflow-hidden bg-navy/5 ring-1 ring-navy/10 sm:h-52 sm:w-40">
                  <Image
                    src={PHOTOS.founder.src}
                    alt={PHOTOS.founder.alt}
                    width={900}
                    height={1125}
                    className="h-full w-full object-cover object-top"
                    sizes="160px"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-navy">
                    HiteshBhai Patel
                  </h3>
                  <p className="mt-1 text-sm font-semibold tracking-[0.1em] text-teal uppercase">
                    Founder
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-slate">
                    With 20+ years of industry experience, HiteshBhai Patel has
                    built SkyBlend’s manufacturing capabilities and market
                    presence — grounding the company in practical industry
                    knowledge and customer relationships.
                  </p>
                </div>
              </div>
            </article>
            <article className="border-t border-navy/15 pt-6">
              <h3 className="font-display text-2xl font-semibold text-navy">
                Prasanta Maharana
              </h3>
              <p className="mt-1 text-sm font-semibold tracking-[0.1em] text-teal uppercase">
                Technical Partner
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate">
                With 32 years of experience spanning greenfield projects, process
                optimisation, product development, cost-effective formulations,
                machine configuration and modification, raw-material selection
                and training, Prasanta Maharana brings deep technical partnership
                to every engagement.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeading title="Partner With Us" />
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate sm:text-lg">
            Bring us your polymer, process and performance targets. We combine
            technical depth with practical results — masterbatches that perform
            batch after batch. Let’s create better products together.
          </p>
        </div>
      </section>

      <CTABand
        title="Let’s create better products together."
        description="Request a quote or start a technical discussion with the SkyBlend team."
      />
    </>
  );
}
