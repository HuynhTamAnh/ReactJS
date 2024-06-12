// Tạo một component Notification

// Hiển thị thông báo "Component đã được mount!" lên màn hình console khi component được mount lần đầu tiên.
import React, { Component } from "react";
type StateType = {
  name: string;
};

export default class BT2 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "who",
    };
  }
  componentDidMount(): void {
    console.log("đã mount");
  }
  render() {
    return <div>{this.state.name}</div>;
  }
}
