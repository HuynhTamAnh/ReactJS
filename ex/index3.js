//arrow function
//nếu chỉ có 1 tham số thì không cần ()
const a = 10;
const b = 5;
const sum = (a, b) => a + b;
console.log(sum(a, b));

const print = (d) => Math.pow(d, 2);
console.log(print(10));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//destructoring- phá vỡ cấu trúc áp dụng cho: array và object
let arr = [1, 3, 4, 5, 6];
let [e, f] = arr;
console.log(e, f);
//object
let student = [
  {
    id: 1,
    name: "đóm",
    age: 18,
  },
];
let { name, age } = student;
console.log(name, age);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//rest parameter
const sum1 = (...parameter) => {
  //nhúng vào parameter để dùng làm tham số
  //parameter là 1 array
  return parameter.reduce((temp, a) => temp + a, 0);
};
console.log(sum1(1, 2, 3, 4, 5));
//chú ý kết hợp với destructoring
let [g, h, ...parameter] = arr;
console.log(parameter);
//spead operator: nhóm lại thành cấu trúc: array và object
let newArray = [2000, 1000, ...arr, 4999];
console.log(newArray);

//thêm hoặc chỉnh sửa thuộc tính của object
student = { ...student, name: "jack", address: "bến tre" };
console.log(student);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
for (let key of newArray) {
  console.log(key); //duyệt theo giá trị của từng phần tử trong mảng
}

for (let key in student) {
  console.log(key + ":" + student[key]);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
