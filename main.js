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

const processInput = (x) => {
    const _x = x.split(".").map(value => validateNumber(value))

    if (_x.length !== 3) {
        throw new Error("Incorrect Format. Input must be 'X.Y.Z'")
    }
    return _x
}

/**
 * @function determinePrecedence() - will return true if the first semver provided to the function has a higher precedence than the second semver provided.
 * @param {string} a - The first semver number
 * @param {string} b - The second semver number
 * 
 * @returns {boolean}
 */

const determinePrecedence = (a, b) => {
    //Splitting the Semantic number into an array of integers - .map(value => parseInt(value))
    const _a = processInput(a)
    const _b = processInput(b)

    /**
     * This for loop checks the index of the numbers
     */
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

