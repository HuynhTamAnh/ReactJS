import { Component } from "react";
type PropType = {
  id: number;
  name: string;
  age: number;
  print: () => void;
  callBack: (a: string) => void;
};
type StateType = {
  name: string;
  date: string;
  count: number;
};
export default class Children extends Component<PropType, StateType> {
  constructor(props: PropType) {
    super(props);
    //khai báo thêm các thuộc tính khác
    this.state = {
      name: "",
      date: "",
      count: 0,
    };
  }
  render() {
    let a = 10;
    let keyword = "ai đó hả";
    console.log(a);
    return (
      <div>
        {/* hiển thị thông tin */}
        <ul>
          <li>id: {this.props.id}</li>
          <li>tên: {this.props.name}</li>
          <li>tuổi: {this.props.age}</li>
          <li>kq: {this.state.name}</li>
          <li>kq: {this.state.count}</li>
        </ul>
        <button onClick={() => this.props.callBack(keyword)}>nhấp</button>
        <button
          onClick={() => this.setState({ ...this.state, name: "tôi là ai" })}
        >
          nhả
        </button>
        <button
          onClick={() =>
            this.setState({ ...this.state, count: this.state.count + 1 })
          }
        >
          tăng
        </button>
      </div>
    );
  }
}
