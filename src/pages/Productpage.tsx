import { Product } from "src/components/product";
import useTitle from "../hook/useTitle";

export const Productpage = () => {
  useTitle("Essence Mascara Lash Princess | Goods4you");
  return <Product />;
};
