//tính trưu tượng- chỉ tập trung vào các khái quát về lớp, phương thức
//ví dụ: con người: chiều cao, cân nặng, nói
//phương thức trừu tượng

//interface- giao diện tính năng
interface IShape {
  //khai báo thuộc tính và phương thức trừu tượng
  chuVi: number;
  dienTich: number;
  //phương thức trừu tượng
  tinhChuVi: () => number;
  tinhDienTich: () => number;
}

interface Colorable {}
//tạo 1 lớp kế thừa và triển khai
class Square implements IShape, Colorable {
  chuVi: number = 0;
  dienTich: number = 0;
  canh: number;
  constructor(canh: number) {
    this.canh = canh;
  }
  //phải triển khai toàn bộ các phương thức trừu tượng cua interface
  tinhChuVi = () => {
    return this.canh * 4;
  };
  tinhDienTich = () => {
    return this.canh * this.canh;
  };
  getInfo = () => {
    //hé lô
  };
}

let square1: IShape = new Square(5);
console.log(square1.tinhChuVi());

///////////////////////////////////////////////////////////////////////////////
//abstract class- lớp trừu tượng
abstract class Animals {
  //các phương thức và thuộc tính bình thường
  species: string;
  sex: boolean;
  color: string;
  constructor(_species: string, _sex: boolean, _color: string) {
    this.species = _species;
    this.sex = _sex;
    this.color = _color;
  }
  getInfo() {
    return `Animal [Species: ${this.species}| Sex: ${this.sex} | color: ${this.color}]`;
  }
  //cac phương thức trừu tượng
  abstract makeSound: () => string;
}

class Dog extends Animals {
  constructor(_species: string, _sex: boolean, _color: string) {
    super(_species, _sex, _color);
  }
  //triển khai toàn bộ phương thức trựu tượng
  makeSound = () => {
    return "đi vệ sinh em ơi";
  };
}

let dogOne = new Dog("trung", true, "yellow");
console.log("trung kêu: ", dogOne.makeSound());

class Cat extends Animals {
  constructor(_species: string, _sex: boolean, _color: string) {
    super(_species, _sex, _color);
  }
  //triển khai toàn bộ phương thức trựu tượng
  makeSound = () => {
    return "đi ăn cơm em ơi";
  };
}
