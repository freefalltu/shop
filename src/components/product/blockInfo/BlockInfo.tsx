import { Product } from "src/models/Product";
import cl from "./BlockInfo.module.scss";
import { Button } from "src/components/UI/button";
import { Title } from "src/components/UI/title";
import rating from "src/img/product/Rating.svg";
import { useAppSelector } from "src/hook/redux";
import { useState } from "react";
import { Counter } from "src/components/UI/counter";

interface BlockInfoProps {
  content: Product;
}

export const BlockInfo: React.FC<BlockInfoProps> = ({ content }) => {
  const discount = +(
    ((content?.price ?? 0) * (content?.discountPercentage ?? 0)) /
    100
  ).toFixed(1);

  const { user } = useAppSelector((state) => state.userSlice);

  const isInCart = user.carts[0]?.products?.find(
    (carts) => carts.id === content.id,
  );

  const initialQuantity = isInCart ? isInCart.quantity : 0;

  const [quantityValue, setQuantityValue] = useState(initialQuantity);

  return (
    <div className={cl.productInfo}>
      <Title className={cl.header} tag="h1" fontSize="xxl" fontWeight="Bold">
        {content?.title}
      </Title>
      <div className={cl.rating}>
        <img src={rating} alt="" />
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
        {isInCart ? (
          <Counter
            children={quantityValue}
            size="medium"
            onMinusClick={() => {
              if (quantityValue > 0) {
                setQuantityValue((value) => value - 1);
              }
            }}
            onPlusClick={() => {
              setQuantityValue((value) => value + 1);
            }}
          />
        ) : (
          <Button className={cl.myBtn} view="text" size="big">
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
};
