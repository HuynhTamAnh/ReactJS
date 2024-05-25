"use strict";
//tính trưu tượng- chỉ tập trung vào các khái quát về lớp, phương thức
//ví dụ: con người: chiều cao, cân nặng, nói
//phương thức trừu tượng
//tạo 1 lớp kế thừa và triển khai
class Square {
    constructor(canh) {
        this.chuVi = 0;
        this.dienTich = 0;
        //phải triển khai toàn bộ các phương thức trừu tượng cua interface
        this.tinhChuVi = () => {
            return this.canh * 4;
        };
        this.tinhDienTich = () => {
            return this.canh * this.canh;
        };
        this.getInfo = () => {
            //hé lô
        };
        this.canh = canh;
    }
}
let square1 = new Square(5);
console.log(square1.tinhChuVi());
///////////////////////////////////////////////////////////////////////////////
//abstract class- lớp trừu tượng
class Animals {
    constructor(_species, _sex, _color) {
        this.species = _species;
        this.sex = _sex;
        this.color = _color;
    }
    getInfo() {
        return `Animal [Species: ${this.species}| Sex: ${this.sex} | color: ${this.color}]`;
    }
}
class Dog extends Animals {
    constructor(_species, _sex, _color) {
        super(_species, _sex, _color);
        //triển khai toàn bộ phương thức trựu tượng
        this.makeSound = () => {
            return "đi vệ sinh em ơi";
        };
    }
}
let dogOne = new Dog("trung", true, "yellow");
console.log("trung kêu: ", dogOne.makeSound());
class Cat extends Animals {
    constructor(_species, _sex, _color) {
        super(_species, _sex, _color);
        //triển khai toàn bộ phương thức trựu tượng
        this.makeSound = () => {
            return "đi ăn cơm em ơi";
        };
    }
}
