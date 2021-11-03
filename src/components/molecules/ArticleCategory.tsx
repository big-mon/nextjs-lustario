import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ArticleCategory = ({ children }: Props) => {
  return (
    <p className="text-sm text-gray-500 mb-2" itemProp="keywords">
      {children}
    </p>
  );
};

export default ArticleCategory;
