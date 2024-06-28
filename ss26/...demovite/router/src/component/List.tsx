import React from "react";
// import { IoNavigate } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  return (
    <div>
      list{" "}
      <button
        onClick={() => {
          navigate("/product-details/10/hh");
        }}
      >
        Chuyển sang trang detail
      </button>
      ;{" "}
    </div>
  );
};

export default List;
