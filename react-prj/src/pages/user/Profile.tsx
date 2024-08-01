import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Layout,
  Menu,
  Modal,
  Typography,
  Row,
  Col,
  Avatar,
  Button,
  Tabs,
  Statistic,
  Image,
  MenuProps,
} from "antd";
import {
  HomeOutlined,
  CompassOutlined,
  HeartOutlined,
  UserOutlined,
  LogoutOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  SettingOutlined,
  AppstoreOutlined,
  TableOutlined,
  BookOutlined,
} from "@ant-design/icons";
import Upload from "../../firebase/configFirebase";
import { AppDispatch, RootState } from "../../store";
import { IUsers, IPosts } from "../../interface";
import { logout } from "../../store/slices/usersSlice";
import { fetchUserPosts } from "../../store/slices/postsSlice";

const { Content, Sider } = Layout;
const { Text, Title } = Typography;
const { TabPane } = Tabs;

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const userLogin = useSelector(
    (state: RootState) => state.usersSlice.userLogin
  ) as IUsers | null;
  const userPosts = useSelector(
    (state: RootState) => state.postsSlice.userPosts
  ) as IPosts[];

  useEffect(() => {
    if (userLogin) {
      dispatch(fetchUserPosts(userLogin.id));
    }
  }, [dispatch, userLogin]);

  const handleLogout = () => {
    dispatch(logout(""));
    navigate("/login");
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleImageUpload = (imageUrl: string) => {
    // Xử lý upload ảnh ở đây
    console.log("Uploaded image URL:", imageUrl);
    setIsModalVisible(false);
  };
  const handleClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
    console.log(e.key);
  };

  return (
    <Layout style={{ minHeight: "100vh", background: "#000" }}>
      <Sider
        style={{
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          background: "#000",
          zIndex: 1,
        }}
        width={200}
      >
        <div className="logo" style={{ padding: "20px", textAlign: "center" }}>
          <Link to="/">
            <Title level={3} style={{ color: "#fff" }}>
              Shinstagram
            </Title>
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={handleClick}
          style={{ background: "#000", color: "#fff" }}
        >
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Text style={{ color: "#fff" }}>Home</Text>
          </Menu.Item>

          <Menu.Item key="/search" icon={<SearchOutlined />}>
            <Text style={{ color: "#fff" }}>Search</Text>
          </Menu.Item>
          <Menu.Item key="3" icon={<CompassOutlined />}>
            <Text style={{ color: "#fff" }}>Explore</Text>
          </Menu.Item>
          <Menu.Item key="4" icon={<HeartOutlined />}>
            <Text style={{ color: "#fff" }}>Notifications</Text>
          </Menu.Item>
          <Menu.Item key="5" icon={<PlusCircleOutlined />} onClick={showModal}>
            <Text style={{ color: "#fff" }}>Create</Text>
          </Menu.Item>
          <Menu.Item key="/profile" icon={<UserOutlined />}>
            <Text style={{ color: "#fff" }}>Profile</Text>
          </Menu.Item>
          <Menu.Item key="7" icon={<LogoutOutlined />} onClick={handleLogout}>
            <Text style={{ color: "#fff" }}>Logout</Text>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout
        style={{ marginLeft: 200, background: "#000", minHeight: "100vh" }}
      >
        <Content
          style={{ padding: "24px", display: "flex", justifyContent: "center" }}
        >
          <div style={{ maxWidth: "1000px", width: "100%" }}>
            <Row gutter={[16, 16]} align="middle">
              <Col span={8} style={{ textAlign: "center" }}>
                <Avatar size={150} src={userLogin?.avatar} />
              </Col>
              <Col span={16}>
                <Row>
                  <Col span={24}>
                    <Title level={2} style={{ color: "#fff", marginBottom: 0 }}>
                      {userLogin?.username}
                    </Title>
                  </Col>
                </Row>
                <Row style={{ marginTop: "16px" }}>
                  <Col span={8}>
                    <Statistic
                      title="Posts"
                      value={userPosts.length}
                      valueStyle={{ color: "#fff" }}
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic
                      title="Followers"
                      value={1234}
                      valueStyle={{ color: "#fff" }}
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic
                      title="Following"
                      value={567}
                      valueStyle={{ color: "#fff" }}
                    />
                  </Col>
                </Row>
                <Row style={{ marginTop: "16px" }}>
                  <Col span={24}>
                    <Text style={{ color: "#fff" }}>{userLogin?.email}</Text>
                  </Col>
                </Row>
                <Row style={{ marginTop: "16px" }}>
                  <Col span={24}>
                    <Button icon={<SettingOutlined />} type="primary">
                      Edit Profile
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Tabs defaultActiveKey="1" style={{ marginTop: "32px" }}>
              <TabPane
                tab={
                  <span style={{ color: "#fff" }}>
                    <AppstoreOutlined /> POSTS
                  </span>
                }
                key="1"
              >
                <Row gutter={[16, 16]}>
                  {userPosts.map((post) => (
                    <Col span={8} key={post.id}>
                      <Image
                        src={post.image[0]}
                        alt={post.content}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                      />
                    </Col>
                  ))}
                </Row>
              </TabPane>
              <TabPane
                tab={
                  <span style={{ color: "#fff" }}>
                    <TableOutlined /> TAGGED
                  </span>
                }
                key="2"
              >
                <Text style={{ color: "#fff" }}>No tagged posts yet.</Text>
              </TabPane>
              <TabPane
                tab={
                  <span style={{ color: "#fff" }}>
                    <BookOutlined /> SAVED
                  </span>
                }
                key="3"
              >
                <Text style={{ color: "#fff" }}>No saved posts yet.</Text>
              </TabPane>
            </Tabs>
          </div>
        </Content>
      </Layout>
      <Modal
        title="Upload Image"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        <Upload onClose={handleCancel} onImageUpload={handleImageUpload} />
      </Modal>
    </Layout>
  );
};

export default Profile;
