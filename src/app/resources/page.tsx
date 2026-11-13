import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/constants";
import { KNOWLEDGE_ARTICLES } from "@/lib/knowledge";

export const metadata: Metadata = {
  title: "Resources",
  description: `Practical process notes from ${SITE.name} on dispersion, additives, filler loadings, colour matching and agricultural films.`,
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold tracking-[0.16em] text-cyan uppercase">
            Resources
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Process notes for people who run lines.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Short, practical guidance — no invented lab numbers. Pair these with
            Find a Grade or a TDS request when you’re ready to trial.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <SectionHeading
            title="Knowledge notes"
            description="Written for processors evaluating masterbatch choices across film, raffia, moulding and outdoor applications."
          />
          <ul className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
            {KNOWLEDGE_ARTICLES.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/resources/${article.slug}`}
                  className="focus-ring group flex flex-col gap-3 py-6 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <div className="max-w-2xl">
                    <h2 className="font-display text-xl font-semibold text-navy group-hover:text-teal">
                      {article.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate sm:text-base">
                      {article.summary}
                    </p>
                    <p className="mt-3 flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold tracking-[0.08em] text-teal uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-medium text-slate">
                    {article.readingMinutes} min read
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-slate">
            Ready to shortlist a family?{" "}
            <Link
              href="/find-grade"
              className="font-semibold text-teal underline-offset-4 hover:underline"
            >
              Use the grade finder
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
