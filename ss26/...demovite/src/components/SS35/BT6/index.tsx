import React, { useState } from "react";

export default function BT6() {
  const [count, setCount] = useState<number>(0);
  const changeCount = (): void => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={changeCount}>click để tăng số lần</button>
      <p>số lần click: {count}</p>
    </div>
  );
}
