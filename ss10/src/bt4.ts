class Vehicles {
  readonly id: string;
  public name: string;
  protected year: number;
  private company: string;
  constructor(id: string, name: string, year: number, company: string) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.company = company;
  }
}
let cart = new Vehicles("abc1", "name", 2222, "ggg");
console.log(cart);
