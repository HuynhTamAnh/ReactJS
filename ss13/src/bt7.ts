// Định nghĩa lớp Student có các thuộc tính private id và name, tạo một mảng để chứa các thực thể được tạo ra từ lớp student.

// Định nghĩa lớp Classroom có thuộc tính students là mảng các học sinh trong lớp đó. Lớp có phương thức addStudent để thêm học sinh vào trong lớp, phương thức showStudents để in ra danh sách học sinh trong lớp. Phương thức sẽ có tham số truyền vào là id học sinh. Phương thức sẽ thêm học sinh từ trong mảng tất cả học sinh vào lớp học, sau khi thêm thì xóa học sinh đó khỏi mảng tất cả học sinh.

// Tạo 6 thực thể từ lớp Student và thêm vào mảng tất cả học sinh.

// Tạo 2 thực thể từ lớp Classroom và thêm học sinh cho chúng, mỗi lớp học sẽ có 3 học sinh.

class Student {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }
}

class Classroom {
  private students: Student[];

  constructor() {
    this.students = [];
  }

  addStudentById(studentId: number, allStudents: Student[]) {
    const index = allStudents.findIndex(
      (student) => student.getId() === studentId
    );
    if (index !== -1) {
      this.students.push(allStudents[index]);
      allStudents.splice(index, 1); // Xóa học sinh khỏi mảng tất cả học sinh
    }
  }

  showStudents() {
    this.students.forEach((student) => {
      console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
    });
  }

  removeStudent(id: number) {
    this.students = this.students.filter((student) => student.getId() !== id);
  }

  editStudent(id: number, newName: string) {
    const student = this.students.find((student) => student.getId() === id);
    if (student) {
      (student as any).name = newName; // Ép kiểu để cập nhật tên
    }
  }
}

// Tạo mảng để chứa tất cả học sinh
let allStudents: Student[] = [
  new Student(1, "Kha"),
  new Student(2, "Ha"),
  new Student(3, "TA"),
  new Student(4, "Tran"),
  new Student(5, "Ngoc"),
  new Student(6, "Hao"),
];

// Tạo 2 thực thể từ lớp Classroom
let classroom1 = new Classroom();
let classroom2 = new Classroom();

// Thêm 3 học sinh vào mỗi lớp từ mảng tất cả học sinh
classroom1.addStudentById(1, allStudents);
classroom1.addStudentById(2, allStudents);
classroom1.addStudentById(3, allStudents);

classroom2.addStudentById(4, allStudents);
classroom2.addStudentById(5, allStudents);
classroom2.addStudentById(6, allStudents);

// Hiển thị danh sách học sinh trong mỗi lớp
console.log("Classroom 1 Students:");
classroom1.showStudents();

console.log("Classroom 2 Students:");
classroom2.showStudents();

// Xóa học sinh theo ID
let idToDelete = Number(window.prompt("Nhập ID muốn xóa từ lớp 1:"));
classroom1.removeStudent(idToDelete);
console.log("Sau khi xóa, danh sách lớp 1:");
classroom1.showStudents();

// Sửa tên học sinh theo ID
let idToEdit = Number(window.prompt("Nhập ID muốn sửa trong lớp 2:"));
let newName = window.prompt("Nhập tên mới:") as string;
classroom2.editStudent(idToEdit, newName);
console.log("Sau khi sửa, danh sách lớp 2:");
classroom2.showStudents();
