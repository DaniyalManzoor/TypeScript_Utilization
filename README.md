# TypeScript

##### Install Globally

```properties
npm i -g TypeScript
```

##### Start TypeScript

```properties
tsc init
```

##### Transpile

```properties
tsc <app.ts> <main.js>
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

> let arrnum :number[];
> let arrstring :string[];
> let arrboolean :booleanr[];
> let unionarr (string | number | boolean)[]

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
