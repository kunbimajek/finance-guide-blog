import { isFilled, type Content } from "@prismicio/client";
import type { Metadata } from "next";

const DEFAULT_TITLE = "Finance Guide Blog";
const DEFAULT_DESCRIPTION = "Finance articles and guides";

function getArticleSeoImage(article: Content.BlogPostDocument) {
  const imageField = isFilled.image(article.data.meta_image)
    ? article.data.meta_image
    : isFilled.image(article.data.hero_image)
      ? article.data.hero_image
      : null;

  if (!imageField?.url) return undefined;

  return {
    url: imageField.url,
    alt: imageField.alt || article.data.title || "Article image",
    width: imageField.dimensions?.width,
    height: imageField.dimensions?.height,
  };
}

export function buildArticleMetadata(
  article: Content.BlogPostDocument,
): Metadata {
  const title = article.data.meta_title || article.data.title || DEFAULT_TITLE;
  const description =
    article.data.meta_description ||
    article.data.excerpt ||
    DEFAULT_DESCRIPTION;
  const image = getArticleSeoImage(article);
  const images = image ? [image] : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${article.uid}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `/blog/${article.uid}`,
      images,
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title,
      description,
      images: images?.map((image) => image.url),
    },
  };
}

export function buildMissingArticleMetadata(): Metadata {
  return {
    title: `Article not found | ${DEFAULT_TITLE}`,
    description: DEFAULT_DESCRIPTION,
  };
}
