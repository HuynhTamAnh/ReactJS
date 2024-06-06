import React, { Component } from "react";
import { Users } from "./index";
type PropsType = {
  user: Users;
};

export default class User extends Component<PropsType> {
  render() {
    let { id, name, address, email } = this.props.user;
    return (
      <div>
        <p>{id}</p>
        <p>{name}</p>
        <p>{address}</p>
        <p>{email}</p>
      </div>
    );
  }
}
