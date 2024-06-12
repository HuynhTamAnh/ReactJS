import React, { Component } from "react";

type StateType = {
  email: string;
  submitted: boolean;
};

export default class EmailForm extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      submitted: false,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  render() {
    const { email, submitted } = this.state;
    return (
      <div>
        <h2>Form</h2>
        {!submitted ? (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={this.handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <p>{`{email: '${email}'}`}</p>
        )}
      </div>
    );
  }
}
