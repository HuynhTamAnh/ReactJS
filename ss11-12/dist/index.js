"use strict";
class Shape {
    constructor(chuVi, dienTich) {
        this.chuVi = chuVi;
        this.dienTich = dienTich;
    }
    showInfo() {
        console.log("Đây là hình học");
    }
}
//lớp hình vuông kế thừa lớp hình học
class Square extends Shape {
    constructor(canh) {
        super(0, 0);
        this.canh = canh;
    }
    //override là từ khoá chú thích đây là phương thức ghi đè phương thức của lớp cha
    showInfo() {
        console.log("đây là hình vuông");
    }
    calArea() {
        return (this.dienTich = this.canh * this.canh);
    }
}
class Triangle extends Shape {
    constructor(a, b, c) {
        super(0, 0);
        this.a = a;
        this.b = b;
        this.c = c;
    }
    //override là từ khoá chú thích đây là phương thức ghi đè phương thức của lớp cha
    showInfo() {
        console.log("đây là hình tam giác");
    }
}
let shape = new Shape(0, 0);
let square = new Square(5);
let triangle = new Triangle(3, 4, 5);
//gọi phương thức showInfo()
//tính đa hình
shape.showInfo();
square.showInfo();
triangle.showInfo();
//c1
let squareCopy = square;
//c2
// let squareCopy=square as Square;
squareCopy.calArea();
///////////////////////////////////////////////////////////
//chú ý:
//kiểu khai báo:kiểu dữ liệu lúc khai báo biến
//kiểu thực tế: kiểu khởi tạo đối tượng
//muốn gọi phương thức calArea của đối tượng square
