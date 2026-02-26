import type { Content } from "@prismicio/client";

type CategoryParam = string | string[] | undefined;

type CategoryFilterState = {
  categories: string[];
  activeCategory?: string;
  filteredArticles: Content.BlogPostDocument[];
};

export function getCategoryFilterState(
  articles: Content.BlogPostDocument[],
  categoryParam: CategoryParam,
): CategoryFilterState {
  const categories = Array.from(
    new Set(articles.map((article) => article.data.category)),
  ).sort((left, right) => left.localeCompare(right));

  const requestedCategory = Array.isArray(categoryParam)
    ? categoryParam[0]
    : categoryParam;

  const activeCategory = requestedCategory
    ? categories.find((category) => category === requestedCategory)
    : undefined;

  const filteredArticles = activeCategory
    ? articles.filter((article) => article.data.category === activeCategory)
    : articles;

  return {
    categories,
    activeCategory,
    filteredArticles,
  };
}
