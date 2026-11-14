import Image from "next/image";
import Link from "next/link";
import { PelletMotif } from "@/components/PelletMotif";
import { SITE } from "@/lib/constants";
import { PHOTOS } from "@/lib/photos";

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
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={PHOTOS.hero.src}
          alt={PHOTOS.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_40%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(11,42,74,0.86)_0%,rgba(11,42,74,0.58)_46%,rgba(11,42,74,0.2)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_28%,rgba(0,163,173,0.16),transparent_52%)]" />
        <PelletMotif
          spin
          className="absolute top-1/2 right-[-12%] h-[min(70vw,28rem)] w-[min(70vw,28rem)] -translate-y-1/2 opacity-10 sm:opacity-20"
        />
        <div className="absolute right-0 bottom-0 left-0 h-28 bg-gradient-to-t from-[color:var(--surface)] to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <p className="animate-fade-up font-display text-sm font-semibold tracking-[0.18em] text-cyan uppercase sm:text-base">
          {SITE.shortName}
        </p>
        <h1 className="animate-fade-up-delay mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {headline}
        </h1>
        <p className="animate-fade-up-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
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
            className="focus-ring inline-flex min-h-11 items-center justify-center border border-white/50 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/15"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
