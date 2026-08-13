import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import TeamAvatar from "@/components/ui/TeamAvatar";
import { Link } from "@/i18n/navigation";
import { ArrowRight, CheckCircle2, Quote, Star } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-copper text-sm font-semibold uppercase tracking-widest">
              {t("services.title")}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-charcoal mt-3 mb-5">
              {t("services.subtitle")}
            </h2>
            <div className="w-16 h-1 bg-brand-copper mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Consultation */}
            <div className="group relative bg-brand-cream rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-brand-copper/20">
              <div className="w-12 h-12 rounded-xl bg-brand-charcoal/10 flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-brand-charcoal" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-3">
                {t("services.consultation_title")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {t("services.consultation_desc")}
              </p>
              <Link
                href="/services/consultation-coaching"
                className="inline-flex items-center gap-1.5 text-brand-copper font-semibold text-sm hover:gap-2.5 transition-all"
              >
                {t("services.learn_more")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* CAPE — featured */}
            <div className="group relative bg-brand-charcoal rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ring-2 ring-brand-copper/40">
              <div className="absolute top-6 right-6">
                <span className="bg-brand-copper text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {t("services.badge_exclusive")}
                </span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-brand-copper/20 flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-brand-copper" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">
                {t("services.cape_title")}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                {t("services.cape_desc")}
              </p>
              <Link
                href="/services/cape"
                className="inline-flex items-center gap-1.5 text-brand-copper font-semibold text-sm hover:gap-2.5 transition-all"
              >
                {t("services.learn_more")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Gestion de vie */}
            <div className="group relative bg-brand-cream rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-brand-copper/20">
              <div className="w-12 h-12 rounded-xl bg-brand-charcoal/10 flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-brand-charcoal" />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-3">
                {t("services.gestion_title")}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {t("services.gestion_desc")}
              </p>
              <Link
                href="/services/gestion-de-vie"
                className="inline-flex items-center gap-1.5 text-brand-copper font-semibold text-sm hover:gap-2.5 transition-all"
              >
                {t("services.learn_more")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAPE Highlight */}
      <section className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-copper text-sm font-semibold uppercase tracking-widest">
                {t("cape_section.eyebrow")}
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-charcoal mt-3 mb-6">
                {t("cape_section.title")}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t("cape_section.description")}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {[
                  t("cape_section.feature1"),
                  t("cape_section.feature2"),
                  t("cape_section.feature3"),
                  t("cape_section.feature4"),
                  t("cape_section.feature5"),
                  t("cape_section.feature6"),
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-copper flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/services/cape"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-charcoal text-white font-semibold rounded-full hover:bg-brand-charcoal-dark transition-all shadow-lg hover:-translate-y-0.5"
              >
                {t("cape_section.cta")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats card */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
                <div className="text-center mb-8">
                  <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">
                    {t("cape_section.investment_label")}
                  </p>
                  <p className="font-serif text-5xl font-bold text-brand-charcoal">
                    {t("cape_page.price")}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    {t("cape_section.investment_taxes")}
                  </p>
                </div>
                <div className="space-y-5 border-t border-gray-100 pt-8">
                  {[
                    { value: "31h", label: t("cape_section.stat_hours") },
                    { value: "9", label: t("cape_section.stat_sessions") },
                    { value: "~50%", label: t("cape_section.stat_roi") },
                    { value: "100%", label: t("cape_section.stat_confidential") },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-500 text-sm">
                        {item.label}
                      </span>
                      <span className="font-serif text-xl font-bold text-brand-charcoal">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-copper/10 rounded-full -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-charcoal/10 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-copper text-sm font-semibold uppercase tracking-widest">
              {t("team_preview.title")}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-charcoal mt-3 mb-5">
              {t("team_preview.subtitle")}
            </h2>
            <div className="w-16 h-1 bg-brand-copper mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Jean Laporte",
                role: t("team_preview.jean_role"),
                desc: t("team_preview.jean_desc"),
                initials: "JL",
                photo: undefined as string | undefined,
              },
              {
                name: "Jean-François Brault",
                role: t("team_preview.jf_role"),
                desc: t("team_preview.jf_desc"),
                initials: "JFB",
                photo: undefined as string | undefined,
              },
              {
                name: "Kathryn Peterson",
                role: t("team_preview.kathryn_role"),
                desc: t("team_preview.kathryn_desc"),
                initials: "KP",
                photo: undefined as string | undefined,
              },
            ].map((member) => (
              <div
                key={member.name}
                className="text-center group"
              >
                <div className="mx-auto mb-5">
                  <TeamAvatar
                    name={member.name}
                    initials={member.initials}
                    photo={member.photo}
                    className="w-24 h-24 rounded-full mx-auto group-hover:bg-brand-copper transition-colors duration-300"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-charcoal mb-1">
                  {member.name}
                </h3>
                <p className="text-brand-copper text-sm font-semibold uppercase tracking-wide mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/l-equipe"
              className="inline-flex items-center gap-2 text-brand-charcoal font-semibold hover:text-brand-copper transition-colors"
            >
              {t("team_preview.meet_team")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-copper text-sm font-semibold uppercase tracking-widest">
              {t("testimonials.title")}
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-3 mb-5">
              {t("testimonials.subtitle")}
            </h2>
            <div className="w-16 h-1 bg-brand-copper mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: t("testimonials.quote1"),
                author: t("testimonials.author1"),
                role: t("testimonials.role1"),
              },
              {
                quote: t("testimonials.quote2"),
                author: t("testimonials.author2"),
                role: t("testimonials.role2"),
              },
            ].map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
              >
                <Quote className="w-8 h-8 text-brand-copper mb-5 opacity-70" />
                <p className="text-white/90 text-lg leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-px bg-brand-copper" />
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-white/50 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-copper text-sm font-semibold uppercase tracking-widest">
            {t("cta_final.eyebrow")}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-charcoal mt-3 mb-5">
            {t("cta_final.title")}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            {t("cta_final.description")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-brand-charcoal text-white font-semibold rounded-full hover:bg-brand-charcoal-dark transition-all shadow-xl hover:-translate-y-1 text-lg"
          >
            {t("cta_final.button")}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
