import Link from "next/link";
import { getBlogPageHref, getPaginationTokens } from "@/app/lib/pagination";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  category?: string;
};

export default function Pagination({ currentPage, totalPages, category }: PaginationProps) {
  if (totalPages <= 1) return null;

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;
  const pageTokens = getPaginationTokens(currentPage, totalPages);

  return (
    <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-2">
      {hasPreviousPage ? (
        <Link
          href={getBlogPageHref(currentPage - 1, category)}
          scroll={false}
          aria-label="Go to previous page"
          className="inline-flex h-8 items-center justify-center rounded-sm border border-zinc-200 bg-white px-3 text-xs font-bold text-zinc-700 hover:border-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        >
          Prev
        </Link>
      ) : (
        <span
          aria-disabled="true"
          className="inline-flex h-8 items-center justify-center rounded-sm border border-zinc-200 bg-zinc-100 px-3 text-xs font-bold text-zinc-400"
        >
          Prev
        </span>
      )}

      {pageTokens.map((token, index) => {
        if (token === "ellipsis") {
          return (
            <span key={`ellipsis-${index}`} aria-hidden="true" className="px-1 text-zinc-500">
              ...
            </span>
          );
        }

        const isActive = token === currentPage;

        return (
          <Link
            key={token}
            href={getBlogPageHref(token, category)}
            scroll={false}
            aria-current={isActive ? "page" : undefined}
            aria-label={`Go to page ${token}`}
            className={`inline-flex h-8 min-w-8 items-center justify-center rounded-sm border text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
              isActive
                ? "border-emerald-900 bg-emerald-900 text-white"
                : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
            }`}
          >
            {String(token).padStart(2, "0")}
          </Link>
        );
      })}

      {hasNextPage ? (
        <Link
          href={getBlogPageHref(currentPage + 1, category)}
          scroll={false}
          aria-label="Go to next page"
          className="inline-flex h-8 items-center justify-center rounded-sm border border-zinc-200 bg-white px-3 text-xs font-bold text-zinc-700 hover:border-zinc-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        >
          Next
        </Link>
      ) : (
        <span
          aria-disabled="true"
          className="inline-flex h-8 items-center justify-center rounded-sm border border-zinc-200 bg-zinc-100 px-3 text-xs font-bold text-zinc-400"
        >
          Next
        </span>
      )}
    </nav>
  );
}
