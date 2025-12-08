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

  // get total news
  const totalQuery = `count(*[_type == 'news'])`;
  const totalNews = await client.fetch(totalQuery);
  const totalpages = Math.ceil(totalNews / limit);

  // get news
  const query = `*[_type == 'news'] | order(publishedAt desc) [${skip}...${
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
