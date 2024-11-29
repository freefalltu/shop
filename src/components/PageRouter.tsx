import { Route, Routes } from "react-router-dom";
import Layout from "../hook/Layout";
import Catalogpage from "../pages/CatalogPage";
import Productpage from "../pages/ProductPage";
import Cartpage from "../pages/CartPage";
import Notfoundpage from "../pages/NotfoundPage";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Catalogpage />} />
        <Route path="product/" element={<Productpage />} />
        <Route path="cart" element={<Cartpage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Route>
    </Routes>
  );
};

export default PageRouter;
