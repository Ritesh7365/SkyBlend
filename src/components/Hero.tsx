import Link from "next/link";
import { PelletMotif } from "@/components/PelletMotif";
import { SITE } from "@/lib/constants";

type HeroProps = {
  headline: string;
  support: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export function Hero({
  headline,
  support,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: HeroProps) {
  return (
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-navy text-white">
      {/* Full-bleed visual plane */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(0,163,173,0.35),transparent_55%),linear-gradient(160deg,#0B2A4A_0%,#0B2A4A_45%,#0a3d52_100%)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:18px_18px]" />
        <PelletMotif
          spin
          className="absolute top-1/2 right-[-8%] h-[min(90vw,38rem)] w-[min(90vw,38rem)] -translate-y-1/2 opacity-40 sm:right-[-4%] sm:opacity-50"
        />
        <div
          className="absolute right-0 bottom-0 left-0 h-24 bg-gradient-to-t from-[color:var(--surface)] to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <p className="animate-fade-up font-display text-sm font-semibold tracking-[0.18em] text-cyan uppercase sm:text-base">
          {SITE.shortName}
        </p>
        <h1 className="animate-fade-up-delay mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {headline}
        </h1>
        <p className="animate-fade-up-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          {support}
        </p>
        <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
          <Link
            href={primaryHref}
            className="focus-ring inline-flex min-h-11 items-center justify-center bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/45 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
