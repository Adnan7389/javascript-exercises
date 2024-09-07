const convertToCelsius = function (fahrenheit) {
  let celsius = 0;
  return celsius = Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  let fahrenheit = 0;
  return fahrenheit = Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
