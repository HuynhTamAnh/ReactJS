// Định nghĩa lớp Vehicle có 3 thuộc tính là name, speed và id.Các thuộc tính đều là protected. Lớp có 2 phương thức slowDown để giảm tốc, speedUp để tăng tốc và showSpeed để in ra tốc độ hiện tại.

// Tạo ra 1 lớp Bicycle kế thừa từ lớp Vehicle và có thêm thuộc tính gear là số bánh răng và là private.

// Tạo ra 1 thực thể từ lớp Bicycle, tiến hành tăng hoặc giảm tốc, in lại thông tin và kiểm tra kết quả.
class Vehicle {
  protected name: string;
  protected speed: number;
  protected id: string;
  constructor(name: string, speed: number, id: string) {
    this.name = name;
    this.speed = speed;
    this.id = id;
  }
  slowDown(amount: number) {
    this.speed -= amount;
    console.log(`tốc độ sau khi giảm: ${this.speed}`);
  }
  slowUp(amount: number) {
    this.speed += amount;
    console.log(`tốc độ sau khi tăng: ${this.speed}`);
  }
  showSpeed() {
    console.log("tốc độ hiện tại: ", this.speed);
  }
}

class Bicycle extends Vehicle {
  private gear: number;
  constructor(name: string, speed: number, id: string, gear: number) {
    super(name, speed, id);
    this.gear = gear;
  }
  showGear() {
    console.log(`${this.gear}`);
  }
}

let xeDop: Vehicle = new Bicycle("xe đạp", 100, "xd1", 45);
xeDop.showSpeed();
xeDop.slowDown(5);
xeDop.slowUp(10);
