import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Avatar, Image, Typography, Carousel } from "antd";
import { HeartOutlined, SendOutlined } from "@ant-design/icons";
import { IUsers, IPosts } from "../../interface";
import { AppDispatch, RootState } from "../../store";
import { getNewPosts } from "../../store/slices/postsSlice";

const { Meta } = Card;
const { Text } = Typography;

const ContentPosts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userLogin = useSelector(
    (state: RootState) => state.usersSlice.userLogin
  ) as IUsers | null;
  const posts = useSelector(
    (state: RootState) => state.postsSlice.posts
  ) as IPosts[];

  useEffect(() => {
    dispatch(getNewPosts());
  }, [dispatch]);

  return (
    <>
      {posts.map((post) => (
        <Card
          key={post.id}
          style={{ marginBottom: 16, background: "#121212" }}
          cover={
            <Carousel>
              {post.image.map((img, index) => (
                <Image
                  key={index}
                  alt={`Post ${post.id} - Image ${index}`}
                  src={img}
                />
              ))}
            </Carousel>
          }
          actions={[
            <HeartOutlined style={{ color: "#000" }} />,
            <SendOutlined key="send" style={{ color: "#000" }} />,
          ]}
        >
          <Meta
            avatar={<Avatar src={userLogin?.avatar} />}
            title={
              <Text strong style={{ color: "#fff" }}>
                {userLogin?.username}
              </Text>
            }
            description={
              <Text style={{ color: "#fff", fontSize: "20px" }}>
                {post.content}
              </Text>
            }
          />
          <Text style={{ color: "#aaa", display: "block", marginTop: 10 }}>
            {new Date(post.date).toLocaleDateString()}
          </Text>
          <Text style={{ color: "#aaa", display: "block", marginTop: 5 }}>
            Reactions: {post.reactions.join(", ")}
          </Text>
        </Card>
      ))}
      {posts.length === 0 && (
        <Text style={{ color: "#fff" }}>No posts available.</Text>
      )}
    </>
  );
};

export default ContentPosts;
