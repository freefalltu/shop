import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <Link className={classes.logo} to="/">
          Goods4you
        </Link>
        <nav>
          <Link className={classes.btn} to="/#Catalog">
            Catalog
          </Link>
          <Link className={classes.btn} to="/#FAQ">
            FAQ
          </Link>
        </nav>
      </div>
    </footer>
  );
};
