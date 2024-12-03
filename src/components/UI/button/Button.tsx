import React, { ReactNode } from "react";
import cn from "classnames";
import cl from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  view?: "text" | "icon";
  size?: "big" | "small";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  view = "text",
  size = "small",
}) => {
  return (
    <button className={cn(className, cl[view], cl[size])} onClick={onClick}>
      {children}
    </button>
  );
};
