import { Component } from "react";
import { User } from ".";

type PropsType = {
  l: User;
};
export default class Users extends Component<PropsType> {
  render() {
    let { id, name, address } = this.props.l;
    return (
      <div>
        <p>{id}</p>
        <p>{name}</p>
        <p>{address}</p>
      </div>
    );
  }
}
