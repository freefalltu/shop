import Product from "../components/product/Product";
import useTitle from "../hook/useTitle";

const Productpage = () => {
  useTitle("Essence Mascara Lash Princess | Goods4you");
  return <Product />;
};

export default Productpage;
