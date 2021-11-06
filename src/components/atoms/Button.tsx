import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button className="mx-2 px-6 py-2 border border-gray-500 rounded-full bg-white hover:bg-gray-600 shadow-xl hover:shadow-2xl hover:text-white transform duration-500">
      {children}
    </button>
  );
};

export default Button;
