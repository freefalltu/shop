import { Button } from "UI/button";
import { Title } from "UI/title";
import { Text } from "UI/text";
import img from "img/icon-cart.svg";
import cl from "../cartItem/CartItem.module.scss";
import { IProduct } from "models/Product";
import useCounterState from "hook/useCounterState";
import { useAppSelector } from "hook/redux";

interface CartItemDisableProps {
  content: IProduct;
}

export const CartItemDisable: React.FC<CartItemDisableProps> = ({
  content,
}) => {
  const discount = +(
    (content.price * content.discountPercentage) /
    100
  ).toFixed(1);
  const { carts } = useAppSelector((state) => state.userSlice);

  const itemInCart = carts?.products?.find(
    (item: { id: number }) => item.id === content.id,
  );

  const initialQuantity = itemInCart?.quantity || 0;

  const { addProduct } = useCounterState(
    initialQuantity,
    content.id,
    content.stock,
  );
  return (
    <div className={cl.product}>
      <div className={cl.itemContainerDisabled}>
        <img src={content.thumbnail} alt="" className={cl.image} />
        <div className={cl.productContainer}>
          <Title
            className={cl.containerTitle}
            tag="h2"
            fontSize="m"
            fontWeight="Bold"
          >
            {content.title}
          </Title>
          <Text
            className={cl.containerPrice}
            tag="p"
            fontSize="m"
            fontWeight="regular"
          >
            ${(content.price - discount).toFixed(1)}
          </Text>
        </div>
      </div>
      <div className={cl.buttonContainer}>
        <Button type="myBtnIcon" view="icon" size="small" onClick={addProduct}>
          <img src={img} alt="" />
        </Button>
      </div>
    </div>
  );
};
