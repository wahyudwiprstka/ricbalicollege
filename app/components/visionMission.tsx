"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VisiMisi() {
  return (
    <section className="relative bg-linear-to-br from-rose-50 via-white to-rose-100 py-16 overflow-hidden">
      {/* Background Dekoratif */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-rose-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-2">
        {/* Judul */}
        <motion.h2
          className="font-bold text-center mb-8 flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={"/img/visimisi.png"}
            height={200}
            width={200}
            alt="Visi & Misi"
          />
        </motion.h2>

        {/* Konten dua kolom */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* ===== VISI ===== */}
          <motion.div
            className="backdrop-blur-md bg-white/70 shadow-2xl rounded-3xl p-10 border-l-4 border-primary h:full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-primary">Visi</h3>
            <div className="h-1 bg-primary w-16 my-2 rounded-xs"></div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Menjadi lembaga vokasi terkemuka yang menghasilkan lulusan
              berkualitas tinggi, inovatif, dan memiliki keahlian serta
              keterampilan yang sesuai dengan kebutuhan industri nasional dan
              global.
            </p>
            <p className="text-gray-600 text-sm italic">
              Visi ini menjadi dasar dalam setiap langkah pengembangan lembaga,
              menumbuhkan semangat profesionalisme dan inovasi agar mampu
              bersaing di era global.
            </p>
          </motion.div>

          {/* ===== MISI ===== */}
          <motion.div
            className="backdrop-blur-md bg-white/70 shadow-xl rounded-3xl p-10 border-l-4 border-primary col-start-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-primary">Misi</h3>
            <div className="h-1 bg-primary w-16 my-2 rounded-xs"></div>
            <ul className="text-gray-700 list-decimal list-inside space-y-3 text-left">
              <li>
                Menyediakan pelatihan berkualitas tinggi berbasis standar
                industri nasional dan internasional untuk menciptakan tenaga
                kerja yang terampil dan kompeten.
              </li>
              <li>
                Mengembangkan program pelatihan berbasis praktik dengan
                pendekatan hands-on dan pengalaman langsung di industri
                pariwisata, perhotelan, dan ekonomi kreatif.
              </li>
              <li>
                Menjalin kemitraan strategis dengan industri pariwisata, hotel,
                restoran, dan agen perjalanan guna memperluas peluang kerja bagi
                lulusan.
              </li>
              <li>
                Mendorong inovasi dan kewirausahaan di bidang pariwisata dengan
                membekali peserta pelatihan keterampilan bisnis dan digital.
              </li>
              <li>
                Menanamkan nilai-nilai etika, keramahan, dan profesionalisme
                sebagai fondasi utama dalam membangun tenaga kerja unggul di
                sektor pariwisata.
              </li>
              <li>
                Mendukung pengembangan pariwisata berkelanjutan dengan
                mengajarkan praktik yang ramah lingkungan dan berbasis budaya
                lokal.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
