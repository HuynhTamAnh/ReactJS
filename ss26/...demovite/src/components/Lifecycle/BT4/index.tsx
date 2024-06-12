// Tạo một class component React.

// Trong class component đó, khai báo một state.

// Hiển thị lên giao diện dựa trên giá trị của state.

// Sử dụng sự kiện để thay đổi giá trị của state đó

// Khi state thay đổi sẽ ngăn chặn việc render lại giá trị mới của state ra ngoài giao diện
import React, { Component } from "react";
type StateType = {
  name: string;
};

export default class BT4 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "who",
    };
  }
  changeName = () => {
    this.setState({ name: "who" });
    console.log("đã đổi");
  };
  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<StateType>,
    nextContext: any
  ): boolean {
    return nextState.name != this.state.name;
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button onClick={this.changeName}>click</button>
      </div>
    );
  }
}
