"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { client } from "../lib/sanity.client";
import Hero from "../components/Hero";
import Program from "../components/jurusan/Program";
import JurusanEN from "./jurusanEN.json";
import JurusanID from "./jurusanID.json";
import { useTranslations } from "next-intl";
import { getLocale } from "@/lib/localeClient";

// const t = useTranslations("Prodi");
export default function ProgramStudi() {
  // const query = `*[_type=="program"] | order(title desc){
  //   title,
  //   slug,
  //   level,
  //   description,
  //   objective,
  //   kurikulum,
  //   image{
  //     asset -> {url},
  //     alt
  //   }
  // }`;
  const locale = getLocale();
  const getProgram = (locale: string | undefined) => {
    if (locale == "id") {
      return JurusanID;
    } else if (locale == "en") {
      return JurusanEN;
    } else {
      return JurusanEN;
    }
  };
  const program = getProgram(locale);
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero title={program.title} description={program.description} />

      {/* Program Grid */}
      <Program programs={program} />
    </div>
  );
}
