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
