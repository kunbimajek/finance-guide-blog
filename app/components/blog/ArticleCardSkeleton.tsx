export default function ArticleCardSkeleton() {
  return (
    <li className="flex flex-col rounded-lg border border-zinc-200 bg-white p-6">
      <div className="mb-4 h-48 w-full animate-pulse rounded-md bg-zinc-200" />

      <div className="mb-3 flex items-center gap-4">
        <div className="h-6 w-24 animate-pulse rounded-sm bg-zinc-200" />
        <div className="h-4 w-28 animate-pulse rounded bg-zinc-200" />
      </div>

      <div className="mb-6 space-y-3">
        <div className="h-7 w-11/12 animate-pulse rounded bg-zinc-200" />
        <div className="h-7 w-9/12 animate-pulse rounded bg-zinc-200" />
        <div className="h-5 w-full animate-pulse rounded bg-zinc-100" />
        <div className="h-5 w-10/12 animate-pulse rounded bg-zinc-100" />
      </div>

      <div className="mt-auto h-11 w-40 animate-pulse rounded-md border border-zinc-200 bg-zinc-100" />
    </li>
  );
}
