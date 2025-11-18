"use client";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div className="text-center pb-16">
      <motion.a
        href="/jurusan"
        whileHover={{ scale: 1.05 }}
        className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-[#B21E35] transition"
      >
        Lihat Program Jurusan →
      </motion.a>
    </div>
  );
};

export default CTA;
