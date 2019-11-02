/**
 * Checks out whether the given string match a valid real number with the given quantity of decimals
 * @param {String} input input to checkout.
 * @param {number} decimalCount quantity of decimals that should hava a valid real. 
 */
function isValidReal(input, decimalCount) {
    const regex = RegExp(`^[+-]?\\d+(\.\\d{${decimalCount}}){${Math.min(decimalCount, 1)}}?$`)
    return regex.test(input)
}
