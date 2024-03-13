const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  return numbers.reduce((total, value) => {
    return total + value;
  }, 0);
}

const multiply = function(numbers) {
  return numbers.reduce((total, value) => {
    return total * value;
  });
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};
console.log(factorial(10));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
