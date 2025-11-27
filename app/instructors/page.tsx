import Hero from "../components/Hero";
import InstrukturList from "../components/Instruktur/InstrukturList";
import CTA from "../components/Instruktur/CTA";
import { client } from "../lib/sanity.client";

// const instructors = [
//   {
//     id: 1,
//     name: "I Made Wirawan, S.Tr.Par",
//     role: "Instruktur Housekeeping",
//     image: "/images/instruktur1.jpg",
//     bio: "Berpengalaman lebih dari 8 tahun di industri perhotelan, khususnya di bidang housekeeping. Pernah bekerja di beberapa hotel berbintang di Bali.",
//   },
//   {
//     id: 2,
//     name: "Ni Luh Ayu Pratiwi, S.Tr.Par",
//     role: "Instruktur Food & Beverage Service",
//     image: "/images/instruktur2.jpg",
//     bio: "Memiliki keahlian di bidang layanan restoran dan bar. Aktif memberikan pelatihan hospitality dengan pendekatan berbasis praktik.",
//   },
//   {
//     id: 3,
//     name: "I Ketut Adi Putra, S.Tr.Kul",
//     role: "Instruktur Culinary",
//     image: "/images/instruktur3.jpg",
//     bio: "Chef profesional yang berpengalaman di dapur hotel internasional. Mengajarkan teknik memasak praktis dengan standar industri global.",
//   },
// ];

export default async function InstructorPage() {
  const query = `*[_type=="instruktur"] | order(_createdAt asc){
    name,
    bidang,
    image{
      asset -> {url}
    }
  }`;
  const instructors = await client.fetch(query);
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header Section */}
      <Hero
        title="Tim Instruktur Kami"
        description="Para pengajar di RIC Bali merupakan profesional berpengalaman di
          bidangnya, siap membimbing peserta pelatihan menuju karier sukses di
          industri pariwisata."
      />

      {/* Instruktur Cards */}
      <InstrukturList instructors={instructors} />

      <CTA />
    </main>
  );
}
