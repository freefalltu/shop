import { Text } from "src/components/UI/text";
import cl from "./CartPrice.module.scss";
import { ICartsInfo } from "src/models/CartsInfo";

interface CartPriceProps {
  cart: ICartsInfo;
}

export const CartPrice: React.FC<CartPriceProps> = ({ cart }) => {
  const totalProducts = cart.totalProducts;
  const totalPrice = cart.total;
  const discountedTotal = cart.discountedTotal;
  const discount = totalPrice - discountedTotal;
  const price = totalPrice - discount;

  return (
    <div className={cl.price}>
      <div className={cl.totalCount}>
        <Text
          className={cl.countText}
          tag="p"
          fontSize="l"
          fontWeight="regular"
        >
          Total count
        </Text>
        <Text
          className={cl.countCost}
          tag="p"
          fontSize="l"
          fontWeight="regular"
        >
          {totalProducts} items
        </Text>
      </div>
      <div className={cl.discount}>
        <Text
          className={cl.discountText}
          tag="p"
          fontSize="l"
          fontWeight="semiBold"
        >
          Price without discount
        </Text>
        <Text
          className={cl.discountCost}
          tag="p"
          fontSize="l"
          fontWeight="semiBold"
        >
          ${discount.toFixed(1)}
        </Text>
      </div>
      <hr className={cl.priceLine} />
      <div className={cl.totalPrice}>
        <Text
          className={cl.priceText}
          tag="p"
          fontSize="xl"
          fontWeight="semiBold"
        >
          Total price
        </Text>
        <Text
          className={cl.priceCost}
          tag="p"
          fontSize="xl"
          fontWeight="semiBold"
        >
          ${price.toFixed(1)}
        </Text>
      </div>
    </div>
  );
};
