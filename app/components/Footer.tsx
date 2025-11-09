"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* --- Kolom 1: Logo & Deskripsi --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-3 ">RIC College</h2>
          <p className=" text-sm leading-relaxed">
            Rising International College (RIC) Bali Jembrana merupakan lembaga
            pelatihan kerja berbasis vokasi yang berkomitmen untuk menghasilkan
            lulusan berkualitas, kompeten, dan siap menghadapi tantangan
            industri global.
          </p>
        </motion.div>

        {/* --- Kolom 2: Tautan Cepat --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-3 ">Tautan Cepat</h3>
          <ul className="space-y-2 ">
            <li>
              <Link href="/" className="hover:text-primary transition">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/tentang" className="hover:text-primary transition">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href="/program-studi"
                className="hover:text-primary transition"
              >
                Program Studi
              </Link>
            </li>
            <li>
              <Link
                href="/pendaftaran"
                className="hover:text-primary transition"
              >
                Pendaftaran
              </Link>
            </li>
            <li>
              <Link href="/kontak" className="hover:text-primary transition">
                Kontak
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* --- Kolom 3: Kontak --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-3 ">Hubungi Kami</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-1 " />
              <span>
                Jl. Panji Sakti No.168, Sawe Rangsasa, Dauhwaru, Jembrana, Bali
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="" />
              <span>+62 822-2161-4945</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="" />
              <span>info@riccollege.com</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* --- Garis & Copyright --- */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/60 text-sm">
        <p>
          © {new Date().getFullYear()} RIC College. Semua Hak Cipta Dilindungi.
        </p>
      </div>
    </footer>
  );
}
