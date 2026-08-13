import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import TeamAvatar from "@/components/ui/TeamAvatar";
import { CheckCircle2, ArrowRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "team_page" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("team_page");

  const credentials = [
    t("jean_cred_1"),
    t("jean_cred_2"),
    t("jean_cred_3"),
    t("jean_cred_4"),
    t("jean_cred_5"),
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-brand-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold text-sm font-semibold uppercase tracking-widest">
            {t("title")}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4">
            {t("subtitle")}
          </h1>
          <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>
      </section>

      {/* Jean Laporte — founder */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Avatar */}
            <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
              <TeamAvatar
                name="Jean Laporte"
                initials="JL"
                className="w-48 h-48 rounded-2xl mb-6"
                textClassName="text-5xl"
              />
              <h2 className="font-serif text-3xl font-bold text-brand-navy mb-1">
                Jean Laporte
              </h2>
              <p className="text-brand-gold font-semibold text-sm uppercase tracking-widest mb-6">
                {t("jean_cred_1")}
              </p>

              {/* Credentials */}
              <div className="bg-brand-cream rounded-xl p-6 w-full max-w-sm">
                <h3 className="font-semibold text-brand-navy text-sm uppercase tracking-wider mb-4">
                  {t("jean_credentials")}
                </h3>
                <ul className="space-y-2.5">
                  {credentials.map((cred) => (
                    <li key={cred} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-3">
              <div className="space-y-5">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t("jean_bio_1")}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t("jean_bio_2")}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t("jean_bio_3")}
                </p>
              </div>

              {/* Career highlights */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { company: "Apple Canada", role: t("career_apple") },
                  { company: "Fido", role: t("career_fido") },
                  { company: "Rogers", role: t("career_rogers") },
                ].map((item) => (
                  <div
                    key={item.company}
                    className="bg-brand-cream rounded-xl p-5 border-l-4 border-brand-gold"
                  >
                    <p className="font-semibold text-brand-navy text-sm">
                      {item.company}
                    </p>
                    <p className="text-gray-600 text-xs mt-1 whitespace-pre-line">
                      {item.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-brand-cream h-px max-w-7xl mx-auto" />

      {/* Collaborators */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-brand-navy mb-12 text-center">
            {t("collaborators_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Jean-François */}
            <div className="bg-brand-cream rounded-2xl p-8">
              <div className="flex items-start gap-5 mb-5">
                <TeamAvatar
                  name="Jean-François Brault"
                  initials="JFB"
                  className="w-16 h-16 rounded-xl"
                  textClassName="text-lg"
                />
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-navy">
                    Jean-François Brault
                  </h3>
                  <p className="text-brand-gold text-sm font-semibold uppercase tracking-wide">
                    {t("jf_role")}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                {t("jf_bio")}
              </p>
            </div>

            {/* Kathryn */}
            <div className="bg-brand-cream rounded-2xl p-8">
              <div className="flex items-start gap-5 mb-5">
                <TeamAvatar
                  name="Kathryn Peterson"
                  initials="KP"
                  className="w-16 h-16 rounded-xl"
                  textClassName="text-lg"
                />
                <div>
                  <h3 className="font-serif text-xl font-bold text-brand-navy">
                    Kathryn Peterson
                  </h3>
                  <p className="text-brand-gold text-sm font-semibold uppercase tracking-wide">
                    {t("kathryn_role")}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                {t("kathryn_bio")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-brand-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            {t("collaborate")}
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            {t("collaborate_desc")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-white font-semibold rounded-full hover:bg-brand-gold-dark transition-all"
          >
            {t("collaborate_cta")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
