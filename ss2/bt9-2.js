const carts = [
  {
    product_name: "Cam",
    price: 20000,
    quantity: 5,
  },
  {
    product_name: "Táo",
    price: 30000,
    quantity: 3,
  },
  {
    product_name: "Xoài",
    price: 40000,
    quantity: 2,
  },
];
function totalPrice(carts) {
  return carts.reduce((a, b) => a.price + b.price, 0);
}
console.log(totalPrice(carts));
