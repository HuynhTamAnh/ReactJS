// Định nghĩa abstract class Shape có thuộc tính name, phương thức getName và phương thức abstract getSize.

// Định nghĩa lớp Rectangle kế thừa lớp Shape có thêm thuộc tính width và height.

// Xây dựng phương thức getName để lấy ra tên của hình trong lớp cha, phương thức getSize để in ra các kích cỡ của hình trong lớp con.
abstract class Shape {
  name: string;
  constructor(_name: string) {
    this.name = _name;
  }
  getName() {
    console.log(this.name);
  }
  abstract getSize: () => number;
}

class Something extends Shape {
  size: number;
  constructor(_name: string, _size: number) {
    super(_name);
    this.size = _size;
  }
  //triển khai toàn bộ phương thức trựu tượng
  getSize = () => {
    return this.size;
  };
}
let something1 = new Something("ai đó", 5);

something1.getName();
console.log(something1.getSize());
