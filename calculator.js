let a = prompt("enter a");
let b = prompt("enter b");
let n = prompt("enter n");
a = Number(a);
b = Number(b);
n = Number(n);
const add = function (a, b) {
  return a + b;
};
console.log(add(a, b));
const subtract = function (a, b) {
  return a - b;
};
console.log(subtract(a, b));
const sum = function ([a, b, n]) {
  return a + b + n;
};
console.log(sum([a, b, n]));

const multiply = function ([a, b]) {
  return a * b;
};
console.log(multiply([a, b]));
const power = function () {
  return a ** b;
};
console.log(power(a, b));
const factorial = function (n) {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return undefined;
  } else {
    return n * factorial(--n);
  }
};
console.log(factorial(n));
