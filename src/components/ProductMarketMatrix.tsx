"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { MARKETS } from "@/lib/markets";
import { PRODUCT_FAMILIES } from "@/lib/products";

export function ProductMarketMatrix() {
  const [activeMarket, setActiveMarket] = useState<string | "all">("all");
  const [activeProduct, setActiveProduct] = useState<string | "all">("all");

  const rows = useMemo(() => {
    return MARKETS.filter(
      (m) => activeMarket === "all" || m.id === activeMarket,
    ).map((market) => ({
      market,
      products: PRODUCT_FAMILIES.filter((p) => {
        if (!market.productIds.includes(p.id)) return false;
        if (activeProduct !== "all" && p.id !== activeProduct) return false;
        return true;
      }),
    }));
  }, [activeMarket, activeProduct]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          <div>
            <label
              htmlFor="matrix-market"
              className="text-xs font-semibold tracking-[0.1em] text-navy uppercase"
            >
              Filter by market
            </label>
            <select
              id="matrix-market"
              className="mt-1.5 w-full border border-navy/15 bg-white px-3 py-2.5 text-sm text-charcoal outline-none focus:border-teal focus:ring-2 focus:ring-teal/25"
              value={activeMarket}
              onChange={(e) =>
                setActiveMarket(e.target.value as string | "all")
              }
            >
              <option value="all">All markets</option>
              {MARKETS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="matrix-product"
              className="text-xs font-semibold tracking-[0.1em] text-navy uppercase"
            >
              Filter by product family
            </label>
            <select
              id="matrix-product"
              className="mt-1.5 w-full border border-navy/15 bg-white px-3 py-2.5 text-sm text-charcoal outline-none focus:border-teal focus:ring-2 focus:ring-teal/25"
              value={activeProduct}
              onChange={(e) =>
                setActiveProduct(e.target.value as string | "all")
              }
            >
              <option value="all">All families</option>
              {PRODUCT_FAMILIES.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-sm text-slate">
          Linked cells open the product family. Empty cells mean that family is
          not a primary fit for the process.
        </p>
      </div>

      <div className="mt-8 overflow-x-auto">
        <table className="min-w-[640px] w-full border-collapse text-left text-sm">
          <caption className="sr-only">
            Product families mapped to processing markets
          </caption>
          <thead>
            <tr className="border-b border-navy/15">
              <th
                scope="col"
                className="py-3 pr-4 font-semibold tracking-[0.06em] text-navy uppercase"
              >
                Market
              </th>
              {PRODUCT_FAMILIES.map((p) => (
                <th
                  key={p.id}
                  scope="col"
                  className="px-2 py-3 text-center font-semibold text-navy"
                >
                  <span className="block text-xs leading-snug">{p.name.replace(" Masterbatch", "")}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MARKETS.map((market) => {
              const visible =
                (activeMarket === "all" || market.id === activeMarket) &&
                (activeProduct === "all" ||
                  market.productIds.includes(activeProduct));
              if (!visible) return null;
              return (
                <tr key={market.id} className="border-b border-navy/10">
                  <th
                    scope="row"
                    className="py-3 pr-4 font-medium text-charcoal"
                  >
                    <Link
                      href={`/markets#${market.id}`}
                      className="focus-ring text-navy underline-offset-4 hover:text-teal hover:underline"
                    >
                      {market.name}
                    </Link>
                  </th>
                  {PRODUCT_FAMILIES.map((product) => {
                    const match = market.productIds.includes(product.id);
                    const dimmed =
                      activeProduct !== "all" && activeProduct !== product.id;
                    return (
                      <td key={product.id} className="px-2 py-3 text-center">
                        {match && !dimmed ? (
                          <Link
                            href={`/products#${product.id}`}
                            className="focus-ring inline-flex h-8 w-8 items-center justify-center bg-teal/15 text-teal"
                            title={`${product.name} for ${market.name}`}
                            aria-label={`${product.name} for ${market.name}`}
                          >
                            <span aria-hidden="true">●</span>
                          </Link>
                        ) : (
                          <span className="inline-block h-2 w-2 bg-navy/10" aria-hidden="true" />
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {rows.every((r) => r.products.length === 0) ? (
        <p className="mt-4 text-sm text-slate">
          No matches for this filter combination.{" "}
          <button
            type="button"
            className="font-semibold text-teal underline-offset-4 hover:underline"
            onClick={() => {
              setActiveMarket("all");
              setActiveProduct("all");
            }}
          >
            Reset filters
          </button>
        </p>
      ) : null}
    </div>
  );
}
