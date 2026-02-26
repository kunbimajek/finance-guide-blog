import ArticleCard from "@/app/components/blog/ArticleCard";
import { getAllArticles } from "@/app/lib/articles";

export default async function BlogPage() {
  const articles = await getAllArticles();

  return (
    <main id="main-content" className="min-h-screen bg-zinc-50">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-5xl font-bold">The Finance Guide</h1>
          <p className="font-bold text-gray-500 hidden md:block">
            A finance blog by Moss
          </p>
        </div>

        <h2 className="mt-12 mb-4 text-2xl font-semibold">Latest Articles</h2>

        {articles.length > 0 ? (
          <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.uid} article={article} />
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-600">
            No articles found for this category.
          </p>
        )}
      </div>
    </main>
  );
}
