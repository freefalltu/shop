import { Button } from "src/components/UI/button";
import { Counter } from "src/components/UI/counter";
import { useAppSelector } from "src/hook/redux";
import { IProduct } from "src/models/Product";
import img from "src/img/icon-cart.svg";
import useCounterState from "src/hook/useCounterState";

interface IsInCart {
  content: IProduct;
  icon: boolean;
}

export const IsInCart: React.FC<IsInCart> = ({ content, icon }) => {
  const { carts } = useAppSelector((state) => state.userSlice);

  const itemInCart = carts?.products?.find((item) => item.id === content.id);

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
