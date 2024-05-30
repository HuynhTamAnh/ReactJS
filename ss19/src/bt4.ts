// // Khai báo class XeOTo gồm : tenxe, giaxe, mauxe (enum với các giá trị tùy ý)

// // Tạo hàm class decorator để bổ sung 2 thuộc tính soluotmua(number) và ngaysx(string
// // Định nghĩa enum cho màu xe
// enum MauXe {
//   Den = "Den",
//   Trang = "Trang",
//   Xam = "Xam",
//   Do = "Do",
//   Xanh = "Xanh",
// }

// // Decorator để bổ sung thuộc tính soluotmua và ngaysx
// function ThemThuocTinh(constructor: Function) {
//   constructor.prototype.soluotmua = 0;
//   constructor.prototype.ngaysx = new Date().toISOString();
// }

// @ThemThuocTinh
// class XeOTo {
//   tenxe: string;
//   giaxe: number;
//   mauxe: MauXe;

//   constructor(tenxe: string, giaxe: number, mauxe: MauXe) {
//     this.tenxe = tenxe;
//     this.giaxe = giaxe;
//     this.mauxe = mauxe;
//   }
// }

// // Sử dụng class XeOTo
// const xeA = new XeOTo("Toyota Camry", 30000, MauXe.Trang);
// console.log(xeA.tenxe); // 'Toyota Camry'
// console.log(xeA.giaxe); // 30000
// console.log(xeA.mauxe); // MauXe.Trang
// // console.log(xeA.soluotmua); // 0
// // console.log(xeA.ngaysx); // Ngày sản xuất hiện tại (ví dụ: '2023-05-30T12:34:56.789Z')
