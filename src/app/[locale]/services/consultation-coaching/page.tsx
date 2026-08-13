import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Mic, Target, BarChart3, RefreshCw, CheckCircle2 } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "consultation_page" });
  return {
    title: t("title"),
    description: t("intro"),
  };
}

export default async function ConsultationCoachingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("consultation_page");

  const conferences = [
    t("conference_1"),
    t("conference_2"),
    t("conference_3"),
    t("conference_4"),
  ];

  const process = [
    {
      number: "01",
      icon: Target,
      title: t("process_1_title"),
      desc: t("process_1_desc"),
    },
    {
      number: "02",
      icon: BarChart3,
      title: t("process_2_title"),
      desc: t("process_2_desc"),
    },
    {
      number: "03",
      icon: RefreshCw,
      title: t("process_3_title"),
      desc: t("process_3_desc"),
    },
    {
      number: "04",
      icon: CheckCircle2,
      title: t("process_4_title"),
      desc: t("process_4_desc"),
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-brand-charcoal pt-32 pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 60%, #B87333 0%, transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-brand-copper/20 text-brand-copper text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Coaching */}
            <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow hover:border-brand-copper/20">
              <div className="w-12 h-12 rounded-xl bg-brand-charcoal flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-brand-copper" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-brand-charcoal mb-4">
                {t("coaching_title")}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                {t("coaching_desc")}
              </p>
            </div>

            {/* Consultation */}
            <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow hover:border-brand-copper/20">
              <div className="w-12 h-12 rounded-xl bg-brand-charcoal flex items-center justify-center mb-5">
                <BarChart3 className="w-6 h-6 text-brand-copper" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-brand-charcoal mb-4">
                {t("consultation_title")}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                {t("consultation_desc")}
              </p>
            </div>

            {/* Conferences */}
            <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow hover:border-brand-copper/20">
              <div className="w-12 h-12 rounded-xl bg-brand-charcoal flex items-center justify-center mb-5">
                <Mic className="w-6 h-6 text-brand-copper" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-brand-charcoal mb-4">
                {t("conferences_title")}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm mb-5">
                {t("conferences_desc")}
              </p>
              <ul className="space-y-2">
                {conferences.map((conf) => (
                  <li key={conf} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-copper flex-shrink-0 mt-0.5" />
                    {conf}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal">
              {t("process_title")}
            </h2>
            <div className="w-12 h-1 bg-brand-copper mx-auto mt-4 rounded-full" />
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-8 left-1/4 right-1/4 h-px bg-brand-copper/30 z-0" style={{ left: '12.5%', right: '12.5%' }} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {process.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-brand-charcoal flex items-center justify-center mx-auto mb-5 shadow-lg">
                      <Icon className="w-7 h-7 text-brand-copper" />
                    </div>
                    <span className="text-brand-copper text-xs font-bold uppercase tracking-widest">
                      {t("step_label")} {step.number}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-brand-charcoal mt-2 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
            {t("final_cta_title")}
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            {t("final_cta_desc")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-copper text-white font-semibold rounded-full hover:bg-brand-copper-dark transition-all shadow-lg"
          >
            {t("cta")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
