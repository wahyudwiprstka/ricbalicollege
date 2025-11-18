"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Program = ({ programs }: any) => {
  return (
    <div>
      <section className="py-16 px-6 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program: any, index: any) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all"
          >
            <img
              src={program?.image?.asset?.url}
              alt={program?.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {program?.title}
              </h3>
              <p className="text-sm text-primary font-medium mb-2">
                {program.level} Level
              </p>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {program.description}
              </p>
              <Link
                href={`/jurusan/${program.slug.current}`}
                className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-red-950 transition-all"
              >
                Lihat Detail
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Program;
