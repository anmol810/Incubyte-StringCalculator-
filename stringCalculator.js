const {
  findSumWithCommaSeperatedValue,
  checkForNegativeNumber,
} = require("./helper");

function add(numbers) {
  if (!numbers.length) return 0;
  // to handle input starting with //
  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.+)\n/);
    delimiter = new RegExp(match[1]);
    numbers = numbers.slice(match[0].length);
  }
  // Split numbers and convert to integers
  const numArray = numbers.split(delimiter).map(Number);
  // Check for negative numbers
  const negativeNumbers = checkForNegativeNumber(numArray);
  if (negativeNumbers.length) {
    throw new Error("negative numbers not allowed");
  }

  return findSumWithCommaSeperatedValue(numArray);
}

module.exports = add;
