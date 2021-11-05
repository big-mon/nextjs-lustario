import { ReactNode } from "react";
import CustomLink from "components/atoms/CustomLink";

type Props = {
  slug: string;
  isLarge: boolean;
  children: ReactNode;
};

const ArticleTitle = ({ slug, isLarge, children }: Props) => {
  return (
    <>
      {isLarge ? (
        <h1 className="text-4xl my-4" itemProp="headline name">
          <CustomLink href={`/post/${slug}`}>{children}</CustomLink>
        </h1>
      ) : (
        <h1 className="text-xl font-semibold my-4" itemProp="headline name">
          <CustomLink href={`/post/${slug}`}>{children}</CustomLink>
        </h1>
      )}
    </>
  );
};

export default ArticleTitle;
