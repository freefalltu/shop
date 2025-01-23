import { Cart } from "components/cart";
import useTitle from "hook/useTitle";

export const CartPage = () => {
  useTitle("My cart | Goods4you");
  return <Cart />;
};
