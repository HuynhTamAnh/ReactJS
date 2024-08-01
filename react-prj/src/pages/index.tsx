import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewPosts } from "../store/slices/postsSlice";
import { Layout, Row, Col, Modal } from "antd";
import Upload from "../firebase/configFirebase";
import { AppDispatch, RootState } from "../store";
import { IUsers, IPosts } from "../interface";
import LeftSider from "./user/LeftSider";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const userLogin = useSelector(
    (state: RootState) => state.usersSlice.userLogin
  ) as IUsers | null;

  useEffect(() => {
    dispatch(getNewPosts());
    const token = localStorage.getItem("accessToken");
    if (token) {
      // Handle token-related logic here
    }
  }, [dispatch]);

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
        <Content>
          <div style={{ padding: 24 }}>
            <Outlet />
          </div>
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

export default HomePage;
