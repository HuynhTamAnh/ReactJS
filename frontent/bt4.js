const getProductById = () => {
  fetch("http://localhost:9999/products/1", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

getProductById();
