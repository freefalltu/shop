import Layout from "hook/Layout";
import { CartPage } from "pages/CartPage";
import { CatalogPage } from "pages/CatalogPage";
import { NotfoundPage } from "pages/NotfoundPage";
import { ProductPage } from "pages/ProductPage";
import { Navigate, Route, Routes } from "react-router-dom";

const PageRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CatalogPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="notFoundPage" element={<NotfoundPage />} />
        <Route path="*" element={<Navigate to="notFoundPage" replace />} />
      </Route>
    </Routes>
  );
};

export default PageRouter;
