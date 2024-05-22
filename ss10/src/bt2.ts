class Student {
  id: string;
  age: number;
  email: string;
  constructor(id: string, age: number, email: string) {
    this.id = id;
    this.age = age;
    this.email = email;
  }
  public getInfo() {
    return `id: ${this.id}, tuổi: ${this.age}, email: ${this.email}`;
  }
}

let student1 = new Student("abc1", 19, "hahah@gmail.com");
let student2 = new Student("abc2", 18, "gggggggg@gmail.com");
const students = [student1, student2];
students.forEach((students, index) => {
  console.log(`Sinh viên ${index + 1}: ${students.getInfo()}`);
});
