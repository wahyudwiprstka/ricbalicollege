"use client";
import { motion } from "framer-motion";
import { FileText, Send } from "lucide-react";
import { useState } from "react";
import FormPendaftaran from "../components/Pendaftaran/FormPendaftaran";
import SendForm from "../components/Pendaftaran/SendForm";

export default function Pendaftaran() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary to-red-900 text-white text-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Pendaftaran Mahasiswa Baru
          </h1>
          <p className="max-w-2xl mx-auto text-blue-100 text-lg">
            Wujudkan masa depanmu bersama kami. Lengkapi formulir di bawah ini
            untuk melakukan pendaftaran secara online.
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
      <SendForm />
    </div>
  );
}
