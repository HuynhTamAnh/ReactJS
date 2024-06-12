import React, { Component } from "react";

export default class Excercise12 extends Component<{}, { isOpen: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  changeIsOpen = (status: boolean) => {
    this.setState({ isOpen: status });
  };
  render() {
    return (
      <div>
        <h1
          onMouseOver={() => this.changeIsOpen(false)}
          onMouseOut={() => this.changeIsOpen(true)}
        >
          Hover me
        </h1>
        <button
          onClick={() => this.changeIsOpen(true)}
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "2px 5px",
            borderRadius: "4px",
          }}
        >
          Show Nofitication
        </button>
        {this.state.isOpen && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              maxWidth: "200px",
              backgroundColor: "whitesmoke",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0px 0 5px 2px black",
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            <p>hiển thị thông báo</p>
            <span
              onClick={() => this.changeIsOpen(false)}
              style={{ color: "red" }}
            >
              X
            </span>
          </div>
        )}
      </div>
    );
  }
}
