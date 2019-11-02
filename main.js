window.onload = () => {
    const inputPlate = document.getElementById("inputPlate")
    inputPlate.oninput = (event) => {
        removeFlags(inputPlate)
        if (inputPlate.value.length > 0) {            
            let classList =  inputPlate.classList
            if (isValidPlate(inputPlate.value)){
                classList.add("is-valid")
            }else{
                classList.add("is-invalid")
            }
        }
    }

    const inputReal = document.getElementById("inputReal")
    inputReal.oninput = (event) => {
        removeFlags(inputReal)
        if (inputReal.value.length > 0){
            let classList = inputReal.classList
            if (isValidReal(inputReal.value,2)){
                classList.add("is-valid")
            }else{
                classList.add("is-invalid")
            }
        }
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