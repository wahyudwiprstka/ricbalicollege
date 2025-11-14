import { client } from "@/app/lib/sanity.client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: String };
}) {
  const { slug } = await params;
  const query = `*[_type == "news" && slug.current == $slug][0]{
  title,
  slug,
  publishedAt,
  coverImage {
    asset -> { url },
    alt
  },
  body
}`;
  const news = await client.fetch(query, { slug: slug });
  if (!news) return notFound();
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3 text-gray-800">{news.title}</h1>
        <p className="text-gray-500">
          {new Date(news.publishedAt).toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>

      {news.coverImage?.asset?.url && (
        <div className="relative w-full h-[400px] mb-10 rounded-xl overflow-hidden shadow-md">
          <Image
            src={news.coverImage.asset.url}
            alt={news.coverImage.alt || "Gambar Berita"}
            fill
            className="object-cover"
          />
        </div>
      )}

      <article className="prose prose-lg max-w-none">
        <PortableText value={news.body} />
      </article>
    </section>
  );
}
