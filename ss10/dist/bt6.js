"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getLength() {
        return this.length;
    }
    //   public setId(id: string) {
    //     this.id = id;
    //   }
    setName(name) {
        this.name = name;
    }
    setLength(length) {
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
