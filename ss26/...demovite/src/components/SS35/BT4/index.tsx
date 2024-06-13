import { useState } from "react";

export default function BT4() {
  const [status, setStatus] = useState<boolean>(true);
  const handleChange = (): void => {
    setStatus(!status);
  };
  return (
    <div>
      <button onClick={handleChange}>{status ? "Hiện" : "Ẩn"}</button>
    </div>
  );
}
