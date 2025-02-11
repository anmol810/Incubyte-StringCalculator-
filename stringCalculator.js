const { REGEX } = require("./contant");
const { findSumWithCommaSeperatedValue } = require("./helper");
function add(input) {
  if (!input.length) return 0;
  // to handle input starting with //
  if (input.startsWith("//")) {
    input = input.substring(2);
  }
  // to handle input for , seperated input
  const result = input.split(REGEX).map((num) => num.length && Number(num));
  // handle input for new line \n
  return findSumWithCommaSeperatedValue(result);
}
console.log(add("1\n,2,3"));
module.exports = add;
