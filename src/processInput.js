//Imports
const { validateNumber } = require('./validateNumber')


/**
 * @function processInput() - will convert the string semver number into an array of integer
 * @param {string} x - Semver number
 *
 * @returns {array}
 */

const processInput = (x) => {
    const _x = x.split(".").map(value => validateNumber(value))

    if (_x.length !== 3) {
        throw new Error("Incorrect Format. Input must be 'X.Y.Z'")
    }
    return _x
}

module.exports = {
    processInput
}