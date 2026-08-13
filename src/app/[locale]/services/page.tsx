import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Users, Trophy, Heart } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services_page" });
  return {
    title: t("title"),
    description: t("intro"),
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  const services = [
    {
      href: "/services/consultation-coaching",
      icon: Users,
      title: t("services.consultation_title"),
      desc: t("services.consultation_desc"),
      badge: null,
      features: [
        t("services_page.consultation_f1"),
        t("services_page.consultation_f2"),
        t("services_page.consultation_f3"),
        t("services_page.consultation_f4"),
        t("services_page.consultation_f5"),
      ],
    },
    {
      href: "/services/cape",
      icon: Trophy,
      title: t("services.cape_title"),
      desc: t("services.cape_desc"),
      badge: t("services.badge_exclusive"),
      features: [
        t("cape_section.feature1"),
        t("cape_section.feature2"),
        t("cape_section.feature3"),
        t("cape_section.feature4"),
        t("cape_section.feature5"),
        t("cape_section.feature6"),
      ],
    },
    {
      href: "/services/gestion-de-vie",
      icon: Heart,
      title: t("services.gestion_title"),
      desc: t("services.gestion_desc"),
      badge: t("services.badge_program"),
      features: [
        t("services_page.gestion_f1"),
        t("services_page.gestion_f2"),
        t("services_page.gestion_f3"),
        t("services_page.gestion_f4"),
        t("services_page.gestion_f5"),
      ],
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-brand-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest">
            {t("services_page.title")}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-5">
            {t("services_page.subtitle")}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("services_page.intro")}
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.href}
                className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100`}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="p-10 lg:p-14 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center">
                        <Icon className="w-6 h-6 text-brand-gold" />
                      </div>
                      {service.badge && (
                        <span className="px-3 py-1 bg-brand-gold text-white text-xs font-bold rounded-full uppercase tracking-wider">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-brand-navy mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {service.desc}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-navy text-white font-semibold rounded-full hover:bg-brand-navy-dark transition-all self-start"
                    >
                      {t("services.learn_more")}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Features panel */}
                  <div className="bg-brand-cream p-10 lg:p-14 flex flex-col justify-center">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-gold mb-6">
                      {t("services_page.key_points")}
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm text-gray-700"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
            {t("cta_final.title")}
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            {t("cta_final.description")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-white font-semibold rounded-full hover:bg-brand-gold-dark transition-all shadow-lg"
          >
            {t("cta_final.button")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
