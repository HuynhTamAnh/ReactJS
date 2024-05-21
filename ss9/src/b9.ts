//type tuple: mảng cố định
let arrNotChanged: [number, string, boolean];
arrNotChanged = [1, "nam", true];

console.log(arrNotChanged);
// console.log("3", arrNotChanged[3]);
/////////////////////////////////////////////////////////
//option readonly
let number: readonly number[] = [10]; //khai báo ngầm định/literals
/////////////////////////////////////////////////////////
//type Allias- kiểu đối tượng (thuộc tính và phương thức)
//từ khoá type
type UserType = {
  readonly id: number; //chỉ đọc, không thể thay đổi
  name: string;
  age: number;
};
/////////////////////////////////////////////////////////////
//từ khoá: interface
interface UserInterFace {
  id: number;
  name: string;
  age: number;
}
/////////////////////////////////////////////////////////////
//từ khoá: class
class UserClass {
  id: number;
  name: string;
  age: number;
  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}
let user1: UserInterFace = { id: 1, name: "hung", age: 18 };
let user2: UserType = { id: 1, name: "hung", age: 18 };
let userFake: any = {
  id: 1,
  name: "hung",
  age: 18,
};
/////////////////////////////////////////////////////////////
//type guard
//typeof
//instance of
let userClass: UserClass = new UserClass(1, "khánh", 14);
console.log(userClass instanceof UserClass);
//toán tử in
console.log("id" in UserClass);
console.log("sex" in UserClass);

/////////////////////////////////////////////////////////////
//type casting
//toán tử as: như là
let myFunction = (a: number | string, b: number | string) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return String(a) + String(b);
  }
};
// console.log(myFunction("1", 2));
// let result = myFunction(1, 2) as string;
// console.log((result.)); dùng được cái phương thức của string khi ép kiểu
// console.log(typeof result);
//////////////////////
//sử dụng < >
let result = <string>myFunction(1, 2);
//////////////////////////////////////////////////////////////
//toán tử Optional chaining "?. "
// let username = userFake?.name; //nếu tồn tại thuộc tính name thì trả về thuộc tính đó
//nếu không thì trả về undefined
// console.log("username: ", username);

// let userTest: UserType = {
//   id: 1,
//     name: userClass,
//   age: 20,
// };
// let username = userTest?.name?.name; //nếu tồn tại trước thuộc tính name thì trả về giá trị thuộc tính đó
// console.log(username);
/////////////////////////////////////////////////////////////
//toán tử Nullish coalescing"??"
let fullName = user1.name ?? "tên mặc định";
console.log(fullName);
