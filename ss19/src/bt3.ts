// Khai báo class User gồm 2 thuộc tính username, password

// Định nghĩa hàm property decorator có tên TheoDoiPass với 2 tham sớ là sokytumin và sokytumax. Hàm báo lỗi nếu độ dài pass < sokytumin hoặc >sokytumax.

class User {
  username: string;

  @TheoDoiPass(6, 20)
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

function TheoDoiPass(sokytumin: number, sokytumax: number) {
  return function (target: any, propertyKey: string) {
    let value: string;

    const getter = () => value;

    const setter = (newValue: string) => {
      if (newValue.length < sokytumin) {
        throw new Error(`Mật khẩu phải có ít nhất ${sokytumin} ký tự.`);
      } else if (newValue.length > sokytumax) {
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
