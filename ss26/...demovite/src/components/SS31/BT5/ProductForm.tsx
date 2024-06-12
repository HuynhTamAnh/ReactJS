import React, { Component } from "react";

interface Product {
  productCode: string;
  productName: string;
  price: number;
  quantity: number;
}

interface State {
  product: Product;
}

class ProductForm extends Component<{}, State> {
  state: State = {
    product: {
      productCode: "",
      productName: "",
      price: 0,
      quantity: 0,
    },
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Submitted product:`, this.state.product);
  };

  handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      product: {
        ...prevState.product,
        [name]: name === "price" || name === "quantity" ? Number(value) : value,
      },
    }));
  };

  render() {
    const { product } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Thêm mới sản phẩm</h2>
        <div>
          <label>
            Mã sản phẩm:
            <input
              type="text"
              name="productCode"
              value={product.productCode}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Tên sản phẩm:
            <input
              type="text"
              name="productName"
              value={product.productName}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Giá:
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Số lượng:
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <button type="submit">Đăng ký</button>
      </form>
    );
  }
}

export default ProductForm;
