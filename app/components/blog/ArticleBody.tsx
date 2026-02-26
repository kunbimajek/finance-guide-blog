import type { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

type ArticleBodyProps = {
  content: RichTextField;
};

export default function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <div
      className="
        max-w-none space-y-4 prose prose-zinc
        [&_h2]:text-2xl
        [&_p]:leading-relaxed
        [&_a]:text-blue-600 [&_a]:underline
        [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:leading-relaxed
      "
    >
      <PrismicRichText field={content} />
    </div>
  );
}
