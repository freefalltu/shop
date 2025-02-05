import { Title } from "UI/title";
import { Text } from "UI/text";
import cl from "./CartItem.module.scss";
import { Link } from "react-router-dom";
import { IProduct } from "models/Product";
import { IsInCart } from "../isInCart";
import { useAppDispatch, useAppSelector } from "hook/redux";
import { fetchUpdateCart } from "store/reducers/actionCreators";
import { useState } from "react";
import { CartItemDisable } from "../cartItemDisable";

interface CartItemProps {
  content: IProduct;
}

export const CartItem: React.FC<CartItemProps> = ({ content }) => {
  const discount = +(
    (content.price * content.discountPercentage) /
    100
  ).toFixed(1);
  const dispatch = useAppDispatch();
  const { carts } = useAppSelector((state) => state.userSlice);

  const [disabled, setDisabled] = useState(true);
  const itemInCartDisabled: boolean = disabled;

  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDisabled(false);
    event.stopPropagation();
    event.preventDefault();
    dispatch(
      fetchUpdateCart({
        id: carts.id,
        products: carts.products.filter((p) => p.id !== content.id),
        merge: false,
      }),
    );
  };

  return (
    <Link className={cl.title} to={`/product/${content.id}`}>
      {itemInCartDisabled === false ? (
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
