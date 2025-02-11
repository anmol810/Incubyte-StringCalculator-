const add = require("./stringCalculator.js");
test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});
test("returns the sum of numbers separated by commas", () => {
  expect(add("1,2,3")).toBe(6);
});
test("returns the sum of numbers starting by //", () => {
  expect(add("//1,2,3")).toBe(6);
});
