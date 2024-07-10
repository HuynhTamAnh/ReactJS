const getAllProduct = () => {
  fetch("http://localhost:9999/products", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

getAllProduct();
