"use client";
import { motion } from "framer-motion";

export default function NewsHeader() {
  return (
    <section className="bg-primary text-white py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold"
      >
        Berita & Kegiatan
      </motion.h1>
      <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
        Dapatkan informasi terbaru seputar kegiatan, pelatihan, dan perkembangan
        Rising International College (RIC) Bali Jembrana.
      </p>
    </section>
  );
}
