import { Product } from "src/components/product";
import useTitle from "src/hook/useTitle";

export const ProductPage = () => {
  useTitle("Essence Mascara Lash Princess | Goods4you");
  return <Product />;
};
