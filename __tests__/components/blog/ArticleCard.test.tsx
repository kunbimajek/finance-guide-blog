import { render, screen } from "@testing-library/react";
import type { Content } from "@prismicio/client";
import ArticleCard from "@/app/components/blog/ArticleCard";

jest.mock("@/app/components/ui/ImageWrapper", () => ({
  __esModule: true,
  default: () => <div data-testid="image-wrapper" />,
}));

jest.mock("@/app/lib/articles", () => ({
  getArticleData: jest.fn(() => ({
    uid: "stocks-101",
    title: "Stocks 101: Everything You Need to Know About the Market",
    excerpt: "A clear beginner guide to how the stock market works.",
    category: "Investing",
    publishedDate: "June 16, 2025",
    heroImage: null,
  })),
}));

describe("ArticleCard", () => {
  it("renders article data and story link", () => {
    render(<ArticleCard article={{} as Content.BlogPostDocument} />);

    expect(
      screen.getByText(
        "Stocks 101: Everything You Need to Know About the Market",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText("A clear beginner guide to how the stock market works."),
    ).toBeInTheDocument();
    expect(screen.getByText("Investing")).toBeInTheDocument();
    expect(screen.getByText("June 16, 2025")).toBeInTheDocument();
    expect(screen.getByTestId("image-wrapper")).toBeInTheDocument();

    const link = screen.getByRole("link", {
      name: /read story: stocks 101: everything you need to know about the market/i,
    });
    expect(link).toHaveAttribute("href", "/blog/stocks-101");
  });
});
