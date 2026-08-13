import { setRequestLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy_page" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy_page");

  const sections = [
    { title: t("collecte_title"), text: t("collecte_text") },
    { title: t("utilisation_title"), text: t("utilisation_text") },
    { title: t("conservation_title"), text: t("conservation_text") },
    { title: t("droits_title"), text: t("droits_text") },
    { title: t("contact_title"), text: t("contact_text") },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-brand-charcoal pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-copper text-sm font-semibold uppercase tracking-widest">
            {t("title")}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3 mb-4">
            {t("subtitle")}
          </h1>
          <div className="w-16 h-1 bg-brand-copper mx-auto rounded-full" />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 text-sm mb-10">{t("updated")}</p>
          <p className="text-gray-700 text-lg leading-relaxed mb-12">
            {t("intro")}
          </p>
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-serif text-xl font-bold text-brand-charcoal mb-3">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
