"use client";
import { motion } from "framer-motion";
import { useMessages, useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("Homepage");
  const messages = useMessages();
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Gambar kampus atau ilustrasi */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/campus.jpg"
            alt="RIC College"
            className="rounded-3xl shadow-lg object-cover w-full h-[360px]"
          />
        </motion.div>

        {/* Teks tentang kampus */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-red-900 mb-6 uppercase">
            {t("about_title")}
          </h2>

          <p
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: messages.Homepage.about_content,
            }}
          />

          <div className="mt-6">
            <a
              href="/about"
              className="inline-block px-6 py-3 bg-red-900 text-white font-medium rounded-full shadow hover:bg-red-800 transition-all"
            >
              {t("about_button")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
