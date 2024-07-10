const dataAdd = {
  id: "5",
  product_name: "f",
  image:
    "https://i.pinimg.com/736x/2e/14/bf/2e14bfb30b21c0dae955cdf31003eece.jpg",
  price: "100005",
  quantity: "1000",
  created_at: "vnam",
};

const createProduct = () => {
  fetch("http://localhost:9999/products", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataAdd),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

createProduct();
