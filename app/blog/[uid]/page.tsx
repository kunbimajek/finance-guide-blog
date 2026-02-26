import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/app/components/blog/Breadcrumbs";
import ArticleAuthor from "@/app/components/blog/ArticleAuthor";
import ArticleBody from "@/app/components/blog/ArticleBody";
import ArticleMeta from "@/app/components/blog/ArticleMeta";
import ImageWrapper from "@/app/components/ui/ImageWrapper";
import {
  getArticleAuthorData,
  getArticleByUID,
  getArticleData,
} from "@/app/lib/articles";
import {
  buildArticleMetadata,
  buildMissingArticleMetadata,
} from "@/app/lib/seo";

type BlogArticlePageProps = {
  params: Promise<{ uid: string }>;
};

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { uid } = await params;
  const article = await getArticleByUID(uid).catch(() => null);

  if (!article) return buildMissingArticleMetadata();

  return buildArticleMetadata(article);
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { uid } = await params;
  const article = await getArticleByUID(uid).catch(() => notFound());

  const { publishedDate, title, category, heroImage, readTimeMinutes } =
    getArticleData(article);
  const authorData = await getArticleAuthorData(article.data.author);

  return (
    <main
      id="main-content"
      className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-12"
    >
      <Breadcrumbs currentPage={title} />

      <article className="space-y-4">
        <h1 className="text-4xl font-bold mt-3 mb-8">{title}</h1>
        <div className="flex flex-wrap items-end justify-between gap-3 mt-4">
          <ArticleAuthor authorData={authorData} />
          <ArticleMeta
            category={category}
            publishedDate={publishedDate}
            readTimeMinutes={readTimeMinutes}
          />
        </div>
        <ImageWrapper
          field={heroImage}
          wrapperClassName="overflow-hidden rounded-lg"
          imageClassName="h-auto w-full object-cover"
        />
        <ArticleBody content={article.data.content} />
      </article>
    </main>
  );
}
