// Xây dựng lớp GenericNumber:

// Tạo một lớp generic GenericNumber cho phép thực hiện các phép toán trên một kiểu dữ liệu tùy ý (number, string, hoặc bất kỳ kiểu dữ liệu nào khác)

// Lớp này có hai thuộc tính: zeroValue (giá trị mặc định) và add (phương thức thực hiện phép cộng).

// Sử dụng lớp GenericNumber:

// Sử dụng lớp GenericNumber để thực hiện phép cộng trên số nguyên (number) và chuỗi (string).

// Thiết lập giá trị zeroValue và triển khai phương thức add cho từng kiểu dữ liệu.

// Thực hiện phép cộng và in ra kết quả.

// Sử dụng lớp PhoneBook

// Sử dụng lớp PhoneBook để quản lý danh bạ cho các loại liên hệ khác nhau (Ví dụ: danh bạ bạn bè và danh bạ gia đình).

// Thêm và truy vấn các liên hệ trong danh bạ.

// In ra danh sách các liên hệ trong danh bạ.

// Bổ sung Decorator:

// Thêm một decorator để ghi nhận hoạt động vào lớp GenericNumber.

// Decorator này sẽ ghi lại mọi hoạt động thực hiện trên các đối tượng của lớp GenericNumber, bao gồm loại phép toán, các giá trị đầu vào, và kết quả của phép toán.
// Decorator để ghi nhận hoạt động
function logOperation(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const result = originalMethod.apply(this, args);
    console.log(`Thực hiện phép toán: ${propertyKey}`);
    console.log(`Giá trị đầu vào: ${args}`);
    console.log(`Kết quả: ${result}`);
    return result;
  };
}

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;

  constructor(zeroValue: T, addFunction: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.add = addFunction;
  }

  @logOperation
  performAdd(x: T, y: T): T {
    return this.add(x, y);
  }
}

// Sử dụng lớp GenericNumber cho số nguyên
const numberGeneric = new GenericNumber<number>(0, (x, y) => x + y);
console.log("Kết quả phép cộng số nguyên:", numberGeneric.performAdd(10, 20));

// Sử dụng lớp GenericNumber cho chuỗi
const stringGeneric = new GenericNumber<string>("", (x, y) => x + y);
console.log(
  "Kết quả phép cộng chuỗi:",
  stringGeneric.performAdd("Hello, ", "World!")
);
// Lớp Contact đã có từ trước
class Contact {
  constructor(
    public name: string,
    public email: string,
    public phoneNumber: string
  ) {}
}

// Các Decorator đã có từ trước
function validateContact(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const contact = args[0];
    if (!contact.name || !contact.email || !contact.phoneNumber) {
      throw new Error("Tên, email và số điện thoại không được để trống.");
    }
    return originalMethod.apply(this, args);
  };
}

function logActivity(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Đã thêm liên hệ mới: ${JSON.stringify(args[0])}`);
    return originalMethod.apply(this, args);
  };
}

function encryptData(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const contact = args[0];
    contact.name = btoa(contact.name);
    contact.email = btoa(contact.email);
    contact.phoneNumber = btoa(contact.phoneNumber);
    return originalMethod.apply(this, args);
  };
}

function checkAccess(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    if (!hasAccessRights()) {
      throw new Error("Không có quyền truy cập.");
    }
    return originalMethod.apply(this, args);
  };

  function hasAccessRights(): boolean {
    return true;
  }
}

function extendFunctionality(constructor: Function) {
  constructor.prototype.searchContacts = function (keyword: string): any[] {
    return this.contacts.filter((contact: any) =>
      Object.values(contact).some((value) =>
        atob(value).toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };
}

@extendFunctionality
class PhoneBook<T extends Contact> {
  private contacts: T[] = [];

  @logActivity
  @validateContact
  @encryptData
  @checkAccess
  addContact(contact: T): void {
    this.contacts.push(contact);
  }

  @checkAccess
  getContacts(): T[] {
    return this.contacts.map((contact: any) => {
      return {
        name: atob(contact.name),
        email: atob(contact.email),
        phoneNumber: atob(contact.phoneNumber),
      };
    });
  }
}

// Sử dụng lớp PhoneBook
try {
  const friendsPhoneBook = new PhoneBook<Contact>();
  friendsPhoneBook.addContact(
    new Contact("Alice", "alice@example.com", "123456789")
  );
  friendsPhoneBook.addContact(
    new Contact("Bob", "bob@example.com", "987654321")
  );
  console.log("Danh bạ bạn bè:", friendsPhoneBook.getContacts());

  const familyPhoneBook = new PhoneBook<Contact>();
  familyPhoneBook.addContact(
    new Contact("Charlie", "charlie@example.com", "456123789")
  );
  familyPhoneBook.addContact(
    new Contact("Dave", "dave@example.com", "789123456")
  );
  console.log("Danh bạ gia đình:", familyPhoneBook.getContacts());

  const searchResults = (friendsPhoneBook as any).searchContacts("alice");
  console.log("Kết quả tìm kiếm:", searchResults);
} catch (error: any) {
  console.error("Lỗi:", error.message);
}
