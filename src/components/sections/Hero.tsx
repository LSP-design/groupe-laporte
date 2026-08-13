"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const t = useTranslations("hero");
  const tStats = useTranslations("stats");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-charcoal">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #B87333 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #4A4640 0%, transparent 50%)`,
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="block w-10 h-px bg-brand-copper" />
            <span className="text-brand-copper text-sm font-semibold uppercase tracking-widest">
              Montréal · Canada
            </span>
          </motion.div>

          {/* Main heading — no entrance animation: this is the LCP element,
              it must be visible immediately rather than wait on JS hydration */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {t("title_line1")}
            <br />
            <span className="text-brand-copper">{t("title_line2")}</span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10"
          >
            {t("description")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-copper text-white font-semibold rounded-full hover:bg-brand-copper-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              {t("cta_primary")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/l-equipe"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:border-white/60 hover:bg-white/10 transition-all"
            >
              {t("cta_secondary")}
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-16 pt-12 border-t border-white/10 flex flex-wrap gap-8"
          >
            {[
              { value: tStats("item1_value"), label: tStats("item1_label") },
              { value: tStats("item2_value"), label: tStats("item2_label") },
              { value: tStats("item3_value"), label: tStats("item3_label") },
              { value: tStats("item4_value"), label: tStats("item4_label") },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl font-bold text-brand-copper">
                  {stat.value}
                </p>
                <p className="text-white/60 text-sm mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
