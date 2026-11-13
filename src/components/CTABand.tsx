import Link from "next/link";
import { PRIMARY_CTA } from "@/lib/constants";

type CTABandProps = {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CTABand({
  title,
  description,
  primaryHref = PRIMARY_CTA.href,
  primaryLabel = PRIMARY_CTA.label,
  secondaryHref,
  secondaryLabel,
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        className="pointer-events-none absolute -right-16 -bottom-20 h-64 w-64 opacity-20"
        aria-hidden="true"
      >
        <img src="/icons/pellet-spiral.svg" alt="" className="h-full w-full" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/80 sm:text-lg">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href={primaryHref}
            className="focus-ring inline-flex min-h-11 items-center justify-center bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan"
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
