import cl from "./CatalogItem.module.scss";
import img from "../../img/CatalogItem.svg";
// import Button from '../UI/button/Button'
// import imgCart from '../../img/icon-cart.svg';
import { Link } from "react-router-dom";
import { Counter } from "../UI/counter";

export const CatalogItem = () => {
  return (
    <div className={cl.item}>
      <Link className={cl.item__img} to="/product">
        <img src={img} alt="" />
        <div className={cl.img__bg}>
          <span>Show details</span>
        </div>
      </Link>
      <div className={cl.item__content}>
        <div className={cl.contentInfo}>
          <Link className={cl.content__title} to="/product">
            Essence Mascara Lash Princess
          </Link>
          <p className={cl.content__price}>$110</p>
        </div>
        <Counter children={0} size="medium" />
        {/* <Button className={cl.myBtn} view='icon' size='small'>
                    <img src={imgCart} className={cl.button__img} alt="" />
                </Button> */}
      </div>
    </div>
  );
};
