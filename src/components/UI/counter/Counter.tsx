import cn from "classnames";
import cl from "./Counter.module.scss";
import React, { MouseEventHandler, useState } from "react";
import { Button } from "../button";

interface CounterProps {
  size?: "medium" | "large";
  children: number;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const Counter: React.FC<CounterProps> = ({
  size = "medium",
  children,
  onClick,
}) => {
  const [count, setCount] = useState(children);
  return (
    <div className={cl.counter} onClick={onClick}>
      <Button
        className={cn(cl.myBtn, cl[size])}
        view="icon"
        onClick={() => {
          setCount((value) => value - 1);
        }}
      >
        <div className={cl.minus} />
      </Button>
      <span>{count} items</span>
      <Button
        className={cn(cl.myBtn, cl[size])}
        view="icon"
        onClick={() => {
          setCount((value) => value + 1);
        }}
      >
        <div className={cl.plus} />
      </Button>
    </div>
  );
};
