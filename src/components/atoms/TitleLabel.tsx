import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/** サイトタイトル */
export const TitleLabel = ({ children }: Props) => {
  return (
    <>
      <span className="ml-2 text-xl">{children}</span>
    </>
  );
};

export default TitleLabel;
