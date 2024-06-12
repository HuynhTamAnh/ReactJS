import React, { Component } from "react";
import "./Calculator.css";

export default class BT12 extends Component<
  {},
  { express: string[]; result: number }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      express: [],
      result: 0,
    };
  }

  handleClickButton = (e: string) => {
    this.setState({
      express: [...this.state.express, e],
    });
  };
  calExpress = () => {
    let result = eval(this.state.express.join(""));
    this.setState({
      ...this.state,
      result: result,
      express: [],
    });
  };

  render() {
    return (
      <div className="calculator">
        <div>
          <p className="display">{this.state.express.join("")}</p>
          <span className="display">{this.state.result}</span>
        </div>

        <div className="number">
          <div className="row">
            <button onClick={() => this.handleClickButton("7")}>7</button>
            <button onClick={() => this.handleClickButton("8")}>8</button>
            <button onClick={() => this.handleClickButton("9")}>9</button>
            <button
              className="operator"
              onClick={() => this.handleClickButton("+")}
            >
              +
            </button>
          </div>
          <div className="row">
            <button onClick={() => this.handleClickButton("4")}>4</button>
            <button onClick={() => this.handleClickButton("5")}>5</button>
            <button onClick={() => this.handleClickButton("6")}>6</button>
            <button
              className="operator"
              onClick={() => this.handleClickButton("-")}
            >
              -
            </button>
          </div>
          <div className="row">
            <button onClick={() => this.handleClickButton("1")}>1</button>
            <button onClick={() => this.handleClickButton("2")}>2</button>
            <button onClick={() => this.handleClickButton("3")}>3</button>
            <button className="operator equals" onClick={this.calExpress}>
              =
            </button>
          </div>
          <div className="row">
            <button className="clear">Xoá</button>
            <button>0</button>
            <button className="hidden"></button>
          </div>
        </div>
      </div>
    );
  }
}
