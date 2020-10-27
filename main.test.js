const { determinePrecedence } = require('./main')

const valid_high = '1.2.4'
const valid_low = '0.0.6'
const valid_with_hyphen_low = '1.4.9-beta'
const valid_with_hyphen_high = '6.12.4-alpha'
const invalid_with_3_numbers = '1.2.3.4'
const leading_zeros_1 = "01.2.3"
const leading_zeros_2 = "1.02.3"
const leading_zeros_3 = "1.2.03"
const negative_1 = "-1.2.3"
const negative_2 = "1.-2.3"
const negative_3 = "1.2.-3"
const negative_with_leading_zero = "-04.4.6"

describe("Delete Precedence Function", () => {
    describe("All Valid Inputs", () => {
        it('Should be 1 when input_1 > input_2', () => {
            expect(determinePrecedence(valid_high, valid_low)).toBe(1)
        })
        it("Should be 0 when input_1 < input_2", () => {
            expect(determinePrecedence(valid_low, valid_high)).toBe(0)
        })
        it("Should be 1 when an input_1 has hyphen but is > than input 2", () => {
            expect(determinePrecedence(valid_with_hyphen_high, valid_low)).toBe(1)
        })
        it("Should be 0 when an input_2 has hyphen but is > than input 1", () => {
            expect(determinePrecedence(valid_low, valid_with_hyphen_high)).toBe(0)
        })
        it("Should be 1 when both inputs have hyphen and input 1 > input 2", () => {
            expect(determinePrecedence(valid_with_hyphen_high, valid_with_hyphen_low)).toBe(1)
        })
        it("Should be 0 when both inputs have hyphen and input 1 < input 2", () => {
            expect(determinePrecedence(valid_with_hyphen_low, valid_with_hyphen_high)).toBe(0)
        })
        it("Should return -1 when the inputs are the same", () => {
            expect(determinePrecedence(valid_high, valid_high)).toBe(-1)
        })
    })
    describe("Invalid Inputs: More than 3 numbers", () => {
        it("Should throw an error when input 1 has more than 3 numbers", () => {
            expect(() => determinePrecedence(invalid_with_3_numbers, valid_high)).toThrow()
        })
        it("Should throw an error when input 2 has more than 3 numbers", () => {
            expect(() => determinePrecedence(valid_high, invalid_with_3_numbers)).toThrow()
        })
        it("Should throw an error when both input 1 and input 2 have more than 3 numbers", () => {
            expect(() => determinePrecedence(invalid_with_3_numbers, invalid_with_3_numbers)).toThrow()
        })
    })
    describe("Invalid Input: Leading 0", () => {
        it("Should throw an error when input 1 has a leading 0 in first number", () => {
            expect(() => determinePrecedence(leading_zeros_1, valid_low)).toThrow()
        })
        it("Should throw an error when input 1 has a leading 0 in second number", () => {
            expect(() => determinePrecedence(leading_zeros_2, valid_low)).toThrow()
        })
        it("Should throw an error when input 1 has a leading 0 in third number", () => {
            expect(() => determinePrecedence(leading_zeros_2, valid_low)).toThrow()
        })
        it("Should throw an error when input 2 has a leading 0 in first number", () => {
            expect(() => determinePrecedence(valid_low, leading_zeros_1)).toThrow()
        })
        it("Should throw an error when input 2 has a leading 0 in second number", () => {
            expect(() => determinePrecedence(valid_low, leading_zeros_2)).toThrow()
        })
        it("Should throw an error when input 2 has a leading 0 in third number", () => {
            expect(() => determinePrecedence(valid_low, leading_zeros_3)).toThrow()
        })
    })
    describe("Invalid Input: Negative Number", () => {
        it("Should throw an error when input 1 has a negative integer in first number", () => {
            expect(() => determinePrecedence(negative_1, valid_low)).toThrow()
        })
        it("Should throw an error when input 1 has a negative integer in second number", () => {
            expect(() => determinePrecedence(negative_2, valid_low)).toThrow()
        })
        it("Should throw an error when input 1 has a negative integer in third number", () => {
            expect(() => determinePrecedence(negative_3, valid_low)).toThrow()
        })
        it("Should throw an error when input 1 has a negative number with leading 0", () => {
            expect(() => determinePrecedence(negative_with_leading_zero, valid_low)).toThrow()
        })
        it("Should throw an error when input 2 has a negative integer in first number", () => {
            expect(() => determinePrecedence(valid_low, negative_1)).toThrow()
        })
        it("Should throw an error when input 2 has a negative integer in second number", () => {
            expect(() => determinePrecedence(valid_low, negative_2)).toThrow()
        })
        it("Should throw an error when input 2 has a negative integer in third number", () => {
            expect(() => determinePrecedence(valid_low, negative_3)).toThrow()
        })
        it("Should throw an error when input 2 has a negative number with leading 0", () => {
            expect(() => determinePrecedence(valid_low, negative_with_leading_zero)).toThrow()
        })
    })
})