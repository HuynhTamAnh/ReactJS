"use strict";
// Xây dựng lớp Contact
// Tạo một lớp Contact để đại diện cho một liên hệ trong danh bạ.
// Lớp này có các thuộc tính (properties) như name (tên): string, email (địa chỉ email): string, và phoneNumber (số điện thoại): string
// Xây dựng hàm khởi tạo (constructor) cho lớp Contact để khởi tạo các thuộc tính.
// Xây dựng lớp PhoneBook
// Tạo một lớp PhoneBook để quản lý danh bạ liên hệ.
// Sử dụng kiểu dữ liệu generic để cho phép quản lý danh bạ cho nhiều loại liên hệ khác nhau.
// Lớp PhoneBook có phương thức addContact(contact: T): void để thêm một liên hệ vào danh bạ.
// Lớp PhoneBook có phương thức getContacts(): T[] để trả về danh sách các liên hệ trong danh bạ.
// Đảm bảo rằng danh bạ chỉ chứa các loại liên hệ cụ thể do bạn chỉ định (Ví dụ: Contact, FamilyContact, FriendContact ,…)
// Sử dụng lớp PhoneBook
// Sử dụng lớp PhoneBook để quản lý danh bạ cho các loại liên hệ khác nhau (Ví dụ: danh bạ bạn bè và danh bạ gia đình).
// Thêm và truy vấn các liên hệ trong danh bạ.
// In ra danh sách các liên hệ trong danh bạ.
// Thêm phần Decorator: thêm decorators để mở rộng chức năng của lớp PhoneBook:
// Decorator để kiểm tra dữ liệu đầu vào: decorator này sẽ kiểm tra tính hợp lệ của dữ liệu đầu vào trước khi thêm vào danh bạ. Nó sẽ đảm bảo rằng các trường bắt buộc như name, email, và phoneNumber không được để trống.
// Decorator để ghi nhận hoạt động: decorator này sẽ ghi lại các hoạt động như thêm liên hệ mới vào danh bạ. Điều này có thể hữu ích để theo dõi lịch sử thay đổi của danh bạ.
// Decorator để mã hóa dữ liệu: decorator này sẽ mã hóa thông tin của các liên hệ trong danh bạ, bảo vệ thông tin cá nhân. Điều này giúp đảm bảo rằng thông tin cá nhân không bị tiết lộ khi lưu trữ hoặc truyền qua mạng.
// Decorator để xác thực quyền truy cập: decorator này sẽ kiểm tra quyền truy cập của người dùng trước khi thực hiện thêm hoặc truy vấn liên hệ trong danh bạ. Điều này đảm bảo rằng chỉ những người dùng có quyền được phép có thể thực hiện các thao tác này.
// Decorator để mở rộng chức năng: decorator này sẽ mở rộng chức năng của lớp PhoneBook, bằng cách thêm các tính năng như tìm kiếm, sắp xếp hoặc lọc danh bạ.
class contact {
    constructor(name, email, phoneNumber) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}
class phoneBook {
    constructor() {
        this.addContact = (contact) => { };
    }
}
