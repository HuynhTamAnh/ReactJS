//lấy danh sách sản phẩm đã được thiết kế ở phần back
fetch("http://localhost:9999/products/8")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    //tiến hình xử lý dữ liệu
  });
////////////////////////////////////////////////
//xoá
// fetch("http://localhost:9999/products/8", {
//   method: "DELETE",
// })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });
////////////////////////////////////////////////
//update
const dataFake = {
  id: 3,
  name: "c",
  userId: 1,
};
fetch("http://localhost:9999/products", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(dataFake),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
