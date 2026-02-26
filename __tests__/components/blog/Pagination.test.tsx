import { render, screen } from "@testing-library/react";
import Pagination from "@/app/components/blog/Pagination";

describe("Pagination", () => {
  it("renders page links and keeps category query param", () => {
    render(<Pagination currentPage={2} totalPages={3} category="Investing" />);

    expect(screen.getByRole("link", { name: "Go to page 1" })).toHaveAttribute(
      "href",
      "/blog?category=Investing",
    );
    expect(screen.getByRole("link", { name: "Go to page 2" })).toHaveAttribute(
      "href",
      "/blog?category=Investing&page=2",
    );
    expect(screen.getByRole("link", { name: "Go to page 3" })).toHaveAttribute(
      "href",
      "/blog?category=Investing&page=3",
    );
    expect(screen.getByRole("link", { name: "Go to page 2" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(
      screen.getByRole("link", { name: "Go to previous page" }),
    ).toHaveAttribute("href", "/blog?category=Investing");
    expect(
      screen.getByRole("link", { name: "Go to next page" }),
    ).toHaveAttribute("href", "/blog?category=Investing&page=3");
  });

  it("does not render when only one page exists", () => {
    const { container } = render(
      <Pagination currentPage={1} totalPages={1} category={undefined} />,
    );
    expect(container).toBeEmptyDOMElement();
  });
});
