import { Component } from "react";
import { Products } from "./index";

type PropsType = {
  product: Products;
};

export default class Product1 extends Component<PropsType> {
  render() {
    let { id, name, price, quantity } = this.props.product;
    return (
      <div>
        <p>{id}</p>
        <p>{name}</p>
        <p>{price}</p>
        <p>{quantity}</p>
      </div>
    );
  }
}
