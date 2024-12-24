import { useState } from "react";
import { Button } from "src/components/UI/button";
import { Counter } from "src/components/UI/counter";
import { useAppSelector } from "src/hook/redux";
import cl from "./IsInCart.module.scss";
import { IProduct } from "src/models/Product";
import img from "src/img/icon-cart.svg";

interface IsInCart {
  content: IProduct;
  icon: boolean;
}

export const IsInCart: React.FC<IsInCart> = ({ content, icon }) => {
  const { carts } = useAppSelector((state) => state.userSlice);

  const itemInCart = carts[0]?.products?.find((item) => item.id === content.id);

  const initialQuantity =
    itemInCart?.quantity === undefined ? 0 : itemInCart.quantity;

  const [quantityValue, setQuantityValue] = useState(initialQuantity);

  return (
    <div>
      {itemInCart ? (
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
        <div>
          {icon ? (
            <Button
              className={cl.myBtnIcon}
              view="icon"
              size="small"
              onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
              }}
            >
              <img src={img} className={cl.button__img} alt="" />
            </Button>
          ) : (
            <Button className={cl.myBtnText} view="text" size="big">
              Add to cart
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
