"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const MobileMenu = ({ handleMenu, menuOpen }: any) => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Program Jurusan", path: "/jurusan" },
    { name: "Tentang", path: "/about" },
    { name: "Berita", path: "/news" },
    { name: "Instruktur", path: "/instructors" },
    { name: "Pendaftaran", path: "/pendaftaran" },
    { name: "Kontak", path: "/contact" },
  ];
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <div className="">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute left-0 top-0 h-screen w-screen overflow-scroll bg-white"
            >
              <div className="flex justify-between py-6 px-10 items-center">
                <img src={"/img/ric-bali.png"} width={300} />
                <button
                  onClick={handleMenu}
                  className="group flex gap-4 text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  Close
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: 180 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="group-hover:rotate-180 transition-transform"
                  >
                    <X />
                  </motion.div>
                </button>
              </div>
              <div className="px-10">
                <ul>
                  {navItems.map((item, index) => (
                    <li key={index} className={`py-3`}>
                      <a
                        href="/"
                        className={`font-black text-2xl uppercase hover:text-primary transition-colors duration-300 ${
                          pathname == item.path
                            ? "text-primary"
                            : "text-gray-600"
                        }`}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <div className="fixed w-screen left-0 bottom-0 py-4 z-10 bg-white text-center border-t border-t-gray-200">
              Rising International College Bali
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
