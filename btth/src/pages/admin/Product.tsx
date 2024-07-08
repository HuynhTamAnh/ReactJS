import { Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1>rất chi là products trong phần admin</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Product;
