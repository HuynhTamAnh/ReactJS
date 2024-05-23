// Định nghĩa lớp Person có thuộc tính name và phương thức displayInfo để in thông tin. Định nghĩa lớp Student kế thừa lớp Person và có thêm thuộc tính id. Khởi tạo đối tượng từ lớp Student và dùng phương thức displayInfo để in thông tin.
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  displayInfo() {
    console.log(`name: ${this.name}`);
  }
}

class Student extends Person {
  id: string;
  constructor(id: string, name: string) {
    super(name);
    this.id = id;
  }
  override displayInfo(): void {
    console.log(`id: ${this.id}, name: ${this.name}`);
  }
}

let stu = new Student("abc1", "ai do");
stu.displayInfo();
