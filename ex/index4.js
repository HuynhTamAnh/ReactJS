//default param- tham số mặc định
const sum = (a = 100, b) => console.log(a + b);
// sum(1); //clg ra NaN
// console.log("a=", a);
// console.log("b= ", b);
sum(undefined, 5);
///////////////////////////////////////////////////////
//includes kiểm tra tồn tại(mảng và chuỗi)
let arr = [1, 2, 3, 4, 5, 6, 7];
let arrCheck = arr.includes(7);
console.log(arrCheck);
let today = new Date(); //obj- chú ý: từ khoá new dùng để cấp phát động
let now = new Date(); //obj
let student = {
  id: 1,
  name: "jack",
};
let arrObj = [today, student];
console.log(arrObj.includes(today)); //true
console.log(arrObj.includes(now)); //true
//////////////////////////////////////////////////////////
//startsWith- kiểm tra chuỗi bắt đầu bằng
let string = "rikkei";
console.log(string.startsWith("rikk"));
//////////////////////////////////////////////////////////
//endsWith- chuỗi kết thúc bằng
console.log(string.endsWith("ei"));
//////////////////////////////////////////////////////////
//Class- OOP lập trình hướng đối tượng
//Class và Object
//các thành phần của 1 đối tượng: thuộc tính và phương thức
// function Student(id,name){
//     this.id=id;
//     this.name=name;
// }
// let s1=new Student(1,"hung");//this trỏ tới s1
// let s2=new Student(2,"trung");//this trỏ tới s2
//sử dụng từ khoá class
class Human {
  constructor(sex) {
    this.sex = sex;
  }
  move() {
    console.log("...moving");
  }
}

class Student extends Human {
  constructor(sex, id, name, age) {
    super(sex); // Call the parent constructor and pass the sex parameter
    this.id = id; // Declare and initialize properties
    this.name = name;
    this.age = age;
  }

  // Methods
  move() {
    console.log("chạy xe máy...");
  }

  printInfo() {
    console.log(
      "id: " + this.id + "| name: " + this.name + "| age: " + this.age
    );
  }
}

// Initialize a Student instance
let s1 = new Student("male", 1, "hung", 25);
console.log(s1);
s1.printInfo();
s1.move();

//ưu tiên khởi tạo đối tượng
let obj = {
  id: 1,
  name: "kkk",
};

//4 đặc điểm của oop:
//kế thừa
//đóng gói
//đa hình (ghi đè) (cùng 1 tên hàm nhưng cách khai triển khác nhau)
//trừu tượng-

///////////////////////////////////////////////////////////////
//khái niệm modules:
//bài toán được nhúng nhiều file js sẽ có thể bị xung đột code vì phạm vi biến global
////////////////////////////////////////////////////////////////
//promise - lời hứa: xử lý các thao tác bất đồng bộ trong js
//ví dụ lấy dữ liệu từ máy chủ về tiêu tốn 1 khoảng thời gian
//Nếu promise thành công: trạng thái Resolve()
//Nếu promise thất bại: trạng thái Reject()
let myPromise = new Promise((resolve, reject) => {
  // Simulate a condition to decide whether to resolve or reject
  let success = true; // Change this to false to trigger reject

  if (success) {
    let data = [1, 2, 3, 4];
    resolve(data);
  } else {
    let message = "đăng kí thất bại";
    reject(message);
  }
});

// Call the promise
myPromise
  .then(
    (data) => {
      // result
      console.log(data);
    },
    (message) => {
      // reject
      console.log(message);
      throw new Error(message);
    }
  )
  .catch((err) => {
    console.log(err);
  });

fetch("https://jsonplaceholder.typicode.com/photos") // là 1 promise
  .then((res) => res.json()) // chuyển đổi sang json
  .then((data) => {
    let div = document.getElementById("photo");
    let html = data.reduce(
      (temp, img) =>
        temp +
        `<img src="${img.url}" alt="" width="100" height="100">
    <br>`,
      ""
    );
    div.innerHTML = html;
  }) // in ra dữ liệu nhận đc
  .catch((err) => console.log(err)); // bắt lỗi sinh ra nếu có
