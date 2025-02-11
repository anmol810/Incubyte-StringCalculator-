function findSumWithCommaSeperatedValue(input) {
  return input.reduce((curr, num) => curr + num, 0);
}
module.exports = { findSumWithCommaSeperatedValue };
