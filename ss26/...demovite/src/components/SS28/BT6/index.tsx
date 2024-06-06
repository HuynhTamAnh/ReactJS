import React, { Component } from "react";
import User from "./User";

export interface Users {
  id: number;
  name: string;
  address: string;
  email: string;
}
type StateType = {
  user: Users;
};
export default class index extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      user: {
        id: 1,
        name: "who",
        address: "ai 134",
        email: "g224gg",
      },
    };
  }
  render() {
    return (
      <div>
        <User user={this.state.user} />
      </div>
    );
  }
}
