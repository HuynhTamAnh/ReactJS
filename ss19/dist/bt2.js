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
function validate(validateFn) {
    return function (target, propertyName, descriptor) {
        //logic
        //lấy hàm cần xử lý
        let div = descriptor.value; //trước khi chỉnh sửa
        console.log(div);
        descriptor.value = (a, b) => {
            if (validateFn(b)) {
                return div(a, b);
            }
            else {
                throw new Error("không thể chia cho 0");
            }
        };
    };
}
//kiểm tra xem có a=0 không thì sai
const checkNumber = (a) => {
    return true;
};
// @classDecorator
class Test {
    div(a, b) {
        return a / b;
    }
    checkAge(_age) {
        //return age>0;
        //nếu tuổi nhập vào <0 => tuổi =0
    }
}
__decorate([
    validate(checkNumber),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Test.prototype, "div", null);
let test = new Test();
console.log(test.div(3, 2));
console.log(test.div(3, 2));
