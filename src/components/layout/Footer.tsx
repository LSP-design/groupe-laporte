import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations();

  const services = [
    { href: "/services/consultation-coaching", label: t("nav.consultation") },
    { href: "/services/cape", label: t("nav.cape") },
    { href: "/services/gestion-de-vie", label: t("nav.gestion") },
  ];

  const navigation = [
    { href: "/", label: t("nav.home") },
    { href: "/l-equipe", label: t("nav.team") },
    { href: "/services", label: t("nav.services") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <footer className="bg-brand-navy text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <p className="font-serif text-xl font-bold text-white">
                Groupe Laporte
              </p>
              <p className="text-brand-gold text-xs font-medium tracking-widest uppercase mt-0.5">
                {t("nav.tagline")}
              </p>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              {t("footer.slogan")}
            </p>
            <div className="mt-6">
              <a
                href="https://www.linkedin.com/company/groupe-laporte"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/70 hover:border-brand-gold hover:text-brand-gold transition-colors"
                aria-label="LinkedIn"
              >
                {/* LinkedIn icon */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-gold mb-4">
              {t("footer.navigation_title")}
            </h3>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-gold mb-4">
              {t("footer.services_title")}
            </h3>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-gold mb-4">
              {t("footer.contact_title")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:15144000671"
                  className="flex items-center gap-2.5 text-white/70 hover:text-white text-sm transition-colors group"
                >
                  <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>1 514 400-0671</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@groupelaporte.ca"
                  className="flex items-center gap-2.5 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>info@groupelaporte.ca</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/70 text-sm">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span>Montréal, Canada</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <p className="text-white/30 text-xs italic">
            {t("footer.description")}
          </p>
        </div>
      </div>
    </footer>
  );
}
