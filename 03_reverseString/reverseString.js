const reverseString = function (strings) {
  let string = strings.split("");
  let splittedString = "";
  for (let i = strings.length - 1; i >= 0; i--) {
    splittedString += string[i];
  }
  return splittedString;
};

// Do not edit below this line
module.exports = reverseString;
