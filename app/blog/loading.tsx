import ArticleCardSkeleton from "@/app/components/blog/ArticleCardSkeleton";
import FeaturedCarouselSkeleton from "@/app/components/blog/FeaturedCarouselSkeleton";

export default function BlogLoading() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="mb-12 flex items-center justify-between">
          <h1 className="text-5xl font-bold">The Finance Guide</h1>
          <p className="hidden font-bold text-gray-500 md:block">A finance blog by Moss</p>
        </div>

        <FeaturedCarouselSkeleton />

        <h2 className="mb-4 mt-12 text-2xl font-semibold">Latest Articles</h2>
        <div className="mb-6 h-11 w-full max-w-xs animate-pulse rounded-md border border-zinc-200 bg-white" />

        <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <ArticleCardSkeleton key={index} />
          ))}
        </ul>

        <div className="mt-10 flex items-center justify-center gap-2">
          <div className="h-8 w-8 animate-pulse rounded-sm bg-zinc-200" />
          <div className="h-8 w-8 animate-pulse rounded-sm bg-zinc-100" />
          <div className="h-8 w-8 animate-pulse rounded-sm bg-zinc-100" />
        </div>
      </div>
    </main>
  );
}
