const { add } = require("../functions/calc");
const { NotANumberError } = require("../functions/errorHandling");

test("Number addition success ||| Add 2 + 3 as numbers to get 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("Non-number failure ||| Add '2' + '3' as strings, and throwing a NotANumberError", () => {
  expect(() => {
    add("2", "3");
  }).toThrowError(NotANumberError);
});

test("Mixed type failure ||| Adding '2' as string + '3' as number, and throwing a NotANumberError", () => {
  expect(() => {
    add("2", 3);
  }).toThrowError(NotANumberError);
});
