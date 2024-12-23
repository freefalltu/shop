import { Link } from "react-router-dom";
import classes from "./NavBar.module.scss";
import counter from "src/img/icon-cart.svg";
import { useAppSelector } from "src/hook/redux";

export const NavBar = () => {
  const { carts } = useAppSelector((state) => state.userSlice);

  return (
    <nav className={classes.header}>
      <div className={classes.container}>
        <Link className={classes.logo} to="/">
          Goods4you
        </Link>
        <nav className={classes.nav}>
          <Link className={classes.btn} data-goto="/" to="/#Catalog">
            Catalog
          </Link>
          <Link className={classes.btn} to="/#FAQ">
            FAQ
          </Link>
          <Link className={classes.btnCart} to="cart">
            <span>Cart</span>
            <img className={classes.img} src={counter} alt="" />
            {carts.length > 0 ? (
              <div className={classes.counter}>{carts[0].totalQuantity}</div>
            ) : (
              <div />
            )}
          </Link>
          <a className={classes.btn} href="#">
            Johnson Smith
          </a>
        </nav>
      </div>
    </nav>
  );
};
