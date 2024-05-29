//tổng quan: decorator là 1 bộ trang trí cho phép can thiệp vào đối tượng trong quá trình chạy(runtime)
// function logger(){
//     return function(target:any){
//         console.log(target);
//     }
// }
//class decorator: Function=(constructor:any)=>{ }
//nếu class decorator trả về 1 class mới thì đối tượng sẽ bị thay thế hoặc bị ghi đè bởi class đó
function wrapper(name: string) {
  return function logger<T extends { new (...args: any[]): {} }>(target: T) {
    return class extends target {
      //lớp không tên
      address: string = "hcm";
      id: number = 9;
    };
  };
}
function logger<T extends { new (...args: any[]): {} }>(target: T) {
  return class extends target {
    //lớp không tên
    address: string = "hcm";
    id: number = 9;
  };
}

//method decorator
function follow(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log(target); //tham chiếu của hàm
  console.log(propertyKey); //tên hàm
  console.log(descriptor.value); //bộ chỉnh sửa hàm
  descriptor.value = function () {
    console.log(`hé lô`);
    // console.log(`${this.id}`);
  };
}
function beforeSum(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  let oldFunction = descriptor.value; //lấy giá trị cũ
  //thay thế hàm sum bằng hàm khác
  descriptor.value = function (...args: any[]) {
    console.log(...args);
    return oldFunction(...args);
  };
}
//properties decoration
function x2(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
}

//tạo 1 hàm pow return và trả về decorator method
function pow(value: number) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    let old = descriptor.value;
    descriptor.value = function (...args: any[]) {
      return Math.pow(old(...args), value);
    };
  };
}

//Decorator factories:kĩ thuật truyền tham số cho 1 decorator thông qua khái niệm closure

@logger
class Student {
  id: number;
  name: string;
  age: number;
  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  @follow
  greet() {
    console.log(`Hello ${this.name}`);
  }
  //tính tổng
  @beforeSum
  sum(a: number, b: number) {
    return a + b;
  }
  @pow(2)
  luyThua(a: number) {
    return a;
  }
  //sử dụng từ khoá get/set
  public get id1() {
    console.log("gọi get");
    return this.id;
  }
  public set id1(id: number) {
    console.log("gọi set");
    this.id;
  }
}

let student = new Student(1, "who", 19);
console.log(student);
student.greet();
student.sum(1, 3);
student.id1 = 10;
console.log(student.luyThua(5));

//các loại decorator
