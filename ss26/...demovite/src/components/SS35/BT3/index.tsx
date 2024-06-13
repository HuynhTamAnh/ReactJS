import React, { useState } from "react";

export default function BT3() {
  const [status, setStatus] = useState<boolean>(true);
  const handleChange = () => {
    setStatus(!status);
  };
  return (
    <div>
      <button style={{ color: status ? "blue" : "red" }} onClick={handleChange}>
        changeColor
      </button>
    </div>
  );
}
