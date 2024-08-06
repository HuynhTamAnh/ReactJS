// Trong file Upload.tsx
import React, { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../config/index";

interface UploadProps {
  onClose?: () => void;
  onImageUpload?: (imageUrl: string) => void;
}

const Upload: React.FC<UploadProps> = ({ onClose, onImageUpload }) => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (file: File) => {
    setUploading(true);
    try {
      const storageRef = ref(storage, `images/${file.name}`);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(snapshot.ref);
      if (onImageUpload) {
        onImageUpload(downloadUrl);
      }
      console.log("File uploaded successfully");
      if (onClose) {
        onClose();
      }
    } catch (err) {
      console.error(err);
      console.error("Error uploading file. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleUpload(file);
    }
  };

  return (
    <div>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="raised-button-file"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="raised-button-file">
        <Button
          variant="contained"
          component="span"
          startIcon={
            uploading ? <CircularProgress size={24} /> : <CloudUploadIcon />
          }
          disabled={uploading}
        >
          {uploading ? "Uploading" : "Select File"}
        </Button>
      </label>
    </div>
  );
};

export default Upload;
