type PaginationResult<T> = {
  items: T[];
  page: number;
  pageSize: number;
  totalPages: number;
};

type PageParam = string | string[] | undefined;

type PaginationToken = number | "ellipsis";

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

export function getBlogPageHref(page: number, category?: string) {
  const params = new URLSearchParams();

  if (category) params.set("category", category);

  if (page > 1) params.set("page", String(page));

  const queryString = params.toString();
  return queryString ? `/blog?${queryString}` : "/blog";
}

export function resolvePageParam(pageParam: PageParam): number {
  const requestedPageValue = Array.isArray(pageParam)
    ? pageParam[0]
    : pageParam;

  const requestedPage = requestedPageValue
    ? Number.parseInt(requestedPageValue, 10)
    : 1;

  return Number.isFinite(requestedPage) && requestedPage > 0
    ? requestedPage
    : 1;
}

export function getPaginationTokens(
  currentPage: number,
  totalPages: number,
  siblingCount = 1,
): PaginationToken[] {
  if (totalPages <= 0) return [];

  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);
  const totalPageNumbers = siblingCount * 2 + 5;

  if (totalPages <= totalPageNumbers) return range(1, totalPages);

  const leftSiblingIndex = Math.max(safeCurrentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(
    safeCurrentPage + siblingCount,
    totalPages,
  );
  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + siblingCount * 2;
    return [...range(1, leftItemCount), "ellipsis", totalPages];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + siblingCount * 2;
    return [
      1,
      "ellipsis",
      ...range(totalPages - rightItemCount + 1, totalPages),
    ];
  }

  return [
    1,
    "ellipsis",
    ...range(leftSiblingIndex, rightSiblingIndex),
    "ellipsis",
    totalPages,
  ];
}

export function paginateByParam<T>(
  allItems: T[],
  pageParam: string | string[] | undefined,
  pageSize: number,
): PaginationResult<T> {
  const page = resolvePageParam(pageParam);

  const safePageSize = Math.max(1, pageSize);
  const totalPages = Math.max(1, Math.ceil(allItems.length / safePageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * safePageSize;
  const end = start + safePageSize;

  return {
    items: allItems.slice(start, end),
    page: safePage,
    pageSize: safePageSize,
    totalPages,
  };
}
