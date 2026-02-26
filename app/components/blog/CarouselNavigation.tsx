import ArrowRightIcon from "@/app/components/icons/ArrowRightIcon";

type CarouselNavigationProps = {
  totalSlides: number;
  activeIndex: number;
  onPrevious: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
};

type CarouselArrowButtonProps = {
  direction: "previous" | "next";
  onClick: () => void;
};

function CarouselArrowButton({ direction, onClick }: CarouselArrowButtonProps) {
  const isPrevious = direction === "previous";

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-8 w-8 items-center justify-center text-zinc-700 transition hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
      aria-label={
        isPrevious ? "Previous featured article" : "Next featured article"
      }
    >
      <ArrowRightIcon className={`h-4 w-4 ${isPrevious ? "rotate-180" : ""}`} />
    </button>
  );
}

export default function CarouselNavigation({
  totalSlides,
  activeIndex,
  onPrevious,
  onNext,
  onSelect,
}: CarouselNavigationProps) {
  return (
    <div className="mt-6 flex items-center justify-center gap-6">
      <CarouselArrowButton direction="previous" onClick={onPrevious} />

      <div className="flex items-center gap-2">
        {Array.from({ length: totalSlides }, (_, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={index}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`Go to featured article ${index + 1}`}
              aria-current={isActive ? "true" : undefined}
              aria-pressed={isActive}
              className={`h-1.5 rounded-full transition ${
                isActive
                  ? "w-7 bg-lime-400"
                  : "w-4 bg-zinc-200 hover:bg-zinc-300"
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2`}
            />
          );
        })}
      </div>

      <CarouselArrowButton direction="next" onClick={onNext} />
    </div>
  );
}
