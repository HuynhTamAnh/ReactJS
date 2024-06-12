import React, { Component } from "react";

type StateType = {
  progress: number;
  submitted: boolean;
};

export default class ProgressForm extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      progress: 0,
      submitted: false,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ progress: parseInt(e.target.value) });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  render() {
    const { progress, submitted } = this.state;
    return (
      <div>
        <h2>Progress: {submitted ? progress + "%" : ""}</h2>
        <h3>Form</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Progress:</label>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={this.handleChange}
              required
            />
            <span>{progress}%</span>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
