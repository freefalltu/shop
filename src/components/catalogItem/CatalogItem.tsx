import cl from "./CatalogItem.module.scss";
import { Button } from "../UI/button";
import imgCart from "src/img/icon-cart.svg";
import { Counter } from "../UI/counter";
import { Product } from "src/models/Product";
import { Title } from "../UI/title";
import { Text } from "../UI/text";
import { useAppSelector } from "src/hook/redux";

interface CatalogItemProps {
  product: Product;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const discount = +(
    (product.price * product.discountPercentage) /
    100
  ).toFixed(1);

  const { products } = useAppSelector((state) => state.userSlice.user.carts[0]);

  const isInCart = products.find(
    (carts: { id: number }) => carts.id === product.id,
  );

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
            children={isInCart?.quantity}
            size="medium"
            onClick={(event) => event.preventDefault()}
          />
        ) : (
          <Button
            className={cl.myBtn}
            view="icon"
            size="small"
            onClick={(event) => event.preventDefault()}
          >
            <img src={imgCart} className={cl.button__img} alt="" />
          </Button>
        )}
      </div>
    </div>
  );
};
