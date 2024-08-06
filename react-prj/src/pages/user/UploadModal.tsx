import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import Upload from "../../firebase/configFirebase";

interface UploadModalProps {
  isVisible: boolean;
  onClose: () => void;
  onImageUpload: (imageUrl: string) => void;
}

const UploadModal: React.FC<UploadModalProps> = ({
  isVisible,
  onClose,
  onImageUpload,
}) => {
  return (
    <Modal open={isVisible} onClose={onClose} aria-labelledby="modal-title">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
          Upload Image
        </Typography>
        <Upload onClose={onClose} onImageUpload={onImageUpload} />
      </Box>
    </Modal>
  );
};

export default UploadModal;
