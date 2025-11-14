"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden bg-linear-to-br from-rose-50 to-red-50">
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
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 mb-6">
            Tentang RIC College
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Rising International College (RIC)</strong> Bali Jembrana
            merupakan lembaga pelatihan kerja yang berada di bawah naungan{" "}
            <strong>Yayasan Tridaya Santana Loka</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Berdiri pada <strong>2 Mei 2025</strong>, RIC College hadir dengan
            komitmen untuk mencetak generasi muda yang terampil, inovatif, dan
            siap bersaing di dunia kerja, khususnya di sektor{" "}
            <strong>pariwisata, perhotelan, dan ekonomi kreatif</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Dengan dukungan tenaga pengajar profesional dan pembelajaran
            berbasis praktik, RIC College bertekad menjadi lembaga vokasi
            unggulan yang memberikan kontribusi nyata bagi kemajuan pendidikan
            di Indonesia.
          </p>

          <div className="mt-6">
            <a
              href="/about"
              className="inline-block px-6 py-3 bg-red-900 text-white font-medium rounded-full shadow hover:bg-red-800 transition-all"
            >
              Selengkapnya
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
