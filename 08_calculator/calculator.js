const add = function (a, b) {
  let sum = 0;
  sum = a + b;
  return sum;
};

const subtract = function (a, b) {
  let difference = a - b;
  return difference
};

const sum = function (array) {
  let sum = 0;

  if (array.length === 0) return sum;
  else {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
};

const multiply = function (arr) {
  let product = 1

  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

const power = function (a, b) {
  let power = a ** b;
  return power;
};

const factorial = function (n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
