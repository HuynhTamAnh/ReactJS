// Trong file Upload.tsx
import React, { useState } from "react";
import { Button, Upload as AntUpload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
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

      message.success("File uploaded successfully");
      if (onClose) {
        onClose();
      }
    } catch (err) {
      console.error(err);
      message.error("Error uploading file. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const props = {
    beforeUpload: (file: File) => {
      handleUpload(file);
      return false;
    },
  };

  return (
    <AntUpload {...props}>
      <Button icon={<UploadOutlined />} loading={uploading}>
        {uploading ? "Uploading" : "Select File"}
      </Button>
    </AntUpload>
  );
};

export default Upload;
