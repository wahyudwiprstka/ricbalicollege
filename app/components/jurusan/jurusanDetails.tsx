"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";

const ProdiDetails = ({ program }: any) => {
  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={program?.image?.asset?.url}
              alt={program?.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {program?.title}
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              {program?.description}
            </p>

            <h2 className="text-2xl font-semibold text-primary mb-3">
              Tujuan Program
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              {program?.objective?.map((obj: string, i: Key) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-primary mb-3">
              Kurikulum Singkat
            </h2>
            <ul className="list-decimal list-inside space-y-2 text-gray-700 mb-8">
              {program?.kurikulum?.map((item: string, i: Key) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <Link
              href="/pendaftaran"
              className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-rose-950 transition-all duration-300"
            >
              Daftar Sekarang
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProdiDetails;
