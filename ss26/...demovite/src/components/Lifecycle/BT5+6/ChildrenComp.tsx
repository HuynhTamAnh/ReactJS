// Tạo một class component React.

// Trong class component đó, sử dụng một props để truyền dữ liệu vào component.

// Hiển thị giao diện dựa trên giá trị của props.

// Từ component App, thực hiện cập nhật giá trị của props bên trong component đó
import React, { Component } from "react";
type PropsType = {
  message: string;
};
export default class ChildrenComp extends Component<PropsType> {
  shouldComponentUpdate(
    nextProps: Readonly<PropsType>,
    nextState: Readonly<{}>,
    nextContext: any
  ): boolean {
    return false;
  }
  render() {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
