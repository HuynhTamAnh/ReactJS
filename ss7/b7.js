"use strict";
//các kiểu dữ liệu cơ bản 2
//Array: mảng
//cách 1: được khuyên dùng
let array = ["hung", "who"];
//cách 2: không được khuyên dùng
let array2 = [1, 3, 4];
array.push("hung");
console.log(array);
//////////////////////////////////////////////////////////////
//Object: định nghĩa 1 đối tượng: thuộc tính và phương thức
let obj;
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
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Pink"] = 101] = "Pink";
    Color[Color["Yellow"] = 5] = "Yellow";
})(Color || (Color = {}));
console.log(Color.Yellow);
let color = Color.Pink;
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
let unknownVar = 1;
unknownVar = "abc";
console.log(unknownVar);
