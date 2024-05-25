// Tạo ra interface Geometry chứa 2 phương thức calculateArea và calculatePerimeter. Định nghĩa lớp Circle có thuộc tính private radius, lớp Rectangle có 2 thuộc tính private width, height. 2 lớp đều implements interface Geometry. Xây dựng 2 phương thức có trong interface cho 2 hàm đó.
interface Geometry {
  calculateArea: () => number;
  calculatePerimeter: () => number;
}
class Circle2 implements Geometry {
  private radius1: number;
  constructor(radius1: number) {
    this.radius1 = radius1;
  }
  calculatePerimeter() {
    return this.radius1 * 2;
  }
  calculateArea() {
    return this.radius1 * this.radius1;
  }
}
class Rectangle2 implements Geometry {
  private width: number;
  private height: number;
  constructor(width: number, heigth: number) {
    this.width = width;
    this.height = heigth;
  }
  calculatePerimeter() {
    return this.height + this.width;
  }
  calculateArea() {
    return this.height * this.width;
  }
}
