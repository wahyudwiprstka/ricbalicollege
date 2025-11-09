"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const programs = [
  {
    name: "House Keeping",
    level: "Basic Level",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam itaque quas non, commodi doloremque. Dolore quaerat porro tempora facere?",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "FB Service",
    level: "Basic Level",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam itaque quas non, commodi doloremque. Dolore quaerat porro tempora facere?",
    image:
      "https://images.unsplash.com/photo-1537432376769-00a5d2d9fbb2?auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Culinary",
    level: "Basic Level",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam itaque quas non, commodi doloremque. Dolore quaerat porro tempora facere?",
    image:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=900&q=60",
  },
];

export default function ProgramStudi() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-rose-950 to-red-900 text-white py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4 flex justify-center items-center gap-3">
            <GraduationCap size={40} /> Program Studi
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-blue-100">
            Temukan berbagai pilihan program studi unggulan yang dirancang untuk
            membentuk generasi profesional, kreatif, dan berdaya saing global.
          </p>
        </motion.div>
      </section>

      {/* Program Grid */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all"
          >
            <img
              src={program.image}
              alt={program.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {program.name}
              </h3>
              <p className="text-sm text-primary font-medium mb-2">
                {program.level}
              </p>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <button className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-red-950 transition-all">
                Lihat Detail
              </button>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
