const products = [
  {
    id: 1,
    name: "sp1",
    price: 100,
    stock: 100,
  },
  {
    id: 2,
    name: "sp2",
    price: 90,
    stock: 100,
  },
  {
    id: 3,
    name: "sp3",
    price: 150,
    stock: 100,
  },
];

const cart = [
  { pro: { id: 1, name: "sp1", price: 100, quantity: 100 }, quantity: 1 },
  { pro: { id: 2, name: "sp2", price: 90, quantity: 100 }, quantity: 15 }, // 20
]; //lưu trữ sản phẩm và số lượng mua
function changeQuantity(proId, newQuantity, products) {
  //b1: kiểm tra sự tồn tại của sp trong giỏ hàng
  let index = indexOfProductInCart(proId);
  if (index != -1) {
    //lưu lại số lượng cữ
    let oldQuantity = cart[index].quantity;
    //tìm thấy và thay đổi số lượng
    cart[index].quantity = newQuantity;
    //cập nhật số lượng trong kho
    let index = indexOfProductInProducts(proId);
    products[indexPro].stock =
      products[indexPro].stock - newQuantity + oldQuantity;
  }
}
function indexOfProductInCart(proId) {
  //chuyển đổi [cartItem] thành [proId]
  //   let proIds = cart.map((cartItem) => cartItem.id);
  //   return proIds.indexOf(proId);
  return cart.findIndex((cartItem) => cartItem.pro.id == proId); //vì trí đầu tiên mà nó tìm được
}

function indexOfProductInProducts(proId) {
  return cart.findIndex((cartItem) => cartItem.pro.id == proId); //vì trí đầu tiên mà nó tìm được
}
console.log(cart);
changeQuantity(1, 50);
changeQuantity(2, 30);
console.log("new products", products);
console.log("new cart", cart);
// tính giá
let total = cart.reduce(
  (sum, cartItem) => sum + cartItem.pro.price * cartItem.quantity,
  0
);
console.log(total);
