"use client";

import { useState, type KeyboardEvent } from "react";
import type { Content } from "@prismicio/client";
import CarouselNavigation from "@/app/components/blog/CarouselNavigation";
import FeaturedArticleCard from "@/app/components/blog/FeaturedArticleCard";

type FeaturedArticleCarouselProps = {
  articles: Content.BlogPostDocument[];
};

export default function FeaturedArticleCarousel({
  articles,
}: FeaturedArticleCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleSlides = articles.length > 1;

  if (articles.length === 0) return null;

  const goToPrevious = () => {
    setActiveIndex(
      (currentIndex) => (currentIndex - 1 + articles.length) % articles.length,
    );
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % articles.length);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!hasMultipleSlides) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNext();
    }
  };

  return (
    <section
      aria-label="Featured articles"
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
    >
      <p className="sr-only" aria-live="polite">
        Featured article {activeIndex + 1} of {articles.length}
      </p>
      <div className="w-full overflow-hidden">
        <ul
          className="m-0 grid list-none grid-flow-col auto-cols-[100%] p-0 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {articles.map((article) => (
            <FeaturedArticleCard key={article.uid} article={article} />
          ))}
        </ul>
      </div>

      {hasMultipleSlides ? (
        <CarouselNavigation
          totalSlides={articles.length}
          activeIndex={activeIndex}
          onPrevious={goToPrevious}
          onNext={goToNext}
          onSelect={setActiveIndex}
        />
      ) : null}
    </section>
  );
}
