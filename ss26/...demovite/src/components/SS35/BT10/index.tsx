import React, { useState } from "react";
import { preprocessCSS } from "vite";

export default function BT10() {
  const [choice, setChoice] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    if (checked) {
      setChoice((prevChoice) => [...prevChoice, id]);
    } else {
      setChoice((prevChoice) => prevChoice.filter((choice) => choice != id));
    }
  };

  return (
    <div>
      <p>Sở thích: [{choice.join(",")}]</p>
      <input type="checkbox" id="Đi chơi" onChange={handleChange} />
      <label htmlFor="Đi chơi">Đi chơi</label>
      <br />
      <input type="checkbox" id="Học bài" onChange={handleChange} />
      <label htmlFor="Học bài">Học bài</label>
      <br />
      <input type="checkbox" id="Đi tắm" onChange={handleChange} />
      <label htmlFor="Đi tắm">Đi tắm</label>
    </div>
  );
}
