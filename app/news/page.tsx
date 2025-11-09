// app/berita/page.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const beritaList = [
  {
    id: 1,
    title: "RIC College Resmi Didirikan di Jembrana, Bali",
    date: "2 Mei 2025",
    image: "/images/berita1.jpg",
    excerpt:
      "Rising International College (RIC) Bali Jembrana resmi berdiri di bawah Yayasan Tridaya Santana Loka. Lembaga ini siap mencetak tenaga kerja unggul dan kompeten di bidang pariwisata.",
  },
  {
    id: 2,
    title: "Pelatihan Perdana Program Housekeeping Berlangsung Sukses",
    date: "10 Juni 2025",
    image: "/images/berita2.jpg",
    excerpt:
      "Kegiatan pelatihan dasar housekeeping pertama telah diselenggarakan di kampus RIC dengan semangat tinggi dari peserta pelatihan.",
  },
  {
    id: 3,
    title: "RIC Jalin Kerjasama dengan Industri Perhotelan Lokal",
    date: "20 Juli 2025",
    image: "/images/berita3.jpg",
    excerpt:
      "Untuk memperluas kesempatan magang dan kerja bagi peserta pelatihan, RIC menjalin kemitraan strategis dengan beberapa hotel ternama di Bali.",
  },
];

export default function BeritaPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#FFF8F8] to-[#FDECEC] text-gray-800">
      {/* Header Section */}
      <section className="bg-primary text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Berita & Kegiatan
        </motion.h1>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          Dapatkan informasi terbaru seputar kegiatan, pelatihan, dan
          perkembangan Rising International College (RIC) Bali Jembrana.
        </p>
      </section>

      {/* Grid Berita */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">
        {beritaList.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full h-56">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500">{item.date}</p>
              <h3 className="text-lg font-semibold text-primary mt-2 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm mt-2 line-clamp-3">
                {item.excerpt}
              </p>

              <Link
                href={`/berita/${item.id}`}
                className="inline-block mt-4 text-[#B21E35] font-medium hover:underline"
              >
                Baca Selengkapnya →
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA or Pagination */}
      <div className="text-center pb-16">
        <Link
          href="#"
          className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-[#B21E35] transition"
        >
          Lihat Semua Berita
        </Link>
      </div>
    </main>
  );
}
