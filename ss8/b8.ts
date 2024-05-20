//toán tử hạng(bit)
// let a = 4 & 5;
// console.log(a); //4
//100+101=4
let a = 10 | 11;
//1010=10
//1011=11

//1011=11
console.log(a);
//////////////////////////////////////////////////////
//kiểu giao cát: cho phép khai báo 1 danh sách kiểu dữ liệu tuỳ bién
let numberOrString: number | string;
numberOrString = 10;
numberOrString = "10";
let nameStudent: (number | string) & (string | boolean);
nameStudent = "cdd";
//////////////////////////////////////////////////////
type NameStudent = (number | string) & (string | boolean);
let nameStudent2: NameStudent;
nameStudent2 = "hhhhh";
type Student = {
  id: string;
  name: string;
  age: number;
  sex: boolean;
};
let students: Student[];
let Students2: Array<Student>;

type Numbers = number;
let b: Numbers;
