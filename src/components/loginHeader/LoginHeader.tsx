import { Link } from "react-router-dom";
import cl from "./LoginHeader.module.scss";

export const LoginHeader = () => {
  return (
    <div className={cl.header}>
      <Link className={cl.logo} to="/">
        Goods4you
      </Link>
    </div>
  );
};
