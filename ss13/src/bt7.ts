// Định nghĩa lớp Student có các thuộc tính private id và name, tạo một mảng để chứa các thực thể được tạo ra từ lớp student.

// Định nghĩa lớp Classroom có thuộc tính students là mảng các học sinh trong lớp đó. Lớp có phương thức addStudent để thêm học sinh vào trong lớp, phương thức showStudents để in ra danh sách học sinh trong lớp. Phương thức sẽ có tham số truyền vào là id học sinh. Phương thức sẽ thêm học sinh từ trong mảng tất cả học sinh vào lớp học, sau khi thêm thì xóa học sinh đó khỏi mảng tất cả học sinh.

// Tạo 6 thực thể từ lớp Student và thêm vào mảng tất cả học sinh.

// Tạo 2 thực thể từ lớp Classroom và thêm học sinh cho chúng, mỗi lớp học sẽ có 3 học sinh.

class Student {
  private id: string;
  private name: string;
  constructor(_id: string, _name: string) {
    this.id = _id;
    this.name = _name;
  }
}

class Classroom {
  students: string;
  constructor(_students: string) {
    this.students = _students;
  }
  addStudent() {
    //thêm học sinh vào trong lớp
  }
  showStudents() {
    //hiển thị học sinh
  }
}
