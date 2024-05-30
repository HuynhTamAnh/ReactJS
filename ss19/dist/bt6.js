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
class SinhVienThi {
    constructor(diem) {
        this.diem = diem;
    }
    hienketqua() {
        if (this.diem >= 5) {
            return "Đậu";
        }
        else {
            return "Rớt";
        }
    }
}
__decorate([
    KiemTraDiem(0, 10),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SinhVienThi.prototype, "hienketqua", null);
function KiemTraDiem(min, max) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const result = originalMethod.apply(this, args);
            if (this.diem < min || this.diem > max) {
                throw new Error(`Điểm phải nằm trong khoảng từ ${min} đến ${max}`);
            }
            return result;
        };
        return descriptor;
    };
}
// Sử dụng class SinhVienThi
const sinhVien1 = new SinhVienThi(8);
console.log(sinhVien1.hienketqua()); // "Đậu"
const sinhVien2 = new SinhVienThi(3);
console.log(sinhVien2.hienketqua()); // "Rớt"
const sinhVien3 = new SinhVienThi(11); // Sẽ ném ra lỗi
console.log(sinhVien3.hienketqua());
