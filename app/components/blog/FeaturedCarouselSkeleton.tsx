export default function FeaturedCarouselSkeleton() {
  return (
    <section aria-label="Featured articles loading">
      <div className="rounded-lg border border-zinc-200 bg-white p-6">
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="order-1 flex-1">
            <div className="mb-3 flex items-center gap-4">
              <div className="h-6 w-20 animate-pulse rounded-sm bg-zinc-200" />
              <div className="h-4 w-28 animate-pulse rounded bg-zinc-200" />
            </div>

            <div className="mb-10 mt-6 w-full space-y-3 lg:mb-24 lg:max-w-[420px]">
              <div className="h-8 w-11/12 animate-pulse rounded bg-zinc-200" />
              <div className="h-8 w-9/12 animate-pulse rounded bg-zinc-200" />
              <div className="h-5 w-full animate-pulse rounded bg-zinc-100" />
              <div className="h-5 w-11/12 animate-pulse rounded bg-zinc-100" />
            </div>

            <div className="hidden h-11 w-40 animate-pulse rounded-md border border-zinc-200 bg-zinc-100 lg:block" />
          </div>

          <div className="order-2 w-full overflow-hidden rounded-md lg:flex-1">
            <div className="h-80 w-full animate-pulse bg-zinc-200" />
          </div>
          <div className="order-3 h-11 w-40 animate-pulse rounded-md border border-zinc-200 bg-zinc-100 lg:hidden" />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-6">
        <div className="h-8 w-8 animate-pulse rounded-full bg-zinc-200" />
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-7 animate-pulse rounded-full bg-zinc-200" />
          <div className="h-1.5 w-4 animate-pulse rounded-full bg-zinc-200" />
          <div className="h-1.5 w-4 animate-pulse rounded-full bg-zinc-200" />
          <div className="h-1.5 w-4 animate-pulse rounded-full bg-zinc-200" />
        </div>
        <div className="h-8 w-8 animate-pulse rounded-full bg-zinc-200" />
      </div>
    </section>
  );
}
