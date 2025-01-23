import { Link } from "react-router-dom";
import cl from "./NavBar.module.scss";
import cn from "classnames";
import counter from "img/icon-cart.svg";
import { resetProducts } from "store/reducers/productSlice";
import { useAppDispatch, useAppSelector } from "hook/redux";
import { useState } from "react";

export const NavBar = () => {
  const dispatch = useAppDispatch();
  const { carts } = useAppSelector((state) => state.userSlice);
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className={cl.header}>
      <div className={cl.container}>
        <Link className={cl.logo} to="/">
          Goods4you
        </Link>
        <div
          className={menuActive ? cn(cl.menuIcon, cl.active) : cl.menuIcon}
          onClick={() => setMenuActive(!menuActive)}
        >
          <span />
        </div>
        <nav className={menuActive ? cn(cl.menuList, cl.active) : cl.nav}>
          <Link className={cl.btn} data-goto="/" to="/#Catalog">
            Catalog
          </Link>
          <Link className={cl.btn} to="/#FAQ">
            FAQ
          </Link>
          <Link
            className={cl.btnCart}
            to="cart"
            onClick={() => {
              dispatch(resetProducts());
            }}
          >
            <span>Cart</span>
            <img className={cl.img} src={counter} alt="" />
            {carts?.totalQuantity > 0 ? (
              <div className={cl.counter}>{carts.totalQuantity}</div>
            ) : (
              <div />
            )}
          </Link>
          <a className={cl.btn} href="#">
            Johnson Smith
          </a>
        </nav>
      </div>
    </nav>
  );
};
