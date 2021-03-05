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

### Varaible

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

##### Array Typle Type

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

##### Varaible as Function Type

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

##### return void

```js
let gree: (a: string, b: string) => void;

gree = (name: string, greeting: string) =>
  console.log(`${name} says ${greeting}`);
```

##### return number

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

##### take object as an argument

```js
let logDetails: (obj: { name: string, age: number }) => void;

type person = { name: string, age: number };

logDetails = (p: person) => {
  console.log(`${p.name} is ${p.age} years old`);
};
```

### DOM Element

##### anchor

```js
// 1 way
const anchor = document.querySelector("a")!;

// 2 way
if (anchor) {
  console.log(anchor.href);
}
```
