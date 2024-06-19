import React, { useCallback, useMemo, useState } from "react";
import Item from "./Item";
// import Item from "./Item";

const List = () => {
  //là 1 hook dùng để tăng hiệu năng bằng cách ghi nhớ kết quả tính toán mà không cần tính toán lại
  const [arr, setArr] = useState([1, 2, 3]);
  const [count, setCount] = useState(0);
  const total = useMemo(() => {
    console.log("tăng");
    return arr.reduce((temp, num) => temp + num, 0);
  }, [arr]);
  const handleRandom = () => {
    let number = Math.floor(Math.random() * 100);
    setArr([...arr, number]);
  };

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <div>
      <Item count={count} handleIncrease={handleIncrease} />
      <p>{total}</p>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
};

export default List;
