export default function ArticlePageSkeleton() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-12">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
        <div className="h-4 w-14 animate-pulse rounded bg-zinc-200" />
        <div className="h-4 w-2 animate-pulse rounded bg-zinc-200" />
        <div className="h-4 w-36 animate-pulse rounded bg-zinc-200" />
      </nav>

      <article className="space-y-6">
        <div className="mt-3 space-y-3">
          <div className="h-12 w-11/12 animate-pulse rounded bg-zinc-200" />
          <div className="h-12 w-8/12 animate-pulse rounded bg-zinc-200" />
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex items-end gap-3">
            <div className="h-10 w-10 animate-pulse rounded-full bg-zinc-200" />
            <div className="space-y-2">
              <div className="h-4 w-28 animate-pulse rounded bg-zinc-200" />
              <div className="h-3 w-24 animate-pulse rounded bg-zinc-100" />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-3 w-24 animate-pulse rounded bg-zinc-200" />
            <div className="h-3 w-24 animate-pulse rounded bg-zinc-200" />
            <div className="h-3 w-20 animate-pulse rounded bg-zinc-200" />
          </div>
        </div>

        <div className="h-[320px] w-full animate-pulse rounded-lg bg-zinc-200" />

        <div className="space-y-3">
          <div className="h-6 w-full animate-pulse rounded bg-zinc-100" />
          <div className="h-6 w-11/12 animate-pulse rounded bg-zinc-100" />
          <div className="h-6 w-10/12 animate-pulse rounded bg-zinc-100" />
          <div className="h-10 w-7/12 animate-pulse rounded bg-zinc-200" />
          <div className="h-6 w-full animate-pulse rounded bg-zinc-100" />
          <div className="h-6 w-11/12 animate-pulse rounded bg-zinc-100" />
          <div className="h-6 w-9/12 animate-pulse rounded bg-zinc-100" />
        </div>
      </article>
    </main>
  );
}
