import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

interface Props extends LinkProps {
  children: ReactNode;
  className?: string;
}

const BlackButton = ({
  children,
  href,
  className,
  ...props
}: Readonly<Props>) => {
  return (
    <Link
      href={href}
      className={`bg-black py-3 px-4 text-white hover:bg-orange-500 hover:text-orange-50 rounded-3xl ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default BlackButton;
