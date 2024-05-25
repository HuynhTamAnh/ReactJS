"use strict";
// Định nghĩa lớp abstract Job có thuộc tính type, phương thức printType để in ra loại công việc và phương thức abstract calculateSalary để tính lương khi làm công việc đó.
// Định nghĩa lớp PartimeJob và lớp FulltimeJob kế thừa lớp Job. Lớp PartimeJob có thêm thuộc tính workingHour.
// Xây dựng phương thức printType để in ra loại công việc trong lớp cha, phương thức calculateSalary để tính lương công việc. Lương fulltime sẽ mặc định là 10.000.000, lương partime sẽ được tính theo công thức 30.000 * workingHour.
class Job {
    constructor(_type) {
        this.type = _type;
    }
    printType() {
        console.log(this.type);
    }
}
class PartimeJob extends Job {
    constructor(_workingHour) {
        super("Part-time");
        this.workingHour = _workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Full-time");
    }
    calculateSalary() {
        return 10000000;
    }
}
// Test
const partime = new PartimeJob(20);
partime.printType();
console.log(partime.calculateSalary());
const fulltime = new FulltimeJob();
fulltime.printType();
console.log(fulltime.calculateSalary());
