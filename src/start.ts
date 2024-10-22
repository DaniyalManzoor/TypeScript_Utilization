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

//------ OBJECT TYPE -----

let person = {
  name: "Dani",
  age: 24,
};

person.name = "KK";

//can not add
// person.email = "dani@gmail.com";

//Error
// person = "Change";
// person.name = 10;

//------ CUSTOM TYPE ---------
type stringOrNum = number | string;

let month: stringOrNum;

month = "jan";
month = 1;

//------ Interface TYPE -----
interface PersonInterface {
  name: string;
  age: number;
}

let dani: PersonInterface = {
  name: "Dani",
  age: 24,
};

//------ Function TYPE -----

// varaible as function
let greet: Function;

greet = () => {
  console.log("Hello, again");
};

// Function Parameter Type
let sum = (a: number, b: number) => {
  console.log(a + b);
};

sum(1, 20);

// Function Optional Parameter Type
let sub = (a: number, b: number, c?: number) => {
  console.log(a - b);
  console.log(c);
};

sub(10, 20);
sub(10, 20, 40);

// Function Default Parameter Type
let multi = (a: number, b: number, c: number = 1) => {
  console.log(a * b * c);
};

multi(10, 20);
multi(10, 20, 5);

// Function return value Type
let ret = (): number => {
  return 1;
};

// Function Signature

// this function or rather this a variable can hold a function which follows  this signature

// Example 01

let gree: (a: string, b: string) => void;

gree = (name: string, greeting: string) =>
  console.log(`${name} says ${greeting}`);

//Example 02

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action.toLowerCase() === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

//Example 02
let logDetails: (obj: { name: string; age: number }) => void;

type person = { name: string; age: number };

logDetails = (dani: person) => {
  console.log(`${dani.name} is ${dani.age} years old`);
};
