"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
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
          Wujudkan Masa Depanmu Bersama{" "}
          <span className="text-primary">RIC College</span>
        </h2>
        <p className="text-lg text-gray-800 mb-8">
          Bergabunglah dalam pelatihan vokasi unggulan kami dan raih
          keterampilan yang dibutuhkan dunia industri modern.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/pendaftaran"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-red-950 transition-all duration-300"
          >
            Daftar Sekarang
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
