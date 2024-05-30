"use strict";
// Khai báo class User gồm 2 thuộc tính username, password
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Định nghĩa hàm property decorator có tên TheoDoiPass với 2 tham sớ là sokytumin và sokytumax. Hàm báo lỗi nếu độ dài pass < sokytumin hoặc >sokytumax.
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
__decorate([
    TheoDoiPass(6, 20),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
function TheoDoiPass(sokytumin, sokytumax) {
    return function (target, propertyKey) {
        let value;
        const getter = () => value;
        const setter = (newValue) => {
            if (newValue.length < sokytumin) {
                throw new Error(`Mật khẩu phải có ít nhất ${sokytumin} ký tự.`);
            }
            else if (newValue.length > sokytumax) {
                throw new Error(`Mật khẩu không được vượt quá ${sokytumax} ký tự.`);
            }
            value = newValue;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}
