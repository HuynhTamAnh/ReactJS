import { Component } from "react";
type StateType = {
  id: number;
  name: string;
  date: string;
  address: string;
};
export default class Exercise02 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      id: 1,
      name: "ồ",
      date: "11/33/33",
      address: "11 jgl",
    };
  }
  render() {
    return (
      <div>
        <ul>
          <li>id: {this.state.id}</li>
          <li>name: {this.state.name}</li>
          <li>date: {this.state.date}</li>
          <li>address: {this.state.address}</li>
        </ul>
      </div>
    );
  }
}
