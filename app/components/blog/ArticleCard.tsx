import type { Content } from "@prismicio/client";
import ImageWrapper from "@/app/components/ui/ImageWrapper";
import { getArticleData } from "@/app/lib/articles";
import ArticleCtaButton from "./ArticleCtaButton";

type ArticleCardProps = {
  article: Content.BlogPostDocument;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const { uid, title, excerpt, category, publishedDate, heroImage } =
    getArticleData(article);

  return (
    <li className="flex flex-col rounded-lg border border-zinc-200 bg-white p-6">
      <ImageWrapper
        field={heroImage}
        wrapperClassName="mb-6 overflow-hidden rounded-md"
        imageClassName="h-48 w-full object-cover"
      />
      <div className="mb-4 flex items-center gap-4">
        <p className="rounded-sm bg-sky-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.08em] text-blue-600">
          {category}
        </p>
        <p className="text-[12px] font-bold tracking-[0.04em] text-gray-500">
          {publishedDate}
        </p>
      </div>
      <div className="mb-6">
        <h2 className="mt-1 text-xl font-semibold leading-tight">{title}</h2>
        <p className="mt-2 text-sm font-medium text-gray-600 leading-relaxed">
          {excerpt}
        </p>
      </div>
      <ArticleCtaButton href={`/blog/${uid}`} articleTitle={title} />
    </li>
  );
}
