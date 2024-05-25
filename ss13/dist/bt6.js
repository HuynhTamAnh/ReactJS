"use strict";
class Pig {
    constructor(id) {
        this.name = "who";
        this.sex = true;
        this.id = id;
    }
    act() {
        console.log("hello");
    }
}
let dog = new Pig(1);
console.log(dog.act());
class Animal1 {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}
class Cun extends Animal1 {
    constructor(name, sex) {
        super(name, sex);
        this.move = () => {
            console.log("nào");
        };
    }
}
let cunNho = new Cun("ai", true);
cunNho.move();
