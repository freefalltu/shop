import { Route, Routes } from "react-router-dom";
import Layout from "../hook/Layout";
import { Cartpage } from "src/pages/CartPage";
import { Catalogpage } from "src/pages/CatalogPage";
import { Notfoundpage } from "src/pages/NotfoundPage";
import { Productpage } from "src/pages/ProductPage";

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
