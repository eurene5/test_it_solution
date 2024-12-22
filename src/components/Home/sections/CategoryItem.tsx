import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  active: boolean;
}

const CategoryItem = ({ children, active }: Readonly<Props>) => {
  return (
    <button
      type="button"
      className={`py-2 px-3 text-sm font-bold border-2 rounded-full space-x-1 hover:bg-green-800 hover:border-white hover:text-white flex flex-nowrap items-center justify-center
        ${
          !active
            ? "border-blue-950 text-blue-950"
            : "bg-green-800 border-white text-white"
        }`}
    >
      {children}
    </button>
  );
};

export default CategoryItem;
