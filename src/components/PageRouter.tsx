import { Route, Routes } from "react-router-dom";
import Layout from "../hook/Layout";
import { CartPage } from "src/pages/CartPage";
import { CatalogPage } from "src/pages/CatalogPage";
import { NotfoundPage } from "src/pages/NotfoundPage";
import { ProductPage } from "src/pages/ProductPage";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CatalogPage />} />
        <Route path="product/" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<NotfoundPage />} />
      </Route>
    </Routes>
  );
};

export default PageRouter;
