"use client";

import { ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import LanguageSwitcherMobile from "./LanguageSwitcherMobile";

const MobileMenu = ({ handleMenu, menuOpen, locale, changeLanguage }: any) => {
  const navItemsID = [
    { name: "Home", path: "/" },
    { name: "Program Jurusan", path: "/jurusan" },
    { name: "Tentang", path: "/about" },
    { name: "Berita", path: "/news" },
    { name: "Instruktur", path: "/instructors" },
    { name: "Pendaftaran", path: "/pendaftaran" },
    { name: "Kontak", path: "/contact" },
  ];

  const navItemsEN = [
    { name: "Home", path: "/" },
    { name: "Study Program", path: "/jurusan" },
    { name: "About", path: "/about" },
    { name: "News", path: "/news" },
    { name: "Instructors", path: "/instructors" },
    { name: "Enrollment", path: "/pendaftaran" },
    { name: "Contact", path: "/contact" },
  ];
  const [languageOpen, setLanguageOpen] = useState(false);
  const closeLanguage = () => {
    setLanguageOpen(false);
  };
  const pathname = usePathname();
  let navItems = navItemsEN;
  if (locale == "id") {
    navItems = navItemsID;
  } else if (locale == "en") {
    navItems = navItemsEN;
  }

  return (
    <>
      <AnimatePresence>
        {menuOpen && (
          <div className="">
            <motion.div
              initial={{ top: -100, opacity: 0 }}
              whileInView={{ top: 0, opacity: 1 }}
              exit={{ top: -100, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute left-0 top-0 h-screen w-screen overflow-scroll bg-white"
            >
              <div className="flex justify-between py-6 px-10 items-center">
                <img src={"/img/ric-bali.png"} className="w-48" />
                <button
                  onClick={handleMenu}
                  className="group flex text-gray-600 hover:text-gray-900 cursor-pointer"
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
                        href={item.path}
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
                  <li className="flex items-center gap-3 transition-colors duration-300">
                    <button
                      onClick={() => setLanguageOpen(true)}
                      className="flex items-center gap-2 py-3 font-black text-2xl uppercase text-gray-600 hover:text-primary cursor-pointer"
                    >
                      Language <ChevronRight />
                    </button>
                  </li>
                </ul>
              </div>
              <div className="z-30 fixed w-screen left-0 bottom-0 py-4 bg-white text-center border-t border-t-gray-200">
                Rising International College Bali
              </div>
            </motion.div>
            <LanguageSwitcherMobile
              languageOpen={languageOpen}
              closeLanguage={closeLanguage}
              handleMenu={handleMenu}
              locale={locale}
              changeLanguage={changeLanguage}
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
