function checkPositive(number) {
  const numArray = number.split(",").map((num) => parseFloat(num.trim()));
  return numArray.every((num) => num > 0);
}
console.log(checkPositive("1, 2, 4, 5"));
