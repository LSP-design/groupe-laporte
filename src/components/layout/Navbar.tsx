"use client";

import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const switchLocale = () => {
    const next = currentLocale === "fr" ? "en" : "fr";
    router.replace(pathname, { locale: next });
  };

  const services = [
    { href: "/services/consultation-coaching", label: t("consultation") },
    { href: "/services/cape", label: t("cape") },
    { href: "/services/gestion-de-vie", label: t("gestion") },
  ];

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/l-equipe", label: t("team") },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex flex-col leading-tight">
              <span
                className={cn(
                  "font-serif text-xl font-bold tracking-tight transition-colors",
                  isScrolled ? "text-brand-charcoal" : "text-white"
                )}
              >
                Groupe Laporte
              </span>
              <span className="text-xs font-sans font-medium tracking-widest uppercase text-brand-copper">
                {t("tagline")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  isScrolled
                    ? "text-brand-dark hover:text-brand-charcoal hover:bg-brand-cream"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Services dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className={cn(
                  "flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  isScrolled
                    ? "text-brand-dark hover:text-brand-charcoal hover:bg-brand-cream"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                )}
              >
                {t("services")}
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    servicesOpen && "rotate-180"
                  )}
                />
              </button>
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                >
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-brand-dark hover:bg-brand-cream hover:text-brand-charcoal transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Phone */}
            <a
              href="tel:15144000671"
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors",
                isScrolled
                  ? "text-brand-dark hover:text-brand-charcoal"
                  : "text-white/80 hover:text-white"
              )}
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">1 514 400-0671</span>
            </a>

            {/* Language toggle */}
            <button
              onClick={switchLocale}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-bold border transition-colors",
                isScrolled
                  ? "border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white"
                  : "border-white/60 text-white hover:border-white hover:bg-white/10"
              )}
            >
              {currentLocale === "fr" ? "EN" : "FR"}
            </button>

            {/* CTA */}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 bg-brand-copper text-white text-sm font-semibold rounded-full hover:bg-brand-copper-dark transition-colors shadow-sm"
            >
              {t("contact")}
            </Link>
          </nav>

          {/* Mobile: lang + hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={switchLocale}
              className={cn(
                "px-3 py-1 rounded-full text-xs font-bold border transition-colors",
                isScrolled
                  ? "border-brand-charcoal text-brand-charcoal"
                  : "border-white text-white"
              )}
            >
              {currentLocale === "fr" ? "EN" : "FR"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "p-2 rounded-md transition-colors",
                isScrolled
                  ? "text-brand-dark hover:bg-brand-cream"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3.5 text-brand-dark font-medium hover:bg-brand-cream hover:text-brand-charcoal rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 pb-1">
              <p className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
                {t("services")}
              </p>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block px-6 py-3 text-sm text-brand-dark hover:bg-brand-cream hover:text-brand-charcoal rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {service.label}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100">
              <a
                href="tel:15144000671"
                className="flex items-center gap-2 px-4 py-3 text-brand-dark"
              >
                <Phone className="w-4 h-4 text-brand-copper" />
                <span>1 514 400-0671</span>
              </a>
              <Link
                href="/contact"
                className="mt-3 flex items-center justify-center px-6 py-3.5 bg-brand-copper text-white font-semibold rounded-full hover:bg-brand-copper-dark transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {t("contact")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
