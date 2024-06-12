import React, { Component } from "react";
type StateType = {
  date: string;
};

export default class Exercise3 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      date: "",
    };
  }

  changeInp = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    this.setState({
      date: value,
    });
  };
  render() {
    return (
      <div>
        <p>Thời gian: {this.state.date}</p>
        <input onChange={this.changeInp} type="date" value={this.state.date} />
      </div>
    );
  }
}
