"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact_page");
  const tFooter = useTranslations("footer");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const services = [
    { value: "consultation", label: t("service_consultation") },
    { value: "cape", label: t("service_cape") },
    { value: "gestion", label: t("service_gestion") },
    { value: "conference", label: t("service_conference") },
    { value: "other", label: t("service_other") },
  ];

  const contactInfo = [
    { icon: Phone, label: t("info_phone"), href: "tel:15144000671" },
    { icon: Mail, label: t("info_email"), href: "mailto:info@groupelaporte.ca" },
    { icon: MapPin, label: t("info_location"), href: null },
    { icon: Clock, label: t("info_hours"), href: null },
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

      {/* Content */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-serif text-2xl font-bold text-brand-navy mb-6">
                {t("info_title")}
              </h2>
              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-3.5 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-lg bg-brand-navy flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-brand-gold" />
                      </div>
                      <span className="text-gray-700 text-sm pt-2.5 leading-snug">
                        {item.label}
                      </span>
                    </div>
                  );
                  return item.href ? (
                    <a key={item.label} href={item.href} className="block hover:text-brand-navy transition-colors">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              {/* Mission statement */}
              <div className="mt-8 bg-brand-navy rounded-2xl p-6">
                <p className="font-serif text-xl font-bold text-white mb-3">
                  Groupe Laporte
                </p>
                <p className="text-white/70 text-sm leading-relaxed italic">
                  &ldquo;{tFooter("description")}&rdquo;
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === "success" ? (
                <div className="bg-white rounded-3xl p-12 shadow-sm border border-green-100 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-brand-navy mb-3">
                    {t("success_title")}
                  </h2>
                  <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
                    {t("success_message")}
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                  <h2 className="font-serif text-2xl font-bold text-brand-navy mb-8">
                    {t("form_title")}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t("form_name")} <span className="text-brand-gold">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder={t("form_name_placeholder")}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10 outline-none transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t("form_email")} <span className="text-brand-gold">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder={t("form_email_placeholder")}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10 outline-none transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t("form_phone")}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder={t("form_phone_placeholder")}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10 outline-none transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t("form_company")}
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder={t("form_company_placeholder")}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10 outline-none transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t("form_service")}
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10 outline-none transition-all text-sm bg-white"
                      >
                        <option value="">{t("select_service")}</option>
                        {services.map((s) => (
                          <option key={s.value} value={s.value}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t("form_message")} <span className="text-brand-gold">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder={t("form_message_placeholder")}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10 outline-none transition-all text-sm resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-red-600 text-sm bg-red-50 rounded-lg px-4 py-3">
                        {t("form_error")}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-navy text-white font-semibold rounded-full hover:bg-brand-navy-dark transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {t("form_sending")}
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          {t("form_submit")}
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
