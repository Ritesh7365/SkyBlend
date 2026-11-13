import type { Metadata } from "next";
import Link from "next/link";
import { GradeFinder } from "@/components/GradeFinder";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Find a Grade",
  description: `Interactive grade finder for ${SITE.name} — match polymer, process and need to White, Black, Colour, Additive or Filler masterbatches.`,
};

export default function FindGradePage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold tracking-[0.16em] text-cyan uppercase">
            Grade finder
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Find a starting masterbatch family in three steps.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Polymer → process → need. Then discuss grades, request a sample or
            ask for TDS. {SITE.responseSla}
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <GradeFinder />
          <p className="mt-6 text-sm text-slate">
            Prefer a human first?{" "}
            <Link
              href="/contact?type=quote"
              className="focus-ring font-semibold text-teal underline-offset-4 hover:underline"
            >
              Request a Quote
            </Link>{" "}
            or browse the{" "}
            <Link
              href="/markets#matrix"
              className="focus-ring font-semibold text-teal underline-offset-4 hover:underline"
            >
              product × market matrix
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
