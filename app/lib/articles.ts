import { isFilled, type Content } from "@prismicio/client";
import { formatPublishedDate } from "@/app/lib/date";
import { createClient } from "@/prismicio";

export async function getAllArticles() {
  const client = createClient();

  return client.getAllByType("blog_post", {
    orderings: [{ field: "my.blog_post.published_date", direction: "desc" }],
  });
}

export function getFeaturedArticles(
  articles: Content.BlogPostDocument[],
  limit = 5,
) {
  const featuredArticles = articles.filter(({ data }) => data.featured);

  if (featuredArticles.length > 0) {
    return featuredArticles.slice(0, limit);
  }

  return articles.slice(0, limit);
}

export async function getArticleByUID(uid: string) {
  const client = createClient();

  return client.getByUID("blog_post", uid);
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

export async function getArticleAuthorData(
  author: Content.BlogPostDocument["data"]["author"],
): Promise<ArticleAuthorData | null> {
  if (!isFilled.contentRelationship(author)) return null;

  if (author.data) return author.data;

  const client = createClient();
  const authorDocument = await client
    .getByID<Content.AuthorDocument>(author.id)
    .catch(() => null);

  return authorDocument?.data ?? null;
}
