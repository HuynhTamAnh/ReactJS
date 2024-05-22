class Vehicle {
  name: string;
  year: number;
  company: string;
  constructor(name: string, year: number, company: string) {
    this.name = name;
    this.year = year;
    this.company = company;
  }
}
let car = new Vehicle("wow", 3333, "abc");
let car1 = new Vehicle("111", 3333, "ab1c");
console.log(car.name);
console.log(car1.name);
