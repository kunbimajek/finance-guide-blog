"use client";

import { fireEvent, render, screen } from "@testing-library/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CategoryFilter from "@/app/components/blog/CategoryFilter";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe("CategoryFilter", () => {
  const push = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ push });
    (usePathname as jest.Mock).mockReturnValue("/blog");
    (useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams("page=2"),
    );
  });

  it("pushes category query and resets page param", () => {
    render(
      <CategoryFilter
        categories={["Accounting", "Investing", "Banking & Finance"]}
        selectedCategory={undefined}
      />,
    );

    fireEvent.change(screen.getByLabelText(/filter by category/i), {
      target: { value: "Investing" },
    });

    expect(push).toHaveBeenCalledWith("/blog?category=Investing", {
      scroll: false,
    });
  });

  it("clears category to all articles", () => {
    render(
      <CategoryFilter
        categories={["Accounting", "Investing", "Banking & Finance"]}
        selectedCategory="Accounting"
      />,
    );

    fireEvent.change(screen.getByLabelText(/filter by category/i), {
      target: { value: "" },
    });

    expect(push).toHaveBeenCalledWith("/blog", { scroll: false });
  });
});
