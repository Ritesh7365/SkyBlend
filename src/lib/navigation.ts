import { PRODUCT_FAMILIES } from "@/lib/products";
import { MARKETS } from "@/lib/markets";
import { KNOWLEDGE_ARTICLES } from "@/lib/knowledge";

export type NavChild = {
  href: string;
  label: string;
  description?: string;
};

export type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products", label: "All product families" },
      ...PRODUCT_FAMILIES.map((p) => ({
        href: `/products#${p.id}`,
        label: p.name,
        description: p.highlight ? "Core strength" : p.carriers.join(" and "),
      })),
    ],
  },
  {
    href: "/markets",
    label: "Markets",
    children: [
      { href: "/markets", label: "All markets" },
      { href: "/markets#matrix", label: "Product × market matrix" },
      ...MARKETS.map((m) => ({
        href: `/markets#${m.id}`,
        label: m.name,
      })),
    ],
  },
  { href: "/find-grade", label: "Find a Grade" },
  {
    href: "/resources",
    label: "Resources",
    children: [
      { href: "/resources", label: "All resources" },
      ...KNOWLEDGE_ARTICLES.map((a) => ({
        href: `/resources/${a.slug}`,
        label: a.title,
      })),
    ],
  },
  {
    href: "/contact",
    label: "Contact",
    children: [
      { href: "/contact?type=quote", label: "Request a Quote" },
      { href: "/contact?type=sample", label: "Request a Sample" },
      { href: "/contact?type=tds", label: "Request TDS / Grades" },
      { href: "/find-grade", label: "Find a Grade" },
    ],
  },
];
