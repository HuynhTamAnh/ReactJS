import React, { useState, useEffect } from "react";

const BT10 = () => {
  const [keyInfo, setKeyInfo] = useState({ key: "", keyCode: "" });

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      setKeyInfo({ key: event.key, keyCode: event.keyCode });
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h1>Key Logger</h1>
      <p>Press any key to see the key name and key code.</p>
      {keyInfo.key && (
        <div>
          <p>
            <strong>Key:</strong> {keyInfo.key}
          </p>
          <p>
            <strong>Key Code:</strong> {keyInfo.keyCode}
          </p>
        </div>
      )}
    </div>
  );
};

export default BT10;
