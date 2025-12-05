"use client";

import { motion } from "framer-motion";
import { useMessages, useTranslations } from "next-intl";

export default function VisiMisiPage() {
  const locale = document.cookie
    .split("; ")
    .find((row) => row.startsWith("locale="))
    ?.split("=")[1];
  const t = useTranslations("Homepage");
  const messages = useMessages();

  const missions = messages?.Homepage?.mission_content as {
    content: string;
  }[];
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-slate-100">
      {/* Judul */}
      <motion.img
        src={`${
          locale == "id"
            ? "/img/visimisi.png"
            : locale == "en"
            ? "/img/visimisi-en.png"
            : ""
        }`}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-60 font-bold text-center text-[#711a1a]"
      ></motion.img>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        transition={{ duration: 0.6 }}
        className="h-0.5 mb-4 bg-primary"
      />

      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid md:grid-cols-2 gap-10 max-w-6xl w-full"
      >
        {/* Card Visi */}
        <div className="bg-white rounded-3xl shadow-lg border-l-4 border-[#711a1a] p-8 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-[#711a1a] mb-3">
            {t("vision_title")}
          </h2>
          <p className="text-gray-700 leading-relaxed">{t("vision_content")}</p>
          <p className="text-gray-500 italic mt-4">{t("vision_description")}</p>
        </div>

        {/* Card Misi */}
        <div className="bg-white rounded-3xl shadow-lg border-r-4 border-[#711a1a] p-8 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-[#711a1a] mb-3">
            {t("mission_title")}
          </h2>
          <ul className="text-gray-700 space-y-3 leading-relaxed">
            {missions.map((item) => (
              <li>{item.content}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
