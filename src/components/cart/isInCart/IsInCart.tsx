import { Button } from "UI/button";
import { Counter } from "UI/counter";
import { useAppSelector } from "hook/redux";
import { IProduct } from "models/Product";
import img from "img/icon-cart.svg";
import useCounterState from "hook/useCounterState";

interface IsInCart {
  content: IProduct;
  icon: boolean;
}

export const IsInCart: React.FC<IsInCart> = ({ content, icon }) => {
  const { carts } = useAppSelector((state) => state.userSlice);

  const itemInCart = carts?.products?.find(
    (item: { id: number }) => item.id === content.id,
  );

  const initialQuantity =
    itemInCart?.quantity === undefined ? 0 : itemInCart.quantity;

  const { quantityValue, onMinusClick, onPlusClick } =
    useCounterState(initialQuantity);

  return (
    <div>
      {itemInCart ? (
        <Counter
          itemInCart={itemInCart.quantity}
          children={quantityValue}
          size="medium"
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
          }}
          onMinusClick={onMinusClick}
          onPlusClick={onPlusClick}
        />
      ) : (
        <div>
          {icon ? (
            <Button
              type="myBtnIcon"
              view="icon"
              size="small"
              onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
              }}
            >
              <img src={img} alt="" />
            </Button>
          ) : (
            <Button type="myBtnText" view="text" size="big">
              Add to cart
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
