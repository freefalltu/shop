import { ChangeEvent } from "react";
import cl from "./Input.module.scss";
import cn from "classnames";

interface InputProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  placeholder = "Search by title",
  className,
}) => {
  return (
    <input
      type="text"
      className={cn(className, cl.input)}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
