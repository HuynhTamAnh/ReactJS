import React, { Component } from "react";

type StateType = {
  date: string;
  submitted: boolean;
};

export default class DateForm extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      date: "",
      submitted: false,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ date: e.target.value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  render() {
    const { date, submitted } = this.state;
    return (
      <div>
        <h2>Ngày sinh: {submitted ? date : ""}</h2>
        <h3>Form</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Ngày sinh:</label>
            <input
              type="date"
              value={date}
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
