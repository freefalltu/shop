import cl from "./Product.module.scss";
import mainPhoto from "../../img/product/main_photo_product.svg";
import photo from "../../img/product/small_photo_product.svg";
import rating from "../../img/product/Rating.svg";
import MyButton from "../UI/button/MyButton";

const Product = () => {
  return (
    <div className={cl.product}>
      <div className={cl.product__img}>
        <div className={cl.img__main}>
          <img src={mainPhoto} alt="" />
        </div>
        <div className={cl.img__photo}>
          <img src={photo} className={cl.photo__small} alt="" />
          <img src={photo} className={cl.photo__small} alt="" />
          <img src={photo} className={cl.photo__small} alt="" />
          <img src={photo} className={cl.photo__small} alt="" />
          <img src={photo} className={cl.photo__small} alt="" />
          <img src={photo} className={cl.photo__small} alt="" />
        </div>
      </div>
      <div className={cl.product__info}>
        <h1 className={cl.info__header}>Essence Mascara Lash Princess</h1>
        <div className={cl.info__rating}>
          <img src={rating} alt="" />
          <span>electronics, selfie accessories</span>
        </div>
        <hr className={cl.info__line} />
        <p className={cl.info__quantity}>In Stock - Only 5 left!</p>
        <hr className={cl.info__line2} />
        <p className={cl.info__descr}>
          The Essence Mascara Lash Princess is a popular mascara known for its
          volumizing and lengthening effects. Achieve dramatic lashes with this
          long-lasting and cruelty-free formula.
        </p>
        <p className={cl.info__warranty}>1 month warranty</p>
        <p className={cl.info__ships}>Ships in 1 month</p>
        <div className={cl.info__counter}>
          <div className={cl.counter__counts}>
            <div className={cl.count__wrapper}>
              <p className={cl.new__count}>$7.17</p>
              <span className={cl.old__count}>$9.99</span>
            </div>
            <hr className={cl.count__line} />
            <p className={cl.discount}>Your discount:</p>
            <p className={cl.discount__percent}>14.5%</p>
          </div>
          <MyButton className={cl.myBtn} view="text" size="big">
            Add to cart
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default Product;
