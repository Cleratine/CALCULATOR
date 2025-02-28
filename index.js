// what is a fn?
// types of functions in js.
function namedFunction() {
  console.log("Hello from named function");
}

const arrowFunction = () => {
  console.log("Hello from arrow function");
};

const anonymousFunction = function () {
  console.log("Hello from anonymous function");
};

const addAnonymous = function (num1, num2) {
  return num1 + num2;
};
// start or begin
// get num1
// get num2
// set sum = num1 + num2
// print sum
// end
function addNamed(num1, num2) {
  return num1 + num2;
}

const addArrow = (num1, num2) => num1 + num2;
const solutionToAdd = addArrow(1, 2);
// index starts from ?

// we have 2+ numbers
const sum = function (numbers) {
  // number of times we want the loop to run
  // types of loops
  // 1. for
  // 2. while
  // 3. do-while
  // get length of numbers
  const length = numbers.length;
  // numbers = [7,2,3,4,5]
  //  0,1,2,3,4
  // lenght = 5
  // start
  // set sum = 0
  // get numbers
  // get length of numbers.
  // set counter = 0
  // count from counter to lenght
  // set sum = numbers[counter] + sum
  // increment counter (counter = counter + 1)
  // end loop
  // print sum;
  // end
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
};
// const sumOfnumbers = sum([1, 2, 3, 3, 3, 4]);
// console.log(sumOfnumbers);

// use a while loop and a do-while to calculate the sum, multiply, power, and factorial.
// handle the case where the exponent is less than 0.
// const multiply = function () {};

// power of a number. x = a^n
const power = function (base, exponent) {
  let power = 1;
  // check the base condition. i.e. when exponent = 0
  if (exponent == 0) {
    return power;
  }
  if (exponent < 0) {
    // interns should handle this.
    return;
  }
  // 2^3 = 2 * 2 * 2 = 8
  // base = 2
  // exponent = 3
  for (let i = 0; i < exponent; i++) {
    power = power * base;
  }

  // first run, power = 1 * 2  = 2
  // second run, power = 2 * 2 = 4
  //  thirdrun, power = 4 * 2 = 8

  return power;
};

// const powerOf2 = power(2, 3);
// console.log(powerOf2);
// factorial of 3 = 3*2*1
const factorial = function (n) {
  let fact = 1;
  if (n == 0 || n == 1) {
    return fact;
  }
  if (n < 0) {
    return "Number n, is negative.";
  }
  for (let i = n; i > 0; i--) {
    fact = fact * i;
  }

  // let n = 3
  // first run; fact = 1*3 = 3;
  // sec run; fact = 3*2 = 6;
  // third run; fact = 6 * 1
  return fact;
};
console.log(factorial(3));
// print 1 to 10
// get the elements we need.

const num1 = document.getElementById("num1");

const num2 = document.getElementById("num2");

const output = document.getElementById("output");

function addNumbers() {
  const num1Value = Number(num1.value);
  const num2Value = Number(num2.value);
  const sum = addNamed(num1Value, num2Value);
  output.innerText = sum;
}

function handleSummation() {
  const nums = document.getElementById("nums").value;
  const numbers = nums.split(","); // 1,2,3,4,5,4
  // convert numbers to Number
  // learn the map method of an array.
  // push, pop
  let cleanedNumbers = [];
  for (let i = 0; i < nums.length; i++) {
    const num = Number(numbers[i]);
    cleanedNumbers.push(num);
  }

  const sum = sum(cleanedNumbers);
  // [1,2,3,4,5,4]
  /// an array
  /// update the dom with the solution.
}
// update the dom for the other tasks
