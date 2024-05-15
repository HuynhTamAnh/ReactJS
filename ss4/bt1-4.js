var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = (a) => {
  let res = 0;
  for (let num of a) {
    if (num % 2 == 0) {
      res += num;
    }
  }
  return res;
};
console.log(sum(a));
