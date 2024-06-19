import React, { useState } from "react";
import "./index.css";
const BT1 = () => {
  const [status, setStatus] = useState<string>("");
  const changeStatus = (e: string) => {
    setStatus(e);
  };
  return (
    <div>
      <p
        onClick={() => changeStatus("Trang chủ")}
        className={status === "Trang chủ" ? "active" : ""}
      >
        Trang chủ
      </p>
      <p
        onClick={() => changeStatus("Sản phẩm")}
        className={status === "Sản phẩm" ? "active" : ""}
      >
        Sản phẩm
      </p>
      <p
        onClick={() => changeStatus("Giới thiệu")}
        className={status === "Giới thiệu" ? "active" : ""}
      >
        Giới thiệu
      </p>
      <p
        onClick={() => changeStatus("Liên hệ")}
        className={status === "Liên hệ" ? "active" : ""}
      >
        Liên hệ
      </p>
    </div>
  );
};

export default BT1;
