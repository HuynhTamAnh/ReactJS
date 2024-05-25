// Phân biệt abstract class và interface, cho ví dụ minh họa.
// Abstract Class: Sử dụng khi bạn có một nhóm các lớp có liên quan chặt chẽ và muốn chia sẻ mã và logic chung giữa các lớp này. Abstract class có thể chứa cả thuộc tính và phương thức thông thường.
// Interface: Sử dụng khi bạn muốn định nghĩa một tập hợp các phương thức mà có thể được triển khai bởi bất kỳ lớp nào, kể cả khi các lớp này không có quan hệ phân cấp trực tiếp. Interface chỉ chứa khai báo phương thức.
interface Animal {
  name: string;
  sex: boolean;
  act: () => void;
}

class Pig implements Animal {
  name: string = "who";
  sex: boolean = true;
  id: number;
  constructor(id: number) {
    this.id = id;
  }
  act() {
    console.log("hello");
  }
}
let dog: Animal = new Pig(1);
console.log(dog.act());

abstract class Animal1 {
  name: string;
  sex: boolean;
  constructor(name: string, sex: boolean) {
    this.name = name;
    this.sex = sex;
  }
  abstract move: () => void;
}

class Cun extends Animal1 {
  constructor(name: string, sex: boolean) {
    super(name, sex);
  }
  move = () => {
    console.log("nào");
  };
}

let cunNho: Animal1 = new Cun("ai", true);
cunNho.move();
