import { Text } from "src/components/UI/text";
import cl from "./CartPrice.module.scss";

export const CartPrice = () => {
  return (
    <div className={cl.price}>
      <div className={cl.total__count}>
        <Text
          className={cl.count__text}
          tag="p"
          fontSize="l"
          fontWeight="regular"
        >
          Total count
        </Text>
        <Text
          className={cl.count__cost}
          tag="p"
          fontSize="l"
          fontWeight="regular"
        >
          3 items
        </Text>
      </div>
      <div className={cl.discount}>
        <Text
          className={cl.discount__text}
          tag="p"
          fontSize="l"
          fontWeight="semiBold"
        >
          Price without discount
        </Text>
        <Text
          className={cl.discount__cost}
          tag="p"
          fontSize="l"
          fontWeight="semiBold"
        >
          $700
        </Text>
      </div>
      <hr className={cl.price__line} />
      <div className={cl.total__price}>
        <Text
          className={cl.price__text}
          tag="p"
          fontSize="xl"
          fontWeight="semiBold"
        >
          Total price
        </Text>
        <Text
          className={cl.price__cost}
          tag="p"
          fontSize="xl"
          fontWeight="semiBold"
        >
          $590
        </Text>
      </div>
    </div>
  );
};
