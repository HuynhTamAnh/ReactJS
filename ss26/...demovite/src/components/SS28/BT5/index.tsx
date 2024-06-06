import { Component } from "react";
import Product1 from "./Product1";

export interface Products {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

type StateType = {
  product: Products;
};

export default class BT5 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      product: {
        id: 1,
        name: "ai đó",
        price: 1111,
        quantity: 10,
      },
    };
  }

  render() {
    return (
      <div>
        <Product1 product={this.state.product} />
      </div>
    );
  }
}
