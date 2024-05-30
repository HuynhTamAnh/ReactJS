// Viết một hàm decorator function để validates tham số truyền vào hàm. Hàm phải sử dụng hàm validation như tham số. Nếu hàm validation trả về “true” cho tham số được truyền vào, thì hàm decorator sẽ được thực thi, còn nếu ngược lại thì trả về lỗi errors.
type PredicateFn = (a: number) => boolean;

function validate(validateFn: PredicateFn) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    //logic
    //lấy hàm cần xử lý
    let div = descriptor.value; //trước khi chỉnh sửa
    console.log(div);
    descriptor.value = (a: number, b: number) => {
      if (validateFn(b)) {
        return div(a, b);
      } else {
        throw new Error("không thể chia cho 0");
      }
    };
  };
}

//kiểm tra xem có a=0 không thì sai
const checkNumber = (a: number) => {
  return true;
};

// @classDecorator
class Test {
  @validate(checkNumber)
  div(a: number, b: number) {
    return a / b;
  }
  checkAge(_age: number) {
    //return age>0;
    //nếu tuổi nhập vào <0 => tuổi =0
  }
}

let test = new Test();
console.log(test.div(3, 2));
console.log(test.div(3, 2));
