function multiply(multiplier, ...numbers) {
  return numbers.map((number) => number * multiplier);
}

console.log(multiply(2, 1, 2, 3, 4)); // [2, 4, 6, 8]
