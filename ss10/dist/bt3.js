"use strict";
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
let employees = new Employee("anh", "rikkei", 55);
employees.printInfo();
