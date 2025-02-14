import { ChangeEvent } from "react";
import cl from "./Input.module.scss";
import cn from "classnames";

interface InputProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  value?: string;
  type?: string;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  placeholder = "Search by title",
  className,
  value,
  type,
}) => {
  return (
    <input
      type={type}
      className={cn(className, cl.input)}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
