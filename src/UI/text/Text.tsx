import React, { MouseEventHandler, ReactNode } from "react";
import cl from "./Text.module.scss";
import cn from "classnames";

interface TextProps {
  children: ReactNode;
  tag: "span" | "p";
  className: string;
  fontSize?: "s" | "m" | "l" | "xl" | "xxl";
  fontWeight?: "regular" | "medium" | "semiBold";
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const Text: React.FC<TextProps> = ({
  tag: Component = "p",
  children,
  className,
  fontSize = "s",
  fontWeight = "regular",
  onClick,
}) => {
  return (
    <Component
      onClick={onClick}
      className={cn(className, cl[fontSize], cl[fontWeight])}
    >
      {children}
    </Component>
  );
};
