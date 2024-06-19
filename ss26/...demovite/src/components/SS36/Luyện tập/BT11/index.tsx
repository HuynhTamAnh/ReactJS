import React, { useState } from "react";

const BT11 = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImageSrc(null);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <div>Preview:</div>
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="Preview"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      ) : (
        <p>No image selected</p>
      )}
    </div>
  );
};

export default BT11;
