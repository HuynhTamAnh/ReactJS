import React, { Component } from "react";

export default class B3 extends Component {
  render() {
    const user1: Person = {
      name: "tam anh",
      sex: true,
      date: "1000/22/33",
      email: "hhh@gmail.com",
      address: "22 ghgg ",
    };
    return (
      <div>
        <h1>Thông tin cá nhân</h1>
        <p>Họ và tên: {user1.name}</p>
        <p>Giới tính: {user1.sex}</p>
        <p>Ngày sinh: {user1.date}</p>
        <p>Email: {user1.email}</p>
        <p>address: {user1.address}</p>
      </div>
    );
  }
}

interface Person {
  name: string;
  sex: boolean;
  date: string;
  email: string;
  address: string;
}

// class User implements Person {
//   name: string;
//   sex: boolean;
//   date: string;
//   email: string;
//   address: string;
//   constructor(
//     name: string,
//     sex: boolean,
//     date: string,
//     email: string,
//     address: string
//   ) {
//     this.name = name;
//     this.sex = sex;
//     this.date = date;
//     this.email = email;
//     this.address = address;
//   }
// }

// const user = new User(
//   "ai đó",
//   true,
//   "11,ha,1001",
//   "aido@gmaillcom",
//   "123gdfo8gdfg"
// );
