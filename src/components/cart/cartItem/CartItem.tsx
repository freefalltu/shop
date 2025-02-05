import { Title } from "UI/title";
import { Text } from "UI/text";
import cl from "./CartItem.module.scss";
import { Link } from "react-router-dom";
import { IProduct } from "models/Product";
import { IsInCart } from "../isInCart";
import { useAppSelector } from "hook/redux";
import { CartItemDisable } from "../cartItemDisable";
import useCounterState from "hook/useCounterState";
import { useUpdateProduct } from "hook/useUpdateProduct";

interface CartItemProps {
  content: IProduct;
}

export const CartItem: React.FC<CartItemProps> = ({ content }) => {
  const discount = +(
    (content.price * content.discountPercentage) /
    100
  ).toFixed(1);
  const { carts } = useAppSelector((state) => state.userSlice);
  const itemInCart = carts?.products?.find(
    (item: { id: number }) => item.id === content.id,
  );

  const initialQuantity = itemInCart?.quantity || 0;

  const { quantityValue, handleDelete } = useCounterState(
    initialQuantity,
    content.id,
    content.stock,
  );

  useUpdateProduct(quantityValue, initialQuantity, content.id);

  return (
    <Link className={cl.title} to={`/product/${content.id}`}>
      {quantityValue < 1 ? (
        <CartItemDisable content={content} />
      ) : (
        <div className={cl.product}>
          <div className={cl.itemContainer}>
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
            <IsInCart content={content} icon={true} />
            <span className={cl.productDelete} onClick={handleDelete}>
              Delete
            </span>
          </div>
        </div>
      )}
    </Link>
  );
};
