function findSumWithCommaSeperatedValue(input) {
  return input.reduce((curr, num) => curr + num, 0);
}
function checkForNegativeNumber(input) {
  const negativeNumbers = input.filter((num) => num < 0);
  return negativeNumbers;
}
module.exports = { findSumWithCommaSeperatedValue, checkForNegativeNumber };
