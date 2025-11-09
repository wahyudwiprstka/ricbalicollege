"use client";

import { motion } from "framer-motion";

export default function VisiMisiPage() {
  return (
    <section className="min-h-screen bg-linear-to-br from-rose-50 to-red-50 flex flex-col items-center justify-center px-6 py-16">
      {/* Judul */}
      <motion.img
        src="/img/visimisi.png"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-60 font-bold text-center mb-12 text-[#711a1a] tracking-wide"
      ></motion.img>

      {/* Container */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full">
        {/* Card Visi */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-lg border-l-4 border-[#711a1a] p-8 hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-semibold text-[#711a1a] mb-3">Visi</h2>
          <p className="text-gray-700 leading-relaxed">
            Menjadi lembaga vokasi terkemuka yang menghasilkan lulusan
            berkualitas tinggi, inovatif, dan memiliki keahlian serta
            keterampilan yang sesuai dengan kebutuhan industri nasional dan
            global.
          </p>
          <p className="text-gray-500 italic mt-4">
            Visi ini menjadi dasar dalam setiap langkah pengembangan lembaga,
            menumbuhkan semangat profesionalisme dan inovasi agar mampu bersaing
            di era global.
          </p>
        </motion.div>

        {/* Card Misi */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-lg border-r-4 border-[#711a1a] p-8 hover:shadow-xl transition"
        >
          <h2 className="text-2xl font-semibold text-[#711a1a] mb-3">Misi</h2>
          <ul className="text-gray-700 space-y-3 leading-relaxed">
            <li>
              1. Menyediakan pelatihan berkualitas tinggi berbasis standar
              industri nasional dan internasional untuk menciptakan tenaga kerja
              yang terampil dan kompeten.
            </li>
            <li>
              2. Mengembangkan program pelatihan berbasis praktik dengan
              pendekatan hands-on dan pengalaman langsung di industri pariwisata
              dan ekonomi kreatif.
            </li>
            <li>
              3. Menjalin kemitraan strategis dengan industri pariwisata, hotel,
              restoran, dan agen perjalanan guna memperluas peluang kerja bagi
              lulusan.
            </li>
            <li>
              4. Mendorong inovasi dan kewirausahaan di bidang pariwisata dengan
              membekali peserta pelatihan keterampilan bisnis dan digital.
            </li>
            <li>
              5. Menanamkan nilai etika, keramahan, dan profesionalisme sebagai
              fondasi utama dalam membangun tenaga kerja unggul di sektor
              pariwisata.
            </li>
            <li>
              6. Mendukung pengembangan pariwisata berkelanjutan dengan
              mengajarkan praktik ramah lingkungan berbasis budaya lokal.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
