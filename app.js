"use strict";
//if not assign value then we must defined type
var anum;
var astring;
var aboolean;
//if assign value auto assign value
var fname = "dani";
//generate error
// fname = 24;
//default behavior of JS
var anyVar;
anyVar = "dani";
anyVar = 24;
//for multiple type UNION
var year;
year = 2021;
year = "2021";
// //generate error
// year = false;
//----- Array String --------
// let arr:type[];
// -- string[]
// -- Number[]
// -- Boolean[]
var arrstring = ["a", "b", "c"];
var arrnumber = [0, 1, 2];
var arrboolean = [false, true, false];
//UNION ARRAY
// let unionarr (string | number | boolean)[]
var arrMix = [1, "a", true];
// Tuple Array
// index 0 must be string index 1 must be number
var arrtuple;
arrtuple = ["dani", 0];
arrtuple = ["", 1];
//generate error
// arrtuple = [""];
// arrtuple = [1];
// arrtuple = [1,""];
//------ OBJECT TYPE -----
var person = {
    name: "Dani",
    age: 24,
};
person.name = "KK";
var month;
month = "jan";
month = 1;
var dani = {
    name: "Dani",
    age: 24,
};
