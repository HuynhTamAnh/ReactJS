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
// Định nghĩa enum cho màu xe
var MauXe;
(function (MauXe) {
    MauXe["Den"] = "Den";
    MauXe["Trang"] = "Trang";
    MauXe["Xam"] = "Xam";
    MauXe["Do"] = "Do";
    MauXe["Xanh"] = "Xanh";
})(MauXe || (MauXe = {}));
// Decorator để bổ sung thuộc tính soluotmua và ngaysx
function ThemThuocTinh(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.soluotmua = 0;
            this.ngaysx = new Date().toISOString();
        }
    };
}
let XeOTo = class XeOTo {
    constructor(tenxe, giaxe, mauxe) {
        this.tenxe = tenxe;
        this.giaxe = giaxe;
        this.mauxe = mauxe;
    }
};
XeOTo = __decorate([
    ThemThuocTinh,
    __metadata("design:paramtypes", [String, Number, String])
], XeOTo);
// Sử dụng class XeOTo
const xeA = new XeOTo("Toyota Camry", 30000, MauXe.Trang);
console.log(xeA.tenxe); // 'Toyota Camry'
console.log(xeA.giaxe); // 30000
console.log(xeA.mauxe); // MauXe.Trang
// console.log(xeA.soluotmua); // 0
// console.log(xeA.ngaysx); // Ngày sản xuất hiện tại (ví dụ: '2023-05-30T12:34:56.789Z')
