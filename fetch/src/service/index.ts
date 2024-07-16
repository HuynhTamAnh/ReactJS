//lấy dữ liệu bài đăng
// export const getAllPorts = async () => {
//   const response = await fetch("http://localhost:9999/ports"); //mặc định fetch có method là GET
//   if (!response.ok) {
//     //nếu không thành công
//     throw new Error(response.statusText);
//   } else {
//     //nếu thành công
//     return await response.json();
//   }
// };
//thêm mới:
//method: POST
//endpoint: http://localhost:9999/ports
// export const createNewPost = async (data: {}) => {
//   const response = await fetch("http://localhost:9999/ports", {
//     method: "POST",
//     headers: {
//       "content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   return response.json();
// };
//xoá
//method: DELETE
// export const deleteNewPort = async (id: number) => {
//   const response = await fetch(`http://localhost:9999/ports/${id}`, {
//     method: "DELETE",
//   });
//   return response.json();
// };
//sửa
//method: PUT
// export const updatePort = async (data: {}, id: number) => {
//   const response = await fetch(`http://localhost:9999/ports/${id}`, {
//     method: "PUT",
//     headers: {
//       "content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   return response.json();
// };
