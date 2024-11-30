import { Counter } from "../UI/counter";
import cl from "./Cart.module.scss";
import photo from "src/img/cart/photo_cart.svg";

export const Cart = () => {
  return (
    <div className={cl.cart}>
      <h1 className={cl.cart__title}>My cart</h1>
      <div className={cl.cart__wrapper}>
        <div className={cl.products}>
          <div className={cl.product}>
            <img src={photo} alt="" />
            <div className={cl.product__container}>
              <p className={cl.container__title}>
                Essence Mascara Lash Princess
              </p>
              <p className={cl.container__price}>$110</p>
            </div>
            <Counter children={0} size="large" />
            <p className={cl.product__delete}>Delete</p>
          </div>
          <div className={cl.product}>
            <img src={photo} alt="" />
            <div className={cl.product__container}>
              <p className={cl.container__title}>
                Essence Mascara Lash Princess
              </p>
              <p className={cl.container__price}>$110</p>
            </div>
            <Counter children={0} size="large" />
            <p className={cl.product__delete}>Delete</p>
          </div>
          <div className={cl.product}>
            <img src={photo} alt="" />
            <div className={cl.product__container}>
              <p className={cl.container__title}>
                Essence Mascara Lash Princess
              </p>
              <p className={cl.container__price}>$110</p>
            </div>
            <Counter children={0} size="large" />
            <p className={cl.product__delete}>Delete</p>
          </div>
        </div>
        <div className={cl.price}>
          <div className={cl.total__count}>
            <p className={cl.count__text}>Total count</p>
            <p className={cl.count__cost}>3 items</p>
          </div>
          <div className={cl.discount}>
            <p className={cl.discount__text}>Price without discount</p>
            <p className={cl.discount__cost}>$700</p>
          </div>
          <hr className={cl.price__line} />
          <div className={cl.total__price}>
            <p className={cl.price__text}>Total price</p>
            <p className={cl.price__cost}>$590</p>
          </div>
        </div>
      </div>
    </div>
  );
};
