"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import Hero from "../components/Hero";

export default function Kontak() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pesan berhasil dikirim!");
    setForm({ nama: "", email: "", pesan: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Hero
        title="Hubungi Kami"
        description="Kami siap membantu menjawab pertanyaan Anda mengenai Rising
            International College Bali."
      />

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
            Informasi Kontak
          </h2>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-1" />
              <p>
                Jl. Panji Sakti No.168, Sawe Rangsasa, <br />
                Kec. Jembrana, Kab. Jembrana, Bali 82218
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-primary" />
              <p>admin@ricbali.com</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-primary" />
              <p>+62 822-2161-4945</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Jam Operasional</h3>
            <p>Senin – Jumat: 08.00 - 17.00 WITA</p>
            <p>Sabtu: 08.00 - 13.00 WITA</p>
            <p>Minggu Libur</p>
          </div>
        </motion.div>

        {/* Formulir Kontak */}
        <motion.form
          action="mailto:admin@ricbali.com"
          method="POST"
          encType="text/plain"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Kirim Pesan
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Nama Lengkap
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
                Pesan
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
              <Send size={18} /> Kirim Pesan
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
          <h2 className="font-bold text-primary text-xl">Kampus Jembrana</h2>
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
          <h2 className="font-bold text-primary text-xl">Kampus Singaraja</h2>
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
