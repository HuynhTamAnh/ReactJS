const dataUpdate = { product_name: "ef" };
const updateProductById = () => {
  fetch("http://localhost:9999/products/5", {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataUpdate),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

updateProductById();
