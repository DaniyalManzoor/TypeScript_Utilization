//if not assign value then we must defined type
let anum: number;
let astring: string;
let aboolean: boolean;

//if assign value auto assign value
let fname = "dani";

//generate error
// fname = 24;

//default behavior of JS
let anyVar: any;
anyVar = "dani";
anyVar = 24;

//for multiple type UNION
let year: string | number;

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

let arrtuple: [string, number];
arrtuple = ["dani", 0];
arrtuple = ["", 1];

//generate error
// arrtuple = [""];
// arrtuple = [1];
// arrtuple = [1,""];
