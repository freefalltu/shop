import cl from "./CatalogItem.module.scss";
import { Button } from "../UI/button";
import imgCart from "src/img/icon-cart.svg";
import { Counter } from "../UI/counter";
import { Product } from "src/models/Product";
import { Title } from "../UI/title";
import { Text } from "../UI/text";
import { useAppSelector } from "src/hook/redux";
import { useState } from "react";

interface CatalogItemProps {
  product: Product;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const discount = +(
    (product.price * product.discountPercentage) /
    100
  ).toFixed(1);

  const { user } = useAppSelector((state) => state.userSlice);

  const checkCart = user.carts[0]?.products;

  const isInCart = checkCart?.find((carts) => carts.id === product.id);

  const initialQuantity = isInCart ? isInCart.quantity : 0;

  const [quantityValue, setQuantityValue] = useState(initialQuantity);

  return (
    <div className={cl.item}>
      <div className={cl.item__img}>
        <img src={product.thumbnail} alt="" />
        <div className={cl.img__bg}>
          <span>Show details</span>
        </div>
      </div>
      <div className={cl.item__content}>
        <div className={cl.contentInfo}>
          <Title
            className={cl.content__title}
            tag="h2"
            fontSize="l"
            fontWeight="Bold"
          >
            {product.title}
          </Title>
          <Text
            className={cl.content__price}
            tag="span"
            fontSize="m"
            fontWeight="regular"
          >
            ${(product.price - discount).toFixed(1)}
          </Text>
        </div>
        {isInCart ? (
          <Counter
            children={quantityValue}
            size="medium"
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
            }}
            onMinusClick={() => {
              if (quantityValue > 0) {
                setQuantityValue((value) => value - 1);
              }
            }}
            onPlusClick={() => {
              setQuantityValue((value) => value + 1);
            }}
          />
        ) : (
          <Button
            className={cl.myBtn}
            view="icon"
            size="small"
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
            }}
          >
            <img src={imgCart} className={cl.button__img} alt="" />
          </Button>
        )}
      </div>
    </div>
  );
};
