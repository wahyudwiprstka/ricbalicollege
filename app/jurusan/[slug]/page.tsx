import ProdiDetails from "@/app/components/jurusan/jurusanDetails";
import { client } from "@/app/lib/sanity.client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default async function DetailProgram({
  params,
}: {
  params: { slug: string };
}) {
  const query = `*[_type=='program' && slug.current == $slug][0]{
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

  const { slug } = await params;

  const program = await client.fetch(query, { slug });
  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-gray-600">
        <h2>Program tidak ditemukan 😔</h2>
      </div>
    );
  }

  return (
    <>
      <ProdiDetails program={program} />
    </>
  );
}
