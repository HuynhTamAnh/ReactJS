import React, { useEffect, useRef } from "react";

const BT4 = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });
  return (
    <div>
      <input type="text" placeholder="focus me..." ref={inputRef} />
    </div>
  );
};

export default BT4;
