import type { MetadataRoute } from "next";

const baseUrl = "https://www.groupelaporte.ca";
const locales = ["fr", "en"] as const;

const routes = [
  { path: "", priority: 1.0 },
  { path: "/l-equipe", priority: 0.8 },
  { path: "/services", priority: 0.9 },
  { path: "/services/cape", priority: 0.9 },
  { path: "/services/consultation-coaching", priority: 0.8 },
  { path: "/services/gestion-de-vie", priority: 0.8 },
  { path: "/contact", priority: 0.7 },
  { path: "/confidentialite", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${baseUrl}/${locale}${route.path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route.priority,
      });
    }
  }

  return entries;
}
