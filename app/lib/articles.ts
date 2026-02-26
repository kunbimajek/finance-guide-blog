import { type Content } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { formatPublishedDate } from "./date";

export async function getAllArticles() {
  const client = createClient();

  return client.getAllByType("blog_post", {
    orderings: [{ field: "my.blog_post.published_date", direction: "desc" }],
  });
}

type ArticleData = {
  uid: string;
  title: string;
  excerpt: string;
  category: string;
  publishedDate: string | null;
  readTimeMinutes: number | null;
  heroImage: Content.BlogPostDocument["data"]["hero_image"];
};

export type ArticleAuthorData = Pick<
  Content.AuthorDocument["data"],
  "name" | "role" | "avatar"
>;

export function getArticleData(article: Content.BlogPostDocument): ArticleData {
  return {
    uid: article.uid,
    title: article.data.title || "Untitled article",
    excerpt: article.data.excerpt || "",
    category: article.data.category || "Uncategorized",
    publishedDate: formatPublishedDate(article.data.published_date) || "",
    readTimeMinutes: article.data.read_time_minutes ?? null,
    heroImage: article.data.hero_image,
  };
}
