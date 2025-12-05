"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Hero = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="bg-linear-to-br from-red-800 to-red-900 text-white py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-4 flex justify-center items-center gap-3">
          {title}
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-red-100">{description}</p>
      </motion.div>
    </section>
  );
};

export default Hero;
