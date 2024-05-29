"use strict";
let object1 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4],
    },
};
let object2 = {
    a: 5,
    b: {
        c: 6,
        d: [7, 8],
        e: {
            f: 9,
        },
    },
    g: 10,
};
const assignObject = (o1, o2) => {
    return Object.assign(o1, o2);
};
// console.log(assignObject());
