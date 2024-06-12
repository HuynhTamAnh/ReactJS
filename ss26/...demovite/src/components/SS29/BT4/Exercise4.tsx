// Tạo một component đặt tên theo tùy ý. Ví dụ: Exercise04

// Trong component, tạo một select - option gồm các giá trị liên quan đến các tỉnh và thành phố ở Việt Nam

// Lắng nghe sự kiện và lấy giá trị bên trong select khi người dùng thay đổi

import React, { Component } from "react";
type StateType = {
  select: string;
};
export default class Exercise4 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      select: "",
    };
  }

  render1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value;
    this.setState({
      select: value,
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.select}</p>
        <select name="select" value={this.state.select} onChange={this.render1}>
          <option value="">Tỉnh/Thành Phố</option>
          <option value="HCM">HCM</option>
          <option value="HN">HN</option>
        </select>
      </div>
    );
  }
}
