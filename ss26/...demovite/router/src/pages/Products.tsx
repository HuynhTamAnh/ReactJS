import React from "react";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Trang sản phẩm</h1>
      <Outlet />
    </div>
  );
};

export default Products;
