// Sử dụng các kiến thức đã học về react hook để xây dựng một đồng hồ dựa vào thời gian thực trên máy tính
import React, { useEffect, useState } from "react";

const BT5 = () => {
  const [time, setTime] = useState(new Date());

  //   const updateTime = () => {
  //     setTime(new Date());
  //   };
  //   setInterval(() => {
  //     updateTime();

  //   }, 1000);
  //gọi lại 1 lần khi render
  useEffect(() => {
    setTimeout(() => {
      setTime(() => new Date());
    }, 1000);
  });
  return (
    <div>
      <p>Thời gian hiện tại: {time.toLocaleTimeString()}</p>
    </div>
  );
};

export default BT5;
