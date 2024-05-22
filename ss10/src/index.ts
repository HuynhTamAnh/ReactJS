// class Person {
//   private sex: boolean;
//   private height: number;
//   private weight: number;
//   constructor(sex: boolean, height: number, weight: number) {
//     this.sex = sex;
//     this.height = height;
//     this.weight = weight;
//   }
//   public calBMI() {
//     return this.height / this.weight;
//   }
//   public toString() {
//     return ` weight: ${this.weight}, height: ${this.height}, sex: ${this.sex}`;
//   }
//   //   getter: lấy ra các thuộc tính private
//   public getSex() {
//     return this.sex;
//   }
//   public getHeight() {
//     return this.height;
//   }
//   public getWeght() {
//     return this.weight;
//   }
//   //setter: thay đổi giá trị của các thuộc tính dựa vào tham số truyền vào
//   public setSex(sex1: boolean) {
//     this.sex = sex1;
//   }
//   public setHeight(height1: number) {
//     this.height = height1;
//   }
//   public setWeight(weight1: number) {
//     this.weight = weight1;
//   }
// }

// class Student extends Person {
//   //kh cần dùng this vẫn trỏ được
//   private name: string;
//   private age: number;
//   private id: string;
//   private balance: number;
//   constructor(
//     name: string,
//     age: number,
//     id: string,
//     sex: boolean,
//     height: number,
//     weight: number
//   ) {
//     super(sex, height, weight);
//     this.name = name;
//     this.age = age;
//     this.id = id;
//     this.balance = 0;
//   }
//   doHomeWork() {
//     console.log(`${this.name} đang làm bài tập`);
//   }
//   toString() {
//     return `Tên: ${this.name}, tuổi: ${this.age}, id: ${
//       this.id
//     }, weight: ${this.getWeght()}, height: ${this.getHeight()}, sex: ${this.getSex()}`;
//   }
//   toStringPerson() {
//     return super.toString();
//   }
//   getB() {
//     return this.balance;
//   }
// }
// ////////////////////////////////////////////////////////////////////////////////////////
// //tính kế thừa
// //sử dụng từ khoá extend để kế thừa 2 lớp khác
// let student1 = <Person>new Student("hùng", 18, "gẻ", true, 55, 1.3);
// console.log(student1.toString());
// // console.log(student1.toStringPerson());
// // student1.doHomeWork();
// // console.log("số dư: ", student1.getB());
// console.log(student1.calBMI());

// // let person=new Person(true,1.8,70){
// //    console.log(person.toString());
// // }

// //cú pháp khai báo biến
// let variable: Person; //kiểu khai báo person
// variable = new Student("hùng", 18, "gẻ", true, 55, 1.3); //kiểu khởi tạo/kiểu thực tế
// console.log(variable.toString());
// //đổi tượng này có thể thực hiện những hành vi hay đặc điểm gì: kiểu khai báo
// //biét được phươg thức ghi đè nào được thực thi
// variable.toString(); //gọi đến Person
// variable = new Person(true, 1.3, 3);
// variable.toString();
// console.log(variable.toString());
// ////////////////////////////////////////////////////////////
// //tính bao đóng
// //hạn chế quyền truy cập của các tác nhân bên ngoài: private, protected, (default), public

// //public: có thể truy cập ở bất cứ đâu

// //default (không khai báo từ khoá): chỉ có thể truy cập trong package

// //protected: cho phép truy cập bên ngoài nhưng phải có quan hệ kế thừa

// //private: chỉ cho phép truy cập bên trong thuộc tính
