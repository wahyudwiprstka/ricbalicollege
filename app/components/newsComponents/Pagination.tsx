import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function NewsPagination({ page, totalpages }: any) {
  let limitBawah = page - 2;
  limitBawah < 0 ? (limitBawah = 0) : limitBawah;
  return (
    <section className="pt-6 pb-10">
      <Pagination className="text-primary">
        <PaginationContent>
          {page > 1 ? (
            <PaginationItem>
              <PaginationPrevious
                href={`/news?page=${page - 1}`}
                className="hover:bg-primary hover:text-white"
              />
            </PaginationItem>
          ) : (
            <PaginationItem className="text-gray-400 cursor-default">
              <PaginationPrevious />
            </PaginationItem>
          )}
          {page > 3 && (
            <>
              <PaginationItem>
                <PaginationLink
                  href="/news?page=1"
                  className="hover:bg-primary hover:text-white"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </>
          )}
          {Array.from({ length: totalpages })
            .slice(limitBawah, page + 2)
            .map((_, i) =>
              i + limitBawah < page + 1 ? (
                <PaginationItem key={i}>
                  <PaginationLink
                    href={`/news?page=${i + limitBawah + 1}`}
                    isActive={page === i + limitBawah + 1}
                    className="hover:bg-primary hover:text-white"
                  >
                    {i + limitBawah + 1}
                  </PaginationLink>
                </PaginationItem>
              ) : (
                <div key={i} className="flex">
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href={`/news?page=${totalpages}`}
                      className="hover:bg-primary hover:text-white"
                    >
                      {totalpages}
                    </PaginationLink>
                  </PaginationItem>
                </div>
              )
            )}
          {page < totalpages ? (
            <PaginationItem>
              <PaginationNext
                href={`/news?page=${page + 1}`}
                className="hover:bg-primary hover:text-white"
              />
            </PaginationItem>
          ) : (
            <PaginationItem className="text-gray-400 cursor-default">
              <PaginationNext aria-disabled />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </section>
  );
}
