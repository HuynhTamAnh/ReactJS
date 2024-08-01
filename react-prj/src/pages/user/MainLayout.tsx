import React, { useState } from "react";
import { Layout, Modal } from "antd";
import { Outlet } from "react-router-dom";
// import Upload from "../"; // Adjust the path accordingly
import LeftSider from "./LeftSider"; // Adjust the path accordingly
import Upload from "../../firebase/configFirebase";

const { Content } = Layout;

const MainLayout: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleImageUpload = (imageUrl: string) => {
    setUploadedImages((prevImages) => [imageUrl, ...prevImages]);
    setIsModalVisible(false);
  };

  return (
    <Layout style={{ minHeight: "100vh", background: "#000" }}>
      <LeftSider showModal={showModal} />
      <Layout
        style={{ marginLeft: 200, background: "#000", minHeight: "100vh" }}
      >
        <Content style={{ padding: 24 }}>
          <Outlet />
        </Content>
      </Layout>
      <Modal
        title="Upload Image"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Upload onClose={handleCancel} onImageUpload={handleImageUpload} />
      </Modal>
    </Layout>
  );
};

export default MainLayout;
