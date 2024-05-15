var a = 10;
var b = 5;
let arr = [a, b];
let sum = arr.reduce((a, b) => a + b, 0); //dùng reduce bắt buộc phải dùng mảng để tính
console.log(sum);
