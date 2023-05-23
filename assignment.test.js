const assignment = require('./assignment')


// Expect (multiplication(2, 3)) toBe typeof Number
// Expect (multiplication(2, 3)) toBe 6
// Expect (multiplication(4, ".5")) toBe NaN

describe("Multiplication Tests:", () => {
 test("multiplication(2, 3): product of 2 * 3 should return 6", function () {
    expect(assignment.multiply(2, 3)).toBe(6);
  });
  test("multiplication(2, 3): product of 2 * 3 should return a number", function () {
    expect(typeof assignment.multiply(2, 3)).toBe("number");
  });
  test("multiplication(2, 3): product of 2 * 'a' should return NaN", function () {
    expect(assignment.multiply(2, "a")).toBe(NaN);
  });
})


// Expect (concat of 2 number arrays) to return new array
// Expect (concat of 2 number arrays) to return only odd values
// Expect (concat of 2 number arrays) to return no duplicate values
function testOdd (array) {
  for (let i = 0; i < array.length; i++) {
    (i % 2 === 1 || i % 2 === -1)
  }
}

describe("Concat Tests:", () => {
  test("assignment.concat[i]([1, 2, -3, 11], [15, 1, 2, 1, 3]): should return one array", function () {
    expect(Array.isArray(assignment.concat([1, 2, -3, 11], [15, 1, 2, 1, 3]))).toBe(true);
  });
 test("assignment.concat([1, 2, -3, 11], [15, 1, 2, 1, 3]): should return [-3, 1, 3, 11, 15]", function () {
    expect((assignment.concat([1, 2, -3, 11], [15, 1, 2, 1, 3])) === [ -3, 1, 3, 11, 15 ]).toBe(true);
  });
  test("assignment.concat[i]([1, 2, -3, 11], [15, 1, 2, 1, 3]): should return no duplicate values", function () {
    expect(testOdd(assignment.concat([1, 2, -3, 11], [15, 1, 2, 1, 3]))).toBe(true);
  });
})

// Expect (shopping as a guest) to alert "Continue as guest or create an account"
// Expect (shopping as a guest) to alert "Have an account? Login to save your shopping history."
// Expect (shopping as 12345) to alert "Thank you for shopping!"

describe("Shopping Tests:", () => {
 test("assignment.shopping(guest): to alert 'Continue as guest or create an account'", function () {
    expect(typeof assignment.checkout("guest")).toBe("string");
  });
 test("assignment.shopping(guest): to alert 'Have an account? Login to save your shopping history.'", function () {
    expect(typeof assignment.checkout("guest")).toBe("string");
  });
 test("assignment.shopping(guest): to alert 'Have an account? Login to save your shopping history.'", function () {
    expect(typeof assignment.checkout(12345)).toBe("string");
  });
})