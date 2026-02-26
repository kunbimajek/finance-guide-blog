import ImageWrapper from "@/app/components/ui/ImageWrapper";
import type { ArticleAuthorData } from "@/app/lib/articles";

type ArticleAuthorProps = {
  authorData: ArticleAuthorData | null | undefined;
};

export default function ArticleAuthor({ authorData }: ArticleAuthorProps) {
  if (!authorData) return null;

  return (
    <div className="flex items-center gap-3">
      <ImageWrapper
        field={authorData.avatar}
        wrapperClassName="h-10 w-10 overflow-hidden rounded-full bg-zinc-200"
        imageClassName="h-full w-full object-cover"
      />
      <div>
        {authorData.name ? (
          <>
            <p className="text-sm font-bold text-gray-500">Written By</p>
            <p className="text-sm font-bold">{authorData.name}</p>
          </>
        ) : null}
      </div>
    </div>
  );
}
