"use strict";
// Khai báo class User gồm 2 thuộc tính username, password
// Định nghĩa hàm property decorator có tên TheoDoiPass với 2 tham sớ là sokytumin và sokytumax. Hàm báo lỗi nếu độ dài pass < sokytumin hoặc >sokytumax.
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
function TheoDoiPass(sokytumin, sokytumax) {
    //logic
}
