"use client";

import { BookOpen, Utensils, Coffee, Building2, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function ProgramStudi() {
  const programs = [
    // BASIC LEVEL
    {
      title: "Housekeeping",
      level: "Basic",
      icon: <BookOpen className="w-10 h-10 text-primary" />,
      description:
        "Pelatihan dasar dalam manajemen kebersihan, tata ruang, dan pelayanan kamar sesuai standar industri perhotelan.",
    },
    {
      title: "FB Service",
      level: "Basic",
      icon: <Coffee className="w-10 h-10 text-primary" />,
      description:
        "Mempelajari teknik pelayanan makanan dan minuman dengan profesionalisme dan standar internasional.",
    },
    {
      title: "Culinary",
      level: "Basic",
      icon: <Utensils className="w-10 h-10 text-primary" />,
      description:
        "Pelatihan praktik memasak modern dan tradisional, serta penguasaan dapur dengan standar industri kuliner global.",
    },

    // MIDDLE LEVEL
    {
      title: "Room Division (Housekeeping & Front Office)",
      level: "Middle",
      icon: <Building2 className="w-10 h-10 text-primary" />,
      description:
        "Program jenjang D2 yang menggabungkan kompetensi Housekeeping dan Front Office untuk mempersiapkan tenaga ahli di divisi kamar hotel.",
    },
    {
      title: "FB Division (FB Service & Culinary)",
      level: "Middle",
      icon: <Layers className="w-10 h-10 text-primary" />,
      description:
        "Program D2 yang mengintegrasikan keahlian pelayanan makanan-minuman dan keterampilan memasak profesional di industri perhotelan.",
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
            RIC College Bali Jembrana menawarkan program{" "}
            <span className="font-semibold text-white">Basic Level</span> dan{" "}
            <span className="font-semibold text-white">Middle Level (D2)</span>{" "}
            untuk mempersiapkan peserta menjadi tenaga profesional siap kerja di
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

              <span
                className={`text-sm font-medium px-3 py-1 rounded-full mb-4 ${
                  program.level === "Basic"
                    ? "bg-primary text-white"
                    : "bg-amber-600 text-white"
                }`}
              >
                {program.level} Level
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
