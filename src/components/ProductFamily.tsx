import Link from "next/link";
import type { ProductFamily as ProductFamilyType } from "@/lib/products";

type ProductFamilyProps = {
  product: ProductFamilyType;
};

export function ProductFamily({ product }: ProductFamilyProps) {
  const encoded = encodeURIComponent(product.name);

  return (
    <article
      id={product.id}
      className={`scroll-mt-28 border-t border-navy/10 py-10 sm:py-12 ${
        product.highlight ? "bg-surface" : "bg-white"
      }`}
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:px-8">
        <div>
          {product.highlight ? (
            <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-teal uppercase">
              Core strength
            </p>
          ) : null}
          <h2 className="font-display text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            {product.name}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate">
            {product.shortDesc}
          </p>
          {product.note ? (
            <p className="mt-3 text-sm leading-relaxed text-charcoal/80 italic">
              {product.note}
            </p>
          ) : null}
          <p className="mt-5 text-sm text-charcoal">
            <span className="font-semibold text-navy">Carriers:</span>{" "}
            {product.carriers.join(" · ")}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href={`/contact?type=quote&product=${encoded}`}
              className="focus-ring inline-flex min-h-11 items-center bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal"
            >
              Discuss your grade
            </Link>
            <Link
              href={`/contact?type=sample&product=${encoded}`}
              className="focus-ring inline-flex min-h-11 items-center border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-teal hover:text-teal"
            >
              Request a Sample
            </Link>
            <Link
              href={`/contact?type=tds&product=${encoded}`}
              className="focus-ring inline-flex min-h-11 items-center border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-teal hover:text-teal"
            >
              Request TDS
            </Link>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold tracking-[0.08em] text-navy uppercase">
              Benefits
            </h3>
            <ul className="mt-3 space-y-2">
              {product.benefits.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm leading-relaxed text-slate"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 bg-teal"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-[0.08em] text-navy uppercase">
              Example applications
            </h3>
            <ul className="mt-3 space-y-2">
              {product.applications.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-sm leading-relaxed text-slate"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 bg-cyan"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-slate">
              Contact us for TDS and available grades — we do not publish
              unverified capacity or lab claims.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
