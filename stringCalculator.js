function findSumWithCommaSeperatedValue(input) {
  return input.reduce((curr, num) => curr + num, 0);
}
function add(input) {
  if (!input.length) return 0;
  // to handle input starting with //
  if (input.startsWith("//")) {
    input = input.substring(2);
  }
  // to handle input for , seperated input
  const result = input.split(",").map((num) => Number(num));
  // handle input for new line \n
  return findSumWithCommaSeperatedValue(result);
}
console.log(add("//1,2,3"));
module.exports = add;
