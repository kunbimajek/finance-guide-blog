import Link from "next/link";
import type { Content } from "@prismicio/client";
import ArrowRightIcon from "@/app/components/icons/ArrowRightIcon";
import ImageWrapper from "@/app/components/ui/ImageWrapper";
import { getArticleData } from "@/app/lib/articles";

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
          <div className="mb-10 mt-6 w-full lg:mb-24 lg:max-w-[420px]">
            <h2 className="mt-1 break-words text-xl font-semibold leading-tight">
              {title}
            </h2>
            <p className="mt-2 break-words text-sm font-medium leading-relaxed text-gray-600">
              {excerpt}
            </p>
          </div>
          <Link
            href={`/blog/${uid}`}
            className="mt-auto inline-flex items-center self-start rounded-md border border-zinc-200 bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <span className="px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.03em]">
              Read story
            </span>
            <span
              aria-hidden
              className="mr-2 inline-flex items-center justify-center rounded-sm bg-lime-300 p-2 text-black"
            >
              <ArrowRightIcon className="h-3 w-3" />
            </span>
          </Link>
        </div>
        <ImageWrapper
          field={heroImage}
          wrapperClassName="min-w-0 flex-1 overflow-hidden rounded-md"
          imageClassName="h-80 w-full object-cover"
        />
      </div>
    </li>
  );
}
