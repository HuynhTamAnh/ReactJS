import React, { useState } from "react";

export default function BT8() {
  const [city, setCity] = useState<string>("");
  const outp = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value;
    setCity(value);
  };

  return (
    <div>
      <p>Thành phố: {city}</p>
      <select name="select" value={city} onChange={outp}>
        <option value="">Tình- Thành phố</option>
        <option value="HCM">HCM</option>
        <option value="HN">Hà Nội</option>
      </select>
    </div>
  );
}
