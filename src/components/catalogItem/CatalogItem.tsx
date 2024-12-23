import cl from "./CatalogItem.module.scss";
import { Button } from "../UI/button";
import imgCart from "src/img/icon-cart.svg";
import { Counter } from "../UI/counter";
import { IProduct } from "src/models/Product";
import { Title } from "../UI/title";
import { Text } from "../UI/text";
import { useAppSelector } from "src/hook/redux";
import { useState } from "react";

interface CatalogItemProps {
  content: IProduct;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({ content }) => {
  const discount = +(
    (content.price * content.discountPercentage) /
    100
  ).toFixed(1);

  const { carts } = useAppSelector((state) => state.userSlice);

  const isInCart = carts[0]?.products?.find((item) => item.id === content.id);

  const initialQuantity =
    isInCart?.quantity === undefined ? 0 : isInCart.quantity;

  const [quantityValue, setQuantityValue] = useState(initialQuantity);

  return (
    <div className={cl.item}>
      <div className={cl.image}>
        <img src={content.thumbnail} alt="" />
        <div className={cl.background}>
          <span>Show details</span>
        </div>
      </div>
      <div className={cl.content}>
        <div className={cl.info}>
          <Title className={cl.title} tag="h2" fontSize="l" fontWeight="Bold">
            {content.title}
          </Title>
          <Text
            className={cl.price}
            tag="span"
            fontSize="m"
            fontWeight="regular"
          >
            ${(content.price - discount).toFixed(1)}
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
