const add = require("./stringCalculator.js");
test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});
test("returns the sum of numbers separated by commas (,)", () => {
  expect(add("1,2,3")).toBe(6);
});
test("returns the sum of numbers having comma (,) and new line (\n)", () => {
  expect(add("1\n,2,3")).toBe(6);
});
test("returns the sum of numbers starting with //", () => {
  expect(add("//;\n1;2")).toBe(3);
});
test("throws error if string has negative number", () => {
  expect(add("1,2,-3")).toThrow("negative numbers not allowed");
});
