"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function CTASection() {
  const t = useTranslations("Homepage");
  return (
    <section className="relative overflow-hidden bg-linear-to-r text-black py-20 px-6">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
          {t.rich("CTA_title", {
            primary: (chunk) => <span className="text-primary">{chunk}</span>,
          })}
        </h2>
        <p className="text-lg text-gray-800 mb-8">{t("CTA_description")}</p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/pendaftaran"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-red-950 transition-all duration-300"
          >
            {t("CTA_button")}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
