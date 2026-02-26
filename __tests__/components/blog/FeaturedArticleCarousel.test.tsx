"use client";

import { fireEvent, render, screen } from "@testing-library/react";
import type { Content } from "@prismicio/client";
import FeaturedArticleCarousel from "@/app/components/blog/FeaturedArticleCarousel";

jest.mock("@/app/components/blog/FeaturedArticleCard", () => ({
  __esModule: true,
  default: ({ article }: { article: { uid: string } }) => (
    <li>{article.uid}</li>
  ),
}));

function createArticle(uid: string): Content.BlogPostDocument {
  return { uid } as Content.BlogPostDocument;
}

describe("FeaturedArticleCarousel", () => {
  const articles = [
    createArticle("article-1"),
    createArticle("article-2"),
    createArticle("article-3"),
  ];

  it("moves to next and specific slide using controls", () => {
    const { container } = render(
      <FeaturedArticleCarousel articles={articles} />,
    );
    const track = container.querySelector("ul");
    expect(track).toHaveStyle({ transform: "translateX(-0%)" });

    fireEvent.click(
      screen.getByRole("button", { name: /next featured article/i }),
    );
    expect(track).toHaveStyle({ transform: "translateX(-100%)" });

    fireEvent.click(
      screen.getByRole("button", { name: /go to featured article 3/i }),
    );
    expect(track).toHaveStyle({ transform: "translateX(-200%)" });
  });

  it("wraps to the last slide when clicking previous from first slide", () => {
    const { container } = render(
      <FeaturedArticleCarousel articles={articles} />,
    );
    const track = container.querySelector("ul");

    fireEvent.click(
      screen.getByRole("button", { name: /previous featured article/i }),
    );
    expect(track).toHaveStyle({ transform: "translateX(-200%)" });
  });
});
