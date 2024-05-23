"use strict";
// Định nghĩa lớp Employee có các thuộc tính:
// name: tên nhân viên có phạm vi truy cập là public
// company: tên công ty có mức phạm vi truy cập là protected
// phone: số điện thoại có mức phạm vi truy cập cập là private
// printInfo(): phương thức để In ra tất cả thuộc tính
// Định nghĩa lớp con Manager kế thừa từ lớp Employee đã được xây dựng, ngoài các thuộc tính ban đầu của lớp cha thì có thêm thuộc tính teamSize.
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`name: ${this.name}, company: ${this.company}, phone: ${this.phone}`);
    }
}
class Manager extends Employee {
    constructor(teamSize, name, company, phone) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        // super.printInfo();
        console.log(`teamSize:${this.teamSize}, name: ${this.name}, company: ${this.company}` //phone private nên xem hỏng được
        );
    }
}
let employee = new Employee("tam anh", "rikkei", 165);
let employee1 = new Manager(55, "ai do", "rikkei", 1649855);
employee.printInfo();
employee1.printInfo();
