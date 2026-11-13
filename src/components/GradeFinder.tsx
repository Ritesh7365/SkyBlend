"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  NEEDS,
  POLYMERS,
  runFinder,
  type FinderAnswers,
} from "@/lib/finder";
import { MARKETS } from "@/lib/markets";

const STEPS = ["Polymer", "Process", "Need", "Results"] as const;

export function GradeFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<FinderAnswers>({
    polymer: "",
    marketId: "",
    needId: "",
  });

  const result = useMemo(() => {
    if (!answers.polymer || !answers.marketId || !answers.needId) return null;
    return runFinder(answers);
  }, [answers]);

  function select<K extends keyof FinderAnswers>(key: K, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setStep((s) => Math.min(s + 1, 3));
  }

  function goBack() {
    setStep((s) => Math.max(0, s - 1));
  }

  function reset() {
    setAnswers({ polymer: "", marketId: "", needId: "" });
    setStep(0);
  }

  const optionClass =
    "focus-ring w-full border border-navy/15 bg-white px-4 py-3 text-left text-sm font-medium text-navy transition-colors hover:border-teal hover:bg-surface";

  return (
    <div className="border border-navy/10 bg-white">
      <div className="border-b border-navy/10 bg-surface px-4 py-4 sm:px-6">
        <ol className="flex flex-wrap gap-2" aria-label="Finder progress">
          {STEPS.map((label, index) => {
            const active = index === step;
            const done = index < step;
            return (
              <li
                key={label}
                className={`text-xs font-semibold tracking-[0.08em] uppercase ${
                  active
                    ? "text-teal"
                    : done
                      ? "text-navy"
                      : "text-slate"
                }`}
              >
                <span className="mr-1 tabular-nums">{index + 1}.</span>
                {label}
                {index < STEPS.length - 1 ? (
                  <span className="ml-2 text-navy/20" aria-hidden="true">
                    /
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>
      </div>

      <div className="px-4 py-6 sm:px-6 sm:py-8">
        {step === 0 ? (
          <fieldset>
            <legend className="font-display text-xl font-semibold text-navy sm:text-2xl">
              Which polymer system?
            </legend>
            <p className="mt-2 text-sm text-slate">
              We’ll filter families that match your carrier resin.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {POLYMERS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={optionClass}
                  onClick={() => select("polymer", p.id)}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </fieldset>
        ) : null}

        {step === 1 ? (
          <fieldset>
            <legend className="font-display text-xl font-semibold text-navy sm:text-2xl">
              Which process / market?
            </legend>
            <p className="mt-2 text-sm text-slate">
              Pick the line closest to your application.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {MARKETS.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  className={optionClass}
                  onClick={() => select("marketId", m.id)}
                >
                  {m.name}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={goBack}
              className="focus-ring mt-5 text-sm font-semibold text-teal underline-offset-4 hover:underline"
            >
              Back
            </button>
          </fieldset>
        ) : null}

        {step === 2 ? (
          <fieldset>
            <legend className="font-display text-xl font-semibold text-navy sm:text-2xl">
              What do you need most?
            </legend>
            <p className="mt-2 text-sm text-slate">
              Opacity, colour, additives, filler — or a combination.
            </p>
            <div className="mt-5 grid gap-3">
              {NEEDS.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  className={optionClass}
                  onClick={() => select("needId", n.id)}
                >
                  {n.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={goBack}
              className="focus-ring mt-5 text-sm font-semibold text-teal underline-offset-4 hover:underline"
            >
              Back
            </button>
          </fieldset>
        ) : null}

        {step === 3 && result ? (
          <div>
            <h2 className="font-display text-xl font-semibold text-navy sm:text-2xl">
              Suggested starting families
            </h2>
            <p className="mt-2 text-sm text-slate">
              Based on <strong className="font-semibold text-charcoal">{result.polymerLabel}</strong>
              {" · "}
              <strong className="font-semibold text-charcoal">{result.marketName}</strong>
              {" · "}
              <strong className="font-semibold text-charcoal">{result.needLabel}</strong>
            </p>

            {result.products.length > 0 ? (
              <ul className="mt-6 divide-y divide-navy/10 border-y border-navy/10">
                {result.products.map((product) => (
                  <li
                    key={product.id}
                    className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="font-display text-lg font-semibold text-navy">
                        {product.name}
                        {product.highlight ? (
                          <span className="ml-2 text-xs font-semibold tracking-[0.12em] text-teal uppercase">
                            Core
                          </span>
                        ) : null}
                      </p>
                      <p className="mt-1 max-w-xl text-sm text-slate">
                        {product.shortDesc}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={`/products#${product.id}`}
                        className="focus-ring inline-flex min-h-11 items-center border border-navy/20 px-4 py-2 text-sm font-semibold text-navy hover:border-teal hover:text-teal"
                      >
                        View family
                      </Link>
                      <Link
                        href={`/contact?type=quote&product=${encodeURIComponent(product.name)}&application=${encodeURIComponent(result.marketName)}`}
                        className="focus-ring inline-flex min-h-11 items-center bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-teal"
                      >
                        Discuss this grade
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 text-sm text-slate">
                No exact overlap —{" "}
                <Link
                  href="/contact?type=quote"
                  className="font-semibold text-teal underline-offset-4 hover:underline"
                >
                  talk to us
                </Link>{" "}
                with your resin and process details.
              </p>
            )}

            <ul className="mt-6 space-y-2">
              {result.notes.map((note) => (
                <li
                  key={note}
                  className="flex gap-2 text-sm leading-relaxed text-slate"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 bg-teal"
                    aria-hidden="true"
                  />
                  {note}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/contact?type=sample&application=${encodeURIComponent(result.marketName)}`}
                className="focus-ring inline-flex min-h-11 items-center bg-teal px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy"
              >
                Request a Sample
              </Link>
              <Link
                href={`/contact?type=tds&application=${encodeURIComponent(result.marketName)}`}
                className="focus-ring inline-flex min-h-11 items-center border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy hover:border-teal"
              >
                Request TDS
              </Link>
              <button
                type="button"
                onClick={reset}
                className="focus-ring inline-flex min-h-11 items-center px-3 text-sm font-semibold text-teal underline-offset-4 hover:underline"
              >
                Start over
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
