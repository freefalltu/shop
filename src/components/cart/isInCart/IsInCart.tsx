import { Button } from "UI/button";
import { Counter } from "UI/counter";
import { useAppSelector } from "hook/redux";
import { IProduct } from "models/Product";
import img from "img/icon-cart.svg";
import useCounterState from "hook/useCounterState";
import { useUpdateProduct } from "hook/useUpdateProduct";

interface IsInCart {
  content: IProduct;
  icon: boolean;
  isCart: boolean;
}

export const IsInCart: React.FC<IsInCart> = ({ content, icon, isCart }) => {
  const { carts } = useAppSelector((state) => state.userSlice);

  const itemInCart = carts?.products?.find(
    (item: { id: number }) => item.id === content.id,
  );

  const initialQuantity = itemInCart?.quantity || 1;

  const {
    quantityValue,
    onMinusClick,
    onPlusClick,
    onPlusClickInCart,
    addProduct,
  } = useCounterState(initialQuantity, content.id, content.stock);

  useUpdateProduct(quantityValue, initialQuantity, content.id);

  return (
    <div>
      {quantityValue !== 0 && itemInCart ? (
        <div>
          {isCart === false ? (
            <Counter
              itemInCart={itemInCart.quantity}
              children={quantityValue}
              size="medium"
              onMinusClick={onMinusClick}
              onPlusClick={onPlusClick}
              stock={content.stock}
            />
          ) : (
            <Counter
              itemInCart={itemInCart.quantity}
              children={quantityValue}
              size="medium"
              onMinusClick={onMinusClick}
              onPlusClick={onPlusClickInCart}
              stock={content.stock}
            />
          )}
        </div>
      ) : (
        <div>
          {icon ? (
            <Button
              type="myBtnIcon"
              view="icon"
              size="small"
              onClick={addProduct}
            >
              <img src={img} alt="" />
            </Button>
          ) : (
            <Button
              type="myBtnText"
              view="text"
              size="big"
              onClick={addProduct}
            >
              Add to cart
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
