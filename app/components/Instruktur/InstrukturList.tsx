"use client";
import { getLocale } from "@/lib/localeClient";
import { motion } from "framer-motion";
import Image from "next/image";

const InstrukturList = ({ instructors }: any) => {
  const locale = getLocale();
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
      {instructors.map((inst: any, i: number) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
        >
          <div className="relative w-full h-72">
            <Image
              src={inst?.image?.asset?.url}
              alt={inst?.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-semibold text-primary">{inst?.name}</h3>
            <p className="text-sm text-[#B21E35] font-medium mt-1">
              {locale == "id" ? inst?.bidang : inst?.bidangEN}
            </p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default InstrukturList;
