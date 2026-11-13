import Link from "next/link";
import type { Market } from "@/lib/markets";
import { PRODUCT_FAMILIES } from "@/lib/products";

type MarketTileProps = {
  market: Market;
};

export function MarketTile({ market }: MarketTileProps) {
  const linked = PRODUCT_FAMILIES.filter((p) =>
    market.productIds.includes(p.id),
  );

  return (
    <article className="border-t border-navy/10 py-6 sm:py-7">
      <h3 className="font-display text-xl font-semibold tracking-tight text-navy">
        {market.name}
      </h3>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate sm:text-base">
        {market.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
        {linked.map((product) => (
          <li key={product.id}>
            <Link
              href={`/products#${product.id}`}
              className="focus-ring text-sm font-medium text-teal underline-offset-4 hover:underline"
            >
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
