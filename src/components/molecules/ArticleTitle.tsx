import { ReactNode } from "react";
import CustomLink from "components/atoms/CustomLink";

type Props = {
  slug: string;
  children: ReactNode;
};

const ArticleTitle = ({ slug, children }: Props) => {
  return (
    <h1 className="text-xl font-semibold mb-4" itemProp="headline name">
      <CustomLink href={`/post/${slug}`}>{children}</CustomLink>
    </h1>
  );
};

export default ArticleTitle;
