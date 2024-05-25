"use strict";
// Phân biệt giữa abstract method và method, khi nào thì sử dụng và cho ví dụ minh họa.
class Class {
    constructor(name1) {
        this.name1 = name1;
    }
}
class A extends Class {
    constructor(id, name1) {
        super(name1);
        this.show = () => {
            console.log(this.id);
        };
        this.id = id;
    }
    show1() {
        console.log(this.name1);
    }
}
