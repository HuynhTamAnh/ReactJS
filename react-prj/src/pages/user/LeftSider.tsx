import React from "react";
import { Layout, Menu, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/usersSlice";
import {
  HomeOutlined,
  SearchOutlined,
  CompassOutlined,
  HeartOutlined,
  PlusCircleOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { Title, Text } = Typography;

interface LeftSiderProps {
  showModal: () => void;
}

const LeftSider: React.FC<LeftSiderProps> = ({ showModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout(""));
    navigate("/login");
  };

  return (
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
        style={{ background: "#000" }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">
            <Text style={{ color: "#fff" }}>Home</Text>
          </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<SearchOutlined />}>
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
        <Menu.Item key="6" icon={<UserOutlined />}>
          <Link to="profile" style={{ color: "#fff" }}>
            Profile
          </Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<LogoutOutlined />} onClick={handleLogout}>
          <Text style={{ color: "#fff" }}>Logout</Text>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default LeftSider;
