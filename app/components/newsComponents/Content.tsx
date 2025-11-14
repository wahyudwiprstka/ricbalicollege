"use client";
import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function NewsContent({ news }: any) {
  console.log(news);
  return (
    <section className="max-w-6xl mx-auto px-6 pt-16 grid md:grid-cols-3 gap-10">
      {news.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          <div className="relative w-full h-56">
            <Image
              src={item?.coverImage?.asset?.url}
              alt={item?.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-500">{item?.date}</p>
            <h3 className="text-lg font-semibold text-primary mt-2 line-clamp-2">
              {item?.title}
            </h3>
            <h3 className="point text-sm line-clamp-3 my-2">
              <PortableText value={item?.body} />
            </h3>

            <Link
              href={`/news/${item?.slug?.current}`}
              className="inline-block text-[#B21E35] font-medium hover:underline"
            >
              Baca Selengkapnya →
            </Link>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
