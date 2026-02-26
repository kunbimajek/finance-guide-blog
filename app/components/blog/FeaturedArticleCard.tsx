import type { Content } from "@prismicio/client";
import ImageWrapper from "@/app/components/ui/ImageWrapper";
import { getArticleData } from "@/app/lib/articles";
import ArticleCtaButton from "./ArticleCtaButton";

type FeaturedArticleCardProps = {
  article: Content.BlogPostDocument;
};

export default function FeaturedArticleCard({
  article,
}: FeaturedArticleCardProps) {
  const { uid, title, excerpt, category, heroImage } = getArticleData(article);

  return (
    <li className="w-full min-w-0">
      <div className="flex min-w-0 flex-col gap-6 rounded-lg border border-zinc-200 bg-white p-6 lg:flex-row">
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex items-center gap-4">
            <p className="rounded-sm bg-blue-500 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.04em] text-white">
              Featured
            </p>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-gray-500">
              {category}
            </p>
          </div>
          <div className="mb-0 sm:mb-10 mt-6 w-full lg:mb-24 lg:max-w-[420px]">
            <h2 className="mt-1 break-words text-xl font-semibold leading-tight">
              {title}
            </h2>
            <p className="mt-2 break-words text-sm font-medium leading-relaxed text-gray-600">
              {excerpt}
            </p>
          </div>
          <div className="hidden sm:block">
            <ArticleCtaButton href={`/blog/${uid}`} articleTitle={title} />
          </div>
        </div>
        <ImageWrapper
          field={heroImage}
          wrapperClassName="min-w-0 flex-1 overflow-hidden rounded-md"
          imageClassName="h-80 w-full object-cover"
        />
        <div className="sm:hidden">
          <ArticleCtaButton
            href={`/blog/${uid}`}
            articleTitle={title}
            preserveLayout
          />
        </div>
      </div>
    </li>
  );
}
