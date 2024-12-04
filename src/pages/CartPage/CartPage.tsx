import { Cart } from "src/components/cart";
import useTitle from "src/hook/useTitle";

export const CartPage = () => {
  useTitle("My cart | Goods4you");
  return <Cart />;
};
