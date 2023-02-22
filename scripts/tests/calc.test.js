const addition = require("../tests/calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("Should return 90 for 45 + 45", () => {
            expect(addition(45, 45)).toBe(90);
        })
        test("Should return 76 for 40 + 36", () => {
            expect(addition(40, 36)).toBe(76);
        })
        test("Should return 76.5 for 40.5 + 36", () => {
            expect(addition(40.5, 36)).toBe(76.5);
        })
    });
    describe("Subtraction function", () => {

    });
    describe("Multiplication function", () => {

    });
    describe("Division function", () => {

    });
})