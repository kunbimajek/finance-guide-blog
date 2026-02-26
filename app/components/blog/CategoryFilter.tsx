"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ChevronDownIcon from "@/app/components/icons/ChevronDownIcon";

type CategoryFilterProps = {
  categories: string[];
  selectedCategory?: string;
};

export default function CategoryFilter({
  categories,
  selectedCategory,
}: CategoryFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (value) params.set("category", value);
    else params.delete("category");
    params.delete("page");

    const queryString = params.toString();
    router.push(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    });
  };

  return (
    <div>
      <label htmlFor="category-filter" className="sr-only">
        Filter by category
      </label>
      <div className="relative w-full max-w-xs">
        <select
          id="category-filter"
          value={selectedCategory ?? ""}
          onChange={handleChange}
          className="w-full appearance-none rounded-md border border-zinc-200 bg-white px-3 py-3 pr-10 text-sm font-medium text-gray-700 outline-none transition focus:border-zinc-400 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        >
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-3 inline-flex items-center text-gray-500"
        >
          <ChevronDownIcon className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}
