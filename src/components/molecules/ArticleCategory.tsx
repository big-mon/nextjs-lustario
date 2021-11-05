import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ArticleCategory = ({ children }: Props) => {
  return (
    <p className="text-sm opacity-80 mb-2" itemProp="keywords">
      {children}
    </p>
  );
};

export default ArticleCategory;
