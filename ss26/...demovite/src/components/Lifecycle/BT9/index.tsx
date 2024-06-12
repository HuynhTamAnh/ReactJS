// Tạo một class component có tên là Clock.

// Sử dụng lifecycle method componentDidMount để thiết lập một interval để cập nhật thời gian mỗi giây.

// Sử dụng lifecycle method componentWillUnmount để xóa interval khi component bị unmount.

// Hiển thị thời gian hiện tại trên giao diện.
import React, { Component } from "react";
type StateType = {
  //   date: Date;
  time: number;
};
let intervalID: number = -1;
export default class BT9 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    // Khai báo state
    this.state = {
      time: 0,
      //   date: new Date(),
    };
  }

  //   componentDidMount(): void {
  //     setTimeout(() => {
  //       this.setState({ ...this.state, date: new Date() });
  //     }, 1000);
  //   }

  //   componentDidUpdate(
  //     prevProps: Readonly<{}>,
  //     prevState: Readonly<StateType>,
  //     snapshot?: any
  //   ): void {
  //     setTimeout(() => {
  //       this.setState({ ...this.state, date: new Date() });
  //     }, 1000);
  //   }

  //   componentDidMount(): void {
  //     let id = setInterval(() => {
  //       this.setState({ ...this.state, date: new Date() });
  //     }, 1000);
  //     // clearInterval(id);
  //   }
  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<StateType>,
    snapshot?: any
  ): void {
    if (intervalID != -1 && this.state.time == 0) {
      clearInterval(intervalID);
    }
    let audio = new Audio(""); //copy relatvie path
    if (audio) {
      audio.play();
    }
  }
  changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, time: parseInt(e.target.value) });
  };
  start = () => {
    clearInterval(intervalID);
    if (this.state.time > 0) {
      intervalID = setInterval(() => {
        this.setState({ ...this.state, time: this.state.time - 1 });
      }, 1000);
    } else {
      alert("Thời gian lớn hơn 0s");
    }
  };
  pause = () => {
    clearInterval(intervalID);
  };
  reset = () => {
    clearInterval(intervalID);
    this.setState({
      ...this.state,
      time: 0,
    });
  };

  render() {
    return (
      <div>
        {/* <h1>Giờ hiện tại: {this.state.date.toLocaleTimeString()}</h1> */}
        <input
          type="number"
          onChange={this.changeInput}
          placeholder="Nhập thời gian vào đê"
        />
        <p>Thời gian đếm ngược: {this.state.time} s</p>

        <button onClick={this.start}>Start</button>
        <button onClick={this.pause}>Pause</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
