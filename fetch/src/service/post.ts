import axios from "axios";
export const getPostWithPaginate = async (page: number, perPage: number) => {
  const response = await axios.get(
    `http://localhost:9999/posts?_page=${page}&_limit=${perPage}`
  );
  console.log(response);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("lỗi");
  }
};
