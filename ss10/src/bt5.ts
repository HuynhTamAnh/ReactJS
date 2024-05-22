class Department {
  public readonly id: string;
  private name: string;
  private employee: string[];
  constructor(id: string, name: string, employee: string[]) {
    this.id = id;
    this.name = name;
    this.employee = employee;
  }
  describe() {
    return `id: ${this.id}, name: ${this.name}`;
  }
}
let employeess = ["Alice", "Bob", "Charlie"];
let person1 = new Department("123a", "anh huynh", employeess);
console.log(person1.describe());
