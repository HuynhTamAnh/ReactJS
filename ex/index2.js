//some: có ít nhất 1 phần tử thoả điều kiện
let arr = [1, 2, 4, 5, 7, 8, 9, 10];
let check = arr.some((arr) => arr % 3 == 0);
console.log(check);

//every tất cả các phần tử phải thoả điều kiện
let arr1 = [3, 6, 9];
let check1 = arr1.every((arr1) => arr1 % 3 == 0);
console.log(check1);

//sort sắp xếp theo
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
console.log(products.sort((a, b) => a.price - b.price));
