import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { client } from "../lib/sanity.client";
import Hero from "../components/Hero";
import Program from "../components/Prodi/Program";

// const programs = [
//   {
//     name: "House Keeping",
//     level: "Basic Level",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam itaque quas non, commodi doloremque. Dolore quaerat porro tempora facere?",
//     image:
//       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "FB Service",
//     level: "Basic Level",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam itaque quas non, commodi doloremque. Dolore quaerat porro tempora facere?",
//     image:
//       "https://images.unsplash.com/photo-1537432376769-00a5d2d9fbb2?auto=format&fit=crop&w=900&q=60",
//   },
//   {
//     name: "Culinary",
//     level: "Basic Level",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam itaque quas non, commodi doloremque. Dolore quaerat porro tempora facere?",
//     image:
//       "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=900&q=60",
//   },
// ];

export default async function ProgramStudi() {
  const query = `*[_type=="program"] | order(title desc){
    title,
    slug,
    level,
    description,
    objective,
    kurikulum,
    image{
      asset -> {url},
      alt
    }
  }`;
  const programs = await client.fetch(query);
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero
        title="Program Studi"
        description="Temukan berbagai pilihan program studi unggulan yang dirancang untuk
          membentuk generasi profesional, kreatif, dan berdaya saing global."
      />

      {/* Program Grid */}
      <Program programs={programs} />
    </div>
  );
}
