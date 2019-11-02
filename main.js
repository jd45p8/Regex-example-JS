window.onload = () => {
    const inputPlate = document.getElementById("inputPlate")
    const inputReal = document.getElementById("inputReal")
    const inputDecimalQuantity = document.getElementById("inputDecimalQuantity")

    inputPlate.oninput = (event) => checkOutInputPlate(inputPlate)
    inputReal.oninput = (event) => checkOutInputReal(inputReal, inputDecimalQuantity)
    inputDecimalQuantity.oninput = (event) => checkOutDecimalQuantity(inputDecimalQuantity, inputReal)
}

/**
 * Checks out whether the ginven plate is valid and updates the input apeareance based on this.
 * @param {HTMLElement} inputPlate element which value is the input to check out.
 */
function checkOutInputPlate(inputPlate) {
    removeFlags(inputPlate)
    if (inputPlate.value.length > 0) {
        let classList = inputPlate.classList
        if (isValidPlate(inputPlate.value)) {
            classList.add("is-valid")
        } else {
            classList.add("is-invalid")
        }
    }
}

/**
 * Checks out whether the given real number is valid and updates the input apeareance based on this.
 * @param {HTMLElement} inputReal element which value is the input to check out.
 * @param {HTMLElement} inputDecimalQuantity element which value is the quantity of decimal that must have a valid real.
 */
function checkOutInputReal(inputReal, inputDecimalQuantity) {
    removeFlags(inputReal)
    if (inputReal.value.length > 0 && inputDecimalQuantity.value >= 0) {
        let classList = inputReal.classList
        if (isValidReal(inputReal.value, inputDecimalQuantity.value)) {
            classList.add("is-valid")
        } else {
            classList.add("is-invalid")
        }
    }
}

/**
 * Checks out whether the given decimal quantity is greater or equal to 0.
 * @param {HTMLElement} inputDecimalQuantity element which value is the quantity of decimal that must have a valid real.
 * @param {HTMLElement} inputReal element which value must match a real number and is going to be check out.
 */
function checkOutDecimalQuantity(inputDecimalQuantity, inputReal) {
    removeFlags(inputDecimalQuantity)
    if (inputDecimalQuantity.value.length > 0) {
        let classList = inputDecimalQuantity.classList
        if (inputDecimalQuantity.value < 0) {
            classList.add("is-invalid")
        }
        checkOutInputReal(inputReal, inputDecimalQuantity)
    }
}

/**
 * Removes is-valid and is-invalid classes from the given element
 * @param {HTMLElement} elem 
 */
function removeFlags(elem) {
    let classList = elem.classList
    if (classList.contains("is-valid")) {
        classList.remove("is-valid")
    } else if (classList.contains("is-invalid")) {
        classList.remove("is-invalid")
    }
}