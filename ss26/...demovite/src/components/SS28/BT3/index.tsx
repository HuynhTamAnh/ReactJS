import React, { Component } from "react";
import Users from "./Users";

export interface User {
  id: number;
  name: string;
  address: string;
}
type StateType = {
  users: User;
};
export default class BT3 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: {
        id: 1,
        name: "ồ",
        //   date: "11/33/33",
        address: "11 jgl",
      },
    };
  }

  render() {
    return (
      <div>
        <Users l={this.state.users} />
      </div>
    );
  }
}
