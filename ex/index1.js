// for (let i = 0; i <= 5; i++) {
//   console.log(`${i} có bình phương là ${Math.pow(i, 2)}`);
// }
// function outp(num, index, array) {
//   console.log("index= " + index);
//   console.log(`${num} có bình phương là ${Math.pow(num, 2)}`);
// }

// let arr = [1, 2, 3, 4, 5];
// arr.forEach(outp);
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let arrN = [];
arr.forEach((arr) => {
  let randomNum = Math.floor(Math.random() * 100 + 1);
  arrN.push(randomNum);
});
console.log(arrN); //gọi mảng

arrN.forEach((num) => {
  console.log(num);
});

//floor: làm tròn xuống
//ceil: làm tròn lên

//Map
let arr1 = [1, 3, 5, 7, 9];
let lpNumbers = arr1.map((arr1) => Math.pow(arr1, 3));
console.log(lpNumbers);

//filter
let chiaBa = arr1.filter((arr1) => arr1 % 3 == 0);
console.log(chiaBa);

//reduce: tích luỹ
let sum = arrN.reduce((temp, index) => temp + index, 0);
console.log(sum);
let tich = arr1.reduce((temp, element) => temp * element, 1);
console.log(tich);

//find, findIndex
let xxx = arr1.find((arr1) => arr1 % 5 == 0);
console.log(xxx);
let xxx1 = arr1.findIndex((arr1) => arr1 % 5 == 0);
console.log(xxx1);
