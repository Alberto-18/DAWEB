/** EJERCICIO 3:
 * Implementa una función que, tras pedir tres números al usuario separados por el carácter
      &, indique si son los tres iguales, si solo dos son iguales o si son todos diferentes.
 */
function compararNumeros() {
    let numeros = prompt("Introduce tres números separados por \n el caracter & (num1&num2&num3)");
    let arrayNumeros = numeros.split("&");

    if (arrayNumeros.length != 3) {
        console.log("No se ha introducido el número correcto de números");
    } else {
        if (arrayNumeros[0] == arrayNumeros[1] && arrayNumeros[1] == arrayNumeros[2]) {
            console.log("Los tres números son iguales");
        } else if (arrayNumeros[0] != arrayNumeros[1] && arrayNumeros[1] != arrayNumeros[2]
            && arrayNumeros[0] != arrayNumeros[2]) {
            console.log("Los tres números son distintos");
            alert("El número mas alto es " +
                arrayNumeros.reduce((valorAnt,valorAct) => valorAct>valorAnt ? valorAct : valorAnt)
                );
        } else {
            console.log("Dos numeros son iguales");
        }
    }
}