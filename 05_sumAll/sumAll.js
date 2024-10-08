const sumAll = function (num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return "ERROR"
  }
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR"
  }
  if (num1 < 0 || num2 < 0) {
    return "ERROR"
  }
  if (Array.isArray(num1) || Array.isArray(num2)) {
    return "ERROR"
  }

  let sum = 0;
  if (num1 > num2) {
    for (let i = num2; i <= num1; i++) {
      sum += i;
    }
    return sum;
  }

  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
