import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CTABand } from "@/components/CTABand";
import { SITE } from "@/lib/constants";
import { getArticle, KNOWLEDGE_ARTICLES } from "@/lib/knowledge";
import { getProductById } from "@/lib/products";
import { MARKETS } from "@/lib/markets";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return KNOWLEDGE_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Resources" };
  return {
    title: article.title,
    description: article.summary,
  };
}

export default function ResourceArticlePage({ params }: Props) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="h-8 w-40 animate-pulse bg-navy/10" />
          <div className="mt-4 h-12 w-3/4 animate-pulse bg-navy/10" />
          <div className="mt-6 h-24 w-full animate-pulse bg-navy/5" />
        </div>
      }
    >
      <ResourceArticle params={params} />
    </Suspense>
  );
}

async function ResourceArticle({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const relatedProducts = article.relatedProductIds
    .map((id) => getProductById(id))
    .filter(Boolean);
  const relatedMarkets = MARKETS.filter((m) =>
    article.relatedMarketIds.includes(m.id),
  );

  return (
    <>
      <article>
        <header className="bg-navy text-white">
          <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-sm font-semibold tracking-[0.16em] text-cyan uppercase">
              Resources · {article.readingMinutes} min read
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 text-base text-white/80 sm:text-lg">
              {article.summary}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          {article.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="font-display text-2xl font-semibold text-navy">
                {section.heading}
              </h2>
              {section.body.map((para) => (
                <p
                  key={para.slice(0, 32)}
                  className="mt-4 text-base leading-relaxed text-slate sm:text-lg"
                >
                  {para}
                </p>
              ))}
            </section>
          ))}

          <div className="border-t border-navy/10 pt-8">
            <h2 className="text-sm font-semibold tracking-[0.1em] text-navy uppercase">
              Related families
            </h2>
            <ul className="mt-3 flex flex-wrap gap-3">
              {relatedProducts.map((p) =>
                p ? (
                  <li key={p.id}>
                    <Link
                      href={`/products#${p.id}`}
                      className="focus-ring text-sm font-medium text-teal underline-offset-4 hover:underline"
                    >
                      {p.name}
                    </Link>
                  </li>
                ) : null,
              )}
            </ul>
            <h2 className="mt-6 text-sm font-semibold tracking-[0.1em] text-navy uppercase">
              Related markets
            </h2>
            <ul className="mt-3 flex flex-wrap gap-3">
              {relatedMarkets.map((m) => (
                <li key={m.id}>
                  <Link
                    href={`/markets#${m.id}`}
                    className="focus-ring text-sm font-medium text-teal underline-offset-4 hover:underline"
                  >
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-slate">
              <Link
                href="/resources"
                className="font-semibold text-navy underline-offset-4 hover:underline"
              >
                ← All resources
              </Link>
              {" · "}
              {SITE.tagline}
            </p>
          </div>
        </div>
      </article>

      <CTABand
        title="Turn this note into a trial."
        description="Request TDS, a sample or a quote — and tell us your polymer and process."
        primaryHref="/contact?type=tds"
        primaryLabel="Request TDS"
        secondaryHref="/find-grade"
        secondaryLabel="Find a Grade"
      />
    </>
  );
}
