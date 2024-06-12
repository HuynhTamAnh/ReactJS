import React, { Component } from "react";
import Children from "./ChildrenComp";
import ChildrenComp from "./ChildrenComp";
type StateType = {
  message: string;
};
export default class Abb extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      message: "kkk",
    };
  }
  updateState = () => {
    this.setState({
      message: "Hello, React!",
    });
  };
  render() {
    return (
      <div>
        <ChildrenComp message={this.state.message} />
        <button onClick={this.updateState}>Update Message</button>
      </div>
    );
  }
}
