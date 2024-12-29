import React, { MouseEventHandler, ReactNode } from "react";
import cn from "classnames";
import cl from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  view?: "text" | "icon";
  size?: "big" | "small";
  type: "myBtnIcon" | "myBtnText";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  view = "text",
  size = "small",
  type = "myBtnText",
}) => {
  return (
    <button
      className={cn(className, cl[view], cl[size], cl[type])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
