import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Toolbar,
  Typography,
  Avatar,
  Button,
  Tabs,
  Tab,
  Box,
  Grid,
  Modal,
  Container,
  Badge,
} from "@mui/material";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Explore as ExploreIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Person as PersonIcon,
  AddCircleOutline as AddCircleOutlineIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import Upload from "../../firebase/configFirebase";
import { AppDispatch, RootState } from "../../store";
import { IUsers, IPosts } from "../../interface";
import { logout } from "../../store/slices/usersSlice";
import { fetchUserPosts } from "../../store/slices/postsSlice";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);
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

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  const handleImageUpload = (imageUrl: string) => {
    console.log("Uploaded image URL:", imageUrl);
    setIsModalOpen(false);
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fff", color: "#000" }}>
      <Container sx={{ mt: 8 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3} textAlign="center">
            <Avatar
              sx={{ width: 100, height: 100, mx: "auto" }}
              src={userLogin?.avatar}
            />
            <Typography variant="h6" sx={{ mt: 2 }}>
              {userLogin?.username}
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography variant="h4" sx={{ flexGrow: 1 }}>
                {userLogin?.username}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mx: 1,
                  backgroundColor: "#333",
                  padding: "5px 10px",
                  fontSize: "0.875rem",
                }}
                startIcon={<SettingsIcon />}
              >
                Chỉnh sửa
              </Button>
              <Button
                variant="contained"
                sx={{
                  mx: 1,
                  backgroundColor: "#333",
                  padding: "5px 10px",
                  fontSize: "0.875rem",
                }}
                startIcon={<LogoutIcon />}
                onClick={handleLogout}
              >
                Đăng xuất
              </Button>
            </Box>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item>
                <Typography variant="body1">
                  <Badge badgeContent={userPosts.length} color="primary">
                    Bài viết
                  </Badge>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  <Badge badgeContent={100} color="primary">
                    Người theo dõi
                  </Badge>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  <Badge badgeContent={547} color="primary">
                    Đang theo dõi
                  </Badge>
                </Typography>
              </Grid>
            </Grid>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              centered
              sx={{ mt: 2, borderBottom: 1, borderColor: "divider" }}
            >
              <Tab label="Bài viết" />
              <Tab label="Đã lưu" />
              <Tab label="Được gắn thẻ" />
            </Tabs>
            <TabPanel value={tabValue} index={0}>
              <Grid container spacing={2}>
                {userPosts.map((post) => (
                  <Grid item xs={12} sm={6} md={4} key={post.id}>
                    <img
                      src={post.image[0]}
                      alt={post.content}
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
              <Typography>Chưa có bài viết đã lưu.</Typography>
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
              <Typography>Chưa có bài viết được gắn thẻ.</Typography>
            </TabPanel>
          </Grid>
        </Grid>
      </Container>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-title" variant="h6" component="h2">
            Upload Image
          </Typography>
          <Upload
            onClose={() => setIsModalOpen(false)}
            onImageUpload={handleImageUpload}
          />
        </Box>
      </Modal>
    </Box>
  );
};

const TabPanel = (props: {
  children?: React.ReactNode;
  value: number;
  index: number;
}) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default Profile;
