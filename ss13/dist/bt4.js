"use strict";
class Circle2 {
    constructor(radius1) {
        this.radius1 = radius1;
    }
    calculatePerimeter() {
        return this.radius1 * 2;
    }
    calculateArea() {
        return this.radius1 * this.radius1;
    }
}
class Rectangle2 {
    constructor(width, heigth) {
        this.width = width;
        this.height = heigth;
    }
    calculatePerimeter() {
        return this.height + this.width;
    }
    calculateArea() {
        return this.height * this.width;
    }
}
