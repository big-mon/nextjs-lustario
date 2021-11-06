import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/** サイトタイトル */
const TitleLabel = ({ children }: Props) => {
  return (
    <>
      <span className="ml-2 text-xl" itemProp="name about">
        {children}
      </span>
    </>
  );
};

export default TitleLabel;
