import cl from "./CatalogItem.module.scss";
import img from "../../img/CatalogItem.svg";
// import MyButton from '../UI/button/MyButton'
// import imgCart from '../../img/icon-cart.svg'
import Counter from "../UI/counter/Counter";
import { Link } from "react-router-dom";

const CatalogItem = () => {
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
        <Counter size="medium" />
        {/* <MyButton className={cl.myBtn} view='icon' size='small'>
                    <img src={imgCart} className={cl.button__img} alt="" />
                </MyButton> */}
      </div>
    </div>
  );
};

export default CatalogItem;
