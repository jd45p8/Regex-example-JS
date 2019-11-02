/**
 * Checks out whether the input match with plate characteristics.
 * @param {String} input input to check out.
 */
function isValidPlate(input) {
    const regex = new RegExp(/^[a-zA-Z]{3}\d{3}$/y)
    return regex.test(input)
}