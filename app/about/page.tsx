"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "../components/Hero";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-[#FFF8F8] to-[#FDECEC] text-gray-800">
      {/* Section 1 - Header */}
      <Hero
        title="Tentang RIC College"
        description="Lembaga pelatihan kerja di bawah Yayasan Tridaya Santana Loka yang
          berdedikasi untuk membentuk generasi muda profesional, kompeten, dan
          berdaya saing global."
      />

      {/* Section 2 - Sejarah Singkat */}
      <section className="max-w-6xl mx-auto px-6 py-10 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Sejarah Singkat
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">
              Rising International College (RIC){" "}
            </span>
            berdiri di bawah{" "}
            <span className="font-semibold">Yayasan Tridaya Santana Loka </span>
            yang didirikan pada{" "}
            <span className="text-[#B21E35]">25 April 2025</span>. Lembaga ini
            hadir sebagai wujud komitmen untuk meningkatkan kualitas pendidikan
            vokasi di Indonesia, khususnya di sektor pariwisata dan perhotelan.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Dengan dukungan tenaga pengajar profesional dan kemitraan strategis
            bersama industri, RIC Bali siap menjadi lembaga pelatihan unggulan
            yang mencetak tenaga kerja kompeten dan siap bersaing di kancah
            nasional maupun internasional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/about-ric.jpg"
            alt="Gedung RIC College"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* Section 3 - Nilai dan Komitmen */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Nilai & Komitmen Kami</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Profesionalisme",
                desc: "Kami menanamkan budaya kerja disiplin, tanggung jawab, dan integritas tinggi di setiap kegiatan pembelajaran.",
              },
              {
                title: "Inovasi",
                desc: "Kami mendorong kreativitas peserta pelatihan untuk beradaptasi dengan perkembangan industri global.",
              },
              {
                title: "Keterampilan Global",
                desc: "Kami membekali peserta dengan kompetensi praktis yang sesuai dengan standar industri internasional.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-100 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Lokasi */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-6">
          Lokasi Kampus
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Jalan Panji Sakti No.168, Sawe Rangsasa, Kelurahan Dauhwaru, Kecamatan
          Jembrana, Kabupaten Jembrana, Bali, Kode Pos: 82218
        </p>

        <div className="mt-8 w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.2414980175827!2d114.64157337463422!3d-8.36131538575373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1400b7d8a8f63%3A0xa6b081d59a16b3a2!2sJembrana%2C%20Bali!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
