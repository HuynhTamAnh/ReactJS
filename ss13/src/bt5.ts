// Tạo ra interface changeSpeed chứa các phương thức: speedUp, slowDown và stop. Định nghĩa lớp Vehicle implement interface changeSpeed có thuộc tính private speed.

// Xây dựng các phương thức để thay đổi thuộc tính speed. Tạo ra 1 thực thể từ lớp Vehicle và gọi các phương thức, sau mỗi phương thức thì in thông tin để kiểm tra kết quả.
interface changeSpeed {
  speedUp: () => number;
  slowDown: () => number;
  stop: () => number;
}

class Vehicle implements changeSpeed {
  private speed: number;
  constructor(speed: number = 0) {
    this.speed = speed;
  }
  speedUp(): number {
    this.speed += 10;
    return this.speed;
  }

  slowDown(): number {
    this.speed = Math.max(this.speed - 10, 0);
    return this.speed;
  }

  stop(): number {
    this.speed = 0;
    return this.speed;
  }

  printSpeed() {
    console.log(`Current speed: ${this.speed} km/h`);
  }
}

let myCar = new Vehicle(10);
myCar.printSpeed();
myCar.slowDown();
myCar.speedUp();
