import React, { ReactNode } from "react";
import cl from "./Text.module.scss";
import cn from "classnames";

interface TextProps {
  children: ReactNode;
  tag: "span" | "p";
  className: string;
  fontSize?: "s" | "m" | "l" | "xl" | "xxl";
  fontWeight?: "regular" | "medium" | "semibold";
}

export const Text: React.FC<TextProps> = ({
  tag: Component = "p",
  children,
  className,
  fontSize = "s",
  fontWeight = "regular",
}) => {
  return (
    <Component className={cn(className, cl[fontSize], cl[fontWeight])}>
      {children}
    </Component>
  );
};
