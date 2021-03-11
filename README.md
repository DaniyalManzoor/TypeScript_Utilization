# TypeScript

##### Install Globally

```properties
npm i -g TypeScript
```

##### Start TypeScript

```properties
tsc --init
```

##### Transpile

```properties
tsc <app.ts> <main.js>
```

##### Watch

```properties
tsc -watch
```

# Type

### Variable

##### Number Type

```js
let num: number;
```

##### String Type

```js
let astring: string;
```

##### Boolean Type

```js
let aboolean: boolean;
```

##### Any Type

- Default use by JS

```js
let anyVar: any;
anyVar = "dani";
anyVar = 24;
```

##### Union Type

```js
let year: string | number;
year = 2021;
year = "2021";
```

### Array

- let arrnum :number[];
- let arrstring :string[];
- let arrboolean :booleanr[];
- let unionarr (string | number | boolean)[]

##### Array String Type

```js
let arrstring = ["a", "b", "c"];
```

##### Array Number Type

```js
let arrnumber = [0, 1, 2];
```

##### Array Boolean Type

```js
let arrboolean = [false, true, false];
```

##### Array Union Type

```js
let arrMix = [1, "a", true];
```

##### Array Tuple Type

```js
let arrtuple: [string, number];
arrtuple = ["dani", 0];
arrtuple = ["", 1];
```

### Object

```js
let person = {
  name: "Dani",
  age: 24,
};
```

### Custom type

```js
type stringOrNum = number | string;
let month: stringOrNum;
month = "jan";
month = 1;
```

### Interface Type

```js
interface PersonInterface {
  name: string;
  age: number;
}

let person: PersonInterface = {
  name: "Dani",
  age: 24,
};
```

### Function Type

##### Variable as Function Type

```js
let greet: Function;

greet = () => {
  console.log("Hello, again");
};
```

##### Function Parameter Type

```js
let greet: Function;

greet = () => {
  console.log("Hello, again");
};
```

##### Function Optional Parameter Type

```js
let sub = (a: number, b: number, c?: number) => {
  console.log(a - b);
  console.log(c);
};

sub(10, 20);
sub(10, 20, 40);
```

##### Function Default Parameter Type

```js
let multi = (a: number, b: number, c: number = 1) => {
  console.log(a * b * c);
};

multi(10, 20);
multi(10, 20, 5);
```

##### Function return value Type

```js
let ret = (): number => {
  return 0;
};
```

### Function Signature

- this function or rather this a variable can hold a function which follows this signature

##### Return void

```js
let gree: (a: string, b: string) => void;

gree = (name: string, greeting: string) =>
  console.log(`${name} says ${greeting}`);
```

##### Return number

```js
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action.toLowerCase() === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};
```

##### Take object as an argument

```js
let logDetails: (obj: { name: string, age: number }) => void;

type person = { name: string, age: number };

logDetails = (p: person) => {
  console.log(`${p.name} is ${p.age} years old`);
};
```

### DOM Element

##### Anchor

```js
// 1 way
const anchor = document.querySelector("a")!;

// 2 way
if (anchor) {
  console.log(anchor.href);
}
```

##### ELement

```js
// Type of Element
const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// input type
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#toform") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//Events
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

```

### Class

##### Simple class

```js
class Invoice {
  client: string;
  details: string;
  amount: number;
  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
  format() {
    console.log(`${this.client} owns of $${this.amount} for ${this.details}`);
  }
}

const invOne = new Invoice("zohaib", "work on the zohaib website", 250);
const invTwo = new Invoice("madusir", "work on the mudasir website", 300);

// console.log(invOne, invTwo);

// if i want to make a array on invoice
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);
```

##### Access Modifier

```js

class Invoice {
  //keyword public, private readonly
// 1st ways
// readonly client: string;
// private details: string;
// public amount: number;

// constructor(c: string, d: string, a: number) {
  // this.client = c;
// this.details = d;
// this.amount = a;
// }

// 2nd ways
constructor(
  readonly client: string,
private details: string,
public amount: number
) {}

format() {
  console.log(`${this.client} owns of $${this.amount} for ${this.details}`);
}
}

const invOne = new Invoice("nihan", "work on the nihan website", 250);
const invTwo = new Invoice("shahyan", "work on the shahyan website", 300);

// console.log(invOne, invTwo);

// if i want to make a array on invoice
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

```

### Interface

##### Interface with class

```js
interface HasFormatter {
  format(): string;
}

class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes of $${this.amount} for ${this.details}`;
  }
}

class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} is owed of $${this.amount} for ${this.details}`;
  }
}

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Payment("dani", "working on Typescript", 200);
docTwo = new Invoice("zobi", "working on static website", 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs)
```

### Generic

```js
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 1000);
  return { ...obj, uid };
};
let docOne = addUID({ name: "dani", age: 24 });
// let docTwo = addUID("dani")

console.log(docOne.age);

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}
const docThree: Resource<string[]> = {
  uid: 1,
  resourceName: "person",
  data: ["Hussain", "Samad", "GM"],
};
const docFour: Resource<object> = {
  uid: 2,
  resourceName: "shopingList",
  data: { product1: "Tie" },
};
```

### ENUM

Enums are used when we know all possible values at compile time, such as choices on a menu, rounding modes, command line flags, etc. It is not necessary that the set of constants in an enum type stay fixed for all time

```js
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}
interface Resource2<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docEight: Resource2<object> = {
  uid: 2,
  resourceType: ResourceType.BOOK,
  data: { title: "name of the wind" },
};
const docNine: Resource2<string[]> = {
  uid: 4,
  resourceType: ResourceType.AUTHOR,
  data: ["John", "mosh"],
};
```
