import React, { useRef } from "react";
const Timer = () => {
  const input = useRef<HTMLInputElement>(null);

  const outp = () => {
    let value = input.current?.value;
    console.log(input.current?.value);
  };
  return (
    <div>
      <h1>Timer</h1>
      <h2>00:00:00</h2>
      <input
        ref={input}
        type="text"
        placeholder="Nhập tên"
        defaultValue={"abc..."}
      />
      <button onClick={outp}>in giá trị input</button>
    </div>
  );
};

export default Timer;
