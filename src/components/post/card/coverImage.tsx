import Image from "next/image";
import CustomLink from "components/common/customLink";

type Props = {
  src: string;
  alt: string;
  slug: string;
};

/** 記事カバー画像 */
const CoverImage = ({ src, alt, slug }: Props) => {
  const isInternal = src && !src.startsWith("http") && !src.startsWith("/");
  const fixSrc = isInternal ? `/${src}` : src;

  return (
    <CustomLink href={`/post/${slug}`}>
      <Image
        src={fixSrc}
        alt={alt}
        quality={60}
        itemProp="image"
        className="transform duration-500 group-hover:scale-105"
        fill
      />
    </CustomLink>
  );
};

export default CoverImage;
