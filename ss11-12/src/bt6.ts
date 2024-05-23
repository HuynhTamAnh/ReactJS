// Định nghĩa lớp Product có 2 thuộc tính là name và price.Các thuộc tính đều là protected. Lớp có phương thức getDescription để in ra thông tin hiện tại.

// Định nghĩa lớp Electronics kế thừa lớp Product và có thêm thuộc tính private brand. khởi tạo đối tượng từ lớp Electronics và in ra thông tin đối tượng vừa khởi tạo.
class Product {
  protected name: string;
  protected price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  getDescription() {
    console.log(`${this.name} ${this.price}`);
  }
}
class Electronics extends Product {
  private brand: string;
  constructor(brand: string) {
    super("bánh kẹo", 10000);
    this.brand = brand;
  }
  getDescription() {
    super.getDescription();
    console.log(`${this.brand}`);
  }
}

let product: Product = new Electronics("nhà làm");
product.getDescription();
