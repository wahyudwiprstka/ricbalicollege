"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import Hero from "../components/Hero";
import { useTranslations } from "next-intl";

export default function Kontak() {
  const t = useTranslations("contact");
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Pesan berhasil dikirim!");
      setForm({ nama: "", email: "", pesan: "" });
    } else {
      alert("Gagal mengirim pesan.");
    }
  };

  const [form, setForm] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero title={t("hero_title")} description={t("hero_description")} />

      {/* Kontak Info + Form */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        {/* Informasi Kontak */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {t("contact_information")}
          </h2>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-1" />
              <p>{t("address")}</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-primary" />
              <p>risinginternationalcollege@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-primary" />
              <p>+62 822-2161-4945</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">
              {t("operational_hour")}
            </h3>
            <p dangerouslySetInnerHTML={{ __html: t("hour") }} />
          </div>
        </motion.div>

        {/* Formulir Kontak */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {t("send_message")}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                {t("fullname")}
              </label>
              <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                {t("message")}
              </label>
              <textarea
                name="pesan"
                value={form.pesan}
                onChange={handleChange}
                required
                rows={4}
                className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="bg-primary text-white w-full py-3 rounded-xl font-semibold hover:bg-red-950 transition-all flex justify-center items-center gap-2"
            >
              <Send size={18} /> {t("send_message")}
            </motion.button>
          </div>
        </motion.form>
      </section>

      {/* Google Maps */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full grid md:grid-cols-2"
      >
        <div className="flex flex-col items-center px-10 md:px-6 md:py-16 gap-4">
          <h2 className="font-bold text-primary text-xl">{t("jembrana")}</h2>
          <iframe
            title="Lokasi RIC College"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7895.053329843404!2d114.63955460735863!3d-8.34973675136466!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjEnMDAuNSJTIDExNMKwMzgnMjguNiJF!5e0!3m2!1sen!2sid!4v1764214691933!5m2!1sen!2sid"
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
            className="border-0 w-full rounded-3xl shadow"
          ></iframe>
        </div>
        <div className="flex flex-col items-center px-10 py-10 md:px-6 md:py-16 gap-4">
          <h2 className="font-bold text-primary text-xl">{t("singaraja")}</h2>
          <iframe
            title="Lokasi RIC College"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6643.379942867186!2d115.13935938385555!3d-8.083388570469776!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMDQnNTkuMSJTIDExNcKwMDgnMzIuNiJF!5e0!3m2!1sen!2sid!4v1764220715465!5m2!1sen!2sid"
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
            className="border-0 w-full rounded-3xl shadow"
          ></iframe>
        </div>
      </motion.section>
    </div>
  );
}
