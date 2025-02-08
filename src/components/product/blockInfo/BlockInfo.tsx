import { IProduct } from "models/Product";
import cl from "./BlockInfo.module.scss";
import { Title } from "UI/title";
import { StarRating } from "UI/rating";
import { IsInCart } from "components/cart/isInCart";
interface BlockInfoProps {
  content: IProduct;
}

export const BlockInfo: React.FC<BlockInfoProps> = ({ content }) => {
  const discount = +(
    ((content?.price ?? 0) * (content?.discountPercentage ?? 0)) /
    100
  ).toFixed(1);

  return (
    <div className={cl.productInfo}>
      <Title className={cl.header} tag="h1" fontSize="xxl" fontWeight="Bold">
        {content?.title}
      </Title>
      <div className={cl.rating}>
        <StarRating rating={content.rating} />
        <span>electronics, selfie accessories</span>
      </div>
      <hr className={cl.line} />
      <p className={cl.quantity}>In Stock - Only {content.stock} left!</p>
      <hr className={cl.line2} />
      <p className={cl.descr}>{content.description}</p>
      <p className={cl.warranty}>{content.warrantyInformation}</p>
      <p className={cl.ships}>{content.shippingInformation}</p>
      <div className={cl.counter}>
        <div className={cl.counts}>
          <div className={cl.countWrapper}>
            <p className={cl.newCount}>
              ${((content?.price ?? 1) - discount).toFixed(1)}
            </p>
            <span className={cl.oldCount}>${content.price}</span>
          </div>
          <hr className={cl.countLine} />
          <p className={cl.discount}>Your discount:</p>
          <p className={cl.discountPercent}>{content.discountPercentage}%</p>
        </div>
        <IsInCart content={content} icon={false} isCart={false} />
      </div>
    </div>
  );
};
