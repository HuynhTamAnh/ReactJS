"use strict";
// Tạo ra interface changeSpeed chứa các phương thức: speedUp, slowDown và stop. Định nghĩa lớp Vehicle implement interface changeSpeed có thuộc tính private speed.
class Vehicle {
    constructor(speed = 0) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 10;
        return this.speed;
    }
    slowDown() {
        this.speed = Math.max(this.speed - 10, 0);
        return this.speed;
    }
    stop() {
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
