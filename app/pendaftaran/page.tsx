export default function PendaftaranPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Pendaftaran Peserta
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Silakan melakukan pendaftaran melalui formulir resmi kami. Isi data
          diri Anda dengan lengkap untuk dapat diproses oleh tim administrasi
          RIC Bali. Proses pendaftaran hanya membutuhkan beberapa menit.
        </p>

        {/* Card */}
        <div className="bg-white shadow-lg rounded-2xl p-12 border">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Formulir Pendaftaran Resmi
          </h2>
          <p className="text-gray-600 mb-8">
            Klik tombol di bawah ini untuk membuka formulir pendaftaran.
            Formulir akan terbuka di tab baru.
          </p>

          <a
            href="https://forms.gle/Q4Av7GMLANzgwpFW6"
            target="_blank"
            className="inline-block bg-primary text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-red-900 transition"
          >
            Buka Form Pendaftaran
          </a>

          <p className="text-gray-500 text-sm mt-6">
            Pastikan Anda mengisi seluruh data dengan benar.
          </p>
        </div>

        {/* Informasi Tambahan */}
        <div className="mt-16 text-left max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Persyaratan Umum
          </h3>
          <ul className="list-disc text-gray-700 space-y-2 pl-6">
            <li>Usia minimal 17 tahun.</li>
            <li>Mengisi formulir pendaftaran secara lengkap.</li>
            <li>Mengunggah dokumen yang diminta di Google Form.</li>
            <li>Bersedia mengikuti seluruh prosedur seleksi.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
            Bantuan & Informasi
          </h3>
          <p className="text-gray-600">
            Jika mengalami kendala saat mengisi formulir, silakan hubungi tim
            kami melalui halaman <strong>Kontak</strong> atau WhatsApp resmi RIC
            Bali.
          </p>
        </div>
      </div>
    </section>
  );
}
