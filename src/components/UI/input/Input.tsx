import { ChangeEvent } from "react";
import cl from "./Input.module.scss";

interface InputProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  placeholder = "Search by title",
}) => {
  return (
    <input
      type="text"
      className={cl.input}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
