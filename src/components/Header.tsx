"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { PRIMARY_CTA, SITE } from "@/lib/constants";
import { NAV_ITEMS, type NavItem } from "@/lib/navigation";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  const base = href.split("#")[0].split("?")[0];
  return pathname === base || pathname.startsWith(`${base}/`);
}

function Chevron({ open }: { open?: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DesktopDropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const active = isActive(pathname, item.href);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearClose() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function scheduleClose() {
    clearClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
      clearClose();
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const children = item.children ?? [];
  const wide = children.length > 8;

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => {
        clearClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        className={`focus-ring inline-flex items-center gap-1 px-2.5 py-2 text-[13px] font-medium transition-colors ${
          active
            ? "text-navy underline decoration-teal decoration-2 underline-offset-8"
            : "text-charcoal hover:text-navy"
        }`}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <Chevron open={open} />
      </button>

      <div
        id={menuId}
        role="menu"
        hidden={!open}
        className={`absolute top-full left-0 z-50 mt-1 border border-navy/10 bg-white py-2 shadow-[0_12px_32px_rgba(11,42,74,0.12)] ${
          wide ? "w-[22rem] columns-1" : "min-w-[15rem]"
        } ${open ? "block" : "hidden"}`}
      >
        <div className={wide ? "max-h-[70vh] overflow-y-auto" : undefined}>
          {children.map((child) => (
            <Link
              key={child.href + child.label}
              href={child.href}
              prefetch={false}
              role="menuitem"
              className="focus-ring block px-4 py-2.5 text-sm text-charcoal transition-colors hover:bg-surface hover:text-navy"
              onClick={() => setOpen(false)}
            >
              <span className="font-medium">{child.label}</span>
              {child.description ? (
                <span className="mt-0.5 block text-xs text-slate">
                  {child.description}
                </span>
              ) : null}
            </Link>
          ))}
        </div>
        <div className="mt-1 border-t border-navy/10 px-4 py-2">
          <Link
            href={item.href}
            className="focus-ring text-xs font-semibold tracking-[0.08em] text-teal uppercase"
            onClick={() => setOpen(false)}
          >
            View all {item.label}
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const active = isActive(pathname, item.href);

  if (!item.children?.length) {
    return (
      <Link
        href={item.href}
        className={`focus-ring py-3 text-base font-medium ${
          active ? "text-teal" : "text-navy"
        }`}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-navy/5">
      <div className="flex items-center justify-between gap-2">
        <Link
          href={item.href}
          className={`focus-ring flex-1 py-3 text-base font-medium ${
            active ? "text-teal" : "text-navy"
          }`}
        >
          {item.label}
        </Link>
        <button
          type="button"
          className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center text-navy"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">
            {open ? `Collapse ${item.label}` : `Expand ${item.label}`}
          </span>
          <Chevron open={open} />
        </button>
      </div>
      <div id={panelId} hidden={!open} className={open ? "pb-3" : "hidden"}>
        <ul className="space-y-1 border-l-2 border-teal/30 pl-3">
          {item.children.map((child) => (
            <li key={child.href + child.label}>
              <Link
                href={child.href}
                className="focus-ring block py-2 text-sm text-charcoal hover:text-teal"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-navy/10 bg-white/95 shadow-[0_8px_24px_rgba(11,42,74,0.08)] backdrop-blur"
          : "border-transparent bg-white"
      }`}
    >
      <a
        href="#main"
        className="focus-ring sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-teal focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="focus-ring relative block shrink-0">
          <Image
            src="/logo.png"
            alt={`${SITE.name} logo`}
            width={286}
            height={231}
            className="h-12 w-auto object-contain sm:h-14"
            priority
            quality={75}
            sizes="160px"
          />
        </Link>

        <nav
          className="hidden items-center gap-0.5 xl:flex"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) =>
            item.children?.length ? (
              <DesktopDropdown
                key={item.href}
                item={item}
                pathname={pathname}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring px-2.5 py-2 text-[13px] font-medium transition-colors ${
                  isActive(pathname, item.href)
                    ? "text-navy underline decoration-teal decoration-2 underline-offset-8"
                    : "text-charcoal hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={PRIMARY_CTA.href}
            className="focus-ring hidden min-h-11 items-center bg-navy px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal sm:inline-flex"
          >
            {PRIMARY_CTA.label}
          </Link>
          <button
            type="button"
            className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center border border-navy/15 text-navy xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-navy/10 bg-white xl:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6"
          aria-label="Mobile"
        >
          {NAV_ITEMS.map((item) => (
            <MobileAccordion
              key={item.href}
              item={item}
              pathname={pathname}
            />
          ))}
          <Link
            href={PRIMARY_CTA.href}
            className="focus-ring mt-3 mb-2 inline-flex min-h-11 items-center justify-center bg-navy px-4 py-3 text-sm font-semibold text-white"
          >
            {PRIMARY_CTA.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
