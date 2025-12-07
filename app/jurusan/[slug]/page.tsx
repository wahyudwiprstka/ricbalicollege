"use client";

import ProdiDetails from "@/app/components/jurusan/jurusanDetails";
import { client } from "@/app/lib/sanity.client";
import { getLocale } from "@/lib/localeClient";
import JurusanID from "@/app/jurusan/jurusanID.json";
import JurusanEN from "@/app/jurusan/jurusanEN.json";
import { useParams } from "next/navigation";

export default function DetailProgram() {
  const { slug } = useParams<{ slug: string }>();

  const locale = getLocale();
  const getPrograms = (locale: string | undefined) => {
    if (locale == "id") {
      return JurusanID;
    } else if (locale == "en") {
      return JurusanEN;
    } else {
      return JurusanEN;
    }
  };
  const programs = getPrograms(locale);
  const program = programs.jurusan.find((p) => p.slug == slug);
  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-gray-600">
        <h2>Program tidak ditemukan 😔</h2>
      </div>
    );
  }

  return (
    <>
      <ProdiDetails programs={programs} program={program} />
    </>
  );
}
