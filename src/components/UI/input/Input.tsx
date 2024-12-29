import { ChangeEvent } from "react";
import cl from "./Input.module.scss";

interface InputProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  value,
  placeholder = "Search by title",
}) => {
  return (
    <input
      type="text"
      className={cl.input}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
