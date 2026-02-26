type PaginationResult<T> = {
  items: T[];
  page: number;
  pageSize: number;
  totalPages: number;
};

type PageParam = string | string[] | undefined;

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
