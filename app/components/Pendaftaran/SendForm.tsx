import React from "react";
import FormPendaftaran from "./FormPendaftaran";

const SendForm = () => {
  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Mencegah form submission standar (pindah halaman)

    const formData = new FormData(event.target);

    const formObject = Object.fromEntries(formData.entries());

    const urlEncodedData = new URLSearchParams(
      formObject as Record<string, string>
    ).toString();

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
