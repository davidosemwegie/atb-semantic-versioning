/**
 * Author: David Osemwegie
 * Date: October 26th 2020
 */

//Imports
const { processInput } = require('./processInput')

/**
 * @function determinePrecedence() - will return true if the first semver provided to the function has a higher precedence than the second semver provided.
 * @param {string} a - The first semver number
 * @param {string} b - The second semver number
 * 
 * @returns {boolean}
 *  - 1: true 
 *  - 0: false
 *  - 1: same number
 */

const determinePrecedence = (a, b) => {
    //Splitting the Semantic number into an array of integers - .map(value => parseInt(value))
    const _a = processInput(a)
    const _b = processInput(b)

    for (let i = 0; i < 3; i++) {
        if (_a[i] > _b[i]) {
            return 1
        }

        if (_b[i] > _a[i]) {
            return 0
        }
    }

    return -1

}

module.exports = {
    determinePrecedence
}

