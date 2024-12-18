import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__container}>
        <Link className={classes.container__logo} to="/">
          Goods4you
        </Link>
        <nav>
          <Link className={classes.nav__btn} to="/#Catalog">
            Catalog
          </Link>
          <Link className={classes.nav__btn} to="/#FAQ">
            FAQ
          </Link>
        </nav>
      </div>
    </footer>
  );
};
