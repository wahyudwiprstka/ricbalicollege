"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const program = {
  title: "Housekeeping",
  slug: "housekeeping",
  image: "/images/housekeeping.jpg",
  description:
    "Program Housekeeping di RIC Bali dirancang untuk membekali peserta dengan keterampilan profesional dalam menjaga kebersihan, kerapian, dan kenyamanan lingkungan kerja di industri perhotelan.",
  objectives: [
    "Menguasai teknik pembersihan dan penataan kamar hotel secara profesional.",
    "Memahami standar operasional housekeeping internasional.",
    "Meningkatkan disiplin, tanggung jawab, dan ketelitian dalam pekerjaan.",
  ],
  curriculum: [
    "Pengenalan Industri Perhotelan",
    "Teknik Pembersihan dan Perawatan Ruangan",
    "Penataan Linen dan Amenity",
    "Komunikasi dan Etika Profesional",
    "Pelatihan Lapangan (On the Job Training)",
  ],
};

export default function DetailProgram({
  params,
}: {
  params: { slug: string };
}) {
  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-gray-600">
        <h2>Program tidak ditemukan 😔</h2>
      </div>
    );
  }

  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={program.image}
              alt={program.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              {program.title}
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              {program.description}
            </p>

            <h2 className="text-2xl font-semibold text-orange-600 mb-3">
              Tujuan Program
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              {program.objectives.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-orange-600 mb-3">
              Kurikulum Singkat
            </h2>
            <ul className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
              {program.curriculum.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <Link
              href="/pendaftaran"
              className="inline-block bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-orange-700 transition-all duration-300"
            >
              Daftar Sekarang
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
