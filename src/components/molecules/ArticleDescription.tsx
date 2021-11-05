import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ArticleDescription = ({ children }: Props) => {
  return (
    <p className="text-base mb-6 h-28 overflow-hidden" itemProp="description">
      {children}
    </p>
  );
};

export default ArticleDescription;
