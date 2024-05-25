"use strict";
// Định nghĩa abstract class Shape có thuộc tính name, phương thức getName và phương thức abstract getSize.
// Định nghĩa lớp Rectangle kế thừa lớp Shape có thêm thuộc tính width và height.
// Xây dựng phương thức getName để lấy ra tên của hình trong lớp cha, phương thức getSize để in ra các kích cỡ của hình trong lớp con.
class Shape {
    constructor(_name) {
        this.name = _name;
    }
    getName() {
        console.log(this.name);
    }
}
class Something extends Shape {
    constructor(_name, _size) {
        super(_name);
        //triển khai toàn bộ phương thức trựu tượng
        this.getSize = () => {
            return this.size;
        };
        this.size = _size;
    }
}
let something1 = new Something("ai đó", 5);
something1.getName();
console.log(something1.getSize());
