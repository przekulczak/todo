"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  totalPages?: number;
}

export function Pagination({ totalPages = 10 }: Props) {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const getPageNumbers = () => {
    const pages = [];
    const showPages = 2;

    for (
      let i = Math.max(1, currentPage - showPages);
      i <= Math.min(totalPages, currentPage + showPages);
      i++
    ) {
      pages.push(i);
    }

    return pages;
  };

  if (totalPages < 2) {
    return null;
  }

  return (
    <nav className="flex items-center justify-center gap-2">
      <Button variant="outline" size="sm" asChild disabled={isFirstPage}>
        <Link
          href={
            isFirstPage ? `?page=${currentPage}` : `?page=${currentPage - 1}`
          }
        >
          Previous
        </Link>
      </Button>

      {getPageNumbers().map((pageNumber) => (
        <Button
          key={pageNumber}
          variant={pageNumber === currentPage ? "default" : "outline"}
          size="sm"
          asChild
        >
          <Link href={`?page=${pageNumber}`}>{pageNumber}</Link>
        </Button>
      ))}

      <Button variant="outline" size="sm" asChild disabled={isLastPage}>
        <Link
          href={
            isLastPage ? `?page=${currentPage}` : `?page=${currentPage + 1}`
          }
        >
          Next
        </Link>
      </Button>
    </nav>
  );
}
