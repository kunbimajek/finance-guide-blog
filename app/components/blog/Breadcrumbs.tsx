import Link from "next/link";

type BreadcrumbsProps = {
  currentPage: string;
  rootLabel?: string;
  rootHref?: string;
};

export default function Breadcrumbs({
  currentPage,
  rootLabel = "Blog",
  rootHref = "/blog",
}: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link
            href={rootHref}
            className="text-gray-500 underline-offset-4 hover:underline font-semibold"
          >
            {rootLabel}
          </Link>
        </li>
        <li aria-hidden className="text-gray-400">
          /
        </li>
        <li aria-current="page" className="truncate font-semibold">
          {currentPage}
        </li>
      </ol>
    </nav>
  );
}
