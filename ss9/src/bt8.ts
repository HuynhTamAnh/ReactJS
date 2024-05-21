type Item = [string, number, number];
let tong = (item: Item): number => {
  const [name, price, quantity] = item;
  return item[1] * item[2];
};
const item: Item = ["Apple", 10, 5];
const total = tong(item);
console.log(total);
