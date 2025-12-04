"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LanguagesIcon } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LanguageSwitcher = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const locale = document.cookie
    .split("; ")
    .find((row) => row.startsWith("locale="))
    ?.split("=")[1];

  const changeLanguage = (locale: string) => {
    document.cookie = `locale=${locale}; path=/`;
    window.location.reload();
  };

  return (
    <div onMouseLeave={() => setMenuOpen(false)}>
      <button
        onMouseEnter={() => setMenuOpen(true)}
        className="flex text-sm border border-primary text-primary px-2 py-1 rounded-4xl cursor-pointer"
      >
        <LanguagesIcon width={20} />
        <ChevronDown width={20} />
      </button>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute w-44 rounded right-0 py-3 pr-2"
          >
            <div className="bg-white shadow border border-slate-200">
              <button
                onClick={() => changeLanguage("id")}
                className={`flex items-center gap-2 py-2 px-4 hover:bg-slate-100 w-full h-full text-left cursor-pointer rounded-t ${
                  locale == "id" ? "font-semibold text-primary" : ""
                }`}
              >
                <img src={"/img/indonesia.png"} width={30} height={20} />
                <span>Indonesia</span>
              </button>
              <button
                onClick={() => changeLanguage("en")}
                className={`flex items-center gap-2 py-2 px-4 hover:bg-slate-100 w-full h-full text-left cursor-pointer rounded-b ${
                  locale == "en" ? "font-semibold text-primary" : ""
                }`}
              >
                <img src={"/img/english.png"} width={30} height={20} />
                <span>English</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
