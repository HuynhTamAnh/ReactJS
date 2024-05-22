"use strict";
class Vehicles {
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
let cart = new Vehicles("abc1", "name", 2222, "ggg");
console.log(cart);
