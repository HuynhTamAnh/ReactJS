// import { getAllPorts } from "./index";
import axios from "axios";

export const getAllPosts = async () => {
  try {
    const response = await axios.get("http://localhost:9999/posts");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error");
    }
  } catch (error) {
    throw new Error("lỗi");
  }
};
//thêm mới
export const createNewPosts = async (newPosts: {}) => {
  const res = await axios.post("http://localhost:9999/posts", newPosts, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status === 201) {
    return res.data;
  } else {
    throw new Error("lỗi");
  }
};
//xoá
export const deletePosts = async (id: number) => {
  const res = await axios.delete(`http://localhost:9999/posts/${id}`);
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("lỗi");
  }
};
//sửa
export const updatePosts = async (newPosts: {}, id: number) => {
  const res = await axios.put(`http://localhost:9999/posts/${id}`, newPosts, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("lỗi");
  }
};
//đăng nhập
