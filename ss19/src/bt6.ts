class SinhVienThi {
  diem: number;

  constructor(diem: number) {
    this.diem = diem;
  }

  @KiemTraDiem(0, 10)
  hienketqua() {
    if (this.diem >= 5) {
      return "Đậu";
    } else {
      return "Rớt";
    }
  }
}

function KiemTraDiem(min: number, max: number) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
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
