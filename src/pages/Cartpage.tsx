import { Cart } from "src/components/cart";
import useTitle from "../hook/useTitle";

const Cartpage = () => {
  useTitle("My cart | Goods4you");
  return <Cart />;
};

export default Cartpage;
