import Link from "next/link";
import { getBlogPageHref } from "@/app/lib/pagination";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  category?: string;
};

export default function Pagination({
  currentPage,
  totalPages,
  category,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex items-center justify-center gap-2"
    >
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const isActive = page === currentPage;

        return (
          <Link
            key={page}
            href={getBlogPageHref(page, category)}
            scroll={false}
            aria-current={isActive ? "page" : undefined}
            aria-label={`Go to page ${page}`}
            className={`inline-flex h-8 min-w-8 items-center justify-center rounded-sm border text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
              isActive
                ? "border-emerald-900 bg-emerald-900 text-white"
                : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
            }`}
          >
            {String(page).padStart(2, "0")}
          </Link>
        );
      })}
    </nav>
  );
}
