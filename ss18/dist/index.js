"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//tổng quan: decorator là 1 bộ trang trí cho phép can thiệp vào đối tượng trong quá trình chạy(runtime)
// function logger(){
//     return function(target:any){
//         console.log(target);
//     }
// }
//class decorator: Function=(constructor:any)=>{ }
//nếu class decorator trả về 1 class mới thì đối tượng sẽ bị thay thế hoặc bị ghi đè bởi class đó
function wrapper(name) {
    return function logger(target) {
        return class extends target {
            constructor() {
                super(...arguments);
                //lớp không tên
                this.address = "hcm";
                this.id = 9;
            }
        };
    };
}
function logger(target) {
    return class extends target {
        constructor() {
            super(...arguments);
            //lớp không tên
            this.address = "hcm";
            this.id = 9;
        }
    };
}
//method decorator
function follow(target, propertyKey, descriptor) {
    console.log(target); //tham chiếu của hàm
    console.log(propertyKey); //tên hàm
    console.log(descriptor.value); //bộ chỉnh sửa hàm
    descriptor.value = function () {
        console.log(`hé lô`);
        // console.log(`${this.id}`);
    };
}
function beforeSum(target, propertyKey, descriptor) {
    let oldFunction = descriptor.value; //lấy giá trị cũ
    //thay thế hàm sum bằng hàm khác
    descriptor.value = function (...args) {
        console.log(...args);
        return oldFunction(...args);
    };
}
//properties decoration
// function x2(target: any, propertyKey: string) {
//   console.log(target);
//   console.log(propertyKey);
//   Object.defineProperty(target, propertyKey, {
//     get() {
//       return this[propertyKey] * 2;
//     },
//     set(value) {
//       console.log(value);
//       this[propertyKey] = value * 2;
//     },
//   });
//   //reflection: kĩ thuật can thiệp trực tiếp vào đối tượng thông qua tên (TÌM HIỂU THÊM)
// }
//tạo 1 hàm pow return và trả về decorator method
function pow(value) {
    return function (target, propertyKey, descriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        let old = descriptor.value;
        descriptor.value = function (...args) {
            return Math.pow(old(...args), value);
        };
    };
}
//Decorator factories:kĩ thuật truyền tham số cho 1 decorator thông qua khái niệm closure
let Student = class Student {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
    //tính tổng
    sum(a, b) {
        return a + b;
    }
    luyThua(a) {
        return a;
    }
    //sử dụng từ khoá get/set
    get id1() {
        console.log("gọi get");
        return this.id;
    }
    set id1(id) {
        console.log("gọi set");
        this.id;
    }
    get age1() {
        return this.age;
    }
};
__decorate([
    follow,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Student.prototype, "greet", null);
__decorate([
    beforeSum,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Student.prototype, "sum", null);
__decorate([
    pow(2),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Student.prototype, "luyThua", null);
__decorate([
    x3,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Student.prototype, "age1", null);
Student = __decorate([
    logger,
    __metadata("design:paramtypes", [Number, String, Number])
], Student);
function x3(target, propertyKey, descriptor) {
    let old = descriptor.get;
    descriptor.get = () => {
        return 100;
    };
}
let student = new Student(1, "who", 19);
console.log(student);
student.greet();
student.sum(1, 3);
student.id1 = 10;
console.log(student.luyThua(5));
console.log(student.id);
console.log(student.age1);
//class 1 tham số
//property 2 tham số
//method 3 tham số
//các loại decorator
