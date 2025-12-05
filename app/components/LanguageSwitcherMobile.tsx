"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, X } from "lucide-react";

const LanguageSwitcherMobile = ({
  languageOpen,
  closeLanguage,
  handleMenu,
}: any) => {
  const locale = document.cookie
    .split("; ")
    .find((row) => row.startsWith("locale="))
    ?.split("=")[1];

  const changeLanguage = (locale: string) => {
    document.cookie = `locale=${locale}; path=/`;
    window.location.reload();
  };
  return (
    <>
      <AnimatePresence>
        {languageOpen && (
          <motion.div
            initial={{ opacity: 0, left: -100 }}
            whileInView={{ opacity: 1, left: 0 }}
            exit={{ opacity: 0, left: -100 }}
            className="absolute w-screen h-screen left-0 top-0 z-50 bg-white"
          >
            <div className="flex justify-between pt-6 px-10 items-center">
              <img src={"/img/ric-bali.png"} className="w-48" />
              <button
                onClick={() => {
                  closeLanguage();
                  setTimeout(() => {
                    handleMenu();
                  }, 200);
                }}
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

            <button
              onClick={closeLanguage}
              className="group my-6 mx-8 flex text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              <ChevronLeft />
              Back
            </button>
            <div className="px-10">
              <ul className="text-2xl font-black ">
                <li
                  className={`mb-6 flex gap-3 items-center ${
                    locale == "id" ? "text-primary" : "text-gray-600"
                  }`}
                >
                  <img src={"/img/indonesia.png"} width={30} height={30} />
                  <button
                    onClick={() => changeLanguage("id")}
                    className=" hover:text-primary cursor-pointer"
                  >
                    INDONESIA
                  </button>
                </li>
                <li
                  className={`mb-6 flex gap-3 items-center ${
                    locale == "en" ? "text-primary" : "text-gray-600"
                  }`}
                >
                  <img src={"/img/english.png"} width={30} height={30} />
                  <button
                    onClick={() => changeLanguage("en")}
                    className="hover:text-primary cursor-pointer"
                  >
                    ENGLISH
                  </button>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LanguageSwitcherMobile;
