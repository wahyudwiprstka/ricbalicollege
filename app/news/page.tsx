import Link from "next/link";
import { client } from "../lib/sanity.client";
import NewsHeader from "../components/newsComponents/Header";
import NewsContent from "../components/newsComponents/Content";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import NewsPagination from "../components/newsComponents/Pagination";
import Hero from "../components/Hero";
import { getTranslations } from "next-intl/server";
import { getUserLocale } from "@/lib/locale";

export const revalidate = 60;
interface PageProps {
  searchParams?: Promise<{
    page?: string;
  }>;
}

export default async function BeritaPage({ searchParams }: PageProps) {
  const pageParams = (await searchParams)?.page || 1;
  console.log(pageParams);
  const page = Number(pageParams);
  console.log("Page: " + page);
  const limit = 3;
  const skip = (page - 1) * limit;
  const locale = await getUserLocale();

  // get total news
  const totalQueryEN = `count(*[_type == 'newsEN'])`;
  const totalQueryID = `count(*[_type == 'news'])`;
  let totalQuery = totalQueryEN;
  if (locale == "id") {
    totalQuery = totalQueryID;
  }

  const totalNews = await client.fetch(totalQuery);
  const totalpages = Math.ceil(totalNews / limit);

  if (totalNews == 0) {
    return (
      <div className="min-h-[80vh] flex justify-center items-center bg-gray-100 text-2xl font-semibold">
        {locale == "id" ? "Belum Ada Berita" : "No News Available"}
      </div>
    );
  }

  // get news
  const queryID = `*[_type == 'news'] | order(publishedAt desc) [${skip}...${
    skip + limit
  }]{
    title,
    slug,
    publishedAt,
    coverImage{
      asset -> {url},
      alt,
    },
    body
  }`;
  const queryEN = `*[_type == 'newsEN'] | order(publishedAt desc) [${skip}...${
    skip + limit
  }]{
    title,
    slug,
    publishedAt,
    coverImage{
      asset -> {url},
      alt,
    },
    body
  }`;

  let query = queryEN;
  if (locale == "id") {
    query = queryID;
  } else if (locale == "en") {
    query = queryEN;
  }

  const news = await client.fetch(query, { skip, limit });
  const t = await getTranslations("news");
  return (
    <main className="min-h-screen bg-linear-to-b from-[#FFF8F8] to-[#FDECEC] text-gray-800">
      <Hero title={t("title")} description={t("description")} />
      <NewsContent news={news} />
      <NewsPagination page={page} totalpages={totalpages} />
    </main>
  );
}
