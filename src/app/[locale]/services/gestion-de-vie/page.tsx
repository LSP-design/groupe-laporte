import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Briefcase, Heart, Sun, Calendar, BookOpen, Map } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "gestion_page" });
  return {
    title: t("title"),
    description: t("intro"),
  };
}

export default async function GestionDeViePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("gestion_page");

  const pillars = [
    {
      icon: Briefcase,
      title: t("pillar_1_title"),
      desc: t("pillar_1_desc"),
      color: "bg-blue-50",
      iconBg: "bg-brand-navy",
    },
    {
      icon: Heart,
      title: t("pillar_2_title"),
      desc: t("pillar_2_desc"),
      color: "bg-rose-50",
      iconBg: "bg-rose-600",
    },
    {
      icon: Sun,
      title: t("pillar_3_title"),
      desc: t("pillar_3_desc"),
      color: "bg-amber-50",
      iconBg: "bg-brand-gold",
    },
  ];

  const formats = [
    {
      icon: Calendar,
      title: t("format_1_title"),
      desc: t("format_1_desc"),
    },
    {
      icon: BookOpen,
      title: t("format_2_title"),
      desc: t("format_2_desc"),
    },
    {
      icon: Map,
      title: t("format_3_title"),
      desc: t("format_3_desc"),
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-brand-navy pt-32 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 30%, #C9A84C 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-gold/20 text-brand-gold text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
              {t("eyebrow")}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t("title")}
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-6">
              {t("subtitle")}
            </p>
            <p className="text-white/65 leading-relaxed max-w-2xl">
              {t("intro")}
            </p>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-navy">
              {t("pillars_title")}
            </h2>
            <div className="w-12 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`${pillar.color} rounded-2xl p-8`}
                >
                  <div
                    className={`${pillar.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-5`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-navy mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Format */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest">
                {t("format_title")}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-navy mt-3 mb-8">
                {t("format_heading")}
              </h2>
              <div className="space-y-6">
                {formats.map((format) => {
                  const Icon = format.icon;
                  return (
                    <div key={format.title} className="flex gap-5">
                      <div className="w-11 h-11 rounded-xl bg-brand-navy flex-shrink-0 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-navy mb-1">
                          {format.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {format.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Impact stat */}
            <div className="bg-brand-navy rounded-3xl p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-4">
                {t("impact_title")}
              </h3>
              <p className="font-serif text-8xl font-bold text-white mb-3">
                {t("impact_stat")}
              </p>
              <p className="text-white/70 leading-relaxed max-w-xs mx-auto">
                {t("impact_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
            {t("cta_title")}
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">{t("cta_desc")}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white font-semibold rounded-full hover:bg-brand-navy-dark transition-all shadow-lg"
          >
            {t("cta_button")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
