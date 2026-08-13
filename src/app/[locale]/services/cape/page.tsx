import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { CheckCircle2, ArrowRight, Shield, TrendingUp, Users, Clock } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cape_page" });
  return {
    title: t("title"),
    description: t("intro"),
  };
}

export default async function CapePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("cape_page");

  const benefits = [
    t("benefit_1"),
    t("benefit_2"),
    t("benefit_3"),
    t("benefit_4"),
    t("benefit_5"),
    t("benefit_6"),
  ];

  const structure = [
    {
      icon: Clock,
      title: t("structure_1_title"),
      desc: t("structure_1_desc"),
    },
    {
      icon: Users,
      title: t("structure_2_title"),
      desc: t("structure_2_desc"),
    },
    {
      icon: TrendingUp,
      title: t("structure_3_title"),
      desc: t("structure_3_desc"),
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
              "radial-gradient(circle at 70% 50%, #C9A84C 0%, transparent 60%)",
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
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              {t("subtitle")}
            </p>
            <p className="text-white/65 leading-relaxed max-w-2xl">
              {t("intro")}
            </p>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-navy">
              {t("structure_title")}
            </h2>
            <div className="w-12 h-1 bg-brand-gold mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {structure.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits + Investment */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Benefits */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-brand-navy mb-8">
                {t("benefits_title")}
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Confidentiality note */}
              <div className="mt-10 bg-brand-navy rounded-2xl p-6 flex gap-4">
                <Shield className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white text-sm mb-1">
                    {t("confidentiality_title")}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {t("confidentiality_text")}
                  </p>
                </div>
              </div>
            </div>

            {/* Investment card */}
            <div className="bg-brand-cream rounded-3xl p-10 border border-brand-gold/20">
              <h2 className="font-serif text-2xl font-bold text-brand-navy mb-8">
                {t("investment_title")}
              </h2>

              <div className="text-center py-8 border-b border-brand-gold/20 mb-8">
                <p className="font-serif text-6xl font-bold text-brand-navy mb-2">
                  {t("price")}
                </p>
                <p className="text-gray-500 text-sm">{t("price_desc")}</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  { label: t("row_duration"), value: t("row_duration_value") },
                  { label: t("row_sessions"), value: t("row_sessions_value") },
                  { label: t("row_retreat"), value: t("row_retreat_value") },
                  { label: t("row_hours"), value: t("row_hours_value") },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-600 text-sm">{row.label}</span>
                    <span className="font-semibold text-brand-navy text-sm">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-brand-gold/10 rounded-xl p-4 mb-8">
                <p className="text-brand-navy font-semibold text-sm text-center">
                  {t("roi_note")}
                </p>
              </div>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-brand-navy text-white font-semibold rounded-full hover:bg-brand-navy-dark transition-all"
              >
                {t("cta_button")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("cta_title")}
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">{t("cta_desc")}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-white font-semibold rounded-full hover:bg-brand-gold-dark transition-all shadow-lg"
          >
            {t("cta_button")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
