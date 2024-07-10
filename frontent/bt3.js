const getProductById = () => {
  fetch("http://localhost:9999/products/1", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

getProductById();
