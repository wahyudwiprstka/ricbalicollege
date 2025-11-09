"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const instructors = [
  {
    id: 1,
    name: "I Made Wirawan, S.Tr.Par",
    role: "Instruktur Housekeeping",
    image: "/images/instruktur1.jpg",
    bio: "Berpengalaman lebih dari 8 tahun di industri perhotelan, khususnya di bidang housekeeping. Pernah bekerja di beberapa hotel berbintang di Bali.",
  },
  {
    id: 2,
    name: "Ni Luh Ayu Pratiwi, S.Tr.Par",
    role: "Instruktur Food & Beverage Service",
    image: "/images/instruktur2.jpg",
    bio: "Memiliki keahlian di bidang layanan restoran dan bar. Aktif memberikan pelatihan hospitality dengan pendekatan berbasis praktik.",
  },
  {
    id: 3,
    name: "I Ketut Adi Putra, S.Tr.Kul",
    role: "Instruktur Culinary",
    image: "/images/instruktur3.jpg",
    bio: "Chef profesional yang berpengalaman di dapur hotel internasional. Mengajarkan teknik memasak praktis dengan standar industri global.",
  },
];

export default function InstructorPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#FFF8F8] to-[#FDECEC] text-gray-800">
      {/* Header Section */}
      <section className="bg-primary text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Tim Instruktur Kami
        </motion.h1>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Para pengajar di RIC College merupakan profesional berpengalaman di
          bidangnya, siap membimbing peserta pelatihan menuju karier sukses di
          industri pariwisata.
        </p>
      </section>

      {/* Instruktur Cards */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        {instructors.map((inst, i) => (
          <motion.div
            key={inst.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative w-full h-72">
              <Image
                src={inst.image}
                alt={inst.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-primary">
                {inst.name}
              </h3>
              <p className="text-sm text-[#B21E35] font-medium mt-1">
                {inst.role}
              </p>
              <p className="text-gray-700 text-sm mt-3 flex-1">{inst.bio}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <div className="text-center pb-16">
        <motion.a
          href="/program"
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-[#B21E35] transition"
        >
          Lihat Program Pelatihan →
        </motion.a>
      </div>
    </main>
  );
}
