// import React from "react";

// export default function Table() {
//   //js ở đây
//   return (
//     //trả về jsx
//     <div></div>
//   );
// }

import React, { Component } from "react";

// import "./css/table.css";

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
        <h1>Danh sách khoá học</h1>
        <ol>
          <li> HTML</li>
          <li> CSS</li>
          <li> JavaScript</li>
          <li> ReactJS</li>
        </ol>
      </div>
    );
    //trả về JSX
  }
}

// Table.prototypes={
//     data:string;
// }
export default Table;
