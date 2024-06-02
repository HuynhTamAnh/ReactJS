"use strict";
// Xây dựng một ứng dụng TypeScript đơn giản để quản lý thông tin về các sản phẩm. Sản phẩm có các thuộc tính như name, price, description, và inStock.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Tạo một lớp Order để đại diện cho một đơn đặt hàng.
// name: Tên sản phẩm (kiểu string).
// price: Giá sản phẩm (kiểu number).
// description: Mô tả sản phẩm (kiểu string).
// inStock: Số lượng tồn kho (kiểu number).
// Tạo một decorator validateProduct để kiểm tra tính hợp lệ của thông tin sản phẩm
// Decorator này nên kiểm tra các điều kiện sau và ném một lỗi nếu thông tin không hợp lệ:
// Tên sản phẩm (name) không được để trống.
// Giá sản phẩm (price) phải là một số dương.
// Mô tả sản phẩm (description) không được để trống.
// Số lượng tồn kho (inStock) phải là một số không âm.
// Sử dụng decorator validateProduct
// Sử dụng decorator validateProduct trong phương thức khởi tạo (constructor) của lớp Product để đảm bảo rằng thông tin sản phẩm được kiểm tra tính hợp lệ khi một sản phẩm mới được tạo.
// Tạo một số thể hiện của lớp Product với các thông tin sản phẩm hợp lệ và không hợp lệ. Sử dụng try...catch để xử lý lỗi và kiểm tra xem decorator hoạt động đúng cách.
// Yêu cầu về Generic:
// Tạo một lớp ProductGeneric với các thuộc tính tương tự như Product nhưng sử dụng generic cho kiểu dữ liệu của các thuộc tính.
// Sử dụng generic trong decorator:
// Cập nhật decorator validateProduct để sử dụng generic cho việc kiểm tra tính hợp lệ của thông tin sản phẩm.
// Decorator này nên hoạt động với bất kỳ kiểu dữ liệu nào của các thuộc tính.
// Sử dụng lớp ProductGeneric với generic:
// Sử dụng lớp ProductGeneric với generic để tạo các thể hiện của sản phẩm với các kiểu dữ liệu khác nhau.
// Kiểm tra xem decorator hoạt động chính xác với các kiểu dữ liệu khác nhau.
function validateProduct(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            const [name, price, description, inStock] = args;
            // Kiểm tra tính hợp lệ của thông tin sản phẩm
            if (!name || typeof name !== "string") {
                throw new Error("Tên sản phẩm không được để trống và phải là kiểu string.");
            }
            if (typeof price !== "number" || price <= 0) {
                throw new Error("Giá sản phẩm phải là một số dương.");
            }
            if (!description || typeof description !== "string") {
                throw new Error("Mô tả sản phẩm không được để trống và phải là kiểu string.");
            }
            if (typeof inStock !== "number" || inStock < 0) {
                throw new Error("Số lượng tồn kho phải là một số không âm.");
            }
        }
    };
}
let Order = class Order {
    constructor(name, price, description, inStock) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = inStock;
    }
};
Order = __decorate([
    validateProduct,
    __metadata("design:paramtypes", [String, Number, String, Number])
], Order);
