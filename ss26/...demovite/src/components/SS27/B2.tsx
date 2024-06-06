import React, { Component } from "react";

export default class B2 extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    const a = 10;
    const b = 5;

    return (
      <div>
        <h1>Kết quả phép tính</h1>
        <p>
          {a}+{b}={plus(a, b)}
        </p>
        <p>
          {a}-{b}={minus(a, b)}
        </p>
        <p>
          {a}*{b}={multi(a, b)}
        </p>
        <p>
          {a}/{b}={div(a, b)}
        </p>
      </div>
    );
  }
}
function plus(a: number, b: number) {
  return a + b;
}
function minus(a: number, b: number) {
  return a - b;
}
function multi(a: number, b: number) {
  return a * b;
}
function div(a: number, b: number) {
  return a / b;
}
