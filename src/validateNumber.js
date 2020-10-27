/**
 * Author: David Osemwegie
 * Date: October 26th 2020
 * @function validateNumber() - will validate that the number is greater than 0 and has no leading zeros
 * @param {string} x - Part of the semver number
 *
 * @returns {integer}
 */

const validateNumber = (x) => {
    //Check if number has leading 0
    const _x = x.split("")
    if (_x.length > 1 && _x[0] === "0") {
        throw new Error("Input cannot contain leading zeros.")
    }

    if (x < 0) {
        throw new Error("Input cannot contain an integer less than 0.")
    }

    return parseInt(x)
}

module.exports = { validateNumber }