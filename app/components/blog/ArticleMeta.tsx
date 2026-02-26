type ArticleMetaProps = {
  category: string;
  publishedDate?: string | null;
  readTimeMinutes?: number | null;
};

export default function ArticleMeta({
  category,
  publishedDate,
  readTimeMinutes,
}: ArticleMetaProps) {
  return (
    <div className="flex gap-4 text-xs font-bold uppercase tracking-wide text-gray-500">
      <p>{category}</p>
      <p>{publishedDate}</p>
      <p>{readTimeMinutes} min read</p>
    </div>
  );
}
