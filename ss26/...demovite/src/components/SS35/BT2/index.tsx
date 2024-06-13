// Tạo một state có giá trị khởi tạo là một đối tượng product (gồm các trường: id, name, price, quantity)

// Truy cập state và hiển thị tên ra ngoài giao diện
import React, { useState } from "react";
type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};
export default function BT2() {
  const [product, setProduct] = useState<Product>({
    id: 1,
    name: "kk",
    price: 11,
    quantity: 55,
  });
  return (
    <div>
      <h2>Thông tin sản phẩm</h2>
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
    </div>
  );
}
