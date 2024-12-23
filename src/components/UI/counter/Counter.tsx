import cn from "classnames";
import cl from "./Counter.module.scss";
import React, { MouseEventHandler } from "react";
import { Button } from "../button";

interface CounterProps {
  size?: "medium" | "large";
  children: number;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onMinusClick?: MouseEventHandler<HTMLButtonElement>;
  onPlusClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Counter: React.FC<CounterProps> = ({
  size = "medium",
  children,
  onClick,
  onMinusClick,
  onPlusClick,
}) => {
  return (
    <div className={cl.counter} onClick={onClick}>
      <Button
        className={cn(cl.myBtn, cl[size])}
        view="icon"
        onClick={onMinusClick}
      >
        <div className={cl.minus} />
      </Button>
      <span>{children} items</span>
      <Button
        className={cn(cl.myBtn, cl[size])}
        view="icon"
        onClick={onPlusClick}
      >
        <div className={cl.plus} />
      </Button>
    </div>
  );
};
