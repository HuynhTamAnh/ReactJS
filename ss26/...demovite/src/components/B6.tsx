import React, { Component } from "react";

export default class B6 extends Component {
  render() {
    const user = {
      firstName: "Nguyễn Văn",
      lastName: "Vẳn",
    };
    const fullName = formatName(user);
    return <div>{fullName}</div>;
  }
}
function formatName(user) {
  return `Tên đầy đủ: ${user.firstName} ${user.lastName}`;
}
