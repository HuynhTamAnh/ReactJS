import React from "react";
import "./css/b4.css";
class ColorBox extends React.Component {
  render() {
    // Hiển thị hộp màu với kiểu đã định nghĩa
    return (
      <div>
        <input type="text" id="blue" />
        <input type="text" id="green" />
      </div>
    );
  }
}

export default ColorBox;
