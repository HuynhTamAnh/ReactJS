import React, { useState } from "react";

export default function BT5() {
  const [status, setStatus] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter here"
        value={status}
        onChange={handleChange}
      />
      <p>Render here: {status}</p>
    </div>
  );
}
