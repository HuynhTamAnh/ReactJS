import React, { Component } from "react";
type StateType = {
  name: string;
};
export default class BT1 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "ai đó",
    };
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
      </div>
    );
  }
}
