import { Component } from "react";
import { Self } from "./Parent_Comp";
type PropsType = {
  self: Self;
};
export default class ConRuot extends Component<PropsType> {
  render() {
    let { self } = this.props;
    return (
      <div>
        <p>{self.name}</p>
      </div>
    );
  }
}
