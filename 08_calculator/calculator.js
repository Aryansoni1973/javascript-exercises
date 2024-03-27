// Addition
const add = (a, b) => a + b;

// Subtraction
const subtract = (a, b) => a - b;

// Sum of an array of numbers
const sum = (number) => number.reduce((total, value) => total += value, 0);

// Product of an array of numbers
const multiply = (number) => number.reduce((total, value) => total * value, 1);

// Exponentiation
const power = (a, b) => a ** b;

// Factorial of a number
const factorial = (number) => {
  if (number === 1 || number === 0) return 1;
  return number * factorial(number - 1);
}


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
