# Regex-example-JS
La clase RegExp permite crear objetos que representan una expresión regular. Para crearlos se debe definir el patrón. La función test permite validar una cadena de acuerdo al patrón de la expresión regular. Test retorna falso o verdadero según el caso.

## Temas a resolver:
### Validar una matrícula de un vehículo con formato XXXNNN, donde X es una letra y N es un dígito. En total hay seis caracteres.

```
function isValidPlate(input) {
    const regex = new RegExp(/^[a-zA-Z]{3}\d{3}$/y)
    return regex.test(input)
}
```

#### Partes de la expresión regular:
- *^*: encuentra al principio de la cadena la expresión que sigue a continuación.
- *[a-zA-Z]*: encuentra cualquier letra (una), minúscula o mayúscula, alfabeto inglés.
- *{3}*: cuantificador (iguala exactamente 3 veces el patrón que le precede).
- *\d*: encuentra un dígito (0 a 9).
- *$*: encuentra al final de la cadena la expresión previa.

Entonces,
- *[a-zA-Z]{3}* encontrará todas las cadenas de longitud 3 que estén compuestas únicamente por letras mayúsculas o minúsculas.
Ejemplos de cadenas válidas para esta exp. regular: aza, abe, eta, GPA, ePa, aPS, ...
- *\d{3}* encontrará todas las cadenas de longitud 3 que estén compuestas por dígitos (de 0 a 9). Ejemplos: 039, 000, 193, 485, 185, 055, ...



### Validar número real con x decimales. Debe configurar el número de decimales como parámetro de entrada.
```
function isValidReal(input, decimalCount) {
    const regex = new RegExp(`^[+-]?\\d+(\\.\\d{${decimalCount}}){${Math.min(decimalCount, 1)}}?$`)
    return regex.test(input)
}
```

#### Partes de la expresión regular:
- *^:* encuentra al principio de la cadena la expresión a continuación.
- *[+-]?*: encuentra 0 o 1 vez cualquiera de los signos + y -.
- *\d+: encuentra 1 o más dígitos (0-9)*.
- *(.\d{decimalCount}){Math.min(decimalCount, 1)}*: 
- *(.\d{decimalCount})*: encuentra las cadenas que empiezan con “.” y luego tienen exactamente decimalCount dígitos (0-9). decimalCount es definido por el usuario.
- *{Math.min(decimalCount, 1)}*: establece la cantidad de veces que se podrá repetir el patrón que le precede. En este caso, Math.min(decimalCount, 1) permite que el valor sea 0 o 1. Así, cuando la cantidad de decimales sea 0, el obviará la presencia el punto “.” en la cadena. Si la cantidad de decimales es igual o mayor a 1, se verificará la presencia del punto “.”.
- *$*: encuentra al final de la cadena la expresión previa.



#### Ejemplo:
- Si decimalCount es 1, se encuentran cadenas como: 4.3, 46.5, 332.0, 454522.3, etc.
- Si decimalCount es 0, se encuentran cadenas como 3455, 205, 96, 9, 0, etc.

