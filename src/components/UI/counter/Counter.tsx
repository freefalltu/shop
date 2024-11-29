import cn from "classnames";
import cl from "./Counter.module.scss";
import React, { useState } from "react";
import MyButton from "../button/Button";

interface CounterProps {
  size?: "medium" | "large";
  children: number;
}

const Counter: React.FC<CounterProps> = ({ size = "medium", children }) => {
  const [count, setCount] = useState(children);
  const increment = () => {
    setCount((value) => value + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount((value) => value - 1);
    }
  };

  return (
    <div className={cl.counter}>
      <MyButton
        className={cn(cl.myBtn, cl[size])}
        onClick={decrement}
        view="icon"
      >
        <div className={cl.minus} />
      </MyButton>
      <span>{count} items</span>
      <MyButton
        className={cn(cl.myBtn, cl[size])}
        onClick={increment}
        view="icon"
      >
        <div className={cl.plus} />
      </MyButton>
    </div>
  );
};

export default Counter;
