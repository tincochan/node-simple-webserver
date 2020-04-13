const { add } = require("../functions/calc");
const { NotANumberError } = require("../functions/errorHandling");

test("NotANumberFailure ||| Error in calc function should throw a NotANumberError", () => {
  const t = () => {
    return add("2", 3);
  };

  expect(t).toThrowError(NotANumberError);
});

test("Error message is correct", () => {
  const t = () => {
    return add("2", 3);
  };

  expect(t).toThrow("Incoming value is not a number!");
});
