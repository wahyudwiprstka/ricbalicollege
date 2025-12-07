"use client";

import { ChevronDown, LanguagesIcon, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import { changeLanguage, getLocale } from "@/lib/localeClient";

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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [popup, setPopup] = useState(true);
  const pathname = usePathname();

  const locale = getLocale();

  let navItems = navItemsEN;

  if (locale == "id") {
    navItems = navItemsID;
  } else if (locale == "en") {
    navItems = navItemsEN;
  } else {
    navItems = navItemsEN;
  }

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      <header
        className={`fixed z-50 bg-white w-full transition-all duration-300 font-elms font-momo shadow`}
      >
        <div className="flex justify-between py-3 px-8 md:px-16">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src={"/img/ric-bali.png"}
              width={1000}
              height={1000}
              alt="Logo RICB"
              className="w-64"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-black group relative duration-300 `}
              >
                <span
                  className={`group-hover:text-primary ${
                    pathname == item.path
                      ? "text-primary font-semibold"
                      : "text-black"
                  } `}
                >
                  {item.name}
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 w-0 group-hover:w-full`}
                ></span>
              </Link>
            ))}
            <LanguageSwitcher />
          </nav>
          {/* Mobile Menu (Hamburger Button) */}
          <button className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          <MobileMenu handleMenu={handleMenu} menuOpen={menuOpen} />
        </AnimatePresence>
        {/* <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 100, height: 280 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative flex flex-col gap-4 mt-3 pb-2"
          >
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`hover:text-primary duration-200 ease-in-out ${
                    pathname == item.path ? "text-primary" : "text-black"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence> */}
        <div
          className={`${
            popup ? "flex" : "hidden"
          } w-screen py-2 bg-red-300 z-50 text-black px-8 md:px-16 flex justify-between`}
        >
          {locale == "id" ? (
            <p>Website ini sedang dalam tahap pengembangan</p>
          ) : (
            <p>This website is currently under development</p>
          )}
          <button onClick={() => setPopup(false)} className="cursor-pointer">
            <X />
          </button>
        </div>
      </header>
    </>
  );
}
