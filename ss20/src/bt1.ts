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
class Contact {
  constructor(
    public name: string,
    public email: string,
    public phoneNumber: string
  ) {}
}
// Decorator để kiểm tra tính hợp lệ của dữ liệu đầu vào
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

// Decorator để ghi nhận hoạt động
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

// Decorator để mã hóa dữ liệu
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

// Decorator để kiểm tra quyền truy cập
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
    // Implement your access rights check logic here
    return true; // For demonstration purposes, assuming always true
  }
}

// Decorator để mở rộng chức năng
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

try {
  // Quản lý danh bạ bạn bè
  const friendsPhoneBook = new PhoneBook<Contact>();
  friendsPhoneBook.addContact(
    new Contact("Alice", "alice@example.com", "123456789")
  );
  friendsPhoneBook.addContact(
    new Contact("Bob", "bob@example.com", "987654321")
  );
  console.log("Danh bạ bạn bè:", friendsPhoneBook.getContacts());

  // Quản lý danh bạ gia đình
  const familyPhoneBook = new PhoneBook<Contact>();
  familyPhoneBook.addContact(
    new Contact("Charlie", "charlie@example.com", "456123789")
  );
  familyPhoneBook.addContact(
    new Contact("Dave", "dave@example.com", "789123456")
  );
  console.log("Danh bạ gia đình:", familyPhoneBook.getContacts());

  // Sử dụng tính năng tìm kiếm
  const searchResults = (friendsPhoneBook as any).searchContacts("alice");
  console.log("Kết quả tìm kiếm:", searchResults);
} catch (error: any) {
  console.error("Lỗi:", error.message);
}
