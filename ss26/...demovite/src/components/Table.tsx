// import React from "react";

// export default function Table() {
//   //js ở đây
//   return (
//     //trả về jsx
//     <div></div>
//   );
// }

import React, { Component } from "react";

import "./css/table.css";
class Table extends Component {
  //thuộc tính, constructor, method
  //state: trạng thái của component: thông tin về component
  //props: thuộc tính của table:
  //   constructor(props: any) {
  //     super(props);
  //     this.state = {
  //       id: 10,
  //       name: "ai đó",
  //       class: "ks",
  //     };
  //   }
  render() {
    //js ở đây
    return (
      <div>
        <table className="hehe">
          <thead>
            <tr>
              <th>Id</th>
              <th>name</th>
              <th>class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>aaa</td>
              <td>ks</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
    //trả về JSX
  }
}

// Table.prototypes={
//     data:string;
// }
// export default Table;
