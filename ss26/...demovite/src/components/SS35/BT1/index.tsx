// Tạo một state có giá trị khởi tạo là tên của bạn

// Truy cập state và hiển thị tên ra ngoài giao diện

import React, { useState } from "react";

export default function BT1() {
  const [name, setName] = useState<string>("hhh");
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}
