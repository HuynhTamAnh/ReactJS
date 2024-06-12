// Tạo một class component React.

// Trong class component đó, khai báo một state.

// Hiển thị lên giao diện dựa trên giá trị của state.

// Sử dụng sự kiện để thay đổi giá trị của state đó

// Khi state thay đổi sẽ render lại giá trị mới của state ra ngoài giao diện
import React, { Component } from "react";
type StateType = {
  name: string;
};

export default class BT3 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "who",
    };
  }
  changeName = () => {
    this.setState({ name: "whó" });
  };
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button onClick={this.changeName}>click</button>
      </div>
    );
  }
}
