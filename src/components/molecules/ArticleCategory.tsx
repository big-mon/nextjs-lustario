import { ReactNode } from "react";
import CustomLink from "components/atoms/CustomLink";

type Props = {
  children: ReactNode;
};

const ArticleCategory = ({ children }: Props) => {
  return (
    <span className="text-sm opacity-80" itemProp="keywords">
      <CustomLink href={`/category/${children?.toString().toLowerCase()}/1`}>
        {children}
      </CustomLink>
    </span>
  );
};

export default ArticleCategory;
