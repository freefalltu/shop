import cl from "./CatalogItem.module.scss";
import { IProduct } from "src/models/Product";
import { Title } from "../UI/title";
import { Text } from "../UI/text";
import { IsInCart } from "../cart/isInCart";

interface CatalogItemProps {
  content: IProduct;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({ content }) => {
  const discount = +(
    (content.price * content.discountPercentage) /
    100
  ).toFixed(1);

  return (
    <div className={cl.item}>
      <div className={cl.image}>
        <img src={content.thumbnail} alt="" />
        <div className={cl.background}>
          <span>Show details</span>
        </div>
      </div>
      <div className={cl.content}>
        <div className={cl.info}>
          <Title className={cl.title} tag="h2" fontSize="l" fontWeight="Bold">
            {content.title}
          </Title>
          <Text
            className={cl.price}
            tag="span"
            fontSize="m"
            fontWeight="regular"
          >
            ${(content.price - discount).toFixed(1)}
          </Text>
        </div>
        <IsInCart content={content} icon={true} />
      </div>
    </div>
  );
};
