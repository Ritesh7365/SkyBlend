import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import type { ProductFamily as ProductFamilyType } from "@/lib/products";

type ProductFamilyProps = {
  product: ProductFamilyType;
};

export function ProductFamily({ product }: ProductFamilyProps) {
  const encoded = encodeURIComponent(product.name);
  const hasGroups = product.grades.some((g) => g.group);
  const photos = product.photos ?? [];
  const gradeRows = product.grades.map((grade, index) => {
    const prev = product.grades[index - 1];
    const showGroup =
      hasGroups && Boolean(grade.group) && grade.group !== prev?.group;
    return { grade, showGroup };
  });

  return (
    <article
      id={product.id}
      className={`scroll-mt-28 border-t border-navy/10 py-10 sm:py-12 ${
        product.highlight ? "bg-surface" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.2fr] lg:gap-12">
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
              {product.carriers.join(" and ")}
            </p>
            <p className="mt-2 text-sm text-charcoal">
              <span className="font-semibold text-navy">Applications:</span>{" "}
              {product.applications.join(" · ")}
            </p>
            {photos.length > 0 ? (
              <div
                className={`mt-6 grid gap-3 ${
                  photos.length >= 3
                    ? "grid-cols-1 sm:grid-cols-3"
                    : photos.length > 1
                      ? "grid-cols-2"
                      : "grid-cols-1"
                }`}
              >
                {photos.map((photo) => (
                  <figure key={photo.src} className="min-w-0">
                    <div className="relative aspect-[1.333] overflow-hidden bg-navy/5">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 220px"
                        quality={65}
                        loading="lazy"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-2 text-xs font-medium tracking-[0.06em] text-slate uppercase">
                      {photo.alt.replace(/ masterbatch pellets$/i, "")}
                    </figcaption>
                  </figure>
                ))}
              </div>
            ) : null}
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

          <div>
            <h3 className="text-sm font-semibold tracking-[0.08em] text-navy uppercase">
              Catalogue grades ({product.grades.length})
            </h3>
            <div className="mt-4 overflow-x-auto border border-navy/10">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-navy/5">
                  <tr>
                    <th className="px-3 py-2.5 font-semibold text-navy">Grade</th>
                    <th className="px-3 py-2.5 font-semibold text-navy">Specs</th>
                    <th className="px-3 py-2.5 font-semibold text-navy">Colour</th>
                    <th className="px-3 py-2.5 font-semibold text-navy">
                      Application
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {gradeRows.map(({ grade, showGroup }) => (
                    <Fragment key={grade.code}>
                      {showGroup ? (
                        <tr className="bg-surface">
                          <td
                            colSpan={4}
                            className="px-3 py-2 text-xs font-semibold tracking-[0.1em] text-teal uppercase"
                          >
                            {grade.group}
                          </td>
                        </tr>
                      ) : null}
                      <tr className="border-t border-navy/10 align-top">
                        <td className="px-3 py-2.5 font-medium text-navy whitespace-nowrap">
                          {grade.code}
                        </td>
                        <td className="px-3 py-2.5 text-slate">
                          {grade.specs.map((s) => (
                            <div key={s.label}>
                              <span className="text-charcoal/70">{s.label}:</span>{" "}
                              {s.value}
                            </div>
                          ))}
                        </td>
                        <td className="px-3 py-2.5 text-slate">
                          {grade.colour ?? "—"}
                        </td>
                        <td className="px-3 py-2.5 text-slate">
                          {grade.application}
                        </td>
                      </tr>
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate">
              Specs from the SkyBlend product catalogue. Contact us for TDS and
              grade confirmation for your process.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
