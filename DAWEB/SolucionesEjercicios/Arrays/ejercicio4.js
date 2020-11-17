/** EJERCICIO 4:
 * Implementa una función que, tras pedir un número por pantalla, imprima primero, en una 
    sola cadena, todos los números pares hasta ese número y después, en una cadena diferente, 
    los impares.
 */
function imprimirParesImpares() {
    let cadenaPares = "";
    let cadenaImpares = "";
    let numeroTope = Number(prompt("Introduce un número"));

    //Pares
    for (let i = 0; i <= numeroTope; i=i+2) {
        cadenaPares = cadenaPares + i + " ";
    }
    //Impares
    for (let j = 1; j <= numeroTope; j=j+2) {
        cadenaImpares = cadenaImpares + j + " ";
    }

    console.log("Pares: " + cadenaPares);
    console.log("Impares: " + cadenaImpares);
}