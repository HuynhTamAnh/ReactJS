import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  //   let id = useParams().id;
  // let id=useParams().id;
  const { id } = useParams();
  return <div>product detail:{id}</div>;
};

export default ProductDetail;
