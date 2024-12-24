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
            <Link className={cl.title} to="/product">
              {content.title}
            </Link>
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
        <Text className={cl.productDelete} tag="p">
          Delete
        </Text>
      </div>
    </div>
  );
};
