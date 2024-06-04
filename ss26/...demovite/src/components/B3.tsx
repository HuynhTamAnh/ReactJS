import React, { Component } from "react";

export default class B3 extends Component {
  render() {
    return (
      <div>
        <h1>Thông tin cá nhân</h1>
        <p>Họ và tên: {user.name}</p>
        <p>Giới tính: {user.sex}</p>
        <p>Ngày sinh: {user.date}</p>
        <p>Email: {user.email}</p>
        <p>address: {user.address}</p>
      </div>
    );
  }
}

// interface Person {
//   name: string;
//   sex: boolean;
//   date: number;
//   email: string;
//   address: string;
// }

class User {
  name: string;
  sex: boolean;
  date: number;
  email: string;
  address: string;
  constructor(
    name: string,
    sex: boolean,
    date: number,
    email: string,
    address: string
  ) {
    this.name = name;
    this.sex = sex;
    this.date = date;
    this.email = email;
    this.address = address;
  }
}

const user = new User("ai đó", true, 222222, "aido@gmaillcom", "123gdfo8gdfg");
