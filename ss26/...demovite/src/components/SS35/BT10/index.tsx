import React, { useState } from "react";
import { preprocessCSS } from "vite";

export default function BT10() {
  const [choice, setChoice] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setChoice((prevChoice) => [...prevChoice, value]);
    } else {
      setChoice((prevChoice) => prevChoice.filter((choice) => choice != value));
    }
  };

  return (
    <div>
      <p>Sở thích: [{choice.join(",")}]</p>
      <input type="checkbox" value="Đi chơi" onChange={handleChange} />
      <label htmlFor="Đi chơi">Đi chơi</label>
      <br />
      <input type="checkbox" value="Học bài" onChange={handleChange} />
      <label htmlFor="Học bài">Học bài</label>
      <br />
      <input type="checkbox" value="Đi tắm" onChange={handleChange} />
      <label htmlFor="Đi tắm">Đi tắm</label>
    </div>
  );
}
