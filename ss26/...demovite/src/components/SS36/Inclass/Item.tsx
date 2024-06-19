import React from "react";
type PropsType = {
  count: number;
  handleIncrease: () => void;
};
const Item = ({ count, handleIncrease }: PropsType) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrease}>tăng</button>
    </div>
  );
};

export default Item;
