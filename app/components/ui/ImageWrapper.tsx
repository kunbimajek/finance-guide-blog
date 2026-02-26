import { isFilled, type ImageField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

type ImageWrapperProps = {
  field: ImageField | null | undefined;
  wrapperClassName?: string;
  imageClassName?: string;
  preload?: boolean;
  loading?: "lazy" | "eager";
  sizes?: string;
};

export default function ImageWrapper({
  field,
  wrapperClassName,
  imageClassName,
  preload,
  loading = "lazy",
  sizes,
}: ImageWrapperProps) {
  if (!isFilled.image(field)) return null;

  const resolvedLoading = preload ? "eager" : loading;

  const image = (
    <PrismicNextImage
      field={field}
      fallbackAlt=""
      className={imageClassName}
      preload={preload}
      loading={resolvedLoading}
      sizes={sizes}
    />
  );

  return wrapperClassName ? <div className={wrapperClassName}>{image}</div> : image;
}
