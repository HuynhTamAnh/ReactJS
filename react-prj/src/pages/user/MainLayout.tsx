import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import { Outlet } from "react-router-dom";
import Upload from "../../firebase/configFirebase";
import LeftSider from "./LeftSider";

const MainLayout: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleImageUpload = (imageUrl: string) => {
    // Handle the uploaded image
    setIsModalVisible(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <LeftSider showModal={showModal} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: "250px" }}>
        <Outlet />
      </Box>
      <Modal
        open={isModalVisible}
        onClose={handleCancel}
        aria-labelledby="modal-title"
      >
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
          }}
        >
          <h2 id="modal-title">Upload Image</h2>
          <Upload onClose={handleCancel} onImageUpload={handleImageUpload} />
        </Box>
      </Modal>
    </Box>
  );
};

export default MainLayout;
