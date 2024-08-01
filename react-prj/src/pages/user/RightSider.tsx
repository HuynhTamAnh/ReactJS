import React from "react";
import { Card, Avatar, Typography } from "antd";
import { IUsers } from "../../interface";
const { Meta } = Card;
const { Text } = Typography;
interface RightSiderProps {
  userLogin: IUsers | null;
}
const RightSider: React.FC<RightSiderProps> = ({ userLogin }) => {
  return (
    <>
      <Card
        style={{
          background: "#121212",
          marginBottom: 16,
          color: "#fff",
        }}
      >
        <Meta
          avatar={<Avatar src={userLogin?.avatar} size="large" />}
          title={
            <Text strong style={{ fontSize: "18px", color: "#fff" }}>
              {userLogin?.username}
            </Text>
          }
          description={
            <Text style={{ color: "#aaa" }}>{userLogin?.email}</Text>
          }
        />
      </Card>
      <Card
        title={
          <Text strong style={{ color: "#fff" }}>
            Stories
          </Text>
        }
        style={{
          marginBottom: 16,
          background: "#121212",
          color: "#fff",
        }}
      >
        <Avatar.Group>
          <Avatar src="https://via.placeholder.com/40x40" />
          <Avatar src="https://via.placeholder.com/40x40" />
          <Avatar src="https://via.placeholder.com/40x40" />
          <Avatar src="https://via.placeholder.com/40x40" />
        </Avatar.Group>
      </Card>
      <Card
        title={
          <Text strong style={{ color: "#fff" }}>
            Suggestions
          </Text>
        }
        style={{ background: "#121212", color: "#fff" }}
      >
        <Text style={{ color: "#fff" }}>User 1</Text>
        <br />
        <Text style={{ color: "#fff" }}>User 2</Text>
        <br />
        <Text style={{ color: "#fff" }}>User 3</Text>
      </Card>
    </>
  );
};
export default RightSider;
