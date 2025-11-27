"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Program = ({ programs }: any) => {
  const basicPrograms = programs.filter((p: any) => p.level === "basic");
  const middlePrograms = programs.filter((p: any) => p.level === "middle");

  return (
    <div>
      <section className="pt-16 px-6">
        <div className="max-w-6xl mx-auto pb-10">
          <hr />
          <h1 className="bg-gray-50 absolute -translate-y-1/2 left-1/2 -translate-x-1/2 px-2 text-2xl text-primary">
            Basic Level (D1)
          </h1>
        </div>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {basicPrograms.map((program: any, index: any) => (
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
                  Basic Level
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
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto pb-10">
          <hr />
          <h1 className="bg-gray-50 absolute -translate-y-1/2 left-1/2 -translate-x-1/2 px-2 text-2xl text-primary">
            Middle Level (D2)
          </h1>
        </div>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {middlePrograms.map((program: any, index: any) => (
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
                  Middle Level
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
        </div>
      </section>
    </div>
  );
};

export default Program;
