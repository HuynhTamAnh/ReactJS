class Song {
  public readonly id: string;
  private name: string;
  private length: number;
  constructor(id: string, name: string, length: number) {
    this.id = id;
    this.name = name;
    this.length = length;
  }
  public getId() {
    return this.id;
  }
  public getName() {
    return this.name;
  }
  public getLength() {
    return this.length;
  }
  //readonly không thay đổi được
  //   public setId(id: string) {
  //     this.id = id;
  //   }
  public setName(name: string) {
    this.name = name;
  }
  public setLength(length: number) {
    this.length = length;
  }
}
let song1 = new Song("acb1", "a a aa", 35);
console.log(`id: ${song1.getId()}`);
console.log(`name: ${song1.getName()}`);
console.log(`length: ${song1.getLength()}`);
song1.setName("b b bb b");
song1.setLength(56);
console.log(`Updated Name: ${song1.getName()}`);
console.log(`Updated Length: ${song1.getLength()}`);
