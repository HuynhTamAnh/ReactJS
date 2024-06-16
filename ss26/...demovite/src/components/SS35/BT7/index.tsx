import React, { useState } from "react";

export default function BT7() {
  const [count, setCount] = useState<number>(0);
  const countWord = (): void => {
    setCount(count + 1);
  };

  return (
    <div>
      <input type="text" onInput={countWord} />
      <p>Số lượng ký tự đã gõ là: {count}</p>
    </div>
  );
}
