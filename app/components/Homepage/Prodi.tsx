"use client";

import { BookOpen, Utensils, Coffee, Building2, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ProgramStudi() {
  const t = useTranslations("Homepage");
  const programs = [
    {
      id: "housekeeping",
      titleKey: "programs.housekeeping.title",
      descriptionKey: "programs.housekeeping.description",
      levelKey: "levels.basic",
      icon: <BookOpen className="w-10 h-10 text-primary" />,
    },
    {
      id: "fb_service",
      titleKey: "programs.fb_service.title",
      descriptionKey: "programs.fb_service.description",
      levelKey: "levels.basic",
      icon: <Coffee className="w-10 h-10 text-primary" />,
    },
    {
      id: "culinary",
      titleKey: "programs.culinary.title",
      descriptionKey: "programs.culinary.description",
      levelKey: "levels.basic",
      icon: <Utensils className="w-10 h-10 text-primary" />,
    },
    {
      id: "room_division",
      titleKey: "programs.room_division.title",
      descriptionKey: "programs.room_division.description",
      levelKey: "levels.middle",
      icon: <Building2 className="w-10 h-10 text-primary" />,
    },
    {
      id: "fb_division",
      titleKey: "programs.fb_division.title",
      descriptionKey: "programs.fb_division.description",
      levelKey: "levels.middle",
      icon: <Layers className="w-10 h-10 text-primary" />,
    },
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-black uppercase text-slate-100 mb-4">
            {t("programs.sectionTitle")}
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            className="h-0.5 bg-slate-100 mx-auto mb-4"
          />
          <p className="text-slate-100 max-w-2xl mx-auto mb-12">
            {t.rich("programs.sectionDescription", {
              basic: (chunks) => (
                <span className="font-semibold text-white">{chunks}</span>
              ),
              middle: (chunks) => (
                <span className="font-semibold text-white">{chunks}</span>
              ),
            })}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-8 justify-center"
        >
          {programs.map((program, index) => (
            <div
              key={program.id}
              className="bg-white w-80 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 flex flex-col items-center text-center border border-transparent hover:border-slate-100 hover:scale-105"
            >
              <div className="mb-4">{program.icon}</div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t(program.titleKey)}
              </h3>

              <span
                className={`text-sm font-medium px-3 py-1 rounded-full mb-4 ${
                  t(program.levelKey) === "Basic Level"
                    ? "bg-primary text-white"
                    : "bg-amber-600 text-white"
                }`}
              >
                {t(program.levelKey)}
              </span>

              <p className="text-gray-600 text-sm leading-relaxed">
                {t(program.descriptionKey)}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
