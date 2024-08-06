import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import {
  Favorite as FavoriteIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { IUsers, IPosts } from "../../interface";
import { AppDispatch, RootState } from "../../store";
import { getNewPosts } from "../../store/slices/postsSlice";

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
        <Card key={post.id} sx={{ mb: 2, bgcolor: "background.paper" }}>
          <CardHeader
            avatar={<Avatar src={userLogin?.avatar} />}
            title={userLogin?.username}
            subheader={new Date(post.date).toLocaleDateString()}
          />
          <CardMedia
            component="img"
            height="300"
            image={post.image[0]}
            alt={`Post ${post.id}`}
          />
          <Box sx={{ p: 2 }}>
            <Typography variant="body1">{post.content}</Typography>
            <Typography variant="caption" color="text.secondary">
              Reactions: {post.reactions.join(", ")}
            </Typography>
          </Box>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <SendIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
      {posts.length === 0 && <Typography>No posts available.</Typography>}
    </>
  );
};

export default ContentPosts;
