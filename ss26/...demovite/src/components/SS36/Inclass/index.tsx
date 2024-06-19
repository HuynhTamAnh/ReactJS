import React, { useReducer, useState } from "react";
const reducer = (state = 0, action: string) => {
  switch (action) {
    case "increament1":
      return state + 1;
    case "increament2":
      return state + 2;
    case "increament3":
      return state + 3;
    default:
      return state;
  }
};
const Inclass = () => {
  //   const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0, undefined);
  return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={() => setCount(count + 1)}>Tăng lên 1</button>
      <button onClick={() => setCount(count + 2)}>Tăng lên 2</button>
      <button onClick={() => setCount(count + 3)}>Tăng lên 3</button> */}
      <button onClick={() => dispatch("increament1")}>Tăng lên 1</button>
      <br />
      <button onClick={() => dispatch("increament2")}>Tăng lên 2</button>
      <br />
      <button onClick={() => dispatch("increament3")}>Tăng lên 3</button>
    </div>
  );
};

export default Inclass;
