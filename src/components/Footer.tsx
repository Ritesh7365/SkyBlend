import Image from "next/image";
import Link from "next/link";
import { PRIMARY_CTA, SITE } from "@/lib/constants";
import { NAV_ITEMS } from "@/lib/navigation";
import { PRODUCT_FAMILIES } from "@/lib/products";

export function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <div className="inline-block rounded-sm bg-white p-2">
            <Image
              src="/logo.png"
              alt={`${SITE.name} logo`}
              width={286}
              height={231}
              className="h-14 w-auto object-contain"
            />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
            {SITE.tagline} Part of the {SITE.group}, manufacturing from{" "}
            {SITE.location}.
          </p>
          <Link
            href={PRIMARY_CTA.href}
            className="focus-ring mt-5 inline-flex min-h-11 items-center bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan"
          >
            {PRIMARY_CTA.label}
          </Link>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold tracking-[0.12em] text-cyan uppercase">
            Explore
          </h2>
          <ul className="mt-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring text-sm text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold tracking-[0.12em] text-cyan uppercase">
            Product families
          </h2>
          <ul className="mt-4 space-y-2">
            {PRODUCT_FAMILIES.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/products#${product.id}`}
                  className="focus-ring text-sm text-white/80 transition-colors hover:text-white"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-1 text-sm text-white/70">
            <p>{SITE.address}</p>
            <p>GSTIN: {SITE.gstin}</p>
            <p>{SITE.email}</p>
            <p>
              <a
                href="tel:+919157336441"
                className="transition-colors hover:text-white"
              >
                {SITE.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © 2026 {SITE.name}. All rights reserved.
          </p>
          <p>A {SITE.group} company · {SITE.location}</p>
        </div>
      </div>
    </footer>
  );
}
