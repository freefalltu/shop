import { Link } from "react-router-dom";
import classes from "./NavBar.module.scss";
import counter from "src/img/icon-cart.svg";
import { useAppDispatch, useAppSelector } from "src/hook/redux";
import { resetProducts } from "src/store/reducers/productSlice";

export const NavBar = () => {
  const dispatch = useAppDispatch();
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
          <Link
            className={classes.btnCart}
            to="cart"
            onClick={() => {
              dispatch(resetProducts());
            }}
          >
            <span>Cart</span>
            <img className={classes.img} src={counter} alt="" />
            {carts[0]?.totalQuantity > 0 ? (
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
