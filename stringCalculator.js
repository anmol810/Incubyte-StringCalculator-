function add(input) {
  if (!input.length) return 0;
  // to handle input for , seperated input
  const result = input.split(",").map((num) => Number(num));
  return result.reduce((curr, num) => curr + num, 0);
}
module.exports = add;
