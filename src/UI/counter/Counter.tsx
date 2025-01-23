import cl from "./Counter.module.scss";
import React, { MouseEventHandler } from "react";
import { Button } from "../button";

interface CounterProps {
  size?: "medium" | "large";
  children: number;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onMinusClick?: MouseEventHandler<HTMLButtonElement>;
  onPlusClick?: MouseEventHandler<HTMLButtonElement>;
  itemInCart: number;
}

export const Counter: React.FC<CounterProps> = ({
  size = "medium",
  children,
  onClick,
  onMinusClick,
  onPlusClick,
  itemInCart,
}) => {
  return (
    <div className={cl.counter} onClick={onClick}>
      <Button
        className={cl[size]}
        type="myBtnIcon"
        view="icon"
        onClick={onMinusClick}
      >
        <div className={cl.minus} />
      </Button>
      {itemInCart < 2 ? (
        <span>{children} item</span>
      ) : (
        <span>{children} items</span>
      )}
      <Button
        className={cl[size]}
        type="myBtnIcon"
        view="icon"
        onClick={onPlusClick}
      >
        <div className={cl.plus} />
      </Button>
    </div>
  );
};
