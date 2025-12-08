"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "../components/Hero";
import { useMessages, useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("About");
  const messages = useMessages();
  const values = t.raw("values") as {
    title: string;
    desc: string;
  }[];
  const campus = t.raw("campus") as {
    title: string;
    desc: string;
    location: string;
  }[];
  return (
    <main className="min-h-screen bg-slate-100 text-gray-800">
      {/* Section 1 - Header */}
      <Hero
        title={t("hero_about_title")}
        description={t("hero_about_description")}
      />

      {/* Section 2 - Sejarah Singkat */}
      <section className="max-w-6xl mx-auto px-6 py-10 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black uppercase text-primary mb-4">
            {messages.About.history_title}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: messages.About.history_description,
            }}
            className="text-gray-700 leading-relaxed text-justify"
          ></p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/about-ric.jpg"
            alt="Gedung RIC College"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* Section 3 - Nilai dan Komitmen */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("value_title")}</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-100 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Lokasi */}
      <section className="py-16">
        {campus.map((item, index) => (
          <div className="max-w-6xl px-6 py-6 mx-auto text-center">
            <h2 className="text-3xl font-semibold text-primary mb-6">
              {item.title}
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">{item.desc}</p>

            <div className="mt-8 w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={item.location}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
