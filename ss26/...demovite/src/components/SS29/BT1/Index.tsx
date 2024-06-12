import React, { Component } from "react";

export default class Index extends Component {
  handleClick = () => {
    console.log("clicked");
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
