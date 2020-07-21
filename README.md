# jam

> Converts any json array or any array to map

## Install

```
$ npm i @oasissoft/jam
```

## Usage

```js
const jam = require("@oasissoft/jam");

const key = "value";
const array = [
  { value: "Ankara", label: "Turkey" },
  { value: "London", label: "United Kingdom" },
  { value: "Paris", label: "France" },
];
const map = jam(array, key);
```

Output

```js
{
   "Ankara":{
      "value":"Ankara",
      "label":"Turkey"
   },
   "London":{
      "value":"London",
      "label":"United Kingdom"
   },
   "Paris":{
      "value":"Paris",
      "label":"France"
   }
}
```

## License

ISC
