"use strict";
//mảng trong ts
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3]; //generic array
let arr3 = new Array(1, 2, 3);
//function in ra tham số truyền vào chưa xác định kiểu dữ liệu
const printf = (word) => {
    console.log(word);
};
const printGeneric = (word) => {
    console.log(word);
};
printGeneric("ai đó");
printGeneric(1);
printGeneric(null);
////////////////////////////////////////////////////////////
//khởi tạo 1 turple từ 2 tham số truyền vào
const getTurple = (a, b) => {
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
const check = (c, d) => {
    if (typeof c === "number" && typeof d === "number") {
        return Number(c) + Number(d);
    }
    if (typeof c === "string" && typeof d === "string") {
        return String(c) + String(d);
    }
    else {
        console.error("không xác định được");
    }
};
console.log(check(1, 2));
console.log(check("dd", 2));
console.log(check("dd", "ggg"));
class Student {
    constructor(weight, height, name) {
        this.weight = weight;
        this.height = height;
        this.name = name;
    }
}
//tạo 1 hàm thông tin của person
const printInfoPerson = (human) => {
    console.log(human.height, human.weight);
};
let st = new Student(60, 1.7, "ai đó");
//ép kiểu ngầm định: quan hệ kế thừa- ép kiểu từ con lên cha
//ép kiểu tường minh: từ cha về con
let str = st; //cha ép về con
printInfoPerson(st);
class ArrayFakeImpl extends Object {
    constructor() {
        super(...arguments);
        this.data = [];
        this.toString = () => {
            return this.data.toString();
        };
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.pop();
    }
}
//khởi tạo đối tượng
let arrFake = new ArrayFakeImpl();
arrFake.push(1);
arrFake.push(2);
arrFake.push(3);
console.log(arrFake);
console.log([1, 2, 3, 4, 5]);
//////////////////////////////////////////////////////////
//generic với phương thức đặc biệt: static
class Numbers {
    constructor(so) {
        Numbers.so = so;
    }
    static calX2() {
        //có vùng nhớ
        return this.so * 2;
    }
    static sum(a, b) {
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
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class ProductManager {
    constructor() {
        this.products = [];
    }
    create(item) {
        //
    }
    findAll(item) {
        //
    }
    findByID(id) {
        //
    }
    update(item) {
        //
    }
    delete(id) {
        //
    }
    getTotalProductQuantity() {
        //
    }
    getTop5ProductBestSeller() {
        //
    }
}
isNaN(Number("fjf"));
