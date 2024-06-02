// Xây dựng một ứng dụng TypeScript đơn giản để quản lý thông tin về các sản phẩm. Sản phẩm có các thuộc tính như name, price, description, và inStock.

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

// Decorator to validate product information
function validateProduct<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      const [name, price, description, inStock] = args;

      // Validate product information
      if (!name || typeof name !== "string") {
        throw new Error(
          "Tên sản phẩm không được để trống và phải là kiểu string."
        );
      }
      if (typeof price !== "number" || price <= 0) {
        throw new Error("Giá sản phẩm phải là một số dương.");
      }
      if (!description || typeof description !== "string") {
        throw new Error(
          "Mô tả sản phẩm không được để trống và phải là kiểu string."
        );
      }
      if (typeof inStock !== "number" || inStock < 0) {
        throw new Error("Số lượng tồn kho phải là một số không âm.");
      }
    }
  };
}

// Product class
@validateProduct
class Product {
  constructor(
    public name: string,
    public price: number,
    public description: string,
    public inStock: number
  ) {}
}

// Generic Product class
@validateProduct
class ProductGeneric<T, U, V, W> {
  constructor(
    public name: T,
    public price: U,
    public description: V,
    public inStock: W
  ) {}
}

// Usage of Product class with valid information
try {
  const validProduct = new Product(
    "Sản phẩm hợp lệ",
    10,
    "Mô tả sản phẩm hợp lệ",
    5
  );
  console.log("Sản phẩm hợp lệ:", validProduct);
} catch (error: any) {
  console.error("Lỗi:", error.message);
}

// Usage of Product class with invalid information
try {
  const invalidProduct = new Product("", -5, "", -2);
  console.log("Sản phẩm không hợp lệ:", invalidProduct);
} catch (error: any) {
  console.error("Lỗi:", error.message);
}

// Usage of ProductGeneric class with different data types
try {
  const genericProduct1 = new ProductGeneric<string, number, string, number>(
    "Sản phẩm generic 1",
    15,
    "Mô tả sản phẩm generic 1",
    8
  );
  console.log("Sản phẩm generic 1:", genericProduct1);

  // This will fail validation because price and inStock are not numbers
  const genericProduct2 = new ProductGeneric<number, string, boolean, string>(
    123,
    "20",
    true,
    "10"
  );
  console.log("Sản phẩm generic 2:", genericProduct2);
} catch (error: any) {
  console.error("Lỗi:", error.message);
}
