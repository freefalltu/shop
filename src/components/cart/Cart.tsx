import { Counter } from "../UI/counter";
import { Text } from "../UI/text";
import { Title } from "../UI/title";
import cl from "./Cart.module.scss";
import photo from "src/img/cart/photo_cart.svg";
import { CartPrice } from "./cartPrice";
import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <div className={cl.cart}>
      <Title
        className={cl.cart__title}
        tag="h1"
        fontSize="xxl"
        fontWeight="Bold"
      >
        My cart
      </Title>
      <div className={cl.cart__wrapper}>
        <div className={cl.products}>
          <div className={cl.product}>
            <img src={photo} alt="" />
            <div className={cl.product__container}>
              <Title
                className={cl.container__title}
                tag="h2"
                fontSize="m"
                fontWeight="Bold"
              >
                <Link className={cl.title} to="/product">
                  Essence Mascara Lash Princess
                </Link>
              </Title>
              <Text
                className={cl.container__price}
                tag="p"
                fontSize="m"
                fontWeight="regular"
              >
                $110
              </Text>
            </div>
            <Counter children={0} size="large" />
            <Text className={cl.product__delete} tag="p">
              Delete
            </Text>
          </div>
          <div className={cl.product}>
            <img src={photo} alt="" />
            <div className={cl.product__container}>
              <Title
                className={cl.container__title}
                tag="h2"
                fontSize="m"
                fontWeight="Bold"
              >
                <Link className={cl.title} to="/product">
                  Essence Mascara Lash Princess
                </Link>
              </Title>
              <Text
                className={cl.container__price}
                tag="p"
                fontSize="m"
                fontWeight="regular"
              >
                $110
              </Text>
            </div>
            <Counter children={0} size="large" />
            <Text className={cl.product__delete} tag="p">
              Delete
            </Text>
          </div>
          <div className={cl.product}>
            <img src={photo} alt="" />
            <div className={cl.product__container}>
              <Title
                className={cl.container__title}
                tag="h2"
                fontSize="m"
                fontWeight="Bold"
              >
                <Link className={cl.title} to="/product">
                  Essence Mascara Lash Princess
                </Link>
              </Title>
              <Text
                className={cl.container__price}
                tag="p"
                fontSize="m"
                fontWeight="regular"
              >
                $110
              </Text>
            </div>
            <Counter children={0} size="large" />
            <Text className={cl.product__delete} tag="p">
              Delete
            </Text>
          </div>
        </div>
        <CartPrice />
      </div>
    </div>
  );
};
