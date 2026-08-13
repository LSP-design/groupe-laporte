import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "fr",
  // Le Groupe Laporte est une firme québécoise : le site doit toujours
  // s'ouvrir en français par défaut, peu importe la langue du navigateur.
  // Le sélecteur FR/EN reste disponible pour basculer manuellement.
  localeDetection: false,
});
