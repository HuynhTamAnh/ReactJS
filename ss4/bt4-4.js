let arr = [];
let checkElement = (arr, i) => {
  return arr.includes(i);
};

console.log(checkElement([1, 2, 3, 4], 4));
console.log(checkElement([1, 2, 3, 4], 5));
