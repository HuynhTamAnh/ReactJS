// Tạo một component đặt tên theo tùy ý. Ví dụ: Exercise05

// Trong component trên, tạo một button và một state để lưu trữ nội dung của button

// Nếu state có giá trị là true thì nội dung của button là “Hiển”, nếu state có giá trị là false thì nội dung của button là “Ẩn”

import { Component } from "react";
type StateType = {
  status: boolean;
};
export default class Exercise5 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      status: true,
    };
  }
  changeState = () => {
    this.setState({ status: !this.state.status });
  };

  render() {
    return (
      <div>
        <button onClick={this.changeState}>
          {this.state.status ? "HIỆN" : "ẨN"}
        </button>
      </div>
    );
  }
}
