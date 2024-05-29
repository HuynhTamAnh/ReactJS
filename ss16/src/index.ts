//mảng trong ts
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3]; //generic array
let arr3: Array<number> = new Array(1, 2, 3);

//function in ra tham số truyền vào chưa xác định kiểu dữ liệu
const printf = (word: any): void => {
  console.log(word);
};

const printGeneric = <T>(word: T): void => {
  console.log(word);
};
printGeneric("ai đó");
printGeneric(1);
printGeneric(null);
////////////////////////////////////////////////////////////
//khởi tạo 1 turple từ 2 tham số truyền vào
const getTurple = <U, V>(a: U, b: V): [U, V] => {
  return [a, b];
};
console.log(getTurple("ai đó", 8));
console.log(getTurple("ai đó", null));
////////////////////////////////////////////////////////////
//các quy tắc cơ bản về đặt tên
//T: type
//E: element
//K: key
//V: value
//N: number

//Bài tập: tạo 1 hàm truyền vào 2 đối số : nếu 2 đối số đều là number thì trả về tổng của cả 2 đối số
//nếu cả 2 là chuỗi thì nối chuỗi
//còn nếu không thì in ra thông báo lỗi "không thể xác định kiểu"
const check = <T, V>(c: T, d: V): any => {
  if (typeof c === "number" && typeof d === "number") {
    return Number(c) + Number(d);
  }
  if (typeof c === "string" && typeof d === "string") {
    return String(c) + String(d);
  } else {
    console.error("không xác định được");
  }
};
console.log(check(1, 2));
console.log(check("dd", 2));
console.log(check("dd", "ggg"));
/////////////////////////////////////////////////////////
interface Person {
  weight: number;
  height: number;
}

class Student implements Person {
  weight: number;
  height: number;
  name: string;
  constructor(weight: number, height: number, name: string) {
    this.weight = weight;
    this.height = height;
    this.name = name;
  }
}

//tạo 1 hàm thông tin của person
const printInfoPerson = <T extends Person>(human: T) => {
  console.log(human.height, human.weight);
};
let st: Person = new Student(60, 1.7, "ai đó");
//ép kiểu ngầm định: quan hệ kế thừa- ép kiểu từ con lên cha
//ép kiểu tường minh: từ cha về con
let str: Student = <Student>st; //cha ép về con
printInfoPerson(st);

//tham số T phải thoả mãn là kiểu cha của lớp Student

// const printInfostudent = <T extends Student>(human: T) => {
//   //bất cứ kiểu dữ liệu nào kế thừa Person đều thoả mãn T (extends)
//   console.log(human.name, human.height, human.weight);
// };

/////////////////////////////////////////////////////////
//lớp generic
interface ArrayFake<T> {
  data: T[];
  push(item: T): void; //thêm vào cuối
  pop(): T; //xoá cuối và trả về thằng vừa xoá
}

class ArrayFakeImpl<T> extends Object implements ArrayFake<T> {
  data: T[] = [];
  push(item: T): void {
    this.data.push(item);
  }
  pop(): T {
    return this.data.pop() as T;
  }
  override toString = () => {
    return this.data.toString();
  };
}
//khởi tạo đối tượng
let arrFake: ArrayFake<number> = new ArrayFakeImpl<number>();
arrFake.push(1);
arrFake.push(2);
arrFake.push(3);
console.log(arrFake);
console.log([1, 2, 3, 4, 5]);
//////////////////////////////////////////////////////////
//generic với phương thức đặc biệt: static
class Numbers {
  static so: number;
  constructor(so: number) {
    Numbers.so = so;
  }
  static calX2() {
    //có vùng nhớ
    return this.so * 2;
  }
  static sum<T>(a: T, b: T) {
    return Number(a) + Number(b);
  }
}
// let n1 = new Numbers(2);
// let n2 = new Numbers(3);

// console.log(n1.so);
// console.log(n2.so);
console.log(Numbers.so);
// console.log(Numbers.sum(1, "ggggg"));
console.log(Numbers.sum(1, 4));

//quản lý bán

interface ICrud<T, E> {
  //T giá trị, E id
  create(item: T): void;
  findAll(item: T): T[];

  findByID(id: string): T;
  update(item: T): boolean;
  delete(id: E): boolean;
}

class Product {
  id: string;
  name: string;
  price: number;
  constructor(id: string, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

interface IProduct extends ICrud<T, E> {
  //các phương thức bổ sung
  getTotalProductQuantity(): number;
  getTop5ProductBestSeller(): Product[];
}

class ProductManager implements IProduct {
  products: Product[] = [];
  create(item: T): boolean {
    //
  }
  findAll(item: T): T[] {
    //
  }
  findByID(id: string) {
    //
  }
  update(item: T): boolean {
    //
  }
  delete(id: E): boolean {
    //
  }
  getTotalProductQuantity(): number {
    //
  }
  getTop5ProductBestSeller(): Product[] {
    //
  }
}

isNaN(Number("fjf"));
