import React, { Component } from "react";

type StateType = {
  color: string;
  submitted: boolean;
};

export default class ColorForm extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      color: "#000000", // Màu khởi tạo
      submitted: false,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ color: e.target.value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  render() {
    const { color, submitted } = this.state;
    return (
      <div>
        <h2>Color: {submitted ? color : ""}</h2>
        <h3>Form</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Màu sắc</label>
            <input
              type="color"
              value={color}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
