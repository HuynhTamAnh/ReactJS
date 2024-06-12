import React, { Component } from "react";

type StateType = {
  value: string;
};

export default class Exercise2 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>nội dung ở đây: {this.state.value}</h1>
        <input
          type="text"
          onChange={this.handleChange}
          style={{ width: "200px", padding: "5px" }}
        />
      </div>
    );
  }
}
