class Employee {
  name: string;
  company: string;
  phone: number;
  constructor(name: string, company: string, phone: number) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }
  public printInfo() {
    console.log(
      `name: ${this.name}, company: ${this.company}, phone: ${this.phone}`
    );
  }
}

let employees = new Employee("anh", "rikkei", 55);
employees.printInfo();
