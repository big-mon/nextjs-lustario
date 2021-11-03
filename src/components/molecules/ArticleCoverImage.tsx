import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

/** 記事カバー画像 */
const ArticleCoverImage = ({ src, alt }: Props) => {
  const isInternal = src && !src.startsWith("http") && !src.startsWith("/");
  const fixSrc = isInternal ? `/${src}` : src;

  return (
    <Image
      src={fixSrc}
      alt={alt}
      layout="fill"
      objectFit="cover"
      itemProp="image"
    />
  );
};

export default ArticleCoverImage;
