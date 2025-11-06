"use client";

import { BookOpen, Utensils, Coffee } from "lucide-react";
import { motion } from "framer-motion";

export default function ProgramStudi() {
  const programs = [
    {
      title: "Housekeeping",
      icon: <BookOpen className="w-10 h-10 text-primary" />,
      description:
        "Pelatihan dasar dalam manajemen kebersihan, tata ruang, dan pelayanan kamar sesuai standar industri perhotelan.",
    },
    {
      title: "FB Service",
      icon: <Coffee className="w-10 h-10 text-primary" />,
      description:
        "Mempelajari teknik pelayanan makanan dan minuman dengan profesionalisme dan standar internasional.",
    },
    {
      title: "Culinary",
      icon: <Utensils className="w-10 h-10 text-primary" />,
      description:
        "Pelatihan praktik memasak modern dan tradisional, serta penguasaan dapur dengan standar industri kuliner global.",
    },
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-slate-100 mb-4">
            Program Studi
          </h2>
          <p className="text-slate-100 max-w-2xl mx-auto mb-12">
            RIC College Bali Jembrana menawarkan program pelatihan pada jenjang{" "}
            <span className="font-semibold text-white">Basic Level</span> untuk
            mempersiapkan peserta menjadi tenaga profesional siap kerja di
            industri perhotelan dan pariwisata.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 flex flex-col items-center text-center border border-transparent hover:border-slate-100 hover:scale-105"
            >
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {program.title}
              </h3>
              <span className="text-sm font-medium text-white bg-primary px-3 py-1 rounded-full mb-4">
                Basic Level
              </span>
              <p className="text-gray-600 text-sm leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
