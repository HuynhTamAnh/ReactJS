// console.log("react", React);
const domContainer = document.querySelector("#root");

//tạo node gốc của Dom ảo
const root = ReactDOM.createRoot(domContainer);

//đẻ con và hiển thị con

//basic
// let P = React.createElement(
//   "p", //type of thẻ
//   { id: "children", class: "con", name: "child" },
//   "ai đó" //nội dung thẻ
// );

let P = <p id="hihi">hehe</p>;

root.render(P);
