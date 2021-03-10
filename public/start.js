"use strict";
//if not assign value then we must defined type
let anum;
let astring;
let aboolean;
//if assign value auto assign value
let fname = "dani";
//generate error
// fname = 24;
//default behavior of JS
let anyVar;
anyVar = "dani";
anyVar = 24;
//for multiple type UNION
let year;
year = 2021;
year = "2021";
// //generate error
// year = false;
//----- Array String --------
// let arr:type[];
// -- string[]
// -- Number[]
// -- Boolean[]
let arrstring = ["a", "b", "c"];
let arrnumber = [0, 1, 2];
let arrboolean = [false, true, false];
//UNION ARRAY
// let unionarr (string | number | boolean)[]
let arrMix = [1, "a", true];
// Tuple Array
// index 0 must be string index 1 must be number
let arrtuple;
arrtuple = ["dani", 0];
arrtuple = ["", 1];
//generate error
// arrtuple = [""];
// arrtuple = [1];
// arrtuple = [1,""];
//------ OBJECT TYPE -----
let person = {
    name: "Dani",
    age: 24,
};
person.name = "KK";
let month;
month = "jan";
month = 1;
let dani = {
    name: "Dani",
    age: 24,
};
//------ Function TYPE -----
// varaible as function
let greet;
greet = () => {
    console.log("Hello, again");
};
// Function Parameter Type
let sum = (a, b) => {
    console.log(a + b);
};
sum(1, 20);
// Function Optional Parameter Type
let sub = (a, b, c) => {
    console.log(a - b);
    console.log(c);
};
sub(10, 20);
sub(10, 20, 40);
// Function Default Parameter Type
let multi = (a, b, c = 1) => {
    console.log(a * b * c);
};
multi(10, 20);
multi(10, 20, 5);
// Function return value Type
let ret = () => {
    return 1;
};
// Function Signature
// this function or rather this a variable can hold a function which follows  this signature
// Example 01
let gree;
gree = (name, greeting) => console.log(`${name} says ${greeting}`);
//Example 02
let calc;
calc = (numOne, numTwo, action) => {
    if (action.toLowerCase() === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//Example 02
let logDetails;
logDetails = (dani) => {
    console.log(`${dani.name} is ${dani.age} years old`);
};
