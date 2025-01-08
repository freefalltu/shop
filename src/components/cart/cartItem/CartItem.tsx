import { Title } from "src/components/UI/title";
import { Text } from "src/components/UI/text";
import cl from "./CartItem.module.scss";
import { Link } from "react-router-dom";
import { IProduct } from "src/models/Product";
import { IsInCart } from "../isInCart";

interface CartItemProps {
  content: IProduct;
}

export const CartItem: React.FC<CartItemProps> = ({ content }) => {
  const discount = +(
    (content.price * content.discountPercentage) /
    100
  ).toFixed(1);

  return (
    <Link className={cl.title} to={`/product/${content.id}`}>
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
          <Text
            className={cl.productDelete}
            tag="p"
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
            }}
          >
            Delete
          </Text>
        </div>
      </div>
    </Link>
  );
};
