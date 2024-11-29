import cl from "./Input.module.scss";

const Input = () => {
  return (
    <input type="text" className={cl.input} placeholder="Search by title" />
  );
};

export default Input;
