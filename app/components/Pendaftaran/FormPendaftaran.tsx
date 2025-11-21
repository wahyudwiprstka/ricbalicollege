import { motion } from "framer-motion";
import { FileText, Send } from "lucide-react";

const FormPendaftaran = ({ handleSubmit }: any) => {
  return (
    <section className="max-w-3xl mx-auto py-16 px-6">
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-sm shadow-red-900 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FileText className="text-primary" /> Formulir Pendaftaran
        </h2>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Periode Bulan/Kelas Yang Dipilih
          </label>
          <select
            name="entry.1364021650"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          >
            <option value="KELAS JUNI">Kelas Juni</option>
            <option value="KELAS DESEMBER">Kelas Desember</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Lokasi Kampus
          </label>
          <select
            name="entry.1475516640"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          >
            <option value="JEMBRANA">Jembrana</option>
            <option value="SINGARAJA">Singaraja</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="entry.1108691518"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            NIK (Nomor KTP)
          </label>
          <input
            type="text"
            name="entry.1054308342"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Tempat Lahir
          </label>
          <input
            type="text"
            name="entry.2021152434"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Tanggal Lahir
          </label>
          <input
            type="date"
            name="entry.1503152417"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Alamat Sesuai KK dan KTP (Banjar/Lingkungan, Desa/Kelurahan,
            Kecamatan)
          </label>
          <input
            type="text"
            name="entry.1276990936"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Nomor HP Siswa
          </label>
          <input
            type="tel"
            name="entry.348835861"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Nama Bapak
          </label>
          <input
            type="tel"
            name="entry.707848647"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Nomor HP Bapak
          </label>
          <input
            type="tel"
            name="entry.230802658"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Nama Ibu
          </label>
          <input
            type="tel"
            name="entry.1122980032"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Nomor HP Ibu
          </label>
          <input
            type="tel"
            name="entry.1926069085"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Asal Sekolah SMA/K Sederajat
          </label>
          <input
            type="tel"
            name="entry.949573400"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Program Jurusan Basic Level/D1 Yang Dipilih
          </label>
          <select
            name="entry.2056653400"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          >
            <option value="">Pilih Program Jurusan</option>
            <option value="FOOD AND BEVERAGE SERVICE">
              Food & Beverage Service
            </option>
            <option value="CULINARY">Culinary</option>
            <option value="HOUSEKEEPING">Housekeeping</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="entry.2105180388"
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white w-full py-3 rounded-xl font-semibold hover:bg-red-950 transition-all flex justify-center items-center gap-2"
        >
          <Send size={18} /> Kirim Pendaftaran
        </button>
      </motion.form>
    </section>
  );
};

export default FormPendaftaran;
