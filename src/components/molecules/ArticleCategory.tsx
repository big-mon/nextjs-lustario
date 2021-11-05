import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ArticleCategory = ({ children }: Props) => {
  return (
    <p className="text-sm opacity-80 mb-4" itemProp="keywords">
      {children}
    </p>
  );
};

export default ArticleCategory;
