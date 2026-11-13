import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { KNOWLEDGE_ARTICLES } from "@/lib/knowledge";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/products",
    "/markets",
    "/find-grade",
    "/resources",
    "/contact",
  ];

  const pages = routes.map((route) => ({
    url: `${SITE.url}${route}`,
    changeFrequency: (route === "" ? "weekly" : "monthly") as
      | "weekly"
      | "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const articles = KNOWLEDGE_ARTICLES.map((article) => ({
    url: `${SITE.url}/resources/${article.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
