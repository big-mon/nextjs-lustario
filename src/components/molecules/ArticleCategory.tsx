import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ArticleCategory = ({ children }: Props) => {
  return (
    <span className="text-sm opacity-80" itemProp="keywords">
      {children}
    </span>
  );
};

export default ArticleCategory;
