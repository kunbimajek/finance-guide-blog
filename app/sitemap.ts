import type { MetadataRoute } from "next";
import { getAllArticles } from "@/app/lib/articles";
import { getAbsoluteUrl } from "@/app/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles();

  return [
    {
      url: getAbsoluteUrl("/blog"),
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...articles.map((article) => ({
      url: getAbsoluteUrl(`/blog/${article.uid}`),
      lastModified: article.last_publication_date
        ? new Date(article.last_publication_date)
        : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
