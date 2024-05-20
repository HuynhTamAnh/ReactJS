//các kiểu dữ liệu cơ bản 2
//Array: mảng
//cách 1: được khuyên dùng
let array: string[] = ["hung", "who"];
//cách 2: không được khuyên dùng
let array2: Array<number> = [1, 3, 4];
array.push("hung");
console.log(array);
//////////////////////////////////////////////////////////////
//Object: định nghĩa 1 đối tượng: thuộc tính và phương thức
let obj: {
  id: string;
  name: string;
  age: number;
  sex: boolean;
  getInfo: () => string;
};
obj = {
  id: "1",
  name: "John",
  age: 20,
  sex: true,
  getInfo: () => {
    return "id: " +
      obj.id +
      "| name: " +
      obj.name +
      " |age: " +
      obj.age +
      " | sex: " +
      obj.sex
      ? "nam"
      : "nữ";
  },
};
console.log(obj.getInfo());

//////////////////////////////////////////////////////////////
//enum: danh sách các hằng số
enum Color {
  Red = 1,
  Blue = 2,
  Green = 100,
  Pink, //101
  Yellow = 5,
}
console.log(Color.Yellow);
let color: Color = Color.Pink;
// let color1: Color = Color.Black; //undefined
console.log(color);
/////////////////////////////////////////////////////////////
//never: function không bao giờ xảy ra(trả về giá trị)
//lỗi js
// function error(message: string): never {
//   throw new Error(message); //ném lỗi trong js
// }
// //vòng lặp vô hạn
// function infiniteloop(): never {
//   while (true) {
//     //lệnh
//     console.log("l");
//   }
// }
// infiniteloop();
/////////////////////////////////////////////////////////
//unknown
//không truy cập được các thuộc tính và phương thức của biến
let unknownVar: unknown = 1;
unknownVar = "abc";
console.log(unknownVar);
