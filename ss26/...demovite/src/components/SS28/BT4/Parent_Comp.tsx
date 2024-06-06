import { Component } from "react";
import ConRuot from "./ConRuot";

export interface Self {
  name: string;
}

type StateType = {
  self: Self;
};
export default class BT4 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      self: {
        name: "aaa",
      },
    };
  }
  render() {
    return (
      <div>
        <ConRuot self={this.state.self} />
      </div>
    );
  }
}
