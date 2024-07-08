import { Route, Routes } from "react-router-dom";
import ProductAdd from "../layout/ProductAdd";
import ProductEdit from "../layout/ProductEdit";
import ProductList from "../layout/ProductList";
import Product from "../pages/admin/Product";
import HomePage from "../pages/user/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />

      <Route path="/admin/products" element={<Product />}>
        <Route index element={<ProductList />} />
        <Route path="add" element={<ProductAdd />} />
        <Route path="edit" element={<ProductEdit />} />
      </Route>
    </Routes>
  );
};

export default Router;
