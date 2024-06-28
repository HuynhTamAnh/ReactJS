import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import List from "../component/List";
import Add from "../component/Add";
import Edit from "../component/Edit";
import ProductDetail from "../component/ProductDetail";
const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="products" element={<Products />}>
        <Route index element={<List />} />
        <Route path="add" element={<Add />} />
        <Route path="edit" element={<Edit />} />
        <Route path="profile" element={<Profile />} />
        <Route path="details" element={<ProductDetail />} />
      </Route>
      {/* tham số trên đường dẫn: đường dẫn động */}
      <Route path="/product-details/10/hh/:id" element={<ProductDetail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
