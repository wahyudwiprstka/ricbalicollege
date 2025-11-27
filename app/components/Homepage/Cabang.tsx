"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function CabangKami() {
  const branches = [
    {
      name: "RIC Bali – Jembrana",
      address:
        "Jl. Panji Sakti No.168, Sawe Rangsasa, Dauhwaru, Jembrana, Bali",
      phone: "0822-2161-4945",
      map: "https://maps.google.com",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000",
    },
    {
      name: "RIC Bali – Singaraja",
      address: "Jl. Raya Kuta No. 20, Kuta, Badung",
      phone: "0813-xxxx-xxxx",
      map: "https://maps.google.com",
      image:
        "https://images.unsplash.com/photo-1527030280862-64139fba04ca?q=80&w=1000",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Cabang Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            RIC Bali memiliki dua cabang yang siap melayani kebutuhan pendidikan
            dan pelatihan di bidang pariwisata dengan fasilitas lengkap dan
            akses yang mudah dijangkau.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {branch.name}
                </h3>

                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="text-red-700 mt-1" size={20} />
                  <p className="text-gray-700">{branch.address}</p>
                </div>

                <p className="text-gray-700 mb-4">
                  <strong>Telepon:</strong> {branch.phone}
                </p>

                <a
                  href={branch.map}
                  target="_blank"
                  className="inline-block bg-primary text-white px-4 py-2 rounded-xl hover:bg-red-900 transition"
                >
                  Lihat di Google Maps
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
