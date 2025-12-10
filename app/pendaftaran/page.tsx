"use client";
import { motion } from "framer-motion";
import { FileText, Send } from "lucide-react";
import { useState } from "react";
import FormPendaftaran from "../components/Pendaftaran/FormPendaftaran";
import SendForm from "../components/Pendaftaran/SendForm";
import Hero from "../components/Hero";
import { useTranslations } from "next-intl";

export default function Pendaftaran() {
  const t = useTranslations("pendaftaran");
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}

      <Hero title={t("hero_title")} description={t("hero_description")} />

      {/* Form Section */}
      <SendForm />
    </div>
  );
}
