"use client";
import { motion } from "framer-motion";
import { FileText, Send } from "lucide-react";
import { useState } from "react";
import FormPendaftaran from "../components/Pendaftaran/FormPendaftaran";
import SendForm from "../components/Pendaftaran/SendForm";
import Hero from "../components/Hero";

export default function Pendaftaran() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}

      <Hero
        title="Pendaftaran Mahasiswa Baru"
        description="Wujudkan masa depanmu bersama kami. Lengkapi formulir di bawah ini
            untuk melakukan pendaftaran secara online."
      />

      {/* Form Section */}
      <SendForm />
    </div>
  );
}
