"use strict";
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "dani", age: 24 });
// let docTwo = addUID("dani")
console.log(docOne.age);
const docThree = {
    uid: 1,
    resourceName: "person",
    data: ["Hussain", "Samad", "GM"],
};
const docFour = {
    uid: 2,
    resourceName: "shopingList",
    data: { product1: "Tie" },
};
