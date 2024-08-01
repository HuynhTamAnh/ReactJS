import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import { RootState } from "../../store";
import { IUsers } from "../../interface";
import ContentPosts from "./ContentPosts";
import RightSider from "./RightSider";

const HomeContent: React.FC = () => {
  const userLogin = useSelector(
    (state: RootState) => state.usersSlice.userLogin
  ) as IUsers | null;

  return (
    <Row gutter={[16, 16]}>
      <Col span={16}>
        <ContentPosts />
      </Col>
      <Col span={8}>
        <RightSider userLogin={userLogin} />
      </Col>
    </Row>
  );
};

export default HomeContent;
