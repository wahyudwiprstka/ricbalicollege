import React from "react";
import FormPendaftaran from "./FormPendaftaran";

const SendForm = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Mencegah form submission standar (pindah halaman)

    const formData = new FormData(event.target);

    // Format data untuk Google Form (entry.ID=VALUE&entry.ID=VALUE)
    const urlEncodedData = new URLSearchParams(formData).toString();

    try {
      const response = await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdwrUqYC10eXGB1JW0pNN0aGE-J6Phq8xrP_X7tYhNpyuFmVw/formResponse",
        {
          method: "POST",
          body: urlEncodedData,
          mode: "no-cors", // Penting untuk Google Form submission via AJAX
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      // Karena menggunakan mode 'no-cors', 'response.ok' akan selalu false/error
      // Tapi data SANGAT mungkin sudah terkirim ke Google Form.
      // Anda bisa menganggap ini berhasil dan menampilkan pesan sukses.
      alert("Data berhasil dikirim!");
    } catch (error) {
      console.error("Error saat mengirim data:", error);
      alert("Terjadi kesalahan saat mengirim data. Cek console.");
    }
  };
  return (
    <div>
      <FormPendaftaran handleSubmit={handleSubmit} />
    </div>
  );
};

export default SendForm;
