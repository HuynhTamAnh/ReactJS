// Tạo một component đặt tên theo tùy ý. Ví dụ: AddElement

// Trong component trên, tạo một button và một state để lưu trữ một mảng các số nguyên dương

// Khi người dùng click vào sẽ thêm một số tự nguyên dương vào trong mảng và hiển thị ra ngoài giao diện

import React, { Component } from "react";
type StateType = {
  num: string;
  arr: string[];
};

export default class BT7 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      num: "",
      arr: [],
    };
  }

  addElement = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    this.setState({
      num: value,
    });
  };

  click = () => {
    this.setState({
      arr: [...this.state.arr, this.state.num],
      num: "",
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.arr.join(", ")}</p>
        <input
          type="number"
          value={this.state.num}
          onChange={this.addElement}
        />
        <button onClick={this.click}>click vào tôi để ra</button>
      </div>
    );
  }
}
