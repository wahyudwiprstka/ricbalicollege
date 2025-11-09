"use client";
import { motion } from "framer-motion";
import { FileText, Send } from "lucide-react";
import { useState } from "react";

export default function Pendaftaran() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    program: "",
    dokumen: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({ ...formData, dokumen: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulir berhasil dikirim!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-primary to-red-900 text-white text-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            Pendaftaran Mahasiswa Baru
          </h1>
          <p className="max-w-2xl mx-auto text-blue-100 text-lg">
            Wujudkan masa depanmu bersama kami. Lengkapi formulir di bawah ini
            untuk melakukan pendaftaran secara online.
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
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
              Nama Lengkap
            </label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Nomor Telepon
            </label>
            <input
              type="tel"
              name="telepon"
              value={formData.telepon}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Program Studi Pilihan
            </label>
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <option value="">Pilih Program Studi</option>
              <option value="Sistem Informasi">Sistem Informasi</option>
              <option value="Teknik Informatika">Teknik Informatika</option>
              <option value="Manajemen">Manajemen</option>
              <option value="Akuntansi">Akuntansi</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Upload Dokumen (PDF/Foto Ijazah)
            </label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
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
    </div>
  );
}
