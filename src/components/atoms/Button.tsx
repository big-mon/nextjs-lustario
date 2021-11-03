import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button className="mx-2 border rounded-full border-gray-600 px-4 py-1 hover:bg-gray-600 hover:text-white">
      {children}
    </button>
  );
};

export default Button;
