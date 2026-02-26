import Link from "next/link";
import ArrowRightIcon from "@/app/components/icons/ArrowRightIcon";

type ArticleCtaButtonProps = {
  href: string;
  articleTitle?: string;
  className?: string;
  preserveLayout?: boolean;
};

export default function ArticleCtaButton({
  href,
  articleTitle,
  className,
  preserveLayout = false,
}: ArticleCtaButtonProps) {
  const isIconOnly = !preserveLayout;
  const baseClassName = isIconOnly
    ? "inline-flex items-center self-start rounded-sm bg-lime-300 p-2 text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 sm:rounded-md sm:border sm:border-zinc-200 sm:bg-white sm:p-0"
    : "inline-flex items-center self-start rounded-md border border-zinc-200 bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2";
  const resolvedClassName = className
    ? `${baseClassName} ${className}`
    : baseClassName;

  return (
    <Link
      href={href}
      aria-label={articleTitle ? `Read story: ${articleTitle}` : "Read story"}
      className={resolvedClassName}
    >
      <span
        className={
          isIconOnly
            ? "hidden px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.03em] sm:block"
            : "px-4 py-3 text-[11px] font-extrabold uppercase tracking-[0.03em]"
        }
      >
        Read story
      </span>
      <span
        aria-hidden
        className={
          isIconOnly
            ? "inline-flex items-center justify-center sm:mr-2 sm:rounded-sm sm:bg-lime-300 sm:p-2"
            : "mr-2 inline-flex items-center justify-center rounded-sm bg-lime-300 p-2 text-black"
        }
      >
        <ArrowRightIcon className="h-3 w-3" />
      </span>
    </Link>
  );
}
