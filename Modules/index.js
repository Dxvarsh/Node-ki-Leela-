let a = 5
let b = 5

// const Math = require("./Math");

// console.log(`Subtraction = ${Math.sub(a, b)}`);
// console.log(`Addition = ${Math.add(a, b)}`);
// console.log(`Division = ${Math.div(a, b)}`);
// console.log(`Multipication = ${Math.mul(a, b)}`);

const { sub, add, div, mul } = require("./Math");
console.log(`sub = ${sub(a, b)}`);
console.log(`add = ${add(a, b)}`);