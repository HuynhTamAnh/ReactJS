"use strict";
// Định nghĩa lớp Person có thuộc tính name và phương thức displayInfo để in thông tin. Định nghĩa lớp Student kế thừa lớp Person và có thêm thuộc tính id. Khởi tạo đối tượng từ lớp Student và dùng phương thức displayInfo để in thông tin.
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`name: ${this.name}`);
    }
}
class Student extends Person {
    constructor(id, name) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`id: ${this.id}, name: ${this.name}`);
    }
}
let stu = new Student("abc1", "ai do");
stu.displayInfo();
