import { Link } from "react-router-dom";
import classes from "./NavBar.module.scss";
import counter from "src/img/icon-cart.svg";
import { useAppSelector } from "src/hook/redux";

export const NavBar = () => {
  const { user } = useAppSelector((state) => state.userSlice);

  const { catalogData } = useAppSelector((state) => state.productSlice);

  return (
    <nav className={classes.header}>
      <div className={classes.header__container}>
        <Link className={classes.container__logo} to="/">
          Goods4you
        </Link>
        <nav className={classes.nav}>
          <Link className={classes.nav__btn} data-goto="/" to="/#Catalog">
            Catalog
          </Link>
          <Link className={classes.nav__btn} to="/#FAQ">
            FAQ
          </Link>
          <Link className={classes.nav__btnCart} to="cart">
            <span>Cart</span>
            <img className={classes.btn__img} src={counter} alt="" />
            <div className={classes.btn__counter}>0</div>
          </Link>
          <a className={classes.nav__btn} href="#">
            Johnson Smith
          </a>
        </nav>
      </div>
    </nav>
  );
};
