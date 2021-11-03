import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ArticleTitle = ({ children }: Props) => {
  return (
    <h1 className="text-xl font-semibold mb-4" itemProp="headline name">
      {children}
    </h1>
  );
};

export default ArticleTitle;
