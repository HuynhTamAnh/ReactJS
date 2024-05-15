function allNumbersDivisibleBy(nums, a) {
  return nums.every((nums) => nums % a == 0);
}
console.log(allNumbersDivisibleBy([3, 6, 9], 3));
